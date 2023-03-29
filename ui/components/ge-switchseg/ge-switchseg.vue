<template>
	<view class="ui-switch-segment">
		<view class="item" v-for="(item, index) in datas" :class="activeIndex === index ? 'active' : ''"
			@tap="chooseTab(item, index);">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {

			/*
			   数据必须有一个name,其他属性可以按需
			 */
			datas: {
				type: Array,
				default: []
			},
			tapHandler: {
				type: Function,
				default: () => {
					return Function;
				}
			},
      initActive: {
        type: Number,
        default: 0
      }
		},
		data() {
			return {
				activeIndex: this.initActive
			};
		},
		methods: {
			chooseTab(item, index) {
				this.activeIndex = index;
				this.tapHandler(item, index);
			}
		}

	}
</script>
<style lang="scss">
	.ui-switch-segment {
		align-items: center;
		display: flex;
		min-width: 290rpx;
		background: var(--ui-segment-background);
		backdrop-filter: blur(19.1px);
		border-radius: 19.2rpx;
		height: 71.1rpx;

		.item {
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: center;
			background: transparent;
			height: 90%;
			-webkit-font-smoothing: antialiased;
			color: var(--ui-segment-text-color);
			margin-left: 3.8rpx;
			margin-right: 3.8rpx;
			font-weight: 400;
			font-size: 30.8rpx;

			&.active {
				background: var(--ui-segment-active-background);
				box-shadow: 0px 3.8rpx 11.5rpx rgba(0, 0, 0, 0.2);
				backdrop-filter: blur(19.2rpx);
				border-radius: 15.4rpx;
				font-weight: 600;
				color: var(--ui-segment-active-color);
			}
		}
	}
</style>