(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userGroupon-grouponDetail"],{"01e7":function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("1070")),a=o(i("e4f8")),r=o(i("a64e")),s=o(i("79d8")),l={onShareAppMessage:function(t){return{title:"邀请团购",path:"pages/details/details?grouponId="+this.grouponId}},onLoad:function(t){this.grouponId=t.id,console.log(this.grouponId),this.getInfo()},onShow:function(){},components:{uniSteps:a.default,uniPopupDialog:s.default,uniPopup:r.default},data:function(){return{grouponId:"",groupon:{},joiners:[],orderInfo:{},orderGoods:[],rules:{},active:0,steps:[],activeIcon:"",activeColor:"",dataTest:{creator:{avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK3UIZksf3Ek8StTknlmiccNfho8XcPV3vjVVQfbqicreIqnYLpyLmlmT8CSrvYw1ibR1wuicicTKCU5Dw/132",nickname:"胖子没有肉"},groupon:{addTime:"2020-09-22 11:35:54",creatorUserId:33,creatorUserTime:"2020-09-22 11:35:54",deleted:!1,grouponId:0,id:7,orderId:316,rulesId:4,shareUrl:"https://devapis.oss-cn-zhangjiakou.aliyuncs.com/tpft4lszf5doxmg7jnkq.jpg",status:1,updateTime:"2020-09-22 11:36:18",userId:33},joiners:[{avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK3UIZksf3Ek8StTknlmiccNfho8XcPV3vjVVQfbqicreIqnYLpyLmlmT8CSrvYw1ibR1wuicicTKCU5Dw/132",nickname:"胖子没有肉"}],linkGrouponId:7,orderGoods:[{goodsId:1811093,goodsName:"python好玩又好做的三个小案例",goodsSpecificationValues:["标准"],id:311,number:1,orderId:316,picUrl:"https://devapis.oss-cn-zhangjiakou.aliyuncs.com/gyde96t49v3aa2huiux2.jpg",retailPrice:1.01}],orderInfo:{actualPrice:.01,addTime:"2020-09-22 11:35:54",address:"北京市市辖区东城区 asd",consignee:"shang",freightPrice:0,goodsPrice:.01,handleOption:{cancel:!1,delete:!1,pay:!1,comment:!1,confirm:!1,refund:!0,rebuy:!1},id:316,mobile:"13333333333",orderSn:"20200922435483",orderStatusText:"已付款"},rules:{addTime:"2020-09-21 16:19:21",deleted:!1,discount:1,discountMember:2,expireTime:"2020-09-30 00:00:00",goodsId:1811093,goodsName:"python好玩又好做的三个小案例",id:4,picUrl:"https://devapis.oss-cn-zhangjiakou.aliyuncs.com/gyde96t49v3aa2huiux2.jpg",status:0,updateTime:"2020-09-22 11:35:20"}}}},methods:{changeTag:function(t){this.tagChoose=t},getInfo:function(){var t=this;this.$request.get(n.default.grouponDetail,{grouponId:this.grouponId}).then((function(e){if(0==e.errno){var i=[{text:"已开团"},{text:"开团中"},{text:"开团成功"}],o=e.data.groupon.status,n="success",a="#07c160";3===e.data.groupon.status&&(i=[{text:"已开团"},{text:"开团中"},{text:"开团失败"}],o=2,n="fail",a="#EE0A24"),t.joiners=e.data.joiners,t.groupon=e.data.groupon,t.orderInfo=e.data.orderInfo,t.orderGoods=e.data.orderGoods,t.rules=e.data.rules,t.active=o,t.steps=i,t.activeIcon=n,t.activeColor=a}else uni.showToast({title:"".concat(e.errmsg),icon:"none",duration:1500})}))},getDetail:function(){var t=[{text:"已开团"},{text:"开团中"},{text:"开团成功"}],e=this.dataTest.groupon.status,i="success",o="#07c160";3===this.dataTest.groupon.status&&(t=[{text:"已开团"},{text:"开团中"},{text:"开团失败"}],e=2,i="fail",o="#EE0A24"),this.joiners=this.dataTest.joiners,this.groupon=this.dataTest.groupon,this.orderInfo=this.dataTest.orderInfo,this.orderGoods=this.dataTest.orderGoods,this.rules=this.dataTest.rules,this.active=e,this.steps=t,this.activeIcon=i,this.activeColor=o},open:function(){this.$refs.friend.open()},close2:function(){this.$refs.friend.close()},friendC:function(){var t=this;uni.share({provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",title:"拼团邀请",miniProgram:{id:"gh_4103648cf275",path:"pages/details/details?grouponId="+t.grouponId,type:2,webUrl:"http://uniapp.dcloud.io"},success:function(t){console.log(JSON.stringify(t))}})}}};e.default=l},"10fd":function(t,e,i){"use strict";i.r(e);var o=i("01e7"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},2313:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".uni-steps[data-v-56f12e32]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\n\n\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row[data-v-56f12e32]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column[data-v-56f12e32]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.uni-steps__row-text-container[data-v-56f12e32]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-text-container[data-v-56f12e32]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-steps__row-text[data-v-56f12e32]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__column-text[data-v-56f12e32]{padding:6px 0;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#e5e5e5;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-title[data-v-56f12e32]{font-size:%?28?%;line-height:16px;text-align:center}.uni-steps__column-title[data-v-56f12e32]{font-size:%?28?%;text-align:left;line-height:18px}.uni-steps__row-desc[data-v-56f12e32]{font-size:12px;line-height:14px;text-align:center}.uni-steps__column-desc[data-v-56f12e32]{font-size:%?24?%;text-align:left;line-height:18px}.uni-steps__row-container[data-v-56f12e32]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-steps__column-container[data-v-56f12e32]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\nwidth:30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-steps__row-line-item[data-v-56f12e32]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:14px;line-height:14px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__column-line-item[data-v-56f12e32]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-steps__row-line[data-v-56f12e32]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:1px;background-color:#999}.uni-steps__column-line[data-v-56f12e32]{width:1px;background-color:#999}.uni-steps__row-line--after[data-v-56f12e32]{-webkit-transform:translateX(1px);transform:translateX(1px)}.uni-steps__column-line--after[data-v-56f12e32]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transform:translateY(1px);transform:translateY(1px)}.uni-steps__row-line--before[data-v-56f12e32]{-webkit-transform:translateX(-1px);transform:translateX(-1px)}.uni-steps__column-line--before[data-v-56f12e32]{height:6px;-webkit-transform:translateY(-1px);transform:translateY(-1px)}.uni-steps__row-circle[data-v-56f12e32]{width:5px;height:5px;-webkit-border-radius:100px;border-radius:100px;background-color:#999;margin:0 3px}.uni-steps__column-circle[data-v-56f12e32]{width:5px;height:5px;-webkit-border-radius:100px;border-radius:100px;background-color:#999;margin:4px 0 5px 0}.uni-steps__row-check[data-v-56f12e32]{margin:0 6px}.uni-steps__column-check[data-v-56f12e32]{height:14px;line-height:14px;margin:2px 0}",""]),t.exports=e},5012:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uniIcons:i("ecaf").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-steps"},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column":"uni-steps__row"]},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"]},t._l(t.options,(function(e,o){return i("v-uni-view",{key:o,class:["column"===t.direction?"uni-steps__column-text":"uni-steps__row-text"]},[i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-title":"uni-steps__row-title"],style:{color:o<=t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.title))]),i("v-uni-text",{class:["column"===t.direction?"uni-steps__column-desc":"uni-steps__row-desc"],style:{color:o<=t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.desc))])],1)})),1),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-container":"uni-steps__row-container"]},t._l(t.options,(function(e,o){return i("v-uni-view",{key:o,class:["column"===t.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]},[i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"],style:{backgroundColor:o<=t.active&&0!==o?t.activeColor:0===o?"transparent":t.deactiveColor}}),o===t.active?i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-check":"uni-steps__row-check"]},[i("uni-icons",{attrs:{color:t.activeColor,type:"checkbox-filled",size:"14"}})],1):i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-circle":"uni-steps__row-circle"],style:{backgroundColor:o<t.active?t.activeColor:t.deactiveColor}}),i("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"],style:{backgroundColor:o<t.active&&o!==t.options.length-1?t.activeColor:o===t.options.length-1?"transparent":t.deactiveColor}})],1)})),1)],1)],1)},a=[]},"546d":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".container[data-v-bf9c3f10]{background-color:#f2f2f2;min-height:calc(100vh - 45px)}uni-view[data-v-bf9c3f10],\r\nuni-text[data-v-bf9c3f10]{font-size:%?29?%;color:#333}.dan[data-v-bf9c3f10]{font-size:12px;color:#fff;padding:3px 5px;-webkit-border-radius:3px;border-radius:3px;background-color:#e64340;margin:0 3px}.progress[data-v-bf9c3f10]{padding-top:%?25?%;background:#fff;height:auto;overflow:hidden}.item-a[data-v-bf9c3f10]{padding:0 %?21.25?%}.item-c[data-v-bf9c3f10]{margin-left:%?31.25?%;height:%?103?%;line-height:%?103?%;margin-top:5px}.item-c .l[data-v-bf9c3f10]{float:left}.item-c .r[data-v-bf9c3f10]{height:%?103?%;float:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?16?%}.item-c .btn[data-v-bf9c3f10]{float:right;line-height:%?66?%;font-size:%?30?%;-webkit-border-radius:%?5?%;border-radius:%?5?%;text-align:center;margin:0 %?15?%;padding:0 %?20?%;height:%?66?%}.item-c .btn.active[data-v-bf9c3f10]{background:#a78845;color:#fff}.order-goods[data-v-bf9c3f10]{margin-top:%?20?%;background:#fff}.order-goods .h[data-v-bf9c3f10]{height:%?93.75?%;line-height:%?93.75?%;margin-left:%?31.25?%;border-bottom:1px solid #f4f4f4;padding-right:%?31.25?%}.order-goods .h .label[data-v-bf9c3f10]{float:left;font-size:%?30?%;color:#333}.order-goods .h .status[data-v-bf9c3f10]{float:right;font-size:%?30?%;color:#b4282d}.order-goods .item[data-v-bf9c3f10]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?192?%;margin-left:%?31.25?%;padding-right:%?31.25?%;border-bottom:1px solid #f4f4f4}.order-goods .item[data-v-bf9c3f10]:last-child{border-bottom:none}.order-goods .item .img[data-v-bf9c3f10]{height:%?145.83?%;width:%?145.83?%;background:#f4f4f4}.order-goods .item .img uni-image[data-v-bf9c3f10]{height:%?145.83?%;width:%?145.83?%}.order-goods .item .info[data-v-bf9c3f10]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?145.83?%;margin-left:%?20?%}.order-goods .item .t[data-v-bf9c3f10]{margin-top:%?8?%;height:%?33?%;line-height:%?33?%;margin-bottom:%?10.5?%}.order-goods .item .t .name[data-v-bf9c3f10]{display:block;float:left;height:%?33?%;line-height:%?33?%;color:#333;font-size:%?30?%}.order-goods .item .t .number[data-v-bf9c3f10]{display:block;float:right;height:%?33?%;text-align:right;line-height:%?33?%;color:#333;font-size:%?30?%}.order-goods .item .attr[data-v-bf9c3f10]{height:%?29?%;line-height:%?29?%;color:#666;margin-bottom:%?25?%;font-size:%?25?%}.order-goods .item .price[data-v-bf9c3f10]{display:block;float:left;height:%?30?%;line-height:%?30?%;color:#333;font-size:%?30?%}.order-goods .item .btn[data-v-bf9c3f10]{height:%?50?%;line-height:%?50?%;-webkit-border-radius:%?5?%;border-radius:%?5?%;text-align:center;display:block;float:right;margin:0 %?15?%;padding:0 %?20?%}.order-goods .item .btn.active[data-v-bf9c3f10]{background:#b4282d;color:#fff}.order-bottom[data-v-bf9c3f10]{margin-top:%?20?%;padding-left:%?31.25?%;height:auto;overflow:hidden;background:#fff}.order-bottom .address[data-v-bf9c3f10]{height:%?128?%;padding-top:%?25?%;border-bottom:1px solid #f4f4f4}.order-bottom .address .t[data-v-bf9c3f10]{height:%?35?%;line-height:%?35?%;margin-bottom:%?7.5?%}.order-bottom .address .name[data-v-bf9c3f10]{display:inline-block;height:%?35?%;width:%?140?%;line-height:%?35?%;font-size:%?30?%}.order-bottom .address .mobile[data-v-bf9c3f10]{display:inline-block;height:%?35?%;line-height:%?35?%;font-size:%?30?%}.order-bottom .address .b[data-v-bf9c3f10]{height:%?35?%;line-height:%?35?%;font-size:%?30?%}.order-bottom .total[data-v-bf9c3f10]{height:%?106?%;padding-top:%?20?%;border-bottom:1px solid #f4f4f4}.order-bottom .total .t[data-v-bf9c3f10]{height:%?30?%;line-height:%?30?%;margin-bottom:%?7.5?%}.order-bottom .total .t .label[data-v-bf9c3f10]{width:%?150?%;height:%?35?%;line-height:%?35?%;font-size:%?30?%}.order-bottom .total .t .txt[data-v-bf9c3f10]{float:right;height:%?35?%;line-height:%?35?%;font-size:%?30?%;padding-right:%?31.25?%}.order-bottom .pay-fee[data-v-bf9c3f10]{height:%?81?%;line-height:%?81?%}.order-bottom .pay-fee .label[data-v-bf9c3f10]{width:%?140?%}.order-bottom .pay-fee .txt[data-v-bf9c3f10]{float:right;padding-right:%?31.25?%}.menu-list-pro[data-v-bf9c3f10]{margin-top:%?20?%;overflow-x:scroll;white-space:nowrap;text-overflow:ellipsis;height:%?260?%;width:100%;overflow:hidden;border-bottom:%?1?% #cfc9ca;background-color:#fff}.menu-list-pro .h[data-v-bf9c3f10]{height:%?93.75?%;line-height:%?93.75?%;margin-left:%?31.25?%;border-bottom:1px solid #f4f4f4;padding-right:%?31.25?%}.menu-list-pro .h .label[data-v-bf9c3f10]{float:left;font-size:%?30?%;color:#333}.menu-list-pro .h .status[data-v-bf9c3f10]{float:right;font-size:%?30?%;color:#a78845}.menu-list-pro .menu-list-item[data-v-bf9c3f10]{display:block;float:left;height:%?110?%;\r\n    /* width: 80rpx; */margin-top:%?30?%;margin-bottom:%?30?%;margin-left:%?40?%;text-align:center}.menu-list-pro .icon[data-v-bf9c3f10]{height:%?80?%;width:%?80?%;-webkit-border-radius:%?12?%;border-radius:%?12?%;-webkit-box-shadow:0 %?4?% %?4?% 0 #cfc9ca;box-shadow:0 %?4?% %?4?% 0 #cfc9ca}.menu-list-pro .txt[data-v-bf9c3f10]{display:block;\r\n    /* float: left; */\r\n    /* width: 80rpx; */margin-top:%?5?%;font-size:%?22?%;color:#a78845}",""]),t.exports=e},"6ff6":function(t,e,i){var o=i("2313");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("dc71f378",o,!0,{sourceMap:!1,shadowMode:!1})},"72d8":function(t,e,i){"use strict";var o=i("6ff6"),n=i.n(o);n.a},"74ac":function(t,e,i){"use strict";var o=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("ecaf")),a={name:"UniSteps",components:{uniIcons:n.default},props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#1aad19"},deactiveColor:{type:String,default:"#999999"},active:{type:Number,default:0},options:{type:Array,default:function(){return[]}}},data:function(){return{}}};e.default=a},"92b4":function(t,e,i){var o=i("546d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("0ee7989d",o,!0,{sourceMap:!1,shadowMode:!1})},ae9d:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uniSteps:i("e4f8").default,uniPopup:i("a64e").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"container"},[o("v-uni-view",{staticClass:"progress"},[o("v-uni-view",{staticClass:"item-a"},[o("uni-steps",{attrs:{options:[{title:"已开团"},{title:"开团中"},{title:"开团成功"}],active:t.active}})],1),1===t.groupon.status?o("v-uni-view",{staticClass:"item-c"},[o("v-uni-view",{staticClass:"l"},[t._v("开团还缺"),o("span",{staticClass:"dan"},[t._v(t._s(t.rules.discountMember-t.joiners.length))]),t._v("人")])],1):t._e()],1),o("v-uni-view",{staticClass:"menu-list-pro"},[o("v-uni-view",{staticClass:"h"},[o("v-uni-view",{staticClass:"label"},[t._v("参与团购 ( "+t._s(t.joiners.length)+"人)")]),o("v-uni-view",{staticClass:"status"},[t._v("查看全部")])],1),t._l(t.joiners,(function(e,i){return o("v-uni-view",{key:i,staticClass:"menu-list-item"},[o("v-uni-image",{staticClass:"icon",attrs:{src:e.avatar}}),o("v-uni-text",{staticClass:"txt"},[t._v(t._s(e.nickname))])],1)}))],2),o("v-uni-view",{staticClass:"order-goods"},[o("v-uni-view",{staticClass:"h"},[o("v-uni-view",{staticClass:"label"},[t._v("商品信息")])],1),o("v-uni-view",{staticClass:"goods"},t._l(t.orderGoods,(function(e,i){return o("v-uni-view",{key:i,staticClass:"item"},[o("v-uni-view",{staticClass:"img"},[o("v-uni-image",{attrs:{src:e.picUrl}})],1),o("v-uni-view",{staticClass:"info"},[o("v-uni-view",{staticClass:"t"},[o("v-uni-text",{staticClass:"name"},[t._v(t._s(e.goodsName))]),o("v-uni-text",{staticClass:"number"},[t._v("x"+t._s(e.number))])],1),o("v-uni-view",{staticClass:"attr"},[t._v(t._s(e.goodsSpecificationValues[0]))]),o("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.retailPrice))])],1)],1)})),1),o("v-uni-view",{staticClass:"order-bottom"},[o("v-uni-view",{staticClass:"total"},[o("v-uni-view",{staticClass:"t"},[o("v-uni-text",{staticClass:"label"},[t._v("商品合计：")]),o("v-uni-text",{staticClass:"txt"},[t._v("￥"+t._s(t.orderInfo.goodsPrice))])],1),o("v-uni-view",{staticClass:"t"},[o("v-uni-text",{staticClass:"label"},[t._v("商品运费：")]),o("v-uni-text",{staticClass:"txt"},[t._v("￥"+t._s(t.orderInfo.freightPrice))])],1)],1),o("v-uni-view",{staticClass:"pay-fee"},[o("v-uni-text",{staticClass:"label"},[t._v("商品实付：")]),o("v-uni-text",{staticClass:"txt"},[t._v("￥"+t._s(t.orderInfo.actualPrice))])],1)],1)],1),o("uni-popup",{ref:"friend",attrs:{type:"center"}},[o("v-uni-view",{staticClass:"box"},[o("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","text-align":"center","background-color":"#fff",padding:"1rem","border-radius":"15px"}},[o("v-uni-view",{staticStyle:{"margin-left":"0rem"}},[o("v-uni-button",{staticClass:"share-btn",staticStyle:{"background-color":"#fff",border:"0px solid rgba(0, 0, 0, 0.2) !important"},attrs:{"open-type":"share"}},[o("v-uni-image",{staticStyle:{width:"40px",height:"40px"},attrs:{src:i("d21c"),mode:""}}),o("v-uni-view",{staticStyle:{color:"#000"}},[t._v("分享到朋友")])],1)],1)],1)],1)],1)],1)},a=[]},b7c6:function(t,e,i){"use strict";i.r(e);var o=i("ae9d"),n=i("10fd");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d59b");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"bf9c3f10",null,!1,o["a"],r);e["default"]=l.exports},d21c:function(t,e,i){t.exports=i.p+"static/img/wechat.4c8070fc.png"},d59b:function(t,e,i){"use strict";var o=i("92b4"),n=i.n(o);n.a},e4f8:function(t,e,i){"use strict";i.r(e);var o=i("5012"),n=i("fe83");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("72d8");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"56f12e32",null,!1,o["a"],r);e["default"]=l.exports},fe83:function(t,e,i){"use strict";i.r(e);var o=i("74ac"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a}}]);