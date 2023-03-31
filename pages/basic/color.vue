<template>
	<ge-page no-tabs>
		<ge-nav has-icon title="配色"></ge-nav>

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
					<view v-for="(item, index) in 6" class="pad" :class="'white-' + index"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Black #FFFFFF</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in 6" class="pad" :class="'black-' + index"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Blue #4376FE</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in 6" class="pad" :class="'blue-' + index"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Green #00B670</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in 6" class="pad" :class="'green-' + index"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Orange #FE8E0B</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in 6" class="pad" :class="'orange-' + index"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Red #FE8E0B</text>
				<view class="ui-flex color-section">
					<view v-for="(item, index) in 6" class="pad" :class="'red-' + index"></view>
				</view>
			</view>

			<ge-title category category-content="背景" title-content="浅色、深色的基础背景配色" title-icon="paint-roller"
				border></ge-title>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Light Background</text>
				<view class="ui-flex color-light-section justify-between align-center">
					<view v-for="(item, index) in 6" class="pad" :class="'light-bg-' + index"></view>
				</view>
			</view>

			<view class="margin-top">
				<text class="text-body-14 color-section-title">Dark Background</text>
				<view class="ui-flex color-light-section justify-between align-center"
					style="background-color: #000000;">
					<view v-for="(item, index) in 6" class="pad" :class="'dark-bg-' + index"></view>
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
	export default {}
</script>
<style lang="scss">
	@import "../../ui/scss/color";

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

	.white {

		@each $class,
		$value in (0: $ui-color-white, 1: $ui-color-white-60, 2: $ui-color-white-50, 3: $ui-color-white-40, 4: $ui-color-white-20, 5: $ui-color-white-10) {
			&-#{$class} {
				background-color: $value !important;
				height: 100%;
				width: 100%;
			}
		}
	}

	.black {

		@each $class,
		$value in (0: $ui-color-black, 1: $ui-color-black-60, 2: $ui-color-black-50, 3: $ui-color-black-40, 4: $ui-color-black-20, 5: $ui-color-black-10) {
			&-#{$class} {
				background-color: $value !important;
				height: 100%;
				width: 100%;
			}
		}
	}

	.blue {

		@each $class,
		$value in (0: $ui-color-blue, 1: $ui-color-blue-60, 2: $ui-color-blue-50, 3: $ui-color-blue-40, 4: $ui-color-blue-20, 5: $ui-color-blue-10) {
			&-#{$class} {
				background-color: $value !important;
				height: 100%;
				width: 100%;
			}
		}
	}

	.green {

		@each $class,
		$value in (0: $ui-color-green, 1: $ui-color-green-60, 2: $ui-color-green-50, 3: $ui-color-green-40, 4: $ui-color-green-20, 5: $ui-color-green-10) {
			&-#{$class} {
				background-color: $value !important;
				height: 100%;
				width: 100%;
			}
		}
	}

	.orange {

		@each $class,
		$value in (0: $ui-color-orange, 1: $ui-color-orange-60, 2: $ui-color-orange-50, 3: $ui-color-orange-40, 4: $ui-color-orange-20, 5: $ui-color-orange-10) {
			&-#{$class} {
				background-color: $value !important;
				height: 100%;
				width: 100%;
			}
		}
	}

	.red {

		@each $class,
		$value in (0: $ui-color-red, 1: $ui-color-red-60, 2: $ui-color-red-50, 3: $ui-color-red-40, 4: $ui-color-red-20, 5: $ui-color-red-10) {
			&-#{$class} {
				background-color: $value !important;
				height: 100%;
				width: 100%;
			}
		}
	}

	.light-bg {

		@each $class,
		$value in (0: $ui-light-bg-color-gray, 1: $ui-light-bg-color-yellow, 2: $ui-light-bg-color-blue, 3: $ui-light-bg-color-green, 4: $ui-light-bg-color-pink, 5: $ui-light-bg-color-orange) {
			&-#{$class} {
				background-color: $value !important;
			}
		}
	}

	.dark-bg {

		@each $class,
		$value in (0: $ui-dark-bg-color-gray, 1: $ui-dark-bg-color-yellow, 2: $ui-dark-bg-color-blue, 3: $ui-dark-bg-color-green, 4: $ui-dark-bg-color-pink, 5: $ui-dark-bg-color-orange) {
			&-#{$class} {
				background-color: $value !important;
			}
		}
	}
</style>