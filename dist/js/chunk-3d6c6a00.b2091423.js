(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d6c6a00"],{"0da0":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-link",{staticClass:"navbar-brand header",attrs:{to:"/landing"}},[n("img",{staticClass:"navbar-brand-full",attrs:{src:"img/logo_white.svg",width:"125",height:"41",alt:"Coffee Sign"}})])},r=[],o={name:"AppLogo"},i=o,s=n("2877"),l=Object(s["a"])(i,a,r,!1,null,null,null);t["a"]=l.exports},1534:function(e,t,n){},"1c13":function(e,t,n){"use strict";var a=n("1534"),r=n.n(a);r.a},"277d":function(e,t,n){"use strict";var a=n("b0cb"),r=n.n(a);r.a},"40c7":function(e,t,n){},"6ca7":function(e,t,n){},7788:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"app-body payment-container"},[n("AppSidebar",{attrs:{fixed:""}},[n("AppLogo"),n("div",{staticClass:"p-3 side-menu"},[n("div",{staticClass:"sidebar-auto-scoroll"},[n("b-button",{attrs:{block:"",variant:"other"},on:{click:function(t){return e.gotoStartPage()}}},[e._v("\n            "+e._s("selected"==e.getSelected("temp")?"Create Template":"Start Now")+"\n          ")]),n("b-button",{staticClass:"d-block d-sm-none",staticStyle:{"padding-top":"0.5rem"},attrs:{variant:"primary",block:""},on:{click:function(t){e.gotoPage("/payment/pricing-plan"),e.toggleSidebar()}}},[e._v("Upgrade Your Plan")]),n("div",{staticClass:"prepare-tool-nav"},[n("hr",{staticClass:"seperate-bar"}),n("SidebarNav",{attrs:{navItems:e.nav}})],1),n("hr",{staticClass:"seperate-bar"}),n("div",{staticClass:"user-sidebar-folders"},[n("SideFolders",{attrs:{folders:e.folders,layer_id:""}})],1)],1),n("Logout")],1)],1),n("main",{staticClass:"main",on:{click:e.clickMain}},[n("AppHeader",{staticClass:"pr-3"},[n("SidebarToggler",{ref:"sidebarToggleBtn",staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),n("UpgradePlan",{staticClass:"d-none d-sm-block"}),n("div",{staticClass:"your-cur-plan"},[n("span",{staticClass:"comments ml-3 mr-1"},[e._v("Your current plan:")]),n("span",[n("UserIcon",{staticClass:"mr-2",attrs:{icon:"smile.png"}}),e._v("Free\n          ")],1)]),n("div",{staticClass:"sign-doc-type"},[n("div",{staticClass:"clickable-icon mx-1 mx-1 mx-sm-2 mx-md-2 mx-lg-4",class:e.getSelected("doc"),on:{click:function(t){return e.gotoPage("/payment/document-list")}}},[e._v("DOCUMENTS")]),n("div",{staticClass:"clickable-icon mx-1 mx-sm-2 mx-md-2 mx-lg-4 ",class:e.getSelected("temp"),on:{click:function(t){return e.gotoPage("/payment/template-list")}}},[e._v("TEMPLATES")])]),n("DefaultHeaderDropdownAccnt")],1),n("div",{staticClass:"container-fluid main-container"},[n("router-view")],1)],1)],1),n("TheFooter",[n("div",[n("span",{staticClass:"ml-1"},[e._v("© 2019 CoffeeSign All rights reserved")])])]),n("b-modal",{ref:"rename-folder-modal",attrs:{id:"rename-folder-modal","hide-footer":"",centered:"",size:"md"}},[n("div",{staticClass:"rename-folder-modal"},[n("div",{staticClass:"title"},[e._v(e._s("new"==e.folder_op_type?"Create":"Rename")+" Folder")]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.folder_rename,expression:"folder_rename"}],staticClass:"form-control",attrs:{type:"text",id:"folder_rename",placeholder:"Folder Name",name:"folder_rename"},domProps:{value:e.folder_rename},on:{input:function(t){t.target.composing||(e.folder_rename=t.target.value)}}})]),n("hr"),n("b-button",{staticClass:"min-width-136px",attrs:{variant:"primary"},on:{click:function(t){return e.enterName()}}},[e._v(e._s("new"==e.folder_op_type?"Create":"Rename"))])],1)])],1)},r=[],o=(n("7f7f"),n("f1fb")),i=n("e093"),s=n("d4a4"),l=n("b8e31"),c=n("9527"),d=n("0da0"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"folder-items"},e._l(e.folders,function(t,a){return n("div",{key:a,staticClass:"folder-item"},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.layer_id+"/"+a,expression:"layer_id+'/'+index"}],staticClass:"folder-name"},[n("div",[t.children&&t.children.length>0?n("i",{staticClass:"fa fa-caret-down toggle-icon"}):e._e(),!t.children||t.children.length<=0?n("span",{staticClass:"space-div"}):e._e(),n("i",{staticClass:"fa fa-folder-open"}),e._v(" "+e._s(t.name)+"\n      ")]),n("b-dropdown",{attrs:{variant:"link",left:"","toggle-class":"text-decoration-none","no-caret":""}},[n("template",{slot:"button-content"},[n("i",{staticClass:"fa fa-ellipsis-v folder-menu"})]),n("b-dropdown-item",{on:{click:function(n){return e.rename(a,t.name)}}},[e._v("Rename")]),n("b-dropdown-item",{on:{click:function(t){return e.move(a)}}},[e._v("Move")]),n("b-dropdown-item",{on:{click:function(t){return e.remove(a)}}},[e._v("Delete")]),n("b-dropdown-item",{on:{click:function(t){return e.newFolder(a)}}},[e._v("New Subfolder")])],2)],1),t.children&&t.children.length>0?n("b-collapse",{attrs:{id:e.layer_id+"/"+a}},[n("SideFolders",{attrs:{folders:t.children,layer_id:e.layer_id+"/"+a}})],1):e._e()],1)}),0)},f=[],m={name:"SideFolders",props:{folders:{type:Array,required:!0,default:function(){return[]}},layer_id:{type:String,required:!0,default:""}},methods:{rename:function(e,t){this.$root.$emit("renameFolder",this.layer_id+"/"+e,t)},move:function(e){this.$root.$emit("moveFolder",this.layer_id+"/"+e)},remove:function(e){this.$root.$emit("removeFolder",this.layer_id,e)},newFolder:function(e){this.$root.$emit("newFolder",this.layer_id+"/"+e)}}},p=m,h=(n("1c13"),n("2877")),g=Object(h["a"])(p,u,f,!1,null,null,null),_=g.exports,v={name:"DocumentsContainer",components:{SideFolders:_,AppLogo:d["a"],Logout:c["a"],UserIcon:s["a"],UpgradePlan:l["a"],AsideToggler:o["b"],AppHeader:o["e"],AppSidebar:o["g"],AppAside:o["a"],TheFooter:o["d"],DefaultHeaderDropdownAccnt:i["a"],SidebarForm:o["i"],SidebarFooter:o["h"],SidebarToggler:o["m"],SidebarHeader:o["j"],SidebarNav:o["l"],SidebarMinimizer:o["k"]},data:function(){return{show_add_folder:!1,current_item:"",folder_rename:"",folder_remove_id:0,folder_op_type:"new",nav:[{name:"Account",url:"/profile/account",icon:"fa fa-user"},{name:"Signature",url:"/signature",icon:"fa fa-pencil"},{name:"Pricing Plan",url:"/payment/upgrade-plan",icon:"fa fa-tag"},{name:"Branding",url:"/profile/custom-branding",icon:"fa fa-id-card"}],folders:[{name:"Folders",children:[{name:"Folders",children:[{name:"Folders",children:[]}]},{name:"Folders",children:[]}]}],show_tool_menu:!0}},computed:{name:function(){return this.$route.name},list:function(){return this.$route.matched.filter(function(e){return e.name||e.meta.label})}},mounted:function(){var e=this;"/payment/document-list"==this.$router.history.current.fullPath?this.show_add_folder=!0:this.show_add_folder=!1,this.$root.$on("renameFolder",function(t,n){e.folder_rename=n,e.folder_op_type="rename",e.openRenameDialog(t)}),this.$root.$on("newFolder",function(t){e.folder_rename="New Folder",e.folder_op_type="new",e.openRenameDialog(t)}),this.$root.$on("removeFolder",function(t,n){""!=t?(e.folder_op_type="remove",e.folder_remove_id=n,e.renameFolder(e.folders,t)):alert("Could not delete root Folder!")}),this.toggleSidebar()},methods:{toggleSidebar:function(){window.innerWidth<500&&(console.log("toggled sidebar in paymentContainer"),this.$refs.sidebarToggleBtn.toggle())},renameFolder:function(e,t){var n=t.indexOf("/",1),a=parseInt(t.substr(1,n));if(n<0){var r=parseInt(t.substr(1));"rename"==this.folder_op_type?e[r].name=this.folder_rename:"new"==this.folder_op_type?(e[r].children.push({name:this.folder_rename,children:[]}),console.log(e[r])):"remove"==this.folder_op_type&&e[r].children.splice(parseInt(this.folder_remove_id),1),this.folder_rename=""}else t=t.substr(n),this.renameFolder(e[a].children,t)},enterName:function(){this.renameFolder(this.folders,this.current_item),this.$refs["rename-folder-modal"].hide()},openRenameDialog:function(e){this.current_item=e,this.$refs["rename-folder-modal"].show()},getSelected:function(e){return"doc"==e&&"/payment/document-list"==this.$router.history.current.fullPath?"selected":"temp"==e&&"/payment/template-list"==this.$router.history.current.fullPath?"selected":""},clickMain:function(e){"main"==e.target.className&&this.toggleSidebar},gotoPage:function(e){this.$router.push({path:e})},gotoStartPage:function(){this.$router.push({path:"/docu-sign/add-document",query:{withoutModal:!0}})}},watch:{$route:function(e){"/prepare"==e.fullPath?this.show_tool_menu=!0:this.show_tool_menu=!1,"/payment/document-list"==this.$router.history.current.fullPath?this.show_add_folder=!0:this.show_add_folder=!1}}},b=v,y=(n("bb07"),Object(h["a"])(b,a,r,!1,null,null,null));t["default"]=y.exports},"7f7f":function(e,t,n){var a=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&a(r,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},9527:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100"},[n("hr",{staticClass:"seperate-bar logout-seperate-bar"}),n("b-button",{staticClass:"text-left",attrs:{block:"",variant:"trans"}},[n("UserIcon",{staticClass:"mr-3",attrs:{icon:"logout_header.svg"}}),e._v("Logout\n  ")],1)],1)},r=[],o=n("d4a4"),i={name:"Logout",components:{UserIcon:o["a"]}},s=i,l=(n("ed3e"),n("2877")),c=Object(l["a"])(s,a,r,!1,null,null,null);t["a"]=c.exports},b0cb:function(e,t,n){},b8e31:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-button",{staticClass:"ml-3",attrs:{variant:"primary"},on:{click:function(t){return e.upgradePlan()}}},[e._v("Upgrade Your Plan")])},r=[],o={name:"UpgradePlan",methods:{upgradePlan:function(){this.$router.push({path:"/payment/pricing-plan"})}}},i=o,s=n("2877"),l=Object(s["a"])(i,a,r,!1,null,null,null);t["a"]=l.exports},bb07:function(e,t,n){"use strict";var a=n("40c7"),r=n.n(a);r.a},c5f6:function(e,t,n){"use strict";var a=n("7726"),r=n("69a8"),o=n("2d95"),i=n("5dbc"),s=n("6a99"),l=n("79e5"),c=n("9093").f,d=n("11e9").f,u=n("86cc").f,f=n("aa77").trim,m="Number",p=a[m],h=p,g=p.prototype,_=o(n("2aeb")(g))==m,v="trim"in String.prototype,b=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():f(t,3);var n,a,r,o=t.charCodeAt(0);if(43===o||45===o){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var i,l=t.slice(2),c=0,d=l.length;c<d;c++)if(i=l.charCodeAt(c),i<48||i>r)return NaN;return parseInt(l,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(_?l(function(){g.valueOf.call(n)}):o(n)!=m)?i(new h(b(t)),n,p):b(t)};for(var y,C=n("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)r(h,y=C[w])&&!r(p,y)&&u(p,y,d(h,y));p.prototype=g,g.constructor=p,n("2aba")(a,m,p)}},d4a4:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{class:e.button?"icon-hover":"",attrs:{src:"img/icons/"+e.icon_name},on:{mouseover:function(t){return e.hoverIcon()},mouseleave:function(t){return e.leaveIcon()}}})},r=[],o=(n("c5f6"),{name:"UserIcon",props:{button:{type:Boolean,default:!1},icon:{type:String,required:!0,default:"add-recipien"},width:{type:Number,default:18},height:{type:Number,default:18},parent_hover:{type:Boolean,default:!1}},data:function(){return{hover:!1,icon_name:this.icon,icon_only_name:this.icon.substring(0,this.icon.length-4),icon_type:this.icon.substring(this.icon.length-4),parent_event:this.parent_hover}},methods:{hoverIcon:function(){this.button&&(this.icon_name=this.icon_only_name+"_active"+this.icon_type)},leaveIcon:function(){this.button&&(this.icon_name=this.icon_only_name+this.icon_type)}},watch:{parent_event:function(e,t){console.log(e),1==e?this.hoverIcon():this.leaveIcon()}}}),i=o,s=(n("f665"),n("2877")),l=Object(s["a"])(i,a,r,!1,null,null,null);t["a"]=l.exports},d9c7:function(e,t,n){},e093:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar-nav",{staticClass:"ml-auto"},[n("AppHeaderDropdown",{staticClass:"language-selector",attrs:{right:""}},[n("template",{slot:"header"},[n("i",{staticClass:"flag-icon h5",class:e.language})]),n("template",{slot:"dropdown"},[n("b-dropdown-item",{on:{click:function(t){e.language="flag-icon-gb"}}},[n("i",{staticClass:"flag-icon flag-icon-gb"})]),n("b-dropdown-item",{on:{click:function(t){e.language="flag-icon-jp"}}},[n("i",{staticClass:"flag-icon flag-icon-jp"})]),n("b-dropdown-item",{on:{click:function(t){e.language="flag-icon-kr"}}},[n("i",{staticClass:"flag-icon flag-icon-kr"})])],1)],2),n("b-nav-item",[n("i",{staticClass:"fa fa-bell fa-lg"}),n("b-badge",{attrs:{pill:"",variant:"primary"}},[e._v("2")])],1),n("AppHeaderDropdown",{attrs:{right:"","no-caret":""}},[n("template",{slot:"header"},[n("img",{staticClass:"img-avatar",attrs:{src:"img/avatars/NoPath.png",alt:"admin@bootstrapmaster.com"}}),n("span",{staticClass:"hello"},[e._v("Hello, Suzzane!")])]),n("template",{slot:"dropdown"},[n("b-dropdown-item",{on:{click:function(t){return e.gotoPage("/profile")}}},[n("i",{staticClass:"fa fa-user"}),e._v(" Profile\n      ")]),n("b-dropdown-item",[n("i",{staticClass:"fa fa-sign-out"}),e._v(" Logout\n      ")])],1)],2)],1)},r=[],o=n("f1fb"),i={name:"DefaultHeaderDropdownAccnt",components:{AppHeaderDropdown:o["f"]},data:function(){return{itemsCount:42,language:"flag-icon-gb"}},methods:{gotoPage:function(e){this.$router.push({path:e})}}},s=i,l=(n("277d"),n("2877")),c=Object(l["a"])(s,a,r,!1,null,null,null);t["a"]=c.exports},ed3e:function(e,t,n){"use strict";var a=n("6ca7"),r=n.n(a);r.a},f665:function(e,t,n){"use strict";var a=n("d9c7"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-3d6c6a00.b2091423.js.map