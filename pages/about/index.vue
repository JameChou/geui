<template>
	<ge-page :tabs="tabs" :tab-active="3" :no-tabs="false">
		<ge-nav :show-back="false"></ge-nav>

		<view class="about-bg" :class="system_theme === 'light' ? 'about-theme-light' : 'about-theme-dark'">
		</view>
		<view class="ui-container" :class="system_theme === 'light' ? 'about-theme-light' : 'about-theme-dark'">
			<view class="ui-flex align-center justify-center">
				<view class="about-logo">
					<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/logo-circle-500.png">
					</image>
					<view class="edit-btn"><text class="text-black ph ph-pencil"></text></view>
				</view>
			</view>

			<view class="about-name">
				<view class="user-name">
					GE-Ui
				</view>
				<view class="user-contact">
					zhouxy.vortex@gmail.com | QQ: 252410130
				</view>
			</view>

			<view class="about-oplist">
				<view class="item">
					<text class="icon ph ph-git-branch"></text>
					<text class="content">当前版本</text>
					<text class="setting">1.3</text>
				</view>
				<view class="item">
					<text class="icon ph ph-github-logo"></text>
					<text class="content">Github</text>
					<text class="setting">github.com/JameChou/ge-ui</text>
				</view>
				<view class="item">
					<text class="icon ph ph-file-code"></text>
					<text class="content">在线文档</text>
					<text class="setting">geui.xyz</text>
				</view>
				<view class="item">
					<text class="icon ph ph-translate"></text>
					<text class="content">设置界面语言</text>
					<text class="setting">中文</text>
				</view>
				<view class="item">
					<text class="icon ph ph-cloud-sun"></text>
					<text class="content">主题</text>
					<text class="setting">Light</text>
				</view>
			</view>

			<view class="about-oplist">
				<view class="item">
					<text class="icon ph ph-lock"></text>
					<text class="content">隐私</text>
					<text class="setting ph ph-caret-right" style="color: var(--ui-text-regular);"></text>
				</view>
				<view class="item">
					<text class="icon ph ph-chat"></text>
					<text class="content">联系我们</text>
					<text class="setting ph ph-caret-right" style="color: var(--ui-text-regular);"></text>
				</view>
				<view class="item">
					<text class="icon ph ph-question"></text>
					<text class="content">常见问题</text>
					<text class="setting ph ph-caret-right" style="color: var(--ui-text-regular);"></text>
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
	}
}
</script>
<style lang="scss" scoped>

.about-theme-light {
	--about-bg-color: #EBF0F0;
	--about-setting-color: #1573FE;
	--about-list-shadow: 0px 2rpx 8rpx 0px rgba(0, 0, 0, 0.25);
	--about-list-bg: #FFF;
}

.about-theme-dark {
	--about-bg-color: #4D5151;
	--about-setting-color: #89B9FF;
	--about-list-shadow: 0px 2rpx 8rpx 0px rgba(0, 0, 0, 0.25);
	--about-list-bg: #000;
}

.about-bg {
	width: 100%;
	height: 460rpx;
	position: absolute;
	background-color: var(--about-bg-color);
	top: 0;
	border-radius: 0 0 35% 35%;
}

.about-logo {
	position: relative;
	margin-top: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 350rpx;
	height: 350rpx;

	img, image {
		width: 350rpx;
		height: 350rpx;
	}

	.edit-btn {
		position: absolute;
		width: 110rpx;
		height: 110rpx;
		border-radius: 150rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 0;
		bottom: 0;
		background-color: #F5F5F5;
		border: 8rpx solid var(--ui-text-regular-4);

		text {
			font-size: 60rpx;
		}
	}
}

.about-name {
	margin-top: 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.user-name {
		text-align: center;
		font-size: 44rpx;
		font-style: normal;
		font-weight: 600;
		line-height: 56rpx;
	}

	.user-contact {
		text-align: center;
		font-size: 28rpx;
		font-style: normal;
		font-weight: 400;
		line-height: 40rpx;
		letter-spacing: 0.25px;
	}
}

.about-oplist {
	padding: 28rpx 48rpx 24rpx 32rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 66rpx;
	border-radius: 16rpx;
	box-shadow: var(--about-list-shadow);
	background: var(--about-list-bg);

	.item {
		display: flex;
		align-items: center;
		width: 100%;
		height: 60rpx;
		position: relative;

		.icon {
			font-size: 40rpx;
			margin-right: 26rpx;
		}

		.content {
			font-size: 28rpx;
			font-style: normal;
			font-weight: 400;
			line-height: 40rpx; /* 142.857% */
			letter-spacing: 0.25px;
		}

		.setting {
			color: var(--about-setting-color);
			font-size: 28rpx;
			font-style: normal;
			font-weight: 400;
			line-height: 40rpx; /* 142.857% */
			letter-spacing: 0.25px;
			position: absolute;
			right: 0;
		}
	}
}
</style>