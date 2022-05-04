"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[6784],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9142:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={name:"XSRF \u8fc7\u6ee4",sort:4},i="\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",p={unversionedId:"mvc/controller/xsrf",id:"mvc/controller/xsrf",title:"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",description:"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-site request forgery)\uff0c \u7b80\u79f0\u4e3a XSRF\uff0c\u662f Web \u5e94\u7528\u4e2d\u5e38\u89c1\u7684\u4e00\u4e2a\u5b89\u5168\u95ee\u9898\u3002\u524d\u9762\u7684\u94fe\u63a5\u4e5f\u8be6\u7ec6\u8bb2\u8ff0\u4e86 XSRF \u653b\u51fb\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002",source:"@site/docs/mvc/controller/xsrf.md",sourceDirName:"mvc/controller",slug:"/mvc/controller/xsrf",permalink:"/bee-docs/docs/mvc/controller/xsrf",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvc/controller/xsrf.md",tags:[],version:"current",frontMatter:{name:"XSRF \u8fc7\u6ee4",sort:4},sidebar:"tutorialSidebar",previous:{title:"validation",permalink:"/bee-docs/docs/mvc/controller/validation"},next:{title:"README",permalink:"/bee-docs/docs/mvc/model/"}},u={},s=[],f={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020"},"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Cross-site_request_forgery"},"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-site request forgery)"),"\uff0c \u7b80\u79f0\u4e3a XSRF\uff0c\u662f Web \u5e94\u7528\u4e2d\u5e38\u89c1\u7684\u4e00\u4e2a\u5b89\u5168\u95ee\u9898\u3002\u524d\u9762\u7684\u94fe\u63a5\u4e5f\u8be6\u7ec6\u8bb2\u8ff0\u4e86 XSRF \u653b\u51fb\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5f53\u524d\u9632\u8303 XSRF \u7684\u4e00\u79cd\u901a\u7528\u7684\u65b9\u6cd5\uff0c\u662f\u5bf9\u6bcf\u4e00\u4e2a\u7528\u6237\u90fd\u8bb0\u5f55\u4e00\u4e2a\u65e0\u6cd5\u9884\u77e5\u7684 cookie \u6570\u636e\uff0c\u7136\u540e\u8981\u6c42\u6240\u6709\u63d0\u4ea4\u7684\u8bf7\u6c42\uff08POST/PUT/DELETE\uff09\u4e2d\u90fd\u5fc5\u987b\u5e26\u6709\u8fd9\u4e2a cookie \u6570\u636e\u3002\u5982\u679c\u6b64\u6570\u636e\u4e0d\u5339\u914d \uff0c\u90a3\u4e48\u8fd9\u4e2a\u8bf7\u6c42\u5c31\u53ef\u80fd\u662f\u88ab\u4f2a\u9020\u7684\u3002"),(0,a.kt)("p",null,"beego \u6709\u5185\u5efa\u7684 XSRF \u7684\u9632\u8303\u673a\u5236\uff0c\u8981\u4f7f\u7528\u6b64\u673a\u5236\uff0c\u4f60\u9700\u8981\u5728\u5e94\u7528\u914d\u7f6e\u6587\u4ef6\u4e2d\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"enablexsrf")," \u8bbe\u5b9a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"enablexsrf = true\nxsrfkey = 61oETzKXQAGaYdkL5gEmGeJJFuYh7EQnp2XdTP1o\nxsrfexpire = 3600\n")),(0,a.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5728 main \u5165\u53e3\u5904\u8fd9\u6837\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'web.EnableXSRF = true\nweb.XSRFKEY = "61oETzKXQAGaYdkL5gEmGeJJFuYh7EQnp2XdTP1o"\nweb.XSRFExpire = 3600  //\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba41\u5c0f\u65f6\n')),(0,a.kt)("p",null,"\u5982\u679c\u5f00\u542f\u4e86 XSRF\uff0c\u90a3\u4e48 beego \u7684 Web \u5e94\u7528\u5c06\u5bf9\u6240\u6709\u7528\u6237\u8bbe\u7f6e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"_xsrf")," \u7684 cookie \u503c\uff08\u9ed8\u8ba4\u8fc7\u671f 1 \u5c0f\u65f6\uff09\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"POST PUT DELET")," \u8bf7\u6c42\u4e2d\u6ca1\u6709\u8fd9\u4e2a cookie \u503c\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8bf7\u6c42\u4f1a\u88ab\u76f4\u63a5\u62d2\u7edd\u3002\u5982\u679c\u4f60\u5f00\u542f\u4e86\u8fd9\u4e2a\u673a\u5236\uff0c\u90a3\u4e48\u5728\u6240\u6709\u88ab\u63d0\u4ea4\u7684\u8868\u5355\u4e2d\uff0c\u4f60\u90fd\u9700\u8981\u52a0\u4e0a\u4e00\u4e2a\u57df\u6765\u63d0\u4f9b\u8fd9\u4e2a\u503c\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u6a21\u677f\u4e2d\u4f7f\u7528 \u4e13\u95e8\u7684\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"XSRFFormHTML()")," \u6765\u505a\u5230\u8fd9\u4e00\u70b9\uff1a"),(0,a.kt)("p",null,"\u8fc7\u671f\u65f6\u95f4\u4e0a\u9762\u6211\u4eec\u8bbe\u7f6e\u4e86\u5168\u5c40\u7684\u8fc7\u671f\u65f6\u95f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"web.XSRFExpire"),"\uff0c\u4f46\u662f\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u63a7\u5236\u5668\u4e2d\u4fee\u6539\u8fd9\u4e2a\u8fc7\u671f\u65f6\u95f4\uff0c\u4e13\u95e8\u9488\u5bf9\u67d0\u4e00\u7c7b\u5904\u7406\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (this *HomeController) Get(){\n    this.XSRFExpire = 7200\n    this.Data["xsrfdata"]=template.HTML(this.XSRFFormHTML())\n}\n')),(0,a.kt)("p",null,"\u5728 Beego 2.x \u91cc\u9762\u6709\u4e00\u4e2a\u5f88\u5927\u7684\u4e0d\u540c\uff0c\u5c31\u662f Beego 2.x \u7684XSRF\u53ea\u652f\u6301 HTTPS \u534f\u8bae\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\uff0c\u5728 2.x \u7684\u65f6\u5019\uff0c\u6211\u4eec\u7ed9\u5b58\u50a8 XSRF token\u7684 cookie \u52a0\u4e0a\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Secure_cookie"},"secure"),", ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"http-only"),".\n\u4e24\u4e2a\u8bbe\u7f6e\uff0c\u6240\u4ee5\u53ea\u80fd\u901a\u8fc7 HTTPS \u534f\u8bae\u8fd0\u4f5c\u3002"),(0,a.kt)("p",null,"\u4e0e\u6b64\u540c\u65f6\uff0c\u4f60\u4e5f\u65e0\u6cd5\u901a\u8fc7 JS \u83b7\u53d6\u5230 XSRF token\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6539\u8fdb\uff0c\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u539f\u56e0\u662f\uff0c\u5728 1.x \u7684\u65f6\u5019\uff0c\u7f3a\u4e4f\u8fd9\u4e24\u4e2a\u9009\u9879\uff0c\u4f1a\u5bfc\u81f4\u653b\u51fb\u8005\u53ef\u4ee5\u4ece cookie \u4e2d\u62ff\u5230 XSRF token\uff0c\u5bfc\u81f4 XSRF \u5931\u6548\u3002"),(0,a.kt)("h1",{id:"\u652f\u6301controller-\u7ea7\u522b\u7684\u5c4f\u853d"},"\u652f\u6301controller \u7ea7\u522b\u7684\u5c4f\u853d"),(0,a.kt)("p",null,"XSRF \u4e4b\u524d\u662f\u5168\u5c40\u8bbe\u7f6e\u7684\u4e00\u4e2a\u53c2\u6570,\u5982\u679c\u8bbe\u7f6e\u4e86\u90a3\u4e48\u6240\u6709\u7684 API \u8bf7\u6c42\u90fd\u4f1a\u8fdb\u884c\u9a8c\u8bc1,\u4f46\u662f\u6709\u4e9b\u65f6\u5019API \u903b\u8f91\u662f\u4e0d\u9700\u8981\u8fdb\u884c\u9a8c\u8bc1\u7684,\u56e0\u6b64\u73b0\u5728\u652f\u6301\u5728controller \u7ea7\u522b\u8bbe\u7f6e\u5c4f\u853d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type AdminController struct{\n    web.Controller\n}\n\nfunc (a *AdminController) Prepare() {\n    a.EnableXSRF = false\n}\n")))}m.isMDXComponent=!0}}]);