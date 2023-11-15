<template>
  <div class="mt-8 bg-slate-400 p-4 rounded-md">
    <h1 class="mb-4 font-bold text-xl">All Task -</h1>


    <div class="flex flex-col gap-y-2 border  rounded-md border-slate-700">
      <p v-if="tasks.length === 0" class="font-semibold">No active task found</p>
      <div v-for="task in tasks" :key="task.id"
        class="py-2 px-3 bg-slate-700 rounded-md font-semibold flex justify-between items-center"
        :class="task.status === 'Pending' ? 'text-[#FFFF00]' : 'text-[#00FF00]'">
        <p :class="task.status === 'Completed' && 'line-through'">{{ task.title }}</p>

        <div class="flex gap-x-4 items-center">
          <button @click="this.$emit('completeTask', task.id)" :disabled="task.status === 'Completed'" :class="task.status === 'Completed' && 'cursor-not-allowed'">
            <font-awesome-icon icon="fa-regular fa-circle-check" class="text-xl text-green-300" />
          </button>

          <button @click="this.$emit('deleteTask', task.id)">
            <font-awesome-icon icon="fa-solid fa-trash" class="text-xl text-red-500" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      abc: true,
    };
  },
  props: ['tasks'],
  methods: {

  }
};
</script>
<style lang=""></style>
