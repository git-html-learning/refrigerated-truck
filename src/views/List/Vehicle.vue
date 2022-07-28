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

            <a-button type="primary" style="float: right" size="large" @click="add">车辆注册</a-button>
            <a-modal
              title="车辆注册"
              :visible="visible"
              @ok="handleOk"
              @cancel="handleCancel"
              width="700px"
            >
              <a-form-model
                :label-col="{ span: 7 }"
                v-loading="loading"
                element-loading-text="拼命注册中"
                element-loading-spinner="el-icon-loading"
              >
                <a-form-model-item label="车牌号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="productname" />
                </a-form-model-item>
                <a-form-model-item label="温湿度传感器数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num1" :min="1" style="width: 120%" />
                </a-form-model-item>
                <a-form-model-item label="油位监测设备数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num5" :min="1" style="width: 120%" />
                </a-form-model-item>
                <a-form-model-item label="照明灯数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num6" :min="1" style="width: 120%" />
                </a-form-model-item>
                <a-form-model-item label="杀菌灯数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num7" :min="1" style="width: 120%" />
                </a-form-model-item>
                <a-form-model-item label="胎温胎压传感器数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num8" :min="1" style="width: 120%" />
                </a-form-model-item>
                <a-form-model-item label="门数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num9" :min="1" style="width: 120%" />
                </a-form-model-item>
                <a-form-model-item label="横向震动监测数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num10" :min="1" style="width: 120%" />
                </a-form-model-item>
                <a-form-model-item label="纵向震动监测数量" :wrapper-col="{ span: 2 }">
                  <a-input-number v-model="num11" :min="1" style="width: 120%" />
                </a-form-model-item>
              </a-form-model>
            </a-modal>
          </a-form-model>
        </div>
      </div>

      <div v-show="vehicleList.length != 0" style = "padding: 10px 20px;">
        <a-row :gutter="16">
          <a-col :span="8" v-for="(item, index) in vehicleList" :key="index">
            <a-card hoverable class="vehicle">
              <div style = "cursor: pointer" @click="trans(item)">
                          <a-card-meta :title="item.productName">
                <a-avatar :size="64" slot="avatar" style="background: #1890ff">
                  <img src="../../static/icon/冷藏车1.svg" style="width: 60px" />
                </a-avatar>
              </a-card-meta>
              <p style="padding-left: 64px">
                购买时间:
                <span style="font-weight: 600; font-size: 15px">{{ item.value1 }}</span>
              </p>
              <p style="padding-left: 80px">
                下次保养时间:
                <span style="font-weight: 600; font-size: 15px">{{ item.value2 }}</span>
              </p>
              </div>
    <div>
           <a style="float: right; font-size: 15px" @click="cut(item)">删除</a>
              <a style="float: left; font-size: 15px" @click="trans(item)">查看</a>
    </div>
         
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
            <a-input-number v-model="vehicleList.number" />
          </a-form-model-item>
          <a-form-model-item label="司机" :wrapper-col="{ span: 6 }">
            <a-input-number v-model="vehicleList.driver" />
          </a-form-model-item>
          <a-form-model-item label="目的地" :wrapper-col="{ span: 6 }">
            <a-input-number v-model="vehicleList.destination" />
          </a-form-model-item>
        </a-form-model>
     <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button type="primary" @click="handleOk">注册</a-button>
      <a-button style="margin-left: 10px" @click="handleCancel">取消</a-button>
    </a-form-item>
        
      </div>
    </div>-->
  </div>
</template>
<script>
import { product } from "@/api/interface";
import { userRegister, login, adminLogin } from "@/api/user";
import axios from "axios";
import {
  registerVeh,
  deleteProduct,
  tempAndHumi,
  oil,
  light01,
  light02,
  tireTempPress,
  door,
  shake01,
  shake02
} from "@/api/vehicle";

export default {
  data() {
    return {
      showInfo: "1", //切换页面
      searchNum: "", //车牌号搜索
      visible: false, //对话框显示
      loading: false, //注册加载
      productname: "", //注册车辆号码
      num1: "8",

      num5: "1",
      num6: "1",
      num7: "1",
      num8: "12",
      num9: "3",
      num10: "1",
      num11: "1",
      productKey: "", //注册车辆生成的pk
      productkey: "", //删除车辆所需pk
      transpk: "", //组件传参pk
      transnum: "", //传递的车牌号

      vehicleList: [], //车辆信息展示列表
      adminToken: ""
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
    };
  },

  created() {
    this.getproduct();
  },

  methods: {
    async getproduct() {
      //获取产品信息
      const res = await product();
      console.log(res);
      for (var i = 0; i < res.data.productInfo.length; i++) {
        if (res.data.productInfo[i].typeIdentify != "tysj") {
          var time1 = res.data.productInfo[i].createdAt.split('T')
          console.log(time1)
          var time2 = time1[0].split('-')
          console.log(time2)
          var num2 = time2[0].slice(3,4)
          var num1 = time2[0].slice(0,3)
          console.log(num1)
          console.log(num2)
          num2 = parseInt(num2)
          var num3 = num2+2;
          console.log(num3)

          var obj = {
            productName: res.data.productInfo[i].productName,
            value1: time1[0],
            value2: num1+num3+"-"+time2[1]+"-"+time2[2],
            productkey: res.data.productInfo[i].productKey,
            typeIdentify: res.data.productInfo[i].typeIdentify,
          };
          this.vehicleList.push(obj);
        }
      }
      console.log(this.vehicleList);
    },

    // more(data) {
    //   //点击卡片
    //   console.log(data);
    // },

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
      this.visible = true;
      this.productname = "";
      this.productKey = "";
    },

    async handleOk() {
      //注册
      var _this = this;
      _this.loading = true;
      // console.log(_this.productname);
      const res = await registerVeh({
        productName: this.productname,
        num1: this.num1,
        num5: this.num5,
        num6: this.num6,
        num7: this.num7,
        num8: this.num8,
        num9: this.num9,
        num10: this.num10,
        num11: this.num11
      });
      console.log(res);
      if (res.code == 200) {
        _this.productKey = res.data.productKey;
        _this.batchTem();
        var obj = {
          username: this.productname,
          password: "123456",
          phone: "",
          email: "",
          extraInfo: {
            productKey: _this.productKey,
            role: "user"
          }
        };
        console.log(obj);
        userRegister(obj).then(res => {
          console.log(res);
          adminLogin({
            username: "弘恩科技",
            password: "hongenkj&ahu@2020"
          }).then(res => {
            console.log(res);
            this.adminToken = res.data.token;
            console.log(this.adminToken);
            var _this = this;
            axios({
              method: "put",
              url:
                "https://api.ahusmart.com/api/v1/admin/user/" +
                this.productname,
              headers: {
                token: this.adminToken
              },
              data: {
                username: this.productname,
                password: "123456",
                phone: "",
                email: "",
                extraInfo: {
                  productKey: _this.productKey,
                  role: "user"
                }
              }
            }).then(res => {
              console.log(res);
            });
          });
        });
        //获取管理员token并修改用户信息

        // _this.vehicleList = [];
        // _this.$message.success("注册成功!");
        // _this.getproduct();
      }
    },
    async batchTem() {
      var _this = this;
      // console.log(_this.productKey);
      const res = await tempAndHumi({
        productKey: _this.productKey,
        number1: _this.num1
      });
      // console.log(res);
      if (res.code == 200) {
        _this.batchOil();
      }
    },
    async batchOil() {
      var _this = this;
      const res = await oil({
        productKey: _this.productKey,
        number5: _this.num5
      });
      // console.log(res);
      if (res.code == 200) {
        _this.batchLight01();
      }
    },
    async batchLight01() {
      var _this = this;
      const res = await light01({
        productKey: _this.productKey,
        number6: _this.num6
      });
      // console.log(res);
      if (res.code == 200) {
        _this.batchLight02();
      }
    },
    async batchLight02() {
      var _this = this;
      const res = await light02({
        productKey: _this.productKey,
        number7: _this.num7
      });
      // console.log(res);
      if (res.code == 200) {
        _this.batchTire();
      }
    },
    async batchTire() {
      var _this = this;
      const res = await tireTempPress({
        productKey: _this.productKey,
        number8: _this.num8
      });
      // console.log(res);
      if (res.code == 200) {
        _this.batchDoor();
      }
    },
    async batchDoor() {
      var _this = this;
      const res = await door({
        productKey: _this.productKey,
        number9: _this.num9
      });
      // console.log(res);
      if (res.code == 200) {
        _this.batchShake01();
      }
    },
    async batchShake01() {
      var _this = this;
      const res = await shake01({
        productKey: _this.productKey,
        number10: _this.num10
      });
      // console.log(res);
      if (res.code == 200) {
        _this.batchShake02();
      }
    },
    async batchShake02() {
      var _this = this;
      const res = await shake02({
        productKey: _this.productKey,
        number11: _this.num11
      });
      console.log(res);
      if (res.code == 200) {
        _this.vehicleList = [];
        _this.visible = false;
        _this.loading = false;
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

    trans(data) {
      console.log(data)
      this.transpk = data.productkey;
      this.transnum = data.productName;
      var typeIdentify = data.typeIdentify
      window.sessionStorage.setItem("productKey", this.transpk);
      window.sessionStorage.setItem("carNum", this.transnum);
      window.sessionStorage.setItem("typeIdentify", typeIdentify);
      this.$router.push({
        path: "/list/details"
        // query: {
        //   pk: this.transpk,
        //   carnum: this.transnum,
        // },
      });
    },

    cut(data) {
      //删除车辆
      // console.log(data.productkey);
      this.productname = data.productName;
      this.productkey = data.productkey;
      this.$confirm("此操作将永久删除该车辆, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.confirm();
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    async confirm() {
      const res = await deleteProduct({
        key: this.productkey
      });
      // console.log(res);
      if (res.code == 200) {
         adminLogin({
            username: "弘恩科技",
            password: "hongenkj&ahu@2020"
          }).then(res => {
            console.log(res);
            this.adminToken = res.data.token;
             axios({
          method: "delete",
          url: "https://api.ahusmart.com/api/v1/admin/user/" + this.productname,
          headers: {
            token: this.adminToken
          },
        }).then(res => {
          console.log(res);
        });
          })
        // console.log(this.adminToken)
       
        this.$message.success("删除成功!");
        this.vehicleList = [];
        this.getproduct();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  background: #ffffff;
  width: 100%;
  padding: 10px auto;

  .home-item {
    padding: 10px 20px;
    background: #ffffff;
    box-shadow: 5px 5px 5px #e2e1e1;
    border-radius: 10px;
    .top {
      margin: 10px;
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
