<div class="simulator">
    <iframe src="http://localhost:8080/#/pages/basic/color" height="670px"></iframe>
</div>

## 全局配色变量 
GE-UI共有6种配色: 红(red)、绿(green)、橙(orange)、蓝(blue)、白(white)、黑(black)。

定义文件为`ui/scss/var/_colorvars.scss`。
```css
$ui-color-white: #FFFFFF;
$ui-color-black: #000000;
$ui-color-blue: #4376FE;
$ui-color-orange: #FE8E0B;
$ui-color-red: #E55539;
$ui-color-green: #00B670;
```

针对不同的主题(light、dark)，又有不同的基础配色。
```css
/* light background color */
$ui-light-bg-color-gray: #F5F5F5;
$ui-light-bg-color-yellow: #FEF8EC;
$ui-light-bg-color-blue: #F2F7FD;
$ui-light-bg-color-green: #F2FDF5;
$ui-light-bg-color-pink: #FBF6FD;
$ui-light-bg-color-orange: #FFF7F5;

/* dark background color */
$ui-dark-bg-color-gray: #323232;
$ui-dark-bg-color-yellow: #3D3629;
$ui-dark-bg-color-blue: #29333E;
$ui-dark-bg-color-green: #293E2F;
$ui-dark-bg-color-pink: #38293E;
$ui-dark-bg-color-orange: #3E2E29;
```

可以根据自己的需要去更改值，那么这些配置会作用于文字颜色、background、阴影等。

## 背景
背景依据全局变量生成了对应的100%、60%、50%、40%、30%、20%、10%透明度的样式。

```css
.bg-white {
  background-color: $ui-color-white !important;
}

.bg-white {
  @each $class,
  $value in ('60': $ui-color-white-60, '50': $ui-color-white-50, '40': $ui-color-white-40, '30': $ui-color-white-30, '20': $ui-color-white-20, '10': $ui-color-white-10) {
    &-#{$class} {
      background-color: $value !important;
    }
  }
}
```

以白色为例`bg-white`表示100%的白色背景，`bg-white-60`表示60%的白色背景。


### 暗色背景
当背景为深色时可以考虑使用，`dark-bg-${colorName}`以`dark-bg`开头，后面为颜色名称。

!> 注意，有 **gray、yellow、blue、green、pink、orange** 6种颜色与常规并不相同(没有white、black、red)，并不会根据theme而改变。

### 明亮背景
当周围元素为白色为主时可以考虑使用，`light-bg-${colorName}`以`dark-bg`开头，后面为颜色名称。

!> 注意，有 **gray、yellow、blue、green、pink、orange** 6种颜色与常规并不相同(没有white、black、red)，并不会根据theme而改变。


## 阴影

!> 这里的阴影也不会因为**theme**改变而跟着改变。

阴影大小有三种可供选择`sm、reg、lg`分别代表 **小、正常、大**。颜色有`black、green、blue、orange`。

命名规则是`${colorName}-shadow-${size}`，例如: `blue-shadow-reg` 表示蓝色正常大小阴影。