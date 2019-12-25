(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68808c8e"],{"3c77":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app flex-row"},[s("div",{staticClass:"w-100"},[s("h1",[t._v("Review and Send")]),s("hr",{staticClass:"mb-4"}),s("div",{staticClass:"row-content"},[s("div",{staticClass:"all-recipients"},[s("div",{staticClass:"title"},[t._v("TO: ALL RECIIENTS")]),s("b-form-group",[s("label",{staticClass:"subtitle mt-4",attrs:{for:"company"}},[t._v("\n            Email Subject\n            "),s("span",{staticClass:"text-danger"},[t._v("*")])]),s("b-form-input",{attrs:{type:"text",placeholder:"Please CoffeeSign:"}})],1),s("b-form-group",[s("label",{staticClass:"subtitle",attrs:{for:"vat"}},[t._v("Email Message")]),s("b-form-textarea",{staticClass:"email-msg",attrs:{type:"text",placeholder:"Enter Message"}})],1),s("div",{staticClass:"subtitle"},[t._v("Expiration")]),s("div",{staticClass:"d-flex align-items-center mt-3"},[s("span",[t._v("Number of days before request expire:")]),s("b-input",{staticClass:"ml-3",staticStyle:{width:"75px"},attrs:{value:"120"}})],1),t._m(0)],1),s("div",{staticClass:"col-right-pannel"},[t._m(1),s("div",{staticClass:"content-card"},[s("div",{staticClass:"title"},[t._v("RECIPIENTS")]),s("div",{staticClass:"recipients"},[t._m(2),s("div",{staticClass:"recipient-item"},[s("div",{staticClass:"recipient-number"},[t._v("2")]),s("div",{staticClass:"info"},[s("div",{staticClass:"w-100 d-flex justify-content-between flex-wrap"},[s("span",{staticClass:"subtitle"},[t._v("Barrett Nash-Williams")]),s("span",{staticClass:"ml-auto"},[s("UserIcon",{staticClass:"mr-2",attrs:{icon:"CC.svg"}}),s("span",[t._v("Receives a copy")])],1)]),s("div",{staticClass:"comments"},[t._v("barrett.nash_williams@email.com")])])]),s("div",{staticClass:"recipient-item"},[s("div",{staticClass:"recipient-number"},[t._v("3")]),s("div",{staticClass:"info"},[s("div",{staticClass:"w-100 d-flex justify-content-between flex-wrap"},[s("span",{staticClass:"subtitle"},[t._v("William Jacobson")]),s("span",{staticClass:"ml-auto"},[s("UserIcon",{staticClass:"mr-2",attrs:{icon:"In personal signer.svg"}}),s("span",[t._v("In personal signer")])],1)]),s("div",{staticClass:"comments"},[t._v("William.jacobson@email.com")])])])]),s("div",{staticClass:"comments mt-4"},[t._v("Once the envelope is completed, all recipients will receive a copy of the completed envelope.")])])])]),s("div",{staticClass:"d-flex justify-content-end flex-wrap pt-4"},[s("button",{staticClass:"btn btn-outline-primary min-width-124px m-1",on:{click:function(e){return t.moveBackPage()}}},[t._v("Back")]),s("button",{staticClass:"btn btn-primary min-width-124px m-1",on:{click:function(e){return t.moveNextPage()}}},[t._v("Send")])])]),s("b-modal",{ref:"send-modal",attrs:{id:"send-modal","hide-footer":"",centered:""}},[s("div",{staticClass:"send-modal"},[s("img",{staticClass:"mb-4",attrs:{src:"img/icons/send.svg"}}),s("div",{staticClass:"you-done"},[t._v("You're Done")]),s("div",{staticClass:"comments text-center",staticStyle:{"margin-bottom":"30px"}},[t._v("Thank You for using CoffeeSign! After all recipients finish signing, you will recieve an email with a link to the document.")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.$router.push("/payment/document-list")}}},[t._v("Go to the Home page")])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center mt-3"},[s("span",[t._v("\n            Request will be scheduled for expiration on\n            "),s("strong",[t._v("May 1, 2019")]),t._v(" at\n            "),s("strong",[t._v("6:59:59 AM")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-card"},[s("div",{staticClass:"title"},[t._v("DOCUMENTS")]),s("div",{staticClass:"mt-4"},[t._v("Continuous Improvement lorem ipsum sit dollor amet.doc")]),s("div",{staticClass:"mt-3"},[t._v("Ad cum numquam efficiantur.pdf")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recipient-item"},[s("div",{staticClass:"recipient-number"},[t._v("1")]),s("div",{staticClass:"info"},[s("div",{staticClass:"w-100 d-flex justify-content-between flex-wrap"},[s("span",{staticClass:"subtitle"},[t._v("Roger Waters")]),s("span",{staticClass:"ml-auto"},[s("i",{staticClass:"fa fa-pencil mr-2 comments"}),s("span",[t._v("Need to sign")])])]),s("div",{staticClass:"comments"},[t._v("roger.waters@email.com")])])])}],n=s("d4a4"),c={name:"Review",components:{UserIcon:n["a"]},data:function(){return{}},methods:{moveNextPage:function(){this.$refs["send-modal"].show()},moveBackPage:function(){this.$router.push("/docu-sign/prepare")},addRecipient:function(){this.recipients.push({sign_type:"Need to sign",com_type:!1,name:"",email:"",set_password:!1,password:"",confirm_password:""})},removeRecipient:function(t){this.recipients.splice(t,1)}}},o=c,r=(s("a8d1"),s("2877")),l=Object(r["a"])(o,i,a,!1,null,null,null);e["default"]=l.exports},a8d1:function(t,e,s){"use strict";var i=s("df88"),a=s.n(i);a.a},c5f6:function(t,e,s){"use strict";var i=s("7726"),a=s("69a8"),n=s("2d95"),c=s("5dbc"),o=s("6a99"),r=s("79e5"),l=s("9093").f,u=s("11e9").f,m=s("86cc").f,d=s("aa77").trim,v="Number",p=i[v],f=p,_=p.prototype,h=n(s("2aeb")(_))==v,C="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=C?e.trim():d(e,3);var s,i,a,n=e.charCodeAt(0);if(43===n||45===n){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var c,r=e.slice(2),l=0,u=r.length;l<u;l++)if(c=r.charCodeAt(l),c<48||c>a)return NaN;return parseInt(r,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof p&&(h?r(function(){_.valueOf.call(s)}):n(s)!=v)?c(new f(b(e)),s,p):b(e)};for(var g,w=s("9e1e")?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)a(f,g=w[y])&&!a(p,g)&&m(p,g,u(f,g));p.prototype=_,_.constructor=p,s("2aba")(i,v,p)}},d4a4:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("img",{class:t.button?"icon-hover":"",attrs:{src:"img/icons/"+t.icon_name},on:{mouseover:function(e){return t.hoverIcon()},mouseleave:function(e){return t.leaveIcon()}}})},a=[],n=(s("c5f6"),{name:"UserIcon",props:{button:{type:Boolean,default:!1},icon:{type:String,required:!0,default:"add-recipien"},width:{type:Number,default:18},height:{type:Number,default:18},parent_hover:{type:Boolean,default:!1}},data:function(){return{hover:!1,icon_name:this.icon,icon_only_name:this.icon.substring(0,this.icon.length-4),icon_type:this.icon.substring(this.icon.length-4),parent_event:this.parent_hover}},methods:{hoverIcon:function(){this.button&&(this.icon_name=this.icon_only_name+"_active"+this.icon_type)},leaveIcon:function(){this.button&&(this.icon_name=this.icon_only_name+this.icon_type)}},watch:{parent_event:function(t,e){console.log(t),1==t?this.hoverIcon():this.leaveIcon()}}}),c=n,o=(s("f665"),s("2877")),r=Object(o["a"])(c,i,a,!1,null,null,null);e["a"]=r.exports},d9c7:function(t,e,s){},df88:function(t,e,s){},f665:function(t,e,s){"use strict";var i=s("d9c7"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-68808c8e.aa2a376a.js.map