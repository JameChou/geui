<template>
	<view class="ui-toast-box"
				:class="[title !== '' ? 'show' : 'hide', { 'bg-mask-80': mask || mask === '80' }, { 'bg-mask-20': mask === '20' }, { 'bg-mask-40': mask === '40' }]"
				:style="{ top: system_navbar_height + 'px' }"
	>
		<view class="ui-toast" style="z-index: 2"
					:class="[
							{'': toastStyle === 'info'},
							{'toast-neutral-blue': toastStyle === 'blue-info'},
							{'toast-warning': toastStyle === 'warning'},
							{'toast-success': toastStyle === 'success'},
							{'toast-error': toastStyle === 'error'}
					]"
		>
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
	z-index: 1025;
	padding-left: 30rpx;
	padding-right: 30rpx;
	background-color: var(--ui-bg-pure-primary);
	max-height: 123rpx;

	&.show {
		transform: scale(1);
		transition: 0.3s;
		overflow-x: hidden;
		overflow-y: auto;
	}

	&.hide {
		display: none;
	}
}

</style>