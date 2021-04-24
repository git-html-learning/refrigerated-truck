<template>
  <div>
    <div ref="element" class="home">
      <div v-show="showPage == '1'">
        <div class="home-item">
          <div class="top">
            <span class="title">冷机监控</span>
            <a-form-model layout="inline">
              <a-form-model-item>
                <a-input v-model="searchNum" placeholder="请输入车牌号" />
              </a-form-model-item>
              <a-form-model-item>
                <a-button type="primary" @click="search">查询</a-button>
              </a-form-model-item>
              <a-form-model-item>
                <a-button type="primary" @click="reset">重置</a-button>
              </a-form-model-item>
            </a-form-model>
          </div>
        </div>

        <!-- <div id="singleDom" ref="singleDom" class="load" v-show="Loading">
      <a-spin tip="Loading..." style="top: 350px; position: absolute"></a-spin>
    </div> -->

        <a-table
          :columns="columns"
          :data-source="refigeratorList"
          bordered
          @change="onChange"
        >
          <a slot="number" slot-scope="text">{{ text }}</a>
          <template slot="action" slot-scope="text, record">
            <a-button slot="action" type="primary" @click="show(record)">
              查看
            </a-button>
          </template>
        </a-table>
      </div>

      <!-- <a-modal 
    title="历史数据"
    :visible="showDiag" 
    :footer="null"
    @cancel="handleCancel"
    > -->
      <!-- <p>{{this.refigeratorId}}</p> -->
      <!-- <div id="main" ref="main" style="width:520px;height:520px;">
        
      </div>
      
    </a-modal> -->

      <div v-show="showPage == '2'">
        <div class="chart" ref="main0" id="main0">
          <div>
            <i
              class="iconfont icon-ai207"
              @click="back()"
              style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
            ></i>
          </div>
          <div id="main" ref="main" style="width: 100%; height: 520px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { Line } from "@antv/g2plot";
import store from "@/store";
import {
  product,
  getdeviceList,
  getdeviceData,
  onlinestatus,
} from "@/api/data";
import { divide, floor, size } from "lodash";
// import { set } from "vue/types/umd";
export default {
  name: "refrigerator",

  data() {
    return {
      showPage: "1",
      searchNum: "",
      refigeratorId: "", //冷机id
      refigeratorNum: "", //冷机对应车牌号
      showDiag: false,

      columns: [
        {
          title: "车牌号",
          dataIndex: "number",
          key: "number",
          align: "center",
          scopedSlots: { customRender: "number" },
        },
        {
          title: "冷机设备号",
          dataIndex: "id",
          key: "id",
          align: "center",
        },
        {
          title: "更新时间",
          dataIndex: "updateTime",
          key: "updateTime",
          align: "center",
        },
        {
          title: "电源",
          dataIndex: "power",
          key: "power",
          align: "center",
        },
        {
          title: "温度/℃",
          dataIndex: "temp",
          key: "temp",
          align: "center",
          sorter: (a, b) => a.temp - b.temp,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "历史数据",
          dataIndex: "hisTemp",
          key: "hisTemp",
          align: "center",
          scopedSlots: { customRender: "action" },
        },
      ],
      refigeratorList: [
        {
          number: "皖11111",
          id: "977579",
          updateTime: "2021-03-10 21:39",
          power: "开",
          temp: "2.0",
        },
        {
          number: "皖22222",
          id: "902147",
          updateTime: "2021-03-10 21:33",
          power: "开",
          temp: "9.0",
        },
        {
          number: "皖33333",
          id: "214893",
          updateTime: "2021-03-10 21:23",
          power: "开",
          temp: "5.0",
        },
        {
          number: "皖44444",
          id: "564390",
          updateTime: "2021-03-10 22:33",
          power: "关",
          temp: "8.2",
        },
        {
          number: "皖55555",
          id: "489732",
          updateTime: "2021-03-10 11:33",
          power: "开",
          temp: "9.1",
        },
        {
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },
      ],
      refigeratorList1: [
        {
          number: "皖11111",
          id: "977579",
          updateTime: "2021-03-10 21:39",
          power: "开",
          temp: "2.0",
        },
        {
          number: "皖22222",
          id: "902147",
          updateTime: "2021-03-10 21:33",
          power: "开",
          temp: "9.0",
        },
        {
          number: "皖33333",
          id: "214893",
          updateTime: "2021-03-10 21:23",
          power: "开",
          temp: "5.0",
        },
        {
          number: "皖44444",
          id: "564390",
          updateTime: "2021-03-10 22:33",
          power: "关",
          temp: "8.2",
        },
        {
          number: "皖55555",
          id: "489732",
          updateTime: "2021-03-10 11:33",
          power: "开",
          temp: "9.1",
        },
        {
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },{
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },
      ],
      hisData: [
        { time: "2020-01-01 09:00", tem: 2.0 },
        { time: "2020-01-01 09:01", tem: 9.2 },
        { time: "2020-01-01 09:02", tem: 5.7 },
        { time: "2020-01-01 09:03", tem: 1.8 },
        { time: "2020-01-01 09:04", tem: 0.5 },
        { time: "2020-01-01 09:05", tem: 8.2 },
        { time: "2020-01-01 09:06", tem: 5.0 },
      ],
      data: [2.0, 9.2, 5.7, 1.8, 0.5, 8.2, 5.0],
      data1: [2.0, 9.2, 5.7, 11.8, 10.5, 8.2, 5.0],
      // data:[]
    };
  },
  created() {
    // this.getproductList();
  },
  watch: {
    width() {
      // console.log("");
      setTimeout(() => {
        this.$refs.singleDom.style.width =
          this.$refs.element.clientWidth + "px";
      }, 50);
    },
    // productList(){
    //  return this.productList[0].status
    // }
  },
  mounted() {
    // this.progress();
    // console.log(document.getElementById("main"));
    // setTimeout(() => {
    //   this.progress();
    // }, 50);
    // this.settable()
    // this.width = this.$refs.element.clientWidth + "px";
    // setTimeout(() => {
    //   this.$refs.singleDom.style.width = this.$refs.element.clientWidth + "px";
    // }, 50);
    // window.onresize = () => {
    //   // this.drawpie();
    //   // console.log("dom");
    //   this.$refs.singleDom.style.width = this.$refs.element.clientWidth + "px";
    // };
  },
  updated() {
    // console.log(document.getElementById("main"));
  },
  methods: {
    search() {
      //查询冷机
      var arr = [];
      for (var i = 0; i < this.refigeratorList.length; i++) {
        if (this.refigeratorList[i].number.indexOf(this.searchNum) >= 0) {
          arr.push(this.refigeratorList[i]);
        }
      }
      this.refigeratorList = arr;
    },
    reset() {
      this.searchNum=""
      this.refigeratorList=this.refigeratorList1
    },
    //查看历史数据
    show(res) {
      var _this = this;
      // console.log(res);
      _this.refigeratorId = res.id;
      _this.refigeratorNum = res.number;
      // console.log(this.refigeratorId);
      // this.showDiag = true;
      // this.draw()
      _this.showPage = "2";
      _this.draw();
      // this.draw1()

      // if(_this.refigeratorId=="977579"){
      //   _this.data=JSON.parse(JSON.stringify(_this.data1));
      //   console.log(_this.data);
      // }else{
      //   _this.data=_this.data2
      // }
    },
    //排序
    onChange(pagination, filters, sorter) {
      console.log("params", pagination, filters, sorter);
    },

    handleCancel() {
      this.showDiag = false;
    },
    //返回表格
    back() {
      this.showPage = "1";
      // this.data = [];
    },

    //echarts画图
    draw() {
      var _this = this;
      var chartDom = document.getElementById("main");
      chartDom.style.width = (window.innerWidth - 256) * 0.85 + "px";
      var myChart = echarts.init(chartDom);

      // console.log(window.innerWidth);
      //用id不显示，改为ref
      // var myChart = echarts.init(this.$refs.main);
      console.log(_this.data);
      var option = {
        title: {
          text: _this.refigeratorNum + "冷机温度历史数据图",
          textStyle: {
            fontSize: 30,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2020-01-01 09:00",
            "2020-01-01 09:01",
            "2020-01-01 09:02",
            "2020-01-01 09:03",
            "2020-01-01 09:04",
            "2020-01-01 09:05",
            "2020-01-01 09:06",
          ],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
          },
        },
        series: [
          {
            data: _this.data,
            type: "line",
            color: "#096dd9",
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [
                { name: "温度临界值", yAxis: 5 },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值",
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "min",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最小值",
                    },
                    type: "min",
                    name: "最低点",
                  },
                ],
              ],
            },
          },
        ],
      };
      myChart.setOption(option);
      myChart.resize();

      setTimeout(function () {
        window.onresize = function () {
          var chartDom = document.getElementById("main");
          chartDom.style.width = (window.innerWidth - 256) * 0.85 + "px";
          var myChart = echarts.init(chartDom);
          var option = {
            title: {
              text: _this.refigeratorNum + "冷机温度历史数据图",
              textStyle: {
                fontSize: 30,
              },
            },
            tooltip: {
              trigger: "axis",
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: [
                "2020-01-01 09:00",
                "2020-01-01 09:01",
                "2020-01-01 09:02",
                "2020-01-01 09:03",
                "2020-01-01 09:04",
                "2020-01-01 09:05",
                "2020-01-01 09:06",
              ],
            },
            yAxis: {
              type: "value",
              axisLabel: {
                formatter: "{value} °C",
              },
            },
            series: [
              {
                data: _this.data,
                type: "line",
                color: "#096dd9",
                smooth: true,
                markPoint: {
                  data: [
                    { type: "max", name: "最大值" },
                    { type: "min", name: "最小值" },
                  ],
                },
                markLine: {
                  data: [
                    { name: "温度临界值", yAxis: 5 },
                    [
                      {
                        symbol: "none",
                        x: "90%",
                        yAxis: "max",
                      },
                      {
                        symbol: "circle",
                        label: {
                          position: "start",
                          formatter: "最大值",
                        },
                        type: "max",
                        name: "最高点",
                      },
                    ],
                    [
                      {
                        symbol: "none",
                        x: "90%",
                        yAxis: "min",
                      },
                      {
                        symbol: "circle",
                        label: {
                          position: "start",
                          formatter: "最小值",
                        },
                        type: "min",
                        name: "最低点",
                      },
                    ],
                  ],
                },
              },
            ],
          };
          myChart.setOption(option);
          myChart.resize();
        };
      }, 200);
    },
    adapDraw(){
      var _this = this;
      var chartDom = document.getElementById("main");
      chartDom.style.width = (window.innerWidth - 256) * 0.85 + "px";
      var myChart = echarts.init(chartDom);

      // console.log(window.innerWidth);
      //用id不显示，改为ref
      // var myChart = echarts.init(this.$refs.main);
      console.log(_this.data);
      var option = {
        title: {
          text: _this.refigeratorNum + "冷机温度历史数据图",
          textStyle: {
            fontSize: 30,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2020-01-01 09:00",
            "2020-01-01 09:01",
            "2020-01-01 09:02",
            "2020-01-01 09:03",
            "2020-01-01 09:04",
            "2020-01-01 09:05",
            "2020-01-01 09:06",
          ],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
          },
        },
        series: [
          {
            data: _this.data,
            type: "line",
            color: "#096dd9",
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [
                { name: "温度临界值", yAxis: 5 },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值",
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "min",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最小值",
                    },
                    type: "min",
                    name: "最低点",
                  },
                ],
              ],
            },
          },
        ],
      };
      myChart.setOption(option);
      myChart.resize();
    },

    //如果用g2plot画图,会重复渲染
    draw1() {
      const line = new Line("main", {
        title: {
          visible: true,
          text: this.refigeratorNum + "冷机温度历史数据图",
        },
        data: this.hisData,
        padding: "auto",
        xField: "time",
        yField: "tem",
        smooth: true,
        annotations: [
          // 高于温度临界值颜色变化
          {
            type: "regionFilter",
            start: ["min", "5.0"],
            end: ["max", "max"],
            color: "#F4664A",
          },
          {
            type: "text",
            position: ["min", "5.0"],
            content: "温度临界值",
            offsetY: -4,
            style: {
              textBaseline: "bottom",
            },
          },
          {
            type: "line",
            start: ["min", "5.0"],
            end: ["max", "5.0"],
            style: {
              stroke: "#F4664A",
              lineDash: [2, 2],
            },
          },
        ],
      });

      line.render();
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  margin: 10px auto;
  width: 100%;

  // height: 650px;
  background: #ffffff;
  // text-align: center;
  .load {
    height: 750px;
    z-index: 5000;
    // background: #eeeeee;
    opacity: 0.7;
    position: absolute;
    top: 70px;
    text-align: center;
    margin: 0 auto;
  }
  .home-item {
    background: #ffffff;
    box-shadow: 5px 5px 5px #e2e1e1;
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
  .chart {
    background: #ffffff;
    // box-shadow: 5px 5px 5px #888888;
    // border-radius: 10px;
    .top {
      margin: 0px;
      padding: 0px 0px 20px 20px;
      .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 70px;
      }
    }
  }
}
</style>
