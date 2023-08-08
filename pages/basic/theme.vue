<template>
	<ge-page no-tabs :background-image="backImage">
		<ge-navbar opacity title="主题">
		</ge-navbar>
		<view class="ui-container">
			<ge-select-list :datas="selectList" @choose-item="chooseItem" :value="initValue"></ge-select-list>

			<ge-title category category-content="BACKGROUND" title-content="更换背景" title-icon="radio-button"
				border></ge-title>
			<button class="ui-button block blue margin-top" @tap="changeBack">点击切换背景图片</button>

			<ge-title category category-content="EXAMPLE" title-content="适配的一些组件例子" title-icon="radio-button"
				border></ge-title>
			<view class="ui-flex align-center ui-flex-wrap margin-top">
				<button class="ui-button blue shadow">Blue</button>
				<button class="ui-button gray shadow">Gray</button>
				<button class="ui-button primary shadow">Primary</button>
			</view>

		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				initValue: -1,
				selectList: [{
						title: "明亮模式",
						subTitle: "系统以白色为主色调"
					},
					{
						title: "黑暗模式",
						subTitle: "系统以黑色为主色调"
					}
				],
				backImage: ''
			}
		},
		created() {
			this.initValue = this.system_theme !== 'light' ? 1 : 0;
		},
		methods: {
			chooseItem(data) {
				let theme = data.index === 0 ? 'light' : 'dark';
				this.$store.commit('setTheme', theme);
			},
			changeBack() {
				if (this.backImage === '') {
					this.backImage =
					'url("https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/back2.jpg")';
				} else {
					this.backImage = ''
				}
			}
		}
	}
</script>
<style lang="scss">

</style>