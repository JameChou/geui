<template>
  <view class="ui-tabbar">
    <view class="item active" v-for="(item,index) in 5">
      <text class="ph ph-house"></text>
      <text class="action-text">Home</text>
    </view>
  </view>
</template>
<script>
</script>
<style lang="scss">
.ui-tabbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--ui-tabbar-bg-primary);
  backdrop-filter: blur(36.7rpx);
  min-height: 108rpx;
  z-index: 9999 !important;

  .item {
    :first-child[class*="ph-"] {
      text-align: center;
      justify-content: center;
      display: flex;
      font-size: 44rpx;
    }
    .action-text {
      position: relative;
      bottom: 13.5rpx;
      font-size: 23rpx;
      font-weight: 400;
    }

    &.active {
      color: var(--ui-tabbar-active-color);
    }
  }
}
</style>