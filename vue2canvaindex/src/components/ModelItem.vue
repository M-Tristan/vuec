<template>
  <div class="model-item">
    <div class="imagecontainer">
      <img src="https://img2.baidu.com/it/u=1813907412,3017769335&fm=26&fmt=auto" />
    </div>
    <div class="info__container">
      <div class="tips__containter">find your ig stories</div>
      <div class="button__containter">
        <div class="button">view more</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.model-item {
  width: 300px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 4px rgba(128, 128, 128, 0.404);
  .imagecontainer {
    width: 300px;
    height: 300px;
    overflow: hidden;
    img {
      cursor: pointer;
      width: 300px;
      height: 300px;
      object-fit: cover;
      transition-duration: 0.1s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .info__container {
    height: 100px;
    display: flex;
    justify-content: space-between;
    .tips__containter {
      flex: 1;
      height: 100%;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button__containter {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        border: 1px solid black;
        // box-shadow: 0 0 4px black;
        border-radius: 40px;
        transition-duration: 0.1s;
        &:hover {
          color: white;
          background-color: black;
        }
      }
    }
  }
}
</style>
