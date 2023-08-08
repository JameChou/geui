<template>
	<view class="ui-sticky-box" :id="`fixed-${_uid}`" :class="disabled ? '' : 'sticky'" :style="[
						{
							top: !fixBottom ? `${top}px` : 'auto',
							bottom: fixBottom ? `${bottom}` : 'auto',
							zIndex: zIndex
						}
				]">

		<view class="ui-sticky-content" :style="[{zIndex: zIndex}]">
			<slot></slot>
		</view>
	</view>
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
				bottom: 0
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

		}
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
		}

		.ui-sticky-content {
			position: relative;
		}
	}
</style>