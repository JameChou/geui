<template>
	<view class="ui-divider" :class="[size]">
		<view class="line-left" :style="lineLeftStyle"></view>
		<view class="content" :style="contentStyle" v-if="content !== ''">{{content}}</view>
		<view class="content" :style="contentStyle" v-if="contentIcon !== '' && content === ''"><text class="ph" :class="'ph-' + contentIcon"></text></view>
		<view class="line-right" :style="lineRightStyle" v-if="content !== '' || contentIcon !== ''"></view>
	</view>
</template>
<script>
export default {
	name: "GeDivider",
	props: {
		lineStyle: {
			type: String,
			default: 'dashed' // dotted, double groove solid
		},
		size: {
			type: String,
			default: 'regular'
		},
		content: {
			type: String,
			default: ''
		},
		contentAlign: {
			type: String,
			default: 'center' // left right center
		},
		color: {
			type: String,
			default: ''
		},
		contentIcon: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			lineLeftStyle: [],
			lineRightStyle: [],
			contentStyle: []
		}
	},
	mounted() {
		if (this.contentAlign === 'left') {
			this.lineRightStyle.push({flex: 3});
		} else if (this.contentAlign === 'right') {
			this.lineLeftStyle.push({flex: 3});
		}

		this.lineRightStyle.push({borderBottomStyle: this.lineStyle});
		this.lineLeftStyle.push({borderBottomStyle: this.lineStyle});

		if (this.color !== '') {
			this.lineRightStyle.push({borderBottom: `2px ${this.lineStyle} ${this.color}`});
			this.lineLeftStyle.push({borderBottom: `2px ${this.lineStyle} ${this.color}`});
			this.contentStyle.push({color: this.color});
		}
	},
	methods: {

	}
}
</script>
<style lang="scss">
.ui-divider {
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;

	&.regular {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	&.smaller {
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	&.bigger {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.content {
		font-size: 30rpx;
		padding-left: 15rpx;
		padding-right: 15rpx;
	}

	.line-left {
		height: 2px;
		flex: 1;
		border-bottom: var(--ui-setting-list-divider);
		border-bottom-style: dotted;
	}

	.line-right {
		height: 2px;
		flex: 1;
		border-bottom: var(--ui-setting-list-divider);
		border-bottom-style: dotted;
	}
}
</style>