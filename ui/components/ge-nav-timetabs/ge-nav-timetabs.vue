<template>
	<view class="ui-nav-timetabs">
		<view class="tabs">
			<view class="item" @tap="tapItem(item, index)" v-for="(item, index) in items" :key="index"
				:class="item.active ? 'active': ''">
				<text class="week">{{item.week}}</text>
				<text class="day">{{item.day}}</text>
			</view>
		</view>
		<text class="full-day" v-if="fullDay">{{formatSelectDate()}}</text>
	</view>
</template>
<script>
	const DAY_MAP = ['天', '一', '二', '三', '四', '五', '六'];
	export default {
		props: {
			// 需要生成的时间戳,若是不传则是本地的时间戳
			timestamp: {
				type: Number,
				default: new Date().getTime()
			},
			// 一个星期的active位置共有三个选项(middle,begin,end)
			// middle -> 中间 begin -> 开始 end -> 最后一天
			// 七天时间，若是中间则表示向前推3天 后推3天
			// 依此类推
			active: {
				type: String,
				default: 'middle'
			},
			// 是否显示完整日期
			fullDay: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				selectDate: {},
				items: []
			}
		},
		created() {
			this.init();
		},
		methods: {
			init() {
				let timestamp = this.timestamp;
				let now = new Date(timestamp);

				let preDays = 0;
				let nextDays = 0;

				this.selectDate = {
					date: now,
					datetime: now.getTime(),
					week: DAY_MAP[now.getDay()],
					day: now.getDate(),
					active: true
				};
				this.items.push(this.selectDate);

				if (this.active === 'middle') {
					preDays = 3;
					nextDays = 3;
				} else if (this.active === 'begin') {
					nextDays = 6;
				} else {
					preDays = 6;
				}

				for (let i = 1; i <= preDays; i++) {
					let date = new Date();
					date.setDate(now.getDate() - i);
					this.items.unshift({
						date: date,
						datetime: date.getTime(),
						week: DAY_MAP[date.getDay()],
						day: date.getDate(),
						active: false
					});
				}

				for (let i = 1; i <= nextDays; i++) {
					let date = new Date();
					date.setDate(now.getDate() + i);
					this.items.push({
						date: date,
						datetime: date.getTime(),
						week: DAY_MAP[date.getDay()],
						day: date.getDate(),
						active: false
					});
				}
			},
			tapItem(item, index) {
				this.selectDate.active = false;
				this.selectDate = item;
				item.active = true;
				this.$emit('tab-select', item);
			},
			formatSelectDate() {
				return `${this.selectDate.date.getFullYear()}年${this.selectDate.date.getMonth() + 1}月${this.selectDate.date.getDate()}日`;
			}
		}
	}
</script>
<style lang="scss">
	.ui-nav-timetabs {
		display: flex;
		align-items: center;
		flex-direction: column;

		.tabs {
			display: flex;
			align-items: center;
			width: 100%;

			.item {
				display: flex;
				flex: 1;
				flex-direction: column;

				&.active {
					.day {
						background: var(--ui-navtabs-time-bg);
						backdrop-filter: blur(19.2rpx);
						border-radius: 19.2rpx;
						color: var(--ui-text-regular-4);
						box-shadow: var(--ui-navtabs-shadow);
						transition: background 1s ease-out;
					}

					.week {
						color: var(--ui-text-regular);
					}
				}

				.week {
					font-style: normal;
					font-weight: 400;
					font-size: 23.1rpx;
					line-height: 130%;
					color: var(--ui-text-regular-3);
					text-align: center;
					width: 77rpx;
				}

				.day {
					margin-top: 26.9rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-style: normal;
					font-weight: 600;
					font-size: 38.5rpx;
					line-height: 138%;
					width: 77rpx;
					height: 77rpx;
				}
			}
		}

		.full-day {
			font-style: normal;
			font-weight: 400;
			font-size: 26.9rpx;
			line-height: 142%;
			color: var(--ui-text-regular-2);
			margin-top: 23.1rpx;
		}
	}
</style>