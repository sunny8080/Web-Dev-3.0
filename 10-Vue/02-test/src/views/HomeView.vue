<template lang="">
  <div class="mx-auto max-w-[850px] bg-[#ccc] p-5 mt-5 rounded-md">
    <h1 class="text-center mb-4 font-bold text-xl underline " >ToDo Application</h1>
    <div class="flex justify-between bg-green-500 py-2 px-3 items-center rounded-md cursor-pointer" @click="activeAddTask = !activeAddTask">
      <h1 class="font-semibold" >Add Task</h1>
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>

    <div v-if="activeAddTask">
      <AddTask @addTask="addTask" />
    </div>

    <ShowTasks :tasks="tasks" @completeTask="completeTask" @deleteTask="deleteTask" />
  </div>
</template>

<script>
import AddTask from '../components/AddTask.vue';
import ShowTasks from '../components/ShowTasks.vue';

export default {
  data() {
    return {
      activeAddTask: false,
      tasks: [
        {
          id: 1,
          title: 'Repair the laptop',
          status: 'Pending',
        },
        {
          id: 2,
          title: 'Meeting with Team',
          status: 'Pending',
        },
        {
          id: 3,
          title: 'Task 3',
          status: 'Completed',
        },
      ],
    };
  },
  components: {
    AddTask,
    ShowTasks,
  },
  methods: {
    addTask(newTask) {
      this.tasks.push(newTask);
    },
    completeTask(taskId) {
      console.log("in parent");
      this.tasks = this.tasks.map((task) =>
        (task.id !== taskId ? task : { ...task, status: 'Completed' })
      )
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId)
    }
  },
};
</script>
<style>
</style>
