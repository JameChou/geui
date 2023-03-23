<template>
  <view class="ui-navbar" :style="[{height: height + 'px'}]">
    <view class="op">
      <text class="ph ph-arrow-left"></text>
    </view>
    <view class="content">
      测试一下标题
    </view>
    <view class="notice">
      <text class="ph ph-magnifying-glass"></text>
      <text class="ph ph-bell"></text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      height: this.customBar
    }
  }
}
</script>

<style lang="scss">
.ui-navbar {
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: fixed;
  background-color: var(--ui-bg-primary);

  .op {
    height: 100%;
    color: var(--ui-text-highlight);
    display: flex;
    align-items: flex-end;
    margin-left: 0.3em;
    padding-bottom: 20rpx;

    :first-child[class*="ph-"] {
      font-size: 38rpx;
    }

    .text {
      font-size: 31rpx;
    }
  }

  .content {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: calc(100% - 600rpx);
    color: var(--ui-text-regular);
    padding-bottom: 20rpx;
  }

  &.shadow {
    box-shadow: var(--ui-nav-box-shadow);
    border-radius: 19.2rpx;
    background-color: var(--ui-nav-shadow-bg) !important;
  }

  .notice {
    font-weight: bold;
    font-size: 40rpx;
    margin-left: 40rpx;
    display: flex;
    align-items: center;
    color: var(--ui-text-regular);
    padding-bottom: 20rpx;

    :first-child {
      margin-right: 7rpx;
    }
  }

}
</style>