<template>
  <div class="app-container">
    <div v-if="searchShow" class="search">
      <div v-for="(item, index) in inputSearch" :key="item.name">
        <label>{{ item.label }}</label>
        <el-input v-model="item.value" placeholder="请输入内容" class="input" @input="six" />
      </div>
      <div v-for="(item, index) in seleteSearch" :key="index">
        <label>{{ item.label }}</label>
        <el-select v-model="item.value" placeholder="请选择" clearable @change="seleteChange" @clear="clearSelete(index)">
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
      <el-table-column align="left" label="ID" prop="id" />
      <el-table-column align="center" label="批次号" prop="lot_no" />
      <!-- <el-table-column align="center" label="打包类型" prop="pack_type" /> -->
      <el-table-column align="center" label="打包类型" prop="pack_type">
        <template slot-scope="scope">
          <span v-if="scope.row.pack_type== 1" style="color:green ">课件</span>
          <span v-else-if="scope.row.pack_type== 2" style="color: ">目录</span>
          <span v-else style="color: blue">课时</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="标题" prop="title" />
      <el-table-column align="center" label="日志内容" prop="content" />
      <el-table-column align="center" label="状态" prop="status">
        <template slot-scope="scope">
          <span v-if="scope.row.status== 0" style="color: red">打包失败</span>
          <span v-else-if="scope.row.status== 1">等待打包</span>
          <span v-else-if="scope.row.status== 2">正在打包</span>
          <span v-else style="color: blue">打包成功</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间" prop="created_at" />
      <el-table-column align="center" label="更新时间" prop="updated_at" />
      <el-table-column align="center" label="操作" width="220">
        <template slot-scope="scope">
          <el-button plain class="caozuoButton" @click="goDetail(scope.row)">
            <span class="caozuo">
              <svg-icon class-name="search-icon" icon-class="tableEdit" />打包详情
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
  </div>
</template>
<script>
import {
  csPackList,
  csPackDelete
} from '../../../api/csPack'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      rolesList: [],
      length: 1,
      filters: {},
      ops: {},
      total: 0,
      currentPage: 1,
      searchShow: false,
      somedelete: '',
      deleteShow: true,
      searchModel: false,
      seleteSearch: [
        { label: '课时编号:', value: '', name: 'class_no', ops: '=', array: [] },
        { label: '所属目录:', value: '', name: 'directory', ops: '=', array: [] }
      ],
      inputSearch: [{ label: '课时名称:', value: '', name: 'title', ops: '=' }]
    }
  },
  computed: {
  },
  created() {
    // Mock: get all routes and roles list from server
  },
  mounted() {
    this.tableInit(1)
  },
  methods: {
    tableInit(page, filters, ops) {
      return new Promise((resolve, reject) => {
        csPackList(page, filters, ops)
          .then(res => {
            const { data } = res
            this.rolesList = data.list
            this.length = data.list.length
            this.total = data.total
            this.currentPage = page
            this.rolesList.map(item => {
              // if (item.pack_type == 1) {
              //   item.pack_type = '课件'
              // } else if (item.pack_type == 2) {
              //   item.pack_type = '目录'
              // } else {
              //   item.pack_type = '课时'
              // }
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
            csPackDelete(row.id)
              .then(res => {
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
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
    handleChange(e) {
    },
    handleSelectAll(row) {
      if (row.length > 0) {
        this.deleteShow = false
        this.somedelete = row
      } else {
        this.deleteShow = true
      }
    },
    handleSelectionChange(row) {
      if (row.length > 0) {
        this.deleteShow = false
        this.somedelete = row
      } else {
        this.deleteShow = true
      }
    },
    getValue() {
    },
    nextPage(val) {
      if (this.searchModel) {
        this.tableInit(val, this.filters, this.ops)
      } else {
        this.tableInit(val)
      }
    },
    six(e) {
      for (let i = 0; i < this.inputSearch.length; i++) {
        if (this.inputSearch[i].value != undefined &&
          this.inputSearch[i].value.trim()) {
          this.filters[this.inputSearch[i].name] = `${this.inputSearch[i].value}`
          this.ops[this.inputSearch[i].name] = `${this.inputSearch[i].ops}`
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
      this.tableInit(1, this.filters, this.ops)
      this.searchModel = true
    },
    resetList() {
      this.tableInit(1)
      this.searchModel = false
    },
    back() {
      this.$router.go(-1)
    },
    goDetail(row) {
      this.$router.push({ path: '/csPack/detail', query: { lot_no: row.lot_no }})
    }
  }
}
</script>
<style  src="../../../styles/list.css" scoped></style>
<style lang="scss" scoped>

</style>

