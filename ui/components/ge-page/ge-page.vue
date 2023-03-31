<template>
	<view class="ui-page" :class="'theme-' + system_theme">
		<view class="ui-page-body" :style="[{'padding-bottom': paddingBottomHeight + 'px'}]">
			<slot></slot>
      <ge-tabbar :data="tabs" v-if="!noTabs"></ge-tabbar>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			tabs: {
				type: Array,
				default: () => {
          return [];
        }
			},
			theme: {
				type: String,
				default: 'light'
			},
			noTabs: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				paddingBottomHeight: 62
			};
		},
		created() {
			let _this = this;
			if (!this.noTabs) {
				this.paddingBottomHeight = this.paddingBottomHeight + 20;
			} else {
				this.paddingBottomHeight = this.paddingBottomHeight - 20;
			}

		},
		methods: {}
	}
</script>
<style lang="scss">

</style>