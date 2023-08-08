<template>
	<ge-page no-tabs>

		<ge-navbar opacity title="弹出层"></ge-navbar>
		<view class="ui-container">
			<button class="ui-button blue lg" @tap="showModal">modal</button>

			<ge-divider content-icon="cards"></ge-divider>
		</view>
		<template v-slot:sheet>
			<ge-sheet big-title="Filter Content" sub-title="Refine your home screen feed" ref="modal">
				<ge-select-list :datas="selectList" @choose-item="chooseItem" :value="1"></ge-select-list>
			</ge-sheet>
		</template>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				selectList: [{
						title: "跟随系统变化"
					},
					{
						title: "明亮模式",
						subTitle: "系统以白色为主色调"
					},
					{
						title: "黑暗模式",
						subTitle: "系统以黑色为主色调"
					}
				]
			}
		},
		methods: {
			showModal() {
				this.$refs.modal.show();
			},
			chooseItem(data) {
				console.log(data);
			},
			cancel() {
				console.log('cancel the modal');
			}
		}
	}
</script>
<style lang="scss">

</style>