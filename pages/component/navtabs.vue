<template>
  <ge-page no-tabs>
    <ge-navbar opacity title="导航栏"></ge-navbar>
    <view class="ui-container">
      <ge-title category category-content="TIME" title-content="时间类型的tabs" title-icon="calendar" border></ge-title>
      <view class="margin-top">
        <view class="ph ph-number-circle-one text-orange" style="font-size: 45rpx;"></view>
        <ge-nav-timetabs @tab-select="tapHandler"></ge-nav-timetabs>
      </view>

      <view class="margin-top">
        <view class="ph ph-number-circle-two text-orange" style="font-size: 45rpx;"></view>
        <ge-nav-timetabs active="begin" full-day></ge-nav-timetabs>
      </view>

      <ge-title category category-content="TAB" title-content="分类TAB" title-icon="calendar" border></ge-title>
      <view class="margin-top">
        <view class="ph ph-number-circle-one text-orange" style="font-size: 45rpx;"></view>
        <ge-navtabs :items="items"></ge-navtabs>
      </view>
      <view class="margin-top">
        <view class="ph ph-number-circle-two text-orange" style="font-size: 45rpx;"></view>
        <ge-navtabs :items="items2" :active="1"></ge-navtabs>
      </view>

      <ge-title category category-content="TAB" title-content="滚动类的Tabs" title-icon="scroll" border></ge-title>
      <view class="margin-top" style="width: 688rpx;">
        <view class="ph ph-number-circle-one text-orange" style="font-size: 45rpx;"></view>
        <ge-navlist :items="items3" type="regular"></ge-navlist>
      </view>

			<view class="margin-top" style="width: 688rpx;">
				<view class="ph ph-number-circle-two text-orange" style="font-size: 45rpx;"></view>
				<ge-navlist indicator :items="items3" type="regular" :active="2"></ge-navlist>
			</view>

      <view class="margin-top" style="width: 688rpx;">
        <view class="ph ph-number-circle-three text-orange" style="font-size: 45rpx;"></view>
        <ge-navlist :items="items3" type="button"></ge-navlist>
      </view>
    </view>
  </ge-page>
</template>
<script>
let _this = null;
export default {
  data() {
    return {
      items: [
          '7分',
          '15分',
          '1小时',
          '1天',
          '1月',
          '1年'
      ],
      items2: [
          '男',
          '女',
          '未知'
      ],
      items3: [
      ]
    }
  },
  onLoad() {
    _this = this;
    for (let i = 1; i <= 10; i++) {
      this.items3.push(`Tab-${i}`);
    }
  },
	methods: {
		tapHandler(item) {
			console.log(item);
		}
	}

}
</script>
<style lang="scss">
</style>