<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/basic/fonts" height="670px"></iframe>
</div>

系统的字体定义在`ui/scss/_font.scss`文件内。演示在右侧simluator中。

演示文件为`/pages/basic/fonts.vue`。

## Header 
标题类`header-${font-size}`字体以`header-`开头，后面`${font-size}以数字表示字体大小。例如96px像素的字体为`header-96`。

共有6个大小: **96px、60px、48px、34px、24px、20px**

```css
.header-96 {
  font-weight: 700;
  font-size: 184.6rpx;
  line-height: 125%;
  letter-spacing: -0.015em;
}

.header-60 {
  font-weight: 700;
  font-size: 115.4rpx;
  line-height: 133%;
  letter-spacing: -0.01em;
}

....

```

## Subtitle
子标题`sub-title-${font-size}`以`sub-title`为开头`${font-size}`是字体大小，例如16px的子标题为`sub-title-16`。子标题共有两个大小: **16px、14px**

```css
.sub-title-16 {
  font-weight: 600;
  font-size: 30.8rpx;
  line-height: 150%;
  letter-spacing: 0.005em;
}
```

## Body
正文内空`text-body-${font-size}`以`text-body`为开头`${font-size}`表示字体大小，例如16px的正文为`text-body-16`。
```css
.text-body-16 {
  font-weight: 400;
  font-size: 30.8rpx;
  line-height: 150%;
  letter-spacing: 0.0168em;
}
```

## 文字颜色、加粗等特殊处理

### 文字样式
|名称|效果|
|:----|:----:|
|text-normal|正常|
|text-italic|斜体|
|text-oblique|倾斜|
|text-bold|加粗|
|text-lighter|细体|
|text-underline|下划线|
|text-cut|截断|
|text-line-through|横线|

### 对齐方式
对齐方式(`text-align-${position}`)以`text-align`开头`${position}`表示位置，共有三种`center、left、right`。


### 文字颜色
字体颜色是根据系统定义的变量来的，具体参考`/ui/scss/vars/_colorvars.scss`文件。请移步[关于配色文档](/basic/color.md)

基础配色共有6种，分别为: 白(white)、黑(black)、蓝(blue)、绿(green)、橙(orange)、红(red)。所有字体都是这些基础配色的100%不透明度，如果需要一定的透明度，需要自己定义。

```css
.text {
  @each $class,
  $value in ('white': $ui-color-white, 'black': $ui-color-black, 'blue': $ui-color-blue, 'green': $ui-color-green, 'orange': $ui-color-orange, 'red': $ui-color-red) {
    &-#{$class} {
      color: $value !important;
    }
  }
}
```

字体颜色`text-${color}`以`text-`为开头`${color}`表示颜色，例如红色就为`text-red`。
```vue
<text class="text-body-16 text-red">正文内容,Text-body, 2023</text>
```