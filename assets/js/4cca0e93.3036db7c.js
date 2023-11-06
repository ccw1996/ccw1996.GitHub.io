"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const l={title:"inline \u603b\u7ed3",description:"inline \u603b\u7ed3",tags:["cpp","basic"],editor:"caroot"},a=void 0,o={unversionedId:"cpp/inline",id:"cpp/inline",title:"inline \u603b\u7ed3",description:"inline \u603b\u7ed3",source:"@site/docs/cpp/inline.md",sourceDirName:"cpp",slug:"/cpp/inline",permalink:"/docs/cpp/inline",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/inline.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"basic",permalink:"/docs/tags/basic"}],version:"current",lastUpdatedAt:1699283272,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{title:"inline \u603b\u7ed3",description:"inline \u603b\u7ed3",tags:["cpp","basic"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"C++17\u5e38\u7528\u65b0\u7279\u6027",permalink:"/docs/cpp/cpp17"},next:{title:"C++\u9762\u8bd5\u8003\u70b9",permalink:"/docs/cpp/interview"}},p={},c=[{value:"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406",id:"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406"},"\u7f16\u8bd1\u5668\u5bf9inline\u5904\u7406"),(0,i.kt)("p",null,"\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u9636\u6bb5\u5b8c\u6210\u5bf9 inline \u51fd\u6570\u7684\u5904\u7406\uff0c\u5373\u5bf9 inline \u51fd\u6570\u7684\u8c03\u7528\u66ff\u6362\u4e3a\u51fd\u6570\u7684\u672c\u4f53\u3002\u4f46 inline \u5173\u952e\u5b57\u5bf9\u7f16\u8bd1\u5668\u53ea\u662f\u4e00\u79cd\u5efa\u8bae\uff0c\u7f16\u8bd1\u5668\u53ef\u4ee5\u8fd9\u6837\u53bb\u505a\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u53bb\u505a\u3002\u4ece\u903b\u8f91\u4e0a\u6765\u8bf4\uff0c\u7f16\u8bd1\u5668\u5bf9 inline \u51fd\u6570\u7684\u5904\u7406\u6b65\u9aa4\u4e00\u822c\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5c06 inline \u51fd\u6570\u4f53\u590d\u5236\u5230inline\u51fd\u6570\u8c03\u7528\u5904\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u4e3a\u6240\u7528 inline \u51fd\u6570\u4e2d\u7684\u5c40\u90e8\u53d8\u91cf\u5206\u914d\u5185\u5b58\u7a7a\u95f4\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5c06 inline \u51fd\u6570\u7684\u7684\u8f93\u5165\u53c2\u6570\u548c\u8fd4\u56de\u503c\u6620\u5c04\u5230\u8c03\u7528\u65b9\u6cd5\u7684\u5c40\u90e8\u53d8\u91cf\u7a7a\u95f4\u4e2d\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c inline \u51fd\u6570\u6709\u591a\u4e2a\u8fd4\u56de\u70b9\uff0c\u5c06\u5176\u8f6c\u53d8\u4e3a inline \u51fd\u6570\u4ee3\u7801\u5757\u672b\u5c3e\u7684\u5206\u652f\uff08\u4f7f\u7528GOTO\uff09\u3002")),(0,i.kt)("p",null,"\u51fd\u6570\u5b9a\u4e49\u65f6\uff0c\u5728\u8fd4\u56de\u7c7b\u578b\u524d\u52a0\u4e0a\u5173\u952e\u5b57 inline \u5373\u628a\u51fd\u6570\u6307\u5b9a\u4e3a\u5185\u8054\uff0c\u51fd\u6570\u7533\u660e\u65f6\u53ef\u52a0\u4e5f\u53ef\u4e0d\u52a0\u3002"),(0,i.kt)("h2",{id:"\u4f18\u7f3a\u70b9"},"\u4f18\u7f3a\u70b9"),(0,i.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5185\u8054\u51fd\u6570\u540c\u5b8f\u51fd\u6570\u4e00\u6837\u5c06\u5728\u88ab\u8c03\u7528\u5904\u8fdb\u884c\u4ee3\u7801\u5c55\u5f00\uff0c\u7701\u53bb\u4e86\u53c2\u6570\u538b\u6808\u3001\u6808\u5e27\u5f00\u8f9f\u4e0e\u56de\u6536\uff0c\u7ed3\u679c\u8fd4\u56de\u7b49\uff0c\u4ece\u800c\u63d0\u9ad8\u7a0b\u5e8f\u8fd0\u884c\u901f\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5185\u8054\u51fd\u6570\u76f8\u6bd4\u5b8f\u51fd\u6570\u6765\u8bf4\uff0c\u5728\u4ee3\u7801\u5c55\u5f00\u65f6\uff0c\u4f1a\u505a\u5b89\u5168\u68c0\u67e5\u6216\u81ea\u52a8\u7c7b\u578b\u8f6c\u6362\uff08\u540c\u666e\u901a\u51fd\u6570\uff09\uff0c\u800c\u5b8f\u5b9a\u4e49\u5219\u4e0d\u4f1a\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u7c7b\u4e2d\u58f0\u660e\u540c\u65f6\u5b9a\u4e49\u7684\u6210\u5458\u51fd\u6570\uff0c\u81ea\u52a8\u8f6c\u5316\u4e3a\u5185\u8054\u51fd\u6570\uff0c\u56e0\u6b64\u5185\u8054\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u7c7b\u7684\u6210\u5458\u53d8\u91cf\uff0c\u5b8f\u5b9a\u4e49\u5219\u4e0d\u80fd\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5185\u8054\u51fd\u6570\u5728\u8fd0\u884c\u65f6\u53ef\u8c03\u8bd5\uff0c\u800c\u5b8f\u5b9a\u4e49\u4e0d\u53ef\u4ee5\u3002")),(0,i.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u81a8\u80c0"),(0,i.kt)("li",{parentName:"ol"},"inline \u51fd\u6570\u65e0\u6cd5\u968f\u7740\u51fd\u6570\u5e93\u5347\u7ea7\u800c\u5347\u7ea7\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u662f\u5426\u5185\u8054\uff0c\u7a0b\u5e8f\u5458\u4e0d\u53ef\u63a7\u3002")))}d.isMDXComponent=!0}}]);