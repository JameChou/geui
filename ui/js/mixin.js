import Vue from 'vue';

import {
	mapState
} from 'vuex';

const mixin = {
	data() {
		return {
			_uid: this._uid,
			pageScrollTop: 0
		};
	},

	watch: {},

	computed: {
		...mapState({
			system_theme: state => state.system_theme,
			system_info: state => state.system_info
		}),
		system_capsule() {
			return this.$store.getters.system_capsule;
		}
	},

	created() {
		if (this._uid !== this.$root._uid) {
			this.$onShow();
		}
		// #ifdef H5
		document.getElementsByTagName('html')[0].className = `theme-${this.system_theme}`;
		// #endif
	},

	onLoad() {},

	onShow() {
		uni.$emit('$onShow' + this._uid);
	},

	onReachBottom() {
		uni.$emit('$onReachBottom' + this._uid);
	},

	mounted() {
		uni.$on('$onShow' + this.$root._uid, () => {
			this.$onShow();
		});
		uni.$on('$onHide' + this.$root._uid, () => {
			this.$onHide();
		});
		uni.$on('$onReachBottom' + this.$root._uid, () => {
			this.$onReachBottom();
		});
	},

	onHide() {
		uni.$off('$onShow' + this._uid);
		uni.$off('$onHide' + this._uid);
	},

	onPageScroll(e) {
		this.pageScrollTop = e.scrollTop;
		uni.$emit('$onScrollTop' + this._uid, e.scrollTop);
		if (e.scrollTop < 0) {
			return false;
		}
	},

	methods: {
		$onShow() {},

		$onHide() {},

		$onReachBottom() {},

		rpx2px(rpx) {
			if (rpx === 0) {
				return 0;
			}
			let deviceWidth = this.system_info.windowWidth;
			let px = (deviceWidth / 750) * Number(rpx);
			return Math.floor(px);
		},

		px2rpx(px) {
			if (px === 0) {
				return 0;
			}
			let deviceWidth = this.system_info.windowWidth;
			let rpx = (750 / deviceWidth) * Number(px);
			return Math.floor(rpx);
		},

		naviBack() {
			if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
				let url = '/' + __wxConfig.pages[0]
				return uni.redirectTo({
					url
				})
			}
			uni.navigateBack({
				delta: 1
			});
		}
	}

}

export default mixin;
Vue.mixin(mixin);