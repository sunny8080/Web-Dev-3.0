<template >
  <div>
    <div class="flex gap-x-2">
      <button @click="changeTab('Tab1Data')" class="border-2 py-1 px-2">
        Show Tab1 data
      </button>

      <button @click="changeTab('Tab2Data')" class="border-2 py-1 px-2">
        Show Tab2 data
      </button>
    </div>

    <!-- <Tab1Data v-if="currentTab==='Tab1Data'"></Tab1Data>
    <Tab2Data v-if="currentTab==='Tab2Data'"></Tab2Data> -->

    <keep-alive>
      <component :is="currentTab"> </component>
    </keep-alive>
  </div>
</template>
<script>
import Tab1Data from "./Tab1Data.vue";
import Tab2Data from "./Tab2Data.vue";

export default {
  data() {
    return {
      currentTab: "Tab1Data",
    };
  },
  methods: {
    changeTab(clickedTab) {
      this.currentTab = clickedTab;
    },
  },
  components: {
    Tab1Data,
    Tab2Data,
  },
};
</script>
<style lang="">
</style>
