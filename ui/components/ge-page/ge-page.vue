<template>
	<view class="ui-page theme-light">
		<view class="ui-page-body" :style="[{'padding-bottom': statusBarHeight + 'px'}]">
      <view :style="[{height: customBar + 'px'}]" v-if="nav">
        <view class="ui-index-header" :style="[{height: customBar + 'px'}]">
          <view class="background" :class="opacity >= 1 ? 'blur' : ''" :style="[{height: customBar + 'px', opacity: opacity}]"></view>
          <view :style="[{height: customBar + 'px'}]">
            <slot name="nav"></slot>
          </view>
        </view>
      </view>
			<slot></slot>
		</view>
		<ge-tabbar :data="tabs" v-if="!noTabs"></ge-tabbar>
	</view>
</template>
<script>
	export default {
		props: {
			nav: {
				type: Boolean,
				default: true
			},
			tabs: {
				type: Array,
				default: []
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
				statusBarHeight: this.statusBar + 60,
        customBar: this.customBar,
        opacity: 0
			};
		},
    created() {
      let _this = this;
      if (this.noTabs) {
        this.statusBarHeight = 0;
      }
      uni.$on('$onScrollTop' + this.$root._uid, (e) => {
        _this.pageScrollTop = e;
        _this.changeOpacity();
      });
    },
    methods: {
      changeOpacity() {
        this.opacity = this.pageScrollTop > this.customBar ? 1 : this.pageScrollTop * 0.01;
      }
    }
	}
</script>
<style lang="scss">
	.ui-page {
    color: var(--ui-text-regular);

		&-body {
			min-height: 100vh;
			background-color: var(--ui-bg-glass);
			color: var(--ui-text-regular);
			z-index: 1024;
			-webkit-backdrop-filter: var(--ui-bg-glass-blur);
		}

    .ui-index-header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 2020;
      transform: translateY(0);
      transition: transform 0.3s ease;

      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      display: block;

      .background {
        background: var(--ui-bg-glass);
        z-index: -1;
        position: absolute;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        display: block;

        &.blur {
          backdrop-filter: blur(38.5rpx);
        }
      }
    }
	}
</style>
