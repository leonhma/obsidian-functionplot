<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Writable } from "svelte/store";
  import type { PlotInputs } from "../../common/types";
  import { renderPlot } from "../../common/utils";
  import type ObsidianFunctionPlot from "../../main";
  import SettingItem from "../Primitives/SettingItem.svelte";
  import Slider from "../Primitives/Slider.svelte";

  export let optionsStore: Writable<PlotInputs>, plugin: ObsidianFunctionPlot;

  let target: HTMLElement;

  const unsubscribe = optionsStore.subscribe((options) => {
    renderPlot(options, target, plugin);
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div>
  <div class="fplot-plot" bind:this={target} />
  <div class="fplt-constants">
    {#each Object.entries($optionsStore.constants) as [key, constant]}
      <SettingItem name={key}>
        <Slider
          bind:value={constant.value}
          min={constant.min}
          max={constant.max}
          step={constant.step}
        />
      </SettingItem>
    {/each}
  </div>
</div>
