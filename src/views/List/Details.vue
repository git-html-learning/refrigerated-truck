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
              <div class="left" @click="hisTem1">{{ handleData[0].temp }}℃</div>
              <div class="right" @click="hisHum1">
                {{ handleData[0].humi }}%
              </div>
            </div>
            <div class="sensor2">
              <p style="margin: 0 0 0 0">监测点2</p>
              <div class="left" @click="hisTem2">{{ handleData[1].temp }}℃</div>
              <div class="right" @click="hisHum2">
                {{ handleData[1].humi }}%
              </div>
            </div>
            <div class="sensor3">
              <p style="margin: 0 0 0 0">监测点3</p>
              <div class="left" @click="hisTem3">{{ handleData[2].temp }}℃</div>
              <div class="right" @click="hisHum3">
                {{ handleData[2].humi }}%
              </div>
            </div>
            <div class="sensor4">
              <p style="margin: 0 0 0 0">监测点4</p>
              <div class="left" @click="hisTem4">{{ handleData[3].temp }}℃</div>
              <div class="right" @click="hisHum4">
                {{ handleData[3].humi }}%
              </div>
            </div>
            <div class="carriage">
              <img src="../../static/pic/carriage.png" class="img" />
              <!-- <img width="32" src="../static/pic/honen.png" /> -->
            </div>
            <div class="sensor5">
              <p style="margin: 0 0 0 0">监测点5</p>
              <p class="left" @click="hisTem5">{{ handleData[4].temp }}℃</p>
              <p class="right" @click="hisHum5">{{ handleData[4].humi }}%</p>
            </div>
            <div class="sensor6">
              <p style="margin: 0 0 0 0">监测点6</p>
              <p class="left" @click="hisTem6">{{ handleData[5].temp }}℃</p>
              <p class="right" @click="hisHum6">{{ handleData[5].humi }}%</p>
            </div>
            <div class="sensor7">
              <p style="margin: 0 0 0 0">监测点7</p>
              <p class="left" @click="hisTem7">{{ handleData[6].temp }}℃</p>
              <p class="right" @click="hisHum7">{{ handleData[6].humi }}%</p>
            </div>
            <!-- <div class="sensor8">
              <p style="margin: 0 0 0 0">监测点8</p>
              <p class="left" @click="hisTem8">{{ humiData[6].temp }}</p>
              <p class="right" @click="hisHum8">{{ humiData[6].humi }}</p>
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
            <div id="vol" class="vol"></div>
            <div id="cap" class="cap"></div>
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
                <p>&nbsp;&nbsp;门1</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="door1 = !door1"
                />
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
                <p>&nbsp;&nbsp;门2</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="door2 = !door2"
                />
              </div>
            </a-col>
          </a-card>
        </a-col>

        <a-col :span="9">
          <a-card title="灯开关" style="height: 220px" class="shadow" hoverable>
            <a slot="extra" @click="show()">更多</a>
            <a-col :span="8" style="text-align: center">
              <div>
                <p v-show="light1">
                  <img src="../../static/icon/开灯.svg" />
                </p>
                <p v-show="!light1">
                  <img src="../../static/icon/关灯.svg" />
                </p>
                <p>照明灯</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="light1 = !light1"
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
            <div v-show="alert">
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
                    @click="alert = !alert"
                  />
                </span>
              </a-col>
              <a-col :span="11">
                <div style="font-size: 30px; padding-top: 40px">报警</div>
              </a-col>
            </div>
            <a-col :span="13">
              <div
                v-show="!alert"
                style="
                  padding-left: 20px;
                  padding-top: 10px;
                  text-align: center;
                "
              >
                <img
                  src="../../static/icon/未报警.svg"
                  style="height: 100px"
                  @click="alert = !alert"
                />
              </div>
            </a-col>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="18">
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
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50.23°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 60px; font-size: 18px">
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 60px; font-size: 18px">
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 60px; font-size: 18px">
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="8" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="more1()" />
                </a-col>
                <a-col :span="16" style="padding-top: 4px; font-weight: bold">
                  <span> 胎温：50°C &nbsp;&nbsp;胎压：5bar </span>
                </a-col>
              </a-col>
            </a-row>
          </a-card>
        </a-col>

        <a-col :span="6">
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
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="12">
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

        <a-col :span="12">
          <a-card
            title="车辆震动曲线图"
            style="height: 285px"
            class="shadow"
            hoverable
          >
            <a slot="extra" @click="open">更多</a>
            <div id="main7" style="height: 200px"></div>
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
        <a-tabs
          v-model="tabname"
          tab-position="left"
          :default-active-key="tabKey"
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
            <div
              id="chart"
              ref="chart"
              style="height: 300px; width: 1450px"
              v-if="tabname === index"
            ></div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '2'">
      <div class="home1">
        <i
          class="iconfont icon-ai207"
          @click="back()"
          style="fontsize: 30px; padding: 0px 0px 0px 10px; align: left"
        ></i>
        <a-tabs size="large">
          <a-tab-pane key="1" tab="照明灯">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              照明灯
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <div id="main1" style="padding-left: 20px; height: 250px"></div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="杀菌灯">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              杀菌灯
            </h1>
            <h3 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h3>
            <br /><br /><br />
            <div id="main2" style="padding-left: 20px; height: 250px"></div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="其它">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              其它
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <div id="main3" style="padding-left: 20px; height: 250px"></div
          ></a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '3'">
      <div class="home1">
        <i
          class="iconfont icon-ai207"
          @click="back()"
          style="fontsize: 30px; padding: 0px 0px 0px 10px; align: left"
        ></i
        ><br />
        <a-tabs
          size="large"
          style="height: 800px; padding-left: 20px; padding-top: 10px"
        >
          <a-tab-pane key="1" tab="胎1">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎1
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <div id="chart1" style="height: 350px; width: 1450px"></div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="胎2">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎2
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="3" tab="胎3">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎3
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="4" tab="胎4">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎4
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="5" tab="胎5">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎5
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="6" tab="胎6">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎6
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="7" tab="胎7">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎7
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="8" tab="胎8">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎8
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="9" tab="胎9">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎9
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="10" tab="胎10">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎10
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="11" tab="胎11">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎11
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
          <a-tab-pane key="12" tab="胎12">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              胎12
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <br /><br /><br />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '4'">
      <div class="home1">
        <i
          class="iconfont icon-ai207"
          @click="back()"
          style="fontsize: 30px; padding: 0px 0px 0px 10px; align: left"
        ></i
        ><br />
        <a-tabs default-active-key="1" size="large">
          <a-tab-pane key="1" tab="门 1">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              门 1
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <div id="main2" style="padding-left: 20px; height: 250px"></div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="门 2" force-render>
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              门 2
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <div id="main2" style="padding-left: 20px; height: 250px"></div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="门 3">
            <h1 style="font-size: 30px; padding-top: 30px; padding-left: 30px">
              门 3
            </h1>
            <h2 style="font-size: 22px; padding-left: 30px">
              更新时间：2021-03-20 20:11:00
            </h2>
            <br /><br /><br />
            <div id="main2" style="padding-left: 20px; height: 250px"></div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { getDevice, getDeviceData, getDeviceHisData } from "@/api/interface";
import * as echarts from "echarts";
import { Liquid, Gauge, Line, Area } from "@antv/g2plot";
export default {
  created() {
    this.getQuery();
    this.getDk();
  },

  mounted() {
    // console.log("1");
    // this.drawOil();
    // this.drawVol();
    // this.drawCap();
    // this.drawVib();
  },
  updated() {
    this.drawOil();
    // this.drawVol();

    // this.drawCap();
    // this.drawVib();
  },

  data() {
    return {
      showPage: "0", //初始页面
      tabKey: "1", //温湿度tabs初始值
      tabname: 0,
      oilData: "70", //油位
      volData: "22", //剩余容积
      capData: "45", //载重量
      door1: true,
      door2: true,
      light1: true,
      light2: true,
      light3: true,
      alert: true,
      num: "1", //冷机温度
      coor: {
        lng: 117.192,
        lat: 31.771,
      },
      productkey: "", //传递过来的pk
      carNum: "", //传递过来的车牌号
      humiDkList: [],
      humiData: [],
      handleData: [], //处理温湿度中间过渡
      doorDkList: [],
      sensorList: [],
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
      hisStartTime: "",
      hisEndTime: "",
      hisDate: [],
      hisTemp: [],
      hisHumi: [],

      data7: [
        { time: "00：00", num: 0 },
        { time: "01：45", num: 0 },
        { time: "03：30", num: 2 },
        { time: "05：15", num: 3 },
        { time: "07：00", num: 2 },
        { time: "08：45", num: 4.9 },
        { time: "10：30", num: 2 },
        { time: "11：15", num: 3 },
        { time: "13：00", num: 1.1 },
        { time: "15：45", num: 3 },
        { time: "17：30", num: 0.9 },
        { time: "19：15", num: 0.5 },
        { time: "21：00", num: 1 },
        { time: "23：15", num: 0.9 },
      ],

      data01: [],
      data02: [],
      maxtemp:"",
      mintemp:"",
      maxhumi:"",
      minhumi:"",
      // data011: [
      //   {
      //     name: 1,
      //     temp: [12, 13, 10, 13, 9, 23, 21, 12, 13, 10, 13, 9],
      //     humi: [22, 18, 19, 23, 29, 55, 21],
      //   },
      //   {
      //     name: 2,
      //     temp: [12, 13, 10, 13, 9, 23, 21],
      //     humi: [22, 18, 19, 23, 29, 55, 51],
      //   },
      //   {
      //     name: 3,
      //     temp: [12, 23, 10, 13, 9, 23, 21],
      //     humi: [22, 38, 19, 23, 29, 55, 21],
      //   },
      //   {
      //     name: 4,
      //     temp: [22, 18, 19, 23, 29, 25, 21],
      //     humi: [22, 18, 19, 23, 29, 25, 21],
      //   },
      //   {
      //     name: 5,
      //     temp: [13, 18, 19, 23, 29, 25, 21],
      //     humi: [22, 18, 29, 23, 29, 55, 21],
      //   },
      //   {
      //     name: 6,
      //     temp: [8, 18, 19, 23, 29, 25, 21],
      //     humi: [2, 18, 19, 23, 29, 55, 21],
      //   },
      //   {
      //     name: 7,
      //     temp: [9, 18, 19, 23, 29, 25, 21],
      //     humi: [22, 18, 19, 53, 29, 55, 21],
      //   },
      // ],



      data03: [
        12, 13, 10, 13, 9, 23, 33, 45, 55, 60, 77, 56, 57, 43, 26, 19, 25, 23,
        29, 25, 21,
      ], // 胎温
      data04: [
        8, 18, 19, 23, 29, 25, 21, 8, 9, 18, 6, 7, 11, 9, 16, 8, 17, 9, 32, 18,
        19, 43,
      ], // 胎压

      data1: [
        { time: "00:00", value: 0 },
        { time: "02:00", value: 1 },
        { time: "04:00", value: 1 },
        { time: "06:00", value: 1 },
        { time: "08:00", value: 1 },
        { time: "10:00", value: 0 },
        { time: "12:00", value: 0 },
        { time: "14:00", value: 0 },
        { time: "16:00", value: 0 },
        { time: "18:00", value: 1 },
        { time: "20:00", value: 1 },
        { time: "22:00", value: 1 },
        { time: "24:00", value: 1 },
      ],
      data2: [
        { time: "00:00", value: 0 },
        { time: "02:00", value: 0 },
        { time: "04:00", value: 0 },
        { time: "06:00", value: 1 },
        { time: "08:00", value: 1 },
        { time: "10:00", value: 1 },
        { time: "12:00", value: 1 },
        { time: "14:00", value: 1 },
        { time: "16:00", value: 1 },
        { time: "18:00", value: 1 },
        { time: "20:00", value: 1 },
        { time: "22:00", value: 1 },
        { time: "24:00", value: 1 },
      ],
      data3: [
        { time: "00:00", value: 0 },
        { time: "02:00", value: 1 },
        { time: "04:00", value: 1 },
        { time: "06:00", value: 1 },
        { time: "08:00", value: 1 },
        { time: "10:00", value: 0 },
        { time: "12:00", value: 1 },
        { time: "14:00", value: 1 },
        { time: "16:00", value: 1 },
        { time: "18:00", value: 1 },
        { time: "20:00", value: 1 },
        { time: "22:00", value: 1 },
        { time: "24:00", value: 1 },
      ],
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

    getQuery() {
      this.productkey = this.$route.query.pk;
      this.carNum = this.$route.query.carnum;
      console.log(this.productkey);
    },
    async getDk() {
      const res = await getDevice({
        productKey: this.productkey,
      });
      // console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceInfo.length; i++) {
          if (res.data.deviceInfo[i].deviceType == "TempAndHumi") {
            this.humiDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "door") {
            this.doorDkList.push(res.data.deviceInfo[i].deviceKey);
          }
        }
      }
      // console.log(this.humiDkList);
      // console.log(this.doorDkList);
      this.getHumiData();
    },
    async getHumiData() {
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
          this.humiData.push(obj);
        }
        // console.log(this.humiData);
        this.handleData = JSON.parse(JSON.stringify(this.humiData));
        // console.log(this.handleData);
        this.handleData.sort(function (a, b) {
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
        // console.log(this.handleData);
        for (var i = 0; i < this.handleData.length; i++) {
          this.handleData[i].sensor = this.handleData[i].sensor.replace(
            "TH",
            "温湿度节点"
          );
          this.handleData[i].time = this.timestampToTime(
            this.handleData[i].time
          );
          var obj1 = {
            name: this.handleData[i].sensor,
            date: this.handleData[i].time,
            dk: this.handleData[i].dk,
          };
          this.sensorList.push(obj1);
        }
        // console.log(this.handleData);
        // console.log(this.sensorList);
      }
    },

    hisTem1() {
      console.log(this.sensorList);
      this.tabKey = "1";
      this.showPage = "1";
      this.hisEndTime = Date.parse(new Date()) / 1000;

      getDeviceHisData({
        deviceKey: this.handleData[0].dk,
        startTime: this.hisEndTime - 8 * 12800, //86400
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
        this.maxtemp=Math.max.apply(null, this.hisTemp)
        this.mintemp=Math.min.apply(null, this.hisTemp)
        // console.log(this.maxtemp,this.mintemp);
        this.maxhumi=Math.max.apply(null, this.hisHumi)
        this.minhumi=Math.min.apply(null, this.hisHumi)
        // console.log(this.maxhumi,this.minhumi);
        this.data01 = this.hisTemp;
        this.data02 = this.hisHumi;
        this.draw();
      });
    },

    hisHum1() {
      console.log("h1");
    },
    hisTem2() {
      console.log("t2");
      this.tabKey = "1";
      this.showPage = "1";
      console.log(this.tabKey);
      this.draw();
    },
    hisHum2() {
      console.log("h2");
      this.showPage = "1";
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
      this.tabKey = "";
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
      // console.log(this.showPage);
    },

    tabclick(e) {
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
      this.tabname = e;
      console.log(e);
      console.log(this.sensorList[e].dk);
      getDeviceHisData({
        deviceKey: this.sensorList[e].dk,
        startTime: this.hisEndTime - 8 * 12800, //86400
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
        this.maxtemp=Math.max.apply(null, this.hisTemp)
        this.mintemp=Math.min.apply(null, this.hisTemp)
        // console.log(this.maxtemp,this.mintemp);
        this.maxhumi=Math.max.apply(null, this.hisHumi)
        this.minhumi=Math.min.apply(null, this.hisHumi)
        // console.log(this.maxhumi,this.minhumi);
        this.data01 = this.hisTemp;
        this.data02 = this.hisHumi;
        this.$nextTick(() => {
          this.draw();
        });
      });
      // this.data01 = this.data011[e].temp;
      // this.data02 = this.data011[e].humi;
      // this.$nextTick(() => {
      //   this.draw();
      // });
    },
    draw() {
      // console.log(this.tabKey);
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
            min: this.mintemp-2,
            max: this.maxtemp+2,
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
            min: this.minhumi-2,
            max: this.maxhumi+2,
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
            data: this.data01,
          },
          {
            name: "湿度",
            type: "line",
            yAxisIndex: 1, //解决了左右y轴相同刻度，选定哪条y
            // stack: "总量",
            data: this.data02,
          },
        ],
      };
      option && myChart.setOption(option);
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
                value: this.humiData[0].oil,
                name: "当前油位",
                fontSize: 30,
              },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },

    drawVol() {
      //剩余容积图
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
                  [0.3, "#f04864"],
                  [1, "#1890ff"],
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

    drawCap() {
      //载重量图
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
                  [0.7, "#1890ff"],
                  [1, "#f04864"],
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

    more1() {
      this.showPage = "3";
      this.drawTyre1();
    },
    show() {
      this.showPage = "2";
    },
    showdoor() {
      this.showPage = "4";
    },

    tu1() {
      //照明灯图
      const linePlot = new Line("main1", {
        data: this.data1,
        padding: "auto",
        xField: "time",
        yField: "value",
        stepType: "vh",
      });
      linePlot.render();
    },
    tu2() {
      //杀菌灯图
      const linePlot = new Line("main2", {
        data: this.data2,
        xField: "time",
        yField: "value",
        stepType: "vh",
      });
      linePlot.render();
    },
    tu3() {
      //其它
      const linePlot = new Line("main3", {
        data: this.data3,
        padding: "auto",
        xField: "time",
        yField: "value",
        stepType: "vh",
      });
      linePlot.render();
    },

    drawVib() {
      //详情页震动图
      const linePlot = new Line("main7", {
        data: this.data7,
        xField: "time",
        yField: "num",
        yAxis: {
          min: 0,
          max: 5,
        },
        meta: {
          time: {
            alias: " ",
          },
          num: {
            alias: "g",
          },
        },
      });
      linePlot.render();
    },
    drawTyre1() {
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
        yAxis: [
          {
            type: "value",
            name: "胎温",
            min: 0,
            max: 100,
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
            min: 0,
            max: 50,
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
            data: this.data03,
          },
          {
            name: "胎压",
            type: "line",
            color: colors[1],
            yAxisIndex: 1,
            data: this.data04,
          },
        ],
      };
      option && myChart.setOption(option);
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
.map {
  width: 102%;
  height: 227px;
  margin: -10px 0px 0px -10px;
}
</style>
