<!-- 忘记密码 -->
<template>
	<view class="forget">
		<!-- TopTips 顶部提示 -->
		<u-top-tips ref="uTips" :navbar-height="statusBarHeight + navbarHeight"></u-top-tips>
		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="tips">若你忘记了密码，可在此重置新密码。</view>
				<wInput
					v-model="username"
					type="text"
					maxlength="11"
					placeholder="请输入工号"
				></wInput>
				<wInput
					v-model="passData"
					type="password"
					maxlength="11"
					placeholder="请输入新密码"
					isShowPass
				></wInput>
				<wInput
					v-model="verCode"
					type="text"
					maxlength="11"
					placeholder="请输入邀请码"
				></wInput>
			</view>
			
			<wButton 
				class="wbutton"
				text="重置密码"
				:rotate="isRotate" 
				@click.native="startRePass()"
			></wButton>
		</view>
	</view>
</template>

<script>
	let _this;
	import wInput from './tool/watch-input.vue' //input
	import wButton from './tool/watch-button.vue' //button
	export default {
		data() {
			return {
				// 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				// 导航栏内容区域高度，不包括状态栏高度在内
				navbarHeight: 44,
				username: "", //工号
				verCode: "", //邀请码
				passData: "", //密码
				isRotate: false, //是否加载旋转

			}
		},
		components:{
			wInput,
			wButton
		},
		mounted() {
			_this= this;
		},
		methods: {
			
			startRePass() {
				//重置密码
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.username.length == "") {
					this.$refs.uTips.show({
									title: '用户名不能为空',
									type: 'error'
								});
				    return;
				}
				if (this.verCode.length == "") {
					this.$refs.uTips.show({
									title: '邀请码不能为空',
									type: 'error'
								});
				    return;
				}
				var path  = this.GLOBAL.src;
				uni.request({
				    url: path+'/api/forgetMobileUser', //接口地址
				    data: {
				        username: this.username,
						verCode:this.verCode,
						passData: this.passData
				    },
				    header: {
							'content-type':'application/json',},
				    success: (res) => {
						_this.isRotate=true;
						console.log("值："+JSON.stringify(res.data));
						
						if(res.statusCode == 200){
							var status = res.data;
							console.log("status："+res.data);
							if(status == "success"){
								this.$refs.uTips.show({
												title: '重置成功',
												type: 'primary'
											});		
								console.log("值："+JSON.stringify(res.data));
								
								//按钮跳转到主页
								uni.reLaunch({
										url: '../login/login',
								 		});
							}else if(status == "error"){
								_this.isRotate=true;
								this.$refs.uTips.show({
												title: '重置失败',
												type: 'error'
											});
							}else if(status == "ineffective"){
								_this.isRotate=true;
								this.$refs.uTips.show({
												title: '邀请码无效',
												type: 'error'
											});
							}
								
						}else{
							_this.isRotate=true;
							this.$refs.uTips.show({
											title: '重置失败',
											type: 'error'
										});
						}																				        
				    }
				});
				
				
			    
				this.$refs.uTips.show({
								title: '重置密码成功',
								type: 'primary'
							});
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
				
				
			}
		}
	}
</script>

<style>
	@import url("./css/main.css");
	@import url("./css/icon.css");
</style>

