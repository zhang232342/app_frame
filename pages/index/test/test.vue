<template>
		<u-top-tips ref="uTips"></u-top-tips>
</template>

<script>
	export default {
			onReady() {
				this.$refs.uTips.show({
					title: '铁马冰河入梦来',
					type: 'success',
					duration: '2300'
				})
			}
		}
</script>

<style>

</style>
