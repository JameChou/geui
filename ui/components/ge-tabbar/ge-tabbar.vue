<template>
	<view class="ui-tab-bottom">
		<view class="ui-tabbar" :class="transparent ? 'bg-transparent' : ''">
			<view class="item" @tap="tapItem(item, index)" v-for="(item, index) in items" :key="index">
				<view :class="activeIndex === index ? 'active': ''" v-if="item.type === 'icon'">
					<view class="tab-icon" :class="item.icon">
						<view class="badge" v-if="item.notification"></view>
					</view>
					<view class="action-text">{{item.name}}</view>
				</view>

				<view v-if="item.type === 'button'">
					<button :class="item.icon" class="tab-button ui-button blue round"></button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			items: {
				type: Array,
				default: () => {
					return [];
				}
			},
			active: {
				type: Number,
				default: 0
			},
			transparent: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.activeIndex = this.active;
		},
		data() {
			return {
				activeIndex: 0
			}
		},
		methods: {
			tapItem(item, index) {
				// this.activeIndex = index;
				if (item.click === 'switch') {
					uni.switchTab({
						url: item.url
					});
				} else if (item.click === 'new') {
					// 转到新的页面
					uni.navigateTo({
						url: item.url
					})
				} else {
					this.$emit('tap-tabbar', {
						item: item,
						index: index
					});
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
		z-index: 2;
	}

	.ui-tabbar {
		display: flex;
		align-items: top;
		justify-content: space-around;
		background-color: var(--ui-tabbar-bg-primary);
		backdrop-filter: blur(36.7rpx);
		min-height: 140rpx;
		z-index: 2 !important;
		padding-top: 25rpx;

		&.bg-transparent {
			background-color: transparent;
		}

		.item {
			color: var(--ui-tabbar-text-color);

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
				margin-top: 10rpx;
			}

			.active {
				color: var(--ui-tabbar-active-color);
				transition: color .5s ease-in-out;
			}

			.tab-icon {
				position: relative;
			}

			.badge {
				width: 15rpx;
				height: 15rpx;
				position: relative;
				top: 0rpx;
				right: 0rpx;
				background: #E55539;
				border: 4rpx solid #FFFFFF;
				box-shadow: 0px 4rpx 11.5rpx rgba(0, 0, 0, 0.2);
				backdrop-filter: blur(19.2rpx);
				border-radius: 99px;
			}

			.tab-button {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 119rpx;
			}
		}
	}
</style>