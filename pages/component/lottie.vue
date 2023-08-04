<template>
	<ge-page no-tabs>
		<ge-nav title="Lottie动画"></ge-nav>
		<view class="ui-container">
			<view class="margin-top">
				<ge-lottie
						canvasId="animation-work"
						:data="animationData"
						width="100%"
						height="600rpx"
						@animation-created="handleAnimation"
						src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation_free_jump.json"
				></ge-lottie>
			</view>

			<view class="ui-flex align-center justify-between">
				<button class="ui-button primary" @tap="play">播放</button>
				<button class="ui-button primary" @tap="reversePlay">方向</button>
				<button class="ui-button primary" @tap="pause">暂停</button>
				<button class="ui-button primary" @tap="stopPlay">停止</button>
			</view>

			<view class="ui-flex align-center justify-between margin-top">
				<button class="ui-button primary" @tap="speedPlay(1)">速度1x</button>
				<button class="ui-button primary" @tap="speedPlay(2)">速度2x</button>
			</view>
		</view>
	</ge-page>
</template>
<script>
let animationPlayer = null;
export default {
	data() {
		return {
			animationData: null,
			direction: true
		}
	},
	async onLoad() {
		let animationData = await uni.request({
			//url: 'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/christmas_animation.json'
			url: 'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation_free_jump.json'
		});
		this.animationData = animationData.data;
	},
	methods: {
		handleAnimation(player) {
			animationPlayer = player;
		},
		play() {
			animationPlayer.play();
		},
		reversePlay() {
			this.direction = !this.direction;
			animationPlayer.setDirection(this.direction ? 1 : -1);
		},
		pause() {
			animationPlayer.pause();
		},
		stopPlay() {
			animationPlayer.stop();
		},
		speedPlay(speed) {
			animationPlayer.setSpeed(speed);
		}
	}
}
</script>
<style lang="scss">
</style>