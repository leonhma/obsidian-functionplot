<script lang="ts">
  export let value: string | undefined,
    placeholder = "",
    id = "";
</script>

<input type="text" {id} spellcheck="false" {placeholder} bind:value />

<style>
  input {
    width: inherit;
    max-width: 40ch;
  }
</style>
