<template>
  <el-dialog
    title="编辑课时"
    :visible.sync="dialogVisible"
    width="100%"
    custom-class="customWidth"
    center
    top="0"
    :close-on-click-modal="false"
    :before-close="handleClose"
  >
    <div class="uploadText">
      图片小于 2M/张，视频MP4小于 500M/个，音频MP3小于 20M/个
    </div>
    <div class="left">
      <div>
        <label>教材目录：</label>
        <div class="c_right">
          <el-select v-model="CatalogueId" placeholder="请选择">
            <el-option
              v-for="(item,index) in options"
              :key="item.id"
              :value="item.id"
              :label="`${index+1}. ${item.title}`"
            />
          </el-select>
        </div>
      </div>
      <div>
        <label>课时名称：</label>
        <div class="c_right className">
          <el-input v-model="classNum" placeholder="课时编号" class="input" maxlength="20" />
          <el-input
            v-model="className"
            placeholder="请输入课时名称，字数最多20字内"
            class="input"
            maxlength="20"
          />
        </div>
      </div>
      <div class="class">
        <label>课堂知识点:</label>
        <div v-if="Knowledge.length>0" class="c_right classKnow">
          <div class>
            <div class="total">{{ Knowledge.length }}</div>
            <span>个知识点</span>
          </div>
          <div v-for="(items,index) in Knowledge" :key="index" class="upload">
            <div>
              <svg-icon
                class-name="search-icon"
                icon-class="laji"
                class="laji"
                @click="deleteKnowledge(index)"
              />
              <div class="total">{{ index+1 }}</div>
              <!-- <el-input
                v-model="items.knowledge_no"
                class="total konwtotal"
                maxlength="20"
              /> -->
              <el-select
                v-model="items.Templatevalue"
                placeholder="请选择"
                @change="TemplateSelete($event,index)"
              >
                <el-option
                  v-for="item in items.Template"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                />
              </el-select>
            </div>
            <div>
              <el-checkbox-group
                v-if="items.template_type==2"
                v-model="items.Knowledgebox2"
                @change="KnowledgeChange($event,index)"
              >
                <el-checkbox disabled label="底图素材" />
                <el-checkbox disabled label="其他素材" />
                <el-checkbox label="音频素材" />
                <el-checkbox label="视频素材" />
              </el-checkbox-group>
              <el-checkbox-group
                v-else
                v-model="items.Knowledgebox1"
                @change="KnowledgeChange($event,index)"
              >
                <el-checkbox disabled label="图片素材" />
                <el-checkbox label="音频素材" />
                <el-checkbox label="视频素材" />
              </el-checkbox-group>
            </div>
            <div :key="items.knowledge_no">
              <single-image
                v-if="items.show.baseImage"
                :key="items.knowledge_no+1"
                label="底图素材"
                type=".jpg,.png,.gif"
                size="2097152"
                :limit="1"
                :filelist="items.negative_imagelist"
                @files="templateBase2($event,index)"
              />
              <single-image
                v-if="items.show.otherImage"
                :key="items.knowledge_no+2"
                msg="最多7张"
                label="其他素材"
                type=".jpg,.png,.gif"
                size="2097152"
                :limit="7"
                :filelist="items.imageslist2"
                @files="templateOther2($event,index)"
              />
              <!-- <single-image
                v-if="items.show.knowledgeVideo"
                msg="最多4个"
                label="视频素材"
                type=".mp4"
                size="524288000"
                :limit="4"
                :filelist="items.videoslist2"
                :clear1="items.clear"
                @files="templateVideo2($event,index)"
              />
              <single-image
                v-if="items.show.knowledgeAudio"
                msg="最多4个"
                label="音频素材"
                type=".mp3"
                :limit="4"
                :filelist="items.audiolist2"
                :clear1="items.clear"
                @files="templateAudio2($event,index)"
              /> -->
              <single-image
                v-if="items.show.knowledgeImage"
                :key="items.knowledge_no+3"
                msg="最多4张"
                label="图片素材"
                type=".jpg,.png,.gif"
                size="2097152"
                :limit="4"
                :filelist="items.imageslist1"
                @files="templateImage1($event,index)"
              />
              <single-image
                v-if="items.show.knowledgeVideo"
                :key="items.knowledge_no+4"
                msg="最多4个"
                label="视频素材"
                type=".mp4"
                size="524288000"
                :limit="4"
                :filelist="items.videoslist1"
                @files="templateVideo1($event,index)"
              />
              <single-image
                v-if="items.show.knowledgeAudio"
                :key="items.knowledge_no+5"
                msg="最多4个"
                label="音频素材"
                type=".mp3"
                :limit="4"
                :filelist="items.audiolist1"
                @files="templateAudio1($event,index)"
              />
            </div>
          </div>
        </div>
        <div :style="{'display':Knowledge.length>0?'block':'inline-block'}">
          <el-button type="primary" @click="newKnowledge">新增</el-button>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="Expand">
        <label>课后拓展:</label>
        <div class="c_right">
          <div>
            <el-select
              v-model="tuozhanSeleteValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in tuozhanSelete"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              />
            </el-select>
          </div>
          <div class="text">课后扩展只有模板1暂不可修改，且永远出现在最后一个知识点素材</div>
          <div>
            <el-checkbox-group v-model="tuozhanList" @change="tuozhanChange">
              <el-checkbox disabled label="图片素材" />
              <el-checkbox label="视频素材" />
              <el-checkbox label="音频素材" />
            </el-checkbox-group>
          </div>
          <div>
            <single-image
              v-if="tuozhanImage"
              msg="最多4张"
              label="图片素材"
              type=".jpg,.png,.gif"
              size="2097152"
              :limit="4"
              :filelist="aftersImagesList"
              @files="tuozhanImage1"
            />
            <single-image
              v-if="tuozhanVideo"
              msg="最多4个"
              label="视频素材"
              size="524288000"
              type=".mp4"
              :limit="4"
              :filelist="aftersVideosList"

              @files="tuozhanVideo1"
            />
            <single-image
              v-if="tuozhanAudio"
              msg="最多4个"
              label="音频素材"
              type=".mp3"
              :limit="4"
              :filelist="aftersAudiosList"
              @files="tuozhanAudio1"
            />
          </div>
        </div>
      </div>
      <div>
        <label class="classwork">课时作业：</label>
        <div class="c_right work">
          <div class="tips">课时作业共两个,1未学完作业,2全部学完作业</div>
          <div>
            <div class="total">1</div>
            <div>
              <el-checkbox-group v-model="workList1" @change="workSelete1">
                <el-checkbox disabled label="作业文字" />
                <el-checkbox label="作业图片" />
                <el-checkbox label="作业视频" />
              </el-checkbox-group>
            </div>
            <div>
              <el-input
                v-if="workT1"
                v-model="workText1"
                placeholder="作业文字，字数为300以内"
                class="input"
                maxlength="300"
                type="textarea"
                resize="none"
                style="margin-bottom:13px"
              />
              <single-image
                v-if="workI1"
                msg="最多5张"
                label="图片素材"
                size="2097152"
                type=".jpg,.png"
                :limit="5"
                :filelist="workImageList1"
                @files="homeWorkI1"
              />
              <single-image
                v-if="workV1"
                label="视频素材"
                type=".mp4"
                size="524288000"
                :limit="1"
                :filelist="workVideoList1"
                @files="homeWorkV1"
              />
            </div>
          </div>
          <div>
            <div class="total">2</div>
            <div>
              <el-checkbox-group v-model="workList2" @change="workSelete2">
                <el-checkbox disabled label="作业文字" />
                <el-checkbox label="作业图片" />
                <el-checkbox label="作业视频" />
              </el-checkbox-group>
            </div>
            <div>
              <el-input
                v-if="workT2"
                v-model="workText2"
                placeholder="作业文字，字数为300以内"
                class="input"
                maxlength="300"
                type="textarea"
                resize="none"
                style="margin-bottom:13px"
              />
              <single-image
                v-if="workI2"
                msg="最多5张"
                label="图片素材"
                type=".jpg,.png"
                size="2097152"
                :limit="5"
                :filelist="workImageList2"
                @files="homeWorkI2"
              />
              <single-image
                v-if="workV2"
                label="视频素材"
                type=".mp4"
                size="524288000"
                :limit="1"
                :filelist="workVideoList2"
                @files="homeWorkV2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <single-image :msg="message"></single-image> -->
    <span slot="footer" class="dialog-footer">
      <el-button type="info" @click="close">取 消</el-button>
      <el-button type="success" @click="addA">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getclassManagementDetail, getDirectory_list, editclassManagementList } from '../../../../api/classManagement'
import SingleImage from '@/components/Upload/SingleImage3'
import { Message } from 'element-ui'
export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible', 'id', 'bookid'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      checked: true,
      Knowledgebox: [],
      knowledgeVideo: false,
      knowledgeAudio: false,
      knowledgeImage: true,
      options: [],
      value1: '',
      classNum: '',
      className: '',
      workText1: '',
      workText2: '',
      KnowledgeNum: 0,
      Knowledge: [],
      CatalogueId: '',
      tuozhanSelete: [{ value: 1, label: '模版一[知识点]' }],
      tuozhanSeleteValue: '模版一[知识点]',
      tuozhanList: [],
      tuozhanImage: false,
      tuozhanVideo: false,
      tuozhanAudio: false,
      afters: { template_type: 1, images: '', videos: [], audios: [] },
      workList1: ['作业文字'],
      workList2: ['作业文字'],
      workT1: true,
      workI1: false,
      workV1: false,
      workT2: true,
      workI2: false,
      workV2: false,
      works1: { },
      works2: { },
      aftersVideosList: [],
      aftersImagesList: [],
      aftersAudiosList: [],
      workImageList1: [],
      workVideoList1: [],
      workImageList2: [],
      workVideoList2: [],
      works1images: '',
      works2images: '',
      works1videos: '',
      works2videos: ''
    }
  },
  watch: {
    id(newval, oldval) {
      // this.getClassDetail(newval)
    },
    bookid(newval, oldval) {
      // this.getDirectoryList(newval)
    }
  },
  mounted() {
    this.getDirectoryList(this.bookid)
    this.getClassDetail(this.id)
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
    templateImage1(res, index) {
      this.Knowledge[index].images = ''
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].images += `${res[i].url},`
      }
      this.Knowledge[index].images = this.Knowledge[index].images.substring(0, this.Knowledge[index].images.length - 1)
    },
    templateVideo1(res, index) {
      this.Knowledge[index].videos = []
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].videos.push({ url: res[i].url, title: res[i].name, cover: res[i].cover })
      }
    },
    templateAudio1(res, index) {
      this.Knowledge[index].audios = []
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].audios.push({ url: res[i].url, title: res[i].name })
      }
    },
    // templateVideo2(res, index) {
    //   this.Knowledge[index].videos = []
    //   for (let i = 0; i < res.length; i++) {
    //     this.Knowledge[index].videos.push({ url: res[i].url, title: res[i].name, cover: res[i].cover })
    //   }
    // },
    // templateAudio2(res, index) {
    //   this.Knowledge[index].audios = []
    //   for (let i = 0; i < res.length; i++) {
    //     this.Knowledge[index].audios.push({ url: res[i].url, title: res[i].name })
    //   }
    // },
    templateBase2(res, index) {
      this.Knowledge[index].negative_image = ''
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].negative_image += `${res[i].url},`
      }
      this.Knowledge[index].negative_image = this.Knowledge[index].negative_image.substring(0, this.Knowledge[index].negative_image.length - 1)
    },
    templateOther2(res, index) {
      this.Knowledge[index].images = ''
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].images += `${res[i].url},`
      }
      this.Knowledge[index].images = this.Knowledge[index].images.substring(0, this.Knowledge[index].images.length - 1)
    },
    tuozhanImage1(res) {
      this.afters.images = ''
      for (let i = 0; i < res.length; i++) {
        this.afters.images += `${res[i].url},`
      }
      this.afters.images = this.afters.images.substring(0, this.afters.images.length - 1)
    },
    tuozhanVideo1(res) {
      this.afters.videos = []
      for (let i = 0; i < res.length; i++) {
        this.afters.videos.push({ url: res[i].url, title: res[i].name, cover: res[i].cover })
      }
    },
    tuozhanAudio1(res) {
      this.afters.audios = []
      for (let i = 0; i < res.length; i++) {
        this.afters.audios.push({ url: res[i].url, title: res[i].name })
      }
    },
    homeWorkI1(res) {
      this.works1images = ''
      for (let i = 0; i < res.length; i++) {
        this.works1images += `${res[i].url},`
      }
      this.works1images = this.works1images.substring(0, this.works1images.length - 1)
    },
    homeWorkI2(res) {
      this.works2images = ''
      for (let i = 0; i < res.length; i++) {
        this.works2images += `${res[i].url},`
      }
      this.works2images = this.works2images.substring(0, this.works2images.length - 1)
    },
    handleClose() {
      this.$emit('close', false)
    },
    homeWorkV1(res) {
      this.works1videos = res[0].url
    },
    homeWorkV2(res) {
      this.works2videos = res[0].url
    },
    newCatalogue() {
      this.CatalogueNum = this.CatalogueNum + 1
      if (this.CatalogueNum <= 9) {
        this.Catalogue.push({
          directory_no: parseInt(`0${this.CatalogueNum}`),
          title: ''
        })
      } else {
        this.Catalogue.push({
          directory_no: parseInt(`${this.CatalogueNum}`),
          title: ''
        })
      }
    },
    deleCatalogue(index) {
      this.Catalogue.splice(index, 1)
    },
    addA() {
      this.works1.images = this.works1images
      this.works2.images = this.works2images
      this.works1.video = this.works1videos
      this.works2.video = this.works2videos
      this.works1.describe = this.workText1
      this.works2.describe = this.workText2
      const Know = this.Knowledge
      if (this.classNum == this.className) {
        Message({
          message: '课时编号与课时名称不能重复',
          type: 'error',
          duration: 5 * 1000
        })
        return false
      }
      console.log(this.Knowledge)
      for (let i = 0; i < Know.length; i++) {
        if (Know[i].template_type == 1 && !Know[i].images) {
          Message({
            message: '知识点图片素材不能为空',
            type: 'error',
            duration: 5 * 1000
          })
          return false
        } else if (Know[i].template_type == 2 && (!Know[i].images || !Know[i].negative_image)) {
          Message({
            message: '知识点图片素材和底图素材不能为空',
            type: 'error',
            duration: 5 * 1000
          })
          return false
        }
      }
      if (this.afters.images.length < 1) {
        Message({
          message: '课后拓展图片素材不能为空',
          type: 'error',
          duration: 5 * 1000
        })
        return false
      }
      for (let i = 0; i < Know.length; i++) {
        delete Know[i].Knowledgebox1
        delete Know[i].Knowledgebox2
        delete Know[i].Template
        delete Know[i].Templatevalue
        delete Know[i].show
        delete Know[i].audiolist1
        delete Know[i].imageslist1
        delete Know[i].imageslist2
        delete Know[i].negative_imagelist
        delete Know[i].videoslist1

        // ['Knowledgebox1', 'Knowledgebox2', 'Template', 'Templatevalue', 'clear', 'show', 'audiolist1', 'audiolist2', 'imageslist1', 'imageslist2', 'negative_imagelist', 'videoslist1', 'videoslist2']
      }

      const params = {
        knowledges: Know,
        afters: this.afters,
        works: [this.works1, this.works2],
        book_id: this.bookid,
        book_directory_id: this.CatalogueId,
        class_no: this.classNum,
        title: this.className
      }

      return new Promise((resolve, reject) => {
        editclassManagementList(this.id, params).then(res => {
          if (res.error_code == 0) {
            Message({
              message: '编辑成功',
              type: 'success',
              duration: 5 * 1000
            })
            this.$emit('close', true)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    getDirectoryList(bookId) {
      return new Promise((resolve, reject) => {
        getDirectory_list(bookId)
          .then(res => {
            if (res.error_code == 0) {
              this.options = res.data
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getClassDetail(id) {
      return new Promise((resolve, reject) => {
        getclassManagementDetail(id)
          .then(res => {
            if (res.error_code == 0) {
              const knowledges = res.data.knowledges
              const afters = res.data.afters
              const directory = res.data.directory
              const works = res.data.works
              this.className = res.data.title
              this.classNum = res.data.class_no
              // 以下是目录
              // for (let i = 0; i < this.options.length; i++) {
              //   if (this.options[i].id == directory.id) {
              this.CatalogueId = directory.id
              //   }
              // }
              // 以下是课后拓展
              this.afters.id = afters[0].id
              this.afters.material_id = afters[0].material_id
              for (let i = 0; i < afters.length; i++) {
                if (afters[i].material.videos.length > 0) {
                  this.tuozhanList.push('视频素材')
                  this.tuozhanVideo = true
                  for (let m = 0; m < afters[i].material.videos.length; m++) {
                    this.aftersVideosList.push({ url: afters[i].material.videos[m].url, name: afters[i].material.videos[m].title, cover: afters[i].material.videos[m].cover })
                    this.afters.videos.push({ url: afters[i].material.videos[m].url, title: afters[i].material.videos[m].title, cover: afters[i].material.videos[m].cover })
                  }
                }
                if (afters[i].material.audios.length > 0) {
                  this.tuozhanList.push('音频素材')
                  this.tuozhanAudio = true
                  for (let m = 0; m < afters[i].material.audios.length; m++) {
                    this.aftersAudiosList.push({ url: afters[i].material.audios[m].url, name: afters[i].material.audios[m].title })
                    this.afters.audios.push({ url: afters[i].material.audios[m].url, title: afters[i].material.audios[m].title })
                  }
                }
                if (afters[i].material.images.length > 0) {
                  this.tuozhanList.push('图片素材')
                  this.tuozhanImage = true
                  for (let m = 0; m < afters[i].material.images.length; m++) {
                    this.aftersImagesList.push({ url: afters[i].material.images[m].url })
                    this.afters.images += `${afters[i].material.images[m].url},`
                  }
                  this.afters.images = this.afters.images.substring(0, this.afters.images.length - 1)
                }
              }
              // 以下是作业
              this.workText1 = works[0].describe
              this.workText2 = works[1].describe
              this.works1.id = works[0].id
              this.works2.id = works[1].id
              this.works1.classwork_no = works[0].classwork_no
              this.works2.classwork_no = works[1].classwork_no
              if (works[0].images.length > 0) {
                this.workList1.push('作业图片')
                this.workI1 = true
                for (let m = 0; m < works[0].images.length; m++) {
                  this.workImageList1.push({ url: works[0].images[m] })
                  this.works1images += `${works[0].images[m]},`
                }
                this.works1images = this.works1images.substring(0, this.works1images.length - 1)
              }
              if (works[0].video != null) {
                this.workList1.push('作业视频')
                this.workV1 = true
                this.workVideoList1.push({ url: works[0].video })
                this.works1videos = works[0].video
              }
              if (works[1].images.length > 0) {
                this.workList2.push('作业图片')
                this.workI2 = true
                for (let m = 0; m < works[1].images.length; m++) {
                  this.workImageList2.push({ url: works[1].images[m] })
                  this.works2.images += `${works[1].images[m]},`
                }
                this.works2images = this.works2images.substring(0, this.works2images.length - 1)
              }
              if (works[1].video != null) {
                this.workList2.push('作业视频')
                this.workV2 = true
                this.workVideoList2.push({ url: works[1].video })
                this.works2videos = works[1].video
              }
              // 以下是知识点
              for (let i = 0; i < knowledges.length; i++) { 
                knowledges[i].show = { knowledgeImage: true, knowledgeVideo: false, knowledgeAudio: false, baseImage: false, otherImage: false }
                if (knowledges[i].material.template_type == 1) {
                  knowledges[i].Templatevalue = '模板1[知识点]'
                  knowledges[i].imageslist1 = []
                  knowledges[i].Knowledgebox1 = []
                  knowledges[i].videos = []
                  knowledges[i].audios = []
                  knowledges[i].images = ''
                  if (knowledges[i].material.images.length > 0) {
                    knowledges[i].Knowledgebox1.push('图片素材')
                    knowledges[i].show.knowledgeImage = true
                    for (let m = 0; m < knowledges[i].material.images.length; m++) {
                      knowledges[i].imageslist1.push({ url: knowledges[i].material.images[m].url })
                      knowledges[i].images += `${knowledges[i].material.images[m].url},`
                    }
                    knowledges[i].images = knowledges[i].images.substring(0, knowledges[i].images.length - 1)
                  }
                } else if (knowledges[i].material.template_type == 2) {
                  knowledges[i].Templatevalue = '模板2[交互]'
                  knowledges[i].imageslist2 = []
                  knowledges[i].negative_imagelist = []
                  knowledges[i].Knowledgebox2 = []
                  knowledges[i].videos = []
                  knowledges[i].audios = []
                  knowledges[i].images = ''
                  knowledges[i].negative_image = ''
                  if (knowledges[i].material.images.length > 0) {
                    knowledges[i].Knowledgebox2.push('其他素材')
                    knowledges[i].show.otherImage = true
                    for (let m = 0; m < knowledges[i].material.images.length; m++) {
                      knowledges[i].imageslist2.push({ url: knowledges[i].material.images[m].url })
                      knowledges[i].images += `${knowledges[i].material.images[m].url},`
                    }
                    knowledges[i].images = knowledges[i].images.substring(0, knowledges[i].images.length - 1)
                  } if (knowledges[i].material.negative_image.length > 0) {
                    knowledges[i].Knowledgebox2.push('底图素材')
                    knowledges[i].show.baseImage = true
                    knowledges[i].negative_imagelist.push({ url: knowledges[i].material.negative_image })
                    knowledges[i].negative_image += `${knowledges[i].material.negative_image},`

                    knowledges[i].negative_image = knowledges[i].negative_image.substring(0, knowledges[i].negative_image.length - 1)
                  }
                }
                knowledges[i].videoslist1 = []
                knowledges[i].audioslist1 = []
                if (knowledges[i].material.videos.length > 0) {
                  knowledges[i].Knowledgebox1.push('视频素材')
                  knowledges[i].show.knowledgeVideo = true
                  for (let m = 0; m < knowledges[i].material.videos.length; m++) {
                    knowledges[i].videoslist1.push({ url: knowledges[i].material.videos[m].url, name: knowledges[i].material.videos[m].title, cover: knowledges[i].material.videos[m].cover })
                    knowledges[i].videos.push({ url: knowledges[i].material.videos[m].url, title: knowledges[i].material.videos[m].title, cover: knowledges[i].material.videos[m].cover })
                  }
                }
                if (knowledges[i].material.audios.length > 0) {
                  knowledges[i].Knowledgebox1.push('音频素材')
                  knowledges[i].show.knowledgeAudio = true
                  for (let m = 0; m < knowledges[i].material.audios.length; m++) {
                    knowledges[i].audioslist1.push({ url: knowledges[i].material.audios[m].url, name: knowledges[i].material.audios[m].title })
                    knowledges[i].audios.push({ url: knowledges[i].material.audios[m].url, title: knowledges[i].material.audios[m].title })
                  }
                }
                this.Knowledge.push({ id: knowledges[i].id, material_id: knowledges[i].material_id, knowledge_no: knowledges[i].knowledge_no, template_type: knowledges[i].material.template_type, images: knowledges[i].images, videos: knowledges[i].videos, audios: knowledges[i].audios, negative_image: knowledges[i].negative_image, Template: [{ value: '1',
                  label: '模板1[知识点]'
                }, {
                  value: '2',
                  label: '模板2[交互]'
                }], Templatevalue: knowledges[i].Templatevalue, show: knowledges[i].show, Knowledgebox1: knowledges[i].Knowledgebox1, Knowledgebox2: knowledges[i].Knowledgebox2, imageslist1: knowledges[i].imageslist1, videoslist1: knowledges[i].videoslist1, audiolist1: knowledges[i].audioslist1, imageslist2: knowledges[i].imageslist2, negative_imagelist: knowledges[i].negative_imagelist })
              }
              this.KnowledgeNum = this.Knowledge[this.Knowledge.length - 1].knowledge_no
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    newKnowledge() {
      this.KnowledgeNum = parseInt(Number(this.KnowledgeNum) + 1)
      console.log(this.KnowledgeNum)
      // this.Knowledgebox.push(['图片素材'])
      this.Knowledge.push({ knowledge_no: this.KnowledgeNum, videoslist1: [], audiolist1:[],imageslist1:[],imageslist2:[],negative_imagelist:[],template_type: 1, images: '', videos: [], audios: [], negative_image: '', Knowledgebox1: ['图片素材'], Knowledgebox2: ['底图素材', '其他素材'], show: { knowledgeImage: true, knowledgeVideo: false, knowledgeAudio: false, baseImage: false, otherImage: false }, Template: [{ value: '1',
        label: '模板1[知识点]'
      }, {
        value: '2',
        label: '模板2[交互]'
      }], Templatevalue: '模板1[知识点]' })
    },
    deleteKnowledge(index) {
      this.Knowledge.splice(index, 1)
    },
    KnowledgeChange(res, index) {
      if (res.indexOf('音频素材') > -1) {
        this.Knowledge[index].show.knowledgeAudio = true
      } else {
        this.Knowledge[index].show.knowledgeAudio = false
        this.Knowledge[index].audiolist1 = []
        this.Knowledge[index].audios = []
      }
      if (res.indexOf('视频素材') > -1) {
        this.Knowledge[index].show.knowledgeVideo = true
      } else {
        this.Knowledge[index].show.knowledgeVideo = false
        this.Knowledge[index].videoslist1 = []
        this.Knowledge[index].videos = []
      }
      if (res.indexOf('图片素材') > -1) {
        this.Knowledge[index].show.knowledgeImage = true
      } else {
        this.Knowledge[index].show.knowledgeImage = false
        this.Knowledge[index].imageslist1 = []
        this.Knowledge[index].images = ''
      }

      if (res.indexOf('底图素材') > -1) {
        this.Knowledge[index].show.baseImage = true
      } else {
        this.Knowledge[index].show.baseImage = false
        this.Knowledge[index].negative_imagelist = []
        this.Knowledge[index].negative_image = ''
      }

      if (res.indexOf('其他素材') > -1) {
        this.Knowledge[index].show.otherImage = true
      } else {
        this.Knowledge[index].show.otherImage = false
        this.Knowledge[index].imageslist2 = []
        this.Knowledge[index].images = ''
      }
    },
    TemplateSelete(res, index) {
      if (this.Knowledge[index].template_type == res) {
        return false
      }
      this.Knowledge[index].template_type = res
      if (res == 2) {
        this.Knowledge[index].show.baseImage = true
        this.Knowledge[index].show.otherImage = true
        this.Knowledge[index].show.knowledgeImage = false
        this.Knowledge[index].Knowledgebox2 = ['底图素材', '其他素材']
      } else {
        this.Knowledge[index].show.baseImage = false
        this.Knowledge[index].show.otherImage = false
        this.Knowledge[index].show.knowledgeImage = true

        // this.Knowledge[index].show.knowledgeImage = true
        this.Knowledge[index].Knowledgebox1 = ['图片素材']

        // this.Knowledge[index].show.baseImage = false
        // this.Knowledge[index].show.otherImage = false
      }
      this.Knowledge[index].show.knowledgeAudio = false
      this.Knowledge[index].show.knowledgeVideo = false
      // for (let i = 0; i < this.Knowledge.length; i++) {
      this.Knowledge[index].images = ''
      this.Knowledge[index].negative_image = ''
      this.Knowledge[index].audios = []
      this.Knowledge[index].videos = []
      this.Knowledge[index].videoslist1 = []
      // this.Knowledge[index].videolist2 = []
      this.Knowledge[index].audiolist1 = []
      // this.Knowledge[index].audiolist2 = []
      this.Knowledge[index].imageslist1 = []
      this.Knowledge[index].imageslist2 = []
      this.Knowledge[index].negative_imagelist = []
      // }
    },
    tuozhanChange(res) {
      if (res.indexOf('图片素材') > -1) {
        this.tuozhanImage = true
      } else {
        this.tuozhanImage = false
        this.afters.images = ''
      }
      if (res.indexOf('视频素材') > -1) {
        this.tuozhanVideo = true
      } else {
        this.tuozhanVideo = false
        this.afters.videos = []
      }
      if (res.indexOf('音频素材') > -1) {
        this.tuozhanAudio = true
      } else {
        this.tuozhanAudio = false
        this.afters.audios = []
      }
    },
    workSelete1(res) {
      if (res.indexOf('作业文字') > -1) {
        this.workT1 = true
      } else {
        this.workT1 = false
      }
      if (res.indexOf('作业图片') > -1) {
        this.workI1 = true
      } else {
        this.workI1 = false
        this.works1images = ''
      }
      if (res.indexOf('作业视频') > -1) {
        this.workV1 = true
      } else {
        this.workV1 = false
        this.works1videos = ''
      }
    },
    workSelete2(res) {
      if (res.indexOf('作业文字') > -1) {
        this.workT2 = true
      } else {
        this.workT2 = false
      }
      if (res.indexOf('作业图片') > -1) {
        this.workI2 = true
      } else {
        this.workI2 = false
        this.works2images = ''
      }
      if (res.indexOf('作业视频') > -1) {
        this.workV2 = true
      } else {
        this.workV2 = false
        this.works2videos = ''
      }
    },
    arrayTirm(array) {
      for (let i = 0; i < array.length; i++) {
        for (const key in array[i]) {
          if (array[i][key].length < 1) {
            delete array[i][key]
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.el-dialog__wrapper {
  position: absolute;
  height: 100%;
}
.left {
  // margin-left: 60px;
  // margin-right: 190px;
  .className {
    .input:nth-child(1) {
      width: 92px;
      margin-right: 12px;
    }
    .input:nth-child(2) {
      width: 302px;
    }
  }
}
.left,
.right {
  display: inline-block;
  // width: 646px;
  width: 49%;
  height: 100%;
  vertical-align: top;
  > div {
    margin-bottom: 40px;
    line-height: 100%;
    // display: inline-block;
  }
  .c_right {
    display: inline-block;
  }
  .el-select {
    vertical-align: middle;
  }
  .class {
    label {
      vertical-align: top;
    }
  }
  .classKnow {
    > div {
      margin-bottom: 14px;
    }
    .upload {
      > div {
        margin-bottom: 14px;
      }
    }
  }
  .Expand {
    > label {
      vertical-align: top;
    }
    > .c_right {
      > div {
        margin-bottom: 13px;
      }
      > .text {
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(179, 179, 179, 1);
      }
    }
  }
  .classwork {
    vertical-align: top;
  }
  .work {
    > div {
      > div {
        margin-bottom: 13px;
      }
      > div:nth-child(2) {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
   .tips {
    height: 21px;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(179, 179, 179, 1);
    line-height: 21px;
    margin-bottom: 23px;
  }
  .laji {
    font-size: 20px;
    vertical-align: middle;
    cursor: pointer;
  }
}
.total {
  width: 50px;
  height: 40px;
  background: rgba(235, 235, 235, 1);
  border-radius: 6px;
  border: 1px solid rgba(217, 217, 217, 1);
  display: inline-block;
  vertical-align: middle;
  line-height: 40px;
  text-align: center;
}

>>> .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #585b63;
}
>>> .el-checkbox .el-checkbox__label{
  font-weight: normal

}
>>> .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #07d1aa;
  border-color: #d9d9d9;
}
.input {
  width: 400px;
  //  background:rgba(235,235,235,1)
  border-radius: 6px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}

label {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: bold;
  color: rgba(88, 91, 99, 1);
  margin-right: 15px;
}

>>> .el-dialog {
  top: 0;
  bottom: 0;
  position: absolute;
  overflow: scroll;
}

>>> .el-input__inner {
  background: #EBEBEB;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #585b63;
}

>>> .el-textarea__inner {
  background: #EBEBEB;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #585b63;
  min-height: 188px !important;
}

>>> .el-textarea__inner:focus,
>>> .el-input__inner:focus {
  border-color: #07d1aa;
}
.upload-demo {
  margin-bottom: 13px;
}
.konwtotal{
  >>>.el-input__inner{
    padding: 0;
    border: none;
    text-align: center
  }
}
>>>.el-dialog__header{
  background: #EBEBEB
}
>>>.upload-demo label{
  font-weight: normal
}
>>>.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{
  background: #fff !important
}
>>>.el-dialog__footer{
   position: fixed;
   bottom: 0;
   width: 88.17%;
   background: #EBEBEB;
   padding: 10px;
}
>>>.el-dialog__header{
  padding: 10px;
}
>>>.el-dialog__headerbtn{
   top: 15px;
}
.uploadText{
  text-align: center;
  color: orange;
  margin-bottom: 12px;
}
>>>.upload-demo .el-upload-list {
  width: 400px;
}
>>>.el-dialog__body{
  margin-bottom: 56px;
}
@media screen and (min-width: 1900px) {
  .left {
    margin-left: 131px;
    margin-right: 165px;
    width: inherit
    // width: 530px;
  }
}
</style>
