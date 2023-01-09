<script lang="ts">
  export let cta: boolean = false;
</script>

<button on:click class:mod-cta={cta}>
  <slot />
</button>
