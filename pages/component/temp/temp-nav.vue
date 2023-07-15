<template>
	<view :style="[{height: customBar + 'px'}]" style="z-index: 2">
		<view class="ui-nav" :style="[{height: customBar + 'px'}] ">
			<view class="background" :class="opacity >= 1 ? 'blur' : ''"
				:style="[{height: customBar + 'px', opacity: opacity}]"></view>
			<view class="ui-header-content" :style="[{height: capsule.height + 'px'}]">
        <block v-if="!customLeft">
          <!-- #ifndef MP-ALIPAY -->
          <text class="ph header-button"
                :style="[{top: capsule.top + 'px', height: capsule.height + 'px'}]"
                :class="'ph-' + backIcon" v-if="showBack" @tap="headerButtonTap">
            <text v-if="backText !== ''">{{backText}}</text>
          </text>
          <!-- #endif -->
        </block>
        <block v-else>
          <!-- 自定义左侧button -->
          <view class="ph custom-left" :style="[{height: capsule.height + 'px'}]">
            <slot name="customLeft"></slot>
          </view>
        </block>
				<view class="title" :style="[{top: capsule.top + 'px', height: capsule.height + 'px'}]"
					v-if="title !== '' && !customTitle">
					{{title}}
				</view>
				<view class="custom-title" v-if="customTitle"
					:style="[{top: capsule.top + 'px', height: capsule.height + 'px'}]">
					<slot name="replaceTitle"></slot>
				</view>
				<view class="fix-content" v-if="fixContent">
					<slot name="fixContent"></slot>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
  import {mapState} from 'vuex';
	export default {
    name: 'TempNav',
		props: {
			title: {
				type: String,
				default: ""
			},
			showBack: {
				type: Boolean,
				default: true
			},
      customLeft: {
        type: Boolean,
        default: false
      },
			backIcon: {
				type: String,
				default: 'arrow-left'
			},
      backText: {
        type: String,
        default: ''
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
				customBar: 0,
				opacity: 0,
        capsule: {
          top: 0,
          bottom: 56,
          left: 278,
          height: 50,
          width: 87
        }
			}
		},
    methods: {
      headerButtonTap() {
        // #ifdef H5
        let handler = this.tapHandler();
        handler();
        // #endif
        // #ifdef MP
        this.tapHandler();
        // #endif
      }
    },
		computed: {
      ...mapState({
        system_statusBar_height: state => state.system_statusBar_height
      }),
			system_navbar_height() {
				return this.$store.getters.system_navbar_height;
			}
		},
		created() {
			if (!this.isOpacity) {
				this.opacity = 1;
			} else {
				this.opacity = 0;
			}

			if (this.navHeight > 0) {
				this.customBar = 50 + uni.upx2px(this.navHeight) + 8;
			} else {
				this.customBar = 50;
			}

			let _this = this;
			if (this.isOpacity) {
				uni.$on('$onScrollTop' + this.$root._uid, (e) => {
					// 改变导航栏渐变颜色
					if (e > 0) {
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

      // #ifdef MP-ALIPAY
      my.hideAllFavoriteMenu();
      // #endif
		},

		destroyed() {
			uni.$off('$onScrollTop' + this.$root._uid);
		}

	}
</script>
<style lang="scss">
	.ui-nav {
		position: relative;
		width: 100%;
		z-index: 2;
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