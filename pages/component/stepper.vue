<template>
	<ge-page>
		<ge-navbar opacity title="步骤条"></ge-navbar>
		<view class="ui-container">
			<ge-stepbar :items="items" :steps="steps"></ge-stepbar>

			<button @tap="stepNext" class="ui-button primary blue">Next</button>
		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				items: ['第一步', '第二步', '第三步'],
				steps: 3
			}
		},
		methods: {
			stepNext() {
				if (this.steps === this.items.length) {
					return;
				}
				this.steps++;
			}
		}
	}
</script>
<style lang="scss" scoped>
</style>