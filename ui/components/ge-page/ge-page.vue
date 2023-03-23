<template>
	<view class="ui-page theme-light">
		<view class="ui-page-body" :style="[{'padding-bottom': statusBarHeight + 'px'}]">
			<ge-navbar v-if="nav"></ge-navbar>
			<slot></slot>
		</view>
		<ge-tabbar :data="tabs"></ge-tabbar>
	</view>
</template>
<script>
	export default {
		props: {
			nav: {
				type: Boolean,
				default: true
			},
			tabs: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				statusBarHeight: this.statusBar + 60
			};
		}

	}
</script>
<style lang="scss">
	.ui-page {
		background-image: url("../../../static/wallpaper.jpeg");
		background-repeat: no-repeat;
		background-size: 100vh 100vh;
		background-attachment: fixed;

		&-body {
			min-height: 100vh;
			background-color: var(--ui-bg-glass);
			color: var(--ui-text-regular);
			z-index: 1024;
			-webkit-backdrop-filter: var(--ui-bg-glass-blur);
		}
	}
</style>
