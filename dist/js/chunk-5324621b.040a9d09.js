(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5324621b"],{"1d94":function(t,e,a){},"3ade":function(t,e,a){},"531a":function(t,e,a){t.exports=a("bb56")},"560a":function(t,e,a){"use strict";var i=a("1d94"),s=a.n(i);s.a},"67e6":function(t,e,a){},"68f8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("div",{staticClass:"drag-drop-container",class:{"drag-has-file":t.files.length>0}},[a("form",{ref:"fileform",staticClass:"drag-drop-div",class:{"has-files":t.files.length>0}},[a("span",{on:{click:function(e){return t.openBrows()}}},[a("UserIcon",{staticClass:"folder-2",attrs:{icon:"folder.svg"}})],1),a("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),a("div",{class:{"has-file-upload-type":t.files.length>0}},[a("div",{staticClass:"drag-a-file",class:{"has-file":t.files.length>0}},[t._v("\n          Drag or\n          "),a("span",{staticClass:"text-style-1 clickable-text",on:{click:function(e){return t.openBrows()}}},[t._v("browse")]),t._v("\n          a file to upload\n        ")]),a("div",{staticClass:"you-can-use",class:{"text-left-align":t.files.length>0}},[t._v("Or you can use one of the following options:")])]),a("div",{staticClass:"store-src",class:{"none-top-margin":t.files.length>0}},[a("UserIcon",{staticClass:"store-src-item",attrs:{icon:"dropbox.svg"}}),a("UserIcon",{staticClass:"store-src-item",attrs:{icon:"google-drive.svg"}}),a("UserIcon",{staticClass:"store-src-item",attrs:{icon:"onedrive.svg"}}),a("UserIcon",{staticClass:"store-src-item",attrs:{icon:"box.svg"}})],1),a("div",{staticClass:"you-can-use",class:{"you-can-use-has-file":t.files.length>0}},[t._v("Or you can use your templates")]),a("b-button",{class:{"none-top-margin":t.files.length>0},staticStyle:{"min-width":"153px","margin-top":"10px"},attrs:{variant:"outline-primary"}},[t._v("Go to My Templates")])],1)]),a("div",{staticClass:"file-list"},[t._l(t.files,function(e,i){return a("div",{key:i,staticClass:"file-listing"},[a("div",{staticClass:"file-content"},[a("img",{staticClass:"folder-2",attrs:{src:t.getFileType(e.name)}}),a("div",{staticClass:"file-info ml-3"},[a("div",{staticClass:"doc-file-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"doc-file-info"},[t._v("5 pages")])])]),a("div",{staticClass:"file-control"},[a("i",{staticClass:"fa fa-ellipsis-h fa-lg mr-4"}),a("UserIcon",{attrs:{icon:"delete.svg",button:!0}})],1)])}),t.files.length>0?a("div",[a("div",{staticClass:"file-listing w-100"},[a("div",{staticClass:"file-content w-100"},[a("img",{staticClass:"folder-2",attrs:{src:t.getFileType(t.files[0].name)}}),a("div",{staticClass:"file-info ml-3 w-100"},[a("div",{staticClass:"doc-file-name"},[t._v("168 KB of 378 KB (56% Done)")]),a("div",{staticClass:"text-right"},[a("i",{staticClass:"cui-circle-x icons",staticStyle:{"font-size":"18px"}}),a("b-progress",{staticClass:"mt-1",attrs:{value:56,max:100}})],1)])])])]):t._e()],2)])},s=[],n=(a("ac6a"),a("d4a4")),r={name:"FileUpload",components:{UserIcon:n["a"]},props:{prop_files:Object},data:function(){return{dragAndDropCapable:!1,files:[]}},methods:{getFileType:function(t){return"img/icons/"+t.substr(t.length-3)+".svg"},determineDragAndDropCapable:function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;this.addFiles(e)},addFiles:function(t){if(t&&t.length){this.$route.path.indexOf("landing")&&this.$router.push({path:"/docu-sign/add-document",query:{withoutModal:!0,files:t}});for(var e=0;e<t.length;e++)this.files.push(t[e])}},openBrows:function(){this.$refs.file.click()}},mounted:function(){this.addFiles(this.prop_files),this.dragAndDropCapable=this.determineDragAndDropCapable(),this.dragAndDropCapable&&(["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(t){this.$refs.fileform.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation()}.bind(this),!1)}.bind(this)),this.$refs.fileform.addEventListener("drop",function(t){this.addFiles(t.dataTransfer.files)}.bind(this)))}},o=r,c=(a("871d"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},"85bf":function(t,e,a){"use strict";var i=a("67e6"),s=a.n(i);s.a},"871d":function(t,e,a){"use strict";var i=a("f06e"),s=a.n(i);s.a},a26b:function(t,e,a){"use strict";var i=a("3ade"),s=a.n(i);s.a},b521:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"fileform",staticClass:"app flex-row"},[a("div",{staticClass:"w-100 normal-sign"},[a("div",{staticClass:"profile-header"},[a("div",{staticClass:"user-happy"},[a("div",{staticClass:"avatar-tag"},[a("span",[t._v("ST")]),a("div",{staticClass:"change-avatar",on:{click:function(e){return t.changeAvatar()}}},[t._v("Change")])]),t._m(0)]),a("div",{staticClass:"user-actions"},[t._m(1),t._m(2),a("div",{staticClass:"user-plan"},[t._m(3),a("div",{staticClass:"upgrade-content"},[a("div",{staticClass:"upgrade-to"},[t._v("Upgrade to Standard plan")]),a("div",{staticClass:"comments"},[t._v("Upgrade now and enjoy additional features.")]),a("b-link",{staticClass:"click-here",on:{click:function(e){return t.upgradePlan()}}},[t._v("Click here to upgrade")])],1)])])]),a("hr",{staticClass:"mb-5"}),a("div",{staticClass:"row"},[t._e(),a("div",{staticClass:"col-md-5 pr-md-0"},[a("div",{staticClass:"content-card sign-signature"},[a("div",{staticClass:"header"},[t._v("SIGNATURE")]),a("div",{staticClass:"sign"},[t._v("Suzanne Thompson")]),a("div",{staticClass:"text-right"},[a("b-button",{staticClass:"mr-1",attrs:{variant:"link"}},[t._v("Replace")]),t._v("|\n            "),a("b-button",{staticClass:"ml-1",attrs:{variant:"link"}},[t._v("Remove")])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 pr-1"},[a("div",{staticClass:"content-card sign-signature"},[a("div",{staticClass:"header"},[t._v("INITIALS")]),a("div",{staticClass:"sign initials"},[t._v("ST")]),a("div",{staticClass:"text-right"},[a("b-button",{staticClass:"mr-1",attrs:{variant:"link"}},[t._v("Replace")]),t._v("|\n                "),a("b-button",{staticClass:"ml-1",attrs:{variant:"link"}},[t._v("Remove")])],1)])]),a("div",{staticClass:"col-6 pl-1"},[a("div",{staticClass:"content-card sign-signature"},[a("div",{staticClass:"header"},[t._v("STAMP")]),a("div",{staticClass:"stamp"},[a("b-button",{attrs:{variant:"link",block:""}},[a("UserIcon",{attrs:{icon:"upload.svg"}})],1),a("b-button",{staticClass:"upload-initials",attrs:{variant:"link",block:""}},[t._v("Upload Initials")])],1)])])])]),a("div",{staticClass:"col-md-7"},[a("FileUpload")],1)])]),a("Message"),a("b-modal",{ref:"change-avatar-modal",attrs:{id:"change-avatar-modal","hide-footer":"",centered:"",size:"xl"}},[a("div",{staticClass:"change-avatar-modal"},[a("div",{staticClass:"title"},[t._v("Change Profile Image")]),a("div",{staticClass:"img-control-btns"},[a("input",{ref:"avatar_file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.changeAvatarImg()}}},[t._v("Other Image")]),a("div",[a("i",{staticClass:"fa fa-rotate-left clickable-icon",on:{click:function(e){return t.rotate(-90)}}}),a("i",{staticClass:"fa fa-rotate-right clickable-icon mx-3",on:{click:function(e){return t.rotate(90)}}})])],1),a("vue-cropper",{ref:"cropper",staticClass:"my-4",attrs:{src:t.avatar,alt:"Source Image",cropmove:t.cropped,minContainerHeight:300}}),a("div",{staticClass:"text-center"},[a("b-button",{staticClass:"mr-3",attrs:{variant:"outline-primary"},on:{click:function(e){return t.cancelAvatar()}}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.saveAvatar()}}},[t._v("Save changes")])],1)],1)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ml-3"},[a("h1",{staticClass:"happy"},[t._v("We are happy to see you again "),a("div",[t._v("Suzanne Thompson!")])]),a("span",{staticClass:"comments"},[t._v("CoffeeSign even takes care reminding our clients!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-action"},[a("div",{staticClass:"action-numbers"},[t._v("0")]),a("div",{staticClass:"action-type"},[t._v("Action Required")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-action"},[a("div",{staticClass:"action-numbers"},[t._v("1")]),a("div",{staticClass:"action-type"},[t._v("Waiting for Others")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:"img/payment/upgrad.png"}})])}],n=a("d4a4"),r=a("68f8"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message"},[a("div",{staticClass:"message-toggle-icon",on:{click:function(e){t.chat_room=!t.chat_room}}},[t.chat_room?t._e():a("span",[a("UserIcon",{attrs:{icon:"subtraction-icon.svg"}})],1),t.chat_room?a("span",[a("UserIcon",{attrs:{icon:"close-icon.svg"}})],1):t._e()]),a("div",{staticClass:"substraction__wrap",class:t.chat_room?"active":""},[t._m(0),a("form",{staticClass:"substraction__form",attrs:{action:"#"}},[a("b-form-group",[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"fa fa-user"})])],1),a("b-form-input",{attrs:{type:"text",placeholder:"Recipient Name*"}})],1)],1),a("b-form-group",[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"fa fa-envelope"})])],1),a("b-form-input",{attrs:{type:"email",placeholder:"Email Address*",autocomplete:"email"}})],1)],1),a("b-form-group",[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"fa fa-commenting"})])],1),a("b-form-textarea",{staticClass:"email-msg",attrs:{type:"text",placeholder:"Enter Message",row:"5"}})],1)],1),a("b-button",{attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Start Chat")])],1),a("b-button",{attrs:{variant:"link",block:""}},[t._v("\n      We're by\n      "),a("b",[t._v("tawk.to")])])],1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"substraction__title"},[a("div",{staticClass:"substraction__logo"},[a("img",{attrs:{src:"img/logo_white.svg",alt:"Coffee Sign",width:"120"}})]),a("h3",{staticClass:"substraction__h3"},[t._v("Hi there! 👋")]),a("p",{staticClass:"substraction__text"},[t._v("Please fill out the form below to start chatting with the next available agent.")])])}],l={name:"Message",components:{UserIcon:n["a"]},data:function(){return{chat_room:!1}},methods:{}},d=l,u=(a("560a"),a("2877")),f=Object(u["a"])(d,o,c,!1,null,null,null),p=f.exports,h=a("531a"),g=a.n(h),v=a("95c3"),m=a.n(v),C=(a("6107"),{name:"NormalSign",components:{FileUpload:r["a"],UserIcon:n["a"],Message:p,RadialProgressBar:g.a,VueCropper:m.a},data:function(){return{cropped:null,avatar:"img/avatars/510-510.png",sections:[{label:"Red section",value:45,color:"#d4bcb2"}],completedSteps:3,totalSteps:7}},methods:{changeAvatarImg:function(){this.$refs.avatar_file.click()},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;if(e&&e.length){var a=new FileReader;a.onload=function(t){this.img_file=t.target.result,console.log(this.img_file)},a.readAsDataURL(e[0])}},rotate:function(t){this.$refs["cropper"].rotate(t)},saveAvatar:function(){this.selected_avatar=this.avatar,this.$refs["change-avatar-modal"].hide()},changeAvatar:function(){this.$refs["change-avatar-modal"].show()},cancelAvatar:function(){this.$refs["change-avatar-modal"].hide()},upgradePlan:function(){this.$router.push({path:"/payment/upgrade-plan"})}}}),b=C,_=(a("a26b"),Object(u["a"])(b,i,s,!1,null,null,null));e["default"]=_.exports},bb56:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radial-progress-container",style:t.containerStyle},[a("div",{staticClass:"radial-progress-inner",style:t.innerCircleStyle},[t._t("default")],2),a("svg",{staticClass:"radial-progress-bar",attrs:{width:t.diameter,height:t.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("defs",[a("radialGradient",{attrs:{id:"radial-gradient"+t._uid,fx:t.gradient.fx,fy:t.gradient.fy,cx:t.gradient.cx,cy:t.gradient.cy,r:t.gradient.r}},[a("stop",{attrs:{offset:"30%","stop-color":t.startColor}}),a("stop",{attrs:{offset:"100%","stop-color":t.stopColor}})],1)],1),a("circle",{style:t.strokeStyle,attrs:{r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:t.innerStrokeColor,"stroke-dasharray":t.circumference,"stroke-dashoffset":"0","stroke-linecap":"round"}}),a("circle",{style:t.progressStyle,attrs:{transform:"rotate(270, "+t.radius+","+t.radius+")",r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:"url(#radial-gradient"+t._uid+")","stroke-dasharray":t.circumference,"stroke-dashoffset":t.circumference,"stroke-linecap":"round"}})])])},s=[],n=(a("c5f6"),{props:{diameter:{type:Number,required:!1,default:200},totalSteps:{type:Number,required:!0,default:10},completedSteps:{type:Number,required:!0,default:0},startColor:{type:String,required:!1,default:"#bbff42"},stopColor:{type:String,required:!1,default:"#429321"},strokeWidth:{type:Number,required:!1,default:10},animateSpeed:{type:Number,required:!1,default:1e3},innerStrokeColor:{type:String,required:!1,default:"#323232"},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"}},data:function(){return{gradient:{fx:.99,fy:.5,cx:.5,cy:.5,r:.65},gradientAnimation:null,currentAngle:0,strokeDashoffset:0}},computed:{radius:function(){return this.diameter/2},circumference:function(){return Math.PI*this.innerCircleDiameter},stepSize:function(){return 0===this.totalSteps?0:100/this.totalSteps},finishedPercentage:function(){return this.stepSize*this.completedSteps},circleSlice:function(){return 2*Math.PI/this.totalSteps},animateSlice:function(){return this.circleSlice/this.totalPoints},innerCircleDiameter:function(){return this.diameter-2*this.strokeWidth},innerCircleRadius:function(){return this.innerCircleDiameter/2},totalPoints:function(){return this.animateSpeed/this.animationIncrements},animationIncrements:function(){return 1e3/this.fps},hasGradient:function(){return this.startColor!==this.stopColor},containerStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px")}},progressStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.strokeWidth,"px"),strokeDashoffset:this.strokeDashoffset,transition:"stroke-dashoffset ".concat(this.animateSpeed,"ms ").concat(this.timingFunc)}},strokeStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.strokeWidth,"px")}},innerCircleStyle:function(){return{width:"".concat(this.innerCircleDiameter,"px")}}},methods:{getStopPointsOfCircle:function(t){for(var e=[],a=0;a<t;a++){var i=this.circleSlice*a;e.push(this.getPointOfCircle(i))}return e},getPointOfCircle:function(t){var e=.5,a=e+e*Math.cos(t),i=e+e*Math.sin(t);return{x:a,y:i}},gotoPoint:function(){var t=this.getPointOfCircle(this.currentAngle);this.gradient.fx=t.x,this.gradient.fy=t.y},changeProgress:function(t){var e=this,a=t.isAnimate,i=void 0===a||a;if(this.strokeDashoffset=(100-this.finishedPercentage)/100*this.circumference,this.gradientAnimation&&clearInterval(this.gradientAnimation),i){var s=(this.completedSteps-1)*this.circleSlice,n=(this.currentAngle-s)/this.animateSlice,r=Math.abs(n-this.totalPoints)/this.totalPoints,o=n<this.totalPoints;this.gradientAnimation=setInterval(function(){o&&n>=e.totalPoints||!o&&n<e.totalPoints?clearInterval(e.gradientAnimation):(e.currentAngle=s+e.animateSlice*n,e.gotoPoint(),n+=o?r:-r)},this.animationIncrements)}else this.gotoNextStep()},gotoNextStep:function(){this.currentAngle=this.completedSteps*this.circleSlice,this.gotoPoint()}},watch:{totalSteps:function(){this.changeProgress({isAnimate:!0})},completedSteps:function(){this.changeProgress({isAnimate:!0})},diameter:function(){this.changeProgress({isAnimate:!0})},strokeWidth:function(){this.changeProgress({isAnimate:!0})}},created:function(){this.changeProgress({isAnimate:!1})}}),r=n,o=(a("85bf"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,null,null);e["default"]=c.exports},f06e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5324621b.040a9d09.js.map