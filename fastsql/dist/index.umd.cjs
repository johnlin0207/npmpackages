(function(p,u){typeof exports=="object"&&typeof module<"u"?module.exports=u():typeof define=="function"&&define.amd?define(u):(p=typeof globalThis<"u"?globalThis:p||self,p.index=u())})(this,function(){"use strict";const p="";function u(a,t,e,r,s,i,d,n){var o=typeof a=="function"?a.options:a;t&&(o.render=t,o.staticRenderFns=e,o._compiled=!0),r&&(o.functional=!0),i&&(o._scopeId="data-v-"+i);var c;if(d?(c=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),s&&s.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(d)},o._ssrRegister=c):s&&(c=n?function(){s.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(o.functional){o._injectStyles=c;var y=o.render;o.render=function(k,h){return c.call(h),y(k,h)}}else{var _=o.beforeCreate;o.beforeCreate=_?[].concat(_,c):[c]}return{exports:a,options:o}}const v={name:"FastSql",props:{fields:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]}},data(){return{condition0:[{name:"\u4E14",id:"and"},{name:"\u6216",id:"or"}],condition1:[{name:"\u5F53",id:"when"},{name:"\u4E14",id:"and"},{name:"\u6216",id:"or"}],condition2:[{name:"\u7B49\u4E8E",id:"\uFF1D"},{name:"\u4E0D\u7B49\u4E8E",id:"\u2260"},{name:"\u5927\u4E8E",id:"\uFF1E"},{name:"\u5C0F\u4E8E",id:"\uFF1C"}],thisData:this.data}},methods:{addCondition(a){this.thisData[a].group.push(this.otherCondition())},addGroup(){this.thisData.push({c0:"and",group:[this.firstCondition()]})},firstCondition(){return{c1value:"when",field:"",c2value:"\uFF1D",value:""}},otherCondition(){return{c1value:"and",field:"",c2value:"\uFF1D",value:""}},value2name(a,t){return a.find(r=>r.id===t).name},handle0Command(a,t){this.thisData[t].c0=a},handle1Command(a,t,e){this.thisData[t].group[e].c1value=a},handleCommand(a,t,e){this.thisData[t].group[e].c2value=a},delItem(a,t){const e=[...this.thisData];e[a].group.length===1?e.splice(a,1):e[a].group.splice(t,1),this.thisData=e},getData(){return this.thisData}}};var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all-group"},[t._l(t.thisData,function(r,s){return e("div",{key:s,staticClass:"con-group"},[t._l(r.group,function(i,d){return e("div",{key:i.id,staticClass:"margin10"},[e("el-row",{attrs:{type:"flex",align:"middle"}},[e("el-col",{attrs:{span:3}},[e("el-dropdown",{on:{command:n=>t.handle1Command(n,s,d)}},[e("span",{staticClass:"el-dropdown-link pointer"},[t._v(" "+t._s(t.value2name(t.condition1,i.c1value))),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.condition0,function(n){return e("el-dropdown-item",{key:n.id,attrs:{command:n.id,disabled:d===0}},[t._v(t._s(n.name))])}),1)],1)],1),e("el-col",{attrs:{span:8}},[e("div",[e("el-select",{attrs:{slot:"prepend",placeholder:"\u8BF7\u9009\u62E9"},slot:"prepend",model:{value:i.field,callback:function(n){t.$set(i,"field",n)},expression:"item.field"}},t._l(t.fields,function(n){return e("el-option",{key:n.id,attrs:{label:n.name,value:n.id}})}),1)],1)]),e("el-col",{attrs:{span:3}},[e("el-dropdown",{on:{command:n=>t.handleCommand(n,s,d)}},[e("span",{staticClass:"el-dropdown-link pointer"},[t._v(" "+t._s(t.value2name(t.condition2,i.c2value))),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.condition2,function(n){return e("el-dropdown-item",{key:n.id,attrs:{command:n.id}},[t._v(t._s(n.name))])}),1)],1)],1),e("el-col",{attrs:{span:8}},[e("el-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165"},model:{value:i.value,callback:function(n){t.$set(i,"value",n)},expression:"item.value"}})],1),e("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e("i",{staticClass:"el-icon-circle-close",staticStyle:{cursor:"pointer"},on:{click:function(n){return t.delItem(s,d)}}})])],1),d===r.group.length-1?e("div",{staticClass:"mt10 colorblue inline-block",on:{click:function(n){return t.addCondition(s)}}},[e("i",{staticClass:"el-icon-circle-plus-outline",staticStyle:{cursor:"pointer"}}),e("a",[t._v("\u6DFB\u52A0\u6761\u4EF6")])]):t._e()],1)}),s<t.thisData.length-1?e("div",[e("div",{staticClass:"flex-center-center"},[e("div",{staticClass:"line"}),e("div",{staticClass:"h-center"},[e("el-dropdown",{staticStyle:{"text-align":"center"},on:{command:i=>t.handle0Command(i,s)}},[e("span",{staticClass:"el-dropdown-link fontSize17 pointer"},[t._v(" "+t._s(t.value2name(t.condition0,r.c0))),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.condition0,function(i){return e("el-dropdown-item",{key:i.id,attrs:{command:i.id}},[t._v(t._s(i.name))])}),1)],1)],1),e("div",{staticClass:"line"})])]):t._e()],2)}),e("div",{staticStyle:{"text-align":"center"}},[e("div",{staticClass:"mt10 colorblue inline-block fontSize20",on:{click:function(r){return t.addGroup()}}},[e("i",{staticClass:"el-icon-plus",staticStyle:{cursor:"pointer"}}),e("a",[t._v("\u6DFB\u52A0\u5206\u7EC4")])])])],2)},C=[],w=u(v,m,C,!1,null,"08bb2780",null,null);const f=w.exports;return f.install=a=>a.component(f.name,f),f});
