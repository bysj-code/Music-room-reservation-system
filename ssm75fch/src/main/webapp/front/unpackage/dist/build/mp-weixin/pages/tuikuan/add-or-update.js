(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuikuan/add-or-update"],{"39a6":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"53b1":function(e,n,t){"use strict";var r=t("e155"),u=t.n(r);u.a},a37b:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("6830"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{yuyuebianhao:"",leshimingcheng:"",zongjiage:"",tupian:"",beizhu:"",tuikuanriqi:"",yonghuming:"",shouji:"",ispay:"",userid:""},user:{}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function u(){var a,i,o,c;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.getStorageSync("nowTable"),u.next=3,t.$api.session(a);case 3:if(i=u.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid),!n.id){u.next=13;break}return t.ruleForm.id=n.id,u.next=11,t.$api.info("tuikuan",t.ruleForm.id);case 11:i=u.sent,t.ruleForm=i.data;case 13:if(!n.cross){u.next=50;break}o=e.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 16:if((u.t1=u.t0()).done){u.next=50;break}if(c=u.t1.value,"yuyuebianhao"!=c){u.next=21;break}return t.ruleForm.yuyuebianhao=o[c],u.abrupt("continue",16);case 21:if("leshimingcheng"!=c){u.next=24;break}return t.ruleForm.leshimingcheng=o[c],u.abrupt("continue",16);case 24:if("zongjiage"!=c){u.next=27;break}return t.ruleForm.zongjiage=o[c],u.abrupt("continue",16);case 27:if("tupian"!=c){u.next=30;break}return t.ruleForm.tupian=o[c],u.abrupt("continue",16);case 30:if("beizhu"!=c){u.next=33;break}return t.ruleForm.beizhu=o[c],u.abrupt("continue",16);case 33:if("tuikuanriqi"!=c){u.next=36;break}return t.ruleForm.tuikuanriqi=o[c],u.abrupt("continue",16);case 36:if("yonghuming"!=c){u.next=39;break}return t.ruleForm.yonghuming=o[c],u.abrupt("continue",16);case 39:if("shouji"!=c){u.next=42;break}return t.ruleForm.shouji=o[c],u.abrupt("continue",16);case 42:if("ispay"!=c){u.next=45;break}return t.ruleForm.ispay=o[c],u.abrupt("continue",16);case 45:if("userid"!=c){u.next=48;break}return t.ruleForm.userid=o[c],u.abrupt("continue",16);case 48:u.next=16;break;case 50:t.styleChange();case 51:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tuikuanriqiChange:function(e){this.ruleForm.tuikuanriqi=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.userid){n.next=3;break}return e.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!e.ruleForm.id){n.next=8;break}return n.next=6,e.$api.update("tuikuan",e.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,e.$api.add("tuikuan",e.ruleForm);case 10:e.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,u=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(t,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},b759:function(e,n,t){"use strict";(function(e){t("50a7");r(t("66fd"));var n=r(t("b77c"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},b77c:function(e,n,t){"use strict";t.r(n);var r=t("39a6"),u=t("c4a2");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("53b1");var i,o=t("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"0a8fccd4",null,!1,r["a"],i);n["default"]=c.exports},c4a2:function(e,n,t){"use strict";t.r(n);var r=t("a37b"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},e155:function(e,n,t){}},[["b759","common/runtime","common/vendor"]]]);