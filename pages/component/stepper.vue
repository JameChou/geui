<template>
	<ge-page>
		<ge-navbar opacity title="步骤条"></ge-navbar>
		<view class="ui-container">
			<ge-stepbar :items="items" :steps="steps"></ge-stepbar>

			<ge-stepbar :items="itemsShopping" :steps="steps"></ge-stepbar>

			<button @tap="stepNext" class="ui-button primary blue">Next</button>
		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				items: ['第一步', '第二步', '第三步'],
				itemsShopping: ['下单', '运输中', '待收货', '已收货'],
				steps: 2
			}
		},
		methods: {
			stepNext() {
				this.steps++;
			}
		}
	}
</script>
<style lang="scss" scoped>
</style>