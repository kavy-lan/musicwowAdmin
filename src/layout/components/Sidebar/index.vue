<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-input v-show="!isCollapse" v-model="search" placeholder="搜索菜单..." class="input" @input="searchMemu" />
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in router"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data() {
    return {
      search: '',
      router: []
    }
  },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  mounted() {
    //  const routerPach = (data) => {
    //       for (let i = 0; i < data.length; i++) {
    //         if (data[i].children) {
    //           for (let b = 0; b < data[i].children.length; b++) {
    //             data[i].children[b].component = () => import(`../../views${data[i].children[b].path}`)
    //             routerPach(data[i].children)
    //           }
    //         }
    //       }
    //     }
    this.router = this.permission_routes
    this.router2 = this.permission_routes
  },
  methods: {
    searchMemu(res) {
      let searchArr = []
      const title = []
      for (let i = 0; i < this.permission_routes.length; i++) {
        if (this.permission_routes[i].meta) {
          title.push(this.permission_routes[i])
        }
      }
      if (res.length > 0) {
        for (let i = 0; i < title.length; i++) {
          if (title[i].meta.title.indexOf(res) > -1) {
            searchArr.push(title[i])
          }
        }
      } else {
        searchArr = this.router2
      }
      this.router = searchArr
    }
  }
}
</script>
<style lang="scss" scoped>
  >>>.el-submenu .el-menu-item.is-active ,>>>.el-menu-item.is-active{
  background: #d9d9d9 !important;
}
>>>.el-submenu .el-menu-item{
  background: #f2f2f2 !important
}
.input {
  width: 189px;
  height: 39px;
  margin: 24px 0;
  margin-left: 10px;
  position: relative;
}
>>> .el-input__inner {
  border-radius: 23px;
  text-indent: 17px;
}
.input::before{
  content: "";
  display: inline-block;
  position: absolute;
  width: 18px;
  height: 18px;
 background: url('../../../assets/images/searchicon.png') no-repeat  !important;
  background-size:18px 18px !important;
  left:10px;
  top: 10px
}
</style>
