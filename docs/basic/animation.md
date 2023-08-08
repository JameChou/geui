<div class="simulator">
    <iframe src="https://jamechou.github.io/geui-h5/#/pages/basic/animation" height="670px"></iframe>
</div>

GE-UI所有关于动画的文件都在`/ui/scss/animation`目录下。

## 配置文件
`/ui/scss/animation/config/_variables.scss`为动画持续时间配置。可根据项目情况更改。

```css
// 缩放时间
$scale-bounce-timing: 0.6s;
// pulse时间
$pulse-timing: 0.5s;
$pulse-slow-timing: 1s;
// fade时间
$fade-timing: 1s;
```

## Fade滑入效果
命名规则为: `animation-fade-${direction}`。例如从顶部向下为animation-fade-top。

|class|效果|
|:----|:----:|
|animation-fade-top|从顶部向下|
|animation-fade-bottom|从底部向上|
|animation-fade-left|从左侧向右|
|animation-fade-right|从右侧向左|

## Jello效果
命名规则为: `animation-jello-${direction}`。例如横向果冻效果为animation-jello-vertical。

|class|效果|
|:----|:----:|
|animation-jello-vertical|横向|
|animation-jello-horizontal|纵向|

## Scale效果
命名规则为: `animation-scale-${direction}`。例如从底向外为animation-scale-top。

|class|效果|
|:----|:----:|
|animation-scale-top|从里向外|
|animation-scale-bottom|从外向里|

## Pulse效果
`animation-pulse`为正常速度，`animation-pulse-slow`为慢速。

## Wobble效果
命名规则为: `animation-wobble-${position}`。例如以顶部为支点为animation-wobble-top。

|class|效果|
|:----|:----:|
|animation-wobble-top|以顶部为支点|
|animation-wobble-bottom|以底为支点|
|animation-wobble-left|以左侧中心为支点|
|animation-wobble-right|以底部为支点|





