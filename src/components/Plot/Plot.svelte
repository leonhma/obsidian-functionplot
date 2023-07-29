<script lang="ts">
  import type { ConstantInputs, PlotInputs } from "../../common/types";
  import type ObsidianFunctionPlot from "../../main";
  import Constant from "./Constant.svelte";

  import Replay from "svelte-material-icons/Replay.svelte";
  import Button from "../Primitives/Button.svelte";
  import { FunctionPlot } from "../../fnplot";
  import IconButton from "@smui/icon-button";

  export let options: PlotInputs,
    plugin: ObsidianFunctionPlot,
    showConstantsSettings = false,
    disableResetViewButton = false;

  let plot = new FunctionPlot(plugin);

  // $: {
  //   const scope = (
  //     Object.entries(options.constants) as [string, ConstantInputs][]
  //   ).reduce((scope_, [key, val]) => {
  //     scope_[key] = val.value;
  //     return scope_;
  //   }, {});
  //   options.data.forEach((datum) => {
  //     datum.scope = scope;
  //   });
  // }
  $: plot.options = options;
</script>

<div>
  <div class="fplt-plot" bind:this={plot.target} />
  <div class="fplt-plot-options">
    <div class="fplt-constants">
      {#each Object.keys(options.constants) as name}
        <Constant
          {name}
          bind:constant={options.constants[name]}
          showSettings={showConstantsSettings}
        />
      {/each}
    </div>
    {#if showConstantsSettings}
      <IconButton
        on:click={() => plot.resetView()}
        disabled={disableResetViewButton}
      >
        <Replay size="1.4em" />
      </IconButton>
    {/if}
  </div>
</div>

<style lang="scss">
  .fplt-plot-options {
    display: grid;
    grid-template-columns: 1fr min-content;
    gap: 1em;
  }
  .fplt-constants {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
</style>
