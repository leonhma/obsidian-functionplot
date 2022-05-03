# obsidian-functionplot

A plugin for displaying mathematical graphs from MathJax functions in obsidian.md.

## How to use

1. Write some functions in MathJax (inside the dollar signs).
2. Below that, type:
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
 *(The metadata header contains all possible options, you don't usually have to apecify all of them)*

3. This will create a coordinate system with bounds `-10 < x < 10, -10 < y < 10` and plot the functions f, g and h. To find these functions, the plugin goes upwards to the first occurence of the function in MathJax code.
