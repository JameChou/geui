<template>
	<scroll-view scroll-x scroll-with-animation class="ui-nav-list" :class="type === 'button' ? '' : 'regular'"
		:scroll-left="scrollLeft">
		<view v-for="(item, index) in items" :data-id="index" @tap="tabSelect"
			:class="[activeIndex === index ? 'active' : '', type === 'button' ? ' btn-item' : ' regular-item']">{{item}}
		</view>
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
				default: 'regular'
			},
			items: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				activeIndex: 0,
				scrollLeft: 0
			}
		},
		created() {
			this.activeIndex = this.active;
			this.scrollLeft = this.activeIndex * 60;
		},
		methods: {
			tabSelect(e) {
				this.activeIndex = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
		}
	}
</script>
<style lang="scss">
	.ui-nav-list {
		white-space: nowrap;

		::-webkit-scrollbar {
			display: none;
		}

		.btn-item {
			display: inline-block;
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

		&.regular {
			background: var(--ui-bg-primary);
		}

		.regular-item {
			display: inline-block;
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

	}
</style>