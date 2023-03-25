<template>
	<ge-page noTabs>

		<ge-nav :title="'图标'" fixContent :isOpacity="false" :navHeight="70">
			<template v-slot:fixContent>
				<view class="ui-form-group black-shadow-sm round" style="height: 70upx;">
					<text class="ph ph-magnifying-glass icon-inside"></text>
					<input type="text" placeholder="搜索icon" />
				</view>
			</template>
		</ge-nav>

		<view class="icon-data">
			<view v-for="(item, index) in iconData.slice(0, 50)" :key="index">
				<view class="container">
					<text class="ph icon" :class="'ph-' + item"></text>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
	const icons = require('@/mock/icon.json');
	export default {
		data() {
			return {
				iconData: icons
			}
		},
		onLoad() {
			console.log(this.iconData);
		}
	}
</script>
<style lang="scss">
	.ui-form-group {
		display: flex;
		align-items: center;
		background: rgba(0, 0, 0, 0.1);

		.icon-inside {
			padding-left: 10rpx;
		}

		input {
			width: 100%;
		}

		&.round {
			border-radius: 19.8rpx;
		}
	}

	.icon-data {
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.container {
			width: 240;

			.icon {
				font-size: 80rpx;
			}

			.name {
				position: relative;
			}
		}

	}
</style>