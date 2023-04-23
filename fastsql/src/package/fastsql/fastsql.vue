<template>
  <div class="all-group">
    <div
      v-for="(groupItem, groupIndex) in thisData"
      :key="groupIndex"
      class="con-group"
    >
      <div v-if="groupIndex !== 0">
        <div class="flex-center-center">
          <div class="line"></div>
          <div class="h-center">
            <el-dropdown
              style="text-align: center"
              @command="(command) => handle0Command(command, groupIndex)"
            >
              <span class="el-dropdown-link fontSize17 pointer">
                {{ value2name(condition0, groupItem.c0)
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="condition1item in condition0"
                  :key="condition1item.id"
                  :command="condition1item.id"
                  >{{ condition1item.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div
        v-for="(item, itemIndex) in groupItem.group"
        :key="item.id"
        class="margin10"
      >
        <el-row type="flex" align="middle">
          <el-col :span="3">
            <el-dropdown
              @command="
                (command) => handle1Command(command, groupIndex, itemIndex)
              "
            >
              <span class="el-dropdown-link pointer">
                {{ value2name(condition1, item.c1value)
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="condition1item in condition0"
                  :key="condition1item.id"
                  :command="condition1item.id"
                  :disabled="itemIndex === 0"
                  >{{ condition1item.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>

          <el-col :span="8">
            <div>
              <el-select
                v-model="item.field"
                slot="prepend"
                :placeholder="$t('fastsql_select')"
              >
                <el-option
                  v-for="field in fields"
                  :key="field.id"
                  :label="field.name"
                  :value="field.id"
                ></el-option>
              </el-select>
            </div>
          </el-col>

          <el-col :span="3">
            <el-dropdown
              @command="
                (command) => handleCommand(command, groupIndex, itemIndex)
              "
            >
              <span class="el-dropdown-link pointer">
                {{ value2name(condition2, item.c2value)
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="condition2item in condition2"
                  :key="condition2item.id"
                  :command="condition2item.id"
                  >{{ condition2item.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>

          <el-col :span="8">
            <el-input
              v-model="item.value"
              :placeholder="$t('fastsql_input')"
            ></el-input>
          </el-col>

          <el-col :span="2" style="text-align: center">
            <i
              class="el-icon-circle-close"
              style="cursor: pointer"
              @click="delItem(groupIndex, itemIndex)"
            ></i>
          </el-col>
        </el-row>
        <div
          v-if="itemIndex === groupItem.group.length - 1"
          class="mt10 colorblue inline-block"
          @click="addCondition(groupIndex)"
        >
          <i class="el-icon-circle-plus-outline" style="cursor: pointer"></i
          ><a>{{ $t("fastsql_addCondition") }}</a>
        </div>
      </div>
    </div>
    <div style="text-align: center">
      <div class="mt10 colorblue inline-block fontSize20" @click="addGroup()">
        <i class="el-icon-plus" style="cursor: pointer"></i
        ><a>{{ $t("fastsql_addGroup") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fastsql",
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      condition0: [],
      condition1: [],
      condition2: [],
      thisData: this.data,
    };
  },

  mounted() {
    this.condition0 = [
      { name: this.$t("fastsql_and"), id: "and" },
      { name: this.$t("fastsql_or"), id: "or" },
    ];
    this.condition1 = [
      { name: this.$t("fastsql_when"), id: "when" },
      { name: this.$t("fastsql_and"), id: "and" },
      { name: this.$t("fastsql_or"), id: "or" },
    ];
    this.condition2 = [
      { name: this.$t("fastsql_equal"), id: "equal" },
      { name: this.$t("fastsql_noequal"), id: "noequal" },
      { name: this.$t("fastsql_bigger"), id: "bigger" },
      { name: this.$t("fastsql_smaller"), id: "smaller" },
    ];
  },

  methods: {
    addCondition(groupIndex) {
      this.thisData[groupIndex].group.push(this.otherCondition());
    },
    addGroup() {
      this.thisData.push({ c0: "and", group: [this.firstCondition()] });
    },
    firstCondition() {
      return { c1value: "when", field: "", c2value: "equal", value: "" };
    },
    otherCondition() {
      return {
        c1value: "and",
        field: "",
        c2value: "equal",
        value: "",
      };
    },
    value2name(condition, value) {
      const thisItem = condition.find((item) => {
        return item.id === value;
      });
      return thisItem.name;
    },
    handle0Command(command, groupIndex) {
      this.thisData[groupIndex].c0 = command;
    },
    // 当且操作
    handle1Command(command, groupIndex, itemIndex) {
      this.thisData[groupIndex].group[itemIndex].c1value = command;
    },
    // 字段操作
    handleCommand(command, groupIndex, itemIndex) {
      this.thisData[groupIndex].group[itemIndex].c2value = command;
    },
    delItem(groupIndex, itemIndex) {
      const temp = [...this.thisData];
      // 删除对应的项目
      // 如果二级数组长度为1，直接从一级数组中删除这个二级数组
      if (temp[groupIndex].group.length === 1) {
        temp.splice(groupIndex, 1);
      } else {
        // 否则在二级数组中删除这条
        temp[groupIndex].group.splice(itemIndex, 1);
      }
      this.thisData = temp;
    },
    getData() {
      this.thisData[0] && (this.thisData[0].c0 = null);
      return this.thisData;
    },
  },
};
</script>
<style scoped lang="scss">
.btn {
  margin-top: 10px;
}
.all-group {
  width: 60%;
  min-width: 700px;
}
.inline {
  & > div {
    margin-left: 20px;
  }
  & > i {
    margin-left: 20px;
  }
}
.ml10 {
  margin-left: 10px;
}
.mr10 {
  margin-right: 10px;
}
.mt10 {
  margin-top: 10px;
}
.el-icon-circle-close::before {
  font-size: 20px;
}
.colorblue {
  color: #2773dd;
}
.inline-block {
  display: inline-block;
}
.fontSize17 {
  font-size: 17px;
}
.fontSize20 {
  font-size: 20px;
}
.margin10 {
  margin: 10px;
}
.h-center {
  display: flex;
  justify-content: center;
  margin: 0 20px;
}
.flex-center-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.line {
  flex: 1;
  height: 1px;
  background-color: black;
}
.pointer {
  cursor: pointer;
}
</style>
