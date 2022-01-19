<template>
  <div class="container">
    <div class="modellist">
      <div class="modelitem" v-for="(item, index) in 8" :key="index">
        <div class="modelitem__mask">
          <div class="edit-button">edit</div>
        </div>
      </div>
    </div>
    <div class="typelist">
      <div
        :class="['typeitem', { active: index == activeIndex }]"
        v-for="(item, index) in 4"
        :key="index"
        @mouseenter="activeIndex = index"
      >
        <div class="typeitem__title">IG Story</div>
        <div class="typeitem__detail" v-if="index == activeIndex">
          He then stencilled the ceiling with a moon and stars moti
        </div>
        <div class="viewmore" v-if="index == activeIndex">View More</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.modellist {
  width: 600px;
  .modelitem {
    cursor: pointer;
    float: left;
    width: 120px;
    height: 240px;
    background-color: black;
    border-radius: 10px;
    margin: 15px;
    position: relative;
  }
  .modelitem__mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.39);
    opacity: 0;
    &:hover {
      opacity: 1;
    }
    .edit-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 30px;
      border-radius: 15px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      background-color: white;
    }
  }
}
.typelist {
  width: 250px;
  margin-top: 20px;

  .typeitem {
    cursor: pointer;
    color: grey;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid rgb(192, 190, 190);
    &:last-child {
      border-bottom: 1px solid rgb(192, 190, 190);
    }
    .typeitem__title {
      font-weight: 600;
    }
    .typeitem__detail {
      margin-top: 20px;

      font-size: 14px;
    }
    .viewmore {
      margin-top: 20px;
    }
  }
  .active {
    color: black;
  }
}
</style>
