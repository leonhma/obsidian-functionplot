<script lang="ts">
  export let show = false;

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
        try {
          document.removeEventListener("click", handleClick);
        } catch (e) {
          console.debug(e);
        }
      },
    };
  }
</script>

<div class="modal" use:clickOutside>
  <slot />
</div>

<style lang="scss">
  div {
    position: absolute;
    gap: 0.5em 1em;
    place-items: center start;
    box-shadow: var(--shadow-s);
    width: min-content;
    height: min-content;
    display: grid;
    grid-template-columns: max-content auto;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
