# obsidian-functionplot

A plugin for displaying mathematical graphs in obsidian.md.

> *Remember to star this plugin on [Github](https://github.com/leonhma/obsidian-functionplot) if you like it.*

## How to use

Since version `1.1.0` you can create plots via a handy GUI. Open the command palette and select `Obsidian Functionplot: Plot a function`. This opens a dialog where you can easily specify the options and functions to plot.

### Manual usage

1. Type:

 ~~~text
 ```functionplot
 ---
 title: Graph
 disableZoom: false
 bounds: [-10, 10, -10, 10]
 grid: true
 xLabel: x
 yLabel: y
 ---

 f(x) = x^2
 g(x) = 0.5*x^3+x^2-44
 ```
 ~~~

 *(The metadata header in this example contains all possible options, you don't usually have to specify all of them)*

2. This will create a coordinate system with bounds `-10 < x < 10, -10 < y < 10` and plot the functions f and g. If you havent disabled it, you can even drag and zoom the graph.

![Graph image](./images/graph-light.png#gh-light-mode-only)
![Graph image](./images/graph-dark.png#gh-dark-mode-only)

## Options

This section describes all the header options in yaml format.

`title`: string, default: ""
> The title of the graph.

`disableZoom`: boolean, default: false
> If true, the user can't zoom the graph.

`bounds`: array, default: [-10, 10, -10, 10]
> The initial bounds of the graph. If disableZoom is true, this is permanent.

`grid`: boolean, default: true
> If true, a grid is drawn.

`xLabel`: string, default: ""
> The label of the x-axis.

`yLabel`: string, default: ""
> The label of the y-axis.

## Questions

If you have any questions about the usage of the plugin, take a look at the [wiki](https://github.com/leonhma/obsidian-functionplot/wiki) or post a question in the [discussions](https://github.com/leonhma/obsidian-functionplot/discussions).

## Bugs and Errors

If you encounter any errors while using this plugin, please follow these steps:

1. Make sure you have followed the syntax as described above.
2. Ensure that you are using the latest version of this plugin. Do this by going to the "Community plugins" tab in the settings, and clicking "Check for updates".
3. If the issue still persists, please report it on GitHub. (If you managed to solve this problem on your own, but think we should know about it, please file the fitting type of issue.)
    1. Go to the "Issues" tab of the repo.
    2. Search for your error. If you can find it, chime in to the converation and let us know that it happened to you too. It appears this is a known issue and it is currently being worked on.
    3. If you can't find it, open a new issue. Do this by clicking the "New issue" button in the top right. Select "Bug report".
    4. Fill out the issue with as much information as you can. Your issue will be resolved in the near future.

## Attribution

This plugin is based on / uses:

- [function-plot](https://github.com/mauriciopoppe/function-plot): MIT License, Copyright (c) 2015 Mauricio Poppe
