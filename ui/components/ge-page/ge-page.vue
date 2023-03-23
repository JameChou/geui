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
			},
      theme: {
        type: String,
        default: 'light'
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
    color: var(--ui-text-regular);

		&-body {
			min-height: 100vh;
			background-color: var(--ui-bg-glass);
			color: var(--ui-text-regular);
			z-index: 1024;
			-webkit-backdrop-filter: var(--ui-bg-glass-blur);
		}
	}
</style>
