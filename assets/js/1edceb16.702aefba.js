"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[4317],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=i.createContext({}),p=function(e){var n=i.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),s=r,g=d["".concat(m,".").concat(s)]||d[s]||c[s]||a;return t?i.createElement(g,l(l({ref:n},u),{},{components:t})):i.createElement(g,l({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5932:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],o={name:"\u8868\u5355\u6570\u636e\u9a8c\u8bc1",sort:9},m=void 0,p={unversionedId:"mvc/controller/validation",id:"mvc/controller/validation",title:"validation",description:"\u8868\u5355\u9a8c\u8bc1\u662f\u7528\u4e8e\u6570\u636e\u9a8c\u8bc1\u548c\u9519\u8bef\u6536\u96c6\u7684\u6a21\u5757\u3002",source:"@site/docs/mvc/controller/validation.md",sourceDirName:"mvc/controller",slug:"/mvc/controller/validation",permalink:"/bee-docs/docs/mvc/controller/validation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvc/controller/validation.md",tags:[],version:"current",frontMatter:{name:"\u8868\u5355\u6570\u636e\u9a8c\u8bc1",sort:9},sidebar:"tutorialSidebar",previous:{title:"urlbuilding",permalink:"/bee-docs/docs/mvc/controller/urlbuilding"},next:{title:"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",permalink:"/bee-docs/docs/mvc/controller/xsrf"}},u={},c=[{value:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1",id:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1",level:2},{value:"API \u6587\u6863",id:"api-\u6587\u6863",level:2}],d={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8868\u5355\u9a8c\u8bc1\u662f\u7528\u4e8e\u6570\u636e\u9a8c\u8bc1\u548c\u9519\u8bef\u6536\u96c6\u7684\u6a21\u5757\u3002"),(0,a.kt)("h1",{id:"\u5b89\u88c5\u53ca\u6d4b\u8bd5"},"\u5b89\u88c5\u53ca\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get github.com/beego/beego/v2/core/validation\n")),(0,a.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go test github.com/beego/beego/v2/core/validation\n")),(0,a.kt)("h1",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/beego/beego/v2/core/validation"\n    "log"\n)\n\ntype User struct {\n    Name string\n    Age int\n}\n\nfunc main() {\n    u := User{"man", 40}\n    valid := validation.Validation{}\n    valid.Required(u.Name, "name")\n    valid.MaxSize(u.Name, 15, "nameMax")\n    valid.Range(u.Age, 0, 18, "age")\n\n    if valid.HasErrors() {\n        // \u5982\u679c\u6709\u9519\u8bef\u4fe1\u606f\uff0c\u8bc1\u660e\u9a8c\u8bc1\u6ca1\u901a\u8fc7\n        // \u6253\u5370\u9519\u8bef\u4fe1\u606f\n        for _, err := range valid.Errors {\n            log.Println(err.Key, err.Message)\n        }\n    }\n    // or use like this\n    if v := valid.Max(u.Age, 140, "age"); !v.Ok {\n        log.Println(v.Error.Key, v.Error.Message)\n    }\n    // \u5b9a\u5236\u9519\u8bef\u4fe1\u606f\n    minAge := 18\n    valid.Min(u.Age, minAge, "age").Message("\u5c11\u513f\u4e0d\u5b9c\uff01")\n    // \u9519\u8bef\u4fe1\u606f\u683c\u5f0f\u5316\n    valid.Min(u.Age, minAge, "age").Message("%d\u4e0d\u7981", minAge)\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7 StructTag \u4f7f\u7528\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    "strings"\n\n    "github.com/beego/beego/v2/core/validation"\n)\n\n// \u9a8c\u8bc1\u51fd\u6570\u5199\u5728 "valid" tag \u7684\u6807\u7b7e\u91cc\n// \u5404\u4e2a\u51fd\u6570\u4e4b\u95f4\u7528\u5206\u53f7 ";" \u5206\u9694\uff0c\u5206\u53f7\u540e\u9762\u53ef\u4ee5\u6709\u7a7a\u683c\n// \u53c2\u6570\u7528\u62ec\u53f7 "()" \u62ec\u8d77\u6765\uff0c\u591a\u4e2a\u53c2\u6570\u4e4b\u95f4\u7528\u9017\u53f7 "," \u5206\u5f00\uff0c\u9017\u53f7\u540e\u9762\u53ef\u4ee5\u6709\u7a7a\u683c\n// \u6b63\u5219\u51fd\u6570(Match)\u7684\u5339\u914d\u6a21\u5f0f\u7528\u4e24\u659c\u6760 "/" \u62ec\u8d77\u6765\n// \u5404\u4e2a\u51fd\u6570\u7684\u7ed3\u679c\u7684 key \u503c\u4e3a\u5b57\u6bb5\u540d.\u9a8c\u8bc1\u51fd\u6570\u540d\ntype user struct {\n    Id     int\n    Name   string `valid:"Required;Match(/^Bee.*/)"` // Name \u4e0d\u80fd\u4e3a\u7a7a\u5e76\u4e14\u4ee5 Bee \u5f00\u5934\n    Age    int    `valid:"Range(1, 140)"` // 1 <= Age <= 140\uff0c\u8d85\u51fa\u6b64\u8303\u56f4\u5373\u4e3a\u4e0d\u5408\u6cd5\n    Email  string `valid:"Email; MaxSize(100)"` // Email \u5b57\u6bb5\u9700\u8981\u7b26\u5408\u90ae\u7bb1\u683c\u5f0f\uff0c\u5e76\u4e14\u6700\u5927\u957f\u5ea6\u4e0d\u80fd\u5927\u4e8e 100 \u4e2a\u5b57\u7b26\n    Mobile string `valid:"Mobile"` // Mobile \u5fc5\u987b\u4e3a\u6b63\u786e\u7684\u624b\u673a\u53f7\n    IP     string `valid:"IP"` // IP \u5fc5\u987b\u4e3a\u4e00\u4e2a\u6b63\u786e\u7684 IPv4 \u5730\u5740\n}\n\n// \u5982\u679c\u4f60\u7684 struct \u5b9e\u73b0\u4e86\u63a5\u53e3 validation.ValidFormer\n// \u5f53 StructTag \u4e2d\u7684\u6d4b\u8bd5\u90fd\u6210\u529f\u65f6\uff0c\u5c06\u4f1a\u6267\u884c Valid \u51fd\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u9a8c\u8bc1\nfunc (u *user) Valid(v *validation.Validation) {\n    if strings.Index(u.Name, "admin") != -1 {\n        // \u901a\u8fc7 SetError \u8bbe\u7f6e Name \u7684\u9519\u8bef\u4fe1\u606f\uff0cHasErrors \u5c06\u4f1a\u8fd4\u56de true\n        v.SetError("Name", "\u540d\u79f0\u91cc\u4e0d\u80fd\u542b\u6709 admin")\n    }\n}\n\nfunc main() {\n    valid := validation.Validation{}\n    u := user{Name: "Beego", Age: 2, Email: "dev@web.me"}\n    b, err := valid.Valid(&u)\n    if err != nil {\n        // handle error\n    }\n    if !b {\n        // validation does not pass\n        // blabla...\n        for _, err := range valid.Errors {\n            log.Println(err.Key, err.Message)\n        }\n    }\n}\n')),(0,a.kt)("p",null,"StructTag \u53ef\u7528\u7684\u9a8c\u8bc1\u51fd\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Required")," \u4e0d\u4e3a\u7a7a\uff0c\u5373\u5404\u4e2a\u7c7b\u578b\u8981\u6c42\u4e0d\u4e3a\u5176\u96f6\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Min(min int)")," \u6700\u5c0f\u503c\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Max(max int)")," \u6700\u5927\u503c\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Range(min, max int)")," \u6570\u503c\u7684\u8303\u56f4\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"\uff0c\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MinSize(min int)")," \u6700\u5c0f\u957f\u5ea6\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string slice"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MaxSize(max int)")," \u6700\u5927\u957f\u5ea6\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string slice"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Length(length int)")," \u6307\u5b9a\u957f\u5ea6\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string slice"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alpha")," alpha\u5b57\u7b26\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Numeric")," \u6570\u5b57\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlphaNumeric")," alpha \u5b57\u7b26\u6216\u6570\u5b57\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Match(pattern string)")," \u6b63\u5219\u5339\u914d\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),'\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u88ab\u8f6c\u6210\u5b57\u7b26\u4e32\u518d\u5339\u914d(fmt.Sprintf("%v", obj).Match)'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlphaDash")," alpha \u5b57\u7b26\u6216\u6570\u5b57\u6216\u6a2a\u6760 ",(0,a.kt)("inlineCode",{parentName:"li"},"-_"),"\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Email")," \u90ae\u7bb1\u683c\u5f0f\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IP")," IP \u683c\u5f0f\uff0c\u76ee\u524d\u53ea\u652f\u6301 IPv4 \u683c\u5f0f\u9a8c\u8bc1\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Base64")," base64 \u7f16\u7801\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Mobile")," \u624b\u673a\u53f7\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tel")," \u56fa\u5b9a\u7535\u8bdd\u53f7\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Phone")," \u624b\u673a\u53f7\u6216\u56fa\u5b9a\u7535\u8bdd\u53f7\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZipCode")," \u90ae\u653f\u7f16\u7801\uff0c\u6709\u6548\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5176\u4ed6\u7c7b\u578b\u90fd\u5c06\u4e0d\u80fd\u901a\u8fc7\u9a8c\u8bc1")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1"},"\u81ea\u5b9a\u4e49\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u6211\u4eec\u5141\u8bb8\u81ea\u5df1\u6ce8\u518c\u9a8c\u8bc1\u903b\u8f91\u3002\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"AddCustomFunc(name string, f CustomFunc) error\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u65b9\u6cd5\u5e76\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u5728\u6211\u4eec\u7684\u8bbe\u8ba1\u7406\u5ff5\u4e2d\uff0c\u6ce8\u518c\u8fd9\u79cd\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u5e94\u8be5\u5728\u7cfb\u7edf\u521d\u59cb\u5316\u9636\u6bb5\u5b8c\u6210\u3002\u5728\u8be5\u9636\u6bb5\uff0c\u5e94\u5f53\u4e0d\u5b58\u5728\u7ade\u4e89\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"api-\u6587\u6863"},"API \u6587\u6863"),(0,a.kt)("p",null,"\u8bf7\u79fb\u6b65 ",(0,a.kt)("a",{parentName:"p",href:"http://gowalker.org/github.com/beego/beego/validation"},"Go Walker"),"\u3002"))}s.isMDXComponent=!0}}]);