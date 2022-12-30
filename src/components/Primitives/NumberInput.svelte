<script lang="ts">
  export let value: number, placeholder: string = '', id: string = '', min: number = null, max: number = null;
</script>

<input id={id} min={min} max={max} type="number" {placeholder} bind:value />

<style>
  input {
    width: 4em;
  }
</style>
