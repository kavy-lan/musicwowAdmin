(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a2f454b"],{"0078":function(t,e,i){"use strict";var l=i("dad9"),a=i.n(l);a.a},3123:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var l=i("b775");function a(){return Object(l["a"])({url:"/qiniu/upload/token",method:"get"})}},"91b6":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var l=i("b775");function a(){return Object(l["a"])({url:"public/upload_config",method:"get"})}},a0a4:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"添加课时",visible:t.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"left"},[i("div",[i("label",[t._v("教材名称:")]),t._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入教材名称，字数最多20字内",maxlength:"20"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),i("div",[i("single-image",{attrs:{msg:"视频格式为mp4",label:"教材介绍视频:",type:".mp4",limit:1},on:{files:t.file}})],1),t._v(" "),i("div",[i("label",{staticStyle:{"vertical-align":"top"}},[t._v("教材文字详情:")]),t._v(" "),i("el-input",{staticClass:"input textarea",attrs:{placeholder:"请输入教材文字详情，字数最多300字内",type:"textarea",maxlength:"300"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),i("div",[i("single-image",{attrs:{msg:"图片小于2M，格式为jpg、png",label:"教材目录:",type:".jpg,.png",size:"2097152"},on:{files:t.file1}})],1)]),t._v(" "),i("div",{staticClass:"right"},[i("div",[i("single-image",{attrs:{msg:"图片小于2M，格式为jpg、png",label:"教材封面:",size:"2097152",type:".jpg,.png",limit:1}})],1),t._v(" "),i("div",[i("single-image",{attrs:{msg:"图片尺寸120x120并小于1M，格式为png",label:"乐器图标:",type:".png",limit:1,size:"1048576"}})],1),t._v(" "),i("div",[i("label",{staticStyle:{"vertical-align":"top"}},[t._v("教材目标:")]),t._v(" "),i("el-input",{staticClass:"input Target",attrs:{placeholder:"请输入教材目标，字数最多100字内",type:"textarea",maxlength:"100"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),i("div",[i("single-image",{attrs:{msg:"图片小于2M，格式为jpg、png",label:"教材详情图:",size:"2097152",type:".jpg,.png",limit:1}})],1),t._v(" "),i("div",[i("label",{staticStyle:{"vertical-align":"top"}},[t._v("单价课价格：")]),t._v(" "),i("el-radio-group",{attrs:{"text-color":"#585B63"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("el-radio",{attrs:{label:3}},[t._v("开启")]),t._v(" "),i("el-radio",{attrs:{label:6}},[t._v("关闭")])],1)],1)]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"info"},on:{click:t.close}},[t._v("确 定")])],1)])},a=[],n=i("70a2"),s={components:{SingleImage:n["a"]},props:["dialogVisible"],data:function(){return{dialogVisibleii:this.dialogVisible,input:"",radio:"1"}},methods:{close:function(){this.$emit("close",!1)},file:function(t){console.log(t)},file1:function(t){console.log(t)},handleClose:function(){this.$emit("close",!1)}}},o=s,c=(i("0078"),i("2877")),r=Object(c["a"])(o,l,a,!1,null,"0e41e545",null);e["default"]=r.exports},dad9:function(t,e,i){}}]);