<template>
  <div class="modellist__container">
    <div class="modellist__leftarrow" @click="buttonEvent('left')">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="modellist__rightarrow" @click="buttonEvent('right')">
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="modellist" ref="modelelement">
      <img
        class="model__pic"
        :src="src"
        :key="index"
        v-for="(src, index) in piclist"
      />
    </div>
  </div>
</template>

<script>
let piclist = [
  "https://img1.baidu.com/it/u=121145013,697400698&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img2.baidu.com/it/u=1813907412,3017769335&fm=26&fmt=auto",
  "https://img2.baidu.com/it/u=3110301966,1963257109&fm=26&fmt=auto",
  "https://img1.baidu.com/it/u=159542528,992147398&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img0.baidu.com/it/u=4218135863,3713896604&fm=253&fmt=auto&app=138&f=JPEG?w=707&h=500",
  "https://img1.baidu.com/it/u=3763507065,1961144263&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
  "https://img0.baidu.com/it/u=679907104,1430887934&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img1.baidu.com/it/u=301137850,3267155073&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img1.baidu.com/it/u=2588198976,4135879207&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  "https://img1.baidu.com/it/u=4099015803,1206127583&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
  "https://img1.baidu.com/it/u=274954616,2637038031&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
  "https://img1.baidu.com/it/u=3707861463,2759840103&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img0.baidu.com/it/u=1848931891,3645214933&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img0.baidu.com/it/u=939790420,3502992257&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img1.baidu.com/it/u=3677912229,40698883&fm=253&fmt=auto&app=120&f=JPEG?w=1024&h=576",
  "https://img1.baidu.com/it/u=2655657690,3554616779&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  "https://img0.baidu.com/it/u=4047143128,3055203689&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
  "https://img2.baidu.com/it/u=1859228254,790927814&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
  "https://img0.baidu.com/it/u=3040314268,154831829&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img0.baidu.com/it/u=4144566651,2945440658&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=293",
  "https://img0.baidu.com/it/u=3970468368,3414862444&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img0.baidu.com/it/u=1614918324,3181994761&fm=26&fmt=auto",
  "https://img2.baidu.com/it/u=540110961,532333983&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img2.baidu.com/it/u=912649663,3267412506&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img1.baidu.com/it/u=3455610607,1655274859&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img1.baidu.com/it/u=893088796,3292444873&fm=26&fmt=auto",
  "https://img2.baidu.com/it/u=2652722329,3621216821&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img1.baidu.com/it/u=3983056487,1298471083&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img0.baidu.com/it/u=2968247265,3698513988&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
  "https://img0.baidu.com/it/u=1501777400,4254975715&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
];
import Tranzation from "../lib/tranzation";
import _ from "lodash";
export default {
  data() {
    return {
      piclist,
    };
  },
  methods: {
    buttonEvent: _.debounce(
      function (direct = "right") {
        let width = this.$refs.modelelement.offsetWidth;
        if (direct == "left") {
          width = -width;
        }
        let tranzation = new Tranzation({
          left: this.$refs.modelelement.scrollLeft,
        });
        tranzation.time(500);
        tranzation.to({ left: this.$refs.modelelement.scrollLeft + width });
        tranzation.onUpdate((data) => {
          this.$refs.modelelement.scrollLeft = data.left;
        });
        tranzation.start();
      },
      100,
      { leading: true, trailing: false }
    ),
  },
};
</script>
<style lang="less">
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modellist__container {
  width: 100%;
  position: relative;

  .modellist__leftarrow {
    cursor: pointer;
    &:extend(.center);
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    left: 0;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 0 0 4px rgb(201, 200, 200);
  }
  .modellist__rightarrow {
    cursor: pointer;
    &:extend(.center);
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    right: 0;
    top: 50%;
    transform: translateX(50%) translateY(-50%);
    box-shadow: 0 0 4px rgb(201, 200, 200);
  }
}
.modellist {
  display: flex;
  margin-top: 40px;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.model__pic {
  height: 200px;
  margin-right: 20px;
  border-radius: 10px;
  &:nth-last-child(1) {
    margin-right: 0px;
  }
}
</style>
