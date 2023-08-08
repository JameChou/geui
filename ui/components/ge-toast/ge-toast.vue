<template>
	<view class="ui-toast-box"
		:class="[title !== '' ? 'show' : 'hide', { 'bg-mask-80': mask || mask === '80' }, { 'bg-mask-20': mask === '20' }, { 'bg-mask-40': mask === '40' }]"
		:style="{ top: system_navbar_height + 'px' }">
		<view class="toast-box-bg"></view>
		<view class="ui-toast" style="z-index: 5" :class="[
							{'': toastStyle === 'info'},
							{'toast-neutral-blue': toastStyle === 'blue-info'},
							{'toast-warning': toastStyle === 'warning'},
							{'toast-success': toastStyle === 'success'},
							{'toast-error': toastStyle === 'error'}
					]">
			<view class="toast-icon">
				<text class="ph" :class="[{ icon: icon !== '' },
				{ 'ph-info': icon === '' && toastStyle === 'info' },
				{ 'ph-bell-slash': icon === '' && toastStyle === 'blue-info' },
				{ 'ph-warning': icon === '' && toastStyle === 'warning' },
				{ 'ph-checks': icon === '' && toastStyle === 'success' },
				{ 'ph-prohibit': icon === '' && toastStyle === 'error' }]"></text>
			</view>
			<view class="toast-content">
				<view class="toast-title">{{title}}</view>
				<view class="toast-subtitle" v-if="subTitle !== ''">{{subTitle}}</view>
			</view>
			<view class="toast-op" @tap="hide">
				<view class="ph ph-x"></view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: ''
			},
			toastStyle: {
				type: String,
				default: 'info' // info、blue-info、warning、error、success
			},
			icon: {
				type: String,
				default: ''
			},
			duration: {
				type: Number,
				default: 1500
			},
			mask: {
				type: [Boolean, String],
				default: false
			},
			isLoading: {
				type: [Boolean, String],
				default: false
			}
		},
		watch: {
			title: {
				handler(val) {
					if (val && !this.isLoading) {
						setTimeout(() => {
							this.hide();
						}, this.duration);
					}
				}
			}
		},
		computed: {
			system_navbar_height() {
				return this.$store.getters.system_navbar_height;
			}
		},
		methods: {
			hide() {
				this.$store.commit('setToast', {
					title: '',
					subTitle: '',
					icon: '',
					toastStyle: 'info',
					duration: 1500,
					mask: false,
					isLoading: false,
					success: () => {}
				});
			}
		}
	}
</script>
<style lang="scss">
	.ui-toast-box {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding-left: 30rpx;
		padding-right: 30rpx;
		max-height: 123rpx;

		.toast-box-bg {
			position: fixed;
			left: 30rpx;
			z-index: -1;
			height: 123rpx;
			background-color: var(--ui-bg-pure-primary);
			width: calc(100% - 60rpx);
			border-radius: 23rpx;
		}

		&.show {
			overflow-x: hidden;
			overflow-y: auto;
			transition: 0.5s ease-out;
			opacity: 1;
			z-index: 5;
		}

		&.hide {
			opacity: 0;
			transition: 0.5s ease-out;
			z-index: -2;
		}
	}

	.ui-toast {
		height: 123rpx;
		width: 100%;
		display: flex;
		background-color: var(--ui-toast-netural-bg);
		align-items: center;
		position: relative;
		border-radius: 23rpx;

		&.toast-neutral-blue {
			.toast-icon {
				color: #4376FE;
			}

			background-color: var(--ui-toast-blue-bg);
		}

		&.toast-success {
			.toast-icon {
				color: #00B670;
			}

			background-color: var(--ui-toast-success-bg);
		}

		&.toast-warning {
			.toast-icon {
				color: #FE8E0B
			}

			background-color: var(--ui-toast-warning-bg);
		}

		&.toast-error {
			.toast-icon {
				color: #E55539;
			}

			background-color: var(--ui-toast-error-bg);
		}

		.toast-icon {
			width: 77rpx;
			height: 77rpx;
			background-color: var(--ui-toast-icon-bg);
			border-radius: 19rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--ui-text-regular-3);
			font-size: 45rpx;
			position: relative;
			margin-left: 23rpx;
		}

		.toast-op {
			font-size: 40rpx;
			color: var(--ui-text-regular-2);
			position: absolute;
			right: 48rpx;
		}

		.toast-content {
			position: relative;
			padding-left: 23rpx;

			.toast-title {
				font-style: normal;
				font-weight: 600;
				font-size: 30.8rpx;
				line-height: 150%;
			}

			.toast-subtitle {
				ont-style: normal;
				font-weight: 400;
				font-size: 27rpx;
				line-height: 142%;
				color: var(--ui-text-regular-2);
			}
		}
	}
</style>