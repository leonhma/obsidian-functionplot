# obsidian-functionplot

A plugin for displaying mathematical graphs from MathJax functions in obsidian.md.

## How to use

1. Write some functions in MathJax (inside the dollar signs).
2. Below that, type:
 ```text
 ```functionplot
 bounds: -10, -10, 10, 10
 functions: f, g, h
 ´``
 ```

3. This will create a coordinate system with bounds `-10 < x < 10, -10 < y < 10` and plot the functions f, g and h. To find these functions, the plugin goes upwards to the first occurence of the function in MathJax code.
