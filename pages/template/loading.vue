<template>
	<ge-page no-tabs :loading="false" backgroundImage="none">
		<view class="loading-container">
			<ge-lottie
					canvasId="animation1"
					:data="animationData"
					width="700rpx"
					height="700rpx"
			>
			</ge-lottie>
			<view class="text-bold text-body-16">加载中...</view>
		</view>
	</ge-page>
</template>
<script>
export default {
	data() {
		return {
			animationData: null
		}
	},
	async onLoad() {
		let animationData = await uni.request({
			url: 'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation_welcome.json'
		});

		this.animationData = animationData.data;

		const value = uni.getStorageSync('ge_onboarding_showed');
		let url = value === '' ? '/pages/template/onboarding' : '/pages/index/index';
		setTimeout(() => {
			if (value === '') {
				uni.navigateTo({
					url: url
				});
			} else {
				uni.switchTab({
					url: url
				})
			}
		}, 1000);
	}
}
</script>
<style lang="scss" scoped>
.loading-container {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}
</style>