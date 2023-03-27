<template>
  <ge-page>
    <ge-nav title="按钮"></ge-nav>

    <view class="ui-section">
      <view class="section-title compact text-body-16">基础按钮</view>
      <view class="ui-flex align-center ui-flex-wrap section-body">
        <button class="ui-button blue shadow">Blue</button>
        <button class="ui-button gray shadow">Gray</button>
        <button class="ui-button primary shadow">Primary</button>
      </view>
    </view>

    <!--
    <view class="ui-section" style="margin-top: 40rpx;">
      <view class="section-title compact text-body-16">按钮大小</view>
      <view class="ui-flex align-center ui-flex-wrap section-body">
        <button class="ui-button blue shadow lg">Lg</button>
        <button class="ui-button blue shadow">Basic</button>
        <button class="ui-button blue shadow sm">Sm</button>
      </view>
    </view>
    -->
    <view class="ui-section" style="margin-top: 40rpx;">
      <view class="section-title compact text-body-16">圆角</view>
      <view class="ui-flex align-center ui-flex-wrap section-body">
        <button class="ui-button round blue">按钮</button>
        <button class="ui-button round gray">按钮</button>
        <button class="ui-button round primary">按钮</button>
      </view>
    </view>

    <view class="ui-section" style="margin-top: 40rpx;">
      <view class="section-title compact text-body-16">带图标标准按钮</view>
      <view class="ui-flex align-center ui-flex-wrap section-body">
        <button class="ui-button blue"><text class="icon ph ph-arrow-left"></text>返回</button>
        <button class="ui-button gray">消息<text class="icon ph ph-bell"></text></button>
        <button class="ui-button primary"><text class="icon ph ph-list"></text>菜单</button>
      </view>
    </view>

    <view class="ui-section" style="margin-top: 40rpx;">
      <view class="section-title compact text-body-16">只有图标按钮</view>
      <view class="ui-flex align-center ui-flex-wrap section-body">
        <button class="ui-icon-button blue ph ph-plus"></button>
        <button class="ui-icon-button gray ph ph-list"></button>
        <button class="ui-icon-button primary ph ph-pencil"></button>
        <button class="ui-icon-button blue shadow round primary ph ph-pencil"></button>
      </view>
    </view>
  </ge-page>
</template>
<script>
export default {
}
</script>

<style lang="scss">
.ui-section {
  .section-title {
    display: flex;
    align-items: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    padding-bottom: 34.6rpx;
    padding-left: 20rpx;

    &.compact {
      padding-bottom: 10rpx;
    }
    &.bottom-solid {
      border-bottom: solid 1.92rpx rgba(0, 0, 0, 0.1);
    }
  }

  .section-body {
    margin-top: 30rpx;
  }

}
</style>