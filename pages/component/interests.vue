<template>
	<ge-page no-tabs>
		<ge-navbar opactiy title="兴趣"></ge-navbar>
		<view class="ui-container">
			<ge-card-grid @click="clickItem" :items="items"></ge-card-grid>
		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				items: [{
						image: "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/dog-avatar.jpeg",
						title: "萌宠",
						subTitle: "800已关注"
					},
					{
						image: "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food5.jpeg",
						title: "美食&烹饪",
						subTitle: "嘿嘿美食哦"
					},
					{
						image: "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/basketball.jpeg",
						title: "篮球&体育",
						subTitle: "800已关注",
						mode: "aspectFit"
					},
					{
						image: "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg",
						title: "工业设计&手办&手绘",
						subTitle: "800已关注"
					}
				]
			}
		},
		methods: {
			clickItem(data) {
				console.log(`点击了interest->${data}`);
			}
		}
	}
</script>
<style lang="scss">
</style>