"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[707],{1707:function(e,t,s){s.r(t),s.d(t,{default:function(){return i}});var n=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",[t("main",{attrs:{id:"main"}},[t("section",{attrs:{id:"mouseType01"}},[t("div",{staticClass:"mouse__cursor"}),t("div",{staticClass:"mouse__wrap"},[t("p",[e._v("The "),t("span",{staticClass:"style1"},[e._v("future")]),e._v(" depends on "),t("span",{staticClass:"style2"},[e._v("what we do")]),e._v(" in the "),t("span",{staticClass:"style3"},[e._v("present")])]),t("p",[t("span",{staticClass:"style4"},[e._v("미래")]),e._v("는 "),t("span",{staticClass:"style5"},[e._v("현재")]),e._v(" 우리가 "),t("span",{staticClass:"style6"},[e._v("무엇을 하는가")]),e._v("에 달려 있다.")])])]),t("div",{staticClass:"mouse__info"},[t("ul",[t("li",[e._v("clientX : "),t("span",{staticClass:"clientX"},[e._v("0")]),e._v("px")]),t("li",[e._v("clientY : "),t("span",{staticClass:"clientY"},[e._v("0")]),e._v("px")]),t("li",[e._v("offsetX: "),t("span",{staticClass:"offsetX"},[e._v("0")]),e._v("px")]),t("li",[e._v("offsetY: "),t("span",{staticClass:"offsetY"},[e._v("0")]),e._v("px")]),t("li",[e._v("pageX: "),t("span",{staticClass:"pageX"},[e._v("0")]),e._v("px")]),t("li",[e._v("pageY: "),t("span",{staticClass:"pageY"},[e._v("0")]),e._v("px")]),t("li",[e._v("screenX: "),t("span",{staticClass:"screenX"},[e._v("0")]),e._v("px")]),t("li",[e._v("screenY: "),t("span",{staticClass:"screenY"},[e._v("0")]),e._v("px")])])])])])}],r={mounted(){this.addEventListeners()},methods:{addEventListeners(){window.addEventListener("mousemove",(e=>{document.querySelector(".clientX").innerText=e.clientX,document.querySelector(".clientY").innerText=e.clientY,document.querySelector(".offsetX").innerText=e.offsetX,document.querySelector(".offsetY").innerText=e.offsetY,document.querySelector(".pageX").innerText=e.pageX,document.querySelector(".pageY").innerText=e.pageY,document.querySelector(".screenX").innerText=e.screenX,document.querySelector(".screenY").innerText=e.screenY}));const e=document.querySelector(".mouse__cursor");window.addEventListener("mousemove",(t=>{e.style.left=t.clientX-25+"px",e.style.top=t.clientY-25+"px"}));for(let s=1;s<=6;s++)document.querySelector(".style"+s).addEventListener("mouseover",(()=>{e.classList.add("style"+s)})),document.querySelector(".style"+s).addEventListener("mouseout",(()=>{e.classList.remove("style"+s)}));const t=[1,2,3,4,5,6];t.forEach((t=>{document.querySelector(".style"+t).addEventListener("mouseover",(()=>{e.classList.add("style"+t)})),document.querySelector(".style"+t).addEventListener("mouseout",(()=>{e.classList.remove("style"+t)}))})),document.querySelectorAll(".mouse__wrap span").forEach(((t,s)=>{t.addEventListener("mouseover",(()=>{e.classList.add("style"+(s+1))})),t.addEventListener("mouseout",(()=>{e.classList.remove("style"+(s+1))}))})),document.querySelectorAll(".mouse__wrap span").forEach((e=>{const t=e.getAttribute("class");e.addEventListener("mouseover",(()=>{const e=document.querySelector(".mouse__cursor");e.classList.add(t)})),e.addEventListener("mouseout",(()=>{const e=document.querySelector(".mouse__cursor");e.classList.remove(t)}))}))}}},a=r,c=s(845),l=(0,c.A)(a,n,o,!1,null,"a86805c6",null),i=l.exports}}]);
//# sourceMappingURL=707.0bec4738.js.map