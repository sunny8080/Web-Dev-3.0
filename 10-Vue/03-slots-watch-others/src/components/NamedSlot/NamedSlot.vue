<template >
  <div>
    <NamedSlotComp>
      <template v-slot:slot1>
        <h1>How are you from slot1</h1>
      </template>

      <template v-slot:slot2>
        <h1>How are you from slot2</h1>
      </template>

      <template #default>
        <h1>How are you from default slot</h1>
      </template>
    </NamedSlotComp>

    <NamedSlotComp></NamedSlotComp>
  </div>
</template>
<script>
import NamedSlotComp from "./NamedSlotComp.vue";

export default {
  components: {
    NamedSlotComp,
  },
};
</script>
<style lang="">
</style>
