<template>
	<view>
		 <u-row class="myInfoRow">
		       <u-col span='12' style="font-size:17px">
				{{'经度：'+latitude}}
				<text>\n</text>
				{{ '纬度：'+longitude}}
				<text>\n</text>
				{{ '距家公里数：'+distance}}
		       </u-col>
		</u-row>
		 <u-row class="myInfoRow">
		       <u-col span='12'>
		         <textarea v-show="geocode" disabled=true type="primary" :value='position' placeholder="未加载出位置信息"> </textarea>
		       </u-col>
			   </u-row>
			   
	</view>
</template>

<script>
	// 引入SDK核心类
	var QQMapWX = require('../../../libs/qqmap-wx-jssdk.js');
	var qqmapsdk;
	export default {
		data() {
			return {
				latitude:'',
				longitude:'',
				position:'',
				distance:'',
				 //是否解析地址信息
				geocode:true,

			}
		},
		onLoad() {
			// 实例化API核心类
			qqmapsdk = new QQMapWX({
			        key: 'CD4BZ-EGJC6-2I2S3-E5DND-PUX63-5TBEK'
			    });
				this.getLocationInfo();//获取当前坐标及地点名称
				this.getDistance();//获取坐标间距离
		},
		methods: {
			 getAuthorizeInfo(a="scope.userLocation"){  //1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
			        var _this=this;
			        uni.authorize({
			            scope: a,
			            success() { //1.1 允许授权
			                _this.getLocationInfo();
			            },
			            fail(){    //1.2 拒绝授权
			                console.log("你拒绝了授权，无法获得周边信息")
			            }
			        })
			    },
						//点击更改坐标
			    getLocationInfo(){  //2. 获取地理位置
			        var _this=this;
			        uni.getLocation({
			            type: "gcj02",
			            success (res) {
			                let latitude,longitude;
			                latitude = res.latitude.toString();
			                longitude = res.longitude.toString();
			       //          uni.request({
			       //              header:{
			       //                  "Content-Type": "application/text"
			       //              },
			       //              url:'http://apis.map.qq.com/ws/geocoder/v1/?location='+latitude+','+longitude+'&key=CD4BZ-EGJC6-2I2S3-E5DND-PUX63-5TBEK',
			       //              success(re) {
			       //                  if(re.statusCode===200){
										// let address,name;
										// address = re.data.result.address;
			       // //                      console.log("获取中文街道地理位置成功")
										// // console.log("地址："+re.data.result.address)
										// // console.log("经度："+latitude+"纬度："+longitude)
										// console.log(re);
										// _this.latitude = latitude;
										// _this.longitude = longitude;
										// _this.position = address;

			       //                  }else{
			       //                      console.log("获取信息失败，请重试！")
			       //                  }
			       //               }
			       //          });
				   
				   qqmapsdk.reverseGeocoder({
				                  location: {
				                       latitude: latitude,
				                       longitude: longitude
				                  },
				                  get_poi: 1,
				                  poi_options: 'policy=2;radius=3000;page_size=20;page_index=1',
				                  success: function(res) {
				                       console.log(res);
				                       // that.setData({
				                       //      addressList: res.result.pois
				                       // })
									   // console.log(res.result.formatted_addresses.rough);
									   let address,detail;
									   detail = res.result.formatted_addresses.rough;
									   address = res.result.address;
									   _this.latitude = latitude;
									   _this.longitude = longitude;
									   _this.position = address+'('+detail+')';
									   
				                  },
				                  fail: function(res) {
				                       // console.log(res);
				                  },
				                  complete: function(res) {
				                       // console.log(res);
				                  }
				             });
			            }
			        });
			    },
				getDistance() {
					var _this=this;
					 qqmapsdk.calculateDistance({
					       to: [{
					        latitude: _this.latitude,
					        longitude: _this.longitude
					       }, {
					         latitude: 34.364901,
					         longitude: 107.230310
					       }],
					       success: function (res) {
					       //距离
					        var distance = res.result.elements['0'].distance;
							_this.distance = distance/1000+'公里';
					       },
					     })
					
				}
		}
		
	}
	
</script>

<style lang='css' scoped>
#myMap{
  width: 750rpx ;
}
/* 
/* 信息栏高度 */
.myInfoRow{
  height: 50px;
  padding:10px;
}	
/* 让地址栏通栏展示 */
textarea{
  width: 100%;
}
</style>
