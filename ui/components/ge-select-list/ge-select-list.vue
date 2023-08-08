<template>
	<view class="ui-select-list">
		<view v-for="(item, index) in datas" @tap="chooseItem(item, index)" class="title-section"
			:class="selectIndex === index ? 'checked' : ''">
			<view class="title"> {{item.title}} </view>
			<view class="sub-title" v-if="item.subTitle != null && item.subTitle !== ''"> {{item.subTitle}} </view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {

			// 格式为
			/*
			 * {
			 * 		"title": "123",  // 必传
			 * 		"subTitle": "123", // 可不传
			 * 		"id": abc     // 可以不传
			 * }
			 */
			datas: {
				type: Array,
				default: []
			},
			value: {
				type: Number,
				default: -1
			}
		},
		data() {
			return {
				selectIndex: -1
			}
		},
		created() {
			this.selectIndex = this.value;
		},
		methods: {
			chooseItem(item, index) {
				this.selectIndex = index;
				this.$emit('choose-item', {
					item: item,
					index: index
				});
			}
		}
	}
</script>
<style lang="scss">
	.ui-select-list {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 30rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;

		.title-section {
			display: flex;
			min-width: 625rpx;
			height: 138rpx;
			border: none;
			background-color: rgba(67, 118, 254, 0.10);
			justify-content: center;
			flex-direction: column;
			border-radius: 19rpx;
			position: relative;

			.title {
				font-size: 38rpx;
				font-style: normal;
				font-weight: 600;
				line-height: 138%;
				letter-spacing: 0.3rpx;
				width: 100%;
				padding-left: 30rpx;

				&:after {
					font-family: Phosphor;
					content: '\ea30';
					color: var(--ui-select-list-check-border);
					position: absolute;
					right: 30rpx;
					top: 38rpx;
					display: block;
					opacity: 0;
				}
			}

			.sub-title {
				font-size: 27rpx;
				font-style: normal;
				font-weight: 400;
				line-height: 142%;
				letter-spacing: 0.3rpx;
				width: 100%;
				padding-left: 30rpx;
				color: var(--ui-select-list-subtitle-color);
			}

			&.checked {
				background-color: var(--ui-select-list-check-background);
				border: 3.8rpx solid var(--ui-select-list-check-border);
				transition: background-color .5s ease-in-out;

				.title:after {
					opacity: 1;
					transition: opacity 1s ease-in-out;
				}
			}
		}


	}
</style>