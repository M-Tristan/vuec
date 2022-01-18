<template>
  <div class="home">
    <f-header></f-header>
    <div class="content__container">
      <div class="container__main">
        <f-d-main-index></f-d-main-index>
      </div>
    </div>
  </div>
</template>

<script>
import FDMainIndex from "../components/FDMainIndex.vue";
import FHeader from "../components/FHeader.vue";
export default {
  components: { FHeader, FDMainIndex },
};
</script>

<style lang="less" scope>
.content__container {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  //   display: grid;
  //   grid-template-columns: 260px auto;
}
.container__main {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
