<div class="simulator">
    <iframe src="https://jamechou.github.io/geui-h5/#/pages/component/rates" height="670px"></iframe>
</div>

## 属性
|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|value          |Number |3      |初始时选中星星数量|
|max            |Number |5      |最大星星数量|
|disabled       |Boolean|false  |是否禁用(不可选)|
|animation      |Boolean|true   |是否开始动画效果|
|defaultColor   |String |#ccc   |默认未选中星星颜色|
|activeColor    |String |#FFB700|选中的星星颜色|
|fontSize       |String |inherit|星星大小,默认继承父类的元素字体大小|
|margin         |String |       |默认星星之间的间距|
|containerClass |String |       |自定容器类名,当有全局的某个样式时可以将这个类名传递进来|
|rateClass      |String |       |自定义类名星星|

## 示例
```html
<ge-title title-content="普通可选的评分" border title-icon="number-circle-one" category category-content="RATES"></ge-title>
<ge-rates></ge-rates>
<ge-rates :value="0"></ge-rates>

<ge-title title-content="自定义最大星星数量" border title-icon="number-circle-two" category category-content="RATES"></ge-title>
<ge-rates :value="4" :max="10"></ge-rates>

<ge-title title-content="星星颜色" border title-icon="number-circle-three" category category-content="RATES"></ge-title>
<ge-rates :value="4" active-color="#E55539"></ge-rates>
<ge-rates :value="2" default-color="#000000"></ge-rates>

<ge-title title-content="Disabled" border title-icon="number-circle-four" category category-content="RATES"></ge-title>
<ge-rates disabled :value="2"></ge-rates>

<ge-title title-content="星星间距" border title-icon="number-circle-five" category category-content="RATES"></ge-title>
<ge-rates margin="20rpx"></ge-rates>

<ge-title title-content="星星大小" border title-icon="number-circle-six" category category-content="RATES"></ge-title>
<ge-rates font-size="40rpx"></ge-rates>
<ge-rates font-size="30rpx"></ge-rates>
<ge-rates font-size="20rpx"></ge-rates>
```