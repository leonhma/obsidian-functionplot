<script lang="ts">
  import { toCanvas as toCanvasQR } from "qrcode";
  import { checkVersion } from "../common/utils";
  import { Circle } from "svelte-loading-spinners";

  export let heading: string, message: string, link: string;

  let versionCheck = checkVersion();

  function genQR(node: HTMLCanvasElement) {
    toCanvasQR(node, link, { width: 200 });
  }
</script>

<div class="container">
  <h2>{heading}</h2>
  <p>{message}</p>
  <br />
  <div class="flex content">
    {#await versionCheck}
      <Circle size="2.3" unit="em" color="#7f6df2" duration="1s" />
      <p>Fetching the latest version data...</p>
    {:then value}
      {#if value.type === "is-latest-version"}
        <p>
          Please file a bug report by scanning this QR-Code or opening below
          link.
        </p>
        <canvas use:genQR />
        <a href={link}>or click here</a>
      {:else if value.type === "upgrade-plugin-version"}
        <p>
          You are using an outdated version of this Plugin. Please upgrade to
          the the latest version ({value.version}) to see if this fixes your
          issue.
        </p>
      {/if}
    {:catch}
      <p>
        <em
          >Please make sure you are using the latest version of this plugin.</em
        >
      </p>
      <p>To file a bug report, use this code:</p>
      <canvas use:genQR />
    {/await}
  </div>
</div>

<style lang="scss">
  .flex {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  h2 {
    color: var(--text-normal);
  }
  p {
    color: var(--text-muted);
  }
  a {
    color: var(--text-faint);
  }
</style>
