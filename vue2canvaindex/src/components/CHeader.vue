<template>
  <div class="header-div">
    <div class="header-bttonarea">
      <div class="header-button">
        <i class="el-icon-s-operation button__icon"></i>
      </div>
      <div class="header-logo">
        <img src="@/assets/canvas.png" />
      </div>
      <div class="header-button">首页</div>
      <div class="header-button">模版中心</div>
      <div class="header-button">素材中心</div>
      <div class="header-button">设计中心</div>
      <div class="header-button">高级版</div>
      <div class="header-button">企业版</div>
    </div>
    <div class="header-bttonarea">
      <div class="header-button">
        <i class="el-icon-setting button__icon"></i>
      </div>

      <div class="header-button">
        <i class="el-icon-eleme button__icon"></i>
      </div>
      <div class="header-button">
        <el-button type="primary">创建模版</el-button>
      </div>

      <div class="user-logo"></div>
    </div>
  </div>
</template>

<script>
export default {};
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
.header-button {
  margin-right: 10px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rba(207, 205, 205, 0.233);
  }
}
.header-logo {
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
  display: block;
  display: flex;
  height: 40px;
  align-items: center;
}
.button__icon {
  font-size: 30px;
}
</style>
