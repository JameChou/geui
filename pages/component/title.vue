<template>
	<ge-page no-tabs>
		<ge-nav title="标题"></ge-nav>

		<view class="ui-container">
			<ge-title title-content="普通标题" title-icon=""></ge-title>
			<ge-title title-content="有图标的标题" title-icon="rocket"></ge-title>
			<ge-title title-content="带标签的标题" title-icon="share-network" category category-content="这是标签"></ge-title>
			<ge-title title-content="显示下边框分隔线" border title-icon="arrows-in-line-vertical" category category-content="这是标签"></ge-title>

			<ge-title title-content="有操作按钮" border title-icon="radio-button" category
								category-content="这是标签"
								action
								actionName="更多(click)"
								@action-click="tapAction"
			>
			</ge-title>
		</view>
	</ge-page>
</template>
<script>
export default {
	methods: {
		tapAction() {
			// this.$uiSuccess('成功', '您成功触发了一个成功提示！');
			this.$uiModal.warning('警告', '点击了title的更多操作', 3000);
		}
	}
}
</script>