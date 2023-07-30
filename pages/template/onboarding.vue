<template>
	<view class="boarding-swiper">
		<swiper indicator-dots indicator-color="rgba(255, 255, 255, 0.40)" indicator-active-color="#FFF"
						@change="swiperChange"
						:current="nowPage"
		>
			<swiper-item class="landing-page" style="background-color: #7EDAE8">
				<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/illustrations/woman_play_phone.png" />

				<view class="title">
					Help your customers and
					your team
				</view>
				<view class="sub-title">Lorem Ipsum is simply dummy text of the printing
					and typesetting industry.</view>
			</swiper-item>
			<swiper-item class="landing-page" style="background-color: #D1C0FF">
				<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/illustrations/two_people_cat.png" />

				<view class="title">
					Help your customers and
					your team
				</view>
				<view class="sub-title">Lorem Ipsum is simply dummy text of the printing
					and typesetting industry.</view>
			</swiper-item>
			<swiper-item class="landing-page" style="background-color: #F6CD61">
				<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/illustrations/woman_cat_yellow.png" />

				<view class="title">
					Help your customers and
					your team
				</view>
				<view class="sub-title">Lorem Ipsum is simply dummy text of the printing
					and typesetting industry.</view>
			</swiper-item>
			<swiper-item class="landing-page" style="background-color: #FA8A9F">
				<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/illustrations/team_work_pink.png" />

				<view class="title">
					Help your customers and
					your team
				</view>
				<view class="sub-title">Lorem Ipsum is simply dummy text of the printing
					and typesetting industry.</view>
			</swiper-item>
		</swiper>

		<view class="onboarding-next-button">
			<button @tap="buttonTapNext">{{nowPage === 3 ? '进入主页' : '继续'}}</button>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			nowPage: 0
		}
	},
	async onLoad() {
		uni.setStorageSync("ge_onboarding_showed", "showed");
	},
	methods: {
		swiperChange(e) {
			this.nowPage = e.detail.current;
		},
		buttonTapNext() {
			if (this.nowPage === 3) {
				uni.switchTab({
					url: '/pages/index/index'
				});

				return;
			}
			this.nowPage++;
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
	}

	.landing-page {
		img, image {
			width: 100%;
			height: 720rpx;
			margin-top: 100rpx;
		}

		.title {
			color: #000;
			text-align: center;
			font-size: 48rpx;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			margin-top: 70rpx;
		}

		.sub-title {
			color: #222;
			text-align: center;
			font-size: 27rpx;
			font-style: normal;
			font-weight: 400;
			margin-top: 30rpx;
		}
	}

	.onboarding-next-button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90%;
			height: 120rpx;
			border-radius: 200rpx;
			background: #F5F5F5;
			color: #000;
			text-align: center;
			font-size: 40rpx;
			font-style: normal;
			font-weight: 500;
			line-height: normal;

			position: absolute;
			bottom: 200rpx;
		}
	}
}
</style>