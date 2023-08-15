"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[6937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),b=i,d=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"\u5927\u89c4\u6a21\u673a\u5668\u5b66\u4e60\u7684\u7b2c\u56db\u79cd\u5883\u754c--\u540c\u6b65\u6d41\u6c34\u7ebf\u5e76\u884c\u6280\u672f",tags:["work"]},l=void 0,o={unversionedId:"ml/training/sync-pipeline",id:"ml/training/sync-pipeline",title:"\u5927\u89c4\u6a21\u673a\u5668\u5b66\u4e60\u7684\u7b2c\u56db\u79cd\u5883\u754c--\u540c\u6b65\u6d41\u6c34\u7ebf\u5e76\u884c\u6280\u672f",description:"https://zhuanlan.zhihu.com/p/629637468",source:"@site/docs/ml/training/sync-pipeline.md",sourceDirName:"ml/training",slug:"/ml/training/sync-pipeline",permalink:"/docs/ml/training/sync-pipeline",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/training/sync-pipeline.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",frontMatter:{title:"\u5927\u89c4\u6a21\u673a\u5668\u5b66\u4e60\u7684\u7b2c\u56db\u79cd\u5883\u754c--\u540c\u6b65\u6d41\u6c34\u7ebf\u5e76\u884c\u6280\u672f",tags:["work"]},sidebar:"tutorialSidebar",previous:{title:"\u5927\u6a21\u578b\u8bad\u7ec3\u52a0\u901f",permalink:"/docs/ml/training/summary"},next:{title:"Transformer\u6a21\u578b\u7684\u57fa\u7840\u6f14\u7b97",permalink:"/docs/ml/transformer-math"}},c={},p=[{value:"\u964d\u4f4ebubble",id:"\u964d\u4f4ebubble",level:2},{value:"\u51cf\u5c11\u663e\u5b58",id:"\u51cf\u5c11\u663e\u5b58",level:2},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",level:2},{value:"\u51cf\u5c11\u6a21\u578b\u6784\u9020\u65f6\u7684\u663e\u5b58\u4f7f\u7528",id:"\u51cf\u5c11\u6a21\u578b\u6784\u9020\u65f6\u7684\u663e\u5b58\u4f7f\u7528",level:2}],m={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/629637468"},"https://zhuanlan.zhihu.com/p/629637468"))),(0,i.kt)("h1",{id:"gpipe"},"GPipe"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u5c06\u8bad\u7ec3\u8fc7\u7a0b\u7684batch\u6837\u672c\u62c6\u5206\u4e3a\u66f4\u5c0f\u7684micro batch \u6837\u672c\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5176\u6b21\u5728cell\u4e0a\u6d41\u6c34\u884c\u6267\u884c\u6bcf\u7ec4micro batch\u7684\u64cd\u4f5c\uff08\u524d\u5411->\u53cd\u5411\uff09\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\uff0c\u68af\u5ea6\u5728\u6240\u6709micro batch\u4e0a\u7d2f\u79ef\uff0c\u5e76\u5728\u6bcf\u4e2abatch\u7ed3\u675f\u65f6\u66f4\u65b0\u6a21\u578b\u53c2\u6570\uff08\u68af\u5ea6\u7d2f\u8ba1->\u6a21\u578b\u53c2\u6570\u66f4\u65b0\uff09\uff1b")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(38).Z,width:"666",height:"302"})),(0,i.kt)("h2",{id:"\u964d\u4f4ebubble"},"\u964d\u4f4ebubble"),(0,i.kt)("p",null,"\u5c06\u6bcf\u6b21\u9700\u8981\u8ba1\u7b97\u7684batch size\u51cf\u5c0f\u4e3amicro batch size\uff0c\u5728micro batch\u7684\u6837\u672c\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u5373\u5c06\u76f8\u5173\u7684activation send\u5230\u4e0b\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\uff0c\u8fdb\u884c\u63a5\u4e0b\u6765\u7684\u8ba1\u7b97\uff0c\u5982\u4e0a\u56fe\u76f8\u5bf9\u4e8e\u4e3a\u8fdb\u884cmicro batch \u62c6\u5206\u7684\uff0c\u6574\u4f53bubble\u7684\u5360\u6bd4\u4e3a(n-1)/(n-1+m)\uff0cm\u4e3amicro size\u6570\u76ee\uff0c\u6587\u4e2d\u4e5f\u6307\u51fa\uff0c\u5728\u5b9e\u9a8c\u4e2d\u5f53m>=4*n\u65f6\uff0cbubble\u6bd4\u4f8b\u51e0\u4e4e\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\uff0c\u8fd9\u5176\u4e2d\u4e5f\u90e8\u5206\u56e0\u4e3a\u53cd\u5411\u8ba1\u7b97\u4e2d\u7684recompute\u53ef\u4ee5\u63d0\u524d\u4e00\u5b9a\u65f6\u95f4\u8ba1\u7b97\uff0c\u800c\u4e0d\u9700\u8981\u4e00\u5b9a\u7b49\u4f9d\u8d56\u7684\u68af\u5ea6\u8ba1\u7b97\u5b8c\u6210\uff1b"),(0,i.kt)("h2",{id:"\u51cf\u5c11\u663e\u5b58"},"\u51cf\u5c11\u663e\u5b58"),(0,i.kt)("p",null,"GPipe\u652f\u6301recompute\uff0c\u548c\u4e0a\u7bc7\u6587\u7ae0\u4e2d\u63d0\u5230\u7684activation checkpoint\u5176\u5b9e\u662f\u4e00\u4e2a\u4e1c\u897f\uff1a\u5728\u6b63\u5411\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u5728\u5206\u7247\u8fb9\u754c\u5904\u5b58\u50a8activation\uff0c \u4ec5\u4f20\u8f93\u8fb9\u754cactivation\uff0c \u5728\u53cd\u5411\u4f20\u9012\u8fc7\u7a0b\u4e2d\uff0c\u8ba1\u7b97\u8bbe\u5907\u4f1a\u91cd\u65b0\u8ba1\u7b97activation\uff0c\u51cf\u5c11activation\u5360\u7528\u7684\u663e\u5b58\uff1b"),(0,i.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861"},"\u8d1f\u8f7d\u5747\u8861"),(0,i.kt)("p",null,"\u4e0a\u56fe\u4e2d\u7684\u5207\u5206\u7b56\u7565\u6bd4\u8f83\u5b8c\u7f8e\uff0c\u8ba1\u7b97\u8bbe\u5907\u95f4\u8d1f\u8f7d\u6bd4\u8f83\u5747\u8861\uff0c\u4f46\u662f\u5728\u771f\u5b9e\u7684\u573a\u666f\u4e2d\u5e76\u4e0d\u662f\u5982\u6b64\uff0c\u56e0\u800c\uff0c\u66f4\u597d\u5730\u5207\u5206\u7b56\u7565\u53ef\u4ee5\u63d0\u9ad8\u8bad\u7ec3\u7684\u7efc\u5408\u6027\u80fd\u3002DeepSpeed \u63d0\u4f9b\u4e86\u591a\u79cd\u8ba1\u7b97\u8bbe\u5907\u5207\u5206\u7b56\u7565\uff0c\u53ef\u4f7f\u7528 PipelineModule\u7684 partition_method \u5173\u952e\u5b57\u53c2\u6570\u8bbe\u7f6e\u8fd9\u4e9b\u7b56\u7565\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'partition_method="parameters"\u5c3d\u91cf\u4fdd\u8bc1\u6d41\u6c34\u7ebf\u4e2d\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u7684\u53ef\u8bad\u7ec3\u53c2\u6570\u7684\u6570\u91cf\u4e00\u81f4\uff0c \u8fd9\u5728\u5185\u5b58\u53d7\u9650\u7684\u73af\u5883\u4e2d\u4ee5\u53ca\u5c42\u7684\u5927\u5c0f\u4e0e\u8ba1\u7b97\u65f6\u95f4\u6210\u6b63\u6bd4\u65f6\u7279\u522b\u6709\u6548\uff1b'),(0,i.kt)("li",{parentName:"ul"},'partition_method="type:',"[regex]",'" \uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5c3d\u91cf\u4fdd\u8bc1\u7b26\u5408\u6b63\u5219\u7684\u5c42\u6570\u4e00\u81f4\u3002\u4f8b\u5982\uff0cpartition_method="type:transformer" \u5c06\u5e73\u8861\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u7684transformer\u6570\u91cf\uff1b'),(0,i.kt)("li",{parentName:"ul"},'partition_method="uniform" \u6309\u5c42\u6570\u6765\u8fdb\u884c\u7b56\u7565\u5207\u5206\uff0c\u5c3d\u91cf\u4fdd\u8bc1\u5c42\u6570\u5747\u8861\uff1b')),(0,i.kt)("h2",{id:"\u51cf\u5c11\u6a21\u578b\u6784\u9020\u65f6\u7684\u663e\u5b58\u4f7f\u7528"},"\u51cf\u5c11\u6a21\u578b\u6784\u9020\u65f6\u7684\u663e\u5b58\u4f7f\u7528"),(0,i.kt)("p",null,"\u4f7f\u7528Sequential\u5c06\u5e8f\u5217\u5c42\u63d0\u4f9b\u5230PipelineModule\u662f\u6307\u5b9a\u6d41\u6c34\u7ebf\u5e76\u884c\u7684\u6bd4\u8f83\u53cb\u597d\u7684\u65b9\u5f0f\u3002\u7136\u800c\u4f1a\u9047\u5230\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u90fd\u4f1a\u4fdd\u5b58\u6574\u4e2a\u6a21\u578b\u7684\u526f\u672c\uff0c \u5047\u5b9a8\u4e2a\u8ba1\u7b97\u8bbe\u5907\u7684\u672c\u5730\u673a\u5668CPU\u5185\u5b58\u5fc5\u987b\u8981\u5148\u6d88\u80178\u500d\u7684\u8ba1\u7b97\u8bbe\u5907\u7684\u663e\u5b58\u6765\u7528\u6765\u505a\u6a21\u578b\u6784\u9020\uff0c\u800c\u663e\u7136\u662f\u5341\u5206\u4f4e\u6548\u4e14\u6ca1\u5fc5\u8981\u7684\u65b9\u5f0f\u3002"),(0,i.kt)("h1",{id:"dapple"},"DAPPLE"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DAPPLE Profiler\u7528\u6237\u7684 DNN \u6a21\u578b\uff0c\u6bcf\u4e00\u5c42\u7684\u6267\u884c\u65f6\u95f4\u3001activation\u5927\u5c0f\u548c\u6a21\u578b\u53c2\u6570\u5927\u5c0f\u4f5c\u4e3a\u8f93\u5165\uff1b"),(0,i.kt)("li",{parentName:"ol"},"Profiler\u4ea7\u751f\u7684\u7ed3\u679c\u4f5c\u4e3a\u8f93\u5165\uff0c DAPPLE Planner\u5728\u7ed9\u5b9a\u7684\u5168\u5c40\u6279\u91cf\u5927\u5c0f\u4e0a\u751f\u6210\u4f18\u5316\u7684\uff08\u6df7\u5408\uff09\u5e76\u884c\u5316\u8ba1\u5212\uff1b"),(0,i.kt)("li",{parentName:"ol"},"DAPPLE Runtime\u83b7\u53d6Planner\u7684\u7ed3\u679c\uff0c\u5e76\u5c06\u539f\u59cb\u6a21\u578b\u56fe\u8f6c\u6362\u4e3a\u6d41\u6c34\u7ebf\u5e76\u884c\u56fe\u3002")),(0,i.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u6d41\u6c34\u7ebf\u8bad\u7ec3\u6548\u7387\uff0cGPipe ","[1]"," \u63d0\u51fa\u5c06\u5168\u5c40\u6279\u6b21\u62c6\u5206\u4e3a\u591a\u4e2amicro-batch\u3002\u7136\u800c\uff0c\u5fc5\u987b\u4e3a\u6240\u6709micro-batch\u4fdd\u7559\u524d\u5411\u8ba1\u7b97\u4ea7\u751f\u7684\u6fc0\u6d3b\u51fd\u6570\uff0c\u76f4\u5230\u76f8\u5e94\u7684\u53cd\u5411\u8ba1\u7b97\u5f00\u59cb\uff0c\u4ece\u800c\u5bfc\u81f4\u663e\u5b58\u9700\u6c42\u4e0emicro-batch\u6570\u6210\u6b63\u6bd4\uff08\u5982\u4e0a\u56feC\u6240\u793a\uff0c\u6ce8\u610f\u56fe\u4e2d\u8868\u793a\u6709\u95ee\u9898\u7ea2\u8272\u4e3aDAPPLE\uff0c\u84dd\u8272\u4e3aGPipe\uff09\uff0c\u8fd9\u4e0e\u6211\u4eec\u5c3d\u91cf\u4fdd\u8bc1\u8f83\u5927\u7684micro-batch\u4ee5\u63d0\u5230\u8f83\u9ad8\u7684\u6027\u80fd\u6709\u51b2\u7a81\u3002\u800c\u5728DAPPLE \u4e2d\uff0c\u6211\u4eec\u63d0\u51fa\u5c3d\u65e9\u5730\u5411\u540e\u8c03\u5ea6\u4ee5\u51cf\u5c11\u5185\u5b58\u6d88\u8017\uff0c\u53731F1B\uff1a\n",(0,i.kt)("img",{alt:"Alt text",src:n(5389).Z,width:"509",height:"310"})),(0,i.kt)("h1",{id:"interleaved-1f1b"},"interleaved 1F1B"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:n(3996).Z,width:"696",height:"263"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\uff0c\u5c06stage \u5207\u5206\u53d8\u5316\u540e\uff0cDevice1\u53ef\u4ee5\u5c3d\u5feb\u5b8c\u6210stage1\uff08L1\uff09\u7684\u8ba1\u7b97\u4ee5\u5c3d\u5feb\u8fdb\u884c\u5176\u4ed6micro-batch\u6216\u8005\u5176\u4ed6stage5\u7684\u8ba1\u7b97\uff0c\u8be6\u7ec6\u65f6\u5e8f\u56fe\u53ef\u7531\u4e0b\u56fe\u5c55\u793a\uff08\u5176\u4e2d\u6d45\u8272\u53ef\u770b\u505astage5-stage8\uff09\uff1a"),(0,i.kt)("p",null,"\u7efc\u4e0a\uff0cbubble\u65f6\u95f4\u5360\u6bd4\u4ece(n-1)/(n-1+m)\u4f18\u5316\u4e3a(n-1)/(n-1+km)\uff0ck\u4e3a\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4e0a\u7684stage\u6570\u3002"))}u.isMDXComponent=!0},38:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-3-f83d23d56dbed6f8153ad1b14db18b3a.png"},5389:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-4-594c8c8ead7f414143dd281f4e5bbf2e.png"},3996:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-5-b54cbf90cdd007c2257b7e73198e1d61.png"}}]);