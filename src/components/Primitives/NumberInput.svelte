<script lang="ts">
  export let value: number | null,
    placeholder = "",
    id = "",
    min: number | null = null,
    max: number | null = null;
</script>

<input {id} {min} {max} type="number" {placeholder} bind:value />

<style>
  input {
    width: 4em;
  }
</style>
