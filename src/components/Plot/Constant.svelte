<script lang="ts">
  import type { ConstantInputs } from "../../common/types";
  import Slider from "../Primitives/Slider.svelte";

  import Settings from "svelte-material-icons/Settings.svelte";
  import IconWrapper from "../Primitives/IconWrapper.svelte";
  import OptionsFloater from "../Primitives/OptionsFloater.svelte";
  import NumberInput from "../Primitives/NumberInput.svelte";

  export let constant: ConstantInputs, name: string, showSettings: boolean;
  let showFloater = false;

  // function to update the slider's value to within the set bounds
  function minmax() {
    constant.value = Math.min(
      Math.max(constant.value, constant.min),
      constant.max
    );
  }
</script>

<div>
  <p>{name}</p>
  <Slider
    bind:value={constant.value}
    bind:min={constant.min}
    bind:max={constant.max}
    bind:step={constant.step}
  />
  {#if showSettings}
    <IconWrapper
      on:click={() => {
        showFloater = true;
      }}
    >
      <Settings size="1.4em" />
    </IconWrapper>
    {#if showFloater}
      <OptionsFloater bind:show={showFloater}>
        <label for="constant-min">Min</label>
        <NumberInput
          placeholder="min"
          bind:value={constant.min}
          on:change={minmax}
        />
        <label for="constant-max">Max</label>
        <NumberInput
          placeholder="max"
          bind:value={constant.max}
          on:change={minmax}
        />
        <label for="constant-step">Step</label>
        <NumberInput placeholder="step" bind:value={constant.step} />
      </OptionsFloater>
    {/if}
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
</style>
