<template>
  <div>
    <!-- <MyCounter></MyCounter>
    <hr /> -->

    <!-- <ScopedSlot></ScopedSlot>
    <hr /> -->

    <!-- <DefaultSlot></DefaultSlot>
    <br>
    <default-slot></default-slot>
    <hr /> -->

    <!-- <NamedSlot></NamedSlot>
    <hr> -->

    <!-- <DynamicComponent></DynamicComponent>
    <hr /> -->

    <!-- <TeleportElement></TeleportElement>
    <hr> -->

    <FormVue></FormVue>
    <hr />
  </div>
</template>

<style>
</style>

<script>
import DefaultSlot from "./components/DefaultSlot/DefaultSlot.vue";
import DynamicComponent from "./components/DynamicComponent/DynamicComponent.vue";
import FormVue from "./components/FormVue/FormVue.vue";
import MyCounter from "./components/MethodsComputedWatch/MyCounter.vue";
import NamedSlot from "./components/NamedSlot/NamedSlot.vue";
import ScopedSlot from "./components/ScopedSlot/ScopedSlot.vue";
import TeleportElement from "./components/TeleportElement/TeleportElement.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyCounter,
    ScopedSlot,
    DefaultSlot,
    NamedSlot,
    DynamicComponent,
    TeleportElement,
    FormVue,
  },
};
</script>
