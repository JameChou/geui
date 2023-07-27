<template>
	<ge-page no-tabs>
		<ge-nav title="日历"></ge-nav>

		<view class="ui-container">
			<view class="ui-setting-section">
				<view class="section-title">日期显示配置</view>
				<view class="section-list">
					<view class="section-item">
						<view class="icon"><text class="ph ph-moon"></text></view>
						<view class="item-body">
							<view class="content">
								<view class="title"> 显示农历? </view>
								<view class="sub-title">{{showLunar ? '显示农历信息' : '不显示农历信息'}}</view>
							</view>
							<!--
							<view class="operate"><text class="ph ph-caret-left"></text></view>
							-->
							<view class="operate"><switch type="switch" @change="lunarChange" :checked="showLunar"></switch></view>
						</view>
					</view>
					<view class="section-item">
						<view class="icon"><text class="ph ph-calendar"></text></view>
						<view class="item-body">
							<view class="content">
								<view class="title"> 是否显示月份背景? </view>
								<view class="sub-title">{{showMonthBg ? '在日期方块列表显示当前月份' : '不显示'}}</view>
							</view>
							<view class="operate"><switch type="switch" @change="monthBgChange" :checked="showMonthBg"></switch></view>
						</view>
					</view>

					<view class="section-item">
						<view class="icon"><text class="ph ph-arrows-horizontal"></text></view>
						<view class="item-body">
							<view class="content">
								<view class="title"> 是否下上月箭头? </view>
								<view class="sub-title">{{showChangeBtn ? '显示' : '不显示'}}</view>
							</view>
							<view class="operate"><switch type="switch" @change="changeBtnChange" :checked="showChangeBtn"></switch></view>
						</view>
					</view>

					<view class="section-item">
						<view class="icon"><text class="ph ph-paint-brush-broad"></text></view>
						<view class="item-body no-bottom">
							<view class="content">
								<view class="title"> 周末红标? </view>
								<view class="sub-title">{{weekend ? '周六周日使用红色字体标注' : '标准字体'}}</view>
							</view>
							<view class="operate"><switch type="switch" @change="weekendChange" :checked="weekend"></switch></view>
						</view>
					</view>
				</view>
			</view>

			<button @click="showModal" class="ui-button block primary blue">show calendar</button>
		</view>

		<template v-slot:modal>
			<ge-modal big-title="日期" sub-title="日期选择器" ref="modal">
				<view class="margin-top">
					<ge-calendar :show-lunar="showLunar" :show-month-bg="showMonthBg"
											 :show-change-btn="showChangeBtn" :weekend="weekend" show-shrink></ge-calendar>
				</view>
			</ge-modal>
		</template>
	</ge-page>
</template>
<script>
export default {
	data() {
		return {
			showLunar: false,
			showMonthBg: true,
			showChangeBtn: true,
			weekend: false
		}
	},
	methods: {

		showModal() {
			this.$refs.modal.show();
		},

		lunarChange(e) {
			this.showLunar = e.detail.value;
		},

		monthBgChange(e) {
			this.showMonthBg = e.detail.value;
		},

		changeBtnChange(e) {
			this.showChangeBtn = e.detail.value;
		},

		weekendChange(e) {
			this.weekend = e.detail.value;
		}
	}
}
</script>
<style lang="scss">

</style>