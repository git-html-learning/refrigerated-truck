<template>
  <div>
    <div v-show="showPage === '0'">
      <a-row :gutter="[8, 8]">
        <a-col :span="18">
          <a-card title="厢内温湿度监测" style="height: 400px" class="shadow" hoverable>
            <a slot="extra" @click="openHumi">更多</a>
            <a-row type="flex" style="height: 50px; font-size: 16px">
              <a-col :span="4" @click="hisTem1">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">监测点1</p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span
                      style="padding-left: 16px; font-size: 14px"
                      :class="[humiHandleData[0].temp<this.tempUp&& humiHandleData[0].temp>this.tempDown? '' : 'error']"
                    >
                      温度：
                      <span style="font-size: 20px">{{ humiHandleData[0].temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[0].humi<this.humiUp&& humiHandleData[0].humi>this.humiDown? '' : 'error']"
                      >{{ humiHandleData[0].humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">监测点2</p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[1].temp<this.tempUp&& humiHandleData[1].temp>this.tempDown? '' : 'error']"
                      >{{ humiHandleData[1].temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[1].humi<this.humiUp&& humiHandleData[1].humi>this.humiDown? '' : 'error']"
                      >{{ humiHandleData[1].humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">监测点3</p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[2].temp<this.tempUp&& humiHandleData[2].temp>this.tempDown? '' : 'error']"
                      >{{ humiHandleData[2].temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[2].humi<this.humiUp&& humiHandleData[2].humi>this.humiDown? '' : 'error']"
                      >{{ humiHandleData[2].humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">监测点4</p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[3].temp<this.tempUp&& humiHandleData[3].temp>this.tempDown? '' : 'error']"
                      >{{ humiHandleData[3].temp }}℃</span>
                    </span>
                    <span
                      style="padding-left: 16px; font-size: 14px"
                      :class="[humiHandleData[3].humi<this.humiUp&& humiHandleData[3].humi>this.humiDown? '' : 'error']"
                    >
                      湿度：
                      <span style="font-size: 20px">{{ humiHandleData[3].humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">监测点5</p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[4].temp<this.tempUp&& humiHandleData[4].temp>this.tempDown? '' : 'error']"
                      >{{ humiHandleData[4].temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[4].humi<this.humiUp&& humiHandleData[4].humi>this.humiDown? '' : 'error']"
                      >{{ humiHandleData[4].humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
              <a-col :span="4" @click="hisTem1">
                <a-col :span="6" style="padding-top: 12px; text-align: center">
                  <p style="font-size: 14px">监测点6</p>
                </a-col>
                <a-col :span="18" style="padding-top: 0px; font-weight: bold">
                  <div class="container">
                    <span style="padding-left: 16px; font-size: 14px">
                      温度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[5].temp<this.tempUp&& humiHandleData[5].temp>this.tempDown? '' : 'error']"
                      >{{ humiHandleData[5].temp }}℃</span>
                    </span>
                    <span style="padding-left: 16px; font-size: 14px">
                      湿度：
                      <span
                        style="font-size: 20px"
                        :class="[humiHandleData[5].humi<this.humiUp&& humiHandleData[5].humi>this.humiDown? '' : 'error']"
                      >{{ humiHandleData[5].humi }}%</span>
                    </span>
                  </div>
                </a-col>
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="24">
                <div class="carriage1">
                  <img src="../../static/pic/carriage2.png" width="80%" height="160vh" />
                </div>
              </a-col>
            </a-row>

            <a-row>
              <a-col :span="12" style="padding-top: 28px; text-align: right" @click="hisTem1">
                <p style="font-size: 14px">厢外监测点(监测点7)</p>
              </a-col>
              <a-col :span="12" style="padding-top: 10px; font-weight: bold">
                <div class="container">
                  <span style="padding-left: 16px; font-size: 14px">
                    温度：
                    <span
                      style="font-size: 20px"
                      :class="[humiHandleData[6].temp<this.tempUp&& humiHandleData[6].temp>this.tempDown? '' : 'error']"
                    >{{ humiHandleData[6].temp }}℃</span>
                  </span>
                  <span style="padding-left: 16px; font-size: 14px">
                    湿度：
                    <span
                      style="font-size: 20px"
                      :class="[humiHandleData[6].humi<this.humiUp&& humiHandleData[6].humi>this.humiDown? '' : 'error']"
                    >{{ humiHandleData[6].humi }}%</span>
                  </span>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </a-col>

        <a-col :span="6">
          <a-card
            :title="this.carNum"
            :bordered="true"
            style="height: 400px"
            class="shadow"
            hoverable
          >
            <a slot="extra" @click="openOil">更多</a>
            <div id="oil" class="oil"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="6">
          <a-card title="车门" style="height: 220px" class="shadow" hoverable>
            <a slot="extra" @click="hisDoor()">更多</a>
            <a-col :span="12" style="text-align: center">
              <div>
                <p v-show="!door1">
                  <img src="../../static/icon/开门1.svg" />
                </p>
                <p v-show="door1">
                  <img src="../../static/icon/关门1.svg" />
                </p>
                <p>&nbsp;&nbsp;侧门</p>
                <el-tag v-show="!door1" type="danger">已开启</el-tag>
                <el-tag v-show="door1">已关闭</el-tag>
              </div>
            </a-col>
            <a-col :span="12" style="text-align: center">
              <div>
                <p v-show="!door2">
                  <img src="../../static/icon/开门1.svg" />
                </p>
                <p v-show="door2">
                  <img src="../../static/icon/关门1.svg" />
                </p>
                <p>&nbsp;&nbsp;后门</p>
                <el-tag v-show="!door2" type="danger">已开启</el-tag>
                <el-tag v-show="door2">已关闭</el-tag>
              </div>
            </a-col>
          </a-card>
        </a-col>

        <a-col :span="9">
          <a-card title="灯开关" style="height: 220px" class="shadow" hoverable>
            <!-- <a slot="extra" @click="show()">更多</a> -->
            <a-col :span="8" style="text-align: center">
              <div>
                <a-spin tip="等待响应" :spinning="spinning1">
                  <p v-show="light1">
                    <img src="../../static/icon/开灯1.svg" style="width: 60px" />
                  </p>
                  <p v-show="!light1">
                    <img src="../../static/icon/关灯1.svg" style="width: 60px" />
                  </p>
                  <p>照明灯</p>
                </a-spin>

                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  :defaultChecked="defaultChecked"
                  @change="changeLight1"
                />
              </div>
            </a-col>
            <a-col :span="8" style="text-align: center">
              <div>
                <p v-show="light2">
                  <img src="../../static/icon/开灯1.svg" style="width: 60px" />
                </p>
                <p v-show="!light2">
                  <img src="../../static/icon/关灯1.svg" style="width: 60px" />
                </p>
                <p>杀菌灯</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="light2 = !light2"
                />
              </div>
            </a-col>
            <a-col :span="8" style="text-align: center">
              <div>
                <p v-show="light3">
                  <img src="../../static/icon/开灯1.svg" style="width: 60px" />
                </p>
                <p v-show="!light3">
                  <img src="../../static/icon/关灯1.svg" style="width: 60px" />
                </p>
                <p>消毒灯</p>
                <a-switch
                  checked-children="开"
                  un-checked-children="关"
                  default-checked
                  @click="light3 = !light3"
                />
              </div>
            </a-col>
          </a-card>
        </a-col>

        <a-col :span="9">
          <a-card title="报警装置" style="height: 220px" class="shadow" hoverable>


            <a-col :span="8" style="padding-left: 20px; padding-top: 10px; text-align: center">
              <span v-show="!alert">
                <img src="../../static/icon/红色警报.svg" style="width: 100px" />
                <br />困人报警
              </span>
              <span v-show="alert">
                <img src="../../static/icon/未报警.svg" style="width: 100px" />
                <br />无困人报警
              </span>
            </a-col>
            <a-col :span="8" style="padding-left: 20px; padding-top: 10px; text-align: center">
              <span v-show="!alert">
                <img src="../../static/icon/红色警报.svg" style="width: 100px" />
                <br />温湿度报警
              </span>
              <span v-show="alert">
                <img src="../../static/icon/未报警.svg" style="width: 100px" />
                <br />无温湿度报警
              </span>
            </a-col>
            <a-col :span="8" style="padding-left: 20px; padding-top: 10px; text-align: center">
              <span v-show="!alert">
                <img src="../../static/icon/红色警报.svg" style="width: 100px" />
                <br />胎温胎压报警
              </span>
              <span v-show="alert">
                <img src="../../static/icon/未报警.svg" style="width: 100px" />
                <br />无胎温胎压报警
              </span>
            </a-col>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="16">
          <a-card title="胎温胎压" hoverable style="height: 350px" class="shadow">
            <a slot="extra" @click="openTire">更多</a>

            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[0].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[0].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[0].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[0].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[1].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[1].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[1].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[1].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[4].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[4].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[4].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[4].tirePress}}kPa</span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[5].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[5].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[5].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[5].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[8].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[8].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[8].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[8].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[9].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[9].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[9].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[9].tirePress}}kPa</span>
                </a-col>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="2"></a-col>
              <a-col :span="21">
                <img src="../../static/pic/3.png" style="width: 70%; margin-left: 15%" />
              </a-col>
              <a-col :span="1"></a-col>
            </a-row>
            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[2].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[2].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[2].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[2].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[3].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[3].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[3].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[3].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[6].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[6].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[6].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[6].tirePress}}kPa</span>
                </a-col>
              </a-col>
            </a-row>
            <a-row type="flex" style="height: 40px; font-size: 16px">
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[7].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[7].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[7].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[7].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[10].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[10].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[10].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[10].tirePress}}kPa</span>
                </a-col>
              </a-col>
              <a-col :span="8">
                <a-col :span="6" style="text-align: center">
                  <img src="../../static/icon/轮胎1.svg" @click="hisTire()" style="width: 30px" />
                </a-col>
                <a-col :span="18" style="padding-top: 4px; font-weight: bold">
                  <span style="font-size: 13px">胎温:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[11].tireTemp)<parseInt(this.tireTempUp)? '' : 'error']"
                  >{{tireHandleData[11].tireTemp}}℃</span> &nbsp;&nbsp;
                  <span style="font-size: 13px">胎压:</span>
                  <span
                    style="font-size: 16px"
                    :class="[parseInt(tireHandleData[11].tirePress)<parseInt(this.tirePressUp)? '' : 'error']"
                  >{{tireHandleData[11].tirePress}}kPa</span>
                </a-col>
              </a-col>
            </a-row>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card title="车辆震动曲线图" style="height: 350px" class="shadow" hoverable>
            <a slot="extra" @click="openVib">更多</a>
            <div id="main7" style="height: 290px; margin-left: 20px; margin-top: -20px"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <a-card :title="title1" style="height: 285px" class="shadow" hoverable>
            <baidu-map
              class="map"
              :center="center"
              :zoom="15"
              :scroll-wheel-zoom="true"
            >
              <bm-marker
                :position="center"
                :dragging="false"
                animation="BMAP_ANIMATION_BOUNCE"
                :icon="{
                  url: require('../../static/pic/卡车.png'),
                  size: { width: 50, height: 50 },
                }"
              ></bm-marker>
              <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
            </baidu-map>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <a-modal
      title="设置温湿度阈值"
      :visible="humiDialogVisible"
      @ok="setHumiValue"
      @cancel="humiDialogVisible = false"
      width="500px"
    >
      <a-form-model :label-col="{ span: 7 }">
        <a-form-model-item label="温度下限/℃" :wrapper-col="{ span: 12 }">
          <a-input v-model="tempDown" />
        </a-form-model-item>
        <a-form-model-item label="温度上限/℃" :wrapper-col="{ span: 12 }">
          <a-input v-model="tempUp" />
        </a-form-model-item>
        <a-form-model-item label="湿度下限/%" :wrapper-col="{ span: 12 }">
          <a-input v-model="humiDown" />
        </a-form-model-item>
        <a-form-model-item label="湿度上限/%" :wrapper-col="{ span: 12 }">
          <a-input v-model="humiUp" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <a-modal
      title="设置胎温胎压阈值"
      :visible="tireDialogVisible"
      @ok="setTireValue"
      @cancel="tireDialogVisible = false"
      width="500px"
    >
      <a-form-model :label-col="{ span: 7 }">
        <a-form-model-item label="胎温上限/℃" :wrapper-col="{ span: 12 }">
          <a-input v-model="tireTempUp" />
        </a-form-model-item>
        <a-form-model-item label="胎压上限/bar" :wrapper-col="{ span: 12 }">
          <a-input v-model="tirePressUp" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>

    <div v-show="showPage === '1'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="humiBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>
        <a-tabs v-model="humiTabname" tab-position="left" :key="humiTabKey" @tabClick="tabclick">
          <a-tab-pane v-for="(item, index) in sensorList" :key="index" :tab="item.name">
            <div style="font-size: 26px; font-weight: 600">
              <span>{{ item.name }}</span>
            </div>
            <div style="font-size: 22px; font-weight: 600; line-height: 50px">
              <span>数据最后上传时间：{{ item.date }}</span>
            </div>
            <div v-if="!humiDataShow" style="text-align: center">
              <svg
                t="1657543275917"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1810"
                width="200"
                height="200"
              >
                <path
                  d="M102.4 896a409.6 51.2 0 1 0 819.2 0 409.6 51.2 0 1 0-819.2 0Z"
                  fill="#4A68CC"
                  opacity=".1"
                  p-id="1811"
                />
                <path
                  d="M116.736 376.832c0 8.704 6.656 15.36 15.36 15.36s15.36-6.656 15.36-15.36-6.656-15.36-15.36-15.36c-8.192 0-15.36 7.168-15.36 15.36zM926.72 832c-19.456 5.12-23.552 9.216-28.16 28.16-5.12-19.456-9.216-23.552-28.16-28.16 18.944-5.12 23.552-9.216 28.16-28.16 4.608 18.944 8.704 23.552 28.16 28.16zM202.24 323.072c-25.088 6.656-30.208 11.776-36.864 36.864-6.656-25.088-11.776-30.208-36.864-36.864 25.088-6.656 30.208-12.288 36.864-36.864 6.144 25.088 11.776 30.208 36.864 36.864zM816.64 235.008c-15.36 4.096-18.432 7.168-22.528 22.528-4.096-15.36-7.168-18.432-22.528-22.528 15.36-4.096 18.432-7.168 22.528-22.528 3.584 15.36 7.168 18.432 22.528 22.528zM882.688 156.16c-39.936 10.24-48.128 18.944-58.88 58.88-10.24-39.936-18.944-48.128-58.88-58.88 39.936-10.24 48.128-18.944 58.88-58.88 10.24 39.424 18.944 48.128 58.88 58.88z"
                  fill="#4A68CC"
                  opacity=".5"
                  p-id="1812"
                />
                <path
                  d="M419.84 713.216v4.096l33.792 31.232 129.536-62.976L465.92 760.832v36.864l18.944-18.432v-0.512 0.512l18.944 18.432 100.352-122.88v-4.096z"
                  fill="#4A68CC"
                  opacity=".2"
                  p-id="1813"
                />
                <path
                  d="M860.16 551.936v-1.024c0-1.024-0.512-1.536-0.512-2.56v-0.512l-110.08-287.232c-15.872-48.64-60.928-81.408-112.128-81.408H387.072c-51.2 0-96.256 32.768-112.128 81.408L164.864 547.84v0.512c-0.512 1.024-0.512 1.536-0.512 2.56V757.76c0 65.024 52.736 117.76 117.76 117.76h460.8c65.024 0 117.76-52.736 117.76-117.76v-204.8c-0.512-0.512-0.512-0.512-0.512-1.024zM303.616 271.36s0-0.512 0.512-0.512C315.392 233.984 349.184 209.92 387.072 209.92h249.856c37.888 0 71.68 24.064 83.456 60.416 0 0 0 0.512 0.512 0.512l101.888 266.24H588.8c-8.704 0-15.36 6.656-15.36 15.36 0 33.792-27.648 61.44-61.44 61.44s-61.44-27.648-61.44-61.44c0-8.704-6.656-15.36-15.36-15.36H201.728L303.616 271.36zM829.44 757.76c0 48.128-38.912 87.04-87.04 87.04H281.6c-48.128 0-87.04-38.912-87.04-87.04v-189.44h226.816c7.168 43.52 45.056 76.8 90.624 76.8s83.456-33.28 90.624-76.8H829.44v189.44z"
                  fill="#4A68CC"
                  opacity=".5"
                  p-id="1814"
                />
                <path
                  d="M512 578.56c-14.336 0-25.6-11.264-25.6-25.6V501.76H253.44l83.968-219.136 0.512-1.024c7.168-21.504 26.624-35.84 49.152-35.84h249.856c22.528 0 41.984 14.336 49.152 35.84l0.512 1.024L770.56 501.76H537.6v51.2c0 14.336-11.264 25.6-25.6 25.6z"
                  fill="#4A68CC"
                  opacity=".2"
                  p-id="1815"
                />
              </svg>
              <p>当前监测点20天内无历史数据</p>
            </div>
            <div v-if="humiDataShow">
              <a-spin tip="正在请求历史数据" :spinning="humiSpinning">
                <div
                  id="chart"
                  ref="chart"
                  style="height: 300px; width: 1450px"
                  v-if="humiTabname === index"
                ></div>
              </a-spin>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '3'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="tireBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>

        <a-tabs
          v-model="tireTabname"
          type="card"
          :default-active-key="tireTabKey"
          @tabClick="tabclick1"
        >
          <a-tab-pane v-for="(item, index) in tireList" :key="index" :tab="item.name">
            <div style="font-size: 26px; font-weight: 600; margin-left: 50px">
              <span>{{ item.name }}</span>
            </div>
            <div
              style="
                font-size: 22px;
                font-weight: 600;
                line-height: 50px;
                margin-left: 50px;
              "
            >
              <span>数据最后上传时间：{{ item.date }}</span>
            </div>
            <div v-if="!tireDataShow" style="text-align: center;">
             <svg t="1657546223449" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2017" width="200" height="200"><path d="M102.4 896a409.6 51.2 0 1 0 819.2 0 409.6 51.2 0 1 0-819.2 0Z" fill="#4A68CC" opacity=".1" p-id="2018"></path><path d="M116.736 376.832c0 8.704 6.656 15.36 15.36 15.36s15.36-6.656 15.36-15.36-6.656-15.36-15.36-15.36c-8.192 0-15.36 7.168-15.36 15.36zM926.72 832c-19.456 5.12-23.552 9.216-28.16 28.16-5.12-19.456-9.216-23.552-28.16-28.16 18.944-5.12 23.552-9.216 28.16-28.16 4.608 18.944 8.704 23.552 28.16 28.16zM202.24 323.072c-25.088 6.656-30.208 11.776-36.864 36.864-6.656-25.088-11.776-30.208-36.864-36.864 25.088-6.656 30.208-12.288 36.864-36.864 6.144 25.088 11.776 30.208 36.864 36.864zM816.64 235.008c-15.36 4.096-18.432 7.168-22.528 22.528-4.096-15.36-7.168-18.432-22.528-22.528 15.36-4.096 18.432-7.168 22.528-22.528 3.584 15.36 7.168 18.432 22.528 22.528zM882.688 156.16c-39.936 10.24-48.128 18.944-58.88 58.88-10.24-39.936-18.944-48.128-58.88-58.88 39.936-10.24 48.128-18.944 58.88-58.88 10.24 39.424 18.944 48.128 58.88 58.88z" fill="#4A68CC" opacity=".5" p-id="2019"></path><path d="M419.84 713.216v4.096l33.792 31.232 129.536-62.976L465.92 760.832v36.864l18.944-18.432v-0.512 0.512l18.944 18.432 100.352-122.88v-4.096z" fill="#4A68CC" opacity=".2" p-id="2020"></path><path d="M860.16 551.936v-1.024c0-1.024-0.512-1.536-0.512-2.56v-0.512l-110.08-287.232c-15.872-48.64-60.928-81.408-112.128-81.408H387.072c-51.2 0-96.256 32.768-112.128 81.408L164.864 547.84v0.512c-0.512 1.024-0.512 1.536-0.512 2.56V757.76c0 65.024 52.736 117.76 117.76 117.76h460.8c65.024 0 117.76-52.736 117.76-117.76v-204.8c-0.512-0.512-0.512-0.512-0.512-1.024zM303.616 271.36s0-0.512 0.512-0.512C315.392 233.984 349.184 209.92 387.072 209.92h249.856c37.888 0 71.68 24.064 83.456 60.416 0 0 0 0.512 0.512 0.512l101.888 266.24H588.8c-8.704 0-15.36 6.656-15.36 15.36 0 33.792-27.648 61.44-61.44 61.44s-61.44-27.648-61.44-61.44c0-8.704-6.656-15.36-15.36-15.36H201.728L303.616 271.36zM829.44 757.76c0 48.128-38.912 87.04-87.04 87.04H281.6c-48.128 0-87.04-38.912-87.04-87.04v-189.44h226.816c7.168 43.52 45.056 76.8 90.624 76.8s83.456-33.28 90.624-76.8H829.44v189.44z" fill="#4A68CC" opacity=".5" p-id="2021"></path><path d="M512 578.56c-14.336 0-25.6-11.264-25.6-25.6V501.76H253.44l83.968-219.136 0.512-1.024c7.168-21.504 26.624-35.84 49.152-35.84h249.856c22.528 0 41.984 14.336 49.152 35.84l0.512 1.024L770.56 501.76H537.6v51.2c0 14.336-11.264 25.6-25.6 25.6z" fill="#4A68CC" opacity=".2" p-id="2022"></path></svg>
              <p>该轮胎20天内无数据</p>
            </div>
            <div v-if="tireDataShow">
              <a-spin tip="正在请求历史数据" :spinning="tireSpinning">
                <div
                  id="chart1"
                  ref="chart1"
                  style="height: 300px; width: 1450px; margin-left: 50px"
                  v-if="tireTabname === index"
                ></div>
              </a-spin>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div v-show="showPage === '4'">
      <div class="home1">
        <div>
          <i
            class="iconfont icon-ai207"
            @click="doorBack()"
            style="fontsize: 20px; padding: 0px 0px 0px 10px; align: left"
          ></i>
        </div>
        <a-spin tip="正在请求历史数据" :spinning="doorSpinning">
          <div id="chart3" ref="chart3" style="height: 500px; width: 1450px; margin-left: 50px"></div>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDevice,
  getDeviceData,
  getDeviceHisData,
  changeLight
} from "@/api/interface";
import { person, editPerson } from "@/api/user";
import * as echarts from "echarts";
export default {
  created() {
    this.getQuery();
  },

  mounted() {
    // console.log("1");
    this.timer = setInterval(this.getQuery, 60000);
  },
  updated() {
    this.drawOil();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },

  data() {
    return {
      title1: "",
      showPage: "0", //初始页面
      humiTabKey: "1", //温湿度tabs初始值
      tireTabKey: "1", //胎温tabs初始值
      humiTabname: 0,
      tireTabname: 0,
      oilData: "70", //油位
      volData: "22", //剩余容积
      capData: "45", //载重量
      door1: true,
      door2: false,
      light1: null,
      defaultChecked: null,
      light2: true,
      light3: true,
      spinning1: false,
      humiSpinning: false,
      tireSpinning: false,
      doorSpinning: false,
      alert: true,
      // num: "1", //冷机温度
      coor: {
        lng: 117.192,
        lat: 31.771
      },
      productkey: "", //传递过来的pk
      carNum: "", //传递过来的车牌号
      humiDkList: [],
      humiOriData: [], //温湿度传感数据器原始数组
      humiHandleData: [], //处理完的温湿度数据数组
      doorDkList: [],
      alarmDkList: [],
      tireDkList: [],
      devicerankList: [
        //报警条数排名
        { count: "5", deviceName: "温度传感器3" },
        { count: "2", deviceName: "温度传感器2" },
        { count: "2", deviceName: "温度传感器1" },
        { count: "2", deviceName: "胎温传感器3" },
        { count: "1", deviceName: "胎压传感器8" },
        { count: "1", deviceName: "胎温传感器5" }
        // {count:"9",deviceName:"温度传感器6",},
      ],
      sensorList: [],
      hisStartTime: "",
      hisEndTime: "",
      hisDate: [],
      hisTemp: [],
      hisHumi: [],
      maxtemp: "",
      mintemp: "",
      maxhumi: "",
      minhumi: "",
      hisTireDate: [],
      hisTireTemp: [],
      hisTirePress: [],
      maxtiretemp: "",
      mintiretemp: "",
      maxtirepress: "",
      mintirepress: "",
      hisVibDate: [],
      hisVib: [],

      doorOriData: [],
      doorHandleData: [],
      hisDoorDate: [],
      hisDoor1: [],
      hisDoor2: [],

      tireOriData: [],
      tireHandleData: [],
      tireList: [],

      lightOriData: [],
      lightHandleData: [],

      tempUp: "40",
      humiUp: "100",
      tempDown: "-30",
      humiDown: "40",
      tireTempUp: "90",
      tirePressUp: "10",
      shake: "",
      oil: "",
      humiDialogVisible: false,
      tireDialogVisible: false,
      timer: "",
      humiDataShow: true,
      tireDataShow: true,
      center: {
        lng:"",
        lat:""
      },
      gpsDkList:[],
    };
  },
  watch: {
    $route(to, from) {
      //监听路由  每次跳转到该页面的时候，只渲染一遍，所以需要每次跳转的时候都要获取一次数据
      if (to.path == "/list/details") {
        this.getQuery();
        console.log("进入详情页");
      }
      deep: true;
    }
  },
  methods: {
    timestampToTime(timestamp) {
      var date = new Date(parseInt(timestamp) * 1000);
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

      // 拼接 时间格式处理
      return (
        year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    test() {
      console.log("111");
      this.getQuery();
      this.getDk();
    },
    refresh() {
      //定时器
      setInterval(this.test, 5000);
    },

    getQuery() {
      var username = window.sessionStorage.getItem("username");
      person(username).then(res => {
        console.log(res);
        if (res.msg == "ok") {
          this.tireTempUp = res.data.extraInfo.thresholdValue.tire.tireTemp;
          this.tirePressUp = res.data.extraInfo.thresholdValue.tire.tirePress;
          this.shake = res.data.extraInfo.thresholdValue.shake;
          this.oil = res.data.extraInfo.thresholdValue.oil;
          this.humiDown =
            res.data.extraInfo.thresholdValue.tempAndHumi.humiDown;
          this.humiUp = res.data.extraInfo.thresholdValue.tempAndHumi.humiUp;
          this.tempDown =
            res.data.extraInfo.thresholdValue.tempAndHumi.tempDown;
          this.tempUp = res.data.extraInfo.thresholdValue.tempAndHumi.tempUp;
          console.log(this.oil);
        }
      });
      this.productkey = this.$route.query.pk;
      this.carNum = this.$route.query.carnum;
      console.log(this.productkey);
      this.title1 = this.carNum + "    行进中（已行驶99km 速度50km/h）";
      this.getDk();
    },
    async getDk() {
      this.humiDkList = [];
      this.doorDkList = [];
      this.alarmDkList = [];
      this.tireDkList = [];
      const res = await getDevice({
        productKey: this.productkey
      });
      // console.log("alldk",res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceInfo.length; i++) {
          if (res.data.deviceInfo[i].deviceType == "TempAndHumi") {
            this.humiDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "door") {
            this.doorDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "Alarm") {
            this.alarmDkList.push(res.data.deviceInfo[i].deviceKey);
          } else if (res.data.deviceInfo[i].deviceType == "TireTempPress") {
            this.tireDkList.push(res.data.deviceInfo[i].deviceKey);
          }
           else if (res.data.deviceInfo[i].deviceType == "gps") {
            this.gpsDkList.push(res.data.deviceInfo[i].deviceKey);
          }
          // console.log(this.gpsDkList)
        }
      }
      this.getHumiData();
      this.getDoorData();
      this.getAlarmData();
      this.getTireData();
      this.getGpsData();

    },
    async getGpsData() {
     const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.gpsDkList
      });
      console.log(res)
      if (res.msg == "ok") {
        this.center.lng = res.data.deviceData[0].Lon
        this.center.lat = res.data.deviceData[0].Lat
      } else {
             this.center.lng = "117.19046"
        this.center.lat = "31.772366"
      }
    },
    async getHumiData() {
      this.humiOriData = [];
      this.sensorList = [];
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.humiDkList
      });
      console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceData.length; i++) {
          if (res.data.deviceData[i].oil < 0) {
            res.data.deviceData[i].oil = 0;
          }
          var obj = {
            sensor: res.data.deviceData[i].deviceName,
            temp: res.data.deviceData[i].temp,
            humi: res.data.deviceData[i].humi,
            time: res.data.deviceData[i].time,
            oil: res.data.deviceData[i].oil,
            dk: res.data.deviceData[i].deviceKey
          };
          this.humiOriData.push(obj);
        }
        // console.log("humiOriData",this.humiOriData);
        this.humiHandleData = JSON.parse(JSON.stringify(this.humiOriData));
        // console.log(this.humiHandleData);
        this.humiHandleData.sort(function(a, b) {
          var sensorA = a.sensor.toUpperCase(); // ignore upper and lowercase
          var sensorB = b.sensor.toUpperCase(); // ignore upper and lowercase
          if (sensorA < sensorB) {
            return -1;
          }
          if (sensorA > sensorB) {
            return 1;
          }
          return 0;
        });
        for (var i = 0; i < this.humiHandleData.length; i++) {
          this.humiHandleData[i].sensor = this.humiHandleData[i].sensor.replace(
            "TH",
            "温湿度节点"
          );
          this.humiHandleData[i].time = this.timestampToTime(
            this.humiHandleData[i].time
          );
          var obj1 = {
            name: this.humiHandleData[i].sensor,
            date: this.humiHandleData[i].time,
            dk: this.humiHandleData[i].dk
          };
          this.sensorList.push(obj1);
        }
        console.log("humiHandleData", this.humiHandleData);
        // console.log(this.sensorList);
        this.getVibData();
      }
    },
    async getDoorData() {
      this.doorOriData = [];
      this.lightOriData = [];
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.doorDkList
      });
      // console.log("door",res);
      if (res.code == 200) {
        this.lightOriData = res.data.deviceData[0].electrical;
        switch (this.lightOriData[0]) {
          case 0:
            this.light1 = false;
            this.defaultChecked = false;
            break;
          case 1:
            this.light1 = true;
            this.defaultChecked = true;
            break;
        }
        for (var i = 0; i < res.data.deviceData.length; i++) {
          var obj = {
            doorName: res.data.deviceData[i].deviceName,
            state: res.data.deviceData[i].door,
            date: res.data.deviceData[i].date,
            dk: res.data.deviceData[i].deviceKey
          };
          this.doorOriData.push(obj);
        }
        // console.log("doorOriData",this.doorOriData);
        console.log("lightOriData", this.lightOriData);
        console.log("light1", this.light1);
        console.log("defaultChecked", this.defaultChecked);
        this.doorHandleData = JSON.parse(JSON.stringify(this.doorOriData));
        // console.log("doorHandleData",this.doorHandleData);
        this.doorHandleData.sort(function(a, b) {
          var doorA = a.doorName.toUpperCase(); // ignore upper and lowercase
          var doorB = b.doorName.toUpperCase(); // ignore upper and lowercase
          if (doorA < doorB) {
            return -1;
          }
          if (doorA > doorB) {
            return 1;
          }
          return 0;
        });
        console.log("doorHandleData", this.doorHandleData);
        this.door1 = this.doorHandleData[0].state.door_1;
        this.door2 = this.doorHandleData[1].state.door_2;
        // console.log(this.door1);
        // console.log(this.door2);
      }
    },
    async getAlarmData() {
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.alarmDkList
      });
      // console.log("alarm",res);
      this.alert = res.data.deviceData[0].alarm;
      console.log("alert", this.alert);
    },
    async getTireData() {
      this.tireOriData = [];
      this.tireList = [];
      const res = await getDeviceData({
        productKey: this.productkey,
        deviceKeyList: this.tireDkList
      });
      // console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceData.length; i++) {
          var obj = {
            tire: res.data.deviceData[i].deviceName,
            tirePress: (
              (res.data.deviceData[i].tirePress * 10) /
              10000
            ).toFixed(1),
            tireTemp: res.data.deviceData[i].tireTemp.toFixed(1),
            time: res.data.deviceData[i].date,
            dk: res.data.deviceData[i].deviceKey
          };
          this.tireOriData.push(obj);
        }
        console.log("tireOriData", this.tireOriData);
        this.tireHandleData = JSON.parse(JSON.stringify(this.tireOriData));
        this.tireHandleData.sort(function(a, b) {
          var tireA = a.tire.toUpperCase(); // ignore upper and lowercase
          var tireB = b.tire.toUpperCase(); // ignore upper and lowercase
          if (tireA < tireB) {
            return -1;
          }
          if (tireA > tireB) {
            return 1;
          }
          return 0;
        });
        for (var i = 0; i < this.tireHandleData.length; i++) {
          this.tireHandleData[i].tire = "胎" + (i + 1);
          var obj1 = {
            name: this.tireHandleData[i].tire,
            date: this.tireHandleData[i].time,
            dk: this.tireHandleData[i].dk
          };
          this.tireList.push(obj1);
        }
        console.log("tireHandleData", this.tireHandleData);
        // console.log("tireList", this.tireList);
      }
    },
    async getVibData() {
      this.hisVibDate = [];
      this.hisVib = [];
      this.hisEndTime = Date.parse(new Date()) / 1000;
      const res = await getDeviceHisData({
        deviceKey: this.humiHandleData[1].dk,
        startTime: this.hisEndTime - 60 * 86400, //86400
        endTime: this.hisEndTime
      });
      // console.log(res);
      if (res.code == 200) {
        for (var i = 0; i < res.data.deviceData.length; i++) {
          this.hisVibDate.push(res.data.deviceData[i].date);
          var value =
            res.data.deviceData[i].acc.X +
            res.data.deviceData[i].acc.Y +
            res.data.deviceData[i].acc.Z;
          this.hisVib.push(value);
        }
        // console.log("hisVibDate", this.hisVibDate);
        // console.log("hisVib", this.hisVib);
        this.drawVib();
      }
    },

    drawOil() {
      var chartDom = document.getElementById("oil");
      var myChart = echarts.init(chartDom);
      var value = this.oil / 100;
      var option = {
        series: [
          {
            type: "gauge",
            startAngle: 225,
            endAngle: -45,
            splitNumber: 5,
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              lineStyle: {
                // 仪表盘轴线样式。
                width: 10,
                color: [
                  [value, "#f04864"],
                  [1, "#1890ff"]
                ]
              }
            },
            pointer: {
              // 仪表盘指针
              length: "80%",
              width: 10,
              itemStyle: {
                color: "auto"
              }
            },
            axisTick: {
              // 刻度(线)样式。
              distance: -30,
              length: 2,
              lineStyle: {
                color: "#fff",
                width: 2
              }
            },
            splitLine: {
              // 分隔线样式
              distance: -30,
              length: 10,
              lineStyle: {
                color: "#fff",
                width: 3
              }
            },
            axisLabel: {
              // 刻度标签。
              color: "auto",
              distance: 2,
              fontSize: 15
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              valueAnimation: true,
              formatter: "{value} %",
              color: "auto",
              fontSize: 30
            },
            data: [
              {
                value: this.humiOriData[0].oil,
                name: "当前油位",
                fontSize: 30
              }
            ]
          }
        ]
      };
      window.addEventListener("resize", function() {
        myChart.resize();
      });

      option && myChart.setOption(option);
    },

    hisTem1() {
      console.log(this.sensorList);
      this.humiTabKey = "1";
      this.showPage = "1";
      this.humiSpinning = true;
      this.hisEndTime = Date.parse(new Date()) / 1000;
      clearInterval(this.timer);

      getDeviceHisData({
        deviceKey: this.humiHandleData[0].dk,
        startTime: this.hisEndTime - 10 * 86400, //86400
        endTime: this.hisEndTime
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisDate.push(res.data.deviceData[i].date);
            this.hisTemp.push(res.data.deviceData[i].temp);
            this.hisHumi.push(res.data.deviceData[i].humi);
          }
        } else {
          this.humiDataShow = false;
        }
        this.maxtemp = Math.max.apply(null, this.hisTemp);
        this.mintemp = Math.min.apply(null, this.hisTemp);
        this.maxhumi = Math.max.apply(null, this.hisHumi);
        this.minhumi = Math.min.apply(null, this.hisHumi);
        // console.log(this.maxhumi,this.minhumi);
        this.drawHumi();
        this.humiSpinning = false;
      });
    },

    humiBack() {
      this.timer = setInterval(this.getQuery, 60000);
      this.showPage = "0";
      this.humiTabKey = "1";
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
      // console.log(this.showPage);
    },

    hisDoor() {
      this.showPage = "4";
      this.doorSpinning = true;
      this.hisEndTime = Date.parse(new Date()) / 1000;
      getDeviceHisData({
        deviceKey: this.doorDkList[0],
        startTime: this.hisEndTime - 10 * 86400, //86400
        endTime: this.hisEndTime
      }).then(res => {
        // console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisDoorDate.push(res.data.deviceData[i].date);
            this.hisDoor1.push(res.data.deviceData[i].door.door_1);
            this.hisDoor2.push(res.data.deviceData[i].door.door_2);
          }
        }
        console.log(this.hisDoorDate);
        // console.log(this.hisDoor1);
        // console.log(this.hisDoor2);
        for (var i = 0; i < this.hisDoor1.length; i++) {
          switch (this.hisDoor1[i]) {
            case false:
              this.hisDoor1[i] = 0;
              break;
            case true:
              this.hisDoor1[i] = 1;
              break;
          }
        }
        for (var i = 0; i < this.hisDoor2.length; i++) {
          switch (this.hisDoor2[i]) {
            case false:
              this.hisDoor2[i] = 0;
              break;
            case true:
              this.hisDoor2[i] = 1;
              break;
          }
        }
        console.log(this.hisDoor1);
        console.log(this.hisDoor2);
        this.drawDoor();
        this.doorSpinning = false;
        // console.log("1");
      });
    },

    hisTire() {
      clearInterval(this.timer);
      // this.showPage = "3";
      console.log("tireList", this.tireList);
      this.tireTabKey = "1";
      this.showPage = "3";
      this.tireSpinning = true;
      this.hisEndTime = Date.parse(new Date()) / 1000;

      getDeviceHisData({
        deviceKey: this.tireHandleData[0].dk,
        startTime: this.hisEndTime - 20 * 86400, //86400
        endTime: this.hisEndTime
      }).then(res => {
        // console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisTireDate.push(res.data.deviceData[i].date);
            this.hisTireTemp.push(res.data.deviceData[i].tireTemp);
            this.hisTirePress.push(res.data.deviceData[i].tirePress / 10000);
          }
                  console.log(this.hisTireDate);
        console.log(this.hisTireTemp);
        console.log(this.hisTirePress);
        this.maxtiretemp = Math.max.apply(null, this.hisTireTemp);
        this.mintiretemp = Math.min.apply(null, this.hisTireTemp);
        // console.log(this.maxtiretemp,this.mintiretemp);
        this.maxtirepress = Math.max.apply(null, this.hisTirePress);
        this.mintirepress = Math.min.apply(null, this.hisTirePress);
        // console.log(this.maxtirepress,this.mintirepress);
        this.drawTyre();
        this.tireSpinning = false;
        // console.log("1");
        } else {
          this.tireDataShow = false;
        }

      });
    },

    tireBack() {
      this.timer = setInterval(this.getQuery, 60000);
      this.showPage = "0";
      this.tireTabKey = "1";
      this.hisTireDate = [];
      this.hisTireTemp = [];
      this.hisTirePress = [];
      // console.log(this.showPage);
    },
    doorBack() {
      this.showPage = "0";
      this.hisDoorDate = [];
      this.hisDoor1 = [];
      this.hisDoor2 = [];
    },

    changeLight1(checked) {
      // console.log(checked, this.productkey);
      this.spinning1 = true;
      if (checked === true) {
        console.log("正在开灯");
        let data1 = {
          productKey: this.productkey,
          checkCode: "EFEFEF0101CF"
        };
        changeLight(data1).then(res => {
          if (res.code == 200) {
            this.light1 = true;
            this.defaultChecked = true;
            this.spinning1 = false;
          }
        });
      } else {
        console.log("正在关灯");
        let data2 = {
          productKey: this.productkey,
          checkCode: "EFEFEF0100CE"
        };
        changeLight(data2).then(res => {
          // console.log("关灯结果", res);
          if (res.code == 200) {
            //查询是否关灯成功
            // getDeviceData({
            //   productKey: this.productkey,
            //   deviceKeyList: this.doorDkList,
            // }).then((res) => {
            //   // console.log(res);
            //   if (res.code == 200) {
            //     this.lightOriData = res.data.deviceData[0].electrical;
            //     switch (this.lightOriData[0]) {
            //       case 0:
            //         this.light1 = false;
            //         this.defaultChecked = false;
            //         break;
            //       case 1:
            //         this.light1 = true;
            //         this.defaultChecked = true;
            //         break;
            //     }
            //     console.log("light1", this.light1);
            //     console.log("defaultChecked", this.defaultChecked);
            //     this.spinning1 = false;
            //   }
            // });
            this.light1 = false;
            this.defaultChecked = false;
            this.spinning1 = false;
          }
        });
      }
      // this.light1 = !this.light1;
    },

    tabclick(e) {
      this.hisDate = [];
      this.hisTemp = [];
      this.hisHumi = [];
      this.humiTabname = e;
      // console.log(e);
      // console.log(this.sensorList[e].dk);
      this.humiSpinning = true;
      getDeviceHisData({
        deviceKey: this.sensorList[e].dk,
        startTime: this.hisEndTime - 10 * 86400, //86400
        endTime: this.hisEndTime
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisDate.push(res.data.deviceData[i].date);
            this.hisTemp.push(res.data.deviceData[i].temp);
            this.hisHumi.push(res.data.deviceData[i].humi);
          }
        }
        console.log(this.hisDate);
        console.log(this.hisTemp);
        console.log(this.hisHumi);
        this.maxtemp = Math.max.apply(null, this.hisTemp);
        this.mintemp = Math.min.apply(null, this.hisTemp);
        // console.log(this.maxtemp,this.mintemp);
        this.maxhumi = Math.max.apply(null, this.hisHumi);
        this.minhumi = Math.min.apply(null, this.hisHumi);
        // console.log(this.maxhumi,this.minhumi);
        this.$nextTick(() => {
          this.drawHumi();
          this.humiSpinning = false;
        });
      });
    },
    tabclick1(e) {
      this.hisTireDate = [];
      this.hisTireTemp = [];
      this.hisTirePress = [];
      this.tireTabname = e;
      this.tireSpinning = true;

      getDeviceHisData({
        deviceKey: this.tireHandleData[e].dk,
        startTime: this.hisEndTime - 20 * 86400, //86400
        endTime: this.hisEndTime
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          for (var i = 0; i < res.data.deviceData.length; i++) {
            this.hisTireDate.push(res.data.deviceData[i].date);
            this.hisTireTemp.push(res.data.deviceData[i].tireTemp);
            this.hisTirePress.push(res.data.deviceData[i].tirePress / 10000);
          }
        }
        console.log(this.hisTireDate);
        console.log(this.hisTireTemp);
        console.log(this.hisTirePress);
        this.maxtiretemp = Math.max.apply(null, this.hisTireTemp);
        this.mintiretemp = Math.min.apply(null, this.hisTireTemp);
        // console.log(this.maxtiretemp,this.mintiretemp);
        this.maxtirepress = Math.max.apply(null, this.hisTirePress);
        this.mintirepress = Math.min.apply(null, this.hisTirePress);
        // console.log(this.maxtirepress,this.mintirepress);
        this.drawTyre();
        this.tireSpinning = false;
        // console.log("1");
      });
    },
    drawHumi() {
      // console.log(this.humiTabKey);
      //温湿度历史数据图
      var myChart = echarts.init(document.getElementById("chart"));
      var colors = ["#7cb305", "#1890ff"];
      var option = {
        color: colors,
        title: {
          text: "温湿度历史数据",
          left: "center"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          data: ["温度", "湿度"],
          left: 80
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //横轴顶格
          data: this.hisDate,
          axisLabel: {
            formatter: function(value) {
              return value.slice(5, 10) + "\n" + value.slice(11, 16);
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: "温度",
            min: this.mintemp - 2,
            max: this.maxtemp + 2,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: "{value} ℃"
            }
          },
          {
            type: "value",
            name: "湿度",
            min: this.minhumi - 2,
            max: this.maxhumi + 2,
            position: "right",
            offset: 6,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: "{value} %"
            }
          }
        ],
        series: [
          {
            name: "温度",
            type: "line",
            data: this.hisTemp
          },
          {
            name: "湿度",
            type: "line",
            yAxisIndex: 1, //解决了左右y轴相同刻度，选定哪条y
            // stack: "总量",
            data: this.hisHumi
          }
        ]
      };
      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawTyre() {
      //轮胎历史数据
      var myChart = echarts.init(document.getElementById("chart1"));
      var colors = ["#5470C6", "#91CC75"];
      var option = {
        color: colors,
        title: {
          text: "胎温胎压历史数据",
          left: "center"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          data: ["胎温", "胎压"],
          left: 80
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          data: this.hisTireDate
        },
        yAxis: [
          {
            type: "value",
            name: "胎温",
            min: this.mintiretemp - 2,
            max: this.maxtiretemp + 2,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: "{value}°C"
            }
          },
          {
            type: "value",
            name: "胎压",
            min: this.mintirepress - 0.001,
            max: this.maxtirepress + 0.001,
            position: "right",
            offset: 6,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: "{value}bar"
            }
          }
        ],

        series: [
          {
            name: "胎温",
            type: "line",
            color: colors[0],
            data: this.hisTireTemp
          },
          {
            name: "胎压",
            type: "line",
            color: colors[1],
            yAxisIndex: 1,
            data: this.hisTirePress
          }
        ]
      };
      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawDoor() {
      var myChart = echarts.init(document.getElementById("chart3"));
      var colors = ["#5470C6", "#91CC75"];
      var option = {
        color: colors,
        title: {
          text: "车门状态(0为关，1为开)",
          left: "center",
          textStyle: {
            fontSize: 28
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["门1", "门2"],
          left: 80
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          data: this.hisDoorDate
        },
        yAxis: {
          type: "value",
          interval: 1
        },
        series: [
          {
            name: "门1",
            type: "line",
            step: "start",
            data: this.hisDoor1
          },
          {
            name: "门2",
            type: "line",
            step: "middle",
            data: this.hisDoor2
          }
        ]
      };

      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },

    drawVib() {
      //详情页震动图
      var myChart = echarts.init(document.getElementById("main7"));
      // var myChart = echarts.init(this.$refs.main);
      var colors = ["#5470C6"];
      var option = {
        color: colors,
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          data: this.hisVibDate,
          axisLabel: {
            formatter: function(value) {
              return value.slice(5, 10) + "\n" + value.slice(11, 16);
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: "震动值",
            max: this.shake,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],

        series: [
          {
            name: "震动值",
            type: "line",
            color: colors[0],
            data: this.hisVib
          }
        ]
      };
      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },

    openHumi() {
      this.humiDialogVisible = true;
    },
    setHumiValue() {
      // console.log(this.humiUp)
      // console.log(this.humiDown)
      //  console.log(this.tempUp)

      //1. 获取当前用户信息
      var username = window.sessionStorage.getItem("username");
      console.log(username);
      person(username).then(res => {
        // console.log(res)
        if (res.msg == "ok") {
          console.log(res);
          // res.data.extraInfo = {}
          // res.data.extraInfo.thresholdValue= {}
          // res.data.extraInfo.thresholdValue.tempAndHumi= {}
          res.data.extraInfo.thresholdValue.tempAndHumi.tempDown = this.tempDown;
          res.data.extraInfo.thresholdValue.tempAndHumi.tempUp = this.tempUp;
          res.data.extraInfo.thresholdValue.tempAndHumi.humiDown = this.humiDown;
          res.data.extraInfo.thresholdValue.tempAndHumi.humiUp = this.humiUp;
          // console.log(res.data)
          editPerson(res.data).then(res => {
            // console.log(res)
            if (res.msg == "ok") {
              this.$message.success("修改成功!");
              this.humiDialogVisible = false;
              this.getQuery();
            }
          });
        }
      });

      //2. 更改用户信息
    },

    openOil() {
      this.$prompt("设置油位报警值/%", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          //1. 获取当前用户信息
          var username = window.sessionStorage.getItem("username");
          console.log(username);
          person(username).then(res => {
            // console.log(res)
            if (res.msg == "ok") {
              console.log(value);
              res.data.extraInfo.thresholdValue.oil = value;
              console.log(res.data);
              editPerson(res.data).then(res => {
                // console.log(res)
                if (res.msg == "ok") {
                  this.$message({
                    type: "success",
                    message: "油位低于: " + value + "报警"
                  });
                  this.getQuery();
                }
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    openVib() {
      this.$prompt("设置震动报警值/g", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          //1. 获取当前用户信息
          var username = window.sessionStorage.getItem("username");
          console.log(username);
          person(username).then(res => {
            // console.log(res)
            if (res.msg == "ok") {
              res.data.extraInfo.thresholdValue.shake = value;
              // console.log(res.data)
              editPerson(res.data).then(res => {
                // console.log(res)
                if (res.msg == "ok") {
                  this.$message({
                    type: "success",
                    message: "车辆震动值: " + value
                  });
                  this.getQuery();
                }
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    openTire() {
      this.tireDialogVisible = true;
    },
    setTireValue() {
      //1. 获取当前用户信息
      var username = window.sessionStorage.getItem("username");
      console.log(username);
      person(username).then(res => {
        // console.log(res)
        if (res.msg == "ok") {
          res.data.extraInfo.thresholdValue.tire = {
            tireTemp: "",
            tirePress: ""
          };
          res.data.extraInfo.thresholdValue.tire.tireTemp = this.tireTempUp;
          res.data.extraInfo.thresholdValue.tire.tirePress = this.tirePressUp;
          editPerson(res.data).then(res => {
            if (res.msg == "ok") {
              this.$message.success("修改成功!");
              this.tireDialogVisible = false;
              this.getQuery();
            }
          });
        }
      });
    },

    show() {
      // this.showPage = "2";
      console.log("1111");
    }
  }
};
</script>

<style lang="less" scope>
.ant-card-body {
  padding: 10px 10px;
  /* background: black; */
}
.card {
  margin: 3px;
}

.shadow {
  box-shadow: 5px 5px 5px #e2e1e1;
  border-radius: 10px;
}

.home1 {
  background: #ffffff;
}

.container {
  display: flex;
  flex-direction: column;
}
.carriage1 {
  margin: 20px 0px 0px 240px;
}
// .sensor1 {
//   // background: rgb(216, 213, 213);
//   margin: 0px 5px 15px 5px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     width: 50px;
//     font-weight: bold;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -30px 10px 10px 90px;
//     // background: black;
//   }
// }
// .sensor2 {
//   // background: rgb(230, 223, 223);
//   margin: -65px 5px 15px 200px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     width: 50px;
//     font-weight: bold;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -30px 10px 10px 90px;
//     // background: black;
//   }
// }
// .sensor3 {
//   // background: rgb(230, 223, 223);
//   margin: -65px 5px 15px 400px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     font-weight: bold;
//     width: 50px;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -30px 10px 10px 90px;
//     // background: black;
//   }
// }
// .sensor4 {
//   // background: rgb(230, 223, 223);
//   margin: -65px 5px 15px 600px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     font-weight: bold;
//     width: 50px;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -30px 10px 10px 90px;
//     // background: black;
//   }
// }
// .carriage {
//   // background: rgb(230, 223, 223);
//   margin: 0px 5px 15px 0px;
//   width: 705px;
//   height: 150px;
//   .img {
//     margin: 0px 0px 0px 40px;
//   }
// }
// .sensor5 {
//   // background: rgb(230, 223, 223);
//   margin: 15px 5px 15px 5px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     font-weight: bold;
//     width: 50px;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -50px 10px 10px 90px;
//     // background: black;
//   }
// }
// .sensor6 {
//   // background: rgb(230, 223, 223);
//   margin: -65px 5px 15px 200px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     font-weight: bold;
//     width: 50px;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -50px 10px 10px 90px;
//     // background: black;
//   }
// }
// .sensor7 {
//   // background: rgb(230, 223, 223);
//   margin: -65px 5px 15px 400px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     font-weight: bold;
//     width: 50px;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -50px 10px 10px 90px;
//     // background: black;
//   }
// }
// .sensor8 {
//   // background: rgb(230, 223, 223);
//   margin: -65px 5px 15px 600px;
//   width: 100px;
//   height: 50px;
//   .left {
//     font-size: 20px;
//     font-weight: bold;
//     width: 50px;
//     // background: black;
//   }
//   .right {
//     font-size: 20px;
//     font-weight: bold;
//     margin: -50px 10px 10px 90px;
//     // background: black;
//   }
// }
// .top-right {
//   // background: rgb(204, 200, 200);
//   margin: -290px 5px 0px 800px;
//   height: 260px;
//   .title {
//     font-size: 14px;
//     font-weight: 600;
//     margin-left: 20px;
//   }
//   .list {
//     margin: 25px 0 0;
//     padding: 0;
//     list-style: none;
//     // background: #000;
//     li {
//       margin-top: 16px;
//       span {
//         color: rgba(0, 0, 0, 0.65);
//         font-size: 14px;
//         line-height: 22px;
//         &:first-child {
//           background-color: #f5f5f5;
//           border-radius: 20px;
//           display: inline-block;
//           font-size: 12px;
//           font-weight: 600;
//           margin-right: 24px;
//           height: 20px;
//           line-height: 20px;
//           width: 20px;
//           text-align: center;
//         }
//         &.active {
//           background-color: #314659;
//           color: #fff;
//         }
//         &:last-child {
//           float: right;
//         }
//       }
//     }
//   }
// }
.oil {
  // background: rgb(233, 219, 219);
  width: 100%;
  height: 350px;
  margin-top: 0px;
  // margin: -10px 0px 0px 60px;
}
.map {
  width: 100%;
  height: 227px;
  margin: -10px 0px 0px -10px;
}
.error {
  color: red;
}
</style>
