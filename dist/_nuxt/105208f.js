(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,5,6,8,10,11,12],{303:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("21ebc45b",content,!0,{sourceMap:!1})},304:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("47860650",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},306:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:n(164),alt:"logo-img"}})])}],r={name:"app-nav-bar",components:{},data:function(){return{showModal:!1,mobile:null,mobileNav:null,windowWidth:null}},beforeMount:function(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{toggleMobileNav:function(){this.mobileNav=!this.mobileNav},checkScreen:function(){this.windowWidth=window.innerWidth,this.windowWidth<=991?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1,this.showModal=!1)}}},c=(n(314),n(37)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[t._m(0),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.mobile,expression:"!mobile"}],staticClass:"navigation"},[n("li",[n("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"link",attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)]),t._v(" "),n("div",{staticClass:"icon"},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.mobile,expression:"mobile"}],class:{"icon-active":t.mobileNav},on:{click:function(e){t.showModal=!0}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"bars"}})],1)]),t._v(" "),n("nav-modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{"close-modal":function(e){t.showModal=!1}}})],1)])}),o,!1,null,"94da76a8",null);e.default=component.exports;installComponents(component,{NavModal:n(313).default})},307:function(t,e,n){"use strict";n(303)},308:function(t,e,n){var o=n(51)(!1);o.push([t.i,'*[data-v-ba82d3e6]{font-family:"Poppins",sans-serif;color:#e1e2e2}.slide-enter-active[data-v-ba82d3e6],.slide-leave-active[data-v-ba82d3e6]{transition:transform 1s}.slide-enter[data-v-ba82d3e6],.slide-leave-to[data-v-ba82d3e6]{transform:translateX(100%)}.content-container[data-v-ba82d3e6]{background-color:#181c1e;position:fixed;top:0;left:0;height:100vh;width:100%;padding:0 60px;overflow:hidden;z-index:99}.content-container .close-btn[data-v-ba82d3e6]{background-color:#181c1e;border:none;font-size:3rem;padding:16px 40px;position:fixed;top:0;right:0}h2[data-v-ba82d3e6]{color:#e1e2e2;font-size:4rem;font-weight:500;margin:100px 0 0}li[data-v-ba82d3e6]{list-style:none;padding-top:50px}.link[data-v-ba82d3e6]{text-decoration:none;color:#65686a;font-weight:300;font-size:2.5rem}.link[data-v-ba82d3e6]:hover{color:#ff0050}',""]),t.exports=o},309:function(t,e,n){t.exports=n.p+"img/hero-contact.a525b52.jpg"},313:function(t,e,n){"use strict";n.r(e);var o={},r=(n(307),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide",appear:""}},[n("div",{staticClass:"content-container"},[n("button",{staticClass:"close-btn",on:{click:function(e){return t.$emit("close-modal")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"xmark"}})],1),t._v(" "),n("ul",{staticClass:"slide-nav"},[n("h2",[t._v("MENU")]),t._v(" "),n("li",[n("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"link",attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,"ba82d3e6",null);e.default=component.exports},314:function(t,e,n){"use strict";n(304)},315:function(t,e,n){var o=n(51)(!1);o.push([t.i,'*[data-v-94da76a8]{font-family:"Poppins",sans-serif}*[data-v-94da76a8],header[data-v-94da76a8]{color:#e1e2e2}header[data-v-94da76a8]{background-color:transparent;transition:all 1s ease}nav[data-v-94da76a8]{position:relative;display:flex;flex-direction:row;padding:12px 0;height:100px;width:100%;margin:0 auto}nav .link[data-v-94da76a8],nav ul[data-v-94da76a8]{font-weight:300;list-style:none;text-decoration:none}nav li[data-v-94da76a8]{padding:16px;margin-left:16px}nav .link[data-v-94da76a8]{font-size:1.2rem;transition:all .3s ease;padding-top:10px;border-top:2px solid transparent}nav .link[data-v-94da76a8]:hover{color:#ff0050;border-color:#ff0050}nav .logo[data-v-94da76a8]{display:flex;align-items:center}nav .logo img[data-v-94da76a8]{transition:all 1s ease;margin-left:100px}nav .navigation[data-v-94da76a8]{display:flex;align-items:center;flex:1;justify-content:flex-end;height:100%;margin-right:100px}nav i[data-v-94da76a8]{cursor:pointer;transition:all .5s ease;font-size:3rem;position:fixed;height:100px;top:0;right:-1%;padding:15px 25px;border:1px solid #65686a;background-color:#181c1e;z-index:3}',""]),t.exports=o},318:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("f5e4e82a",content,!0,{sourceMap:!1})},319:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("2bd30a16",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n.r(e);var o={props:["infoSection"]},r=(n(329),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-container"},[n("div",{staticClass:"icon-container"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.infoSection.svg}})],1),t._v(" "),n("div",{staticClass:"content"},[n("h3",[t._v(t._s(t.infoSection.name))]),t._v(" "),n("p",[t._v(t._s(t.infoSection.detail))])])])}),[],!1,null,"52a81c14",null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);var o={props:["infoDetail"]},r=(n(332),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.infoDetail.name))]),t._v(" "),n("input",{staticClass:"form-control input-height",attrs:{id:"input_"+t.infoDetail.type,type:t.infoDetail.type,required:""}})])}),[],!1,null,"28430d96",null);e.default=component.exports},328:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("760de89e",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n(318)},330:function(t,e,n){var o=n(51)(!1);o.push([t.i,'*[data-v-52a81c14]{font-family:"Poppins",sans-serif;color:#e1e2e2}.contact-container[data-v-52a81c14]{display:flex;flex-wrap:wrap;margin:30px 0 30px 100px}.icon-container[data-v-52a81c14]{height:50px;width:50px;border:3px solid #ff0050;background:linear-gradient(45deg,#ff0050 20%,rgba(255,0,80,.1) 0) bottom/160% 100%,linear-gradient(45deg,rgba(255,0,80,.1) 80%,#ff0050 0) bottom/160% 100%;text-align:center}.icon-container .icon[data-v-52a81c14]{font-size:1.2rem;margin-top:13px}.content[data-v-52a81c14]{margin-left:30px}.content h3[data-v-52a81c14]{font-size:1.2rem;font-weight:400}.content p[data-v-52a81c14]{color:#65686a}@media(max-width:991px){.icon-container[data-v-52a81c14]{height:75px;width:75px}.icon-container .icon[data-v-52a81c14]{font-size:1.8rem;margin-top:20px}h3[data-v-52a81c14]{font-size:1.5rem}p[data-v-52a81c14]{font-size:1.3rem}}',""]),t.exports=o},331:function(t,e,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("10ad4c62",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n(319)},333:function(t,e,n){var o=n(51)(!1);o.push([t.i,'*[data-v-28430d96]{font-family:"Poppins",sans-serif;color:#e1e2e2}p[data-v-28430d96]{margin:25px 0 0;font-size:.9rem;color:#65686a}.form-control[data-v-28430d96]{border:2px solid #65686a;background-color:transparent;border-radius:0}.input-height[data-v-28430d96]{height:60px}.input-height[data-v-28430d96]:focus{background:linear-gradient(45deg,#df4603 20%,rgba(223,70,3,.1) 0) bottom/165% 100%,linear-gradient(45deg,rgba(223,70,3,.1) 80%,#df4603 0) bottom/165% 100%;border-color:#df4603;box-shadow:none}@media(max-width:991px){p[data-v-28430d96]{font-size:1.5rem;font-weight:300}}',""]),t.exports=o},334:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("c2acbd2c",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n(328)},339:function(t,e,n){var o=n(51),r=n(305),c=n(309),l=n(229),d=o(!1),f=r(c),v=r(l);d.push([t.i,'*[data-v-3ec84648]{font-family:"Poppins",sans-serif;color:#e1e2e2}.contact-car[data-v-3ec84648]{background-image:url('+f+");background-repeat:no-repeat;background-size:cover;height:450px;position:relative;z-index:0}.pattern[data-v-3ec84648]{background-image:url("+v+");background-repeat:space;opacity:.05;height:450px;width:100%;top:0;left:0;position:absolute;z-index:-1}.home-content[data-v-3ec84648]{margin:100px}.heading[data-v-3ec84648]{color:#e1e2e2;font-size:4.5rem;font-weight:700;margin-bottom:0}.sub-heading[data-v-3ec84648]{font-size:2.5rem;font-weight:700;color:transparent;-webkit-text-stroke:1px #65686a}@media(max-width:991px){.contact-car[data-v-3ec84648]{background-image:url("+f+");height:800px;z-index:2}.pattern[data-v-3ec84648]{height:100%}.home-content[data-v-3ec84648]{margin-top:250px}.heading[data-v-3ec84648]{font-size:6rem}.sub-heading[data-v-3ec84648]{font-size:3.5rem}}",""]),t.exports=d},340:function(t,e,n){"use strict";n(331)},341:function(t,e,n){var o=n(51)(!1);o.push([t.i,'*[data-v-92686638]{font-family:"Poppins",sans-serif;color:#e1e2e2}.contact-details[data-v-92686638]{border-top:2px solid #65686a;background-color:#181c1e;padding:80px 0}',""]),t.exports=o},342:function(t,e,n){"use strict";n(334)},343:function(t,e,n){var o=n(51)(!1);o.push([t.i,'*[data-v-61326756]{font-family:"Poppins",sans-serif;color:#e1e2e2}.form-section[data-v-61326756]{border-top:2px solid #65686a;background-color:#181c1e;height:300px}.form-section .form-container[data-v-61326756]{border:2px solid #65686a;position:absolute;padding:50px;background:#181c1e;right:10%;top:40%;width:600px}.form-section .form-container h2[data-v-61326756]{margin:40px 0 30px}.form-section .form-container p[data-v-61326756]{margin:25px 0 0;font-size:.9rem;color:#65686a}.form-control[data-v-61326756]{border:2px solid #65686a;background-color:transparent;border-radius:0}.textarea-highlight[data-v-61326756]:focus{background:linear-gradient(45deg,#df4603 20%,rgba(223,70,3,.1) 0) bottom/185% 100%,linear-gradient(45deg,rgba(223,70,3,.1) 80%,#df4603 0) bottom/185% 100%;border-color:#df4603;box-shadow:none}.send-btn[data-v-61326756]{margin-top:20px;padding:10px 45px;color:#e1e2e2;font-size:1.1rem;border:2px solid #ff0050;background-color:rgba(255,0,80,.1);transition:all .3s;position:relative;background:linear-gradient(45deg,#ff0050 20%,rgba(255,0,80,.1) 0) bottom/160% 100%,linear-gradient(45deg,rgba(255,0,80,.1) 80%,#ff0050 0) bottom/160% 100%}.send-btn[data-v-61326756]:hover{background-color:#ff0050}@media(max-width:991px){.form-section[data-v-61326756]{height:auto}.form-section .form-container[data-v-61326756]{position:relative;top:0;right:0;width:100%}.form-section p[data-v-61326756]{font-size:1.5rem;font-weight:300}.form-section .send-btn[data-v-61326756]{font-size:1.5rem;margin-bottom:30px}}',""]),t.exports=o},350:function(t,e,n){"use strict";n.r(e);var o={name:"AppContact",components:{AppNavBar:n(306).default}},r=(n(338),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-car container-fluid",attrs:{id:"contact"}},[n("app-nav-bar"),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-content"},[n("div",{staticClass:"pattern"}),t._v(" "),n("h1",{staticClass:"heading"},[t._v("CONTACT US")]),t._v(" "),n("h2",{staticClass:"heading sub-heading"},[t._v("24/7 SUPPORT")])])}],!1,null,"3ec84648",null);e.default=component.exports;installComponents(component,{AppNavBar:n(306).default})},351:function(t,e,n){"use strict";n.r(e);var o=n(127),r={name:"AppContactDetails",components:{ContactDetail:n(326).default},data:function(){return{contactInfo:o.c}}},c=(n(340),n(37)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-details"},t._l(t.contactInfo,(function(t){return n("contact-detail",{key:t.id,attrs:{"info-section":t}})})),1)}),[],!1,null,"92686638",null);e.default=component.exports;installComponents(component,{ContactDetail:n(326).default})},352:function(t,e,n){"use strict";n.r(e);var o=n(127),r={name:"AppContactForm",components:{ContactFormInput:n(327).default},data:function(){return{formInput:o.d}}},c=(n(342),n(37)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-section"},[n("div",{staticClass:"form-container"},[n("h2",[t._v("HOW CAN WE HELP?")]),t._v(" "),n("form",{attrs:{action:"",method:"post"}},[t._l(t.formInput,(function(input){return n("contact-form-input",{key:input.id,attrs:{"info-detail":input}})})),t._v(" "),n("p",[t._v("How can we help?")]),t._v(" "),n("textarea",{staticClass:"form-control textarea-highlight",attrs:{id:"textarea",name:"text",rows:"8"}})],2),t._v(" "),n("button",{staticClass:"send-btn",attrs:{type:"submit"}},[t._v("Submit")])])])}),[],!1,null,"61326756",null);e.default=component.exports;installComponents(component,{ContactFormInput:n(327).default})},356:function(t,e,n){"use strict";n.r(e);var o=n(350),r=n(351),c=n(352),l={components:{AppContact:o.default,AppContactDetails:r.default,AppContactForm:c.default},layout:"default-page",head:function(){return{title:"Contact Us",meta:[{hid:"contact",name:"contact",content:"Best way to get in touch with us."}]}}},d=n(37),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-contact"),t._v(" "),n("app-contact-details"),t._v(" "),n("app-contact-form")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppContact:n(350).default,AppContactDetails:n(351).default,AppContactForm:n(352).default})}}]);