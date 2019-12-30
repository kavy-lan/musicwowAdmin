<template>
  <div class="bigBox">
    <div class="userinfo">
      <div class="name">
        <div>您好，{{ name }}，祝你开心每一天！</div>
        <div>音乐窝佛山三水店 | 广东省佛山市海南区 - 详细的街道名称以及门牌号名称</div>
      </div>
      <div class="Statistics">
        <div>
          <div>33</div>
          <div>门店服务</div>
        </div>
        <div>
          <div>33</div>
          <div>门店教师</div>
        </div>
        <div>
          <div>33</div>
          <div>门店学员</div>
        </div>
      </div>
    </div>
    <div class="mudule1">
      <div>
        <div class="title"><div>快速访问</div><div>More ></div></div>
        <div class="sudu">
          <div class="yuyue"><img src="../../assets/images/yuyue.png" alt=""><span>添加预约</span></div>
          <div class="xueyuan"><img src="../../assets/images/xueyuan.png" alt=""><span>新增学员</span></div>
          <div class="kaoqin"><img src="../../assets/images/kaoqin.png" alt=""><span>考勤签到</span></div>
          <div class="zuoye"><img src="../../assets/images/zuoye.png" alt=""><span>作业详情</span></div>
          <div class="shenpi"><img src="../../assets/images/shenpi.png" alt=""><span>工作审批</span></div>
          <div class="banji"><img src="../../assets/images/banji.png" alt=""><span>门店班级</span></div>
          <div class="jifen"><img src="../../assets/images/jifen.png" alt=""><span>积分兑换</span></div>
          <div class="xiaoxi"><img src="../../assets/images/xiaoxi.png" alt=""><span>消息管理</span></div>
        </div>
      </div>
      <div>
        ff
      </div>
    </div>
    <div class="mudule2">
      <div class="class">1</div>
      <div class="shop">2</div>
      <div class="student">3</div>
      <div class="today">4</div>
    </div>
    <div class="mudule3">
      授课课时
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>
<style lang='scss' scoped>
*{
  box-sizing: border-box
}
.bigBox {
  padding: 38px 80px 0 90px;
  >div{
    margin-top: 40px;
  }
  .userinfo {
    padding: 35px 33px;
    display: flex;
    justify-content: space-between;
    background:rgba(255,255,255,1);
box-shadow:-10px 10px 20px 0px rgba(30,30,30,0.05);
    .name {
      > div:nth-child(1) {
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(40, 45, 50, 1);
        margin-bottom: 3px;
      }
      > div:nth-child(2) {
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(88, 91, 99, 1);
      }
    }
    .Statistics {
      >div{
        text-align: center;
        display: inline-block;
        margin-left:80px;
      > div:nth-child(1) {
        font-size: 36px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(7, 209, 170, 1);
      }
      > div:nth-child(2) {
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(88, 91, 99, 1);
      }
      }

    }
  };
  .mudule1{
    display: flex;
   >div{
     padding:32px 37px 37px 40px;
   }
   >div:nth-child(1){
    width: 607px;
    height: 330px;
    background:rgba(255,255,255,1);
    box-shadow:-10px 10px 20px 0px rgba(30,30,30,0.05);
    .sudu{
      display: flex;
      flex-wrap: wrap;
      padding-top: 36px;
      >div{
        width:78px;
        height:78px;
        margin-right: 32px;
        margin-bottom: 33px;
        padding-top: 10px;
        background:#07D1AA;
        cursor: pointer;
        box-shadow:0px 5px 10px 0px rgba(7,194,209,0.3);
        border-radius:16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        >img{
          width:32px;
          height:32px;
        }
        >span{
          font-size:12px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1)
        }
      }
      >div:nth-child(5){
        margin-right: 0
      }
      .xueyuan,.xiaoxi{
        background: #32C5FF
      }
     .banji,.shenpi{
       background: #FFB940
     }
    }
   }
   >div:nth-child(2){
     flex: 1;
     background:rgba(255,255,255,1);
    box-shadow:-10px 10px 20px 0px rgba(30,30,30,0.05);
   }
  }
  .mudule2{
  >div{
    background:rgba(255,255,255,1);
box-shadow:-10px 10px 20px 0px rgba(30,30,30,0.05);
border-radius:3px;
margin-right: 20px;
padding: 20px 11px 0 24px;
height: 304px;
display: inline-block;
  }
  .class{
   width: 332px;
  }
  .shop{
    width: 293px;
  }
  .student{
    width: 445px;
  }
  .today{
    width: 379px;
    margin-right: 0;
  }
  }
  .mudule3{
    padding: 36px 34px 0 34px;
    height: 300px;
    background:rgba(255,255,255,1);
box-shadow:-10px 10px 20px 0px rgba(30,30,30,0.05);
margin-bottom: 60px
  }
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  >div:nth-child(1){
    font-size:20px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(40,45,50,1);
  }
  >div:nth-child(2){
    font-size:12px;
 font-family:PingFangSC-Medium,PingFang SC;
 font-weight:500;
 color:rgba(179,179,179,1);
 cursor: pointer;
  }
  }
}
</style>
