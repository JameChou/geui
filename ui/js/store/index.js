import Vue from 'vue';
import Vuex from 'vuex';
import app from '@/app/store';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		system_theme: uni.getStorageSync('system_theme') ? uni.getStorageSync('system_theme') : app.state.theme,
		system_statusBar_height: uni.getSystemInfoSync().statusBarHeight,
		system_info: uni.getSystemInfoSync()
	},
	getters: {
		system_capsule() {
			// #ifdef MP
			// #ifndef MP-ALIPAY
			let capsule = uni.getMenuButtonBoundingClientRect();
			if (!capsule) {
				capsule = {
					bottom: 56,
					height: 32,
					left: 278,
					right: 365,
					top: 24,
					width: 87
				}
			}
			return capsule;
			// #endif
			// #endif

			// #ifndef MP
			capsule = {
				bottom: 56,
				height: 32,
				left: 278,
				right: 365,
				top: 24,
				width: 87
			}
			return capsule;
			// #endif
		},

		system_navbar_height() {
			// #ifndef MP
			return uni.getSystemInfoSync().statusBarHeight + 50;
			// #endif

			// #ifdef MP
			// #ifndef MP-ALIPAY
			let capsule = uni.getMenuButtonBoundingClientRect();
			if (!capsule) {
				capsule = {
					bottom: 56,
					height: 32,
					left: 278,
					right: 365,
					top: 24,
					width: 87
				};
			}
			let statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			return (capsule.top - statusBarHeight) * 2 + statusBarHeight + capsule.height;
			// #endif
			// #endif

			// #ifdef MP-ALIPAY
			return uni.getSystemInfoSync().statusBarHeight + uni.getSystemInfoSync().titleBarHeight;
			// #endif
		}
	},
	mutations: {
		/*
		 * 设置页面主题
		 */
		setTheme(state, theme) {
			uni.setStorageSync('system_theme', theme);
			state.system_theme = theme;

			// #ifdef H5
			document.getElementsByTagName('html')[0].className = `theme-${state.system_theme}`;
			// #endif
		}
	},
	actions: {},
	modules: {
		app
	}
});

Vue.prototype.$store = store;
export default store;