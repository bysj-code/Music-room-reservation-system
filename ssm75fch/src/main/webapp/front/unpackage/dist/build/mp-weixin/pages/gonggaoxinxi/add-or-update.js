(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gonggaoxinxi/add-or-update"],{"194a":function(e,n,t){"use strict";(function(e){t("50a7");r(t("66fd"));var n=r(t("8772"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},4564:function(e,n,t){},8772:function(e,n,t){"use strict";t.r(n);var r=t("c21e"),a=t("ba4e");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("ad2e");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"12367e07",null,!1,r["a"],u);n["default"]=c.exports},aa30:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){i(u,r,a,o,c,"next",e)}function c(e){i(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("6830"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{gonggaobiaoti:"",gonggaoleixing:"",tupian:"",neirong:"",faburiqi:""},user:{}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid),!n.id){a.next=13;break}return t.ruleForm.id=n.id,a.next=11,t.$api.info("gonggaoxinxi",t.ruleForm.id);case 11:u=a.sent,t.ruleForm=u.data;case 13:if(!n.cross){a.next=35;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 16:if((a.t1=a.t0()).done){a.next=35;break}if(c=a.t1.value,"gonggaobiaoti"!=c){a.next=21;break}return t.ruleForm.gonggaobiaoti=o[c],a.abrupt("continue",16);case 21:if("gonggaoleixing"!=c){a.next=24;break}return t.ruleForm.gonggaoleixing=o[c],a.abrupt("continue",16);case 24:if("tupian"!=c){a.next=27;break}return t.ruleForm.tupian=o[c],a.abrupt("continue",16);case 27:if("neirong"!=c){a.next=30;break}return t.ruleForm.neirong=o[c],a.abrupt("continue",16);case 30:if("faburiqi"!=c){a.next=33;break}return t.ruleForm.faburiqi=o[c],a.abrupt("continue",16);case 33:a.next=16;break;case 35:t.styleChange();case 36:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.gonggaobiaoti){n.next=3;break}return e.$utils.msg("公告标题不能为空"),n.abrupt("return");case 3:if(e.ruleForm.gonggaoleixing){n.next=6;break}return e.$utils.msg("公告类型不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("gonggaoxinxi",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("gonggaoxinxi",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},ad2e:function(e,n,t){"use strict";var r=t("4564"),a=t.n(r);a.a},ba4e:function(e,n,t){"use strict";t.r(n);var r=t("aa30"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},c21e:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]}},[["194a","common/runtime","common/vendor"]]]);