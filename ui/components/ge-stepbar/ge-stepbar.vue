<template>
	<view>
		<view class="ui-stepper">
			<view class="stepper-item" v-for="(item, index) in items" :key="index" :class="[
					index < steps ? 'completed' : '',
					index === steps ? 'active' : '',
					index === 0 && index === steps ? 'none-after' : '',
				  index === (items.length - 1) && index < steps ? 'none-after' : '']">
				<view class="step-counter"></view>
				<view class="step-name">{{item}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'GeStepbar',
		props: {
			items: {
				type: Array,
				default: () => {
					return [];
				}
			},
			steps: {
				type: Number,
				default: 0
			},
			showName: {
				type: Boolean,
				default: true
			}
		}
	}
</script>
<style lang="scss" scoped>
	.ui-stepper {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		margin-bottom: 40rpx;

		.stepper-item {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			font-size: 24rpx;

			&.none-after {
				&:after {
					width: 0 !important;
				}
			}

			&:before {
				position: absolute;
				content: "";
				border-bottom: 2px solid #ccc;
				width: 100%;
				top: 40rpx;
				left: -50%;
				z-index: 2;
			}

			&:after {
				position: absolute;
				content: "";
				border-bottom: 2px solid #ccc;
				top: 40rpx;
				width: 50%;
				z-index: 2;
			}

			.step-counter {
				position: relative;
				z-index: 5;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				background: #FFFFFF;
				margin-bottom: 12rpx;
				border: solid #9CA3AF;

				&:before {
					font-family: Phosphor;
					content: '\eaaa';
					font-size: 150rpx;
					color: #9CA3AF;
				}

			}

			&.active {
				font-weight: bold;

				.step-counter {
					border: solid #4376FE;

					&:before {
						color: #4376FE;
					}
				}
			}

			&.completed {
				transition: background-color .8s ease-in;

				.step-counter {
					background-color: #4376FE;
					border: none;

					&:before {
						font-family: Phosphor;
						content: '\ea30';
						font-size: 30rpx;
						font-weight: bold;
						color: #FFFFFF;
					}
				}

				&:after {
					position: absolute;
					content: "";
					border-bottom: 2px solid #4376FE;
					width: 100%;
					top: 40rpx;
					left: 50%;
					z-index: 3;
				}
			}
		}

		:first-child {
			&:before {
				content: none;
			}
		}

		:last-child {
			&:after {
				content: none;
			}
		}
	}
</style>