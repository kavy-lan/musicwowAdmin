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
    <div class="left">
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
        resize="none"
        maxlength="300"
      />
    </div>
    <div style="display:none">{{ sum }}</div>
    <span slot="footer" class="dialog-footer">
      <el-button type="info" @click="close">取 消</el-button>
      <el-button type="success" :disabled="Exist" @click="addA">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addRoles } from '../../../../api/roles'
import { Message } from 'element-ui'
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
    }
  }
}
</script>
 <style  src="../../../../styles/Dia.css" scoped></style>
<style lang="scss" scoped>

</style>
