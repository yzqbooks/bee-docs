"use strict";(self.webpackChunkbee=self.webpackChunkbee||[]).push([[5154],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=t.createContext({}),s=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,u=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,y=p["".concat(a,".").concat(m)]||p[m]||d[m]||u;return n?t.createElement(y,o(o({ref:r},c),{},{components:n})):t.createElement(y,o({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=p;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<u;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5807:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var t=n(7462),i=n(3366),u=(n(7294),n(3905)),o=["components"],l={name:"\u6784\u9020\u67e5\u8be2",sort:6},a="\u6784\u9020\u67e5\u8be2",s={unversionedId:"mvc/model/querybuilder",id:"mvc/model/querybuilder",title:"\u6784\u9020\u67e5\u8be2",description:"QueryBuilder \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u4fbf\uff0c\u6d41\u7545\u7684 SQL \u67e5\u8be2\u6784\u9020\u5668\u3002\u5728\u4e0d\u5f71\u54cd\u4ee3\u7801\u53ef\u8bfb\u6027\u7684\u524d\u63d0\u4e0b\u7528\u6765\u5feb\u901f\u7684\u5efa\u7acb SQL \u8bed\u53e5\u3002",source:"@site/docs/mvc/model/querybuilder.md",sourceDirName:"mvc/model",slug:"/mvc/model/querybuilder",permalink:"/bee-docs/docs/mvc/model/querybuilder",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mvc/model/querybuilder.md",tags:[],version:"current",frontMatter:{name:"\u6784\u9020\u67e5\u8be2",sort:6},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u67e5\u8be2",permalink:"/bee-docs/docs/mvc/model/query"},next:{title:"\u4f7f\u7528SQL\u8bed\u53e5\u8fdb\u884c\u67e5\u8be2",permalink:"/bee-docs/docs/mvc/model/rawsql"}},c={},d=[],p={toc:d};function m(e){var r=e.components,n=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u6784\u9020\u67e5\u8be2"},"\u6784\u9020\u67e5\u8be2"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"QueryBuilder")," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u4fbf\uff0c\u6d41\u7545\u7684 SQL \u67e5\u8be2\u6784\u9020\u5668\u3002\u5728\u4e0d\u5f71\u54cd\u4ee3\u7801\u53ef\u8bfb\u6027\u7684\u524d\u63d0\u4e0b\u7528\u6765\u5feb\u901f\u7684\u5efa\u7acb SQL \u8bed\u53e5\u3002"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"QueryBuilder")," \u5728\u529f\u80fd\u4e0a\u4e0e ORM \u91cd\u5408\uff0c \u4f46\u662f\u5404\u6709\u5229\u5f0a\u3002ORM \u66f4\u9002\u7528\u4e8e\u7b80\u5355\u7684 CRUD \u64cd\u4f5c\uff0c\u800c QueryBuilder \u5219\u66f4\u9002\u7528\u4e8e\u590d\u6742\u7684\u67e5\u8be2\uff0c\u4f8b\u5982\u67e5\u8be2\u4e2d\u5305\u542b\u5b50\u67e5\u8be2\u548c\u591a\u91cd\u8054\u7ed3\u3002"),(0,u.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},'// User \u5305\u88c5\u4e86\u4e0b\u9762\u7684\u67e5\u8be2\u7ed3\u679c\ntype User struct {\n    Name string\n    Age  int\n}\nvar users []User\n\n// \u83b7\u53d6 QueryBuilder \u5bf9\u8c61. \u9700\u8981\u6307\u5b9a\u6570\u636e\u5e93\u9a71\u52a8\u53c2\u6570\u3002\n// \u7b2c\u4e8c\u4e2a\u8fd4\u56de\u503c\u662f\u9519\u8bef\u5bf9\u8c61\uff0c\u5728\u8fd9\u91cc\u7565\u8fc7\nqb, _ := orm.NewQueryBuilder("mysql")\n\n// \u6784\u5efa\u67e5\u8be2\u5bf9\u8c61\nqb.Select("user.name",\n    "profile.age").\n    From("user").\n    InnerJoin("profile").On("user.id_user = profile.fk_user").\n    Where("age > ?").\n    OrderBy("name").Desc().\n    Limit(10).Offset(0)\n\n// \u5bfc\u51fa SQL \u8bed\u53e5\nsql := qb.String()\n\n// \u6267\u884c SQL \u8bed\u53e5\no := orm.NewOrm()\no.Raw(sql, 20).QueryRows(&users)\n')),(0,u.kt)("p",null,"\u5b8c\u6574 API \u63a5\u53e3:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},"type QueryBuilder interface {\n    Select(fields ...string) QueryBuilder\n    ForUpdate() QueryBuilder\n    From(tables ...string) QueryBuilder\n    InnerJoin(table string) QueryBuilder\n    LeftJoin(table string) QueryBuilder\n    RightJoin(table string) QueryBuilder\n    On(cond string) QueryBuilder\n    Where(cond string) QueryBuilder\n    And(cond string) QueryBuilder\n    Or(cond string) QueryBuilder\n    In(vals ...string) QueryBuilder\n    OrderBy(fields ...string) QueryBuilder\n    Asc() QueryBuilder\n    Desc() QueryBuilder\n    Limit(limit int) QueryBuilder\n    Offset(offset int) QueryBuilder\n    GroupBy(fields ...string) QueryBuilder\n    Having(cond string) QueryBuilder\n    Update(tables ...string) QueryBuilder\n    Set(kv ...string) QueryBuilder\n    Delete(tables ...string) QueryBuilder\n    InsertInto(table string, fields ...string) QueryBuilder\n    Values(vals ...string) QueryBuilder\n    Subquery(sub string, alias string) string\n    String() string\n}\n")),(0,u.kt)("p",null,"\u76ee\u524d\u652f\u6301",(0,u.kt)("inlineCode",{parentName:"p"},"Postgress"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u548c",(0,u.kt)("inlineCode",{parentName:"p"},"TiDB"),"\u7684\u652f\u6301\u3002"))}m.isMDXComponent=!0}}]);