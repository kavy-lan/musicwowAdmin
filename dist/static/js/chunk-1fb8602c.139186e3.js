(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fb8602c","chunk-3a02a23b","chunk-790a2e2e"],{"0512":function(e,t,a){"use strict";var i=a("503e"),l=a.n(i);l.a},"242c":function(e,t,a){"use strict";var i=a("3b0a"),l=a.n(i);l.a},3123:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("b775");function l(){return Object(i["a"])({url:"/qiniu/upload/token",method:"get"})}},"3b0a":function(e,t,a){},4237:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"授权用户",visible:e.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"left"},[a("div",[a("label",[e._v("用户名:")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名，字数最多20字内(必选)",maxlength:"20"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),a("div",[a("label",[e._v("用户手机:")]),e._v(" "),a("el-select",{staticClass:"el-selete",attrs:{placeholder:"请选择区号"},model:{value:e.areaValue,callback:function(t){e.areaValue=t},expression:"areaValue"}},e._l(e.areaCode,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码(必选)",maxlength:"11"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),a("div",[a("label",{staticClass:"uploadLabel"},[e._v("用户头像:")]),e._v(" "),a("single-image",{attrs:{msg:"图片小于1M，格式为jpg、png(必选)",type:".jpg,.png",size:"1048576",limit:1},on:{files:e.file}})],1),e._v(" "),a("div",[a("label",{staticStyle:{"vertical-align":"top"}},[e._v("备注信息:")]),e._v(" "),a("el-input",{staticClass:"input textarea",attrs:{placeholder:"请输入授权教材备注信息，字数最多300字内",type:"textarea",maxlength:"300"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)]),e._v(" "),a("div",{staticStyle:{display:"none"}},[e._v(e._s(e.sum))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"success",disabled:e.Exist},on:{click:e.addA}},[e._v("确 定")])],1)])},l=[],s=(a("c5f6"),a("70a2")),n=a("83a2"),o=a("5c96"),c={components:{SingleImage:s["a"]},props:["dialogVisible"],data:function(){return{dialogVisibleii:this.dialogVisible,username:"",mobile:"",remark:"",img:"",ifExist:0,Exist:!0,areaCode:[{value:86,label:"大陆 + 86"},{value:852,label:"香港 + 852"},{value:853,label:"澳门 + 853"},{value:886,label:"台湾 + 886"}],areaValue:""}},computed:{sum:function(){this.ifExist=Number(Boolean(this.username))+Number(Boolean(this.mobile))+Number(Boolean(this.areaValue))+Number(Boolean(this.img))}},watch:{ifExist:function(e,t){4==Number(e)?this.Exist=!1:this.Exist=!0}},methods:{close:function(){this.$emit("close",!1)},file:function(e){e.length>0?this.img=e[0].url:this.img=""},handleClose:function(){this.$emit("close",!1)},addA:function(){var e=this;return new Promise((function(t,a){Object(n["b"])(e.username,e.areaValue,e.mobile,e.remark,e.img).then((function(t){console.log(t),0==t.error_code&&Object(o["Message"])({message:"添加成功",type:"success",duration:5e3}),e.$emit("close",!0)})).catch((function(e){a(e)}))}))}}},r=c,u=(a("8477"),a("242c"),a("2877")),d=Object(u["a"])(r,i,l,!1,null,"e25ed7e6",null);t["default"]=d.exports},"4f9b":function(e,t,a){},"503e":function(e,t,a){},5185:function(e,t,a){},5199:function(e,t,a){},"831b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"授权用户",visible:e.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"left"},[a("div",[a("label",[e._v("用户名:")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名，字数最多20字内(必选)",maxlength:"20"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),a("div",[a("label",[e._v("用户手机:")]),e._v(" "),a("el-select",{staticClass:"el-selete",attrs:{placeholder:"请选择区号"},model:{value:e.areaValue,callback:function(t){e.areaValue=t},expression:"areaValue"}},e._l(e.areaCode,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码(必选)",maxlength:"11"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),a("div",[a("label",{staticClass:"uploadLabel"},[e._v("用户头像:")]),e._v(" "),a("single-image",{attrs:{msg:"图片小于1M，格式为jpg、png(必选)",type:".jpg,.png",size:"1048576",limit:1,filelist:e.head_list},on:{files:e.file}})],1),e._v(" "),a("div",[a("label",{staticStyle:{"vertical-align":"top"}},[e._v("备注信息:")]),e._v(" "),a("el-input",{staticClass:"input textarea",attrs:{placeholder:"请输入授权教材备注信息，字数最多300字内",type:"textarea",maxlength:"300"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)]),e._v(" "),a("div",{staticStyle:{display:"none"}},[e._v(e._s(e.sum))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"success",disabled:e.Exist},on:{click:e.addA}},[e._v("确 定")])],1)])},l=[],s=(a("c5f6"),a("70a2")),n=a("83a2"),o=a("5c96"),c={components:{SingleImage:s["a"]},props:["dialogVisible","id"],data:function(){return{dialogVisibleii:this.dialogVisible,username:"",mobile:"",remark:"",img:"",ifExist:0,Exist:!0,areaCode:[{value:"86",label:"大陆 + 86"},{value:"852",label:"香港 + 852"},{value:"853",label:"澳门 + 853"},{value:"886",label:"台湾 + 886"}],areaValue:"",head_list:[]}},computed:{sum:function(){this.ifExist=Number(Boolean(this.username))+Number(Boolean(this.mobile))+Number(Boolean(this.areaValue))+Number(Boolean(this.img))}},watch:{ifExist:function(e,t){4==Number(e)?this.Exist=!1:this.Exist=!0}},mounted:function(){this.getDetail(this.id)},methods:{close:function(){this.$emit("close",!1)},file:function(e){e.length>0?this.img=e[0].url:this.img=""},handleClose:function(){this.$emit("close",!1)},addA:function(){var e=this;return new Promise((function(t,a){Object(n["e"])(e.id,e.username,e.areaValue,e.mobile,e.remark,e.img).then((function(t){console.log(t),0==t.error_code&&Object(o["Message"])({message:"编辑成功",type:"success",duration:5e3}),e.$emit("close",!0)})).catch((function(e){a(e)}))}))},getDetail:function(e){var t=this;return new Promise((function(a,i){Object(n["f"])(e).then((function(e){if(0==e.error_code){var a=e.data;t.remark=a.remark,t.username=a.username,t.mobile=a.mobile,t.head_list=[{url:a.head_image}],t.img=a.head_image,t.areaValue=a.area_code}})).catch((function(e){i(e)}))}))}}},r=c,u=(a("cd67"),a("0512"),a("2877")),d=Object(u["a"])(r,i,l,!1,null,"c078709e",null);t["default"]=d.exports},"83a2":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return r}));var i=a("b775");function l(e,t,a){return Object(i["a"])({url:"user",method:"get",params:{page:e,limit:"10",filters:t,ops:a}})}function s(e,t,a){return Object(i["a"])({url:"user",method:"get",params:{page:e,limit:"100000",filters:t,ops:a}})}function n(e){return Object(i["a"])({url:"user",method:"delete",params:{ids:e}})}function o(e,t,a,l,s){return Object(i["a"])({url:"user",method:"post",data:{username:e,area_code:t,mobile:a,remark:l,head_image:s}})}function c(e){return Object(i["a"])({url:"user/".concat(e),method:"get"})}function r(e,t,a,l,s,n){return Object(i["a"])({url:"user/".concat(e),method:"put",params:{username:t,area_code:a,mobile:l,remark:s,head_image:n}})}},8477:function(e,t,a){"use strict";var i=a("5199"),l=a.n(i);l.a},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("b775");function l(){return Object(i["a"])({url:"public/upload_config",method:"get"})}},"920e":function(e,t,a){"use strict";var i=a("4f9b"),l=a.n(i);l.a},cd67:function(e,t,a){"use strict";var i=a("5185"),l=a.n(i);l.a},d59a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.searchShow?a("div",{staticClass:"search"},[e._l(e.seleteSearch,(function(t,i){return a("div",{key:i},[a("label",[e._v(e._s(t.label))]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择",clearable:"",filterable:""},on:{change:e.seleteChange,clear:function(t){return e.clearSelete(i)}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},e._l(t.array,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)})),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:e.submitSearch}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.resetSearch}},[e._v("重置")])],2):e._e(),e._v(" "),a("el-button",{attrs:{type:"success",icon:"el-icon-upload2",size:"medium"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加")]),e._v(" "),a("el-button",{staticClass:"deletebutton",attrs:{type:"danger",icon:"el-icon-delete",size:"medium",disabled:e.deleteShow},on:{click:e.someDelete}},[e._v("删除")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{size:"medium",type:"primary"},on:{click:function(t){e.searchShow=!e.searchShow}}},[a("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"search"}})],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.rolesList,border:"","header-cell-style":{background:"#fff",color:"#B3B3B3",fontSize:"14px",fontFamily:"PingFangSC-Medium,PingFang SC",fontWeight:"500"},"cell-style":{color:"#585B63",fontSize:"12px"},"row-class-name":e.tableRowClassName},on:{select:e.handleSelectionChange,"select-all":e.handleSelectAll}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",prop:"checkbox"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"用户名称",prop:"username"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"用户手机",prop:"mobile"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注说明",prop:"remark"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"caozuoButton",attrs:{plain:""},on:{click:function(a){e.dialogVisibleEdit=!0,e.editId=t.row.id}}},[a("span",{staticClass:"caozuo",attrs:{plain:""}},[a("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"tableEdit"}}),e._v("编辑\n          ")],1)]),e._v(" "),a("el-button",{staticClass:"caozuoButton",attrs:{plain:""},on:{click:function(a){return e.deleteA(t.row)}}},[a("span",{staticClass:"caozuo"},[a("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"delete"}}),e._v("删除\n          ")],1)])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"clearfix",attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.nextPage}}),e._v(" "),e.dialogVisible?a("add-dia",{attrs:{"dialog-visible":e.dialogVisible},on:{close:e.closr}}):e._e(),e._v(" "),e.dialogVisibleEdit?a("edit-dia",{attrs:{id:e.editId,"dialog-visible":e.dialogVisibleEdit},on:{close:e.closr}}):e._e()],1)},l=[],s=(a("5df3"),a("4f7f"),a("75fc")),n=(a("7f7f"),a("ac6a"),a("456d"),a("4237")),o=a("831b"),c=a("83a2"),r=a("5c96"),u={components:{AddDia:n["default"],EditDia:o["default"]},data:function(){return{rolesList:[],dialogVisible:!1,dialogVisibleEdit:!1,dialogVisibleReset:!1,length:1,imgUrl:[],filters:{},ops:{},total:0,editId:"",searchShow:!1,somedelete:"",seleteSearch:[{label:"用户名称:",value:"",name:"username",ops:"=",array:[]},{label:"用户手机:",value:"",name:"mobile",ops:"=",array:[]}],test:[],deleteShow:!0,searchModel:!1}},computed:{routesData:function(){return this.routes}},created:function(){},mounted:function(){this.tableInit(1)},methods:{tableInit:function(e,t,a){var i=this;return new Promise((function(l,n){Object(c["a"])(e,t,a).then((function(l){var n=l.data;return i.rolesList=n.list,i.length=n.list.length,i.total=n.total,i.rolesList.map((function(e){1==e.status?e.status=!0:e.status=!1})),new Promise((function(l,n){Object(c["c"])(e,t,a).then((function(e){e.data.list.map((function(e){Object.keys(e).map((function(t){i.seleteSearch.map((function(a){t==a.name&&(a.array.push(String(e[t])),a.array=Object(s["a"])(new Set(a.array)))}))}))}))}))}))})).catch((function(e){n(e)}))}))},deleteA:function(e){var t=this;this.$confirm("确定要删除吗？","警告",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return new Promise((function(a,i){Object(c["d"])(e.id).then((function(e){console.log(e),0==e.error_code&&(Object(r["Message"])({message:"删除成功",type:"success",duration:5e3}),t.deleteShow=!0,t.tableInit(1))})).catch((function(e){i(e)}))}))})).catch((function(e){}))},someDelete:function(){for(var e={id:""},t={id:""},a=0;a<this.somedelete.length;a++)e.id+="".concat(this.somedelete[a].id,",");t.id=e.id.substring(0,e.id.length-1),this.deleteA(t)},goGetRole:function(){this.$router.push({path:"/getROLE"})},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%2===1?"warning-row":"success-row"},handleChange:function(e){console.log(e)},handleSelectionChange:function(e){e.length>0?(this.deleteShow=!1,this.somedelete=e):this.deleteShow=!0},handleSelectAll:function(e){e.length>0?(this.deleteShow=!1,this.somedelete=e):this.deleteShow=!0},getValue:function(){console.log(this.test)},nextPage:function(e){this.searchModel?this.tableInit(e,this.filters,this.ops):this.tableInit(e)},closr:function(e){0==e?(this.dialogVisible=!1,this.dialogVisibleEdit=!1,this.dialogVisibleReset=!1):(this.dialogVisible=!1,this.dialogVisibleEdit=!1,this.dialogVisibleReset=!1,this.tableInit(1))},seleteChange:function(e){for(var t=0;t<this.seleteSearch.length;t++)void 0!=this.seleteSearch[t].value&&this.seleteSearch[t].value.trim()&&(this.filters[this.seleteSearch[t].name]="".concat(this.seleteSearch[t].value),this.ops[this.seleteSearch[t].name]="".concat(this.seleteSearch[t].ops))},clearSelete:function(e){delete this.filters[this.seleteSearch[e].name],delete this.ops[this.seleteSearch[e].name]},submitSearch:function(){this.tableInit(1,this.filters,this.ops),this.searchModel=!0},resetSearch:function(){this.seleteSearch.map((function(e){e.value=""})),this.tableInit(1),this.searchModel=!1}}},d=u,h=(a("920e"),a("2877")),m=Object(h["a"])(d,i,l,!1,null,"64d9f2ec",null);t["default"]=m.exports}}]);