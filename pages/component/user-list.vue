<template>
	<ge-page no-tabs>
		<ge-navbar opacity title="用户列表"></ge-navbar>

		<view class="ui-container">
			<ge-title category category-content="AVATAR" title-content="用户列表" title-icon="user-circle"
				border></ge-title>
			<view>
				<view class="ui-list-user" v-for="(item, index) in userList" :key="index">
					<ge-avatar round :avatar="item.avatar"></ge-avatar>
					<view class="user-info">
						<view class="text-cut">{{item.name}}</view>
						<view class="text-cut">{{item.description}}</view>
					</view>
					<view class="user-op">
						<button class="ui-button blue">Invite</button>
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
	import userList from '@/mock/user.json';
	export default {
		data() {
			return {
				userList: []
			}
		},
		created() {
			for (let i = 1; i <= 2; i++) {
				this.userList = this.userList.concat(userList);
			}

			uni.$on('$onReachBottom' + this._uid, (e) => {
				this.userList = this.userList.concat(userList);
			});
		},
		destroyed() {
			uni.$off('$onReachBottom' + this._uid, (e) => {});
		}
	}
</script>
<style lang="scss">
	.ui-list-user {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		padding-top: 50rpx;

		.user-info {
			padding-left: 23rpx;
			width: 55%;

			:first-child {
				font-style: normal;
				font-weight: 600;
				font-size: 38rpx;
				line-height: 138%;
				color: var(--ui-text-regular);
			}

			:last-child {
				font-style: normal;
				font-weight: 400;
				font-size: 27rpx;
				line-height: 142%;
				color: var(--ui-text-regular-2);
				padding-top: 3.8rpx;
			}
		}

		.user-op {
			position: absolute;
			right: 35rpx;
		}
	}
</style>