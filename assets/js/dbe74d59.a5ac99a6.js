"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[9582],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={name:"\u72ec\u7acb\u90e8\u7f72",sort:1},c="\u72ec\u7acb\u90e8\u7f72",u={unversionedId:"deploy/beego",id:"deploy/beego",title:"\u72ec\u7acb\u90e8\u7f72",description:"\u72ec\u7acb\u90e8\u7f72\u5373\u4e3a\u5728\u540e\u7aef\u8fd0\u884c\u7a0b\u5e8f\uff0c\u8ba9\u7a0b\u5e8f\u8dd1\u5728\u540e\u53f0\u3002",source:"@site/docs/deploy/beego.md",sourceDirName:"deploy",slug:"/deploy/beego",permalink:"/bee-docs/docs/deploy/beego",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy/beego.md",tags:[],version:"current",frontMatter:{name:"\u72ec\u7acb\u90e8\u7f72",sort:1},sidebar:"tutorialSidebar",previous:{title:"Apache \u914d\u7f6e",permalink:"/bee-docs/docs/deploy/apache"},next:{title:"nginx \u90e8\u7f72",permalink:"/bee-docs/docs/deploy/nginx"}},p={},s=[{value:"linux",id:"linux",level:2},{value:"Windows",id:"windows",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u72ec\u7acb\u90e8\u7f72"},"\u72ec\u7acb\u90e8\u7f72"),(0,i.kt)("p",null,"\u72ec\u7acb\u90e8\u7f72\u5373\u4e3a\u5728\u540e\u7aef\u8fd0\u884c\u7a0b\u5e8f\uff0c\u8ba9\u7a0b\u5e8f\u8dd1\u5728\u540e\u53f0\u3002"),(0,i.kt)("h2",{id:"linux"},"linux"),(0,i.kt)("p",null,"\u5728 linux \u4e0b\u9762\u90e8\u7f72\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"nohup")," \u547d\u4ee4\uff0c\u628a\u5e94\u7528\u90e8\u7f72\u5728\u540e\u7aef\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nohup ./beepkg &\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u4f60\u7684\u5e94\u7528\u5c31\u8dd1\u5728\u4e86 Linux \u7cfb\u7edf\u7684\u5b88\u62a4\u8fdb\u7a0b"),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("p",null,"\u5728 Windows \u7cfb\u7edf\u4e2d\uff0c\u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\uff0c\u540e\u53f0\u8fd0\u884c\uff0c\u6709\u5982\u4e0b\u51e0\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5236\u4f5c bat \u6587\u4ef6\uff0c\u653e\u5728\u201c\u542f\u52a8\u201d\u91cc\u9762"),(0,i.kt)("li",{parentName:"ol"},"\u5236\u4f5c\u6210\u670d\u52a1")))}f.isMDXComponent=!0}}]);