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
        <label>教材名称:</label>
        <el-input v-model="input" placeholder="请输入教材名称，字数最多20字内" class="input" maxlength="20" />
      </div>
      <div>
        <single-image msg="视频格式为mp4" label="教材介绍视频:" type=".mp4" :limit="1" @files="file" /></div>
      <div>
        <label style="vertical-align:top">教材文字详情:</label>
        <el-input
          v-model="input"
          placeholder="请输入教材文字详情，字数最多300字内"
          class="input textarea"
          type="textarea"
          maxlength="300"
        />
      </div>
      <div>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          label="教材目录:"
          type=".jpg,.png"
          size="2097152"
          @files="file1"
        />
      </div>
    </div>

    <div class="right">
      <div>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          label="教材封面:"
          size="2097152"
          type=".jpg,.png"
          :limit="1"
        />
      </div>

      <div>
        <single-image msg="图片尺寸120x120并小于1M，格式为png" label="乐器图标:" type=".png" :limit="1" size="1048576" />
      </div>
      <div>
        <label style="vertical-align:top">教材目标:</label>
        <el-input
          v-model="input"
          placeholder="请输入教材目标，字数最多100字内"
          class="input Target"
          type="textarea"
          maxlength="100"
        />
      </div>
      <div>
        <single-image
          msg="图片小于2M，格式为jpg、png"
          label="教材详情图:"
          size="2097152"
          type=".jpg,.png"
          :limit="1"
        />
      </div>
      <div>
        <label style="vertical-align:top">单价课价格：</label>
        <el-radio-group v-model="radio" text-color="#585B63">
          <el-radio :label="3">开启</el-radio>
          <el-radio :label="6">关闭</el-radio>
        </el-radio-group>
      </div>
    </div>
    <!-- <single-image :msg="message"></single-image> -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="info" @click="close">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import SingleImage from '@/components/Upload/SingleImage3'
export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      input: '',
      radio: '1'
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
    file1(res) {
      console.log(res)
    },
    handleClose() {
      this.$emit('close', false)
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
  label {
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(88, 91, 99, 1);
    margin-right: 15px;
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
  min-height: 188px !important;
}
>>> .Target .el-textarea__inner {
  min-height: 116px !important;
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
</style>
