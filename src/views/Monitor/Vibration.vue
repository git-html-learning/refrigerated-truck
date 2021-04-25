<template >
  <div>
    <div v-show="show1 === '1'">
      <div ref="element" class="home">
        <div>
          <div class="home-item">
            <div class="top">
              <span class="title">震动监控</span>
            </div>
          </div>
        </div>
      </div>

      <a-table :columns="columns" :data-source="data" bordered>
        <template
          v-for="col in ['number', 'name', 'time', 'max', 'speed', 'address']"
          :slot="col"
          slot-scope="text, record,"
        >
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="(e) => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template slot="line">
          <div>
            <el-button type="primary" @click="show(item)">查看</el-button>
          </div>
        </template>
      </a-table>
    </div>
    <div v-show="show1 === '2'">
      <div class="reverse">
        <i
          class="iconfont icon-ai207"
          @click="back()"
          style="fontsize: 30px; padding: 0px 0px 0px 10px; align: left"
        ></i>
        <p style="margin-top:20px;padding-left:20px;font-size: 23px; font-weight: 600; line-height: 50px">皖A2223 </p><br>
        <div
          id="main"
          style="width: 1400px; height: 400px; padding-left: 20px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "queryList",
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      centerDialogVisible: false,
      show1: "1",
      data,
      charts: "",
      columns,
      editingKey: "",
      modal2Visible: false,
    };
  },
  methods: {
    drawCharts() {
      this.drawMainChart();
    },
    drawMainChart() {
      this.main = echarts.init(document.getElementById("main"));
      var colors = ["#5470C6", "#91CC75"];
      this.main.setOption({
        color: colors,
        title: {
          text: "24小时曲线",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          right: "20%",
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true },
        //   },
        // },

        legend: {
          data: ["速度", "震动值"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            data: [
              "00:00",
              "01:15",
              "02:30",
              "03:45",
              "05:00",
              "06:15",
              "07:30",
              "08:45",
              "10:00",
              "11:15",
              "12:30",
              "13:45",
              "15:00",
              "16:15",
              "17:30",
              "18:45",
              "20:00",
              "21:15",
              "22:30",
              "23:45",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "速度",
            min: 0,
            max: 80,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value} km/h",
            },
          },
          {
            type: "value",
            name: "震动值",
            min: 0,
            max: 8,
            position: "right",
            offset: 6,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            axisLabel: {
              formatter: "{value} g",
            },
          },
        ],
        series: [
          {
            name: "速度",
            type: "line",
            data: [
              0,
              0,
              0,
              0,
              0,
              33,
              45,
              50,
              40,
              44,
              55,
              67,
              77,
              32,
              44,
              40,
              40,
              0,
              0,
              0,
            ],
          },
          {
            name: "震动值",
            type: "line",
            yAxisIndex: 1,
            data: [
              0,
              0,
              0,
              0,
              0,
              1,
              3.3,
              5.6,
              2.2,
              3.7,
              1.8,
              2.0,
              6.1,
              2.3,
              3.5,
              4.1,
              6,
              0,
              0,
              0,
            ],
          },
        ],
      });
    },
    show(a) {
      this.show1 = "2";
      this.drawMainChart();
    },
    back() {
      this.show1 = "1";
    },
  },
};
const columns = [
  {
    title: "序号",
    dataIndex: "number",
    width: "5%",
    scopedSlots: { customRender: "number" },
  },
  {
    title: "车牌号",
    dataIndex: "name",
    width: "10%",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "最后上报时间",
    dataIndex: "time",
    width: "10%",
    scopedSlots: { customRender: "time" },
  },
  {
    title: "震动最大值/g",
    dataIndex: "max",
    width: "10%",
    scopedSlots: { customRender: "max" },
  },
  {
    title: "速度(km/h)",
    dataIndex: "speed",
    scopedSlots: { customRender: "speed" },
    width: "10%",
  },

  {
    title: "上报地址",
    dataIndex: "address",
    scopedSlots: { customRender: "address" },
    width: "10%",
  },
  {
    title: "24小时震动曲线",
    dataIndex: "line",
    scopedSlots: { customRender: "line" },
    width: "10%",
  },
];
const data = [];
for (let i = 1; i < 101; i++) {
  data.push({
    key: i.toString(),
    number: `${i}`,
    name: `皖A23333${i}`,
    time: "2021/3/8 10:54:00",
    max: "0.04",
    speed: "26",
    address: `安徽省合肥市xxxx`,
  });
}
</script>

<style lang="less" scoped>
.editable-row-lines a {
  margin-right: 8px;
}
.home {
  margin: 10px auto;
  width: 100%;
  background: #ffffff;
  .load {
    height: 750px;
    z-index: 5000;
    opacity: 0.7;
    position: absolute;
    top: 70px;
    text-align: center;
    margin: 0 auto;
  }
  .home-item {
    background: #ffffff;
    box-shadow: 5px 5px 5px #d6d1d1;
    border-radius: 10px;
    .top {
      margin: 20px;
      padding: 0px 0px 10px 0px;
      .title {
        font-size: 30px;
        font-weight: 800;
        line-height: 70px;
      }
    }
  }
  .iconfont {
    font-size: 40px;
  }
  .line {
    height: 10px;
    background-color: #f0f2f5;
  }
}
.iconfont {
  font-size: 30px;
}
.reverse {
  background-color: white;
  width: 100%;
  height: 700px;
}
</style>
