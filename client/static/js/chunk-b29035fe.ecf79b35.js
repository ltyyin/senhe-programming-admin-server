(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b29035fe"],{"0a8f":function(e,t,a){"use strict";a("9c80")},"29fd":function(e,t,a){"use strict";function i(e,t,a){var i,r,n,s=function(){i=setTimeout((function(){a||e.apply(r,n),clearTimeout(i),i=null}),t)};return function(){r=this,n=arguments,i?console.log("节流阀：忽略"):(console.log("节流阀：允许"),a&&e.apply(r,n),s())}}a.d(t,"a",(function(){return i}))},"50a6":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-container-wrapper"},[a("div",{staticClass:"article-container"},[a("el-form",{staticClass:"form-search",staticStyle:{width:"100%"},attrs:{inline:!0,model:e.searchFormData,size:"mini"}},[a("el-form-item",{attrs:{label:"分类名称："}},[a("el-input",{model:{value:e.searchFormData.name,callback:function(t){e.$set(e.searchFormData,"name",t)},expression:"searchFormData.name"}})],1),a("el-form-item",{attrs:{label:"公开："}},[a("el-select",{attrs:{filterable:"",clearable:""},model:{value:e.searchFormData.isPublic,callback:function(t){e.$set(e.searchFormData,"isPublic","string"===typeof t?t.trim():t)},expression:"searchFormData.isPublic"}},[a("el-option",{attrs:{label:"未公开",value:0}}),a("el-option",{attrs:{label:"公开",value:1}})],1)],1),a("el-form-item",{attrs:{label:"状态："}},[a("el-select",{attrs:{filterable:"",clearable:""},model:{value:e.searchFormData.status,callback:function(t){e.$set(e.searchFormData,"status","string"===typeof t?t.trim():t)},expression:"searchFormData.status"}},[a("el-option",{attrs:{label:"已删除",value:0}}),a("el-option",{attrs:{label:"未审核",value:1}}),a("el-option",{attrs:{label:"已通过",value:2}}),a("el-option",{attrs:{label:"未通过",value:3}})],1)],1),a("el-form-item",{staticClass:"btn-form-item"},[a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.onSubmit}},[e._v("查询")]),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"article-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.dataList.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),"highlight-current-row":"",stripe:""}},[a("el-table-column",{attrs:{label:"#",index:e.setIndex,type:"index",width:"100",align:"center"}}),a("el-table-column",{attrs:{property:"title",label:"文章标题","min-width":"100",align:"center"}}),a("el-table-column",{attrs:{property:"viewCount",label:"浏览数",align:"center","min-width":"100"}}),a("el-table-column",{attrs:{property:"thumhup",label:"点赞数",align:"center","min-width":"100"}}),a("el-table-column",{attrs:{label:"是否公开",align:"center","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-switch",{attrs:{value:1===t.isPublic,disabled:""}})]}}])}),a("el-table-column",{attrs:{label:"状态",align:"center","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[0===i.status?a("el-tag",{attrs:{type:"danger"}},[e._v("已删除")]):e._e(),1===i.status?a("el-tag",{attrs:{type:"info"}},[e._v("未审核")]):e._e(),2===i.status?a("el-tag",{attrs:{type:"success"}},[e._v("已通过")]):e._e(),3===i.status?a("el-tag",{attrs:{type:"warning"}},[e._v("未通过")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"时间",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("div",[a("i",{staticClass:"el-icon-time"}),e._v(" "+e._s(e._f("formatTime")(i.updateDate,"YYYY-MM-DD"))+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"210"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handlerSee(i)}}},[e._v("查看")]),a("el-button",{attrs:{type:"info",size:"mini",disabled:!(1===i.status),plain:""},on:{click:function(t){return e.handlerCheck(i)}}},[e._v("审核")]),a("el-button",{attrs:{type:"danger",size:"mini",disabled:0===i.status},on:{click:function(t){return e.handlerDel(i.id)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,15,20,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:"","popper-class":"drop-down-box"},on:{"current-change":e.handleCurrentChange,"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})],1),e.dialogFormVisible?a("article-edit",{attrs:{dialogFormVisible:e.dialogFormVisible,isSee:e.isSee,title:e.title,articleInfo:e.articleInfo},on:{refreshList:e.fetchArticleList,"update:dialogFormVisible":function(t){e.dialogFormVisible=t},"update:dialog-form-visible":function(t){e.dialogFormVisible=t},"update:isSee":function(t){e.isSee=t},"update:is-see":function(t){e.isSee=t}}}):e._e()],1)])},r=[],n=a("1da1"),s=(a("b0c0"),a("96cf"),a("b775"));function l(){return Object(s["a"])({url:"/articles",method:"get"})}function c(e){return Object(s["a"])({url:"/articles/query",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/articles/audit/success",method:"get",params:{id:e}})}function u(e){return Object(s["a"])({url:"/articles/audit/fail",method:"get",params:{id:e}})}function m(e){return Object(s["a"])({url:"/articles/".concat(e),method:"delete"})}var f=a("29fd"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-edit"},[a("el-dialog",{attrs:{title:e.title,visible:e.isVisible,"custom-class":"dialog-container"},on:{"update:visible":function(t){e.isVisible=t}}},[a("el-form",{attrs:{model:e.articleInfo,"label-position":"left",size:"small"}},[a("el-form-item",{attrs:{label:"标题：","label-width":e.formLabelWidth}},[a("el-input",{attrs:{value:e.articleInfo.title,autocomplete:"off",disabled:""}})],1),a("el-form-item",{attrs:{label:"标签：","label-width":e.formLabelWidth}},[a("el-select",{staticStyle:{display:"block"},attrs:{multiple:"",disabled:""},model:{value:e.articleInfo.labelIds,callback:function(t){e.$set(e.articleInfo,"labelIds",t)},expression:"articleInfo.labelIds"}})],1),a("el-form-item",{staticStyle:{"line-height":"normal"},attrs:{label:"封面图：","label-width":e.formLabelWidth}},[a("img",{staticStyle:{width:"220px",height:"120px"},attrs:{src:e.articleInfo.cover,alt:"文章封面"}})]),a("el-form-item",{attrs:{label:"是否公开：","label-width":e.formLabelWidth}},[a("el-switch",{attrs:{value:1===e.articleInfo.isPublic,disabled:""}})],1),a("el-form-item",{attrs:{label:"简介：","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",value:e.articleInfo.summary,disabled:""}})],1),a("el-form-item",{attrs:{label:"内容：","label-width":e.formLabelWidth}},[a("div",{attrs:{id:"editor"}})])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.isSee?[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.isVisible=!1}}},[e._v("确 定")])]:[a("el-button",{on:{click:function(t){return e.submitForm("fail")}}},[e._v("审核不通过")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("success")}}},[e._v("审核通过 ")])]],2)],1)],1)},b=[],h=a("6fad"),p=a.n(h),g=(a("df7c"),{name:"ArticleEdit",props:{dialogFormVisible:{type:Boolean,default:!1},title:{type:String,required:!0},articleInfo:{type:Object,required:!0},isSee:{type:Boolean,required:!0}},data:function(){return{formLabelWidth:"100px"}},computed:{isVisible:{get:function(){return this.dialogFormVisible},set:function(e){this.$emit("update:dialogFormVisible",e),this.$emit("update:isSee",!1)}}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$nextTick((function(){var t=new p.a("#editor");t.config.height=200,t.create(),t.disable(),t.txt.html(e.articleInfo.htmlContent)}));case 1:case"end":return t.stop()}}),t)})))()},watch:{isSee:{immediate:!0,handler:function(e){this.formData=e?{name:"",status:null,sort:null,remark:""}:this.editFormData}}},methods:{submitForm:function(e){var t=this;this.$confirm("确定当前提交, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(i){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("success"!==e){a.next=7;break}return a.next=3,o();case 3:r=a.sent,t.$message.success("".concat(r.message)),a.next=11;break;case 7:return a.next=9,u();case 9:n=a.sent,t.$message.success("".concat(n.message));case 11:t.$emit("refreshList"),t.isVisible=!1;case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(){t.$message({type:"info",message:"已取消提交"})}))}}}),v=g,w=(a("7034"),a("2877")),y=Object(w["a"])(v,d,b,!1,null,null,null),x=y.exports,F={name:"Article",components:{ArticleEdit:x},data:function(){return{dataList:[],total:0,currentPage:1,pageSize:10,searchFormData:{name:"",status:"",isPublic:""},isSee:!1,dialogFormVisible:!1,title:"",articleInfo:{},loading:!0}},created:function(){this.fetchArticleList()},methods:{fetchArticleList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l();case 3:a=t.sent,i=a.data,e.total=i.total,e.dataList=i.records,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},queryArticle:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={keyWord:e.searchFormData.name,status:e.searchFormData.status,isPublic:e.searchFormData.isPublic},e.currentPage=1,e.pageSize=10,t.next=5,c(a);case 5:i=t.sent,r=i.data,e.total=r.total,e.dataList=r.records;case 9:case"end":return t.stop()}}),t)})))()},setIndex:function(e){return(this.currentPage-1)*this.pageSize+e+1},onSubmit:Object(f["a"])((function(){this.searchFormData.name||""!==this.searchFormData.status||""!==this.searchFormData.isPublic?this.queryArticle():this.$message({message:"请输入或选择内容后再查询！",type:"warning"})}),2e3,!0),onReset:Object(f["a"])((function(){this.currentPage=1,this.pageSize=10,this.searchFormData.name="",this.searchFormData.status="",this.searchFormData.isPublic="",this.fetchArticleList()}),2e3,!0),handlerSee:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.articleInfo=e,t.title="查看文章",t.isSee=!0,t.dialogFormVisible=!0;case 4:case"end":return a.stop()}}),a)})))()},handlerCheck:function(e){this.articleInfo=e,this.title="审核文章",this.dialogFormVisible=!0},handlerDel:function(e){var t=this;this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,m(e);case 2:t.$message.success("删除文章成功！"),t.fetchArticleList();case 4:case"end":return a.stop()}}),a)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleCurrentChange:function(e){this.currentPage=e}}},k=F,S=(a("0a8f"),Object(w["a"])(k,i,r,!1,null,"e595ee8e",null));t["default"]=S.exports},7034:function(e,t,a){"use strict";a("bb37")},"9c80":function(e,t,a){},bb37:function(e,t,a){e.exports={menuText:"#7f7f7f",menuActiveText:"#38ceb1",subMenuActiveText:"#38ceb1",menuBg:"#fff",menuHover:"#ecf8f3",subMenuBg:"#f1f1f1",subMenuHover:"#ecf8f3",sideBarWidth:"210px"}}}]);