<template>
  <div>
    <div>
      <a-row
        :grid="{ gutter: 16, xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }"
        :data-source="data"
      >
        <a-col :span="5" style="margin-right: 20px">
          <a-card hoverable style="text-align: center; height: 960px">
            <br />
            <br />
            <br /><br /><br /><br /><br /><br />

            <a-avatar :size="80" icon="user" />
            <br />
            <br />
            <a-card-meta title="赵某某" description="海纳百川，有容乃大">
            </a-card-meta>
            <br />
            <br />
            <p><a-icon type="user" />职位：经理</p>
            <p><a-icon type="apartment" />公司：弘恩科技</p>
            <p><a-icon type="phone" />电话：13487882144</p>
            <p><a-icon type="home" />家庭住址：安徽省合肥市</p>
          </a-card>
        </a-col>
        <a-col :span="18">
          <a-card title="总资产" style="height: 960px" hoverable>
            <div id="chartPie" style="height: 200px; width: 500px"></div>

            <p>2021/3/8<span class="divcss5-right"> 每天00：00更新</span></p>

            <div>
              <a-row>
                <a-col :span="8">
                  <a-card title="日均里程" :bordered="true" class="quanju">
                    <div id="main1" style="height: 200px"></div>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="日均行驶时长" :bordered="true" class="quanju">
                    <div id="main2" style="height: 200px"></div>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="日均时速" :bordered="true" class="quanju">
                    <div id="main3" style="height: 200px"></div>
                  </a-card>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="8">
                  <a-card title="日耗油" :bordered="true" class="quanju">
                    <div id="main4" style="height: 200px"></div>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card
                    title="平均体积装载率"
                    :bordered="true"
                    class="quanju"
                  >
                    <div id="main5" style="height: 200px"></div>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card
                    title="平均重量装载率"
                    :bordered="true"
                    class="quanju"
                  >
                    <div id="main6" style="height: 200px"></div>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import { Area } from "@antv/g2plot";
import { Line } from "@antv/g2plot";
import { Pie } from "@antv/g2plot";
export default {
  data() {
    return {
      data0: [
        { type: "闲置中", value: 27 },
        { type: "维修中", value: 25 },
        { type: "故障中", value: 18 },
        { type: "租赁中", value: 15 },
        { type: "使用中", value: 10 },
      ],
      data1: [
        { time: "3/1", num: 110 },
        { time: "3/2", num: 120 },
        { time: "3/3", num: 95 },
        { time: "3/4", num: 110 },
        { time: "3/5", num: 120 },
        { time: "3/6", num: 30 },
        { time: "3/7", num: 90 },
      ],
      data2: [
        { time: "3/1", 时长: 11 },
        { time: "3/2", 时长: 10 },
        { time: "3/3", 时长: 15 },
        { time: "3/4", 时长: 9 },
        { time: "3/5", 时长: 14 },
        { time: "3/6", 时长: 8 },
        { time: "3/7", 时长: 18 },
      ],
      data3: [
        { time: "3/1", num: 55 },
        { time: "3/2", num: 44 },
        { time: "3/3", num: 55 },
        { time: "3/4", num: 40 },
        { time: "3/5", num: 66 },
        { time: "3/6", num: 55 },
        { time: "3/7", num: 43 },
      ],
      data4: [
        { time: "3/1", 耗油: 19 },
        { time: "3/2", 耗油: 16 },
        { time: "3/3", 耗油: 35 },
        { time: "3/4", 耗油: 24 },
        { time: "3/5", 耗油: 10 },
        { time: "3/6", 耗油: 33 },
        { time: "3/7", 耗油: 36 },
      ],
      data5: [
        { time: "3/1", num: 90 },
        { time: "3/2", num: 88 },
        { time: "3/3", num: 60 },
        { time: "3/4", num: 70 },
        { time: "3/5", num: 55 },
        { time: "3/6", num: 68 },
        { time: "3/7", num: 43 },
      ],
      data6: [
        { time: "3/1", num: 70 },
        { time: "3/2", num: 88 },
        { time: "3/3", num: 69 },
        { time: "3/4", num: 70 },
        { time: "3/5", num: 75 },
        { time: "3/6", num: 95 },
        { time: "3/7", num: 90 },
      ],
    };
  },
  methods: {},
  mounted() {
    const linePlot = new Line("main1", {
      data: this.data1,
      padding: "auto",
      color: ["rgb(19, 194, 194)"],
      label: {},
      xField: "time",
      yField: "num",
      yAxis: {
        min: 0,
        max: 150,
      },
      tooltip: { showMarkers: false },
      point: {
        size: 5,
        shape: "diamond",
        style: {
          fill: "white",
          stroke: "#5B8FF9",
          lineWidth: 2,
        },
      },

      meta: {
        time: {
          alias: " ",
        },
        num: {
          alias: "km",
        },
      },
    });

    linePlot.render();
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const line = new Line("main2", {
          data: this.data2,
          color: ["rgb(47, 84, 235)"],
          // color: ["#91CC75"],
          xField: "time",
          yField: "时长",
          yAxis: {
            min: 0,
            max: 24,
          },
          meta: {
            time: {
              alias: " ",
            },
            时长: {
              alias: "h",
            },
          },
        });

        line.render();
      });

    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const line = new Line("main3", {
          data: this.data3,
          // color: ["rgb(250, 219, 20)"],
          color: ["#91CC75"],

          xField: "time",
          yField: "num",
          yAxis: {
            min: 0,
            max: 80,
          },
          meta: {
            time: {
              alias: " ",
            },
            num: {
              alias: "km/h",
            },
          },
        });

        line.render();
      });

    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const area = new Area("main4", {
          // color: ["#91CC75"],
          color: ["rgb(19, 194, 194)"],
          data: this.data4,
          xField: "time",
          yField: "耗油",
          yAxis: {
            min: 0,
            max: 40,
          },
          meta: {
            time: {
              alias: " ",
            },
            耗油: {
              alias: "L",
            },
          },
        });
        area.render();
      });
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const area = new Area("main5", {
          color: ["rgb(47, 84, 235)"],
          data: this.data5,
          xField: "time",
          yField: "num",
          yAxis: {
            min: 0,
            max: 100,
          },
          meta: {
            time: {
              alias: " ",
            },
            num: {
              alias: "%",
            },
          },
        });
        area.render();
      });
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const area = new Area("main6", {
          color: ["#91CC75"],
          data: this.data6,
          xField: "time",
          yField: "num",
          yAxis: {
            min: 0,
            max: 100,
          },
          meta: {
            time: {
              alias: " ",
            },
            num: {
              alias: "%",
            },
          },
        });
        area.render();
      });

    const piePlot = new Pie("chartPie", {
      appendPadding: 14,
      data: this.data0,
      angleField: "value",
      colorField: "type",
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: "inner",
        offset: "-20%",
        content: "{value}",
        style: {
          textAlign: "center",
          fontSize: 10,
        },
      },
      interactions: [{ type: "element-selected" }, { type: "element-active" }],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: "pre-wrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
          formatter: () => " ",
        },
      },
    });

    piePlot.render();
  },
};
</script>
<style lang="less" scoped>
.quanju {
  margin: 3px 3px;
  padding-right: 10px;
}
.divcss5-right {
  float: right;
  color: rgb(75, 73, 73);
  padding-right: 20px;
  margin-right: 20px;
}
</style>
