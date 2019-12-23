import {
  login,
  logout,
  getInfo,
  getAdminDetail
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import router, {
  resetRouter
} from '@/router'
import Layout from '@/layout'
import constantRoutes from '@/router'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  router: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ROUTER: (state, router) => {
    state.router = router
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login(username.trim(), password).then(response => {
        const {
          data
        } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {
          data
        } = response
        for (let i = 0; i < data.length; i++) {
          data[i].component = Layout
        }
        // const routerPach = (data) => {
        //   for (var i in data) {
        //     if (data[i].children) {
        //       for (var b in data[i].children) {
        //         data[i].children[b].component = () => import(`../../views${data[i].children[b].path}`)
        //         // console.log(`${data[i].children[b].path}`)
        //         // data[1].children[0].component = () => import(`../../views${data[1].children[0].path}`)
        //         // routerPach(data[i].children[b])
        //       }
        //     }
        //   }
        //   return data
        // }
        const routerPach = (data) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].children) {
              for (let b = 0; b < data[i].children.length; b++) {
                data[i].children[b].component = () => import(`../../views${data[i].children[b].path}`)
                routerPach(data[i].children[b])
              }
            }
          }
        }
        routerPach(data)
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        // const { roles, name, avatar, introduction } = data
        // console.log(data)
        // roles must be a non-empty array
        // if (!roles || roles.length <= 0) {
        //   reject('getInfo: roles must be a non-null array!')
        // }
        // commit('SET_ROLES', roles)
        // commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        // commit('SET_INTRODUCTION', introduction)
        commit('SET_ROUTER', data)
        console.log(constantRoutes)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
      return new Promise((resolve, reject) => {
        getAdminDetail().then(res=>{
          if(res.error_code==0){
            const {data}=res
            commit('SET_NAME', data.username)
          }
        }).catch(error => {
          reject(error)
        })
      })
    })
  },

  // user logout
  logout({
    commit,
    state,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        commit('SET_ROUTER', [])
        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, {
          root: true
        })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({
    commit,
    dispatch
  }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const {
        roles
      } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, {
        root: true
      })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, {
        root: true
      })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
