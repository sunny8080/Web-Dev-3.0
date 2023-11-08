<template lang="">
  <div>
    <form @submit.prevent.stop="handleSubmit" class="flex flex-col gap-y-2 mt-2 p-2 bg-slate-400 rounded-sm">
      <input type="text" v-model="task" placeholder="Enter a task" class="py-2 px-3 rounded-md" />
      <button type="submit" class="bg-blue-600 w-fit py-1 px-5 rounded-md text-center font-bold text-white self-end hover:scale-95 transition-all duration-300">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
    };
  },
  methods: {
    handleSubmit() {
      const newTask = {
        id: Math.floor(Math.random()*1000000),
        title: this.task,
        status: 'Pending',
      };
      this.$emit('addTask', newTask);
      this.task = ""
    },
  },
};
</script>
<style lang=""></style>
