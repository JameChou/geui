<template>
	<ge-page no-tabs>
		<ge-navbar opacity title="产品列表"></ge-navbar>
		<ge-title category category-content="PRODUCT" title-content="产品列表" title-icon="shopping-bag" border></ge-title>
		<view class="ui-container margin-top">
			<view class="ui-card-shopping margin-top">
				<view class="shopping-card-item">
					<image mode="aspectFill"
						src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg" />
					<view class="card-content">
						<view class="card-title">清风手办设计稿</view>
						<view class="card-sub">可利用3D FDM打印机来进行打印</view>
						<view class="card-price"><text class="promote-price">28.2</text></view>
						<view class="card-score"><ge-rates :value="5" disabled></ge-rates>(123)</view>
					</view>
				</view>
				<view class="shopping-card-item">
					<image mode="aspectFill"
						src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg" />
					<view class="card-content">
						<view class="card-title">这是一个两行的标题，数据，数据。上色喷漆，测试</view>
						<view class="card-sub">Subtitle, description, add something you like. learn how to spray color
							on module.</view>
						<view class="card-price"><text class="original-price">28.2</text><text
								class="promote-price">18.2</text></view>
						<view class="card-score"><ge-rates :value="2" disabled></ge-rates>(2300)</view>
					</view>
				</view>
				<view class="shopping-card-item">
					<image mode="aspectFill"
						src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg" />
					<view class="card-content">
						<view class="card-title">这是一个两行的标题，数据，数据。上色喷漆，测试</view>
						<view class="card-sub">Subtitle, description, add something you like. learn how to spray color
							on module.</view>
						<view class="card-price"><text class="original-price">28.2</text><text
								class="promote-price">18.2</text></view>
						<view class="card-score"><ge-rates :value="2" disabled></ge-rates>(2300)</view>
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
</script>
<style lang="scss" scoped>
	.ui-card-shopping {
		display: grid;
		position: relative;
		grid-template-columns: auto auto;
		column-gap: 15rpx;
		row-gap: 15rpx;

		.shopping-card-item {
			width: 337rpx;

			img,
			image {
				width: 337rpx;
				height: 337rpx;
				border-radius: 11rpx;
			}

			.card-content {
				position: relative;

				.card-title {
					font-style: normal;
					font-weight: 600;
					font-size: 30rpx;
					line-height: 150%;
					color: var(--ui-text-regular);
					display: -webkit-box;
					overflow: hidden;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.card-sub {
					font-style: normal;
					font-weight: 400;
					font-size: 27rpx;
					line-height: 142%;
					display: -webkit-box;
					overflow: hidden;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				}

				.card-price {
					font-style: normal;
					font-weight: 600;
					font-size: 38rpx;
					line-height: 138%;

					.original-price {
						text-decoration: line-through;

						&::before {
							content: '¥';
						}

						+.promote-price {
							color: var(--ui-card-text-price);
						}
					}

					.promote-price {
						color: var(--ui-text-regular);

						&::before {
							content: '¥';
						}
					}
				}

				.card-score {
					font-style: normal;
					font-weight: 400;
					font-size: 23rpx;
					line-height: 130%;
					color: var(--ui-text-regular-3);
					display: flex;
				}
			}
		}
	}
</style>