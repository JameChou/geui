<template>
	<!-- #ifdef MP-ALIPAY -->
	<view>
	<!-- #endif -->
	<view class="ui-sticky-box" :id="`fixed-${_uid}`" :class="disabled ? '' : 'sticky'" :style="[
						{
							top: !fixBottom ? `${top}px` : 'auto',
							bottom: fixBottom ? `${bottom}` : 'auto',
							zIndex: zIndex
						}
				]">

		<view class="ui-sticky-content" :id="`content-${_uid}`" :style="[{zIndex: zIndex}]">
			<slot></slot>
		</view>
	</view>
	<!-- #ifdef MP-ALIPAY -->
	<view v-if="!disabled" :style="[{height: `${contentHeight}px`}]" style="width: 100%; display: block;"></view>
	</view>
	<!-- #endif -->
</template>
<script>
	export default {
		name: "GeSticky",
		props: {
			offsetTop: {
				type: Number,
				default: 0
			},
			offsetBottom: {
				type: Number,
				default: 0
			},
			minusNavHeight: {
				type: Boolean,
				default: false
			},
			// 是否为px 默认为false表示像素为rpx
			px: {
				type: Boolean,
				default: false
			},
			fixBottom: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: Number,
				default: 5
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				top: 0,
				bottom: 0,
				contentHeight: 0
			}
		},
		computed: {
			system_navbar_height() {
				return this.$store.getters.system_navbar_height;
			}
		},
		created() {
			if (this.px) {
				this.top = this.minusNavHeight ? this.offsetTop : this.offsetTop + this.system_navbar_height;
				this.bottom = this.offsetBottom;
			} else {
				let offsetTop = this.rpx2px(this.offsetTop);
				this.top = this.minusNavHeight ? offsetTop : offsetTop + this.system_navbar_height;
				this.bottom = this.rpx2px(this.offsetBottom);
			}

		},

		// #ifdef MP-ALIPAY
		mounted() {
			let _this = this;
			this.$nextTick(() => {
				let item = uni.createSelectorQuery().in(_this).select(`#content-${_this._uid}`);
				item.boundingClientRect().exec((res) => {
					if (res) {
						_this.contentHeight = res[0].height;
					}
				});
			});
		}
		// #endif
	}
</script>
<style lang="scss" scoped>
	.ui-sticky-box {
		position: relative;
		width: 100%;

		&.sticky {
			/* #ifndef MP-ALIPAY */
			position: sticky;
			position: -webkit-sticky;
			/* #endif */
			/* #ifdef MP-ALIPAY */
			position: fixed;
			/* #endif */
		}

		.ui-sticky-content {
			position: relative;
		}
	}
</style>