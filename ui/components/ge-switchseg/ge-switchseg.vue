<template>
  <view class="ui-switch-segment">
    <view class="item" :class="activeIndex === 1 ? 'active' : ''" @tap="chooseTab" data-index="1">
      Light
    </view>
    <view class="item" :class="activeIndex === 2 ? 'active' : ''" @tap="chooseTab" data-index="2">
      Dark
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {activeIndex: 1};
  },
  methods: {
    chooseTab(event) {
    }
  }

}
</script>
<style lang="scss">
.ui-switch-segment {
  align-items: center;
  display: flex;
  min-width: 290rpx;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(19.1px);
  border-radius: 19.2rpx;
  height: 71.1rpx;

  .item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 90%;
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.618);
    margin-left: 3.8rpx;
    margin-right: 3.8rpx;
    font-weight: 400;
    font-size: 30.8rpx;

    &.active {
      background: #FFFFFF;
      box-shadow: 0px 3.8rpx 11.5rpx rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(19.2rpx);
      border-radius: 15.4rpx;
      font-weight: 600;
      color: #000000;
    }
  }
}
</style>