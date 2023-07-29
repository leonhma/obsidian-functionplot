<script lang="ts">
  export let value: number | undefined,
    placeholder = "",
    id = "",
    min: number | null = null,
    max: number | null = null;
</script>

<input {id} {min} {max} type="number" {placeholder} bind:value on:change />

<style>
  input {
    width: 4em;
  }
</style>
