<script>
	import Vue from 'vue';
	export default {
		onLaunch: function() {
			console.log('App Launch')

			uni.getSystemInfo({
				success: function(e) {
					Vue.prototype.statusBar = e.statusBarHeight;
					let capsule = wx.getMenuButtonBoundingClientRect();
					if (capsule) {
						Vue.prototype.custom = capsule;
						/*
						 * 默认的customBarHeight
						 *
						 * 状态栏高度 + 胶囊高度 + (胶囊.top - 状态栏高度) * 2
						 */
						Vue.prototype.customBar = (capsule.top - e.statusBarHeight) * 2 + e
							.statusBarHeight + capsule.height;
						console.log(Vue.prototype.customBar);
					} else {
						Vue.prototype.customBar = e.statusBarHeight + 50;
					}
				}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./ui/scss/ui.scss";
</style>