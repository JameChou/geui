<template>
	<view class="ui-avatar-group">
		<slot></slot>
	</view>
</template>
<script>
	export default {
		name: "GeAvatarGroup"
	}
</script>
<style lang="scss">
	.ui-avatar-group {
		direction: rtl;
		unicode-bidi: bidi-override;
		display: inline-block;
		padding: 0 10rpx 0 40rpx;

		/deep/ .ui-avatar {
			margin-left: -30rpx;
			vertical-align: middle;
		}
	}
</style>