(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6842ce59","chunk-b3e80a7a","chunk-33caaec5","chunk-58f44da6"],{1:function(t,e){},"1d74":function(t,e,i){"use strict";var s=i("6ff0"),a=i.n(s);a.a},2:function(t,e){},3123:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("b775");function a(){return Object(s["a"])({url:"/qiniu/upload/token",method:"get"})}},"387f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[t.searchShow?i("div",{staticClass:"search"},[t._l(t.searchList,(function(e,s){return i("div",{key:s},[i("label",[t._v(t._s(e.label))]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入内容"},on:{input:t.six},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1)})),t._v(" "),i("el-button",{attrs:{type:"success"},on:{click:t.submitSearch}},[t._v("提交")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:t.resetSearch}},[t._v("重置")])],2):t._e(),t._v(" "),i("el-button",{attrs:{type:"success",icon:"el-icon-upload2",size:"medium"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加")]),t._v(" "),i("el-button",{staticClass:"deletebutton",attrs:{type:"danger",icon:"el-icon-delete",size:"medium",disabled:t.deleteShow},on:{click:t.someDelete}},[t._v("删除")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"medium",type:"info"},on:{click:function(e){t.searchShow=!t.searchShow}}},[i("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"search"}})],1),t._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.rolesList,border:"","header-cell-style":{background:"#fff",color:"#B3B3B3",fontSize:"14px",fontFamily:"PingFangSC-Medium,PingFang SC",fontWeight:"500"},"cell-style":{color:"#585B63",fontSize:"14px"},"row-class-name":t.tableRowClassName},on:{select:t.handleSelectionChange,"select-all":t.handleSelectAll}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center",prop:"checkbox"}}),t._v(" "),i("el-table-column",{attrs:{align:"left",label:"ID",prop:"id"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"角色权限ID",prop:"auth_ids"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"头像",prop:"head_img"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:t.row.head_img,width:"40",height:"40"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"用户登录名",prop:"username"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"联系手机号",prop:"phone"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"备注说明",prop:"remark"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"登陆次数",prop:"login_num"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-switch",{attrs:{"active-color":"#07D1AA","inactive-color":"#D9D9D9"},on:{change:function(i){return t.handleChange(e.row)}},model:{value:e.row.status,callback:function(i){t.$set(e.row,"status",i)},expression:"scope.row.status"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticClass:"caozuoButton",attrs:{plain:""},on:{click:t.goGetRole}},[i("span",{staticClass:"caozuo"},[i("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"check"}}),t._v("查看\n          ")],1)]),t._v(" "),i("el-button",{staticClass:"caozuoButton",attrs:{plain:""},on:{click:function(i){t.dialogVisibleReset=!0,t.editId=e.row.id}}},[i("span",{staticClass:"caozuo",attrs:{plain:""}},[i("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"power"}}),t._v("重置\n          ")],1)]),t._v(" "),i("el-button",{staticClass:"caozuoButton",attrs:{plain:""},on:{click:function(i){t.dialogVisibleEdit=!0,t.editId=e.row.id}}},[i("span",{staticClass:"caozuo",attrs:{plain:""}},[i("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"tableEdit"}}),t._v("编辑\n          ")],1)]),t._v(" "),i("el-button",{staticClass:"caozuoButton",attrs:{plain:""},on:{click:function(i){return t.deleteA(e.row)}}},[i("span",{staticClass:"caozuo"},[i("svg-icon",{attrs:{"class-name":"search-icon","icon-class":"delete"}}),t._v("删除\n          ")],1)])]}}])})],1),t._v(" "),i("el-pagination",{staticClass:"clearfix",attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.nextPage}}),t._v(" "),t.dialogVisible?i("add-dia",{attrs:{"dialog-visible":t.dialogVisible},on:{close:t.closr}}):t._e(),t._v(" "),t.dialogVisibleEdit?i("edit-dia",{attrs:{id:t.editId,"dialog-visible":t.dialogVisibleEdit},on:{close:t.closr}}):t._e(),t._v(" "),i("reset",{attrs:{id:t.editId,"dialog-visible":t.dialogVisibleReset},on:{close:t.closr}})],1)},a=[],n=(i("7f7f"),i("e68e")),l=i("723c"),o=i("d2b1"),c=i("622b"),r=i("5c96"),u={components:{AddDia:n["default"],EditDia:l["default"],reset:o["default"]},data:function(){return{rolesList:[],dialogVisible:!1,dialogVisibleEdit:!1,dialogVisibleReset:!1,length:1,imgUrl:[],filterS:{},ops:{},total:0,editId:"",searchShow:!1,somedelete:"",searchList:[{label:"ID",value:this.id,name:"id",ops:"="},{label:"联系手机号",value:this.mobile,name:"mobile",ops:"="},{label:"用户登录名",value:this.username,name:"username",ops:"="}],test:[],deleteShow:!0,searchModel:!1}},computed:{routesData:function(){return this.routes}},created:function(){},mounted:function(){this.tableInit(1)},methods:{tableInit:function(t,e,i){var s=this;return new Promise((function(a,n){Object(c["b"])(t,e,i).then((function(t){var e=t.data;s.rolesList=e.list,s.length=e.list.length,s.total=e.total,s.rolesList.map((function(t){1==t.status?t.status=!0:t.status=!1}))})).catch((function(t){n(t)}))}))},deleteA:function(t){var e=this;this.$confirm("确定要删除吗？","警告",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return new Promise((function(i,s){Object(c["c"])(t.id).then((function(t){console.log(t),0==t.error_code&&(Object(r["Message"])({message:"删除成功",type:"success",duration:5e3}),e.deleteShow=!0,e.tableInit(1))})).catch((function(t){s(t)}))}))})).catch((function(t){}))},someDelete:function(){for(var t={id:""},e={id:""},i=0;i<this.somedelete.length;i++)t.id+="".concat(this.somedelete[i].id,",");e.id=t.id.substring(0,t.id.length-1),this.deleteA(e)},goGetRole:function(){this.$router.push({path:"/getROLE"})},tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2===1?"warning-row":"success-row"},handleChange:function(t){console.log(t)},handleSelectionChange:function(t){t.length>0?(this.deleteShow=!1,this.somedelete=t):this.deleteShow=!0},handleSelectAll:function(t){t.length>0?(this.deleteShow=!1,this.somedelete=t):this.deleteShow=!0},getValue:function(){console.log(this.test)},nextPage:function(t){this.searchModel?this.tableInit(t,this.filters,this.ops):this.tableInit(t)},closr:function(t){0==t?(this.dialogVisible=!1,this.dialogVisibleEdit=!1,this.dialogVisibleReset=!1):(this.dialogVisible=!1,this.dialogVisibleEdit=!1,this.dialogVisibleReset=!1,this.tableInit(1))},six:function(t){for(var e={},i={},s=0;s<this.searchList.length;s++)void 0!=this.searchList[s].value&&this.searchList[s].value.trim()&&(e[this.searchList[s].name]="".concat(this.searchList[s].value),i[this.searchList[s].name]="".concat(this.searchList[s].ops));this.filters=JSON.stringify(e),this.ops=JSON.stringify(i)},submitSearch:function(){this.tableInit(1,this.filters,this.ops),this.searchModel=!0},resetSearch:function(){this.tableInit(1),this.searchModel=!1}}},d=u,h=(i("4bbd"),i("2877")),m=Object(h["a"])(d,s,a,!1,null,"58815395",null);e["default"]=m.exports},"4bbd":function(t,e,i){"use strict";var s=i("72fa"),a=i.n(s);a.a},"61fc":function(t,e,i){"use strict";var s=i("e938"),a=i.n(s);a.a},"622b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return l})),i.d(e,"e",(function(){return o})),i.d(e,"d",(function(){return c})),i.d(e,"f",(function(){return r}));var s=i("b775");function a(t,e,i){return Object(s["a"])({url:"admin",method:"get",params:{page:t,limit:"10",filters:e,ops:i}})}function n(t,e,i,a,n){return Object(s["a"])({url:"admin",method:"post",params:{username:t,mobile:e,head_img:i,remark:a,auth_ids:n}})}function l(t){return Object(s["a"])({url:"admin",method:"delete",params:{ids:t}})}function o(t){return Object(s["a"])({url:"admin/".concat(t),method:"get"})}function c(t,e,i,a,n,l){return Object(s["a"])({url:"admin/".concat(t),method:"put",params:{username:e,mobile:i,head_img:a,remark:n,auth_ids:l}})}function r(t,e){return Object(s["a"])({url:"admin/reset_password/".concat(t),method:"put",params:{password:e}})}},"6ff0":function(t,e,i){},"723c":function(t,e,i){"use strict";i.r(e);var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"编辑管理员",visible:t.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"left",on:{click:t.test}},[i("div",[i("label",[t._v("用户名:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名，字数最多20字内(必选)",maxlength:"20"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),i("div",[i("label",[t._v("手机:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码(必选)",maxlength:"20"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),t._v(" "),i("div",[i("label",[t._v("授权角色:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入授权角色，字数最多20字内",maxlength:"20"},model:{value:t.auth_ids,callback:function(e){t.auth_ids=e},expression:"auth_ids"}})],1),t._v(" "),i("div",[i("single-image",{attrs:{msg:"图片小于2M，格式为jpg、png(必选)",label:"头像:",type:".jpg,.png",size:"2097152",limit:1,filelist:t.headImg},on:{files:t.file}})],1),t._v(" "),i("div",[i("label",{staticStyle:{"vertical-align":"top"}},[t._v("备注信息:")]),t._v(" "),i("el-input",{staticClass:"input textarea",attrs:{placeholder:"请输入教材备注信息，字数最多300字内",type:"textarea",maxlength:"300"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)]),t._v(" "),i("div",{staticStyle:{display:"none"}},[t._v(t._s(t.sum))]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"info",disabled:t.Exist},on:{click:t.addA}},[t._v("确 定")])],1)])},n=[],l=i("bd86"),o=(i("28a5"),i("c5f6"),i("70a2")),c=i("622b"),r=i("5c96"),u=(i("322d"),i("df7c"),{components:{SingleImage:o["a"]},props:["dialogVisible","id"],data:function(){return{dialogVisibleii:this.dialogVisible,radio:"1",username:"",mobile:"",auth_ids:"",remark:"",img:"",ifExist:0,Exist:!0,headImg:[]}},computed:{sum:function(){this.ifExist=Number(Boolean(this.username))+Number(Boolean(this.mobile))+Number(Boolean(this.img))}},watch:{ifExist:function(t,e){3==Number(t)?this.Exist=!1:this.Exist=!0}},mounted:function(){this.getDetail(this.id)},methods:(s={close:function(){this.$emit("close",!1)},file:function(t){console.log(t)}},Object(l["a"])(s,"file",(function(t){t.length>0?this.img=t[0].url:this.img=""})),Object(l["a"])(s,"handleClose",(function(){this.$emit("close",!1)})),Object(l["a"])(s,"addA",(function(){var t=this;return new Promise((function(e,i){var s=t.auth_ids.split(""),a=s.join(",");Object(c["d"])(t.id,t.username,t.mobile,t.img,t.remark,a).then((function(e){console.log(e),0==e.error_code&&Object(r["Message"])({message:"编辑成功",type:"success",duration:5e3}),t.$emit("close",!0)})).catch((function(t){i(t)}))}))})),Object(l["a"])(s,"getDetail",(function(t){var e=this;return new Promise((function(i,s){Object(c["e"])(t).then((function(t){if(0==t.error_code){var i=t.data;e.username=i.username,e.auth_ids=i.auth_ids,e.remark=i.remark,e.mobile=i.mobile,e.headImg=[{url:i.head_img}],e.img=i.head_img,console.log(e.headImg)}})).catch((function(t){s(t)}))}))})),Object(l["a"])(s,"test",(function(){console.log(this.id),console.log(33333)})),s)}),d=u,h=(i("a745d"),i("2877")),m=Object(h["a"])(d,a,n,!1,null,"bfc65c72",null);e["default"]=m.exports},"72fa":function(t,e,i){},"91b6":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("b775");function a(){return Object(s["a"])({url:"public/upload_config",method:"get"})}},a745d:function(t,e,i){"use strict";var s=i("d036"),a=i.n(s);a.a},d036:function(t,e,i){},d2b1:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"重置密码",visible:t.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"left"},[i("div",[i("label",[t._v("密码:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入密码，字数最多20字内(必选)",maxlength:"20"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),t._v(" "),i("div",{staticStyle:{display:"none"}},[t._v(t._s(t.sum))]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"info",disabled:t.Exist},on:{click:t.addA}},[t._v("确 定")])],1)])},a=[],n=(i("c5f6"),i("622b")),l=i("5c96"),o=(i("322d"),{props:["dialogVisible","id"],data:function(){return{radio:"1",ifExist:0,Exist:!0,password:""}},computed:{sum:function(){this.ifExist=Number(Boolean(this.password))}},watch:{ifExist:function(t,e){1==Number(t)?this.Exist=!1:this.Exist=!0}},mounted:function(){console.log(this.id)},methods:{close:function(){this.$emit("close",!1)},file:function(t){console.log(t)},handleClose:function(){this.$emit("close",!1)},addA:function(){var t=this;return new Promise((function(e,i){Object(n["f"])(t.id,t.password).then((function(e){console.log(e),0==e.error_code&&Object(l["Message"])({message:"修改成功",type:"success",duration:5e3}),t.$emit("close",!0)})).catch((function(t){i(t)}))}))}}}),c=o,r=(i("61fc"),i("2877")),u=Object(r["a"])(c,s,a,!1,null,"69a0e802",null);e["default"]=u.exports},e68e:function(t,e,i){"use strict";i.r(e);var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"添加用户",visible:t.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"left"},[i("div",[i("label",[t._v("用户名:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名，字数最多20字内(必选)",maxlength:"20"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),i("div",[i("label",[t._v("手机:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码(必选)",maxlength:"20"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),t._v(" "),i("div",[i("label",[t._v("授权角色:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入授权角色，字数最多20字内",maxlength:"20"},model:{value:t.auth_ids,callback:function(e){t.auth_ids=e},expression:"auth_ids"}})],1),t._v(" "),i("div",[i("single-image",{attrs:{msg:"图片小于2M，格式为jpg、png(必选)",label:"头像:",type:".jpg,.png",size:"2097152",limit:3},on:{files:t.file}})],1),t._v(" "),i("div",[i("label",{staticStyle:{"vertical-align":"top"}},[t._v("备注信息:")]),t._v(" "),i("el-input",{staticClass:"input textarea",attrs:{placeholder:"请输入教材备注信息，字数最多300字内",type:"textarea",maxlength:"300"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)]),t._v(" "),i("div",{staticStyle:{display:"none"}},[t._v(t._s(t.sum))]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"info",disabled:t.Exist},on:{click:t.addA}},[t._v("确 定")])],1)])},n=[],l=i("bd86"),o=(i("28a5"),i("c5f6"),i("70a2")),c=i("622b"),r=i("5c96"),u={components:{SingleImage:o["a"]},props:["dialogVisible"],data:function(){return{dialogVisibleii:this.dialogVisible,radio:"1",username:"",mobile:"",auth_ids:"",remark:"",img:"",ifExist:0,Exist:!0}},computed:{sum:function(){this.ifExist=Number(Boolean(this.username))+Number(Boolean(this.mobile))+Number(Boolean(this.img))}},watch:{ifExist:function(t,e){3==Number(t)?this.Exist=!1:this.Exist=!0}},methods:(s={close:function(){this.$emit("close",!1)},file:function(t){console.log(t)}},Object(l["a"])(s,"file",(function(t){t.length>0?this.img=t[0].url:this.img=""})),Object(l["a"])(s,"handleClose",(function(){this.$emit("close",!1)})),Object(l["a"])(s,"addA",(function(){var t=this;return new Promise((function(e,i){var s=t.auth_ids.split(""),a=s.join(",");Object(c["a"])(t.username,t.mobile,t.img,t.remark,a).then((function(e){console.log(e),0==e.error_code&&Object(r["Message"])({message:"添加成功",type:"success",duration:5e3}),t.$emit("close",!0)})).catch((function(t){i(t)}))}))})),s)},d=u,h=(i("1d74"),i("2877")),m=Object(h["a"])(d,a,n,!1,null,"0633bbb9",null);e["default"]=m.exports},e938:function(t,e,i){}}]);