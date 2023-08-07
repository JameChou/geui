<template>
	<ge-page noTabs>

		<ge-nav title="图标" opacity></ge-nav>

    <view class="ui-container">
      <ge-title category category-content="SPEC" title-content="Phosphoricons" title-icon="phosphor-logo" border></ge-title>
      <text class="text-body-16">
        本系统使用了Phophor icon, 开源图标。可以在phosphoricons.com查询搜索图标,本系统使用的是Regular类,其他的比如Light、Bold、Fill都没有进行集成,如果需要可以自行进行集成。
      </text>

      <ge-title category category-content="SPIN" title-content="图标动画" title-icon="spinner" border></ge-title>
      <view class="ui-grid column-4 gap-df margin-top">
        <view class="icon-body">
          <view class="ph ph-arrow-clockwise ui-icon-spin"></view>
          <view>arrow-clockwise</view>
        </view>
        <view class="icon-body">
          <view class="ph ph-spiral ui-icon-spin"></view>
          <view>spiral</view>
        </view>
        <view class="icon-body">
          <view class="ph ph-spinner ui-icon-spin"></view>
          <view>spinner</view>
        </view>
        <view class="icon-body">
          <view class="ph ph-circle-notch ui-icon-spin"></view>
          <view>circle-notch</view>
        </view>
      </view>

      <ge-title category category-content="示例" title-content="图标展示" title-icon="bookmark-simple" border></ge-title>

      <view class="ui-grid column-4 gap-df margin-top">
        <view class="icon-body" v-for="(item, index) in iconData">
          <view class="ph" :class="'ph-' + item"></view>
          <view>{{item}}</view>
        </view>
      </view>

    </view>
	</ge-page>
</template>
<script>
	const icons = require('@/mock/icon.json');
	export default {
		data() {
			return {
				iconData: icons
			}
		},
		onLoad() {
		}
	}
</script>
<style lang="scss">
.icon-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :first-child {
    font-size: 80rpx;
  }

  :last-child {
    font-size: 23rpx;
  }
}
</style>