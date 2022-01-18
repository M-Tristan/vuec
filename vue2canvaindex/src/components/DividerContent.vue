<template>
  <div class="container">
    <div class="main__content">
      <div class="content__title">foco</div>
      <div>
        <div class="content__tiptitle">Design in one click</div>
        <div class="content__tiphead">
          <div>Helping people</div>
          <div>bring ideas to life</div>
        </div>
        <div class="content__tipcontent">
          <div>Does not support reading Indexed</div>
          <div>The Large Document Format</div>
          <div>Writing text layer with "vertical"</div>
          <div>when opening the file in Photoshop</div>
          <div>composite image data</div>
        </div>
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
  height: 400px;
  background-color: rgba(0, 0, 0, 0.904);
  display: flex;
  justify-content: center;
  .main__content {
    line-height: 40px;
    width: 60%;
    display: flex;
    .content__title {
      width: 150px;
      color: white;
    }
    .content__tiptitle {
      color: rgb(0, 195, 255);
    }
    .content__tiphead {
      color: white;
    }
    .content__tipcontent {
      color: grey;
    }
  }
}
</style>
