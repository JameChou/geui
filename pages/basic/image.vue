<template>
	<ge-page no-tabs>
		<ge-nav title="图片"></ge-nav>
		<view class="ui-container">
			<ge-title category category-content="阴影" title-content="底部投影阴影" title-icon="drop-half" border></ge-title>
			<image class="ui-image shadow" mode="aspectFit" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/irving.jpeg"></image>

			<ge-title category category-content="滤镜" title-content="滤镜" title-icon="funnel" border></ge-title>
			<view class="ui-grid column-3 gap-df margin-top">
				<view class="ui-flex ui-flex-column align-center justify-center">
					<image style="width: 220rpx;" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/pet.jpeg" mode="aspectFill"></image>
					<view>原图</view>
				</view>
				<view class="ui-flex ui-flex-column align-center justify-center">
					<image style="width: 220rpx;" class="ui-image filter-blur" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/pet.jpeg" mode="aspectFill"></image>
					<view>模糊滤镜</view>
				</view>
				<view class="ui-flex ui-flex-column align-center justify-center">
					<image style="width: 220rpx;" class="ui-image filter-gray" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/pet.jpeg" mode="aspectFill"></image>
					<view>黑白滤镜</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
export default {}
</script>
<style lang="scss">

</style>