<template>
  <div>
    <div v-show="showPage === '0'">
      <a-row :gutter="[8, 8]">
        <a-col :span="18">
          <a-card
            title="厢内温湿度监测"
            style="height: 358px"
            class="shadow"
            hoverable
          >
            <a slot="extra" @click="open0">更多</a>
            <div class="sensor1">
              <p style="margin: 0 0 0 0">监测点1</p>
              <div class="left" @click="hisTem1">
                {{ humiHandleData[0].temp }}℃
              </div>
              <div class="right" @click="hisTem1">
                {{ humiHandleData[0].humi }}%
              </div>
            </div>
            <div class="sensor2">
              <p style="margin: 0 0 0 0">监测点2</p>
              <div class="left" @click="hisTem1">
                {{ humiHandleData[1].temp }}℃
              </div>
              <div class="right" @click="hisTem1">
                {{ humiHandleData[1].humi }}%
              </div>
            </div>
            <div class="sensor3">
              <p style="margin: 0 0 0 0">监测点3</p>
              <div class="left" @click="hisTem1">
                {{ humiHandleData[2].temp }}℃
              </div>
              <div class="right" @click="hisTem1">
                {{ humiHandleData[2].humi }}%
              </div>
            </div>
            <div class="sensor4">
              <p style="margin: 0 0 0 0">监测点4</p>
              <div class="left" @click="hisTem1">
                {{ humiHandleData[3].temp }}℃
              </div>
              <div class="right" @click="hisTem1">
                {{ humiHandleData[3].humi }}%
              </div>
            </div>
            <div class="carriage">
              <img src="../../static/pic/carriage.png" class="img" />
              <!-- <img width="32" src="../static/pic/honen.png" /> -->
            </div>
            <div class="sensor5">
              <p style="margin: 0 0 0 0">监测点5</p>
              <p class="left" @click="hisTem1">{{ humiHandleData[4].temp }}℃</p>
              <p class="right" @click="hisTem1">
                {{ humiHandleData[4].humi }}%
              </p>
            </div>
            <div class="sensor6">
              <p style="margin: 0 0 0 0">监测点6</p>
              <p class="left" @click="hisTem1">{{ humiHandleData[5].temp }}℃</p>
              <p class="right" @click="hisTem1">
                {{ humiHandleData[5].humi }}%
              </p>
            </div>
            <div class="sensor7">
              <p style="margin: 0 0 0 0">监测点7</p>
              <p class="left" @click="hisTem1">{{ humiHandleData[6].temp }}℃</p>
              <p class="right" @click="hisTem1">
                {{ humiHandleData[6].humi }}%
              </p>
            </div>
            <!-- <div class="sensor8">
              <p style="margin: 0 0 0 0">监测点8</p>
              <p class="left" @click="hisTem8">{{ humiOriData[6].temp }}</p>
              <p class="right" @click="hisHum8">{{ humiOriData[6].humi }}</p>
            </div> -->
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
            :title="this.carNum"
            :bordered="true"
            style="height: 358px"
            class="shadow"
            hoverable
          >
            <a slot="extra" @click="open1">更多</a>
            <div id="oil" class="oil"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="9">
          <a-card title="车门" style="height: 220px" class="shadow" hoverable>
            <a slot="extra" @click="showdoor()">更多</a>
            <a-col :span="12" style="text-align: center">
              <div>
                <p v-show="door1">
                  <img src="../../static/icon/开门1.svg" />
                </p>
                <p v-show="!door1">
                  <img src="../../static/icon/关门1.svg" />
                </p>
                <p>&nbsp;&nbsp;侧门</p>
                <el-tag v-show="door1" type="danger"> 已开启 </el-tag>
                <el-tag v-show="!door1"> 已关闭 </el-tag>
              </div>
            </a-col>
            <a-col :span="12" style="text-align: center">
              <div>
                <p v-show="door2">
                  <img src="../../static/icon/开门1.svg" />
                </p>
                <p v-show="!door2">
                  <img src="../../static/icon/关门1.svg" />
                </p>
                <p>&nbsp;&nbsp;后门</p>
                <el-tag v-show="door2" type="danger"> 已开启 </el-tag>
                <el-tag v-show="!door2"> 已关闭 </el-tag>
              </div>
            </a-col>
          </a-card>
        </a-col>

        <a-col :span="9">
          <a-card title="灯开关" style="height: 220px" class="shadow" hoverable>
            <a slot="extra" @click="show()">更多</a>
            <a-col :span="8" style="text-align: center">
              <div>
                <a-spin tip="等待响应" :spinning="spinning1">
                  <p v-show="light1">
                    <img src="../../static/icon/开灯.svg" />
                  </p>
                  <p v-show="!light1">
                    <img src="../../static/icon/关灯.svg" />
                  </p>
                  <p>照明灯</p>
                </a-spin>

                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  :defaultChecked="defaultChecked"
                  @change="changeLight1"
                />
              </div>
            </a-col>
            <a-col :span="8" style="text-align: center">
              <div>
                <p v-show="light2">
                  <img src="../../static/icon/开灯.svg" />
                </p>
                <p v-show="!light2">
                  <img src="../../static/icon/关灯.svg" />
                </p>
                <p>杀菌灯</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="light2 = !light2"
                />
              </div>
            </a-col>
            <a-col :span="8" style="text-align: center">
              <div>
                <p v-show="light3">
                  <img src="../../static/icon/开灯.svg" />
                </p>
                <p v-show="!light3">
                  <img src="../../static/icon/关灯.svg" />
                </p>
                <p>其它</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="light3 = !light3"
                />
              </div>
            </a-col>
          </a-card>
        </a-col>

        <a-col :span="6">
          <a-card
            title="报警装置"
            style="height: 220px"
            class="shadow"
            hoverable
          >
            <div v-show="!alert">
              <a-col
                :span="13"
                style="
                  padding-left: 20px;
                  padding-top: 10px;
                  text-align: center;
                "
              >
                <span>
                  <img
                    src="../../static/icon/红色警报.svg"
                    style="height: 100px"
                  />
                </span>
              </a-col>
              <a-col :span="11">
                <div style="font-size: 30px; padding-top: 40px" v-show="!alert">
                  报警
                </div>
              </a-col>
            </div>
            <a-col :span="13">
              <div
                v-show="alert"
                style="
                  padding-left: 20px;
                  padding-top: 10px;
                  text-align: center;
                "
              >
                <img src="../../static/icon/未报警.svg" style="height: 100px" />
              </div>
            </a-col>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <a-card
            title="胎温胎压"
            hoverable
            style="height: 300px"
            class="shadow"
          >
            <a slot="extra" @click="open2">更多</a>
            <a-row type="flex" style="height: 60px; font-size: 18px">
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[0].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[0].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[1].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[1].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[2].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[2].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 60px; font-size: 18px">
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[3].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[3].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[4].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[4].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[5].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[5].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 60px; font-size: 18px">
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[6].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[6].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[7].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[7].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[8].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[8].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 60px; font-size: 18px">
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[9].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[9].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[10].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[10].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span>
                    胎温：{{ tireHandleData[11].tireTemp }}°C
                    &nbsp;&nbsp;胎压：{{ tireHandleData[11].tirePress }}bar
                  </span>
                </a-col>
              </a-col>
            </a-row>
          </a-card>
        </a-col>

        <!-- <a-col :span="6">
          <a-card title="冷机" hoverable style="height: 300px" class="shadow">
            <a-col :span="12" style="padding-left: 10px; padding-top: 50px">
              <img src="../../static/icon/制冷(温度计).svg" /> </a-col
            ><a-col :span="12" style="padding-top: 70px">
              <el-input-number
                size="large"
                v-model="num"
                :precision="2"
                :step="0.1"
                :max="100"
                :min="-20"
                style="margin-left: -30px; margin-top: 10px"
              ></el-input-number>
              <p style="padding-left: 0px; padding-top: 17px; font-size: 20px">
                当前温度：{{ num }}°C
              </p>
            </a-col>
          </a-card>
        </a-col> -->
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <a-card
            title="车辆震动曲线图"
            style="height: 300px"
            class="shadow"
            hoverable
          >
            <a slot="extra" @click="open">更多</a>
            <div id="main7" style="height: 200px"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <a-card
            title="皖A2222    行进中（已行驶99km 速度50km/h）"
            style="height: 285px"
            class="shadow"
            hoverable
          >
            <baidu-map
              class="map"
              :center="{ lng: 117.196, lat: 31.774 }"
              :zoom="15"
              :scroll-wheel-zoom="true"
            >
              <bm-marker
                :position="{ lng: coor.lng, lat: coor.lat }"
                :dragging="false"
                animation="BMAP_ANIMATION_BOUNCE"
                :icon="{
                  url: require('../../static/pic/卡车.png'),
                  size: { width: 50, height: 50 },
                }"
              >
              </bm-marker>
              <bm-overview-map
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                :isOpen="true"
              ></bm-overview-map>
            </baidu-map>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div v-show="showPage === '1'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="humiBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>
        <a-tabs
          v-model="humiTabname"
          tab-position="left"
          :default-active-key="humiTabKey"
          @tabClick="tabclick"
        >
          <a-tab-pane
            v-for="(item, index) in sensorList"
            :key="index"
            :tab="item.name"
          >
            <div style="font-size: 26px; font-weight: 600">
              <span>{{ item.name }}</span>
            </div>
            <div style="font-size: 22px; font-weight: 600; line-height: 50px">
              <span>数据最后上传时间：{{ item.date }}</span>
            </div>
            <a-spin tip="正在请求历史数据" :spinning="humiSpinning">
              <div
                id="chart"
                ref="chart"
                style="height: 300px; width: 1450px"
                v-if="humiTabname === index"
              ></div>
            </a-spin>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '3'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="tireBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>
        <a-tabs
          v-model="tireTabname"
          type="card"
          :default-active-key="tireTabKey"
          @tabClick="tabclick1"
        >
          <a-tab-pane
            v-for="(item, index) in tireList"
            :key="index"
            :tab="item.name"
          >
            <div style="font-size: 26px; font-weight: 600; margin-left: 50px">
              <span>{{ item.name }}</span>
            </div>
            <div
              style="
                font-size: 22px;
                font-weight: 600;
                line-height: 50px;
                margin-left: 50px;
              "
            >
              <span>数据最后上传时间：{{ item.date }}</span>
            </div>
            <a-spin tip="正在请求历史数据" :spinning="tireSpinning">
              <div
                id="chart1"
                ref="chart1"
                style="height: 300px; width: 1450px; margin-left: 50px"
                v-if="tireTabname === index"
              ></div>
            </a-spin>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDevice,
  getDeviceData,
  getDeviceHisData,
  changeLight,
} from "@/api/interface";
import * as echarts from "echarts";
export default {
  created() {
    this.getQuery();
    this.getDk();
    // this.refresh();
  },

  mounted() {
    // console.log("1");
  },
  updated() {
    this.drawOil();
  },

  data() {
    return {
      showPage: "0", //初始页面
      humiTabKey: "1", //温湿度tabs初始值
      tireTabKey: "1", //胎温tabs初始值
      humiTabname: 0,
      tireTabname: 0,
      oilData: "70", //油位
      volData: "22", //剩余容积
      capData: "45", //载重量
      door1: true,
      door2: false,
      light1: null,
      defaultChecked: null,
      light2: true,
      light3: true,
      spinning1: false,
      humiSpinning: false,
      tireSpinning: false,
      alert: true,
      // num: "1", //冷机温度
      coor: {
        lng: 117.192,
        lat: 31.771,
      },
      productkey: "", //传递过来的pk
      carNum: "", //传递过来的车牌号
      humiDkList: [],
      humiOriData: [], //温湿度传感数据器原始数组
      humiHandleData: [], //处理完的温湿度数据数组
      doorDkList: [],
      alarmDkList: [],
      tireDkList: [],
      devicerankList: [
        //报警条数排名
        { count: "5", deviceName: "温度传感器3" },
        { count: "2", deviceName: "温度传感器2" },
        { count: "2", deviceName: "温度传感器1" },
        { count: "2", deviceName: "胎温传感器3" },
        { count: "1", deviceName: "胎压传感器8" },
        { count: "1", deviceName: "胎温传感器5" },
        // {count:"9",deviceName:"温度传感器6",},
      ],
      sensorList: [],
      hisStartTime: "",
      hisEndTime: "",
      hisDate: [],
      hisTemp: [],
      hisHumi: [],
      maxtemp: "",
      mintemp: "",
      maxhumi: "",
      minhumi: "",
      hisTireDate: [],
      hisTireTemp: [],
      hisTirePress: [],
      maxtiretemp: "",
      mintiretemp: "",
      maxtirepress: "",
      mintirepress: "",
      hisVibDate: [],
      hisVib: [],

      doorOriData: [],
      doorHandleData: [],

      tireOriData: [],
      tireHandleData: [],
      tireList: [],

      lightOriData: [],
      lightHandleData: [],
    };
  },

  methods: {
    timestampToTime(timestamp) {
      var date = new Date(parseInt(timestamp) * 1000);
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

      // 拼接 时间格式处理
      return (
        year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );

      // return new Date(parseInt(timestamp) * 1000)
      //   .toLocaleString()
      //   .replace(/年|月/g, "-")
      //   .replace(/日/g, " ");
    },
    test() {
      console.log("111");
      this.getQuery();
      this.getDk();
    },
    refresh() {
      //定时器
      setInterval(this.test, 5000);
    },

    getQuery() {
      this.productkey = this.$route.query.pk;
      this.carNum = this.$route.query.carnum;
      console.log(this.productkey);
    },
    async getDk() {
      this.humiDkList = [];
      this.doorDkList = [];
      this.alarmDkList = [];
      this.tireDkList = [];
      const res = await getDevice({
        productKey: this.productkey,
      });
      // console.log("alldk",res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceInfo.length; i++) {
          if (res.data.deviceInfo[i].deviceType == "TempAndHumi") {
            this.humiDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "door") {
            this.doorDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "Alarm") {
            this.alarmDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "TireTempPress") {
            this.tireDkList.push(res.data.deviceInfo[i].deviceKey);
          }
        }
      }
      // console.log(this.humiDkList);
      // console.log(this.doorDkList);
      // console.log("alarmDkList",this.alarmDkList);
      this.getHumiData();
      this.getDoorData();
      this.getAlarmData();
      this.getTireData();
    },
    async getHumiData() {
      this.humiOriData = [];
      this.sensorList = [];
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.humiDkList,
      });
      // console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceData.length; i++) {
          var obj = {
            sensor: res.data.deviceData[i].deviceName,
            temp: res.data.deviceData[i].temp,
            humi: res.data.deviceData[i].humi,
            time: res.data.deviceData[i].time,
            oil: res.data.deviceData[i].oil,
            dk: res.data.deviceData[i].deviceKey,
          };
          this.humiOriData.push(obj);
        }
        // console.log("humiOriData",this.humiOriData);
        this.humiHandleData = JSON.parse(JSON.stringify(this.humiOriData));
        // console.log(this.humiHandleData);
        this.humiHandleData.sort(function (a, b) {
          var sensorA = a.sensor.toUpperCase(); // ignore upper and lowercase
          var sensorB = b.sensor.toUpperCase(); // ignore upper and lowercase
          if (sensorA < sensorB) {
            return -1;
          }
          if (sensorA > sensorB) {
            return 1;
          }
          return 0;
        });
        for (var i = 0; i < this.humiHandleData.length; i++) {
          this.humiHandleData[i].sensor = this.humiHandleData[i].sensor.replace(
            "TH",
            "温湿度节点"
          );
          this.humiHandleData[i].time = this.timestampToTime(
            this.humiHandleData[i].time
          );
          var obj1 = {
            name: this.humiHandleData[i].sensor,
            date: this.humiHandleData[i].time,
            dk: this.humiHandleData[i].dk,
          };
          this.sensorList.push(obj1);
        }
        console.log("humiHandleData", this.humiHandleData);
        // console.log(this.sensorList);
        this.getVibData();
      }
    },
    async getDoorData() {
      this.doorOriData = [];
      this.lightOriData = [];
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.doorDkList,
      });
      // console.log("door",res);
      if (res.code == 200) {
        this.lightOriData = res.data.deviceData[0].electrical;
        switch (this.lightOriData[0]) {
          case 0:
            this.light1 = false;
            this.defaultChecked = false;
            break;
          case 1:
            this.light1 = true;
            this.defaultChecked = true;
            break;
        }
        for (var i = 0; i < res.data.deviceData.length; i++) {
          var obj = {
            doorName: res.data.deviceData[i].deviceName,
            state: res.data.deviceData[i].door,
            date: res.data.deviceData[i].date,
            dk: res.data.deviceData[i].deviceKey,
          };
          this.doorOriData.push(obj);
        }
        // console.log("doorOriData",this.doorOriData);
        console.log("lightOriData", this.lightOriData);
        console.log("light1", this.light1);
        console.log("defaultChecked", this.defaultChecked);
        this.doorHandleData = JSON.parse(JSON.stringify(this.doorOriData));
        // console.log("doorHandleData",this.doorHandleData);
        this.doorHandleData.sort(function (a, b) {
          var doorA = a.doorName.toUpperCase(); // ignore upper and lowercase
          var doorB = b.doorName.toUpperCase(); // ignore upper and lowercase
          if (doorA < doorB) {
            return -1;
          }
          if (doorA > doorB) {
            return 1;
          }
          return 0;
        });
        console.log("doorHandleData", this.doorHandleData);
        this.door1 = this.doorHandleData[0].state.door_1;
        this.door2 = this.doorHandleData[1].state.door_2;
        // console.log(this.door1);
        // console.log(this.door2);
      }
    },
    async getAlarmData() {
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.alarmDkList,
      });
      // console.log("alarm",res);
      this.alert = res.data.deviceData[0].alarm;
      console.log("alert", this.alert);
    },
    async getTireData() {
      this.tireOriData = [];
      this.tireList = [];
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.tireDkList,
      });
      // console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceData.length; i++) {
          var obj = {
            tire: res.data.deviceData[i].deviceName,
            tirePress: res.data.deviceData[i].tirePress,
            tireTemp: res.data.deviceData[i].tireTemp,
            time: res.data.deviceData[i].date,
            dk: res.data.deviceData[i].deviceKey,
          };
          this.tireOriData.push(obj);
        }
        // console.log("tireOriData",this.tireOriData);
        this.tireHandleData = JSON.parse(JSON.stringify(this.tireOriData));
        this.tireHandleData.sort(function (a, b) {
          var tireA = a.tire.toUpperCase(); // ignore upper and lowercase
          var tireB = b.tire.toUpperCase(); // ignore upper and lowercase
          if (tireA < tireB) {
            return -1;
          }
          if (tireA > tireB) {
            return 1;
          }
          return 0;
        });
        for (var i = 0; i < this.tireHandleData.length; i++) {
          this.tireHandleData[i].tire = "胎" + (i + 1);
          var obj1 = {
            name: this.tireHandleData[i].tire,
            date: this.tireHandleData[i].time,
            dk: this.tireHandleData[i].dk,
          };
          this.tireList.push(obj1);
        }
        console.log("tireHandleData", this.tireHandleData);
        // console.log("tireList", this.tireList);
      }
    },
    async getVibData() {
      this.hisVibDate = [];
      this.hisVib = [];
      this.hisEndTime = Date.parse(new Date()) / 1000;
      const res = await getDeviceHisData({
        deviceKey: this.humiHandleData[1].dk,
        startTime: this.hisEndTime - 60 * 86400, //86400
        endTime: this.hisEndTime,
      });
      // console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceData.length; i++) {
          this.hisVibDate.push(res.data.deviceData[i].date);
          var value =
            res.data.deviceData[i].acc.X +
            res.data.deviceData[i].acc.Y +
            res.data.deviceData[i].acc.Z;
          this.hisVib.push(value);
        }
        console.log("hisVibDate", this.hisVibDate);
        console.log("hisVib", this.hisVib);
        this.drawVib();
      }
    },

    drawOil() {
      // console.log("2");
      //油位图
      // const liquidPlot = new Liquid(document.getElementById("oil"), {
      //   title: {
      //     visible: true,
      //     text: "当前油位",
      //   },
      //   width: 250,
      //   height: 300,
      //   min: 0,
      //   max: 100,
      //   value: 30,
      //   liquidStyle: {
      //     fill: "#000000",
      //     stroke: "#999999",
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
                  [0.3, "#f04864"],
                  [1, "#1890ff"],
                ],
              },
            },
            pointer: {
              // 仪表盘指针
              length: "80%",
              width: 10,
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
                width: 3,
              },
            },
            axisLabel: {
              // 刻度标签。
              color: "auto",
              distance: 2,
              fontSize: 15,
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              valueAnimation: true,
              formatter: "{value} %",
              color: "auto",
              fontSize: 30,
            },
            data: [
              {
                value: this.humiOriData[0].oil,
                name: "当前油位",
                fontSize: 30,
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },

    hisTem1() {
      console.log(this.sensorList);
      this.humiTabKey = "1";
      this.showPage = "1";
      this.humiSpinning = true;
      this.hisEndTime = Date.parse(new Date()) / 1000;

      getDeviceHisData({
        deviceKey: this.humiHandleData[0].dk,
        startTime: this.hisEndTime - 4 * 86400, //86400
        endTime: this.hisEndTime,
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisDate.push(res.data.deviceData[i].date);
            this.hisTemp.push(res.data.deviceData[i].temp);
            this.hisHumi.push(res.data.deviceData[i].humi);
          }
        }
        console.log(this.hisDate);
        console.log(this.hisTemp);
        console.log(this.hisHumi);
        this.maxtemp = Math.max.apply(null, this.hisTemp);
        this.mintemp = Math.min.apply(null, this.hisTemp);
        // console.log(this.maxtemp,this.mintemp);
        this.maxhumi = Math.max.apply(null, this.hisHumi);
        this.minhumi = Math.min.apply(null, this.hisHumi);
        // console.log(this.maxhumi,this.minhumi);
        this.drawHumi();
        this.humiSpinning = false;
        // console.log("1");
      });
    },

    humiBack() {
      this.showPage = "0";
      this.humiTabKey = "1";
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
      // console.log(this.showPage);
    },

    hisTire() {
      // this.showPage = "3";
      console.log("tireList", this.tireList);
      this.tireTabKey = "1";
      this.showPage = "3";
      this.tireSpinning = true;
      this.hisEndTime = Date.parse(new Date()) / 1000;

      getDeviceHisData({
        deviceKey: this.tireHandleData[0].dk,
        startTime: this.hisEndTime - 10 * 86400, //86400
        endTime: this.hisEndTime,
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisTireDate.push(res.data.deviceData[i].date);
            this.hisTireTemp.push(res.data.deviceData[i].tireTemp);
            this.hisTirePress.push(res.data.deviceData[i].tirePress);
          }
        }
        console.log(this.hisTireDate);
        console.log(this.hisTireTemp);
        console.log(this.hisTirePress);
        this.maxtiretemp = Math.max.apply(null, this.hisTireTemp);
        this.mintiretemp = Math.min.apply(null, this.hisTireTemp);
        // console.log(this.maxtiretemp,this.mintiretemp);
        this.maxtirepress = Math.max.apply(null, this.hisTirePress);
        this.mintirepress = Math.min.apply(null, this.hisTirePress);
        // console.log(this.maxtirepress,this.mintirepress);
        this.drawTyre();
        this.tireSpinning = false;
        // console.log("1");
      });
    },

    tireBack() {
      this.showPage = "0";
      this.tireTabKey = "1";
      this.hisTireDate = [];
      this.hisTireTemp = [];
      this.hisTirePress = [];
      // console.log(this.showPage);
    },

    changeLight1(checked) {
      // console.log(checked, this.productkey);
      this.spinning1 = true;
      if (checked === true) {
        console.log("正在开灯");
        let data1 = {
          productKey: this.productkey,
          checkCode: "EFEFEF0101CF",
        };
        changeLight(data1).then((res) => {
          // console.log("开灯结果", res);
          if (res.code == 200) {
            getDeviceData({
              productKey: this.productkey,
              deviceKeyList: this.doorDkList,
            }).then((res) => {
              // console.log(res);
              if (res.code == 200) {
                this.lightOriData = res.data.deviceData[0].electrical;
                switch (this.lightOriData[0]) {
                  case 0:
                    this.light1 = false;
                    this.defaultChecked = false;
                    break;
                  case 1:
                    this.light1 = true;
                    this.defaultChecked = true;
                    break;
                }
                console.log("light1", this.light1);
                console.log("defaultChecked", this.defaultChecked);
                this.spinning1 = false;
              }
            });
          }
        });
      } else {
        console.log("正在关灯");
        let data2 = {
          productKey: this.productkey,
          checkCode: "EFEFEF0100CE",
        };
        changeLight(data2).then((res) => {
          // console.log("关灯结果", res);
          if (res.code == 200) {
            getDeviceData({
              productKey: this.productkey,
              deviceKeyList: this.doorDkList,
            }).then((res) => {
              // console.log(res);
              if (res.code == 200) {
                this.lightOriData = res.data.deviceData[0].electrical;
                switch (this.lightOriData[0]) {
                  case 0:
                    this.light1 = false;
                    this.defaultChecked = false;
                    break;
                  case 1:
                    this.light1 = true;
                    this.defaultChecked = true;
                    break;
                }
                console.log("light1", this.light1);
                console.log("defaultChecked", this.defaultChecked);
                this.spinning1 = false;
              }
            });
          }
        });
      }
      // this.light1 = !this.light1;
    },

    tabclick(e) {
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
      this.humiTabname = e;
      // console.log(e);
      // console.log(this.sensorList[e].dk);
      this.humiSpinning = true;
      getDeviceHisData({
        deviceKey: this.sensorList[e].dk,
        startTime: this.hisEndTime - 4 * 86400, //86400
        endTime: this.hisEndTime,
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisDate.push(res.data.deviceData[i].date);
            this.hisTemp.push(res.data.deviceData[i].temp);
            this.hisHumi.push(res.data.deviceData[i].humi);
          }
        }
        console.log(this.hisDate);
        console.log(this.hisTemp);
        console.log(this.hisHumi);
        this.maxtemp = Math.max.apply(null, this.hisTemp);
        this.mintemp = Math.min.apply(null, this.hisTemp);
        // console.log(this.maxtemp,this.mintemp);
        this.maxhumi = Math.max.apply(null, this.hisHumi);
        this.minhumi = Math.min.apply(null, this.hisHumi);
        // console.log(this.maxhumi,this.minhumi);
        this.$nextTick(() => {
          this.drawHumi();
          this.humiSpinning = false;
        });
      });
    },
    tabclick1(e) {
      this.hisTireDate = [];
      this.hisTireTemp = [];
      this.hisTirePress = [];
      this.tireTabname = e;
      this.tireSpinning = true;

      getDeviceHisData({
        deviceKey: this.tireHandleData[0].dk,
        startTime: this.hisEndTime - 10 * 86400, //86400
        endTime: this.hisEndTime,
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisTireDate.push(res.data.deviceData[i].date);
            this.hisTireTemp.push(res.data.deviceData[i].tireTemp);
            this.hisTirePress.push(res.data.deviceData[i].tirePress);
          }
        }
        console.log(this.hisTireDate);
        console.log(this.hisTireTemp);
        console.log(this.hisTirePress);
        this.maxtiretemp = Math.max.apply(null, this.hisTireTemp);
        this.mintiretemp = Math.min.apply(null, this.hisTireTemp);
        // console.log(this.maxtiretemp,this.mintiretemp);
        this.maxtirepress = Math.max.apply(null, this.hisTirePress);
        this.mintirepress = Math.min.apply(null, this.hisTirePress);
        // console.log(this.maxtirepress,this.mintirepress);
        this.drawTyre();
        this.tireSpinning = false;
        // console.log("1");
      });
    },
    drawHumi() {
      // console.log(this.humiTabKey);
      //温湿度历史数据图
      var myChart = echarts.init(document.getElementById("chart"));
      var colors = ["#7cb305", "#1890ff"];
      var option = {
        color: colors,
        title: {
          text: "温湿度历史数据",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          data: ["温度", "湿度"],
          left: 80,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //横轴顶格
          data: this.hisDate,
        },
        yAxis: [
          {
            type: "value",
            name: "温度",
            min: this.mintemp - 2,
            max: this.maxtemp + 2,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value} ℃",
            },
          },
          {
            type: "value",
            name: "湿度",
            min: this.minhumi - 2,
            max: this.maxhumi + 2,
            position: "right",
            offset: 6,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        series: [
          {
            name: "温度",
            type: "line",
            // stack: "总量",
            data: this.hisTemp,
          },
          {
            name: "湿度",
            type: "line",
            yAxisIndex: 1, //解决了左右y轴相同刻度，选定哪条y
            // stack: "总量",
            data: this.hisHumi,
          },
        ],
      };
      option && myChart.setOption(option);
    },
    drawTyre() {
      //轮胎历史数据
      var myChart = echarts.init(document.getElementById("chart1"));
      var colors = ["#5470C6", "#91CC75"];
      var option = {
        color: colors,
        title: {
          text: "胎温胎压历史数据",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          data: ["胎温", "胎压"],
          left: 80,
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          data: this.hisTireDate,
        },
        yAxis: [
          {
            type: "value",
            name: "胎温",
            min: this.mintiretemp - 2,
            max: this.maxtiretemp + 2,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value}°C",
            },
          },
          {
            type: "value",
            name: "胎压",
            min: this.mintirepress - 100,
            max: this.maxtirepress + 100,
            position: "right",
            offset: 6,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            axisLabel: {
              formatter: "{value}bar",
            },
          },
        ],

        series: [
          {
            name: "胎温",
            type: "line",
            color: colors[0],
            data: this.hisTireTemp,
          },
          {
            name: "胎压",
            type: "line",
            color: colors[1],
            yAxisIndex: 1,
            data: this.hisTirePress,
          },
        ],
      };
      option && myChart.setOption(option);
    },

    drawVib() {
      //详情页震动图
      var myChart = echarts.init(document.getElementById("main7"));
      // var myChart = echarts.init(this.$refs.main);
      var colors = ["#5470C6"];
      var option = {
        color: colors,
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          data: this.hisVibDate,
        },
        yAxis: [
          {
            type: "value",
            name: "震动值",
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],

        series: [
          {
            name: "震动值",
            type: "line",
            color: colors[0],
            data: this.hisVib,
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

    show() {
      // this.showPage = "2";
      console.log("1111");
    },
    showdoor() {
      // this.showPage = "4";
      console.log("2222");
    },
  },
};
</script>

<style lang="less" scope>
.ant-card-body {
  padding: 10px 10px;
  /* background: black; */
}
.card {
  margin: 3px;
}

.shadow {
  box-shadow: 5px 5px 5px #e2e1e1;
  border-radius: 10px;
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
    font-size: 20px;
    width: 50px;
    font-weight: bold;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -30px 10px 10px 90px;
    // background: black;
  }
}
.sensor2 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 200px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 20px;
    width: 50px;
    font-weight: bold;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -30px 10px 10px 90px;
    // background: black;
  }
}
.sensor3 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 400px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -30px 10px 10px 90px;
    // background: black;
  }
}
.sensor4 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 600px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -30px 10px 10px 90px;
    // background: black;
  }
}
.carriage {
  // background: rgb(230, 223, 223);
  margin: 0px 5px 15px 0px;
  width: 705px;
  height: 150px;
  .img {
    margin: 0px 0px 0px 40px;
  }
}
.sensor5 {
  // background: rgb(230, 223, 223);
  margin: 15px 5px 15px 5px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -50px 10px 10px 90px;
    // background: black;
  }
}
.sensor6 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 200px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -50px 10px 10px 90px;
    // background: black;
  }
}
.sensor7 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 400px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -50px 10px 10px 90px;
    // background: black;
  }
}
.sensor8 {
  // background: rgb(230, 223, 223);
  margin: -65px 5px 15px 600px;
  width: 100px;
  height: 50px;
  .left {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    // background: black;
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    margin: -50px 10px 10px 90px;
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
  height: 350px;
  margin-top: -20px;
  // margin: -10px 0px 0px 60px;
}
.map {
  width: 100%;
  height: 227px;
  margin: -10px 0px 0px -10px;
}
</style>
