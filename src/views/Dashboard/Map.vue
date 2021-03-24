<template>
  <div class="home">
    <baidu-map
      class="map"
      :center="{ lng: lg, lat: lt }"
      :zoom="12"
      :scroll-wheel-zoom="true"
    >
      <bm-marker
        v-for="(item, index) in markers"
        :key="index"
        :position="{ lng: markers[index].lng, lat: markers[index].lat }"
        @click="lookDetail(item)"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <!-- :icon="{url: 'http://pic95.huitu.com/res/20170428/851091_20170428215847978040_1.jpg', size: {width: 62, height: 62}}" -->
        <!-- <bm-label content="安徽大学" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
      </bm-marker>
      <bm-info-window
        :title="title"
        :position="position"
        :show="showFlag"
        @close="infoWindowClose()"
        @open="infoWindowOpen()"
      >
        <div>
          <p>{{"更新时间：&nbsp;&nbsp;"+time}}</p>
          <p>{{"当前速度：&nbsp;&nbsp;"+speed}}</p>
        </div>       
      </bm-info-window>
      <bm-overview-map
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :isOpen="true"
      ></bm-overview-map>
    </baidu-map>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.markers.lng);
  },

  data() {
    return {
      lg: "117.192",
      lt: "31.671",     //地图中心
      title:"",
      position: {},
      showFlag: false,
      time:"",
      speed:"",

      markers: [
        {
          lng: 117.192,
          lat: 31.771,
          number: "皖A11111",
          updateTime:"2021-03-24 13：14",
          speed:"78Km/h"
        },
        {
          lng: 117.092,
          lat: 31.671,
          number: "皖A22222",
          updateTime:"2021-03-24 13：16",
          speed:"80Km/h"
        },
        {
          lng: 117.002,
          lat: 31.631,
          number: "皖A33333",
          updateTime:"2021-03-24 13：24",
          speed:"79Km/h"
        },
      ],
      info: {},
    };
  },

  methods: {
    lookDetail(data) {
      console.log(data);
      this.title=data.number
      this.showFlag = true;
      this.position = {
        lng: data.lng,
        lat: data.lat,
      };
      this.time=data.updateTime
      this.speed=data.speed
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