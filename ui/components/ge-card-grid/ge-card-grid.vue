<template>
	<view class="ui-card-grid">
		<view class="grid-card-item" @tap="click(item, index)" v-for="(item, index) in items" :index="index">
			<image :src="item.image" :mode="getMode(item)" />
			<view class="card-content">
				<view class="card-title">
					{{item.title}}
				</view>
				<view class="card-sub">
					{{item.subTitle}}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => { return []; }
		}
	},
	methods: {
		click(item, index) {
			this.$emit('click', { item: item, index: index });
		},
		getMode(item) {
			if (item.mode == null) {
				return 'aspectFill';
			}

			return item.mode;
		}
	}
}
</script>
<style lang="scss">
</style>