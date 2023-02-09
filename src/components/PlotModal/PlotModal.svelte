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

  function* range(start, end) {
    yield start;
    if (start === end) return;
    yield* range(start + 1, end);
  }

  function* spacedDegrees() {
    let current = 0,
      round = 0;

    while (true) {
      for (const i of range(0, 3 * (2 ^ round))) {
        current += 120 / (2 ^ round);
        if (i % 2 === 0) {
          yield current % 360;
          console.log(current);
        }
      }
      console.log("finished round");
      round++;
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

<div class="fplt-create-modal">
  <div class="fplt-container">
    <div class="fplt-left">
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
    </div>
    <div class="fplt-right">
      <div class="fplt-preview" bind:this={$optionsStore.target} />
      <div class="fplt-sliders">hi</div>
    </div>
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
    grid-template-columns: 26em 1fr;
    gap: 1em;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .fplt-left,
  .fplt-right {
    display: flex;
    flex-direction: column;
    place-items: stretch start;
    gap: 1em;
    min-height: 0;
    max-height: 100%;
    overflow-y: auto;
  }

  .fplt-actionbar {
    padding-top: 1em;
    border-top: 1px solid var(--background-modifier-border);
    height: min-content;
  }

  .fplt-fns-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .fplt-add {
    display: flex;
    flex-direction: row;
    place-items: center;
  }
</style>
