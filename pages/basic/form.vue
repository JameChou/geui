<template>
  <ge-page>
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
    </view>
  </ge-page>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.ui-form-group {
  position: relative;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  &.form-valid {
    .form-alert {
      font-style: normal;
      font-weight: 400;
      font-size: 23rpx;
      line-height: 130%;
      color: red;
      padding-left: 20rpx;
      padding-top: 5rpx;
    }

    &.form-error {
      .form-main {
        input {
          border: 3rpx solid rgba(229, 85, 57, 0.618);
        }

        &:after {
          font-family: 'Phosphor';
          content: '\edc0';
          position: absolute;
          right: 30rpx;
          z-index: 4068;
          font-size: 38rpx;
          color: rgba(229, 85, 57, 0.618);
        }
      }
    }

    &.form-success {
      .form-main {
        input {
          border: 3rpx solid rgba(0, 182, 112, 0.5);
        }

        &:after {
          font-family: 'Phosphor';
          content: '\ea30';
          position: absolute;
          right: 30rpx;
          z-index: 4068;
          font-size: 38rpx;
          color: rgba(0, 182, 112, 0.5);
        }
      }
    }
  }

  &.top-title {
    flex-direction: column;
    align-items: start;
    .form-title {
      position: relative;
      background-color: transparent;
      top: 0;
      left: 0;
    }
  }

  .form-main {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;

    &.round {
      input {
        border-radius: 99px;
      }
    }

    input {
      height: 92rpx;
      border: 2rpx solid rgba(0, 0, 0, 0.2);
      box-shadow: inset 0px 4rpx 11rpx rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(19.8rpx);
      border-radius: 17rpx;
      padding-left: 23rpx;
      position: relative;
      flex: 1;
      font-size: 32rpx;
    }

    text[class*="ph-"] {
      padding-left: 15rpx;
      position: absolute;
      z-index: 4068;
      font-size: 32rpx;
      color: #7F7F7F;
      font-weight: 600;
      &.right {
        right: 20rpx;
        + input {
          padding-left: 23rpx;
        }
      }

      + input {
        padding-left: 50rpx;
      }
    }
  }


  .form-title {
    border-radius: 7.7rpx;
    top: -20rpx;
    left: 23rpx;
    position: absolute;
    z-index: 4068;
    height: 46rpx;
    font-style: normal;
    font-weight: 400;
    font-size: 27rpx;
    line-height: 142%;
    background-color: var(--ui-bg-primary);
    padding: 3.8rpx 7.7rpx 3.8rpx 7.7rpx;
  }

}

</style>