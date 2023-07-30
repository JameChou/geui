<template>
	<ge-page :tabs="tabs" :tab-active="1" :no-tabs="false">
		<ge-nav custom-title :show-back="false">
			<template v-slot:replaceTitle>
				<image style="height: 100%; width: 96px;" mode="aspectFill" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/template-title.png" />
			</template>
		</ge-nav>

		<view class="ui-container">
			<ge-card compact title="着陆页面(landing page)"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/landing-intro.png"
							 sub-title="一般用于初次进入页面对app的一个整体介绍"
							 info="Ge-Ui提供"
							 uuid="landing"
							 @tap-image="tapCard"
			></ge-card>

			<ge-card compact title="产品详情模板"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/shopping-intro.png"
							 sub-title="一个鞋类销售app样式页面"
							 info="Ge-Ui提供"
			></ge-card>

			<ge-card compact title="产品详情模板"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/shopping-intro.png"
							 sub-title="一个鞋类销售app样式页面"
							 info="Ge-Ui提供"
			></ge-card>
			<ge-card compact title="产品详情模板"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/shopping-intro.png"
							 sub-title="一个鞋类销售app样式页面"
							 info="Ge-Ui提供"
			></ge-card>
			<ge-card compact title="产品详情模板"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/shopping-intro.png"
							 sub-title="一个鞋类销售app样式页面"
							 info="Ge-Ui提供"
			></ge-card>
			<ge-card compact title="产品详情模板"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/shopping-intro.png"
							 sub-title="一个鞋类销售app样式页面"
							 info="Ge-Ui提供"
			></ge-card>

		</view>
	</ge-page>
</template>
<script>
export default {
	computed: {
		tabs() {
			return this.$store.getters.getAppTabs;
		}
	},
	methods: {
		tapCard(e) {
			console.log(e);
			if (e.uuid === 'landing') {
				uni.navigateTo({
					url: '/pages/template/onboarding'
				})
			}
		}
	}
}
</script>
<style lang="scss">
</style>