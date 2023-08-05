<template>
	<ge-page no-tabs>
		<ge-nav :show-back="false"></ge-nav>
		<view class="setting-sheet">
			<view class="setting-bar">
				<view class="cancel ph ph-x"></view>
				<text>GE-Ui</text>
				<view class="confirm ph ph-check"></view>
			</view>

			<view class="setting-section">
				<view class="title text-green"><text class="ph ph-bell header-20" style="margin-right: 10rpx;"></text>提醒设置</view>
				<view class="section">
					<view class="item">
						允许发送通知给我
						<view class="op">
							<switch></switch>
						</view>
					</view>
					<view class="item">
						何时提醒我处理查看待办事项
						<view class="op">
							<view class="text-bold ui-flex align-center">10:15<text class="text-green header-20 ph ph-caret-right"></text></view>
						</view>
					</view>
					<view class="item">
						暂时静音
						<view class="op">
							<switch checked></switch>
						</view>
					</view>
				</view>
			</view>
			<view class="setting-section">
				<view class="title text-blue"><text class="ph ph-gear header-20" style="margin-right: 10rpx;"></text>系统样式</view>
				<view class="section">
					<view class="item">
						允许发送通知给我
						<view class="op">
							<switch></switch>
						</view>
					</view>
					<view class="item">
						何时提醒我处理查看待办事项
						<view class="op">
							<view class="text-bold ui-flex align-center">10:15<text class="text-green header-20 ph ph-caret-right"></text></view>
						</view>
					</view>
					<view class="item">
						暂时静音
						<view class="op">
							<switch checked></switch>
						</view>
					</view>
				</view>
			</view>
			<view class="setting-section">
				<view class="title text-orange"><text class="ph ph-gear header-20" style="margin-right: 10rpx;"></text>系统样式</view>
				<view class="section">
					<view class="item">
						允许发送通知给我
						<view class="op">
							<switch></switch>
						</view>
					</view>
					<view class="item">
						何时提醒我处理查看待办事项
						<view class="op">
							<view class="text-bold ui-flex align-center">10:15<text class="text-green header-20 ph ph-caret-right"></text></view>
						</view>
					</view>
					<view class="item">
						暂时静音
						<view class="op">
							<switch checked></switch>
						</view>
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.setting-sheet {
	background-color: #FFF;
	border-radius: 32rpx 32rpx 0 0;
	width: 100%;
	height: 100vh;

	.setting-bar {
		display: flex;
		width: 100%;
		height: 112rpx;
		align-items: center;
		justify-content: center;
		position: relative;
		font-size: 40rpx;
		font-style: normal;
		font-weight: 600;
		line-height: 138%; /* 27.6px */
		letter-spacing: 0.15px;

		.cancel {
			position: absolute;
			left: 16rpx;
			color: #4376FE;
		}

		.confirm {
			position: absolute;
			right: 16rpx;
			color: #4376FE;
		}
	}

	.setting-section {
		.title {
			width: 100%;
			height: 76rpx;
			padding: 16rpx 0rpx 0 32rpx;
			display: flex;
			align-items: center;

			font-size: 32rpx;
			font-style: normal;
			font-weight: 600;
			line-height: 150%; /* 24px */
			letter-spacing: 0.08px;
		}

		.section {
			background-color: rgb(245, 245, 245);
			width: 100%;
			padding: 0 32rpx 0 32rpx;
			position: relative;
			border-radius: 32rpx;

			.item {
				height: 96rpx;
				width: 100%;
				display: flex;
				align-items: center;
				font-size: 32rpx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				letter-spacing: 0.269px;

				.op {
					position: absolute;
					right: 32rpx;
				}
			}
		}
	}
}
</style>