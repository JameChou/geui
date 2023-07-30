<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/component/toast" height="670px"></iframe>
</div>


|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|title      |String |       |Toast的标题|
|subTitle   |String |       |Toast的副标题|
|toastStyle |String |'info' |info、blue-info、warning、error、success|
|icon       |String |       |显示icon,需要传ph类的图标|
|duration   |Number |1500   |显示持续时间,单位为ms|
|mask       |Boolean|false  |是否显示mask|
|isLoading  |Boolean|false  |是否显示loading|

## 样式
GE-UI的toast共有5种样式，默认是普通的信息提示

|style      |说明|
|:----|:----|
|info       |普通信息 灰色为主色调|
|blue-info  |蓝色为主调的普通信息提示|
|warning    |警告信息提示|
|error      |错误信息提示|
|success    |成功信息提示|

## \<ge-page\>
在`<ge-page>`组件内，集成了toast全局提示。使用方法为

```js
// 成功
this.$uiSuccess('成功', '您成功触发了一个成功提示');

// 或者
store.commit('setToast', { title: tite, subTitle: subTitle, duration: 1500, toastStyle: 'success'});
```

在`/ui/store/modal.js`中可以看到toast的结构，与`<ge-toast>`组件props基本一致。
```js
toast: {
    title: '',
    subTitle: '',
    icon: '',
    toastStyle: 'info',
    duration: 1500,
    mask: false,
    isLoading: false,
    success: () => {} // 表示成功调用之后的回调函数
}
```