<template>
	<ge-sticky minus-nav-height :disabled="!sticky" :zIndex="zIndex">
		<view class="ui-navbar" :style="[{minHeight: height > 0 ? `${height}px` : `${system_navbar_height}px`}]" :id="`nav_${uuid}`">
			<view class="background" :style="[{opacity: opacityVal, height: `${navHeight}px`}]"></view>
			<!-- #ifdef MP -->
			<view :style="[{height: safeInsetTop ? system_capsule.top + 'px' : '0px'}]"></view>
			<!-- #endif -->
			<view class="ui-navbar-header" :style="[{height: height > 0 ? `${height}px` : `${system_capsule.height}px`}]">
				<block v-if="!customLeft">
					<!-- 默认左侧 -->
					<!-- #ifndef MP-ALIPAY -->
					<view class="header-button" @tap="tapBack" v-if="!hideBack">
						<text :class="[backIcon]"></text>
						<text class="header-back-text" v-if="backText !== ''">{{backText}}</text>
					</view>
					<!-- #endif -->
				</block>
				<block v-else>
					<view class="custom-left">
						<slot name="customLeft"></slot>
					</view>
				</block>
				<block v-if="customTitle">
					<view class="custom-title">
						<slot name="customTitle"></slot>
					</view>
				</block>
				<block v-else>
					<view class="title">{{title}}</view>
				</block>
			</view>

			<view class="fix-content" v-if="fixContent">
				<slot name="fixContent"></slot>
			</view>
		</view>
	</ge-sticky>
</template>
<script>
import {
	mapState
} from 'vuex';
import uuid from './uuid.js';

export default {
	name: "GeNavbar",
	props: {
		id: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		hideBack: {
			type: Boolean,
			default: false
		},
		customLeft: {
			type: Boolean,
			default: false
		},
		backIcon: {
			type: String,
			default: "ph ph-arrow-left"
		},
		backText: {
			type: String,
			default: ""
		},
		opacity: {
			type: Boolean,
			default: false
		},
		customTitle: {
			type: Boolean,
			default: false
		},
		fixContent: {
			type: Boolean,
			default: false
		},
		sticky: {
			type: Boolean,
			default: true
		},
		height: {
			type: Number,
			default: 0
		},
		safeInsetTop: {
			type: Boolean,
			default: true
		},
		zIndex: {
			type: Number,
			default: 5
		}
	},
	computed: {
		...mapState({
			system_statusBar_height: state => state.system_statusBar_height
		}),
		system_navbar_height() {
			return this.$store.getters.system_navbar_height;
		},
		uuid() {
			if (this.id === '') {
				return uuid(8);
			}
			return this.id;
		}
	},
	data() {
		return {
			opacityVal: 0,
			navHeight: 0
		}
	},
	mounted() {
		let _this = this;
		this.$nextTick(() => {
			let item = uni.createSelectorQuery().in(_this).select(`#nav_${_this.uuid}`);
			item.boundingClientRect().exec((res) => {
				if (res) {
					_this.navHeight = res[0].height;
				} else {
					_this.navHeight = _this.system_navbar_height;
				}
				_this.$emit('nav-height', _this.navHeight);
			});
			if (!_this.opacity) {
				_this.opacityVal = 1;
			} else {
				uni.$on('$onScrollTop' + _this.$root._uid, (e) => {
					if (e <= 0) {
						_this.opacityVal = 0;
					} else if (e > 0 && e < _this.navHeight) {
						_this.opacityVal = 0.5;
					} else {
						_this.opacityVal = 1;
					}
				});
			}
		});
	},

	methods: {
		tapBack() {
			// #ifdef MP
			if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
				let url = '/' + __wxConfig.pages[0]
				return uni.switchTab({
					url
				})
			}
			uni.navigateBack({
				delta: 1
			});
			// #endif

			// #ifdef H5
			if (getCurrentPages().length < 2) {
				uni.switchTab({
					url: '/'
				});
			} else {
				uni.navigateBack({
					delta: 1
				});
			}
			// #endif
		}
	},

	destroyed() {
		uni.$off('$onScrollTop' + this.$root._uid);
	}
}
</script>
<style lang="scss" scoped>
.ui-navbar {
	z-index: 2;
	transform: translateY(0);
	transition: transform 0.3s ease;
	margin: 0;
	padding: 0;
	border: 0;

	.background {
		width: 100%;
		height: inherit;
		position: absolute;
		background-color: var(--ui-bg-glass);
		backdrop-filter: blur(38rpx);
		z-index: -1;
	}

	.ui-navbar-header {
		display: flex;
		align-items: center;
		justify-content: center;
		font-style: normal;
		font-size: 30rpx;
		line-height: 138%;
		letter-spacing: 0.15px;
		position: relative;

		.header-button {
			position: absolute;
			font-size: 40rpx;
			left: 30rpx;
			color: var(--ui-text-highlight);
			height: inherit;
			display: flex;
			align-items: center;

			.header-back-text {
				font-size: 30rpx;
			}
		}

		.custom-left {
			position: absolute;
			left: 30rpx;
			font-size: 40rpx;
			height: inherit;
			display: flex;
			align-items: center;
		}

		.custom-title {
			height: inherit;
			display: flex;
			align-items: center;
		}
	}

	.fix-content {
		margin-top: 10rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-bottom: 10rpx;
	}
}
</style>