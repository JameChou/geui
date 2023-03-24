<template>
  <ge-page :nav="true" noTabs>
    <template v-slot:nav>
      <view class="ui-header-content">
        <text class="ph ph-arrow-left" @tap="naviBack"></text>
        <view class="title">
          配色
        </view>
      </view>
    </template>

    <view class="margin-left margin-top">
      <text class="text-body-14 color-section-title">White #000000</text>
      <view class="ui-flex color-section" style="background: #000000; border: solid 1.8rpx black;">
        <view v-for="(item, index) in 6" class="pad" :class="'white-' + index"></view>
      </view>
    </view>

    <view class="margin-left margin-top">
      <text class="text-body-14 color-section-title">Black #FFFFFF</text>
      <view class="ui-flex color-section">
        <view v-for="(item, index) in 6" class="pad" :class="'black-' + index"></view>
      </view>
    </view>

    <view class="margin-left margin-top">
      <text class="text-body-14 color-section-title">Blue #4376FE</text>
      <view class="ui-flex color-section">
        <view v-for="(item, index) in 6" class="pad" :class="'blue-' + index"></view>
      </view>
    </view>

    <view class="margin-left margin-top">
      <text class="text-body-14 color-section-title">Green #00B670</text>
      <view class="ui-flex color-section">
        <view v-for="(item, index) in 6" class="pad" :class="'green-' + index"></view>
      </view>
    </view>

    <view class="margin-left margin-top">
      <text class="text-body-14 color-section-title">Orange #FE8E0B</text>
      <view class="ui-flex color-section">
        <view v-for="(item, index) in 6" class="pad" :class="'orange-' + index"></view>
      </view>
    </view>

    <view class="margin-left margin-top">
      <text class="text-body-14 color-section-title">Red #FE8E0B</text>
      <view class="ui-flex color-section">
        <view v-for="(item, index) in 6" class="pad" :class="'red-' + index"></view>
      </view>
    </view>
  </ge-page>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import "../../ui/scss/color";
.color-section-title {
  color: rgba(0, 0, 0, 0.5);
}

.color-section {
  width: 710rpx;
  height: 119rpx;
  border-radius: 40rpx;
  background: #FFFFFF;
  :first-child {
    border-radius: 40rpx 0px 0px 40rpx;
  }

  :last-child {
    border-radius: 0px 40rpx 40rpx 0px;
  }

  .pad {
    width: 118.3rpx;
    height: 118.3rpx;
  }
}

.white {
  @each $class, $value in (0: $ui-color-white, 1: $ui-color-white-60, 2: $ui-color-white-50, 3: $ui-color-white-40, 4: $ui-color-white-20, 5: $ui-color-white-10) {
    &-#{$class} {
      background-color: $value;
      height: 100%;
      width: 100%;
    }
  }
}

.black {
  @each $class, $value in (0: $ui-color-black, 1: $ui-color-black-60, 2: $ui-color-black-50, 3: $ui-color-black-40, 4: $ui-color-black-20, 5: $ui-color-black-10) {
    &-#{$class} {
      background-color: $value;
      height: 100%;
      width: 100%;
    }
  }
}

.blue {
  @each $class, $value in (0: $ui-color-blue, 1: $ui-color-blue-60, 2: $ui-color-blue-50, 3: $ui-color-blue-40, 4: $ui-color-blue-20, 5: $ui-color-blue-10) {
    &-#{$class} {
      background-color: $value;
      height: 100%;
      width: 100%;
    }
  }
}

.green {
  @each $class, $value in (0: $ui-color-green, 1: $ui-color-green-60, 2: $ui-color-green-50, 3: $ui-color-green-40, 4: $ui-color-green-20, 5: $ui-color-green-10) {
    &-#{$class} {
      background-color: $value;
      height: 100%;
      width: 100%;
    }
  }
}

.orange {
  @each $class, $value in (0: $ui-color-orange, 1: $ui-color-orange-60, 2: $ui-color-orange-50, 3: $ui-color-orange-40, 4: $ui-color-orange-20, 5: $ui-color-orange-10) {
    &-#{$class} {
      background-color: $value;
      height: 100%;
      width: 100%;
    }
  }
}

.red {
  @each $class, $value in (0: $ui-color-red, 1: $ui-color-red-60, 2: $ui-color-red-50, 3: $ui-color-red-40, 4: $ui-color-red-20, 5: $ui-color-red-10) {
    &-#{$class} {
      background-color: $value;
      height: 100%;
      width: 100%;
    }
  }
}
</style>