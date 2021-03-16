<template >
  <div>
    <!-- <div class="tanchuang" v-show="tanchuang">
      <a-alert message="请求失败" closable banner />
    </div>-->
    <div ref="element" class="home">
      <div>
        <div class="home-item">
          <div class="top">
            <span class="title">震动监控</span>
            <a-form-model layout="inline">
              <a-form-model-item>
                <a-input v-model="value" placeholder="请输入车牌号" />
              </a-form-model-item>
              <a-form-model-item>
                <a-button type="primary" @click="chaxun()">查询</a-button>
              </a-form-model-item>
              <a-form-model-item>
                <a-button type="primary" @click="chongzhi()">添加车辆</a-button>
              </a-form-model-item>
            </a-form-model>
          </div>
        </div>


      </div>


      <div id="singleDom" ref="singleDom" class="load" v-show="Loading">
        <a-spin
          tip="Loading..."
          style="top: 350px; position: absolute"
        ></a-spin>
      </div>
    </div>
      <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
  </div>
</template>

<script>
import store from "@/store";
import {
  product,
  getdeviceList,
  getdeviceData,
  onlinestatus,
} from "@/api/data";
import { Progress, Line } from "@antv/g2plot";
import XLSX from "xlsx";
import { divide, floor, size } from "lodash";
// import { set } from "vue/types/umd";
export default {
  name: "queryList",
  data() {
    return {
      alertvisible: false, //弹窗
      name: "",
      online: [],
      isactive: false, //颜色
      ceshi1: "1",
      value: "",
      Loading: false,
      min: 0, //折线图最小值
      data2: [],
      productList: [], //仓库数据
      productLIST: [], //原始仓库数据
      product: {},
      devicekey: [],
      devicekey1: [],
      deviceInfo: [],
      deviceData: [], //第一个tabpane数据
      devicename: [],
      productkey: [],
      cabletemp: [],
      cabletemp1: [],
      max1: 0, //点数
      max: 0,
      nodecount: 0, //点数数组
      nodeCount: 0, //点数
      tablelength: 0,
      columns1: [],
      columns: [],
      width: "",
      columnsceshi: [], //测试画表
      deviceDataceshi: [], //画表数据
      tempceshi: [],
      cabletempceshi: [],
      tanchuang: false, //判断弹窗是否显示
      warningmessage: "", //弹窗message
      columnstongji: [], //表格统计列
      tabletongji: [], //表格统计数据
      tabletongji1: [], //填入表格数组
      users: [
        {
          name: "仓库管理人员",
          value: "未知",
          name1: "仓库创建时间",
          value1: "未知",
          name2: "负责人",
          value2: "未知",
        },
        {
          name: "设备情况",
          value: "无",
          name1: "数据情况",
          value1: "无",
          name2: "其它信息",
          value2: "无",
        },
      ],
    };
  },
  created() {
    this.getproductList();
  },
  watch: {
    width() {
      // console.log("");
      setTimeout(() => {
        this.$refs.singleDom.style.width =
          this.$refs.element.clientWidth + "px";
      }, 50);
    },
    // productList(){
    //  return this.productList[0].status
    // }
  },
  mounted() {
    // this.progress();
    // console.log(document.getElementById("main"));
    // setTimeout(() => {
    //   this.progress();
    // }, 50);
    // this.settable()

    this.width = this.$refs.element.clientWidth + "px";
    setTimeout(() => {
      this.$refs.singleDom.style.width = this.$refs.element.clientWidth + "px";
    }, 50);

    window.onresize = () => {
      // this.drawpie();
      // console.log("dom");
      this.$refs.singleDom.style.width = this.$refs.element.clientWidth + "px";
      this.drawLine();
    };
  },
  updated() {
    // console.log(document.getElementById("main"));
  },
  methods: {
    //点击实测获取仓库最新一条数据
    shice() {
      this.deviceDataceshi = [];
      this.deviceData = [];
      this.cabletemp = [];
      this.getdevicedataceshi();
      // this.alertvisible = true;
      this.$notification.open({
        message: "实测已完成",
        icon: <a-icon type="check-circle" style="color: green" />,
        onClick: () => {
          // console.log("Notification Clicked!");
        },
      });
    },
    hideModal() {
      this.alertvisible = false;
    },

    footer(e) {
      //可返回整页表格数据
      //return 函数可返回一个table
    },

    //点击重置按钮 产品列表重新渲染 搜索框清零
    chongzhi() {
      this.productList = this.productLIST;
      this.value = "";
    },
    //模糊搜索 循环比对产品列表是否含有搜索内容，更新产品列表
    chaxun() {
      var arr = [];
      for (var i = 0; i < this.productList.length; i++) {
        if (this.productList[i].productName.indexOf(this.value) >= 0) {
          arr.push(this.productList[i]);
        }
      }
      this.productList = arr;
    },
    //导出表格
    //npm XLSX组件
    exportToExcel() {
      let workbook = XLSX.utils.table_to_book(
        document.getElementById("table111"),
        { raw: true }
      );
      try {
        XLSX.writeFile(workbook, this.name + ".xlsx");
      } catch (e) {
        // console.log(e, workbook);
      }
    },
    //获取产品列表
    async getproductList() {
      var _this = this;
      if (_this.$store.getters.productList.length != 0) {
        _this.productList = _this.$store.getters.productList;
        _this.productLIST = _this.$store.getters.productList;
        // console.log(_this.productList);
        _this.getonlinestatus();
      } else {
        const res = await product();
        // console.log("chakan");
        // console.log(res);
        if (res.code == 200) {
          _this.productList = res.data.productInfo;
          _this.productLIST = res.data.productInfo; //用来查找
          //  var ceshi=[]
          // console.log(_this.productList)
          _this.getonlinestatus();
          // console.log(_this.productList);
        } else {
          // _this.tanchuang = true;
          this.$notification.open({
            message: "请求失败",
            description: res.msg,
            onClick: () => {
              // console.log("Notification Clicked!");
            },
          });
        }
      }
    },
    //获取指定产品的所有设备状态统计信息
    async getonlinestatus() {
      var _this = this;
      for (let i = 0; i < _this.productList.length; i++) {
        // var obj={}
        const res = await onlinestatus({
          timeout: 10080,
          productKey: _this.productList[i].productKey,
        });
        //  _this.$forceUpdate(); // 修改对象的属性值后页面不重新渲染，强制更新数据
        _this.productList[i]["status"] =
          res.data.status.offline + res.data.status.online;

        _this.productList[i]["status1"] = (
          (res.data.status.online * 100) /
          (res.data.status.offline + res.data.status.online)
        ).toFixed(2);
        // _this.productLIST[i]["status"] = res.data;
        _this.productLIST[i]["status"] =
          res.data.status.offline + res.data.status.online;

        _this.productLIST[i]["status1"] = (
          (res.data.status.online * 100) /
          (res.data.status.offline + res.data.status.online)
        ).toFixed(2);
      }
      _this.$forceUpdate(); // 修改对象的属性值后页面不重新渲染，强制更新数据
      // _this.productList.push(0)
      // _this.productList.pop()
    },
    //获取设备列表
    async getDeviceList() {
      var _this = this;
      _this.devicekey = []; //设备devicekey数组清空
      _this.deviceData = [];
      const res = await getdeviceList({
        key: _this.product.productKey,
      });

      if (res.code == 200) {
        // _this.tanchuang = true;
        // console.log("0000000000");
        // console.log(res);
        _this.deviceInfo = res.data.deviceInfo;
        for (var i = 0; i < res.data.deviceInfo.length; i++) {
          _this.devicekey.push(res.data.deviceInfo[i].deviceKey); //所有设备的devicekey
          // _this.devicename.push(res.data.deviceInfo[i].deviceName);
          var key = res.data.deviceInfo[i].deviceKey;
          _this.devicename[key] = res.data.deviceInfo[i].deviceName;
          _this.productkey.push(res.data.deviceInfo[i].productKey);
        }
        _this.getdevicedataceshi(); //测试表格数据
        _this.Loading = false; //请求完成 loading=false
        // });
      } else {
        this.$notification.open({
          message: "请求失败",
          description: res.msg,
          onClick: () => {
            // console.log("Notification Clicked!");
          },
        });
      }
    },

    //获取设备具体数据
    async getdevicedataceshi() {
      var _this = this;
      var cabletempceshi1 = [];
      _this.columnstongji = []; //表格统计列
      _this.tabletongji = []; //表格统计数据
      _this.tabletongji1 = []; //填入表格数组
      var obj = {};
      var nowtime = new Date();
      const res = await getdeviceData({
        productKey: _this.product.productKey,
        deviceKey: _this.devicekey, //设备数组
        // }
      });
      // console.log(res);
      if (res.code == 200) {
        // console.log(res);

        _this.deviceDataceshi = [];
        _this.devicekey1 = [];
        _this.columnsceshi = [
          {
            title: "组",
            dataIndex: "zu",
            width: 60,
            align: "center",
            // fixed: "left",
            scopedSlots: { customRender: "zu" },
            customRender: (value, row, index) => {
              const obj = {
                children: value,
                attrs: {},
              };
              if (index % row.rownum1 === 0) {
                obj.attrs.rowSpan = row.rownum1;
              } else {
                obj.attrs.rowSpan = 0;
              }
              return obj;
            },
          },
          {
            title: "电缆",
            dataIndex: "name",
            width: 80,
            align: "center",
            // fixed: "left",
            scopedSlots: { customRender: "name" },
            customRender: (value, row, index) => {
              // console.log(row);
              const obj = {
                children: value,
                attrs: {},
              };
              obj.attrs.rowSpan = row.rownum;
              return obj;
            },
          },
          {
            title: "层",
            dataIndex: "ceng",
            align: "center",
            width: 70,
            // fixed: "left",
            // scopedSlots: { customRender: "name" },
          },
        ];
        for (var i = 0; i < 8; i++) {
          _this.columnsceshi.push({
            title: "第" + (i + 1) + "个点",
            dataIndex: "temp" + (i + 1),
            align: "center",
            width: 70,
            customRender: (text, row, index) => {
              if (parseFloat(text) > 30) {
                return <a style="color:red">{text}&#8451;</a>;
              } else {
                if (text == "*") {
                  return <a style="color:rgba(0, 0, 0, 0.65)">{text} </a>;
                } else {
                  return (
                    <a style="color:rgba(0, 0, 0, 0.65)">{text}&#8451; </a>
                  );
                }
              }
            },
            scopedSlots: { customRender: "temp" + (i + 1) },
          });
        }
        _this.min = res.data.deviceData[0].tempMin; //获取最小温度值
        _this.max1 = res.data.deviceData[0].nodeCount;
        for (var i = 0; i < res.data.deviceData.length; i++) {
          _this.devicekey1.push(res.data.deviceData[i].deviceKey); //有数据的devicekey1
          if (_this.nodecount < res.data.deviceData[i].nodeCount) {
            _this.nodecount = res.data.deviceData[i].nodeCount;
          }
          if (_this.min > res.data.deviceData[i].tempMin) {
            _this.min = res.data.deviceData[i].tempMin;
          }
          if (_this.max1 < res.data.deviceData[i].nodeCount) {
            _this.max1 = res.data.deviceData[i].nodeCount;
          }
        }
        // console.log(_this.max1);
        //回的数据正确
        if (_this.devicekey1.length == _this.devicekey.length) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            var obj = {
              historytempAverage: res.data.deviceData[i].tempAverage,
              historytempMax: res.data.deviceData[i].tempMax,
              historytempMin: res.data.deviceData[i].tempMin,
              temp: res.data.deviceData[i].cableTemp,
              name: res.data.deviceData[i].deviceName,
              date: res.data.deviceData[i].date,
              rssi: res.data.deviceData[i].rssi,
              vbat: res.data.deviceData[i].vbat,
              devicekey: res.data.deviceData[i].deviceKey,
              productkey: res.data.deviceData[i].productKey,
            };
            _this.cabletemp.push(res.data.deviceData[i].cableTemp); //3d
            _this.deviceData.push(obj); //折线图数据、
            cabletempceshi1 = JSON.parse(
              JSON.stringify(res.data.deviceData[i].cableTemp)
            ); //深拷贝
            //判断最近的一次日期是否在一个小时以内，如果在正常填充表格数据数据
            if (nowtime - 3600000 < Date.parse(res.data.deviceData[i].date)) {
              var shu = res.data.deviceData[i].cableTemp.length;
              // var quzheng = Math.ceil(shu / 8); //层数
              // for (let k = shu; k < quzheng * 8; k++) {
              //   cabletempceshi1.push("*");
              // }
              var quzheng = Math.ceil(_this.max1 / 8); //层数
              for (let k = shu; k < quzheng * 8; k++) {
                cabletempceshi1.push("*");
              }

              //    var quzheng = Math.ceil(shu / 10); //层数
              // for (let k = shu; k < quzheng * 10; k++) {
              //   cabletempceshi1.push("*");
              // }
              for (let m = 0; m < quzheng; m++) {
                var zushu = Math.floor(i / 4);
             
                var obj1 = {
                  zu: "第" + (zushu+1) + "组",
                  ceng: "第" + (m + 1) + "层",
                  name: res.data.deviceData[i].deviceName,
                  date: res.data.deviceData[i].date,
                  devicekey: res.data.deviceData[i].deviceKey,
                  productkey: res.data.deviceData[i].productKey,
                };

                if (m == 0) {
                  obj1["rownum"] = quzheng;
                  obj1["rownum1"] = quzheng * 4;
                } else {
                  obj1["rownum"] = 0;
                  obj1["rownum1"] = 0;
                }
                for (let n = 0; n < 8; n++) {
                  var key = "temp" + (n + 1);
                  obj1[key] = cabletempceshi1[n + m * 8];
                }
                //   for (let n = 0; n < 10; n++) {
                //   var key = "temp" + (n + 1);
                //   obj1[key] = cabletempceshi1[n + m * 10];
                // }
                var tongji = {};
                var tongjikey = "第" + (m + 1) + "层";
                tongji[tongjikey] = cabletempceshi1.slice(m * 8, m * 8 + 8);
                //  tongji[tongjikey] = cabletempceshi1.slice(m * 10, m * 10 + 10);
                _this.tabletongji.push(tongji);
                _this.deviceDataceshi.push(obj1); //表格数据
              }
            }
            //时间差大于1小时
            else {
              var shu = res.data.deviceData[i].cableTemp.length;
              // var quzheng = Math.ceil(shu / 8); //层数
              // for (let k = shu; k < quzheng * 8; k++) {
              //   cabletempceshi1.push("*");
              // }
              var quzheng = Math.ceil(_this.max1 / 8); //层数
              for (let k = shu; k < quzheng * 8; k++) {
                cabletempceshi1.push("*");
              }
              //     var quzheng = Math.ceil(shu / 10); //层数
              // for (let k = shu; k < quzheng * 10; k++) {
              //   cabletempceshi1.push("*");
              // }
              for (let m = 0; m < quzheng; m++) {
                var zushu = Math.floor(i / 4);
              
                var obj2 = {
                  zu: "第" + (zushu+1) + "组",
                  ceng: "第" + (m + 1) + "层",
                  name: res.data.deviceData[i].deviceName,
                  date: res.data.deviceData[i].date,
                  devicekey: res.data.deviceData[i].deviceKey,
                  productkey: res.data.deviceData[i].productKey,
                };
                if (m == 0) {
                  obj2["rownum"] = quzheng;
                  obj2["rownum1"] = quzheng * 4;
                } else {
                  obj2["rownum"] = 0;
                  obj2["rownum1"] = 0;
                }

                for (let n = 0; n < 8; n++) {
                  var key = "temp" + (n + 1);
                  obj2[key] = "*";
                }
                //  for (let n = 0; n < 10; n++) {
                //   var key = "temp" + (n + 1);
                //   obj2[key] = "*";
                // }
                _this.deviceDataceshi.push(obj2); //表格数据
              }
            }
          }
        } else {
          for (var i = 0; i < _this.devicekey.length; i++) {
            //找出无数据设备
            if (_this.devicekey1.indexOf(_this.devicekey[i]) == -1) {
              _this.nodeCount = 0;
              _this.deviceData.push({
                //折线图数据
                historytempAverage: "--",
                historytempMax: "--",
                historytempMin: "--",
                temp: "--",
                name: _this.devicename[_this.devicekey[i]],
                date: "--",
                rssi: "--",
                vbat: "--",
                devicekey: _this.devicekey[i],
                productkey: _this.productkey[i],
              });
              var cabletempceshi1 = [];
              // _this.deviceDataceshi.push({
              //   //表格数据
              //   ceng: "--",
              //   date: "--",
              //   // historytempAverage: "--",
              //   name: _this.devicename[_this.devicekey[i]],
              //   devicekey: _this.devicekey[i],
              //   productkey: _this.productkey[i],
              // });
              // var shu = res.data.deviceData[i].cableTemp.length;
              // var quzheng = Math.ceil(shu / 8); //层数
              // for (let k = shu; k < quzheng * 8; k++) {
              //   cabletempceshi1.push("*");
              // }
              var quzheng = Math.ceil(_this.max1 / 8); //层数
              for (let k = 0; k < quzheng * 8; k++) {
                cabletempceshi1.push("*");
              }
              // console.log(cabletempceshi1);
              //    var quzheng = Math.ceil(shu / 10); //层数
              // for (let k = shu; k < quzheng * 10; k++) {
              //   cabletempceshi1.push("*");
              // }
              for (let m = 0; m < quzheng; m++) {
                var zushu = Math.floor(i / 4);
              
                var obj1 = {
                  zu: "第" + (zushu+1) + "组",
                  ceng: "--",
                  // ceng: "--",
                  date: "--",
                  // historytempAverage: "--",
                  name: _this.devicename[_this.devicekey[i]],
                  devicekey: _this.devicekey[i],
                  productkey: _this.productkey[i],
                };
                if (m == 0) {
                  obj1["rownum"] = quzheng;
                  obj1["rownum1"] = quzheng * 4;
                } else {
                  obj1["rownum"] = 0;
                  obj1["rownum1"] = 0;
                }

                for (let n = 0; n < 8; n++) {
                  var key = "temp" + (n + 1);
                  obj1[key] = cabletempceshi1[n + m * 8];
                }
                var tongji = {};
                var tongjikey = "第" + (m + 1) + "层";
                tongji[tongjikey] = cabletempceshi1.slice(m * 8, m * 8 + 8);
                //  tongji[tongjikey] = cabletempceshi1.slice(
                //   m * 10,
                //   m * 10 + 10
                // );
                _this.tabletongji.push(tongji);
                _this.deviceDataceshi.push(obj1);
              }
              _this.cabletemp.push(["--"]);
            } else {
              //有返回数据 正常填充数据
              for (var j = 0; j < _this.devicekey1.length; j++) {
                if (_this.devicekey[i] == _this.devicekey1[j]) {
                  var obj = {
                    historytempAverage: res.data.deviceData[j].tempAverage,
                    historytempMax: res.data.deviceData[j].tempMax,
                    historytempMin: res.data.deviceData[j].tempMin,
                    temp: res.data.deviceData[j].cableTemp,
                    name: res.data.deviceData[j].deviceName,
                    date: res.data.deviceData[j].date,
                    rssi: res.data.deviceData[j].rssi,
                    vbat: res.data.deviceData[j].vbat,
                    devicekey: res.data.deviceData[j].deviceKey,
                    productkey: res.data.deviceData[j].productKey,
                  };
                  _this.deviceData.push(obj); //折线图数据
                  // _this.nodeCount = res.data.deviceData[0].cableTemp.length;
                  _this.cabletemp.push(res.data.deviceData[j].cableTemp);
                  cabletempceshi1 = JSON.parse(
                    JSON.stringify(res.data.deviceData[j].cableTemp)
                  ); //深拷贝
                  var shu = res.data.deviceData[j].cableTemp.length;
                  // var quzheng = Math.ceil(shu / 8); //层数
                  // for (let k = shu; k < quzheng * 8; k++) {
                  //   cabletempceshi1.push("*");
                  // }
                  var quzheng = Math.ceil(_this.max1 / 8); //层数
                  for (let k = shu; k < quzheng * 8; k++) {
                    cabletempceshi1.push("*");
                  }
                  //        var quzheng = Math.ceil(shu / 10); //层数
                  // for (let k = shu; k < quzheng * 10; k++) {
                  //   cabletempceshi1.push("*");
                  // }
                  for (let m = 0; m < quzheng; m++) {
                    var zushu = Math.floor(i / 4);//向下取整
                    var obj1 = {
                      zu: "第" + (zushu+1) + "组",
                      ceng: "第" + (m + 1) + "层",
                      historytempAverage: res.data.deviceData[j].tempAverage,
                      historytempMax: res.data.deviceData[j].tempMax,
                      historytempMin: res.data.deviceData[j].tempMin,
                      name: res.data.deviceData[j].deviceName,
                      date: res.data.deviceData[j].date,
                      rssi: res.data.deviceData[j].rssi,
                      vbat: res.data.deviceData[j].vbat,
                      devicekey: res.data.deviceData[j].deviceKey,
                      productkey: res.data.deviceData[j].productKey,
                    };
                    if (m == 0) {
                      obj1["rownum"] = quzheng;
                      obj1["rownum1"] = quzheng * 4;
                    } else {
                      obj1["rownum"] = 0;
                      obj1["rownum1"] = 0;
                    }
                    for (let n = 0; n < 8; n++) {
                      var key = "temp" + (n + 1);
                      obj1[key] = cabletempceshi1[n + m * 8];
                    }
                    // for (let n = 0; n < 10; n++) {
                    //   var key = "temp" + (n + 1);
                    //   obj1[key] = cabletempceshi1[n + m * 10];
                    // }
                    var tongji = {};
                    var tongjikey = "第" + (m + 1) + "层";
                    tongji[tongjikey] = cabletempceshi1.slice(m * 8, m * 8 + 8);
                    //  tongji[tongjikey] = cabletempceshi1.slice(
                    //   m * 10,
                    //   m * 10 + 10
                    // );
                    _this.tabletongji.push(tongji);
                    _this.deviceDataceshi.push(obj1);
                    // console.log('ceshi')
                    // console.log(_this.deviceDataceshi);
                  }
                  break;
                }
              }
            }
          }
        }
        // console.log(_this.tabletongji);
        var cengshu = [];
        for (var i of _this.tabletongji) {
          for (var j in i) {
            cengshu.push(j);
          }
        }
        var shuzu = [];
        var cengshu = Array.from(new Set(cengshu)); //数组去重
        for (var i = 0; i < cengshu.length; i++) {
          shuzu[i] = new Array();
          for (var j of _this.tabletongji) {
            for (var z in j) {
              if (cengshu[i] == z) {
                shuzu[i].push(j);
              }
            }
          }
        }
        var shuzu1 = [];
        _this.columnstongji.push({
          title: "统计",
          dataIndex: "temp",
          align: "center",
          width: 50,
          scopedSlots: { customRender: "temp" },
        });
        for (var i = 0; i < shuzu.length; i++) {
          shuzu1[i] = new Array();
          // 统计表格的列
          _this.columnstongji.push({
            title: "第" + (i + 1) + "层",
            dataIndex: "ceng" + (i + 1),
            align: "center",
            width: 50,
            customRender: (text, row, index) => {
              if (parseFloat(text) > 30) {
                return <a style="color:red">{text}&#8451; </a>;
              } else {
                return <a style="color:rgba(0, 0, 0, 0.65)">{text}&#8451; </a>;
              }
            },
            scopedSlots: { customRender: "ceng" + (i + 1) },
          });
          for (var j of shuzu[i]) {
            shuzu1[i].push(Object.values(j));
          }
        }
        // console.log(shuzu1)
        var shuzu2 = [];
        for (var i = 0; i < shuzu1.length; i++) {
          shuzu2[i] = shuzu1[i].flat(Infinity);
        }
        var zuigao = [];
        var zuidi = [];
        var pingjun = [];
        var shuzu3 = [];
        for (var i = 0; i < shuzu2.length; i++) {
          shuzu3[i] = new Array();
          for (var j = 0; j < shuzu2[i].length; j++) {
            if (shuzu2[i][j] != "*") {
              shuzu3[i].push(parseFloat(shuzu2[i][j]));
            }
          }
        }
        for (let i = 0; i < shuzu3.length; i++) {
          zuigao.push(Math.max.apply(null, shuzu3[i])); //层最高
          zuidi.push(Math.min.apply(null, shuzu3[i])); //层最低
          var sum = 0;
          for (let j = 0; j < shuzu3[i].length; j++) {
            sum = sum + shuzu3[i][j];
          }
          pingjun.push((sum / shuzu3[i].length).toFixed(1)); //四舍五入 层最低
        }
        var zuigaoobj = {
          temp: "最高温度",
        };
        var zuidiobj = { temp: "最低温度" };
        var pingjunobj = { temp: "平均温度" };
        for (let j = 0; j < zuigao.length; j++) {
          var key = "ceng" + (j + 1);
          zuigaoobj[key] = zuigao[j];
          zuidiobj[key] = zuidi[j];
          pingjunobj[key] = pingjun[j];
        }
        _this.tabletongji1.push(zuigaoobj);
        _this.tabletongji1.push(zuidiobj);
        _this.tabletongji1.push(pingjunobj);
        // console.log(_this.tabletongji1); //填入表格统计数据
        _this.tabclick(0); //一进去页面就进入显示第一个设备数据
      } else {
        this.$notification.open({
          message: "请求失败",
          description: res.msg,
          onClick: () => {
            // console.log("Notification Clicked!");
          },
        });
      }
      // _this.settable()
      // console.log(_this.deviceDataceshi);
    },

    //画3d图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var _this = this;
      var arr = new Array();
      var raw = Math.floor(_this.cabletemp.length / 4); //分为四组
      // console.log(raw);
      var row = _this.cabletemp.length % 4;
      var index = 0;
      for (var i = 0; i < 4; i++) {
        //  arr[i]=i
        // a[i]=[1+4,i+4,i]
        arr[i] = new Array();
        for (var j = 0; j < raw; j++) {
          arr[i][j] = new Array();
          for (var k = 0; k < _this.cabletemp[index].length; k++) {
            arr[i][j][k] = _this.cabletemp[index][k];
            // cabletemp.shift()
          }
          index++;
        }
      }

      if (row != 0) {
        for (var i = 0; i < row; i++) {
          arr[i][raw] = [];
          // console.log(arr[i]);
          for (var k = 0; k < _this.cabletemp[index].length; k++) {
            arr[i][raw][k] = _this.cabletemp[index][k];
          }
          index++;
        }
      }

      var arr1 = [];
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          for (var k = 0; k < arr[i][j].length; k++) {
            var arr2 = new Array();
            arr2 = [i+1, j+1, k, arr[i][j][k]];
            arr1.push(arr2);
          }
        }
      }
      //  console.log(arr1);
      var myChart = _this.$echarts.init(document.getElementById("main"));
      var option = {
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "cross",
          },
        },
        visualMap: [
          {
            top: 10,
            show: true,
            textStyle: {
              color: "#000",
            },
            orient: "horizontal",
            left: "20px",
            pieces: [
              {
                gt: -100,
                lte: 0,
                // color: "#6494ED",
                color: "#4EEE94",
              },
              {
                gt: 0,
                lte: 30,

                color: "#6494ED",
              },
              {
                gt: 30,
                color: "#FF6A6A",
              },
            ],
          },
        ],
        //  legend: {
        //    orient:'horizontal'
        //   },

        grid3D: {
          // show:false,

          axisLine: {
            lineStyle: {
              color: "#888888",
              opacity: 1,
            },
          },
          splitLine: {
            //网格线
            // show: false,
            lineStyle: {
              color: "#888888",
              opacity: 1,
            },
          },
          axisPointer: {
            show: false,
          },
          // spliteArea: {
          //   show: true,
          //   interval: 0,
          //   areaStyle: {
          //     color:'#eee',
          //     color: ["rgba(250,250,250,1)", "rgba(238,238,238,1)"],
          //     color: ["rgba(238,238,238,1)"]
          //   }
          // },
          // enviroment: "#eee"
        },
        xAxis3D: {
          name: "电缆",
          interval: 1,
          min:1,
          // max: 10,
          splitArea: {
            show: true,
            interval: 1,
            areaStyle: {
              color: ["rgba(238,238,238,0.3)"],
            },
          },
        },
        yAxis3D: {
          name: "组",
          min:1,
          interval: 1,
          // max: 10,
          splitArea: {
            show: true,
            interval: 1,
            areaStyle: {
              color: ["rgba(238,238,238,0.3)"],
            },
          },
        },
        zAxis3D: {
          name: "层",
          // max: 10
          // splitArea: {
          //   show: true,
          // interval: 8
          // }
        },

        series: [
          {
            type: "scatter3D",
            symbolSize: 8,
            data: arr1, //填充数据
            itemStyle: {
              opacity: 1,
            },
            // encode: {
            //   x: "Country",
            //   y: "Life Expectancy",
            //   z: "Income"
            //   // tooltip: [0, 1, 2, 3, 4]
            // },
            dimensions: ["组", "电缆", "层", "当前温度"],
          },
        ],
      };
      // 指定图表的配置项和数据
      myChart.setOption(option);
      myChart.resize(); //画图自适应
    },
    tabclick(e) {
      //点击tab 传参key
      // console.log(e);
      var temp = [];
      this.min = this.cabletemp[e][0];
      this.max = this.cabletemp[e][0];
      this.nodeCount = this.cabletemp[e].length;
      //判断key对应的数据是否为-- 如果是重新赋值画图数据，不是正常赋值
      if (this.cabletemp[e][0] == "--") {
        temp.push("--");
        this.min = 0.1;
        this.nodeCount = "--";
      } else {
        for (var i = 0; i < this.cabletemp[e].length; i++) {
          temp.push({
            key: "第" + (i + 1) + "层",
            value: parseFloat(this.cabletemp[e][i]),
          });
          if (this.min > this.cabletemp[e][i]) {
            this.min = this.cabletemp[e][i];
          }
          if (this.max < this.cabletemp[e][i]) {
            this.max = this.cabletemp[e][i];
          }
        }
      }
      //画折线图
      setTimeout(() => {
        const linePlot = new Line(document.getElementById("zhexiantu" + e), {
          title: {
            visible: true,
            text: "各点最新温度",
          },
          // description: {
          //   visible: true,
          //   text: "将折线图上的每一个数据点显示出来，作为辅助阅读。",
          // },
          forceFit: true,
          padding: "auto",
          data: temp,
          xField: "key",
          yField: "value",
          point: {
            visible: true,
          },
          label: {
            visible: true,
            type: "point",
          },
          yAxis: {
            max:parseFloat(this.max) + 0.1,
            min: parseFloat(this.min) - 0.1,
          },
        });
        linePlot.render();
      }, 20);
    },

    tabClick(e) {
      setTimeout(() => {
        this.drawLine();
        // this.settable();
      }, 10);

      // console.log(e);
      // console.log("111111");
      // if (e === 2) {
      // setTimeout(() => {
      //   this.drawLine();
      // }, 10);

      // }
    },
    callback(key) {
      // console.log(key);
    },
    ceshi(a) {
      this.Loading = true;
      this.product = {};
      this.ceshi1 = "2";
      this.product = a;
      // console.log("产品数据");
      // console.log(a);
      this.cabletemp = [];
      this.name = a.productName;
      this.getDeviceList();
    },
    fanhui() {
      this.ceshi1 = "1";
      // setTimeout(() => {
      //   this.progress();
      // }, 50);
      // this.deviceKey = [];
      // this.deviceData = [];
    },
    progress() {
      for (var i = 0; i < this.productList.length; i++) {
        const progress = new Progress(document.getElementById("progress" + i), {
          width: 200,
          height: 50,
          percent: 0.6,
          // percent: 60 / 100,
          color: ["#30BF78", "#E8EDF3"],
        });
        progress.render();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  // background: #ffffff;
  margin: 10px auto;
  width: 100%;
  // height: 650px;
  background: #ffffff;
  // text-align: center;
  .load {
    height: 750px;
    z-index: 5000;
    // background: #eeeeee;
    opacity: 0.7;
    position: absolute;
    top: 70px;
    text-align: center;
    margin: 0 auto;
  }
  .home-item {
    background: #ffffff;
    box-shadow: 5px 5px 5px #888888;
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
  .cangku {
    .card {
      margin: 15px 5px 15px 0px;
      box-shadow: 5px 5px 5px #888888;
      border-radius: 10px;
    }
  }
  .iconfont {
    font-size: 40px;
  }
  .line {
    height: 10px;
    background-color: #f0f2f5;
  }
  .xiangxidevice {
    .device {
      padding: 10px 40px 10px 20px;
      .device-item {
        font-size: 18px;
      }
      .device-item1 {
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
  .active {
    color: red;
  }
  .erroractive {
    color: #1980ff;
  }
  .tanchuang {
    // height: 100px;
    z-index: 5000;
    width: 200px;
    // background: #eeeeee;
    // opacity: 0.7;
    position: absolute;
    top: 100px;
    text-align: center;
    margin: 0 auto;
  }
}

.gridtable {
  width: 99.8%;
  font-family: verdana, arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
  border-width: 1px;
  border-color: #e8e8e8;
  border-collapse: collapse;
  text-align: center;
}
.gridtable td {
  border-width: 1px;
  padding: 14px;
  border-style: solid;
  border-color: #e8e8e8;
  background-color: #ffffff;
}
.tabletitle {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  //  margin: 0 auto;
}
</style>
