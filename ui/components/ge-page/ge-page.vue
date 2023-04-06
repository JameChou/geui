<template>
	<view class="ui-page" :class="'theme-' + system_theme">
		<view class="ui-page-body" :style="[{'padding-bottom': paddingBottomHeight + 'px'}]">
			<slot></slot>
      <ge-tabbar :data="tabs" v-if="!noTabs"></ge-tabbar>

			<view class="loading-body" v-if="isLoading">
				<view class="ph ph-arrow-clockwise ui-icon-spin header-34"></view>
				<view>加载中</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			tabs: {
				type: Array,
				default: () => {
          return [];
        }
			},
			theme: {
				type: String,
				default: 'light'
			},
			noTabs: {
				type: Boolean,
				default: false
			},
			loading: {
				type: [String, Boolean],
				default: 'auto'
			}
		},
		data() {
			return {
				paddingBottomHeight: 62,
				isLoading: true
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
		mounted() {
			setTimeout(() => {
				if (this.loading === 'auto') {
					this.isLoading = false;
				}
			}, 800);
		},
		methods: {}
	}
</script>
<style lang="scss">
.loading-body {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2068;
	background-color: var(--ui-bg-glass);
	backdrop-filter: blur(19.8rpx);
}
</style>