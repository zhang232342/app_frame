<template>
	<view class="content">
		<view>
			<u-navbar :is-back="false" title="　" :border-bottom="false">
				<view class="u-flex u-row-right" style="width: 100%;">
				</view>
			</u-navbar>
			<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" @click="clickTitle">
				<view class="u-m-r-10">
					<u-avatar :src="pic" size="140"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="u-font-18 u-p-b-20">app frame</view>
					<view class="u-font-14 u-tips-color">账号:app_frame</view>
				</view>
				<view class="u-m-l-10 u-p-10">
					<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
				</view>
			</view>
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
				</u-cell-group>
			</view>
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="star" title="收藏"></u-cell-item>
					<u-cell-item icon="photo" title="相册"></u-cell-item>
					<u-cell-item icon="coupon" title="卡券"></u-cell-item>
					<u-cell-item icon="heart" title="关注"></u-cell-item>
				</u-cell-group>
			</view>
			
			<view class="u-m-t-20">
				<u-cell-group>
					<u-cell-item icon="setting" title="设置" @click="clickSetting"></u-cell-item>
				</u-cell-group>
			</view>
		</view>
		<u-tabbar :list="tabbar" :mid-button="false"
		:inactive-color="inactiveColor"
		:activeColor="activeColor"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页',
				tabbar: '',
				inactiveColor: '#909399',
				activeColor: '#303133',
				pic:'https://uviewui.com/common/logo.png',
				show:true
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
		methods:{
			clickTitle(){
				//标题栏
				uni.navigateTo({
						url: 'person/person',
				});
			},
			clickSetting(){
				//设置
				uni.navigateTo({
						url: 'setting/setting',
				});
			}
		}
	}
</script>

<style>
page{
	background-color: #FFFFFF;
}

.camera{
	width: 54px;
	height: 44px;
}
.user-box{
	background-color: #fff;
}
</style>
