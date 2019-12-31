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
        <div id="myChart" ref="echart" class="rate" style="width:450px;height:100%" />
        <div ref="funnel" class="funnel" style="height:100%" />
      </div>
    </div>
    <div class="mudule2">
      <div class="class">
        <div ref="pie" class="pie" style="width:100%;height:100%" />
      </div>
      <div class="shop"><div ref="pi" class="pie" style="width:100%;height:100%" /></div>
      <div class="student"><div ref="pi" class="pie" style="width:100%;height:100%" /></div>
      <div class="today"><div ref="pi" class="pie" style="width:100%;height:100%" /></div>
    </div>
    <div class="mudule3">
      授课课时
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import { color } from 'echarts/lib/export'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  mounted() {
    this.echart()
    this.funnel()
    this.pie()
  },
  methods: {
    echart() {
      const myChart = echarts.init(this.$refs.echart)
      myChart.setOption({
        title: {
          text: '学员转换率'
        },
        tooltip: {
          backgroundColor: '#07D1AA',
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'pink'
            }
          }
        },
        legend: {
          icon: 'roundRect',
          itemWidth: 17, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 19,
          textStyle: {
            color: '#282D32',
            fontSize: 12
          },
          data: ['已预约', '转化成功']
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '5%',
          top: '25%',
          containLabel: true
        },
        xAxis: [
          {
            offset: 14,
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            splitLine: {
              show: false
            },
            axisLine: {
              // y轴
              show: false
            },
            axisTick: {
              // y轴刻度线
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#AAACAE',
                fontSize: '12'
              },
              interval: 2
            }
          }
        ],
        yAxis: [
          {
            offset: 14,
            name: '预约转化',
            // nameLocation:'middle',
            nameTextStyle: {
              color: '#B8B9BB',
              fontSize: 14,
              padding: [20, 0, 0, 0]
            },
            type: 'value',
            splitLine: {
              show: false
            },
            axisLine: {
              // y轴
              show: false
            },
            axisTick: {
              // y轴刻度线
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#AAACAE',
                fontSize: '12'
              }
            }
          }
        ],
        series: [
          {
            name: '已预约',
            type: 'line',
            smooth: true, // 曲线平滑
            symbol: 'none', // 去掉圆点
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#31D5C4'
                  },
                  {
                    offset: 1,
                    color: '#31D5C4'
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: 'pink',
                lineStyle: {
                  color: '#35D8C8'
                }
              }
            },
            data: [20, 40, 60, 100, 120, 140, 160]
          },
          {
            name: '转化成功',
            type: 'line',
            smooth: true, // 曲线平滑
            symbol: 'none', // 去掉圆点
            areaStyle: { color: '#5298EF' },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#5594F2'
                  },
                  {
                    offset: 1,
                    color: '#5594F2'
                  }
                ])
              }
            },
            data: [10, 30, 50, 70, 90, 110, 130]
          }
        ]
      })
    },
    funnel() {
      const funnel = echarts.init(this.$refs.funnel)
      funnel.setOption({
        title: {
          text: '转换漏斗',
          textStyle: {
            color: '#fff'
          },
          subtext: '转换漏斗',
          subtextStyle: {
            fontSize: 14,
            color: '#B8B9BB'
          }
        },
        color: [new echarts.graphic.LinearGradient(
          0, 0, 1, 0,
          [
            { offset: 0, color: '#6F85FF' },
            { offset: 1, color: '#879AFF' }
          ]
        ), new echarts.graphic.LinearGradient(
          0, 0, 1, 0,
          [
            { offset: 0, color: '#68B5FF' },
            { offset: 1, color: '#8CD2FF' }
          ]
        ), new echarts.graphic.LinearGradient(
          0, 0, 1, 0,
          [
            { offset: 0, color: '#63D77B' },
            { offset: 1, color: '#86E79E' }
          ]
        ), new echarts.graphic.LinearGradient(
          0, 0, 1, 0,
          [
            { offset: 0, color: '#FFBB6C' },
            { offset: 1, color: '#FFCB8C' }
          ]
        ), new echarts.graphic.LinearGradient(
          0, 0, 1, 0,
          [
            { offset: 0, color: '#2DD2C0' },
            { offset: 1, color: '#3EDFD1' }
          ]
        )],
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}%',
          backgroundColor: '#07D1AA'
        },
        toolbox: {
          feature: {
            // dataView: { readOnly: false },
            // restore: {},
            // saveAsImage: {}
          }
        },
        legend: {
          data: ['预览', '已预约', '已跟进', '已转化', '已缴费'],
          right: 'right',
          top: 'bottom',
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#282D32',
            fontSize: 12
          }
        },
        calculable: true,
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '0%',
            top: 60,
            // x2: 80,
            bottom: 0,
            width: '100%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '80%',
            sort: 'none',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
              formatter: '{c}%',
              textStyle: {
                color: '#FFFFFF',
                fontSize: 12
              }
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1

            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 100, name: '预览' },
              { value: 80, name: '已预约' },
              { value: 60, name: '已跟进' },
              { value: 40, name: '已转化' },
              { value: 20, name: '已缴费' }
            ]
          }
        ]
      })
    },
    pie() {
      var data = [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
      const pie = echarts.init(this.$refs.pie)
      pie.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        title: {
          text: '70%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            color: '#666666'
          },
          subtextStyle: {
            color: '#000000',
            fontSize: 25,
            fontWeight: 'normal'
          }
        },
        legend: {
          orient: 'vertical',
          type: 'scroll',
          right: 'right',
          top: 'center',
          itemWidth: 20,
          itemHeight: 4,
          itemGap: 2,
          data: [
            '直接访问',
            '邮件营销',
            '联盟广告',
            '视频广告',
            '搜索引擎'
          ],
          formatter: function(name) {
            var total = 0
            var target
            for (var i = 0; i < data.length; i++) {
              total += data[i].value
              if (data[i].name == name) {
                target = data[i].value
              }
            }
            var arr = [
              '{b|' + name + '}',
              '{a|' + ((target / total) * 100).toFixed(2) + '%}'

            ]
            return arr.join('\n')
          },
          textStyle: {
            rich: {
              b: {
                fontSize: 12,
                verticalAlign: 'top',
                align: 'center',
                padding: [0, 0, 10, 0]
              },
              a: {
                fontSize: 8,
                color: '#999999',
                align: 'center',
                padding: [0, 10, 0, 0],
                lineHeight: 10
              }
            }
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '40%'],
            center: ['20%', '40%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      })
    }
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
      >div:hover{
        background: #0FE5BC
      }
      >div:nth-child(5){
        margin-right: 0
      }
      .xueyuan,.xiaoxi{
        background: #32C5FF
      }
      .xueyuan:hover,.xiaoxi:hover{
        background: #53CEFF
      }
     .banji,.shenpi{
       background: #FFB940
     }
     .banji:hover,.shenpi:hover{
       background: #FFC664
     }
    }
   }
   >div:nth-child(2){
     flex: 1;
     display: flex;
     background:rgba(255,255,255,1);
    box-shadow:-10px 10px 20px 0px rgba(30,30,30,0.05);
    .funnel{
    flex: 1
    }
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
.rate,
.funnel,
.pie {
  display: inline-block
}
</style>
