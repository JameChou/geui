<template>
	<view class="ui-card-small">
		<view class="body">
			<view class="content">
				<view class="tag" v-if="tag !== ''">{{tag}}</view>
				<view class="title">{{title}}</view>
				<block v-if="spec !== ''">
					<view class="spec">
						{{spec}}
					</view>
				</block>
				<block v-else>
					<view class="spec">
						<slot name="spec"></slot>
					</view>
				</block>
				<view class="score" @tap="tapRate">{{score}}<ge-rates disabled :value="score"></ge-rates><text>({{rateNumber}})</text></view>
				<view class="operate"><button @tap="tapButton" class="ui-button" :class="buttonType">{{buttonName}}</button></view>
			</view>
			<view class="content-image" @tap="tapImage">
				<image :src="image"
							 :mode="imageMode" />
			</view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		id: {
			type: [String, Number],
			default: ""
		},
		tag: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		spec: {
			type: String,
			default: ""
		},
		score: {
			type: Number,
			default: 0
		},
		rateNumber: {
			type: Number,
			default: 0
		},
		buttonName: {
			type: String,
			default: "Button"
		},
		buttonType: {
			type: String,
			default: "primary" // blue gray
		},
		image: {
			type: String,
			default: ""
		},
		imageMode: {
			type: String,
			default: "aspectFill"
		}
	},
	methods: {
		tapButton() {
			this.$emit('tap-button', { id: this.id });
		},
		tapImage() {
			this.$emit('tap-image', { id: this.id, image: this.image });
		},
		tapRate() {
			this.$emit('tap-rate', { id: this.id, rate: this.rate, rateNumber: this.rateNumber });
		}
	}
}
</script>
<style lang="scss">
</style>