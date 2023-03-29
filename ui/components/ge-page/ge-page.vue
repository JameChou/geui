<template>
	<view class="ui-page" :class="'theme-' + system_theme">
		<view class="ui-page-body" :style="[{'padding-bottom': paddingBottomHeight + 'px'}]">
			<slot></slot>
		</view>
		<ge-tabbar :data="tabs" v-if="!noTabs"></ge-tabbar>
	</view>
</template>
<script>
	export default {
		props: {
			tabs: {
				type: Array,
				default: []
			},
			theme: {
				type: String,
				default: 'light'
			},
			noTabs: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				paddingBottomHeight: 62
			};
		},
		created() {
			let _this = this;
			if (!this.noTabs) {
				this.paddingBottomHeight = this.paddingBottomHeight + 20;
			} else {
				this.paddingBottomHeight = this.paddingBottomHeight - 20;
			}

		},
		methods: {}
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