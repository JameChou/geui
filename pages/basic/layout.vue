<template>
	<ge-page no-tabs>
		<ge-navbar title="布局" fix-content>
			<template v-slot:fixContent>
				<view style="width: 95%;">
					<ge-navtabs :items="navItems" @tab-select="switchTab"></ge-navtabs>
				</view>
			</template>
		</ge-navbar>

		<view class="ui-container" v-if="index === 0">
			<ge-title category category-content="尺寸" title-content="弹性布局,不同的尺寸" title-icon="layout" border></ge-title>
			<view class="ui-flex align-center justify-center layout-flex-section margin-top">
				<view class="flex-basis-xs bg-green text-white">20%</view>
				<view class="flex-basis-sm bg-red text-white">40%</view>
				<view class="flex-basis-df bg-blue text-white">50%</view>
				<view class="flex-basis-lg bg-orange text-white">60%</view>
				<view class="flex-basis-xl bg-black text-white">80%</view>
			</view>

			<view class="ui-flex align-start ui-flex-column layout-flex-section layout-left">
				<view class="bg-blue text-white" style="width: 20%">xs(20%)</view>
				<view class="bg-blue text-white" style="width: 40%">sm(40%)</view>
				<view class="bg-blue text-white" style="width: 50%">df(50%)</view>
				<view class="bg-blue text-white" style="width: 60%">lg(60%)</view>
				<view class="bg-blue text-white" style="width: 80%">xl(80%)</view>
			</view>

			<ge-title category category-content="比例布局" title-content="按比例进行布局" title-icon="chart-pie-slice"
				border></ge-title>
			<view class="ui-flex align-center justify-space-around layout-flex-section divide margin-top">
				<view class="bg-green text-white ui-flex-sub">1</view>
				<view class="bg-green text-white ui-flex-sub">1</view>
			</view>

			<view class="ui-flex align-center justify-space-around layout-flex-section divide margin-top">
				<view class="bg-green text-white ui-flex-sub">1</view>
				<view class="bg-blue text-white ui-flex-twice">2</view>
			</view>

			<view class="ui-flex align-center justify-space-around layout-flex-section divide margin-top">
				<view class="bg-green text-white ui-flex-sub">1</view>
				<view class="bg-blue text-white ui-flex-twice">2</view>
				<view class="bg-red text-white ui-flex-treble">3</view>
			</view>

			<ge-title category category-content="JUSTIFY" title-content="水平对齐方式" title-icon="align-left"
				border></ge-title>
			<view class="ui-flex align-center justify-start layout-flex-section justify margin-top">
				<view class="bg-blue text-white">start</view>
				<view class="bg-blue text-white">start</view>
			</view>

			<view class="ui-flex align-center justify-end layout-flex-section justify margin-top">
				<view class="bg-blue text-white">end</view>
				<view class="bg-blue text-white">end</view>
			</view>

			<view class="ui-flex align-center justify-center layout-flex-section justify margin-top">
				<view class="bg-blue text-white">center</view>
				<view class="bg-blue text-white">center</view>
			</view>

			<view class="ui-flex align-center justify-between layout-flex-section justify margin-top">
				<view class="bg-blue text-white">between</view>
				<view class="bg-blue text-white">between</view>
			</view>

			<view class="ui-flex align-center justify-around layout-flex-section justify margin-top">
				<view class="bg-blue text-white">around</view>
				<view class="bg-blue text-white">around</view>
			</view>

			<ge-title category category-content="ALIGN" title-content="垂直对齐方式" title-icon="align-top" border></ge-title>
			<view class="ui-flex justify-start align-start layout-flex-section align margin-top">
				<view class="bg-blue text-white">consult</view>
				<view class="bg-red text-white">start</view>
			</view>

			<view class="ui-flex justify-start align-center layout-flex-section align margin-top">
				<view class="bg-blue text-white">consult</view>
				<view class="bg-red text-white">center</view>
			</view>

			<view class="ui-flex justify-start align-end layout-flex-section align margin-top">
				<view class="bg-blue text-white">consult</view>
				<view class="bg-red text-white">end</view>
			</view>

			<ge-title category category-content="SELF" title-content="单项对齐" title-icon="align-top" border></ge-title>
			<view class="ui-flex justify-start align-center layout-flex-section justify margin-top" style="height: 134rpx;">
				<view class="bg-blue text-white">center</view>
				<view class="bg-blue text-white">center</view>
				<view class="bg-blue text-white self-end">end</view>
				<view class="bg-blue text-white">center</view>
				<view class="bg-blue text-white">center</view>
			</view>
		</view>

		<view class="ui-container" v-if="index === 1">
			<ge-title category category-content="排列" title-content="等分列" title-icon="grid-four" border></ge-title>
			<view class="ui-grid layout-grid-section column-1 margin-top">
				<view v-for="(item, index) in 2" class="text-white" :class="index % 2 == 0 ? 'bg-blue' : 'bg-green'">1
				</view>
			</view>

			<view class="ui-grid layout-grid-section column-2 margin-top">
				<view class="bg-green text-white">1</view>
				<view class="bg-blue text-white">2</view>
				<view class="bg-blue text-white">3</view>
				<view class="bg-green text-white">4</view>
			</view>

			<view class="ui-grid layout-grid-section column-3 margin-top">
				<view class="bg-green text-white">1</view>
				<view class="bg-blue text-white">2</view>
				<view class="bg-green text-white">3</view>
				<view class="bg-blue text-white">4</view>
				<view class="bg-green text-white">5</view>
				<view class="bg-blue text-white">6</view>
			</view>

			<view class="ui-grid layout-grid-section column-4 margin-top">
				<view class="bg-green text-white">1</view>
				<view class="bg-blue text-white">2</view>
				<view class="bg-green text-white">3</view>
				<view class="bg-blue text-white">4</view>
				<view class="bg-blue text-white">5</view>
				<view class="bg-green text-white">6</view>
				<view class="bg-blue text-white">7</view>
				<view class="bg-green text-white">8</view>
			</view>

			<view class="ui-grid layout-grid-section column-5 margin-top">
				<view class="bg-green text-white">1</view>
				<view class="bg-blue text-white">2</view>
				<view class="bg-green text-white">3</view>
				<view class="bg-blue text-white">4</view>
				<view class="bg-green text-white">5</view>
				<view class="bg-blue text-white">6</view>
				<view class="bg-green text-white">7</view>
				<view class="bg-blue text-white">8</view>
				<view class="bg-green text-white">9</view>
				<view class="bg-blue text-white">10</view>
			</view>

			<ge-title category category-content="GAP" title-content="Grid之间缝隙控制" title-icon="squares-four"
				border></ge-title>
			<view class="ui-grid layout-grid-section column-2 margin-top gap-df">
				<view class="bg-green text-white">1</view>
				<view class="bg-blue text-white">2</view>
				<view class="bg-blue text-white">3</view>
				<view class="bg-green text-white">4</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
	let _this = null;
	export default {
		data() {
			return {
				navItems: [
					'Flex',
					'Grid'
				],
				navHeight: this.rpx2px(100),
				index: 0
			}
		},
		created() {
			_this = this;
		},
		methods: {
			switchTab(data) {
				_this.index = data.index;
			}
		}
	}
</script>
<style lang="scss">
	.layout-flex-section {

		&.layout-left {
			view {
				justify-content: left;
				text-indent: 10rpx;
				margin-top: 20rpx;
			}
		}

		&.divide {
			:first-child {
				margin-left: 0px;
			}

			view {
				margin-left: 20rpx;
			}
		}

		&.justify {
			:first-child {
				margin-left: 0px;
			}

			view {
				width: 120rpx;
				margin-left: 20rpx;
			}
		}

		&.align {
			:first-child {
				margin-left: 0px;
				height: 150rpx;
			}

			view {
				width: 120rpx;
				height: 60rpx;
				margin-left: 20rpx;
			}
		}

		view {
			height: 70rpx;
			align-items: center;
			justify-content: center;
			display: flex;
		}
	}

	.layout-grid-section {
		view {
			padding: 10rpx;
			text-align: center;
			height: 60rpx;
		}
	}
</style>