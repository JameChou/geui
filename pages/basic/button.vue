<template>
	<ge-page no-tabs>
		<ge-navbar title="按钮" opacity></ge-navbar>

		<view class="ui-container">

			<ge-title title-content="基础按钮" title-icon="number-circle-one" category
				category-content="PRIMARY"></ge-title>
			<view class="ui-flex align-center ui-flex-wrap">
				<button class="ui-button blue shadow">Blue</button>
				<button class="ui-button gray shadow">Gray</button>
				<button class="ui-button primary shadow">Primary</button>
			</view>

			<ge-title title-content="圆角按钮(基础)" title-icon="number-circle-two" category
				category-content="ROUND"></ge-title>
			<view class="ui-flex align-center ui-flex-wrap">
				<button class="ui-button round blue">按钮</button>
				<button class="ui-button round gray">按钮</button>
				<button class="ui-button round primary">按钮</button>
			</view>

			<ge-title title-content="带ICON的按钮" title-icon="number-circle-three" category
				category-content="BASIC ICON"></ge-title>
			<view class="ui-flex align-center ui-flex-wrap">
				<button class="ui-button blue"><text class="icon ph ph-arrow-left"></text>返回</button>
				<button class="ui-button gray">消息<text class="icon ph ph-bell"></text></button>
				<button class="ui-button primary"><text class="icon ph ph-list"></text>菜单</button>
			</view>

			<ge-title title-content="圆形只有ICON按钮" title-icon="number-circle-four" category
				category-content="ROUND ICON"></ge-title>
			<view class="ui-flex align-center ui-flex-wrap">
				<button class="ui-icon-button blue ph ph-plus"></button>
				<button class="ui-icon-button gray ph ph-list"></button>
				<button class="ui-icon-button primary ph ph-pencil"></button>
				<button class="ui-icon-button blue shadow round primary ph ph-pencil" @tap="tap"></button>
			</view>

			<ge-title title-content="图标可动的按钮" title-icon="number-circle-five" category
				category-content="ANIMATION ICON"></ge-title>
			<view class="ui-flex align-center ui-flex-wrap">
				<button class="ui-button blue"><text class="icon ph ph-spinner ui-icon-spin"></text>加载</button>
				<button class="ui-button gray">消息<text class="icon ph ph-atom ui-icon-spin"></text></button>
				<button class="ui-button primary"><text
						class="icon ph ph-arrow-clockwise ui-icon-spin"></text>按钮</button>
			</view>

			<ge-title title-content="块状按钮" title-icon="number-circle-six" category category-content="BLOCK"></ge-title>
			<view class="ui-flex align-center ui-flex-wrap">
				<button class="ui-button blue block">提交 commit</button>
				<button class="ui-button blue block margin-top" disabled>提交 commit</button>
			</view>
		</view>
	</ge-page>
</template>
<script>
	export default {}
</script>

<style lang="scss">

</style>