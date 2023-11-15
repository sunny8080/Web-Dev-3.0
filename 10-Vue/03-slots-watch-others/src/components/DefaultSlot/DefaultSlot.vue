<template>
  <div>
    <!-- 1st way -->
    <DefaultSlotComp> </DefaultSlotComp>

    <!-- 2nd way -->
    <DefaultSlotComp>
      <h1>My name is sunny kumar</h1>
    </DefaultSlotComp>

    <!-- 3rd way -->
    <DefaultSlotComp>
      <template v-slot:default>
        <h1>My name is sunny kumar</h1>
      </template>
    </DefaultSlotComp>

    <!-- 4th way -->
    <DefaultSlotComp>
      <template #default>
        <h1>My name is sunny kumar</h1>
      </template>
    </DefaultSlotComp>
  </div>
</template>
<script>
import DefaultSlotComp from "./DefaultSlotComp.vue";
export default {
  components: {
    DefaultSlotComp,
  },
};
</script>
<style lang="">
</style>
