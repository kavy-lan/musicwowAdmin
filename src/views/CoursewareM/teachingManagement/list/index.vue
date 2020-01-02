<template>
  <div class="app-container">
    <div v-if="searchShow" class="search">
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
      <el-button type="danger" @click="resetSearch">重置</el-button>
    </div>
    <el-button type="success" icon="el-icon-upload2" size="medium" @click="dialogVisible = true">添加</el-button>
    <el-button
      type="danger"
      icon="el-icon-delete"
      size="medium"
      class="deletebutton"
      :disabled="deleteShow"
      @click="someDelete"
    >删除</el-button>
    <el-button type="success" @click="goPackList">打包任务列表</el-button>
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
      <el-table-column align="center" label="教材名称" prop="title" />
      <el-table-column align="center" label="图标" prop="icon">
        <template slot-scope="scope">
          <img :src="scope.row.icon" width="40" height="40" style="vertical-align:middle">
        </template>
      </el-table-column>
      <el-table-column align="center" label="单价课价格" prop="class_price" />
      <!-- <el-table-column align="center" label="是否单价课价格">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.is_class_price"
            active-color="#07D1AA"
            inactive-color="#D9D9D9"
            @change="handleChange(scope.row)"
          />
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="目录数" prop="directory_count" />
      <el-table-column align="center" label="课时数" prop="class_count" />
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
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button plain class="caozuoButton" @click="goClassList(scope.row)">
            <span class="caozuo">
              <svg-icon class-name="search-icon" icon-class="check" />课时
            </span>
          </el-button>
          <el-button plain class="caozuoButton" @click="packCourseware(scope.row)">
            <span class="caozuo">
              <svg-icon class-name="search-icon" icon-class="check" />打包课件
            </span>
          </el-button>
          <!-- <el-button
            plain
            class="caozuoButton"
            @click="dialogVisibleReset=true,editId=scope.row.id"
          >
            <span plain class="caozuo">
              <svg-icon class-name="search-icon" icon-class="power" />重置
            </span>
          </el-button> -->
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
      @current-change="nextPage"
    />
    <!-- 添加课时弹窗 -->
    <add-dia :dialog-visible="dialogVisible" @close="closr" />
    <edit-dia v-if="dialogVisibleEdit" :id="editId" :dialog-visible="dialogVisibleEdit" @close="closr" />
    <!-- <reset :dialogVisible="dialogVisibleReset" @close="closr" :id="editId"></reset> -->
  </div>
</template>
<script>
import AddDia from './addDia'
import EditDia from './editDia'
// import reset from "./resetDia";
import { teachingManagementList, deleteteachingManagement, packCourseware } from '../../../../api/teachingManagement'
import { MessageBox, Message } from 'element-ui'

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
      editId: '',
      searchShow: false,
      somedelete: '',
      seleteSearch: [
        { label: '教材名称:', value: '', name: 'title', ops: '=', array: [] },
        { label: '单价课价格:', value: '', name: 'class_price', ops: '=', array: [] },
        { label: '目录数:', value: '', name: 'directory_count', ops: '=', array: [] },
        { label: '课时数:', value: '', name: 'class_count', ops: '=', array: [] }
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
    // administratorsList().then(res=>{
    //   console.log(res)
    // })
    this.tableInit(1)
  },
  methods: {
    tableInit(page, filters, ops) {
      return new Promise((resolve, reject) => {
        teachingManagementList(page, filters, ops)
          .then(res => {
            const { data } = res
            this.rolesList = data.list
            this.length = data.list.length
            this.total = data.total
            this.seleteSearch[0].array = []
            this.seleteSearch[1].array = []
            this.seleteSearch[2].array = []
            this.seleteSearch[3].array = []
            this.rolesList.map(item => {
              if (item.status == 1) {
                item.status = true
              } else {
                item.status = false
              }
              if (item.is_class_price == 1) {
                item.is_class_price = true
              } else {
                item.is_class_prices = false
              }
              this.seleteSearch[0].array.push(String(item.title))
              this.seleteSearch[1].array.push(String(item.class_price))
              this.seleteSearch[2].array.push(String(item.directory_count))
              this.seleteSearch[3].array.push(String(item.class_count))
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
            deleteteachingManagement(row.id)
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
    goClassList(row) {
      this.$router.push({ path: '/CoursewareM/classManagement/list', query: { id: row.id }})
    },
    packCourseware(row) {
      return new Promise((resolve, reject) => {
        packCourseware(row.id).then(res => {
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
      console.log(this.seleteSearch)
      this.tableInit(1, this.filters, this.ops)
      this.searchModel = true
    },
    resetSearch() {
      this.tableInit(1)
      this.searchModel = false
    },
    goPackList() {
      this.$router.push({ path: '/csPack/list' })
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
  //  width:
  color: #bfbfbf;
  cursor: pointer;
  // margin-right: 1px;
}
.caozuo:hover {
  color: #585b63;
}
.caozuoButton {
  padding: 0;
  border: none;
  background: none
}
.caozuoButton:hover,.caozuoButton.is-plain:focus{
  background: none
}
</style>

