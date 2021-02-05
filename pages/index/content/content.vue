<template>
	<view class="u-content">
		<u-parse :html="content"></u-parse>
		<u-loadmore :status="status" :load-text="loadText" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: "",
				status: 'loadmore',
				show: false,
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '我也是有底线的'
								}
			}
		},
		onLoad() {
			this.status = 'loading';
			setTimeout(() => {
							this.status = 'nomore';
							this.content = `<p>要说给2020做一份总结的话，那就是去年过得确实还不错。我给自己添置了不少电子好物，科技带来美好，生活幸福感蹭蹭的上升。</p>
					<p>我买了蓝牙耳机、平板、电动牙刷、按摩仪等好物。经过一段时间使用下来，确实都还不错，今天做一下总结，顺便分享给大家，本文共分为工作好物和生活好物两部分，还请大家耐心阅读哦。</p>
					<b>先说说工作上，通勤路上有个降噪耳机，索尼大法好音质稳，办公荣耀平板V6提高工作效率，工作累就用颈椎按摩仪放松一下脖子，还有每时每刻都能喝水热水的保温垫 ，下面开始我的种草咯 。</b>
					<br>
					<b>1.Sony WF1000xm3</b>
					<br>
					<p>都说索尼大法好，我一直都很想尝试一下它的蓝牙耳机。我拿到手之后确实很满意，降噪效果名不虚传。</p>
					<p>它有着HD降噪处理器QN1e，可以主动的消除环境噪音干扰，所以不论外部环境多么复杂，你都能享受一个人的音乐时光。而且这款的续航也很强劲，搭配耳机仓可以长达32小时，充电速度也很快，绝对满足你的用电需求。</p>
					<p>它的耳机稍微有一点大，可能佩戴有点挤耳，但佩戴还是很稳当的，运动不易掉。耳机的触控操作很方便，只需要轻轻一点，就可以轻松切歌降噪，如果你需要一款降噪好耳机，那可以试试它，平时上下班通勤路上听听歌很不错。</p>
					<img src="https://pic2.zhimg.com/80/v2-134135ca6aed213aba48774e7c1902ea_720w.jpg?source=1940ef5c" width="300" align="center"/>
					<br>
					<br>
					<br>;`
						}, 500)
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(() => {
							uni.stopPullDownRefresh();
							this.content = `<p>要说给2020做一份总结的话，那就是去年过得确实还不错。我给自己添置了不少电子好物，科技带来美好，生活幸福感蹭蹭的上升。</p>
							<p>我买了蓝牙耳机、平板、电动牙刷、按摩仪等好物。经过一段时间使用下来，确实都还不错，今天做一下总结，顺便分享给大家，本文共分为工作好物和生活好物两部分，还请大家耐心阅读哦。</p>
							<b>先说说工作上，通勤路上有个降噪耳机，索尼大法好音质稳，办公荣耀平板V6提高工作效率，工作累就用颈椎按摩仪放松一下脖子，还有每时每刻都能喝水热水的保温垫 ，下面开始我的种草咯 。</b>
							<br>
							<b>1.Sony WF1000xm3</b>
							<br>
							<p>都说索尼大法好，我一直都很想尝试一下它的蓝牙耳机。我拿到手之后确实很满意，降噪效果名不虚传。</p>
							<p>它有着HD降噪处理器QN1e，可以主动的消除环境噪音干扰，所以不论外部环境多么复杂，你都能享受一个人的音乐时光。而且这款的续航也很强劲，搭配耳机仓可以长达32小时，充电速度也很快，绝对满足你的用电需求。</p>
							<p>它的耳机稍微有一点大，可能佩戴有点挤耳，但佩戴还是很稳当的，运动不易掉。耳机的触控操作很方便，只需要轻轻一点，就可以轻松切歌降噪，如果你需要一款降噪好耳机，那可以试试它，平时上下班通勤路上听听歌很不错。</p>
							<img src="https://pic2.zhimg.com/80/v2-134135ca6aed213aba48774e7c1902ea_720w.jpg?source=1940ef5c" width="300" align="center"/>
							<br>
							<br>
							<br>`
						}, 500)
		}
	}
</script>

<style lang="scss" scoped>
	.u-content {
		margin-top: 100rpx;
	}
</style>