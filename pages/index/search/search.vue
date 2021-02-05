<template>
	<view class="">
		<u-navbar title-color="#303133" back-icon-color="#303133" 
			:is-fixed="isFixed" :is-back="isBack" 
			:back-text-style="{color: '#303133'}" 
			:back-icon-name="backIconName" :back-text="backText"
		>
			<view class="slot-wrap" v-if="useSlot">
				<view class="search-wrap" v-if="search">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search v-model="keyword" :show-action="showAction" height="56" 
					:action-style="{color: '#303133'}"></u-search>
				</view>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				backText: '返回',
				backIconName: 'nav-back',
				right: false,
				showAction: true,
				rightSlot: false,
				useSlot: true,
				isBack: true,
				search: true,
				custom: false,
				isFixed: true,
				keyword: '',
				slotRight: false,
			}
		},
		computed: {
			slotRightCurrent() {
				return this.slotRight ? 0 : 1;
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {
		//height: 200vh;
		height: calc(100% - 44px);
		height: calc(100% - 44px - constant(safe-area-inset-top));
		height: calc(100% - 44px - env(safe-area-inset-top));
	}
	
	.wrap {
		padding: 24rpx;
	}
	
	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}
	
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}
	
	.message-box {
		
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
	.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
	.map-wrap-text {
		padding: 0 6rpx;
	}
</style>

