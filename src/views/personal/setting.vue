<template>
  <div class="password">
    <div class="tips">修改密码</div>
    <div class="input_box">
      <div>
        <label>旧密码:</label>
        <el-input v-model="oldPass" placeholder="请输入旧密码，字数最多20字内(必选)" class="input" maxlength="20" />
      </div>
      <div>
        <label>新密码:</label>
        <el-input v-model="newPass" placeholder="请输入新密码，字数最多20字内(必选)" class="input" maxlength="20" />
      </div>
    </div>
    <div>
      <el-button type="success" @click="changeP">确定</el-button>
    </div>
  </div>
</template>

<script>
import { changePassWord } from '../../api/user'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      oldPass: '',
      newPass: ''
    }
  },
  methods: {
    changeP() {
      return new Promise((resolve, reject) => {
        changePassWord(this.oldPass, this.newPass)
          .then(res => {
            console.log(res)
            if (res.error_code == 0) {
              const { data } = res
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
            }
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
>>> .el-input__inner,
>>> .el-input__inner::placeholder {
  background: #EBEBEB;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #c1c2c6;
}
>>> .el-textarea__inner:focus,
>>> .el-input__inner:focus {
  border-color: #07d1aa;
}
.password {
  margin: 0 auto;
  text-align: center;
  > div {
    margin-top: 15px;
  }
  > .input_box {
    div {
      margin-top: 15px;
    }
  }
  .tips {
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(88, 91, 99, 1);
    margin-right: 15px;
  }
}
</style>
