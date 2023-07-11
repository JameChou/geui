<template>
	<view :style="[{height: customBar + 'px'}]" style="z-index: 2048">
		<view class="ui-nav">
			<view class="background blur"
				:style="[{opacity: opacity}]"></view>
			<view class="ui-header-content" :style="[{height: system_capsule.height + 'px'}]">
				<block v-if="!customLeft">
					<!-- #ifndef MP-ALIPAY -->
					<text class="ph header-button"
						:style="[{top: system_capsule.top + 'px'}]"
						:class="'ph-' + backIcon" v-if="showBack" @tap="headerButtonTap">
						<text v-if="backText !== ''">{{backText}}</text>
					</text>
					<!-- #endif -->
				</block>
				<block v-else>
					<!-- 自定义左侧button -->
					<view class="ph custom-left" :style="[{top: system_capsule.top + 'px'}]">
						<slot name="customLeft"></slot>
					</view>
				</block>
				<view class="title" :style="[{top: system_capsule.top + 'px'}]"
					v-if="title !== '' && !customTitle">
					{{title}}
				</view>
				<view class="custom-title" v-if="customTitle"
					:style="[{top: system_capsule.top + 'px'}]">
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
	import {
		mapState
	} from 'vuex';
	export default {
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
			}
		},
		data() {
			return {
				customBar: 0,
				opacity: 0
			}
		},
		methods: {
			headerButtonTap() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({
						url
					})
				}
				uni.navigateBack({
					delta: 1
				});
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
				this.customBar = this.system_navbar_height + uni.upx2px(this.navHeight) + 8;
			} else {
				this.customBar = this.system_navbar_height;
			}

			let _this = this;
			if (this.isOpacity) {
				uni.$on('$onScrollTop' + this.$root._uid, (e) => {
					_this.opacity = e > 0 && e > _this.customBar ? 1 : 0;
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
		position: fixed;
		top: 0;
		width: 100%;
		height: inherit;
		z-index: 2048;
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
			height: inherit;

			&.blur {
				backdrop-filter: blur(38.5rpx);
			}
		}
	}
</style>