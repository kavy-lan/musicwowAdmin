<template>
  <el-dialog
    title="添加用户"
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
        <label>用户名:</label>
        <el-input v-model="username" placeholder="请输入用户名，字数最多20字内(必选)" class="input" maxlength="20" />
      </div>
      <div>
        <label>手机:</label>
        <el-input v-model="mobile" placeholder="请输入手机号码(必选)" class="input" maxlength="20" />
      </div>
      <div>
        <label>授权角色:</label>
        <el-input v-model="auth_ids" placeholder="请输入授权角色，字数最多20字内" class="input" maxlength="20" />
      </div>
      <div>
        <single-image
          msg="图片小于2M，格式为jpg、png(必选)"
          label="头像:"
          type=".jpg,.png"
          size="2097152"
          :limit="3"
          @files="file"
        />
      </div>
      <div>
        <label style="vertical-align:top">备注信息:</label>
        <el-input
          v-model="remark"
          placeholder="请输入教材备注信息，字数最多300字内"
          class="input textarea"
          type="textarea"
          maxlength="300"
        />
      </div>
    </div>
    <div style="display:none">{{ sum }}</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="info" :disabled="Exist" @click="addA">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import SingleImage from '@/components/Upload/SingleImage3'
import { addAdministrators } from '../../../../api/Administrators'
import { MessageBox, Message } from 'element-ui'

export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      radio: '1',
      username: '',
      mobile: '',
      auth_ids: '',
      remark: '',
      img: '',
      ifExist: 0,
      Exist: true
    }
  },
  computed: {
    sum() {
      this.ifExist =
        Number(Boolean(this.username)) +
        Number(Boolean(this.mobile)) +
        Number(Boolean(this.img))
    }
  },
  watch: {
    ifExist(newval, oldval) {
      if (Number(newval) == 3) {
        this.Exist = false
      } else {
        this.Exist = true
      }
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
    file(res) {
      if (res.length > 0) {
        this.img = res[0].url
      } else {
        this.img = ''
      }
    },
    handleClose() {
      this.$emit('close', false)
    },
    addA() {
      return new Promise((resolve, reject) => {
        const index1 = this.auth_ids.split('')
        const index2 = index1.join(',')
        addAdministrators(
          this.username,
          this.mobile,
          this.img,
          this.remark,
          index2
        )
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
  background: #EBEBEB;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #c1c2c6;
}
>>> .el-textarea__inner {
  background: #EBEBEB;
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
