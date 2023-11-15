<template >
  <div>
    <!-- <teleport to="#app"> -->
    <teleport to="body">
      <TeleportElementComp>
        <h1>I am teleported from TeleportElement component to body element</h1>
      </TeleportElementComp>
    </teleport>
  </div>
</template>
<script>
import TeleportElementComp from "./TeleportElementComp.vue";

export default {
  components: {
    TeleportElementComp,
  },
};
</script>
<style lang="">
</style>
