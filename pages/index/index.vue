<template>
	<view class="content">
		<view style="width:360px;">
			<u-card :title="title" :sub-title="subTitle" :thumb="thumb" full="full">
					<view class="" slot="body">
						<view class="u-body-item u-flex u-row-between u-p-b-0" v-for="item in list" >
						      <view class="u-body-item-title u-line-2">{{item.content}}</view>
 
						</view>
						<!-- <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0" @click="contentClick">
							<view class="u-body-item-title u-line-2">要说给2020做一份总结的话，那就是去年过得确实还不错。我给自己添置了不少电子好物，科技带来美好，生活幸福感蹭蹭的上升。</view>
							<image src="https://pic2.zhimg.com/80/v2-134135ca6aed213aba48774e7c1902ea_720w.jpg?source=1940ef5c" mode="aspectFill"></image>
						</view>
						<view class="u-body-item u-flex u-row-between u-p-b-0">
							<view class="u-body-item-title u-line-2">一项以高精度，高真度渲染图闻名的荷兰科技媒体Let'sGoDigital携手知名设计师Jermaine Smit（油管频道为 Concept Creator）带来了 iPhone 12s Pro的高清概念渲染视频。</view>
							<image src="https://pic1.zhimg.com/80/v2-f5ac64146d736998fb573f4ea04d9bd4_720w.jpg" mode="aspectFill"></image>
						</view> -->
					</view>
				</u-card>
		</view>
		<view class="u-demo-wrap">
			<view class="u-demo-title"></view>
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-grid :col="col" @click="click" v-if="!isSwiper" :border="border">
					<u-grid-item name="item1" :index="0" @click="itemClick" v-show="qrCode">
						<u-icon name="scan" :size="60"></u-icon>
						<view class="grid-text">扫描二维码</view>
					</u-grid-item>
					<u-grid-item :index="1" v-show="check">
						<u-icon name="plus" :size="60"></u-icon>
						<view class="grid-text">盘点</view>
					</u-grid-item>
					<u-grid-item :index="2" v-show="search">
						<u-icon name="search" :size="60"></u-icon>
						<view class="grid-text">查询</view>
					</u-grid-item>
					<u-grid-item :index="3" v-show="form">
						<u-icon name="order" :size="60"></u-icon>
						<view class="grid-text">表单</view>
					</u-grid-item>
					<u-grid-item :index="4" v-show="maps">
						<u-icon name="map" :size="60"></u-icon>
						<view class="grid-text">地图</view>
					</u-grid-item>
					<u-grid-item :index="5">
						<u-icon name="volume-up" :size="60"></u-icon>
						<view class="grid-text">音量</view>
					</u-grid-item>
					<u-grid-item :index="6">
						<u-icon name="trash" :size="60"></u-icon>
						<view class="grid-text">回收站</view>
					</u-grid-item>
					<u-grid-item :index="7">
						<u-icon name="rewind-right" :size="60"></u-icon>
						<view class="grid-text">快进</view>
					</u-grid-item>
					<u-grid-item :index="8">
						<u-icon name="shopping-cart" :size="60"></u-icon>
						<view class="grid-text">购物车</view>
					</u-grid-item>
				</u-grid>
				<swiper class="swiper" v-else @change="change">
					<swiper-item>
						<u-grid :border="border" :col="col" @click="click" hover-class="hover-class">
							<u-grid-item v-for="(item, index) in list" :index="index" :key="index">
								<u-icon :name="item" :size="50"></u-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
					<swiper-item>
						<u-grid :border="border" :col="col" @click="click">
							<u-grid-item v-for="(item, index) in list" :index="index + 9" :key="index">
								<u-icon :name="item" :size="50"></u-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
					<swiper-item>
						<u-grid :border="border" :col="col" @click="click">
							<u-grid-item v-for="(item, index) in list" :index="index + 18" :key="index">
								<u-icon :name="item" :size="50"></u-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
				</swiper>
				<view class="indicator-dots" v-if="isSwiper">
					<view class="indicator-dots-item" :class="[current == 0 ? 'indicator-dots-active' : '']">
					</view>
					<view class="indicator-dots-item" :class="[current == 1 ? 'indicator-dots-active' : '']">
					</view>
					<view class="indicator-dots-item" :class="[current == 2 ? 'indicator-dots-active' : '']">
					</view>
				</view>
			</view>
		</view>
		<u-tabbar :list="tabbar" :mid-button="false"
		:inactive-color="inactiveColor"
		:activeColor="activeColor"></u-tabbar>	</view>
</template>

<script>
	let _this;
	export default {
		created() {
			_this= this;
			 this.loadingUserPermissions();
			 this.loadlingNotice();
		},
		data() {
			return {
				title: '通知公告',
				subTitle: '2021-02-04',
				list:[],
				tabbar: '',
				isSwiper: false,
				border: false,
				qrCode: '',
				search: '',
				check: '',
				form: '',
				maps: '',
				col: 4,
				thumb: '',
				full:'false',
				inactiveColor: '#909399',
				activeColor: '#303133'
			}
		},
		onLoad() {
			/**
			 * 示例中为每个tabbar页面都写了一遍tabbar变量，您可以将tabbar数组写入到vuex中，这样可以全局引用
			 */
			this.tabbar = [{
					iconPath: "home",
					selectedIconPath: "home-fill",
					text: '首页',
					isDot: true,
					pagePath: "/pages/index/index"
				},
				{
					iconPath: "account",
					selectedIconPath: "account-fill",
					text: '个人中心',
					isDot: true,
					pagePath: "/pages/account/account"
				},
				
			]
			
			
		},
		methods: {
			isSwiperChange(index) {
				this.isSwiper = index == 0 ? true : false;
			},
			borderChange(index) {
				this.border = index == 0 ? true : false;
			},
			colChange(index) {
				this.col = index == 0 ? 3 : 4;
			},
			click(index) {
				// this.$refs.uToast.show({
				// 	title: `点击了第${index + 1}宫格`,
				// 	type: 'warning'
				// })
				if(index == 0){				//调用硬件扫描二维码				uni.scanCode({					//只允许通过调用相机扫码					onlyFromCamera: true,					success: function (res) {					console.log('条码类型：' + res.scanType);                    console.log('条码内容：' + res.result);
					uni.navigateTo({
							url: 'qrCode/qrCode?result='+res.result,
					});					 }					});				}else if(index == 1){
					//盘点
					uni.navigateTo({
							url: 'check/check',
					});
					
				}else if(index == 2){
					//查询
					uni.navigateTo({
							url: 'search/search',
					});
					
				}else if(index == 3){
					//表单
					uni.navigateTo({
							url: 'form/form',
					});
				}else if(index == 4){
					//地图
					uni.navigateTo({
							url: 'maps/maps',
					});
				}
			},
			contentClick(){
				//公告点击事件
				uni.navigateTo({
						url: 'content/content',
				});
			},
			change(e) {
				this.current = e.detail.current;
			},
			loadingUserPermissions(){
				//加载用户权限
				var path  = this.GLOBAL.src;
				const value = uni.getStorageSync('setUserData');//缓存中获取用户名
				var myAccount = value.username;//获取用户名
				uni.request({
				    url: path+'/api/menuByMobileUser', //接口地址
				    data: {
				        username: myAccount
				    },
				    header: {
							'content-type':'application/json',},
				    success: (res) => {
						console.log("值："+JSON.stringify(res.data));
						//设置值给对应数据
						if(res.statusCode == 200){
							for(var i = 0; i < res.data.length; i++){
							 console.log("值："+res.data[i].path);
							 var values = res.data[i].path;
							 if(values=='qrCode'){
								 this.qrCode = true;
							 }else if(values=='search'){
								 this.search = true;
							 }else if(values=='check'){
								 this.check = true;
							 }else if(values=='form'){
								 this.form = true;
							 }else if(values=='maps'){
								 this.maps = true;
							 }
							 
							 
							}
							
						}else{
							this.$refs.uTips.show({
											title: '加载失败',
											type: 'error'
										});
						}																				        
				    }
				});
			},
			loadlingNotice(){
				//加载公告信息
				var path  = this.GLOBAL.src;
				uni.request({
				    url: path+'/api/findByStatusNotice', //接口地址
				    header: {
							'content-type':'application/json',},
				    success: (res) => {
						//设置值给对应数据
						if(res.statusCode == 200){
							this.list = JSON.parse(JSON.stringify(res.data));
							this.subTitle = JSON.parse(JSON.stringify(res.data[0].publish_time));
							
						}else{
							this.$refs.uTips.show({
											title: '加载失败',
											type: 'error'
										});
						}																				        
				    }
				});
			},
			
			// 针对单个grid-item的事件
			itemClick(index) {
				 // console.log(index);
				 
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.u-card-wrap { 
		background-color: $u-bg-color;
		padding: 1px;
	}
	
	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}
		
	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}

.badge-icon {
	position: absolute;
	width: 40rpx;
	height: 40rpx;
}

.swiper {
	height: 480rpx;
}

.indicator-dots {
	margin-top: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.indicator-dots-item {
	background-color: $u-tips-color;
	height: 6px;
	width: 6px;
	border-radius: 10px;
	margin: 0 3px;
}

.indicator-dots-active {
	background-color: $u-type-primary;
}
</style>
