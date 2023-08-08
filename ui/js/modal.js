import Vue from 'vue';
import store from '@/ui/js/store';

const modal = {
	show(name) {
		store.commit('setTarget', name);
	},
	hide() {
		store.commit('setTarget', '');
	},
	info(title, subTitle, duration = 1500) {
		store.commit('setToast', {
			title: title,
			subTitle: subTitle,
			duration: duration,
			toastStyle: 'info'
		});
	},
	toast(toast) {
		store.commit('setToast', toast);
	},
	success(title = '成功', subTitle, duration = 1500) {
		store.commit('setToast', {
			title: title,
			subTitle: subTitle,
			duration: duration,
			toastStyle: 'success'
		});
	},
	warning(title = '警告', subTitle, duration = 1500) {
		store.commit('setToast', {
			title: title,
			subTitle: subTitle,
			duration: duration,
			toastStyle: 'warning'
		});
	},
	error(title = '错误', subTitle, duration = 1500) {
		store.commit('setToast', {
			title: title,
			subTitle: subTitle,
			duration: duration,
			toastStyle: 'error'
		});
	}
}

Vue.prototype.$uiModal = modal;
Vue.prototype.$uiSuccess = modal.success;

export default modal;