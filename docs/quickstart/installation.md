## 源码

* [github https://github.com/JameChou/geui](https://github.com/JameChou/geui)
* [最新Release 1.0.5](https://github.com/JameChou/geui/releases/tag/1.0.5)

### Release目录
```
├── icon.css
├── ui.css
└── ui
    ├── components
    │   ├── ge-avatar
    │   ├── ge-avatar-group
    │   ├── ge-calendar
    │   ├── ge-card
    │   ├── ge-card-grid
    │   ├── ge-divider
    │   ├── ge-fav-card
    │   ├── ge-lottie
    │   ├── ge-nav-timetabs
    │   ├── ge-navbar
    │   ├── ge-navlist
    │   ├── ge-navtabs
    │   ├── ge-page
    │   ├── ge-rates
    │   ├── ge-select-list
    │   ├── ge-sheet
    │   ├── ge-small-card
    │   ├── ge-snackbar
    │   ├── ge-stepbar
    │   ├── ge-sticky
    │   ├── ge-switchseg
    │   ├── ge-tabbar
    │   ├── ge-timepicker
    │   ├── ge-title
    │   ├── ge-toast
    │   └── ge-waterfall
    ├── js
    │   └── store
    └── scss
        ├── animation
        │   ├── config
        │   │   └── mixins
        │   └── modules
        │       ├── fade
        │       ├── jello
        │       ├── pulse
        │       ├── scale
        │       └── wobble
        ├── basic
        ├── icons
        ├── theme
        └── vars
```


#### 项目配置
!> `icon.css`是图标文件、`ui.css`是*basic*类(并不包含组件样式)。 如果你只想使用基础的样式就可以只引用ui.css或者icon.css。正常情况下css不会使用。

将ui目录copy到uni-app项目中。

在`App.vue`目录中将 scss引入。
```html
<script>
    ....
</script>

<style lang="scss">
    /* ui目录 */
	@import "./ui/scss/ui.scss";
</style>
```

在根目录中的`main.js`中引入 GE-Ui的相关js文件。
```js
// main.js
// 引入ge-ui的js
import ui from './ui';

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

// ...

```

使用组件有两种方式
1. 在`pages.json`配置使用*easycom*模式。
2. 在需要的页面内引用组件。

**pages.json**示例

```json
"easycom": {
"ge-(.*)": "@/ui/components/ge-$1/ge-$1.vue"
}
```

