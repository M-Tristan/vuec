<template>
  <div class="container">
    <div class="image"></div>
    <div class="classitem" v-for="(item, index) in 4" :key="index">Trending Title C</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  position: relative;
  .classitem {
    padding: 20px 0 20px 0;
    text-align: center;
    border-top: 1px solid rgba(212, 210, 210, 0.486);
    &:last-child {
      border-bottom: 1px solid rgba(207, 205, 205, 0.425);
    }
  }
  .image {
    position: absolute;
    left: 60%;
    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 20px;
  }
}
</style>
