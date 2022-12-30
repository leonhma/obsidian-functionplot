<script lang="ts">
  export let checked: boolean, id: string = '';
</script>

<div
  id={id}
  class="checkbox-container"
  class:is-enabled={checked}
  on:click={() => {
    checked = !checked;
  }}
  on:keydown={(e) => {
    if (e.key === " ") checked = !checked;
  }}
>
  <input type="checkbox" bind:checked />
</div>
