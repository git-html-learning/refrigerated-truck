<template>
  <!-- 头部通知下拉菜单 -->
  <a-dropdown :trigger="['click']" v-model="visible">
    <!-- 下拉菜单区 -->
    <template slot="overlay">
      <!-- {{total}}
       {{total1}} -->
      <a-spin :spinning="loading">
        <a-tabs
          :tabBarStyle="{ textAlign: 'center' }"
          :style="{ backgroundColor: 'white', width: '297px' }"
        >
          <a-tab-pane :tab="'通知'" key="1" :style="{ padding: '0 24px' }">
            <a-list>
              <!-- <a-list-item
                v-for="(item, index) in data1.filter(
                  (d) => d.type === 'notification'
                )"
                :key="index"
                :style="{ opacity: item.read ? 0.7 : 1 }"
              >
                <a-list-item-meta :title="item.title" @click="tiaozhuan">
                  <a-avatar
                    style="background-color: white"
                    slot="avatar"
                    :src="item.avatar"
                  />
                </a-list-item-meta> -->
              <!-- </a-list-item> -->
              <a-list-item :style="{ opacity: data1[0].read ? 0.7 : 1 }">
                <a-list-item-meta :title="data1[0].title" @click="tiaozhuan">
                  <a-avatar
                    style="background-color: white"
                    slot="avatar"
                    :src="data1[0].avatar"
                  />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </template>
    <!-- 显示区 -->
    <span @click="fetchNotice" class="header-notice">
      <a-badge :dot="show">
        <!-- 数据长度 -->
        <a-icon :class="['header-notice-icon', theme]" type="bell" />
      </a-badge>
    </span>
  </a-dropdown>
</template>

<script>
import { getalerttotal } from "@/api/data";
export default {
  name: "HeaderNotice",
  data() {
    return {
      loading: false,
      visible: false,
      data1: [],
      total: 0,
      // total1:0
      show:false,
    };
  },
  computed: {
    theme() {
      return this.$store.state.setting.layout === "side"
        ? "light"
        : this.$store.state.setting.theme;
    },
    total1() {
      this.getalert();
      return this.$store.getters.total;
    },
  },
  // created() {
  //   this.getalert(); //获取报警总数数据
  // },
  watch: {
    //深度监听
    total1() {
      // console.log(1);
      // handler() {
      //   this.total = total1;
      // },
      // deep:true,
      // immediate: true,
    },
  },
  methods: {
    async getalert() {
      //获取数据
      // this.data = this.$store.getters.alerttotal;
      var _this = this;
      _this.data1 = [];
      const res = await getalerttotal({
        username: "漳州港招商码头",
      });
      if (res.code == 200) {
        this.$store.dispatch("user/total", res.data);
        // _this.total = res.data;
        _this.total = _this.$store.getters.total;
        var time = new Date();
        var totallist = {
          id: "000000001",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
          title: "您收到了" + _this.total1 + "条报警信息",
          // datetime: '2017-08-09',
          total: _this.total,
          datetime: time,
          type: "notification",
        };
        _this.data1.push(totallist);
        if(_this.total1!=0){_this.show=true}
        // console.log(_this.data1);
        // _this.$store.commit("user/SET_TOTAL",_this.total);
        //  this.$store.dispatch("user/total",_this.total)
      } else {
      }
    },
    tiaozhuan() {
      this.$router.push({ path: "/form/advance" });
    },
    fetchNotice() {
      this.visible = true;
      if (this.loading) {
        this.loading = false;
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less">
.header-notice {
  display: inline-block;
  transition: all 0.3s;
  span {
    vertical-align: initial;
  }
  .header-notice-icon {
    font-size: 16px;
    padding: 4px;
    &.dark {
      color: #fff;
    }
    &.light {
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
.ant-dropdown-menu-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
