# description

fastsql-vue is a vue component for fast handle sql relation,finally generating a json data.

![这是图片](https://github.com/johnlin0207/npmpackages/blob/main/fastsql/public/demo.png?raw=true "fastsql-vue")

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
    import fastsql from "fastsql-vue";
    import "fastsql-vue/dist/style.css";
    
    <fastsql :fields="fields" :data="data" ref="childComp"></fastsql>

    childComp.value.getData()