<template>
  <view class="ui-tab-bottom">
    <view class="ui-tabbar" :style="[{height: statusBarHeight + 'px'}]">
      <view class="item" @tap="tapItem(item, index)" v-for="(item, index) in data" :key="index" :class="activeIndex === index ? 'active' : ''">
        <text class="ph" :class="item.icon === null || item.icon === '' ? 'ph-house' : item.icon">
          <view class="badge" v-if="item.notification"></view>
        </text>
        <text class="action-text">{{item.name}}</text>
      </view>
    </view>
  </view>
</template>
<script>
	export default {
		/*
		    {
		      name: '首页 ',
		      url: '/pages/index/index',
		      icon: 'ph-house',
		      click: 'switch' // switch 切换tab, new 转向新页面,
		      notification: true  // 是否有提示红点
		    }
		 */
		props: {
			data: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				activeIndex: 0,
        statusBarHeight: this.statusBar
			}
		},
		methods: {
			tapItem(item, index) {
        this.activeIndex = index;
				if (item.click === 'switch') {
					uni.switchTab({
						url: item.url
					});
				} else {
					// 转到新的页面
					uni.navigateTo({
						url: item.url
					})
				}
			}
		}
	}
</script>
<style lang="scss">
.ui-tab-bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
}
	.ui-tabbar {
		display: flex;
		align-items: top;
		justify-content: space-around;
		background-color: var(--ui-tabbar-bg-primary);
		backdrop-filter: blur(36.7rpx);
		min-height: 120rpx;
		z-index: 9999 !important;
    padding-top: 16.8rpx;

		.item {
			color: rgba(0, 0, 0, 0.618);

			:first-child[class*="ph-"] {
				text-align: center;
				justify-content: center;
				display: flex;
				font-size: 44rpx;
			}

			.action-text {
				position: relative;
				bottom: 9rpx;
				font-size: 23rpx;
				font-weight: 400;
			}

			&.active {
				color: var(--ui-tabbar-active-color);
			}

      .badge {
        width: 6.24rpx;
        height: 6.24rpx;
        position: absolute;
        background: #E55539;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 99px;
      }
		}
	}
</style>
