<template>
	<ge-page no-tabs>
		<ge-navbar opacity></ge-navbar>
		<view class="ui-container">
			<view class="register-title">
				注册账号
			</view>
			<view class="register-sub-title">
				创建一个账号，享受更多优质的服务。更好的保存信息、定时领优惠券
			</view>
			<view class="button-section">
				<view class="ui-button primary blue block" style="width: 60%;"><text
						class="ph ph-wechat-logo header-20"></text>使用微信登录</view>
				<view class="ui-button primary block" style="width: 60%">手机号登录</view>
				<view class="ui-button primary block" style="width: 60%">邮箱登录</view>
			</view>

			<!--
			<view class="agreement">
				<radio></radio>
				<text>我已阅读过<text class="text-blue">《用户协议》</text>，勾选并填写信息</text>
			</view>
			-->

			<view class="having-account">
				已经有账户?
			</view>
			<button class="ui-button sm primary" style="margin-top: 40rpx;">登录</button>
		</view>
	</ge-page>
</template>
<script>
	export default {}
</script>
<style lang="scss" scoped>
	.register-title {
		text-shadow: 0px 24rpx 48rpx rgba(0, 0, 0, 0.15);
		font-size: 120rpx;
		font-style: normal;
		font-weight: 700;
		line-height: 133%;
		letter-spacing: -0.6px;
		margin-top: 150rpx;
		width: 100%;
		text-align: center;
	}

	.register-sub-title {
		margin-top: 48rpx;
		font-size: 40rpx;
		font-style: normal;
		font-weight: 600;
		line-height: 138%;
		letter-spacing: 0.15px;
		width: 100%;
		text-align: center;
	}

	.button-section {
		margin-top: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 48rpx;
	}

	.agreement {
		margin-top: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.having-account {
		margin-top: 80rpx;
		font-size: 48rpx;
		font-style: normal;
		font-weight: 600;
		line-height: 132%;
		width: 100%;
		text-align: center;
	}
</style>