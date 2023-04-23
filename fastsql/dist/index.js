function v(e, t, n, r, l, s, d, a) {
  var i = typeof e == "function" ? e.options : e;
  t && (i.render = t, i.staticRenderFns = n, i._compiled = !0), r && (i.functional = !0), s && (i._scopeId = "data-v-" + s);
  var c;
  if (d ? (c = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), l && l.call(this, o), o && o._registeredComponents && o._registeredComponents.add(d);
  }, i._ssrRegister = c) : l && (c = a ? function() {
    l.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), c)
    if (i.functional) {
      i._injectStyles = c;
      var p = i.render;
      i.render = function(f, h) {
        return c.call(h), p(f, h);
      };
    } else {
      var _ = i.beforeCreate;
      i.beforeCreate = _ ? [].concat(_, c) : [c];
    }
  return {
    exports: e,
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
      thisData: this.data
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
    addCondition(e) {
      this.thisData[e].group.push(this.otherCondition());
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
    value2name(e, t) {
      return e.find((r) => r.id === t).name;
    },
    handle0Command(e, t) {
      this.thisData[t].c0 = e;
    },
    handle1Command(e, t, n) {
      this.thisData[t].group[n].c1value = e;
    },
    handleCommand(e, t, n) {
      this.thisData[t].group[n].c2value = e;
    },
    delItem(e, t) {
      const n = [...this.thisData];
      n[e].group.length === 1 ? n.splice(e, 1) : n[e].group.splice(t, 1), this.thisData = n;
    },
    getData() {
      return this.thisData[0] && (this.thisData[0].c0 = null), this.thisData;
    }
  }
};
var C = function() {
  var t = this, n = t._self._c;
  return n("div", { staticClass: "all-group" }, [t._l(t.thisData, function(r, l) {
    return n("div", { key: l, staticClass: "con-group" }, [l !== 0 ? n("div", [n("div", { staticClass: "flex-center-center" }, [n("div", { staticClass: "line" }), n("div", { staticClass: "h-center" }, [n("el-dropdown", { staticStyle: { "text-align": "center" }, on: { command: (s) => t.handle0Command(s, l) } }, [n("span", { staticClass: "el-dropdown-link fontSize17 pointer" }, [t._v(" " + t._s(t.value2name(t.condition0, r.c0))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(s) {
      return n("el-dropdown-item", { key: s.id, attrs: { command: s.id } }, [t._v(t._s(s.name))]);
    }), 1)], 1)], 1), n("div", { staticClass: "line" })])]) : t._e(), t._l(r.group, function(s, d) {
      return n("div", { key: s.id, staticClass: "margin10" }, [n("el-row", { attrs: { type: "flex", align: "middle" } }, [n("el-col", { attrs: { span: 3 } }, [n("el-dropdown", { on: { command: (a) => t.handle1Command(a, l, d) } }, [n("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition1, s.c1value))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(a) {
        return n("el-dropdown-item", { key: a.id, attrs: { command: a.id, disabled: d === 0 } }, [t._v(t._s(a.name))]);
      }), 1)], 1)], 1), n("el-col", { attrs: { span: 8 } }, [n("div", [n("el-select", { attrs: { slot: "prepend", placeholder: t.$t("fastsql_select") }, slot: "prepend", model: { value: s.field, callback: function(a) {
        t.$set(s, "field", a);
      }, expression: "item.field" } }, t._l(t.fields, function(a) {
        return n("el-option", { key: a.id, attrs: { label: a.name, value: a.id } });
      }), 1)], 1)]), n("el-col", { attrs: { span: 3 } }, [n("el-dropdown", { on: { command: (a) => t.handleCommand(a, l, d) } }, [n("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition2, s.c2value))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition2, function(a) {
        return n("el-dropdown-item", { key: a.id, attrs: { command: a.id } }, [t._v(t._s(a.name))]);
      }), 1)], 1)], 1), n("el-col", { attrs: { span: 8 } }, [n("el-input", { attrs: { placeholder: t.$t("fastsql_input") }, model: { value: s.value, callback: function(a) {
        t.$set(s, "value", a);
      }, expression: "item.value" } })], 1), n("el-col", { staticStyle: { "text-align": "center" }, attrs: { span: 2 } }, [n("i", { staticClass: "el-icon-circle-close", staticStyle: { cursor: "pointer" }, on: { click: function(a) {
        return t.delItem(l, d);
      } } })])], 1), d === r.group.length - 1 ? n("div", { staticClass: "mt10 colorblue inline-block", on: { click: function(a) {
        return t.addCondition(l);
      } } }, [n("i", { staticClass: "el-icon-circle-plus-outline", staticStyle: { cursor: "pointer" } }), n("a", [t._v(t._s(t.$t("fastsql_addCondition")))])]) : t._e()], 1);
    })], 2);
  }), n("div", { staticStyle: { "text-align": "center" } }, [n("div", { staticClass: "mt10 colorblue inline-block fontSize20", on: { click: function(r) {
    return t.addGroup();
  } } }, [n("i", { staticClass: "el-icon-plus", staticStyle: { cursor: "pointer" } }), n("a", [t._v(t._s(t.$t("fastsql_addGroup")))])])])], 2);
}, w = [], $ = /* @__PURE__ */ v(
  m,
  C,
  w,
  !1,
  null,
  "2bccc193",
  null,
  null
);
const u = $.exports;
u.install = (e) => e.component(u.name, u);
export {
  u as default
};
