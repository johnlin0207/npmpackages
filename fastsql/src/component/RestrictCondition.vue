<script setup>
import fastsql from "fastsql-vue";
import "fastsql-vue/dist/style.css";
import { ref, reactive } from "vue";
const props = defineProps({
  fields: Array,
  data: Array,
});

const childComp = ref(null);
const confirm = () => {
  console.log("====================================");
  console.log(childComp.value.getData());
  console.log("====================================");
};
</script>
<template>
  <div>
    <fastsql
      :fields="props.fields"
      :data="props.data"
      ref="childComp"
    ></fastsql>
    <el-button type="primary" @click="confirm()">确定</el-button>
  </div>
</template>

<style scoped></style>
