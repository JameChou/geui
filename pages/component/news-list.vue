<template>
	<ge-page no-tabs>
		<ge-nav title="新闻列表" custom-title custom-left fix-content :nav-height="60">
			<template v-slot:customLeft>
				<view>
					<text class="ph ph-arrow-left"></text>
					<text class="ph ph-list"></text>
				</view>
			</template>
			<template v-slot:replaceTitle>
				<img style="height: 100%; width: 96px;" mode="aspectFill" src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/c748cc9a-0b58-40b4-981b-386ceb678b46.png" />
			</template>
			<template v-slot:fixContent>
				<view style="width: 100%;">
					<ge-navlist :items="items" type="button"></ge-navlist>
				</view>
			</template>
		</ge-nav>

		<view class="ui-container">
		</view>
	</ge-page>
</template>
<script>
export default {
	data() {
		return {
			items: [
					'推荐',
					'排行榜',
					'突发新闻',
					'国际新闻',
					'科技',
					'军事'
			]
		}
	}
}
</script>
<style lang="scss">

</style>