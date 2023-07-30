<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/component/opbar" height="670px"></iframe>
</div>

## 顶部操作条(ge-nav)
```html
<ge-nav title="操作条"></ge-nav>
```

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|title      |String     |               |操作条标题|
|showBack   |Boolean    |true           |是否显示返回按钮|
|customLeft |Boolean    |false          |是否显示自定义左侧内容|
|backIcon   |String     |arrow-left     |返回图标|
|backText   |String     |               |左侧返回的文字|
|isOpacity  |Boolean    |true           |是否为沉浸式导航，当向上滑动时才会固定显示|
|navHeight  |Number     |0              |若有固定的内容，需要增加的高度|
|customTitle|Boolean    |false          |自定义标题导航|
|fixContent |Boolean    |false          |是否有固定的内容|
|@tap-title |HandleEvent|               |点击头部文字标题、无传递参数|

|slot|说明|
|:----|:----|
|customLeft     |自定义左侧插槽|
|replactTitle   |自定义中间标题|
|fixContent     |自定义固定内容|

#### showBack
是否显示返回相关的左侧内容，需要特别注意的一点是**MP-ALI**平台下，这个参数是无效的。因为支付宝小程序是默认就有一个返回图标并且无法隐藏。

![支付宝小程序返回](https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/docs/ali-navback.jpg)

#### customLeft
自定义左侧部分的按钮

slot名称为 **customLeft**。

```html
<ge-nav title="自定义左侧操作" custom-left>
    <template v-slot:customLeft>
        <!-- 自定义左侧为头像 -->
        <ge-avatar :url="url"></ge-avatar>
    </template>
</ge-nav>
```

#### customTitle
自定义头部中间的标题，例如可以替换成一个图标而非文字。

slot 名称为 **replaceTitle**。

```html
<ge-nav custom-title>
    <template v-slot:replaceTitle>
        <!-- 自定义标题是一个图片 -->
        <image style="height: 100%; width: 96px;" mode="aspectFill" src="url" />
    </template>
</ge-nav>
```

#### fixContent
有需要跟着头部操作条一起固定的内容。

slot 名称为**fixContent**。

```html
<ge-nav :is-opacity="false" title="自定义固定内容" fix-content :nav-height="40">
    <template v-slot:fixContent>
        <view style="width: 95%">
            <ge-navtabs :items="items" :active="3"></ge-navtabs>
        </view>
    </template>
</ge-nav>
```

## 底部操作条(ge-tabbar)
```html
<ge-tabbar :items="tabs"></get-tabbar>
```

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|items      |Array      |[]    |底部导航栏数据|
|@tap-tabbar|HandleEvent|      |底部导航栏点击变化时事件|

#### items
数据格式为
```json
{
    "name": "组件",                 // 名称
    "url": "/pages/index/index",   // 点击触发的
    "icon": "ph-puzzle-piece",     // icon
    "click": "switch",             // 点击时所做的动作，有switch、new、handle
    "notification": false,         // 是否显示'提示红点'
    "type": "icon"                 // 类型 icon表示普通带icon item，button表示按钮
},
{
    "icon": "chart-bar",
    "click": "handle",
    "type": "button"
}
```

!> **click**有三个值 switch、new、handle，handle一般用于按钮类型的，比如新增某条数据，或者打开model等。

**swtich**会调用如下方法
```js
uni.switchTab({url: 'abc'});
```
**new**会调用如下方法
```js
uni.navigateTo({url: 'abc'});
```


#### tap-tabbar 
```json
{
    item: Object, // 点击变化的对象
    index: 0      // 点击数组下标
}
```
