<template>
  <div class="home">
    <c-header></c-header>
    <div class="content__container">
      <div class="container__aside">
        <a-side></a-side>
      </div>
      <div class="container__main">
        <main-search></main-search>
      </div>
    </div>
  </div>
</template>

<script>
import ASide from "../components/ASide.vue";
import CHeader from "../components/CHeader.vue";
import MainSearch from "../components/MainSearch.vue";
export default {
  name: "Home",
  components: { CHeader, ASide, MainSearch },
};
</script>
<style lang="less">
.content__container {
  padding: 20px;
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
  height: 100%;
}
</style>
