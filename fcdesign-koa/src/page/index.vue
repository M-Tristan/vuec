<template>
  <div>
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
