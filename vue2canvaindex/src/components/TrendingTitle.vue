<template>
  <div class="container">
    <div class="title">Trending Title B</div>
    <div class="tips">
      This library does not handle redrawing layer and composite image data by itself when
      blending options,
    </div>
    <div class="modellist">
      <div class="modellist__column-left">
        <div class="model-item" v-for="(item, index) in 4" :key="index"></div>
      </div>
      <div class="modellist__column-right">
        <div class="model-item" v-for="(item, index) in 4" :key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.title {
  text-align: center;
  line-height: 80px;
}
.tips {
  text-align: center;
  width: 60%;
}
.model-item {
  width: 300px;
  height: 300px;
  background-color: black;
  margin-bottom: 20px;
  border-radius: 10px;
}
.modellist__column-left {
  float: left;
  margin-right: 30px;
  width: 300px;
}
.modellist__column-right {
  float: left;
  padding-top: 30px;
  width: 300px;
}
.modellist {
  margin-top: 40px;
}
</style>
