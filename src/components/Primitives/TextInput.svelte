<script lang="ts">
  export let value: string, placeholder: string = '';
</script>

<input type="text" spellcheck="false" placeholder={placeholder} bind:value>
