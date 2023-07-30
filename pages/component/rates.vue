<template>
	<ge-page>
		<ge-nav title="评分"></ge-nav>

		<view class="ui-container">
			<ge-title title-content="普通可选的评分" border title-icon="number-circle-one" category category-content="RATES"></ge-title>
			<ge-rates></ge-rates>
			<ge-rates :value="0"></ge-rates>

			<ge-title title-content="自定义最大星星数量" border title-icon="number-circle-two" category category-content="RATES"></ge-title>
			<ge-rates :value="4" :max="10"></ge-rates>

			<ge-title title-content="星星颜色" border title-icon="number-circle-three" category category-content="RATES"></ge-title>
			<ge-rates :value="4" active-color="#E55539"></ge-rates>
			<ge-rates :value="2" default-color="#000000"></ge-rates>

			<ge-title title-content="Disabled" border title-icon="number-circle-four" category category-content="RATES"></ge-title>
			<ge-rates disabled :value="2"></ge-rates>

			<ge-title title-content="星星间距" border title-icon="number-circle-five" category category-content="RATES"></ge-title>
			<ge-rates margin="20rpx"></ge-rates>

			<ge-title title-content="星星大小" border title-icon="number-circle-six" category category-content="RATES"></ge-title>
			<ge-rates font-size="40rpx"></ge-rates>
			<ge-rates font-size="30rpx"></ge-rates>
			<ge-rates font-size="20rpx"></ge-rates>
		</view>
	</ge-page>
</template>