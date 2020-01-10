<template>
  <div class="app-container">
    <div v-if="searchShow" class="search">
      <!-- <div v-for="(item, index) in inputSearch" :key="item.name">
        <label>{{ item.label }}</label>
        <el-input v-model="item.value" placeholder="请输入内容" class="input" @input="six" />
      </div> -->
      <div v-for="(item, index) in seleteSearch" :key="index">
        <label>{{ item.label }}</label>
        <el-select v-model="item.value" placeholder="请选择" clearable filterable @change="seleteChange" @clear="clearSelete(index)">
          <el-option
            v-for="(items,indexs) in item.array"
            :key="indexs"
            :label="items"
            :value="items"
          />
        </el-select>
      </div>
      <el-button type="success" @click="submitSearch">提交</el-button>
      <el-button type="danger" @click="resetList">重置</el-button>
    </div>
    <el-button round icon="el-icon-arrow-left" @click="back">返回上一页</el-button>
    <el-button icon="el-icon-refresh" type="primary" @click="reload" />
    <el-button type="primary" icon="el-icon-upload2" size="medium" @click="dialogVisible = true , addId=bookID">添加</el-button>
    <el-button
      type="danger"
      icon="el-icon-delete"
      size="medium"
      class="deletebutton"
      :disabled="deleteShow"
      @click="someDelete"
    >删除</el-button>
    <el-button size="medium" type="primary" style="float:right" @click="searchShow = !searchShow">
      <svg-icon class-name="search-icon" icon-class="search" />
    </el-button>
    <el-table
      :data="rolesList"
      style="width: 100%;margin-top:20px;"
      border
      :header-cell-style="{background:'#fff',color:'#B3B3B3',fontSize:'14px',fontFamily:'PingFangSC-Medium,PingFang SC',
                           fontWeight:'500'}"
      :cell-style="{color:'#585B63',fontSize:'12px'}"
      :row-class-name="tableRowClassName"
      @select="handleSelectionChange"
      @select-all="handleSelectAll"
    >
      <el-table-column type="selection" width="55" align="center" prop="checkbox" />
      <!-- <el-table-column align="left" label="ID" prop="id" /> -->
      <!-- <el-table-column align="center" label="教材ID" prop="book_id" /> -->
      <!-- <el-table-column align="center" label="目录ID" prop="book_directory_id" /> -->
      <el-table-column align="center" label="课时编号" prop="class_no" />
      <el-table-column align="center" label="课时名称" prop="title" />
      <el-table-column align="center" label="所属目录" prop="directory.title" />
      <el-table-column align="center" label="知识点数" prop="knowledge_count" />
      <!-- <el-table-column align="center" label="备注说明" prop="remark" /> -->
      <el-table-column align="center" label="打包">
        <template slot-scope="scope">
          <el-button plain class="caozuoButton" @click="packClass(scope.row)">
            <span class="caozuo">
              <svg-icon class-name="search-icon" icon-class="pack" />打包课时
            </span>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="220">
        <template slot-scope="scope">
          <el-button plain class="caozuoButton" @click="dialogVisibleEdit=true,editId=scope.row.id,editBookId=bookID">
            <span plain class="caozuo">
              <svg-icon class-name="search-icon" icon-class="tableEdit" />编辑
            </span>
          </el-button>
          <el-button plain class="caozuoButton" @click="deleteA(scope.row)">
            <span class="caozuo">
              <svg-icon class-name="search-icon" icon-class="delete" />删除
            </span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      class="clearfix"
      :current-page="currentPage"
      @current-change="nextPage"
    />
    <!-- 添加课时弹窗 -->
    <add-dia v-if="dialogVisible" :id="addId" :dialog-visible="dialogVisible" @close="closr" />
    <edit-dia v-if="dialogVisibleEdit" :id="editId" :bookid="editBookId" :dialog-visible="dialogVisibleEdit" @close="closr" />
    <!-- <reset :dialogVisible="dialogVisibleReset" @close="closr" :id="editId"></reset> -->
  </div>
</template>
<script>
// import SingleImage from "@/components/Upload/SingleImage3"
import AddDia from './addDia'
import editDia from './editDia'
// import EditDia from "./editDia";
// import reset from "./resetDia";
import {
  classManagementList,
  deleteclassManagementList,
  packClass,
  allList
} from '../../../../api/classManagement'
import { MessageBox, Message } from 'element-ui'

export default {
  components: { AddDia, editDia },
  data() {
    return {
      rolesList: [],
      dialogVisible: false,
      dialogVisibleEdit: false,
      dialogVisibleReset: false,
      length: 1,
      imgUrl: [],
      filters: {},
      ops: {},
      total: 0,
      currentPage: 1,
      editId: '',
      addId: '',
      bookID: '',
      editBookId: '',
      searchShow: false,
      somedelete: '',
      test: [],
      deleteShow: true,
      searchModel: false,
      seleteSearch: [
        { label: '课时编号:', value: '', name: 'class_no', ops: '=', array: [] },
        { label: '所属目录:', value: '', name: 'directory', ops: '%*%', array: [] },
        { label: '课时名称:', value: '', name: 'title', ops: '%*%', array: [] }
      ]
    }
  },
  computed: {
    routesData() {
      return this.routes
    }
  },
  created() {
    // Mock: get all routes and roles list from server
  },
  mounted() {
    const that = this
    that.bookID = this.$route.query.id
    that.tableInit(this.bookID, 1)
    console.log(this.searchList)
  },
  methods: {
    tableInit(bookID, page, filters, ops) {
      return new Promise((resolve, reject) => {
        classManagementList(bookID, page, filters, ops)
          .then(res => {
            const { data } = res
            this.rolesList = data.list
            this.length = data.list.length
            this.total = data.total
            this.currentPage = page
            this.rolesList.map(item => {
              if (item.status == 1) {
                item.status = true
              } else {
                item.status = false
              }
            })
            // 获取所有数据，用于下拉框
            return new Promise((resolve, reject) => {
              allList(bookID, page, filters, ops).then(res => {
                // console.log(Object.keys(res.data.list))
                res.data.list.map(item => {
                  this.seleteSearch[0].array.push(String(item.class_no))
                  this.seleteSearch[1].array.push(String(item.directory.title))
                  this.seleteSearch[2].array.push(String(item.title))
                  this.seleteSearch[0].array = [...new Set(this.seleteSearch[0].array)]
                  this.seleteSearch[1].array = [...new Set(this.seleteSearch[1].array)]
                  this.seleteSearch[2].array = [...new Set(this.seleteSearch[2].array)]
                })
              })
            })
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    reload() {
      this.tableInit(this.bookID, 1)
    },
    deleteA(row) {
      this.$confirm('确定要删除吗？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            deleteclassManagementList(row.id)
              .then(res => {
                console.log(res)
                if (res.error_code == 0) {
                  Message({
                    message: '删除成功',
                    type: 'success',
                    duration: 5 * 1000
                  })
                  this.deleteShow = true
                  this.tableInit(this.bookID, 1)
                }
              })
              .catch(error => {
                reject(error)
              })
          })
        })
        .catch(action => {})
    },
    someDelete() {
      const allId = { id: '' }
      const allId1 = { id: '' }
      for (let i = 0; i < this.somedelete.length; i++) {
        allId.id += `${this.somedelete[i].id},`
      }
      allId1.id = allId.id.substring(0, allId.id.length - 1)
      this.deleteA(allId1)
    },
    packClass(row) {
      return new Promise((resolve, reject) => {
        packClass(row.id).then(res => {
          if (res.error_code == 0) {
            Message({
              message: `${res.message}`,
              type: 'success',
              duration: 5 * 1000
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
    handleChange(e) {
      console.log(e)
    },
    handleSelectionChange(row) {
      if (row.length > 0) {
        this.deleteShow = false
        this.somedelete = row
      } else {
        this.deleteShow = true
      }
    },
    handleSelectAll(row) {
      if (row.length > 0) {
        this.deleteShow = false
        this.somedelete = row
      } else {
        this.deleteShow = true
      }
    },
    getValue() {
      console.log(this.test)
    },
    nextPage(val) {
      if (this.searchModel) {
        this.tableInit(this.bookID, val, this.filters, this.ops)
      } else {
        this.tableInit(this.bookID, val)
      }
    },
    closr(val) {
      if (val == false) {
        this.dialogVisible = false
        this.dialogVisibleEdit = false
        this.dialogVisibleReset = false
      } else {
        this.dialogVisible = false
        this.dialogVisibleEdit = false
        this.dialogVisibleReset = false
        this.tableInit(this.bookID, 1)
      }
    },
    six(e) {
      for (let i = 0; i < this.inputSearch.length; i++) {
        if (this.inputSearch[i].value != undefined &&
          this.inputSearch[i].value.trim()) {
          this.filters[this.inputSearch[i].name] = `${this.inputSearch[i].value}`
          this.ops[this.inputSearch[i].name] = `${this.inputSearch[i].ops}`
        } else {
          delete this.filters[this.inputSearch[i].name]
          delete this.ops[this.inputSearch[i].name]
        }
      }
    },
    seleteChange(res) {
      for (let i = 0; i < this.seleteSearch.length; i++) {
        if (this.seleteSearch[i].value != undefined &&
          this.seleteSearch[i].value.trim()) {
          this.filters[this.seleteSearch[i].name] = `${this.seleteSearch[i].value}`
          this.ops[this.seleteSearch[i].name] = `${this.seleteSearch[i].ops}`
        }
      }
    },
    clearSelete(index) {
      delete this.filters[this.seleteSearch[index].name]
      delete this.ops[this.seleteSearch[index].name]
    },
    submitSearch() {
      // this.filters = JSON.stringify(this.filters)
      // this.ops = JSON.stringify(this.ops)
      this.tableInit(this.bookID, 1, this.filters, this.ops)
      this.searchModel = true
    },
    resetList() {
      this.seleteSearch.map(item => {
        item.value = ''
      })
      this.tableInit(this.bookID, 1)
      this.searchModel = false
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style  src="../../../../styles/list.css" scoped></style>
<style lang="scss" scoped>

</style>

