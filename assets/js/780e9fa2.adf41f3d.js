"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[3957],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(n),f=a,m=g["".concat(p,".").concat(f)]||g[f]||l[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={name:"\u5206\u9875",sort:2},p="\u5206\u9875",u={unversionedId:"utils/page",id:"utils/page",title:"\u5206\u9875",description:"\u63d0\u4f9b\u4e00\u4e2a\u4f8b\u5b50",source:"@site/docs/utils/page.md",sourceDirName:"utils",slug:"/utils/page",permalink:"/bee-docs/docs/utils/page",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/utils/page.md",tags:[],version:"current",frontMatter:{name:"\u5206\u9875",sort:2},sidebar:"tutorialSidebar",previous:{title:"\u9a8c\u8bc1\u7801",permalink:"/bee-docs/docs/utils/captcha"}},s={},l=[],g={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5206\u9875"},"\u5206\u9875"),(0,o.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e2a\u4f8b\u5b50"),(0,o.kt)("p",null,"\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Page struct {\n    PageNo     int\n    PageSize   int\n    TotalPage  int\n    TotalCount int\n    FirstPage  bool\n    LastPage   bool\n    List       interface{}\n}\nfunc PageUtil(count int, pageNo int, pageSize int, list interface{}) Page {\n    tp := count / pageSize\n    if count % pageSize > 0 {\n        tp = count / pageSize + 1\n    }\n    return Page{PageNo: pageNo, PageSize: pageSize, TotalPage: tp, TotalCount: count, FirstPage: pageNo == 1, LastPage: pageNo == tp, List: list}\n}\n")),(0,o.kt)("p",null,"\u9875\u9762\u662f\u4f7f\u7528 js \u63d2\u4ef6\u8fdb\u884c\u5206\u9875 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lyonlai/bootstrap-paginator"},"https://github.com/lyonlai/bootstrap-paginator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<script type="text/javascript" src="/static/js/bootstrap-paginator.min.js"><\/script>\n<script type="text/javascript">\n  $(function () {\n    $("#page").bootstrapPaginator({\n      currentPage: \'{{.Page.PageNo}}\',\n      totalPages: \'{{.Page.TotalPage}}\',\n      bootstrapMajorVersion: 3,\n      size: "small",\n      onPageClicked: function(e,originalEvent,type,page){\n        window.location.href = "/?p=" + page\n      }\n    });\n  });\n<\/script>\n')))}f.isMDXComponent=!0}}]);