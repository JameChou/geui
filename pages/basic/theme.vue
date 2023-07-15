<template>
	<ge-page no-tabs>
		<ge-nav title="主题">
		</ge-nav>
		<view class="ui-container">
			<ge-select-list :datas="selectList" @choose-item="chooseItem" :value="initValue"></ge-select-list>

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
			selectList: [
				{
					title: "明亮模式",
					subTitle: "系统以白色为主色调"
				},
				{
					title: "黑暗模式",
					subTitle: "系统以黑色为主色调"
				}
			]
		}
	},
	created() {
		this.initValue = this.system_theme !== 'light' ? 1 : 0;
	},
	methods: {
		chooseItem(data) {
			let theme = data.index === 0 ? 'light' : 'dark';
			this.$store.commit('setTheme', theme);
		}
	}
}
</script>
<style lang="scss">

</style>