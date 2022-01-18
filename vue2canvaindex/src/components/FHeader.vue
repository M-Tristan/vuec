<template>
  <div class="header-div">
    <div class="header-bttonarea">
      <div class="header-logo">
        <img src="@/assets/canvas.png" />
      </div>

      <div class="header-button active">素材中心</div>
      <div class="header-button">设计中心</div>
      <div class="header-button">高级版</div>
      <div class="header-button">企业版</div>
    </div>
    <div class="header-bttonarea">
      <div class="header-button">create our app</div>
      <div class="header-button">
        <el-button type="primary" round>sign in</el-button>
      </div>

      <div class="user-logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="less" scoped>
.header-div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  align-items: center;
  box-shadow: 0px 1px 5px #cac9c980;
  padding: 0 20px 0 20px;
}
.active {
  border-bottom: 2px solid rgb(0, 0, 0);
}
.header-button {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    // background-color: rgba(207, 205, 205, 0.233);
    color: rgb(139, 139, 139);
  }
}
.header-logo {
  margin-right: 40px;
  height: 40px;
  display: block;
  width: 80px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
.user-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: aqua;
  cursor: pointer;
}
.header-bttonarea {
  display: flex;
  align-items: center;
  height: 100%;
}
.button__icon {
  font-size: 30px;
}
</style>
