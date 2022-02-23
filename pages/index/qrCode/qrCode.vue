<template>
	<view>
		{{'扫描后信息：'+mes}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mes:'',
			}
		},
			onLoad:function(option) {
				let mes;
				console.log("二维码的信息："+option.result);
				this.mes = option.result.toString();
			}
		}
</script>

<style>

</style>
