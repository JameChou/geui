<template>
	<ge-page no-tabs>
		<ge-navbar title="新闻列表" custom-title custom-left fix-content opacity>
			<template v-slot:customLeft>
				<view>
					<text class="ph ph-arrow-left" @tap="naviBack"></text>
					<text class="ph ph-list"></text>
				</view>
			</template>
			<template v-slot:customTitle>
				<image style="height: 100%; width: 96px;" mode="aspectFill"
					src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/c748cc9a-0b58-40b4-981b-386ceb678b46.png" />
			</template>
			<template v-slot:fixContent>
				<view style="width: 100%;">
					<ge-navlist transparent :items="items" type="button"></ge-navlist>
				</view>
			</template>
		</ge-navbar>

		<view class="ui-container">

			<ge-title category category-content="NEWS" title-content="新闻、视频等" title-icon="rss" border></ge-title>
			<view class="ui-news-list" v-for="(item, index) in news" :key="index">
				<view class="news-cover">
					<image :src="item.cover" mode="aspectFill" />
				</view>
				<view class="news-main">
					<view class="news-title">
						{{item.title}}
					</view>
					<view class="news-info">
						<text class="ph ph-eye"></text>{{item.views}}
						<text class="ph ph-dot">{{item.created}}</text>
					</view>
					<view class="news-trends" :class="index % 2 === 0 ? 'text-blue' : 'text-red'">
						<text class="ph" :class="index % 2 === 0 ? 'ph-trend-up' : 'ph-thumbs-up'"></text> 上升
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
	export default {
		data() {
			return {
				items: [
					'推荐',
					'排行榜',
					'突发新闻',
					'国际新闻',
					'科技',
					'军事'
				],
				news: [{
						"title": '中美之间全面对抗升级，双方在经济、军事冲突不断',
						"cover": "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/china-usa.jpeg",
						"views": "9280",
						"created": "1小时前"
					},
					{
						"title": '欧神仙终于认为地球是圆的',
						"cover": "https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/irving.jpeg",
						"views": '210M',
						'created': '4年前'
					}
				]
			}
		}
	}
</script>
<style lang="scss">
	.ui-news-list {
		position: relative;
		display: flex;
		width: 100%;
		align-items: center;
		margin-top: 28.8rpx;

		.news-cover {
			display: flex;
			align-items: center;
			height: 100%;

			img,
			image {
				height: 153rpx;
				width: 230rpx;
				border-radius: 19.5rpx;
			}
		}

		.news-main {
			position: relative;
			padding-left: 15rpx;

			.news-title {
				font-style: normal;
				font-weight: 400;
				font-size: 27rpx;
				line-height: 142%;
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;

				padding-bottom: 4rpx;
			}

			.news-info {
				font-style: normal;
				font-weight: 400;
				font-size: 23rpx;
				line-height: 130%;
				color: var(--ui-text-regular-2);
				padding-bottom: 4rpx;
			}

			.news-trends {
				font-style: normal;
				font-weight: 600;
				font-size: 27rpx;
				line-height: 142%;
				/* 默认颜色 */
				color: #FE8E0B;

				text[class*="ph-"] {
					font-weight: 600;
				}
			}
		}
	}
</style>