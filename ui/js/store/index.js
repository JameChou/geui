import Vue from 'vue';
import Vuex from 'vuex';
import modal from '@/ui/js/store/modal.js';
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
			let capsule = {};
			// #ifdef MP
			capsule = uni.getMenuButtonBoundingClientRect();
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

			// #ifndef MP
			capsule = {
				bottom: 56,
				height: 50,
				left: 278,
				right: 365,
				top: 0,
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
		app,
		modal
	}
});

Vue.prototype.$store = store;
export default store;