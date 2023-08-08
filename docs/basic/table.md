<div class="simulator">
    <iframe src="https://jamechou.github.io/geui-h5/#/pages/basic/table" height="670px"></iframe>
</div>

## 样例 

scss文件在`/ui/scss/basic/table.scss`内

```html
<view class="ui-table margin-top">
    <view class="table-header">
        <view class="table-tr">
        <view class="table-th">消费</view>
        <view class="table-th">支付</view>
        </view>
    </view>

    <view class="table-body">
        <view class="table-tr border-bottom">
        <view class="table-td">水果</view>
        <view class="table-td text-money">94</view>
        </view>

        <view class="table-tr border-bottom">
        <view class="table-td">汉堡</view>
        <view class="table-td text-money">26</view>
        </view>

        <view class="table-tr border-bottom">
        <view class="table-td">笔记本</view>
        <view class="table-td text-money">118</view>
        </view>

        <view class="table-tr font-bold">
        <view class="table-td">共支出</view>
        <view class="table-td text-money">159</view>
        </view>
    </view>
</view>
```
