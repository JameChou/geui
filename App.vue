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
            Vue.prototype.customBar = capsule.bottom + capsule.top - e.statusBarHeight;

          } else {
            Vue.prototype.customBar = e.statusBarHeight + 50;
          }

          console.log(Vue.prototype.customBar);
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
