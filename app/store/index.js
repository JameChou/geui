export default {
	state: {
		themeOn: false,
		autoTheme: false,
		theme: 'light',
		tabs: [{
				'name': '组件',
				'url': '/pages/index/index',
				'icon': 'ph-puzzle-piece',
				'click': 'switch',
				'notification': false,
				'type': 'icon'
			},
			{
				'name': '模板',
				'url': '/pages/template/index',
				'icon': 'ph-planet',
				'click': 'switch',
				'notification': true,
				'type': 'icon'
			},
			{
				'url': '/pages/',
				'icon': 'chart-bar',
				'click': 'switch',
				'type': 'button'
			},
			{
				'name': '关于',
				'url': '/pages/dash/index',
				'icon': 'ph-coffee',
				'click': 'switch',
				'notification': false,
				'type': 'icon'
			},
			{
				'name': '设置',
				'url': '/pages/setting/index',
				'icon': 'ph-gear',
				'click': 'new',
				'notification': false,
				'type': 'icon'
			}
		]
	},
	getters: {
		getAppTheme: state => {
			return state.theme;
		},
		getAppTabs: state => {
			return state.tabs;
		}
	},
	mutations: {},
	actions: {}
}