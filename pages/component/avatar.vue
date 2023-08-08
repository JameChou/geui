<template>
	<ge-page noTabs>
		<ge-navbar opacity title="头像"></ge-navbar>

		<view class="ui-container">
			<ge-title category category-content="AVATAR" title-content="头像基础形状" title-icon="user-circle"
				border></ge-title>
			<view class="margin-top ui-flex align-center justify-around">
				<ge-avatar @click="clickAvatar"
					avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"
					id="abc"></ge-avatar>
				<ge-avatar round
					avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"></ge-avatar>
			</view>

			<ge-title category category-content="SIZE" title-content="三个头像大小" title-icon="arrows-out-simple"
				border></ge-title>
			<view class="margin-top ui-flex align-center justify-around">
				<ge-avatar size="xs"
					avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"
					id="abc"></ge-avatar>
				<ge-avatar size="sm"
					avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"
					id="abc"></ge-avatar>
				<ge-avatar avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"
					id="abc"></ge-avatar>
			</view>

			<ge-title category category-content="文字" title-content="非图片的头像" title-icon="text-a-underline"
				border></ge-title>
			<view class="margin-top ui-flex align-center justify-around">
				<ge-avatar color="blue" name="周"></ge-avatar>
				<ge-avatar color="yellow" name="S"></ge-avatar>
				<ge-avatar color="green" name="T"></ge-avatar>
				<ge-avatar name="ph-upload" round icon></ge-avatar>
			</view>

			<ge-title category category-content="GROUP" title-content="头像组" title-icon="users" border></ge-title>
			<view class="margin-top ui-flex align-center justify-content">
				<ge-avatar-group>
					<ge-avatar round color="blue" name="周"></ge-avatar>
					<ge-avatar round color="yellow" name="S"></ge-avatar>
					<ge-avatar round color="green" name="T"></ge-avatar>
					<ge-avatar round @click="clickAvatar"
						avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"
						id="abc"></ge-avatar>
				</ge-avatar-group>
			</view>

			<ge-title category category-content="标签" title-content="标签,提示" title-icon="notification" border></ge-title>
			<view class="margin-top ui-flex align-center justify-around">
				<ge-avatar notify
					avatar="https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/user-1.jpeg"
					id="abc"></ge-avatar>
				<ge-avatar notify color="blue" name="周"></ge-avatar>
				<ge-avatar notify size="sm" color="yellow" name="S"></ge-avatar>
				<ge-avatar notify size="xs" color="green" name="T"></ge-avatar>
			</view>

		</view>
	</ge-page>
</template>
<script>
	export default {
		methods: {
			clickAvatar(data) {
				console.log(`点击了头像, id为${data.id}`);
			}
		}
	}
</script>
<style lang="scss">

</style>