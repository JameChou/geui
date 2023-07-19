<template>
	<ge-page>
		<view class="ui-container">
			<!--
			<lottie
					:assets-path="item.assetsPath"
					:autoplay="item.autoplay"
					:id="item.id"
					:path="item.path"
					:repeat-count="item.repeatCount"
					:placeholder="item.placeholder"
					class="item">
			</lottie>
			-->
			<ge-lottie canvasId="testlottie" :src="src"></ge-lottie>

		</view>
	</ge-page>
</template>
<script>
export default {
	data() {
		return {
			src: 'https://mp-eeab6da6-80cd-4e80-844a-66b2a7203834.cdn.bspapp.com/cloudstorage/7b538fb7-d2d5-4524-bf21-6c20e3b5ce6f.json'
			/*
			item: {
				id: 'lottie-1',
				desc: 'Django自动播放,低端设备降级',
				autoplay: true,
				path:'https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation.json',
				placeholder:'https://gw.alipayobjects.com/mdn/rms_e345fe/afts/img/A*nu3GTaHqJ9AAAAAAAAAAAAAAARQnAQ524560995883_icon_S.png',
				optimize: 'true',
				repeatCount: -1,
				assetsPath : 'https://gw.alipayobjects.com/os/lottie-asset/bb/data.json/'
			}
			 */
		}
	},
	onLoad() {
		/*
		var lottieContext = my.createLottieContext(this.item.id);
		lottieContext.play();
		 */
	}
}
</script>
<style lang="scss">
.item {
	width: 700rpx;
	height: 400rpx;
	/* opacity: 0.5; */
}
</style>