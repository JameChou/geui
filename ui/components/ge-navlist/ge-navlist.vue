<template>
  <scroll-view scroll-x scroll-with-animation class="ui-nav-list" :scroll-left="scrollLeft">
    <view v-for="(item, index) in items" :data-id="index" class="btn-item" @tap="tabSelect"
          :class="activeIndex === index ? 'active' : ''">{{item}}</view>
  </scroll-view>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeIndex: 0,
      scrollLeft: 0,
      items: [
        'Newest', 'Popular', 'Top Rated', 'Biggest', 'Test1', 'Test2', 'Test3', 'Test4'
      ]
    }
  },
  methods: {
    tabSelect(e) {
      this.activeIndex = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    }
  }
}
</script>
<style lang="scss">
.ui-nav-list {
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }

  .btn-item {
    display: inline-block;
    :before {
      content: '123';
    }
    &.active {
      background: var(--ui-button-gray);
      color: var(--ui-text-regular);

      &::before {
        font-family: 'Phosphor';
        content: '\ed28';
        margin-right: 2rpx;
        color: #FE8E0B;
      }

    }
    background: var(--ui-button-primary);
    color: var(--ui-tabbar-active-color);
    margin-left: 20rpx;
    border-radius: 999px;
    align-items: center;
    padding: 15rpx 23rpx 15rpx 23rpx;

    font-style: normal;
    font-weight: 600;
    font-size: 27rpx;
    line-height: 142%;
  }
}
</style>