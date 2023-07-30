
<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/component/interests" height="670px"></iframe>
</div>

## 属性 
|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|items  |Array      |[] |item数组|
|@click |HandleEvent|   |点击item的事件, { item, index }|

#### items属性
```json
items: [
    {
        image: "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/dog-avatar.jpeg",
        title: "萌宠",
        subTitle: "800已关注",
        mode: "aspectFit"
    },
    {
        image: "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food5.jpeg",
        title: "美食&烹饪",
        subTitle: "嘿嘿美食哦",
        id: 123,
        ....(other elements)
    }
]
```

|key|说明|
|:----|:----|
|image      |图片地址|
|title      |标题|
|subTitle   |副标题|
|mode       |图片的mode，可以不传，不传默认是(aspectFill)|

!> 当然也可以传入其他属性，在点击的时候也会进行传递。

* @click 会回传`item对象，以及在items的数组下标。`。{ item, index }

