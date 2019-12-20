<template>
  <div class="app-container">
    <el-button type="success" icon="el-icon-upload2" size="medium" @click="dialogVisible = true">添加</el-button>
    <el-button
      type="danger"
      icon="el-icon-delete"
      size="medium"
      class="deletebutton"
      :disabled="deleteShow"
    >删除</el-button>
    <el-button size="medium" class="noneColor" icon="el-icon-tickets">课程详情</el-button>
    <el-button size="medium" class="noneColor" icon="el-icon-food">
      <svg-icon class-name="search-icon" icon-class="shop" />授权机构
    </el-button>
    <el-button size="medium" class="noneColor">
      <svg-icon class-name="search-icon" icon-class="user" />授权用户
    </el-button>
    <el-button size="medium" class="noneColor">
      <svg-icon class-name="search-icon" icon-class="edit" />编辑
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
      <el-table-column align="left" label="教材名称" width="220" prop="name" />
      <el-table-column align="center" label="课时单价" width="220" prop="key" />
      <el-table-column align="center" label="图标" width="220" prop />
      <el-table-column align="center" label="目录树" prop />
      <el-table-column align="center" label="课时数" prop />
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.on"
            active-color="#07D1AA"
            inactive-color="#D9D9D9"
            @change="handleChange(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      :total="10"
      :page-size="3"
      @current-change="nextPage"
      class="clearfix"
    ></el-pagination>-->
    <!-- 添加课时弹窗 -->
    <add-class :dialog-visible="dialogVisible" @close="closr" />
  </div>
</template>
<script>

const searchList = [
  { field: 'name', description: '教材名称', op: '=' },
  { field: 'description', description: '描述', op: '%*%' },
  { field: 'created_at', description: '描述', op: 'rang' }
]

// import SingleImage from "@/components/Upload/SingleImage3"
import AddClass from './add.vue'
export default {
  components: { AddClass },
  data() {
    return {
      rolesList: [
        { name: 'kavy', description: '6666', key: 'admin' },
        { name: 'kavy', description: '6666', key: 'admin' },
        { name: 'kavy', description: '6666', key: 'admin' }
      ],
      dialogVisible: false,
      input: '',
      value: '',
      imgUrl: [],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      items: [
        { id: 0, content: '选项一', disabled: false, checked: true },
        { id: 1, content: '选项二', disabled: true, checked: false },
        { id: 2, content: '选项三', disabled: false, checked: false }
      ],
      test: [],
      message: '测试',
      deleteShow: true
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
  methods: {
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
      } else {
        this.deleteShow = true
      }
    },
    handleSelectAll(row) {
      if (row.length > 0) {
        this.deleteShow = false
      } else {
        this.deleteShow = true
      }
    },
    getValue() {
      console.log(this.test)
    },
    nextPage(val) {
      console.log(val)
    },
    closr(val) {
      this.dialogVisible = val
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
</style>

