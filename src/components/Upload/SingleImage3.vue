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
    <label v-if="label">{{ label }}</label>
    <el-button size="medium" type="primary" @click="upload">上传</el-button>
    <span slot="tip" class="el-upload__tip">{{ msg }}</span>
    <video ref="noneVideo" src style="display:none" />
  </el-upload>
</template>

<script>
import { getToken } from '@/api/qiniu'
import { watch } from 'fs'
import { MessageBox, Message } from 'element-ui'
import { getUploadConfig } from '@/api/upload'
import { config } from '@vue/test-utils'
import { log } from 'util'
export default {
  name: 'SingleImageUpload3',
  props: ['msg', 'size', 'type', 'limit', 'filelist', 'clear', 'time', 'label'],
  data() {
    return {
      formdata: {},
      file: [],
      action: '',
      config: '',
      removeFile: [],
      successFile: [],
      keybox: [],
      num: 0,
      videoDuratime: true
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
    if (this.filelist != undefined) {
      this.file = this.filelist
    }
  },
  methods: {
    upload() {
      return new Promise((resolve, reject) => {
        getUploadConfig()
          .then(response => {
            const { data } = response
            // var config = JSON.parse(window.atob(data.config))
            var config = data.config
            this.config = config
            this.action = config.domain
            console.log(this.action)
            console.log(this.config)
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
      for (let i = 0; i < this.file.length; i++) {
        if (this.file[i].uid == file.uid) {
          this.file.splice(i, 1)
          this.keybox.splice(i, 1)
        }
      }
    },
    handlePreview(file) {
      console.log(file)
    },
    before(res) {
      if (res.name.length > 54) {
        Message({
          message: '上传文件名称长度不能大于50',
          type: 'error',
          duration: 5 * 1000
        })
        return false
      }
      if (res.size > this.size) {
        Message({
          message: '请选择正确尺寸的文件',
          type: 'error',
          duration: 5 * 1000
        })
        return false
      }
      let uploadType = res.type.substring(
        res.type.indexOf('/') + 1,
        res.type.length
      )
      if (uploadType == 'jpeg') {
        uploadType = 'jpg'
      }
      if (this.type.indexOf(uploadType) < 0) {
        Message({
          message: '请选择正确格式的文件',
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
      if (
        res.name.indexOf('jpg') > -1 ||
        res.name.indexOf('png') > -1 ||
        res.name.indexOf('gif')
      ) {
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
      this.keybox.push({
        url: `${this.action}/${this.formdata.key}`,
        uid: res.uid,
        name: res.name
      })
    },
    success(response, file, fileList) {
      for (let i = 0; i < this.keybox.length; i++) {
        this.file.push({
          url: this.keybox[i].url,
          name: this.keybox[i].name,
          uid: this.keybox[i].uid,
          cover: `${this.keybox[i].url}?x-oss-process=video/snapshot,t_1,f_jpg,m_fast,ar_auto`
        })
      }
      for (let i = 0; i < this.file.length; i++) {
        for (let j = i + 1; j < this.file.length; j++) {
          if (this.file[i].uid == this.file[j].uid) {
            this.file.splice(j, 1)
          }
        }
      }
      Message({
        message: '上传成功',
        type: 'success',
        duration: 5 * 1000
      })
      console.log(this.file[0].url)
    },
    change(res) {},
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
.el-upload__tip {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  margin-left: 17px;
}

</style>

