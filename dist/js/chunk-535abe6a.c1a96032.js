(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-535abe6a"],{"2d26":function(t,s,e){},"419e":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app flex-row"},[e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(s){t.toggleDoc=!t.toggleDoc}}},[e("UserIcon",{attrs:{icon:"doc_2.svg",button:!0}})],1),e("div",{staticClass:"d-flex align-items-center control-actions"},[e("b-button",{staticClass:"d-none d-sm-inline",attrs:{variant:"outline-primary"},on:{click:function(s){return t.zoom_out()}}},[e("UserIcon",{attrs:{icon:"plus.svg",button:!0}})],1),e("UserSelect",{staticClass:"mb-0 mx-1 mx-md-2",attrs:{value:t.percent,items:t.zoom_list},on:{changeValue:t.changePercent}}),e("b-button",{staticClass:"d-none d-sm-inline",attrs:{variant:"outline-primary"},on:{click:function(s){return t.zoom_in()}}},[e("UserIcon",{attrs:{icon:"minus.svg",button:!0}})],1)],1),e("div",{staticClass:"d-flex align-items-center control-actions"},[e("b-button",{attrs:{variant:"outline-primary"}},[e("UserIcon",{attrs:{icon:"delete.svg",button:!0}})],1),e("b-button",{staticClass:"mx-1 mx-md-2",attrs:{variant:"outline-primary"}},[e("UserIcon",{attrs:{icon:"download_3.svg",button:!0}})],1),e("b-button",{attrs:{variant:"outline-primary"}},[e("i",{staticClass:"fa fa-print clickable-icon top-menu-icon"})])],1)],1),e("hr",{staticClass:"mb-0"}),e("div",{staticClass:"doc-pan"},[e("div",{staticClass:"doc-list",class:t.toggleDoc?"":"closed"},[e("div",{staticClass:"content-container",class:t.toggleDoc?"":"d-none"},[e("div",{staticClass:"documents"},[t._m(0),e("hr"),e("div",{staticClass:"documents-list"},[e("div",{staticClass:"document-content"},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"collapse-header item-title"},[e("span",[t._v("Continuous Improvement lorem ipsum sit dollor amet.doc")]),t._m(1)]),e("b-collapse",{staticClass:"item-pages",attrs:{id:"collapse1",visible:""}},t._l(t.numPages,function(s){return e("div",{key:s,staticClass:"page-content",on:{click:function(e){return t.selectPage(t.src,s)}}},[e("pdf",{staticClass:"pdf-content",class:s==t.viewPage?"selected-pdf":"",attrs:{src:t.src,page:s}}),e("div",{staticClass:"page-no"},[t._v(t._s(s))])],1)}),0)],1)])])])]),e("div",{staticClass:"preview-doc",class:t.toggleDoc?"":"closed"},[e("div",{staticClass:"sign-pan p-4"},[e("div",{staticClass:"content-card mb-4 mx-auto",style:{width:t.percent}},[e("span",[t._v("CoffeeSign Envoloped ID: 64343EAB33-C3234-43")]),e("pdf",{staticClass:"w-100",attrs:{src:t.viewSrc,page:t.viewPage}})],1)]),e("div",{staticClass:"text-center"},[e("b-button",{staticClass:"mr-0 mr-sm-5",attrs:{variant:"link"}},[t._v("Sign later")]),e("b-button",{staticClass:"px-2 px-sm-5",attrs:{variant:"other"},on:{click:function(s){return t.moveNextPage()}}},[t._v("Start Signing")])],1)])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("span",[t._v("DOCUMENTS")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"collapse-icon"},[e("i",{staticClass:"fa fa-caret-down"})])}],a=e("d4a4"),c=e("3b97"),o=e("858e"),r=e("310e"),l=e.n(r),u={name:"SignCheck",components:{pdf:o["a"],UserIcon:a["a"],UserSelect:c["a"],draggable:l.a},data:function(){return{toggleDoc:!0,zoom_list:["10%","20%","30%","50%","75%","100%","120%","150%","200%"],sign_items:[],percent:"100%",percent_no:4,viewSrc:null,viewPage:0,currentPage:0,pageCount:0,src:null,numPages:void 0}},mounted:function(){var t=this;this.src=o["a"].createLoadingTask("doc/1.pdf"),window.innerWidth<500&&(this.toggleDoc=!1),this.src.then(function(s){t.numPages=s.numPages,t.viewPage=1,t.viewSrc=t.src})},methods:{zoom_out:function(){this.percent_no=this.zoom_list.indexOf(this.percent),this.percent_no<8&&this.percent_no++,this.percent=this.zoom_list[this.percent_no]},zoom_in:function(){this.percent_no=this.zoom_list.indexOf(this.percent),this.percent_no>0&&this.percent_no--,this.percent=this.zoom_list[this.percent_no]},changePercent:function(t){this.percent=t},selectPage:function(t,s){this.viewPage=s,this.viewSrc=t,window.innerWidth<500&&(this.toggleDoc=!1)},moveNextPage:function(){this.$router.push("/sign/signing")}}},d=u,m=(e("955e"),e("2877")),p=Object(m["a"])(d,n,i,!1,null,null,null);s["default"]=p.exports},"955e":function(t,s,e){"use strict";var n=e("2d26"),i=e.n(n);i.a}}]);
//# sourceMappingURL=chunk-535abe6a.c1a96032.js.map