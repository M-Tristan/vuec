<template>
  <div class="sublist-container">
    <div>
      <div
        @click="selectItem(-1)"
        :class="['typeitem', { active: activeindex == -1 }]"
      >
        全部
      </div>
      <div
        @click="selectItem(item)"
        :class="['typeitem', { active: activeindex == item.id }]"
        v-for="item in typelist"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
    <subtype-list
      v-if="children && children.length != 0"
      :typelist="children"
    ></subtype-list>
  </div>
</template>

<script>
import selectedIndex from "../lib/selectedIndex";

export default {
  name: "SubtypeList",
  props: {
    typelist: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeindex: -1,
      children: [],
    };
  },
  mounted() {
    for (
      let index = 0, length = this.typelist.length;
      index < length;
      index++
    ) {
      let item = this.typelist[index];
      if (selectedIndex.has(item.id)) {
        this.activeindex = item.id;
        this.children = item.children;
        break;
      }
    }
  },
  methods: {
    selectItem(item) {
      selectedIndex.delete(this.activeindex);
      if (item == -1) {
        this.activeindex = -1;
        this.children = [];
      } else {
        this.activeindex = item.id;
        this.children = item.children;
        selectedIndex.add(this.activeindex);
      }
    },
  },
  watch: {
    typelist() {
      selectedIndex.delete(this.activeindex);

      this.activeindex = -1;
    },
  },
  beforeDestroy() {
    selectedIndex.delete(this.activeindex);
  },
};
</script>

<style lang="less" scoped>
.sublist-container {
  display: inline-block;
  width: 100%;
  .typeitem {
    display: inline-block;
    font-size: 14px;
    float: left;
    margin-right: 20px;
    margin-bottom: 15px;
    cursor: pointer;
    padding: 0 5px 0 5px;
    border-radius: 3px;
  }
  .active {
    background-color: rgba(0, 110, 255, 0.26);
  }
}
</style>
