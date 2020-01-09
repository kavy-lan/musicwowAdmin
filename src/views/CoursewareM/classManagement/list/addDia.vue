<template>
  <el-dialog
    title="添加课时"
    :visible.sync="dialogVisible"
    width="100%"
    custom-class="customWidth"
    center
    top="0"
    :close-on-click-modal="false"
    :before-close="handleClose"
  >
    <div class="left">
      <div>
        <label>教材目录：</label>
        <div class="c_right">
          <el-select v-model="CatalogueId" placeholder="请选择">
            <el-option v-for="(item , index) in options" :key="item.id" :value="item.id" :label="`${index+1}. ${item.title}`" />
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
              />-->
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
            <div v-if="items.template_type ==2">
              <single-image
                v-if="items.show.baseImage"
                msg="素材图片小于3M，格式为 jpg、png、gif，图片最多1个"
                type=".jpg,.png,.gif"
                size="3145728"
                label="底图素材"
                :limit="1"
                :clear="items.clear"
                @files="templateBase2($event,index)"
              />
              <single-image
                v-if="items.show.otherImage"
                msg="素材图片小于1M，格式为 jpg、png、gif，图片最多7个"
                type=".jpg,.png,.gif"
                size="1048576"
                label="其他素材"
                :limit="7"
                :clear="items.clear"
                @files="templateOther2($event,index)"
              />
              <single-image
                v-if="items.show.knowledgeVideo"
                msg="素材视频格式为 mp4，视频最多4个"
                type=".mp4"
                :limit="4"
                size="524288000"
                label="视频素材"
                :clear="items.clear"
                @files="templateVideo2($event,index)"
              />
              <single-image
                v-if="items.show.knowledgeAudio"
                msg="素材音频格式为 mp3，音频最多4个"
                type=".mp3"
                :limit="4"
                label="音频素材"
                :clear="items.clear"
                @files="templateAudio2($event,index)"
              />
            </div>
            <div v-else>
              <single-image
                v-if="items.show.knowledgeImage"
                msg="素材图片小于3M，格式为 jpg、png、gif，最多4个"
                type=".jpg,.png,.gif"
                size="3145728"
                :limit="4"
                label="图片素材"
                :clear="items.clear"
                @files="templateImage1($event,index)"
              />
              <single-image
                v-if="items.show.knowledgeVideo"
                msg="素材视频格式为 mp4，最多4个"
                type=".mp4"
                size="524288000"
                :limit="4"
                label="视频素材"
                :clear="items.clear"
                @files="templateVideo1($event,index)"
              />
              <div>
                <single-image
                  v-if="items.show.knowledgeAudio"
                  msg="素材音频格式为 mp3，音频最多4个"
                  type=".mp3"
                  :limit="4"
                  label="音频素材"
                  :clear="items.clear"
                  @files="templateAudio1($event,index)"
                />
              </div>

            </div>
          </div>
        </div>
        <div :style="{'display':Knowledge.length>0?'block':'inline-block'}" @click="newKnowledge">
          <el-button type="primary">新增</el-button>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="Expand">
        <label>课后拓展：</label>
        <div class="c_right">
          <div>
            <el-select v-model="tuozhanSeleteValue" placeholder="请选择">
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
              msg="素材图片小于3M,格式为 jpg、png、gif,图片最多4个"
              label="图片素材"
              type=".jpg,.png,.gif"
              size="3145728"
              :limit="4"
              @files="tuozhanImage1"
            />
            <single-image
              v-if="tuozhanVideo"
              msg="素材视频格式为 mp4，视频最多4个"
              label="视频素材"
              type=".mp4"
              size="524288000"
              :limit="4"
              @files="tuozhanVideo1"
            />
            <single-image
              v-if="tuozhanAudio"
              msg="素材音频格式为 mp3，音频最多4个"
              label="音频素材"
              type=".mp3"
              :limit="4"
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
                style="margin-bottom:13px"
              />
              <single-image
                v-if="workI1"
                msg="素材图片小于2M，格式为 jpg、png，图片最多5个"
                label="图片素材"
                size="2097152"
                type=".jpg,.png"
                :limit="5"
                @files="homeWorkI1"
              />
              <single-image
                v-if="workV1"
                msg="素材视频小于五分钟,格式为 mp4，视频最多1个"
                label="视频素材"
                size="524288000"
                type=".mp4"
                :limit="1"
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
                style="margin-bottom:13px"
              />
              <single-image
                v-if="workI2"
                msg="素材图片小于2M，格式为 jpg、png，图片最多5个"
                label="图片素材"
                type=".jpg,.png"
                size="2097152"
                :limit="5"
                @files="homeWorkI2"
              />
              <single-image
                v-if="workV2"
                msg="素材视频小于五分钟,格式为 mp4，视频最多1个"
                label="视频素材"
                type=".mp4"
                size="524288000"
                :limit="1"
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
import {
  getDirectory_list,
  addclassManagementList
} from '../../../../api/classManagement'
import SingleImage from '@/components/Upload/SingleImage3'
import { MessageBox, Message } from 'element-ui'
export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible', 'id'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      checkList: ['复选框 A'],
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
      clear1: false,
      clear2: false,
      CatalogueId: '',
      tuozhanSelete: [{ value: 1, label: '模版一[知识点]' }],
      tuozhanSeleteValue: '模版一[知识点]',
      tuozhanList: ['图片素材'],
      tuozhanImage: true,
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
      works1: {},
      works2: {},
      works1images: '',
      works2images: '',
      works1videos: '',
      works2videos: ''
    }
  },
  watch: {
    // id(newval, oldval) {
    //   // this.getDirectoryList(newval)
    // }
  },
  mounted() {
    this.getDirectoryList(this.id)
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
      this.Knowledge[index].images = this.Knowledge[index].images.substring(
        0,
        this.Knowledge[index].images.length - 1
      )
    },
    templateVideo1(res, index) {
      this.Knowledge[index].videos = []
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].videos.push({
          url: res[i].url,
          title: res[i].name,
          cover: res[i].cover
        })
      }
    },
    templateAudio1(res, index) {
      console.log(res)
      this.Knowledge[index].audios = []
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].audios.push({
          url: res[i].url,
          title: res[i].name
        })
      }
    },
    templateVideo2(res, index) {
      this.Knowledge[index].videos = []
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].videos.push({
          url: res[i].url,
          title: res[i].name,
          cover: res[i].cover
        })
      }
    },
    templateAudio2(res, index) {
      this.Knowledge[index].audios = []
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].audios.push({
          url: res[i].url,
          title: res[i].name
        })
      }
    },
    templateBase2(res, index) {
      this.Knowledge[index].negative_image = ''
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].negative_image += `${res[i].url},`
      }
      this.Knowledge[index].negative_image = this.Knowledge[
        index
      ].negative_image.substring(
        0,
        this.Knowledge[index].negative_image.length - 1
      )
    },
    templateOther2(res, index) {
      this.Knowledge[index].images = ''
      for (let i = 0; i < res.length; i++) {
        this.Knowledge[index].images += `${res[i].url},`
      }
      this.Knowledge[index].images = this.Knowledge[index].images.substring(
        0,
        this.Knowledge[index].images.length - 1
      )
    },
    tuozhanImage1(res) {
      this.afters.images = ''
      for (let i = 0; i < res.length; i++) {
        this.afters.images += `${res[i].url},`
      }
      this.afters.images = this.afters.images.substring(
        0,
        this.afters.images.length - 1
      )
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
      this.works1images = this.works1images.substring(
        0,
        this.works1images.length - 1
      )
    },
    homeWorkI2(res) {
      this.works2images = ''
      for (let i = 0; i < res.length; i++) {
        this.works2images += `${res[i].url},`
      }
      this.works2images = this.works2images.substring(
        0,
        this.works2images.length - 1
      )
    },
    handleClose() {
      this.$emit('close', false)
    },
    homeWorkV1(res) {
      if (res.length > 1) {
        this.works1videos = res[0].url
      }
    },
    homeWorkV2(res) {
      if (res.length > 1) {
        this.works2videos = res[0].url
      }
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

      console.log(this.Catalogue)
    },
    deleCatalogue(index) {
      this.Catalogue.splice(index, 1)
      console.log(this.Catalogue)
    },
    addA() {
      const knowledges = []
      this.Knowledge.map(item => {
        knowledges.push({
          knowledge_no: item.knowledge_no,
          template_type: item.template_type,
          images: item.images,
          negative_image: item.negative_image,
          videos: item.videos,
          audios: item.audios
        })
      })
      this.works1.classwork_no = 1
      this.works2.classwork_no = 2
      this.works1.images = this.works1images
      this.works2.images = this.works2images
      this.works1.video = this.works1videos
      this.works2.video = this.works2videos
      this.works1.describe = this.workText1
      this.works2.describe = this.workText2
      const works = [this.works1, this.works2]
      this.arrayTirm(knowledges)
      this.objectTirm(this.afters)
      if (this.classNum == this.className) {
        Message({
          message: '课时编号与课时名称不能重复',
          type: 'error',
          duration: 5 * 1000
        })
        return false
      }
      for (let i = 0; i < knowledges.length; i++) {
        if (knowledges[i].template_type == 1 && !knowledges[i].images) {
          Message({
            message: '知识点图片素材不能为空',
            type: 'error',
            duration: 5 * 1000
          })
          return false
        } else if (
          knowledges[i].template_type == 2 &&
          (!knowledges[i].images || !knowledges[i].negative_image)
        ) {
          Message({
            message: '知识点图片素材和底图素材不能为空',
            type: 'error',
            duration: 5 * 1000
          })
          return false
        }
      }
      if (!this.afters.images) {
        Message({
          message: '课后拓展图片素材不能为空',
          type: 'error',
          duration: 5 * 1000
        })
        return false
      }
      const params = {
        book_id: this.id,
        book_directory_id: this.CatalogueId,
        class_no: this.classNum,
        title: this.className,
        knowledges: knowledges,
        afters: this.afters,
        works: works
      }
      return new Promise((resolve, reject) => {
        addclassManagementList(params)
          .then(res => {
            if (res.error_code == 0) {
              Message({
                message: '添加成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$emit('close', true)
            }
          })
          .catch(error => {
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
    newKnowledge() {
      this.KnowledgeNum = this.KnowledgeNum + 1
      // this.Knowledgebox.push(['图片素材'])
      this.Knowledge.push({
        knowledge_no: this.KnowledgeNum,
        template_type: 1,
        images: '',
        videos: [],
        audios: [],
        negative_image: '',
        Knowledgebox1: ['图片素材'],
        Knowledgebox2: ['底图素材', '其他素材'],
        show: {
          knowledgeImage: true,
          knowledgeVideo: false,
          knowledgeAudio: false,
          baseImage: false,
          otherImage: false
        },
        Template: [
          { value: '1', label: '模板1[知识点]' },
          {
            value: '2',
            label: '模板2[交互]'
          }
        ],
        Templatevalue: '模板1[知识点]',
        clear: false
      })
    },
    deleteKnowledge(index) {
      this.Knowledge.splice(index, 1)
    },
    KnowledgeChange(res, index) {
      if (res.indexOf('音频素材') > -1) {
        this.Knowledge[index].show.knowledgeAudio = true
      } else {
        this.Knowledge[index].show.knowledgeAudio = false
      }
      if (res.indexOf('视频素材') > -1) {
        this.Knowledge[index].show.knowledgeVideo = true
      } else {
        this.Knowledge[index].show.knowledgeVideo = false
      }
      if (res.indexOf('图片素材') > -1) {
        this.Knowledge[index].show.knowledgeImage = true
      } else {
        this.Knowledge[index].show.knowledgeImage = false
      }

      if (res.indexOf('底图素材') > -1) {
        this.Knowledge[index].show.baseImage = true
      } else {
        this.Knowledge[index].show.baseImage = false
      }

      if (res.indexOf('其他素材') > -1) {
        this.Knowledge[index].show.otherImage = true
      } else {
        this.Knowledge[index].show.otherImage = false
      }
    },
    TemplateSelete(res, index) {
      this.Knowledge[index].clear = !this.Knowledge[index].clear
      if (res == 2) {
        this.Knowledge[index].show.baseImage = true
        this.Knowledge[index].show.otherImage = true
        this.Knowledge[index].Knowledgebox2 = ['底图素材', '其他素材']
        this.Knowledge[index].template_type = 2
      } else {
        this.Knowledge[index].show.baseImage = false
        this.Knowledge[index].show.otherImage = false
        this.Knowledge[index].show.knowledgeImage = true
        this.Knowledge[index].Knowledgebox1 = ['图片素材']

        // this.Knowledge[index].show.baseImage = false
        // this.Knowledge[index].show.otherImage = false
        this.Knowledge[index].template_type = 1
      }
      this.Knowledge[index].show.knowledgeAudio = false
      this.Knowledge[index].show.knowledgeVideo = false
      // for (let i = 0; i < this.Knowledge.length; i++) {
      this.Knowledge[index].images = ''
      this.Knowledge[index].negative_image = ''
      this.Knowledge[index].audios = []
      this.Knowledge[index].videos = []
      // }
    },
    tuozhanChange(res) {
      console.log(res)
      if (res.indexOf('图片素材') > -1) {
        this.tuozhanImage = true
      } else {
        this.tuozhanImage = false
      }
      if (res.indexOf('视频素材') > -1) {
        this.tuozhanVideo = true
      } else {
        this.tuozhanVideo = false
      }
      if (res.indexOf('音频素材') > -1) {
        this.tuozhanAudio = true
      } else {
        this.tuozhanAudio = false
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
      }
      if (res.indexOf('作业视频') > -1) {
        this.workV1 = true
      } else {
        this.workV1 = false
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
      }
      if (res.indexOf('作业视频') > -1) {
        this.workV2 = true
      } else {
        this.workV2 = false
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
    },
    objectTirm(obj) {
      for (const key in obj) {
        if (obj[key].length < 1) {
          delete obj[key]
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

>>> .el-input__inner{
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
</style>

