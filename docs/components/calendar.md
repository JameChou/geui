<div class="simulator">
    <iframe src="https://h5.geui.xyz/#/pages/component/calendar" height="740px"></iframe>
</div>

Ge-Ui使用了[lunc-calendar组件 https://gitee.com/lunc9932/calendar](https://gitee.com/lunc9932/calendar)。在这个组件的基础上，更改了样式以及增加了一些方法。

#### 属性

| 属性名           | 类型     | 默认值   | 说明              |
|-----------------|----------|----------|-----------------------|
| showLunar       | Boolean  | false    | 是否显示农历             |
| firstDayOfWeek  | String   | monday   | 周几为每周的第一天，可选值：monday / sunday<br>monday：每周从周一开始；sunday：每周从周日开始           |
| showMonthBg     | Boolean  | true     | 是否显示月份背景               |
| weekend         | Boolean  | true     | 周末标红(周六周日日期用红色字体)  |
| shouChangeBtn   | Boolean  | true     | 是否显示上月下月箭头按钮      |
| weekType        | Boolean  | 周       | 星期的前缀，如星期一星期二，或周一周二，也可以只显示一、二等      |
| showShrink      | Boolean  | false    | 是否显示收缩按钮      |
| shrinkState     | String   | month    | 默认显示周数据还是月数据(收起或展开)，可选值：week / month<br>week：默认打开显示周数据（收起状态）；month：默认打开显示月数据（展开状态）      |
| signList        | Array    | []       | 标记数组，若同日期有多个标记，则显示最后一个<br>期待格式[{date: '2021-09-10', title: '生日', info: '八月初四张三生日'}]  |

注意：
1. 标记日期会在日期下方显示“title”内容，建议“title”内容不超过4个汉字；
2. 农历日期、节日、标记日期，只会显示其一，优先级 标记 > 节日 > 农历日期；
3. `showShrink`表示是否显示收缩按钮，并不是表示收起或展开状态；

#### 方法
| 方法名          | 说明        | 参数 |
|-----------------|------------|--------|
| addSignList     | 添加标记    | (Array:list)，传入需要添加的标记数组，日期相同不会覆盖，只显示第一个出现的标记         |
| deleteSignList  | 删除标记    | (Array:list)，传入需要删除的标记数组，根据 date 和 title 同时判断进行删除         |

方法使用：在组件上添加 `ref` 属性，在调用对应的方法：`this.$refs.calendar.addSignList([])` 即可，详情见下方的基本用法；<br>
**原 setSignList() 方法已弃用；**


#### 事件
| 事件名        | 说明                | 返回值 |
|---------------|--------------------|--------|
| @day-change    | 选中日期改变时触发，包括点击日期、切换月份和切换周都会改变选中日期 | dayInfo，详情见下方说明 |
| @month-change  | 切换月份时触发，包括点击切换月份按钮、选中日期时切换的月份等都会改变触发 | monthInfo，详情见下方说明 |
| @shrink-click   | 收缩和展开时触发事件 | 返回当前状态：week / month<br>week：当前显示的一个星期（收起）；month：当前显示的一个月（展开） |

#### @day-change 返回值 dayInfo 说明
| 值      | 类型    | 说明  |
| ------- | ------ | ----- |
| date    | String | 日期，格式“yyyy-MM-dd” |
| year    | Number | 年    |
| month   | Number | 月    |
| day     | Number | 日    |
| week    | Number | 星期几 |
| daySign | Array  | 当前日期的标记，若没有则为空数组 |
| lunar   | Object | 农历信息，包含农历日期、节日、生肖等；<br>只有属性 showLunar 设置为 true 时才会返回此值； |

#### @month-change 返回值 monthInfo 说明
| 值    | 类型    | 说明  |
| ----- | ------ | ----- |
| year  | Number | 年    |
| month | Number | 月    |
| type  | String | 返回类型：today / pre / next<br>today：当前月份，pre：上个月，next：下个月 |


### 基本用法
在`template`中使用组件

```html
<view class="content">
  <view class="content-item">
    <ge-calendar ref="calendar" show-lunar show-month-bg show-shrink :sign-list="signList"
      @day-change="dayChange" weekType="星期" @month-change="monthChange" @shrink-click="shrinkClick"></ge-calendar>
    <view class="operation">
      <view class="button" @click="addSign">新增标记</view>
      <view class="button" @click="updateSign">修改标记</view>
    </view>
  </view>
  <view class="content-item">
    <ge-calendar :showShrink="true" shrinkState="week"></ge-calendar>
  </view>
</view>
```
在`script`中使用

```js
export default {
  data() {
    return {
      signList: [{date: "2023-06-25",title: "生日",info: "张三生日"},
        {date: "2023-06-19",title: "朋友聚会"}, 
        {date: "2023-07-22",title: "纪念日"}, 
        {date: "2023-04-11",title: "聚会"}, 
        {date: "2023-07-23",title: "郊游"}, 
        {date: "2023-08-19",title: "游玩"}],
    }
  },
  methods: {
    dayChange(dayInfo) { // 点击日期
      console.log("点击日期", JSON.parse(JSON.stringify(dayInfo)));
    },
    monthChange(monthInfo) { // 切换月份
      console.log("切换月份", JSON.parse(JSON.stringify(monthInfo)));
    },
    shrinkClick(type) {
      console.log("当前状态", type);
    },

    addSign() { // 添加标记
      let addList = [{date: "2023-06-28",title: "休息"}, 
        {date: "2023-06-01",title: "上班"}];
      // 调用 addSignList 方法，传入需要添加的标记数组
      this.$refs.calendar.addSignList(addList);
    },
    deleteSign() { // 删除标记
      let deleteList = [{date: "2023-06-01",title: "上班"}];
      // 调用 deleteSignList 方法，传入需要删除的标记数组
      this.$refs.calendar.deleteSignList(deleteList);
    }
  }
}
```

