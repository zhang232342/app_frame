<template>
	<view>
		<view class="u-m-t-20">
			<u-cell-group>				
				<u-cell-item  title="姓名:" :arrow="false">{{name}}</u-cell-item>
				<u-cell-item  title="账号:" :arrow="false">{{account}}</u-cell-item>
				<u-cell-item  title="部门:" :arrow="false">{{area}}</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				account:'',
				area:''
			}
		},
		onLoad:function(option) {
						this.name = option.name;
						this.account = option.account;
						this.area = option.area;
					},
		methods: {
			
		}
	}
</script>

<style>

</style>
