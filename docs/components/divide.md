<div class="simulator">
    <iframe src="https://h5.geui.xyz/#/pages/component/divider" height="740px"></iframe>
</div>

## 属性
| 属性名           | 类型     | 默认值   | 说明              |
|-----------------|----------|----------|-----------------------|
|lineStyle      |String|dashed  |分隔线的样式，具体的值有 dashed、double、groove、solid、dotted，与`border-bottom-style`属性保持一致|
|size           |String|regular |上下间距regular(上下为20rpx)，bigger(上下为30rpx)，smaller(上下为10rpx)|
|content        |String|        |分隔线上的文字内容|
|contentAlign   |String|center  |文字上的内容所在位置，center、left、right|
|color          |String|        |分隔线以及文字的颜色 为颜色值例如`#00B670`或`rgba(0, 0, 0, 0.2)`|
|contentIcon    |String|        |以icon代替文字|

!> `content`与`contentIcon`为互斥的，`content`的优先级要大于`contentIcon`属性。

```html
<!-- 当content与contentIcon都传值时，优先显示content内容-->
<ge-divider content="分隔线" content-icon="alien"></ge-divider>
```


