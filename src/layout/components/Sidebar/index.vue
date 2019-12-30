<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-input v-model="search" placeholder="搜索菜单..." class="input" />
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
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
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
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
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
    this.$store.commit('searchRouter', [])
    console.log(this.permission_routes)
  }
}
</script>
<style lang="scss" scoped>
>>>.el-menu-item.is-active{
  background: #D9D9D9 !important
}
.input{
width:189px;
height:39px;
margin:24px 0;
margin-left: 10px;
}
>>>.el-input__inner{
border-radius:23px;
}
</style>
