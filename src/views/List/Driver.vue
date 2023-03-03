<template>
  <div class="home">
    <div>
      <div class="home-item">
        <div class="top">
          <span class="title">司机管理</span>
          <a-form-model layout="inline">
            <a-form-model-item>
              <a-input v-model="searchNum" placeholder="请输入司机姓名" />
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" @click="search">查询</a-button>
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" @click="reset">重置</a-button>
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" @click="add">添加司机 </a-button>
            </a-form-model-item>
            <a-modal
              :visible="visible"

              style = "width: 60%;position: absolute; top: 200px; left: 20%;"
            >
              <a-form-model
                :label-col="{ span: 7 }"
                :model="dataForm"
                :rules="rule"
              >
                <a-form-model-item prop = "productName" label="姓名" :wrapper-col="{ span: 12 }">
                  <a-input v-model="dataForm.productName" />
                </a-form-model-item>
                <a-form-model-item prop = "age" label="年龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="dataForm.age" />
                </a-form-model-item>
                <a-form-model-item prop = "driverAge" label="驾龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="dataForm.driverAge" />
                </a-form-model-item>
                <a-form-model-item prop = "phone" label="手机号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="dataForm.phone" />
                </a-form-model-item>
                <a-form-model-item prop = "idNumber" label="身份证号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="dataForm.idNumber" />
                </a-form-model-item>
                <a-form-model-item prop = "account" label="银行账户" :wrapper-col="{ span: 12 }">
                  <a-input v-model="dataForm.account" />
                </a-form-model-item>
                <a-form-model-item>
                  <a-button @click = "handleOk()"></a-button>
                </a-form-model-item>
              </a-form-model>
            </a-modal>
            <!-- <a-modal
              title="修改司机信息"
              :visible="dialogVisible2"
              @ok="edidriver"
              @cancel="dialogVisible2 = false"
              width="500px"
             >
              <a-form-model :label-col="{ span: 7 }">
                <a-form-model-item label="驾龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="this.whichProduct.extraInfo.driverAge" />
                </a-form-model-item>
                <a-form-model-item label="年龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="this.whichProduct.extraInfo.age" />
                </a-form-model-item>
                <a-form-model-item label="手机号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="this.whichProduct.extraInfo.phone" />
                </a-form-model-item>
                <a-form-model-item label="银行账户" :wrapper-col="{ span: 12 }">
                  <a-input v-model="this.whichProduct.extraInfo.account" />
                </a-form-model-item>
                <a-form-model-item label="身份证号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="this.whichProduct.extraInfo.idNumber" />
                </a-form-model-item>
              </a-form-model>
            </a-modal>
            <a-modal
              title="详细信息"
              :visible="dialogVisible1"
              @ok="dialogVisible1 = false"
              @cancel="dialogVisible1 = false"
              width="500px"
             >
              <p>姓名：{{ this.whichProduct.productName }}</p>
              <p>年龄：{{ this.whichProduct.extraInfo.age }}</p>
              <p>驾龄：{{ this.whichProduct.extraInfo.driverAge }}</p>
              <p>电话号码：{{ this.whichProduct.extraInfo.phone }}</p>
              <p>身份证号：{{ this.whichProduct.extraInfo.idNumber }}</p>
              <p>银行卡号：{{ this.whichProduct.extraInfo.account }}</p>
            </a-modal> -->
          </a-form-model>
        </div>
      </div>
      <div>
        <div v-show="productList.length != 0" style="padding: 10px 20px">
          <a-row :gutter="16">
            <a-col :span="8" v-for="(item, index) in productList" :key="index">
              <a-card class="vehicle" hoverable>
                <span style="cursor: pointer; float: right" @click="cut(item)"
                  ><img
                    src="../../static/icon/删除1.svg"
                    style="width: 20px; color: #515151"
                /></span>
                <div style="cursor: pointer" @click="more(item)">
                  <a-card-meta :title="item.productName">
                    <a-avatar
                      :size="64"
                      slot="avatar"
                      style="
                        background: white;
                        border: solid;
                        border-color: #515151;
                      "
                    >
                      <img
                        src="../../static/icon/司机.svg"
                        style="width: 60px"
                      />
                    </a-avatar>
                    <p style="padding-left: 64px">
                      电话号码&nbsp;&nbsp;
                      <span> {{ item.extraInfo.phone }}</span>
                    </p>
                    <p style="padding-left: 80px">
                      驾龄&nbsp;&nbsp;
                      <span> {{ item.extraInfo.driverAge }}</span
                      ><br /><br />
                    </p>
                  </a-card-meta>
                </div>

                <a-row>
                  <!-- <a-col :span="12">
                      <a @click="more(item)">查看</a>
                    </a-col> -->
                  <a-col :span="12">
                    <a @click="edit(item)">修改</a>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div v-show="productList.length == 0">
          <a-empty description="暂无司机信息" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  product,
  registerDri,
  driver,
  // deledriver,
  founddriver,
  editdriver,
} from "@/api/interface";
import { registerDriver, deleteProduct } from "@/api/vehicle";
import { userRegister } from "@/api/user";
import { deleteUser } from "@/api/admin";

export default {
  data() {
    return {
      productList: [],
      dialogVisible1: false,
      dialogVisible2: false,
      visible: false,
      searchNum: "",
      // pKey1: "",
      // Name: "",
      // Account: "",
      // Age: "",
      // searchNum: "", //车牌号搜索
      // visible: false, //对话框显示
      // productName: "", //注册车辆号码
      // phoneNumber: "", //号码
      // driveYear: "", //驾龄
      // deviceKey: "",
      // productKey: "",
      // deviceName: "",
      // idNumber: "", //身份证号码
      // key1: "",
      // key2: "",
      // phone: "", //手机号
      // age: "", //年龄
      // driverAge: "", //驾龄
      // account: "", //银行号码
      // phnum: "",
      // agenum: "",
      // drinum: "",
      // monnum: "",
      // ID: "",
      // dialogVisible1: false,
      // dialogVisible2: false, //修改
      // vehicleList: [],
      // driverList: [],
      // productList: [],
      whichProduct: {
        productName: "",
        extraInfo: {
          age: "",
          driverAge: "",
          accout: "",
          phone: "",
          idNumber: "",
        },
      },
      dataForm: {
        productName: "",
        age: "",
        driverAge: "",
        phone: "",
        idNumber: "",
        account: "",
      },
      rule: {
        productName:[{ required: true, message: '必填项不能为空', trigger: 'change' }],
        age:[{ required: true, message: '必填项不能为空', trigger: 'change' }],
        driverAge:[{ required: true, message: '必填项不能为空', trigger: 'change' }],
        phone:[{ required: true, message: '必填项不能为空', trigger: 'change' }],
        idNumber:[{ required: true, message: '必填项不能为空', trigger: 'change' }],
        account:[{ required: true, message: '必填项不能为空', trigger: 'change' }],
      }
    };
  },

  created() {
    this.getproduct();
  },

  methods: {
    async getproduct() {
      product().then((res) => {
        console.log(res);
        this.productList = [];
        res.data.productInfo.forEach((item) => {
          if (item.typeIdentify == "tysj") {
            this.productList.push(item);
          }
        });
        console.log(this.productList.length);
        // if(this.productList.length != 0) {
        //   this.whichProduct = this.productList[0]
        // }
      });
    },
    search() {
      console.log("查询");
    },
    reset() {
      console.log("重置");
    },
    add() {
      console.log("添加司机");
      this.visible = true;
    },
    handleOk() {
      console.log("添加");
      var _this = this
      // _this.$refs.dataForm.validate(valid=>{
      //   if(valid) {

      //   } else {
      //     return false
      //   }
      // })
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  background: #ffffff;
  width: 100%;
  margin: 20px auto;
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
  margin: 15px 10px 15px 10px;
  box-shadow: 5px 5px 5px #e2e1e1;
  border-radius: 10px;
}
</style>
