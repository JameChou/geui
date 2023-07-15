<template>
	<ge-page no-tabs>
		<ge-nav title="弹出层"></ge-nav>
		<view class="ui-container bg-mask-50">
			<view class="ui-bottom-modal">
				<view class="modal-title">
				  <view class="title-bar" @tap="hideModal"><view></view></view>
					<view class="title-content">
						<view class="big-title">Filter Content</view>
						<view class="sub-title">Refine your home screen feed</view>
						<view class="title-close" @tap="hideModal"><text class="ph ph-x"></text></view>
					</view>
				</view>

				<view class="modal-body">
					<ge-select-list :datas="selectList" @choose-item="chooseItem" :value="1"></ge-select-list>
				</view>

				<view class="operate-bar">
					<!--
					<button class="ui-button cancel-btn lg gray">取消</button>
					<button class="ui-button confirm-btn lg blue">确认</button>
					-->
					<button class="ui-button block blue">确认</button>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
export default {
	data() {
		return {
			selectList: [
				{
					title: "跟随系统变化"
				},
				{
					title: "明亮模式",
					subTitle: "系统以白色为主色调"
				},
				{
					title: "黑暗模式",
					subTitle: "系统以黑色为主色调"
				}
			]
		}
	},
	methods: {
		chooseItem(data) {
			console.log(data);
		},
		cancel() {
			console.log('cancel the modal');
		}
	}
}
</script>
<style lang="scss">
.ui-bottom-modal {
	position: absolute;
	width: 100%;
	background: var(--ui-bg-primary);
	box-shadow: var(--ui-nav-box-shadow);
	backdrop-filter: blur(19rpx);
	border-radius: 38rpx 38rpx 0 0;
	padding-bottom: 70rpx;
	z-index: 3;
	bottom: 0;
	left: 0;

	.modal-title {
		position: relative;
		display: flex;
		flex-direction: column;
		border-bottom: var(--ui-border-regular);
		padding-bottom: 23rpx;

		.title-bar {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 15.4rpx;

			view {
				width: 69rpx;
				height: 7.7rpx;
				border-radius: 999px;
				background-color: var(--ui-button-gray);
			}
		}

		.title-content {
			position: relative;
			display: flex;
			flex-direction: column;
			padding-top: 7.7rpx;
			padding-left: 30.8rpx;
			justify-content: center;

			.big-title {
				font-style: normal;
				font-weight: 600;
				font-size: 38.5rpx;
				line-height: 138%;
			}

			.sub-title {
				font-style: normal;
				font-weight: 400;
				font-size: 27rpx;
				line-height: 142%;
				color: var(--ui-text-regular-3);
			}

			.title-close {
				position: absolute;
				right: 30.8rpx;
				height: 69rpx;
				width: 69rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 40rpx;
				background-color: var(--ui-button-gray);
				border-radius: 999px;
			}
		}
	}

	.modal-body {
		padding-left: 30.8rpx;
		padding-right: 30.8rpx;
		position: relative;
		min-height: 150rpx;
	}

	.operate-bar {
		height: 92rpx;
		padding-left: 30.8rpx;
		padding-right: 30.8rpx;

		.cancel-btn {
			position: absolute;
			left: 30.8rpx;
		}

		.confirm-btn {
			position: absolute;
			right: 30.8rpx;
		}
	}
}
</style>