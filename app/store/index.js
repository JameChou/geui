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
				'name': '页面样例',
				'url': '/pages/template/index',
				'icon': 'ph-planet',
				'click': 'switch',
				'notification': true,
				'type': 'icon'
			},
			{
				'icon': 'chart-bar',
				'click': 'handle',
				'type': 'button'
			},
			{
				'name': '关于',
				'url': '/pages/about/index',
				'icon': 'ph-coffee',
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
			}
		],
		pageList: [
			{
				'name': '基础样式、模块',
				'items': [
					{
						'name': '配色、阴影',
						'en': 'Colors',
						'icon': 'palette',
						'url': '/pages/basic/color'
					},
					{
						'name': '文本、文字',
						'en': 'Fonts',
						'icon': 'text-aa',
						'url': '/pages/basic/fonts'
					},
					{
						'name': '图标',
						'en': 'Icons',
						'icon': 'phosphor-logo',
						'url': '/pages/basic/icon'
					},
					{
						'name': '布局',
						'en': 'Layout',
						'icon': 'layout',
						'url': '/pages/basic/layout'
					},
					{
						'name': '动画',
						'en': 'Animation',
						'icon': 'moon-stars',
						'url': '/pages/basic/animation'
					},
					{
						'name': '主题',
						'en': 'Themes',
						'icon': 'paint-roller',
						'url': '/pages/basic/theme'
					},
					{
						'name': '表单',
						'en': 'Forms',
						'icon': 'textbox',
						'url': '/pages/basic/form'
					},
					{
						'name': '表格',
						'en': 'Table',
						'icon': 'microsoft-excel-logo',
						'url': '/pages/basic/table'
					},
					{
						'name': '按钮',
						'en': 'Buttons',
						'icon': 'radio-button',
						'url': '/pages/basic/button'
					},
					{
						'name': '图片',
						'en': 'Image',
						'icon': 'image',
						'url': '/pages/basic/image'
					},
				]
			},
			{
				name: '基础组件',
				items: [
					{
						'name': '头像',
						'en': 'Avatar',
						'icon': 'user-circle',
						'url': '/pages/component/avatar'
					},
					{
						'name': '导航栏',
						'en': 'Navtabs',
						'icon': 'tabs',
						'url': '/pages/component/navtabs'
					},
					{
						'name': '操作条',
						'en': 'Navbar',
						'icon': 'faders-horizontal',
						'url': '/pages/component/opbar'
					},
					{
						'name': '卡片',
						'en': 'Card',
						'icon': 'cards',
						'url': '/pages/component/card'
					},
					{
						'name': '兴趣卡片',
						'en': 'Interests',
						'icon': 'heart',
						'url': '/pages/component/interests'
					},
					{
						'name': '标签',
						'en': 'Tags',
						'icon': 'tag',
						'url': '/pages/component/tag'
					},
					{
						'name': '提示',
						'en': 'Toast',
						'icon': 'info',
						'url': '/pages/component/toast'
					},
					{
						'name': '弹出',
						'en': 'Popover/Sheet',
						'icon': 'app-window',
						'url': '/pages/component/modal'
					},
					{
						'name': '日历',
						'en': 'Calendar',
						'icon': 'calendar',
						'url': '/pages/component/calendar'
					},
					{
						'name': '分隔线',
						'en': 'Divider',
						'icon': 'divide',
						'url': '/pages/component/divider'
					},
					{
						'name': '步骤条',
						'en': 'Stepper',
						'icon': 'dots-three-outline',
						'url': '/pages/component/stepper'
					},
					{
						'name': '评分',
						'en': 'Rates',
						'icon': 'star',
						'url': '/pages/component/rates'
					},
					{
						'name': 'Lottie',
						'en': 'Lottie动画',
						'icon': 'film-reel',
						'url': '/pages/component/lottie'
					}
				]
			},
			{
				'name': '复杂组件/页面',
				'items': [
					{
						'name': '控制面板',
						'en': 'Dashboard',
						'icon': 'gauge',
						'url': '/pages/component/dashboard'
					},
					{
						'name': '用户列表',
						'en': 'User-list',
						'icon': 'list-dashes',
						'url': '/pages/component/user-list'
					},
					{
						'name': '操作列表',
						'en': 'Operate-List',
						'icon': 'wrench',
						'url': '/pages/component/oplist'
					},
					{
						'name': '预览表单',
						'en': 'Preview',
						'icon': 'list-numbers',
						'url': '/pages/component/preview'
					},
					{
						'name': '新闻列表',
						'en': 'News-list',
						'icon': 'newspaper-clipping',
						'url': '/pages/component/news-list'
					},
					{
						'name': '产品列表',
						'en': 'Product-list',
						'icon': 'shopping-bag',
						'url': '/pages/component/product'
					}
				]
			}

		]
	},
	getters: {
		getAppTheme: state => {
			return state.theme;
		},
		getAppTabs: state => {
			return state.tabs;
		},
		getAppPages: state => {
			return state.pageList;
		}
	},
	mutations: {},
	actions: {}
}