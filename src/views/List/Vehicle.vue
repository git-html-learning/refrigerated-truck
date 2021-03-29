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
              <a-button type="primary">重置</a-button>
            </a-form-model-item>

            <a-button
              type="primary"
              style="float: right"
              size="large"
              @click="add"
              >车辆注册
            </a-button>
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
              <a-card-meta :title="item.number">
                <a-avatar :size="64" slot="avatar" style="background: #1980ff">
                  <!-- <i class="iconfont icon-cangku"></i> -->
                  <img src="../../static/icon/车辆.svg" >
                </a-avatar>
              </a-card-meta>
              <p style="padding-left: 64px">
                司机:
                <span style="font-weight: 600; font-size: 22px">
                  {{ item.driver }}
                </span>
              </p>
              <p style="padding-left: 80px">
                目的地:
                <span style="font-weight: 600; font-size: 22px">
                  {{ item.destination }}
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

    <!-- <a-modal
      title="车辆注册"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="车牌号">
          <a-input v-model="vehicleList.number" />
        </a-form-model-item>
        <a-form-model-item label="司机">
          <a-input v-model="vehicleList.driver" />
        </a-form-model-item>
        <a-form-model-item label="目的地">
          <a-input v-model="vehicleList.destination" />
        </a-form-model-item>
      </a-form-model>
    </a-modal> -->

    <div v-show="showInfo == '2'">
      <div class="home-item1">
        <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="车牌号">
            <a-input v-model="vehicleList.number" />
          </a-form-model-item>
          <a-form-model-item label="司机">
            <a-input v-model="vehicleList.driver" />
          </a-form-model-item>
          <a-form-model-item label="目的地">
            <a-input v-model="vehicleList.destination" />
          </a-form-model-item>
        </a-form-model>
     <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="handleOk">注册</a-button>
      <a-button style="margin-left: 10px" @click="handleCancel">取消</a-button>
    </a-form-item>
        
      </div>
    </div>


  </div>
</template>
<script>
import {
  product,
  getdeviceList,
  getdeviceData,
  onlinestatus,
} from "@/api/data";
export default {
  data() {
    return {
      showInfo: "1", //切换页面
      searchNum: "", //车牌号搜索
      visible: false, //对话框显示
      labelCol: { span: 4 }, //lable标签布局
      wrapperCol: { span: 14 }, //输入控件布局
      vehicleList: [
        {
          number: "皖A11111",
          driver: "俞大",
          destination: "上海",
        },
        {
          number: "皖A22222",
          driver: "陈二",
          destination: "浙江",
        },
        {
          number: "皖A33333",
          driver: "张三",
          destination: "福建",
        },
        {
          number: "皖A44444",
          driver: "李五",
          destination: "广州",
        },
        {
          number: "皖A55555",
          driver: "汪鸽",
          destination: "武汉",
        },
      ],
      testV: [], //注册测试
    };
  },
  created(){
    this.getproduct()
  },
  methods: {
    async getproduct(){   //获取产品信息
      const res = await product();
      console.log(res);
    },
    more(data) {   //点击卡片
      console.log(data);
    },
    search() {
      var arr = [];
      for (var i = 0; i < this.vehicleList.length; i++) {
        if (this.vehicleList[i].number.indexOf(this.searchNum) >= 0) {
          arr.push(this.vehicleList[i]);
        }
      }
      this.vehicleList = arr;
    },
    add() {
      this.showInfo = "2";
    },
    handleOk() {
      var _this = this;
      // _this.visible = false;
      _this.showInfo="1"
      var testV = new Object();
      _this.testV.number = _this.vehicleList.number;
      _this.testV.driver = _this.vehicleList.driver;
      _this.testV.destination = _this.vehicleList.destination;
      console.log(_this.testV);
      // _this.vehicleList.push(_this.testV)
      // console.log(_this.vehicleList);
    },
    handleCancel() {
      // this.visible = false;
      this.showInfo = "1";
      console.log("取消");
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
