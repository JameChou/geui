<template>
	<view class="ui-card" :class="compact ? 'compact' : ''">
		<view class="card-tag" v-if="tag !== ''" @tap="tapTag">
			{{tag}}
		</view>
		<view class="card-button" v-if="showButton">
			<button class="ui-icon-button gray ph shadow round sm" :class="buttonIcon" @tap="tapButton">
			</button>
		</view>
		<view class="card-image" @tap="tapImage">
			<image :src="image" :mode="imageMode" />
		</view>
		<view :class="compact ? 'cover-content' : 'content'">
			<view class="background" v-if="compact"></view>
			<text class="title" @tap="tapContent">{{title}}</text>
			<text class="sub-title" @tap="tapContent" v-if="subTitle !== ''">{{subTitle}}</text>
			<block v-if="richInfo">
				<template>
					<view class="spec-info" @tap="tapInfo">
						<slot name="richInfo"></slot>
					</view>
				</template>
			</block>
			<block v-else>
				<view class="spec-info" @tap="tapInfo">
					{{info}}
				</view>
			</block>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'GeCard',
		props: {
			uuid: {
				type: [String, Number],
				default: ""
			},
			tag: {
				type: String,
				default: ""
			},
			showButton: {
				type: Boolean,
				default: false
			},
			buttonIcon: {
				type: String,
				default: 'ph-dots-three'
			},
			title: {
				type: String,
				default: ""
			},
			subTitle: {
				type: String,
				default: ""
			},
			info: {
				type: String,
				default: ""
			},
			image: {
				type: String,
				default: ""
			},
			compact: {
				type: Boolean,
				default: true
			},
			imageMode: {
				type: String,
				default: "aspectFill"
			},
			richInfo: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			tapContent() {
				this.$emit('tap-content', {
					uuid: this.uuid,
					title: this.title,
					subTitle: this.subTitle
				});
			},
			tapTag() {
				this.$emit('tap-tag', {
					uuid: this.uuid,
					tag: this.tag
				});
			},
			tapButton() {
				this.$emit('tap-button', {
					uuid: this.uuid
				});
			},
			tapInfo() {
				this.$emit('tap-info', {
					uuid: this.uuid,
					info: this.info
				});
			},
			tapImage() {
				this.$emit('tap-image', {
					uuid: this.uuid,
					image: this.image
				});
			}
		}
	}
</script>
<style lang="scss">
	.ui-card {
		margin-top: 30.8rpx;
		z-index: 0;

		&.compact {
			height: 555rpx;
		}

		.card-tag {
			position: absolute;
			left: 50rpx;
			height: 46.2rpx;
			width: auto;
			min-width: 100rpx;
			font-style: normal;
			font-weight: 400;
			font-size: 23.1rpx;
			line-height: 130%;
			margin-top: 15.4rpx;

			background-color: #00B670;
			border-radius: 999rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
			z-index: 1;
		}

		.card-button {
			position: absolute;
			right: 50rpx;
			margin-top: 15.4rpx;
			z-index: 1;
		}


		.card-image {
			display: flex;
			align-items: center;
			justify-content: center;

			img,
			image {
				width: 688rpx;
				height: 544rpx;
				border-radius: 19.2rpx;
			}

		}

		.cover-content {
			position: relative;
			top: -205rpx;
			width: 100%;
			height: 215.4rpx;

			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			z-index: 1;

			.background {
				z-index: -1;
				position: absolute;
				background: var(--ui-card-glass-background);
				backdrop-filter: blur(36.7rpx);
				width: 688rpx;
				height: 215.4rpx;
				border-radius: 0px 0px 19.2rpx 19.2rpx;
			}

			.title {
				margin-top: 23.1rpx;
				width: 642.3rpx;
				height: 53.8rpx;
				font-style: normal;
				font-weight: 600;
				font-size: 38.5rpx;
				line-height: 135%;
				color: var(--ui-text-regular);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.sub-title {
				margin-top: 15.4rpx;
				font-style: normal;
				font-weight: 400;
				height: 46.2rpx;
				width: 642.3rpx;
				font-size: 30.8rpx;
				line-height: 150%;
				letter-spacing: 0.0168em;
				color: var(--ui-card-subtitle-color);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.spec-info {
				margin-top: 15.4rpx;
				font-style: normal;
				font-weight: 400;
				height: 38.5rpx;
				font-size: 26.9rpx;
				line-height: 142%;
				color: var(--ui-text-regular);
				width: 642.3rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.content {
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.title {
				margin-top: 23.1rpx;
				width: 688rpx;
				font-style: normal;
				font-weight: 600;
				font-size: 38.5rpx;
				line-height: 135%;
				color: var(--ui-text-regular);
			}

			.sub-title {
				margin-top: 15.4rpx;
				font-style: normal;
				font-weight: 400;
				width: 688rpx;
				font-size: 30.8rpx;
				line-height: 150%;
				letter-spacing: 0.0168em;
				color: var(--ui-card-subtitle-color);
			}

			.spec-info {
				margin-top: 15.4rpx;
				font-style: normal;
				font-weight: 400;
				font-size: 26.9rpx;
				line-height: 142%;
				color: var(--ui-text-regular);
				width: 688rpx;
			}
		}
	}
</style>