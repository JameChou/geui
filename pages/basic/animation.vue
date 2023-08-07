<template>
	<ge-page no-tabs>
		<ge-navbar title="动画" fix-content opacity>
			<template v-slot:fixContent>
				<view class="ani-image">
					<image :class="animationName === '' ? '' : animationName" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/pie.jpeg" mode="aspectFill" />
				</view>
			</template>
		</ge-navbar>
		<view class="ui-container">
			<view class="ui-activity-list margin-top">
				<view class="ui-activity-list-section">
					<view class="section-title">Fade效果</view>
					<view class="section-body">
						<view class="section-item" data-animation="animation-fade-top" @tap="showAnimation">
							<view class="item-title">
								fadeInTop
								<text class="item-sub-title">顶部向下(animation-fade-top)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-fade-bottom" @tap="showAnimation">
							<view class="item-title">
								fadeInBottom
								<text class="item-sub-title">底部向上(animation-fade-bottom)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-fade-left" @tap="showAnimation">
							<view class="item-title">
								fadeInLeft
								<text class="item-sub-title">左侧向右(animation-fade-left)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-fade-right" @tap="showAnimation">
							<view class="item-title">
								fadeInRight
								<text class="item-sub-title">右侧向左(animation-fade-right)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
					</view>

					<view class="section-title">Jello效果</view>
					<view class="section-body">
						<view class="section-item" data-animation="animation-jello-vertical" @tap="showAnimation">
							<view class="item-title">
								jelloVertical
								<text class="item-sub-title">果冻效果横向(animation-jello-vertical)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-jello-horizontal" @tap="showAnimation">
							<view class="item-title">
								jelloHorizontal
								<text class="item-sub-title">果冻效果纵向(animation-jello-horizontal)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
					</view>
					<view class="section-title">Pulse效果</view>
					<view class="section-body">
						<view class="section-item" data-animation="animation-pulse" @tap="showAnimation">
							<view class="item-title">
								pulse
								<text class="item-sub-title">跳动正常速度(animation-pulse)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-pulse-slow" @tap="showAnimation">
							<view class="item-title">
								pulseSlow
								<text class="item-sub-title">果冻效果纵向(animation-pulse-slow)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
					</view>

					<view class="section-title">Scale效果</view>
					<view class="section-body">
						<view class="section-item" data-animation="animation-scale-top" @tap="showAnimation">
							<view class="item-title">
								scaleTop
								<text class="item-sub-title">从面向底(animation-scale-top)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-scale-bottom" @tap="showAnimation">
							<view class="item-title">
								scaleBottom
								<text class="item-sub-title">从底向面(animation-scale-bottom)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
					</view>

					<view class="section-title">Wobble效果</view>
					<view class="section-body">
						<view class="section-item" data-animation="animation-wobble-bottom" @tap="showAnimation">
							<view class="item-title">
								wobbleBottom
								<text class="item-sub-title">底部支点摇摆(animation-wobble-bottom)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-wobble-top" @tap="showAnimation">
							<view class="item-title">
								wobbleTop
								<text class="item-sub-title">顶部支点摇摆(animation-wobble-top)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-wobble-left" @tap="showAnimation">
							<view class="item-title">
								wobbleLeft
								<text class="item-sub-title">左侧支点摇摆(animation-wobble-left)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
						<view class="section-item" data-animation="animation-wobble-right" @tap="showAnimation">
							<view class="item-title">
								wobbleRight
								<text class="item-sub-title">右侧支点摇摆(animation-wobble-right)</text>
							</view>
							<view class="item-value">
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
let _this = null;
export default {
	data() {
		return {
			showBox: false,
			animationName: ''
		}
	},
	created() {
		_this = this;
	},
	methods: {
		showAnimation: function(self) {
			this.animationName = self.currentTarget.dataset.animation;
			this.showBox = true;
			setTimeout(() => {
				_this.showBox = false;
				_this.animationName = '';
			}, 1000);
		}
	}
}
</script>
<style lang="scss">
.ani-image {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	img, image {
		position: relative;
		border-radius: 30rpx;
		width: 300rpx;
		height: 300rpx;
	}
}

.ui-activity-list {
	width: 100%;
	height: 100%;
	position: relative;

	&-section {
		.section-title {
			height: 61rpx;
			padding-top: 31rpx;
			padding-left: 23rpx;
			color: var(--ui-text-regular-2);
			font-size: 19rpx;
			font-style: normal;
			font-weight: 600;
			line-height: 158%;
			letter-spacing: 2.8rpx;
		}

		.section-body {
			position: relative;
			width: 100%;
			border-radius: 19rpx;
			display: flex;
			flex-direction: column;
			background-color: var(--ui-activity-list-bg);


			.section-item {
				display: flex;
				padding-left: 23rpx;
				min-height: 123rpx;
				align-items: center;
				border-bottom: var(--ui-bottom-border-regular);

				.item-title {
					display: flex;
					flex-direction: column;
					font-size: 31rpx;
					font-style: normal;
					font-weight: 400;
					line-height: 150%;
					letter-spacing: 0.269px;

					.item-sub-title {
						font-size: 27rpx;
						font-style: normal;
						font-weight: 400;
						line-height: 142%;
						letter-spacing: 0.235px;
						color: var(--ui-text-regular-3);
					}
				}

				.item-value {
					position: absolute;
					right: 18rpx;
					font-size: 31rpx;
					font-style: normal;
					font-weight: 600;
					line-height: 150%;
					letter-spacing: 0.08px;

					&::after {
						font-family: 'Phosphor';
						content: "\ea00";
						font-size: 31rpx;
						color: var(--ui-text-regular-3);
					}
				}
			}

			:last-child {
				border-bottom: none;
			}
		}
	}
}
</style>