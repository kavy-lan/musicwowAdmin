(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{1658:function(e,t,i){"use strict";var n=i("e812"),s=i.n(n);s.a},"70a2":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.action,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"list-type":"picture",limit:e.limit,data:e.formdata,"before-upload":e.before,multiple:!0,"on-success":e.success,"on-change":e.change,"on-error":e.error,accept:e.type,"file-list":e.filelist}},[i("label",[e._v(e._s(e.label))]),e._v(" "),i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.upload}},[e._v("上传")]),e._v(" "),i("span",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.msg))]),e._v(" "),i("video",{ref:"noneVideo",staticStyle:{display:"none"},attrs:{src:""}})],1)},s=[],o=(i("7f7f"),i("6b54"),i("3123"),i("3e8f"),i("5c96")),a=i("91b6"),c=(i("d3f5"),i("3022"),{name:"SingleImageUpload3",props:["msg","label","size","type","limit","filelist","clear","time"],data:function(){return{formdata:{},file:[],action:"",config:"",removeFile:[],successFile:[],keybox:[],num:0,videoDuratime:!0}},watch:{file:function(e,t){this.$emit("files",e)},clear:function(e,t){console.log("清理了"),this.$refs.upload.clearFiles()}},mounted:function(){void 0!=this.filelist&&(this.file=this.filelist)},methods:{upload:function(){var e=this;return new Promise((function(t,i){Object(a["a"])().then((function(t){var i=t.data,n=i.config;e.config=n,e.action=n.domain,console.log(e.action),console.log(e.config),e.formdata={OSSAccessKeyId:n.access_key_id,policy:n.policy,Signature:n.signature,success_action_status:"200"}})).catch((function(e){i(e)}))}))},handleRemove:function(e,t){for(var i=0;i<this.file.length;i++)this.file[i].uid==e.uid&&(this.file.splice(i,1),this.keybox.splice(i,1))},handlePreview:function(e){console.log(e)},before:function(e){if(console.log(this.formdata),e.size>this.size)return Object(o["Message"])({message:"请选择正确尺寸的文件",type:"error",duration:5e3}),!1;var t=e.type.substring(e.type.indexOf("/")+1,e.type.length);if("jpeg"==t&&(t="jpg"),this.type.indexOf(t)<0)return Object(o["Message"])({message:"请选择正确格式的文件",type:"error",duration:5e3}),!1;var i,n=(new Date).getTime(),s=Math.random().toString(36).substr(-10),a=e.name.lastIndexOf("."),c=e.name.length,l=e.name.substring(a+1,c);i=e.name.indexOf("jpg")>-1||e.name.indexOf("png")>-1||e.name.indexOf("gif")?"images":e.name.indexOf("mp4")>-1?"video":"audio",this.$set(this.formdata,"key","pulic/".concat(i,"/").concat(n).concat(s,".").concat(l)),this.keybox.push({url:"".concat(this.action,"/").concat(this.formdata.key),uid:e.uid})},success:function(e,t,i){for(var n=0;n<this.keybox.length;n++)this.file.push({url:this.keybox[n].url,name:t.name,uid:this.keybox[n].uid});for(var s=0;s<this.file.length;s++)for(var a=s+1;a<this.file.length;a++)this.file[s].uid==this.file[a].uid&&this.file.splice(a,1);Object(o["Message"])({message:"上传成功",type:"success",duration:5e3}),console.log(this.file[0].url)},change:function(e){},error:function(e){Object(o["Message"])({message:"上传失败，请重试",type:"error",duration:5e3})}},ha:function(e,t){this.action=e}}),l=c,r=(i("1658"),i("2877")),u=Object(r["a"])(l,n,s,!1,null,"1503e3ae",null);t["a"]=u.exports},e812:function(e,t,i){}}]);