<template>
  <div class="home">
    <div class="home-item">
      <div class="home-item1">
        <div class="deviceyunxing">
          <div class="title">设备运行情况</div>
          <div id="container"></div>
        </div>
        <div class="devicezhuangtai">
          <div class="title">设备状态概况</div>
          <div class="zhuangtai">
            <v-chart :forceFit="true" :height="280" :data="data2">
              <v-coord type="rect" direction="LB" />
              <v-tooltip />
              <v-legend />
              <v-axis data-key="State" :label="label2" />
              <v-stack-bar position="State*人口数量" color="年龄段" />
            </v-chart>
          </div>
        </div>
        <div class="deviceshuju">
          <div class="devicexinxi">
            <div class="title">
              1小时内数据信息数量
              <span style="font-size:22px">{{total}}</span>
            </div>
            <div class="xinxi">
              <v-chart :force-fit="true" :height="100" :data="data3" :padding="[18, 20, 10, 0]">
                <v-tooltip />
                <v-smooth-area position="x*y" :color="color" />
              </v-chart>
            </div>
          </div>
          <div class="line"></div>
          <div class="devicezhanbi">
            <div class="title">报警信息占比</div>
            <div class="zhanbi">
              <div class="shuju">
                <span>40%</span>
              </div>
              <div id="pie2" class="tu"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-item2">
        <div class="title">设备报警记录</div>
        <div style="width:100%">
          <a-row type="flex" justify="space-around">
            <a-col :span="15" class="bar">
              <h4 class="title">报警信息时间分布</h4>
              <v-chart
                :forceFit="true"
                :height="280"
                :data="data1"
                :scale="scale1"
                :padding="padding"
              >
                <v-tooltip :shared="true" />
                <v-axis data-key="time" :label="label" :tickLine="tickLine" />
                <v-axis data-key="value" :label="label" />
                <v-interval position="time*value" :opacity="opacity" :style="style" />
              </v-chart>
            </a-col>
            <a-col :span="7" class="rank">
              <h4 class="title">设备报警信息条数排名</h4>
              <ul class="list">
                <li :key="index" v-for="(item, index) in rankList">
                  <span :class="index < 3 ? 'active' : null">{{ index + 1 }}</span>
                  <span>{{ item.name }}</span>
                  <span>{{ item.total }}</span>
                </li>
              </ul>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { product, getalerttotal, getuseralert } from "@/api/data";
import Bar from "@/components/Charts/Bar";
import RankList from "@/components/Charts/RankList";
import ChartCard from "@/components/Charts/ChartCard";
import { Ring, Donut, RingProgress } from "@antv/g2plot";
// import { Donut } from "@antv/g2plot";
import insertCss from "insert-css";
const DataSet = require("@antv/data-set");
const sourceData = [
  { item: "在线", count: 70 },
  { item: "未知", count: 19 },
  { item: "离线", count: 11 },
];
const sourceData1 = [
  { State: "电量", 良好: 30, 正常: 50, 不足: 20 },
  { State: "信号", 良好: 40, 正常: 30, 不足: 30 },
];
const dv1 = new DataSet.View().source(sourceData1);
dv1.transform({
  type: "fold",
  fields: ["良好", "正常", "不足"],
  key: "年龄段",
  value: "人口数量",
  retains: ["State"],
});
const data2 = dv1.rows;
const scale = [
  {
    dataKey: "percent",
    min: 0,
    formatter: ".0%",
  },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent",
});
const data = dv.rows;
const barData = [];
const barData2 = [];
for (let i = 0; i < 12; i += 1) {
  barData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
  barData2.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const rankList = [];
for (let i = 0; i < 7; i++) {
  rankList.push({
    name: i + 1 + "号仓库",
    total: 8425 - i * 1005,
  });
}
const data1 = [
  {
    time: "9:00-10:00",
    value: 30,
  },
  {
    time: "10:00-11:00",
    value: 90,
  },
  {
    time: "11:00-12:00",
    value: 50,
  },
  {
    time: "12:00-13:00",
    value: 30,
  },
  {
    time: "13:00-14:00",
    value: 70,
  },
  {
    time: "14:00-15:00",
    value: 50,
  },
  {
    time: "15:00-16:00",
    value: 30,
  },
  {
    time: "16:00-17:00",
    value: 70,
  },
  {
    time: "17:00-18:00",
    value: 50,
  },
  {
    time: "18:00-19:00",
    value: 30,
  },
];
const label = {
  textStyle: {
    fill: "#aaaaaa",
  },
};

const tickLine = {
  alignWithLabel: false,
  length: 0,
};

const opacity = [
  "time",
  function (val) {
    if (val === "13:00-14:00") {
      return 1;
    }
    return 1;
  },
];

const style = [
  "time",
  {
    lineWidth: function lineWidth(val) {
      if (val === "13:00-14:00") {
        return 1;
      }
      return 0;
    },
    stroke: "#636363",
    lineDash: [3, 2],
  },
];

const scale1 = [
  {
    dataKey: "value",
    alias: "报警记录条数",
  },
];

export default {
  name: "analysis",
  components: {
    RankList,
    Bar,
    ChartCard,
  },
  data() {
    return {
      productlist: [],
      data,
      scale,
      data1,
      scale1,
      label,
      data2,
      label2: { offset: 12 },
      tickLine,
      opacity,
      style,
      rankList,
      padding: [20, 50, 50, 30],
      height: 250,
      pieStyle: {
        stroke: "#fff",
        lineWidth: 1,
      },
      labelConfig: [
        "percent",
        {
          formatter: (val, item) => {
            return item.point.item + ": " + val;
          },
        },
      ],
      total: 550,
      color: "#9b5de5",
      data3: [
        {
          x: "17:00:00",
          y: 60,
        },
        {
          x: "16:50:00",
          y: 200,
        },
        {
          x: "16:40:00",
          y: 100,
        },
        {
          x: "16:30:00",
          y: 50,
        },
        {
          x: "16:20:00",
          y: 30,
        },
        {
          x: "16:10:00",
          y: 100,
        },
        {
          x: "16:00:00",
          y: 70,
        },
      ],
    };
  },
  created() {
    this.getproductList();
  },
  mounted() {
    this.pie1();
    this.pie2();
  },
  methods: {
    //获取产品列表并vuex存起来productList
    async getproductList() {
      var _this = this;
      const res = await product();
      if (res.code == 200) {
        _this.productlist = res.data.productInfo;
        //commit时需要提交它的文件名
        // console.log(_this.productlist);
        _this.$store.commit("user/SET_PRODUCTlIST", res.data.productInfo);
      } else {
        console.log("产品获取失败");
      }
      // const res1 = await getalerttotal(
      //   { 
      //     username: "漳州港招商码头",
      //     }
      // );
      // console.log(res1);
      // if (res1.code == 200) {
      //   // console.log("1111111111");
      //   var total = res1.data;
      //   var time = new Date();
      //   var totallist = {
      //     id: "000000001",
      //     avatar:
      //       "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      //     title: "您收到了" + total + "条报警信息",
      //     // datetime: '2017-08-09',
      //     total: total,
      //     datetime: time,
      //     type: "notification",
      //   };
      //   _this.$store.commit("user/SET_ALERTTOTAL", totallist);
      // }
      // _this.getdeviceList()
    },
    pie2() {
      const CSS = `
.g2plot-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 4px 4px 0 0;
  table-layout: fixed;
}
.g2plot-thead {
  display: table-header-group;
  vertical-align: middle;
  border-bottom-color: #e8e8e8;
  border-bottom-style: solid;9
  border-bottom-width: 1px;
  background-color: #fafafa
}
.th-id {
  width: 15%;
}
.th-status {
  width: 15%;
}
.g2plot-thead th {
  text-align: center;
  height: 24px;
  font-size: 12px;
}
.g2plot-table-row {
  height: 30px;
  vertical-align: middle;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
}
.g2plot-table-column {
  font-size: 12px;
  color: #8c8c8c;
  padding: 15px;
  text-align: center
}
.g2plot-guide-html {
  width: 50px;
  height: 40px;
  vertical-align: middle;
  line-height: 0.8
}
.g2plot-guide-html .title {
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 300;
}
.g2plot-guide-html .value {
  font-size: 14px;
  color: #000;
  font-weight: bold;
}
`;
      function $(selector) {
        return document.querySelector(selector);
      }

      function loadCssCode(code) {
        const style = document.createElement("style");
        style.type = "text/css";
        style.rel = "stylesheet";
        // for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(code));
        // for IE
        // style.styleSheet.cssText = code;
        const head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
      }

      loadCssCode(CSS);
      var data = [
        {
          type: "分类一",
          value: 27,
        },
        {
          type: "分类二",
          value: 25,
        },
      ];
      const progress = new RingProgress(document.getElementById("pie2"), {
        width: 80,
        height: 80,
        percent: 0.4,
        color: ["#30BF78", "#E8EDF3"],
      });
      progress.render();
    },
    pie1() {
      var data = [
        {
          type: "在线",
          value: 27,
        },
        {
          type: "未知",
          value: 25,
        },
        {
          type: "离线",
          value: 18,
        },
      ];

      const ringPlot = new Ring(document.getElementById("container"), {
        forceFit: true,
        radius: 0.8,
        data,
        height: 280,
        angleField: "value",
        colorField: "type",
        // color:['blue','yellow','green']
        legend: {
          position: "right-center",
          offsetX: -20,
        },
      });

      ringPlot.render();
    },
  },
};
</script>

<style lang="less" scoped>
.ring-guide-name {
  color: white;
}

.ring-guide-value {
  color: white !important;
  opacity: 0.7;
}

.home {
  width: 100%;
  height: 100%;
  .home-item {
    margin: 10px;
    // display: flex;
    .home-item1 {
      width: 100%;
      height: 50%;
      display: flex;
      margin: 0px 30px 0px 0px;
      .deviceyunxing {
        width: 40%;
        height: 300px;
        margin: 0px 15px 15px 0px;
        background: #ffffff;
        box-shadow: 5px 5px 5px #888888;
        border-radius: 10px;
        .title {
          font-size: 14x;
          line-height: 40px;
          margin-left: 20px;
          font-weight: 600;
        }
      }
      .devicezhuangtai {
        width: 30%;
        height: 300px;
        margin: 0px 15px 15px 15px;
        background: #ffffff;
        box-shadow: 5px 5px 5px #888888;
        border-radius: 10px;
        .title {
          font-size: 14x;
          line-height: 40px;
          margin-left: 20px;
          font-weight: 600;
        }
        .zhuangtai {
          margin: 0px 20px 10px 0px;
          width: 80%;
        }
      }
      .deviceshuju {
        width: 30%;
        // height: 300px;
        margin: 0px 10px 15px 15px;
        // background: #ffffff;
        .devicexinxi {
          height: 140px;
          box-shadow: 5px 5px 5px #888888;
          border-radius: 10px;
          background: #ffffff;
          margin: 0px 0px 15px 0px;
          .title {
            font-size: 14x;
            line-height: 40px;
            margin-left: 20px;
            font-weight: 600;
          }
          .xinxi {
            width: 90%;
          }
        }
        // .line{
        //   height: 20px;
        //    background: #eeeeee;
        // }
        .devicezhanbi {
          height: 140px;
          box-shadow: 5px 5px 5px #888888;
          border-radius: 10px;
          background: #ffffff;
          margin: 15px 0px 0px 0px;
          .title {
            font-size: 14x;
            line-height: 40px;
            margin-left: 20px;
            font-weight: 600;
          }
          .zhanbi {
            display: flex;
            .shuju {
              width: 50%;
              padding-top: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: 600;
            }
            .tu {
              width: 50%;
            }
          }
        }
      }
    }
    .home-item2 {
      width: 100%;
      height: 370px;
      background: #ffffff;
      margin: 15px 10px 0px 0px;
      box-shadow: 5px 5px 5px #888888;
      border-radius: 10px;
      .title {
        font-size: 14x;
        line-height: 40px;
        margin-left: 20px;
        font-weight: 600;
        width: 100%;
      }
      .bar {
        margin: 0px 10px 10px 0px;
      }
      .rank {
        padding: 0 32px 32px 72px;
        // margin: 0px 10px 40px 0px;
        .list {
          margin: 25px 0 0;
          padding: 0;
          list-style: none;

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

      .mobile .rank {
        padding: 0 32px 32px 32px;
      }
    }
  }
}
</style>
