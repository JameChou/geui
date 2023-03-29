<template>
	<ge-page :tabs="tabs">
		<ge-nav :isOpacity="true" hasIcon :icon="'magnifying-glass'" :title="'主页'" customTitle>
			<template v-slot:replaceTitle>
				<ge-switchseg style="width: 330rpx;" :datas="themeSegmentedController"
					:tapHandler="themeTapHandler" :initActive="system_theme === 'light' ? 0 : 1"></ge-switchseg>
			</template>
		</ge-nav>

		<view class="index-title header-48">
			<img src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/85b80a65-9579-4b63-9b43-0887bec03628.jpg"
			 mode="aspectFill"/>
			<view class="header-20 sub">明快、现代设计的Ui框架</view>
		</view>

		<view class="ui-section" style="margin-top: 50rpx;">
			<view class="section-title text-body-12">基本功能</view>
			<view class="section-list">
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/layout">
					<view class="ph ph-layout header-20 title"><text>布局</text></view>
					<view class="content">Layout<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/color">
					<view class="ph ph-palette header-20 title"><text>配色、阴影</text></view>
					<view class="content">Colors<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/icon">
					<view class="ph ph-phosphor-logo header-20 title"><text>图标</text></view>
					<view class="content">Icons<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item">
					<view class="ph ph-text-aa header-20 title"><text>文本</text></view>
					<view class="content">Fonts<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/button">
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
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/card">
					<view class="ph ph-credit-card header-20 title"><text>卡片</text></view>
					<view class="content">Cards<text class="ph ph-caret-right"></text></view>
				</view>
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/product1">
          <view class="ph ph-credit-card header-20 title"><text>产品列表-1</text></view>
          <view class="content">Product<text class="ph ph-caret-right"></text></view>
        </view>
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/product2">
          <view class="ph ph-credit-card header-20 title"><text>产品列表-2</text></view>
          <view class="content">Product<text class="ph ph-caret-right"></text></view>
        </view>
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/waterfall">
          <view class="ph ph-credit-card header-20 title"><text>瀑布流</text></view>
          <view class="content">Waterfall<text class="ph ph-caret-right"></text></view>
        </view>

        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/interests">
          <view class="ph ph-credit-card header-20 title"><text>喜好</text></view>
          <view class="content">Interests<text class="ph ph-caret-right"></text></view>
        </view>

        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/preview">
          <view class="ph ph-credit-card header-20 title"><text>预览表单</text></view>
          <view class="content">Preview<text class="ph ph-caret-right"></text></view>
        </view>

        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/dashboard">
          <view class="ph ph-credit-card header-20 title"><text>控制台</text></view>
          <view class="content">Dashboard<text class="ph ph-caret-right"></text></view>
        </view>

        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/data-grid">
          <view class="ph ph-credit-card header-20 title"><text>数据列表</text></view>
          <view class="content">Datagrid<text class="ph ph-caret-right"></text></view>
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
    computed: {
      tabs() {
        return this.$store.getters.getAppTabs;
      }
    },
		data() {
			return {
				themeSegmentedController: [{
					"name": 'Light'
				}, {
					"name": 'Dark'
				}],
				customBar: this.customBar
			};
		},
		onLoad() {
    },
		methods: {
			themeTapHandler(item, index) {
				let theme = index === 0 ? 'light' : 'dark';
        this.$store.commit('setTheme', theme);
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
		
		image {
			width: 250rpx;
			height: 250rpx;
		}
	}

	.ui-section {
		.section-title {
			display: flex;
			align-items: center;
			letter-spacing: 0.15em;
			text-transform: uppercase;
			color: var(--ui-text-regular-3);
			border-bottom: var(--ui-bottom-regular);
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
					color: var(--ui-text-regular-2);

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