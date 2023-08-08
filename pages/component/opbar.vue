<template>
	<ge-page no-tabs>
		<ge-navbar title="操作条" opacity></ge-navbar>

		<view class="ui-container">

			<ge-title category category-content="导航栏Bar" title-content="初始不透明background" title-icon="number-circle-one"
				border></ge-title>
			<view class="margin-top bg-green">
				<ge-navbar title="Title" :opacity="false" :z-index="2" :height="height"
					:safe-inset-top="false"></ge-navbar>
			</view>

			<ge-title category category-content="CUSTOM" title-content="自定义顶部操作条" title-icon="number-circle-two"
				border></ge-title>
			<view class="margin-top bg-blue-40">
				<ge-navbar custom-title back-icon="ph ph-caret-left" :z-index="2" back-text="返回" :height="height"
					:safe-inset-top="false">
					<template v-slot:customTitle>
						<image style="height: 100%; width: 96px;" mode="aspectFill"
							src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/title.png" />
					</template>
				</ge-navbar>
			</view>
			<view class="margin-top bg-blue-40">
				<ge-navbar :opactiy="false" title="自定义左侧操作" custom-left :height="height" :safe-inset-top="false">
					<template v-slot:customLeft>
						<ge-avatar size="sm" round
							avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"></ge-avatar>
					</template>
				</ge-navbar>
			</view>

			<view class="margin-top bg-blue-40">
				<ge-navbar :is-opacity="false" title="标题" custom-left :height="height" :safe-inset-top="false">
					<template v-slot:customLeft>
						<text class="ph ph-arrow-left text-blue"></text>
						<text class="ph ph-stack text-orange"></text>
					</template>
				</ge-navbar>
			</view>

			<view class="margin-top bg-blue-40">
				<ge-navbar :opacity="false" title="自定义固定内容" fix-content :height="50" :safe-inset-top="false">
					<template v-slot:fixContent>
						<ge-navtabs :items="items" :active="3"></ge-navtabs>
					</template>
				</ge-navbar>
			</view>

			<ge-title category category-content="CUSTOM" title-content="底部操作条" title-icon="number-circle-three"
				border></ge-title>
			<view class="margin-top bg-blue-40">
				<ge-tabbar :data="tabs"></ge-tabbar>
			</view>
		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				height: 0,
				items: [
					'7分',
					'15分',
					'1小时',
					'1天',
					'1月',
					'1年'
				],
				tabs: [{
						'name': 'Home',
						'url': '',
						'click': 'switch',
						'icon': 'ph-house',
						'notification': false,
						'type': 'icon'
					},
					{
						'name': 'Activity',
						'url': '',
						'click': 'switch',
						'icon': 'ph-bell-ringing',
						'notification': true,
						'type': 'icon'
					},
					{
						'name': 'Search',
						'url': '',
						'icon': 'ph-magnifying-glass',
						'click': 'switch',
						'notification': false,
						'type': 'icon'
					},
					{
						'name': 'Saved',
						'url': '',
						'icon': 'ph-heart',
						'click': 'switch',
						'notification': false,
						'type': 'icon'
					},
					{
						'name': 'Setting',
						'url': '',
						'icon': 'ph-gear',
						'click': 'new',
						'notification': false,
						'type': 'icon'
					}
				]
			}
		},
		onLoad() {
			this.height = this.rpx2px(100);
		},
		methods: {
			showMenu() {
				console.log('opbar.vue show menu method invoked.');
			},

			showNotice() {
				console.log('opbar.vue show notice method invoked.');
			}
		}
	}
</script>
<style lang="scss">
	.ui-tab-bottom {
		position: relative !important;
	}
</style>