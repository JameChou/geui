<template>
	<view style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative">
		<view class="ui-navtabs">
			<view class="item" @tap="tapItem" v-for="(item, index) in items" :key="index" :data-id="index"
				:data-name="item" :class="activeIndex === index ? 'active' : ''"><text>{{item}}</text></view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			items: {
				type: Array,
				default: []
			},
			active: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				activeIndex: 0
			}
		},
		created() {
			this.activeIndex = this.active;
		},
		methods: {
			tapItem(e) {
				this.activeIndex = e.currentTarget.dataset.id;
				this.$emit('tab-select', {
					index: e.currentTarget.dataset.id,
					name: e.currentTarget.dataset.name
				});
			}
		}
	}
</script>
<style lang="scss">
	.ui-navtabs {

		height: 61.2rpx;
		width: 100%;
		background: var(--ui-bg-op-regular);
		display: flex;
		align-items: center;
		border-radius: 19.2rpx;
		justify-content: space-around;

		.item {
			flex: 1;
			height: 55rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-bottom: 2rpx;
			font-style: normal;
			font-weight: 400;
			font-size: 26.9rpx;
			line-height: 142%;

			text {
				border-left: var(--ui-button-primary-border);
				width: 100%;
				text-align: center;
			}

			&.active {
				border-radius: 15.4rpx;
				background: var(--ui-bg-pure-primary);
				font-style: normal;
				font-weight: 600;
				font-size: 26.9rpx;
				line-height: 142%;
				box-shadow: var(--ui-nav-box-shadow);
				backdrop-filter: blur(19.2rpx);
				border-left: none !important;
				transition: 1s;

				text {
					border-left: none;
				}

				+view {
					text {
						border-left: none;
					}
				}
			}
		}

		:first-child {
			margin-left: 5rpx;

			text {
				border-left: none !important;
			}
		}

		:last-child {
			margin-right: 5rpx;
		}

	}
</style>