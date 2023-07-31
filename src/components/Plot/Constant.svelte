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
  let mousePos = { x: 0, y: 0 };

  function handleClick(e: MouseEvent) {
    showFloater = true;
    const target = (e.target as HTMLElement).closest("div");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    mousePos = { x: rect.right, y: rect.bottom };
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
    <IconWrapper on:click={handleClick}>
      <Settings size="1.4em" />
    </IconWrapper>
    {#if showFloater}
      <OptionsFloater bind:show={showFloater} {mousePos}>
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
    background: var(--color-base-30);
    border-radius: 0.5em;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
</style>
