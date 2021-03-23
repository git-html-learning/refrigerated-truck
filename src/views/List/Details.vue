<template>
  <div >
    <div v-show="showPage === '0'">
      <a-row>
        <a-col :span="18">
          <a-card title="厢内温湿度监测" style="height: 358px" hoverable>
            <a slot="extra" @click="open0">更多</a>
            <div class="sensor1">
              <p style="margin: 0 0 0 0">监测点1</p>
              <div class="left" @click="hisTem1">{{ "10℃" }}</div>
              <div class="right" @click="hisHum1">{{ "55%" }}</div>
            </div>
            <div class="sensor2">
              <p style="margin: 0 0 0 0">监测点2</p>
              <div class="left" @click="hisTem2">{{ "10℃" }}</div>
              <div class="right" @click="hisHum2">{{ "55%" }}</div>
            </div>
            <div class="sensor3">
              <p style="margin: 0 0 0 0">监测点3</p>
              <div class="left" @click="hisTem3">{{ "10℃" }}</div>
              <div class="right" @click="hisHum3">{{ "55%" }}</div>
            </div>
            <div class="sensor4">
              <p style="margin: 0 0 0 0">监测点4</p>
              <div class="left" @click="hisTem4">{{ "10℃" }}</div>
              <div class="right" @click="hisHum4">{{ "55%" }}</div>
            </div>
            <div class="carriage">
              <!-- <img width="32" src="../static/pic/honen.png" /> -->
            </div>
            <div class="sensor5">
              <p style="margin: 0 0 0 0">监测点5</p>
              <p class="left" @click="hisTem5">{{ "10℃" }}</p>
              <p class="right" @click="hisHum5">{{ "55%" }}</p>
            </div>
            <div class="sensor6">
              <p style="margin: 0 0 0 0">监测点6</p>
              <p class="left" @click="hisTem6">{{ "10℃" }}</p>
              <p class="right" @click="hisHum6">{{ "55%" }}</p>
            </div>
            <div class="sensor7">
              <p style="margin: 0 0 0 0">监测点7</p>
              <p class="left" @click="hisTem7">{{ "10℃" }}</p>
              <p class="right" @click="hisHum7">{{ "55%" }}</p>
            </div>
            <div class="sensor8">
              <p style="margin: 0 0 0 0">监测点8</p>
              <p class="left" @click="hisTem8">{{ "10℃" }}</p>
              <p class="right" @click="hisHum8">{{ "55%" }}</p>
            </div>
            <div class="top-right">
              <h4 class="title">当月设备报警信息条数排名</h4>
              <ul class="list">
                <li :key="index" v-for="(item, index) in devicerankList">
                  <span :class="index < 3 ? 'active' : null">{{
                    index + 1
                  }}</span>
                  <span>{{ item.deviceName }}</span>
                  <span>{{ item.count }}</span>
                </li>
              </ul>
            </div>
          </a-card>
        </a-col>

        <a-col :span="6">
          <a-card
            title="皖A2222"
            :bordered="true"
            style="height: 358px"
            hoverable
          >
            <a slot="extra" @click="open1">更多</a>
            <div id="oil" class="oil"></div>
            <div id="vol" class="vol"></div>
            <div id="cap" class="cap"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="9">
          <a-card title="车门" style="height: 250px" hoverable>
            
          </a-card>
        </a-col>
        <a-col :span="9">
          <a-card title="灯开关" style="height: 250px" hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card title="报警装置" style="height: 250px" hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-col>
      </a-row>
      
      <a-row>
        <a-col :span="18">
          <a-card title="胎温胎压"   hoverable>
            <a slot="extra" @click="open2">更多</a>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card title="冷机"   hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="12">
          <a-card title="皖A222" style="height: 285px" hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="车辆震动曲线图" style="height: 285px" hoverable>
            <a slot="extra" @click="open">更多</a>
            <div id="main7" style="width: 700px; height: 180px"></div>
          </a-card>
        </a-col>
      </a-row>

    </div>

    <div v-show="showPage === '1'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="back()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>

        <a-tabs tab-position="left" :default-active-key="tabKey">
          <a-tab-pane
            v-for="(item, index) in sensorList"
            :key="index"
            :tab="item.name"
          >
            <div style="font-size: 26px; font-weight: 600">
              <span>{{ item.name }}</span>
            </div>
            <div style="font-size: 22px; font-weight: 600; line-height: 50px">
              <span>更新时间：{{ item.date }}</span>
            </div>
            <div id="chart" ref="main" style="height: 300px; width: 90%"></div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { product, getdeviceList, getdeviceData } from "@/api/data";
import * as echarts from "echarts";
import { Liquid, Gauge } from "@antv/g2plot";
export default {

  created() {
    // this.draw();
    // this.drawOil();
    // this.drawVol();
  },

  mounted() {
    // this.draw()
    this.drawOil();
    this.drawVol();
    this.drawCap();
  },

  data() {
    return {
      showPage: "0",    //初始页面
      tabKey: "1",      //温湿度tabs初始值
      oilData: "70",    //油位
      volData: "22",    //剩余容积
      capData: "45",    //载重量

      devicerankList: [
        //报警条数排名
        { count: "52", deviceName: "温度传感器3" },
        { count: "26", deviceName: "温度传感器2" },
        { count: "22", deviceName: "温度传感器1" },
        { count: "20", deviceName: "胎温传感器3" },
        { count: "12", deviceName: "胎压传感器8" },
        { count: "10", deviceName: "胎温传感器5" },
        // {count:"9",deviceName:"温度传感器6",},
      ],
      sensorList: [
        { name: "温度传感器1", date: "2021-03-22 12:00:00" },
        { name: "温度传感器2", date: "2021-03-22 12:00:01" },
        { name: "温度传感器3", date: "2021-03-22 12:00:02" },
        { name: "温度传感器4", date: "2021-03-22 12:00:03" },
        { name: "温度传感器5", date: "2021-03-22 12:00:04" },
        { name: "温度传感器6", date: "2021-03-22 12:00:05" },
        { name: "温度传感器7", date: "2021-03-22 12:00:06" },
        { name: "温度传感器8", date: "2021-03-22 12:00:07" },
      ],
    };
  },

  methods: {
    hisTem1() {
      // console.log("t1");
      this.showPage = "1";
      console.log(this.showPage);
      // this.draw()
    },
    hisHum1() {
      console.log("h1");
    },
    hisTem2() {
      console.log("t2");
    },
    hisHum2() {
      console.log("h2");
    },
    hisTem3() {
      console.log("t3");
    },
    hisHum3() {
      console.log("h3");
    },
    hisTem4() {
      console.log("t4");
    },
    hisHum4() {
      console.log("h4");
    },
    hisTem5() {
      console.log("t5");
    },
    hisHum5() {
      console.log("h5");
    },
    hisTem6() {
      console.log("t6");
    },
    hisHum6() {
      console.log("h6");
    },
    hisTem7() {
      console.log("t7");
    },
    hisHum7() {
      console.log("h7");
    },
    hisTem8() {
      console.log("t8");
    },
    hisHum8() {
      console.log("h8");
    },

    back() {
      this.showPage = "0";
      console.log(this.showPage);
    },

    draw() {   //温湿度历史数据图
      // var myChart= echarts.init(document.getElementById('chart'))
      var myChart = echarts.init(this.$refs.main);
      var option = {
        title: {
          text: "温湿度历史数据",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["温度", "湿度"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "温度",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "湿度",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      };
      option && myChart.setOption(option);
    },

    drawOil() {   //油位图
      // const liquidPlot = new Liquid('oil', {
      //   min:0.1,
      //   max:1.0,
      //   percent: 0.5,
      //   color: '#1890ff',
      //   outline: {
      //     border: 8,
      //     distance: 8,
      //   },
      //   wave: {
      //     length: 128,

      //   },
      // });
      // liquidPlot.render();
      // console.log("111");

      var chartDom = document.getElementById("oil");
      var myChart = echarts.init(chartDom);
      var option = {
        series: [
          {
            type: "gauge",
            startAngle: 225,
            endAngle: -45,
            splitNumber: 5,
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              lineStyle: {
                // 仪表盘轴线样式。
                width: 10,
                color: [
                  [0.3, "#fd666d"],
                  [0.7, "#37a2da"],
                  [1, "#67e0e3"],
                ],
              },
            },
            pointer: {
              // 仪表盘指针
              length: "70%",
              width: 5,
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              // 刻度(线)样式。
              distance: -30,
              length: 2,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            splitLine: {
              // 分隔线样式
              distance: -30,
              length: 10,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            axisLabel: {
              // 刻度标签。
              color: "auto",
              distance: 2,
              fontSize: 10,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              valueAnimation: true,
              formatter: "{value} %",
              color: "auto",
              fontSize: 20,
            },
            data: [
              {
                value: this.oilData,
                name: "油位",
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },

    drawVol() {   //剩余容积图
      var chartDom = document.getElementById("vol");
      var myChart = echarts.init(chartDom);
      var option = {
        series: [
          {
            type: "gauge",
            splitNumber: 5,
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              lineStyle: {
                // 仪表盘轴线样式。
                width: 10,
                color: [
                  [0.3, "#fd666d"],
                  [0.7, "#37a2da"],
                  [1, "#67e0e3"],
                ],
              },
            },
            pointer: {
              // 仪表盘指针
              length: "70%",
              width: 5,
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              // 刻度(线)样式。
              distance: -30,
              length: 0,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            splitLine: {
              // 分隔线样式
              distance: -30,
              length: 10,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            axisLabel: {
              // 刻度标签。
              color: "auto",
              distance: 2,
              fontSize: 10,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              valueAnimation: true,
              formatter: "{value} %",
              color: "auto",
              fontSize: 20,
            },
            data: [
              {
                value: this.volData,
                name: "剩余容积",
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },

    drawCap() {   //载重量图
      var chartDom = document.getElementById("cap");
      var myChart = echarts.init(chartDom);
      var option = {
        series: [
          {
            type: "gauge",
            splitNumber: 5,
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              lineStyle: {
                // 仪表盘轴线样式。
                width: 10,
                color: [
                  [0.3, "#67e0e3"],
                  [0.7, "#37a2da"],
                  [1, "#fd666d"],
                ],
              },
            },
            pointer: {
              // 仪表盘指针
              length: "70%",
              width: 5,
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              // 刻度(线)样式。
              distance: -30,
              length: 0,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            splitLine: {
              // 分隔线样式
              distance: -30,
              length: 10,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
            axisLabel: {
              // 刻度标签。
              color: "auto",
              distance: 2,
              fontSize: 10,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              valueAnimation: true,
              formatter: "{value} %",
              color: "auto",
              fontSize: 20,
            },
            data: [
              {
                value: this.capData,
                name: "载重量",
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },

    open0() {
      this.$prompt("设置温度报警值/°C", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "温度报警值: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },

    open1() {
      this.$prompt("设置油位报警值/%", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "油位低于: " + value + "报警",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },


  },


};
</script>

<style lang="less" scope>
.ant-card-body {
  padding: 10px 10px;
  /* background: black; */
}
.card{
  margin: 3px;
}
.home1 {
  background: #ffffff;
}

.sensor1 {
  // background: rgb(216, 213, 213);
  margin: 0px 5px 15px 5px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -27px 10px 10px 50px;
    // background: black;
  }
}
.sensor2 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 200px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -27px 10px 10px 50px;
    // background: black;
  }
}
.sensor3 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 400px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -27px 10px 10px 50px;
    // background: black;
  }
}
.sensor4 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 600px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -27px 10px 10px 50px;
    // background: black;
  }
}
.carriage {
  background: rgb(230, 223, 223);
  margin: 0px 5px 15px 0px;
  width: 705px;
  height: 150px;
}
.sensor5 {
  // background: rgb(230, 223, 223);
  margin: 15px 5px 15px 5px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -45px 10px 10px 50px;
    // background: black;
  }
}
.sensor6 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 200px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -45px 10px 10px 50px;
    // background: black;
  }
}
.sensor7 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 400px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -45px 10px 10px 50px;
    // background: black;
  }
}
.sensor8 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 600px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 18px;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 18px;
    margin: -45px 10px 10px 50px;
    // background: black;
  }
}
.top-right {
  // background: rgb(204, 200, 200);
  margin: -290px 5px 0px 800px;
  height: 260px;
  .title {
    font-size: 14px;
    font-weight: 600;
    margin-left: 20px;
  }
  .list {
    margin: 25px 0 0;
    padding: 0;
    list-style: none;
    // background: #000;
    li {
      margin-top: 16px;
      span {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 22px;
        &:first-child {
          background-color: #f5f5f5;
          border-radius: 20px;
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          margin-right: 24px;
          height: 20px;
          line-height: 20px;
          width: 20px;
          text-align: center;
        }
        &.active {
          background-color: #314659;
          color: #fff;
        }
        &:last-child {
          float: right;
        }
      }
    }
  }
}
.oil {
  // background: rgb(233, 219, 219);
  width: 100%;
  height: 180px;
  margin: -20px 0px 0px -35px;
}
.vol {
  // background: rgb(160, 157, 157);
  width: 50%;
  height: 180px;
  margin: -50px 0px 0px -10px;
}
.cap {
  // background: rgb(212, 205, 205);
  width: 50%;
  height: 180px;
  margin: -180px 0px 0px 160px;
}

</style>
