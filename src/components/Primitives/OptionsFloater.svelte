<script lang="ts">
  import { onMount } from "svelte";

  export let show = false,
    mousePos: { x: number; y: number },
    color: string | undefined;

  let abs: { x: number; y: number } = { x: 0, y: 0 };

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

  onMount(() => {
    const floater = document.querySelector(
      "#fplt-floater-modal"
    ) as HTMLElement;
    const boundingRect = document
      .querySelector(".fplt-container")
      ?.getBoundingClientRect();
    const floaterRect = floater?.getBoundingClientRect();

    if (!floater || !floaterRect || !boundingRect) {
      show = false;
      return;
    }

    const x = Math.min(mousePos.x, boundingRect.right - floaterRect.width);
    const y = Math.min(mousePos.y, boundingRect.bottom - floaterRect.height);

    abs = { x: x - boundingRect.left, y: y - boundingRect.top };
  });

  $: abs = abs;
</script>

<div
  style="transform: translateX({abs.x}px) translateY({abs.y}px)"
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

    position: absolute;
    margin: 0;
    left: 0;
    top: 0;
  }

  .fplt-fn-indicator {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
  }
</style>
