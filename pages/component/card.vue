<template>
  <ge-page :tabs="tabs">
    <ge-nav title="卡片">
    </ge-nav>
    <!-- 常规二 603839 -->
    <view class="ui-card compact">
      <view class="card-tag">
        推荐
      </view>
      <view class="card-button">
        <button class="ui-icon-button gray shadow ph ph-dots-three round sm"></button>
      </view>
      <view class="card-image">
        <img src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/09445d7c-049e-4c72-ac29-b492218efecd.jpeg"
             mode="aspectFill"
        />
      </view>
      <view class="cover-content">
        <view class="background"></view>
        <text class="title">What is react? Test test test 测试测试</text>
        <text class="sub-title">Education museum delicated 测试测试哈哈哈哈哈哈</text>
        <text class="spec-info ph ph-map-pin">Nanjing, China</text>
      </view>
    </view>

    <!-- 常规一 -->
    <view class="ui-card" style="margin-top: 30.8rpx;">
      <view class="card-tag">
        标签
      </view>
      <view class="card-button">
        <button class="ui-icon-button gray shadow ph ph-dots-three round sm"></button>
      </view>
      <view class="card-image">
        <img src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/e61027cc-0cac-40f5-83e6-47bf071feb97.jpeg"
             mode="aspectFill"
        />
      </view>

      <view class="content">
        <text class="title">What is react? Test test test 测试测试</text>
        <text class="sub-title">Education museum delicated 测试测试哈哈哈哈哈哈</text>
        <text class="spec-info ph ph-map-pin">Nanjing, China</text>
      </view>
    </view>

    <view class="ui-card compact">
      <view class="card-tag">
        推荐
      </view>
      <view class="card-button">
        <button class="ui-icon-button gray shadow ph ph-dots-three round sm"></button>
      </view>
      <view class="card-image">
        <img src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/6f10b8b4-2bea-465c-80e3-0db765b68aff.jpeg"
             mode="aspectFill"
        />
      </view>
      <view class="cover-content">
        <view class="background"></view>
        <text class="title">What is react? Test test test 测试测试</text>
        <text class="sub-title">Education museum delicated 测试测试哈哈哈哈哈哈</text>
        <text class="spec-info ph ph-map-pin">Nanjing, China</text>
      </view>
    </view>

    <button class="ui-icon-button lg round ph ph-plus blue shadow float-button"></button>

  </ge-page>
</template>
<script>
export default {
  data() {
    return {
      tabs: [{
        'name': '组件',
        'url': '/pages/index/index',
        'icon': 'ph-puzzle-piece',
        'click': 'switch',
        'notification': false
      },
        {
          'name': '设置',
          'url': '/pages/setting/index',
          'icon': 'ph-gear',
          'click': 'switch',
          'notification': false
        },
        {
          'name': '播放',
          'url': '/pages/player/index',
          'icon': 'ph-guitar',
          'click': 'switch',
          'notification': true
        },
        {
          'name': '商品详情',
          'url': '/pages/product/index',
          'icon': 'ph-bank',
          'click': 'new',
          'notification': false
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.ui-card {
  display: block;
  width: 100%;

  &.compact {
    height: 555rpx;
    margin-top: 30.8rpx;
  }

  .card-tag {
    position: absolute;
    left: 50rpx;
    height: 46.2rpx;
    width: auto;
    min-width: 100rpx;
    font-style: normal;
    font-weight: 400;
    font-size: 23.1rpx;
    line-height: 130%;
    margin-top: 15.4rpx;

    background-color: #00B670;
    border-radius: 999rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
  }

  .card-button {
    position: absolute;
    right: 50rpx;
    margin-top: 15.4rpx;
  }


  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;

    image {
      width: 688rpx;
      height: 544rpx;
      border-radius: 19.2rpx;
    }

  }

  .cover-content {
    position: relative;
    top: -205rpx;
    width: 100%;
    height: 215.4rpx;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1024;
    .background {
      z-index: -1;
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(36.7rpx);
      width: 688rpx;
      height: 215.4rpx;
      border-radius: 0px 0px 19.2rpx 19.2rpx;
    }

    .title {
      margin-top: 23.1rpx;
      width: 642.3rpx;
      height: 53.8rpx;
      font-style: normal;
      font-weight: 600;
      font-size: 38.5rpx;
      line-height: 135%;
      color: var(--ui-text-regular);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }

    .sub-title {
      margin-top: 15.4rpx;
      font-style: normal;
      font-weight: 400;
      height: 46.2rpx;
      width: 642.3rpx;
      font-size: 30.8rpx;
      line-height: 150%;
      letter-spacing: 0.0168em;
      color: rgba(0, 0, 0, 0.618);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }

    .spec-info {
      margin-top: 15.4rpx;
      font-style: normal;
      font-weight: 400;
      height: 38.5rpx;
      font-size: 26.9rpx;
      line-height: 142%;
      color: var(--ui-text-regular);
      width: 642.3rpx;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
  }

  .content {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      margin-top: 23.1rpx;
      width: 688rpx;
      font-style: normal;
      font-weight: 600;
      font-size: 38.5rpx;
      line-height: 135%;
      color: var(--ui-text-regular);
    }

    .sub-title {
      margin-top: 15.4rpx;
      font-style: normal;
      font-weight: 400;
      width: 688rpx;
      font-size: 30.8rpx;
      line-height: 150%;
      letter-spacing: 0.0168em;
      color: rgba(0, 0, 0, 0.618);
    }

    .spec-info {
      margin-top: 15.4rpx;
      font-style: normal;
      font-weight: 400;
      font-size: 26.9rpx;
      line-height: 142%;
      color: var(--ui-text-regular);
      width: 688rpx;
    }
  }
}

.float-button {
  position: fixed;
  right: 30rpx;
  bottom: 180rpx;
  z-index: 4068;
}

</style>