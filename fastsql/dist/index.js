function v(n, t, a, o, l, s, d, e) {
  var i = typeof n == "function" ? n.options : n;
  t && (i.render = t, i.staticRenderFns = a, i._compiled = !0), o && (i.functional = !0), s && (i._scopeId = "data-v-" + s);
  var c;
  if (d ? (c = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), l && l.call(this, r), r && r._registeredComponents && r._registeredComponents.add(d);
  }, i._ssrRegister = c) : l && (c = e ? function() {
    l.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), c)
    if (i.functional) {
      i._injectStyles = c;
      var _ = i.render;
      i.render = function(p, f) {
        return c.call(f), _(p, f);
      };
    } else {
      var h = i.beforeCreate;
      i.beforeCreate = h ? [].concat(h, c) : [c];
    }
  return {
    exports: n,
    options: i
  };
}
const m = {
  name: "fastsql",
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      condition0: [],
      condition1: [],
      condition2: [],
      thisData: this.data,
      warnInput: []
    };
  },
  mounted() {
    this.condition0 = [
      { name: this.$t("fastsql_and"), id: "and" },
      { name: this.$t("fastsql_or"), id: "or" }
    ], this.condition1 = [
      { name: this.$t("fastsql_when"), id: "when" },
      { name: this.$t("fastsql_and"), id: "and" },
      { name: this.$t("fastsql_or"), id: "or" }
    ], this.condition2 = [
      { name: this.$t("fastsql_equal"), id: "equal" },
      { name: this.$t("fastsql_noequal"), id: "noequal" },
      { name: this.$t("fastsql_bigger"), id: "bigger" },
      { name: this.$t("fastsql_smaller"), id: "smaller" }
    ];
  },
  methods: {
    addCondition(n) {
      this.thisData[n].group.push(this.otherCondition());
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
        value: ""
      };
    },
    value2name(n, t) {
      return n.find((o) => o.id === t).name;
    },
    handle0Command(n, t) {
      this.thisData[t].c0 = n;
    },
    handle1Command(n, t, a) {
      this.thisData[t].group[a].c1value = n;
    },
    handleCommand(n, t, a) {
      this.thisData[t].group[a].c2value = n;
    },
    delItem(n, t) {
      const a = [...this.thisData];
      a[n].group.length === 1 ? a.splice(n, 1) : a[n].group.splice(t, 1), this.thisData = a;
    },
    clearData() {
      this.thisData = [];
    },
    setData(n) {
      this.thisData = n || [];
    },
    getData() {
      return this.thisData.forEach((n, t) => {
        n.group.forEach((a, o) => {
          a.c1value_warn = a.field === "", a.c2value_warn = a.value === "";
        });
      }), console.log("===================================="), console.log(this.thisData), console.log("===================================="), this.thisData[0] && (this.thisData[0].c0 = null), this.thisData;
    }
  }
};
var C = function() {
  var t = this, a = t._self._c;
  return a("div", { staticClass: "all-group" }, [t._l(t.thisData, function(o, l) {
    return a("div", { key: l, staticClass: "con-group" }, [l !== 0 ? a("div", [a("div", { staticClass: "flex-center-center" }, [a("div", { staticClass: "line" }), a("div", { staticClass: "h-center" }, [a("el-dropdown", { staticStyle: { "text-align": "center" }, on: { command: (s) => t.handle0Command(s, l) } }, [a("span", { staticClass: "el-dropdown-link fontSize17 pointer" }, [t._v(" " + t._s(t.value2name(t.condition0, o.c0))), a("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), a("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(s) {
      return a("el-dropdown-item", { key: s.id, attrs: { command: s.id } }, [t._v(t._s(s.name))]);
    }), 1)], 1)], 1), a("div", { staticClass: "line" })])]) : t._e(), t._l(o.group, function(s, d) {
      return a("div", { key: s.id, staticClass: "margin10" }, [a("el-row", { attrs: { type: "flex", align: "middle" } }, [a("el-col", { attrs: { span: 3 } }, [a("el-dropdown", { on: { command: (e) => t.handle1Command(e, l, d) } }, [a("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition1, s.c1value))), a("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), a("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(e) {
        return a("el-dropdown-item", { key: e.id, attrs: { command: e.id, disabled: d === 0 } }, [t._v(t._s(e.name))]);
      }), 1)], 1)], 1), a("el-col", { attrs: { span: 8 } }, [a("div", [a("el-select", { attrs: { slot: "prepend", placeholder: t.$t("fastsql_select") }, slot: "prepend", model: { value: s.field, callback: function(e) {
        t.$set(s, "field", e);
      }, expression: "item.field" } }, t._l(t.fields, function(e) {
        return a("el-option", { key: e.id, attrs: { label: e.name, value: e.id } });
      }), 1)], 1)]), a("el-col", { attrs: { span: 3 } }, [a("el-dropdown", { on: { command: (e) => t.handleCommand(e, l, d) } }, [a("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition2, s.c2value))), a("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), a("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition2, function(e) {
        return a("el-dropdown-item", { key: e.id, attrs: { command: e.id } }, [t._v(t._s(e.name))]);
      }), 1)], 1)], 1), a("el-col", { attrs: { span: 8 } }, [a("div", { staticStyle: { display: "inline-block", border: "1px solid red" } }, [a("el-input", { attrs: { placeholder: t.$t("fastsql_input") }, model: { value: s.value, callback: function(e) {
        t.$set(s, "value", e);
      }, expression: "item.value" } })], 1)]), a("el-col", { staticStyle: { "text-align": "center" }, attrs: { span: 2 } }, [a("i", { staticClass: "el-icon-circle-close", staticStyle: { cursor: "pointer" }, on: { click: function(e) {
        return t.delItem(l, d);
      } } })])], 1), d === o.group.length - 1 ? a("div", { staticClass: "mt10 colorblue inline-block", on: { click: function(e) {
        return t.addCondition(l);
      } } }, [a("i", { staticClass: "el-icon-circle-plus-outline", staticStyle: { cursor: "pointer" } }), a("a", [t._v(t._s(t.$t("fastsql_addCondition")))])]) : t._e()], 1);
    })], 2);
  }), a("div", { staticStyle: { "text-align": "center" } }, [a("div", { staticClass: "mt10 colorblue inline-block fontSize20", on: { click: function(o) {
    return t.addGroup();
  } } }, [a("i", { staticClass: "el-icon-plus", staticStyle: { cursor: "pointer" } }), a("a", [t._v(t._s(t.$t("fastsql_addGroup")))])])])], 2);
}, w = [], $ = /* @__PURE__ */ v(
  m,
  C,
  w,
  !1,
  null,
  "61f66ff5",
  null,
  null
);
const u = $.exports;
u.install = (n) => n.component(u.name, u);
export {
  u as default
};
