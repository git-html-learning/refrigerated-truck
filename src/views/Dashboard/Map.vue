<template>
  <div>
    <div style="height: 40px; background: rgb(53, 62, 67)">
      <a-row>
        <a-col :span="2">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
            "
          >
            全部车辆 &nbsp;<span style="color: white; font-size: 24px">1</span>
          </div>
        </a-col>
        <a-col :span="2">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
            "
          >
            行驶 &nbsp;
            <span style="color: rgb(83, 189, 119); font-size: 24px">0</span>
          </div>
        </a-col>
        <a-col :span="2">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
            "
          >
            静止 &nbsp;
            <span style="color: rgb(251, 178, 7); font-size: 24px">1</span>
          </div>
        </a-col>
        <a-col :span="2">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
            "
          >
            离线 &nbsp; <span style="color: red; font-size: 24px">0</span>
          </div>
        </a-col>
        <a-col :span="2">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
            "
          >
            其他 &nbsp; <span style="color: grey; font-size: 24px">0</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="home">
      <baidu-map
        class="map"
        :center="{ lng: lg, lat: lt }"
        :zoom="12"
        :scroll-wheel-zoom="true"
      >
        <bm-map-type
          :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_TOP_LEFT"
        ></bm-map-type>
        <bm-marker
          v-for="(item, index) in markers"
          :key="index"
          :position="{ lng: markers[index].lng, lat: markers[index].lat }"
          @click="lookDetail(item)"
          :dragging="false"
          animation="BMAP_ANIMATION_BOUNCE"
          :icon="{
            url: require('../../static/pic/卡车.png'),
            size: { width: 50, height: 50 },
          }"
        >
          <!-- :icon="{url: 'http://pic95.huitu.com/res/20170428/851091_20170428215847978040_1.jpg', size: {width: 62, height: 62}}" -->
          <!-- <bm-label content="安徽大学" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
        </bm-marker>
        <bm-info-window
          :position="position"
          :show="showFlag"
          @close="infoWindowClose()"
          @open="infoWindowOpen()"
          :width="300"
          :height="150"
        >
          <div>
            <!-- <p>{{ "更新时间：&nbsp;&nbsp;" + time }}</p> -->
            <!-- <p>{{ "当前速度：&nbsp;&nbsp;" + speed }}</p> -->
            <a-descriptions :title="title" :column="1">
              <a-descriptions-item label="更新时间">
                {{ this.time }}
              </a-descriptions-item>
              <a-descriptions-item label="经度">
                {{ this.position.lng }}
              </a-descriptions-item>
              <a-descriptions-item label="纬度">
                {{ this.position.lat }}
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </bm-info-window>
        <bm-overview-map
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :isOpen="true"
        ></bm-overview-map>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import { product, getDevice, getDeviceData } from "@/api/interface";

export default {
  created() {
    // console.log(this.markers.lng);
    this.getPk();
  },

  data() {
    return {
      lg: "117.19349661992",
      lt: "31.775350050341", //地图中心
      title: "",
      position: {},
      showFlag: false,
      time: "",
      speed: "", //详情窗口信息

      markers: [],
      // markers: [
      //   {
      //     lng: 117.10856343,
      //     lat: 31.46304981,
      //     number: "皖A11111",
      //     updateTime: "2021-03-24 13:14",
      //     speed: "78Km/h",
      //   },
      //   {
      //     lng: 117.092,
      //     lat: 31.671,
      //     number: "皖A22222",
      //     updateTime: "2021-03-24 13:16",
      //     speed: "80Km/h",
      //   },
      //   {
      //     lng: 117.002,
      //     lat: 31.631,
      //     number: "皖A33333",
      //     updateTime: "2021-03-24 13:24",
      //     speed: "79Km/h",
      //   },
      // ],

      //获取数据得到：
      pkList: [],
      dkList: [],
      carNum: "",
    };
  },

  methods: {
    async getPk() {
      const res = await product();
      // console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.productInfo.length; i++) {
          if (res.data.productInfo[i].typeIdentify != "tysj") {
            // console.log(res.data.productInfo[i]);
            this.pkList.push(res.data.productInfo[i].productKey);
          }
        }
        // console.log(this.pkList);
        this.getDk();
      }
    },
    async getDk() {
      const res = await getDevice({
        productKey: this.pkList[0],
      });
      // console.log(res);
      this.carNum = res.data.productName;
      if (res.code == 200) {
        this.dkList.push(res.data.deviceInfo[0].deviceKey);
      }
      // console.log(this.dkList);
      this.getGPS();
    },
    async getGPS() {
      const res = await getDeviceData({
        productKey: this.pkList[0],
        deviceKeyList: this.dkList,
      });
      console.log(res);
      console.log(this.carNum);
      var obj = {
        number: this.carNum,
        updateTime: res.data.deviceData[0].date,
        lng: res.data.deviceData[0].gps.Lon,
        lat: res.data.deviceData[0].gps.Lat,
      };
      this.markers.push(obj);
      console.log(this.markers);
    },

    lookDetail(data) {
      console.log(data);
      this.title = data.number;
      this.showFlag = true;
      this.position = {
        lng: data.lng,
        lat: data.lat,
      };
      this.time = data.updateTime;
      // this.speed = data.speed;
    },
    // 关闭弹窗
    infoWindowClose() {
      this.showFlag = false;
    },
    // 打开弹窗
    infoWindowOpen() {
      this.showFlag = true;
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  margin: 10px auto;
  width: 100%;

  //height: 650px;
  background: #ffffff;
  // text-align: center;
}
.map {
  width: 100%;
  height: 720px;
}
</style>