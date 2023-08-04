<template>
	<view class="ui-card-small">
		<view class="body">
			<view class="content">
				<view class="tag" v-if="tag !== ''">{{tag}}</view>
				<view class="title">{{title}}</view>
				<block v-if="spec !== ''">
					<view class="spec">
						{{spec}}
					</view>
				</block>
				<block v-else>
					<view class="spec">
						<slot name="spec"></slot>
					</view>
				</block>
				<view class="score" @tap="tapRate">{{score}}<ge-rates disabled :value="score"></ge-rates><text>({{rateNumber}})</text></view>
				<view class="operate"><button @tap="tapButton" class="ui-button" :class="buttonType">{{buttonName}}</button></view>
			</view>
			<view class="content-image" @tap="tapImage">
				<image :src="image"
							 :mode="imageMode" />
			</view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		id: {
			type: [String, Number],
			default: ""
		},
		tag: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		spec: {
			type: String,
			default: ""
		},
		score: {
			type: Number,
			default: 0
		},
		rateNumber: {
			type: Number,
			default: 0
		},
		buttonName: {
			type: String,
			default: "Button"
		},
		buttonType: {
			type: String,
			default: "primary" // blue gray
		},
		image: {
			type: String,
			default: ""
		},
		imageMode: {
			type: String,
			default: "aspectFill"
		}
	},
	methods: {
		tapButton() {
			this.$emit('tap-button', { id: this.id });
		},
		tapImage() {
			this.$emit('tap-image', { id: this.id, image: this.image });
		},
		tapRate() {
			this.$emit('tap-rate', { id: this.id, rate: this.rate, rateNumber: this.rateNumber });
		}
	}
}
</script>
<style lang="scss" scoped>
.ui-card-small {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	/* 后期需要处理掉 */
	margin-top: 40rpx;

	.body {
		background: var(--ui-card-small-background);
		width: 688rpx;
		height: 431rpx;
		border-radius: 38.5rpx;
		backdrop-filter: blur(38.5rpx);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.content {
			height: 385rpx;
			width: 427rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.tag {
				width: 183rpx;
				height: 46rpx;
				border-radius: 999px;
				margin-bottom: 26rpx;
				font-style: normal;
				font-weight: 700;
				font-size: 23rpx;
				line-height: 130%;
				color: var(--ui-text-regular);
				background: rgba(0, 0, 0, 0.1);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.title {
				font-style: normal;
				font-weight: 600;
				font-size: 38.5rpx;
				line-height: 138%;
				color: var(--ui-text-regular);
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}

			.spec {
				margin-top: 15.4rpx;
				font-style: normal;
				font-weight: 400;
				font-size: 27rpx;
				line-height: 142%;
			}

			.score {
				margin-top: 15.4rpx;
				font-style: normal;
				font-weight: 600;
				font-size: 27rpx;
				line-height: 142%;
				display: flex;
			}

			.operate {
				height: 77rpx;
				margin-top: 27rpx;

				button {
					width: 217rpx;
					height: 77rpx;
					position: absolute;
					border: var(--ui-button-primary-border);
				}
			}
		}

		.content-image {
			width: 185rpx;
			height: 308rpx;

			img, image {
				width: 100%;
				height: 100%;
				border-radius: 19.2rpx;
			}
		}
	}
}

</style>