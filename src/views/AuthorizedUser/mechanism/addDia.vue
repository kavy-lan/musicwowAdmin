<template>
  <el-dialog
    title="添加授权机构"
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
        <label>机构名称:</label>
        <el-select v-model="orgListId" placeholder="请选择授权机构" class="el-selete">
          <el-option
            v-for="item in orgList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </div>
      <div>
        <label class="shouquanL">授权教材:</label>
        <div class="shouquan">
          <div>
            <el-radio-group v-model="radio" @change="radioChange">
              <el-radio :label="1">全部授权</el-radio>
              <el-radio :label="2">目录授权</el-radio>
              <el-radio :label="3">课时授权</el-radio>
            </el-radio-group>
          </div>
          <div>

            <el-select v-show="radio==1" v-model="value" placeholder="请选择授权教材" class="el-selete">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>

            <el-select v-show="radio==2" v-model="directoryId" multiple placeholder="请选择授权目录" class="el-selete" filterable>
              <el-option
                v-for="item in directoryList"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              />
            </el-select>
            <el-select v-show="radio==3" v-model="classId" multiple placeholder="请选择授权课时" class="el-selete">
              <el-option
                v-for="item in classList"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div>
        <label>授权时间:</label>
        <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          :picker-options="pickerOptions"
        />
      </div>
      <div>
        <label style="vertical-align:top">授权备注:</label>
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
import { addAuthorizedUser, getOrgList, getOrgDirectory, getOrgClass } from '../../../api/AuthorizedUser'
import { Message } from 'element-ui'

export default {
  components: {
    SingleImage
  },
  props: ['dialogVisible'],
  data() {
    return {
      dialogVisibleii: this.dialogVisible,
      ifExist: 0,
      Exist: true,
      orgList: [],
      directoryList: [],
      classList: [],
      orgListId: '',
      directoryId: '',
      classId: '',
      radio: 1,
      remark: '',
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value2: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''

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
  mounted() {
    this.getorgList()
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
    },
    getorgList() {
      return new Promise((resolve, reject) => {
        getOrgList().then(res => {
          if (res.error_code == 0) {
            const { data } = res
            this.orgList = data
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    radioChange(val) {
      this.radio = val
      if (val == 2) {
        return new Promise((resolve, reject) => {
          getOrgDirectory(this.orgListId).then(res => {
            if (res.error_code == 0) {
              const { data } = res
              this.directoryList = data
            }
          }).catch(error => {
            reject(error)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          getOrgClass(this.orgListId).then(res => {
            if (res.error_code == 0) {
              const { data } = res
              this.classList = data
            }
          }).catch(error => {
            reject(error)
          })
        })
      }
    }
  }
}
</script>
 <style  src="../../../styles/Dia.css" scoped></style>
<style lang="scss" scoped>
.left{
  width: 100%
}
>>>.el-radio-group label{
 margin-bottom: 20px !important
}
.shouquanL{
  vertical-align: top
}
.shouquan{
  display: inline-block;
}
</style>
