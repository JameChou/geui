<template>
	<ge-page nav="false" noTabs>

		<view class="ui-form-group black-shadow-reg text-align-left">
			<text class="ph ph-arrow-left"></text>
			<input type="text" placeholder="搜索icon" />
		</view>
	</ge-page>
</template>
<script>
	export default {

	}
</script>
<style lang="scss">
	.ui-form-group {
		position: relative;
		width: 80%;
		min-height: 108rpx;
		background: var(--ui-bg-primary);
		border-radius: 19.2rpx;
		display: flex;
		align-items: center;
		
		&.text-align-center {
			text-align: center;
		}
		
		&.text-align-left {
			text-align: left;
		}

		input {
			width: 100%;
			margin: 10rpx;
			box-sizing: border-box;
			padding: 50rpx;
		}

		text {
			position: absolute;
			left: 0;
			padding: 20rpx 20rpx;
			color: var(--ui-text-highlight);
		}
	}
</style>