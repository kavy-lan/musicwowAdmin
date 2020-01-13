<template>
  <el-dialog
    title="编辑教材"
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
        <label>教材名称:</label>
        <el-input
          v-model="detailMsg.title"
          placeholder="请输入教材名称，字数最多20字内"
          class="input"
          maxlength="20"
        />
      </div>
      <div>
        <label class="uploadLabel">教材封面:</label>
        <single-image
          size="2097152"
          type=".jpg,.png"
          :limit="1"
          :filelist="materialCoverI"
          @files="materialCover"
        />
      </div>
      <div>
        <label class="uploadLabel">教材课时封面:</label>
        <single-image
          type=".jpg,.png"
          size="2097152"
          :limit="1"
          :filelist="materialClassCoverI"
          @files="materialClassCover"
        />
      </div>
      <div>
        <label class="uploadLabel">乐器图标:</label>
        <single-image
          type=".png"
          :limit="1"
          size="2097152"
          :filelist="iconI"
          @files="icon"
        />
      </div>
      <div>
        <label style="vertical-align:top">教材目标:</label>
        <el-input
          v-model="detailMsg.goal"
          placeholder="请输入教材目标，字数最多100字内"
          class="input Target"
          type="textarea"
          resize="none"
          maxlength="100"
        />
      </div>
    </div>
    <div class="right">
      <div>
        <label class="uploadLabel">教材介绍视频:</label>
        <single-image
          type=".mp4"
          size="524288000"
          :limit="1"
          :filelist="materialVideoV"
          @files="materialVideo"
        />
      </div>
      <div>
        <label style="vertical-align:top">教材文字详情:</label>
        <el-input
          v-model="detailMsg.details"
          placeholder="请输入教材文字详情，字数最多300字内"
          class="input textarea"
          type="textarea"
          resize="none"
          maxlength="300"
        />
      </div>
      <div>
        <label class="uploadLabel">教材详情图:</label>
        <single-image
          msg="最多6张"
          label="教材详情图:"
          type=".jpg,.png"
          :limit="6"
          size="2097152"
          :filelist="materialDetailedI"
          @files="materialDetailed"
        />
      </div>
      <div v-if="detailMsg.directory_list">
        <!--这里是为了不让报错增加的v-if -->
        <label style="vertical-align:top">教材目录：</label>
        <div v-if="detailMsg.directory_list.length>0" class="allCatalogue">
          <span>共</span>
          <div style="margin:0 5px 0 5px;text-align:center">{{ detailMsg.directory_list.length }}</div>
          <span>个目录</span>
        </div>
        <div v-if="detailMsg.directory_list.length>0" class="materialCatalogue">
          <div v-for="(item,index) in detailMsg.directory_list" :key="index" class="oneCatalogue">
            <svg-icon
              class-name="search-icon"
              icon-class="laji"
              class="laji"
              @click="deleCatalogue(index)"
            />
            <div style="text-align:center" class="No">{{ index+1 }}</div>
            <!-- <el-input
              v-model="item.directory_no"
              class="No"
              maxlength="20"
            /> -->
            <el-input
              v-model="item.title"
              placeholder="请输入目录名称，字数最多20字内"
              class="input"
              maxlength="20"
            />
            <!-- <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              style="margin-left:5px"
              @click="deleCatalogue(index)"
            /> -->
          </div>
        </div>
        <el-button type="primary" @click="newCatalogue">新增</el-button>
      </div>
      <div style="width:630px">
        <label style="vertical-align:top">单价课价格：</label>
        <el-radio-group
          v-model="detailMsg.is_class_price"
          text-color="#585B63"
          @change="radioChange"
        >
          <el-radio :label="0" style="display:block">关闭</el-radio>
          <el-radio :label="1">开启</el-radio>
        </el-radio-group>
        <div v-if="detailMsg.is_class_price==1" style="display:inline-block;vertical-align:bottom">
          <el-input
            v-model="detailMsg.class_price"
            style="width:106px"
            placeholder="请输入价格"
            class="input"
            maxlength="20"
          />
          <span>元/30分钟</span>
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
  teachingManagementDetail,
  editteachingManagement
} from '../../../../api/teachingManagement'
import SingleImage from '@/components/Upload/SingleImage3'
import { Message } from 'element-ui'
export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible', 'id'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      radio: 1,
      materialName: '',
      materialTarget: '',
      materialDetail: '',
      price: 0,
      Catalogue: [],
      CatalogueNum: 0,
      materialCoverI: [],
      materialClassCoverI: [],
      iconI: [],
      materialVideoV: [],
      materialDetailedI: [],
      detailMsg: {}
    }
  },
  watch: {
    id(newval, oldval) {
      // this.getDetail(newval)
    }
  },
  mounted() {
    this.getDetail(this.id)
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
    file(res) {
    },
    handleClose() {
      this.$emit('close', false)
    },
    materialCover(res) {
      if (res.length > 0) {
        this.detailMsg.cover = res[0].url
      }
    },
    materialClassCover(res) {
      if (res.length > 0) {
        this.detailMsg.class_cover = res[0].url
      }
    },
    icon(res) {
      if (res.length > 0) {
        this.detailMsg.icon = res[0].url
      }
    },
    materialVideo(res) {
      if (res.length > 0) {
        this.detailMsg.video = res[0].url
      }
    },
    materialDetailed(res) {
      if (res.length > 0) {
        this.detailMsg.details_image = res[0].url
      }
    },
    deleCatalogue(index) {
      this.detailMsg.directory_list.splice(index, 1)
    },
    radioChange(res) {
      if (res == 1) {
        this.detailMsg.is_class_price = 1
      } else {
        this.detailMsg.is_class_price = 0
      }
    },
    addA() {
      if (this.detailMsg.is_class_price == 0) {
        delete this.detailMsg.class_price
      }
      return new Promise((resolve, reject) => {
        editteachingManagement(this.id, this.detailMsg)
          .then(res => {
            if (res.error_code == 0) {
              Message({
                message: '编辑成功',
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
    getDetail(id) {
      return new Promise((resolve, reject) => {
        teachingManagementDetail(id)
          .then(res => {
            if (res.error_code == 0) {
              this.detailMsg = res.data
              this.materialCoverI = [{ url: this.detailMsg.cover }]
              this.materialClassCoverI = [{ url: this.detailMsg.class_cover }]
              this.iconI = [{ url: this.detailMsg.icon }]
              this.materialVideoV = [{ url: this.detailMsg.video }]
              this.materialDetailedI = [{ url: this.detailMsg.details_image }]
              this.CatalogueNum = this.detailMsg.directory_list[this.detailMsg.directory_list.length - 1].directory_no
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    newCatalogue() {
      this.CatalogueNum = this.CatalogueNum + 1
      if (this.CatalogueNum <= 9) {
        this.detailMsg.directory_list.push({
          directory_no: parseInt(`0${this.CatalogueNum}`),
          title: ''
        })
      } else {
        this.detailMsg.directory_list.push({
          directory_no: parseInt(`${this.CatalogueNum}`),
          title: ''
        })
      }
    }
  }
}
</script>
 <style  src="../../../../styles/Dia.css" scoped></style>
<style lang="scss" scoped>
 .materialCatalogue{
   display: block
 }
</style>
