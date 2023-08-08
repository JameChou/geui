<template>
	<ge-page no-tabs>
		<ge-navbar opacity title="表单"></ge-navbar>
		<view class="ui-container">
			<ge-title category category-content="INPUT" title-content="Input输入框" title-icon="textbox" border></ge-title>

			<view class="ui-form-group margin-top top-title">
				<view class="form-title">What's your name?</view>
				<view class="form-main">
					<text class="ph ph-user" />
					<input type="text" placeholder="请输入您的用户名" />
				</view>
			</view>

			<view class="ui-form-group margin-top">
				<view class="form-title">邮箱</view>
				<view class="form-main">
					<text class="ph ph-envelope-simple" />
					<input type="text" placeholder="请输入您的用户名" />
				</view>
			</view>

			<view class="ui-form-group top-title margin-top">
				<view class="form-title">收货地址</view>
				<view class="form-main round">
					<text class="ph ph-map-pin right text-orange"></text>
					<input type="text" placeholder="您的收货地址" />
				</view>
			</view>

			<view class="ui-form-group top-title margin-top form-valid form-error">
				<view class="form-title">密码</view>
				<view class="form-main">
					<text class="ph ph-fingerprint"></text>
					<input type="password" placeholder="请输入您的密码" />
				</view>
				<view class="form-alert">您输入的密码格式有误,为a-zA-Z_@符号</view>
			</view>

			<view class="ui-form-group top-title margin-top form-valid form-success">
				<view class="form-title">密码</view>
				<view class="form-main">
					<text class="ph ph-fingerprint"></text>
					<input type="password" placeholder="请输入您的密码" value="password" />
				</view>
			</view>

			<view class="ui-form-group top-title margin-top">
				<view class="form-title">textarea</view>
				<view class="form-main">
					<textarea placeholder="abc"></textarea>
				</view>
			</view>

			<ge-title category category-content="SWITCH" title-content="开关" title-icon="radio-button" border></ge-title>
			<view class="ui-form-group top-title">
				<view class="form-title">What's your sex?</view>
				<view class="form-main">
					<switch type="switch"></switch>
				</view>
			</view>

			<ge-title category category-content="CHECK" title-content="选择" title-icon="radio-button" border></ge-title>
			<radio-group class="margin-top">
				<view class="ui-flex align-center">
					<radio checked></radio>
					<view class="title">No Design System</view>
				</view>
				<view class="ui-flex align-center margin-top">
					<radio></radio>
					<view class="title">Hello world</view>
				</view>
			</radio-group>

			<ge-title category category-content="SLIDER" title-content="滑块" title-icon="sliders-horizontal"
				border></ge-title>
			<slider class="margin-top" :value="30"></slider>
		</view>
	</ge-page>
</template>
<script>
	export default {

	}
</script>
<style lang="scss">

</style>