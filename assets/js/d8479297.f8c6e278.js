"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1040],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",description:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",tags:["work"],editor:"caroot"},i=void 0,s={unversionedId:"other/docs_design",id:"other/docs_design",title:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",description:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",source:"@site/docs/other/docs_design.md",sourceDirName:"other",slug:"/other/docs_design",permalink:"/docs/other/docs_design",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/other/docs_design.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1696954797,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",description:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"docker FAQ",permalink:"/docs/other/docker"},next:{title:"nfs\u914d\u7f6e",permalink:"/docs/other/nfs"}},c={},l=[{value:"System-context-diagram",id:"system-context-diagram",level:2},{value:"APIs",id:"apis",level:2},{value:"Data storage",id:"data-storage",level:2},{value:"Degree of constraint",id:"degree-of-constraint",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"Cross-cutting concerns",id:"cross-cutting-concerns",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"system-context-diagram"},"System-context-diagram"),(0,o.kt)("p",null,"\u5728\u8bb8\u591a\u6587\u6863\u4e2d\uff0c\u7cfb\u7edf\u4e0a\u4e0b\u6587\u56fe\u53ef\u80fd\u975e\u5e38\u6709\u7528\u3002\u8fd9\u6837\u7684\u56fe\u8868\u5c06\u7cfb\u7edf\u663e\u793a\u4e3a\u66f4\u5927\u7684\u6280\u672f\u666f\u89c2\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u5141\u8bb8\u8bfb\u8005\u5728\u4ed6\u4eec\u5df2\u7ecf\u719f\u6089\u7684\u73af\u5883\u4e2d\u5c06\u65b0\u8bbe\u8ba1\u7f6e\u4e8e\u4e0a\u4e0b\u6587\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"System-context-diagram",src:r(4554).Z,width:"680",height:"348"})),(0,o.kt)("h2",{id:"apis"},"APIs"),(0,o.kt)("p",null,"\u5982\u679c\u6b63\u5728\u8bbe\u8ba1\u7684\u7cfb\u7edf\u516c\u5f00\u4e86\u4e00\u4e2a API\uff0c\u90a3\u4e48\u52fe\u52d2\u51fa\u8be5 API \u901a\u5e38\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\u3002\u7136\u800c\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4eba\u4eec\u5e94\u8be5\u627f\u53d7\u5c06\u6b63\u5f0f\u754c\u9762\u6216\u6570\u636e\u5b9a\u4e49\u590d\u5236\u7c98\u8d34\u5230\u6587\u6863\u4e2d\u7684\u8bf1\u60d1\uff0c\u56e0\u4e3a\u5b83\u4eec\u901a\u5e38\u5f88\u5197\u957f\uff0c\u5305\u542b\u4e0d\u5fc5\u8981\u7684\u7ec6\u8282\u5e76\u4e14\u5f88\u5feb\u5c31\u4f1a\u8fc7\u65f6\u3002\u76f8\u53cd\uff0c\u4e13\u6ce8\u4e8e\u4e0e\u8bbe\u8ba1\u76f8\u5173\u7684\u90e8\u5206\u53ca\u5176\u6743\u8861\u3002"),(0,o.kt)("h2",{id:"data-storage"},"Data storage"),(0,o.kt)("h2",{id:"degree-of-constraint"},"Degree of constraint"),(0,o.kt)("p",null,"\u8fd9\u6837\u7684\u6587\u6863\u53ef\u80fd\u8303\u56f4\u5f88\u5e7f\uff0c\u4f46\u5b83\u4e5f\u9700\u8981\u5feb\u901f\u5b9a\u4e49\u4e00\u7ec4\u89c4\u5219\uff0c\u5141\u8bb8\u653e\u5927\u4e00\u7ec4\u53ef\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848\u3002\n\u53e6\u4e00\u65b9\u9762\uff0c\u7cfb\u7edf\u5bf9\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6848\u8fdb\u884c\u4e86\u5f88\u597d\u7684\u5b9a\u4e49\uff0c\u4f46\u5982\u4f55\u5c06\u5b83\u4eec\u7ec4\u5408\u8d77\u6765\u4ee5\u5b9e\u73b0\u76ee\u6807\u5e76\u4e0d\u660e\u663e\u3002"),(0,o.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,o.kt)("h3",{id:"cross-cutting-concerns"},"Cross-cutting concerns"),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u60a8\u7684\u7ec4\u7ec7\u53ef\u4ee5\u786e\u4fdd\u59cb\u7ec8\u8003\u8651\u67d0\u4e9b\u6a2a\u5207\u95ee\u9898\uff0c\u4f8b\u5982\u5b89\u5168\u6027\u3001\u9690\u79c1\u548c\u53ef\u89c2\u6d4b\u6027\u3002\u8fd9\u4e9b\u901a\u5e38\u662f\u76f8\u5bf9\u8f83\u77ed\u7684\u90e8\u5206\uff0c\u7528\u4e8e\u89e3\u91ca\u8bbe\u8ba1\u5982\u4f55\u5f71\u54cd\u5173\u6ce8\u70b9\u4ee5\u53ca\u5982\u4f55\u89e3\u51b3\u5173\u6ce8\u70b9\u3002\u56e2\u961f\u5e94\u8be5\u6807\u51c6\u5316\u4ed6\u4eec\u6848\u4f8b\u4e2d\u7684\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u5176\u91cd\u8981\u6027\uff0cGoogle\u9879\u76ee\u9700\u8981\u6709\u4e13\u95e8\u7684\u9690\u79c1\u8bbe\u8ba1\u6587\u6863\uff0c\u5e76\u4e14\u6709\u4e13\u95e8\u7684\u9690\u79c1\u548c\u5b89\u5168\u5ba1\u67e5\u3002\u867d\u7136\u5ba1\u67e5\u53ea\u9700\u8981\u5728\u9879\u76ee\u542f\u52a8\u65f6\u5b8c\u6210\uff0c\u4f46\u6700\u4f73\u505a\u6cd5\u662f\u5c3d\u65e9\u4e0e\u9690\u79c1\u548c\u5b89\u5168\u56e2\u961f\u5408\u4f5c\uff0c\u4ee5\u786e\u4fdd\u8bbe\u8ba1\u4ece\u5934\u5f00\u59cb\u8003\u8651\u5b83\u4eec\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u4e3b\u9898\u7684\u4e13\u7528\u6587\u6863\uff0c\u4e2d\u592e\u8bbe\u8ba1\u6587\u6863\u5f53\u7136\u53ef\u4ee5\u5f15\u7528\u5b83\u4eec\uff0c\u800c\u4e0d\u662f\u8be6\u7ec6\u4ecb\u7ecd\u3002"))}u.isMDXComponent=!0},4554:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docs_design_1-2da3b72d73d5343bdd005590f8380122.png"}}]);