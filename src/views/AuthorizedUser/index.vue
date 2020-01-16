<template>
  <div>
    <div class="nameList">
      <span :class="{'clickButton':SignIn == 2}" @click="singInChange(2)">机构</span>
      <span :class="{'clickButton':SignIn == 1}" @click="singInChange(1)">用户</span>
    </div>
    <user-list v-if="SignIn == 1" />
    <me-chanism v-if="SignIn == 2" />
  </div>
</template>
<script>
import UserList from './lists'
import MeChanism from './mechanism/lists'
export default {
  components: { UserList, MeChanism },
  data() {
    return {
      SignIn: 1
    }
  },
  methods: {
    singInChange(num) {
      this.SignIn = num
    }
  }
}
</script>
<style lang='scss' scoped>
.clickButton {
    color: #ffffff !important;
    background: #9b9b9b !important;
    border: 1px solid #9b9b9b !important;
  }
  .nameList{
      margin-top: 14px;
      padding-left: 70px;
      span{
          display: inline-block;
          font-size: 14px;
          color: #9b9b9b;
          padding: 0 20px;
          border-radius: 13px;
          border: 1px solid #cccccc;
          height: 25px;
          line-height: 25px;
          margin-left: 20px;
          cursor: pointer;
      }
  }
</style>
