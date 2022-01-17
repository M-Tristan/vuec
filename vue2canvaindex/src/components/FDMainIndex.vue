<template>
  <div class="main-container">
    <div class="seotips">
      <div class="tips-item">hight quiality</div>
      <div class="tips-item">comments to disable some warnings</div>
      <div class="tips-item">warnings in a file.</div>
    </div>
    <div class="search__contain">
      <div class="search__inputcontain">
        <div class="search__inputcontent">
          <input class="search__input" />
        </div>
        <div class="containt__button"></div>
      </div>
    </div>

    <div class="classlist">
      <div class="itemarea">
        <div
          class="itemarea-item"
          v-for="(item, index) in classlist"
          :key="index"
          @click="arrowindex = index"
        >
          <div :class="['item__icon', { active: index == arrowindex }]"></div>
          <div class="item__desc">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classlist: ["为你推荐", "演示文稿", "社交媒体", "市场营销", "商务办公", "更多"],
    };
  },
};
</script>

<style lang="less" scoped>
.main-container {
  width: 100%;
}
.seotips {
  margin-top: 30px;
  .tips-item {
    text-align: center;
    font-size: 30px;
  }
}
.search__contain {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  .search__inputcontain {
    width: 40%;
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
  }
}

.classlist {
  margin-top: 50px;
  display: flex;
  justify-content: center;

  .itemarea {
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(209, 204, 204, 0.459);
    border-bottom: 1px solid rgba(204, 202, 202, 0.452);
    padding: 20px 0 20px 0;
    width: 40%;
    position: relative;
    .itemarea-item {
      cursor: pointer;
      float: left;
      width: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 15px;
      margin-right: 15px;
      .item__icon {
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
        border-radius: 50%;
        background-color: rgb(0, 0, 0);
      }
      .active {
        background-color: rgb(0, 0, 0);
      }
      .item__desc {
        font-size: 14px;
      }
    }
  }
}
</style>
