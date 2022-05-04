# obsidian-functionplot

A plugin for displaying mathematical graphs in obsidian.md.

## How to use

1. Type:
 ```text
 ```functionplot
 ---
 title: Graph of f(x)
 disableZoom: false
 bounds: -10, 10, -10, 10
 grid: true
 xLabel: x
 yLabel: y
 ---

 f(x) = x^2
 g(x) = 0.5*x^3+x^2-44
 ´``
 ```
 *(The metadata header contains all possible options, you don't usually have to specify all of them)*

2. This will create a coordinate system with bounds `-10 < x < 10, -10 < y < 10` and plot the functions f and g. If you havent disabled it, you can even drag and zoom the graph.
