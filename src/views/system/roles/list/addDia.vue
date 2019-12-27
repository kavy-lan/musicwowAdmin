<template>
  <el-dialog
    title="添加角色"
    :visible.sync="dialogVisible"
    width="100%"
    custom-class="customWidth"
    center
    top="0"
    :close-on-click-modal="false"
    :before-close="handleClose"
  >
    <div class="left" @click="test">
      <div>
        <label>角色名称:</label>
        <el-input v-model="rolesname" placeholder="请输入角色名称，字数最多20字内(必选)" class="input" maxlength="20" />
      </div>
      <label style="vertical-align:top">备注信息:</label>
      <el-input
        v-model="remark"
        placeholder="请输入角色备注信息，字数最多300字内"
        class="input textarea"
        type="textarea"
        maxlength="300"
      />
    </div>
    <div style="display:none">{{ sum }}</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="info" :disabled="Exist" @click="addA">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addRoles } from '../../../../api/roles'
import { MessageBox, Message } from 'element-ui'
export default {
  props: ['dialogVisible'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      radio: '1',
      rolesname: '',
      remark: '',
      ifExist: 0,
      Exist: true
      //   id:""
    }
  },
  computed: {
    sum() {
      this.ifExist =
        Number(Boolean(this.rolesname)) +
        Number(Boolean(this.remark))
    }
  },
  watch: {
    ifExist(newval, oldval) {
      if (Number(newval) == 2) {
        this.Exist = false
      } else {
        this.Exist = true
      }
    }
  },
  mounted() {
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
        addRoles(
          this.rolesname,
          this.remark
        )
          .then(res => {
            console.log(res)
            if (res.error_code == 0) {
              Message({
                message: '编辑成功',
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
    },
    test() {
      console.log(this.id)
      console.log(33333)
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
.caozuoButton {
  height: 0;
  width: 0;
  padding: 0;
  border: none;
  margin-right: 36px;
}

</style>
