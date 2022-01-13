<template>
  <div class="searcharea">
    <div class="tips">你想设计什么</div>
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
          class="itemarea__arrow"
          :style="{
            left: `${arrowPosition}px`,
          }"
        ></div>
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
      arrowindex: 0,
      classlist: [
        "为你推荐",
        "演示文稿",
        "社交媒体",
        "视频",
        "平面物料",
        "市场营销",
        "商务办公",
        "更多",
      ],
    };
  },
  mounted() {},
  computed: {
    arrowPosition() {
      return 40 + this.arrowindex * 100;
    },
  },
};
</script>

<style lang="less">
.searcharea {
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  background: radial-gradient(
      100.99% 100.73% at 0 0,
      rgba(0, 196, 204, 0.725916) 0,
      #00c4cc 0.01%,
      rgba(0, 196, 204, 0) 100%
    ),
    radial-gradient(106.1% 249.18% at 0 0, #00c4cc 0, rgba(0, 196, 204, 0) 100%),
    //
    #7d2ae7;
  .tips {
    font-weight: 600;
    color: white;
    text-align: center;
    font-size: 30px;
    height: 80px;
    line-height: 80px;
  }
}
.search__contain {
  width: 100%;

  display: flex;
  justify-content: center;
  .search__inputcontain {
    width: 60%;
    height: 40px;
    display: grid;
    background-color: white;
    grid-template-columns: auto 100px;
    border-radius: 5px;
    overflow: hidden;
    .search__input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
}
.classlist {
  margin-top: 20px;
  display: flex;
  justify-content: center;

  .itemarea {
    display: inline-block;
    position: relative;
    .itemarea__arrow {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: white;
      transform: rotate(45deg);
      border-radius: 5px;
      bottom: -40px;
      transition-duration: 0.2s;
    }
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
        background-color: rgba(255, 255, 255, 0.158);
      }
      .active {
        background-color: white;
      }
      .item__desc {
        font-size: 14px;
        color: white;
      }
    }
  }
}
</style>
