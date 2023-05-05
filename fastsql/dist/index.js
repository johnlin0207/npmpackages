function m(e, t, a, d, i, n, o, s) {
  var l = typeof e == "function" ? e.options : e;
  t && (l.render = t, l.staticRenderFns = a, l._compiled = !0), d && (l.functional = !0), n && (l._scopeId = "data-v-" + n);
  var c;
  if (o ? (c = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), i && i.call(this, r), r && r._registeredComponents && r._registeredComponents.add(o);
  }, l._ssrRegister = c) : i && (c = s ? function() {
    i.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), c)
    if (l.functional) {
      l._injectStyles = c;
      var _ = l.render;
      l.render = function(p, h) {
        return c.call(h), _(p, h);
      };
    } else {
      var f = l.beforeCreate;
      l.beforeCreate = f ? [].concat(f, c) : [c];
    }
  return {
    exports: e,
    options: l
  };
}
const v = {
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
      thisData: {
        data: []
      },
      rules: {
        field: [{ required: !0, message: "\u8BF7\u9009\u62E9", trigger: "change" }],
        value: [{ required: !0, message: "\u8BF7\u586B\u5199", trigger: "blur" }]
      }
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
    submitForm(e) {
      let t = !1;
      return this.$refs[e].validate((a) => {
        a ? t = !0 : t = !1;
      }), t;
    },
    addCondition(e) {
      this.thisData.data[e].group.push(this.otherCondition());
    },
    addGroup() {
      this.thisData.data.push({ c0: "and", group: [this.firstCondition()] });
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
      return e.find((d) => d.id === t).name;
    },
    handle0Command(e, t) {
      this.thisData.data[t].c0 = e;
    },
    handle1Command(e, t, a) {
      this.thisData.data[t].group[a].c1value = e;
    },
    handleCommand(e, t, a) {
      this.thisData.data[t].group[a].c2value = e;
    },
    delItem(e, t) {
      const a = [...this.thisData.data];
      a[e].group.length === 1 ? a.splice(e, 1) : a[e].group.splice(t, 1), this.thisData.data = a;
    },
    clearData() {
      this.thisData.data = [];
    },
    setData(e) {
      this.thisData.data = e || [];
    },
    getData() {
      return this.submitForm("thisData") ? (this.thisData.data[0] && (this.thisData.data[0].c0 = null), this.thisData.data) : !1;
    }
  }
};
var C = function() {
  var t = this, a = t._self._c;
  return a("div", { staticClass: "all-group" }, [a("el-form", { ref: "thisData", attrs: { model: t.thisData } }, t._l(t.thisData.data, function(d, i) {
    return a("div", { key: i, staticClass: "con-group" }, [i !== 0 ? a("div", [a("div", { staticClass: "flex-center-center" }, [a("div", { staticClass: "line" }), a("div", { staticClass: "h-center" }, [a("el-dropdown", { staticStyle: { "text-align": "center" }, on: { command: (n) => t.handle0Command(n, i) } }, [a("span", { staticClass: "el-dropdown-link fontSize17 pointer" }, [t._v(" " + t._s(t.value2name(t.condition0, d.c0))), a("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), a("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(n) {
      return a("el-dropdown-item", { key: n.id, attrs: { command: n.id } }, [t._v(t._s(n.name))]);
    }), 1)], 1)], 1), a("div", { staticClass: "line" })])]) : t._e(), t._l(d.group, function(n, o) {
      return a("div", { key: n.id, staticClass: "margin10" }, [a("el-row", { attrs: { type: "flex", align: "middle" } }, [a("el-col", { attrs: { span: 3 } }, [a("el-dropdown", { on: { command: (s) => t.handle1Command(s, i, o) } }, [a("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition1, n.c1value))), a("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), a("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(s) {
        return a("el-dropdown-item", { key: s.id, attrs: { command: s.id, disabled: o === 0 } }, [t._v(t._s(s.name))]);
      }), 1)], 1)], 1), a("el-col", { attrs: { span: 8 } }, [a("el-form-item", { attrs: { prop: `data[${i}].group[${o}].field`, rules: t.rules.field } }, [a("el-select", { attrs: { placeholder: t.$t("fastsql_select") }, model: { value: n.field, callback: function(s) {
        t.$set(n, "field", s);
      }, expression: "item.field" } }, t._l(t.fields, function(s) {
        return a("el-option", { key: s.id, attrs: { label: s.name, value: s.id } });
      }), 1)], 1)], 1), a("el-col", { attrs: { span: 3 } }, [a("el-dropdown", { on: { command: (s) => t.handleCommand(s, i, o) } }, [a("span", { staticClass: "el-dropdown-link pointer" }, [t._v(" " + t._s(t.value2name(t.condition2, n.c2value))), a("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), a("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition2, function(s) {
        return a("el-dropdown-item", { key: s.id, attrs: { command: s.id } }, [t._v(t._s(s.name))]);
      }), 1)], 1)], 1), a("el-col", { attrs: { span: 8 } }, [a("el-form-item", { attrs: { prop: `data[${i}].group[${o}].value`, rules: t.rules.value } }, [a("el-input", { attrs: { placeholder: t.$t("fastsql_input") }, model: { value: n.value, callback: function(s) {
        t.$set(n, "value", s);
      }, expression: "item.value" } })], 1)], 1), a("el-col", { staticStyle: { "text-align": "center" }, attrs: { span: 2 } }, [a("i", { staticClass: "el-icon-circle-close", staticStyle: { cursor: "pointer" }, on: { click: function(s) {
        return t.delItem(i, o);
      } } })])], 1), o === d.group.length - 1 ? a("div", { staticClass: "mt10 colorblue inline-block", on: { click: function(s) {
        return t.addCondition(i);
      } } }, [a("i", { staticClass: "el-icon-circle-plus-outline", staticStyle: { cursor: "pointer" } }), a("a", [t._v(t._s(t.$t("fastsql_addCondition")))])]) : t._e()], 1);
    })], 2);
  }), 0), a("div", { staticStyle: { "text-align": "center" } }, [a("div", { staticClass: "mt10 colorblue inline-block fontSize20", on: { click: function(d) {
    return t.addGroup();
  } } }, [a("i", { staticClass: "el-icon-plus", staticStyle: { cursor: "pointer" } }), a("a", [t._v(t._s(t.$t("fastsql_addGroup")))])])])], 1);
}, w = [], $ = /* @__PURE__ */ m(
  v,
  C,
  w,
  !1,
  null,
  "74b7744d",
  null,
  null
);
const u = $.exports;
u.install = (e) => e.component(u.name, u);
export {
  u as default
};
