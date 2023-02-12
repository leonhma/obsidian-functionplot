<script lang="ts">
  export let value: string | null,
    id = "";
</script>

<select {id} class="dropdown" bind:value>
  <slot />
</select>
