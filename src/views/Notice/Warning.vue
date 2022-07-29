<template>
  <div class="home">
    <div class="home-item">
      <div class="home-item-top">
        <div class="warningnum">
          <div class="title1">总报警数</div>
          <div class="totalnum">{{ totalnum }}</div>
          <div class="title2">近一周报警数</div>
          <div class="recentnum">{{ recentnum }}</div>
        </div>

        <div class="warningdiagram" id="warningdiagram"></div>
      </div>

      <div class="home-item-bottom" >
        <!-- <p style="font-size: 20px; padding: 0px 0px 0px 10px; align: left">类别</p> -->
        <a-tabs default-active-key="1" size="large">
          <a-tab-pane key="1" tab="车辆行驶">
            <div>
              <a-table
                :columns="vehColumns"
                :data-source="vehData"
                bordered
                :pagination="paginationOpt"
              >
                <a slot="number" slot-scope="text" @click = "detailPage(text)">{{ text }}</a>
              </a-table>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="全部">
            <div>
              <a-table
                :columns="totalColumns"
                :data-source="totalData"
                bordered
                :pagination="paginationOpt"
              >
                <a slot="number" slot-scope="text" @click = "detailPage(text)">{{ text }}</a>
                <span slot="tags" slot-scope="tags">
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === '严重' ? 'red' : tag === '紧急' ?'orange':tag === '通知'?'pink':'purple' "
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </a-table>
            </div>
          </a-tab-pane>

          <a-tab-pane key="3" tab="胎温">
            <div>
              <a-table
                :columns="totalColumns"
                :data-source="totalData"
                bordered
                :pagination="paginationOpt"
              >
               <a slot="number" slot-scope="text" @click = "detailPage(text)">{{ text }}</a>
                <span slot="tags" slot-scope="tags">
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === '严重' ? 'red' : tag === '紧急' ?'orange':tag === '通知'?'pink':'purple' "
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </a-table>
            </div>
          </a-tab-pane>
          <a-tab-pane key="4" tab="胎压">
            <div>
              <a-table
                :columns="totalColumns"
                :data-source="totalData"
                bordered
                :pagination="paginationOpt"
              >
             <a slot="number" slot-scope="text" @click = "detailPage(text)">{{ text }}</a>
                <span slot="tags" slot-scope="tags">
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                     :color="tag === '严重' ? 'red' : tag === '紧急' ?'orange':tag === '通知'?'pink':'purple' "
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </a-table>
            </div>
          </a-tab-pane>
          <a-tab-pane key="5" tab="震动">
            <div>
              <a-table
                :columns="totalColumns"
                :data-source="totalData"
                bordered
                :pagination="paginationOpt"
              >
       <a slot="number" slot-scope="text" @click = "detailPage(text)">{{ text }}</a>
                <span slot="tags" slot-scope="tags">
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === '严重' ? 'red' : tag === '紧急' ?'orange':tag === '通知'?'pink':'purple' "
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </a-table>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Area, Column, Liquid } from "@antv/g2plot";
export default {
  created() {},
  mounted() {
    this.draw();
  },
  data() {
    return {
      totalnum: "1563",
      recentnum: "66",

      paginationOpt: {
        defaultCurrent: 1, // 默认当前页数
        defaultPageSize: 6, // 默认当前页显示数据的大小
      },

      warnningdata: [
        { time: "2021-03-01 ", num: 10 },
        { time: "2021-03-02 ", num: 22 },
        { time: "2021-03-03 ", num: 20 },
        { time: "2021-03-04 ", num: 26 },
        { time: "2021-03-05 ", num: 20 },
        { time: "2021-03-06 ", num: 26 },
        { time: "2021-03-07 ", num: 28 },
      ],

      totalColumns: [
        {
          title: "车牌号",
          dataIndex: "number",
          key: "number",
          align: "center",
          scopedSlots: { customRender: "number" },
        },
        {
          title: "等级",
          dataIndex: "tags",
          key: "tags",
          align: "center",

          scopedSlots: { customRender: "tags" },
        },
        {
          title: "最后上传时间",
          dataIndex: "updateTime",
          key: "updateTime",
          align: "center",
        },
        {
          title: "报警位置",
          dataIndex: "location",
          key: "location",
          align: "center",
        },
        {
          title: "数值",
          dataIndex: "value",
          key: "value",
          align: "center",
        },
        {
          title: "报警阈值",
          dataIndex: "section",
          key: "section",
          align: "center",
        },
        {
          title: "司机",
          dataIndex: "driver",
          key: "driver",
          align: "center",
        },
      ],
      totalData: [
        {
          number: "kaile001",
          updateTime: "2021-03-10 21:39",
          location: "轮胎1",
          value: "100℃",
          tags: ["通知"],
          section: "20 ~ 80℃",
          driver: "张三",
        },
        {
          number: "kaile001",
          updateTime: "2021-03-10 21:33",
          location: "油位",
          value: "1%",
          tags: ["紧急"],
          section: "30 ~ 100%",
          driver: "李四",
        },
        {
          number: "A7670C",
          updateTime: "2021-03-10 21:23",
          location: "温度测量点1",
          value: "60℃",
          tags: ["严重"],
          section: "0 ~ 20℃",
          driver: "王五",
        },
        {
          number: "kaile001",
          updateTime: "2021-03-10 22:33",
          location: "温度测量点2",
          value: "70℃",
          tags: ["预警"],
          section: "0 ~ 20℃",
          driver: "无名",
        },
        {
          number: "A7670C",
          updateTime: "2021-03-10 11:33",
          location: "温度测量点3",
          value: "72℃",
          tags: ["通知"],
          section: "0 ~ 20℃",
          driver: "小芮",
        },
        {
          number: "A7670C",
          updateTime: "2021-03-10 20:33",
          location: "温度测量点4",
          value: "60℃",
          tags: ["紧急"],
          section: "0 ~ 20℃",
          driver: "王五",
        },
        {
          number: "A7670C",
          updateTime: "2021-03-10 20:33",
          location: "温度测量点4",
          value: "60℃",
          tags: ["紧急"],
          section: "0 ~ 20℃",
          driver: "张三",
        },
        {
          number: "kaile001",
          updateTime: "2021-03-10 20:33",
          location: "胎温传感器1",
          value: "100℃",
          tags: ["严重"],
          section: "20 ~ 80℃",
          driver: "李四",
        },
      ],

      vehColumns: [
        {
          title: "车牌号",
          dataIndex: "number",
          key: "number",
          align: "center",
          scopedSlots: { customRender: "number" },
        },
        {
          title: "开始时间",
          dataIndex: "startTime",
          key: "startTime",
          align: "center",
        },
        {
          title: "起点",
          dataIndex: "startingPoint",
          key: "startingPoint",
          align: "center",
        },
        {
          title: "到达时间",
          dataIndex: "arriveTime",
          key: "updateTime",
          align: "center",
        },
        {
          title: "终点",
          dataIndex: "arrivePoint",
          key: "arrivePoint",
          align: "center",
        },
        {
          title: "报警次数",
          dataIndex: "numbers",
          key: "numbers",
          align: "center",
        },
      ],
      vehData: [
        {
          number: "A7670C",
          startTime: "2021-03-10 11:39",
          startingPoint: "合肥",
          arriveTime: "2021-03-10 21:39",
          arrivePoint: "上海",
          numbers: 10,
        },
        {
          number: "kaile001",
          startTime: "2021-03-10 11:39",
          startingPoint: "合肥",
          arriveTime: "2021-03-10 21:39",
          arrivePoint: "上海",
          numbers: 10,
        }
      ],
    };
  },
  methods: {
    draw() {
      const columnPlot = new Column("warningdiagram", {
        title: {
          visible: true,
          text: "近一周报警数量",
        },
        data: this.warnningdata,
        padding: "auto",
        xField: "time",
        yField: "num",
        yAxis: {
          min: 0,
          max: 30,
        },
        meta: {
          time: {
            alias: " ",
          },
          num: {
            alias: "报警数",
          },
        },
        columnSize: 40,
      });
      columnPlot.render();
    },
    detailPage(data) {
      console.log("点击跳转到详情页")
 console.log(data)
  var transName = ""
 var transPk = ""

 if (data == "A7670C") {
transName = data
transPk = "cauief34s1f1bbrmq430"
 } else if (data == "kaile001") {
   transName = data
transPk = "c51vnhu0c9hht95g2dtg"
 }
   window.sessionStorage.setItem("productKey", transPk);
      window.sessionStorage.setItem("carNum", transName);
   this.$router.push({
        path: "/list/details",
        // query: {
        //   pk: transPk,
        //   carnum: transName,
        // },
      });
    }
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  // background: black;
  .home-item {
    margin: 10px;
    // background: rgb(32, 35, 212);
    .home-item-top {
      width: 100%;
      height: 50%;
      display: flex;
      margin: 0px 30px 0px 0px;
      // background: black;
      .warningnum {
        width: 20%;
        height: 240px;
        margin: 0px 15px 15px 0px;
        background: #ffffff;
        box-shadow: 5px 5px 5px #dad8d8;
        border-radius: 10px;
        .title1 {
          font-size: 16px;
          line-height: 40px;
          margin-left: 20px;
          font-weight: 600;
          // background: black;
        }
        .totalnum {
          width: 50%;
          padding-top: 10px;
          text-align: right;
          font-size: 36px;
          font-weight: 600;
          // background: black;
        }
        .title2 {
          font-size: 16px;
          line-height: 60px;
          margin-left: 20px;
          font-weight: 600;
          // background: black;
        }
        .recentnum {
          width: 50%;
          padding-top: 5px;
          text-align: right;
          font-size: 34px;
          font-weight: 600;
          // background: black;
        }
      }
      .warningdiagram {
        width: 80%;
        height: 240px;
        margin: 0px 15px 15px 15px;
        background: #ffffff;
        box-shadow: 5px 5px 5px #dad8d8;
        border-radius: 10px;
      }
    }
    .home-item-bottom {
      width: 100%;
      height: 550px;
      padding: 10px;
      background: #ffffff;
      margin: 10px 10px 0px 0px;
      box-shadow: 5px 5px 5px #dad8d8;
      border-radius: 10px;
    }
  }
}
</style>