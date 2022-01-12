<template>
  <div class="aside">
    <div class="userinfo">
      <div class="userinfo__logo"></div>
      <div class="userinfo__info">
        <div class="info__type">个人品牌</div>
        <div class="info__tips">免费版</div>
      </div>
    </div>

    <div class="taps__item">
      <div class="taps__item--icon">
        <i class="el-icon-school"></i>
      </div>
      <div class="taps__item--desc">首页</div>
    </div>
    <div class="taps__item">
      <div class="taps__item--icon">
        <i class="el-icon-picture-outline"></i>
      </div>
      <div class="taps__item--desc">我的设计</div>
    </div>
    <div class="taps__item">
      <div class="taps__item--icon">
        <i class="el-icon-star-off"></i>
      </div>
      <div class="taps__item--desc">与我分享</div>
    </div>
    <div class="taps__item">
      <div class="taps__item--icon">
        <i class="el-icon-folder"></i>
      </div>
      <div class="taps__item--desc">所有文件夹</div>
    </div>
    <div class="taps__item">
      <div class="taps__item--icon">
        <i class="el-icon-delete"></i>
      </div>
      <div class="taps__item--desc">回收站</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.aside {
  width: 100%;
  display: inline-block;
  float: left;
  padding: 30px 0px 0px 20px;
}
.userinfo {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  .userinfo__logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(0, 140, 255);
    float: left;
  }
  .userinfo__info {
    float: left;
    padding-left: 10px;
    .info__tips {
      font-size: 12px;
    }
    .info__type {
    }
  }
}
.taps__item {
  cursor: pointer;
  border-radius: 4px;
  padding-left: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(209, 205, 205, 0.322);
  }
  .taps__item--icon {
    font-size: 20px;
  }
  .taps__item--desc {
    margin-left: 10px;
    font-size: 14px;
  }
}
</style>
