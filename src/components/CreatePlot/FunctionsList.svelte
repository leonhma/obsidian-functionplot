<script lang="ts">
  import { DEFAULT_FUNCTION_OPTIONS } from "../../common/defaults";
  import type { FunctionOptions, PlotOptions } from "../../common/types";
  import Function from "./Function.svelte";
  import Plus from "svelte-material-icons/Plus.svelte";

  export let options: PlotOptions,
    reloadPreview: () => void;

  function newDataItem() {
    console.log("clicked button");
    options.data = [
      ...options.data,
      Object.assign(JSON.parse(JSON.stringify(DEFAULT_FUNCTION_OPTIONS)), {
        id: Math.random().toString(36).substring(2, 9),
      }),
    ];
  }

  $: {
    options; // dependent on a change to data
    reloadPreview();
    console.log("called reloadPreview from flist");
  }
</script>

<div class="functionplot-data-container">
  <div class="functionplot-data-list">
    {#each options.data as options}
      <Function
        {options}
        {reloadPreview}
        unmount={() => {
          options.data = options.data.filter((val) => val.id != options.id);
        }}
      />
    {:else}
      <div class="functionplot-data-empty">No data</div>
    {/each}
  </div>
  <div class="functionplot-data-add">
    <button
      on:click={() => {
        newDataItem();
      }}
    >
      <Plus />
      Add data
    </button>
  </div>
</div>

<style lang="scss">
  .functionplot-data-container {
    width: 100%;
    height: min-content;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .functionplot-data-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1em;
  }

  .functionplot-data-add {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 1em 0;
  }

  .functionplot-data-empty {
    width: 100%;
    height: 2em;
  }
</style>
