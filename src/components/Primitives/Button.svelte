<script lang="ts">
  export let cta = false;
</script>

<button on:click class:mod-cta={cta}>
  <slot />
</button>
