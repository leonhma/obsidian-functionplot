<script lang="ts">
  export let value: string | null,
    placeholder = "",
    id = "",
    width = "initial";
</script>

<input
  type="text"
  {id}
  style="width: {width} "
  spellcheck="false"
  {placeholder}
  bind:value
/>
