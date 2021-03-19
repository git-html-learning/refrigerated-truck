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

      <div v-show="showPage == '2'" >
        <div class="chart">
          <div>
            <i
              class="iconfont icon-ai207"
              @click="back()"
              style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
            ></i>
          </div>
          <div id="main" ref="main" style="width:1600px;height:520px;"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import store from "@/store";
import {
  product,
  getdeviceList,
  getdeviceData,
  onlinestatus,
} from "@/api/data";
import { Progress, Line } from "@antv/g2plot";
import { divide, floor, size } from "lodash";
// import { set } from "vue/types/umd";
export default {
  name: "refrigerator",

  data() {
    return {
      showPage: "1",
      searchNum: "",
      refigeratorId: "",   //冷机id
      refigeratorNum:"",   //冷机对应车牌号
      showDiag: false,

      columns: [
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
        },
      ],
    };
  },
  created() {
    this.getproductList();
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

    this.width = this.$refs.element.clientWidth + "px";
    setTimeout(() => {
      this.$refs.singleDom.style.width = this.$refs.element.clientWidth + "px";
    }, 50);

    window.onresize = () => {
      // this.drawpie();
      // console.log("dom");
      this.$refs.singleDom.style.width = this.$refs.element.clientWidth + "px";
    };
  },
  updated() {
    // console.log(document.getElementById("main"));
  },
  methods: {
    //查看历史数据
    show(res) {
      // console.log(res);
      this.refigeratorId = res.id;
      this.refigeratorNum=res.number
      // console.log(this.refigeratorId);
      this.showDiag = true;
      // this.draw()
      this.showPage = "2";
      this.draw()
    },

    //画图
    draw() {
      // var chartDom = document.getElementById("main");
      // var myChart = echarts.init(chartDom);
      //用id不显示，改为ref
      var myChart = echarts.init(this.$refs.main);
      var option = {
        title:{
          text:this.refigeratorNum + "冷机温度历史数据图",
          textStyle: {
            fontSize: 30
          },
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2020-01-01 09:00", "2020-01-01 09:01", "2020-01-01 09:02", "2020-01-01 09:03", "2020-01-01 09:04", "2020-01-01 09:05", "2020-01-01 09:06"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 124, 278, 135, 147, 260],
            type: "line",
            color:'#7cb305',
            smooth: true
          },
        ],
      };

      option && myChart.setOption(option);
    },

    //排序
    onChange(pagination, filters, sorter) {
      console.log("params", pagination, filters, sorter);
    },

    handleCancel() {
      this.showDiag = false;
    },
    //返回表格
    back(){
      this.showPage="1"
    }
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
