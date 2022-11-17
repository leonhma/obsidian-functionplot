# obsidian-functionplot

A plugin for displaying mathematical graphs in obsidian.md.

> ⭐ _Remember to star this plugin on [Github](https://github.com/leonhma/obsidian-functionplot) if you like it!_

_This file only contains basic instructions to get you to using this plugin quickly. If you want a more detailed documentation, take a look at the [wiki](https://github.com/leonhma/obsidian-functionplot/wiki)._

---

# 🔮 How to use
### With Command
Since version `1.1.0` you can create plots via a handy GUI with live-preview functionality.
1. Open the command palette and select `Obsidian Functionplot: Plot a Function`

2. Adjust the plot to your liking.

    ![Create plot modal](./images/create-modal/light.png#gh-light-mode-only)
    ![Create plot modal](./images/create-modal//dark.png#gh-dark-mode-only)

3. This will create a coordinate system with bounds `-10 < x < 10, -10 < y < 10` and plot the functions f and g. If you havent disabled it, you can even drag and zoom the graph.

<!--     ![Graph image](./images/plot/light.png#gh-light-mode-only)
    ![Graph image](./images/plot/dark.png#gh-dark-mode-only) -->
    
### With `functionplot` Block
````
```functionplot
---
title: string
xLabel: string
yLabel: string
bounds: array[min x, max x, min y, max y]
disableZoom: boolean
grid: boolean
---
<name>(variable)=<expression>
```
````
Example:
````
```functionplot
---
title: The random graph
xLabel: Time
yLabel: Cost
bounds: [0, 10, 0, 50]
disbaleZoom: 1
grid: true
---
g(x)=x^PI
f(x)=E+log(x)*2
```
````

## 🧮 Supported Math
To see the complete list of supported math functions, please check the [wiki](https://github.com/leonhma/obsidian-functionplot/wiki).
    
## ⚙ Plugin Settings
Since version `1.2.0` there's a dedicated settings page for this plugin. Here you can adjust things like font sizes for the text elements of the plot, line widths and various colors. To access this page, head to the obsidian settings and scroll down the list to 'Community Plugins > Obsidian Functionplot'.

![Settings Page](https://github.com/leonhma/obsidian-functionplot/blob/master/images/settings/dark.png)
    
> **Note**  
> For changes to be applied, Obsidian needs to "re-render" the chart. You can either restart Obsidian, or switch between view modes (eg. Reading mode >  Edit mode > Reading mode).



---

## ❓ Questions

If you have any questions about the usage of the plugin, take a look at the [wiki](https://github.com/leonhma/obsidian-functionplot/wiki) or post a question in the [discussions](https://github.com/leonhma/obsidian-functionplot/discussions).

## 🐞 Bugs and Errors 

If you encounter any errors while using this plugin, please report them to us. To do so, click [this link](https://github.com/leonhma/obsidian-functionplot/issues/new?assignees=leonhma&labels=bug&template=BUG_REPORT.yml), fill out the form as best as you can and click `Submit new issue`. These issues are publically viewable, so please don't submit any personal information.

## 🤝 Contributing

Contributions are always welcome! Be it submitting issues, editing the wiki or creating a pull request, contributions by people like you help keep the project evolving. Please adhere to the [contributing guidelines](CONTRIBUTING.md).

## ©️ Attribution

This plugin is based on / uses:

-   [function-plot](https://github.com/mauriciopoppe/function-plot): MIT License, Copyright (c) 2015 Mauricio Poppe
