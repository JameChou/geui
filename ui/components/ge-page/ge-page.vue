<template>
  <view class="ui-page theme-light">
    <view class="ui-page-body">
      <ge-navbar></ge-navbar>
      <slot></slot>
    </view>
  </view>
</template>
<script>
</script>
<style lang="scss">
.ui-page {
  background-image: url("../../../static/wallpaper.jpeg");

  &-body {
    min-height: 100vh;
    background-color: var(--ui-bg-glass);
    color: var(--ui-text-regular);
  }
}
</style>