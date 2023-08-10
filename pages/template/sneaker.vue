<template>
	<ge-page>
		<ge-navbar opacity title="Vaporfly3"></ge-navbar>
		<view class="ui-container" :class="system_theme === 'dark' ? 'sneaker-dark' : 'sneaker-light'">
			<view class="product-swiper">
				<view class="product-logo">
					<image
						:src="system_theme === 'light' ? 'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/nike.png' : 'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/nike-white.png'" />
				</view>
				<swiper indicator-dots
					:indicator-color="system_theme === 'dark' ? 'rgba(255, 255, 255, 0.62)' : 'rgba(0, 0, 0, 0.62)'">
					<swiper-item class="image-item" v-for="(item, index) in urls" :key="index">
						<image mode="aspectFill" :src="item" />
					</swiper-item>
				</swiper>

				<view class="product-like"></view>
			</view>

			<view class="title-price">
				<view class="name-rate">
					<text class="product-name">Nike Vaporfly 3</text>
					<ge-rates :value="4" disabled></ge-rates>
				</view>
				<view class="product-price">
					1599
				</view>
			</view>

			<view class="product-size">选择鞋码</view>
			<view style="width: 688rpx;" class="margin-top">
				<ge-navlist :items="items" type="circle" transparent></ge-navlist>
			</view>

			<view style="width: 688rpx">
				<ge-navlist :items="tabs" @tab-select="tabSelect" indicator transparent></ge-navlist>
			</view>

			<view class="description margin-top" v-show="selectIndex === 0">
				<view class="ui-flex align-center justify-center header-24">
					NIKE VAPORFLY 3
				</view>
				<view class="ui-flex align-center justify-center header-20 text-lighter">
					男子公路竞速跑鞋
				</view>
				<view class="ui-flex align-center justify-center text-body-16 margin-top text-lighter">
					Nike Vaporfly 3男子公路竞速跑步鞋专为不同阶段跑者打造，为你带来迅疾速度表现，助你全力攻克征程。匠心鞋底设计，
					无论是10公里跑还是马拉松，皆可助你成就个人佳绩。无论是新手小白还是跑步达人，这款公路竞速跑步鞋皆可助跑者畅快
					攻克看似遥不可及的目标。
				</view>
				<image style="width: 100%; height: 900rpx;" class="margin-top"
					src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly3_bottom.jpg" />
				<image style="width: 100%; height: 900rpx;"
					src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly3_running.jpg" />
				<image style="width: 100%; height: 900rpx;"
					src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly3_running_2.jpg" />
			</view>
			<view class="margin-top" v-show="selectIndex === 1">
				<view class="sneaker-comment">
					<view class="comment-avatar"><ge-avatar name="X" round></ge-avatar></view>
					<view class="comment-body">
						<view class="comment-user">
							<text class="name">X</text>
							<text class="time">14天前</text>
						</view>
						<view class="comment-rate">
							<ge-rates :value="4"></ge-rates>
						</view>
						<view class="comment-content">
							鞋子跑起来很舒服
						</view>
					</view>
				</view>
				<view class="sneaker-comment margin-top">
					<view class="comment-avatar"><ge-avatar name="X"
							avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/harry_potter.jpeg"
							round></ge-avatar></view>
					<view class="comment-body">
						<view class="comment-user">
							<text class="name">哈利波特</text>
							<text class="time">2023.1.12</text>
						</view>
						<view class="comment-rate">
							<ge-rates :value="5"></ge-rates>
						</view>
						<view class="comment-content">
							鞋子收到了，小孩说很喜欢吃。The shoes have been received, the child said he likes to eat them.
						</view>
					</view>
				</view>
			</view>
			<view class="product-detail margin-top" v-show="selectIndex === 2">
				七天无理由退货
			</view>
		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				urls: [
					"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly-3-road-racing-shoes-w1H0HM (4).png",
					"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly-3-road-racing-shoes-w1H0HM.png",
					"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly-3-road-racing-shoes-w1H0HM (1).png",
					"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly-3-road-racing-shoes-w1H0HM (2).png",
					"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly-3-road-racing-shoes-w1H0HM (3).png",
					"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/product/vaporfly-3-road-racing-shoes-w1H0HM (5).png",
				],
				items: [],
				tabs: ['产品描述', '评价', '售后保障'],
				selectIndex: 0
			}
		},
		onLoad() {
			for (let i = 39; i <= 49; i++) {
				this.items.push(i);
			}
		},
		methods: {
			tabSelect(index) {
				this.selectIndex = index;
			}
		}
	}
</script>
<style lang="scss" scoped>
	@mixin product-light {
		--sneaker-price-color: #313B5D;
		--sneaker-price-size-color: #313B5D;
	}

	@mixin product-dark {
		--sneaker-price-color: rgba(0, 182, 112, 0.3);
		--sneaker-price-size-color: #00B670;
	}

	.sneaker-light {
		@include product-light;
	}

	.sneaker-dark {
		@include product-dark;
	}

	.title-price {
		position: relative;
		display: flex;
		align-items: center;

		.name-rate {
			position: relative;
			display: flex;
			flex-direction: column;

			.product-name {
				font-size: 34rpx;
				font-style: normal;
				font-weight: 600;
				line-height: normal;
			}
		}

		.product-price {
			color: var(--sneaker-price-color);
			font-size: 50rpx;
			font-style: normal;
			font-weight: 700;
			line-height: normal;

			position: absolute;
			right: 0;

			&:before {
				content: '￥';
				font-size: 40rpx;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
				color: var(--ui-navlist-circle-color);
			}
		}
	}

	.product-size {
		font-size: 26rpx;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-top: 30rpx;
		color: var(--sneaker-price-size-color);
	}

	.product-swiper {
		position: relative;
		height: 640rpx;

		.product-logo {
			position: absolute;
			left: 0;
			top: 20rpx;
			width: 96rpx;
			height: 96rpx;

			image,
			img {
				height: 100%;
				width: 100%;
			}
		}

		.product-like {
			position: absolute;
			right: 0;
			top: 20rpx;
		}

		swiper {
			height: 100%;

			/deep/ .uni-swiper-dot {
				width: 16rpx !important;
				height: 16rpx !important;
			}

			/deep/ .uni-swiper-dot-active {
				border-radius: 24rpx;
				width: 50rpx !important;
				height: 16rpx !important;
				background: var(--ui-navlist-circle-color);
			}

			/deep/ .wx-swiper-dot {
				width: 16rpx !important;
				height: 16rpx !important;
			}

			/deep/ .wx-swiper-dot-active {
				border-radius: 24rpx;
				width: 50rpx !important;
				height: 16rpx !important;
				background: var(--ui-navlist-circle-color);
			}

			/deep/ .a-swiper-dot {
				width: 16rpx !important;
				height: 16rpx !important;
				border-radius: 16rpx;
			}

			/deep/ .a-swiper-dot-active {
				border-radius: 24rpx;
				width: 50rpx !important;
				height: 16rpx !important;
				background: var(--ui-navlist-circle-color);
			}
		}

		img,
		image {
			width: 100%;
			height: 100%;
		}

	}

	.sneaker-comment {
		display: flex;
		position: relative;
		align-items: center;
		padding: 22rpx 22rpx;
		border-radius: 32rpx 32rpx 32rpx 0px;
		background: var(--ui-bg-dashboard);
		box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 1px 6px 0px rgba(0, 0, 0, 0.20);
		;

		.comment-avatar {
			margin-right: 20rpx;
		}

		.comment-body {
			flex: 1;
			position: relative;
			display: flex;
			flex-direction: column;

			.comment-user {
				.name {
					font-size: 32rpx;
					font-style: normal;
					font-weight: 500;
					line-height: normal;
					letter-spacing: -0.24px;
				}

				.time {
					color: var(--ui-text-regular-3);
					font-size: 26rpx;
					font-style: normal;
					font-weight: 400;
					line-height: normal;
					letter-spacing: -0.24px;
					margin-left: 16rpx;
				}
			}

			.comment-content {
				margin-top: 10rpx;
				font-size: 28rpx;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
				letter-spacing: -0.24px;
			}
		}
	}
</style>