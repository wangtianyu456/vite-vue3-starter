<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <h2>{{ homeCount }}</h2>
    <button @click="increment">increment</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Home",
  // setup() {
  //   const homeCount = ref(0);
  //   const increment = () => {
  //     homeCount.value++;
  //   };
  //   return {
  //     homeCount,
  //     increment,
  //   };
  // },
});
</script>

<style lang="scss" scoped></style>
