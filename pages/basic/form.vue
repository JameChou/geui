<template>
  <ge-page no-tabs>
    <ge-nav title="表单"></ge-nav>
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

      <ge-title category category-content="CHECK" title-content="单选、复选等" title-icon="radio-button" border></ge-title>
			<view class="ui-form-group top-title">
				<view class="form-title">What's your sex?</view>
				<view class="form-main">
					<switch type="switch"></switch>
				</view>
			</view>

			<ge-title category category-content="SLIDER" title-content="滑块" title-icon="sliders-horizontal" border></ge-title>
			<slider :value="30"></slider>
    </view>
  </ge-page>
</template>
<script>
export default {

}
</script>
<style lang="scss">

</style>