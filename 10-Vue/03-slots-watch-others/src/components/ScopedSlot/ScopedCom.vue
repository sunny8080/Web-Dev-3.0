<template>
  <div>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherProp="..."> </slot>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goals: ["Goal 1", "Goal 2", "Goal 3"],
    };
  },
};
</script>
<style lang="">
</style>
