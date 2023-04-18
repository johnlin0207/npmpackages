function f(a, t, n, r, l, o, d, e) {
  var i = typeof a == "function" ? a.options : a;
  t && (i.render = t, i.staticRenderFns = n, i._compiled = !0), r && (i.functional = !0), o && (i._scopeId = "data-v-" + o);
  var c;
  if (d ? (c = function(s) {
    s = s || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), l && l.call(this, s), s && s._registeredComponents && s._registeredComponents.add(d);
  }, i._ssrRegister = c) : l && (c = e ? function() {
    l.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), c)
    if (i.functional) {
      i._injectStyles = c;
      var h = i.render;
      i.render = function(v, _) {
        return c.call(_), h(v, _);
      };
    } else {
      var p = i.beforeCreate;
      i.beforeCreate = p ? [].concat(p, c) : [c];
    }
  return {
    exports: a,
    options: i
  };
}
const m = {
  name: "FastSql",
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
      condition0: [
        { name: "\u4E14", id: "and" },
        { name: "\u6216", id: "or" }
      ],
      condition1: [
        { name: "\u5F53", id: "when" },
        { name: "\u4E14", id: "and" },
        { name: "\u6216", id: "or" }
      ],
      condition2: [
        { name: "\u7B49\u4E8E", id: "\uFF1D" },
        { name: "\u4E0D\u7B49\u4E8E", id: "\u2260" },
        { name: "\u5927\u4E8E", id: "\uFF1E" },
        { name: "\u5C0F\u4E8E", id: "\uFF1C" }
      ],
      thisData: this.data
    };
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
      console.log("===================================="), console.log(a, t), console.log("===================================="), n[a].group.length === 1 ? n.splice(a, 1) : n[a].group.splice(t, 1), this.thisData = n;
    },
    getData() {
      return this.thisData;
    }
  }
};
var C = function() {
  var t = this, n = t._self._c;
  return n("div", { staticClass: "all-group" }, [t._l(t.thisData, function(r, l) {
    return n("div", { key: l, staticClass: "con-group" }, [t._l(r.group, function(o, d) {
      return n("div", { key: o.id, staticClass: "margin10" }, [n("el-row", { attrs: { type: "flex", align: "middle" } }, [n("el-col", { attrs: { span: 3 } }, [n("el-dropdown", { on: { command: (e) => t.handle1Command(e, l, d) } }, [n("span", { staticClass: "el-dropdown-link" }, [t._v(" " + t._s(t.value2name(t.condition1, o.c1value))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(e) {
        return n("el-dropdown-item", { key: e.id, attrs: { command: e.id, disabled: d === 0 } }, [t._v(t._s(e.name))]);
      }), 1)], 1)], 1), n("el-col", { attrs: { span: 8 } }, [n("div", [n("el-select", { attrs: { slot: "prepend", placeholder: "\u8BF7\u9009\u62E9" }, slot: "prepend", model: { value: o.field, callback: function(e) {
        t.$set(o, "field", e);
      }, expression: "item.field" } }, t._l(t.fields, function(e) {
        return n("el-option", { key: e.id, attrs: { label: e.name, value: e.id } });
      }), 1)], 1)]), n("el-col", { attrs: { span: 3 } }, [n("el-dropdown", { on: { command: (e) => t.handleCommand(e, l, d) } }, [n("span", { staticClass: "el-dropdown-link" }, [t._v(" " + t._s(t.value2name(t.condition2, o.c2value))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition2, function(e) {
        return n("el-dropdown-item", { key: e.id, attrs: { command: e.id } }, [t._v(t._s(e.name))]);
      }), 1)], 1)], 1), n("el-col", { attrs: { span: 8 } }, [n("el-input", { attrs: { placeholder: "\u8BF7\u8F93\u5165" }, model: { value: o.value, callback: function(e) {
        t.$set(o, "value", e);
      }, expression: "item.value" } })], 1), n("el-col", { staticStyle: { "text-align": "center" }, attrs: { span: 2 } }, [n("i", { staticClass: "el-icon-circle-close", staticStyle: { cursor: "pointer" }, on: { click: function(e) {
        return t.delItem(l, d);
      } } })])], 1), d === r.group.length - 1 ? n("div", { staticClass: "mt10 colorblue inline-block", on: { click: function(e) {
        return t.addCondition(l);
      } } }, [n("i", { staticClass: "el-icon-circle-plus-outline", staticStyle: { cursor: "pointer" } }), n("a", [t._v("\u6DFB\u52A0\u6761\u4EF6")])]) : t._e()], 1);
    }), l < t.thisData.length - 1 ? n("div", [n("div", { staticClass: "flex-center-center" }, [n("div", { staticClass: "line" }), n("div", { staticClass: "h-center" }, [n("el-dropdown", { staticStyle: { "text-align": "center" }, on: { command: (o) => t.handle0Command(o, l) } }, [n("span", { staticClass: "el-dropdown-link fontSize17" }, [t._v(" " + t._s(t.value2name(t.condition0, r.c0))), n("i", { staticClass: "el-icon-arrow-down el-icon--right" })]), n("el-dropdown-menu", { attrs: { slot: "dropdown" }, slot: "dropdown" }, t._l(t.condition0, function(o) {
      return n("el-dropdown-item", { key: o.id, attrs: { command: o.id } }, [t._v(t._s(o.name))]);
    }), 1)], 1)], 1), n("div", { staticClass: "line" })])]) : t._e()], 2);
  }), n("div", { staticStyle: { "text-align": "center" } }, [n("div", { staticClass: "mt10 colorblue inline-block fontSize20", on: { click: function(r) {
    return t.addGroup();
  } } }, [n("i", { staticClass: "el-icon-plus", staticStyle: { cursor: "pointer" } }), n("a", [t._v("\u6DFB\u52A0\u5206\u7EC4")])])])], 2);
}, w = [], y = /* @__PURE__ */ f(
  m,
  C,
  w,
  !1,
  null,
  "032860e1",
  null,
  null
);
const u = y.exports;
u.install = (a) => a.component(u.name, u);
export {
  u as default
};
