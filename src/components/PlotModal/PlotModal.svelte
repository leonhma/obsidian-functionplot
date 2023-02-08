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
    rendererOptions,
  } from "../../common/defaults";
  import type { PlotInputs } from "../../common/types";
  import { hueToHexRGB, renderPlot } from "../../common/utils";
  import type ObsidianFunctionPlot from "../../main";
  import IconWrapper from "../Primitives/IconWrapper.svelte";

  export let options: PlotInputs,
    plugin: ObsidianFunctionPlot,
    submit: (options: PlotInputs) => void;

  const optionsStore: Writable<PlotInputs> = writable(options);

  function* spacedDegrees() {
    // TODO rewrite this, looks too boring
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
    renderPlot(options, plugin);
  });

  onDestroy(unsubscribe);
</script>

<div>
  <div class="fplt-container">
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
            placeholder="X min"
            bind:value={$optionsStore.xAxis.domain.min}
          />
          <NumberInput
            placeholder="X max"
            bind:value={$optionsStore.xAxis.domain.max}
          />
          <NumberInput
            placeholder="Y min"
            bind:value={$optionsStore.yAxis.domain.min}
          />
          <NumberInput
            placeholder="Y max"
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
      Data
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
    <div class="fplt-preview" bind:this={$optionsStore.target} />
    <div class="fplt-sliders">hi</div>
  </div>

  <SettingItem style="position:absolute;bottom:0;left:0;right:0">
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
      Finish
    </Button>
  </SettingItem>
</div>

<style lang="scss">
  .fplt-container {
    display: grid;
    grid-template-columns: initial 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "options preview"
      "data sliders";
  }

  .fplt-options {
    grid-area: options;
  }

  .fplt-data {
    grid-area: data;
  }

  .fplt-preview {
    grid-area: preview;
  }

  .fplt-sliders {
    grid-area: sliders;
  }

  .fplt-fns-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
