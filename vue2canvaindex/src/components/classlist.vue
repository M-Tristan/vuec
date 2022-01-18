<template>
  <div
    class="classlist"
    @mouseout.stop="showsubclasslist = false"
    @mousemove="showsubclasslist = true"
  >
    <div class="itemarea">
      <div class="itemarea-item" v-for="(item, index) in classlist" :key="index">
        <div :class="['item__icon', { active: index == arrowindex }]"></div>
      </div>
      <div class="classdesclist">
        <div
          class="classdesclist__column"
          v-for="(item, index) in classlist"
          :key="index"
        >
          <div class="item__desc">{{ item }}</div>
        </div>
      </div>
      <div v-show="showsubclasslist" class="subclasslist"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classlist: ["为你推荐", "演示文稿", "社交媒体", "市场营销", "商务办公", "更多"],
      showsubclasslist: false,
    };
  },
  methods: {
    closePromp() {
      this.showsubclasslist = false;
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
.classlist {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  .itemarea {
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(209, 204, 204, 0.459);
    border-bottom: 1px solid rgba(204, 202, 202, 0.452);
    padding: 20px 0 20px 0;
    // width: 100%;
    position: relative;
    .itemarea-item {
      cursor: pointer;
      float: left;
      width: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 15px 14px 15px;
      .item__icon {
        width: 60px;
        height: 60px;
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
    .subclasslist {
      padding-left: 15px;
      padding-right: 15px;
      width: 120%;
      height: 300px;
      box-shadow: 0 0 4px black;
      background-color: white;
      position: absolute;
      top: 90px;
      left: -10%;
      z-index: 9;
      display: flex;
    }
    .classdesclist {
      width: 100%;
      position: absolute;
      top: 90px;
      left: 0;
      z-index: 10;
      display: flex;
      .classdesclist__column {
        flex: 1;
        .item__desc {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}
</style>
