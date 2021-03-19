<template>
  <div>
    <div>
      <el-row >
        <el-col :span="18">
          <a-card
            title="厢内温湿度监测" 
            style="height: 358px"
            hoverable
          >
            <a slot="extra" @click="open0">更多</a>
            <div class="sensor1">wendu1</div>
            <div class="sensor2">wendu2</div>
            <div class="sensor3">wendu3</div>
            <div class="sensor4">wendu4</div>
            <div class="carriage"></div>
            <div class="sensor5">wendu5</div>
            <div class="sensor6">wendu6</div>
            <div class="sensor7">wendu7</div>
            <div class="sensor8">wendu8</div>
            <div class="top-right">warning</div>
          </a-card>
        </el-col>
        <el-col :span="6">
          <a-card
            title="皖A222"
            :bordered="true"
            style="height: 358px"
            
            hoverable
          >
            <a slot="extra" @click="open1">更多</a>
            <p>
              <a-progress
                type="circle"
                :percent="75"
                :format="(percent) => `油位${percent}%`"
                style="margin-left: 100px"
              />
            </p>
            <span
              ><a-progress
                type="circle"
                :percent="15"
                :format="
                  (percent) => `剩余容积
      ${percent}%`
                "
            /></span>
            <span
              ><a-progress
                type="circle"
                :percent="85"
                :format="
                  (percent) => `载重率
      ${percent}%`
                "
                style="margin-left: 80px"
            /></span>
          </a-card>
        </el-col>
      </el-row>
      <el-row style="height: 250px">
        <el-col :span="9">
          <a-card title="车门" :bordered="true"  hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </el-col>
        <el-col :span="9">
          <a-card title="灯开关" :bordered="true"  hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </el-col>
        <el-col :span="6">
          <a-card title="报警装置" :bordered="true"  hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </el-col>
      </el-row>
      <el-row style="height: 250px">
        <el-col :span="18">
          <a-card title="胎温胎压" :bordered="true"  hoverable>
            <a slot="extra" @click="open2">更多</a>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </el-col>
        <el-col :span="6">
          <a-card title="冷机" :bordered="true"  hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </el-col>
      </el-row>
      <el-row style="height: 250px">
        <el-col :span="12">
          <a-card
            title="皖A222"
            :bordered="true"
            
            style="height: 285px"
            hoverable
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </el-col>
        <el-col :span="12">
          <a-card
            title="车辆震动曲线图"
            :bordered="true"
            
            hoverable
          >
            <a slot="extra" @click="open">更多</a>
            <div id="main7" style="width: 700px; height: 180px"></div>
          </a-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { product, getdeviceList, getdeviceData } from "@/api/data";
import echarts from "echarts";
export default {
  data() {
    return {
      chartPie: null,
      main1: null,
      data,
    };
  },
  methods: {
    open() {
      this.$prompt("设置震动报警值/g", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "车辆震动值: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
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
    open2() {
      this.$prompt("设置报警值", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "胎温胎压低于: " + value + "报警",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    handleChange(value) {
      console.log(value);
    },

    drawCharts() {
      this.drawMain7Chart();
    },
    drawMain7Chart() {
      this.main7 = echarts.init(document.getElementById("main7"));
      this.main7.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "item",
          formatter: " {c}g",
        },
        grid: {
          top: "3%",
          left: "0%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [0.3, 0.4, 0.1, 0.4, 0.2, 0.3, 0.4],
            type: "line",
          },
        ],
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.drawCharts();
    });
  },
};
</script>

<style scope>
.ant-card-body{
  padding: 10px 10px;
  /* background: black; */
}
.sensor1{
  background: rgb(230, 223, 223);
  margin: 0px 5px 15px 5px;
  width:100px;
  height:50px
}
.sensor2{
  background: rgb(230, 223, 223);
  margin: -65px 5px 15px 200px;
  width:100px;
  height:50px
}
.sensor3{
  background: rgb(230, 223, 223);
  margin: -65px 5px 15px 400px;
  width:100px;
  height:50px
}
.sensor4{
  background: rgb(230, 223, 223);
  margin: -65px 5px 15px 600px;
  width:100px;
  height:50px
}
.carriage{
  background: rgb(192, 181, 181);
  margin: 0px 5px 15px 0px;
  width:705px;
  height:150px
}
.sensor5{
  background: rgb(230, 223, 223);
  margin: 15px 5px 15px 5px;
  width:100px;
  height:50px
}
.sensor6{
  background: rgb(230, 223, 223);
  margin: -65px 5px 15px 200px;
  width:100px;
  height:50px
}
.sensor7{
  background: rgb(230, 223, 223);
  margin: -65px 5px 15px 400px;
  width:100px;
  height:50px
}
.sensor8{
  background: rgb(230, 223, 223);
  margin: -65px 5px 15px 600px;
  width:100px;
  height:50px
}
.top-right{
  background: rgb(204, 200, 200);
  margin: -290px 5px 0px 750px;
  height: 260px;
}

.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}

.grid-content {
  border-radius: 40px;
  min-height: 50px;
  font-size: 24px;
  font-weight: 700;
  line-height: 70px;
}
.grid-content1 {
  border-radius: 40px;
  min-height: 250px;
  margin: 15px 5px 15px 0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

</style>
