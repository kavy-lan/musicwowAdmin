<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    :action="action"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    list-type="picture"
    :limit="limit"
    :data="formdata"
    :before-upload="before"
    :multiple="true"
    :on-success="success"
    :on-change="change"
    :on-error="error"
    :accept="type"
    :file-list="filelist"
  >
    <label>{{ label }}</label>
    <el-button size="medium" type="info" @click="upload">上传</el-button>
    <span slot="tip" class="el-upload__tip">{{ msg }}</span>
  </el-upload>
</template>

<script>
import { getToken } from '@/api/qiniu'
import { watch } from 'fs'
import { MessageBox, Message } from 'element-ui'
import { getUploadConfig } from '@/api/upload'
import { config } from '@vue/test-utils'
export default {
  name: 'SingleImageUpload3',
  props: ['msg', 'label', 'size', 'type', 'limit', 'filelist', 'clear'],
  data() {
    return {
      formdata: {},
      file: [],
      action: '',
      config: '',
      removeFile: [],
      successFile: []
    }
  },
  watch: {
    file(newval, oldval) {
      this.$emit('files', newval)
    },
    clear(newval, oldval) {
      console.log('清理了')
      this.$refs.upload.clearFiles()
    }
  },
  mounted() {
    // return new Promise((resolve, reject) => {
    //   getUploadConfig()
    //     .then(response => {
    //       const { data } = response
    //       var config = JSON.parse(window.atob(data.config))
    //       console.log(config)
    //       this.config = config
    //       this.action = config.domain
    //       this.formdata = {
    //         // key: `pulic/image`,
    //         OSSAccessKeyId: config.access_key_id,
    //         policy: config.policy,
    //         Signature: config.signature,
    //         success_action_status: '200'
    //       }
    //     })
    //     .catch(error => {
    //       reject(error)
    //     })
    // })
  },
  methods: {
    upload(){
      return new Promise((resolve, reject) => {
      getUploadConfig()
        .then(response => {
          const { data } = response
          var config = JSON.parse(window.atob(data.config))
          console.log(config)
          this.config = config
          this.action = config.domain
          this.formdata = {
            // key: `pulic/image`,
            OSSAccessKeyId: config.access_key_id,
            policy: config.policy,
            Signature: config.signature,
            success_action_status: '200'
          }
        })
        .catch(error => {
          reject(error)
        })
    })
    },
    handleRemove(file, fileList) {
      console.log(file)
      for (let i = 0; i < this.file.length; i++) {
        if (this.file[i].name == file.name) {
          this.file.splice(i)
          console.log(this.file)
        }
      }
    },
    handlePreview(file) {
      console.log(file)
    },
    before(res) {
      if (res.size > this.size) {
        Message({
          message: '请选择正确尺寸的文件',
          type: 'error',
          duration: 5 * 1000
        })
        return false
      }
      const timestamp = new Date().getTime()
      const num = Math.random()
        .toString(36)
        .substr(-10)
      const index1 = res.name.lastIndexOf('.')
      const index2 = res.name.length
      const suffix1 = res.name.substring(index1 + 1, index2)
      let type
      if (res.name.indexOf('jpg') > -1 || res.name.indexOf('png') > -1) {
        type = 'images'
      } else if (res.name.indexOf('mp4') > -1) {
        type = 'video'
      } else {
        type = 'audio'
      }
      this.$set(
        this.formdata,
        'key',
        `pulic/${type}/${timestamp}${num}.${suffix1}`
      )
    },
    success(res, file, fileList) {
      this.file = []
      for (let i = 0; i < fileList.length; i++) {
        this.file.push({ url: `${this.action}/${this.formdata.key}`, name: fileList[i].name })
      }
      Message({
        message: '上传成功',
        type: 'success',
        duration: 5 * 1000
      })
    },
    change(res) {
      // console.log(res);
    },
    error(res) {
      Message({
        message: '上传失败，请重试',
        type: 'error',
        duration: 5 * 1000
      })
    }
  },
  ha(newval, oldval) {
    this.action = newval
  }
}
</script>
<style lang="scss" scoped>
label {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(88, 91, 99, 1);
  margin-right: 15px;
}
.el-upload__tip {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  margin-left: 17px;
}
</style>

