<template>
	<view :style="[{height: customBar + 'px'}]" style="z-index: 9000">
		<view class="ui-nav" :style="[{height: customBar + 'px'}] ">
			<view class="background" :class="opacity >= 1 ? 'blur' : ''"
				:style="[{height: customBar + 'px', opacity: opacity}]"></view>
			<view class="ui-header-content" :style="[{height: custom.height + 'px'}]">
				<text class="ph header-button" :style="[{top: custom.top + 'px', height: custom.height + 'px'}]"
					:class="'ph-' + icon" v-if="hasIcon" @tap="tapHandler"></text>
				<view class="title" :style="[{top: custom.top + 'px', height: custom.height + 'px'}]"
					v-if="title !== '' && !customTitle">
					{{title}}
				</view>
				<view class="custom-title" v-if="customTitle"
					:style="[{top: custom.top + 'px', height: custom.height + 'px'}]">
					<slot name="replaceTitle"></slot>
				</view>
				<view class="fix-content" v-if="fixContent" :style="[{top: fixContent2Top + 'px'}]">
					<slot name="fixContent"></slot>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: ""
			},
			hasIcon: {
				type: Boolean,
				default: true
			},
			icon: {
				type: String,
				default: 'arrow-left'
			},
			// 是否沉浸式导航，当向上滑动再固定显示
			isOpacity: {
				type: Boolean,
				default: true
			},
			// 比默认多出的高度,比如需要增加一个搜索按钮
			navHeight: {
				type: Number,
				default: 0
			},
			customTitle: {
				type: Boolean,
				default: false
			},
			// 是否有slot处理
			fixContent: {
				type: Boolean,
				default: false
			},
			tapHandler: {
				type: Function,
				default: () => {
					return () => {
						if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
							let url = '/' + __wxConfig.pages[0]
							return uni.redirectTo({
								url
							})
						}
						uni.navigateBack({
							delta: 1
						});
					};
				}
			}
		},
		data() {
			return {
				statusBarHeight: this.statusBar,
				customBar: this.customBar,
				fixContent2Top: this.customBar,
				opacity: 0,
				custom: this.custom,
			}
		},
		created() {
			if (!this.isOpacity) {
				this.opacity = 1;
			} else {
				this.opacity = 0;
			}

			if (this.navHeight > 0) {
				this.customBar = this.customBar + uni.upx2px(this.navHeight) + 8;
			}

			let _this = this;
			if (this.isOpacity) {
				uni.$on('$onScrollTop' + this.$root._uid, (e) => {
          // 改变导航栏渐变颜色
          if(e > 0){
            if (e > _this.customBar) {
              _this.opacity = 1;
            } else if (e < _this.customBar / 2) {
              _this.opacity = 0.3;
            } else if (e > _this.customBar / 2 && e < _this.customBar) {
              _this.opacity = 0.7;
            } else {
              _this.opacity = 0;
            }
          } else {
            _this.opacity = 0;
          }
				});
			}
		},

    destroyed() {
      uni.$off('$onScrollTop' + this.$root._uid);
    },

		methods: {
		}
	}
</script>
<style lang="scss">
	.ui-nav {
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
</style>