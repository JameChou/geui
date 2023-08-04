<template>
	<scroll-view scroll-x scroll-with-animation class="ui-nav-list" :class="transparent ? '' : 'theme-bg'"
		:scroll-left="scrollLeft">
		<block v-if="type === 'button' || type === 'regular'">
			<view v-for="(item, index) in items" @tap="tabSelect(index)" :id="`item${index}`" :ref="'item' + index"
				:class="[activeIndex === index ? 'active' : '', type === 'button' ? ' btn-item' : ' regular-item']">{{item}}
			</view>
			<view class="indicator" v-show="indicator && type === 'regular'" :style="{width: offsetWidth + 'px', left: offsetLeft + 'px', bottom: indicatorBottom + 'px'}"></view>
		</block>
		<block v-else>
			<view v-for="(item, index) in items" @tap="tabSelect(index)" class="circle-item" :class="[activeIndex === index ? 'active' : '']">{{item}}</view>
		</block>

	</scroll-view>
</template>
<script>
	let _this = null;
	export default {
		props: {
			active: {
				type: Number,
				default: 0
			},
			type: {
				type: String,
				default: 'regular' // button, regular, circle
			},
			transparent: {
				type: Boolean,
				default: false
			},
			items: {
				type: Array,
				default: () => {
					return [];
				}
			},
			indicator: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				activeIndex: 0,
				scrollLeft: 0,
				offsetWidth: 0,
				offsetLeft: 0,
				indicatorBottom: 0
			}
		},
		mounted() {
			_this = this;
			this.activeIndex = this.active;
			this.scrollLeft = this.activeIndex * 60;
			this.$nextTick(() => {
				this.localizeIndicator(this.activeIndex);
			});
		},
		methods: {
			tabSelect(index) {
				this.activeIndex = index;
				this.scrollLeft = (index - 1) * 60;
				this.$emit('tab-select', this.activeIndex);
				if (this.indicator && this.type === 'regular') {
					this.localizeIndicator(index);
				}
			},

			localizeIndicator(index) {
				if (this.items === null || this.items.length == 0) {
					return;
				}
				// #ifdef H5
				let item = this.$refs[`item${index}`][0];
				this.offsetWidth = item.$el.offsetWidth;
				this.offsetLeft = item.$el.offsetLeft;
				// #endif

				// #ifdef MP
				let mpItem = uni.createSelectorQuery().in(this).select(`#item${index}`);
				mpItem.boundingClientRect().exec((res) => {
					let local = res[0];
					this.offsetWidth = local.width;
					this.offsetLeft = local.left - uni.upx2px(31);
					this.indicatorBottom = local.height / 2.2;
				});
				// #endif
			}
		}
	}
</script>
<style lang="scss" scoped>
	.ui-nav-list {
		white-space: nowrap;
		position: relative;

		::-webkit-scrollbar {
			display: none;
		}

		.btn-item {
			display: inline-block;
			position: relative;
			background: var(--ui-button-primary);
			color: var(--ui-tabbar-active-color);
			margin-left: 20rpx;
			border-radius: 999px;
			align-items: center;
			padding: 15rpx 23rpx 15rpx 23rpx;

			font-style: normal;
			font-weight: 600;
			font-size: 27rpx;
			line-height: 142%;
			border: var(--ui-border-regular);

			&.active {
				background: var(--ui-button-gray);
				color: var(--ui-text-regular);
				border: none;

				&::before {
					font-family: 'Phosphor';
					content: '\ed28';
					margin-right: 2rpx;
					color: #FE8E0B;
				}
			}
		}

		&.theme-bg {
			background: var(--ui-bg-primary);
		}

		.regular-item {
			display: inline-block;
			position: relative;
			color: var(--ui-text-regular-3);
			padding: 30.8rpx;
			font-style: normal;
			font-weight: 600;
			font-size: 30.8rpx;
			line-height: 150%;

			&.active {
				color: var(--ui-text-regular);
			}
		}

		.circle-item {
			display: inline-flex;
			margin-right: 36rpx;
			position: relative;
			color: var(--ui-text-regular-3);
			align-items: center;
			justify-content: center;
			font-style: normal;
			font-weight: 600;
			font-size: 30.8rpx;
			line-height: 150%;
			width: 100rpx;
			height: 100rpx;
			border-radius: 100rpx;
			border: var(--ui-border-regular);

			&.active {
				border: var(--ui-navlist-circle-border);
				color: var(--ui-navlist-circle-color);
			}
		}

		.indicator {
			position: absolute;
			left: 0;
			bottom: 0;
			height: 8rpx;
			width: 10rpx;
			transition: .4s;
			border-radius: 6rpx;
			background-color: var(--ui-navlist-indicator);
		}

	}
</style>