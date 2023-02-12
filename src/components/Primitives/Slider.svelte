<script lang="ts">
  export let min: number | null = -10,
    max: number | null = 10,
    step: number | null = 1,
    value: number | null = 1;
</script>

<input class="slider" type="range" {min} {max} {step} {value} />
