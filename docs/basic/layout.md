<div class="simulator">
    <iframe src="https://h5.geui.xyz/#/pages/basic/layout" height="740px"></iframe>
</div>

## Flex布局
flex布局文件为`/ui/basic/_flex.scss`。

```html
<view class="ui-flex">
    ... some elements
</view>
```

### flex-basis

```html
<view class="ui-flex align-center justify-center layout-flex-section margin-top">
    <view class="flex-basis-xs bg-green text-white">20%</view>
    <view class="flex-basis-sm bg-red text-white">40%</view>
    <view class="flex-basis-df bg-blue text-white">50%</view>
    <view class="flex-basis-lg bg-orange text-white">60%</view>
    <view class="flex-basis-xl bg-black text-white">80%</view>
</view>
```

命名规则为`flex-basis-${size}`。

|name|size|
|:----:|:----:|
|xs|20%|
|sm|40%|
|df|50%|
|lg|60%|
|xl|80%|

### align-item(垂直对齐)
```html
<view class="ui-flex align-center">
</view>
```

命名规则

|class|value|
|:----|:----:|
|align-start|flex-start|
|align-end|flex-end|
|align-center|center|
|align-stretch|stretch|
|align-baseline|baseline|

### justify-content(水平对齐)
```html
<view class="ui-flex justify-center">
    ...some elements
</view>
```

命名规则

|class|value|
|:----|:----:|
|justify-start|flex-start|
|justify-end|flex-end|
|justify-center|center|
|justify-between|space-between|
|justify-around|space-around|

### align-self(单项对齐)
```html
<view class="ui-flex align-center">
    <view>center</view>
    <view class="self-end">end</view>
    <view>center</view>
</view>
```

命名规则

|class|value|
|:----|:----:|
|self-start|flex-start|
|self-end|flex-end|
|self-center|center|
|self-stretch|stretch|
|self-baseline|baseline|

## Grid布局
Grid布局文件位置为`/ui/scss/basic/_grid.scss`。

### 一行N列
```html
<view class="ui-grid column-2">
    <view>1</view>
    <view>2</view>
    <view>3</view>
    <view>4</view>
</view>
```

上面例子表示一行2列，自动适应宽度。

GE-UI Grid布局最多支持一行五列，也可以自行扩展。

命名规则为: `column-${number}`，1 <= column <= 5 。

### 行与列之间的间距
命名规则为: `gap-${size}`。 例如: gap-xs。

|size|gap px|
|:----:|:----:|
|xs|5rpx|
|sm|10rpx|
|df|20rpx|
|lg|25rpx|