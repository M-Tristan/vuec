<template>
  <div class="container">
    <div class="modellist">
      <div class="modelitem" v-for="(item, index) in 8" :key="index"></div>
    </div>
    <div class="typelist">
      <div
        :class="['typeitem', { active: index == 0 }]"
        v-for="(item, index) in 4"
        :key="index"
      >
        <div class="typeitem__title">IG Story</div>
        <div class="typeitem__detail" v-if="index == 0">
          He then stencilled the ceiling with a moon and stars moti
        </div>
        <div class="viewmore" v-if="index == 1">View More</div>
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
