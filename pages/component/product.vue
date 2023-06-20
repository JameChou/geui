<template>
	<ge-page no-tabs>
		<ge-nav title="产品列表"></ge-nav>
		<ge-title category category-content="PRODUCT" title-content="产品列表" title-icon="shopping-bag" border></ge-title>
		<view class="ui-container margin-top">
			<view class="ui-card-shopping margin-top">
				<view class="shopping-card-item">
					<image mode="aspectFill" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg" />
					<view class="card-content">
						<view class="card-title">清风手办设计稿</view>
						<view class="card-sub">可利用3D FDM打印机来进行打印</view>
						<view class="card-price"><text class="promote-price">28.2</text></view>
						<view class="card-score"><ge-rates :value="5" disabled></ge-rates>(123)</view>
					</view>
				</view>
				<view class="shopping-card-item">
					<image mode="aspectFill" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg" />
					<view class="card-content">
						<view class="card-title">这是一个两行的标题，数据，数据。上色喷漆，测试</view>
						<view class="card-sub">Subtitle, description, add something you like. learn how to spray color on module.</view>
						<view class="card-price"><text class="original-price">28.2</text><text class="promote-price">18.2</text></view>
						<view class="card-score"><ge-rates :value="2" disabled></ge-rates>(2300)</view>
					</view>
				</view>
				<view class="shopping-card-item">
					<image mode="aspectFill" src="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg" />
					<view class="card-content">
						<view class="card-title">这是一个两行的标题，数据，数据。上色喷漆，测试</view>
						<view class="card-sub">Subtitle, description, add something you like. learn how to spray color on module.</view>
						<view class="card-price"><text class="original-price">28.2</text><text class="promote-price">18.2</text></view>
						<view class="card-score"><ge-rates :value="2" disabled></ge-rates>(2300)</view>
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>