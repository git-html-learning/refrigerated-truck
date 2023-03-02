<template>
  <div class="container">
    <div>
      <div class="content">
        <div class="top">
          <div class="header">
            <span class="title">智能冷藏车</span>
          </div>
          <div class="desc">&nbsp;</div>
        </div>
        <div class="login" v-show="show1 === '1'">
          <a-form :form="form">
            <a-tabs
              size="large"
              :tabBarStyle="{ textAlign: 'center' }"
              style="padding: 0 2px"
              default-active-key="1"
            >
              <a-tab-pane tab="账户密码登录" key="1">
                <a-alert
                  type="error"
                  :closable="true"
                  v-show="accountError"
                  :message="accountError"
                  showIcon
                  style="margin-bottom: 24px"
                />
                <a-form-item>
                  <a-input
                    size="large"
                    placeholder="请输入用户名"
                    v-model="loginform.username"
                  >
                    <a-icon slot="prefix" type="user" />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input
                    size="large"
                    placeholder="请输入密码"
                    type="password"
                    v-model="loginform.password"
                  >
                    <a-icon slot="prefix" type="lock" />
                  </a-input>
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane tab="手机号登录" key="2">
                <a-alert
                  type="error"
                  :closable="true"
                  v-show="captchaError"
                  :message="captchaError"
                  showIcon
                  style="margin-bottom: 24px"
                />
                <a-form-item>
                  <a-input
                    size="large"
                    placeholder="手机号"
                    v-decorator="[
                      'mobile',
                      {
                        rules: [
                          { required: true, message: '请输入手机号!' },
                          { pattern: /^1\d{10}$/, message: '手机号格式错误' },
                        ],
                      },
                    ]"
                  >
                    <a-icon slot="prefix" type="mobile" />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-row :gutter="8" style="margin: 0 -4px">
                    <a-col :span="16">
                      <a-input
                        size="large"
                        placeholder="验证码"
                        type="digit"
                        v-decorator="[
                          'captcha',
                          {
                            rules: [
                              { required: true, message: '请输入验证码!' },
                              { pattern: /^\d{6}$/, message: '验证码格式错误' },
                            ],
                          },
                        ]"
                        @pressEnter="onSubmit"
                      >
                        <a-icon slot="prefix" type="mail" />
                      </a-input>
                    </a-col>
                    <a-col :span="8" style="padding-left: 4px">
                      <a-button
                        style="width: 100%"
                        class="captcha-button"
                        size="large"
                        @click="onGetCaptcha"
                        :disabled="captchaLoading"
                        >{{
                          captchaLoading ? countDown : "获取验证码"
                        }}</a-button
                      >
                    </a-col>
                  </a-row>
                </a-form-item>
              </a-tab-pane>
            </a-tabs>
            <a-form-item>
              <a-button
                style="width: 100%; margin-top: 10px"
                size="large"
                htmlType="submit"
                type="primary"
                @click="denglu()"
                >登录</a-button
              >
            </a-form-item>
            <div>
              <a style="float: right" @click="more()">注册账户</a>
            </div>
          </a-form>
        </div>
        <div v-show="show1 === '2'" class="register">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="90px"
            class="demo-ruleForm"
            label-position="left"
          >
            <el-form-item label="用户名" prop="name">
              <el-input
                type="name"
                v-model="ruleForm.name"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model.number="ruleForm.phone"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <a @click="cancel('ruleForm')" style="margin-left: 165px"
                >取消注册</a
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <global-footer
      :link-list="linkList"
      :copyright="copyright"
      style="margin-top: 250px"
    />
  </div>
</template>

<script>
import GlobalFooter from "@/layouts/GlobalFooter";
import { login, userRegister, adminLogin } from "@/api/user";
export default {
  name: "Login",
  components: {
    GlobalFooter,
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        phone: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkAge, trigger: "blur" }],
      },
      show1: "1",
      accountError: "",
      captchaError: "",
      activeKey: "account",
      checked: true,
      captchaLoading: false,
      countDown: 60,
      form: this.$form.createForm(this),
      loginform: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  computed: {
    systemName() {
      return this.$store.state.setting.systemName;
    },
    linkList() {
      return this.$store.state.setting.footerLinks;
    },
    copyright() {
      return this.$store.state.setting.copyright;
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.name);
          // alert("提交!");
          userRegister({
            username: this.ruleForm.name,
            password: this.ruleForm.pass,
            phone: this.ruleForm.phone,
          }).then((res) => {
            console.log(res);
            if (res.code == "200") {
              this.$message({
                message: "注册成功！",
                type: "success",
              });
              this.$refs[formName].resetFields();
              this.show1 = "1";
            } else {
              this.$message({
                message: res.msg,
                type: "warning",
              });
            }
          });
          // this.$refs[formName].resetFields();
          // this.show1 = "1";
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    cancel(formName) {
      this.$refs[formName].resetFields();
      this.show1 = "1";
    },
    denglu() {
      // login(this.loginform).then((res) => {
      //   console.log(res);
      //   if (res.msg != "ok") {
      //     alert("用户名或者密码错误！");
      //   } else {
          // adminLogin({
          //   username: "弘恩科技",
          //   password: "hongenkj&ahu@2020",
          // }).then((res) => {
          //   console.log(res);
          //   if (res.msg == "ok") {
          //     window.sessionStorage.setItem("adminToken", res.data.token);
          //   }
          // });
          this.$store.dispatch("user1/adminLogin",{
            username: "弘恩科技",
            password: "hongenkj&ahu@2020",
          }).then((res)=>{
            console.log(res)
          })
          window.sessionStorage.setItem("username", this.loginform.username);
          this.$store
            .dispatch("user/login", this.loginform)
            .then(() => {
              this.$router.push({ path: "/homepage" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
      //   }
      // });
    },
    more() {
      this.show1 = "2";
    },
    onSubmit() {
      console.log("验证码");
    },
    onGetCaptcha() {
      console.log("获取验证码");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5
    url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg")
    no-repeat center 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 112px 0 24px;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 60px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 26px;
          color: rgba(0, 0, 0, 0.568);
          font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
            sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .login {
      width: 368px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-width: 320px) {
        .captcha-button {
          font-size: 14px;
        }
      }
      .icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}
.register {
  width: 468px;
  margin: 0 auto;
  @media screen and (max-width: 576px) {
    width: 95%;
  }
  @media screen and (max-width: 320px) {
    .captcha-button {
      font-size: 14px;
    }
  }
}
</style>
