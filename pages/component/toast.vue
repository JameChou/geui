<template>
	<ge-page no-tabs>
		<ge-nav title="提示" />

		<view class="ui-container">
			<ge-title category category-content="TOAST" title-content="提示信息" title-icon="number-circle-one" border></ge-title>

			<view class="ui-toast margin-top">
				<view class="toast-icon">
					<text class="ph ph-info"></text>
				</view>
				<view class="toast-content">
					<view class="toast-title">默认自然状态下的Toast</view>
					<view class="toast-subtitle">一些提示信息,do something</view>
				</view>
				<view class="toast-op">
					<view class="ph ph-x"></view>
				</view>
			</view>

			<view class="ui-toast toast-neutral-blue margin-top">
				<view class="toast-icon">
					<text class="ph ph-bell-slash"></text>
				</view>
				<view class="toast-content">
					<view class="toast-title">蓝色状态下的提示信息</view>
					<view class="toast-subtitle">一些提示信息, do something</view>
				</view>
				<view class="toast-op">
					<view class="ph ph-x"></view>
				</view>
			</view>

			<view class="ui-toast toast-warning margin-top">
				<view class="toast-icon">
					<text class="ph ph-warning"></text>
				</view>
				<view class="toast-content">
					<view class="toast-title">警告提示信息</view>
					<view class="toast-subtitle">一些提示信息,do something</view>
				</view>
				<view class="toast-op">
					<view class="ph ph-x"></view>
				</view>
			</view>

			<view class="ui-toast toast-success margin-top">
				<view class="toast-icon">
					<text class="ph ph-checks"></text>
				</view>
				<view class="toast-content">
					<view class="toast-title">成功提示信息</view>
					<view class="toast-subtitle">一些提示信息,do something</view>
				</view>
				<view class="toast-op">
					<view class="ph ph-x"></view>
				</view>
			</view>

			<view class="ui-toast toast-error margin-top">
				<view class="toast-icon">
					<text class="ph ph-prohibit"></text>
				</view>
				<view class="toast-content">
					<view class="toast-title">错误提示信息</view>
					<view class="toast-subtitle">一些提示信息,do something</view>
				</view>
				<view class="toast-op">
					<view class="ph ph-x"></view>
				</view>
			</view>
			<button class="ui-button blue margin-top block" @tap="clickMethod">点击查看示例</button>
		</view>

	</ge-page>
</template>
<script>
export default {
	methods: {
		clickMethod() {
			this.$uiSuccess('成功', '您成功触发了一个成功提示！');
		}
	}
}
</script>
<style lang="scss" scoped>
.ui-toast-box {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding-left: 30rpx;
	padding-right: 30rpx;
	max-height: 123rpx;

	.toast-box-bg {
		position: fixed;
		left: 30rpx;
		z-index: -1;
		height: 123rpx;
		background-color: var(--ui-bg-pure-primary);
		width: calc(100% - 60rpx);
		border-radius: 23rpx;
	}

	&.show {
		overflow-x: hidden;
		overflow-y: auto;
		transition: 0.5s ease-out;
		opacity: 1;
		z-index: 5;
	}

	&.hide {
		opacity: 0;
		transition: 0.5s ease-out;
		z-index: -2;
	}
}

.ui-toast {
	height: 123rpx;
	width: 100%;
	display: flex;
	background-color: var(--ui-toast-netural-bg);
	align-items: center;
	position: relative;
	border-radius: 23rpx;

	&.toast-neutral-blue {
		.toast-icon {
			color: #4376FE;
		}
		background-color: var(--ui-toast-blue-bg);
	}

	&.toast-success {
		.toast-icon {
			color: #00B670;
		}
		background-color: var(--ui-toast-success-bg);
	}

	&.toast-warning {
		.toast-icon {
			color: #FE8E0B
		}
		background-color: var(--ui-toast-warning-bg);
	}

	&.toast-error {
		.toast-icon {
			color: #E55539;
		}
		background-color: var(--ui-toast-error-bg);
	}

	.toast-icon {
		width: 77rpx;
		height: 77rpx;
		background-color: var(--ui-toast-icon-bg);
		border-radius: 19rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--ui-text-regular-3);
		font-size: 45rpx;
		position: relative;
		margin-left: 23rpx;
	}

	.toast-op {
		font-size: 40rpx;
		color: var(--ui-text-regular-2);
		position: absolute;
		right: 48rpx;
	}

	.toast-content {
		position: relative;
		padding-left: 23rpx;

		.toast-title {
			font-style: normal;
			font-weight: 600;
			font-size: 30.8rpx;
			line-height: 150%;
		}

		.toast-subtitle {
			ont-style: normal;
			font-weight: 400;
			font-size: 27rpx;
			line-height: 142%;
			color: var(--ui-text-regular-2);
		}
	}
}


</style>