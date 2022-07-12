<template>
  <div>
    <div
      style="height: 40px; background: rgb(53, 62, 67); border-top-left-radius: 10px; border-top-right-radius: 10px; cursor: pointer"
      @click = "detailPage"
    >
      <a-row>
        <a-col :span="3">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
              font-size: 18px
            "
          >
            全部车辆 &nbsp;
            <span style="color: white; font-size: 24px; ">{{totalNum}}</span>
          </div>
        </a-col>
        <a-col :span="3">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
              font-size: 18px
            "
          >
            行驶 &nbsp;
            <span style="color: rgb(83, 189, 119); font-size: 24px; line-height: 32px;">0</span>
          </div>
        </a-col>
        <a-col :span="3">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
              font-size: 18px
            "
          >
            静止 &nbsp;
            <span style="color: rgb(251, 178, 7); font-size: 24px; line-height: 32px;">1</span>
          </div>
        </a-col>
        <a-col :span="3">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
              font-size: 18px
            "
          >
            离线 &nbsp;
            <span style="color: red; font-size: 24px; line-height: 32px;">{{offlineNum}}</span>
          </div>
        </a-col>
        <a-col :span="3">
          <div
            style="
              height: 40px;
              color: white;
              line-height: 32px;
              padding-left: 30px;
              font-size: 18px
            "
          >
            其他 &nbsp;
            <span style="color: grey; font-size: 24px; line-height: 32px;">0</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="home">
      <baidu-map class="map" :center="{ lng: lg, lat: lt }" :zoom="12" :scroll-wheel-zoom="true">
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
          :icon="{
            url: require('../../static/pic/卡车.png'),
            size: { width: 35, height: 35 },
          }"
        >
        </bm-marker>
        <bm-info-window
          :position="position"
          :show="showFlag"
          @close="infoWindowClose()"
          @open="infoWindowOpen()"
          :width="300"
          :height="200"
        >
          <div>
            <a-descriptions :title="title" :column="1">
              <a-descriptions-item label="更新时间">{{ this.time }}</a-descriptions-item>
              <a-descriptions-item label="经度">{{ this.position.lng }}</a-descriptions-item>
              <a-descriptions-item label="纬度">{{ this.position.lat }}</a-descriptions-item>
            </a-descriptions>
            <a-descriptions :column="2">
              <a-descriptions-item label="门1状态">
                <el-tag v-show="!door1" type="danger">已开启</el-tag>
                <el-tag v-show="door1">已关闭</el-tag>
              </a-descriptions-item>
              <a-descriptions-item label="门2状态">
                <el-tag v-show="!door2" type="danger">已开启</el-tag>
                <el-tag v-show="door2">已关闭</el-tag>
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </bm-info-window>
        <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
      </baidu-map>
    </div>
  </div>
</template>

<script>
import {
  product,
  getDevice,
  getDeviceData,
  allProductData
} from "@/api/interface";

export default {
  created() {
    // console.log(this.markers.lng);
    this.getPk();
    // this.refresh();
  },
  // beforeDestroy() {
  //   console.log("222");
  //   if (this.timer) {
  //     clearInterval(this.refresh);
  //   }
  // },

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
      gpsDkList: [],
      doorDkList: [],
      doorOriData: [],
      doorHandleData: [],
      door1: true,
      door2: false,
      carNum: "",
      totalNum: 0,
      offlineNum: 0,
    };
  },

  methods: {
    detailPage() {
 this.$router.push({ path: "/list/vehicle" });
    },
    async getPk() {
      const res = await product();
      console.log(res);
      if (res.code == 200) {
        this.totalNum = 0;
        for (var i = 0; i < res.data.productInfo.length; i++) {
          if (res.data.productInfo[i].typeIdentify != "tysj") {
            // console.log(res.data.productInfo[i]);
            this.pkList.push(res.data.productInfo[i].productKey);
          }
        }
        this.totalNum = this.pkList.length;
        // console.log(this.pkList);
        this.getDk();
      }
    },
    async getDk() {
      this.gpsDkList = [];
      this.doorDkList = [];
      const res = await getDevice({
        productKey: this.pkList[0]
      });
      // console.log(res);
      this.carNum = res.data.productName;
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceInfo.length; i++) {
          if (res.data.deviceInfo[i].deviceName == "GPS") {
            this.gpsDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "door") {
            this.doorDkList.push(res.data.deviceInfo[i].deviceKey);
          }
        }
      }
      // console.log(this.gpsDkList);
      this.getGPS();
      // this.getDoorData();
    },
    async getGPS() {
      this.markers = [];
      // const res = await getDeviceData({
      //   productKey: this.pkList[0],
      //   deviceKeyList: this.gpsDkList,
      // });
      // console.log(res);
      // var time = 	Math.round(new Date() / 1000);

      // console.log(this.carNum);
      // 获取多个产品最新一条数据
      var username = window.sessionStorage.getItem("username");
      const res = await allProductData({
        username: username,
        pkList: this.pkList,
        startTime: 10000
      });
      console.log(res);
      if (res.data.length !== 0) {
        res.data.forEach(item => {
           var obj = {
                number: item.productName,
                updateTime: "",
                lng: "",
                lat: "",
                door1: false,
                door2: false,
                offline: true,
              };  
          item.deviceData.forEach(item1 => {
            if (item1.deviceName == "GPS") {
              var time  = Math.round(new Date() / 1000);
              // console.log(time)
              if (time - item1.time>172800) {
                obj.offline  = true;
              } else {
                obj.offline  = false;
              }
             obj.lng = item1.Lon,
             obj.lat = item1.Lat,
             obj.updateTime= item1.date
              
            } if (item1.deviceName =="door_1" ) {
              obj.door1 = item1.door.door_1
              obj.door2 = item1.door.door_2
            }
          });
          if (obj.lng !== "") {
this.markers.push(obj);
          }
          
        });
        console.log(this.markers);
        this.offlineNum = this.totalNum;
        if (this.markers.length !==0) {
          this.markers.forEach(item=>{
            if (item.offline == false) {
           this.offlineNum -=1
            }
          })
        }
        console.log(this.offlineNum)
      }
      // var obj = {
      //   number: this.carNum,
      //   updateTime: res.data.deviceData[0].date,
      //   lng: res.data.deviceData[0].Lon,
      //   lat: res.data.deviceData[0].Lat,
      // };
      // this.markers.push(obj);
      this.lg = this.markers[0].lng;
      this.lt = this.markers[0].lat;
      // console.log("markers", this.markers);
    },
    // async getDoorData() {
    //   this.doorOriData = [];
    //   const res = await getDeviceData({
    //     productKey: this.pkList[0],
    //     deviceKeyList: this.doorDkList
    //   });
    //   if (res.code == 200) {
    //     for (var i = 0; i < res.data.deviceData.length; i++) {
    //       var obj = {
    //         doorName: res.data.deviceData[i].deviceName,
    //         state: res.data.deviceData[i].door,
    //         date: res.data.deviceData[i].date,
    //         dk: res.data.deviceData[i].deviceKey
    //       };
    //       this.doorOriData.push(obj);
    //     }
    //     // console.log("doorOriData",this.doorOriData);
    //     this.doorHandleData = JSON.parse(JSON.stringify(this.doorOriData));
    //     // console.log("doorHandleData",this.doorHandleData);
    //     this.doorHandleData.sort(function(a, b) {
    //       var doorA = a.doorName.toUpperCase(); // ignore upper and lowercase
    //       var doorB = b.doorName.toUpperCase(); // ignore upper and lowercase
    //       if (doorA < doorB) {
    //         return -1;
    //       }
    //       if (doorA > doorB) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //     console.log("doorHandleData", this.doorHandleData);
    //     this.door1 = this.doorHandleData[0].state.door_1;
    //     this.door2 = this.doorHandleData[1].state.door_2;
    //     // console.log(this.door1);
    //     // console.log(this.door2);
    //   }
    // },

    lookDetail(data) {
      console.log(data);
      this.title = data.number;
      this.showFlag = true;
      this.position = {
        lng: data.lng,
        lat: data.lat
      };
      this.time = data.updateTime;
      this.door1 = data.door1
      this.door2 = data.door2
    },
    // 关闭弹窗
    infoWindowClose() {
      this.showFlag = false;
    },
    // 打开弹窗
    infoWindowOpen() {
      this.showFlag = true;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  // margin: 10px auto;
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