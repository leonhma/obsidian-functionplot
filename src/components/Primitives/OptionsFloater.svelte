<script lang="ts">
  export let show = false,
    mousePos: { x: number; y: number },
    color: string | undefined = undefined;

  function clickOutside(node: Node) {
    function handleClick(event: MouseEvent) {
      if (!node.contains(event.target as Node)) {
        show = false;
      }
    }

    window.setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 200); // skip the menu-down button's click event

    return {
      destroy() {
        document.removeEventListener("click", handleClick);
      },
    };
  }
</script>

<div
  style="transform: translateX({mousePos.x}px) translateY({mousePos.y}px)"
  id="fplt-floater-modal"
  class="modal"
  use:clickOutside
>
  <div class="fplt-grid-container">
    <slot />
  </div>
  <div
    style={color ? `background-color: ${color}` : ""}
    class="fplt-fn-indicator"
  />
</div>

<style lang="scss">
  .fplt-grid-container {
    gap: 0.5em 1em;
    place-items: center start;
    display: grid;
    grid-template-columns: max-content auto;
  }

  #fplt-floater-modal {
    box-shadow: var(--shadow-s);
    width: min-content;
    height: min-content;
    overflow-y: auto;
    overflow-x: hidden;

    position: fixed;
    margin: 0;
    left: 0;
    top: 0;
    z-index: 9999;
  }

  .fplt-fn-indicator {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
  }
</style>
