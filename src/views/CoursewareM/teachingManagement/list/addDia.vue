<template>
  <el-dialog
    title="新建教材"
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
        <label>教材名称:</label>
        <el-input
          v-model="materialName"
          placeholder="请输入教材名称，字数最多20字内"
          class="input"
          maxlength="20"
        />
      </div>
      <div>
        <label class="uploadLabel">教材封面:</label>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          size="2097152"
          type=".jpg,.png"
          :limit="1"
          @files="materialCover"
        />
      </div>
      <div>
        <label class="uploadLabel">教材课时封面:</label>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          type=".jpg,.png"
          size="2097152"
          :limit="1"
          @files="materialClassCover"
        />
      </div>
      <div>
        <label class="uploadLabel">乐器图标:</label>
        <single-image
          msg="图片尺寸120x120并小于1M，格式为png"
          type=".png"
          :limit="1"
          size="1048576"
          @files="icon"
        />
      </div>
      <div>
        <label style="vertical-align:top">教材目标:</label>
        <el-input
          v-model="materialTarget"
          placeholder="请输入教材目标，字数最多100字内"
          class="input "
          type="textarea"
          maxlength="100"
        />
      </div>
    </div>
    <div class="right">
      <div>
        <label class="uploadLabel">教材介绍视频:</label>
        <single-image msg="视频格式为mp4" type=".mp4" size="524288000" :limit="1" @files="materialVideo" />
      </div>
      <div>
        <label style="vertical-align:top">教材文字详情:</label>
        <el-input
          v-model="materialDetail"
          placeholder="请输入教材文字详情，字数最多300字内"
          class="input textarea"
          type="textarea"
          maxlength="300"
        />
      </div>
      <div>
        <label class="uploadLabel">教材详情图:</label>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          type=".jpg,.png"
          size="2097152"
          :limit="6"
          @files="materialDetailed"
        />
      </div>
      <div>
        <label style="vertical-align:top">教材目录：</label>
        <div v-if="Catalogue.length>0" class="allCatalogue">
          <span>共</span>
          <div style="margin:0 5px 0 5px;text-align:center">{{ Catalogue.length }}</div>
          <span>个目录</span>
        </div>
        <div v-if="Catalogue.length>0" class="materialCatalogue">
          <div v-for="(item,index) in Catalogue" :key="index" class="oneCatalogue">
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
        <el-radio-group v-model="radio" text-color="#585B63" @change="radioChange">
          <el-radio :label="0" style="display:block">关闭</el-radio>
          <el-radio :label="1">开启</el-radio>
        </el-radio-group>
        <div v-if="priceShow" style="display:inline-block;vertical-align:bottom">
          <el-input
            v-model="price"
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
import { addteachingManagement } from '../../../../api/teachingManagement'
import SingleImage from '@/components/Upload/SingleImage3'
import { Message } from 'element-ui'
export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      radio: 0,
      materialName: '',
      materialTarget: '',
      materialDetail: '',
      price: '',
      remark: '',
      Catalogue: [],
      CatalogueNum: 0,
      openPrice: 0,
      priceShow: false,
      materialCoverI: '',
      materialClassCoverI: '',
      iconI: '',
      materialVideoV: '',
      materialDetailedI: ''
    }
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
    file(res) {
      console.log(res)
      // this.imgUrl=[...this.imgUrl,...res]
      // console.log(this.imgUrl)
    },
    handleClose() {
      this.$emit('close', false)
    },
    materialCover(res) {
      if (res.length > 0) {
        this.materialCoverI = res[0].url
      }
    },
    materialClassCover(res) {
      if (res.length > 0) {
        this.materialClassCoverI = res[0].url
      }
    },
    icon(res) {
      if (res.length > 0) {
        this.iconI = res[0].url
      }
    },
    materialVideo(res) {
      if (res.length > 0) {
        this.materialVideoV = res[0].url
      }
    },
    materialDetailed(res) {
      if (res.length > 0) {
        this.materialDetailedI = res[0].url
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
      // this.Catalogue.push({
      //   directory_no: '',
      //   title: ''
      // })
    },
    deleCatalogue(index) {
      this.Catalogue.splice(index, 1)
      console.log(this.Catalogue)
    },
    radioChange(res) {
      if (res == 1) {
        this.priceShow = true
        this.openPrice = 1
      } else {
        this.priceShow = false
        this.openPrice = 0
      }
    },
    addA() {
      const directory_list = []
      for (let i = 0; i < this.Catalogue.length; i++) {
        if (this.Catalogue[i].title.trim()) {
          directory_list.push(this.Catalogue[i])
        }
      }
      const params = {
        title: this.materialName,
        cover: this.materialCoverI,
        class_cover: this.materialClassCoverI,
        icon: this.iconI,
        goal: this.materialTarget,
        video: this.materialVideoV,
        details: this.materialDetail,
        details_image: this.materialDetailedI,
        is_class_price: this.openPrice,
        directory_list: directory_list,
        class_price: this.price,
        remark: this.remark
      }
      if (this.openPrice == 0) {
        delete params.class_price
      }
      addteachingManagement(params)
        .then(res => {
          console.log(res)
          if (res.error_code == 0) {
            Message({
              message: '添加成功',
              type: 'success',
              duration: 5 * 1000
            })
          }
          this.$emit('close', true)
        })
        .catch(error => {
          reject(error)
        })
    }
  }
}
</script>
 <style  src="../../../../styles/Dia.css" scoped></style>

