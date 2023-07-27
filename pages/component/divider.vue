<template>
	<ge-page no-tabs>
		<ge-nav title="分隔线"></ge-nav>
		<view class="ui-container">
			<ge-title title-content="无文字分隔线" title-icon="number-circle-one" category
								category-content="NO-TEXT"></ge-title>
			<ge-divider></ge-divider>
			<ge-divider line-style="double"></ge-divider>
			<ge-divider line-style="dotted"></ge-divider>
			<ge-divider line-style="solid"></ge-divider>

			<ge-title title-content="有文字分隔线" title-icon="number-circle-two" category
								category-content="TEXT"></ge-title>
			<ge-divider content="分隔线"></ge-divider>

			<ge-title title-content="文字居左" title-icon="number-circle-three" category
								category-content="ALIGN-LEFT"></ge-title>
			<ge-divider content="分隔线" content-align="left"></ge-divider>

			<ge-title title-content="文字居右" title-icon="number-circle-four" category
								category-content="ALIGN-RIGHT"></ge-title>
			<ge-divider content="分隔线" content-align="right"></ge-divider>

			<ge-title title-content="使用图标来代替文字" title-icon="number-circle-five" category
								category-content="CONTENT-ICON"></ge-title>
			<ge-divider content-icon="alien" content-align="center"></ge-divider>

			<ge-title title-content="自定义颜色" title-icon="number-circle-six" category
								category-content="COLOR"></ge-title>
			<ge-divider content="分隔线" content-align="center" color="#00B670"></ge-divider>

		</view>
	</ge-page>
</template>