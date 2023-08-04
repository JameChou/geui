## ui目录 

主要代码在`/ge-ui/ui`目录下。

```
├── components              // 组件
│   ├── ge-avatar
│   ├── ge-calendar
|   |.....
├── js                      // vuex相关
│   └── store
└── scss                    // 样式
    ├── animation           // 动画
    ├── basic               // 基础
    ├── components          // 组件
    ├── icons               // 图标
    ├── theme               // 主题
    └── vars                // 参数
```

正如左侧的导航目录显示的一样，总共有*三个*模块，`基础模块`、`基础组件`、`复杂组件/页面`。

对应上面的目录来讲，*scss*目录是对应基础模块的样式，而基础组件/复杂组件样式只放在每个组件内。

!> 有一些组件/页面使用了icons，如果您的项目不引用图标的话，可能会有显示的问题，不过也可以自已更改一下组件内的*class*来适应自己的项目。