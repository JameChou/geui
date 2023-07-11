<template>
	<view class="ui-page" :class="'theme-' + system_theme" :style="[{'background-image': backgroundImage === '' ? '' : backgroundImage}]">
		<view class="ui-page-back" v-if="!isLoading"></view>
		<view class="ui-page-body" :style="[{'padding-bottom': paddingBottomHeight + 'px'}]">
			<slot></slot>
      <ge-tabbar :data="tabs" v-if="!noTabs"></ge-tabbar>

			<view class="loading-body" v-if="isLoading">
				<view class="ph ph-arrow-clockwise ui-icon-spin header-34"></view>
				<view>加载中</view>
			</view>
		</view>

		<ge-toast name="system_dialog"
							:title="toast.title"
							:sub-title="toast.subTitle"
							:toast-style="toast.toastStyle"
							:icon="toast.icon"
							:duration="toast.duration"
							:mask="toast.mask"
							:is-loading="toast.isLoading"
							@success="$event => toast.success($event)"
		>

		</ge-toast>
	</view>
</template>
<script>
	import {mapState} from 'vuex';
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
			},
			backgroundImage: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				paddingBottomHeight: 62,
				isLoading: true
			};
		},
		computed: {
			...mapState ({
				toast: state => state.modal.toast
			})
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