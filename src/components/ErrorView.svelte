<script lang="ts">
  import { onMount } from "svelte";
  import { toCanvas as toCanvasQR } from "qrcode";

  export let heading: string, message: string, link: string;

  onMount(async () => {
    const QRCanvas = document.getElementById("qr") as HTMLCanvasElement;

    toCanvasQR(QRCanvas, link, { width: 128 });
  });
</script>

<div class="container">
  <h1>{heading}</h1>
  <p>{message}</p>
  <br />
  <p>Please file an issue regarding this bug on GitHub:</p>
  <div class="flex">
    <canvas id="qr" />
    <a href={link}>or click here</a>
  </div>
</div>

<style lang="scss">
  div {
    .flex {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;
    }
    .container {
      border-radius: 0.5em;
    }
  }
  #qr {
    width: 6em;
    height: 6em;
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
