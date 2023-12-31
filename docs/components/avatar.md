<div class="simulator">
    <iframe src="https://h5.geui.xyz/#/pages/component/avatar" height="740px"></iframe>
</div>

## 头像 
|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|id         |String,Number  |       |头像的id|
|avatar     |String         |       |头像的图片地址、优先级最高|
|name       |String         |       |头像的名称，可以为text也可以为icon的class|
|icon       |Boolean        |false  |name的值是否为icon|
|round      |Boolean        |false  |是否为圆形头像|
|color      |String         |       |颜色，共有三种yellow、green、blue|
|size       |String         |       |头像大小，共有三种无值正常大小、sm、xs|
|notify     |Boolean        |false  |是否有通知提示|
|noBorder   |Boolean        |false  |是否显示边框|
|@click     |HandleEvent    |       |传递id值{id}|

!> icon如果使用的是Phophoricons那么需要传入完整的class`ph ph-user-circle`类似这种，也可以传入自己项目的icon class。

```html
<ge-avatar avatar="https://123.jpg" color="yellow" name="T"></ge-avatar>
```

!> 如上面的代表显示，avatar设置时，会优先显示图片，color、name这些配置会忽略。

## 头像组

class值为**ui-avatar-group**。示例如下:

```html
<ge-avatar-group>
    <ge-avatar color="yellow" name="T"></ge-avatar>
    <ge-avatar color="blue" name="S"></ge-avatar>
</ge-avatar-group>
```