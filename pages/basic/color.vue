<template>
	<ge-page no-tabs>
		<ge-navbar title="配色" opacity></ge-navbar>

		<view class="ui-container">
			<ge-title category category-content="基础" title-content="文字、边框、阴影" title-icon="palette" border></ge-title>

			<view class="ui-flex color-section color-section-title" style="background: transparent;">
				<view class="pad ui-flex align-center justify-center">100%</view>
				<view class="pad ui-flex align-center justify-center">60%</view>
				<view class="pad ui-flex align-center justify-center">50%</view>
				<view class="pad ui-flex align-center justify-center">40%</view>
				<view class="pad ui-flex align-center justify-center">20%</view>
				<view class="pad ui-flex align-center justify-center">10%</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">White #000000</text>
				<view class="ui-flex color-section" style="background: #000000;">
					<view v-for="(item, index) in colorFill" class="pad" :class="item === 100 ? 'bg-white' : 'bg-white-' + item"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Black #FFFFFF</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in colorFill" class="pad" :class="item === 100 ? 'bg-black' : 'bg-black-' + item"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Blue #437colorFillFE</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in colorFill" class="pad" :class="item === 100 ? 'bg-blue' : 'bg-blue-' + item"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Green #00BcolorFill70</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in colorFill" class="pad" :class="item === 100 ? 'bg-green' : 'bg-green-' + item"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Orange #FE8E0B</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in colorFill" class="pad" :class="item === 100 ? 'bg-orange' : 'bg-orange-' + item"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Red #FE8E0B</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in colorFill" class="pad" :class="item === 100 ? 'bg-red' : 'bg-red-' + item"></view>
				</view>
			</view>

			<ge-title category category-content="背景" title-content="浅色、深色的基础背景配色" title-icon="paint-roller"
				border></ge-title>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Light Background</text>
				<view class="ui-flex color-light-section justify-between align-center">
					<view v-for="(item, index) in themeBgArr" class="pad" :class="'light-bg-' + item"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Dark Background</text>
				<view class="ui-flex color-light-section justify-between align-center"
					style="background-color: #000000;">
					<view v-for="(item, index) in themeBgArr" class="pad" :class="'dark-bg-' + item"></view>
				</view>
			</view>

			<ge-title class="margin-top" category category-content="阴影" title-content="阴影Shadow,三种大小可供选择"
				title-icon="paint-brush" border></ge-title>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Black&Blue Shadow</text>
				<view class="ui-flex color-shadow-section justify-between align-center"
					style="background-color: #FFFFFF;">
					<view class="pad black-shadow-sm"></view>
					<view class="pad black-shadow-reg"></view>
					<view class="pad black-shadow-lg"></view>
					<view class="pad blue-shadow-sm"></view>
					<view class="pad blue-shadow-reg"></view>
					<view class="pad blue-shadow-lg"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Green&Orange Shadow</text>
				<view class="ui-flex color-shadow-section justify-between align-center"
					style="background-color: #FFFFFF;">
					<view class="pad green-shadow-sm"></view>
					<view class="pad green-shadow-reg"></view>
					<view class="pad green-shadow-lg"></view>
					<view class="pad orange-shadow-sm"></view>
					<view class="pad orange-shadow-reg"></view>
					<view class="pad orange-shadow-lg"></view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				colorFill: [
						100, 60, 50, 40, 20, 10
				],
				themeBgArr: [
						'gray', 'yellow', 'blue', 'green', 'pink', 'orange'
				]
			}
		}
	}
</script>
<style lang="scss">

	@import "../../ui/scss/vars/colorvars";

	[class*='bg-'] {
		width: 100%;
		height: 100%;
	}

	.color-section-title {
		color: var(--ui-text-regular-3);
	}

	.color-section {
		height: 119rpx;
		border-radius: 40rpx;
		background: #FFFFFF;

		:first-child {
			border-radius: 40rpx 0px 0px 40rpx;
		}

		:last-child {
			border-radius: 0px 40rpx 40rpx 0px;
		}

		.pad {
			width: 118.3rpx;
			height: 118.3rpx;
			background: transparent;
		}
	}

	.color-light-section {
		height: 119rpx;
		border-radius: 40rpx;
		background: #FFFFFF;

		.pad {
			width: 110rpx;
			height: 110rpx;
			background: transparent;
			border-radius: 40rpx;
		}
	}

	.color-shadow-section {
		height: 119rpx;
		border-radius: 40rpx;
		background: #FFFFFF;

		.pad {
			width: 60rpx;
			height: 60rpx;
			background: #FFFFFF;
			border-radius: 40rpx;
		}
	}

</style>