# description

fastsql-vue is a vue2 component for fast handle sql relation,finally generating a json data.

![this is a demonstrate image](https://github.com/johnlin0207/npmpackages/blob/main/fastsql/public/demo.png?raw=true "fastsql-vue")

# props

    fields: [{name: String, id: String}, {} ...]
    data: [
      {
        "c0": "and", //outter dropdown selection
        "group": [
          {
            "c1value": "when", // inner dropdown selection1
            "field": "username",
            "c2value": "＝", // inner dropdown selection2
            "value": "asdsadsad"
          }
        ]
      },
      {
        "c0": "and",
        "group": [
          {
            "c1value": "when",
            "field": "nick_name",
            "c2value": "＝",
            "value": "123123213"
          }
        ]
      }
    ]

# usage
### import locally
    // vue component
    
    import fastsql from "fastsql-vue";
    import "fastsql-vue/dist/style.css";
    
### import as a plugin for globally
    // main.js
    
    import fastsql from "fastsql-vue";
    import "fastsql-vue/dist/style.css";
    Vue.use(fastsql);

### get data
    <fastsql :fields="fields" :data="data" ref="childComp"></fastsql>
    
    childComp.getData()

# i18n support
Important: From fastsql-vue@1.2.0 you must add vue-i18n(which version is compatible with vue2.x) and configuration in your project to support i18n.