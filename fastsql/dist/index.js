function f(a, t, n, r, o, i, d, e) {
  var s = typeof a == "function" ? a.options : a;
  t && (s.render = t, s.staticRenderFns = n, s._compiled = !0), r && (s.functional = !0), i && (s._scopeId = "data-v-" + i);
  var c;
  if (d ? (c = function(l) {
    l = l || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), o && o.call(this, l), l && l._registeredComponents && l._registeredComponents.add(d);
  }, s._ssrRegister = c) : o && (c = e ? function() {
    o.call(
      this,
      (s.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), c)
    if (s.functional) {
      s._injectStyles = c;
      var _ = s.render;
      s.render = function(v, p) {
        return c.call(p), _(v, p);
      };
    } else {
      var h = s.beforeCreate;
      s.beforeCreate = h ? [].concat(h, c) : [c];
    }
  return {
    exports: a,
    options: s
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
      { name: this.$t("and"), id: "and" },
      { name: this.$t("or"), id: "or" }
    ], this.condition1 = [
      { name: this.$t("when"), id: "when" },
      { name: this.$t("and"), id: "and" },
      { name: this.$t("or"), id: "or" }
    ], this.condition2 = [
      { name: this.$t("equal"), id: "\uFF1D" },
      { name: this.$t("noequal"), id: "\u2260" },
      { name: this.$t("bigger"), id: "\uFF1E" },
      { name: this.$t("smaller"), id: "\uFF1C" }
    ];
  },
  methods: {
    addCondition(a) {
      this.thisData[a].group.push(this.otherCondition());
    },
    addGroup() {
      this.thisData.push({ c0: "and", group: [this.firstCondition()] });
    },
    firstCondition() {
      return { c1value: "when", field: "", c2value: "\uFF1D", value: "" };
    },
    otherCondition() {
      return {
        c1value: "and",
        field: "",
        c2value: "\uFF1D",
        value: ""
      };
    },
    value2name(a, t) {
      return a.find((r) => r.id === t).name;
    },
    handle0Command(a, t) {
      this.thisData[t].c0 = a;
    },
    handle1Command(a, t, n) {
      this.thisData[t].group[n].c1value = a;
    },
    handleCommand(a, t, n) {
      this.thisData[t].group[n].c2value = a;
    },
    delItem(a, t) {
      const n = [...this.thisData];
      n[a].group.length === 1 ? n.splice(a, 1) : n[a].group.splice(t, 1), this.thisData = n;
    },
    getData() {
      return this.thisData[0] && (this.thisData[0].c0 = null), this.thisData;
    }
  }
};
var C = function() {
  var t = this, n = t._self._c;
  return n("div", { staticClass: "all-group" }, [t._l(t.thisData, function(r, o) {
    return n("div", { key: o, staticClass: "con-group" }, [o !== 0 ? n("div", [n("div", { staticClass: "flex-center-center" }, [n("div", { staticClass: "line" }), n("div", { staticClass: "h-center" }, [n("el-dropdown", { staticStyle: { "text-align": "center" }, on: { command: (i) => t.handle0Command(i, o) } }, [n("span", { staticClass: "el-dropdown-link fontSize17 pointer" }, [t._v(" " + t._s(t.value2name(t.condition0, r.c0))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(i) {
      return n("el-dropdown-item", { key: i.id, attrs: { command: i.id } }, [t._v(t._s(i.name))]);
    }), 1)], 1)], 1), n("div", { staticClass: "line" })])]) : t._e(), t._l(r.group, function(i, d) {
      return n("div", { key: i.id, staticClass: "margin10" }, [n("el-row", { attrs: { type: "flex", align: "middle" } }, [n("el-col", { attrs: { span: 3 } }, [n("el-dropdown", { on: { command: (e) => t.handle1Command(e, o, d) } }, [n("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition1, i.c1value))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(e) {
        return n("el-dropdown-item", { key: e.id, attrs: { command: e.id, disabled: d === 0 } }, [t._v(t._s(e.name))]);
      }), 1)], 1)], 1), n("el-col", { attrs: { span: 8 } }, [n("div", [n("el-select", { attrs: { slot: "prepend", placeholder: t.$t("select") }, slot: "prepend", model: { value: i.field, callback: function(e) {
        t.$set(i, "field", e);
      }, expression: "item.field" } }, t._l(t.fields, function(e) {
        return n("el-option", { key: e.id, attrs: { label: e.name, value: e.id } });
      }), 1)], 1)]), n("el-col", { attrs: { span: 3 } }, [n("el-dropdown", { on: { command: (e) => t.handleCommand(e, o, d) } }, [n("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition2, i.c2value))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition2, function(e) {
        return n("el-dropdown-item", { key: e.id, attrs: { command: e.id } }, [t._v(t._s(e.name))]);
      }), 1)], 1)], 1), n("el-col", { attrs: { span: 8 } }, [n("el-input", { attrs: { placeholder: t.$t("input") }, model: { value: i.value, callback: function(e) {
        t.$set(i, "value", e);
      }, expression: "item.value" } })], 1), n("el-col", { staticStyle: { "text-align": "center" }, attrs: { span: 2 } }, [n("i", { staticClass: "el-icon-circle-close", staticStyle: { cursor: "pointer" }, on: { click: function(e) {
        return t.delItem(o, d);
      } } })])], 1), d === r.group.length - 1 ? n("div", { staticClass: "mt10 colorblue inline-block", on: { click: function(e) {
        return t.addCondition(o);
      } } }, [n("i", { staticClass: "el-icon-circle-plus-outline", staticStyle: { cursor: "pointer" } }), n("a", [t._v(t._s(t.$t("addCondition")))])]) : t._e()], 1);
    })], 2);
  }), n("div", { staticStyle: { "text-align": "center" } }, [n("div", { staticClass: "mt10 colorblue inline-block fontSize20", on: { click: function(r) {
    return t.addGroup();
  } } }, [n("i", { staticClass: "el-icon-plus", staticStyle: { cursor: "pointer" } }), n("a", [t._v(t._s(t.$t("addGroup")))])])])], 2);
}, w = [], $ = /* @__PURE__ */ f(
  m,
  C,
  w,
  !1,
  null,
  "72db6823",
  null,
  null
);
const u = $.exports;
u.install = (a) => a.component(u.name, u);
export {
  u as default
};
