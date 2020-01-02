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
    <el-button type="success" icon="el-icon-upload2" size="medium" @click="dialogVisible = true , addId=bookID">添加</el-button>
    <el-button
      type="danger"
      icon="el-icon-delete"
      size="medium"
      class="deletebutton"
      :disabled="deleteShow"
      @click="someDelete"
    >删除</el-button>
    <el-button size="medium" type="info" style="float:right" @click="searchShow = !searchShow">
      <svg-icon class-name="search-icon" icon-class="search" />
    </el-button>
    <el-table
      :data="rolesList"
      style="width: 100%;margin-top:20px;"
      border
      :header-cell-style="{background:'#fff',color:'#B3B3B3',fontSize:'14px',fontFamily:'PingFangSC-Medium,PingFang SC',
                           fontWeight:'500'}"
      :cell-style="{color:'#585B63',fontSize:'14px'}"
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
      <!-- <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-color="#07D1AA"
            inactive-color="#D9D9D9"
            @change="handleChange(scope.row)"
          />
        </template>
      </el-table-column> -->
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
          <el-button plain class="caozuoButton" @click="packClass(scope.row)">
            <span class="caozuo">
              <svg-icon class-name="search-icon" icon-class="delete" />打包课时
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
  packClass
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
        { label: '所属目录:', value: '', name: 'directory', ops: '=', array: [] }
      ],
      inputSearch: [{ label: '课时名称:', value: '', name: 'title', ops: '=' }],
      searchNum: 1
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
            this.seleteSearch[0].array = []
            this.seleteSearch[1].array = []
            this.rolesList.map(item => {
              if (item.status == 1) {
                item.status = true
              } else {
                item.status = false
              }
              this.seleteSearch[0].array.push(String(item.class_no))
              this.seleteSearch[1].array.push(String(item.directory))
            })
            this.searchNum--
          })
          .catch(error => {
            reject(error)
          })
      })
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
      this.tableInit(this.bookID, 1)
      this.searchModel = false
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}

.svg-icon {
  margin-right: 3px;
}
>>> .el-table .warning-row {
  background: #f8f8f8;
}
>>> .el-table .success-row {
  background: #f2f2f2;
}
>>> .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #ebebeb !important;
}
>>> .el-table--border td:nth-child(1) {
  border-right: none;
}
>>> .el-table--border th:nth-child(1) {
  border-right: none;
}
>>> .el-table__header tr,
>>> .el-table__header th {
  padding: 0;
  height: 60px;
}
>>> .el-table__body tr,
>>> .el-table__body td {
  padding: 0;
  height: 60px;
}
>>> .noneColor {
  margin-left: -5px !important;
  border-radius: 0;
}
>>> .noneColor:nth-child(3),
>>> .noneColor:nth-child(4),
>>> .noneColor:nth-child(5) {
  border-right: none;
}
>>> .deletebutton {
  margin-right: 13px;
}
>>> .el-pagination {
  margin-top: 20px;
  float: right;
}
>>> .el-pagination.is-background .el-pager li,
>>> .el-pagination.is-background .btn-next,
>>> .el-pagination.is-background .btn-prev {
  width: 43px;
  height: 35px;
  line-height: 35px;
  background: rgba(242, 242, 242, 1);
  border-radius: 6px;
  border: 1px solid rgba(217, 217, 217, 1);
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
}
>>> .el-pagination.is-background .el-pager li:not(.disabled).active {
  color: #585b63;
  background-color: #d9d9d9;
}
>>> .el-pager li:hover {
  color: rgba(179, 179, 179, 1) !important;
}

>>> .el-button:focus {
  border-color: #dcdfe6;
}
.search {
  margin-top: 20px;
  margin-bottom: 20px;
  > div {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 15px
  }
  .input {
    width: 200px;
    //  background:rgba(235,235,235,1)
    border-radius: 6px;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
  label {
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(88, 91, 99, 1);
    margin-right: 6px;
  }
  >>> .el-input__inner:focus {
    border-color: #07d1aa;
  }
  >>> .el-input__inner,
  >>> .el-input__inner::placeholder {
    background: #EBEBEB;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #c1c2c6;
  }
}
.caozuo {
  color: #bfbfbf;
  cursor: pointer;
}
.caozuo:hover {
  color: #585b63;
}
.caozuoButton {
  padding: 0;
  border: none;
 background: none;
}
.caozuoButton:hover,.caozuoButton.is-plain:focus{
  background: none
}
</style>

