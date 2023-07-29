<script lang="ts">
  export let cta = false,
    disabled = false;
</script>

<button on:click class:mod-cta={cta} {disabled}>
  <slot />
</button>
