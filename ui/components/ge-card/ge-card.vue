<template>
	<view class="ui-card" :class="compact ? 'compact' : ''">
		<view class="card-tag" v-if="tag !== ''" @tap="tapTag">
			{{tag}}
		</view>
		<view class="card-button" v-if="showButton">
			<button class="ui-icon-button gray ph shadow round sm" :class="buttonIcon" @tap="tapButton">
			</button>
		</view>
		<view class="card-image" @tap="tapImage">
			<image :src="image" :mode="imageMode" />
		</view>
		<view :class="compact ? 'cover-content' : 'content'">
			<view class="background" v-if="compact"></view>
			<text class="title" @tap="tapContent">{{title}}</text>
			<text class="sub-title" @tap="tapContent" v-if="subTitle !== ''">{{subTitle}}</text>
			<block v-if="richInfo">
				<template>
					<view class="spec-info" @tap="tapInfo">
						<slot name="richInfo"></slot>
					</view>
				</template>
			</block>
			<block v-else>
				<view class="spec-info" @tap="tapInfo">
					{{info}}
				</view>
			</block>
		</view>
	</view>
</template>
<script>
export default {
	name: 'GeCard',
	props: {
		uuid: {
			type: [String, Number],
			default: ""
		},
		tag: {
			type: String,
			default: ""
		},
		showButton: {
			type: Boolean,
			default: false
		},
		buttonIcon: {
			type: String,
			default: 'ph-dots-three'
		},
		title: {
			type: String,
			default: ""
		},
		subTitle: {
			type: String,
			default: ""
		},
		info: {
			type: String,
			default: ""
		},
		image: {
			type: String,
			default: ""
		},
		compact: {
			type: Boolean,
			default: true
		},
		imageMode: {
			type: String,
			default: "aspectFill"
		},
		richInfo: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		tapContent() {
			this.$emit('tap-content', { uuid: this.uuid, title: this.title, subTitle: this.subTitle });
		},
		tapTag() {
			this.$emit('tap-tag', { uuid: this.uuid, tag: this.tag });
		},
		tapButton() {
			this.$emit('tap-button', { uuid: this.uuid });
		},
		tapInfo() {
			this.$emit('tap-info', { uuid: this.uuid, info: this.info });
		},
		tapImage() {
			this.$emit('tap-image', { uuid: this.uuid, image: this.image });
		}
	}
}
</script>
<style lang="scss">
</style>