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
        <single-image
          msg="图片小于2M，格式为jpg、png"
          label="教材封面:"
          size="2097152"
          type=".jpg,.png"
          :limit="1"
          @files="materialCover"
        />
      </div>
      <div>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          label="教材课时封面:"
          type=".jpg,.png"
          size="2097152"
          :limit="1"
          @files="materialClassCover"
        />
      </div>
      <div>
        <single-image
          msg="图片尺寸120x120并小于1M，格式为png"
          label="乐器图标:"
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
          placeholder="请输入教材目标，字数最多300字内"
          class="input Target"
          type="textarea"
          maxlength="300"
        />
      </div>
      <div>
        <label style="vertical-align:top">备注说明:</label>
        <el-input
          v-model="remark"
          placeholder="请输入教材目标，字数最多300字内"
          class="input Target"
          type="textarea"
          maxlength="300"
        />
      </div>
    </div>
    <div class="right">
      <div>
        <single-image msg="视频格式为mp4" label="教材介绍视频:" type=".mp4" :limit="1" @files="materialVideo" />
      </div>
      <div>
        <label style="vertical-align:top">教材文字详情:</label>
        <el-input
          v-model="materialDetail"
          placeholder="请输入教材文字详情，字数最多600字内"
          class="input textarea"
          type="textarea"
          maxlength="600"
        />
      </div>
      <div>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          label="教材详情图:"
          type=".jpg,.png"
          size="2097152"
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
            <div style="text-align:center">{{ index+1 }}</div>
            <el-input
              v-model="item.title"
              placeholder="请输入目录名称，字数最多20字内"
              class="input"
              maxlength="20"
            />
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              style="margin-left:5px"
              @click="deleCatalogue(index)"
            />
          </div>
        </div>
        <el-button type="info" @click="newCatalogue">新增</el-button>
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
      <el-button @click="close">取 消</el-button>
      <el-button type="info" @click="addA">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addteachingManagement } from '../../api/teachingManagement'
import SingleImage from '@/components/Upload/SingleImage3'
import { MessageBox, Message } from 'element-ui'
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
      price: 0,
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
      this.materialCoverI = res[0].url
    },
    materialClassCover(res) {
      this.materialClassCoverI = res[0].url
    },
    icon(res) {
      this.iconI = res[0].url
    },
    materialVideo(res) {
      this.materialVideoV = res[0].url
    },
    materialDetailed(res) {
      this.materialDetailedI = res[0].url
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
    radioChange(res) {
      if (res == 1) {
        this.priceShow = true
        this.openPrice = 1
      } else {
        this.priceShow = false
        this.openPrice = 0
        this.price = 0
      }
      console.log(res)
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
<style lang="scss" scoped>
.el-dialog__wrapper {
  position: absolute;
  height: 100%;
}
.left {
  margin-left: 60px;
  margin-right: 332px;
}
.left,
.right {
  display: inline-block;
  width: 530px;
  height: 100%;
  vertical-align: top;
  > div {
    margin-bottom: 40px;
    line-height: 100%;
  }
  .input {
    width: 400px;
    //  background:rgba(235,235,235,1)
    border-radius: 6px;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
  >>> label {
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(88, 91, 99, 1);
    margin-right: 15px;
    display: inline-block;
    width: 100px;
    text-align: left;
  }
}
>>> .el-dialog {
  top: 0;
  bottom: 0;
  position: absolute;
  overflow: scroll;
}
>>> .el-input__inner,
>>> .el-input__inner::placeholder {
  background: #d9d9d9;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #c1c2c6;
}
>>> .el-textarea__inner {
  background: #d9d9d9;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #c1c2c6;
  min-height: 376px !important;
}
>>> .Target .el-textarea__inner {
  min-height: 232px !important;
}
>>> .el-textarea__inner:focus,
>>> .el-input__inner:focus {
  border-color: #07d1aa;
}
>>> .el-radio__input.is-checked + .el-radio__label {
  color: #585b63;
}
>>> .el-radio__input.is-checked .el-radio__inner {
  background: #07d1aa;
  border-color: #d9d9d9;
}
>>> .el-radio {
  display: block;
}
>>> .el-radio:nth-child(1) {
  margin-bottom: 40px;
}
.allCatalogue div,
.oneCatalogue > div:nth-child(1) {
  width: 50px;
  height: 40px;
  background: rgba(235, 235, 235, 1);
  border-radius: 6px;
  border: 1px solid rgba(217, 217, 217, 1);
  line-height: 40px;
}
.allCatalogue {
  width: 200px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(88, 91, 99, 1);
  height: 40px;
  line-height: 40px;
  span {
    vertical-align: top;
  }
}
.allCatalogue,
.oneCatalogue > div:nth-child(1),
.allCatalogue div {
  display: inline-block;
}
.materialCatalogue {
  display: inline-block;
  margin-left: 115px;
}
.oneCatalogue {
  margin-top: 15px;
  margin-left: 30px;
  margin-bottom: 15px;
  width: 526px;
  height: 40px;
  > .input {
    vertical-align: middle;
    margin-left: 15px;
  }
}
</style>
