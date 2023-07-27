<template>
	<!-- #ifdef H5 -->
	<view class="ui-lottie" :style="{width, height}" @click="clickHandle">
		<div :id="canvasId" ref="lottieContainer"></div>
	</view>
	<!-- #endif -->
	<!-- #ifdef MP-WEIXIN -->
	<view class="ui-lottie" :style="{width, height}">
		<canvas type="2d" class="canvas" :id="canvasId" @click="clickHandle"></canvas>
	</view>
	<!-- #endif -->
	<!-- #ifdef MP-ALIPAY -->
	<lottie
			:id="canvasId"
			:autoplay="autoPlay"
			:path="src"
			:repeat-count="repeatCount"
	></lottie>
	<!-- #endif -->
</template>
<script>
// #ifdef MP-WEIXIN
import lottie from 'lottie-miniprogram';
let player, geCanvas, context;
// #endif
// #ifdef H5
import lottie from 'lottie-web';
// #endif

export default {
	name: 'GeLottie',
	props: {
		canvasId: {
			type: String,
			required: true,
			default: ''
		},
		loop: {
			type: Boolean,
			default: true
		},
		autoPlay: {
			type: Boolean,
			default: true
		},
		data: {
			type: [String, Object]
		},
		src: {
			type: String
		},
		renderer: {
			type: String,
			default: 'svg' // 对于h5来说 可以是svg或 canvas
		},
		repeatCount: {
			type: Number,
			default: -1
		},
		width: {
			type: String
		},
		height: {
			type: String
		}
	},
	mounted() {
		this.render();
	},
	watch: {
		data() {
			this.render();
		}
	},
	methods: {
		// #ifdef MP-WEIXIN
		getContext() {
			return new Promise(resolve => {
				const {
					pixelRatio
				} = uni.getSystemInfoSync();

				uni.createSelectorQuery()
						.in(this)
						.select(`#${this.canvasId}`)
						.fields({
							node: true,
							size: true
						})
						.exec(res => {
							const {
								width,
								height
							} = res[0];
							const canvas = res[0].node;
							resolve({
								canvas,
								width,
								height,
								pixelRatio
							});
						});
			});
		},
		// #endif
		async render() {
			// #ifdef MP-WEIXIN
			let {
				canvas,
				width,
				height,
				pixelRatio
			} = await this.getContext();
			geCanvas = canvas;
			context = canvas.getContext('2d');

			context.scale(pixelRatio, pixelRatio);
			canvas.width = width * pixelRatio;
			canvas.height = height * pixelRatio;
			lottie.setup(geCanvas);

			player = lottie.loadAnimation({
				loop: this.loop,
				autoplay: this.autoPlay,
				animationData: this.data,
				renderer: 'canvas',
				rendererSettings: {
					context,
				}
			});

			this.$emit('animation-created', player);
			// #endif

			// #ifdef H5
			this.player = lottie.loadAnimation({
				container: this.$refs.lottieContainer,
				renderer: this.renderer,
				loop: this.loop,
				autoplay: this.autoPlay,
				animationData: this.data,
				rendererSettings: {
					scaleMode: 'noScale'
				}
			});
			this.$emit('animation-created', this.player);
			// #endif

			// #ifdef MP-ALIPAY
			this.player = my.createLottieContext(this.canvasId);
			this.player.play();
			this.$emit('animation-created', this.player);
			// #endif

		},
		clickHandle() {
			this.$emit('click');
		}
	}
}
</script>
<style lang="scss">
.ui-lottie {
	height: inherit;
	width: inherit;

	div {
		width: 100%;
		height: 100%;
	}

	.canvas {
		width: 100%;
		height: 100%;
	}
}
</style>
