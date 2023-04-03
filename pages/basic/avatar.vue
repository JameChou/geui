<template>
	<ge-page noTabs>
		<ge-nav title="头像"></ge-nav>

    <view class="ui-container">
      <ge-title category category-content="AVATAR" title-content="头像基础形状" title-icon="user-circle" border></ge-title>
      <view class="margin-top ui-flex align-center justify-around">
        <view class="ui-avatar" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')"></view>
        <view class="ui-avatar round-avatar" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')"></view>
      </view>

      <ge-title category category-content="SIZE" title-content="三个头像大小" title-icon="arrows-out-simple" border></ge-title>
      <view class="margin-top ui-flex align-center justify-around">
        <view class="ui-avatar xs" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')"></view>
        <view class="ui-avatar sm" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')"></view>
        <view class="ui-avatar" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')"></view>
      </view>

      <ge-title category category-content="文字" title-content="非图片的头像" title-icon="text-a-underline" border></ge-title>
      <view class="margin-top ui-flex align-center justify-around">
        <view class="ui-avatar avatar-bg-blue"><text>周</text></view>
        <view class="ui-avatar avatar-bg-yellow"><text>S</text></view>
        <view class="ui-avatar avatar-bg-green"><text>R</text></view>
        <view class="ui-avatar round-avatar"><text class="ph ph-upload"></text></view>
      </view>

      <ge-title category category-content="GROUP" title-content="头像组" title-icon="users" border></ge-title>
      <view class="margin-top ui-flex align-center justify-content">
        <view class="ui-avatar-group">
          <view class="ui-avatar round-avatar avatar-bg-yellow"><text>S</text></view>
          <view class="ui-avatar round-avatar avatar-bg-green"><text>R</text></view>
          <view class="ui-avatar round-avatar avatar-bg-blue"><text>T</text></view>
          <view class="ui-avatar round-avatar" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')"></view>
        </view>
      </view>

      <ge-title category category-content="标签" title-content="标签,提示" title-icon="notification" border></ge-title>
      <view class="margin-top ui-flex align-center justify-around">
        <view class="ui-avatar round-avatar" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')">
          <text class="avatar-badge"></text>
        </view>
        <view class="ui-avatar">
          <text>T</text>
          <text class="avatar-badge"></text>
        </view>
        <view class="ui-avatar avatar-bg-green sm"><text>R</text><text class="avatar-badge"></text></view>
        <view class="ui-avatar avatar-bg-green xs"><text>R</text><text class="avatar-badge"></text></view>
      </view>

    </view>
	</ge-page>
</template>
<script>
	export default {}
</script>
<style lang="scss">
/*
 36 40 48
 */

.ui-avatar {
  position: relative;
  width: 92rpx;
  height: 92rpx;
  border-radius: 19rpx;
  border: 4rpx solid var(--ui-bg-pure-primary);
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: rgb(225, 225, 225);

  .avatar-badge {
    width: 20rpx;
    height: 20rpx;
    border-radius: 99px;
    background-color: #E55539;
    border: 4rpx solid #FFFFFF;
    position: absolute;
    top: -10rpx;
    right: -5rpx;
  }

  text {
    font-size: 30rpx;
    font-weight: 600;
  }

  &.avatar-bg-blue {
    background-color: #A7B9FC;
    text {
      color: #FFFFFF;
    }
  }

  &.avatar-bg-yellow {
    background-color: rgb(239, 197, 135);
    text {
      color: #FFFFFF;
    }
  }

  &.avatar-bg-green {
    background-color: rgb(159, 217, 183);
    text {
      color: #FFFFFF;
    }
  }

  &.round-avatar {
    border-radius: 99px;
  }

  &.sm {
    width: 77rpx;
    height: 77rpx;

    .avatar-badge {
      width: 15rpx;
      height: 15rpx;
    }
  }

  &.xs {
    width: 70rpx;
    height: 70rpx;

    .avatar-badge {
      width: 15rpx;
      height: 15rpx;
    }
  }

  text {
    color: black;
  }
}

.ui-avatar-group {
  direction: rtl;
  unicode-bidi: bidi-override;
  display: inline-block;
  padding: 0 10rpx 0 40rpx;

  .ui-avatar {
    margin-left: -30rpx;
    vertical-align: middle;
  }
}
</style>