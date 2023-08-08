<div class="simulator">
    <iframe src="https://jamechou.github.io/geui-h5/#/pages/component/title" height="670px"></iframe>
</div>

## 属性
| 属性名           | 类型     | 默认值   | 说明              |
|-----------------|----------|----------|-----------------------|
|action         |Boolean    |false      |是否有操作按钮一类|
|actionName     |String     |更多        |操作按钮名称|
|actionIcon     |String     |caret-right|操作图标|
|category       |Boolean    |           |是否显示标签|
|categoryContent|String     |           |标签名称|
|titleIcon      |String     |           |标题的icon|
|titleContent   |String     |           |标题|
|border         |Boolean    |false      |是否显示底部的边框线|
|@action-click  |EventHandle|           |action点击时的方法|

## 示例 

```html
<ge-title title-content="普通标题" title-icon=""></ge-title>
<ge-title title-content="有图标的标题" title-icon="rocket"></ge-title>
<ge-title title-content="带标签的标题" title-icon="share-network" category category-content="这是标签"></ge-title>
<ge-title title-content="显示下边框分隔线" border title-icon="arrows-in-line-vertical" 
category category-content="这是标签"></ge-title>

<ge-title title-content="有操作按钮" border title-icon="radio-button" category
                    category-content="这是标签"
                    action
                    actionName="更多(click)"
                    @action-click="tapAction"
>
</ge-title>
```