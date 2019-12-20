<template>
  <el-dialog
    title="重置密码"
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
        <label>密码:</label>
        <el-input v-model="password" placeholder="请输入密码，字数最多20字内(必选)" class="input" maxlength="20" />
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
// import SingleImage from "@/components/Upload/SingleImage3";
import { resetAdministrators } from '../../api/Administrators'
import { MessageBox, Message } from 'element-ui'
import { array } from 'jszip/lib/support'

export default {
  props: ['dialogVisible', 'id'],
  data() {
    return {
      radio: '1',
      ifExist: 0,
      Exist: true,
      password: ''
    }
  },
  computed: {
    sum() {
      this.ifExist =
        Number(Boolean(this.password))
    }
  },
  watch: {
    ifExist(newval, oldval) {
      if (Number(newval) == 1) {
        this.Exist = false
      } else {
        this.Exist = true
      }
    }
  },
  mounted() {
    console.log(this.id)
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
    addA() {
      return new Promise((resolve, reject) => {
        resetAdministrators(
          this.id,
          this.password,
        )
          .then(res => {
            console.log(res)
            if (res.error_code == 0) {
              Message({
                message: '修改成功',
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
  background: #d9d9d9;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #c1c2c6;
}
>>> .Target .el-textarea__inner {
  min-height: 116px !important;
}
>>> .el-textarea__inner:focus,
>>> .el-input__inner:focus {
  border-color: #07d1aa;
}

</style>
