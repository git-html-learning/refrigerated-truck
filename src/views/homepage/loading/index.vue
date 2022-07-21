<template>
    <div class="layout" >
    刷新
        <div class = "loading-img">
           <img class="jzxz1" src="@/assets/img/jzxz1.png" />
      <img class="jzxz2" src="@/assets/img/jzxz2.png" />
      </div>
    </div>
</template>
<style lang="less" scoped> 
.layout {
  width: 100%;
  height: 100vh;
  background-color: #03304a;
}
  .loading-img {
  position: absolute;
  left: calc(50% - 182px);
  top: calc(50% - 182px);
  z-index: 2
}
.loading-img .jzxz1,
.jzxz2 {
  position: absolute;
  left: 0;
  top: 0;
}
.loading-img .jzxz1 {
  animation: xz1 8s infinite linear;
}
@keyframes xz1 {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.load_img .jzxz2 {
  animation: xz2 7s infinite linear;
}
@keyframes xz2 {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
