<script lang="ts">
  import type { FunctionOptions } from "../../common/types";

  import Dropdown from "../Primitives/Dropdown.svelte";
  import TextInput from "../Primitives/TextInput.svelte";
  import NumberInput from "../Primitives/NumberInput.svelte";
  import IconWrapper from "../Primitives/IconWrapper.svelte";
  import OptionsFloater from "../Primitives/OptionsFloater.svelte";
  import Switch from "../Primitives/Switch.svelte";

  import MenuDown from "svelte-material-icons/MenuDown.svelte";
  import Delete from "svelte-material-icons/Delete.svelte";

  export let options: FunctionOptions,
    unmount: () => void,
    reloadPreview: () => void;

  let showFloater = false;

  $: {
    options;
    reloadPreview();
    console.log("called reloadPreview from function");
  }
</script>

<div class="functionplot-item-data">
  <Dropdown bind:value={options.fnType}>
    <option value="linear">linear</option>
    <option value="polar">polar</option>
    <!--<option value="points">points</option>-->
    <option value="vector">vector</option>
  </Dropdown>

  {#if options.fnType === "linear"}
    <TextInput placeholder="f(x)=" bind:value={options.fn} />
  {/if}

  {#if options.fnType === "polar"}
    <TextInput placeholder="θ(r)=" bind:value={options.r} />
  {/if}

  {#if options.fnType === "vector"}
    <div class="functionplot-nums-inputs">
      <NumberInput placeholder="Δx" bind:value={options.vector[0]} />
      <NumberInput placeholder="Δy" bind:value={options.vector[1]} />
    </div>
  {/if}

  <input type="color" bind:value={options.color} />

  <div>
    <IconWrapper
      on:click={() => {
        showFloater = true;
      }}
    >
      <MenuDown size="1.4em" />
    </IconWrapper>
    {#if showFloater}
      <OptionsFloater bind:show={showFloater}>
        {#if options.fnType === "vector"}
          <label for="vector-initial">Start point</label>
          <div id="vector-initial" class="functionplot-nums-inputs">
            <NumberInput placeholder="x" bind:value={options.offset[0]} />
            <NumberInput placeholder="y" bind:value={options.offset[1]} />
          </div>
        {/if}
        {#if options.fnType !== "vector"}
          <label for="graph-type">Sampler</label>
          <Dropdown id="graph-type" bind:value={options.graphType}>
            <option value="polyline">polyline</option>
            <option value="scatter">scatter</option>
            {#if options.fnType !== "points"}
              <option value="interval">interval</option>
            {/if}
          </Dropdown>
        {/if}
        {#if ["polyline", "interval"].includes(options.graphType) && options.fnType !== "vector"}
          <label for="graph-closed">Closed</label>
          <Switch id="graph-closed" bind:checked={options.closed} />
        {/if}
        {#if options.fnType !== "vector"}
          <label for="range">Range</label>
          <div class="functionplot-nums-inputs" id="range">
            <NumberInput
              placeholder={options.fnType === "polar" ? "r1" : "x1"}
              bind:value={options.range[0]}
            />
            <NumberInput
              placeholder={options.fnType === "polar" ? "r2" : "x2"}
              bind:value={options.range[1]}
            />
          </div>
        {/if}
        {#if ["scatter", "polyline"].includes(options.graphType)}
          <label for="n-samples">Samples</label>
          <NumberInput id="n-samples" min={0} bind:value={options.nSamples} />
        {/if}
        <label for="skip-tip">Skip tip</label>
        <Switch id="skip-tip" bind:checked={options.skipTip} />
      </OptionsFloater>
    {/if}
  </div>

  <IconWrapper on:click={unmount}>
    <Delete size="1.1em" />
  </IconWrapper>
</div>

<style lang="scss">
  .functionplot-item-data {
    display: inline-grid;
    grid-template-columns: min-content auto repeat(3, min-content);
    column-gap: 1em;
    place-items: center start;
    width: 100%;
    padding: 0.5em;
    &:not(:first-child) {
      border-top: 1px solid var(--background-modifier-border);
    }
  }

  .functionplot-nums-inputs {
    display: flex;
    flex-direction: row;
    column-gap: 0.6em;
    width: min-content;
  }
</style>
