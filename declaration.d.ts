/* eslint-disable no-unused-vars */
declare module "*.svelte";
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.md" {
  const src: string;
  export default src;
}

declare const BUILD_LINK: string;
declare const BUILD_VERSION: string;
declare const BUILD_DATE: Date;
