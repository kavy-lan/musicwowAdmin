(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{"127d":function(e,t,i){"use strict";var s=i("1cc6"),n=i.n(s);n.a},"1cc6":function(e,t,i){},"70a2":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.action,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"list-type":"picture",limit:e.limit,data:e.formdata,"before-upload":e.before,multiple:!0,"on-success":e.success,"on-change":e.change,"on-error":e.error,accept:e.type,"file-list":e.filelist}},[e.label?i("label",[e._v(e._s(e.label))]):e._e(),e._v(" "),i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.upload}},[e._v("上传")]),e._v(" "),i("span",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.msg))]),e._v(" "),i("video",{ref:"noneVideo",staticStyle:{display:"none"},attrs:{src:""}})],1)},n=[],o=(i("6b54"),i("7f7f"),i("3123"),i("3e8f"),i("5c96")),a=i("91b6"),c=(i("d3f5"),i("3022"),{name:"SingleImageUpload3",props:["msg","size","type","limit","filelist","clear","time","label"],data:function(){return{formdata:{},file:[],action:"",config:"",removeFile:[],successFile:[],keybox:[],num:0,videoDuratime:!0}},watch:{file:function(e,t){this.$emit("files",e)},clear:function(e,t){console.log("清理了"),this.$refs.upload.clearFiles()}},mounted:function(){void 0!=this.filelist&&(this.file=this.filelist)},methods:{upload:function(){var e=this;return new Promise((function(t,i){Object(a["a"])().then((function(t){var i=t.data,s=i.config;e.config=s,e.action=s.domain,console.log(e.action),console.log(e.config),e.formdata={OSSAccessKeyId:s.access_key_id,policy:s.policy,Signature:s.signature,success_action_status:"200"}})).catch((function(e){i(e)}))}))},handleRemove:function(e,t){for(var i=0;i<this.file.length;i++)this.file[i].uid==e.uid&&(this.file.splice(i,1),this.keybox.splice(i,1))},handlePreview:function(e){console.log(e)},before:function(e){if(e.name.length>54)return Object(o["Message"])({message:"上传文件名称长度不能大于50",type:"error",duration:5e3}),!1;if(e.size>this.size)return Object(o["Message"])({message:"请选择正确尺寸的文件",type:"error",duration:5e3}),!1;var t=e.type.substring(e.type.indexOf("/")+1,e.type.length);if("jpeg"==t&&(t="jpg"),this.type.indexOf(t)<0)return Object(o["Message"])({message:"请选择正确格式的文件",type:"error",duration:5e3}),!1;var i,s=(new Date).getTime(),n=Math.random().toString(36).substr(-10),a=e.name.lastIndexOf("."),c=e.name.length,l=e.name.substring(a+1,c);i=e.name.indexOf("jpg")>-1||e.name.indexOf("png")>-1||e.name.indexOf("gif")?"images":e.name.indexOf("mp4")>-1?"video":"audio",this.$set(this.formdata,"key","pulic/".concat(i,"/").concat(s).concat(n,".").concat(l)),this.keybox.push({url:"".concat(this.action,"/").concat(this.formdata.key),uid:e.uid,name:e.name})},success:function(e,t,i){for(var s=0;s<this.keybox.length;s++)this.file.push({url:this.keybox[s].url,name:this.keybox[s].name,uid:this.keybox[s].uid,cover:"".concat(this.keybox[s].url,"?x-oss-process=video/snapshot,t_1,f_jpg,m_fast,ar_auto")});for(var n=0;n<this.file.length;n++)for(var a=n+1;a<this.file.length;a++)this.file[n].uid==this.file[a].uid&&this.file.splice(a,1);Object(o["Message"])({message:"上传成功",type:"success",duration:5e3}),console.log(this.file[0].url)},change:function(e){},error:function(e){Object(o["Message"])({message:"上传失败，请重试",type:"error",duration:5e3})}},ha:function(e,t){this.action=e}}),l=c,r=(i("127d"),i("2877")),u=Object(r["a"])(l,s,n,!1,null,"67fce284",null);t["a"]=u.exports}}]);