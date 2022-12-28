<script lang="ts">
  import type { FunctionOptions } from "../common/types";

  export let options: FunctionOptions;
</script>

<div class="functionplot-item-function">
  <select bind:value={options.fnType}>
    <option value="linear">linear</option>
    <option value="polar">polar</option>
    <!--<option value="points">points</option>-->
    <option value="vector">vector</option>
  </select>
  {#if options.fnType === "linear"}
    <input type="text" placeholder="f(x)=" bind:value={options.fn} />
  {/if}
  {#if options.fnType === "polar"}
    <input type="text" placeholder="θ(r)" bind:value={options.r} />
  {/if}
  {#if options.fnType === "vector"}
    <div class="functionplot-vector-inputs">
      <input type="text" placeholder="Δx" bind:value={options.vector[0]} />
      <input type="text" placeholder="Δy" bind:value={options.vector[1]} />
    </div>
  {/if}
  
</div>

<style lang="scss">
  .functionplot-item-function {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.5em;
    input {
      width: 30px;
    }
  }

  .functionplot-vector-inputs {
    display: flex;
    flex-direction: row;
    width: min-content;
    input {
      width: 4em;
    }
  }
</style>
