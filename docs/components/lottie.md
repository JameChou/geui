<div class="simulator">
    <iframe src="https://h5.geui.xyz/#/pages/component/lottie" height="740px"></iframe>
</div>

Lottie是一个由**airbnb**开源的动画解决方案，它有着优点也有缺点。小程序平台对于Lottie的支持程度也各不相同，uni-app对于Android以及iOS平台有着很好的支持，可以使用`animation-view`来处理。

GE-UI目前对于微信小程序、支付宝和H5有一定支持。

* 微信小程序使用了开源项目[lottie-miniprogram](https://github.com/wechat-miniprogram/lottie-miniprogram)。**因为小程序对于canvas有很多限制，比如不允许动态渲染(eval)，有可能在lottiefiles下载下来的json无法渲染、渲染效果不佳等等**。

* H5端使用开官方的[lottie-web](https://github.com/airbnb/lottie-web)。

* 支付宝小程序，在2023年3月开始官方支持lottie，有官方的内部组件`<lottie>`，[组件说明文档](https://opendocs.alipay.com/mini/component/lottie)。

!> 如果项目没有使用Lottie的需要，则可以不使用`npm install`来安装依赖。


|属性名|类型|默认值|说明|
|:----|:----|:----|:----|
|canvasId   |String         |       |必填项 canvasId|
|loop       |Boolean        |true   |是否循环播放动画|
|autoPlay   |Boolean        |true   |是否自动播放|
|data       |Object/String  |       |渲染的json数据，可以为一个对象也可以是json字符串|
|src        |String         |       |json的网络地址|
|renderer   |String         |svg    |渲染结果(canvas或svg)|
|repeatCount|Number         |-1     |重复播放次数，-1表示无限，此属性只对支付宝小程序有效|
|width      |String         |       |宽度例如: "250rpx"|
|height     |String         |       |高度例如: "250rpx"|
|@animation-created| HandleEvent| |当动画创建好时的事件|


## 方法说明
可以参考我们的示例页面(`/pages/component/lottie.vue`)
``` html
<ge-lottie someprops ....  @animation-created="handleAnimation">
</ge-lottie>
```

`animation-created`在lottie组件成功加载之后会把*Animation*对象返回回来。拿到这个对象之后，就可以对动画做一些操作。

```js
// 注意这里拿到创建之后的ani对象不可放到 `data()`里。
let animationPlayer = null;
export default {
    methods: {
        handleAnimation(ani) {
            animationPlayer = ani;
        }
    }
}
```

!> 一定要注意我上面的注释，微信小程序如果使用如下代码会报错。[Converting circular structure to JSON 在uni-app中报错了](https://github.com/wechat-miniprogram/lottie-miniprogram/issues/14)


```js
export default {
    data() {
        return {
            ani: null;
        }
    },
    methods: {
        // !!!!!这里会报错，微信小程序会挂掉
        handleAnimation(ani) {
            this.ani = ani;
        }
    }
}
```

拿到*Animation*对象之后可以调用`lottie-web`的相关方法，可以查看文档或者看我们复制过来的方法列表。

[Lottie web文档](https://airbnb.io/lottie/#/web)

* anim.play()
* anim.stop()
* anim.pause()
* anim.setLocationHref(locationHref) -- one param usually pass as location.href. Its useful when you experience mask issue in safari where your url does not have # symbol.
* anim.setSpeed(speed) -- one param speed (1 is normal speed)
* anim.goToAndStop(value, isFrame) first param is a numeric value. second param is a boolean that defines time or frames for first param
* anim.goToAndPlay(value, isFrame) first param is a numeric value. second param is a boolean that defines time or frames for first param
* anim.setDirection(direction) -- one param direction (1 is normal direction.)
* anim.playSegments(segments, forceFlag) -- first param is a single array or multiple arrays of two values each(fromFrame,toFrame), second param is a boolean for forcing the new segment right away
* anim.setSubframe(flag) -- If false, it will respect the original AE fps. If true, it will update as much as possible. (true by default
* anim.destroy()

#### 微信小程序有一些无法渲染?
在调试的过程中遇到过一些问题列一下
* 有动画背景上下移动隐藏的类型，微信小程序显示有问题。
* 有的动画直接渲染不出来。
* 有动态渲染需求的，直接报错。
* ....

所以微信小程序上的lottie显示并不是很稳定(当然只针对一般开发者,从lottiefiles找免费类的)，如果你的团队中或你会AE那么就可以做出很不错的动画效果。

当然如果你不需要动画效果，也可以直接删除`/ui/component/ge-lottie.vue`文件，以及`package.json`中的相关依赖，并不会影响整体项目。

#### H5的坑
`lottie-miniprogram`在uni-app编译的时候，会一并打包进组件js中，在js文件内会有`wx.request`请求的代码(因为可能需要加载服务端的lottie json文件)。

那么在H5项目中当使用`src`属性进行自主拉取json文件时会发生错误。定位在`wx.request`但是我并没有时间去研究什么错误了。可能以后会再修复，因为`lottie-miniprogram`也是依赖`lottie-web`项目的。

那么针对H5项目，我们建议还是使用animationData这种设置方式。父组件把json内容加载完成后再传入`<ge-lottie>`内，或者只针对H5页面这样做。

```js
// 1. 本地文件，json文件不放在服务器可以使用如下方式获取data传入至组件内
import * as animationData from '/static/animation.json';

// 2. 从服务端拉取json文件
let animationData = await uni.request({
    url: 'your animation json url'
});

<ge-lottie :data="animationData"></ge-lottie>
```

#### 支付宝
支付宝组件完全是由官方进行维护的，`<ge-lottie>`只是对官方组件进行了非常简单的封装。

Tips: 支付宝开发工具不具备渲染功能，只能真机调试才显示动画。如果看到开发工具不显示不要慌张。