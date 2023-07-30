<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/basic/button" height="670px"></iframe>
</div>

GE-UI共大类上总共有6类型的按钮。每种类型的按钮都有3种不同大小、3种颜色可供选择。并且相针不同的模式进行了适配。

## 按钮大小
按钮大小共有三种 **lg、sm、默认大小**。

```html
<button class="ui-button blue sm">Small</button>
<button class="ui-button blue">Basic</button>
<button class="ui-button blue lg">Large</button>
```

## 按钮颜色
按钮颜色共有三种，**白色(黑色主题为黑色)、蓝色、灰色**，蓝色以及灰色也适配主题了，有轻微的变化。

```html
<button class="ui-button primary">白/黑</button>
<button class="ui-button blue">蓝</button>
<button class="ui-button gray">灰</button>
```

## 按钮类型

### 基础类型

```html
<!-- 四个角轻微圆角类型 -->
<button class="ui-button"></view>
```

### 圆角类型

```html
<!-- 两侧半圆 -->
<button class="ui-button round"></view>
```

### 带图标的类型

```html
<button class="ui-button"><text class="icon ph ph-abc"></text></view>
```

### 只有图标的按钮

!> 注意这里的类与上面的类型有不同，从`ui-button`变为`ui-icon-button`

```html
<button class="ui-icon-button"><text class="icon ph ph-spinner"></text></button>
```

### 图标旋转的按钮

```html
<!-- 在icon元素上加上ui-icon-spin样式 -->
<button class="ui-button"></text class="icon ph ph-spinner ui-icon-spin"></text></button>
```

### 块状按钮
```html
<button class="ui-button block"></button>
```