<template >
  <div class="flex gap-3 border max-w-[300px]">
    <h2>Give us a rating</h2>
    <ul>
      <li :class="{ active: modelValue === 'poor' }">
        <button type="button" @click="activate('poor')">Poor</button>
      </li>

      <li :class="{ active: modelValue === 'average' }">
        <button type="button" @click="activate('average')">Average</button>
      </li>

      <li :class="{ active: modelValue === 'great' }">
        <button type="button" @click="activate('great')">Great</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>
<style scoped>
.active {
  background-color: green;
  color: aqua;
  padding: 0.5rem 2rem;
}
</style>
