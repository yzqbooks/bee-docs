"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[8678],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),m=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=m(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=m(t),d=o,f=p["".concat(u,".").concat(d)]||p[d]||s[d]||a;return t?r.createElement(f,l(l({ref:n},i),{},{components:t})):r.createElement(f,l({ref:n},i))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},285:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={name:"\u547d\u4ee4\u6a21\u5f0f",sort:9},u="\u547d\u4ee4\u6a21\u5f0f",m={unversionedId:"mvc/model/cmd",id:"mvc/model/cmd",title:"\u547d\u4ee4\u6a21\u5f0f",description:"\u6ce8\u518c\u6a21\u578b\u4e0e\u6570\u636e\u5e93\u4ee5\u540e\uff0c\u8c03\u7528 RunCommand \u6267\u884c orm \u547d\u4ee4\u3002",source:"@site/docs/mvc/model/cmd.md",sourceDirName:"mvc/model",slug:"/mvc/model/cmd",permalink:"/bee-docs/docs/mvc/model/cmd",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvc/model/cmd.md",tags:[],version:"current",frontMatter:{name:"\u547d\u4ee4\u6a21\u5f0f",sort:9},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/bee-docs/docs/mvc/model/"},next:{title:"Custom Fields",permalink:"/bee-docs/docs/mvc/model/custom_fields"}},i={},s=[{value:"\u81ea\u52a8\u5efa\u8868",id:"\u81ea\u52a8\u5efa\u8868",level:2},{value:"\u6253\u5370\u5efa\u8868SQL",id:"\u6253\u5370\u5efa\u8868sql",level:2}],p={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u547d\u4ee4\u6a21\u5f0f"},"\u547d\u4ee4\u6a21\u5f0f"),(0,a.kt)("p",null,"\u6ce8\u518c\u6a21\u578b\u4e0e\u6570\u636e\u5e93\u4ee5\u540e\uff0c\u8c03\u7528 RunCommand \u6267\u884c orm \u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    // orm.RegisterModel...\n    // orm.RegisterDataBase...\n    // ...\n    orm.RunCommand()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build main.go\n./main orm\n# \u76f4\u63a5\u6267\u884c\u53ef\u4ee5\u663e\u793a\u5e2e\u52a9\n# \u5982\u679c\u4f60\u7684\u7a0b\u5e8f\u53ef\u4ee5\u652f\u6301\u7684\u8bdd\uff0c\u76f4\u63a5\u8fd0\u884c go run main.go orm \u4e5f\u662f\u4e00\u6837\u7684\u6548\u679c\n")),(0,a.kt)("h2",{id:"\u81ea\u52a8\u5efa\u8868"},"\u81ea\u52a8\u5efa\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'./main orm syncdb -h\nUsage of orm command: syncdb:\n  -db="default": DataBase alias name\n  -force=false: drop tables before create\n  -v=false: verbose info\n')),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-force=1")," \u53ef\u4ee5 drop table \u540e\u518d\u5efa\u8868"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," \u53ef\u4ee5\u67e5\u770b\u6267\u884c\u7684 sql \u8bed\u53e5"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5728\u7a0b\u5e8f\u4e2d\u76f4\u63a5\u8c03\u7528\u81ea\u52a8\u5efa\u8868\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u6570\u636e\u5e93\u522b\u540d\nname := "default"\n\n// drop table \u540e\u518d\u5efa\u8868\nforce := true\n\n// \u6253\u5370\u6267\u884c\u8fc7\u7a0b\nverbose := true\n\n// \u9047\u5230\u9519\u8bef\u7acb\u5373\u8fd4\u56de\nerr := orm.RunSyncdb(name, force, verbose)\nif err != nil {\n    fmt.Println(err)\n}\n')),(0,a.kt)("p",null,"\u81ea\u52a8\u5efa\u8868\u529f\u80fd\u5728\u975e force \u6a21\u5f0f\u4e0b\uff0c\u662f\u4f1a\u81ea\u52a8\u521b\u5efa\u65b0\u589e\u52a0\u7684\u5b57\u6bb5\u7684\u3002\u4e5f\u4f1a\u521b\u5efa\u65b0\u589e\u52a0\u7684\u7d22\u5f15\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6539\u52a8\u8fc7\u7684\u65e7\u5b57\u6bb5\uff0c\u65e7\u7d22\u5f15\uff0c\u9700\u8981\u7528\u6237\u81ea\u884c\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u6536\u5230\u6709\u4e00\u4e9b issue\uff0c\u63d0\u53ca\u5e0c\u671b\u6211\u4eec\u80fd\u591f\u652f\u6301\u5220\u9664\u5b57\u6bb5\uff0c\u6216\u8005\u4fee\u6539\u5b57\u6bb5\u7684\u5b9a\u4e49\u3002\u76ee\u524d\u6765\u8bf4\uff0c\u6211\u4eec\u5e76\u4e0d\u8003\u8651\u652f\u6301\u8fd9\u4e00\u7c7b\u7684\u529f\u80fd\u3002\n\u8fd9\u4e3b\u8981\u662f\u4ece\u98ce\u9669\u89d2\u5ea6\u8003\u8651\u3002\u548c\u589e\u52a0\u5b57\u6bb5\u6bd4\u8d77\u6765\uff0c\u5220\u9664\u8fd9\u79cd\u64cd\u4f5c\u8981\u5371\u9669\u5f97\u591a\uff0c\u5e76\u4e14\u96be\u4ee5\u6062\u590d\u3002\u6240\u4ee5\u6211\u4eec\u5e76\u4e0d\u662f\u5f88\u613f\u610f\u66b4\u9732\u8fd9\u79cd\u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"\u6253\u5370\u5efa\u8868sql"},"\u6253\u5370\u5efa\u8868SQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'./main orm sqlall -h\nUsage of orm command: syncdb:\n  -db="default": DataBase alias name\n')),(0,a.kt)("p",null,"\u9ed8\u8ba4\u4f7f\u7528\u522b\u540d\u4e3a default \u7684\u6570\u636e\u5e93\u3002"))}d.isMDXComponent=!0}}]);