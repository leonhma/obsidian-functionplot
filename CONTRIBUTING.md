# Contributing

Contributions are always welcome! We appreciate every help with this project, be it just submitting issues or feature requests, picking one up and working on it, making edits to the wiki or opening a pull request with a new feature or a bugfix, as it helps grow the project.

TL;DR:

-   The `minAppVersion` should be kept up-to-date

## Rules

Because obsidian keeps an index of versions of the plugin and their respective minimum version requirements for obsidian itself, the `minAppVersion` field in `manifest.json` and the version of the dependency `obsidian` in `package.json` should be kept equal. The version should also reflect the lowest version of api under which the plugin will work. The dependency version in `package.json` is pinned to a single version.

This project recently switched to using pnpm as a package manager, although it doesn't matter if you use another package manager so long as you don't commit the log and lock files to VCS. Just be sure to let us know of your choice of package manager if you encounter a problem.
