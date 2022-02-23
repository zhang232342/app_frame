<template>
	<view class="content">
		<view>
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item  title="更改密码"  @click="changePsw"></u-cell-item>
					<u-cell-item  title="通用"></u-cell-item>
				</u-cell-group>
			</view>
			
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item  title="切换账号" :arrow="false" @click="changeAccount"></u-cell-item>
					<u-cell-item  title="退出登陆" :arrow="false" @click="clickOut"></u-cell-item>
				</u-cell-group>
			</view>
			
			
		</view>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			changeAccount(){
				uni.removeStorageSync('setUserData');
				//切换账号
				uni.navigateTo({
						url: '/pages/login/login',
				});
			},
			clickOut(){
				uni.removeStorageSync('setUserData');
				//退出登录
				uni.navigateTo({
						url: '/pages/login/login',
				});
			},
			changePsw(){
				//更改密码
				uni.navigateTo({
						url: '/pages/login/revise',
				});
			}
		}
	}
</script>

<style>

</style>
