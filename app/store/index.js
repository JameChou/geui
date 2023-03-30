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
				'name': '设置',
				'url': '/pages/setting/index',
				'icon': 'ph-gear',
				'click': 'switch',
				'notification': false,
				'type': 'icon'
			},
			{
				'url': '/pages/',
				'icon': 'chart-bar',
				'click': 'switch',
				'type': 'button'
			},
			{
				'name': '播放',
				'url': '/pages/player/index',
				'icon': 'ph-guitar',
				'click': 'switch',
				'notification': true,
				'type': 'icon'
			},
			{
				'name': '商品详情',
				'url': '/pages/product/index',
				'icon': 'ph-bank',
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