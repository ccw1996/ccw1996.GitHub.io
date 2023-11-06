"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"\u7b97\u6cd5\u5de5\u7a0b\u5e08\u9762\u7ecf",tags:["machine learning","interview"]},l="\u5377\u79ef\u6709\u4ec0\u4e48\u7279\u70b9",o={unversionedId:"ml/interview",id:"ml/interview",title:"\u7b97\u6cd5\u5de5\u7a0b\u5e08\u9762\u7ecf",description:"1. \u5c40\u90e8\u8fde\u63a5\u3002\u6bd4\u8d77\u5168\u8fde\u63a5\uff0c\u5c40\u90e8\u8fde\u63a5\u4f1a\u5927\u5927\u51cf\u5c11\u7f51\u7edc\u7684\u53c2\u6570\u3002\u5728\u4e8c\u7ef4\u56fe\u50cf\u4e2d\uff0c\u5c40\u90e8\u50cf\u7d20\u7684\u5173\u8054\u6027\u5f88\u5f3a\uff0c\u8bbe\u8ba1\u5c40\u90e8\u8fde\u63a5\u4fdd\u8bc1\u4e86\u5377\u79ef\u7f51\u7edc\u5bf9\u56fe\u50cf\u5c40\u90e8\u7279\u5f81\u7684\u5f3a\u54cd\u5e94\u80fd\u529b\u3002",source:"@site/docs/ml/interview.md",sourceDirName:"ml",slug:"/ml/interview",permalink:"/docs/ml/interview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/interview.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1699283272,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{title:"\u7b97\u6cd5\u5de5\u7a0b\u5e08\u9762\u7ecf",tags:["machine learning","interview"]},sidebar:"tutorialSidebar",previous:{title:"TIDL",permalink:"/docs/ml/framework/tidl"},next:{title:"onnx\u64cd\u4f5c",permalink:"/docs/ml/onnx"}},p={},c=[{value:"BN\u5c42\u8bad\u7ec3\u548c\u6d4b\u8bd5\u7684\u4e0d\u540c",id:"bn\u5c42\u8bad\u7ec3\u548c\u6d4b\u8bd5\u7684\u4e0d\u540c",level:2},{value:"BN\u8bad\u7ec3\u65f6\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6574\u4e2a\u8bad\u7ec3\u96c6\u7684\u5747\u503c\u548c\u65b9\u5dee\uff1f",id:"bn\u8bad\u7ec3\u65f6\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6574\u4e2a\u8bad\u7ec3\u96c6\u7684\u5747\u503c\u548c\u65b9\u5dee",level:2},{value:"BN\u5c42\u7528\u5728\u54ea\u91cc\uff1f",id:"bn\u5c42\u7528\u5728\u54ea\u91cc",level:2},{value:"BN\u5c42\u7684\u53c2\u6570\u91cf",id:"bn\u5c42\u7684\u53c2\u6570\u91cf",level:2}],m={toc:c},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5377\u79ef\u6709\u4ec0\u4e48\u7279\u70b9"},"\u5377\u79ef\u6709\u4ec0\u4e48\u7279\u70b9"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c40\u90e8\u8fde\u63a5\u3002\u6bd4\u8d77\u5168\u8fde\u63a5\uff0c\u5c40\u90e8\u8fde\u63a5\u4f1a\u5927\u5927\u51cf\u5c11\u7f51\u7edc\u7684\u53c2\u6570\u3002\u5728\u4e8c\u7ef4\u56fe\u50cf\u4e2d\uff0c\u5c40\u90e8\u50cf\u7d20\u7684\u5173\u8054\u6027\u5f88\u5f3a\uff0c\u8bbe\u8ba1\u5c40\u90e8\u8fde\u63a5\u4fdd\u8bc1\u4e86\u5377\u79ef\u7f51\u7edc\u5bf9\u56fe\u50cf\u5c40\u90e8\u7279\u5f81\u7684\u5f3a\u54cd\u5e94\u80fd\u529b\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6743\u503c\u5171\u4eab\u3002\u53c2\u6570\u5171\u4eab\u4e5f\u80fd\u51cf\u5c11\u6574\u4f53\u53c2\u6570\u91cf\uff0c\u589e\u5f3a\u4e86\u7f51\u7edc\u8bad\u7ec3\u7684\u6548\u7387\u3002\u4e00\u4e2a\u5377\u79ef\u6838\u7684\u53c2\u6570\u6743\u91cd\u88ab\u6574\u5f20\u56fe\u7247\u5171\u4eab\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u56fe\u50cf\u5185\u4f4d\u7f6e\u7684\u4e0d\u540c\u800c\u6539\u53d8\u5377\u79ef\u6838\u5185\u7684\u53c2\u6570\u6743\u91cd\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u91c7\u6837\u3002\u4e0b\u91c7\u6837\u80fd\u9010\u6e10\u964d\u4f4e\u56fe\u50cf\u5206\u8fa8\u7387\uff0c\u5b9e\u73b0\u4e86\u6570\u636e\u7684\u964d\u7ef4\uff0c\u5e76\u4f7f\u6d45\u5c42\u7684\u5c40\u90e8\u7279\u5f81\u7ec4\u5408\u6210\u4e3a\u6df1\u5c42\u7684\u7279\u5f81\u3002\u4e0b\u91c7\u6837\u8fd8\u80fd\u4f7f\u8ba1\u7b97\u8d44\u6e90\u8017\u8d39\u53d8\u5c11\uff0c\u52a0\u901f\u6a21\u578b\u8bad\u7ec3\uff0c\u4e5f\u80fd\u6709\u6548\u63a7\u5236\u8fc7\u62df\u5408\u3002"))),(0,i.kt)("h1",{id:"\u4e0d\u540c\u5c42\u6b21\u7684\u5377\u79ef\u90fd\u63d0\u53d6\u4ec0\u4e48\u7c7b\u578b\u7684\u7279\u5f81"},"\u4e0d\u540c\u5c42\u6b21\u7684\u5377\u79ef\u90fd\u63d0\u53d6\u4ec0\u4e48\u7c7b\u578b\u7684\u7279\u5f81\uff1f"),(0,i.kt)("p",null,"\u6d45\u5c42\u5377\u79ef  \u63d0\u53d6\u8fb9\u7f18\u7279\u5f81"),(0,i.kt)("p",null,"\u4e2d\u5c42\u5377\u79ef  \u63d0\u53d6\u5c40\u90e8\u7279\u5f81"),(0,i.kt)("p",null,"\u6df1\u5c42\u5377\u79ef  \u63d0\u53d6\u5168\u5c40\u7279\u5f81"),(0,i.kt)("h1",{id:"\u5377\u79ef\u6838\u5927\u5c0f\u5982\u4f55\u9009\u53d6"},"\u5377\u79ef\u6838\u5927\u5c0f\u5982\u4f55\u9009\u53d6"),(0,i.kt)("p",null,"\u6700\u5e38\u7528\u7684\u662f3","*","3\u5927\u5c0f\u7684\u5377\u79ef\u6838\uff0c\u4e24\u4e2a3","*","3\u5377\u79ef\u6838\u548c\u4e00\u4e2a5","*","5\u5377\u79ef\u6838\u7684\u611f\u53d7\u91ce\u76f8\u540c\uff0c\u4f46\u662f\u51cf\u5c11\u4e86\u53c2\u6570\u91cf\u548c\u8ba1\u7b97\u91cf\uff0c\u52a0\u5feb\u4e86\u6a21\u578b\u8bad\u7ec3\u3002\u4e0e\u6b64\u540c\u65f6\u7531\u4e8e\u5377\u79ef\u6838\u7684\u589e\u52a0\uff0c\u6a21\u578b\u7684\u975e\u7ebf\u6027\u8868\u8fbe\u80fd\u529b\u5927\u5927\u589e\u5f3a\u3002"),(0,i.kt)("h1",{id:"\u5377\u79ef\u611f\u53d7\u91ce\u7684\u76f8\u5173\u6982\u5ff5"},"\u5377\u79ef\u611f\u53d7\u91ce\u7684\u76f8\u5173\u6982\u5ff5"),(0,i.kt)("p",null,"\u611f\u53d7\u91ce\u7684\u4f5c\u7528\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e00\u822c\u6765\u8bf4\u611f\u53d7\u91ce\u8d8a\u5927\u8d8a\u597d\uff0c\u6bd4\u5982\u5206\u7c7b\u4efb\u52a1\u4e2d\u6700\u540e\u5377\u79ef\u5c42\u7684\u611f\u53d7\u91ce\u8981\u5927\u4e8e\u8f93\u5165\u56fe\u50cf\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u611f\u53d7\u91ce\u8db3\u591f\u5927\u65f6\uff0c\u88ab\u5ffd\u7565\u7684\u4fe1\u606f\u5c31\u8f83\u5c11\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u6807\u68c0\u6d4b\u4efb\u52a1\u4e2d\u8bbe\u7f6eanchor\u8981\u5bf9\u9f50\u611f\u53d7\u91ce\uff0canchor\u592a\u5927\u6216\u8005\u504f\u79bb\u611f\u53d7\u91ce\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u4e00\u5b9a\u7684\u5f71\u54cd\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(415).Z,width:"1080",height:"896"})),(0,i.kt)("h1",{id:"\u8f6c\u7f6e\u5377\u79ef\u7684\u4f5c\u7528"},"\u8f6c\u7f6e\u5377\u79ef\u7684\u4f5c\u7528\uff1f"),(0,i.kt)("p",null,"\u8f6c\u7f6e\u5377\u79ef\u901a\u8fc7\u8bad\u7ec3\u8fc7\u7a0b\u5b66\u4e60\u5230\u6700\u4f18\u7684\u4e0a\u91c7\u6837\u65b9\u5f0f\uff0c\u6765\u4ee3\u66ff\u4f20\u7edf\u7684\u63d2\u503c\u4e0a\u91c7\u6837\u65b9\u6cd5\uff0c\u4ee5\u63d0\u5347\u56fe\u50cf\u5206\u5272\uff0c\u56fe\u50cf\u878d\u5408\uff0cGAN\u7b49\u7279\u5b9a\u4efb\u52a1\u7684\u6027\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3722).Z,width:"691",height:"1257"})),(0,i.kt)("h1",{id:"\u7a7a\u6d1e\u5377\u79ef\u7684\u4f5c\u7528"},"\u7a7a\u6d1e\u5377\u79ef\u7684\u4f5c\u7528"),(0,i.kt)("p",null,"\u7a7a\u6d1e\u5377\u79ef\u7684\u4f5c\u7528\u662f\u5728\u4e0d\u8fdb\u884c\u6c60\u5316\u64cd\u4f5c\u635f\u5931\u4fe1\u606f\u7684\u60c5\u51b5\u4e0b\uff0c\u589e\u5927\u611f\u53d7\u91ce\uff0c\u8ba9\u6bcf\u4e2a\u5377\u79ef\u8f93\u51fa\u90fd\u5305\u542b\u8f83\u5927\u8303\u56f4\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u7a7a\u6d1e\u5377\u79ef\u6709\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u8bbe\u7f6edilation rate\uff0c\u5176\u5728\u5377\u79ef\u6838\u4e2d\u586b\u5145dilation rate\u4e2a0\uff0c\u56e0\u6b64\uff0c\u5f53\u8bbe\u7f6e\u4e0d\u540cdilation rate\u65f6\uff0c\u611f\u53d7\u91ce\u5c31\u4f1a\u4e0d\u4e00\u6837\uff0c\u4e5f\u83b7\u53d6\u4e86\u591a\u5c3a\u5ea6\u4fe1\u606f\u3002"),(0,i.kt)("h1",{id:"bn\u5c42\u9762\u8bd5\u9ad8\u9891\u95ee\u9898\u5927\u6c47\u603b"},"BN\u5c42\u9762\u8bd5\u9ad8\u9891\u95ee\u9898\u5927\u6c47\u603b"),(0,i.kt)("p",null,"\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u4e2d\u7684\u4e00\u4e2a\u7ecf\u5178\u5047\u8bbe\u662f\u201c\u6e90\u7a7a\u95f4\uff08source domain\uff09\u548c\u76ee\u6807\u7a7a\u95f4\uff08target domain\uff09\u7684\u6570\u636e\u5206\u5e03\uff08distribution\uff09\u662f\u4e00\u81f4\u7684\u201d\u3002\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u90a3\u4e48\u5c31\u51fa\u73b0\u4e86\u65b0\u7684\u673a\u5668\u5b66\u4e60\u95ee\u9898\uff0c\u5982transfer learning/domain adaptation\u7b49\u3002\u800ccovariate shift\u5c31\u662f\u5206\u5e03\u4e0d\u4e00\u81f4\u5047\u8bbe\u4e4b\u4e0b\u7684\u4e00\u4e2a\u5206\u652f\u95ee\u9898\uff0c\u5b83\u662f\u6307\u6e90\u7a7a\u95f4\u548c\u76ee\u6807\u7a7a\u95f4\u7684\u6761\u4ef6\u6982\u7387\u662f\u4e00\u81f4\u7684\uff0c\u4f46\u662f\u5176\u8fb9\u7f18\u6982\u7387\u4e0d\u540c\u3002\u5bf9\u4e8e\u795e\u7ecf\u7f51\u7edc\u7684\u5404\u5c42\u8f93\u51fa\uff0c\u7531\u4e8e\u5b83\u4eec\u7ecf\u8fc7\u4e86\u5c42\u5185\u5377\u79ef\u64cd\u4f5c\uff0c\u5176\u5206\u5e03\u663e\u7136\u4e0e\u5404\u5c42\u5bf9\u5e94\u7684\u8f93\u5165\u4fe1\u53f7\u5206\u5e03\u4e0d\u540c\uff0c\u800c\u4e14\u5dee\u5f02\u4f1a\u968f\u7740\u7f51\u7edc\u6df1\u5ea6\u589e\u5927\u800c\u589e\u5927\uff0c\u4f46\u662f\u5b83\u4eec\u6240\u80fd\u4ee3\u8868\u7684label\u4ecd\u7136\u662f\u4e0d\u53d8\u7684\uff0c\u8fd9\u4fbf\u7b26\u5408\u4e86covariate shift\u7684\u5b9a\u4e49\u3002"),(0,i.kt)("p",null,"\u56e0\u4e3a\u795e\u7ecf\u7f51\u7edc\u5728\u505a\u975e\u7ebf\u6027\u53d8\u6362\u524d\u7684\u6fc0\u6d3b\u8f93\u5165\u503c\u968f\u7740\u7f51\u7edc\u6df1\u5ea6\u52a0\u6df1\uff0c\u5176\u5206\u5e03\u9010\u6e10\u53d1\u751f\u504f\u79fb\u6216\u8005\u53d8\u52a8\uff08\u5373\u4e0a\u8ff0\u7684covariate shift\uff09\u3002\u4e4b\u6240\u4ee5\u8bad\u7ec3\u6536\u655b\u6162\uff0c\u4e00\u822c\u662f\u6574\u4f53\u5206\u5e03\u9010\u6e10\u5f80\u975e\u7ebf\u6027\u51fd\u6570\u7684\u53d6\u503c\u533a\u95f4\u7684\u4e0a\u4e0b\u9650\u4e24\u7aef\u9760\u8fd1\uff08\u6bd4\u5982sigmoid\uff09\uff0c\u6240\u4ee5\u8fd9\u5bfc\u81f4\u53cd\u5411\u4f20\u64ad\u65f6\u4f4e\u5c42\u795e\u7ecf\u7f51\u7edc\u7684\u68af\u5ea6\u6d88\u5931\uff0c\u8fd9\u662f\u8bad\u7ec3\u6df1\u5c42\u795e\u7ecf\u7f51\u7edc\u6536\u655b\u8d8a\u6765\u8d8a\u6162\u7684\u672c\u8d28\u539f\u56e0\u3002\u800cBN\u5c31\u662f\u901a\u8fc7\u4e00\u5b9a\u7684\u6b63\u5219\u5316\u624b\u6bb5\uff0c\u628a\u6bcf\u5c42\u795e\u7ecf\u7f51\u7edc\u4efb\u610f\u795e\u7ecf\u5143\u8fd9\u4e2a\u8f93\u5165\u503c\u7684\u5206\u5e03\u5f3a\u884c\u62c9\u56de\u5230\u5747\u503c\u4e3a0\u65b9\u5dee\u4e3a1\u7684\u6807\u51c6\u6b63\u6001\u5206\u5e03\uff0c\u907f\u514d\u56e0\u4e3a\u6fc0\u6d3b\u51fd\u6570\u5bfc\u81f4\u7684\u68af\u5ea6\u5f25\u6563\u95ee\u9898\u3002\u6240\u4ee5\u4e0e\u5176\u8bf4BN\u7684\u4f5c\u7528\u662f\u7f13\u89e3covariate shift\uff0c\u4e5f\u53ef\u4ee5\u8bf4BN\u53ef\u7f13\u89e3\u68af\u5ea6\u5f25\u6563\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"bn\u5c42\u8bad\u7ec3\u548c\u6d4b\u8bd5\u7684\u4e0d\u540c"},"BN\u5c42\u8bad\u7ec3\u548c\u6d4b\u8bd5\u7684\u4e0d\u540c"),(0,i.kt)("p",null,"\u5728\u8bad\u7ec3\u9636\u6bb5\uff0cBN\u5c42\u662f\u5bf9\u6bcf\u4e2abatch\u7684\u8bad\u7ec3\u6570\u636e\u8fdb\u884c\u6807\u51c6\u5316\uff0c\u5373\u7528\u6bcf\u4e00\u6279\u6570\u636e\u7684\u5747\u503c\u548c\u65b9\u5dee\u3002\uff08\u6bcf\u4e00\u6279\u6570\u636e\u7684\u65b9\u5dee\u548c\u6807\u51c6\u5dee\u4e0d\u540c\uff09"),(0,i.kt)("p",null,"\u800c\u5728\u6d4b\u8bd5\u9636\u6bb5\uff0c\u6211\u4eec\u4e00\u822c\u53ea\u8f93\u5165\u4e00\u4e2a\u6d4b\u8bd5\u6837\u672c\uff0c\u5e76\u6ca1\u6709batch\u7684\u6982\u5ff5\u3002\u56e0\u6b64\u8fd9\u4e2a\u65f6\u5019\u7528\u7684\u5747\u503c\u548c\u65b9\u5dee\u662f\u6574\u4e2a\u6570\u636e\u96c6\u8bad\u7ec3\u540e\u7684\u5747\u503c\u548c\u65b9\u5dee\uff0c\u53ef\u4ee5\u901a\u8fc7\u6ed1\u52a8\u5e73\u5747\u6cd5\u6c42\u5f97\uff1a\n",(0,i.kt)("img",{alt:"Alt text",src:n(2626).Z,width:"444",height:"194"})),(0,i.kt)("p",null,"\u4e0a\u9762\u5f0f\u5b50\u7b80\u5355\u7406\u89e3\u5c31\u662f\uff1a\u5bf9\u4e8e\u5747\u503c\u6765\u8bf4\u76f4\u63a5\u8ba1\u7b97\u6240\u6709batch u\u503c\u7684\u5e73\u5747\u503c\uff1b\u7136\u540e\u5bf9\u4e8e\u6807\u51c6\u504f\u5dee\u91c7\u7528\u6bcf\u4e2abatch \u03c3\u7684\u65e0\u504f\u4f30\u8ba1\u3002"),(0,i.kt)("p",null,"\u5728\u6d4b\u8bd5\u65f6\uff0cBN\u4f7f\u7528\u7684\u516c\u5f0f\u662f\uff1a\n",(0,i.kt)("img",{alt:"Alt text",src:n(9334).Z,width:"802",height:"176"})),(0,i.kt)("h2",{id:"bn\u8bad\u7ec3\u65f6\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6574\u4e2a\u8bad\u7ec3\u96c6\u7684\u5747\u503c\u548c\u65b9\u5dee"},"BN\u8bad\u7ec3\u65f6\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6574\u4e2a\u8bad\u7ec3\u96c6\u7684\u5747\u503c\u548c\u65b9\u5dee\uff1f"),(0,i.kt)("p",null,"\u56e0\u4e3a\u7528\u6574\u4e2a\u8bad\u7ec3\u96c6\u7684\u5747\u503c\u548c\u65b9\u5dee\u5bb9\u6613\u8fc7\u62df\u5408\uff0c\u5bf9\u4e8eBN\uff0c\u5176\u5b9e\u5c31\u662f\u5bf9\u6bcf\u4e00batch\u6570\u636e\u6807\u51c6\u5316\u5230\u4e00\u4e2a\u76f8\u540c\u7684\u5206\u5e03\uff0c\u800c\u4e0d\u540cbatch\u6570\u636e\u7684\u5747\u503c\u548c\u65b9\u5dee\u4f1a\u6709\u4e00\u5b9a\u7684\u5dee\u522b\uff0c\u800c\u4e0d\u662f\u56fa\u5b9a\u7684\u503c\uff0c\u8fd9\u4e2a\u5dee\u522b\u80fd\u591f\u589e\u52a0\u6a21\u578b\u7684\u9c81\u68d2\u6027\uff0c\u4e5f\u4f1a\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u51cf\u5c11\u8fc7\u62df\u5408\u3002"),(0,i.kt)("h2",{id:"bn\u5c42\u7528\u5728\u54ea\u91cc"},"BN\u5c42\u7528\u5728\u54ea\u91cc\uff1f"),(0,i.kt)("p",null,"\u5728CNN\u4e2d\uff0cBN\u5c42\u5e94\u8be5\u7528\u5728\u975e\u7ebf\u6027\u6fc0\u6d3b\u51fd\u6570\u524d\u9762\u3002\u7531\u4e8e\u795e\u7ecf\u7f51\u7edc\u9690\u85cf\u5c42\u7684\u8f93\u5165\u662f\u4e0a\u4e00\u5c42\u975e\u7ebf\u6027\u6fc0\u6d3b\u51fd\u6570\u7684\u8f93\u51fa\uff0c\u5728\u8bad\u7ec3\u521d\u671f\u5176\u5206\u5e03\u8fd8\u5728\u5267\u70c8\u6539\u53d8\uff0c\u6b64\u65f6\u7ea6\u675f\u5176\u4e00\u9636\u77e9\u548c\u4e8c\u9636\u77e9\u65e0\u6cd5\u5f88\u597d\u5730\u7f13\u89e3 Covariate Shift\uff1b\u800cBN\u7684\u5206\u5e03\u66f4\u63a5\u8fd1\u6b63\u6001\u5206\u5e03\uff0c\u9650\u5236\u5176\u4e00\u9636\u77e9\u548c\u4e8c\u9636\u77e9\u80fd\u4f7f\u8f93\u5165\u5230\u6fc0\u6d3b\u51fd\u6570\u7684\u503c\u5206\u5e03\u66f4\u52a0\u7a33\u5b9a\u3002"),(0,i.kt)("h2",{id:"bn\u5c42\u7684\u53c2\u6570\u91cf"},"BN\u5c42\u7684\u53c2\u6570\u91cf"),(0,i.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u03b3\u548c\u03b2\u662f\u9700\u8981\u5b66\u4e60\u7684\u53c2\u6570\uff0c\u800cBN\u7684\u672c\u8d28\u5c31\u662f\u5229\u7528\u4f18\u5316\u5b66\u4e60\u6539\u53d8\u65b9\u5dee\u548c\u5747\u503c\u7684\u5927\u5c0f\u3002\u5728CNN\u4e2d\uff0c\u56e0\u4e3a\u7f51\u7edc\u7684\u7279\u5f81\u662f\u5bf9\u5e94\u5230\u4e00\u6574\u5f20\u7279\u5f81\u56fe\u4e0a\u7684\uff0c\u6240\u4ee5\u505aBN\u7684\u65f6\u5019\u4e5f\u662f\u4ee5\u7279\u5f81\u56fe\u4e3a\u5355\u4f4d\u800c\u4e0d\u662f\u6309\u7167\u5404\u4e2a\u7ef4\u5ea6\u3002\u6bd4\u5982\u5728\u67d0\u4e00\u5c42\uff0cBatch\u5927\u5c0f\u4e3a\uff0c\u90a3\u4e48\u505aBN\u7684\u53c2\u6570\u91cf\u4e3a\u3002"),(0,i.kt)("h1",{id:"\u76ee\u6807\u68c0\u6d4b\u4e2diou\u7684\u76f8\u5173\u6982\u5ff5\u4e0e\u8ba1\u7b97"},"\u76ee\u6807\u68c0\u6d4b\u4e2dIOU\u7684\u76f8\u5173\u6982\u5ff5\u4e0e\u8ba1\u7b97"),(0,i.kt)("p",null,"IoU\uff08Intersection over Union\uff09\u5373\u4ea4\u5e76\u6bd4\uff0c\u662f\u76ee\u6807\u68c0\u6d4b\u4efb\u52a1\u4e2d\u4e00\u4e2a\u91cd\u8981\u7684\u6a21\u5757\uff0c\u5176\u662fGT bbox\u4e0epred bbox\u4ea4\u96c6\u7684\u9762\u79ef / \u4e8c\u8005\u5e76\u96c6\u7684\u9762\u79ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def compute_iou(rect1,rect2):\n  # (y0,x0,y1,x1) = (top,left,bottom,right)\n  S_rect1 = (rect1[2] - rect1[0]) * (rect1[3] - rect1[1])\n  S_rect2 = (rect2[2] - rect2[0]) * (rect2[3] - rect1[1])\n\n  sum_all = S_rect1 + S_rect2\n  left_line = max(rect1[1],rect2[1])\n  right_line = min(rect1[3],rect2[3])\n  top_line = max(rect1[0],rect2[0])\n  bottom_line = min(rect1[2],rect2[2])\n\n  if left_line >= right_line or top_line >= bottom_line:\n    return 0\n  else:\n    intersect = (right_line - left_line) * (bottom_line - top_line)\n    return (intersect / (sum_area - intersect)) * 1.0\n")),(0,i.kt)("h1",{id:"\u76ee\u6807\u68c0\u6d4b\u4e2dnms\u7684\u76f8\u5173\u6982\u5ff5\u4e0e\u8ba1\u7b97"},"\u76ee\u6807\u68c0\u6d4b\u4e2dNMS\u7684\u76f8\u5173\u6982\u5ff5\u4e0e\u8ba1\u7b97"),(0,i.kt)("p",null,"\u975e\u6781\u5927\u503c\u6291\u5236\uff08NMS\uff09\u6d41\u7a0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9996\u5148\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e24\u4e2a\u503c\uff1a\u4e00\u4e2aScore\u7684\u9608\u503c\uff0c\u4e00\u4e2aIOU\u7684\u9608\u503c\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u6bcf\u7c7b\u5bf9\u8c61\uff0c\u904d\u5386\u8be5\u7c7b\u7684\u6240\u6709\u5019\u9009\u6846\uff0c\u8fc7\u6ee4\u6389Score\u503c\u4f4e\u4e8eScore\u9608\u503c\u7684\u5019\u9009\u6846\uff0c\u5e76\u6839\u636e\u5019\u9009\u6846\u7684\u7c7b\u522b\u5206\u7c7b\u6982\u7387\u8fdb\u884c\u6392\u5e8f\uff1a$A<B<C<D<E<F$\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5148\u6807\u8bb0\u6700\u5927\u6982\u7387\u77e9\u5f62\u6846F\u662f\u6211\u4eec\u8981\u4fdd\u7559\u4e0b\u6765\u7684\u5019\u9009\u6846\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u6700\u5927\u6982\u7387\u77e9\u5f62\u6846F\u5f00\u59cb\uff0c\u5206\u522b\u5224\u65adA\uff5eE\u4e0eF\u7684\u4ea4\u5e76\u6bd4\uff08IOU\uff09\u662f\u5426\u5927\u4e8eIOU\u7684\u9608\u503c\uff0c\u5047\u8bbeB\u3001D\u4e0eF\u7684\u91cd\u53e0\u5ea6\u8d85\u8fc7IOU\u9608\u503c\uff0c\u90a3\u4e48\u5c31\u53bb\u9664B\u3001D\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u5269\u4e0b\u7684\u77e9\u5f62\u6846A\u3001C\u3001E\u4e2d\uff0c\u9009\u62e9\u6982\u7387\u6700\u5927\u7684E\uff0c\u6807\u8bb0\u4e3a\u8981\u4fdd\u7559\u4e0b\u6765\u7684\u5019\u9009\u6846\uff0c\u7136\u540e\u5224\u65adE\u4e0eA\u3001C\u7684\u91cd\u53e0\u5ea6\uff0c\u53bb\u9664\u91cd\u53e0\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u9608\u503c\u7684\u77e9\u5f62\u6846\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c31\u8fd9\u6837\u91cd\u590d\u4e0b\u53bb\uff0c\u76f4\u5230\u5269\u4e0b\u7684\u77e9\u5f62\u6846\u6ca1\u6709\u4e86\uff0c\u5e76\u6807\u8bb0\u6240\u6709\u8981\u4fdd\u7559\u4e0b\u6765\u7684\u77e9\u5f62\u6846\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u7c7b\u5904\u7406\u5b8c\u6bd5\u540e\uff0c\u8fd4\u56de\u6b65\u9aa4\u4e8c\u91cd\u65b0\u5904\u7406\u4e0b\u4e00\u7c7b\u5bf9\u8c61\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\n\ndef py_cpu_nms(dets, thresh):\n  #x1\u3001y1\uff08\u5de6\u4e0b\u89d2\u5750\u6807\uff09\u3001x2\u3001y2\uff08\u53f3\u4e0a\u89d2\u5750\u6807\uff09\u4ee5\u53cascore\u7684\u503c\n  x1 = dets[:, 0]\n  y1 = dets[:, 1]\n  x2 = dets[:, 2]\n  y2 = dets[:, 3]\n  scores = dets[:, 4]\n\n  #\u6bcf\u4e00\u4e2a\u5019\u9009\u6846\u7684\u9762\u79ef\n  areas = (x2 - x1 + 1) * (y2 - y1 + 1)\n  #\u6309\u7167score\u964d\u5e8f\u6392\u5e8f\uff08\u4fdd\u5b58\u7684\u662f\u7d22\u5f15\uff09\n  order = scores.argsort()[::-1]\n\n  keep = []\n  while order.size > 0:\n    i = order[0]\n    keep.append(i)\n    #\u8ba1\u7b97\u5f53\u524d\u6982\u7387\u6700\u5927\u77e9\u5f62\u6846\u4e0e\u5176\u4ed6\u77e9\u5f62\u6846\u7684\u76f8\u4ea4\u6846\u7684\u5750\u6807\uff0c\u4f1a\u7528\u5230numpy\u7684broadcast\u673a\u5236\uff0c\u5f97\u5230\u5411\u91cf\n    xx1 = np.maximum(x1[i], x1[order[1:]])\n    yy1 = np.maximum(y1[i], y1[order[1:]])\n    xx2 = np.minimum(x2[i], x2[order[1:]])\n    yy2 = np.minimum(y2[i], y2[order[1:]])\n\n    #\u8ba1\u7b97\u76f8\u4ea4\u6846\u7684\u9762\u79ef\uff0c\u6ce8\u610f\u77e9\u5f62\u6846\u4e0d\u76f8\u4ea4\u65f6w\u6216h\u7b97\u51fa\u6765\u4f1a\u662f\u8d1f\u6570\uff0c\u75280\u4ee3\u66ff\n    w = np.maximum(0.0, xx2 - xx1 + 1)\n    h = np.maximum(0.0, yy2 - yy1 + 1)\n    inter = w * h\n    #\u8ba1\u7b97\u91cd\u53e0\u5ea6IOU\uff1a\u91cd\u53e0\u9762\u79ef / \uff08\u9762\u79ef1 + \u9762\u79ef2 - \u91cd\u53e0\u9762\u79ef\uff09\n    ovr = inter / (areas[i] + areas[order[1:]] - inter)\n\n    #\u627e\u5230\u91cd\u53e0\u5ea6\u4e0d\u9ad8\u4e8e\u9608\u503c\u7684\u77e9\u5f62\u6846\u7d22\u5f15\n    inds = np.where(ovr <= thresh)[0]\n    # \u5c06order\u5e8f\u5217\u66f4\u65b0\uff0c\u7531\u4e8e\u524d\u9762\u5f97\u5230\u7684\u77e9\u5f62\u6846\u7d22\u5f15\u8981\u6bd4\u77e9\u5f62\u6846\u5728\u539forder\u5e8f\u5217\u4e2d\u7684\u7d22\u5f15\u5c0f1\uff0c\u6240\u4ee5\u8981\u52a01\u64cd\u4f5c\n    order = order[inds + 1]\n\n  return keep\n")),(0,i.kt)("h1",{id:"\u54ea\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u63d0\u5347\u5c0f\u76ee\u6807\u68c0\u6d4b\u7684\u6548\u679c"},"\u54ea\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u63d0\u5347\u5c0f\u76ee\u6807\u68c0\u6d4b\u7684\u6548\u679c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u9ad8\u56fe\u50cf\u5206\u8fa8\u7387\u3002\u5c0f\u76ee\u6807\u5728\u8fb9\u754c\u6846\u4e2d\u53ef\u80fd\u53ea\u5305\u542b\u51e0\u4e2a\u50cf\u7d20\uff0c\u90a3\u4e48\u80fd\u901a\u8fc7\u63d0\u9ad8\u56fe\u50cf\u7684\u5206\u8fa8\u7387\u4ee5\u589e\u52a0\u5c0f\u76ee\u6807\u7684\u7279\u5f81\u7684\u4e30\u5bcc\u5ea6\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u9ad8\u6a21\u578b\u7684\u8f93\u5165\u5206\u8fa8\u7387\u3002\u8fd9\u662f\u4e00\u4e2a\u6548\u679c\u8f83\u597d\u7684\u901a\u7528\u65b9\u6cd5\uff0c\u4f46\u662f\u4f1a\u5e26\u6765\u6a21\u578binference\u901f\u5ea6\u53d8\u6162\u7684\u95ee\u9898\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5e73\u94fa\u56fe\u50cf\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u589e\u5f3a\u3002\u5c0f\u76ee\u6807\u68c0\u6d4b\u589e\u5f3a\u5305\u62ec\u968f\u673a\u88c1\u526a\u3001\u968f\u673a\u65cb\u8f6c\u548c\u9576\u5d4c\u589e\u5f3a\u7b49\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u81ea\u52a8\u5b66\u4e60anchor\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7c7b\u522b\u4f18\u5316\u3002"))),(0,i.kt)("h1",{id:"mobilenet\u7cfb\u5217\u6a21\u578b\u7684\u7ed3\u6784\u548c\u7279\u70b9"},"MobileNet\u7cfb\u5217\u6a21\u578b\u7684\u7ed3\u6784\u548c\u7279\u70b9\uff1f"),(0,i.kt)("p",null,"Depthwise separable\u5377\u79ef\u662f\u7531Depthwise\u5377\u79ef\u548cPointwise\u5377\u79ef\u6784\u6210\u3002Depthwise\u5377\u79ef(DW)\u80fd\u6709\u6548\u51cf\u5c11\u53c2\u6570\u6570\u91cf\u5e76\u63d0\u5347\u8fd0\u7b97\u901f\u5ea6\u3002\u4f46\u662f\u7531\u4e8e\u6bcf\u4e2a\u7279\u5f81\u56fe\u53ea\u88ab\u4e00\u4e2a\u5377\u79ef\u6838\u5377\u79ef\uff0c\u56e0\u6b64\u7ecf\u8fc7DW\u8f93\u51fa\u7684\u7279\u5f81\u56fe\u53ea\u5305\u542b\u8f93\u5165\u7279\u5f81\u56fe\u7684\u5168\u90e8\u4fe1\u606f\uff0c\u800c\u4e14\u7279\u5f81\u4e4b\u95f4\u7684\u4fe1\u606f\u4e0d\u80fd\u8fdb\u884c\u4ea4\u6d41\uff0c\u5bfc\u81f4\u201c\u4fe1\u606f\u6d41\u901a\u4e0d\u7545\u201d\u3002Pointwise\u5377\u79ef(PW)\u5b9e\u73b0\u901a\u9053\u7279\u5f81\u4fe1\u606f\u4ea4\u6d41\uff0c\u89e3\u51b3DW\u5377\u79ef\u5bfc\u81f4\u201c\u4fe1\u606f\u6d41\u901a\u4e0d\u7545\u201d\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,"MobileNetV2\u5728MobileNetV1\u7684\u57fa\u7840\u4e0a\u5f15\u5165\u4e86Linear Bottleneck \u548c Inverted Residuals\u3002"),(0,i.kt)("p",null,"MobileNetV2\u4f7f\u7528Linear Bottleneck(\u7ebf\u6027\u53d8\u6362)\u6765\u4ee3\u66ff\u539f\u672c\u7684\u975e\u7ebf\u6027\u6fc0\u6d3b\u51fd\u6570\uff0c\u6765\u6355\u83b7\u611f\u5174\u8da3\u7684\u6d41\u5f62\u3002\u5b9e\u9a8c\u8bc1\u660e\uff0c\u4f7f\u7528Linear Bottleneck\u53ef\u4ee5\u5728\u5c0f\u7f51\u7edc\u4e2d\u8f83\u597d\u5730\u4fdd\u7559\u6709\u7528\u7279\u5f81\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"Inverted Residuals\u4e0e\u7ecf\u5178ResNet\u6b8b\u5dee\u6a21\u5757\u7684\u901a\u9053\u95f4\u64cd\u4f5c\u6b63\u597d\u76f8\u53cd\u3002\u7531\u4e8eMobileNetV2\u4f7f\u7528\u4e86Linear Bottleneck\u7ed3\u6784\uff0c\u4f7f\u5176\u63d0\u53d6\u7684\u7279\u5f81\u7ef4\u5ea6\u6574\u4f53\u504f\u4f4e\uff0c\u5982\u679c\u53ea\u662f\u4f7f\u7528\u4f4e\u7ef4\u7684feature map\u6548\u679c\u5e76\u4e0d\u4f1a\u597d\u3002\u5982\u679c\u5377\u79ef\u5c42\u90fd\u662f\u4f7f\u7528\u4f4e\u7ef4\u7684feature map\u6765\u63d0\u53d6\u7279\u5f81\u7684\u8bdd\uff0c\u90a3\u4e48\u5c31\u6ca1\u6709\u529e\u6cd5\u63d0\u53d6\u5230\u6574\u4f53\u7684\u8db3\u591f\u591a\u7684\u4fe1\u606f\u3002\u5982\u679c\u60f3\u8981\u63d0\u53d6\u5168\u9762\u7684\u7279\u5f81\u4fe1\u606f\u7684\u8bdd\uff0c\u6211\u4eec\u5c31\u9700\u8981\u6709\u9ad8\u7ef4\u7684feature map\u6765\u8fdb\u884c\u8865\u5145\uff0c\u4ece\u800c\u8fbe\u5230\u5e73\u8861\u3002"),(0,i.kt)("h1",{id:"vitvision-transformer\u6a21\u578b\u7684\u7ed3\u6784\u548c\u7279\u70b9"},"ViT\uff08Vision Transformer\uff09\u6a21\u578b\u7684\u7ed3\u6784\u548c\u7279\u70b9"),(0,i.kt)("p",null,"ViT\u6a21\u578b\u7279\u70b9\uff1a1.ViT\u76f4\u63a5\u5c06\u6807\u51c6\u7684Transformer\u7ed3\u6784\u76f4\u63a5\u7528\u4e8e\u56fe\u50cf\u5206\u7c7b\uff0c\u5176\u6a21\u578b\u7ed3\u6784\u4e2d\u4e0d\u542bCNN\u30022.\u4e3a\u4e86\u6ee1\u8db3Transformer\u8f93\u5165\u7ed3\u6784\u8981\u6c42\uff0c\u8f93\u5165\u7aef\u5c06\u6574\u4e2a\u56fe\u50cf\u62c6\u5206\u6210\u5c0f\u56fe\u50cf\u5757\uff0c\u7136\u540e\u5c06\u8fd9\u4e9b\u5c0f\u56fe\u50cf\u5757\u7684\u7ebf\u6027\u5d4c\u5165\u5e8f\u5217\u8f93\u5165\u7f51\u7edc\u4e2d\u3002\u5728\u6700\u540e\u7684\u8f93\u51fa\u7aef\uff0c\u4f7f\u7528\u4e86Class Token\u5f62\u5f0f\u8fdb\u884c\u5206\u7c7b\u9884\u6d4b\u30023.Transformer\u6bd4CNN\u7ed3\u6784\u5c11\u4e86\u4e00\u5b9a\u7684\u5e73\u79fb\u4e0d\u53d8\u6027\u548c\u5c40\u90e8\u611f\u77e5\u6027\uff0c\u5728\u6570\u636e\u91cf\u8f83\u5c11\u7684\u60c5\u51b5\u4e0b\uff0c\u6548\u679c\u53ef\u80fd\u4e0d\u5982CNN\u6a21\u578b\uff0c\u4f46\u662f\u5728\u5927\u89c4\u6a21\u6570\u636e\u96c6\u4e0a\u9884\u8bad\u7ec3\u8fc7\u540e\uff0c\u518d\u8fdb\u884c\u8fc1\u79fb\u5b66\u4e60\uff0c\u53ef\u4ee5\u5728\u7279\u5b9a\u4efb\u52a1\u4e0a\u8fbe\u5230SOTA\u6027\u80fd\u3002"),(0,i.kt)("h1",{id:"efficientnet\u7cfb\u5217\u6a21\u578b\u7684\u7ed3\u6784\u548c\u7279\u70b9"},"EfficientNet\u7cfb\u5217\u6a21\u578b\u7684\u7ed3\u6784\u548c\u7279\u70b9\uff1f"),(0,i.kt)("p",null,"Efficientnet\u7cfb\u5217\u6a21\u578b\u662f\u901a\u8fc7grid search\u4ece\u6df1\u5ea6\uff08depth\uff09\u3001\u5bbd\u5ea6\uff08width\uff09\u3001\u8f93\u5165\u56fe\u7247\u5206\u8fa8\u7387\uff08resolution\uff09\u4e09\u4e2a\u89d2\u5ea6\u5171\u540c\u8c03\u8282\u641c\u7d22\u5f97\u6765\u7684\u6a21\u578b\u3002\u5176\u4eceEfficientNet-B0\u5230EfficientNet-L2\u7248\u672c\uff0c\u6a21\u578b\u7684\u7cbe\u5ea6\u8d8a\u6765\u8d8a\u9ad8\uff0c\u540c\u6837\uff0c\u53c2\u6570\u91cf\u548c\u5bf9\u5185\u5b58\u7684\u9700\u6c42\u4e5f\u4f1a\u968f\u4e4b\u53d8\u5927\u3002"),(0,i.kt)("p",null,"\u6df1\u5ea6\u6a21\u578b\u7684\u89c4\u6a21\u4e3b\u8981\u662f\u7531\u5bbd\u5ea6\u3001\u6df1\u5ea6\u3001\u5206\u8fa8\u7387\u8fd9\u4e09\u4e2a\u7ef4\u5ea6\u7684\u7f29\u653e\u53c2\u6570\u51b3\u5b9a\u7684\u3002\u8fd9\u4e09\u4e2a\u7ef4\u5ea6\u5e76\u4e0d\u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u5bf9\u4e8e\u8f93\u5165\u7684\u56fe\u7247\u5206\u8fa8\u7387\u66f4\u9ad8\u7684\u60c5\u51b5\uff0c\u9700\u8981\u6709\u66f4\u6df1\u7684\u7f51\u7edc\u6765\u83b7\u5f97\u66f4\u5927\u7684\u611f\u53d7\u89c6\u91ce\u3002\u540c\u6837\u7684\uff0c\u5bf9\u4e8e\u66f4\u9ad8\u5206\u8fa8\u7387\u7684\u56fe\u7247\uff0c\u9700\u8981\u6709\u66f4\u591a\u7684\u901a\u9053\u6765\u83b7\u53d6\u66f4\u7cbe\u786e\u7684\u7279\u5f81\u3002"))}u.isMDXComponent=!0},3722:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-10-9ac8aff4be099735d369a8679354e27b.png"},2626:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-11-0d178eaf0fe8ac4e9ef9fb317ee07cae.png"},9334:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-12-657b3b21097725faf81802cfc85f5c59.png"},415:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-9-63564cc1d5b22dd52ac6b002749f28d6.png"}}]);