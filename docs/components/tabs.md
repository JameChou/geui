<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/component/navtabs" height="670px"></iframe>
</div>

GE-UI中有时间类型的tab、普通、分类等。

## 时间类型(ge-nav-timetabs)
```html
<ge-nav-timetabs></ge-nav-timetabs>
```
文件为`/ui/components/ge-nav-timetabs/ge-nav-timetabs.vue`。

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|timestamp |Number |new Date().getTime() |unix时间戳|
|active    |String |'middle'             |共有三个选项middle、begin、end|
|fullDay   |Boolean|false                |是否显示完整日期|
|@tab-select|HandleEvent||点击tab的事件|

* **timestamp**这个属性表示一个星期显示的依据时间，与`active`属于连动，如果不传则会以本地时间来作为生成的依据，一般情况下推荐是服务端传递当前时间戳。
* 七天时间、middle是表示`timestamp`代表的时间为中间，前三天+后三天+当前组成七天。begin就是当+后六天组成七天。end就是前七天+当前组成七天。
* fullDay表示是否在选项后显示选择的完整日期。

#### tab-select
```html
<ge-nav-timetabs @tab-select="tapHandler"></ge-nav-timetabs>
```

当点击时传递一个对象，再根据业务需要做后续处理。
```json
{
   "active": true,
   "date": Object, // 点击的时间date对象 
   "datetime": 168930694133, // 点击的时间 时间戳
   "day": 14, // 天
   "week": "五" // 星期
}
```

## 分类类型(ge-navtabs)
```html
<ge-navtabs :items="items"></ge-navtabs>
```
文件为`/ui/components/ge-navtabs/ge-navtabs.vue` 。

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|items      |Array      |[]|需要显示的item数组|
|active     |Number     |0 |默认选中数组下标|
|@tab-select|HandleEvent|  |选中tab的事件|

* items格式为:

```js
items: [ '7分', '15分', '1小时', '1天', '1月', '1年' ]
```

#### tab-select
```html
<ge-navtabs @tab-select="tapHandler" :items="items"></ge-navtabs>
```
当点击时会传递一个对象
```json
{
    "index": 0,  // 点击的数组下标
    "name": "7分" // 点击的item名称
}
```

## 滚动类(ge-navlist)
```html
<ge-navlist :items="items"></ge-navlist>
```
文件为`/ui/components/ge-navlist/ge-navlist.vue`。

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|items      |Array      |[]       |需要显示的item数组|
|active     |Number     |0        |默认选中数组下标|
|type       |String     |'regular'|tabs的样式、**regular**或**button**|
|indicator  |Boolean    |false    |是否显示下方的选中指示条，只针对type为**regular**时有效|
|@tab-select|HandleEvent|         |选中tab的事件|

* items格式为:

```js
items: ['Tab-1', 'Tab-2', 'Tab-3' ...]
```

* 有两种样式，分为别常规(regular)、按钮(button)。

#### tab-select
点击会传一个对象
```json
{
    "index": 0 // 点击的数组下标
}
```


