"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[7072],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(n),s=o,d=f["".concat(l,".").concat(s)]||f[s]||m[s]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={root:!0,name:"FAQ",sort:99},l="FAQ",c={unversionedId:"faq/FAQ",id:"faq/FAQ",title:"FAQ",description:"1. \u627e\u4e0d\u5230\u6a21\u677f\u6587\u4ef6\uff0c\u627e\u4e0d\u5230\u914d\u7f6e\u6587\u4ef6\uff0cnil \u6307\u9488\u9519\u8bef",source:"@site/docs/faq/FAQ.md",sourceDirName:"faq",slug:"/faq/",permalink:"/bee-docs/docs/faq/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/FAQ.md",tags:[],version:"current",frontMatter:{root:!0,name:"FAQ",sort:99},sidebar:"tutorialSidebar",previous:{title:"Todo \u5217\u8868",permalink:"/bee-docs/docs/examples/todo"},next:{title:"beego \u7684\u5b89\u88c5",permalink:"/bee-docs/docs/install/"}},u={},m=[],f={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u627e\u4e0d\u5230\u6a21\u677f\u6587\u4ef6\uff0c\u627e\u4e0d\u5230\u914d\u7f6e\u6587\u4ef6\uff0cnil \u6307\u9488\u9519\u8bef"),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u5927\u591a\u6570\u60c5\u51b5\u662f\u7531\u4e8e\u4f60\u91c7\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"go run main.go")," \u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u8fd0\u884c\u4f60\u7684\u5e94\u7528\uff0cgo run \u662f\u628a\u6587\u4ef6\u7f16\u8bd1\u4e4b\u540e\u653e\u5728\u4e86 tmp \u4e0b\u53bb\u8fd0\u884c\uff0c\u800c beego \u7684\u5e94\u7528\u4f1a\u8bfb\u53d6\u5e94\u7528\u7684\u5f53\u524d\u8fd0\u884c\u76ee\u5f55\u5bf9\u5e94\u7684 conf,view \u53bb\u67e5\u627e\u76f8\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u548c\u6a21\u677f\uff0c\u56e0\u6b64\u8981\u6b63\u786e\u8fd0\u884c\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"go build")," \u7136\u540e\u6267\u884c\u5e94\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"./app")," \u8fd9\u79cd\u65b9\u5f0f\u6765\u8fd0\u884c\u3002\u6216\u8005\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"bee run app")," \u6765\u542f\u52a8\u4f60\u7684\u5e94\u7528\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"beego \u53ef\u4ee5\u5e94\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u5417\uff1f"),(0,a.kt)("p",{parentName:"li"},"\u76ee\u524d beego \u5df2\u7ecf\u88ab\u5e7f\u5927\u7528\u6237\u5e94\u7528\u4e8e\u5404\u5927\u751f\u4ea7\u73af\u5883\uff0c\u4f8b\u5982\u76db\u5927\u7684 CDN \u7cfb\u7edf\uff0c360 \u7684\u641c\u7d22API\u3001Bmob \u79fb\u52a8\u4e91 API\uff0cweico \u7684\u540e\u7aef API \u5e94\u7528\uff0c\u8fd8\u6709\u5f88\u591a\u5176\u4ed6 Web \u5e94\u7528\u548c\u670d\u52a1\u5668\u5e94\u7528\uff0c\u90fd\u662f\u4e00\u4e9b\u9ad8\u5e76\u53d1\u9ad8\u6027\u80fd\u7684\u5e94\u7528\uff0c\u6240\u4ee5\u8bf7\u653e\u5fc3\u5927\u80c6\u7684\u4f7f\u7528\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"beego \u5c06\u6765\u5347\u7ea7\u4f1a\u5f71\u54cd\u73b0\u6709\u7684 API \u5417\uff1f"),(0,a.kt)("p",{parentName:"li"},"beego \u4ece 0.1 \u7248\u672c\u5230\u73b0\u5728\u57fa\u672c\u4fdd\u6301\u4e86\u7a33\u5b9a\u7684 API\uff0c\u5f88\u591a\u5e94\u7528\u90fd\u662f\u53ef\u4ee5\u65e0\u7f1d\u7684\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684 beego\u3002\u5c06\u6765\u5347\u7ea7\u91cd\u6784\u90fd\u4f1a\u5c3d\u91cf\u4fdd\u6301 beego \u7684 API \u7684\u7a33\u5b9a\u6027\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"beego \u4f1a\u6301\u7eed\u5f00\u53d1\u5417\uff1f"),(0,a.kt)("p",{parentName:"li"},"\u5f88\u591a\u4eba\u4f7f\u7528\u5f00\u6e90\u8f6f\u4ef6\u90fd\u6709\u4e00\u4e2a\u62c5\u5fc3\u5c31\u662f\u6015\u9879\u76ee\u4e0d\u5728\u6301\u7eed\uff0c\u76ee\u524d\u6211\u4eec beego \u5f00\u53d1\u7ec4\u6709\u56db\u4e2a\u4eba\u4e00\u76f4\u5728\u8d21\u732e\u4ee3\u7801\uff0c\u6211\u60f3\u6211\u4eec\u80fd\u591f\u575a\u6301\u628a\u8fd9\u4e2a\u9879\u76ee\u505a\u597d\uff0c\u800c\u4e14\u4f1a\u6301\u7eed\u4e0d\u65ad\u7684\u8fdb\u884c\u6539\u8fdb\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u4e3a\u4ec0\u4e48\u6211\u7528Beego\u6709\u65f6\u5019\u4f1a\u62a5\u9519\u627e\u4e0d\u5230\u5305\uff1f"can not find package"?'),(0,a.kt)("p",{parentName:"li"},"\u4e00\u822c\u800c\u8a00\uff0c\u8fd9\u662f\u56e0\u4e3a\u4f60\u7684\u73af\u5883\u6ca1\u6709\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"go mod")," \u7279\u6027\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"golang"),"1.11\u4e4b\u540e\uff0c\u5f15\u5165\u4e86\u65b0\u7684\u4f9d\u8d56\u7ba1\u7406\u65b9\u5f0f\uff08\u533a\u522b\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"GOPATH"),"\uff09\uff0c\u76ee\u524dBeego\u5df2\u7ecf\u5207\u6362\u5230\u4e86\u8fd9\u79cd\u65b9\u5f0f\u3002\n\u5982\u679c\u4f60\u770b\u5230\u7c7b\u4f3c\u7684\u9519\u8bef\uff0c\u8bf7\u786e\u8ba4\u81ea\u5df1\u7684\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"GO111MODULE=on"),"\u3002\u800c\u540e\u91cd\u65b0\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"go get"),"\u547d\u4ee4")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u4e3a\u4ec0\u4e48\u6211\u62c9Beego\u7684\u5305\u7684\u65f6\u5019\uff0c\u4e00\u76f4\u90fd\u662f "i/o timeout"\uff1f'),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e3b\u8981\u662f\u56e0\u4e3a\u4e2d\u56fd\u7684\u9632\u706b\u5899\u3002\u4f60\u53ef\u4ee5\u8003\u8651\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"GOPROXY"),"\u73af\u5883\u53d8\u91cf\uff0c\u4f7f\u7528\u4ee3\u7406\u6765\u62c9\u53d6\u4f9d\u8d56\u3002\u6211\u4eec\u76ee\u524d\u63a8\u8350\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"GOPROXY=https://goproxy.cn"),"."))))}s.isMDXComponent=!0}}]);