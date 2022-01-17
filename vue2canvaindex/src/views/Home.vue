<template>
  <div class="home">
    <c-header></c-header>
    <div class="content__container">
      <div class="container__aside">
        <a-side></a-side>
      </div>
      <div class="container__main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ASide from "../components/ASide.vue";
import CHeader from "../components/CHeader.vue";
export default {
  name: "Home",
  components: { CHeader, ASide },
};
</script>

<style lang="less" scoped>
.content__container {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 260px auto;
}
.container__aside {
  height: 100%;
}
.container__main {
  padding: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
