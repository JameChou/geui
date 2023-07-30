<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/component/card" height="670px"></iframe>
</div>

## 卡片(ge-card)

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|id             |String,Number  |               |card的id|
|tag            |String         |               |标签内容   |
|showButton     |Boolean        |false          |是否显示右上角操作按钮|
|buttonIcon     |String         |'ph-dots-three'|右上角图标|
|title          |String         |               |大标题内容|
|subTitle       |String         |               |副标题内容|
|info           |String         |               |说明信息(如地址、创建人用户信息等)|
|image          |String         |               |card图片|
|compact        |Boolean        |true           |是否为紧凑型布局，如果是紧凑型标题会覆盖在图片上|
|imageMode      |String         |'aspectFill'   |图片的mode，可以参考uni-app图片文档|
|richInfo       |Boolean        |false          |是否自定义的丰富信息，slot为richInfo|
|@tap-content   |HandleEvent    |               |点击标题以及副标题时的事件|
|@tap-tag       |HandleEvent    |               |点击tag|
|@tap-button    |HandleEvent    |               |点击右上角button|
|@tap-info      |HandleEvent    |               |点击说明信息|
|@tap-image     |HandleEvent    |               |点击图片|

文件在`/ui/components/ge-card/ge-card.vue`。

* **compact** 代表的样式是否为紧凑型，看右侧的示例。
* **title**以及**subTitle**会根据长度自行截断。

#### event
* @tap-content 传递 `id、title、subTitle`
* @tap-tag 传递 `id、 tag`
* @tap-button 传递 `id`
* @tap-info 传递 `id、 info`
* @tap-image 传递 `id、 image`

#### richInfo
以右侧第一个info为例，显示 "发布了地点"，那么前方的icon是自定义的。slot名为**richInfo**。

```html
<ge-card compact tag="推荐" title="title"
                    image="image"
                    show-button sub-title="sub-title"
                    rich-info
                    button-icon="ph-map-pin"
>
    <template v-slot:richInfo>
        <text class="ph ph-map-pin">Nanjing, China</text>
    </template>
</ge-card>
```

## 小卡片(ge-small-card)
GE-UI 小卡片样式更适合用于产品、书籍、评价等产品信息展示上。

|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|id         |String,Number  |''             |card的id|
|tag        |String         |''             |标签内容，若没有则不显示|
|title      |String         |''             |标题内容|
|spec       |String         |''             |说明信息|
|score      |Number         |0              |评价得分整数类、0-5|
|rateNumber |Number         |0              |评价人数|
|buttonName |String         |''             |按钮名称|
|buttonType |String         |'primary'      |按钮的样式有primary、blue、gray|
|image      |String         |''             |图片地址|
|imageMode  |String         |'aspectFill'   |图片mode、其他参考uni-app的image官方文档|
|@tap-button|HandleEvent    |               |按钮tap事件|
|@tap-image |HandleEvent    |               |图片点击事件|
|@tap-rate  |HandleEvent    |               |评价点击|

#### event
* @tap-button 传递 `id`
* @tap-image 传递 `id、 image`
* @tap-rate 传递 `id、 rate、 rateNumber`

#### spec
```html
<ge-small-card tag="书籍" title="钱钟书、莫言、杨绛、大刘 ABC DDD" button-name="添加至购物车" :score="4" :rateNumber="125"
                                image="abc"
>
    <template v-slot:spec>
        <text class="ph ph-book-bookmark"></text>
        Non-fiction 1hr.50 min
    </template>
</ge-small-card>
```

slot名称为spec，可以自定义spec内容。