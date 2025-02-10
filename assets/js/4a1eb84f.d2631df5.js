"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4604],{167:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"triton/nio_triton","title":"NADP+triton \u642d\u5efa\u7a33\u5b9a\u9ad8\u6548\u7684\u63a8\u7406\u5e73\u53f0","description":"https://developer.nvidia.com/zh-cn/blog/nadp-triton-recommender-system/","source":"@site/docs/triton/nio_triton.md","sourceDirName":"triton","slug":"/triton/nio_triton","permalink":"/docs/triton/nio_triton","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/triton/nio_triton.md","tags":[{"inline":true,"label":"work","permalink":"/docs/tags/work"},{"inline":true,"label":"triton","permalink":"/docs/tags/triton"}],"version":"current","lastUpdatedAt":1739209039000,"frontMatter":{"title":"NADP+triton \u642d\u5efa\u7a33\u5b9a\u9ad8\u6548\u7684\u63a8\u7406\u5e73\u53f0","tags":["work","triton"],"editor":"caroot"},"sidebar":"tutorialSidebar","previous":{"title":"triton","permalink":"/docs/triton/"}}');var r=n(4848),i=n(8453);const s={title:"NADP+triton \u642d\u5efa\u7a33\u5b9a\u9ad8\u6548\u7684\u63a8\u7406\u5e73\u53f0",tags:["work","triton"],editor:"caroot"},c=void 0,l={},a=[{value:"\u96c6\u6210\u6548\u7387",id:"\u96c6\u6210\u6548\u7387",level:2},{value:"\u9ad8\u6027\u80fd",id:"\u9ad8\u6027\u80fd",level:2}];function d(t){const e={a:"a",blockquote:"blockquote",h2:"h2",img:"img",p:"p",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://developer.nvidia.com/zh-cn/blog/nadp-triton-recommender-system/",children:"https://developer.nvidia.com/zh-cn/blog/nadp-triton-recommender-system/"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Triton \u652f\u6301\u591a\u4e2a\u6a21\u578b\u6216\u6a21\u5757\u8fdb\u884cDAG\u5f0f\u7684\u7f16\u6392\u3002 \u5176\u4e91\u539f\u751f\u53cb\u597d\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u80fd\u591f\u5f88\u8f7b\u7684\u505a\u5230\u591aGPU\u3001\u591a\u8282\u70b9\u7684\u6269\u5c55\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u5f15\u5165Triton\u4e4b\u540e\u7684\u63a8\u7406\u5e73\u53f0\u67b6\u6784",src:n(8318).A+"",width:"1536",height:"818"})}),"\n",(0,r.jsx)(e.h2,{id:"\u96c6\u6210\u6548\u7387",children:"\u96c6\u6210\u6548\u7387"}),"\n",(0,r.jsx)(e.p,{children:"Triton + \u6a21\u578b\u4ed3\u5e93 + Argo"}),"\n",(0,r.jsx)(e.p,{children:"Triton \u4e0e\u81ea\u5efa\u6a21\u578b\u4ed3\u5e93\u6df1\u5ea6\u7ed3\u5408\uff0c\u914d\u5408 workflow \u65b9\u6848 Argo\uff0c \u5b8c\u6210\u5168\u81ea\u52a8\u5316\u7684\u751f\u4ea7\uff0c\u91cf\u5316\uff0c\u51c6\u5165\uff0c\u4e91\u7aef\u90e8\u7f72\uff0c\u538b\u6d4b\uff0c\u4e0a\u7ebf\u7684CICD\u6d41\u7a0b\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5177\u4f53\u6765\u8bb2\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u6a21\u578b\u4e0a\u4f20\u6a21\u578b\u4ed3\u5e93\u81ea\u52a8\u89e6\u53d1\u914d\u7f6e\u597d\u7684workflow\uff1b\n\u521b\u5efa\u4e0e\u90e8\u7f72\u73af\u5883\u786c\u4ef6\u73af\u5883\u4e00\u81f4\u5bb9\u5668\uff0c\u81ea\u52a8\u91cf\u5316\u52a0\u901f\uff1b\n\u5f97\u76ca\u4e8eTriton\u751f\u6001\u4e2d\u63d0\u4f9b\u7684perf analyzer, \u53ef\u4ee5\u50cf\u4f7f\u7528jMeter \u4e00\u6837\u65b9\u4fbf\u7684\u6309\u7167\u6a21\u578b\u7684Input Tensor Shape \u81ea\u52a8\u751f\u6210\u8bf7\u6c42\u4e0e\u6307\u5b9a\u7684\u8d1f\u8f7d\u3002\u5176\u538b\u6d4b\u51fa\u7684\u670d\u52a1\u5316\u4e4b\u540e\u6a21\u578b\u7684\u6700\u5927\u541e\u5410\uff0c\u5f88\u63a5\u8fd1\u771f\u5b9e\u90e8\u7f72\u573a\u666f\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u9ad8\u6027\u80fd",children:"\u9ad8\u6027\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"Triton + Istio"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u524dNADP\u670d\u52a1\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u670d\u52a1\u6d41\u91cf\u5927\uff0c\u4e3b\u8981\u4f20\u8f93cv\u573a\u666f\u89c6\u9891\u6587\u4ef6+\u9ad8\u5206\u8fa8\u7387\u56fe\u7247\uff0c\u5fc5\u987b\u4f7f\u7528\u9ad8\u6027\u80fdrpc\u534f\u8bae\u8fdb\u884c\u52a0\u901f\uff0c\u800c\u4e14\u63a8\u7406\u670d\u52a1\u5f15\u64ce\u5fc5\u987b\u5bf9\u73b0\u6709\u7684L4 Load Balancer \u548c\u670d\u52a1\u53d1\u73b0\u65b9\u6848\u6709\u6bd4\u8f83\u597d\u7684\u652f\u6301\u6027\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u800cTriton \u539f\u751f\u652f\u6301gRPC\u7684\u65b9\u6848\u8fdb\u884c\u8bbf\u95ee\uff0c\u5e76\u4e14\u80fd\u591f\u5f88\u65b9\u4fbf\u7684\u90e8\u7f72\u4e3ak8s\u5bb9\u5668\u3002\u4f46\u56e0\u4e3ak8s\u539f\u751fservice \u4e0d\u80fd\u591f\u5f88\u597d\u7684\u5bf9gRPC\u8fdb\u884c\u8bf7\u6c42\u7ea7\u522b\u7684\u8d1f\u8f7d\u5747\u8861(\u4ec5\u652f\u6301\u957f\u8fde\u63a5\u7684\u8d1f\u8f7d\u5747\u8861)\uff0c\u6545\u5728\u5f15\u5165\u4e86isito \u4e4b\u540e\uff0cTriton\u5c31\u80fd\u591f\u5728\u4f20\u8f93\u534f\u8bae\u4e0a\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5177\u4f53\u6765\u8bb2\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u96c6\u7fa4\u5185\u5bb9\u5668\u76f4\u63a5\u8bbf\u95ee\u53ea\u9700\u8981\u4e00\u6b21\u8de8\u7269\u7406\u673a\u7f51\u7edc\u8f6c\u53d1\uff1b\n\u5b8c\u7f8e\u590d\u7528k8s \u7684readiness \u72b6\u6001\uff0c\u901a\u8fc7\u548cTriton \u8282\u70b9\u7684liveness/readniess\u63a2\u9488\u8fdb\u884c\u670d\u52a1\u7684\u5065\u5eb7\u76d1\u63a7\uff1b\n\u540e\u7eed\u7ed3\u5408\u6a21\u578b\u4ed3\u5e93/\u914d\u7f6e\u4e2d\u5fc3\u63d0\u4f9b\u7528\u6237\u66f4\u53cb\u597d\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u5f0f\uff1a\u57fa\u4e8e\u57df\u540d\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u6848\u5207\u6362\u4e3a\u57fa\u4e8e\u6a21\u578b\u7684\u670d\u52a1\u53d1\u73b0\u65b9\u6848\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u4e1a\u52a1\u6d41\u7a0b",src:n(7716).A+"",width:"768",height:"1303"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f20\u538b\u7f29\u56fe\u7247\uff0c\u800c\u975einput tensor, \u53ea\u9700\u8981\u51e0\u767eKB\u5c31\u80fd\u5c06\u4e00\u5f202K\u539f\u56febytes\u4f20\u8f93\u8fc7\u53bb, \u4ee5\u5f53\u524donemodel 2k \u8f93\u5165\u56fe\u7247\u4e3a\u4f8b\uff0c\u6a21\u578b\u8f93\u5165\u5fc5\u987b\u4e3a1920*1080*3*8 byte \u5927\u5c0f\uff0c\u800c\u4e14\u5fc5\u987b\u8d70\u7f51\u7edc\uff0c\u800c\u5728\u52a0\u5165\u670d\u52a1\u7aef\u540e\u5904\u7406\u4e4b\u540e\uff0c\u5728\u7cbe\u5ea6\u635f\u5931\u5141\u8bb8\u7684\u8303\u56f4\u5185\uff0c\u53ef\u4ee5\u5c06\u539f\u56fe\u6539\u4e3a\u4f20\u538b\u7f29\u8fc7\u7684\u4e09\u901a\u9053720P jpg\u56fe\u7247(1280*720*3)\uff0c\u5728\u670d\u52a1\u7aef\u5728resize \u62101920*1080*3*8 byte, \u8282\u7ea6\u5927\u91cf\u5e26\u5bbd\uff1b\n\u670d\u52a1\u7aef\u524d\u5904\u7406\u5b8c\u6210\u540e\u5c06GPU\u663e\u5b58\u6307\u9488\u76f4\u63a5\u9001\u5165\u6a21\u578b\u9884\u6d4b\uff0c\u8fd8\u80fd\u7701\u53bbHost2Device\u7684\u62f7\u8d1d\uff1b\n\u670d\u52a1\u7aef\u53ef\u4ee5\u5c01\u88c5\u6a21\u578b\u7684\u540e\u5904\u7406\uff0c\u4f7f\u5f97\u6bcf\u6b21\u6a21\u578b\u5347\u7ea7\u7684\u65f6\u5019\uff0cclient\u7aef\u4e0d\u7528\u611f\u77e5\u5230\u670d\u52a1\u540e\u5904\u7406\u7684\u53d8\u5316\uff0c\u4ece\u800c\u4e0d\u9700\u8981\u4fee\u6539\u5904\u7406\u903b\u8f91\u4ee3\u7801\uff1b\n\u4f7f\u7528nvJpeg\uff0cDALI\u7b49\u4f7f\u7528GPU\u7b97\u529b\u7684\u7ec4\u4ef6\u6765\u8fdb\u884c\u524d\u540e\u5904\u7406\uff0c\u52a0\u901f\u6574\u4f53\u7684\u6570\u636e\u5904\u7406\u901f\u5ea6\u3002"})]})}function p(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},7716:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/image-1-482139f7894d8f8a68e2be3fd5f99fb2.png"},8318:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/image-4165e8bb3139fa227b2b71fa73afcedd.png"},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var o=n(6540);const r={},i=o.createContext(r);function s(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);