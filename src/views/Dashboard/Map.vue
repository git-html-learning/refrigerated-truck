<template>
<div class="home">
  <baidu-map class="map" :center="{lng: 117.192, lat: 31.771}" :zoom="15">
    <bm-marker :position="{lng: 117.192, lat: 31.771}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="安徽大学" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
  </div>
</template>
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