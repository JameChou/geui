<template>
	<ge-page noTabs>
		<ge-nav title="头像"></ge-nav>

    <view class="ui-container">
      <ge-title category category-content="AVATAR" title-content="头像基础形状" title-icon="user-circle" border></ge-title>
      <view class="margin-top ui-flex align-center justify-around">
        <view class="ui-avatar" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')"></view>
        <view class="ui-avatar round-avatar" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')"></view>
      </view>

      <ge-title category category-content="SIZE" title-content="三个头像大小" title-icon="arrows-out-simple" border></ge-title>
      <view class="margin-top ui-flex align-center justify-around">
        <view class="ui-avatar xs" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')"></view>
        <view class="ui-avatar sm" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')"></view>
        <view class="ui-avatar" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')"></view>
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
          <view class="ui-avatar round-avatar" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')"></view>
        </view>
      </view>

      <ge-title category category-content="标签" title-content="标签,提示" title-icon="notification" border></ge-title>
      <view class="margin-top ui-flex align-center justify-around">
        <view class="ui-avatar round-avatar" style="background-image: url('https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg')">
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

</style>