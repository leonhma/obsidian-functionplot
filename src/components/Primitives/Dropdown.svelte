<script lang="ts">
  export let value: string, id: string = '';
</script>

<select id={id} class="dropdown" bind:value>
  <slot />
</select>
