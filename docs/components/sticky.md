<div class="simulator">
    <iframe src="https://h5.geui.xyz/#/pages/component/sticky" height="740px"></iframe>
</div>

## 属性

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|offsetTop      |Number |0      |固定在顶部何位置|
|offsetBottom   |Number |0      |固定在顶部何位置|
|minusNavHeight |Boolean|false  |固定在顶部的时候会默认会计算statusbar的高度，如果这个为true则会忽略| 
|px             |Boolean|false  |是否为px为单位、默认为false表示是rpx，组件会自己转换为px|
|fixBottom      |Boolean|false  |是否是固定在底部|
|zIndex         |Number |5      |默认为5是低于`loading`一级、也可自定义|
|disabled       |Boolean|false  |是否取消固定|

## 说明
这个组件使用了`position: sticky`布局，并没有使用`onPageScroll`然后配合`fixed`去做固定。

!> 这个布局在微信小程序上面部分机型可能会出现问题。支付宝小程序做了部分适配，按官方的说法需要2023年底才会全面支持这一属性，模拟器、真机调试不会有问题，但是真正发布的时候体验版是有问题的。