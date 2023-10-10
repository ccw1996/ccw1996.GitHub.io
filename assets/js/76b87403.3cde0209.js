"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[9940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"QAT\u91cf\u5316",description:"QAT\u91cf\u5316",tags:["machine learning","interview"],editor:"caroot"},i="\u4f2a\u91cf\u5316\u8282\u70b9",l={unversionedId:"ml/quantize/qat",id:"ml/quantize/qat",title:"QAT\u91cf\u5316",description:"QAT\u91cf\u5316",source:"@site/docs/ml/quantize/qat.md",sourceDirName:"ml/quantize",slug:"/ml/quantize/qat",permalink:"/docs/ml/quantize/qat",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/quantize/qat.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1696954797,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"QAT\u91cf\u5316",description:"QAT\u91cf\u5316",tags:["machine learning","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b",permalink:"/docs/ml/quantize/pytorch_int8"},next:{title:"\u5377\u79ef\u795e\u7ecf\u7f51\u7edc(CNN)\u5f20\u91cf(\u56fe\u50cf)\u7684\u5c3a\u5bf8\u548c\u53c2\u6570\u8ba1\u7b97",permalink:"/docs/ml/size"}},c={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f2a\u91cf\u5316\u8282\u70b9"},"\u4f2a\u91cf\u5316\u8282\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u8f93\u5165\u6570\u636e\u7684\u5206\u5e03\uff0c\u5373\u627e\u5230 min \u548c max \u503c\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6a21\u62df\u91cf\u5316\u5230\u4f4e\u6bd4\u7279\u64cd\u4f5c\u7684\u65f6\u5019\u7684\u7cbe\u5ea6\u635f\u5931\uff0c\u628a\u8be5\u635f\u5931\u4f5c\u7528\u5230\u7f51\u7edc\u6a21\u578b\u4e2d\uff0c\u4f20\u9012\u7ed9\u635f\u5931\u51fd\u6570\uff0c\u8ba9\u4f18\u5316\u5668\u53bb\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u5bf9\u8be5\u635f\u5931\u503c\u8fdb\u884c\u4f18\u5316\u3002")))}m.isMDXComponent=!0}}]);