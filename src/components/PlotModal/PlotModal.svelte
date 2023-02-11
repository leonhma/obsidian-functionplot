<script lang="ts">
  import TextInput from "../Primitives/TextInput.svelte";
  import NumberInput from "../Primitives/NumberInput.svelte";
  import Switch from "../Primitives/Switch.svelte";
  import Dropdown from "../Primitives/Dropdown.svelte";
  import Button from "../Primitives/Button.svelte";

  import Function from "./Function.svelte";

  import Plus from "svelte-material-icons/Plus.svelte";

  import SettingItem from "../Primitives/SettingItem.svelte";

  import { writable, type Writable } from "svelte/store";
  import { onDestroy } from "svelte";

  import {
    DEFAULT_CONSTANT_INPUTS,
    DEFAULT_FUNCTION_INPUTS,
    rendererOptions,
  } from "../../common/defaults";
  import type { PlotInputs } from "../../common/types";
  import { hueToHexRGB, renderPlot } from "../../common/utils";
  import type ObsidianFunctionPlot from "../../main";
  import IconWrapper from "../Primitives/IconWrapper.svelte";
  import Slider from "../Primitives/Slider.svelte";
  import Plot from "../Plot/Plot.svelte";

  export let options: PlotInputs,
    plugin: ObsidianFunctionPlot,
    submit: (options: PlotInputs) => void;

  const optionsStore: Writable<PlotInputs> = writable(options);

  // color generator
  function* spacedHues() {
    let current = 60,
      round = 0;

    while (true) {
      for (let i = 0; i < 3 * Math.pow(2, round); i++) {
        current = (current + 120 / Math.pow(2, round)) % 360;
        if (round == 0 || i % 2 == 0) {
          yield current;
        }
      }
      round++;
    }
  }

  const hues = spacedHues();

  // create a new function item
  function newDataItem() {
    $optionsStore.data = [
      ...$optionsStore.data,
      Object.assign(JSON.parse(JSON.stringify(DEFAULT_FUNCTION_INPUTS)), {
        id: Math.random().toString(36).substring(2, 9),
        color: hueToHexRGB(hues.next().value as number),
      }),
    ];
  }

  function updateConstants(options: PlotInputs) {
    const constants = options.data.reduce((acc, datum) => {
      const toParse = [],
        ignored = [];

      if (datum.fnType === "linear") {
        toParse.push(datum.fn);
        ignored.push("x");
      } else if (datum.fnType === "polar") {
        toParse.push(datum.r);
        ignored.push("theta");
      } else if (datum.fnType === "vector") {
        toParse.push(datum.vector.x);
        toParse.push(datum.vector.y);
      }

      toParse.forEach((fn: any) => {
        if (!fn) return;
        const matches = fn.match(
          /(?<= |^|[0-9*+\-/()])([A-z]+)(?= |$|[0-9*+\-/)])/gm
        );
        if (matches) {
          matches.forEach((match) => {
            if (!ignored.includes(match)) {
              acc[match] = DEFAULT_CONSTANT_INPUTS;
            }
          });
        }
      });
      return acc;
    }, {});

    options.constants = constants;
  }

  // reactive updates to the preview
  const unsubscribe = optionsStore.subscribe((options) => {
    updateConstants(options);
  });

  onDestroy(unsubscribe);
</script>

<div class="fplt-create-modal">
  <div class="fplt-container">
    <div>
      <div class="fplt-options">
        <div class="fplt-settings">
          <SettingItem name="Title">
            <TextInput bind:value={$optionsStore.title} />
          </SettingItem>
          <SettingItem name="Label X">
            <TextInput bind:value={$optionsStore.xAxis.label} />
          </SettingItem>
          <SettingItem name="Label Y">
            <TextInput bind:value={$optionsStore.yAxis.label} />
          </SettingItem>
          <SettingItem name="Domain">
            <NumberInput
              placeholder="Xmin"
              bind:value={$optionsStore.xAxis.domain.min}
            />
            <NumberInput
              placeholder="Xmax"
              bind:value={$optionsStore.xAxis.domain.max}
            />
            <NumberInput
              placeholder="Ymin"
              bind:value={$optionsStore.yAxis.domain.min}
            />
            <NumberInput
              placeholder="Ymax"
              bind:value={$optionsStore.yAxis.domain.max}
            />
          </SettingItem>
          <SettingItem name="Disable Zoom">
            <Switch bind:checked={$optionsStore.disableZoom} />
          </SettingItem>
          <SettingItem name="Show Grid">
            <Switch bind:checked={$optionsStore.grid} />
          </SettingItem>
        </div>
      </div>
      <div class="fplt-data">
        <p>Data</p>
        <div class="fplt-fns-container">
          <div class="fplt-list">
            {#each $optionsStore.data as datum}
              <Function
                bind:datum
                unmount={() => {
                  $optionsStore.data = $optionsStore.data.filter(
                    (val) => val.id != datum.id
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
    <Plot {optionsStore} {plugin} />
  </div>

  <div class="fplt-actionbar">
    <SettingItem>
      <Dropdown bind:value={$optionsStore.renderer}>
        {#each Object.entries(rendererOptions) as [value, name]}
          <option {value}>{name}</option>
        {/each}
      </Dropdown>
      <Button
        cta={true}
        on:click={() => {
          submit($optionsStore);
        }}
      >
        Done
      </Button>
    </SettingItem>
  </div>
</div>

<style lang="scss">
  .fplt-create-modal {
    display: grid;
    grid-template-rows: 1fr min-content;
    gap: 1em;
    height: 100%;
  }

  .fplt-container {
    min-height: 0;
    display: grid;
    grid-template-columns: 28em 1fr;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .fplt-container > * {
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    place-items: stretch start;
    gap: 1em;
    min-height: 0;
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
    overflow-y: auto;
    scrollbar-gutter: stable;
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
</style>
