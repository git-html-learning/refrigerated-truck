<template>
  <div class="home">
    <div v-show="showInfo === '1'">
      <div class="home-item">
        <div class="top">
          <span class="title">车辆概览</span>
          <!-- <a-button type="primary">注册车辆</a-button> -->
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

            <a-button
              type="primary"
              style="float: right"
              size="large"
              @click="add"
              >车辆注册
            </a-button>
            <a-modal
              title="车辆注册"
              :visible="visible"
              @ok="handleOk"
              @cancel="handleCancel"
              width="700px"
            >
              <a-form-model :label-col="{ span: 7 }">
                <a-form-model-item label="车牌号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="productname" />
                </a-form-model-item>
                <a-form-model-item
                  label="温湿度传感器数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num1" />
                </a-form-model-item>
                <a-form-model-item label="冷机数量" :wrapper-col="{ span: 2 }">
                  <a-input v-model="num2" />
                </a-form-model-item>
                <a-form-model-item
                  label="容量监测设备数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num3" />
                </a-form-model-item>
                <a-form-model-item
                  label="载重监测设备数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num4" />
                </a-form-model-item>
                <a-form-model-item
                  label="油位监测设备数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num5" />
                </a-form-model-item>
                <a-form-model-item
                  label="照明灯数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num6" />
                </a-form-model-item>
                <a-form-model-item
                  label="杀菌灯数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num7" />
                </a-form-model-item>
                <a-form-model-item
                  label="胎温胎压传感器数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num8" />
                </a-form-model-item>
                <a-form-model-item label="门数量" :wrapper-col="{ span: 2 }">
                  <a-input v-model="num9" />
                </a-form-model-item>
                <a-form-model-item
                  label="横向震动监测数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num10" />
                </a-form-model-item>
                <a-form-model-item
                  label="纵向震动监测数量"
                  :wrapper-col="{ span: 2 }"
                >
                  <a-input v-model="num11" />
                </a-form-model-item>
              </a-form-model>
            </a-modal>
          </a-form-model>
        </div>
      </div>

      <div v-show="vehicleList.length != 0">
        <a-row :gutter="16">
          <a-col
            :span="8"
            v-for="(item, index) in vehicleList"
            :key="index"
            @click="more(item)"
          >
            <a-card hoverable class="vehicle">
              <a-card-meta :title="item.productName">
                <a-avatar :size="64" slot="avatar" style="background: #1980ff">
                  <!-- <i class="iconfont icon-cangku"></i> -->
                  <img src="../../static/icon/车辆.svg" />
                </a-avatar>
              </a-card-meta>
              <p style="padding-left: 64px">
                温湿度传感器数量:
                <span style="font-weight: 600; font-size: 20px">
                  {{ item.value1 }}
                </span>
              </p>
              <p style="padding-left: 80px">
                胎温胎压传感器数量:
                <span style="font-weight: 600; font-size: 20px">
                  {{ item.value2 }}
                </span>
              </p>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <div v-show="vehicleList.length == 0">
        <a-empty description="暂无车辆信息" />
      </div>
    </div>

    <!-- <div v-show="showInfo == '2'">
      <div class="home-item1">
        <a-form-model :label-col="{ span: 8 }" >
          <a-form-model-item label="车牌号" :wrapper-col="{ span: 6 }">
            <a-input v-model="vehicleList.number" />
          </a-form-model-item>
          <a-form-model-item label="司机" :wrapper-col="{ span: 6 }">
            <a-input v-model="vehicleList.driver" />
          </a-form-model-item>
          <a-form-model-item label="目的地" :wrapper-col="{ span: 6 }">
            <a-input v-model="vehicleList.destination" />
          </a-form-model-item>
        </a-form-model>
     <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button type="primary" @click="handleOk">注册</a-button>
      <a-button style="margin-left: 10px" @click="handleCancel">取消</a-button>
    </a-form-item>
        
      </div>
    </div> -->
  </div>
</template>
<script>
import { product, register, temAndHum } from "@/api/interface";

export default {
  data() {
    return {
      showInfo: "1", //切换页面
      searchNum: "", //车牌号搜索
      visible: false, //对话框显示
      productname: "", //注册车辆号码
      num1: "8",
      num2: "1",
      num3: "1",
      num4: "1",
      num5: "1",
      num6: "1",
      num7: "1",
      num8: "12",
      num9: "3",
      num10: "1",
      num11: "1",
      productKey:"",

      vehicleList: [],
      // vehicleList: [
      //   {
      //     number: "皖A11111",
      //     driver: "俞大",
      //     destination: "上海",
      //   },
      //   {
      //     number: "皖A22222",
      //     driver: "陈二",
      //     destination: "浙江",
      //   },
      //   {
      //     number: "皖A33333",
      //     driver: "张三",
      //     destination: "福建",
      //   },
      //   {
      //     number: "皖A44444",
      //     driver: "李五",
      //     destination: "广州",
      //   },
      //   {
      //     number: "皖A55555",
      //     driver: "汪鸽",
      //     destination: "武汉",
      //   },
      // ],
      testV: [], //注册测试
    };
  },

  created() {
    this.getproduct();
  },

  methods: {
    async getproduct() {
      //获取产品信息
      const res = await product();
      // console.log(res);
      for (var i = 0; i < res.data.productInfo.length; i++) {
        if (res.data.productInfo[i].typeIdentify == "tylcc") {

          // console.log(res.data.productInfo[i]);
          // this.vehicleList.push(res.data.productInfo[i]);
          var obj={
            productName:res.data.productInfo[i].productName,
            value1:res.data.productInfo[i].extraInfo.tempAndHumi.Value,
            value2:res.data.productInfo[i].extraInfo.tireTempPress.Value,
          }
          this.vehicleList.push(obj)
        }
      }
      console.log(this.vehicleList);
    },

    more(data) {
      //点击卡片
      console.log(data);
    },

    search() {
      //查询车辆
      var arr = [];
      for (var i = 0; i < this.vehicleList.length; i++) {
        if (this.vehicleList[i].productName.indexOf(this.searchNum) >= 0) {
          arr.push(this.vehicleList[i]);
        }
      }
      this.vehicleList = arr;
    },
    reset() {
      //重置
      this.vehicleList = [];
      this.searchNum = "";
      this.getproduct();
    },

    add() {
      // this.showInfo = "2";
      this.visible = true;
      this.productname = "";
      this.productKey = "";
      this.num1 = "8";
    },

    async handleOk() {
      //注册
      var _this = this;
      _this.visible = false;
      // _this.showInfo="1"
      // console.log(_this.productname);
      const res = await register({
        productName: this.productname,
        num1:this.num1,
        num2:this.num2,
        num3:this.num3,
        num4:this.num4,
        num5:this.num5,
        num6:this.num6,
        num7:this.num7,
        num8:this.num8,
        num9:this.num9,
        num10:this.num10,
        num11:this.num11,
      });
      // console.log(res);
      if (res.code == 200) {
        _this.productKey=res.data.productKey
        _this.batchTem()
        // _this.vehicleList = [];
        // _this.$message.success("注册成功!");
        // _this.getproduct();
      }
      // console.log(_this.num1);
    },
    async batchTem(){
      console.log(this.productKey);
      const res=await temAndHum({
        productKey:this.productKey,
        number:this.num1
      })
        console.log(res);

      if(res.code==200){
        _this.vehicleList = [];
        _this.$message.success("注册成功!");
        _this.getproduct();
      }
    },

    handleCancel() {
      this.visible = false;
      // this.showInfo = "1";
      this.$message.info("取消注册");
      // console.log("取消");
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  background: #ffffff;
  width: 100%;
  margin: 10px auto;

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
  .home-item1 {
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

.vehicle {
  margin: 15px 5px 15px 0px;
  box-shadow: 5px 5px 5px #e2e1e1;
  border-radius: 10px;
}
</style>
