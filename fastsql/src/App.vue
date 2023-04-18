<script setup>
import { ref } from "vue";
import RestrictCondition from "./component/RestrictCondition.vue";
const fields = ref([
  { name: "name", id: "name" },
  { name: "age", id: "age" },
]);
let groupData = ref([]);
</script>

<template>
  <div id="app">
    <restrict-condition
      :fields="fields"
      :data="groupData"
      ref="childComp"
    ></restrict-condition>
  </div>
</template>

<style scoped></style>
