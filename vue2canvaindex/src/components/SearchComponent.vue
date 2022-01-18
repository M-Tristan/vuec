<template>
  <div class="search__contain" @click.stop>
    <div class="search__inputcontain">
      <div class="search__inputcontent" @click="showpromptbox = !showpromptbox">
        <input class="search__input" />
      </div>
      <div class="containt__button">
        <i class="el-icon-search"></i>
      </div>
    </div>
    <div v-show="showpromptbox" class="promptbox"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showpromptbox: false,
    };
  },
  methods: {
    closePromp() {
      this.showpromptbox = false;
    },
  },
  mounted() {
    document.body.addEventListener("click", this.closePromp);
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.closePromp);
  },
};
</script>

<style lang="less" scoped>
.search__contain {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  .search__inputcontain {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    display: grid;
    box-shadow: 0 0 20px rgba(173, 172, 172, 0.486);
    grid-template-columns: auto 50px;
    overflow: hidden;
    padding-left: 20px;
    .search__input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
    .containt__button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .promptbox {
    height: 300px;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 20px;
    right: 50px;
    z-index: 99;
    box-shadow: 0 0 2px black;
  }
}
</style>
