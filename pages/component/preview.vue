<template>
	<ge-page noTabs>
		<ge-nav title="预览表单"></ge-nav>

		<view class="ui-container">
			<view class="ui-preview-form margin-top">
				<view class="preview-title text-green">
					1920元
				</view>

				<view class="preview-detail solid-bottom">
					<view class="label">商品名</view>
					<view class="value">小米10Pro手机</view>
				</view>
				<view class="preview-detail solid-bottom">
					<view class="label">配置</view>
					<view class="value">骁龙Gen 16GRAM + 256GROM</view>
				</view>
				<view class="preview-detail solid-bottom">
					<view class="label">收件人</view>
					<view class="value">雷军</view>
				</view>
				<view class="preview-detail solid-bottom">
					<view class="label">支付方式</view>
					<view class="value">支付宝</view>
				</view>
				<view class="preview-detail solid-bottom">
					<view class="label">质保</view>
					<view class="value">2年</view>
				</view>
				<view class="preview-detail">
					<view class="label">价格</view>
					<view class="value">RMB 1920</view>
				</view>
				<view class="preview-detail">
					<view class="label">运费<text class="ph ph-question"></text></view>
					<view class="value">RMB 0</view>
				</view>
				<view class="preview-detail">
					<view class="label text-bold">总价</view>
					<view class="value text-bold">RMB 1920</view>
				</view>
			</view>

			<view class="ui-toast margin-top">
				<view class="toast-icon">
					<text class="ph ph-info"></text>
				</view>
				<view class="toast-content">
					<view class="toast-title">自然提示框</view>
					<view class="toast-subtitle">一些提示信息,do something</view>
				</view>
				<view class="toast-op">
					<view class="ph ph-x"></view>
				</view>
			</view>

			<button class="ui-button blue block margin-top">提交订单</button>

		</view>
	</ge-page>
</template>
<script>
</script>
<style lang="scss">
.ui-preview-form {
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;

	.preview-title {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 65rpx;
		font-style: normal;
		font-weight: 700;
		line-height: 130%;
		padding-bottom: 31rpx;
		width: 100%;
		border-bottom: var(--ui-border-regular);
	}

	.preview-detail {
		min-height: 105rpx;
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;

		&.solid-bottom {
			border-bottom: var(--ui-border-regular);
		}

		.label {
			font-size: 31rpx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			letter-spacing: 0.5rpx;
			position: absolute;
			left: 0;
		}
		.value {
			font-size: 31rpx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			max-width: 480rpx;
			letter-spacing: 0.5rpx;
			position: absolute;
			right: 0;
			color: var(--ui-text-regular-2);
		}
	}
}
</style>