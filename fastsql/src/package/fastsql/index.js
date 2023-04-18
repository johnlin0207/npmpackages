// MoorSwitch 是对应组件的名字，要记得在 moor-switch.vue 文件中还是 name 属性哦
import FastSql from "./fastsql.vue";

FastSql.install = (Vue) => Vue.component(FastSql.name, FastSql);

export default FastSql;
