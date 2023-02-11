<script lang="ts">
  import type { FunctionInputs } from "../../common/types";

  import Dropdown from "../Primitives/Dropdown.svelte";
  import TextInput from "../Primitives/TextInput.svelte";
  import NumberInput from "../Primitives/NumberInput.svelte";
  import IconWrapper from "../Primitives/IconWrapper.svelte";
  import OptionsFloater from "../Primitives/OptionsFloater.svelte";
  import Switch from "../Primitives/Switch.svelte";

  import MenuDown from "svelte-material-icons/MenuDown.svelte";
  import Delete from "svelte-material-icons/Delete.svelte";

  export let datum: FunctionInputs, unmount: () => void;

  let showFloater = false;
</script>

<div class="functionplot-item-data">
  <Dropdown bind:value={datum.fnType}>
    <option value="linear">linear</option>
    <option value="polar">polar</option>
    <!--<option value="points">points</option>-->
    <option value="vector">vector</option>
  </Dropdown>

  {#if datum.fnType === "linear"}
    <TextInput placeholder="f(x)=" bind:value={datum.fn} />
  {/if}

  {#if datum.fnType === "polar"}
    <TextInput placeholder="r(theta)=" bind:value={datum.r} />
  {/if}

  {#if datum.fnType === "vector"}
    <div class="functionplot-nums-inputs">
      <NumberInput placeholder="Δx" bind:value={datum.vector.x} />
      <NumberInput placeholder="Δy" bind:value={datum.vector.y} />
    </div>
  {/if}

  <input type="color" bind:value={datum.color} />

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
        {#if datum.fnType === "vector"}
          <label for="vector-initial">Start point</label>
          <div id="vector-initial" class="functionplot-nums-inputs">
            <NumberInput placeholder="x" bind:value={datum.offset.x} />
            <NumberInput placeholder="y" bind:value={datum.offset.y} />
          </div>
        {/if}
        {#if datum.fnType !== "vector"}
          <label for="graph-type">Sampler</label>
          <Dropdown id="graph-type" bind:value={datum.graphType}>
            <option value="polyline">polyline</option>
            <option value="scatter">scatter</option>
            {#if !["polar", "vector"].includes(datum.fnType)}
              <option value="interval">interval</option>
            {/if}
          </Dropdown>
        {/if}
        {#if ["polyline", "interval"].includes(datum.graphType) && datum.fnType !== "vector"}
          <label for="graph-closed">Closed</label>
          <Switch id="graph-closed" bind:checked={datum.closed} />
        {/if}
        {#if datum.fnType !== "vector"}
          <label for="range">Range</label>
          <div class="functionplot-nums-inputs" id="range">
            <NumberInput
              placeholder={datum.fnType === "polar" ? "r1" : "x1"}
              bind:value={datum.range.min}
            />
            <NumberInput
              placeholder={datum.fnType === "polar" ? "r2" : "x2"}
              bind:value={datum.range.max}
            />
          </div>
        {/if}
        {#if ["scatter", "polyline"].includes(datum.graphType) && datum.fnType !== "vector"}
          <label for="n-samples">Samples</label>
          <NumberInput id="n-samples" min={0} bind:value={datum.nSamples} />
        {/if}
        {#if datum.fnType !== "vector"}
          <label for="skip-tip">Skip tip</label>
          <Switch id="skip-tip" bind:checked={datum.skipTip} />
        {/if}
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
