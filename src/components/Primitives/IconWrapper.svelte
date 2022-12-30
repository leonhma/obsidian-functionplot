<script lang="ts">
  function dispatchClick(el) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(event);
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  tabindex="0"
  on:keydown={(e) => {
    if (e.key === " ") dispatchClick(e.currentTarget);
  }}
  on:click
>
  <slot />
</div>

<style lang="scss">
  div {
    border-radius: 30%;
    width: min-content;
    height: min-content;
    &:focus {
      box-shadow: 0 0 0 2px var(--background-modifier-border-focus);
    }
  }
</style>
