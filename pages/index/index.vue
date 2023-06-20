<template>
	<ge-page :tabs="tabs">
		<ge-nav :is-opacity="true" has-icon :icon="'magnifying-glass'" :title="'主页'" custom-title custom-left>
      <template v-slot:customLeft>
        <view class="ui-avatar round-avatar sm" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')">
        </view>
      </template>
			<template v-slot:replaceTitle>
				<ge-switchseg style="width: 330rpx;" :datas="themeSegmentedController" :tapHandler="themeTapHandler"
					:initActive="system_theme === 'light' ? 0 : 1"></ge-switchseg>
			</template>
		</ge-nav>

    <view class="ui-container">
		<view class="index-title header-48">
			<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/logo.jpg"
				mode="aspectFill" />
			<view class="header-20 sub">明快、现代设计的Ui框架</view>
		</view>

		<view class="ui-section" style="margin-top: 50rpx;">
			<view class="section-title text-body-12">基本功能</view>
			<view class="section-list">
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/fonts">
          <view class="ph ph-text-aa header-20 title"><text>文本</text></view>
          <view class="content">Fonts<text class="ph ph-caret-right"></text></view>
        </view>
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/icon">
          <view class="ph ph-phosphor-logo header-20 title"><text>图标</text></view>
          <view class="content">Icons<text class="ph ph-caret-right"></text></view>
        </view>
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/color">
          <view class="ph ph-palette header-20 title"><text>配色、阴影</text></view>
          <view class="content">Colors<text class="ph ph-caret-right"></text></view>
        </view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/layout">
					<view class="ph ph-layout header-20 title"><text>布局</text></view>
					<view class="content">Layout<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/button">
					<view class="ph ph-radio-button header-20 title"><text>按钮</text></view>
					<view class="content">Buttons<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/table">
					<view class="ph ph-microsoft-excel-logo header-20 title"><text>表格</text></view>
					<view class="content">Table<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/avatar">
					<view class="ph ph-user-circle header-20 title"><text>头像</text></view>
					<view class="content">Avatar<text class="ph ph-caret-right"></text></view>
				</view>
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/basic/form">
          <view class="ph ph-textbox header-20 title"><text>表单</text></view>
          <view class="content">Forms<text class="ph ph-caret-right"></text></view>
        </view>
			</view>
		</view>

		<view class="ui-section" style="margin-top: 50rpx;">
			<view class="section-title text-body-12">Ui组件</view>
			<view class="section-list">
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/navtabs">
          <view class="ph ph-tabs header-20 title"><text>导航栏</text></view>
          <view class="content">Navtabs<text class="ph ph-caret-right"></text></view>
        </view>
        <view class="section-list-item" @tap="tapListItem" data-url="/pages/component/opbar">
          <view class="ph ph-faders-horizontal header-20 title"><text>操作条</text></view>
          <view class="content">Navbar<text class="ph ph-caret-right"></text></view>
        </view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/user-list">
					<view class="ph ph-list-dashes header-20 title"><text>用户列表</text></view>
					<view class="content">Userlists<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/news-list">
					<view class="ph ph-newspaper-clipping header-20 title"><text>新闻列表</text></view>
					<view class="content">Newslists<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/waterfall">
					<view class="ph ph-columns header-20 title"><text>瀑布流</text></view>
					<view class="content">Waterfall<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/card">
					<view class="ph ph-cards header-20 title"><text>卡片</text></view>
					<view class="content">Card<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/product">
					<view class="ph ph-shopping-bag header-20 title"><text>产品</text></view>
					<view class="content">Product<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/modal">
					<view class="ph ph-app-window header-20 title"><text>弹出</text></view>
					<view class="content">Modal<text class="ph ph-caret-right"></text></view>
				</view>
				<view class="section-list-item" @tap="tapListItem" data-url="/pages/component/toast">
					<view class="ph ph-info header-20 title"><text>提示</text></view>
					<view class="content">Toast<text class="ph ph-caret-right"></text></view>
				</view>
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
		onLoad() {},
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
		margin-top: 10rpx;
		color: var(--ui-text-regular);

		.sub {
			color: #00B670;
			margin-top: 5rpx;
		}

		img, image {
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
			border-bottom: var(--ui-bottom-border-regular);
			padding-bottom: 34.6rpx;
		}

		.section-list {
      position: relative;

			&-item {
				margin-top: 57.7rpx;
				display: flex;

				:first-child[class*="ph-"]>text {
					padding-left: 38.5rpx;
				}

				.title {
					width: 80%;
				}

				.content {
					display: flex;
					width: 30%;
					align-items: center;
					justify-content: left;
					color: var(--ui-text-regular-2);

					text {
						position: absolute;
						right: 20rpx;
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