<template>
  <div class="main-container">
    <div class="seotips">
      <div class="tips-item">hight quiality</div>
      <div class="tips-item">comments to disable some warnings</div>
      <div class="tips-item">warnings in a file.</div>
    </div>
    <div class="searcharea">
      <search-component></search-component>
    </div>
    <div class="classarea">
      <classlist></classlist>
    </div>

    <div class="modeldistrib-container">
      <div class="maincontent">
        <template-distrib></template-distrib>
      </div>
    </div>
    <div class="dividercontainer">
      <divider-content></divider-content>
    </div>
    <div class="trending">
      <trending-title></trending-title>
    </div>
    <template-distrib-scroll></template-distrib-scroll>

    <div class="trending">
      <trending-title></trending-title>
    </div>
    <div class="footer">
      <f-footer></f-footer>
    </div>
  </div>
</template>

<script>
import Classlist from "./classlist.vue";
import DividerContent from "./DividerContent.vue";
import FFooter from "./FFooter.vue";
import SearchComponent from "./SearchComponent.vue";
import TemplateDistrib from "./TemplateDistrib.vue";
import TemplateDistribScroll from "./TemplateDistribScroll.vue";
import TrendingTitle from "./TrendingTitle.vue";
export default {
  components: {
    TemplateDistrib,
    DividerContent,
    TrendingTitle,
    TemplateDistribScroll,
    FFooter,
    Classlist,
    SearchComponent,
  },
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.seotips {
  margin-top: 30px;
  .tips-item {
    text-align: center;
    font-size: 30px;
  }
}

.modeldistrib-container {
  width: 100%;
  display: flex;
  justify-content: center;
  .maincontent {
    width: 60%;
  }
}
.dividercontainer {
  width: 100%;
}
.trending {
  width: 60%;
}
.footer {
  width: 80%;
}
.searcharea {
  width: 50%;
}
.classarea {
  width: 50%;
}
</style>
