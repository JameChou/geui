<template>
	<view class="ui-bottom-modal" :class="[hide ? 'hide' : 'show', animationFade]">
		<view class="modal-title">
			<view class="title-bar" @touchstart="touchStart" @touchend="touchEnd" v-if="topButton"><view></view></view>
			<view class="title-content" :class="topButton ? 'center' : ''">
				<view class="big-title">{{bigTitle}}</view>
				<view class="sub-title" v-if="subTitle !== ''">{{subTitle}}</view>
				<view class="title-close" @tap="cancel" v-if="topButton"><text class="ph ph-x"></text></view>
			</view>
		</view>

		<view class="modal-body">
			<slot></slot>
		</view>

		<view class="operate-bar" v-if="!topButton">
		</view>

	</view>
</template>
<script>
export default {
	name: "GeModal",
	props: {
		bigTitle: {
			type: String,
			default: ""
		},
		subTitle: {
			type: String,
			default: ""
		},
		// 是否为顶部两侧button
		topButton: {
			type: Boolean,
			default: true
		},
		confirmText: {
			type: String,
			default: "确认"
		},
		block: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			hide: true,
			animationFade: '',
			startY: 0,
			endY: 0
		}
	},
	methods: {
		touchStart(e) {
			let changeY = e.changedTouches[0].pageY;
			this.startY = changeY;
		},
		touchEnd(e) {
			let changeY = e.changedTouches[0].pageY;
			this.endY = changeY;

			if (this.endY - this.startY > 0) {
				this.cancel();
			}
		},
		show() {
			this.hide = false;
			this.animationFade = 'animation-fade-bottom';
			this.$store.commit('setTarget', 'bg-mask-50');
			this.startY = 0;
			this.endY = 0;
		},
		success() {
			this.$emit('success', {});
		},
		cancel() {
			this.animationFade = 'animation-fade-bottom-back';
			this.$store.commit('setTarget', '');
			this.hide = true;
			this.startY = 0;
			this.endY = 0;
			this.$emit('cancel', {});
		}
	}
}
</script>
<style lang="scss">
.reverse {
	animation-direction: reverse;
}
</style>