<template>
  <div class="typecontainer">
    <div class="maintypearea">
      <div
        :class="['type-item', { active: item.id == selectedId }]"
        v-for="item in maintypes"
        :key="item.id"
        @click="selectmaintype(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="itemlist__container" v-for="item in typelist" :key="item.id">
      <div class="typeitem__desc">{{ item.name }}:</div>
      <div class="subtype__container">
        <subtype-list :typelist="item.children"></subtype-list>
      </div>
    </div>
  </div>
</template>

<script>
import SubtypeList from "@/components/SubtypeList.vue";
import selectedIndex from "../lib/selectedIndex";
import ArrayUtil from "../lib/ArrayUtil";
const typedata = require("../testdata/typedata.json");
export default {
  components: { SubtypeList },
  data() {
    return {
      maintypes: [],
      selectedId: "",
      typelist: [],
    };
  },
  mounted() {
    let idstr = this.$route.params.id;
    this.maintypes = typedata[0].cmsFilters;
    this.selectedId = String(this.maintypes[0].id);
    this.typelist = this.maintypes[0].children;
    let arr = [];
    if (idstr) {
      arr = idstr.split(",");
      selectedIndex.init();
      arr.forEach((element) => {
        selectedIndex.add(element);
      });
    } else {
      this.$router.push({
        name: "PTemplatesbyId",
        params: { id: this.selectedId },
      });
    }
    selectedIndex.onUpdate((data) => {
      if (!ArrayUtil.equal(arr, data)) {
        this.$router.push({
          name: "PTemplatesbyId",
          params: { id: data.join(",") },
        });
      }
    });
  },
  methods: {
    selectmaintype(item) {
      selectedIndex.clear();
      this.selectedId = String(item.id);
      this.typelist = item.children;
      selectedIndex.add(this.selectedId);
    },
  },
};
</script>

<style lang="less" scoped>
.typecontainer {
  width: 100%;
}
.maintypearea {
  width: 100%;
  border-bottom: 1px solid rgba(179, 179, 179, 0.24);
  display: flex;
  margin-bottom: 20px;
  .type-item {
    color: rgb(66, 66, 66);
    margin: 0 20px 0 20px;
    font-size: 14px;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid rgb(0, 153, 255);
  }
}
.itemlist__container {
  width: 100%;
  display: grid;
  grid-template-columns: 60px auto;
}

.typeitem__desc {
  font-size: 14px;
}
</style>
