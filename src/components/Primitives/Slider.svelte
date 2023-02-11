<script lang="ts">
  export let min: number = -10,
    max: number = 10,
    step: number = 1,
    value: number = 1;
</script>

<input class="slider" type="range" {min} {max} {step} {value}>
