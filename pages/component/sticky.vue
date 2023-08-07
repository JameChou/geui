<template>
	<ge-page>
		<ge-navbar title="固定" opacity sticky custom-left>
			<template v-slot:customLeft>
				<text class="ph ph-arrow-left"></text>
				<text class="ph ph-stack"></text>
			</template>
		</ge-navbar>

		<view class="ui-container">
			<view class="stick-example-item" v-for="(item, index) in 4">{{index + 1}}</view>
			<ge-sticky :offset-top="20">
				<view class="stick-example-item bg-red">5</view>
			</ge-sticky>
			<view class="stick-example-item" v-for="(item, index) in 4">{{index + 6}}</view>
			<ge-sticky :offset-top="150">
				<view class="stick-example-item bg-red">10</view>
			</ge-sticky>
			<view class="stick-example-item" v-for="(item, index) in 15">{{index + 11}}</view>
		</view>
	</ge-page>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.stick-example-item {
	width: 100%;
	height: 100rpx;
	background-color: rgba(67, 118, 254, 0.6);
	color: white;
	margin-bottom: 10rpx;
	display: flex;
	align-items: center;
	justify-content: center;

	&.red-bg {
		background-color: rgba(229, 85, 57, 0.6);
	}
}
</style>