<template>
	<ge-page :tabs="tabs">
		<ge-nav title="卡片" fix-content :nav-height="60">
			<template v-slot:fixContent>
				<view style="width: 95%;">
					<ge-navtabs :items="items" :active="tabSelectedIndex" v-on:_navTabsTap_="navTabsChange"></ge-navtabs>
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
					<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/09445d7c-049e-4c72-ac29-b492218efecd.jpeg"
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
					<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/e61027cc-0cac-40f5-83e6-47bf071feb97.jpeg"
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
					<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/6f10b8b4-2bea-465c-80e3-0db765b68aff.jpeg"
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
						<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/5a42395f-00b7-4eda-bf62-5b27d75c7614.jpeg"
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
						<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/5a42395f-00b7-4eda-bf62-5b27d75c7614.jpeg"
								 mode="aspectFill" />
					</view>
				</view>
			</view>
		</view>

		<view class="ui-container" v-show="tabSelectedIndex === 2">
			<ge-title category category-content="CARD-3" title-content="Grid样式卡片布局" title-icon="number-circle-three" border></ge-title>
			<view class="ui-card-grid margin-top">
				<view class="grid-card-item">
					<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/4403bc3a-b3d5-40c9-b9af-43277fc3ba01.jpeg" mode="aspectFill" />
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
					<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/f3dc9158-1de5-4b32-8dbf-2b82e810617a.jpeg" mode="aspectFill" />
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
					<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/1f576154-2464-4434-84ee-6497b53dcf7d.jpeg" mode="aspectFill" />
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
					<image src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/bcf191f1-08b8-4814-befd-4819f6363cc0.jpeg" mode="aspectFill" />
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

		<view class="ui-container" v-show="tabSelectedIndex === 3">
			<view class="ui-card-shopping margin-top">
				<view class="shopping-card-item">
					<image mode="aspectFill" src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/bcf191f1-08b8-4814-befd-4819f6363cc0.jpeg" />
					<view class="card-content">
						<view class="card-title">清风手办设计稿</view>
						<view class="card-sub">可利用3D FDM打印机来进行打印</view>
						<view class="card-price"><text class="promote-price">28.2</text></view>
						<view class="card-score"><ge-rates :value="5" disabled></ge-rates></view>
					</view>
				</view>
				<view class="shopping-card-item">
					<image mode="aspectFill" src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/bcf191f1-08b8-4814-befd-4819f6363cc0.jpeg" />
					<view class="card-content">
						<view class="card-title">这是一个两行的标题，数据，数据。上色喷漆，测试</view>
						<view class="card-sub">Subtitle, description, add something you like. learn how to spray color on module.</view>
						<view class="card-price"><text class="original-price">28.2</text><text class="promote-price">18.2</text></view>
						<view class="card-score"><ge-rates :value="2" disabled></ge-rates></view>
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
						'样式三',
						'样式四'
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