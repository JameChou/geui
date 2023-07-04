<template>
	<ge-page noTabs>
		<ge-nav title="产品详情"></ge-nav>
		<view class="ui-container">
			<view class="product-image">
				<image style="width: 100%;" mode="aspectFill" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food3.jpeg"></image>

				<view class="product-image-shadow">
					<view class="product-title">
						草莓蛋糕
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
	export default {}
</script>
<style lang="scss">
	.product-image {
		position: relative;
	}
	.product-image-shadow {
		position: absolute;
		bottom: 0;
		height: 100rpx;
		width: 100%;
		background: linear-gradient(transparent, white);//backgournd可以设置所有背景属性
	}

	.product-title {
		font-size: 46rpx;
		color: var(--ui-text-regular);
		padding-left: 30.8rpx;
		padding-right: 30.8rpx;
		font-weight: 600;
		line-height: 132%;
	}

</style>