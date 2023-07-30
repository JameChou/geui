<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/basic/theme" height="670px"></iframe>
</div>

GE-UI提供了两种主题，一种为“明亮”、一种为“黑暗”模式。

绝大多数的组件已经做了不同主题的适配。

针对不同的主题定义变量存储在`/ui/scss/theme`中，**_dark.scss**与**_light.scss**是一一对应关系，如果想要有自己的样式效果，根据注释自行可以进行修改。

## 切换主题

!> 如果你使用了`<ge-page>`组件并集成了GE-UI的"vuex"代码，那么就可以用下面的方法来切换主题。反之则需要自己进行适配。

```js
this.$store.commit('setTheme', 'light'); // or dark or auto
```

`<ge-page>`组件源码：
```html
<view class="ui-page" :class="'theme-' + system_theme">
</view>
```


