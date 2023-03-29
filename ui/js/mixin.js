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
			system_theme: state => state.system_theme
		}),
		system_capsule() {
			return this.$store.getters.system_capsule;
		}
	},

	created() {
		if (this._uid !== this.$root._uid) {
			this.$onShow();
		}
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