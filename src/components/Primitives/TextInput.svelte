<script lang="ts">
  export let value: string | null,
    placeholder = "",
    id = "";
</script>

<input type="text" {id} spellcheck="false" {placeholder} bind:value />
