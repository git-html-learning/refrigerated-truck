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
              style="width: 60%; position: absolute; top: 200px; left: 20%"
            >
              <a-form-model
                :label-col="{ span: 7 }"
                :model="dataForm"
                ref="dataForm"
                :rules="rule"
              >
                <a-form-model-item
                  prop="productName"
                  label="姓名"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="dataForm.productName" />
                </a-form-model-item>
                <a-form-model-item
                  prop="age"
                  label="年龄"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="dataForm.age" />
                </a-form-model-item>
                <a-form-model-item
                  prop="driverAge"
                  label="驾龄"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="dataForm.driverAge" />
                </a-form-model-item>
                <a-form-model-item
                  prop="phone"
                  label="手机号"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="dataForm.phone" />
                </a-form-model-item>
                <a-form-model-item
                  prop="idNumber"
                  label="身份证号"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="dataForm.idNumber" />
                </a-form-model-item>
                <a-form-model-item
                  prop="account"
                  label="银行账户"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="dataForm.account" />
                </a-form-model-item>
              </a-form-model>
              <template slot="footer">
                <div>
                  <a-button @click="visible = false">取消</a-button>
                  <a-button @click="handleOk('dataForm')">确定</a-button>
                </div>
              </template>
              <!-- <a-button @click="handleOk('dataForm')">点击</a-button> -->
            </a-modal>
            <a-modal
              title="司机信息修改以及分组操作"
              :visible="dialogVisible1"
              width="800px"
            >
              <template slot="footer">
                <div></div>
              </template>
              <a-row>
                <a-col :span = "12">
                  <div>司机信息修改</div>
              <a-form-model
                :label-col="{ span: 7 }"
                :model="whichProduct"
                ref="whichProduct"
                :rules="rule"
              >
                <a-form-model-item
                  label="姓名"
                  prop="productName"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="whichProduct.productName" />
                </a-form-model-item>
                <a-form-model-item
                  label="驾龄"
                  prop="driverAge"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="whichProduct.driverAge" />
                </a-form-model-item>
                <a-form-model-item
                  label="年龄"
                  prop="age"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="whichProduct.age" />
                </a-form-model-item>
                <a-form-model-item
                  label="手机号"
                  prop="phone"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="whichProduct.phone" />
                </a-form-model-item>
                <a-form-model-item
                  label="银行账户"
                  prop="account"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="whichProduct.account" />
                </a-form-model-item>
                <a-form-model-item
                  label="身份证号"
                  prop="idNumber"
                  :wrapper-col="{ span: 12 }"
                >
                  <a-input v-model="whichProduct.idNumber" />
                </a-form-model-item>
              </a-form-model>

              <div style="text-align: center">
                <a-button type="primary" @click="change('whichProduct')"
                  >修改信息</a-button
                >
                <a-button type="primary" @click="cancel()">取消</a-button>
              </div>
              <div>登录密码修改</div>
              <a-input v-model="password">
                <a-icon
                  slot="addonAfter"
                  @click="changePassword()"
                  type="edit"
                />
              </a-input>
                </a-col>
                <a-col :span = "12">
                  <div>分组管理</div>
                  <div>当前组员： </div>


                </a-col>
              </a-row>

            </a-modal>
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
                  <!-- <a-col :span="12"> -->
                  <a style="float: right" @click="edit(item)">操作</a>
                  <!-- </a-col> -->
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
import { registerDriver, deleteProduct, updateProduct } from "@/api/vehicle";
import { userRegister, person } from "@/api/user";
import { deleteUser, editUser } from "@/api/admin";

export default {
  data() {
    var validatePhone = (rule, value, callback) => {
      var phone = /^1[3-9]\d{9}$/;
      if (value == "") {
        callback();
      } else if (!phone.test(value)) {
        callback(new Error("输入的手机格式不正确"));
      } else {
        callback();
      }
    };
    var validateIdnumber = (rule, value, callback) => {
      var idNumber =
        /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if (value == "") {
        callback();
      } else if (!idNumber.test(value)) {
        callback(new Error("输入的身份证号不正确"));
      } else {
        callback();
      }
    };

    return {
      productList: [],
      dialogVisible1: false,
      dialogVisible2: false,
      visible: false,
      searchNum: "",
      whichProduct: {
        productName: "",
        age: "",
        driverAge: "",
        phone: "",
        idNumber: "",
        account: "",
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
        productName: [
          { required: true, message: "必填项不能为空", trigger: "change" },
        ],
        age: [{ required: true, message: "必填项不能为空", trigger: "change" }],
        driverAge: [
          { required: true, message: "必填项不能为空", trigger: "change" },
        ],
        phone: [
          { required: true, message: "必填项不能为空", trigger: "change" },
          { validator: validatePhone, trigger: "change" },
        ],
        idNumber: [
          { required: true, message: "必填项不能为空", trigger: "change" },
          { validator: validateIdnumber, trigger: "change" },
        ],
        account: [
          { required: true, message: "必填项不能为空", trigger: "change" },
        ],
      },
      ram: null,
      password: "",
      userData: {},
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
        console.log(this.productList);
        // if(this.productList.length!=0) {
        //   this.productList.forEach((item,index)=>{
        //     console.log(index)
        //     this.productList[index].age = item.extraInfo.age
        //     this.productList[index].driverAge = item.extraInfo.driverAge
        //     this.productList[index].phone = item.extraInfo.phone
        //     this.productList[index].idNumber = item.extraInfo.idNumber
        //     this.productList[index].account = parseInt(item.extraInfo.account)
        //    console.log(item)
        //   })
        //   this.whichProduct = this.productList[0]
        // }
        console.log(this.whichProduct);
        console.log(this.productList);
        // console.log(this.productList.length);
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
    handleOk(dataForm) {
      console.log("添加");
      var _this = this;
      _this.$refs[dataForm].validate((valid) => {
        if (valid) {
          // alert("12")
          registerDriver(this.dataForm).then((res) => {
            console.log(res);
            if (res.code == 200) {
              var userData = {
                username: this.dataForm.productName,
                password: "123456",
                extraInfo: {
                  role: "grouper",
                  pk: res.data.productKey,
                },
              };
              console.log(userData);
              userRegister(userData).then((res) => {
                if (res.code == 200) {
                  this.visible = false;
                  this.getproduct();
                } else {
                  this.$message.warning(res.msg);
                }
              });
            } else {
              this.$message.warning(res.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
    cut(data) {
      //删除产品
      console.log(data);
      this.$confirm(
        `此操作将会永远删除司机${data.productName},是否继续？`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          var params = {
            key: data.productKey,
          };
          deleteProduct(params).then((res) => {
            console.log(res);
            if (res.code == 200) {
              //删除用户
              deleteUser(data.productName).then((res) => {
                if (res.code == 200) {
                  this.$message.success("删除成功");
                  this.getproduct();
                } else {
                  this.$message.warning(res.msg);
                }
              });
            } else {
              this.$message.warning(res.msg);
            }
          });
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    //点开司机操作框
    edit(data) {
      this.ram = data;
      this.whichProduct.productName = data.productName;
      this.whichProduct.age = data.extraInfo.age;
      this.whichProduct.driverAge = data.extraInfo.driverAge;
      this.whichProduct.phone = data.extraInfo.phone;
      this.whichProduct.idNumber = data.extraInfo.idNumber;
      this.whichProduct.account = data.extraInfo.account;
      console.log(this.whichProduct);
      this.dialogVisible1 = true;
      //查询用户信息得到登录密码
      person(data.productName).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.userData.username = res.data.username;
          this.userData.password = res.data.password;
          this.userData.phone = res.data.phone;
          this.userData.email = res.data.email;
          this.userData.wechat = res.data.wechat;
          this.userData.extraInfo = res.data.extraInfo
          this.password = res.data.password;
        }
      });
    },
    change(data) {
      var _this = this;
      _this.$refs[data].validate((valid) => {
        if (valid) {
          // console.log("12")
          var flag = false;
          if (this.whichProduct.productName == this.ram.productName) {
            flag = true;
          }
          //先修改产品信息
          this.ram.productName = this.whichProduct.productName;
          this.ram.extraInfo.age = this.whichProduct.age;
          this.ram.extraInfo.driverAge = this.whichProduct.driverAge;
          this.ram.extraInfo.phone = this.whichProduct.phone;
          this.ram.extraInfo.idNumber = this.whichProduct.idNumber;
          this.ram.extraInfo.account = this.whichProduct.account;
          console.log(this.ram);
          updateProduct(this.ram).then((res) => {
            if (res.code == 200) {
              if (flag) {
                //修改用户信息
                this.userData.username = this.ram.productName;
                editUser(this.userData).then((res) => {
                  if (res.code == 200) {
                    this.$message.success("修改成功");
                  }
                });
              }
            } else {
              this.$message.warning(res.msg);
            }
          });
          //有没有修改司机名字
        } else {
          return false;
        }
      });
    },
    cancel() {
      this.dialogVisible1 = false;
    },
    changePassword() {
      //修改用户信息
      this.userData.password = this.password;
      editUser(this.userData).then((res) => {
        if ((res.code = 200)) {
          this.$message.success("密码修改成功");
        }
      });
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
