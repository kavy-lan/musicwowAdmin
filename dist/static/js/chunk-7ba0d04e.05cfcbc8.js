(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ba0d04e"],{"0b38":function(e,t,a){},3123:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("b775");function n(){return Object(i["a"])({url:"/qiniu/upload/token",method:"get"})}},4237:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"授权用户",visible:e.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"left"},[a("div",[a("label",[e._v("用户名:")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名，字数最多20字内(必选)",maxlength:"20"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),a("div",[a("label",[e._v("用户手机:")]),e._v(" "),a("el-select",{staticClass:"el-selete",attrs:{placeholder:"请选择区号"},model:{value:e.areaValue,callback:function(t){e.areaValue=t},expression:"areaValue"}},e._l(e.areaCode,(function(e){return a("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码(必选)",maxlength:"11"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),a("div",[a("single-image",{attrs:{msg:"图片小于1M，格式为jpg、png(必选)",label:"用户头像:",type:".jpg,.png",size:"1048576",limit:1},on:{files:e.file}})],1),e._v(" "),a("div",[a("label",{staticStyle:{"vertical-align":"top"}},[e._v("备注信息:")]),e._v(" "),a("el-input",{staticClass:"input textarea",attrs:{placeholder:"请输入授权教材备注信息，字数最多300字内",type:"textarea",maxlength:"300"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)]),e._v(" "),a("div",{staticStyle:{display:"none"}},[e._v(e._s(e.sum))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"info",disabled:e.Exist},on:{click:e.addA}},[e._v("确 定")])],1)])},n=[],l=(a("c5f6"),a("70a2")),o=a("83a2"),s=a("5c96"),r={components:{SingleImage:l["a"]},props:["dialogVisible"],data:function(){return{dialogVisibleii:this.dialogVisible,username:"",mobile:"",remark:"",img:"",ifExist:0,Exist:!0,areaCode:[{value:86},{value:852},{value:853},{value:886}],areaValue:""}},computed:{sum:function(){this.ifExist=Number(Boolean(this.username))+Number(Boolean(this.mobile))+Number(Boolean(this.areaValue))+Number(Boolean(this.img))}},watch:{ifExist:function(e,t){4==Number(e)?this.Exist=!1:this.Exist=!0}},methods:{close:function(){this.$emit("close",!1)},file:function(e){e.length>0?this.img=e[0].url:this.img=""},handleClose:function(){this.$emit("close",!1)},addA:function(){var e=this;return new Promise((function(t,a){Object(o["b"])(e.username,e.areaValue,e.mobile,e.remark,e.img).then((function(t){console.log(t),0==t.error_code&&Object(s["Message"])({message:"添加成功",type:"success",duration:5e3}),e.$emit("close",!0)})).catch((function(e){a(e)}))}))}}},u=r,c=(a("8b0c"),a("2877")),m=Object(c["a"])(u,i,n,!1,null,"64781774",null);t["default"]=m.exports},"83a2":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return r}));var i=a("b775");function n(e,t,a){return Object(i["a"])({url:"user",method:"get",params:{page:e,limit:"10",filters:t,ops:a}})}function l(e){return Object(i["a"])({url:"user",method:"delete",params:{ids:e}})}function o(e,t,a,n,l){return Object(i["a"])({url:"user",method:"post",data:{username:e,area_code:t,mobile:a,remark:n,head_image:l}})}function s(e){return Object(i["a"])({url:"user/".concat(e),method:"get"})}function r(e,t,a,n,l,o){return Object(i["a"])({url:"user/".concat(e),method:"put",params:{username:t,area_code:a,mobile:n,remark:l,head_image:o}})}},"8b0c":function(e,t,a){"use strict";var i=a("0b38"),n=a.n(i);n.a},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("b775");function n(){return Object(i["a"])({url:"public/upload_config",method:"get"})}}}]);