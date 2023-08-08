<template>
	<view class="ui-bottom-sheet" :class="[hide ? 'hide' : 'show', animationFade]">
		<view class="sheet-title">
			<view class="title-bar" @touchstart="touchStart" @touchend="touchEnd" v-if="topButton">
				<view></view>
			</view>
			<view class="title-content" :class="topButton ? 'center' : ''">
				<view class="big-title">{{bigTitle}}</view>
				<view class="sub-title" v-if="subTitle !== ''">{{subTitle}}</view>
				<view class="title-close" @tap="cancel" v-if="topButton"><text :class="[cancelIcon]"></text></view>
			</view>
		</view>

		<view class="sheet-body">
			<slot></slot>
		</view>

		<view class="operate-bar" v-if="!topButton">
		</view>

	</view>
</template>
<script>
	export default {
		name: "GeSheet",
		props: {
			bigTitle: {
				type: String,
				default: ""
			},
			subTitle: {
				type: String,
				default: ""
			},
			// 是否为顶部两侧button
			topButton: {
				type: Boolean,
				default: true
			},
			confirmText: {
				type: String,
				default: "确认"
			},
			cancelIcon: {
				type: String,
				default: "ph ph-x"
			}
		},
		data() {
			return {
				hide: true,
				animationFade: '',
				startY: 0,
				endY: 0
			}
		},
		methods: {
			touchStart(e) {
				let changeY = e.changedTouches[0].pageY;
				this.startY = changeY;
			},
			touchEnd(e) {
				let changeY = e.changedTouches[0].pageY;
				this.endY = changeY;

				if (this.endY - this.startY > 0) {
					this.cancel();
				}
			},
			show() {
				this.hide = false;
				this.animationFade = 'animation-fade-bottom';
				this.$store.commit('setTarget', 'bg-mask-50');
				this.startY = 0;
				this.endY = 0;
			},
			success() {
				this.$emit('success', {});
			},
			cancel() {
				this.animationFade = 'animation-fade-bottom-back';
				this.$store.commit('setTarget', '');
				this.hide = true;
				this.startY = 0;
				this.endY = 0;
				this.$emit('cancel', {});
			}
		}
	}
</script>
<style lang="scss">
	.reverse {
		animation-direction: reverse;
	}

	.ui-bottom-sheet {
		position: absolute;
		width: 100%;
		background: var(--ui-bg-modal, #FFFFFF);
		box-shadow: var(--ui-nav-box-shadow);
		backdrop-filter: blur(19rpx);
		border-radius: 38rpx 38rpx 0 0;
		padding-bottom: 70rpx;
		z-index: 3;
		bottom: 0;
		left: 0;

		&.hide {
			opacity: 0;
			z-index: -100;
		}

		&.show {
			opacity: 1;
			z-index: 3;
		}

		.sheet-title {
			position: relative;
			display: flex;
			flex-direction: column;
			border-bottom: var(--ui-border-regular);
			padding-bottom: 23rpx;

			.title-bar {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-top: 15.4rpx;

				view {
					width: 69rpx;
					height: 7.7rpx;
					border-radius: 999px;
					background-color: var(--ui-button-gray);
				}
			}

			.title-content {
				position: relative;
				display: flex;
				flex-direction: column;
				padding-top: 7.7rpx;
				padding-left: 30.8rpx;
				justify-content: center;

				.big-title {
					font-style: normal;
					font-weight: 600;
					font-size: 38.5rpx;
					line-height: 138%;
				}

				.sub-title {
					font-style: normal;
					font-weight: 400;
					font-size: 27rpx;
					line-height: 142%;
					color: var(--ui-text-regular-3);
				}

				.title-close {
					position: absolute;
					right: 30.8rpx;
					height: 69rpx;
					width: 69rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 40rpx;
					background-color: var(--ui-button-gray);
					border-radius: 999px;
				}
			}
		}

		.sheet-body {
			padding-left: 30.8rpx;
			padding-right: 30.8rpx;
			position: relative;
			min-height: 150rpx;
		}

		.operate-bar {
			height: 92rpx;
			padding-left: 30.8rpx;
			padding-right: 30.8rpx;

			.cancel-btn {
				position: absolute;
				left: 30.8rpx;
			}

			.confirm-btn {
				position: absolute;
				right: 30.8rpx;
			}
		}
	}
</style>