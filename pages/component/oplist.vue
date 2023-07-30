<template>
	<ge-page>
		<ge-nav title="列表"></ge-nav>

		<view class="ui-container">
			<view class="ui-basic-list" style="margin-top: 50rpx;">
				<view class="section-title text-body-12">基础模块</view>
				<view class="section-list">
					<view class="section-list-item" data-url="/pages/basic/color">
						<view class="ph ph-palette header-20 title"><text>配色、阴影</text></view>
						<view class="content">Colors<text class="ph ph-caret-right"></text></view>
					</view>
					<view class="section-list-item" data-url="/pages/basic/fonts">
						<view class="ph ph-text-aa header-20 title"><text>文本、字体</text></view>
						<view class="content">Fonts<text class="ph ph-caret-right"></text></view>
					</view>
					<view class="section-list-item" data-url="/pages/basic/icon">
						<view class="ph ph-phosphor-logo header-20 title"><text>图标</text></view>
						<view class="content">Icons<text class="ph ph-caret-right"></text></view>
					</view>
					<view class="section-list-item" data-url="/pages/basic/layout">
						<view class="ph ph-layout header-20 title"><text>布局</text></view>
						<view class="content">Layout<text class="ph ph-caret-right"></text></view>
					</view>
				</view>
			</view>

			<view class="ui-basic-list" style="margin-top: 50rpx;">
				<view class="section-title text-body-12">Ui组件</view>
				<view class="section-list">
					<view class="section-list-item" data-url="/pages/component/navtabs">
						<view class="ph ph-tabs header-20 title"><text>导航栏</text></view>
						<view class="content">Navtabs<text class="ph ph-caret-right"></text></view>
					</view>
					<view class="section-list-item" data-url="/pages/component/opbar">
						<view class="ph ph-faders-horizontal header-20 title"><text>操作条</text></view>
						<view class="content">Navbar<text class="ph ph-caret-right"></text></view>
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>

</script>
<style lang="scss" scoped>
.ui-basic-list {
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
</style>