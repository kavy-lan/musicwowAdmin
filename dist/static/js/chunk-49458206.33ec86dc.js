(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49458206","chunk-061d8ae8"],{3123:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("b775");function a(){return Object(s["a"])({url:"/qiniu/upload/token",method:"get"})}},"7e2c":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"编辑课时",visible:e.dialogVisible,width:"100%","custom-class":"customWidth",center:"",top:"0","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{staticClass:"uploadText"},[e._v("\n    图片小于 2M/张，视频MP4小于 500M/个，音频MP3小于 20M/个\n  ")]),e._v(" "),i("div",{staticClass:"left"},[i("div",[i("label",[e._v("教材目录：")]),e._v(" "),i("div",{staticClass:"c_right"},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.CatalogueId,callback:function(t){e.CatalogueId=t},expression:"CatalogueId"}},e._l(e.options,(function(e,t){return i("el-option",{key:e.id,attrs:{value:e.id,label:t+1+". "+e.title}})})),1)],1)]),e._v(" "),i("div",[i("label",[e._v("课时名称：")]),e._v(" "),i("div",{staticClass:"c_right className"},[i("el-input",{staticClass:"input",attrs:{placeholder:"课时编号",maxlength:"20"},model:{value:e.classNum,callback:function(t){e.classNum=t},expression:"classNum"}}),e._v(" "),i("el-input",{staticClass:"input",attrs:{placeholder:"请输入课时名称，字数最多20字内",maxlength:"20"},model:{value:e.className,callback:function(t){e.className=t},expression:"className"}})],1)]),e._v(" "),i("div",{staticClass:"class"},[i("label",[e._v("课堂知识点:")]),e._v(" "),e.Knowledge.length>0?i("div",{staticClass:"c_right classKnow"},[i("div",{},[i("div",{staticClass:"total"},[e._v(e._s(e.Knowledge.length))]),e._v(" "),i("span",[e._v("个知识点")])]),e._v(" "),e._l(e.Knowledge,(function(t,s){return i("div",{key:s,staticClass:"upload"},[i("div",[i("svg-icon",{staticClass:"laji",attrs:{"class-name":"search-icon","icon-class":"laji"},on:{click:function(t){return e.deleteKnowledge(s)}}}),e._v(" "),i("div",{staticClass:"total"},[e._v(e._s(s+1))]),e._v(" "),i("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.TemplateSelete(t,s)}},model:{value:t.Templatevalue,callback:function(i){e.$set(t,"Templatevalue",i)},expression:"items.Templatevalue"}},e._l(t.Template,(function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1),e._v(" "),i("div",[2==t.template_type?i("el-checkbox-group",{on:{change:function(t){return e.KnowledgeChange(t,s)}},model:{value:t.Knowledgebox2,callback:function(i){e.$set(t,"Knowledgebox2",i)},expression:"items.Knowledgebox2"}},[i("el-checkbox",{attrs:{disabled:"",label:"底图素材"}}),e._v(" "),i("el-checkbox",{attrs:{disabled:"",label:"其他素材"}}),e._v(" "),i("el-checkbox",{attrs:{label:"音频素材"}}),e._v(" "),i("el-checkbox",{attrs:{label:"视频素材"}})],1):i("el-checkbox-group",{on:{change:function(t){return e.KnowledgeChange(t,s)}},model:{value:t.Knowledgebox1,callback:function(i){e.$set(t,"Knowledgebox1",i)},expression:"items.Knowledgebox1"}},[i("el-checkbox",{attrs:{disabled:"",label:"图片素材"}}),e._v(" "),i("el-checkbox",{attrs:{label:"音频素材"}}),e._v(" "),i("el-checkbox",{attrs:{label:"视频素材"}})],1)],1),e._v(" "),2==t.template_type?i("div",[t.show.baseImage?i("single-image",{attrs:{label:"底图素材",type:".jpg,.png,.gif",size:"2097152",limit:1,filelist:t.negative_imagelist,clear:t.clear},on:{files:function(t){return e.templateBase2(t,s)}}}):e._e(),e._v(" "),t.show.otherImage?i("single-image",{attrs:{msg:"最多7张",label:"其他素材",type:".jpg,.png,.gif",size:"2097152",limit:7,filelist:t.imageslist2,clear:t.clear},on:{files:function(t){return e.templateOther2(t,s)}}}):e._e(),e._v(" "),t.show.knowledgeVideo?i("single-image",{attrs:{msg:"最多4个",label:"视频素材",type:".mp4",size:"524288000",limit:4,filelist:t.videoslist2,clear:t.clear},on:{files:function(t){return e.templateVideo2(t,s)}}}):e._e(),e._v(" "),t.show.knowledgeAudio?i("single-image",{attrs:{msg:"最多4个",label:"音频素材",type:".mp3",limit:4,filelist:t.audiolist2,clear:t.clear},on:{files:function(t){return e.templateAudio2(t,s)}}}):e._e()],1):i("div",[t.show.knowledgeImage?i("single-image",{attrs:{msg:"最多4张",label:"图片素材",type:".jpg,.png,.gif",size:"2097152",limit:4,filelist:t.imageslist1,clear:t.clear},on:{files:function(t){return e.templateImage1(t,s)}}}):e._e(),e._v(" "),t.show.knowledgeVideo?i("single-image",{attrs:{msg:"最多4个",label:"视频素材",type:".mp4",size:"524288000",limit:4,filelist:t.videoslist1,clear:t.clear},on:{files:function(t){return e.templateVideo1(t,s)}}}):e._e(),e._v(" "),t.show.knowledgeAudio?i("single-image",{attrs:{msg:"最多4个",label:"音频素材",type:".mp3",limit:4,filelist:t.audiolist1,clear:t.clear},on:{files:function(t){return e.templateAudio1(t,s)}}}):e._e()],1)])}))],2):e._e(),e._v(" "),i("div",{style:{display:e.Knowledge.length>0?"block":"inline-block"}},[i("el-button",{attrs:{type:"primary"},on:{click:e.newKnowledge}},[e._v("新增")])],1)])]),e._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"Expand"},[i("label",[e._v("课后拓展:")]),e._v(" "),i("div",{staticClass:"c_right"},[i("div",[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.tuozhanSeleteValue,callback:function(t){e.tuozhanSeleteValue=t},expression:"tuozhanSeleteValue"}},e._l(e.tuozhanSelete,(function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1),e._v(" "),i("div",{staticClass:"text"},[e._v("课后扩展只有模板1暂不可修改，且永远出现在最后一个知识点素材")]),e._v(" "),i("div",[i("el-checkbox-group",{on:{change:e.tuozhanChange},model:{value:e.tuozhanList,callback:function(t){e.tuozhanList=t},expression:"tuozhanList"}},[i("el-checkbox",{attrs:{disabled:"",label:"图片素材"}}),e._v(" "),i("el-checkbox",{attrs:{label:"视频素材"}}),e._v(" "),i("el-checkbox",{attrs:{label:"音频素材"}})],1)],1),e._v(" "),i("div",[e.tuozhanImage?i("single-image",{attrs:{msg:"最多4张",label:"图片素材",type:".jpg,.png,.gif",size:"2097152",limit:4,filelist:e.aftersImagesList},on:{files:e.tuozhanImage1}}):e._e(),e._v(" "),e.tuozhanVideo?i("single-image",{attrs:{msg:"最多4个",label:"视频素材",size:"524288000",type:".mp4",limit:4,filelist:e.aftersVideosList},on:{files:e.tuozhanVideo1}}):e._e(),e._v(" "),e.tuozhanAudio?i("single-image",{attrs:{msg:"最多4个",label:"音频素材",type:".mp3",limit:4,filelist:e.aftersAudiosList},on:{files:e.tuozhanAudio1}}):e._e()],1)])]),e._v(" "),i("div",[i("label",{staticClass:"classwork"},[e._v("课时作业：")]),e._v(" "),i("div",{staticClass:"c_right work"},[i("div",{staticClass:"tips"},[e._v("课时作业共两个,1未学完作业,2全部学完作业")]),e._v(" "),i("div",[i("div",{staticClass:"total"},[e._v("1")]),e._v(" "),i("div",[i("el-checkbox-group",{on:{change:e.workSelete1},model:{value:e.workList1,callback:function(t){e.workList1=t},expression:"workList1"}},[i("el-checkbox",{attrs:{disabled:"",label:"作业文字"}}),e._v(" "),i("el-checkbox",{attrs:{label:"作业图片"}}),e._v(" "),i("el-checkbox",{attrs:{label:"作业视频"}})],1)],1),e._v(" "),i("div",[e.workT1?i("el-input",{staticClass:"input",staticStyle:{"margin-bottom":"13px"},attrs:{placeholder:"作业文字，字数为300以内",maxlength:"300",type:"textarea",resize:"none"},model:{value:e.workText1,callback:function(t){e.workText1=t},expression:"workText1"}}):e._e(),e._v(" "),e.workI1?i("single-image",{attrs:{msg:"最多5张",label:"图片素材",size:"2097152",type:".jpg,.png",limit:5,filelist:e.workImageList1},on:{files:e.homeWorkI1}}):e._e(),e._v(" "),e.workV1?i("single-image",{attrs:{label:"视频素材",type:".mp4",size:"524288000",limit:1,filelist:e.workVideoList1},on:{files:e.homeWorkV1}}):e._e()],1)]),e._v(" "),i("div",[i("div",{staticClass:"total"},[e._v("2")]),e._v(" "),i("div",[i("el-checkbox-group",{on:{change:e.workSelete2},model:{value:e.workList2,callback:function(t){e.workList2=t},expression:"workList2"}},[i("el-checkbox",{attrs:{disabled:"",label:"作业文字"}}),e._v(" "),i("el-checkbox",{attrs:{label:"作业图片"}}),e._v(" "),i("el-checkbox",{attrs:{label:"作业视频"}})],1)],1),e._v(" "),i("div",[e.workT2?i("el-input",{staticClass:"input",staticStyle:{"margin-bottom":"13px"},attrs:{placeholder:"作业文字，字数为300以内",maxlength:"300",type:"textarea",resize:"none"},model:{value:e.workText2,callback:function(t){e.workText2=t},expression:"workText2"}}):e._e(),e._v(" "),e.workI2?i("single-image",{attrs:{msg:"最多5张",label:"图片素材",type:".jpg,.png",size:"2097152",limit:5,filelist:e.workImageList2},on:{files:e.homeWorkI2}}):e._e(),e._v(" "),e.workV2?i("single-image",{attrs:{label:"视频素材",type:".mp4",size:"524288000",limit:1,filelist:e.workVideoList2},on:{files:e.homeWorkV2}}):e._e()],1)])])])]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"info"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"success"},on:{click:e.addA}},[e._v("确 定")])],1)])},a=[],o=(i("7f7f"),i("af59")),l=i("70a2"),n=i("5c96"),r={components:{SingleImage:l["a"]},props:["dialogVisible","id","bookid"],data:function(){return{dialogVisibleii:this.dialogVisible,checked:!0,Knowledgebox:[],knowledgeVideo:!1,knowledgeAudio:!1,knowledgeImage:!0,options:[],value1:"",classNum:"",className:"",workText1:"",workText2:"",KnowledgeNum:0,Knowledge:[],clear1:!1,clear2:!1,CatalogueId:"",tuozhanSelete:[{value:1,label:"模版一[知识点]"}],tuozhanSeleteValue:"模版一[知识点]",tuozhanList:[],tuozhanImage:!1,tuozhanVideo:!1,tuozhanAudio:!1,afters:{template_type:1,images:"",videos:[],audios:[]},workList1:["作业文字"],workList2:["作业文字"],workT1:!0,workI1:!1,workV1:!1,workT2:!0,workI2:!1,workV2:!1,works1:{},works2:{},aftersVideosList:[],aftersImagesList:[],aftersAudiosList:[],workImageList1:[],workVideoList1:[],workImageList2:[],workVideoList2:[],works1images:"",works2images:"",works1videos:"",works2videos:""}},watch:{id:function(e,t){},bookid:function(e,t){}},mounted:function(){this.getDirectoryList(this.bookid),this.getClassDetail(this.id)},methods:{close:function(){this.$emit("close",!1)},templateImage1:function(e,t){this.Knowledge[t].images="";for(var i=0;i<e.length;i++)this.Knowledge[t].images+="".concat(e[i].url,",");this.Knowledge[t].images=this.Knowledge[t].images.substring(0,this.Knowledge[t].images.length-1)},templateVideo1:function(e,t){this.Knowledge[t].videos=[];for(var i=0;i<e.length;i++)this.Knowledge[t].videos.push({url:e[i].url,title:e[i].name,cover:e[i].cover})},templateAudio1:function(e,t){this.Knowledge[t].audios=[];for(var i=0;i<e.length;i++)this.Knowledge[t].audios.push({url:e[i].url,title:e[i].name})},templateVideo2:function(e,t){this.Knowledge[t].videos=[];for(var i=0;i<e.length;i++)this.Knowledge[t].videos.push({url:e[i].url,title:e[i].name,cover:e[i].cover})},templateAudio2:function(e,t){this.Knowledge[t].audios=[];for(var i=0;i<e.length;i++)this.Knowledge[t].audios.push({url:e[i].url,title:e[i].name})},templateBase2:function(e,t){this.Knowledge[t].negative_image="";for(var i=0;i<e.length;i++)this.Knowledge[t].negative_image+="".concat(e[i].url,",");this.Knowledge[t].negative_image=this.Knowledge[t].negative_image.substring(0,this.Knowledge[t].negative_image.length-1)},templateOther2:function(e,t){this.Knowledge[t].images="";for(var i=0;i<e.length;i++)this.Knowledge[t].images+="".concat(e[i].url,",");this.Knowledge[t].images=this.Knowledge[t].images.substring(0,this.Knowledge[t].images.length-1)},tuozhanImage1:function(e){this.afters.images="";for(var t=0;t<e.length;t++)this.afters.images+="".concat(e[t].url,",");this.afters.images=this.afters.images.substring(0,this.afters.images.length-1)},tuozhanVideo1:function(e){this.afters.videos=[];for(var t=0;t<e.length;t++)this.afters.videos.push({url:e[t].url,title:e[t].name,cover:e[t].cover})},tuozhanAudio1:function(e){this.afters.audios=[];for(var t=0;t<e.length;t++)this.afters.audios.push({url:e[t].url,title:e[t].name})},homeWorkI1:function(e){this.works1images="";for(var t=0;t<e.length;t++)this.works1images+="".concat(e[t].url,",");this.works1images=this.works1images.substring(0,this.works1images.length-1)},homeWorkI2:function(e){this.works2images="";for(var t=0;t<e.length;t++)this.works2images+="".concat(e[t].url,",");this.works2images=this.works2images.substring(0,this.works2images.length-1)},handleClose:function(){this.$emit("close",!1)},homeWorkV1:function(e){this.works1videos=e[0].url,console.log(this.works1)},homeWorkV2:function(e){this.works2videos=e[0].url},newCatalogue:function(){this.CatalogueNum=this.CatalogueNum+1,this.CatalogueNum<=9?this.Catalogue.push({directory_no:parseInt("0".concat(this.CatalogueNum)),title:""}):this.Catalogue.push({directory_no:parseInt("".concat(this.CatalogueNum)),title:""}),console.log(this.Catalogue)},deleCatalogue:function(e){this.Catalogue.splice(e,1),console.log(this.Catalogue)},addA:function(){var e=this;console.log(this.Knowledge),console.log(this.CatalogueId),console.log(this.afters),this.works1.images=this.works1images,this.works2.images=this.works2images,this.works1.video=this.works1videos,this.works2.video=this.works2videos,this.works1.describe=this.workText1,this.works2.describe=this.workText2;var t=this.Knowledge;if(this.classNum==this.className)return Object(n["Message"])({message:"课时编号与课时名称不能重复",type:"error",duration:5e3}),!1;for(var i=0;i<t.length;i++){if(1==t[i].template_type&&!t[i].images)return Object(n["Message"])({message:"知识点图片素材不能为空",type:"error",duration:5e3}),!1;if(2==t[i].template_type&&(!t[i].images||!t[i].negative_image))return Object(n["Message"])({message:"知识点图片素材和底图素材不能为空",type:"error",duration:5e3}),!1}if(this.afters.images.length<1)return Object(n["Message"])({message:"课后拓展图片素材不能为空",type:"error",duration:5e3}),!1;for(var s=0;s<t.length;s++)delete t[s].Knowledgebox1,delete t[s].Knowledgebox2,delete t[s].Template,delete t[s].Templatevalue,delete t[s].clear,delete t[s].show,delete t[s].audiolist1,delete t[s].audiolist2,delete t[s].imageslist1,delete t[s].imageslist2,delete t[s].negative_imagelist,delete t[s].videoslist1,delete t[s].videoslist2;var a={knowledges:t,afters:this.afters,works:[this.works1,this.works2],book_id:this.bookid,book_directory_id:this.CatalogueId,class_no:this.classNum,title:this.className};return new Promise((function(t,i){Object(o["e"])(e.id,a).then((function(t){console.log(t),0==t.error_code&&(Object(n["Message"])({message:"编辑成功",type:"success",duration:5e3}),e.$emit("close",!0))})).catch((function(e){i(e)}))}))},getDirectoryList:function(e){var t=this;return new Promise((function(i,s){Object(o["f"])(e).then((function(e){0==e.error_code&&(t.options=e.data)})).catch((function(e){s(e)}))}))},getClassDetail:function(e){var t=this;return new Promise((function(i,s){Object(o["g"])(e).then((function(e){if(0==e.error_code){var i=e.data.knowledges,s=e.data.afters,a=e.data.directory,o=e.data.works;t.className=e.data.title,t.classNum=e.data.class_no,t.CatalogueId=a.id,t.afters.id=s[0].id,t.afters.material_id=s[0].material_id;for(var l=0;l<s.length;l++){if(s[l].material.videos.length>0){t.tuozhanList.push("视频素材"),t.tuozhanVideo=!0;for(var n=0;n<s[l].material.videos.length;n++)t.aftersVideosList.push({url:s[l].material.videos[n].url,name:s[l].material.videos[n].title,cover:s[l].material.videos[n].cover}),t.afters.videos.push({url:s[l].material.videos[n].url,title:s[l].material.videos[n].title,cover:s[l].material.videos[n].cover})}if(s[l].material.audios.length>0){t.tuozhanList.push("音频素材"),t.tuozhanAudio=!0;for(var r=0;r<s[l].material.audios.length;r++)t.aftersAudiosList.push({url:s[l].material.audios[r].url,name:s[l].material.audios[r].title}),t.afters.audios.push({url:s[l].material.audios[r].url,title:s[l].material.audios[r].title})}if(s[l].material.images.length>0){t.tuozhanList.push("图片素材"),t.tuozhanImage=!0;for(var g=0;g<s[l].material.images.length;g++)t.aftersImagesList.push({url:s[l].material.images[g].url}),t.afters.images+="".concat(s[l].material.images[g].url,",");t.afters.images=t.afters.images.substring(0,t.afters.images.length-1)}}if(t.workText1=o[0].describe,t.workText2=o[1].describe,t.works1.id=o[0].id,t.works2.id=o[1].id,t.works1.classwork_no=o[0].classwork_no,t.works2.classwork_no=o[1].classwork_no,o[0].images.length>0){t.workList1.push("作业图片"),t.workI1=!0;for(var d=0;d<o[0].images.length;d++)t.workImageList1.push({url:o[0].images[d]}),t.works1images+="".concat(o[0].images[d],","),console.log("llalala");t.works1images=t.works1images.substring(0,t.works1images.length-1)}if(null!=o[0].video&&(t.workList1.push("作业视频"),t.workV1=!0,t.workVideoList1.push({url:o[0].video}),t.works1videos=o[0].video),o[1].images.length>0){t.workList2.push("作业图片"),t.workI2=!0;for(var u=0;u<o[1].images.length;u++)t.workImageList2.push({url:o[1].images[u]}),t.works2.images+="".concat(o[1].images[u],",");t.works2images=t.works2images.substring(0,t.works2images.length-1)}null!=o[1].video&&(t.workList2.push("作业视频"),t.workV2=!0,t.workVideoList2.push({url:o[1].video}),t.works2videos=o[1].video);for(var c=0;c<i.length;c++){if(i[c].show={knowledgeImage:!0,knowledgeVideo:!1,knowledgeAudio:!1,baseImage:!1,otherImage:!1},1==i[c].material.template_type){if(i[c].Templatevalue="模板1[知识点]",i[c].imageslist1=[],i[c].videoslist1=[],i[c].audioslist1=[],i[c].Knowledgebox1=[],i[c].videos=[],i[c].audios=[],i[c].images="",i[c].material.images.length>0){i[c].Knowledgebox1.push("图片素材"),i[c].show.knowledgeImage=!0;for(var m=0;m<i[c].material.images.length;m++)i[c].imageslist1.push({url:i[c].material.images[m].url}),i[c].images+="".concat(i[c].material.images[m].url,",");i[c].images=i[c].images.substring(0,i[c].images.length-1)}if(i[c].material.videos.length>0){console.log("视频"),i[c].Knowledgebox1.push("视频素材"),i[c].show.knowledgeVideo=!0;for(var h=0;h<i[c].material.videos.length;h++)i[c].videoslist1.push({url:i[c].material.videos[h].url,name:i[c].material.videos[h].title,cover:i[c].material.videos[h].cover}),i[c].videos.push({url:i[c].material.videos[h].url,title:i[c].material.videos[h].title,cover:i[c].material.videos[h].cover})}if(i[c].material.audios.length>0){i[c].Knowledgebox1.push("音频素材"),i[c].show.knowledgeAudio=!0;for(var w=0;w<i[c].material.audios.length;w++)i[c].audioslist1.push({url:i[c].material.audios[w].url,name:i[c].material.audios[w].title}),i[c].audios.push({url:i[c].material.audios[w].url,title:i[c].material.audios[w].title})}}else if(2==i[c].material.template_type){if(i[c].Templatevalue="模板2[交互]",i[c].imageslist2=[],i[c].videoslist2=[],i[c].negative_imagelist=[],i[c].audioslist2=[],i[c].Knowledgebox2=[],i[c].videos=[],i[c].audios=[],i[c].images="",i[c].negative_image="",i[c].material.images.length>0){i[c].Knowledgebox2.push("其他素材"),i[c].show.otherImage=!0;for(var v=0;v<i[c].material.images.length;v++)i[c].imageslist2.push({url:i[c].material.images[v].url}),i[c].images+="".concat(i[c].material.images[v].url,",");i[c].images=i[c].images.substring(0,i[c].images.length-1)}if(i[c].material.videos.length>0){i[c].Knowledgebox2.push("视频素材"),i[c].show.knowledgeVideo=!0;for(var f=0;f<i[c].material.videos.length;f++)i[c].videoslist2.push({url:i[c].material.videos[f].url,name:i[c].material.videos[f].title,cover:i[c].material.videos[f].cover}),i[c].videos.push({url:i[c].material.videos[f].url,title:i[c].material.videos[f].title,cover:i[c].material.videos[f].cover})}if(i[c].material.audios.length>0){i[c].Knowledgebox2.push("音频素材"),i[c].show.knowledgeAudio=!0;for(var k=0;k<i[c].material.audios.length;k++)i[c].audioslist2.push({url:i[c].material.audios[k].url,name:i[c].material.audios[k].title}),i[c].audios.push({url:i[c].material.audios[k].url,title:i[c].material.audios[k].title})}i[c].material.negative_image.length>0&&(i[c].Knowledgebox2.push("底图素材"),i[c].show.baseImage=!0,i[c].negative_imagelist.push({url:i[c].material.negative_image}),i[c].negative_image+="".concat(i[c].material.negative_image,","),i[c].negative_image=i[c].negative_image.substring(0,i[c].negative_image.length-1))}t.Knowledge.push({id:i[c].id,material_id:i[c].material_id,knowledge_no:i[c].knowledge_no,template_type:i[c].material.template_type,images:i[c].images,videos:i[c].videos,audios:i[c].audios,negative_image:i[c].negative_image,Template:[{value:"1",label:"模板1[知识点]"},{value:"2",label:"模板2[交互]"}],Templatevalue:i[c].Templatevalue,show:i[c].show,Knowledgebox1:i[c].Knowledgebox1,Knowledgebox2:i[c].Knowledgebox2,imageslist1:i[c].imageslist1,videoslist1:i[c].videoslist1,audiolist1:i[c].audioslist1,imageslist2:i[c].imageslist2,videoslist2:i[c].videoslist2,audiolist2:i[c].audioslist2,negative_imagelist:i[c].negative_imagelist})}t.KnowledgeNum=t.Knowledge[t.Knowledge.length-1].knowledge_no}})).catch((function(e){s(e)}))}))},newKnowledge:function(){this.KnowledgeNum=this.KnowledgeNum+1,this.Knowledge.push({knowledge_no:this.KnowledgeNum,template_type:1,images:"",videos:[],audios:[],negative_image:"",Knowledgebox1:["图片素材"],Knowledgebox2:["底图素材","其他素材"],show:{knowledgeImage:!0,knowledgeVideo:!1,knowledgeAudio:!1,baseImage:!1,otherImage:!1},Template:[{value:"1",label:"模板1[知识点]"},{value:"2",label:"模板2[交互]"}],Templatevalue:"模板1[知识点]",clear:!1})},deleteKnowledge:function(e){this.Knowledge.splice(e,1)},KnowledgeChange:function(e,t){e.indexOf("音频素材")>-1?this.Knowledge[t].show.knowledgeAudio=!0:this.Knowledge[t].show.knowledgeAudio=!1,e.indexOf("视频素材")>-1?this.Knowledge[t].show.knowledgeVideo=!0:this.Knowledge[t].show.knowledgeVideo=!1,e.indexOf("图片素材")>-1?this.Knowledge[t].show.knowledgeImage=!0:this.Knowledge[t].show.knowledgeImage=!1,e.indexOf("底图素材")>-1?this.Knowledge[t].show.baseImage=!0:this.Knowledge[t].show.baseImage=!1,e.indexOf("其他素材")>-1?this.Knowledge[t].show.otherImage=!0:this.Knowledge[t].show.otherImage=!1},TemplateSelete:function(e,t){this.Knowledge[t].clear=!this.Knowledge[t].clear,2==e?(this.Knowledge[t].show.baseImage=!0,this.Knowledge[t].show.otherImage=!0,this.Knowledge[t].Knowledgebox2=["底图素材","其他素材"],this.Knowledge[t].template_type=2):(this.Knowledge[t].show.baseImage=!1,this.Knowledge[t].show.otherImage=!1,this.Knowledge[t].show.knowledgeImage=!0,this.Knowledge[t].Knowledgebox1=["图片素材"],this.Knowledge[t].template_type=1),this.Knowledge[t].show.knowledgeAudio=!1,this.Knowledge[t].show.knowledgeVideo=!1,this.Knowledge[t].images="",this.Knowledge[t].negative_image="",this.Knowledge[t].audios=[],this.Knowledge[t].videos=[],this.Knowledge[t].videolist1=[],this.Knowledge[t].videolist2=[],this.Knowledge[t].audiolist1=[],this.Knowledge[t].audiolist2=[],this.Knowledge[t].imageslist1=[],this.Knowledge[t].imageslist2=[],this.Knowledge[t].negative_imagelist=[]},tuozhanChange:function(e){console.log(e),e.indexOf("图片素材")>-1?this.tuozhanImage=!0:this.tuozhanImage=!1,e.indexOf("视频素材")>-1?this.tuozhanVideo=!0:this.tuozhanVideo=!1,e.indexOf("音频素材")>-1?this.tuozhanAudio=!0:this.tuozhanAudio=!1},workSelete1:function(e){e.indexOf("作业文字")>-1?this.workT1=!0:this.workT1=!1,e.indexOf("作业图片")>-1?this.workI1=!0:this.workI1=!1,e.indexOf("作业视频")>-1?this.workV1=!0:this.workV1=!1},workSelete2:function(e){e.indexOf("作业文字")>-1?this.workT2=!0:this.workT2=!1,e.indexOf("作业图片")>-1?this.workI2=!0:this.workI2=!1,e.indexOf("作业视频")>-1?this.workV2=!0:this.workV2=!1},arrayTirm:function(e){for(var t=0;t<e.length;t++)for(var i in e[t])e[t][i].length<1&&delete e[t][i]}}},g=r,d=(i("8815"),i("2877")),u=Object(d["a"])(g,s,a,!1,null,"aa1954b2",null);t["default"]=u.exports},8815:function(e,t,i){"use strict";var s=i("97ae"),a=i.n(s);a.a},"91b6":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("b775");function a(){return Object(s["a"])({url:"public/upload_config",method:"get"})}},"97ae":function(e,t,i){},af59:function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"d",(function(){return l})),i.d(t,"f",(function(){return n})),i.d(t,"a",(function(){return r})),i.d(t,"g",(function(){return g})),i.d(t,"e",(function(){return d})),i.d(t,"h",(function(){return u}));var s=i("b775");function a(e,t,i,a){return Object(s["a"])({url:"cs/book_class/by/".concat(e),method:"get",params:{page:t,limit:"10",filters:i,ops:a}})}function o(e,t,i,a){return Object(s["a"])({url:"cs/book_class/by/".concat(e),method:"get",params:{page:t,limit:"1000000",filters:i,ops:a}})}function l(e){return Object(s["a"])({url:"cs/book_class",method:"delete",params:{ids:e}})}function n(e){return Object(s["a"])({url:"cs/book_class/directory_list/".concat(e),method:"get"})}function r(e){return Object(s["a"])({url:"cs/book_class",method:"post",data:e})}function g(e){return Object(s["a"])({url:"cs/book_class/".concat(e),method:"get"})}function d(e,t){return Object(s["a"])({url:"cs/book_class/".concat(e),method:"put",data:t})}function u(e){return Object(s["a"])({url:"cs/book/pack_class/".concat(e),method:"post"})}}}]);