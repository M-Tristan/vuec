<template>
  <div class="tempcontainer">
    <screen @update="classupdate"></screen>
  </div>
</template>

<script>
import Screen from "../components/Screen.vue";
export default {
  components: { Screen },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    classupdate(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.tempcontainer {
  width: 100%;
}
</style>
