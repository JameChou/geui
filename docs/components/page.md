GE-UI中最重要的一个组件就是`ge-page`，先来看一下在GE-UI中一个页面的构成是什么样的。
```html
<template>
    <ge-page>
        some elements
    </ge-page>
</template>
<script>
    export default {}
</script>
<style lang="scss">
</style>
```

在`ge-page`组件内，那么就可以使用主题、toast、sheet、加载等功能。

## Props
|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|tabs           |Array         |[]    |底部导航栏，[格式、操作栏文档](/components/tabs)|
|noTabs         |Boolean       |true  |是显示操作条，默认不显示|
|tabActive      |Number        |0     |页面底部的自定义tab哪个为激活状态|
|loading        |String/Boolean|'auto'|是否有加载遮罩|
|theme          |String        |'light'|主题，默认为明亮，[主题文档](/basic/theme)|
|backgroundImage|String        |       |页面背景图|
|tabTransparent |Boolean       |false  |页面底部的tabbar是否为透明状态|
|@tapTabbar     |HandleEvent   |       |点击底部tabbar时返回的对象，具体参考[tabbar文档](/components/tabs)|


#### 说明
* loading遮罩持续的时间为800ms
* 两个主题有着自己不同的底图，当然也可以为纯色，也可以使用自己的背景图。
* 遮罩以及底图上方的透明度、blur值有需要可以自己进行调节，在`/ui/scss/vars/_system.scss`中。

## Theme/Toast/Sheet 
`ge-page`中也引入了`ge-toast`和`ge-modal`两个组件。[ge-toast](/components/toast)，[ge-modal](/componets/modal)。

在`/ui/js/modal.js`中定义了modal对象。
```js

const modal = {
    show(name) {
        store.commit('setTarget', name);
    },
    hide() {
        store.commit('setTarget', '');
    },
    info(title, subTitle, duration = 1500) {
        store.commit('setToast', { title: title, subTitle: subTitle, duration: duration, toastStyle: 'info'});
    },
    toast(toast) {
        store.commit('setToast', toast);
    },
    success(title = '成功', subTitle, duration= 1500) {
        store.commit('setToast', { title: title, subTitle: subTitle, duration: duration, toastStyle: 'success'});
    },
    warning(title = '警告', subTitle, duration = 1500) {
        store.commit('setToast', { title: title, subTitle: subTitle, duration: duration, toastStyle: 'warning'});
    },
    error(title = '错误', subTitle, duration = 1500) {
        store.commit('setToast', { title: title, subTitle: subTitle, duration: duration, toastStyle: 'error'});
    }
}

Vue.prototype.$uiModal = modal;
Vue.prototype.$uiSuccess = modal.success;
```

那么如果需要调用`ge-page`中的modal或者toast时，可以用如下代码。

```js
// 这是显示一个成功的toast
this.$uiModal.success('成功', '......内容......');
// 这是显示一个标准Modal
this.$uiModal.show('modal');
```

#### 主题
设置主题使用

```js
// 值可以是dark auto light
this.$store.commit('setTheme', 'dark');
```


