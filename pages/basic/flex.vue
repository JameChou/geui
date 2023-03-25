<template>
	<ge-page :nav="true" noTabs>
		<template v-slot:nav>
			<view class="ui-header-content">
				<text class="ph ph-arrow-left" @tap="naviBack"></text>
				<view class="title">
					弹性布局
				</view>
			</view>
		</template>
	</ge-page>
</template>
<script>
	export default {}
</script>
<style lang="scss">
</style>