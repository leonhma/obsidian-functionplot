<script lang="ts">
  export let min: number | null = -10,
    max: number | null = 10,
    step: number | null = 1,
    value: number;
</script>

<input
  class="slider"
  style="touch-action: none"
  type="range"
  {min}
  {max}
  {step}
  bind:value
/>
