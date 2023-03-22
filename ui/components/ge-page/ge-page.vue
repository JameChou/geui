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
  background-color: var(--ui-bg-primary);

  &-body {
    min-height: 100vh;
    color: var(--ui-text-regular);
  }
}
</style>