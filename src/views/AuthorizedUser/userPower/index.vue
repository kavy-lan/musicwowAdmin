<template>
  <div class="app-container">
    <div v-if="searchShow" class="search">
      <div v-for="(item, index) in seleteSearch" :key="index">
        <label>{{ item.label }}</label>
        <el-select v-model="item.value" placeholder="请选择" clearable filterable @change="seleteChange" @clear="clearSelete(index)">
          <el-option
            v-for="(items,indexs) in item.array"
            :key="indexs"
            :label="items ==1? '整本授权':items ==2?'目录授权':items ==3?'课时授权':items ==4?'混合授权':items"
            :value="items"
          />
        </el-select>
      </div>
      <el-button type="success" @click="submitSearch">提交</el-button>
      <el-button type="danger" @click="resetSearch">重置</el-button>
    </div>
    <el-button round icon="el-icon-arrow-left" @click="back">返回上一页</el-button>
    <el-button icon="el-icon-refresh" type="primary" @click="reload" />
    <el-button type="success" icon="el-icon-upload2" size="medium" @click="dialogVisible = true">添加</el-button>
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
      <el-table-column align="center" label="授权内容名称" prop="book.title" />
      <el-table-column align="center" label="类型" prop="authorize_type">
        <template slot-scope="scope">
          <span v-if="scope.row.authorize_type== 1">整本</span>
          <span v-else-if="scope.row.authorize_type== 2">目录</span>
          <span v-else-if="scope.row.authorize_type== 3">课时</span>
          <span v-else>混合</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="有效期" prop="effective_at" />
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-color="#07D1AA"
            inactive-color="#D9D9D9"
            @change="handleChange(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="220">
        <template slot-scope="scope">
          <el-button plain class="caozuoButton" @click="dialogVisibleEdit=true,editId=scope.row.id">
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
    <edit-dia
      v-if="dialogVisibleEdit"
      :id="editId"
      :user-id="addId"
      :dialog-visible="dialogVisibleEdit"
      @close="closr"
    />

  </div>
</template>
<script>

import AddDia from './addDia'
import EditDia from './editDia'

import {
  userPowerList,
  deleteuserPowerList,
  alluserPowerList
} from '../../../api/AuthorizedUser'
import { Message } from 'element-ui'

export default {
  components: { AddDia, EditDia },
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
      searchShow: false,
      somedelete: '',
      seleteSearch: [
        { label: '授权内容名称:', value: '', name: 'title', ops: '%*%', array: [] },
        { label: '类型:', value: '', name: 'authorize_type', ops: '%*%', array: [] }
      ],
      test: [],
      deleteShow: true,
      searchModel: false
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
    this.tableInit(1)
    this.addId = this.$route.query.id
  },
  methods: {
    tableInit(page, filters, ops) {
      return new Promise((resolve, reject) => {
        userPowerList(page, filters, ops)
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
              alluserPowerList(page, filters, ops).then(res => {
                // console.log(Object.keys(res.data.list))
                res.data.list.map(item => {
                  this.seleteSearch[0].array.push(String(item.book.title))
                  this.seleteSearch[1].array.push(String(item.authorize_type))
                  this.seleteSearch[0].array = [...new Set(this.seleteSearch[0].array)]
                  this.seleteSearch[1].array = [...new Set(this.seleteSearch[1].array)]
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
      this.tableInit(1)
    },
    deleteA(row) {
      this.$confirm('确定要删除吗？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            deleteuserPowerList(row.id)
              .then(res => {
                console.log(res)
                if (res.error_code == 0) {
                  Message({
                    message: '删除成功',
                    type: 'success',
                    duration: 5 * 1000
                  })
                  this.deleteShow = true
                  this.tableInit(1)
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
    goGetRole() {
      this.$router.push({ path: '/getROLE' })
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
        this.tableInit(val, this.filters, this.ops)
      } else {
        this.tableInit(val)
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
        this.tableInit(1)
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
      this.tableInit(1, this.filters, this.ops)
      this.searchModel = true
    },
    resetSearch() {
      this.seleteSearch.map(item => {
        item.value = ''
      })
      this.filters = {}
      this.ops = {}
      this.tableInit(1)
      this.searchModel = false
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style  src="../../../styles/list.css" scoped></style>
<style lang="scss" scoped>

</style>

