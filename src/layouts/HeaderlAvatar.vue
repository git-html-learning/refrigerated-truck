<template>
  <!-- 头部右侧用户头像，下拉菜单 -->
  <a-dropdown
    style="display: inline-block; height: 100%; vertical-align: initial"
  >
    <!-- 显示区 -->
    <span style="cursor: pointer">
      <a-avatar
        class="avatar"
        size="small"
        shape="circle"
        :src="currUser.avatar"
      />
      <!-- <span>{{currUser.name}}</span> -->
      <a-icon type="user" />
    </span>
    <!-- 下拉菜单区  slot="overlay" -->
    <a-menu style="width: 150px" slot="overlay">
      <!-- <a-menu-item>
        <router-link to="/account/center">
          <a-icon type="user" />
          <span>个人中心</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/account/setting">
          <a-icon type="setting" />
          <span>设置</span>
        </router-link>
      </a-menu-item>
      <a-menu-divider /> -->
      <a-menu-item>
        <router-link to="/user/information">
          <span>个人中心</span>
        </router-link>
      </a-menu-item>
                  <a-menu-item>
        <router-link to="/homepage">

          <span>返回监控大屏</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/login">
          <span>退出登录</span>
        </router-link>
      </a-menu-item>
      

    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: "HeaderAvatar",
  computed: {
    currUser() {
      return this.$store.state.account.user;
    },
  },
};
</script>

<style lang="less" scoped>
.avatar {
  margin: 20px 4px 20px 0;
  color: #1890ff;
  background: hsla(0, 0%, 100%, 0.85);
  vertical-align: middle;
}
</style>
