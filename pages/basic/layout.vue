<template>
	<ge-page noTabs>
    <ge-nav title="布局"></ge-nav>

    <ge-navtabs :items="items"></ge-navtabs>


	</ge-page>
</template>
<script>
  export default {
    data() {
      return {
        items: ['5m', '10m', '15m', 'D', 'H']
      }
    }
  }
</script>
<style lang="scss">

</style>