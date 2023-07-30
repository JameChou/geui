<template>
	<view class="boarding-swiper">
		<swiper indicator-dots indicator-color="#6D6868"
						@change="swiperChange"
						:current="nowPage"
		>
			<swiper-item class="landing-page">
				<view class="animation-box">
					<ge-lottie canvasId="animation1"
										 :data="animationData1"
										 width="100%"
										 height="100%"
					>
					</ge-lottie>
				</view>
				<view class="title">About GOGE</view>
				<view class="content">GOGE是一个基于uni-app而写的前端ui框架。</view>
			</swiper-item>
			<swiper-item class="landing-page" style="background: #B7ABFD">
				<view class="animation-box">
					<ge-lottie canvasId="animation2"
										 :data="animationData2"
										 width="100%"
										 height="100%"
					>
					</ge-lottie>
				</view>
				<view class="title">第二页标题</view>
				<view class="content">不知写什么，示例，背景为#B7ABFD</view>
			</swiper-item>
			<swiper-item class="landing-page" style="background: #95B6FF">
				<view class="animation-box">
					<ge-lottie canvasId="animation2"
										 :data="animationData3"
										 width="100%"
										 height="100%"
					>
					</ge-lottie>
				</view>
				<view class="title">第三页标题</view>
				<view class="content">登录页，演示。当下次再打开此应用，不会再显示。</view>
			</swiper-item>
		</swiper>

		<view class="skip-button" @tap="buttonTapSkip">跳过</view>
		<view class="next-button" @tap="buttonTapNext">{{nowPage === 2 ? '进入系统' : '下一页'}}<text class="ph ph-arrow-right"></text></view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			nowPage: 0,
			animationData1: null,
			animationData2: null,
			animationData3: null,
			urls: [
					'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation_phone_social.json',
					'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation_rocket_2.json',
					'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation_work_idea.json'
			]
		}
	},
	async onLoad() {
		uni.setStorageSync("ge_onboarding_showed", "showed");
		for (let i=0; i<this.urls.length; i++) {
			let data = await uni.request({
				url: this.urls[i]
			});

			this[`animationData${i+1}`] = data.data;
		}
	},
	methods: {
		swiperChange(e) {
			this.nowPage = e.detail.current;
		},
		buttonTapNext() {
			if (this.nowPage === 2) {
				uni.switchTab({
					url: '/pages/index/index'
				});

				return;
			}
			this.nowPage++;
		},
		buttonTapSkip() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		}
	}
}
</script>
<style lang="scss" scoped>
.boarding-swiper {
	width: 100%;
	height: 100vh;
	background-color: white;

	swiper {
		width: 100%;
		height: 100%;

		/deep/ .uni-swiper-dots { // 指示点整个区域
			position: absolute;
			bottom: 110rpx;
		}
		/deep/ .uni-swiper-dot { // 指示点元素默认样式
			width: 12rpx!important;
			height: 12rpx!important;
		}
		/deep/ .uni-swiper-dot-active { // 指示点元素激活（当前选中）状态样式
			border-radius: 24rpx;
			background: #000;
			width: 32rpx !important;
			height: 12rpx !important;
		}

		/deep/ .wx-swiper-dots.wx-swiper-dots-horizontal {
			position: absolute;
			bottom: 100rpx;
		}

		/deep/ .wx-swiper-dot {
			width: 12rpx!important;
			height: 12rpx!important;
		}

		/deep/ .wx-swiper-dot-active {
			border-radius: 24rpx;
			background: #000;
			width: 32rpx !important;
			height: 12rpx !important;
		}
	}

	.landing-page {
		position: relative;
		width: 100%;

		.animation-box {
			width: 100%;
			height: 762rpx;
			margin-top: 100rpx;
		}

		.title {
			color: #000;
			text-align: center;
			font-size: 48rpx;
			font-style: normal;
			font-weight: 700;
			line-height: 52rpx; /* 108.333% */
			margin-top: 54rpx;
		}

		.content {
			margin-top: 54rpx;
			color: #454242;
			text-align: center;
			font-size: 28rpx;
			font-style: normal;
			font-weight: 600;
			line-height: 52rpx; /* 185.714% */
		}
	}

	.skip-button {
		position: absolute;
		left: 48rpx;
		bottom: 100rpx;
		color: #000;
		text-align: center;
		font-size: 28rpx;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.next-button {
		position: absolute;
		right: 48rpx;
		bottom: 100rpx;
		color: #000;
		text-align: center;
		font-size: 28rpx;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
}
</style>