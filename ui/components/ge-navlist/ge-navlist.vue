<template>
	<scroll-view scroll-x scroll-with-animation class="ui-nav-list" :class="transparent ? '' : 'theme-bg'"
		:scroll-left="scrollLeft">
		<block v-if="type === 'button' || type === 'regular'">
			<view v-for="(item, index) in items" @tap="tabSelect(index)" :class="[activeIndex === index ? 'active' : '', type === 'button' ? 'btn-item' : 'regular-item',
					type === 'regular' && indicator ? 'indicator' : ''
			]">
				{{item}}
			</view>
		</block>
		<block v-else>
			<view v-for="(item, index) in items" @tap="tabSelect(index)" class="circle-item"
				:class="[activeIndex === index ? 'active' : '']">{{item}}</view>
		</block>

	</scroll-view>
</template>
<script>
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
			this.activeIndex = this.active;
			this.scrollLeft = this.activeIndex * 60;
		},
		methods: {
			tabSelect(index) {
				this.activeIndex = index;
				this.scrollLeft = (index - 1) * 60;
				this.$emit('tab-select', this.activeIndex);
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

				&:after {
					transition: .4s;
					width: 100%;
				}
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
			&:after {
				content: '';
				height: inherit;
				width: inherit;
				height: 8rpx;
				border-radius: 6rpx;
				width: 0;
				background-color: var(--ui-navlist-indicator);
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}

	}
</style>