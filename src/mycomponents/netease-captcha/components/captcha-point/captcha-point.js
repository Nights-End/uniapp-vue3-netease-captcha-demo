require("./../../runtime"),require("./../../common"),(my.neCaptchaJsonp=my.neCaptchaJsonp||[]).push([[7],{17:function(t,e,a){"use strict";var n,r,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},o=a(5),s=a(3),c=d(a(4)),u=a(0),p=d(a(6)),h=d(a(1));function d(t){return t&&t.__esModule?t:{default:t}}function f(t){return function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,i){try{var o=e[r](i),s=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(s).then((function(t){n("next",t)}),(function(t){n("throw",t)}));t(s)}("next")}))}}Component({mixins:[c.default],props:{captchaType:u.CAPTCHA_TYPE.POINT,loadInfo:{},verifyStatus:"",pointCaptchaClass:"",onVerify:function(){},onImageLoad:function(){}},data:{VERIFY_STATUS:u.VERIFY_STATUS,CAPTCHA_TYPE:u.CAPTCHA_TYPE,answer:"",answerBg:"",beginTime:0,pointsStack:[],clickCounts:0,traceData:[],imgRect:null},didUpdate:function(t){var e=this.props.loadInfo,a=t.loadInfo;if(e.status!==a.status)if("loading"===e.status&&this.resetPoints(),"done"===e.status){var n="";this.props.captchaType===u.CAPTCHA_TYPE.POINT&&(n=e.data.front.replace(/./g,' "$&"')),this.setData({answer:n})}else this.setData({answerBg:""})},methods:{resetPoints:function(){this.setData({pointsStack:[],imgRect:null,clickCounts:0,beginTime:0})},getImgRect:function(){var t=this;return new Promise((function(e){t.data.imgRect?e(t.data.imgRect):my.createSelectorQuery().select(".query-pointimg-"+t.data.uuid).boundingClientRect().exec((function(a){var n=a[0];t.setData({imgRect:{left:n.left,top:n.top}}),e(n)}))}))},verifyCaptcha:function(t){this.props.onVerify({data:t,type:this.props.captchaType})},handleBgImgLoaded:function(t){this.props.captchaType===u.CAPTCHA_TYPE.ICON_POINT&&this.setData({answerBg:"url("+t.url+")"}),this.props.onImageLoad(null)},handleImgLoadError:function(t){this.props.onImageLoad(i({},t))},handleImgTryError:function(t){(0,p.default)(this.store.state.config,{token:this.props.loadInfo.data.token})(t,i({},t.data))},handlePointTap:(r=f(h.default.mark((function t(e){var a,n,r,i,s,c,p,d,f;return h.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.props.verifyStatus){t.next=2;break}return t.abrupt("return");case 2:if(this.setData({clickCounts:this.data.clickCounts+1}),a=this.data.beginTime,(n=this.data.pointsStack).length||(a=Date.now()),!n.length||+e.target.targetDataset.point!=n.length-1){t.next=9;break}return this.setData({pointsStack:n.slice(0,-1)}),t.abrupt("return");case 9:if(!(n.length>=u.MAX_POINTS)){t.next=11;break}return t.abrupt("return");case 11:return r=this.props.loadInfo.data.token,i=e.detail,s=i.clientX,c=i.clientY,t.next=15,this.getImgRect();case 15:p=t.sent,d=p.left,f=p.top,d=s-d,f=c-f,this.setData({beginTime:a,pointsStack:[].concat(n,[{left:d-13,top:f-30,coord:(0,o.xor_encode)(r,[Math.round(d),Math.round(f),Date.now()-a]+"")}])}),this.shouldVerifyCaptcha();case 22:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)}),shouldVerifyCaptcha:function(){if(this.data.pointsStack.length===u.MAX_POINTS){var t=this.props.loadInfo.data.token,e=this.data.pointsStack.map((function(t){return t.coord}));this.verifyCaptcha({data:JSON.stringify({d:"",m:(0,o.eypt)((0,s.sample)(this.data.traceData,u.SAMPLE_NUM).join(":")),p:(0,o.eypt)(e.join(":")),ext:(0,o.eypt)((0,o.xor_encode)(t,this.data.clickCounts+","+this.data.traceData.length))})})}},handleTrackMoving:(n=f(h.default.mark((function t(e){var a,n,r,i,s,c,u,p;return h.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.data.beginTime){t.next=2;break}return t.abrupt("return");case 2:return a=this.props.loadInfo.data.token,t.next=5,this.getImgRect();case 5:n=t.sent,r=n.left,i=n.top,s=e.touches[0],c=s.clientX,u=s.clientY,p=(0,o.xor_encode)(a,[Math.round(c-r),Math.round(u-i),Date.now()-this.beginTime]+""),this.setData({traceData:[].concat(this.data.traceData,[p])});case 11:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}})}},[[17,1,0]]]);