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
			<!-- 常规二 603839 -->
			<view class="ui-card compact">
				<view class="card-tag">
					推荐
				</view>
				<view class="card-button">
					<button class="ui-icon-button gray shadow ph ph-dots-three round sm"></button>
				</view>
				<view class="card-image">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food3.jpeg"
						mode="aspectFill" />
				</view>
				<view class="cover-content">
					<view class="background"></view>
					<text class="title">What is react? Test test test 测试测试</text>
					<text class="sub-title">Education museum delicated 测试测试哈哈哈哈哈哈</text>
					<text class="spec-info ph ph-map-pin">Nanjing, China</text>
				</view>
			</view>

			<!-- 常规一 -->
			<view class="ui-card" style="margin-top: 30.8rpx;">
				<view class="card-tag">
					标签
				</view>
				<view class="card-button">
					<button class="ui-icon-button gray shadow ph ph-dots-three round sm"></button>
				</view>
				<view class="card-image">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food5.jpeg"
						mode="aspectFill" />
				</view>

				<view class="content">
					<text class="title">What is react? Test test test 测试测试</text>
					<text class="sub-title">Education museum delicated 测试测试哈哈哈哈哈哈</text>
					<text class="spec-info ph ph-map-pin">Nanjing, China</text>
				</view>
			</view>

			<view class="ui-card compact">
				<view class="card-tag">
					推荐
				</view>
				<view class="card-button">
					<button class="ui-icon-button gray shadow ph ph-dots-three round sm"></button>
				</view>
				<view class="card-image">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food6.jpeg"
						mode="aspectFill" />
				</view>
				<view class="cover-content">
					<view class="background"></view>
					<text class="title">What is react? Test test test 测试测试</text>
					<text class="sub-title">Education museum delicated 测试测试哈哈哈哈哈哈</text>
					<text class="spec-info ph ph-map-pin">Nanjing, China</text>
				</view>
			</view>

		</view>

		<view class="ui-container" v-show="tabSelectedIndex === 1">
			<ge-title category category-content="CARD-2" title-content="小卡片样式" title-icon="number-circle-two" border></ge-title>
			<view class="ui-card-small">
				<view class="body">
					<view class="content">
						<view class="tag" v-if="false">Hello</view>
						<view class="title">Buna.Fits for you tunna. Buy One, get Second for FREE. Limited deal test test test</view>
						<view class="spec">
							<text class="ph ph-book-bookmark"></text>
								Non-fiction 1hr.50 min
						</view>
						<view class="score">4<ge-rates disabled :value="4"></ge-rates></view>
						<view class="operate"><button class="ui-button primary">Add to cart</button></view>
					</view>
					<view class="content-image">
						<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/book.jpeg"
								 mode="aspectFill" />
					</view>
				</view>
			</view>

			<view class="ui-card-small">
				<view class="body">
					<view class="content">
						<view class="tag">new Release</view>
						<view class="title">Buna.Fits for you tunna. Buy One</view>
						<view class="spec">
							<text class="ph ph-book-bookmark"></text>
							Non-fiction 1hr.50 min
						</view>
						<view class="score">4.6<ge-rates disabled :value="4"></ge-rates></view>
						<view class="operate"><button class="ui-button primary">Add to cart</button></view>
					</view>
					<view class="content-image">
						<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/book.jpeg"
								 mode="aspectFill" />
					</view>
				</view>
			</view>
		</view>

		<view class="ui-container" v-show="tabSelectedIndex === 2">
			<ge-title category category-content="CARD-3" title-content="Grid样式卡片布局" title-icon="number-circle-three" border></ge-title>
			<view class="ui-card-grid margin-top">
				<view class="grid-card-item">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food5.jpeg" mode="aspectFill" />
					<view class="card-content">
						<view class="card-title">
							美食&烹饪
						</view>
						<view class="card-sub">
							2700已关注
						</view>
					</view>
				</view>
				<view class="grid-card-item">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/dog-avatar.jpeg" mode="aspectFill" />
					<view class="card-content">
						<view class="card-title">
							萌宠
						</view>
						<view class="card-sub">
							8000已关注
						</view>
					</view>
				</view>
				<view class="grid-card-item">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/basketball.jpeg" mode="aspectFill" />
					<view class="card-content">
						<view class="card-title">
							篮球&体育
						</view>
						<view class="card-sub">
							7280已关注
						</view>
					</view>
				</view>
				<view class="grid-card-item">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg" mode="aspectFill" />
					<view class="card-content">
						<view class="card-title">
							工业设计&手办&手绘哈哈哈哈
						</view>
						<view class="card-sub">
							3已关注
						</view>
					</view>
				</view>
			</view>
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
						'样式二',
						'样式三'
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