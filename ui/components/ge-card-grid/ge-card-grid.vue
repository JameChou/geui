<template>
	<view class="ui-card-grid">
		<view class="grid-card-item" @tap="click(item, index)" v-for="(item, index) in items" :index="index">
			<image :src="item.image" :mode="getMode(item)" />
			<view class="card-content">
				<view class="card-title">
					{{item.title}}
				</view>
				<view class="card-sub">
					{{item.subTitle}}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'GeCardGrid',
		props: {
			items: {
				type: Array,
				default: () => {
					return [];
				}
			}
		},
		methods: {
			click(item, index) {
				this.$emit('click', {
					item: item,
					index: index
				});
			},
			getMode(item) {
				if (item.mode == null) {
					return 'aspectFill';
				}

				return item.mode;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.ui-card-grid {
		display: grid;
		position: relative;
		grid-template-columns: auto auto;
		column-gap: 15rpx;
		row-gap: 15rpx;

		.grid-card-item {
			width: 337rpx;
			height: 337rpx;
			position: relative;

			img,
			image {
				width: 337rpx;
				height: 337rpx;
				border-radius: 11rpx;
			}

			.card-content {
				left: 11rpx;
				bottom: 5rpx;
				position: absolute;

				.card-title {
					font-style: normal;
					font-weight: 600;
					font-size: 38.4rpx;
					line-height: 138%;
					color: #FFFFFF;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 330rpx;
					display: block;
				}

				.card-sub {
					font-style: normal;
					font-weight: 400;
					font-size: 23rpx;
					line-height: 130%;
					color: var(--ui-text-regular-3);
					width: 330rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					display: block;
				}
			}
		}
	}
</style>