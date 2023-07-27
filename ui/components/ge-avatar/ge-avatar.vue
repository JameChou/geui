<template>
	<view @tap="tapAvatar" class="ui-avatar" :style="[{ 'background-image': avatar === '' ? '' : 'url(' + avatar + ')' }]"
				:class="[size === '' ? '' : size, color !== '' && avatar === '' ? 'avatar-bg-' + color : '', round ? 'round-avatar' : '']"
	>
		<block v-if="avatar === '' && icon">
			<text class="ph" :class="name"></text>
		</block>
		<block v-if="avatar === '' && !icon">
			<text>{{name}}</text>
		</block>
		<text v-if="notify" class="avatar-badge"></text>
	</view>
</template>
<script>
export default {
	name: 'GeAvatar',
	props: {
		id: {
			type: String, Number,
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		avatar: {
			type: String,
			default: ""
		},
		round: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: ""  // xs sm
		},
		notify: {
			type: Boolean,
			default: false
		},
		icon: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		tapAvatar() {
			this.$emit('click', { id: this.id });
		}
	}
}
</script>
<style lang="scss">
</style>