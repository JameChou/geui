<template>
	<ge-page noTabs>
		<ge-title title-content="控制中心" :style="{marginTop: system_navbar_height + 'px'}" title-icon="gear" action action-name="返回" action-icon="hand-swipe-left"></ge-title>
		<view class="ui-container">
			<view class="ui-dashboard">
				<view class="ui-dashboard-big">
					<view class="icon-op">
						<view class="title ph ph-currency-dollar-simple"></view>
						<view class="ui-button blue sm round">5 new</view>
					</view>

					<view class="spec">
					  我的收益
					</view>
					<view class="spec-sub">
						<text class="ph ph-warning text-orange"></text>
						最近有一笔款项进账
					</view>
				</view>

				<view class="ui-dashboard-big">
					<view class="icon-op">
						<view class="title blue-icon ph ph-users"></view>
					</view>
					<view class="spec">
						查看我的关注、我的粉丝
					</view>
				</view>
			</view>

			<view class="ui-dashboard margin-top">
				<view class="ui-dashboard-big">
					<view class="icon-op">
						<view class="title ph ph-currency-dollar-simple"></view>
						<view class="ui-button blue sm round">5 new</view>
					</view>

					<view class="spec">
						我的收益
					</view>
					<view class="spec-sub">
						<text class="ph ph-warning text-orange"></text>
						最近有一笔款项进账
					</view>
				</view>

				<view class="ui-dashboard-big block">
					<view class="block-item">
						<text class="ph ph-currency-btc icon"></text>
						<view class="title">
							5,128.6
						</view>
					</view>
					<view class="block-item">
						<text class="ph ph-warning icon"></text>
						<view class="title">
							5,128.6
							<view class="spec-sub">
								Tokens
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="ui-dashboard margin-top">
				<view class="ui-dashboard-big block">
					<view class="block-item split">
						<view class="ph ph-sun light-bg-orange icon-btn"></view>
						<view class="ph ph-lightning icon-btn text-blue"></view>
					</view>

					<view class="block-item">
						<text class="ph ph-wechat-logo icon text-black" style="background-color: transparent; font-size: 50rpx;"></text>
						<view class="title">
							客服
							<view class="spec-sub text-green">
								<text class="ph ph-circle"></text>
								联系我
							</view>
						</view>
					</view>
				</view>

				<view class="ui-dashboard-big">
					<view class="icon-op">
						<view class="title ph ph-currency-dollar-simple"></view>
						<view class="ui-button blue sm round">5 new</view>
					</view>

					<view class="spec">
						我的收益
					</view>
					<view class="spec-sub">
						<text class="ph ph-warning text-orange"></text>
						最近有一笔款项进账
					</view>
				</view>
			</view>

			<view class="ui-dashboard-full margin-top">
				<view class="top-section">
					<view class="title">
						你的工作进度
						<text class="sub-spec">
							<text class="text-green text-bold">
								+15.8%
							</text>
							上周
						</text>
					</view>
					<view class="icon-btn">
						<text class="ph ph-pulse"></text>
					</view>
				</view>
				<view class="chart-section">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/sample-chart.png" mode="aspectFill" />
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
export default {
	computed: {
		system_navbar_height() {
			return this.$store.getters.system_navbar_height;
		}
	}
}
</script>
<style lang="scss">
.ui-dashboard {
	position: relative;
	display: flex;
	justify-content: space-between;


	/* 大块按钮形式的组件 */
	&-big {
		border-radius: 57rpx;
		position: relative;
		padding-left: 30rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		background-color: var(--ui-bg-dashboard);
		width: 336rpx;
		height: 336rpx;
		box-shadow: var(--ui-dashboard-boxshadow);
		backdrop-filter: blur(19rpx);

		.icon-op {
			display: flex;
			align-items: center;

			.title {
				width: 76rpx;
				height: 76rpx;

				border-radius: 76rpx;
				background-color: #E9F2E1FF;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #83BD67;
				font-size: 42rpx;
				font-weight: bold;

				&.blue-icon {
					color: #5675FAFF;
					background-color: #EDF1FEFF;
				}
			}

			.ui-button {
				right: 30.8rpx;
				position: absolute;
			}
		}

		.spec {
			padding-top: 90rpx;
			font-size: 38rpx;
			font-style: normal;
			font-weight: 600;
			line-height: 138%;
		}

		.spec-sub {
			padding-top: 15rpx;
			font-size: 27rpx;
			font-style: normal;
			font-weight: 400;
			line-height: 142%;
			color: var(--ui-text-regular-2);
		}


		/* big下的 block */
		&.block {
			box-shadow: none;
			border-radius: 0;
			backdrop-filter: none;
			background-color: transparent;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 16rpx;
			justify-content: center;
			padding-top: 0px;
			padding-bottom: 0px;
			padding-left: 0px;

			.block-item {
				display: flex;
				height: 162rpx;
				width: 100%;
				gap: 19rpx;
				border-radius: 19rpx;
				background-color: var(--ui-bg-dashboard);
				box-shadow: var(--ui-dashboard-boxshadow);
				backdrop-filter: blur(19rpx);
				align-items: center;
				justify-content: center;

				&.split {
					border-radius: 0;
					background-color: transparent;
					box-shadow: none;
					backdrop-filter: none;

					.icon-btn {
						width: 159rpx;
						height: 159rpx;
						border-radius: 19rpx;
						background: var(--ui-bg-dashboard);
						box-shadow: var(--ui-dashboard-boxshadow);
						backdrop-filter: blur(19rpx);

						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 80rpx;
					}
				}

				.icon {
					width: 76rpx;
					height: 76rpx;
					border-radius: 76rpx;
					background-color: #E0922DFF;
					color: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 42rpx;
					font-weight: bold;
				}

				.title {
					font-size: 38rpx;
					font-style: normal;
					font-weight: 600;
					line-height: 138%;

					.spec-sub {
						padding-top: 0;
					}
				}
			}
		}
	}

	&-full {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 292rpx;
		border-radius: 19rpx;
		background: var(--ui-bg-dashboard);
		box-shadow: var(--ui-dashboard-boxshadow);
		backdrop-filter: blur(19rpx);;

		.top-section {
			position: relative;
			padding-top: 23rpx;
			display: flex;
			align-items: center;

			.icon-btn {
				position: absolute;
				right: 38.5rpx;
				font-size: 50rpx;
			}

			.title {
				position: relative;
				font-size: 38.5rpx;
				font-style: normal;
				font-weight: 600;
				line-height: 138%;
				letter-spacing: 0.3rpx;
				display: flex;
				flex-direction: column;
				padding-left: 30.8rpx;

				.sub-spec {
					font-size: 27rpx;
					font-style: normal;
					font-weight: 600;
					line-height: 142%;
					letter-spacing: 0.13rpx;
					color: var(--ui-text-regular-2);
				}
			}
		}

		.chart-section {
			padding-top: 23rpx;

			img, image {
				height: 123rpx;
				padding-left: 31rpx;
				padding-right: 31rpx;
			}
		}
	}
}
</style>