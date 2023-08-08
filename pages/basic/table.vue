<template>
	<ge-page noTabs>
		<ge-navbar opacity title="表格"></ge-navbar>

		<view class="ui-container">
			<ge-title category category-content="TABLE" title-content="表格数据(data grid)" title-icon="table"></ge-title>

			<view class="ui-table">
				<view class="table-header">
					<view class="table-tr">
						<view class="table-th">Item</view>
						<view class="table-th">Sales</view>
						<view class="table-th">Gross</view>
						<view class="table-th">Net</view>
						<view class="table-th">Change</view>
					</view>
				</view>

				<view class="table-body">
					<view class="table-tr border-bottom">
						<view class="table-td">Design</view>
						<view class="table-td">94</view>
						<view class="table-td">1,256.50</view>
						<view class="table-td">1,246.50</view>
						<view class="table-td">-31% <text class="ph ph-arrow-up-right text-green"></text></view>
					</view>

					<view class="table-tr border-bottom">
						<view class="table-td">UI kits</view>
						<view class="table-td">26</view>
						<view class="table-td">159.50</view>
						<view class="table-td">149.50</view>
						<view class="table-td">-12% <text class="ph ph-arrow-down-right text-red"></text></view>
					</view>

					<view class="table-tr border-bottom">
						<view class="table-td">Templates</view>
						<view class="table-td">118</view>
						<view class="table-td">624.20</view>
						<view class="table-td">584.20</view>
						<view class="table-td">+9% <text class="ph ph-arrow-up-left text-green"></text></view>
					</view>

					<view class="table-tr font-bold">
						<view class="table-td">Total</view>
						<view class="table-td">159</view>
						<view class="table-td">832.70</view>
						<view class="table-td">732.70</view>
						<view class="table-td">+8% <text class="ph ph-arrow-up-left text-green"></text></view>
					</view>
				</view>
			</view>

			<view class="ui-table margin-top">
				<view class="table-header">
					<view class="table-tr">
						<view class="table-th">消费</view>
						<view class="table-th">支付</view>
					</view>
				</view>

				<view class="table-body">
					<view class="table-tr border-bottom">
						<view class="table-td">水果</view>
						<view class="table-td text-money">94</view>
					</view>

					<view class="table-tr border-bottom">
						<view class="table-td">汉堡</view>
						<view class="table-td text-money">26</view>
					</view>

					<view class="table-tr border-bottom">
						<view class="table-td">笔记本</view>
						<view class="table-td text-money">118</view>
					</view>

					<view class="table-tr font-bold">
						<view class="table-td">共支出</view>
						<view class="table-td text-money">159</view>
					</view>
				</view>
			</view>
		</view>
	</ge-page>
</template>
<script>
	export default {}
</script>
<style lang="scss">
	.ui-table {
		max-width: 100%;
		width: 100%;
		display: table;
		table-layout: auto;

		.table-header {
			display: table-header-group;

			.table-th {
				font-style: normal;
				font-weight: 600;
				font-size: 23rpx;
				line-height: 158%;
				color: var(--ui-text-regular-3);
				border-bottom: var(--ui-table-border-regular);
				white-space: nowrap;

				padding: 1em .8em;
			}
		}

		.table-tr {
			display: table-row;

			&.border-bottom {

				.table-td,
				.table-th {
					border-bottom: var(--ui-table-border-regular);
				}
			}

			&.font-bold {

				.table-td,
				.table-th {
					font-weight: 600;
				}
			}
		}

		.table-body {
			display: table-row-group;
			position: relative;
		}

		.table-td,
		.table-th {
			display: table-cell;
			text-align: unset;
			padding: 0.4em .8em;
			// font-size: 90%;
			vertical-align: middle;
			font-style: normal;
			font-weight: 400;
			font-size: 27rpx;
			line-height: 142%;
			color: var(--ui-text-regular);

		}
	}
</style>