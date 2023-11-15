<template>
  <div>
    <input type="text" v-model="count" />
    <div class="flex gap-x-10">
      <button @click="increaseCount(5)" class="border p-2">Add 5</button>
      <button @click="increaseCount(1)" class="border p-2">Add 1</button>
    </div>
    <h1>Count : {{ result }}</h1>
    <h1>NegativeCount : {{ negativeCount }}</h1>
  </div>
</template>



<script>
export default {
  data() {
    return {
      count: 0,
      guess: 12,
    };
  },
  methods: {
    increaseCount(num) {
      this.count += num;
    },
  },
  computed: {
    result() {
      if (this.count === this.guess) {
        return "Correct guess";
      } else if (this.count < this.guess) {
        return "Guess is higher";
      } else {
        return "Guess is lower";
      }
    },
    negativeCount() {
      return -1 * this.count;
    },
  },
  watch: {
    count() {
      // const that = this;
      // setTimeout(function () {
      //   that.count = 0;
      // }, 2000);

      if (this.count > this.guess + 20) {
        this.count = 10;
      }
    },
  },
};
</script>
<style lang="">
</style>
