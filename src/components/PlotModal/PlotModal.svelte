<script lang="ts">
  import TextInput from "../Primitives/TextInput.svelte";
  import NumberInput from "../Primitives/NumberInput.svelte";
  import Switch from "../Primitives/Switch.svelte";
  import Dropdown from "../Primitives/Dropdown.svelte";
  import Button from "../Primitives/Button.svelte";

  import Function from "./Function.svelte";

  import Plus from "svelte-material-icons/Plus.svelte";

  import SettingItem from "../Primitives/SettingItem.svelte";

  import {
    DEFAULT_CONSTANT_INPUTS,
    DEFAULT_FUNCTION_INPUTS,
    RENDERER_OPTIONS,
  } from "../../common/defaults";
  import type {
    ConstantInputs,
    FunctionInputs,
    PlotInputs,
    rendererType,
  } from "../../common/types";
  import { hueToHexRGB } from "../../common/utils";
  import type ObsidianFunctionPlot from "../../main";
  import IconWrapper from "../Primitives/IconWrapper.svelte";
  import Plot from "../Plot/Plot.svelte";

  export let options: PlotInputs,
    plugin: ObsidianFunctionPlot,
    /* eslint-disable-next-line no-unused-vars */
    submit: (inputs: PlotInputs, renderer: rendererType) => void;

  let renderer: rendererType = plugin.settings.defaultRenderer;

  // color generator
  function* spacedHues() {
    let current = 60,
      round = 0;

    while (true) {
      for (let i = 0; i < 3 * Math.pow(2, round); i++) {
        current = (current + 120 / Math.pow(2, round)) % 360;
        if (round === 0 || i % 2 === 0) {
          yield current;
        }
      }
      round++;
    }
  }

  const hues = spacedHues();

  // create a new function item
  function newDataItem() {
    options.data = [
      ...options.data,
      Object.assign(JSON.parse(JSON.stringify(DEFAULT_FUNCTION_INPUTS)), {
        id: Math.random().toString(36).substring(2, 9),
        color: hueToHexRGB(hues.next().value as number),
      }) as FunctionInputs,
    ];
  }

  $: {
    const constants = options.data.reduce((acc: string[], datum) => {
      const toParse: string[] = [],
        ignored: string[] = [];

      if (datum.fnType === "linear") {
        toParse.push(datum.fn ?? "");
        ignored.push("x");
      } else if (datum.fnType === "polar") {
        toParse.push(datum.r ?? "");
        ignored.push("theta");
      } // vector doesn't support constants currently

      toParse.forEach((fn: string) => {
        if (!fn) return;
        const matches = fn.match(
          /(?<= |^|[0-9*+\-/()])([A-z]+)(?= |$|[0-9*+\-/)])/gm
        );
        if (matches) {
          matches.forEach((match) => {
            if (!ignored.includes(match)) {
              acc.push(match);
            }
          });
        }
      });
      return acc;
    }, []);

    if (Object.keys(options.constants) !== constants) {
      for (const constant in options.constants) {
        if (!constants.includes(constant)) {
          delete options.constants[constant];
        }
      }

      for (const constant of constants) {
        if (!options.constants[constant]) {
          options.constants[constant] = JSON.parse(
            JSON.stringify(DEFAULT_CONSTANT_INPUTS)
          ) as ConstantInputs; //  deepcopy
        }
      }
    }
  }
</script>

<div class="fplt-create-modal">
  <div class="fplt-container">
    <div class="fplt-options-wrapper">
      <div class="fplt-options">
        <div class="fplt-settings">
          <SettingItem name="Title">
            <TextInput bind:value={options.title} />
          </SettingItem>
          <SettingItem name="Label X">
            <TextInput bind:value={options.xAxis.label} />
          </SettingItem>
          <SettingItem name="Label Y">
            <TextInput bind:value={options.yAxis.label} />
          </SettingItem>
          <SettingItem name="Domain">
            <NumberInput
              placeholder="Xmin"
              bind:value={options.xAxis.domain.min}
            />
            <NumberInput
              placeholder="Xmax"
              bind:value={options.xAxis.domain.max}
            />
            <NumberInput
              placeholder="Ymin"
              bind:value={options.yAxis.domain.min}
            />
            <NumberInput
              placeholder="Ymax"
              bind:value={options.yAxis.domain.max}
            />
          </SettingItem>
          <SettingItem name="Disable Zoom">
            <Switch bind:checked={options.disableZoom} />
          </SettingItem>
          <SettingItem name="Show Legends">
            <Switch bind:checked={options.legends} />
          </SettingItem>
          <SettingItem name="Show Grid">
            <Switch bind:checked={options.grid} />
          </SettingItem>
        </div>
      </div>
      <div class="fplt-data">
        <p>Data</p>
        <div class="fplt-fns-container">
          <div class="fplt-list">
            {#each options.data as datum}
              <Function
                legends={options.legends}
                bind:datum
                unmount={() => {
                  options.data = options.data.filter(
                    (val) => val.id !== datum.id
                  );
                }}
              />
            {:else}
              <div class="fplt-fns-empty"><i>No data</i></div>
            {/each}
          </div>
          <div class="fplt-fns-add">
            <Button on:click={newDataItem}>
              <IconWrapper style="margin-right: 0.5em">
                <Plus />
              </IconWrapper>
              Add data
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="fplt-plot-wrapper">
      <Plot {options} {plugin} showConstantsSettings />
    </div>
  </div>

  <div class="fplt-actionbar">
    <SettingItem>
      <Dropdown bind:value={renderer}>
        {#each Object.entries(RENDERER_OPTIONS) as [value, name]}
          <option {value}>{name}</option>
        {/each}
      </Dropdown>
      <Button
        cta={true}
        on:click={() => {
          submit(options, renderer);
        }}
      >
        Done
      </Button>
    </SettingItem>
  </div>
</div>

<style lang="scss">
  .fplt-plot-wrapper {
    min-width: 25em;
    height: min-content;
    flex: 1;
  }

  .fplt-options-wrapper {
    max-width: 30em;
    min-width: 25em;
    padding: 3px;
  }
  .fplt-create-modal {
    display: grid;
    grid-template-rows: 1fr min-content;
    gap: 1em;
    height: 100%;
  }

  .fplt-container {
    min-height: 0;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 1em;
    overflow: auto;
  }

  .fplt-actionbar {
    padding-top: 1em;
    border-top: 1px solid var(--background-modifier-border);
    height: min-content;
  }

  .fplt-data {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .fplt-fns-container {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    gap: 1em;
    max-height: 100%;
    padding-bottom: 0.5em;
  }

  .fplt-fns-empty {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
  }

  .fplt-fns-add {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (max-width: 1100px) {
    .fplt-container {
      flex-direction: column-reverse;
    }
    .fplt-options-wrapper {
      max-width: none;
    }
  }
</style>
