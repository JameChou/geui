<template>
	<ge-page :tabs="tabs" :no-tabs="false" :loading="false" @tap-tabbar="tapTabbar">
		<ge-navbar opacity custom-left custom-title>
			<template v-slot:customLeft>
				<ge-avatar round size="sm"
					avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"></ge-avatar>
			</template>
			<template v-slot:customTitle>
				<ge-switchseg style="width: 330rpx;" :datas="themeSegmentedController" @tap-handler="themeTapHandler"
					:initActive="system_theme === 'light' ? 0 : 1"></ge-switchseg>
			</template>
		</ge-navbar>

		<view class="ui-container">
			<view class="index-title header-48">
				<image src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/logo-circle-500.png"
					mode="aspectFill" />
			</view>

			<view class="ui-setting-section divider" v-for="(item, index) in appPages" :key="index">
				<view class="section-title">{{item.name}}</view>
				<view class="section-list">
					<view class="section-item" :data-url="_item.url" @tap="tapListItem"
						v-for="(_item, _index) in item.items" :key="_item.name">
						<view class="icon"><text class="ph" :class="'ph-' + _item.icon"></text></view>
						<view class="item-body" :class="(item.items.length - 1) === _index ? 'no-bottom' : ''">
							<view class="content">
								<view class="title">{{_item.name}}</view>
								<view class="sub-title">{{_item.en}}</view>
							</view>
							<view class="operate"><text class="ph ph-caret-right"></text></view>
						</view>
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
			},
			appPages() {
				return this.$store.getters.getAppPages;
			}
		},
		data() {
			return {
				themeSegmentedController: [{
					"name": 'Light'
				}, {
					"name": 'Dark'
				}]
			};
		},
		onLoad() {},
		methods: {
			themeTapHandler(data) {
				let theme = data.index === 0 ? 'light' : 'dark';
				this.$store.commit('setTheme', theme);
			},

			tapListItem(event) {
				let url = event.currentTarget.dataset.url;
				uni.navigateTo({
					url: url
				});
			},

			tapTabbar(data) {
				this.$uiModal.info('提示', '您点击了图表按钮');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index-title {
		margin-top: 10rpx;
		color: var(--ui-text-regular);
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;

		.sub {
			color: #00B670;
			margin-top: 5rpx;
		}

		img,
		image {
			width: 350rpx;
			height: 350rpx;
		}

	}


	.index-header-content {
		display: flex;
		align-items: flex-end;
		height: 100%;

		text[class*="ph-"] {
			padding-bottom: 20rpx;
			font-size: 40rpx;
			margin-left: 20rpx;
		}
	}

	.ui-setting-section {
		position: relative;
		width: 100%;

		&.divider {
			border-bottom: var(--ui-setting-list-divider);
			border-bottom-style: dashed;
		}

		.section-title {
			height: 92rpx;
			font-size: 38rpx;
			font-style: normal;
			font-weight: 600;
			line-height: 138%;
			letter-spacing: 0.15px;
			position: relative;
			display: flex;
			align-items: center;
		}

		.section-list {
			position: relative;

			.section-item {
				height: 119rpx;
				display: flex;
				align-items: center;
				gap: 23rpx;

				.icon {
					width: 92rpx;
					height: 92rpx;
					font-size: 61rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 19.2rpx;
					background-color: var(--ui-activity-list-bg);
				}

				.item-body {
					position: relative;
					border-bottom: var(--ui-setting-list-bottom-border);
					display: flex;
					flex: 1;
					align-items: center;
					padding-bottom: 11.5rpx;

					&.no-bottom {
						border-bottom: none;
					}

					.content {
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						justify-content: center;
						flex: 1;

						.title {
							font-size: 30rpx;
							font-style: normal;
							font-weight: 400;
							line-height: 150%;
							/* 24px */
							letter-spacing: 0.269px;
						}

						.sub-title {
							font-size: 27rpx;
							font-style: normal;
							font-weight: 400;
							line-height: 142%;
							/* 19.88px */
							letter-spacing: 0.235px;
							color: var(--ui-text-regular-3);
						}
					}

					.operate {
						position: absolute;
						right: 0;
					}
				}
			}
		}

	}
</style>