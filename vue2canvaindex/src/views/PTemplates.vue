<template>
  <div class="typecontainer">
    <div class="maintypearea">
      <div
        :class="['type-item', { active: item.id == selectedId }]"
        v-for="(item, index) in maintypes"
        :key="index"
        @click="selectedId = item.id"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
const typedata = require("../testdata/typedata.json");
export default {
  data() {
    return {
      maintypes: [],
      selectedId: "",
    };
  },
  mounted() {
    this.maintypes = typedata[0].cmsFilters;
    this.selectedId = this.maintypes[0].id;
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
</style>
