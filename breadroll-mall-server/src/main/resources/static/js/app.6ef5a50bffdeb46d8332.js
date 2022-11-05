webpackJsonp([32],{0:function(e,t){},"75l9":function(e,t){e.exports={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},GQvZ:function(e,t){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"var";for(var n in void 0===window[t]&&(window[t]={}),e)e.hasOwnProperty(n)&&(window[t][n]=e[n])}({adminRole:"超级管理员",productRole:"商品管理员",orderRole:"订单管理员",userRole:"人事管理员",ordinaryRole:"顾客",http:"http://127.0.0.1:9999"},"VAR")},IcnI:function(e,t,n){"use strict";var r=n("7+uW"),o=n("NYxO");n("YaEn");r.default.use(o.a),t.a=new o.a.Store({state:{token:null,role:null,roleInfo:null,user:null,vipSerialNumber:null},mutations:{setToken:function(e,t){e.token=t},setRole:function(e,t){e.role=t},setRoleInfo:function(e,t){e.roleInfo=t},setUser:function(e,t){e.user=t},setVipSerialNumber:function(e,t){e.vipSerialNumber=t}},actions:{}})},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o=n("mvHQ"),a=n.n(o),i=n("woOf"),s=n.n(i),u=n("YaEn"),l={name:"App",methods:{clearInfo:function(){this.$store.commit("setToken",null),this.$store.commit("setRole",null),this.$store.commit("setUser",null),this.$store.commit("setRoleInfo",null),localStorage.clear(),u.a.replace({path:"/loginForm"})},log:function(){setTimeout(function(){console.clear(),console.log("%c 花卷买卖  %c  您的帐号存在异常行为，已被封停（请联系工作人员）  ","font-size:12px;color:#FADFA3;background-color:#030307;line-height:25px;padding:0 5px;margin:8px 0","font-size:12px;color:#030307;background-color:#FADFA3;line-height:25px;padding:0 3px"),console.log("%c 联系方式  %c 4002-106-2335 ","font-size:12px;color:white;background-color:#FF4081;line-height:25px;padding:0 5px;margin:7px 0","font-size:12px;color:white;background-color:#424242;line-height:25px;padding:0 3px")},2e3)},exit:function(e,t){var n=this;n.$http.post("/logout?key="+e+"&session="+t).then(function(r){200===r.status&&200!==r.data.code&&setTimeout(function(){n.$http.post("/logout?key="+e+"&session="+t)},1e3)}).catch(function(){setTimeout(function(){n.$http.post("/logout?key="+e+"&session="+t)},1e3)})}},created:function(){var e=this;if(localStorage.getItem("store")&&(this.$store.replaceState(s()({},this.$store.state,JSON.parse(localStorage.getItem("store")))),null!==this.$store.state.user)){var t=this.$store.state.user.accountNumber;this.$http.post("/user/existKey?key="+t).then(function(n){if(200===n.data.code)if(n.data.data)e.$http.post("/user/userState?accountNumber="+t).then(function(n){200===n.data.code&&(n.data.data?e.$http.post("/vip/existsVip?accountNumber="+t).then(function(t){if(200===t.data.code){var n=e.$store.state.user;n.isVip=t.data.data,e.$store.commit("setUser",n)}}).catch(function(t){e.$msg.error(t)}):(e.exit(t,e.$store.state.token),e.log(),e.clearInfo(),e.$msg.error("您的帐号存在异常行为，已被封停（请联系工作人员）")))}).catch(function(t){e.$msg.error(t)});else{var r=["帐号："+t,"已被注销（有疑问请联系工作人员）"],o=[],a=e.$createElement,i=0;for(i in r)r.hasOwnProperty(i)&&o.push(a("p",null,r[i]));e.$notify({title:"警告",message:a("div",null,o),type:"warning"}),e.clearInfo()}}).catch(function(t){e.$msg.error(t)})}window.addEventListener("beforeunload",function(){0!==localStorage.length?localStorage.setItem("store",a()(e.$store.state)):e.$router.push("/loginForm")})}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(l,c,!1,function(e){n("ZRLY")},null,null).exports,d=n("IcnI"),h=n("mtWM"),p=n.n(h),f=n("zL8q"),g=n.n(f);n("tvR6");var b=n("Y81h"),v=n.n(b),R=(n("UVIz"),n("uJe8"),n("Zrlr")),w=n.n(R),k=n("wxAW"),x=n.n(k),A=n("5QVw"),y=n.n(A)()("showMessage"),N=new(function(){function e(){w()(this,e)}return x()(e,[{key:"success",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("success",e,t)}},{key:"warning",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("warning",e,t)}},{key:"info",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("info",e,t)}},{key:"error",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this[y]("error",e,t)}},{key:y,value:function(e,t,n){n?0===document.getElementsByClassName("el-message").length&&f.Message[e](t):f.Message[e](t)}}]),e}()),P=n("mw3O"),$=n.n(P),O=n("vO7p"),I=n.n(O),L=n("hKoQ"),M=n.n(L),S=(n("GQvZ"),n("oPmM")),q=n.n(S),j={install:function(e){e.directive("preventReClick",{inserted:function(e,t){e.addEventListener("click",function(){e.disabled||(e.disabled=!0,setTimeout(function(){e.disabled=!1},t.value||500))})}})}},H=n("ifoU"),V=new(n.n(H).a),F={setItem:function(e,t){t=t||60,e.disabled=!0;var n=setInterval(function(){V.set(e,n),t--,e.innerHTML=t+" 秒后重发",t<=0&&(e.disabled=!1,clearInterval(n),V.delete(e),e.innerHTML="发送验证码")},1e3)},removeItem:function(e){if(e){var t=V.get(e);clearInterval(t),e.innerHTML="发送验证码",e.disabled=!1}}},U={getAge:function(e){if(!e)return 0;var t=void 0,n=e.split("-"),r=n[0],o=n[1],a=n[2],i=new Date,s=i.getFullYear(),u=i.getMonth()+1,l=i.getDate();if(s===r)t=0;else{var c=s-r;if(c>0)if(u===o)t=l-a<0?c-1:c;else t=u-o<0?c-1:c;else t=-1}return t},getUUID:function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdefghigk".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdefghigk".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},checkID:function(e){return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)},checkEmail:function(e){return/(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(e)},checkPhone:function(e){return/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(e)},checkPass:function(e){return/(^[a-zA-Z]\w{5,17}$)/.test(e)},checkMoney:function(e){return/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9](0-9)?$)/.test(e)},isEmpty:function(e){return void 0===e||null==e||""===e},repeat:function(e,t){return new Array(t+1).join(e)},beforePictureUpload:function(e){var t="image/jpeg"===e.type,n="image/gif"===e.type,r="image/png"===e.type,o="image/bmp"===e.type,a="image/webp"===e.type,i=e.size/1024/1024<5;return t||r||n||o||a||this.$message.error("上传图片只能是 JPG/PNG/GIF/BMP/WEBP 格式!"),i||this.$message.error("上传图片大小不能超过 5MB!"),(t||r||n||o||a)&&i},getNowFormatDate:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return n>=1&&n<=9&&(n="0"+n),r>=0&&r<=9&&(r="0"+r),t+"-"+n+"-"+r},getRandomInteger:function(e,t){return parseInt(Math.random()*(t-e+1)+e,10)},hideMiddle:function(e){if(!e)return"";var t=e.toString();if(t.length>10){var n=U.repeat("*",t.length-7);return t.substr(0,3)+n+t.substr(t.length-4,t.split("").length)}return t.substr(0,3)+"****"+t.substr(7,t.split("").length)},deepCope:function(e){return JSON.parse(a()(e))}},D=U;r.default.prototype.$VAR=VAR,r.default.use(q.a),n("hKoQ").polyfill(),M.a.polyfill(),r.default.use(j),r.default.prototype.$countDown=F,r.default.prototype.$tools=D,r.default.prototype.$msg=N;var E=p.a.create({timeout:3e4,baseURL:VAR.http});localStorage.getItem("satoken")&&(E.defaults.headers.satoken=localStorage.getItem("satoken")),r.default.prototype.$axios=p.a,r.default.prototype.$http=E,r.default.prototype.$qs=$.a,r.default.use(I.a),r.default.use(g.a),function(){var e=this;p.a.interceptors.request.use(function(e){return d.a.state.token&&(e.headers.token=d.a.state.token),e}),p.a.interceptors.response.use(function(t){if(200===t.status){var n=t.data;switch(n.code){case 401:d.a.commit("setToken",null),d.a.commit("setRole",null),d.a.commit("setUser",null),d.a.commit("setRoleInfo",null),localStorage.clear(),Object(f.Notification)({title:"警告",message:n.message,type:"warning"}),u.a.replace({path:"/loginForm"});break;case 403:e.$msg.warning({message:n.message,showClose:!0,duration:2e3})}}return t})}(),new r.default({el:"#app",router:u.a,store:d.a,components:{App:m},template:"<App/>"}),v.a.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3}),u.a.beforeEach(function(e,t,n){v.a.start(),e.matched.some(function(e){return e.meta.requiresAuth})&&null===d.a.state.token&&(Object(f.Notification)({title:"警告",message:"请先登录！",type:"warning"}),n({path:"/loginForm"})),e.matched.some(function(e){return e.meta.productRole})?d.a.state.role&&-1===d.a.state.role.indexOf(VAR.adminRole)&&-1===d.a.state.role.indexOf(VAR.productRole)&&n("/NoAccess"):e.matched.some(function(e){return e.meta.orderRole})?d.a.state.role&&-1===d.a.state.role.indexOf(VAR.adminRole)&&-1===d.a.state.role.indexOf(VAR.orderRole)&&n("/NoAccess"):e.matched.some(function(e){return e.meta.userRole})&&d.a.state.role&&-1===d.a.state.role.indexOf(VAR.adminRole)&&-1===d.a.state.role.indexOf(VAR.userRole)&&n("/NoAccess"),"/login"===e.path&&n({path:"/loginForm"}),"/HomePage"===e.path&&d.a.state.role&&-1!==d.a.state.role.indexOf(VAR.ordinaryRole)?"/MallHome"!==t.path?n({path:"/MallHome"}):u.a.go(0):"/MallHome"===e.path&&d.a.state.role&&-1===d.a.state.role.indexOf(VAR.ordinaryRole)?"/HomePage"!==t.path?n({path:"/HomePage"}):u.a.go(0):n()}),u.a.afterEach(function(){v.a.done()})},UVIz:function(e,t){},YaEn:function(e,t,n){"use strict";var r=n("7+uW"),o=n("/ocq");r.default.use(o.a),t.a=new o.a({routes:[{path:"/",redirect:function(){try{return-1!==JSON.parse(localStorage.getItem("store")).role.indexOf("顾客")?"/MallHome":"/HomePage"}catch(e){return"/MallHome"}}},{path:"/login",name:"Login",component:function(){return n.e(9).then(n.bind(null,"OSSM"))},children:[{path:"/loginForm",name:"登录",component:function(){return n.e(24).then(n.bind(null,"g7y8"))}},{path:"/registerForm",name:"注册",component:function(){return n.e(26).then(n.bind(null,"tBNf"))}},{path:"/forgotPassword",name:"找回密码",component:function(){return n.e(1).then(n.bind(null,"WWCg"))}}]},{path:"/home",name:"Home",component:function(){return n.e(2).then(n.bind(null,"8B5b"))},children:[{path:"/HomePage",name:"首页",component:function(){return n.e(3).then(n.bind(null,"zq07"))},meta:{requiresAuth:!0}},{path:"/MallHome",name:"商城首页",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"zzfW"))}},{path:"/MallProduct",name:"商城商品",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"nKos"))}},{path:"/MallPurchase",name:"购买商品",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"J04f"))},meta:{requiresAuth:!0,headerName:[{name:"购买商品"}]}},{path:"/MyOrder",name:"我的订单",component:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"nqId"))},meta:{requiresAuth:!0,headerName:[{name:"我的订单"}]}},{path:"/ProductList",name:"商品列表",component:function(){return n.e(4).then(n.bind(null,"HN3k"))},meta:{requiresAuth:!0,productRole:!0,headerName:[{name:"商品",url:"/ProductList"},{name:"商品列表"}]}},{path:"/ProductAdd",name:"添加商品",component:function(){return n.e(6).then(n.bind(null,"+EVV"))},meta:{requiresAuth:!0,productRole:!0,headerName:[{name:"商品",url:"/ProductList"},{name:"添加商品"}]}},{path:"/ProductType",name:"商品类别",component:function(){return n.e(15).then(n.bind(null,"UgUa"))},meta:{requiresAuth:!0,productRole:!0,headerName:[{name:"商品",url:"/ProductList"},{name:"商品类别"}]}},{path:"/ProductBrand",name:"商品品牌",component:function(){return n.e(19).then(n.bind(null,"fRfP"))},meta:{requiresAuth:!0,productRole:!0,headerName:[{name:"商品",url:"/ProductList"},{name:"商品品牌"}]}},{path:"/ProductSpecs",name:"商品规格",component:function(){return n.e(29).then(n.bind(null,"nOx3"))},meta:{requiresAuth:!0,productRole:!0,headerName:[{name:"商品",url:"/ProductList"},{name:"商品规格"}]}},{path:"/Purchase",name:"商品采购",component:function(){return n.e(25).then(n.bind(null,"Dn2r"))},meta:{requiresAuth:!0,productRole:!0,headerName:[{name:"商品",url:"/ProductList"},{name:"商品采购"}]}},{path:"/Supplier",name:"供应商管理",component:function(){return n.e(27).then(n.bind(null,"nhah"))},meta:{requiresAuth:!0,productRole:!0,headerName:[{name:"商品",url:"/ProductList"},{name:"供应商管理"}]}},{path:"/OrderList",name:"订单列表",component:function(){return n.e(12).then(n.bind(null,"DdJ0"))},meta:{requiresAuth:!0,orderRole:!0,headerName:[{name:"订单",url:"/OrderList"},{name:"订单列表"}]}},{path:"/OrderDetail",name:"订单详情",component:function(){return n.e(5).then(n.bind(null,"POLg"))},meta:{requiresAuth:!0,orderRole:!0,headerName:[{name:"订单",url:"/OrderList"},{name:"订单详情"}]}},{path:"/ReturnReason",name:"退货原因设置",component:function(){return n.e(13).then(n.bind(null,"DuFj"))},meta:{requiresAuth:!0,orderRole:!0,headerName:[{name:"订单",url:"/OrderList"},{name:"退货原因设置"}]}},{path:"/ReturnGoods",name:"退货申请处理",component:function(){return n.e(23).then(n.bind(null,"p95f"))},meta:{requiresAuth:!0,orderRole:!0,headerName:[{name:"订单",url:"/OrderList"},{name:"退货申请处理"}]}},{path:"/SlideShow",name:"商品轮播图",component:function(){return n.e(20).then(n.bind(null,"vDop"))},meta:{requiresAuth:!0,orderRole:!0,headerName:[{name:"营销",url:"/SlideShow"},{name:"商品轮播图"}]}},{path:"/AdminList",name:"管理员列表",component:function(){return n.e(28).then(n.bind(null,"X5SK"))},meta:{requiresAuth:!0,userRole:!0,headerName:[{name:"权限",url:"/AdminList"},{name:"用户列表"}]}},{path:"/UserList",name:"用户列表",component:function(){return n.e(14).then(n.bind(null,"H9Oo"))},meta:{requiresAuth:!0,userRole:!0,headerName:[{name:"权限",url:"/UserList"},{name:"用户列表"}]}},{path:"/RoleList",name:"角色列表",component:function(){return n.e(16).then(n.bind(null,"NN8W"))},meta:{requiresAuth:!0,userRole:!0,headerName:[{name:"权限",url:"/UserList"},{name:"角色列表"}]}},{path:"/personalCenter",name:"个人中心",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"UrGH"))},meta:{requiresAuth:!0,headerName:[{name:"个人中心"}]}},{path:"/changePassword",name:"修改密码",component:function(){return n.e(22).then(n.bind(null,"MCyR"))},meta:{requiresAuth:!0,headerName:[{name:"修改密码"}]}},{path:"/shoppingCart",name:"购物车",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"QwzQ"))},meta:{requiresAuth:!0,headerName:[{name:"购物车"}]}},{path:"/productReview",name:"商品评价",component:function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,"n2RZ"))},meta:{headerName:[{name:"商品评价"}]}},{path:"/NoAccess",name:"暂无权限访问",component:function(){return n.e(17).then(n.bind(null,"LRUJ"))}}]}]});var a=o.a.prototype.push;o.a.prototype.push=function(e){return a.call(this,e).catch(function(e){return e})}},ZRLY:function(e,t){},oPmM:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6ef5a50bffdeb46d8332.js.map