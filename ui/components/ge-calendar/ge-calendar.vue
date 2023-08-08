<template>
	<view class="ge-calendar">
		<!-- 头部上下月按钮及月份 -->
		<view class="header">
			<text class="head-icon head-pre-month" v-if="showChangeBtn" @click="changeMonthOrWeek('prev')"></text>
			<text class="head-month">{{selDate.year+'年'+(selDate.month<10?'0'+selDate.month:selDate.month)+'月'}}</text>
			<text class="head-icon head-next-month" v-if="showChangeBtn" @click="changeMonthOrWeek('next')"></text>
			<text class="go-to-today" v-if="showToday" @click="goToday">今</text>
		</view>
		<!-- 星期 -->
		<view class="week-area">
			<text class="week-font" v-for="(item, index) in weekArr" :key="index ">{{ getWeekType + '' + item }}</text>
		</view>
		<!-- 日历 -->
		<swiper class="calendar-data" :current="shrinkType?tranCurrent:tranIndex" circular :duration="tranDuration"
			@change="swiperChange" @animationfinish="swiperEndChange" :style="{height:shrinkType?'112rpx':'532rpx'}">
			<swiper-item class="swiper-item swiper-prev-item" v-for="(a, i) in getAllData" :key="i">
				<text class="month-bg" v-if="showMonthBg">{{ getMontBg }}</text>
				<view class="month-days" :class="[shrinkType?'item-week':'']">
					<view class="week-days" v-for="(b, j) in a" :key="j">
						<view class="day" v-for="(c, k) in b" :key="k" @click="clickDay(c)">
							<view class="day-info"
								:class="[c.dayClass, getIsSelDay(c)&&'is-sel', c.dayType!='normal'&&'un-month']">
								<text class="day-solar">{{ c.day }}</text>
								<template v-if="showLunar || c.sign && c.sign.length > 0">
									<text class="day-tag" v-if="c.sign && c.sign.length > 0"></text>
									<text class="day-sign"
										v-if="c.sign && c.sign.length > 0">{{ c.sign[0].title }}</text>
									<text class="day-lunar" v-else>{{c.dayLunar}}</text>
								</template>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- 收缩按钮 -->
		<view class="shrink" v-if="showShrink" @click="changeShrink">
			<text class="shrink-btn" :class="[shrinkType?'shrink-open':'shrink-close']"></text>
		</view>
	</view>
</template>
<script>
	let {
		calendar
	} = require("./calendar.js");
	/**
	 * @property {Boolean} showLunar = [true|false] 是否显示农历，默认false
	 * @property {Boolean} showMonthBg = [true|false] 是否显示月份背景，默认true
	 * @property {Boolean} showChangeBtn = [true|false] 是否显示上月下月箭头按钮，默认true
	 * @property {String} firstDayOfWeek = [monday|sunday] 周几为每周的第一天，默认monday
	 *  @value monday 每周从周一开始(默认)
	 *  @value sunday 每周从周日开始
	 * @property {String} weekType = [''|周|星期] 星期的前缀；如周一周二或星期一星期二，为空则只显示一、二等；不用预设值时可自定义前缀，填的值即为星期前缀；默认周
	 *  @value '' 星期显示：只显示一、二等
	 *  @value 周 星期显示：周一、周二等(默认)
	 *  @value 星期 星期显示：星期一、星期二等
	 * @property {Boolean} weekend = [true|false] 周末标红(周六周日日期用红色字体)，默认true
	 * @property {Boolean} showShrink = [true|false] 是否显示收缩按钮，可显示一周的日期，默认false
	 * @property {String} shrinkState = [week|month] 收缩状态，默认month
	 *  @value week 默认打开显示周数据（收起状态）
	 *  @value month 默认打开显示月数据（展开状态）
	 * @property {Array} signList 标记数组，若当前有多个标记，则显示最后一个，期待格式[{date: '2021-09-10', title: '生日', info: '八月初四张三生日'}]
	 * @event {Function()} dayChange 点击日期触发事件，返回参数e={year,month,day,week,date,lunar,daySign}，详情参数见文档
	 * @event {Function()} monthChange 切换月份触发事件，返回参数e={year,month,type}，详情参数见文档
	 * @event {Function()} shrinkClick 收缩和展开时触发事件，返回参数e=week|month
	 */
	export default {
		name: 'GeCalendar',
		props: {
			//是否显示农历
			showLunar: {
				type: Boolean,
				default: false
			},
			//是否显示月份背景
			showMonthBg: {
				type: Boolean,
				default: true
			},
			//是否显示上月下月按钮
			showChangeBtn: {
				type: Boolean,
				default: true
			},
			//每周的周几为第一天
			firstDayOfWeek: {
				type: String,
				default: 'monday'
			},
			//每周的周几为第一天
			weekType: {
				type: String,
				default: '周'
			},
			//周末标红
			weekend: {
				type: Boolean,
				default: true
			},
			//是否可收缩，收起来后以周显示
			showShrink: {
				type: Boolean,
				default: false
			},
			// 默认打开状态（收起或展开）
			shrinkState: {
				type: String,
				default: 'month'
			},
			//标记
			signList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				weekArr: ['一', '二', '三', '四', '五', '六', '日'], //星期数组
				today: {}, //今天日期 -> year, month, day
				selDate: {}, //选中日期信息 -> year, month, day

				allMonthList: [], // 月份数据 -> [[[周],[周]],[月],[月]]
				tranIndex: 1, // 月份轮播所在位置
				allWeekList: [], // 周月份数据 -> [[[周]],[月],[月]]
				tranCurrent: 1, // 周轮播所在位置
				tranDuration: 300, //轮播时间(单位毫秒)

				signArr: this.signList, // 标记列表
				showToday: false, //显示回到今天(非当月才显示)
				shrinkType: false, // 收缩状态，true:收起(显示周)，false展开(显示月)
				deterChange: true, // 防止切换月份过快
			}
		},
		created() {
			let nd = new Date();
			this.today = {
				year: nd.getFullYear(),
				month: nd.getMonth() + 1,
				day: nd.getDate()
			}
			if (this.firstDayOfWeek == "sunday") this.weekArr = ['日', '一', '二', '三', '四', '五', '六'];
			this.initDate();
		},
		watch: {
			signList(nList, oList) {
				this.signArr = nList;
				this.setSignList();
			}
		},
		computed: {
			getAllData() { // 切换周或月时，展示的数据不同
				return this.shrinkType ? this.allWeekList : this.allMonthList;
			},
			getMontBg() { // 获取当前月背景
				let monthBg = this.selDate.month;
				return !this.shrinkType ? (monthBg < 10 ? '0' + monthBg : monthBg) : '';
			},
			getIsSelDay() { // 判断是否是选中日期
				return (d) => {
					let {
						year,
						month,
						day
					} = this.selDate;
					return year == d.year && month == d.month && day == d.day
				}
			},
			getWeekType() {
				let weekType = this.weekType;
				if (weekType && weekType != "true" && weekType != "''" && weekType != '""') {
					return weekType
				} else {
					return ''
				}
			}
		},
		methods: {
			initDate() { // 初始化日期
				this.selDate = JSON.parse(JSON.stringify(this.today));
				let monthList = this.getMonthData(this.selDate); // 获取当月数据
				let prevMonthList = this.getMonthData(this.getMonthDate(this.selDate, -1)); // 上月数据
				let nextMonthList = this.getMonthData(this.getMonthDate(this.selDate)); // 下月数据
				this.allMonthList = [prevMonthList, monthList, nextMonthList]
				this.tranIndex = 1;
				if (this.shrinkState == "week" && !this.shrinkType) this.changeShrink();
			},
			/**
			 * 根据指定日期获取当月的数据
			 * @param {Object} date = { year, month, day } 指定的日期
			 */
			getMonthData(date) {
				const {
					year,
					month,
					day
				} = date; //指定的日期
				let maxDay = new Date(year, month, 0).getDate(); //当前月最大日期
				let firstWeek = new Date(year + "/" + month + "/1").getDay(); //月份1号的星期数
				if (this.firstDayOfWeek == "monday") firstWeek = firstWeek - 1 < 0 ? 6 : firstWeek - 1;
				let list = [];
				//每月显示42天，6周，每周7天
				for (var i = 0; i < 42; i++) {
					let dayInfo = {}; // 每天的详细信息
					if (i < firstWeek) { //指定月份上月的最后几天
						let {
							year,
							month
						} = this.getMonthDate(date, -1);
						let preMaxDay = new Date(year, month, 0).getDate(); //上月最大日期
						let day = preMaxDay - firstWeek + i + 1;
						dayInfo = this.getDayInfo({
							year,
							month,
							day
						}, 'prev');
					} else if (i > maxDay + firstWeek - 1) { //指定月份下月的前几天
						let {
							year,
							month
						} = this.getMonthDate(date);
						let day = i - maxDay - firstWeek + 1;
						dayInfo = this.getDayInfo({
							year,
							month,
							day
						}, 'next');
					} else {
						let day = i - firstWeek + 1;
						dayInfo = this.getDayInfo({
							year,
							month,
							day
						}, 'normal');
					}
					if (i % 7 == 0) list.push(new Array());
					list[list.length - 1].push(dayInfo);
				}
				return list;
			},
			/**
			 * 获取指定日期的详细信息，包括农历节假日等
			 * @param {Object} date = { year, month, day } 指定的日期
			 * @param {String} dayType = [prev|next|normal] 日期类型，上月|下月|当前月
			 */
			getDayInfo(date, dayType) {
				const {
					year,
					month,
					day
				} = date;
				let isToday = false; //是否今天
				if (year == this.today.year && month == this.today.month && day == this.today.day) isToday = true;
				let week = new Date(year + "/" + month + "/" + day).getDay(); //星期数
				let lunar = calendar.solar2lunar(year, month, day); //农历
				//let dayLunar = lunar.IDayCn == '初一' ? lunar.IMonthCn + lunar.IDayCn : lunar.IDayCn;
				let dayLunar = lunar.IDayCn;
				if (lunar.festival) dayLunar = lunar.festival; // 阳历节日
				else if (lunar.lunarFestival) dayLunar = lunar.lunarFestival; // 农历节日
				else if (lunar.Term) dayLunar = lunar.Term; // 节气
				let holidayArr = ["元旦", "春节", "清明节", "劳动节", "端午节", "中秋节", "国庆节"];
				let isHoliday = false;
				if (holidayArr.indexOf(dayLunar) != -1) isHoliday = true;
				let dayInfo = {
					date: year + "-" + month + "-" + day,
					year,
					month,
					day,
					week,
					lunar, // 农历
					dayLunar, // 显示的农历
					isToday, // 是否是今日
					isHoliday, // 是否是节假日
					dayType, // 日期类型，上月、下月或当前月
					sign: this.getSignByDate(date)
				}
				let dayClass = this.getDayClass(dayInfo);
				dayInfo["dayClass"] = dayClass;
				return dayInfo;
			},
			/**
			 * 根据日期详细信息添加对应的class
			 * @param {Object} dayInfo 日期详情
			 */
			getDayClass(dayInfo) {
				let dClass = "";
				if (dayInfo.isToday) dClass += ' is-today'; // 今天日期
				if (dayInfo.isHoliday) dClass += ' is-holiday'; // 法定假日
				if (this.weekend && (dayInfo.week == 0 || dayInfo.week == 6)) dClass += ' week-end'; // 周末标红
				return dClass;
			},
			/**
			 * 根据日期获取日期对应的事件
			 * @param {Object} date = { year, month, day } 指定的日期
			 */
			getSignByDate(date) {
				const {
					year,
					month,
					day
				} = date;
				let dayDateS = new Date(year + "/" + month + "/" + day + " 00:00:00").getTime();
				let dayDateE = new Date(year + "/" + month + "/" + day + " 23:59:59").getTime();
				let daySign = [];
				this.signArr.map(sign => {
					let signDate = sign.date.replace(/-/g, '/');
					let signTimes = new Date(sign.date).getTime();
					if (signTimes >= dayDateS && signTimes <= dayDateE) daySign.push(sign)
				})
				return daySign;
			},

			/**
			 * 获取月份数据
			 * @param {String} type=[pre|next]
			 */
			getOtherData(type) {
				let nowMont = this.getMonthDate(this.selDate, type == 'prev' ? -1 : 1); // 获取当前月份
				this.selDate = nowMont; // 切换月份后设置选中的日期
				let monthData = this.getMonthData(this.getMonthDate(nowMont, type == 'prev' ? -1 : 1));
				// 获取上月或下月轮播所在位置
				let current = this.getTranIndex().prevNum;
				if (type == "next") current = this.getTranIndex().nextNum;
				this.allMonthList.splice(current, 1, monthData);
				this.judgeShowToday();
				this.returnMonthChange(type);
			},
			/**
			 * 获取周数据
			 * @param {String} type=[pre|next]
			 */
			getOtherWeekData(type) {
				let oldSel = this.selDate; // 原选中的日期
				let newSel = this.getDateByDateAndDay(oldSel, type == 'prev' ? -7 : 7); // 获取7天前或后的日期
				if (oldSel.month != newSel.month) { // 跨月，先设置跨月后的月历
					// 设置月轮播位置
					let current = this.getTranIndex("month").prevNum;
					if (type == "next") current = this.getTranIndex("month").nextNum;
					this.tranIndex = current;
					this.getOtherData(type);
				}
				this.selDate = newSel;
				this.getWeekData(type);
				this.judgeShowToday();
			},

			// 从月历中获取周数据，切换周后获取上周或下周数据
			getWeekData(type) {
				const {
					prevNum: prevIndex,
					nowNum: nowIndex,
					nextNum: nextIndex
				} = this.getTranIndex("month");
				const {
					prevNum: prevCurrent,
					nowNum: nowCurrent,
					nextNum: nextCurrent
				} = this.getTranIndex("week");
				const {
					year: selYear,
					month: selMonth,
					day: selDay
				} = this.selDate;
				let sDate = selYear + "-" + selMonth + "-" + selDay
				let prevMonthList = this.allMonthList[prevIndex];
				let nowMonthList = this.allMonthList[nowIndex];
				let nextMonthList = this.allMonthList[nextIndex];
				for (let i = 0; i < nowMonthList.length; i++) {
					for (let j = 0; j < nowMonthList[i].length; j++) {
						if (sDate == nowMonthList[i][j].date) {
							this.returnDayChange(nowMonthList[i][j]); // 返回选中的日期
							if (type == "next") {
								this.allWeekList.splice(nextCurrent, 1, [nowMonthList[i + 1]]);
								if (i == 5) this.allWeekList.splice(nextCurrent, 1, [nextMonthList[1]]);
							} else {
								this.allWeekList.splice(prevCurrent, 1, [nowMonthList[i - 1]]);
								if (i == 0) {
									for (let k = prevMonthList.length - 1; k >= 0; k--) {
										if (prevMonthList[k][6].dayType == "normal") {
											this.allWeekList.splice(prevCurrent, 1, [prevMonthList[k]]);
											break;
										}
									}
								}
							}
							break;
						}
					}
				}
			},
			// 根据月份数据获取周数据，相当初始化周数据
			getAllWeekData() {
				const {
					prevNum,
					nowNum,
					nextNum
				} = this.getTranIndex("month");
				const {
					year: selYear,
					month: selMonth,
					day: selDay
				} = this.selDate;
				let sDate = selYear + "-" + selMonth + "-" + selDay; // 选中的日期
				let allWeekList = [
					[],
					[],
					[]
				];
				let prevMonthList = this.allMonthList[prevNum];
				let nowMonthList = this.allMonthList[nowNum];
				let nextMonthList = this.allMonthList[nextNum];
				for (let i = 0; i < nowMonthList.length; i++) {
					for (let j = 0; j < nowMonthList[i].length; j++) {
						if (sDate == nowMonthList[i][j].date) {
							allWeekList[0][0] = nowMonthList[i - 1];
							allWeekList[1][0] = nowMonthList[i];
							allWeekList[2][0] = nowMonthList[i + 1];
							if (i == 5) {
								allWeekList[2][0] = nextMonthList[1];
							} else if (i == 0) {
								for (let k = prevMonthList.length - 1; k >= 0; k--) {
									if (prevMonthList[k][6].dayType == "normal") {
										allWeekList[0][0] = prevMonthList[k];
										break;
									}
								}
							}
							break;
						}
					}
				}
				this.allWeekList = allWeekList;
			},
			// 滑动切换结束
			swiperEndChange() {
				this.tranDuration = 300;
			},
			// 滑动切换月份或周
			swiperChange(e) {
				let current = e.detail.current;
				let oldIndex = this.shrinkType ? this.tranCurrent : this.tranIndex;
				let type = (oldIndex - current == -1 || oldIndex - current == 2) ? 'next' : 'prev';
				if (this.shrinkType) {
					this.tranCurrent = current;
					if (current != oldIndex) this.getOtherWeekData(type);
				} else {
					this.tranIndex = current;
					if (current != oldIndex) this.getOtherData(type);
				}
			},
			// 点击切换月份或周（上月下月切换或上周下周切换）type = [prev|next] 切换类型
			changeMonthOrWeek(type) {
				if (!this.deterChange) return;
				this.deterChange = false;
				setTimeout(_ => {
					this.deterChange = true;
				}, 400); // 防止点击过快
				this.tranDuration = 300;
				let tranType = this.shrinkType ? 'week' : 'month';
				let current = this.getTranIndex(tranType).prevNum;
				if (type == "next") current = this.getTranIndex(tranType).nextNum;
				if (tranType == "week") {
					this.tranCurrent = current;
					this.getOtherWeekData(type);
				} else {
					this.tranIndex = current;
					this.getOtherData(type);
				}
			},
			// 点击收缩按钮，切换显示月份或显示周
			changeShrink() {
				this.shrinkType = !this.shrinkType;
				if (this.tranDuration != 0) this.tranDuration = 0;
				if (this.shrinkType) {
					this.tranCurrent = 1;
					this.getAllWeekData();
				}
				this.returnShrinkChange();
				this.judgeShowToday();
			},
			// 点击回到今天
			goToday() {
				if (this.tranDuration != 0) this.tranDuration = 0;
				let oldDate = JSON.parse(JSON.stringify(this.selDate));
				this.initDate();
				if (this.shrinkType) {
					this.tranCurrent = 1;
					this.getAllWeekData();
					let today = this.today;
					// 判断是否需要触发改变月份事件
					if (oldDate.year != today.year || oldDate.month != today.month) {
						this.returnMonthChange("today");
					} else {
						this.returnDayChange(this.today);
					}
				} else {
					this.returnMonthChange("today"); // 事件
				}
				this.judgeShowToday();
			},
			// 点击日期
			clickDay(dayInfo) {
				let {
					year,
					month,
					day
				} = this.selDate;
				if (day == dayInfo.day && month == dayInfo.month && year == dayInfo.year) return;
				let oldSel = JSON.parse(JSON.stringify(this.selDate));
				this.selDate.day = dayInfo.day;
				if (oldSel.month != dayInfo.month) {
					if (!this.shrinkType) {
						this.changeMonthOrWeek(dayInfo.dayType);
						return;
					} else {
						this.selDate.year = dayInfo.year;
						this.selDate.month = dayInfo.month;
						let nowSel = JSON.parse(JSON.stringify(this.selDate));
						let type = "nowNum"
						if (nowSel.year > oldSel.year || (nowSel.year === oldSel.year && nowSel.month > oldSel.month)) {
							type = "nextNum"
						} else if (nowSel.year < oldSel.year || (nowSel.year === oldSel.year && nowSel.month < oldSel
								.month)) {
							type = "prevNum"
						}
						this.tranIndex = this.getTranIndex("month")[type];
						let monthData = this.getMonthData(this.getMonthDate(this.selDate, type == 'prevNum' ? -1 : 1));
						let current = this.getTranIndex("month")[type];
						this.allMonthList.splice(current, 1, monthData); // 设置上月或下月数据
					}
					this.returnMonthChange(dayInfo.dayType);
				} else {
					this.returnDayChange(dayInfo);
				}
			},
			// 判断是否需要显示回到今天（非本月或本周时显示）
			judgeShowToday() {
				const {
					year,
					month,
					day
				} = this.today;
				const {
					year: selYeat,
					month: selMonth,
					day: selDay
				} = this.selDate;
				if (this.shrinkType) { // 显示的周
					let selTimes = new Date(selYeat, selMonth - 1, selDay).getTime(); // 选中日期的时间戳
					let week = new Date(year, month - 1, day).getDay(); // 今天星期
					let firstWD = this.getDateByDateAndDay(this.today, -week + (this.firstDayOfWeek == "monday" ? 1 : 0));
					let lastWD = this.getDateByDateAndDay(this.today, 6 - week + (this.firstDayOfWeek == "monday" ? 1 :
					0));
					let firstTimes = new Date(firstWD.year, firstWD.month - 1, firstWD.day).getTime();
					let lastTimes = new Date(lastWD.year, lastWD.month - 1, lastWD.day).getTime();
					if (selTimes > lastTimes || selTimes < firstTimes) this.showToday = true;
					else this.showToday = false;
				} else {
					if (year != selYeat || month != selMonth) this.showToday = true;
					else this.showToday = false;
				}
			},

			// 重新设置标记
			setSignList() {
				this.allMonthList.map(month => {
					month.map(week => {
						week.map(day => {
							day.sign = this.getSignByDate({
								year: day.year,
								month: day.month,
								day: day.day
							})
						})
					})
				})
			},
			/**
			 * 添加标记
			 * @param {Array} list 需要添加的标记
			 */
			addSignList(list) {
				let signArr = this.signArr.concat(list);
				this.signArr = signArr;
				this.setSignList();
			},
			/**
			 * 删除标记
			 * 根据date和title共同判断是否删除
			 * @param {Array} list 需要删除的标记
			 */
			deleteSignList(list) {
				let signArr = this.signArr;
				signArr = signArr.filter(s => {
					if (list.find(l => l.date == s.date && l.title == s.title)) return false
					else return true;
				})
				this.signArr = signArr;
				this.setSignList();
			},
			/**
			 * 事件 - 设置返回日期
			 * @param {Object} dayInfo 日期详情
			 */
			returnDayChange(dayInfo) {
				let {
					year,
					month,
					day
				} = dayInfo;
				let dayDate = year + "-" + (month < 10 ? '0' + month : month) + "-" + (day < 10 ? '0' + day : day)
				let returnData = {
					date: dayDate,
					year: year,
					month: month,
					day: day,
					week: dayInfo.week,
					daySign: dayInfo.sign
				}
				if (this.showLunar) returnData["lunar"] = dayInfo.lunar;
				this.$emit("day-change", returnData);
			},
			/**
			 * 事件 - 设置返回月份
			 * @param {String} type 类型
			 */
			returnMonthChange(type) {
				let selDate = this.selDate.year + "-" + this.selDate.month + "-" + this.selDate.day;
				let monthList = this.allMonthList.flat().flat(); // 二维转一维
				let dayInfo = monthList.find(day => day.date == selDate);
				this.returnDayChange(dayInfo)
				this.$emit("month-change", {
					year: dayInfo.year,
					month: dayInfo.month,
					type: type
				});
			},
			/**
			 * 事件 - 返回收缩状态
			 */
			returnShrinkChange() {
				let type = this.shrinkType ? 'week' : 'month'
				this.$emit("shrink-click", type);
			},
			/**
			 * 获取上一个或下一个轮播位置
			 * @param {String} type = [month|week] 轮播类型，月轮播(tranIndex),周轮播(tranCurrent)
			 * @returns {Object} {prevNum, nowNum, nextNum}
			 */
			getTranIndex(type = 'month') {
				let current = this.tranIndex;
				if (type == "week") current = this.tranCurrent;
				let prevNum = current - 1 < 0 ? 2 : current - 1;
				let nowNum = current;
				let nextNum = current + 1 > 2 ? 0 : current + 1;
				return {
					prevNum,
					nowNum,
					nextNum
				}
			},
			/**
			 * 根据日期获取几天后的日期
			 * @param {Object} date = {year, month, day} 当前日期
			 * @param {Number} day 当前日期的几天前或几天后(负数)
			 * @returns {Object} {year, month, day}
			 */
			getDateByDateAndDay(date, num) {
				let dTime = new Date(date.year + "/" + date.month + "/" + date.day).getTime() + num * 24 * 60 * 60 * 1000;
				let nd = new Date(dTime);
				return {
					year: nd.getFullYear(),
					month: nd.getMonth() + 1,
					day: nd.getDate()
				}
			},
			/**
			 * 获取几个月前或后的日期
			 * @param {Object} date = {year, month, day} 当前日期
			 * @param {Number} num 当前日期的num月前或后，默认1月后(下月)
			 * @returns {Object} {year, month, day}
			 */
			getMonthDate(date, num = 1) {
				let nextMonth = date.month + num;
				let diffYear = parseInt(Math.abs(nextMonth) / 12);
				let year = date.year;
				let month = nextMonth;
				if (nextMonth > 12) {
					year = date.year + diffYear;
					month = nextMonth % 12;
				} else if (nextMonth < 1) {
					year = date.year - (diffYear + 1);
					month = nextMonth + 12 * (diffYear + 1);
				}
				let monthMaxDay = new Date(year, month, 0).getDate(); // 月份最大日期
				let day = date.day > monthMaxDay ? monthMaxDay : date.day;
				return {
					year,
					month,
					day
				}
			},
		}
	}
</script>
<style lang="scss">
	.ge-calendar {
		background-color: var(--ui-bg-modal);

		// 头部
		.header {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			position: relative;
			height: 76rpx;
			line-height: 90rpx;

			.head-month {
				font-size: 38rpx;
				font-style: normal;
				font-weight: 600;
				line-height: 138%;
				letter-spacing: 0.15px;
			}

			.go-to-today {
				position: absolute;
				right: 90rpx;
				top: 26rpx;
				padding: 8rpx 12rpx 8rpx 22rpx;
				background-color: #FE8E0B;
				border-radius: 22rpx 0 0 22rpx;
				font-size: 24rpx;
				line-height: 24rpx;
				color: #FFF;
			}

			.head-icon {
				content: '';
				display: flex;
				width: 76rpx;
				height: 76rpx;
				align-items: center;
				justify-content: center;
				border-radius: 11rpx;
				border: var(--ui-calendar-op-border);
				box-shadow: var(--ui-calendar-op-shadow);
			}

			.head-icon.head-pre-month {
				position: absolute;
				left: 0;

				&:before {
					font-family: Phosphor;
					content: '\e9ff';
				}
			}

			.head-icon.head-next-month {
				position: absolute;
				right: 0;

				&:before {
					font-family: Phosphor;
					content: '\ea00';
				}
			}
		}

		// 星期
		.week-area {
			display: flex;
			flex-direction: row;
			align-items: center;
			// margin: 0 10rpx;
			margin-top: 56rpx;

			.week-font {
				font-size: 26rpx;
				font-style: normal;
				font-weight: 600;
				line-height: 142%;
				/* 19.88px */
				letter-spacing: 0.07px;
				color: var(--ui-calendar-header);
				flex: 1;
				text-align: center;
			}
		}

		// 日历
		.calendar-data {
			// transition: all 300ms;
			transition: height ease-out 300ms;

			.swiper-item {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: row;

				.month-bg {
					position: absolute;
					font-size: 460rpx;
					color: var(--ui-text-regular);
					font-weight: bold;
					opacity: 0.1;
					z-index: -1;
				}

				.month-days {
					flex: 1;
					// margin-top: 10rpx;
					position: relative;

					.week-days {
						display: flex;
						flex-direction: row;

						.day {
							flex: 1;
							width: 84rpx;
							text-align: center;
							height: 84rpx;
							color: var(--ui-calendar-regular-text);
							/* #ifndef APP-NVUE */
							padding: 0 6rpx;
							/* #endif */
							// box-sizing: border-box;
							display: flex;

							.day-info {
								flex: 1;
								display: flex;
								flex-direction: column;
								justify-content: center;
								height: 100%;
								align-items: center;
								position: relative;

								.day-solar {
									display: flex;
									font-size: 34rpx;
									line-height: 34rpx;
								}

								.day-lunar,
								.day-sign {
									color: #909399;
									font-size: 24rpx;
									line-height: 24rpx;
									transform: scale(0.8);
									white-space: nowrap;
								}

								.day-sign {
									color: #F75858 !important;
								}

								.day-tag {
									content: "";
									position: absolute;
									top: 8rpx;
									right: 8rpx;
									width: 10rpx;
									height: 10rpx;
									border-radius: 6rpx;
									background-color: #F75858;
								}
							}

							// 非当月日期
							.day-info.un-month {
								font-size: 30rpx;
								font-style: normal;
								font-weight: 400;
								line-height: 150%;
								/* 24px */
								letter-spacing: 0.269px;
								color: var(--ui-calendar-unmonth-text);
							}

							// 今天日期
							.is-today .day-solar,
							.is-today .day-sign,
							.is-today .day-lunar {
								color: #409eff;
							}

							// 周末
							.week-end .day-solar {
								color: #FF9595;
							}

							// 法定假日
							.is-holiday .day-solar,
							.is-holiday .day-sign,
							.is-holiday .day-lunar {
								color: #F75858 !important;
							}

							// 当前选中的日期
							.is-sel {
								background: var(--ui-calendar-select-bg);
								color: var(--ui-calendar-select-text);
								box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);
								border-radius: 100rpx;

								.day-lunar {
									color: var(--ui-calendar-select-text);
								}
							}
						}
					}

					// .week-days.week-hide {
					// 	display: none;
					// }
				}

				.item-week {
					.un-month {
						opacity: 1 !important;
					}
				}
			}
		}

		// 收缩按钮
		.shrink {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60rpx;
			border-top: 1px solid #DDD;

			/* #ifndef APP-NVUE */
			.shrink-btn {
				width: 32rpx;
				height: 32rpx;
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAMhJREFUOE/dky8LAkEQxd9w0WjV72KxWXfggmAyWWzXxHbNYjIJhoOZarvid9FqNB4jCyes3h9OLghu3fceb36zS+h5qKcf/xYgIisAayJKnHMa8lFVZ2YpgB0z7193FQYisgCwAXA3s8QLicgbhwC2zHwMgxshBkFeXzE2Nvh2rW8NsiybRFE0ZuZTXZCIzIuiuMZxfKltICJTAAciegDwIM9eqKozAKmZDQAsmTlvHSGY/1YKR00cWl9iGYRP8p220BXm7//CE8WyQBHBXZb9AAAAAElFTkSuQmCC);
			}

			.shrink-close {
				transform: rotate(180deg);
			}

			/* #endif */
			/* #ifdef APP-NVUE */
			.shrink-btn {
				content: '';
				display: flex;
				width: 18rpx;
				height: 18rpx;
				border-top: 2rpx solid #606266;
				border-left: 2rpx solid #606266;
				transform: rotate(-135deg);
			}

			.shrink-close {
				transform: rotate(45deg);
			}

			/* #endif */
		}
	}
</style>