<script lang="ts">
  export let name: string = "",
    description: string = "",
    style = "";
</script>

<div class="setting-item" {style}>
  <div class="setting-item-info">
    <div class="setting-item-name">{name}</div>
    <div class="setting-item-description">{description}</div>
  </div>
  <div class="setting-item-control">
    <slot />
  </div>
</div>

<style>
  .setting-item {
    width: 100%;
  }
</style>
