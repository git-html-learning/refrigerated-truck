<template>
    <div class="layout">
         <div class="nav-top">
      <div class="nav-top-title">{{this.productName}}</div>
              <div style =" position: absolute; right: 50px; cursor: pointer" @click = "logout">
              <svg t="1658407102656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8938" width="25" height="25"><path d="M542.7 373.6h-59.5c-24.8 0-44.8-20.1-44.8-44.8V167.9c0-24.8 20.1-44.8 44.8-44.8h59.5c24.8 0 44.8 20.1 44.8 44.8v160.9c0.1 24.7-20 44.8-44.8 44.8z m0 0" fill="#d4237a" p-id="8939"></path><path d="M542.7 398.5h-59.5c-38.5 0-69.7-31.3-69.7-69.7V167.9c0-38.5 31.3-69.7 69.7-69.7h59.5c38.5 0 69.7 31.3 69.7 69.7v160.9c0.1 38.4-31.2 69.7-69.7 69.7zM483.3 148c-11 0-19.9 8.9-19.9 19.9v160.9c0 11 8.9 19.9 19.9 19.9h59.5c11 0 19.9-8.9 19.9-19.9V167.9c0-11-8.9-19.9-19.9-19.9h-59.5zM513 811.4" fill="#d4237a" p-id="8940"></path><path d="M513 928.3c-218.7 0-396.6-177.9-396.6-396.6 0-132.3 65.4-255.3 175-329 11.4-7.7 26.9-4.6 34.6 6.8 7.7 11.4 4.6 26.9-6.8 34.6-95.7 64.4-152.9 171.9-152.9 287.6 0 191.2 155.5 346.7 346.7 346.7s346.7-155.5 346.7-346.7c0-115.7-57.2-223.2-152.9-287.6-11.4-7.7-14.5-23.2-6.8-34.6 7.7-11.4 23.2-14.5 34.6-6.8 109.6 73.6 175 196.6 175 329 0 218.7-177.9 396.6-396.6 396.6z m0 0" fill="#d4237a" p-id="8941"></path></svg>
          </div>
      <div class="nav-top-time">
  
          
        <span id="date">{{date}}</span>
        <span id="time" style="margin-top: 5px;">{{day}}&nbsp;{{time}}</span>
      </div>
    </div>
 
 <div style = "padding-top: 100px; width: 100%; min-height: 700px; ">
      <productMessageVue/>
 </div>
       
    </div>
</template>
<script>
import { getdeviceList } from "@/api/data";
import { allProductData } from "@/api/interface";
import productMessageVue from '../productMessage.vue'
export default {
    name: "user",
components: {
    productMessageVue
},
data() {
    return {
        deviceKey:"",
        productName:"",
        date:"",
        day: "",
        time:"",
    }
},
  beforeDestroy() {
    if (this.date) {
      clearInterval(this.timer);
    }
  },
  mounted() {
        setInterval(this.timer, 1000);
  },
  created(){
this.prepare();
  },
  methods: {
      prepare() {
 this.productKey = window.sessionStorage.getItem("productKey");
      console.log(this.productKey);
      var pkList = []
pkList.push(this.productKey)
      var data = {
          username:"通宇冷藏车",
          pkList: pkList,
          startTime: 111111
      };
     allProductData(data).then((res)=>{
          console.log(res)
          if (res.msg == "ok") {
              this.productName = res.data[0].productName
          } else {
              this.productName = "冷藏车"
          }
      })
      },
          timer() {
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month =
        new Date().getMonth + 1 < 10
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1; //获取当前的月份
      let Day =
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate(); //获取当前时间的天数、
      let hours =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours(); //获取当前的小时数

      let day = new Date().getDay();
      let days = "";
      switch (day) {
        case 1:
          days = "星期一";
          break;
        case 2:
          days = "星期二";
          break;
        case 3:
          days = "星期三";
          break;
        case 4:
          days = "星期四";
          break;
        case 5:
          days = "星期五";
          break;
        case 6:
          days = "星期六";
          break;
        case 0:
          days = "星期日";
          break;
      }

      let minutes =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes(); //获取当前时间的分数
      let seconds =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds(); //获取当前时间的秒数
      //拼接格式化当前时间
      this.date = year + "年" + month + "月" + Day + "日";

      this.time = hours + ":" + minutes + ":" + seconds;
      this.day = days;
    },
    logout() {
  this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  }

}
</script>
<style lang="less" scoped>
    .layout {
        width: 100%;
        height: 100vh;
        background-color: #0a1a2a;
        color: #fff;
    }
    .nav-top {
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: rgba(3, 21, 24, 0.7);
  text-align: center;
}

.nav-top-title {
  line-height: 80px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
}
.nav-top-time {
  position: absolute;
  top: 0;
  right: 30px;
  padding: 20px;
}
.nav-top-time span {
  display: block;
  color: #ffffff;
  line-height: 20px;
}
</style>