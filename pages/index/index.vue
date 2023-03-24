<template>
	<ge-page :nav="true" :tabs="tabs">

    <template v-slot:nav>
      <view class="index-header-content">
        <text class="ph ph-magnifying-glass"></text>
        <ge-switchseg style="width: 400rpx; margin-left: 20rpx;" :datas="themeSegmentedController"
                      :tapHandler="themeTapHandler"></ge-switchseg>
      </view>
    </template>

		<view class="index-title header-48">
			GE-Ui
			<view class="header-20 sub">明快、现代设计的Ui框架</view>
		</view>

		<view class="ui-section" style="margin-top: 50rpx;">
			<view class="section-title text-body-12">基本功能</view>
			<view class="section-list">
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/flex">
					<view class="ph ph-layout header-20 title"><text>弹性布局</text></view>
					<view class="content">Flex<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/color">
					<view class="ph ph-palette header-20 title"><text>配色</text></view>
					<view class="content">Colors<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-phosphor-logo header-20 title"><text>图标</text></view>
					<view class="content">Icons<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-text-aa header-20 title"><text>文本</text></view>
					<view class="content">Fonts<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-radio-button header-20 title"><text>按钮</text></view>
					<view class="content">Buttons<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-microsoft-excel-logo header-20 title"><text>表格</text></view>
					<view class="content">Table<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-user-circle header-20 title"><text>头像</text></view>
					<view class="content">Avatar<text class="ph ph-caret-right"></text></view>
				</view>
			</view>
		</view>

		<view class="ui-section" style="margin-top: 50rpx;">
			<view class="section-title text-body-12">Ui组件</view>
			<view class="section-list">
				<view class="section-list-item">
					<view class="ph ph-textbox header-20 title"><text>表单</text></view>
					<view class="content">Forms<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-list-dashes header-20 title"><text>列表</text></view>
					<view class="content">Lists<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-tabs header-20 title"><text>导航</text></view>
					<view class="content">Nav<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-calendar header-20 title"><text>时间</text></view>
					<view class="content">Calendar<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-browsers header-20 title"><text>弹出</text></view>
					<view class="content">Popover<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-credit-card header-20 title"><text>卡片</text></view>
					<view class="content">Cards<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-sliders-horizontal header-20 title"><text>滑动</text></view>
					<view class="content">Slides<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-puzzle-piece header-20 title"><text>小组件</text></view>
					<view class="content">Widgets<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-list header-20 title"><text>菜单</text></view>
					<view class="content">Menus<text class="ph ph-caret-right"></text></view>
				</view>
			</view>
		</view>

	</ge-page>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
						'name': '组件',
						'url': '/pages/index/index',
						'icon': 'ph-puzzle-piece',
						'click': 'switch',
						'notification': false
					},
					{
						'name': '设置',
						'url': '/pages/setting/index',
						'icon': 'ph-gear',
						'click': 'switch',
						'notification': false
					},
					{
						'name': '播放',
						'url': '/pages/player/index',
						'icon': 'ph-guitar',
						'click': 'switch',
						'notification': true
					},
					{
						'name': '商品详情',
						'url': '/pages/product/index',
						'icon': 'ph-bank',
						'click': 'new',
						'notification': false
					}
				],
				themeSegmentedController: [{
					"name": 'light'
				}, {
					"name": 'dark'
				}],
				customBar: this.customBar
			};
		},
		onLoad() {
		},
		methods: {
			themeTapHandler(item, index) {
				this.theme = index === 0 ? 'light' : 'dark';
			},

      tapListItem(event) {
        let url = event.currentTarget.dataset.url;
        uni.navigateTo({
          url: url
        });
      }
		}
	}
</script>

<style lang="scss">
	.index-title {
		margin-left: 20rpx;
		margin-top: 10rpx;
		color: var(--ui-text-regular);

		.sub {
			color: #00B670;
			margin-top: 5rpx;
		}
	}

	.ui-section {
		.section-title {
			display: flex;
			align-items: center;
			letter-spacing: 0.15em;
			text-transform: uppercase;
			color: rgba(0, 0, 0, 0.5);
			border-bottom: solid 1.92rpx rgba(0, 0, 0, 0.1);
			padding-bottom: 34.6rpx;
			padding-left: 20rpx;
		}

		.section-list {

			&-item {
				margin-top: 57.7rpx;
				text-indent: 20rpx;
				display: flex;

				:first-child[class*="ph-"]>text {
					padding-left: 38.5rpx;
				}

				.title {
					width: 70%;
				}

				.content {
					display: flex;
					width: 30%;
					align-items: center;
					justify-content: left;
					color: rgba(0, 0, 0, 0.618);

					text {
						position: absolute;
						right: 30rpx;
					}
				}
			}
		}
	}

	.index-header-content {
		display: flex;
		align-items: flex-end;
		z-index: 1024;
    height: 100%;

		text[class*="ph-"] {
			padding-bottom: 20rpx;
			font-size: 40rpx;
			margin-left: 20rpx;
		}
	}
</style>