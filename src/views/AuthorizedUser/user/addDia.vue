<template>
  <el-dialog
    title="添加授权用户"
    :visible.sync="dialogVisible"
    width="100%"
    custom-class="customWidth"
    center
    top="0"
    :close-on-click-modal="false"
    :before-close="handleClose"
  >
    <div class="uploadText">
      图片小于 2M/张，视频MP4小于 500M/个，音频MP3小于 20M/个
    </div>
    <div class="left">
      <div>
        <label>用户名:</label>
        <el-input v-model="username" placeholder="请输入用户名，字数最多20字内(必选)" class="input" maxlength="20" />
      </div>
      <div>
        <label>用户手机:</label>
        <el-select v-model="areaValue" placeholder="请选择区号" class="el-selete">
          <el-option
            v-for="item in areaCode"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-input v-model="mobile" placeholder="请输入手机号码(必选)" class="input" maxlength="11" />
      </div>
      <div>
        <label class="uploadLabel">用户头像:</label>
        <single-image
          type=".jpg,.png"
          size="2097152"
          :limit="1"
          @files="file"
        />
      </div>
      <div>
        <label style="vertical-align:top">备注信息:</label>
        <el-input
          v-model="remark"
          placeholder="请输入授权教材备注信息，字数最多300字内"
          class="input textarea"
          type="textarea"
          maxlength="300"
          resize="none"
        />
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
import SingleImage from '@/components/Upload/SingleImage3'
import { addAuthorizedUser } from '../../../api/AuthorizedUser'
import { Message } from 'element-ui'

export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      username: '',
      mobile: '',
      remark: '',
      img: '',
      ifExist: 0,
      Exist: true,
      areaCode: [{ value: 86, label: `大陆 + 86` }, { value: 852, label: `香港 + 852` }, { value: 853, label: `澳门 + 853` }, { value: 886, label: `台湾 + 886` }],
      areaValue: ''
    }
  },
  computed: {
    sum() {
      this.ifExist =
        Number(Boolean(this.username)) +
        Number(Boolean(this.mobile)) +
        Number(Boolean(this.areaValue)) +
        Number(Boolean(this.img))
    }
  },
  watch: {
    ifExist(newval, oldval) {
      if (Number(newval) == 4) {
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
        addAuthorizedUser(
          this.username,
          this.areaValue,
          this.mobile,
          this.remark,
          this.img
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
 <style  src="../../../styles/Dia.css" scoped></style>
<style lang="scss" scoped>
.left{
  width: 100%
}
</style>
