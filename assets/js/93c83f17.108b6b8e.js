"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[2906],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,p(p({ref:t},s),{},{components:n})):r.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6011:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),p=["components"],i={name:"httplib \u6a21\u5757",sort:4},o="\u5ba2\u6237\u7aef\u8bf7\u6c42",u={unversionedId:"module/httplib",id:"module/httplib",title:"\u5ba2\u6237\u7aef\u8bf7\u6c42",description:"httplib \u5e93\u4e3b\u8981\u7528\u6765\u6a21\u62df\u5ba2\u6237\u7aef\u53d1\u9001 HTTP \u8bf7\u6c42\uff0c\u7c7b\u4f3c\u4e8e Curl \u5de5\u5177\uff0c\u652f\u6301 JQuery \u7c7b\u4f3c\u7684\u94fe\u5f0f\u64cd\u4f5c\u3002\u4f7f\u7528\u8d77\u6765\u76f8\u5f53\u7684\u65b9\u4fbf\uff1b\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\uff1a",source:"@site/docs/module/httplib.md",sourceDirName:"module",slug:"/module/httplib",permalink:"/bee-docs/docs/module/httplib",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/module/httplib.md",tags:[],version:"current",frontMatter:{name:"httplib \u6a21\u5757",sort:4},sidebar:"tutorialSidebar",previous:{title:"\u70ed\u5347\u7ea7\u662f\u4ec0\u4e48\uff1f",permalink:"/bee-docs/docs/module/grace"},next:{title:"\u56fd\u9645\u5316\u4ecb\u7ecd",permalink:"/bee-docs/docs/module/i18n"}},s={},m=[{value:"Prometheus Filter",id:"prometheus-filter",level:2},{value:"Opentracing Filter",id:"opentracing-filter",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5ba2\u6237\u7aef\u8bf7\u6c42"},"\u5ba2\u6237\u7aef\u8bf7\u6c42"),(0,a.kt)("p",null,"httplib \u5e93\u4e3b\u8981\u7528\u6765\u6a21\u62df\u5ba2\u6237\u7aef\u53d1\u9001 HTTP \u8bf7\u6c42\uff0c\u7c7b\u4f3c\u4e8e Curl \u5de5\u5177\uff0c\u652f\u6301 JQuery \u7c7b\u4f3c\u7684\u94fe\u5f0f\u64cd\u4f5c\u3002\u4f7f\u7528\u8d77\u6765\u76f8\u5f53\u7684\u65b9\u4fbf\uff1b\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/beego/beego/v2/client/httplib\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beego/beego-example/"},"beego-example"),"\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"httplib"),"\u5305\u4e2d\u6709\u5bf9\u5e94\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("p",null,"\u9996\u5148\u5bfc\u5165\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/beego/beego/v2/client/httplib"\n)\n')),(0,a.kt)("p",null,"\u7136\u540e\u521d\u59cb\u5316\u8bf7\u6c42\u65b9\u6cd5\uff0c\u8fd4\u56de\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'req := httplib.Get("http://beego.vip/")\n')),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u83b7\u53d6\u6570\u636e\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"str, err := req.String()\nif err != nil {\n    t.Fatal(err)\n}\nfmt.Println(str)\n")),(0,a.kt)("h1",{id:"\u652f\u6301\u7684\u65b9\u6cd5\u5bf9\u8c61"},"\u652f\u6301\u7684\u65b9\u6cd5\u5bf9\u8c61"),(0,a.kt)("p",null,"httplib \u5305\u91cc\u9762\u652f\u6301\u5982\u4e0b\u7684\u65b9\u6cd5\u8fd4\u56de request \u5bf9\u8c61\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get(url string)"),(0,a.kt)("li",{parentName:"ul"},"Post(url string)"),(0,a.kt)("li",{parentName:"ul"},"Put(url string)"),(0,a.kt)("li",{parentName:"ul"},"Delete(url string)"),(0,a.kt)("li",{parentName:"ul"},"Head(url string)")),(0,a.kt)("h1",{id:"\u652f\u6301-debug-\u8f93\u51fa"},"\u652f\u6301 debug \u8f93\u51fa"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6839\u636e\u4e0a\u9762\u4e94\u4e2a\u65b9\u6cd5\u8fd4\u56de\u7684\u5bf9\u8c61\u8fdb\u884c\u8c03\u8bd5\u4fe1\u606f\u7684\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"req.Debug(true)\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u770b\u5230\u8bf7\u6c42\u6570\u636e\u7684\u8be6\u7ec6\u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'httplib.Get("http://beego.vip/").Debug(true).Response()\n\n//\u8f93\u51fa\u6570\u636e\u5982\u4e0b\nGET / HTTP/0.0\nHost: beego.vip\nUser-Agent: beegoServer\n')),(0,a.kt)("h1",{id:"\u652f\u6301-https-\u8bf7\u6c42"},"\u652f\u6301 HTTPS \u8bf7\u6c42"),(0,a.kt)("p",null,"\u5982\u679c\u8bf7\u6c42\u7684\u7f51\u7ad9\u662f HTTPS \u7684\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u9700\u8981\u8bbe\u7f6e client \u7684 TLS \u4fe1\u606f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"req.SetTLSClientConfig(&tls.Config{InsecureSkipVerify: true})\n")),(0,a.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u8bbe\u7f6e\u8fd9\u4e9b\u4fe1\u606f\u8bf7\u8bbf\u95ee\uff1a ",(0,a.kt)("a",{parentName:"p",href:"http://gowalker.org/crypto/tls#Config"},"http://gowalker.org/crypto/tls#Config")),(0,a.kt)("h1",{id:"\u652f\u6301\u8d85\u65f6\u8bbe\u7f6e"},"\u652f\u6301\u8d85\u65f6\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\u548c\u6570\u636e\u8bfb\u53d6\u65f6\u95f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"req.SetTimeout(connectTimeout, readWriteTimeout)\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u65b9\u6cd5\u90fd\u662f\u9488\u5bf9 request \u5bf9\u8c61\u7684\uff0c\u6240\u4ee5\u4f60\u7b2c\u4e00\u6b65\u5fc5\u987b\u662f\u8fd4\u56de request \u5bf9\u8c61\uff0c\u7136\u540e\u94fe\u5f0f\u64cd\u4f5c\uff0c\u7c7b\u4f3c\u8fd9\u6837\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'httplib.Get("http://beego.vip/").SetTimeout(100 * time.Second, 30 * time.Second).Response()\n')),(0,a.kt)("h1",{id:"\u8bbe\u7f6e\u8bf7\u6c42\u53c2\u6570"},"\u8bbe\u7f6e\u8bf7\u6c42\u53c2\u6570"),(0,a.kt)("p",null,"\u5bf9\u4e8e Put \u6216\u8005 Post \u8bf7\u6c42\uff0c\u9700\u8981\u53d1\u9001\u53c2\u6570\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7 Param \u53d1\u9001 k/v \u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'req := httplib.Post("http://beego.vip/")\nreq.Param("username","astaxie")\nreq.Param("password","123456")\n')),(0,a.kt)("h1",{id:"\u53d1\u9001\u5927\u7247\u7684\u6570\u636e"},"\u53d1\u9001\u5927\u7247\u7684\u6570\u636e"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u9700\u8981\u4e0a\u4f20\u6587\u4ef6\u4e4b\u7c7b\u7684\u6a21\u62df\uff0c\u90a3\u4e48\u5982\u4f55\u53d1\u9001\u8fd9\u4e2a\u6587\u4ef6\u6570\u636e\u5462\uff1f\u53ef\u4ee5\u901a\u8fc7 Body \u51fd\u6570\u6765\u64cd\u4f5c\uff0c\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'req := httplib.Post("http://beego.vip/")\nbt,err:=ioutil.ReadFile("hello.txt")\nif err!=nil{\n    log.Fatal("read file err:",err)\n}\nreq.Body(bt)\n')),(0,a.kt)("h1",{id:"\u8bbe\u7f6e-header-\u4fe1\u606f"},"\u8bbe\u7f6e header \u4fe1\u606f"),(0,a.kt)("p",null,"\u9664\u4e86\u8bf7\u6c42\u53c2\u6570\u4e4b\u5916\uff0c\u6211\u4eec\u6709\u4e9b\u65f6\u5019\u9700\u8981\u6a21\u62df\u4e00\u4e9b\u5934\u4fe1\u606f\uff0c\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Accept-Encoding:gzip,deflate,sdch\nHost:beego.vip\nUser-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Header \u51fd\u6570\u6765\u8bbe\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'req := httplib.Post("http://beego.vip/")\nreq.Header("Accept-Encoding","gzip,deflate,sdch")\nreq.Header("Host","beego.vip")\nreq.Header("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36")\n')),(0,a.kt)("h1",{id:"\u8bbe\u7f6e-transport"},"\u8bbe\u7f6e transport"),(0,a.kt)("p",null,"http\u8bf7\u6c42\u7684\u4f20\u8f93\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"http.RoundTrip"),"\u627f\u8f7d\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u63a5\u53e3\u4ee5\u5b9e\u73b0\u94fe\u63a5\u7684\u63a7\u5236\u3002\u901a\u8fc7\u8bbe\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u957f\u8fde\u63a5\uff0c\u5982\u4e0b\u6240\u793a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var tp http.RoundTripper = &http.Transport{\n    DialContext: (&net.Dialer{\n        Timeout:   30 * time.Second,\n        KeepAlive: 30 * time.Second,\n        DualStack: true,\n    }).DialContext,\n    MaxIdleConns:          100,\n    IdleConnTimeout:       90 * time.Second,\n    ExpectContinueTimeout: 1 * time.Second,\n}\n\nreq := httplib.Post("http://beego.vip/")\nreq.SetTransport(tp)\n')),(0,a.kt)("h1",{id:"httplib\u652f\u6301\u6587\u4ef6\u76f4\u63a5\u4e0a\u4f20\u63a5\u53e3"},"httplib\u652f\u6301\u6587\u4ef6\u76f4\u63a5\u4e0a\u4f20\u63a5\u53e3"),(0,a.kt)("p",null,"PostFile \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f form \u8868\u5355\u7684\u5b57\u6bb5\u540d,\u7b2c\u4e8c\u4e2a\u662f\u9700\u8981\u53d1\u9001\u7684\u6587\u4ef6\u540d\u6216\u8005\u6587\u4ef6\u8def\u5f84"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'b:=httplib.Post("http://beego.vip/")\nb.Param("username","astaxie")\nb.Param("password","123456")\nb.PostFile("uploadfile1", "httplib.pdf")\nb.PostFile("uploadfile2", "httplib.txt")\nstr, err := b.String()\nif err != nil {\n    t.Fatal(err)\n}\n')),(0,a.kt)("h1",{id:"\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c"},"\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e9b\u90fd\u662f\u5728\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\u7684\u8bbe\u7f6e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5f00\u59cb\u53d1\u9001\u8bf7\u6c42\uff0c\u7136\u540e\u5982\u4f55\u6765\u83b7\u53d6\u6570\u636e\u5462\uff1f\u4e3b\u8981\u6709\u5982\u4e0b\u51e0\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de Response \u5bf9\u8c61\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"req.Response()")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u662f http.Response \u5bf9\u8c61\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5df1\u8bfb\u53d6 body \u7684\u6570\u636e\u7b49\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de bytes,",(0,a.kt)("inlineCode",{parentName:"p"},"req.Bytes()")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u76f4\u63a5\u8fd4\u56de\u8bf7\u6c42 URL \u8fd4\u56de\u7684\u5185\u5bb9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de string\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"req.String()")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u76f4\u63a5\u8fd4\u56de\u8bf7\u6c42 URL \u8fd4\u56de\u7684\u5185\u5bb9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u4e3a\u6587\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"req.ToFile(filename)")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u4fdd\u5b58\u5230\u6587\u4ef6\u540d\u4e3a filename \u7684\u6587\u4ef6\u4e2d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u6790\u4e3a JSON \u7ed3\u6784\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"req.ToJSON(&result)")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u6784\u76f4\u63a5\u89e3\u6790\u4e3a JSON \u683c\u5f0f\uff0c\u89e3\u6790\u5230 result \u5bf9\u8c61\u4e2d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u6790\u4e3a XML \u7ed3\u6784\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"req.ToXml(&result)")," \u65b9\u6cd5"),(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u6784\u76f4\u63a5\u89e3\u6790\u4e3a XML \u683c\u5f0f\uff0c\u89e3\u6790\u5230 result \u5bf9\u8c61\u4e2d"))),(0,a.kt)("h1",{id:"filter"},"Filter"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"httplib"),"\u4e0a\u8bbe\u8ba1\u4e86\u5355\u72ec\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"filter"),"\u673a\u5236\uff0c\u4ee5\u5141\u8bb8\u7528\u6237\u53ef\u4ee5\u6269\u5c55\u4e00\u4e9bAOP\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u65e5\u5fd7\uff0c\u8ffd\u8e2a\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6709\u4e24\u4e2a\u5173\u952e\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type FilterChain func(next Filter) Filter\n\ntype Filter func(ctx context.Context, req *BeegoHTTPRequest) (*http.Response, error)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\u662f\u6307\uff0c\u6211\u4eec\u5e0c\u671b\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\u7ec4\u7ec7\u6210\u4e00\u4e2a\u94fe\u5f0f\u3002\u8fd9\u662f\u5178\u578b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Filter-Chain"),"\u8bbe\u8ba1\u6a21\u5f0f\u7684\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u5728\u8bbe\u8ba1\u81ea\u5df1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u663e\u5f0f\u7684\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"next(...)"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func myFilter(next httplib.Filter) httplib.Filter {\n    return func(ctx context.Context, req *httplib.BeegoHTTPRequest) (*http.Response, error) {\n        r := req.GetRequest()\n        logs.Info("hello, here is the filter: ", r.URL)\n        // Never forget invoke this. Or the request will not be sent\n        return next(ctx, req)\n    }\n}\n')),(0,a.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u600e\u4e48\u6dfb\u52a0\u5230\u8bf7\u6c42\u91cc\u9762\u5462\uff1f\u6709\u4e24\u79cd\u65b9\u6cd5\uff0c\u4e00\u79cd\u662f\u5168\u5c40\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    httplib.SetDefaultSetting(httplib.BeegoHTTPSettings{\n\n        FilterChains: []httplib.FilterChain{\n            myFilter,\n        },\n\n        UserAgent:        "beegoServer",\n        ConnectTimeout:   60 * time.Second,\n        ReadWriteTimeout: 60 * time.Second,\n        Gzip:             true,\n        DumpBody:         true,\n    })\n')),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u662f\u9488\u5bf9\u7279\u5b9a\u8bf7\u6c42\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"req.AddFilters(myFilter)\n")),(0,a.kt)("p",null,"\u9488\u5bf9\u5355\u4e00\u8bf7\u6c42\u7684\u8bbe\u7f6e\u5c06\u4e0d\u4f1a\u5f71\u54cd\u522b\u7684\u8bf7\u6c42\u3002\u4e0b\u9762\u6211\u4eec\u770b\u63d0\u4f9b\u7684\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\u3002"),(0,a.kt)("h2",{id:"prometheus-filter"},"Prometheus Filter"),(0,a.kt)("p",null,"\u8fd9\u662f\u7528\u4e8e\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus"),"\u6846\u67b6\u7684\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    builder := prometheus.FilterChainBuilder{\n        AppName: "My-test",\n        ServerName: "User-server-1",\n        RunMode: "dev",\n    }\n    req := httplib.Get("http://beego.vip/")\n    // only work for this request, or using SetDefaultSetting to support all requests\n    req.AddFilters(builder.FilterChain)\n\n    resp, err := req.Response()\n    if err != nil {\n        logs.Error("could not get response: ", err)\n    } else {\n        logs.Info(resp)\n    }\n')),(0,a.kt)("p",null,"\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u6ca1\u6709\u5f00\u542f\u6211\u4eec\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"\u670d\u52a1\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u989d\u5916\u66b4\u9732",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus"),"\u7684\u7aef\u53e3\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"\u4e0b\u5982\u4f55\u66b4\u9732",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus"),"\u7aef\u53e3\uff0c\u6216\u8005\u53c2\u9605",(0,a.kt)("inlineCode",{parentName:"p"},"promethues"),"\u7684\u6587\u6863\u3002"),(0,a.kt)("h2",{id:"opentracing-filter"},"Opentracing Filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    builder := opentracing.FilterChainBuilder{}\n    req := httplib.Get("http://beego.vip/")\n    // only work for this request, or using SetDefaultSetting to support all requests\n    req.AddFilters(builder.FilterChain)\n\n    resp, err := req.Response()\n    if err != nil {\n        logs.Error("could not get response: ", err)\n    } else {\n        logs.Info(resp)\n    }\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Filter"),"\uff0c\u4e5f\u522b\u5fd8\u8bb0\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"Opentracing"),"\u7684\u771f\u6b63\u5b9e\u73b0\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u63a8\u8350\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"zipkin"),"\u3002\u5e02\u9762\u4e0a\u5927\u90e8\u5206\u6846\u67b6\u90fd\u4f1a\u9002\u914d",(0,a.kt)("inlineCode",{parentName:"p"},"Opentracing"),"\u7684API\uff0c\u4f46\u662f\u4e0d\u4e00\u5b9a\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"golang"),"\u7684\u5ba2\u6237\u7aef\u3002"))}d.isMDXComponent=!0}}]);