<script lang="ts">
  export let value: string, placeholder: string = '', id: string = '';
</script>

<input type="text" id={id} spellcheck="false" placeholder={placeholder} bind:value>
