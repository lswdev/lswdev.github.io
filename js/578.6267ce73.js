"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[578],{1578:function(t,i,s){s.r(i),s.d(i,{default:function(){return r}});var a=function(){var t=this,i=t._self._c;return i("div",[i("section",{staticClass:"detail-section",attrs:{id:"detail-section"},on:{wheel:t.scrolls}},[i("span",{staticClass:"detail-nav"},[i("div",{staticClass:"row cf"},[i("div",{staticClass:"three col"},[i("div",{staticClass:"hamburger",attrs:{id:"hamburger"},on:{click:t.navList}},[i("span",{staticClass:"line"}),i("span",{staticClass:"line"}),i("span",{staticClass:"line"})])])]),t.toggleNav?i("ul",{staticClass:"nav-list",staticStyle:{color:"#FFF"}},[i("li",[t._v("introduce")]),i("li",[t._v("skill")]),i("li",[t._v("careers")])]):t._e()]),i("div",{ref:"detailContain1",staticClass:"main-top-contain detail-contain",staticStyle:{"border-bottom":"1px solid red"},attrs:{id:"detail-contain1"}},[t._m(0),i("span",{staticClass:"avatar-label"},[t._v("Developer")]),i("img",{staticClass:"mouse-scroll",attrs:{src:s(8925),alt:""}})]),i("div",{ref:"detailContain2",staticClass:"main-top-contain detail-contain",attrs:{id:"detail-contain2"}},[t._m(1)]),i("div",{ref:"detailContain3",staticClass:"main-top-contain detail-contain",attrs:{id:"detail-contain3"}},[t._m(2)]),i("div",{ref:"detailContain4",staticClass:"main-top-contain detail-contain",attrs:{id:"detail-contain4"}},[t._m(3)])])])},o=[function(){var t=this,i=t._self._c;return i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"my-avatar"},[t._v("이시우"),i("br"),t._v("1997. 02. 28"),i("br"),t._v("Lee Siwoo")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"intro-detail"},[i("div",{staticClass:"login"},[i("h2",[t._v("Login2")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"intro-detail"},[i("div",{staticClass:"login"},[i("h2",[t._v("Login3")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"intro-detail"},[i("div",{staticClass:"login"},[i("h2",[t._v("Login4")])])])}],n={data:()=>({windowTop:window.top.scrollY,windowHeight:null,toggleNav:!1}),mounted(){window.scrollTo(0,0)},created(){this.initTop()},methods:{initTop(){window.scrollTo(0,0)},scrolls(t){this.windowTop=window.top.scrollY;const i=document.getElementById("detail-section");t.wheelDelta<0?(console.log("this.windowTop",this.windowTop),(this.windowTop>=0||this.windowTop>=200)&&window.$(".mouse-scroll").css("opacity","0"),t.target.id===`detail-contain${i.children.length}`&&t.preventDefault()):this.windowTop>0&&this.windowTop<800&&window.$(".mouse-scroll").css("opacity","")},navList(){window.$(".hamburger").toggleClass("is-active"),this.toggleNav=!this.toggleNav}}},l=n,e=s(845),c=(0,e.A)(l,a,o,!1,null,null,null),r=c.exports},8925:function(t,i,s){t.exports=s.p+"img/mouse-cursor-lg.8287e7ae.png"}}]);
//# sourceMappingURL=578.6267ce73.js.map