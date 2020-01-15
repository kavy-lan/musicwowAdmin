<template>
  <el-dialog
    title="编辑管理员"
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
        <!-- <el-input v-model="auth_ids" placeholder="请输入授权角色，字数最多20字内" class="input" maxlength="20" /> -->
        <el-select v-model="auth_ids" multiple placeholder="请选择授权角色" class="el-selete" filterable>
          <el-option
            v-for="item in auth_list"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          />
        </el-select>
      </div>
      <div>
        <label class="uploadLabel">头像:</label>
        <single-image
          type=".jpg,.png"
          size="2097152"
          :limit="1"
          :filelist="headImg"
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
          resize="none"
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
import { editAdministrators, getEditAdministrators, GetAdminAuthList } from '../../../../api/Administrators'
import { Message } from 'element-ui'

export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible', 'id'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      radio: '1',
      username: '',
      mobile: '',
      auth_ids: '',
      auth_list: [],
      remark: '',
      img: '',
      ifExist: 0,
      Exist: true,
      headImg: []
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
  mounted() {
    this.getDetail(this.id)
    this.getRole()
    console.log(this.auth_ids)
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
        const index2 = this.auth_ids.join(',')
        editAdministrators(
          this.id,
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
    getDetail(id) {
      return new Promise((resolve, reject) => {
        getEditAdministrators(id).then(res => {
          if (res.error_code == 0) {
            const { data } = res
            this.username = data.username
            const a = []
            const ss = data.auth_ids.split(',')
            for (let i = 0; i < ss.length; i++) {
              a.push(parseInt(ss[i]))
            }
            this.auth_ids = a
            this.remark = data.remark
            this.mobile = data.mobile
            this.headImg = [{ url: data.head_img }]
            this.img = data.head_img
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    getRole() {
      return new Promise((resolve, reject) => {
        GetAdminAuthList()
          .then(res => {
            if (res.error_code == 0) {
              const { data } = res
              this.auth_list = data
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
 <style  src="../../../../styles/Dia.css" scoped></style>
<style lang="scss" scoped>
</style>
