<template>
  <ge-page noTabs>
    <ge-nav title="产品列表-1"></ge-nav>
    <view class="ui-product-one">
      <view class="body">
        <view class="content">
          <view class="tag" v-if="false">Hello</view>
          <view class="title">Buna.Fits for you tunna. Buy One, get Second for FREE. Limited deal</view>
          <view class="spec ph ph-book-bookmark">Non-fiction 1hr.50 min</view>
          <view class="score">4.6</view>
          <view class="operate"><button class="ui-button primary">Add to cart</button></view>
        </view>
        <view class="content-image">
          <img src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/5a42395f-00b7-4eda-bf62-5b27d75c7614.jpeg"
               mode="aspectFill" />
        </view>
      </view>
    </view>

    <view class="ui-product-one">
      <view class="body">
        <view class="content">
          <view class="tag">new Release</view>
          <view class="title">Buna.Fits for you tunna. Buy One</view>
          <view class="spec ph ph-book-bookmark">Non-fiction 1hr.50 min</view>
          <view class="score">4.6</view>
          <view class="operate"><button class="ui-button primary">Add to cart</button></view>
        </view>
        <view class="content-image">
          <img src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/5a42395f-00b7-4eda-bf62-5b27d75c7614.jpeg"
               mode="aspectFill" />
        </view>
      </view>
    </view>
  </ge-page>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.ui-product-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* 后期需要处理掉 */
  margin-top: 40rpx;

  .body {
    background: #F5F5F5;
    width: 688rpx;
    height: 431rpx;
    border-radius: 38.5rpx;
    backdrop-filter: blur(38.5rpx);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .content {
      height: 385rpx;
      width: 427rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .tag {
        width: 183rpx;
        height: 46rpx;
        border-radius: 999px;
        margin-bottom: 26rpx;
        font-style: normal;
        font-weight: 700;
        font-size: 23rpx;
        line-height: 130%;
        color: #FFFFFF;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .title {
        font-style: normal;
        font-weight: 600;
        font-size: 38.5rpx;
        line-height: 138%;
        color: var(--ui-text-regular);
      }

      .spec {
        margin-top: 15.4rpx;
        font-style: normal;
        font-weight: 400;
        font-size: 27rpx;
        line-height: 142%;
      }

      .score {
        margin-top: 15.4rpx;
        font-style: normal;
        font-weight: 600;
        font-size: 27rpx;
        line-height: 142%;
      }

      .operate {
        height: 77rpx;
        margin-top: 27rpx;
        button {
          width: 217rpx;
          height: 77rpx;
          position: absolute;
        }
      }
    }

    .content-image {
      width: 185rpx;
      height: 308rpx;

      image {
        width: 100%;
        height: 100%;
        border-radius: 19.2rpx;
      }
    }
  }

}
</style>