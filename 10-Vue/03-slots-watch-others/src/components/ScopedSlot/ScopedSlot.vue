<template >
  <div>
    <!-- <ScopedCom>
      <template #default="slotProps">
        <div>
          <h1>{{ slotProps.item }}</h1>
          <p>{{ slotProps.anotherProp }}</p>
        </div>
      </template>
    </ScopedCom> -->

    <!-- if there are only the default slot, then we can remove template and use like this -->
    <ScopedCom #default="slotProps">
      <div>
        <h1>{{ slotProps.item }}</h1>
        <p>{{ slotProps.anotherProp }}</p>
      </div>
    </ScopedCom>
  </div>
</template>
<script>
import ScopedCom from "./ScopedCom.vue";

export default {
  components: { ScopedCom },
};
</script>
<style lang="">
</style>
