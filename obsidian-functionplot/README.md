# obsidian-functionplot

A plugin for displaying mathematical graphs in obsidian.md.

> *Remember to star this plugin on [Github](https://github.com/leonhma/obsidian-functionplot) if you like it.*

## How to use

1. Type: (without the backslash)

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

## Attribution

This plugin is based on / uses:

- [function-plot](https://github.com/mauriciopoppe/function-plot): MIT License, Copyright (c) 2015 Mauricio Poppe
- [yaml](https://github.com/eemeli/yaml): ISC License, Copyright Eemeli Aro <eemeli@gmail.com>
