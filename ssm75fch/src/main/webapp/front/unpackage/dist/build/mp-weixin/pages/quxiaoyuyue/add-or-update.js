(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/quxiaoyuyue/add-or-update"],{"226f":function(e,n,t){"use strict";var r=t("e4bb"),u=t.n(r);u.a},"2aee":function(e,n,t){"use strict";(function(e){t("50a7");r(t("66fd"));var n=r(t("db0f"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},5588:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("6830"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{yuyuebianhao:"",leshimingcheng:"",tupian:"",zongjiage:"",shiyongshijian:"",quxiaoshijian:"",quxiaoyuanyin:"",yonghuming:"",shouji:"",sfsh:"",shhf:"",userid:""},user:{}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function u(){var a,i,o,c;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.getStorageSync("nowTable"),u.next=3,t.$api.session(a);case 3:if(i=u.sent,t.user=i.data,t.ruleForm.yonghuming=t.user.yonghuming,t.ruleForm.shouji=t.user.shouji,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid),!n.id){u.next=15;break}return t.ruleForm.id=n.id,u.next=13,t.$api.info("quxiaoyuyue",t.ruleForm.id);case 13:i=u.sent,t.ruleForm=i.data;case 15:if(!n.cross){u.next=58;break}o=e.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 18:if((u.t1=u.t0()).done){u.next=58;break}if(c=u.t1.value,"yuyuebianhao"!=c){u.next=23;break}return t.ruleForm.yuyuebianhao=o[c],u.abrupt("continue",18);case 23:if("leshimingcheng"!=c){u.next=26;break}return t.ruleForm.leshimingcheng=o[c],u.abrupt("continue",18);case 26:if("tupian"!=c){u.next=29;break}return t.ruleForm.tupian=o[c],u.abrupt("continue",18);case 29:if("zongjiage"!=c){u.next=32;break}return t.ruleForm.zongjiage=o[c],u.abrupt("continue",18);case 32:if("shiyongshijian"!=c){u.next=35;break}return t.ruleForm.shiyongshijian=o[c],u.abrupt("continue",18);case 35:if("quxiaoshijian"!=c){u.next=38;break}return t.ruleForm.quxiaoshijian=o[c],u.abrupt("continue",18);case 38:if("quxiaoyuanyin"!=c){u.next=41;break}return t.ruleForm.quxiaoyuanyin=o[c],u.abrupt("continue",18);case 41:if("yonghuming"!=c){u.next=44;break}return t.ruleForm.yonghuming=o[c],u.abrupt("continue",18);case 44:if("shouji"!=c){u.next=47;break}return t.ruleForm.shouji=o[c],u.abrupt("continue",18);case 47:if("sfsh"!=c){u.next=50;break}return t.ruleForm.sfsh=o[c],u.abrupt("continue",18);case 50:if("shhf"!=c){u.next=53;break}return t.ruleForm.shhf=o[c],u.abrupt("continue",18);case 53:if("userid"!=c){u.next=56;break}return t.ruleForm.userid=o[c],u.abrupt("continue",18);case 56:u.next=18;break;case 58:t.styleChange();case 59:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},quxiaoshijianConfirm:function(e){console.log(e),this.ruleForm.quxiaoshijian=e.result,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.quxiaoyuanyin){n.next=3;break}return e.$utils.msg("取消原因不能为空"),n.abrupt("return");case 3:if(e.ruleForm.userid){n.next=6;break}return e.$utils.msg("用户id不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("quxiaoyuyue",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("quxiaoyuyue",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,u=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(t,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"69b0":function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"6830"))}},u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},db0f:function(e,n,t){"use strict";t.r(n);var r=t("69b0"),u=t("ea78");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("226f");var i,o=t("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"088bca5c",null,!1,r["a"],i);n["default"]=c.exports},e4bb:function(e,n,t){},ea78:function(e,n,t){"use strict";t.r(n);var r=t("5588"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a}},[["2aee","common/runtime","common/vendor"]]]);