(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f32be8fa"],{"0023":function(e,t,a){},"0aad":function(e,t,a){"use strict";var i=a("0023"),l=a.n(i);l.a},3123:function(e,t,a){"use strict";a("b775")},"33a8":function(e,t,a){"use strict";var i=a("afa7"),l=a.n(i);l.a},4237:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"添加授权用户",visible:e.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"uploadText"},[e._v("\n    图片小于 2M/张，视频MP4小于 500M/个，音频MP3小于 20M/个\n  ")]),e._v(" "),a("div",{staticClass:"left"},[a("div",[a("label",[e._v("用户名:")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名，字数最多20字内(必选)",maxlength:"20"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),a("div",[a("label",[e._v("用户手机:")]),e._v(" "),a("el-select",{staticClass:"el-selete",attrs:{placeholder:"请选择区号"},model:{value:e.areaValue,callback:function(t){e.areaValue=t},expression:"areaValue"}},e._l(e.areaCode,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码(必选)",maxlength:"11"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),a("div",[a("label",{staticClass:"uploadLabel"},[e._v("用户头像:")]),e._v(" "),a("single-image",{attrs:{type:".jpg,.png",size:"2097152",limit:1},on:{files:e.file}})],1),e._v(" "),a("div",[a("label",{staticStyle:{"vertical-align":"top"}},[e._v("备注信息:")]),e._v(" "),a("el-input",{staticClass:"input textarea",attrs:{placeholder:"请输入授权教材备注信息，字数最多300字内",type:"textarea",maxlength:"300",resize:"none"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)]),e._v(" "),a("div",{staticStyle:{display:"none"}},[e._v(e._s(e.sum))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"success",disabled:e.Exist},on:{click:e.addA}},[e._v("确 定")])],1)])},l=[],n=(a("c5f6"),a("70a2")),s=a("83a2"),o=a("5c96"),r={components:{SingleImage:n["a"]},props:["dialogVisible"],data:function(){return{dialogVisibleii:this.dialogVisible,username:"",mobile:"",remark:"",img:"",ifExist:0,Exist:!0,areaCode:[{value:86,label:"大陆 + 86"},{value:852,label:"香港 + 852"},{value:853,label:"澳门 + 853"},{value:886,label:"台湾 + 886"}],areaValue:""}},computed:{sum:function(){this.ifExist=Number(Boolean(this.username))+Number(Boolean(this.mobile))+Number(Boolean(this.areaValue))+Number(Boolean(this.img))}},watch:{ifExist:function(e,t){4==Number(e)?this.Exist=!1:this.Exist=!0}},methods:{close:function(){this.$emit("close",!1)},file:function(e){e.length>0?this.img=e[0].url:this.img=""},handleClose:function(){this.$emit("close",!1)},addA:function(){var e=this;return new Promise((function(t,a){Object(s["b"])(e.username,e.areaValue,e.mobile,e.remark,e.img).then((function(t){console.log(t),0==t.error_code&&Object(o["Message"])({message:"添加成功",type:"success",duration:5e3}),e.$emit("close",!0)})).catch((function(e){a(e)}))}))}}},u=r,c=(a("33a8"),a("0aad"),a("2877")),d=Object(c["a"])(u,i,l,!1,null,"f78cade6",null);t["default"]=d.exports},"83a2":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return r})),a.d(t,"e",(function(){return u}));var i=a("b775");function l(e,t,a){return Object(i["a"])({url:"user",method:"get",params:{page:e,limit:"10",filters:t,ops:a}})}function n(e,t,a){return Object(i["a"])({url:"user",method:"get",params:{page:e,limit:"100000",filters:t,ops:a}})}function s(e){return Object(i["a"])({url:"user",method:"delete",params:{ids:e}})}function o(e,t,a,l,n){return Object(i["a"])({url:"user",method:"post",data:{username:e,area_code:t,mobile:a,remark:l,head_image:n}})}function r(e){return Object(i["a"])({url:"user/".concat(e),method:"get"})}function u(e,t,a,l,n,s){return Object(i["a"])({url:"user/".concat(e),method:"put",params:{username:t,area_code:a,mobile:l,remark:n,head_image:s}})}},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("b775");function l(){return Object(i["a"])({url:"public/upload_config",method:"get"})}},afa7:function(e,t,a){}}]);