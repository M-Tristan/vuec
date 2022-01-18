<template>
  <div class="container">
    <div class="itemarea">
      <div>English</div>
      <div>分享图标</div>
    </div>
    <div class="itemarea">
      <div>mit</div>
      <div>term of use</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  .itemarea {
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: space-between;
    &:first-child {
      border-bottom: 1px solid rgb(235, 234, 234);
    }
  }
}
</style>
