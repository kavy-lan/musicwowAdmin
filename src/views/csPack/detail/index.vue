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
    >
      <el-table-column type="selection" width="55" align="center" prop="checkbox" />
      <el-table-column align="left" label="ID" prop="id" />
      <el-table-column align="center" label="创建时间" prop="created_at" />
      <el-table-column align="center" label="状态" prop="status" />
      <el-table-column align="center" label="批次号" prop="lot_no" />
      <el-table-column align="center" label="日志内容" prop="content" />
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      page-size="10"
      class="clearfix"
      @current-change="nextPage"
    />
  </div>
</template>
<script>
import {
  csPackDetail
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
      lot_no: '',
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
    this.lot_no = this.$route.query.lot_no
    this.tableInit(this.lot_no, 1)
  },
  methods: {
    tableInit(lot_no, page, filters, ops) {
      return new Promise((resolve, reject) => {
        csPackDetail(lot_no, page, filters, ops)
          .then(res => {
            const { data } = res
            this.rolesList = data.list
            this.length = data.list.length
            this.total = data.total
            this.rolesList.map(item => {
              if (item.status == 0) {
                item.status = '打包失败'
              } else if (item.status == 1) {
                item.status = '正在打包'
              } else {
                item.status = '打包完成'
              }
            })
          })
          .catch(error => {
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
 background: none;
}
.caozuoButton:hover,.caozuoButton.is-plain:focus{
  background: none
}
</style>

