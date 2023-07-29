<script lang="ts">
  export let checked: boolean | undefined,
    id = "";
</script>

<div
  {id}
  class="checkbox-container"
  class:is-enabled={checked}
  on:click={() => {
    checked = !checked;
  }}
  on:keydown={(e) => {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
    if (e.key === " ") checked = !checked;
  }}
>
  <input type="checkbox" bind:checked />
</div>
