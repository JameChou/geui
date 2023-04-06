<template>
  <ge-page no-tabs>
    <ge-nav title="操作条"></ge-nav>

    <!--
      这里是为了演示用，实际请使用ui文件夹内的组件
      temp-nav(./temp/temp-nav.vue)
      与ui内的顶部操作条是相同的传参方式
    -->
    <view class="ui-container">
      <ge-title category category-content="导航栏Bar" title-content="顶部操作条、最小配置,标题透明" title-icon="number-circle-one" border></ge-title>
      <view class="margin-top bg-green">
        <temp-nav title="标题"></temp-nav>
      </view>

      <ge-title category category-content="导航栏Bar" title-content="初始不透明background" title-icon="number-circle-two" border></ge-title>
      <view class="margin-top bg-green">
        <temp-nav title="Title" :is-opacity="false"></temp-nav>
      </view>

      <ge-title category category-content="CUSTOM" title-content="自定义顶部操作条" title-icon="number-circle-three" border></ge-title>
      <view class="margin-top bg-blue" >
        <temp-nav :is-opacity="false" custom-title back-icon="caret-left" back-text="返回">
          <template v-slot:replaceTitle>
            <img style="height: 100%; width: 96px;" mode="aspectFill" src="https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/c748cc9a-0b58-40b4-981b-386ceb678b46.png" />
          </template>
        </temp-nav>
      </view>
      <view class="margin-top bg-blue-40">
        <temp-nav :is-opacity="false" title="自定义左侧操作" custom-left>
          <template v-slot:customLeft>
            <view class="ui-avatar round-avatar sm" style="background-image: url('https://mp-c639d255-1c45-4802-946b-874beaaa72cd.cdn.bspapp.com/cloudstorage/2f09ce13-4fc4-435c-be24-6b68b77c3a21.jpeg')">
            </view>
          </template>
        </temp-nav>
      </view>

      <view class="margin-top bg-blue-40">
        <temp-nav :is-opacity="false" title="标题" custom-left>
          <template v-slot:customLeft>
            <text class="ph ph-list text-body-16 text-blue" @tap="showMenu"></text>
            <text class="ph ph-bell text-body-16 text-blue" @tap="showNotice"></text>
          </template>
        </temp-nav>
      </view>

      <view class="margin-top bg-blue-40">
        <temp-nav :is-opacity="false" title="自定义固定内容" fix-content :nav-height="40">
          <template v-slot:fixContent>
            <view style="width: 95%;">
              <ge-navtabs :items="items" :active="3"></ge-navtabs>
            </view>
          </template>
        </temp-nav>
      </view>

      <ge-title category category-content="CUSTOM" title-content="底部操作条" title-icon="number-circle-four" border></ge-title>
      <view class="margin-top bg-blue-40">
        <ge-tabbar :data="tabs"></ge-tabbar>
      </view>
    </view>
  </ge-page>
</template>
<script>
import TempNav from "./temp/temp-nav";
export default {
  components: {TempNav},
  data() {
    return {
      items: [
        '7分',
        '15分',
        '1小时',
        '1天',
        '1月',
        '1年'
      ],
      tabs: [{
        'name': 'Home',
        'url': '',
        'click': 'switch',
        'icon': 'ph-house',
        'notification': false,
        'type': 'icon'
      },
        {
          'name': 'Activity',
          'url': '',
          'click': 'switch',
          'icon': 'ph-bell-ringing',
          'notification': true,
          'type': 'icon'
        },
        {
          'name': 'Search',
          'url': '',
          'icon': 'ph-magnifying-glass',
          'click': 'switch',
          'notification': false,
          'type': 'icon'
        },
        {
          'name': 'Saved',
          'url': '',
          'icon': 'ph-heart',
          'click': 'switch',
          'notification': false,
          'type': 'icon'
        },
        {
          'name': 'Setting',
          'url': '',
          'icon': 'ph-gear',
          'click': 'new',
          'notification': false,
          'type': 'icon'
        }
      ]
    }
  },
  methods: {
    showMenu() {
      console.log('opbar.vue show menu method invoked.');
    },

    showNotice() {
      console.log('opbar.vue show notice method invoked.');
    }
  }
}
</script>
<style lang="scss">
.ui-tab-bottom {
  position: relative !important;
}
</style>