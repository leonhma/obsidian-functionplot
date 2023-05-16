<script lang="ts">
  import type { PlotInputs } from "../../common/types";
  import { renderPlot } from "../../common/utils";
  import type ObsidianFunctionPlot from "../../main";
  import Constant from "./Constant.svelte";

  import Replay from "svelte-material-icons/Replay.svelte";
  import Button from "../Primitives/Button.svelte";

  export let options: PlotInputs, plugin: ObsidianFunctionPlot;

  let target: HTMLElement;

  $: {
    const scope = Object.entries(options.constants).reduce(
      (acc, [key, val]) => {
        acc[key] = val.value;
        return acc;
      },
      {}
    );
    options.data.forEach((datum) => {
      datum.scope = scope;
    });
  }
  $: renderPlot(options, target, plugin);
</script>

<div>
  <div class="fplot-plot" bind:this={target} />
  <div class="fplt-plot-options">
    <div class="fplt-constants">
      {#each Object.keys(options.constants) as name}
        <Constant {name} bind:constant={options.constants[name]} showSettings />
      {/each}
    </div>
    <Button>
      <Replay size="1.4em" />
    </Button>
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
