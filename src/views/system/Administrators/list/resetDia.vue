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
      <el-button type="info" @click="close">取 消</el-button>
      <el-button type="success" :disabled="Exist" @click="addA">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { resetAdministrators } from '../../../../api/Administrators'
import { Message } from 'element-ui'

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
  },
  methods: {
    close() {
      this.$emit('close', false)
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
 <style  src="../../../../styles/Dia.css" scoped></style>
<style lang="scss" scoped>
</style>
