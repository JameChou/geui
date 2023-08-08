export default {
	state: {
		target: '',
		dialog: {},
		toast: {
			title: '',
			subTitle: '',
			icon: '',
			toastStyle: 'info',
			duration: 1500,
			mask: false,
			isLoading: false,
			success: () => {}
		}
	},
	getters: {},
	mutations: {
		setTarget(state, data) {
			state.target = data;
		},
		setToast(state, data) {
			state.toast = Object.assign(state.toast, data);
		}
	},
	actions: {}
}