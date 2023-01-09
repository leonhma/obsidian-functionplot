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
    DEFAULT_FUNCTION_INPUTS,
    DEFAULT_PLOT_INPUTS,
    rendererOptions,
  } from "../../common/defaults";
  import functionPlot from "function-plot";
  import type { FunctionPlotOptions } from "function-plot/dist/types";
  import type { PlotOptions } from "../../common/types";
  import { hueToHexRGB, renderPlot, sanitize } from "../../common/utils";
  import type ObsidianFunctionPlot from "../../main";
  import IconWrapper from "../Primitives/IconWrapper.svelte";

  export let options: PlotOptions,
    plugin: ObsidianFunctionPlot,
    submit: (options: PlotOptions) => void;

  const optionsStore: Writable<PlotOptions> = writable(options);

  function* spacedDegrees() {
    // TODO refine this
    let i = 0;

    while (true) {
      yield 120 * (i % 3) + (i > 2 ? 60 / Math.floor(i / 3) : 0);
      i++;
    }
  }

  const hues = spacedDegrees();

  function newDataItem() {
    $optionsStore.data = [
      ...$optionsStore.data,
      Object.assign(JSON.parse(JSON.stringify(DEFAULT_FUNCTION_INPUTS)), {
        id: Math.random().toString(36).substring(2, 9),
        color: hueToHexRGB(hues.next().value as number),
      }),
    ];
  }

  const unsubscribe = optionsStore.subscribe((options) => {
    console.log(options);
    renderPlot(options, plugin);
  });

  onDestroy(unsubscribe);
</script>

<div>
  <div class="fplt-container">
    <div class="fplt-options">
      <h1>Create a Plot</h1>
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
            placeholder="X min"
            bind:value={$optionsStore.xAxis.domain[0]}
          />
          <NumberInput
            placeholder="X max"
            bind:value={$optionsStore.xAxis.domain[1]}
          />
          <NumberInput
            placeholder="Y min"
            bind:value={$optionsStore.yAxis.domain[0]}
          />
          <NumberInput
            placeholder="Y max"
            bind:value={$optionsStore.yAxis.domain[1]}
          />
        </SettingItem>
        <SettingItem name="Disable Zoom">
          <Switch bind:checked={$optionsStore.disableZoom} />
        </SettingItem>
        <SettingItem name="Show Grid">
          <Switch bind:checked={$optionsStore.grid} />
        </SettingItem>

        <SettingItem name="Data" />
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
              <div class="fplt-empty"><i>No data</i></div>
            {/each}
          </div>
          <div class="fplt-add">
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
    <div class="fplt-preview" bind:this={$optionsStore.target} />
  </div>

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
      Continue
    </Button>
  </SettingItem>
</div>

<style lang="scss">
  .fplt-container {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }

  .fplt-settings {
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .fplt-fns-container {
    width: 100%;
    height: min-content;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fplt-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1em;
  }

  .fplt-add {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 1em 0;
  }

  .fplt-empty {
    width: 100%;
    height: 2em;
    text-align: center;
    line-height: 2em;
    color: var(--text-faint);
  }
</style>
