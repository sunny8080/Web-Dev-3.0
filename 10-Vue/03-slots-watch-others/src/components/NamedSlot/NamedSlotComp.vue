<template >
  <div class="border-2">
    <slot> <h1>Default Slot, Default content</h1></slot>
    <br />
    <slot name="slot1"> <h1>Named Slot1, Default content</h1> </slot>
    <br />
    <slot name="slot2"> <h1>Named Slot2, Default content</h1> </slot>
    <br />
    <div v-if="this.$slots.slot1">
      <slot name="slot3">Conditional Named slot</slot>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$slots);
  },
};
</script>
<style lang="">
</style>
