<template>
  <div class="bigBox">
    <div class="userinfo">
      <div class="name">
        <div>您好，{{ name }}，祝你开心每一天！</div>
        <div>音乐窝佛山三水店 | 广东省佛山市海南区 - 详细的街道名称以及门牌号名称</div>
      </div>
      <div class="Statistics">
        <div>
          <div>43</div>
          <div>门店教务</div>
        </div>
        <div>
          <div>56</div>
          <div>门店教师</div>
        </div>
        <div>
          <div>117</div>
          <div>门店学员</div>
        </div>
      </div>
    </div>
    <div class="mudule1">
      <div>
        <div class="title">
          <div>快速访问</div>
          <div v-show="false">More ></div>
        </div>
        <div class="sudu">
          <div class="yuyue">
            <img src="../../assets/images/yuyue.png" alt>
            <span>添加预约</span>
          </div>
          <div class="xueyuan">
            <img src="../../assets/images/xueyuan.png" alt>
            <span>新增学员</span>
          </div>
          <div class="kaoqin">
            <img src="../../assets/images/kaoqin.png" alt>
            <span>考勤签到</span>
          </div>
          <div class="zuoye">
            <img src="../../assets/images/zuoye.png" alt>
            <span>作业详情</span>
          </div>
          <div class="shenpi">
            <img src="../../assets/images/shenpi.png" alt>
            <span>工作审批</span>
          </div>
          <div class="banji">
            <img src="../../assets/images/banji.png" alt>
            <span>门店班级</span>
          </div>
          <div class="jifen">
            <img src="../../assets/images/jifen.png" alt>
            <span>积分兑换</span>
          </div>
          <div class="xiaoxi">
            <img src="../../assets/images/xiaoxi.png" alt>
            <span>消息管理</span>
          </div>
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
      <div class="shop">
        <div>
          <span>门店动态</span>
          <span v-show="false">More ></span>
        </div>
        <div>
          <ul id="timeline">
            <li class="work">
              <input id="work5" class="radio" name="works" type="radio" checked>

              <div class="relative">
                <div class="content">
                  <div class="timeText">
                    <div>17 Jun</div>
                    <div>08:49PM</div>
                  </div>
                  <div class="timeThing">
                    <div>
                      <img src="../../assets/images/dashboard/zuoye.png">上传作业
                    </div>
                    <div>春娇</div>
                    <div>《遇见》吉他弹唱</div>
                  </div>
                </div>
                <span class="circle" />
              </div>
            </li>
            <li class="work">
              <input id="work4" class="radio" name="works" type="radio">
              <div class="relative">
                <div class="content">
                  <div class="timeText">
                    <div>26 Jun</div>
                    <div>09:00AM</div>
                  </div>
                  <div class="timeThing">
                    <div>
                      <img src="../../assets/images/dashboard/shangke.png">签到
                    </div>
                    <div>志明</div>
                    <div>吉他-基础课时</div>
                  </div>
                </div>
                <span class="circle" style="border-color:#24CCB8" />
              </div>
            </li>
            <li class="work">
              <input id="work3" class="radio" name="works" type="radio">
              <div class="relative">
                <div class="content">
                  <div class="timeText">
                    <div>5 Jul</div>
                    <div>09:30PM</div>
                  </div>
                  <div class="timeThing">
                    <div>
                      <img src="../../assets/images/dashboard/qingjia.png">请假
                    </div>
                    <div>李龙</div>
                    <div>钢琴-大师课</div>
                  </div>
                </div>
                <span class="circle" style="border-color:green" />
              </div>
            </li>
            <li class="work">
              <input id="work2" class="radio" name="works" type="radio">
              <div class="relative">
                <div class="content">
                  <div class="timeText">
                    <div>20 Jul</div>
                    <div>10:05AM</div>
                  </div>
                  <div class="timeThing">
                    <div>
                      <img src="../../assets/images/dashboard/dianping.png">发表评论
                    </div>
                    <div>赵雅</div>
                    <div>赵雅-这也太厉害了吧!!</div>
                  </div>
                </div>
                <span class="circle" style="border-color:#FFC400" />
              </div>
            </li>
            <li class="work">
              <input id="work1" class="radio" name="works" type="radio">
              <div class="relative">
                <div class="content">
                  <div class="timeText">
                    <div>2 Aug</div>
                    <div>08:07PM</div>
                  </div>
                  <div class="timeThing">
                    <div>
                      <img src="../../assets/images/dashboard/zuoye.png">上传作业
                    </div>
                    <div>李淳罡</div>
                    <div>《忐忑》吉他弹唱</div>
                  </div>
                </div>
                <span class="circle" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="student">
        <div class="studentTitle">
          <el-button :class="{'clickButton':SignIn == 1}" @click="singInChange(1)">当天</el-button>
          <el-button :class="{'clickButton':SignIn == 2}" @click="singInChange(2)">最近七天</el-button>
        </div>
        <div class="studentsub">
          <div ref="student1" class="student1" />
          <div class="studentText">
            <div>
              <div>定</div>
              <span>学员签到率</span>
            </div>
            <div>已签到:{{ studentData1 }}人</div>
            <div>总人数:100人</div>
          </div>
        </div>
        <div class="studentsub">
          <div ref="student2" class="student1" />
          <div class="studentText">
            <div>
              <div>定</div>
              <span>学员签到率</span>
            </div>
            <div>已签到:{{ studentData2 }}人</div>
            <div>总人数:100人</div>
          </div>
        </div>
        <div class="studentsub">
          <div ref="student3" class="student1" />
          <div class="studentText">
            <div>
              <div>定</div>
              <span>学员转化率</span>
            </div>
            <div>已转化:{{ studentData3 }}人</div>
            <div>总人数:100人</div>
          </div>
        </div>
      </div>
      <div class="today">
        <div>
          <span class="title">今日授课</span>
          <span>1月1日</span>
          <span v-show="false">More ></span>
        </div>
        <div class="todayClass">
          <div>
            <img src="../../assets/images/dashboard/shangke.png" alt>
          </div>
          <div>
            <div>
              <div>定</div>
              <div>吉他课程</div>
              <div>已结课</div>
            </div>
            <div>教师：隆启老师</div>
          </div>

          <div>
            <div>09:00-10:00</div>
            <div>学员：5 人</div>
          </div>
        </div>
        <div class="todayClass">
          <div>
            <img src="../../assets/images/dashboard/shangke.png" alt>
          </div>
          <div>
            <div>
              <div>定</div>
              <div>吉他大师课</div>
              <div style="background:#07D1AA">上课中</div>
            </div>
            <div>教师：枫阳老师</div>
          </div>

          <div>
            <div>08:45-09:45</div>
            <div>学员：9人</div>
          </div>
        </div>
        <div class="todayClass">
          <div>
            <img src="../../assets/images/dashboard/shangke.png" alt>
          </div>
          <div>
            <div>
              <div>集</div>
              <div>吉他大师课</div>
              <div style="background:#F5A623">未开课</div>
            </div>
            <div>教师：ken老师</div>
          </div>

          <div>
            <div>13:00-14:00</div>
            <div>学员：10人</div>
          </div>
        </div>
        <div class="todayClass">
          <div>
            <img src="../../assets/images/dashboard/shangke.png" alt>
          </div>
          <div>
            <div>
              <div>定</div>
              <div>吉他大师课</div>
              <div style="background:#F5A623">未开课</div>
            </div>
            <div>教师：雪儿老师</div>
          </div>

          <div>
            <div>13:00-14:00</div>
            <div>学员：10人</div>
          </div>
        </div>
        <div class="todayClass">
          <div>
            <img src="../../assets/images/dashboard/shangke.png" alt>
          </div>
          <div>
            <div>
              <div>集</div>
              <div>钢琴课</div>
              <div style="background:#F5A623">未开课</div>
            </div>
            <div>教师：雪儿老师</div>
          </div>

          <div>
            <div>15:00-17:00</div>
            <div>学员：10人</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mudule3">
      <div>
        <span>授课课时</span>
        <el-button :class="{'clickButton':TeachingNum == 1}" @click="teachingChange(1)">最近七天</el-button>
        <el-button :class="{'clickButton':TeachingNum == 2}" @click="teachingChange(2)">最近十五天</el-button>
        <el-button :class="{'clickButton':TeachingNum == 3}" @click="teachingChange(3)">最近三十天</el-button>
      </div>
      <div>
        <div ref="Teaching" class="Teaching" />
        <div ref="teachingPie" class="teachingPie" />
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import { color } from 'echarts/lib/export'
import { mapGetters } from 'vuex'
export default {

  data() {
    return {
      SignIn: 1,
      TeachingNum: 1,
      studentData1: 50,
      studentDataT: 100,
      studentData2: 69,
      studentData3: 22,
      TeachingD: [10, 20, 20, 34, 16, 7, 45, 15],
      TeachingJ: [20, 23, 22, 30, 5, 14, 50, 11],
      TeachingDay: ['1', '2', '3', '4', '5', '6', '7']
    }
  },
  computed: {
    ...mapGetters(['name', 'avatar', 'roles'])
  },
  mounted() {
    this.echart()
    this.funnel()
    this.pie()
    this.student1()
    this.student2()
    this.student3()
    this.Teaching()
    this.teachingPie()
    // document.getElementsByTagName('body')[0].style.zoom = 0.7
    // window.addEventListener('load', adaptation)
    // window.addEventListener('resize', adaptation)
    // function adaptation() {
    //   var w = document.body.clientWidth
    //   var h = document.body.clientHeight
    //   var nw = 1920
    //   var nh = 1080
    //   var left, top, scale
    //   if (w / h > nw / nh) {
    //     scale = h / nh
    //     top = 0
    //     left = (w - nw * scale) / 2
    //   } else {
    //     scale = w / nw
    //     left = 0
    //     top = (h - nh * scale) / 2
    //   }
    //   document.getElementById('main').setAttribute('style', 'transform: scale(' + scale + ');left:' + left + 'px;top:' + top + 'px;')
    // }
    // adaptation()
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
            data: ['前4周', '前3周', '前2周', '前1周', '本周'],
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
              // interval: 2
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
            data: [20, 40, 60, 100, 120]
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
            data: [10, 30, 50, 70, 90]
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
        color: [
          new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#6F85FF' },
            { offset: 1, color: '#879AFF' }
          ]),
          new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#68B5FF' },
            { offset: 1, color: '#8CD2FF' }
          ]),
          new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#63D77B' },
            { offset: 1, color: '#86E79E' }
          ]),
          new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#FFBB6C' },
            { offset: 1, color: '#FFCB8C' }
          ]),
          new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#2DD2C0' },
            { offset: 1, color: '#3EDFD1' }
          ])
        ],
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
            minSize: '20%',
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
              // borderColor: '#fff',
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
        { value: 335, name: '爵士鼓课程' },
        { value: 310, name: '声乐课程' },
        { value: 234, name: '钢琴课程' },
        { value: 135, name: '电吉他课程' },
        { value: 1548, name: '民谣吉他课程' },
        { value: 135, name: '非洲鼓课程' },
        { value: 1548, name: '尤克里里课程' }
      ]
      const pie = echarts.init(this.$refs.pie)
      pie.setOption({
        tooltip: {
          trigger: 'item',
          backgroundColor: '#488AFE',
          formatter: '{b}',
          color: '#fff'
        },
        title: {
          text: '课程占比',
          // x: 'center',
          // y: 'center',q
          top: 0,
          textStyle: {
            fontSize: 20,
            fontWeight: 'bold'
          },
          subtextStyle: {
            color: '#000000',
            fontSize: 25,
            fontWeight: 'normal'
          }
        },
        color: [
          '#488AFE',
          '#4880FF',
          '#3972F5',
          '#47D1FF',
          '#48BEFF',
          '#48ACFF',
          '#48A0FF'
        ],
        legend: {
          orient: 'vertical',
          type: 'scroll',
          pageIconColor: '#488AFE',
          pageIconSize: [10, 10],
          right: 10,
          top: 20,
          bottom: 20,
          itemWidth: 20,
          itemHeight: 4,
          itemGap: 2,
          data: [
            '爵士鼓课程',
            '声乐课程',
            '钢琴课程',
            '电吉他课程',
            '民谣吉他课程',
            '非洲鼓课程',
            '尤克里里课程'
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
            radius: ['30%', '50%'],
            center: ['30%', '40%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                formatter: '{d}%',
                textStyle: {
                  fontSize: '20',
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
              { value: 335, name: '爵士鼓课程' },
              { value: 310, name: '声乐课程' },
              { value: 234, name: '钢琴课程' },
              { value: 135, name: '电吉他课程' },
              { value: 1548, name: '民谣吉他课程' },
              { value: 135, name: '非洲鼓课程' },
              { value: 1548, name: '尤克里里课程' }
            ]
          }
        ]
      })
    },
    student1() {
      const student1 = echarts.init(this.$refs.student1)

      const total = this.studentDataT
      const A = this.studentData1
      const persent = parseInt((A / total) * 100)
      student1.setOption({
        title: {
          text: persent + '%',
          x: 'center',
          y: '38%',
          textStyle: {
            fontSize: 20,
            fontWeight: 'normal',
            color: '#666666'
          },
          subtextStyle: {
            color: '#000000',
            fontSize: 25,
            fontWeight: 'normal'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['55%', '80%'],
            // center : ['0%', '0%'],
            // silent: true,
            labelLine: {
              show: false
            },
            data: [
              {
                hoverOffset: 1,
                value: A,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#4AE8DD' },
                    { offset: 1, color: '#24CCB8' }
                  ])
                },
                label: {
                  show: false
                }
              },
              {
                markArea: {
                  silent: true
                },
                value: total - A,
                itemStyle: {
                  color: '#E8E8E8'
                },
                label: {
                  show: false
                }
              }
            ]
          }
        ]
      })
    },
    student2() {
      const student2 = echarts.init(this.$refs.student2)
      const total = this.studentDataT
      const A = this.studentData2
      const persent = parseInt((A / total) * 100)
      student2.setOption({
        title: {
          text: persent + '%',
          // formatter:A,
          x: 'center',
          y: '38%',
          textStyle: {
            fontSize: 20,
            fontWeight: 'normal',
            color: '#666666'
          },
          subtextStyle: {
            color: '#000000',
            fontSize: 25,
            fontWeight: 'normal'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['55%', '80%'],
            // center : ['0%', '0%'],
            // silent: true,
            labelLine: {
              show: false
            },
            data: [
              {
                hoverOffset: 1,
                value: A,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#4AE8DD' },
                    { offset: 1, color: '#24CCB8' }
                  ])
                },
                label: {
                  show: false
                }
              },
              {
                markArea: {
                  silent: true
                },
                value: total - A,
                itemStyle: {
                  color: '#E8E8E8'
                },
                label: {
                  show: false
                }
              }
            ]
          }
        ]
      })
    },
    student3() {
      const student3 = echarts.init(this.$refs.student3)
      const total = this.studentDataT
      const A = this.studentData3
      const persent = parseInt((A / total) * 100)
      student3.setOption({
        title: {
          text: persent + '%',
          // formatter:A,
          x: 'center',
          y: '38%',
          textStyle: {
            fontSize: 20,
            fontWeight: 'normal',
            color: '#666666'
          },
          subtextStyle: {
            color: '#000000',
            fontSize: 25,
            fontWeight: 'normal'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['55%', '80%'],
            // center : ['0%', '0%'],
            // silent: true,
            labelLine: {
              show: false
            },
            data: [
              {
                hoverOffset: 1,
                value: A,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#FF7880' },
                    { offset: 1, color: '#FF5660' }
                  ])
                },
                label: {
                  show: false
                }
              },
              {
                markArea: {
                  silent: true
                },
                value: total - A,
                itemStyle: {
                  color: '#E8E8E8'
                },
                label: {
                  show: false
                }
              }
            ]
          }
        ]
      })
    },
    Teaching() {
      const Teaching = echarts.init(this.$refs.Teaching)

      Teaching.setOption(
        {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#B093E4',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            icon: 'roundRect',
            itemWidth: 24, // 设置宽度
            itemHeight: 8, // 设置高度
            itemGap: 19,
            right: 0,
            textStyle: {
              color: '#282D32',
              fontSize: 12

            },
            data: ['定制课', '集体课']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              axisTick: {
                show: false
              },
              // offset: 12,
              axisLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#AAACAE',
                  fontSize: '12'
                }
              },
              type: 'category',
              data: this.TeachingDay
              // axisTick: {
              //   alignWithLabel: true
              // }
            }
          ],
          yAxis: [
            {
              axisTick: {
              // y轴刻度线
                show: false
              },
              offset: 12,
              splitLine: {
                show: true,
                color: '#F2F2F2',
                width: 1
              },
              axisLine: {
              // y轴
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#AAACAE',
                  fontSize: '12'
                }
              },
              type: 'value'
            }
          ],
          series: [
            {
              name: '定制课',
              type: 'bar',
              barWidth: '20%',
              barGap: 0,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    { offset: 0, color: '#D8C5F3' },
                    { offset: 1, color: '#B093E4' }
                  ])
                }
              },
              data: this.TeachingD
            },
            {
              name: '集体课',
              type: 'bar',
              barWidth: '20%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    { offset: 0, color: '#9ACBFF' },
                    { offset: 1, color: '#76AAEB' }
                  ])
                }
              },
              data: this.TeachingJ
            }
          ]
        }
      )
    },
    teachingPie() {
      const teachingPie = echarts.init(this.$refs.teachingPie)
      teachingPie.setOption({
        tooltip: {
          trigger: 'item',
          backgroundColor: '#488AFE',
          formatter: '{b}' + '</br>' + '{c}',
          color: '#fff'
        },
        title: {
          text: '班级占比',
          x: 'center',
          y: 'bottom',
          bottom: 0,
          textStyle: {
            fontSize: 14,
            color: '#999999',
            fontFamily: 'PingFangSC-Regular,PingFang SC',
            fontWeight: 400
          },
          subtextStyle: {
            color: '#000000',
            fontSize: 25,
            fontWeight: 'normal'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                formatter: '{d}%',
                textStyle: {
                  fontSize: '20',
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
              { value: 335, name: '定制班', itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  { offset: 0, color: '#D8C5F3' },
                  { offset: 1, color: '#B093E4' }
                ])
              }},
              { value: 310, name: '集体班', itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  { offset: 0, color: '#9ACBFF' },
                  { offset: 1, color: '#76AAEB' }
                ])
              }}
            ]
          }
        ]
      })
    },
    singInChange(num) {
      this.SignIn = num
      if (num == 2) {
        this.studentData1 = 62
        this.studentData2 = 70
        this.studentData3 = 43
      } else {
        this.studentData1 = 50
        this.studentData2 = 69
        this.studentData3 = 22
      }
      this.student1()
      this.student2()
      this.student3()
    },
    teachingChange(num) {
      this.TeachingNum = num
      if (num == 1) {
        this.TeachingD = [10, 20, 20, 34, 16, 7, 45]
        this.TeachingJ = [20, 23, 22, 30, 5, 14, 50]
        this.TeachingDay = ['1', '2', '3', '4', '5', '6', '7']
      } else if (num == 2) {
        this.TeachingD = [10, 20, 20, 34, 16, 7, 45, 15, 24, 12, 45, 14, 26, 27, 36]
        this.TeachingJ = [20, 23, 22, 30, 5, 14, 50, 11, 14, 23, 15, 34, 30, 29, 21]
        this.TeachingDay = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
      } else {
        this.TeachingD = [10, 20, 20, 34, 16, 7, 45, 15, 24, 12, 45, 14, 26, 27, 36, 40, 16, 12, 36, 24, 18, 15, 7, 45, 15, 24, 12, 45, 14, 26]

        this.TeachingJ = [20, 23, 22, 30, 5, 14, 50, 11, 14, 23, 15, 34, 30, 29, 21, 32, 25, 30, 41, 13, 32, 21, 14, 14, 50, 11, 14, 23, 15, 34]

        this.TeachingDay = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
      }
      this.Teaching()
    }
  }
}
</script>
<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.bigBox {
  padding: 38px 80px 0 90px;
  > div {
    margin-top: 40px;
  }
  .userinfo {
    padding: 35px 33px;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 1);
    box-shadow: -10px 10px 20px 0px rgba(30, 30, 30, 0.05);
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
      > div {
        text-align: center;
        display: inline-block;
        margin-left: 80px;
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
  }
  .mudule1 {
    display: flex;
    > div {
      padding: 32px 37px 37px 40px;
    }
    > div:nth-child(1) {
      width: 607px;
      height: 330px;
      background: rgba(255, 255, 255, 1);
      box-shadow: -10px 10px 20px 0px rgba(30, 30, 30, 0.05);
      .sudu {
        display: flex;
        flex-wrap: wrap;
        padding-top: 36px;
        > div {
          width: 78px;
          height: 78px;
          margin-right: 32px;
          margin-bottom: 33px;
          padding-top: 10px;
          background: #07d1aa;
          cursor: pointer;
          box-shadow: 0px 5px 10px 0px rgba(7, 194, 209, 0.3);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          > img {
            width: 32px;
            height: 32px;
          }
          > span {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
        > div:hover {
          background: #0fe5bc;
        }
        > div:nth-child(5) {
          margin-right: 0;
        }
        .xueyuan,
        .xiaoxi {
          background: #32c5ff;
        }
        .xueyuan:hover,
        .xiaoxi:hover {
          background: #53ceff;
        }
        .banji,
        .shenpi {
          background: #ffb940;
        }
        .banji:hover,
        .shenpi:hover {
          background: #ffc664;
        }
      }
    }
    > div:nth-child(2) {
      flex: 1;
      display: flex;
      background: rgba(255, 255, 255, 1);
      box-shadow: -10px 10px 20px 0px rgba(30, 30, 30, 0.05);
      .funnel {
        flex: 1;
      }
    }
  }
  .mudule2 {
    height: 304px;
    > div {
      background: rgba(255, 255, 255, 1);
      box-shadow: -10px 10px 20px 0px rgba(30, 30, 30, 0.05);
      border-radius: 3px;
      margin-right: 20px;
      padding: 20px 11px 0 24px;
      height: 304px;
      // display: inline-block;
      float: left;
    }
    .class {
      width: 332px;
    }
    .shop {
      width: 293px;
      > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span:nth-child(1) {
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: bold;
          color: rgba(40, 45, 50, 1);
        }
        > span:nth-child(2) {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(179, 179, 179, 1);
          cursor: pointer;
        }
      }
      > div:nth-child(2) {
        // height: 92%;
        margin-top: 34px;
        overflow-y: scroll;
        height: 227px;
      }
      > div:nth-child(2)::-webkit-scrollbar {
        display: none;
      }
    }
    .student {
      width: 445px;
      .studentTitle {
        margin-bottom: 40px;
      }
      .studentTitle .el-button {
        height: 25px;
        line-height: 25px;
        color: #9b9b9b;
        padding: 0 20px;
        background: rgba(255, 255, 255, 1);
        border-radius: 13px;
        border: 1px solid rgba(204, 204, 204, 1);
      }
      // .studentTitle .el-button:focus {
      //   color: #ffffff !important;
      //   background: rgba(155, 155, 155, 1) !important;
      //   border: 1px solid rgba(155, 155, 155, 1) !important;
      // }
      .student1 {
        width: 100px;
        height: 100px;
      }
      .studentsub {
        position: relative;
        width: 100px;
        height: 100px;
        display: inline-block;
        margin-right: 31px;
        > .studentText {
          position: absolute;
          bottom: -80px;
          left: 12px;
          width: 100%;
          > div:nth-child(1) {
            margin-bottom: 5px;
            div {
              display: inline-block;
              width: 16px;
              height: 16px;
              line-height: 16px;
              text-align: center;
              background: #76aaeb;
              font-size: 10px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              margin-right: 2px;
            }
            > span {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(50, 54, 67, 1);
              line-height: 20px;
            }
          }
          > div:nth-child(2),
          div:nth-child(3) {
            font-size: 12px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(204, 204, 204, 1);
            height: 17px;
            line-height: 17px;
          }
        }
      }
    }
    .today::-webkit-scrollbar{
      display: none
    }
    .today {
      width: 379px;
      margin-right: 0;
      overflow-y: scroll;
      > div:nth-child(1) {
        margin-bottom: 30px;
        .title {
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(40, 45, 50, 1);
          display: inline-block;
          font-weight: bold;
        }
        > span:nth-child(2) {
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: rgba(204, 204, 204, 1);
          margin-left: 12px;
          margin-right: 158px;
        }
        > span:nth-child(3) {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(179, 179, 179, 1);
          cursor: pointer;
        }
      }
      .todayClass {
        display: flex;
        //  justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
        > div:nth-child(1) {
          flex: 2;
          img {
            width: 35px;
            height: 36px;
            border-radius: 50%;
          }
        }
        > div:nth-child(2) {
          flex: 6;
          > div:nth-child(1) {
            div {
              display: inline-block;
            }
            > div:nth-child(1) {
              width: 16px;
              height: 16px;
              line-height: 16px;
              background: rgba(118, 170, 235, 1);
              border-radius: 2px;
              font-size: 10px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              text-align: center;
            }
            > div:nth-child(2) {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(88, 91, 99, 1);
              margin-left: 2px;
              margin-right: 14px;
            }
            > div:nth-child(3) {
              flex: 2;
              font-size: 11px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              padding: 1px 5px;
              background: #c1c2c6;
              border-radius: 5px;
            }
          }
          > div:nth-child(2) {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(179, 179, 179, 1);
            height: 17px;
            line-height: 17px;
          }
        }
        > div:nth-child(3) {
          > div:nth-child(1) {
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(50, 54, 67, 1);
            line-height: 20px;
          }
          > div:nth-child(2) {
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(193, 194, 198, 1);
            line-height: 17px;
            text-align: center;
          }
        }
      }
    }
  }
  .mudule3 {
    padding: 36px 34px 0 34px;
    height: 300px;
    background: rgba(255, 255, 255, 1);
    box-shadow: -10px 10px 20px 0px rgba(30, 30, 30, 0.05);
    margin-bottom: 60px;
    > div:nth-child(1) {
      span {
        height: 20px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: bold;
        color: rgba(40, 45, 50, 1);
        line-height: 20px;
        margin-right: 25px;
      }
       .el-button {
      height: 25px;
      line-height: 25px;
      color: #9b9b9b;
      padding: 0 20px;
      background: rgba(255, 255, 255, 1);
      border-radius: 13px;
      border: 1px solid rgba(204, 204, 204, 1);
    }
    .el-button:focus {
      color: #ffffff !important;
      background: rgba(155, 155, 155, 1) !important;
      border: 1px solid rgba(155, 155, 155, 1) !important;
    }
    }
   .Teaching{
     width: 80%;
     height: 207px;
     display: inline-block;
   }
   .teachingPie{
     width: 19%;
     display:inline-block;
     height: 207px;
   }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:nth-child(1) {
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(40, 45, 50, 1);
    }
    > div:nth-child(2) {
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(179, 179, 179, 1);
      cursor: pointer;
    }
  }
}
.rate,
.funnel,
.pie {
  display: inline-block;
}
#timeline {
  list-style: none;
  margin: 0px 0 0px 7px;
  padding: 0;
  border-left: 1px solid #e8e8e8;
}
#timeline li {
  position: relative;
}
#timeline p {
  margin: 0 0 15px;
}

.circle {
  left: -5px;
  width: 10px;
  height: 10px;
  background: #fff;
  border: 2px solid #4880ff;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
}

.content {
  max-height: 20px;
  padding: 62px 20px 0;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5em;
  position: relative;
}
// .content:before, .content:after {
//   content: "";
//   width: 0;
//   height: 0;
//   border: solid transparent;
//   position: absolute;
//   pointer-events: none;
//   right: 100%;
// }
// .content:before {
//   border-right-color: inherit;
//   border-width: 20px;
//   top: 50%;
//   margin-top: -20px;
// }
// .content:after {
//   border-right-color: #48b379;
//   border-width: 17px;
//   top: 50%;
//   margin-top: -17px;
// }

.timeText,
.timeThing {
  display: inline-block;
  top: 0;
}
.timeThing {
  position: absolute;
  z-index: 100;
  cursor: pointer;
  // top: 20px;
  left: 120px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  > div {
    height: 17px;
    line-height: 17px;
  }
  > div:nth-child(1) {
    img {
      width: 11px;
      height: 12px;
      position: absolute;
      left: -18px;
    }
  }
  > div:nth-child(2) {
    font-weight: 600;
    color: rgba(74, 74, 74, 1);
  }
}
.timeText {
  position: absolute;
  z-index: 100;
  cursor: pointer;
  // top: 20px;
  left: 20px;
  > div {
    height: 14px;
    line-height: 14px;
  }
  > div:nth-child(1) {
    font-size: 12px;
    font-family: HelveticaNeue;
    color: rgba(74, 74, 74, 1);
  }
  > div:nth-child(2) {
    color: rgba(204, 204, 204, 1);
    font-size: 12px;
  }
}

.radio {
  display: none;
}

// .radio:checked + .relative label {
//   cursor: auto;
//   transform: translateX(42px);
// }
.radio:checked + .relative .circle {
  background: #f98262;
}
.clickButton{
    color: #ffffff !important;
        background: rgba(155, 155, 155, 1) !important;
        border: 1px solid rgba(155, 155, 155, 1) !important;
}
// .radio:checked ~ .content {
//   max-height: 180px;
//   border-color: #eee9dc;
//   margin-right: 20px;
//   transform: translateX(20px);
//   transition: max-height 0.4s linear, border-color 0.5s linear, transform 0.2s linear;
// }
</style>
