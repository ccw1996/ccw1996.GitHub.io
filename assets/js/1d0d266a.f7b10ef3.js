"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1788],{9584:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(5893),i=t(1151);const s={title:"\u8bed\u8a00\u5927\u6a21\u578b100K\u4e0a\u4e0b\u6587\u7a97\u53e3\u7684\u79d8\u8bc0",tags:["work","interview"]},l="\u539f\u59cbTransformer\u548c\u4e0a\u4e0b\u6587\u957f\u5ea6",o={id:"LLM/100Kcontext",title:"\u8bed\u8a00\u5927\u6a21\u578b100K\u4e0a\u4e0b\u6587\u7a97\u53e3\u7684\u79d8\u8bc0",description:"\u5728Transformer\u67b6\u6784\u4e2d\uff0c\u6240\u6709\u53ef\u5b66\u4e60\u77e9\u9635\u6743\u91cd\u7684\u5f62\u72b6\u4e0e\u8f93\u5165\u8bcd\u5143\u6570\u91cfn\u65e0\u5173\u3002\u6240\u6709\u53ef\u8bad\u7ec3\u53c2\u6570\uff08\u5d4c\u5165\u67e5\u627e\u3001\u6295\u5f71\u5c42\u3001softmax\u5c42\u548c\u6ce8\u610f\u529b\u5c42\uff09\u90fd\u4e0d\u4f9d\u8d56\u4e8e\u8f93\u5165\u957f\u5ea6\uff0c\u5e76\u4e14\u5fc5\u987b\u5904\u7406\u53ef\u53d8\u957f\u5ea6\uff08variable-length\uff09\u7684\u8f93\u5165\u3002\u8be5\u67b6\u6784\u5177\u6709\u7684\u5f00\u7bb1\u5373\u7528\u7684\u7279\u6027\u975e\u5e38\u4e0d\u9519\u3002",source:"@site/docs/LLM/100Kcontext.md",sourceDirName:"LLM",slug:"/LLM/100Kcontext",permalink:"/docs/LLM/100Kcontext",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/LLM/100Kcontext.md",tags:[{label:"work",permalink:"/docs/tags/work"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1704643201,formattedLastUpdatedAt:"Jan 7, 2024",frontMatter:{title:"\u8bed\u8a00\u5927\u6a21\u578b100K\u4e0a\u4e0b\u6587\u7a97\u53e3\u7684\u79d8\u8bc0",tags:["work","interview"]},sidebar:"tutorialSidebar",previous:{title:"LLM",permalink:"/docs/LLM/"},next:{title:"BLIP2 huggingface \u4f7f\u7528",permalink:"/docs/LLM/BLIP2"}},d={},c=[];function a(n){const e={h1:"h1",li:"li",ol:"ol",p:"p",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u539f\u59cbtransformer\u548c\u4e0a\u4e0b\u6587\u957f\u5ea6",children:"\u539f\u59cbTransformer\u548c\u4e0a\u4e0b\u6587\u957f\u5ea6"}),"\n",(0,r.jsx)(e.p,{children:"\u5728Transformer\u67b6\u6784\u4e2d\uff0c\u6240\u6709\u53ef\u5b66\u4e60\u77e9\u9635\u6743\u91cd\u7684\u5f62\u72b6\u4e0e\u8f93\u5165\u8bcd\u5143\u6570\u91cfn\u65e0\u5173\u3002\u6240\u6709\u53ef\u8bad\u7ec3\u53c2\u6570\uff08\u5d4c\u5165\u67e5\u627e\u3001\u6295\u5f71\u5c42\u3001softmax\u5c42\u548c\u6ce8\u610f\u529b\u5c42\uff09\u90fd\u4e0d\u4f9d\u8d56\u4e8e\u8f93\u5165\u957f\u5ea6\uff0c\u5e76\u4e14\u5fc5\u987b\u5904\u7406\u53ef\u53d8\u957f\u5ea6\uff08variable-length\uff09\u7684\u8f93\u5165\u3002\u8be5\u67b6\u6784\u5177\u6709\u7684\u5f00\u7bb1\u5373\u7528\u7684\u7279\u6027\u975e\u5e38\u4e0d\u9519\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u4f60\u75282K\u7684\u4e0a\u4e0b\u6587\u957f\u5ea6\u8bad\u7ec3\u4e86\u4e00\u4e2aTransformer\u6a21\u578b\uff0c\u53ef\u4ee5\u5bf9\u4efb\u610f\u5927\u5c0f\u7684\u8bcd\u5143\u5e8f\u5217\u8fdb\u884c\u63a8\u65ad\uff0c\u552f\u4e00\u7684\u95ee\u9898\u5728\u4e8e\uff0c\u5982\u679c\u6a21\u578b\u6ca1\u6709\u5728\u4e0a\u4e0b\u6587\u957f\u5ea6\u4e3a100K\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u8bad\u7ec3\uff0c\u90a3\u4e48\u5b83\u5728\u63a8\u65ad\u8fc7\u7a0b\u4e2d\u5c06\u65e0\u6cd5\u5bf9100K\u4e2a\u8bcd\u5143\u4ea7\u51fa\u6709\u610f\u4e49\u7684\u7ed3\u679c\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bad\u7ec3\u6570\u636e\u7684\u5206\u5e03\u4e0e\u63a8\u65ad\u8fc7\u7a0b\u4e2d\u7684\u5206\u5e03\u76f8\u5dee\u5f88\u8fdc\uff0c\u6a21\u578b\u7684\u8868\u73b0\u5c31\u50cf\u4efb\u4f55\u5176\u4ed6\u673a\u5668\u5b66\u4e60\u6a21\u578b\u4e00\u6837\uff0c\u9762\u4e34\u5931\u8d25\u98ce\u9669\u3002"}),"\n",(0,r.jsx)(e.h1,{id:"\u591a\u5934\u6ce8\u610f\u529b\u56de\u987e",children:"\u591a\u5934\u6ce8\u610f\u529b\u56de\u987e"}),"\n",(0,r.jsx)(e.p,{children:"Q - \u67e5\u8be2\uff08query\uff09\uff0cK - \u952e\uff08key\uff09\uff0cV - \u503c\uff08value\uff09\uff0c\u8fd9\u4e9b\u7b26\u53f7\u662f\u8bba\u6587\u4e2d\u4e0e\u4fe1\u606f\u68c0\u7d22\u76f8\u5173\u7684\u7b26\u53f7\u8868\u793a\u6cd5\u3002\u5728\u4fe1\u606f\u68c0\u7d22\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u4e00\u4e2a\u201c\u67e5\u8be2\u201d\u8f93\u5165\u7cfb\u7edf\uff0c\u5e76\u641c\u7d22\u4e0e\u4e4b\u6700\u63a5\u8fd1\u7684\u201c\u952e\u201d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"n - \u8f93\u5165\u7684\u8bcd\u5143\u6570\u91cfd - \u6587\u672c\u5d4c\u5165\u7ef4\u5ea6h - \u6ce8\u610f\u529b\u5934\u7684\u6570\u91cfk - Q\u548cK\u7684\u7ebf\u6027\u6295\u5f71\u5927\u5c0fv - V\u7684\u7ebf\u6027\u6295\u5f71\u5927\u5c0f"}),"\n",(0,r.jsx)(e.h1,{id:"\u591a\u5934\u6ce8\u610f\u529bmulti-head-attention",children:"\u591a\u5934\u6ce8\u610f\u529b\uff08Multi-Head Attention\uff09"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u6709\u4e00\u4e2a\u67e5\u627e\u5d4c\u5165\u5c42\uff0c\u7528\u4e8e\u63a5\u6536\u8bcd\u5143\u4f5c\u4e3a\u8f93\u5165\uff0c\u5e76\u8fd4\u56de\u5927\u5c0f\u4e3a\uff081\uff0cd\uff09\u7684\u5411\u91cf\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u7531n\u4e2a\u8bcd\u5143\u7ec4\u6210\u7684\u5e8f\u5217\uff0c\u6211\u4eec\u5f97\u5230\u5927\u5c0f\u4e3a\uff08n\uff0cd\uff09\u7684\u6587\u672c\u5d4c\u5165\u77e9\u9635X\uff0c\u7136\u540e\u5c06\u5176\u4e0e\u4f4d\u7f6e\u6b63\u5f26\u5d4c\u5165\u76f8\u52a0\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u591a\u5934\u6ce8\u610f\u529b\u5c42\u65e8\u5728\u4e3a\u8bcd\u5143\u5e8f\u5217\u8ba1\u7b97\u65b0\u7684\u5d4c\u5165\u8868\u793a\uff0c\u8be5\u8bcd\u5143\u5e8f\u5217\u53ef\u4ee5\u88ab\u89c6\u4e3a\u5bf9\u539f\u59cb\u6587\u672c\u7f16\u7801X\uff0c\u4f46\u9700\u8981\uff0c\uff081\uff09\u6839\u636e\u8bcd\u5143\u95f4\u76f8\u5bf9\u4e8e\u4e0a\u4e0b\u6587\u7684\u91cd\u8981\u6027\u8fdb\u884c\u52a0\u6743\uff0c\uff082\uff09\u6839\u636e\u8bcd\u5143\u7684\u76f8\u5bf9\u4f4d\u7f6e\u8fdb\u884c\u52a0\u6743\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u4f7f\u7528h\u4e2a\u6ce8\u610f\u529b\u5934\u5bf9\u5d4c\u5165\u77e9\u9635X\uff08n\xd7d\uff09\u8fdb\u884c\u5e76\u884c\u5904\u7406\u3002\u4e3a\u4e86\u4f7f\u6240\u6709\u7684\u6ce8\u610f\u529b\u5934\u90fd\u5f97\u5230Q\u3001K\u548cV\uff0c\u6211\u4eec\u9700\u8981\u5bf9X\u8fdb\u884c\u7ebf\u6027\u6295\u5f71\uff0c\u5c06\u5176\u5206\u522b\u6295\u5f71\u5230k\u3001k\u548cv\u7ef4\u5ea6\u3002\u4e3a\u6b64\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06X\u5206\u522b\u4e0e\u5f62\u72b6\u4e3a\uff08d\uff0ck\uff09\u3001\uff08d\uff0ck\uff09\u548c\uff08d\uff0cv\uff09\u7684h\u4e2a\u77e9\u9635\u76f8\u4e58\u6765\u5b9e\u73b0\u3002\u4f60\u53ef\u5c06\u5176\u7406\u89e3\u4e3a\u7528\uff08n\uff0cd\uff09\u4e58\u4ee5\uff08h\uff0cd\uff0ck\uff09\u3001\uff08h\uff0cd\uff0ck\uff09\u548c\uff08h\uff0cd\uff0cv\uff09\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6ce8\u610f\u529b\u5934\u8fd4\u56de\u5927\u5c0f\u4e3a\uff08n\uff0cv\uff09\u7684h\u4e2a\u6ce8\u610f\u529b\u5206\u6570\u77e9\u9635\u3002\u7136\u540e\uff0c\u6211\u4eec\u5c06\u6765\u81ea\u6240\u6709\u6ce8\u610f\u529b\u5934\uff08n\uff0ch*v\uff09\u7684\u7247\u6bb5\u8fdb\u884c\u8fde\u63a5\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u7ebf\u6027\u6295\u5f71\uff0c\u4e3a\u540e\u7eed\u6b65\u9aa4\u505a\u51c6\u5907\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"\u7f29\u653e\u70b9\u79ef\u6ce8\u610f\u529bscaled-dot-product-attention",children:"\u7f29\u653e\u70b9\u79ef\u6ce8\u610f\u529b\uff08Scaled Dot-Product Attention\uff09"}),"\n",(0,r.jsx)(e.p,{children:"Q\u3001K\u3001V\u662fX\u76843\u4e2a\u7ebf\u6027\u6295\u5f71\uff0c\u5927\u5c0f\u5206\u522b\u4e3a\uff08n\uff0ck\uff09\u3001\uff08n\uff0ck\uff09\u548c\uff08n\uff0cv\uff09\uff0c\u901a\u8fc7\u4e58\u4ee5\u6bcf\u4e2a\u6ce8\u610f\u529b\u5934\u7684\u53ef\u5b66\u4e60\u6743\u91cd\uff08learnable weight\uff09\u83b7\u5f97\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u8ba1\u7b97Q\u548cK\uff08\u8f6c\u7f6e\uff09\u4e4b\u95f4\u7684\u8ddd\u79bb\uff08\u70b9\u79ef\uff09\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u6ce8\u610f\u529b\u5206\u6570\u3002\u5c06\u77e9\u9635\uff08n\uff0ck\uff09\u4e0e\uff08k\uff0cn\uff09\u76f8\u4e58\uff0c\u5f97\u5230\u77e9\u9635\uff08n\uff0cn\uff09\uff0c\u7136\u540e\u6211\u4eec\u5c06\u5176\u4e0e\u63a9\u7801\u77e9\u9635\u76f8\u4e58\uff0c\u4ee5\u5c06\u4e00\u4e9b\u8bcd\u5143\u7f6e\u96f6\uff08\u5728\u89e3\u7801\u5668\u4e2d\u9700\u8981\uff09\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5bf9\u5176\u8fdb\u884c\u7f29\u653e\uff0c\u5e76\u5e94\u7528softmax\u51fd\u6570\uff0c\u4f7f\u6ce8\u610f\u529b\u5206\u6570\u8303\u56f4\u57280\u52301\u4e4b\u95f4\u3002\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u5f97\u5230\u4e00\u4e2a\u5f62\u72b6\u4e3a\uff08n\uff0cn\uff09\u7684\u77e9\u9635\uff0c\u5176\u4e2dn_ij\u8868\u793a\u7b2ci\u4e2a\u548c\u7b2cj\u4e2a\u8bcd\u5143\u4e4b\u95f4\u7684\u76f8\u5bf9\u6ce8\u610f\u529b\u5206\u6570\uff080-1\u4e4b\u95f4\uff09\uff0c\u8fd9\u5c55\u793a\u4e86\u8fd9\u4e9b\u8bcd\u5143\u5728\u7ed9\u5b9a\u957f\u5ea6\u4e3an\u7684\u7279\u5b9a\u4e0a\u4e0b\u6587\u4e2d\u6709\u591a\u201c\u63a5\u8fd1\uff08close\uff09\u201d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7136\u540e\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u6ce8\u610f\u529b\u5206\u6570\u77e9\u9635\uff08n\uff0cn\uff09\u4e58\u4ee5\u5927\u5c0f\u4e3a\uff08n\uff0cd\uff09\u7684\u201c\u503c\uff08value\uff09\u201dV\uff0c\u4ee5\u83b7\u5f97\u7531\u8fd9\u4e9b\u76f8\u5bf9\u6ce8\u610f\u529b\u5206\u6570\u52a0\u6743\u5f97\u5230\u7684\u6587\u672c\u5d4c\u5165\u3002"}),"\n",(0,r.jsx)(e.h1,{id:"\u589e\u52a0\u4e0a\u4e0b\u6587\u957f\u5ea6\u7684\u4f18\u5316\u6280\u672f",children:"\u589e\u52a0\u4e0a\u4e0b\u6587\u957f\u5ea6\u7684\u4f18\u5316\u6280\u672f"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u66f4\u597d\u7684\u4f4d\u7f6e\u7f16\u7801\u2014\u2014ALiBi"}),"\n",(0,r.jsx)(e.li,{children:"\u7a00\u758f\u6ce8\u610f\u529b\u673a\u5236"}),"\n",(0,r.jsx)(e.li,{children:"FlashAttention\u2014\u2014\u7528\u4e8eGPU\u7684\u6ce8\u610f\u529b\u5c42\u9ad8\u6548\u5b9e\u73b0"}),"\n",(0,r.jsx)(e.li,{children:"\u591a\u67e5\u8be2\u6ce8\u610f\u529b\uff08Multi-Query Attention\uff0cMQA\uff09"}),"\n",(0,r.jsx)(e.li,{children:"\u6761\u4ef6\u8ba1\u7b97"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>l});var r=t(7294);const i={},s=r.createContext(i);function l(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);