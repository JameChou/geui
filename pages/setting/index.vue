<template>
	<ge-page :no-tabs="false" :tabs="tabs" :tab-active="4">
		setting
	</ge-page>
</template>
<script>
export default {
	computed: {
		tabs() {
			return this.$store.getters.getAppTabs;
		}
	}
}
</script>
<style lang="scss"></style>