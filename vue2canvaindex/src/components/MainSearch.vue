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
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">为你推荐</div>
        </div>
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">演示文稿</div>
        </div>
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">社交媒体</div>
        </div>
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">视频</div>
        </div>
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">平面物料</div>
        </div>
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">市场营销</div>
        </div>
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">商务办公</div>
        </div>
        <div class="itemarea-item">
          <div class="item__icon"></div>
          <div class="item__desc">更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    .itemarea-item {
      cursor: pointer;
      float: left;
      width: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 30px;
      .item__icon {
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.158);
      }
      .item__desc {
        font-size: 14px;
        color: white;
      }
    }
  }
}
</style>
