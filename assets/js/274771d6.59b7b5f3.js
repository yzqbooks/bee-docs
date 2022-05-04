"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[7149],{3905:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=r.createContext({}),s=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},i=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,d=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),p=s(n),f=o,b=p["".concat(d,".").concat(f)]||p[f]||l[f]||a;return n?r.createElement(b,c(c({ref:e},i),{},{components:n})):r.createElement(b,c({ref:e},i))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=p;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:o,c[1]=u;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1724:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],u={},d="\u5f00\u53d1\u6848\u4f8b",s={unversionedId:"usecases",id:"usecases",title:"\u5f00\u53d1\u6848\u4f8b",description:"\u5f00\u53d1\u76ee\u6807",source:"@site/docs/usecases.md",sourceDirName:".",slug:"/usecases",permalink:"/bee-docs/docs/usecases",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usecases.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u56e2\u961f",permalink:"/bee-docs/docs/team"},next:{title:"README",permalink:"/bee-docs/docs/utils/"}},i={},l=[],p={toc:l};function f(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f00\u53d1\u6848\u4f8b"},"\u5f00\u53d1\u6848\u4f8b"),(0,a.kt)("table",{class:"docker_use_cases_table table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u5f00\u53d1\u76ee\u6807"),(0,a.kt)("td",null,"\u9879\u76ee\u5b9e\u4f8b"),(0,a.kt)("td",null,"\u94fe\u63a5"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<tbody>\n    <tr>\n        <td>Go API \u6587\u6863\u670d\u52a1\u5668</td>\n        <td>Go \u6b65\u884c\u8005 - \u4e00\u4e2a\u7528\u4e8e\u5728\u7ebf\u751f\u6210\u5e76\u6d4f\u89c8 Go \u9879\u76ee API \u6587\u6863\u53ca\u6e90\u7801 \u7684 Web \u670d\u52a1\u5668\u3002</td>\n        <td><a target="_blank" href="http://gowalker.org">http://gowalker.org</a></td>\n    </tr>\n\n    <tr>\n        <td>API \u670d\u52a1</td>\n        <td>360 \u5411\u6709\u9053\u63d0\u4f9b\u7684\u641c\u7d22 API \u670d\u52a1\uff0c\u5343\u4e07\u7ea7\u8bf7\u6c42\u6d41\u91cf\u3002</td>\n    </tr>\n\n    <tr>\n        <td></td>\n        <td>Bmob \u79fb\u52a8\u4e91\u7684 API \u670d\u52a1\uff0c\u6bcf\u5929\u7684\u8bf7\u6c42\u91cf\u8d85\u8fc7 5000 \u4e07\u3002</td>\n    </tr>\n\n    <tr>\n        <td></td>\n        <td>Weibo 3 \u540e\u7aef API \u670d\u52a1\u3002</td>\n    </tr>\n    <tr>\n        <td></td>\n        <td>\u6211\u4eec\u884c\u3000\u89c6\u9891\u4e91\u670d\u52a1\u63a5\u53e3,\u6bcf\u5929\u5904\u7406\u8d85\u8fc7500\u4e07\u7684\u89c6\u9891\u62bd\u5e27,\u7f29\u653e,\u6c34\u5370\u5904\u7406\u3002</td>\n    </tr>\n    <tr>\n        <td>\u535a\u5ba2\u7f51\u7ad9</td>\n        <td>\u901f\u52a8\u4e2d\u56fd - \u591a\u7528\u6237\u535a\u5ba2\u5206\u4eab\u7f51\u7ad9</td>\n        <td><a target="_blank" href="http://www.sudochina.com">http://sudochina.com</a></td>\n    </tr>\n\n    <tr>\n        <td>\u793e\u533a\u8bba\u575b</td>\n        <td>\u975e\u5e38\u65f6\u523b - \u793e\u4ea4\u5206\u4eab\u793e\u533a</td>\n        <td><a target="_blank" href="http://www.veryhour.com">http://veryhour.com</a></td>\n    </tr>\n\n       <tr>\n        <td>\u80a1\u7968\u5e94\u7528</td>\n        <td>\u6570\u636e\u67e5\u8be2</td>\n        <td><a target="_blank" href="http://sj.n8n8.cn/">http://sj.n8n8.cn/</a></td>\n    </tr>\n\n\n</tbody>\n'))))}f.isMDXComponent=!0}}]);