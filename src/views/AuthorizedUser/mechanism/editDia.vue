<template>
  <el-dialog
    title="编辑授权机构"
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

            <el-select v-model="bookId" placeholder="请选择授权教材" class="el-selete" @change="bookChange">
              <el-option
                v-for="item in bookList"
                :key="item.id"
                :label="item.title"
                :value="item.id"
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
          v-model="effective"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
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
import { editOrg, getOrgList, getOrgDirectory, getOrgClass, getBookList, getOrgDetail } from '../../../api/AuthorizedUser'
import { Message } from 'element-ui'

export default {
  props: ['dialogVisible', 'id'],
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
      bookId: '',
      effective: '',
      bookList: []

    }
  },
  computed: {
    sum() {
      this.ifExist =
        Number(Boolean(this.orgListId)) +
        Number(Boolean(this.bookId)) +
        Number(Boolean(this.effective))
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
    this.getorgList()
    this.getbookList()
    this.getorgDetail(this.id)
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
    handleClose() {
      this.$emit('close', false)
    },
    addA() {
      console.log(this.effective)

      return new Promise((resolve, reject) => {
        editOrg(
          this.id,
          this.orgListId,
          this.bookId,
          this.radio,
          this.effective,
          String(this.directoryId),
          String(this.classId),
          this.remark,
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
    getbookList() {
      return new Promise((resolve, reject) => {
        getBookList().then(res => {
          if (res.error_code == 0) {
            const { data } = res
            this.bookList = data
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    radioChange(val) {
      this.radio = val
      this.bookId = ''
      this.classId = ''
      this.directoryId = ''
    },
    bookChange() {
      this.classId = ''
      this.directoryId = ''
      if (this.radio == 2) {
        return new Promise((resolve, reject) => {
          getOrgDirectory(this.bookId).then(res => {
            if (res.error_code == 0) {
              const { data } = res
              this.directoryList = data
            }
          }).catch(error => {
            reject(error)
          })
        })
      } else if (this.radio == 3) {
        return new Promise((resolve, reject) => {
          getOrgClass(this.bookId).then(res => {
            if (res.error_code == 0) {
              const { data } = res
              this.classList = data
            }
          }).catch(error => {
            reject(error)
          })
        })
      }
    },
    getorgDetail(id) {
      return new Promise((resolve, reject) => {
        getOrgDetail(id).then(res => {
          if (res.error_code == 0) {
            const { data } = res
            this.remark = data.remark
            this.orgListId = data.org_id
            this.bookId = data.book_id
            this.radio = data.authorize_type
            this.effective = data.effective_at
            this.bookChange()
            this.classId = []
            this.directoryId = []
            data.classs.map(item => {
              this.classId.push(item.book_class_id)
            })
            data.directorys.map(item => {
              this.directoryId.push(item.book_directory_id)
            })
          }
        }).catch(error => {
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
