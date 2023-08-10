<template>
	<view @tap="tapAvatar" class="ui-avatar"
		:style="[{ 'background-image': avatar === '' ? '' : 'url(' + avatar + ')' }]"
		:class="[size === '' ? '' : size, color !== '' && avatar === '' ? 'avatar-bg-' + color : '', round ? 'round-avatar' : '', noBorder ? 'none-border': '']">
		<block v-if="avatar === '' && icon">
			<text :class="name"></text>
		</block>
		<block v-if="avatar === '' && !icon">
			<text>{{name}}</text>
		</block>
		<text v-if="notify" class="avatar-badge"></text>
	</view>
</template>
<script>
	export default {
		name: 'GeAvatar',
		props: {
			id: {
				type: String,
				Number,
				default: ""
			},
			name: {
				type: String,
				default: ""
			},
			avatar: {
				type: String,
				default: ""
			},
			round: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: ""
			},
			size: {
				type: String,
				default: "" // xs sm
			},
			notify: {
				type: Boolean,
				default: false
			},
			icon: {
				type: Boolean,
				default: false
			},
			noBorder: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			tapAvatar() {
				this.$emit('click', {
					id: this.id
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.ui-avatar {
		position: relative;
		width: 92rpx;
		height: 92rpx;
		border-radius: 19rpx;
		border: 4rpx solid var(--ui-bg-pure-primary);
		background-size: cover;
		background-position: center;
		padding: 0;
		margin: 0;
		display: inline-flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		background-color: rgb(225, 225, 225);

		&.none-border {
			border: none;
		}

		.avatar-badge {
			width: 20rpx;
			height: 20rpx;
			border-radius: 99px;
			background-color: #E55539;
			border: 4rpx solid #FFFFFF;
			position: absolute;
			top: -10rpx;
			right: -5rpx;
		}

		text {
			font-size: 30rpx;
			font-weight: 600;
		}

		&.avatar-bg-blue {
			background-color: #A7B9FC;

			text {
				color: #FFFFFF;
			}
		}

		&.avatar-bg-yellow {
			background-color: rgb(239, 197, 135);

			text {
				color: #FFFFFF;
			}
		}

		&.avatar-bg-green {
			background-color: rgb(159, 217, 183);

			text {
				color: #FFFFFF;
			}
		}

		&.round-avatar {
			border-radius: 99px;
		}

		&.sm {
			width: 77rpx;
			height: 77rpx;

			.avatar-badge {
				width: 15rpx;
				height: 15rpx;
			}
		}

		&.xs {
			width: 70rpx;
			height: 70rpx;

			.avatar-badge {
				width: 15rpx;
				height: 15rpx;
			}
		}

		text {
			color: black;
		}
	}
</style>