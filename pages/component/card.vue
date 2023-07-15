<template>
	<ge-page :tabs="tabs">
		<ge-nav title="卡片" fix-content :nav-height="60">
			<template v-slot:fixContent>
				<view style="width: 95%;">
					<ge-navtabs :items="items" :active="tabSelectedIndex" @tab-select="navTabsChange"></ge-navtabs>
				</view>
			</template>
		</ge-nav>
		<view class="ui-container" v-show="tabSelectedIndex === 0">
			<ge-title category category-content="CARD-1" title-content="大卡片类(样式一)" title-icon="number-circle-one" border></ge-title>
			<ge-card compact tag="推荐" title="What is react? Test Test 测试测试哈哈哈哈哈啥事"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food3.jpeg"
							 show-button sub-title="Education museum"
							 rich-info
							 button-icon="ph-map-pin"
			>
				<template v-slot:richInfo>
					<text class="ph ph-map-pin">Nanjing, China</text>
				</template>
			</ge-card>

			<ge-card compact tag="TAG" title="What is react? Test Test 测试测试哈哈哈哈哈啥事"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food3.jpeg"
							 show-button
							 button-icon="ph-dots-three"
							 info="卖桃核的小男孩"
			>
			</ge-card>

			<ge-card tag="TAG" title="What is react? Test Test 测试测试"
							 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food6.jpeg"
							 :show-button="false" sub-title="Education museum"
							 button-icon="ph-dots-three"
							 rich-info
							 :compact="false"
			>
				<template v-slot:richInfo>
					<view class="ui-avatar avatar-bg-blue round-avatar sm"><text>Z</text></view>卖桃核的小男孩
				</template>
			</ge-card>

		</view>

		<view class="ui-container" v-show="tabSelectedIndex === 1">
			<ge-title category category-content="CARD-2" title-content="小卡片样式" title-icon="number-circle-two" border></ge-title>
			<ge-small-card tag="书籍" title="钱钟书、莫言、杨绛、大刘 ABC DDD" button-name="添加至购物车" :score="4" :rateNumber="125"
										 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/book.jpeg"
			>
				<template v-slot:spec>
					<text class="ph ph-book-bookmark"></text>
					Non-fiction 1hr.50 min
				</template>
			</ge-small-card>
			<ge-small-card title="Anything is possible" button-name="查看信息" button-type="blue" :score="0"
										 image="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/book.jpeg"
										 spec="底部小信息"
		 ></ge-small-card>
		</view>

		<button class="ui-icon-button lg round ph ph-plus blue shadow float-button"></button>

	</ge-page>
</template>
<script>
	export default {
		computed: {
			tabs() {
				return this.$store.getters.getAppTabs;
			}
		},
		data() {
			return {
				items: [
						'样式一',
						'样式二'
				],
				tabSelectedIndex: 0
			}
		},
		methods: {
			navTabsChange(item) {
				this.tabSelectedIndex = item.index;
			}
		}
	}
</script>
<style lang="scss">

</style>