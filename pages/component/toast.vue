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
<style lang="scss">

</style>