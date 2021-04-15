<template>
  <div class="home">
    <div>
      <div class="home-item">
        <div class="top">
          <span class="title">司机概览</span>
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

            <a-button
              type="primary"
              style="float: right"
              size="large"
              @click="add"
              >司机注册
            </a-button>
            <a-modal
              title="司机注册"
              :visible="visible"
              @ok="handleOk"
              @cancel="handleCancel"
              width="500px"
            >
              <a-form-model :label-col="{ span: 7 }">
                <a-form-model-item label="姓名" :wrapper-col="{ span: 12 }">
                  <a-input v-model="deviceName" />
                </a-form-model-item>
                <a-form-model-item label="年龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="num2" />
                </a-form-model-item>
                <a-form-model-item label="驾龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="num3" />
                </a-form-model-item>
                <a-form-model-item label="手机号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="num1" />
                </a-form-model-item>
                <a-form-model-item label="身份证号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="name1" />
                </a-form-model-item>
                <a-form-model-item label="银行账户" :wrapper-col="{ span: 12 }">
                  <a-input v-model="num4" />
                </a-form-model-item>
              </a-form-model>
            </a-modal>
            <a-modal
              title="修改司机信息"
              :visible="dialogVisible2"
              @ok="edidriver"
              @cancel="dialogVisible2 = false"
              width="500px"
            >
              <a-form-model :label-col="{ span: 7 }">
                <a-form-model-item label="驾龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="drinum" />
                </a-form-model-item>
                <a-form-model-item label="年龄" :wrapper-col="{ span: 12 }">
                  <a-input v-model="agenum" />
                </a-form-model-item>
                <a-form-model-item label="手机号" :wrapper-col="{ span: 12 }">
                  <a-input v-model="phnum" />
                </a-form-model-item>
                <a-form-model-item label="银行账户" :wrapper-col="{ span: 12 }">
                  <a-input v-model="monnum" />
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
              <p>姓名：{{ this.Name }}</p>
              <p>年龄：{{ this.Age }}</p>
              <p>驾龄：{{ this.driveYear }}</p>
              <p>电话号码：{{ this.phoneNumber }}</p>
              <p>身份证号：{{ this.ID }}</p>
              <p>银行卡号：{{ this.Account }}</p>
            </a-modal>
            <a-modal title="" :visible.sync="dialogVisible3" width="20%">
            </a-modal>
          </a-form-model>
        </div>
      </div>
      <div>
        <div v-show="driverList.length != 0">
          <a-row :gutter="16">
            <a-col :span="8" v-for="(item, index) in driverList" :key="index">
              <a-card hoverable class="driver">
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
                    <img src="../../static/icon/司机.svg" style="width: 60px" />
                  </a-avatar>
                </a-card-meta>
                <p style="padding-left: 64px">
                  电话号码&nbsp;&nbsp;
                  <span> {{ item.phoneNumber }}</span>
                </p>
                <p style="padding-left: 80px">
                  驾龄&nbsp;&nbsp;
                  <span> {{ item.driveYear }}</span
                  ><br /><br />
                  <a-row>
                    <a-col :span="8">
                      <a @click="more(item)">查看</a>
                    </a-col>
                    <a-col :span="8">
                      <a @click="edit(item)">修改</a>
                    </a-col>
                    <a-col :span="8">
                      <a @click="dele(item)">删除</a>
                    </a-col>
                  </a-row>
                </p>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div v-show="driverList.length == 0">
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
  deledriver,
  founddriver,
  editdriver,
} from "@/api/interface";

export default {
  data() {
    return {
      pKey1: "",
      Name: "",
      ID: "",
      Account: "",
      Age: "",
      searchNum: "", //车牌号搜索
      visible: false, //对话框显示
      productname: "", //注册车辆号码
      phoneNumber: "", //号码
      driveYear: "", //驾龄
      deviceKey: "",
      productKey: "",
      deviceName: "",
      name1: "", //身份证号码
      key1: "",
      key2: "",
      num1: "", //手机号
      num2: "", //年龄
      num3: "", //驾龄
      num4: "", //银行号码
      phnum: "",
      agenum: "",
      drinum: "",
      monnum: "",
      dialogVisible1: false,
      dialogVisible2: false, //修改
      dialogVisible3: false,
      vehicleList: [],
      driverList: [],
    };
  },

  created() {
    this.getproduct();
  },

  methods: {
    async getproduct() {
      //获取全部信息
      const res = await product();
      for (var i = 0; i < res.data.productInfo.length; i++) {
        if (res.data.productInfo[i].typeIdentify == "tysj") {
          // console.log(res);
          this.productKey = res.data.productInfo[i].productKey;
          // console.log( this.productKey);获取productkey来找到司机
        }
      }
      this.getdriver();
    },
    async getdriver() {
      //获取司机信息
      const res = await driver({
        key: this.productKey,
      });
      // console.log(res);
      for (var i = 0; i < res.data.deviceInfo.length; i++) {
        var obj = {
          productName: res.data.deviceInfo[i].deviceName,
          phoneNumber: res.data.deviceInfo[i].extraInfo.PhoneNumber.Value,
          driveYear: res.data.deviceInfo[i].extraInfo.DriveYear.Value,
          deviceKey: res.data.deviceInfo[i].deviceKey,
          productKey: res.data.deviceInfo[i].productKey,
          Account: res.data.deviceInfo[i].extraInfo.Account.Value,
          Age: res.data.deviceInfo[i].extraInfo.Age.Value,
          ID: res.data.deviceInfo[i].extraInfo.ID.Value,
          Name: res.data.deviceInfo[i].extraInfo.Name.Value,
        };
        this.driverList.push(obj); //把obj数组放入driverList
      }
    },
    async handleOk() {
      //注册司机
      var _this = this;
      _this.visible = false;
      const res = await registerDri({
        pKey: this.productKey, //需要传的数据
        deviceName: this.deviceName,
        name1: this.name1,
        num1: this.num1,
        num2: this.num2,
        num3: this.num3,
        num4: this.num4,
      });
      console.log(res);
      if (res.code == 200) {
        var _this = this;
        _this.productKey = res.data.productKey;
        console.log(_this.productKey);
        _this.driverList = [];
        _this.$message.success("注册成功!");
        console.log(_this.driverList);
        _this.getproduct();
      }
      // console.log(_this.num1);
    },
    handleCancel() {
      this.visible = false;
      // this.showInfo = "1";
      this.$message.info("取消注册");
      // console.log("取消");
    },
    async moredriver() {
      //司机详情
      const res = await founddriver({
        pKey: this.productkey,
      });
      // console.log(this.productkey);
      // console.log(res);
    },
    async deletdriver() {
      //删除司机
      const res = await deledriver({
        key1: this.productkey,
        key2: this.devicekey,
      });
      console.log(res);
      if (res.code == 200) {
        this.$message.success("删除成功!");
        this.driverList = [];
        this.getproduct();
      }
    },
    async edidriver() {
      //修改司机
      const res = await editdriver({
        name: this.name, //取已存的数据
        ID: this.ID,
        dKey: this.dKey,
        productKey: this.productKey,
        phnum: this.phnum,
        agenum: this.agenum,
        drinum: this.drinum,
        monnum: this.monnum,
      });
      // console.log(this.ID);
      // console.log(res);
      if (res.code == 200) {
        this.$message.success("修改成功!");
        this.driverList = [];
        this.getproduct();
        this.dialogVisible2 = false;
      } else {
        this.$message.info("修改失败");
        this.dialogVisible2 = false;
      }
    },
    edit(data) {
      //存需要传入服务器的data
      // console.log(data);
      this.dialogVisible2 = true;
      this.phnum = ""; //输入
      this.agenum = "";
      this.drinum = "";
      this.monnum = "";
      this.dKey = data.deviceKey; //不变
      this.name = data.Name;
      this.ID = data.ID;
    },
    more(data) {
      // console.log(data);
      this.deviceKey = data.deviceKey;
      this.Name = data.Name;
      this.phoneNumber = data.phoneNumber;
      this.productkey = data.productKey;
      this.ID = data.ID;
      this.driveYear = data.driveYear;
      this.Age = data.Age;
      this.Account = data.Account;
      this.moredriver();
      this.dialogVisible1 = true;
    },
    dele(data) {
      //删除司机
      // console.log(data);
      this.productkey = data.productKey;
      this.devicekey = data.deviceKey;
      // console.log(this.productkey);
      // console.log(this.devicekey);
      this.$confirm("此操作将永久删除司机， 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deletdriver();
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    search() {
      //查询司机
      var arr = [];
      for (var i = 0; i < this.driverList.length; i++) {
        if (this.driverList[i].productName.indexOf(this.searchNum) >= 0) {
          arr.push(this.driverList[i]);
        }
      }
      this.driverList = arr;
    },
    reset() {
      //重置
      this.driverList = [];
      this.searchNum = "";
      this.getproduct();
    },
    add() {
      this.visible = true;
      this.deviceName = "";
      this.name1 = "";
      this.num1 = "";
      this.num2 = "";
      this.num3 = "";
      this.num4 = "";
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
}
.driver {
  margin: 15px 5px 15px 0px;
  box-shadow: 5px 5px 5px #e2e1e1;
  border-radius: 10px;
}
</style>
