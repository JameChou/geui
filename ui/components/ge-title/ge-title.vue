<template>
  <view class="ui-title">
    <view class="title" :class="border ? 'border': ''">
      <text class="category" v-if="category">{{categoryContent}}</text>
      <view class="title-body">
        <text class="ph" v-if="titleIcon !== ''" :class="'ph-' + titleIcon"></text>
        <text class="content">{{titleContent}}</text>
        <view class="action" v-if="action">
          <text>{{actionName}}</text>
          <text class="ph" :class="'ph-' + actionIcon"></text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    action: {
      type: Boolean,
      default: false
    },
    actionName: {
      type: String,
      default: '更多'
    },
    actionIcon: {
      type: String,
      default: 'caret-right'
    },
    category: {
      type: Boolean,
      default: false
    },
    categoryContent: {
      type: String,
      default: ''
    },
    titleIcon: {
      type: String,
      default: ''
    },
    titleContent: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.ui-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--ui-text-regular);
  min-height: 100rpx;
  margin-top: 15rpx;

  .title {
    width: 688rpx;
    height: 100%;

    &.border {
      padding-bottom: 25rpx;
      border-bottom: var(--ui-bottom-border-regular);
    }
  }

  .category {
    font-style: normal;
    font-weight: 600;
    font-size: 19.2rpx;
    line-height: 158%;
    letter-spacing: 0.15em;
    color: #00B670;
  }

  .title-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 38.5rpx;
    line-height: 138%;

    .content {
      flex: 1;
      margin-left: 8rpx;
    }

    .action {
      font-style: normal;
      font-weight: 400;
      font-size: 30.8rpx;
      line-height: 150%;
      color: var(--ui-text-regular-3);
      display: flex;
      align-items: center;

    }

  }

}
</style>