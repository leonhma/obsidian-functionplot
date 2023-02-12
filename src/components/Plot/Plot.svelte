<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { PlotInputs } from "../../common/types";
  import { renderPlot } from "../../common/utils";
  import type ObsidianFunctionPlot from "../../main";
  import SettingItem from "../Primitives/SettingItem.svelte";
  import Slider from "../Primitives/Slider.svelte";

  export let optionsStore: Writable<PlotInputs>, plugin: ObsidianFunctionPlot;

  let target: HTMLElement;

  $: {
    console.log(`in reactive block: writing updated scope to all data items`);
    const scope = Object.entries($optionsStore.constants).reduce(
      (acc, [key, val]) => {
        acc[key] = val.value;
        return acc;
      },
      {}
    );
    $optionsStore.data.forEach((datum) => {
      datum.scope = scope;
    });
  }
  $: {
    console.log(`in reactive block: rendering plot`);
    console.log(JSON.parse(JSON.stringify($optionsStore)));
    renderPlot($optionsStore, target, plugin);
  }
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
