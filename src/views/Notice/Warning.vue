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
      
      <div class="home-item-bottom">
        <!-- <p style="font-size: 20px; padding: 0px 0px 0px 10px; align: left">类别</p> -->
        <a-tabs  default-active-key="1" size="large">
          <a-tab-pane key="1" tab="全部">
            <div>
              <a-table 
              :columns="totalColumns" 
              :data-source="totalData"
              bordered 
              :pagination="paginationOpt"
              >
              <a slot="number" slot-scope="text">{{ text }}</a>
              </a-table>
            </div>
          </a-tab-pane>
          
          <a-tab-pane key="2" tab="胎温">Content of Tab Pane 2</a-tab-pane>
          <a-tab-pane key="3" tab="胎压">Content of Tab Pane 3</a-tab-pane>
          <a-tab-pane key="4" tab="震动">Content of Tab Pane 4</a-tab-pane>
          <a-tab-pane key="5" tab="冷机">
            <div>
              <a-table
                :columns="refColumns"
                :data-source="refData"
                bordered
                :pagination="paginationOpt"
              >
              <a slot="number" slot-scope="text">{{ text }}</a>
              </a-table>
            </div>
          </a-tab-pane>

        </a-tabs>
      </div>

    </div>
  </div>
</template>

<script>
import { Line } from "@antv/g2plot";
export default {
  data() {
    return {
      totalnum: "1563",
      recentnum: "66",
      
      paginationOpt: {  
        defaultCurrent: 1,  // 默认当前页数  
        defaultPageSize: 6,   // 默认当前页显示数据的大小  
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

      totalColumns:[
        {
          title: "车牌号",
          dataIndex: "number",
          key: "number",
          align: "center",
          scopedSlots: { customRender: 'number' },
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
          title: "司机",
          dataIndex: "driver",
          key: "driver",
          align: "center",
        },
      ],
      totalData:[
        {
          number: "皖11111",
          updateTime: "2021-03-10 21:39",
          location:"轮胎1",
          value: "100℃",
          driver: "张三",
        },
        {
          number: "皖22222",
          updateTime: "2021-03-10 21:33",
          location:"油位",
          value: "1%",
          driver: "李四",
        },
        {
          number: "皖33333",
          updateTime: "2021-03-10 21:23",
          location:"温度测量点1",
          value: "60℃",
          driver: "王五",
        },
        {
          number: "皖44444",
          updateTime: "2021-03-10 22:33",
          location:"温度测量点2",
          value: "70℃",
          driver: "无名",
        },
        {
          number: "皖55555",
          updateTime: "2021-03-10 11:33",
          location:"温度测量点3",
          value: "72℃",
          driver: "小芮",
        },
        {
          number: "皖66666",
          updateTime: "2021-03-10 20:33",
          location:"温度测量点4",
          value: "60℃",
          driver: "司机",
        },
        {
          number: "皖66666",
          updateTime: "2021-03-10 20:33",
          location:"温度测量点4",
          value: "60℃",
          driver: "司机",
        },
      ],

      refColumns: [
        {
          title: "车牌号",
          dataIndex: "number",
          key: "number",
          align: "center",
          scopedSlots: { customRender: 'number' },
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
        },
      ],
      refData: [
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
        },
        {
          number: "皖66666",
          id: "532890",
          updateTime: "2021-03-10 20:33",
          power: "关",
          temp: "9.2",
        },
      ],

    };
  },
  methods: {},
  created() {},
  mounted() {
    const linePlot = new Line("warningdiagram", {
      title:{
        visible:true,
        text:"近一周报警数量",
      },
      data: this.warnningdata,
      padding: 'auto',
      xField: "time",
      yField: "num",
      yAxis:{
        min:0,
        max:30
      }
    });
    linePlot.render();
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
      height: 500px;
      background: #ffffff;
      margin: 10px 10px 0px 0px;
      box-shadow: 5px 5px 5px #dad8d8;
      border-radius: 10px;
    }
  }
}
</style>