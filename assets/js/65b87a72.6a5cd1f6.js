"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[8570],{9894:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var t=o(5893),n=o(1151);const s={title:"CUDA Memory\u5185\u5b58\u6a21\u578b",tags:["work"]},a=void 0,d={id:"cuda/memory",title:"CUDA Memory\u5185\u5b58\u6a21\u578b",description:"GPU \u5177\u6709\u591a\u79cd\u4e0d\u540c\u529f\u80fd\u7684\u5185\u5b58:",source:"@site/docs/cuda/memory.md",sourceDirName:"cuda",slug:"/cuda/memory",permalink:"/docs/cuda/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cuda/memory.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1712505336,formattedLastUpdatedAt:"Apr 7, 2024",frontMatter:{title:"CUDA Memory\u5185\u5b58\u6a21\u578b",tags:["work"]},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6ecuda kernel\u4e2d\u7684grid_size\u548cblock_size",permalink:"/docs/cuda/grid_size\u548cblock_size"},next:{title:"shared_memory",permalink:"/docs/cuda/shared_memory"}},c={},i=[];function l(e){const r={code:"code",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"GPU \u5177\u6709\u591a\u79cd\u4e0d\u540c\u529f\u80fd\u7684\u5185\u5b58:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Register => \u5bc4\u5b58\u5668\u5185\u5b58\uff1b"}),"\n",(0,t.jsx)(r.li,{children:"Shared Memory => \u5171\u4eab\u5185\u5b58\uff1b"}),"\n",(0,t.jsx)(r.li,{children:"Global Memory => \u5168\u5c40\u5185\u5b58\uff1b"}),"\n",(0,t.jsx)(r.li,{children:"Thread Private Local Memory => \u7ebf\u7a0b\u79c1\u6709\u5185\u5b58\uff1b"}),"\n",(0,t.jsx)(r.li,{children:"Constant Memory => \u5e38\u91cf\u5185\u5b58\uff1b"}),"\n",(0,t.jsx)(r.li,{children:"Texture Memory => \u7eb9\u7406\u5185\u5b58\uff1b"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Alt text",src:o(3528).Z+"",width:"1080",height:"821"})}),"\n",(0,t.jsx)(r.p,{children:"\u7136\u540e\u56de\u5230\u7b2c\u4e00\u5f20\u56fe\uff0c\u5728 Block \u91cc\u9762\u6709 Shared Memory\uff0c\u8fd9\u4e2a Shared Memory \u662f\u53ef\u4ee5\u88ab Block \u4e2d\u6240\u6709\u7684\u7ebf\u7a0b\u5757\u6240\u5171\u4eab\u7684\u3002\u8fd9\u4e2a\u610f\u601d\u662f\u6bd4\u5982\u8fd9\u91cc\u7684 Thread(0, 0) \u662f\u53ef\u4ee5\u53bb\u8bbf\u95ee Shared Memory \u7684\uff0c\u800c Thread(1, 0)\u3001Thread(2, 0) \u4e5f\u662f\u53ef\u4ee5\u53bb\u8bbf\u95ee\u540c\u4e00\u4e2a Shared Memory \u7684\uff0c\u8fd9\u610f\u5473\u7740\u540c\u4e00\u4e2a BLock \u4e2d\u7684\u4e0d\u540c Thread \u662f\u53ef\u4ee5\u901a\u8fc7 Shared Memory \u6765\u4ea4\u6362\u6570\u636e\u7684\u3002\u5728 Block \u4e2d\u8fd8\u6709 Registers\uff0c\u8fd9\u548c Shared Memory \u4e0d\u592a\u4e00\u6837\uff0c\u662f\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u72ec\u6709\u81ea\u5df1\u4e13\u6709\u7684 Register\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cThread(0, 0) \u53ef\u4ee5\u8bbf\u95ee\u81ea\u5df1\u7684 Register\uff0c\u4f46\u662f\u5b83\u6ca1\u6709\u529e\u6cd5\u8bbf\u95ee Thread(1, 0) \u7684 Register\u3002\u63a5\u7740\u8fd8\u6709 Local Memory\uff0cLocal Memory \u4e5f\u662f\u4e00\u79cd\u7ebf\u7a0b\u6240\u72ec\u6709\u7684\u4e00\u79cd\u5185\u5b58\u3002\u7136\u540e\u5728 Block \u4e4b\u5916\u3001Grid \u4e4b\u4e2d\uff0c\u8fd8\u6709 Global Memory (\u4e5f\u5c31\u662f\u5e73\u65f6\u54b1\u4eec\u8bf4\u7684 GPU \u663e\u5b58)\uff0c\u53e6\u5916\u8fd8\u6709 Constant Memory\u3001Texture Memory\u3002\u8fd9\u4e09\u5757\u5185\u5b58\u6709\u4e00\u4e9b\u5171\u540c\u70b9\uff0c\u6bd4\u5982\u53ef\u4ee5\u88ab\u6240\u6709\u7ebf\u7a0b\u6240\u5171\u4eab\u3001\u90fd\u53ef\u4ee5\u4e0e\u4e3b\u673a\u5185\u5b58\u8fdb\u884c\u6570\u636e\u4ea4\u6362\u7b49\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u5177\u4f53\u6765\u770b\uff0cRegister \u5bc4\u5b58\u5668\u5185\u5b58\u662f GPU \u4e2d\u8bbf\u95ee\u901f\u5ea6\u6700\u5feb\u7684\u5185\u5b58\uff0c\u5b83\u53ef\u4ee5\u63d0\u9ad8\u7a0b\u5e8f\u7684\u6267\u884c\u6548\u7387\u3002\u5982\u679c\u53d8\u91cf\u5728\u5185\u6838\u4e2d\u58f0\u660e\u4e14\u6ca1\u6709\u4f7f\u7528\u5176\u4ed6\u4fee\u9970\u7b26\uff0c\u90a3\u4e48\u8fd9\u4e2a\u53d8\u91cf\u901a\u5e38\u4f1a\u88ab\u5b58\u50a8\u5728\u5bc4\u5b58\u5668\u4e2d\uff0c\u5bc4\u5b58\u5668\u901a\u5e38\u662f\u7528\u6765\u5b58\u653e\u9891\u7e41\u8bbf\u95ee\u7684\u53d8\u91cf\u3002\u5bc4\u5b58\u5668\u5185\u5b58\u662f\u6bcf\u4e2a\u7ebf\u7a0b\u79c1\u6709\u7684\uff0c\u4e0d\u540c\u7ebf\u7a0b\u65e0\u6cd5\u901a\u8fc7\u5bc4\u5b58\u5668\u5185\u5b58\u6765\u8fdb\u884c\u6570\u636e\u4ea4\u6362\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u63a5\u7740\u662f Local Memory\uff0c\u5185\u6838\u51fd\u6570\u4e2d\u65e0\u6cd5\u5b58\u653e\u5230\u5bc4\u5b58\u5668\u4e2d\u7684\u53d8\u91cf\u5c31\u4f1a\u88ab\u5b58\u653e\u5230\u672c\u5730\u5185\u5b58\u4e2d\uff0c\u6bd4\u5982\u6bd4\u8f83\u5927\u7684\u6570\u636e\u7ed3\u6784\u3001\u4e0d\u6ee1\u8db3\u5bc4\u5b58\u5668\u5185\u5b58\u9650\u5236\u7684\u53d8\u91cf\u3001\u52a8\u6001\u6570\u7ec4\u7b49\u3002Local Memory \u76f8\u5bf9\u4e8e Register \u6765\u8bf4\uff0c\u8bbf\u95ee\u901f\u5ea6\u4f1a\u6162\u4e00\u4e9b\u3002"}),"\n",(0,t.jsxs)(r.p,{children:["\u5171\u4eab\u5185\u5b58 Shared Memory\uff0c\u662f\u5728\u5185\u6838\u51fd\u6570\u4e2d\u7531 ",(0,t.jsx)(r.code,{children:"__shared__"})," \u4fee\u9970\u7684\u53d8\u91cf\uff0c\u4e5f\u5c31\u662f\u7528 ",(0,t.jsx)(r.code,{children:"__shared__"})," \u4fee\u9970\u7684\u53d8\u91cf\u90fd\u4f1a\u5b58\u653e\u5728\u5171\u4eab\u5185\u5b58\u4e2d\u3002Shared Memory \u662f on-chip \u7684\uff0c\u5177\u6709\u9ad8\u5e26\u5bbd\u3001\u4f4e\u5ef6\u8fdf\u7684\u7279\u70b9\u3002\u5171\u4eab\u5185\u5b58\u662f\u5728\u4e00\u4e2a Block \u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u80fd\u591f\u8bbf\u95ee\u7684\u5185\u5b58\u3002\u76f8\u6bd4 Register\uff0cShared Memory \u7684\u8bbf\u95ee\u901f\u5ea6\u4f1a\u7a0d\u5fae\u6162\u4e00\u4e9b\uff0c\u4f46 Shared Memory \u7684\u5bb9\u91cf\u901a\u5e38\u4f1a\u6bd4 Register \u5927\u5f97\u591a\uff0c\u53ef\u4ee5\u5b58\u50a8\u66f4\u591a\u7684\u6570\u636e\uff0c\u56e0\u6b64\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b Shared Memory \u66f4\u9002\u5408\u7528\u4e8e\u6570\u636e\u7684\u5b58\u50a8\u548c\u5171\u4eab\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u63a5\u7740\u662f\u5e38\u91cf\u5185\u5b58 Constant Memory\uff0c\u662f\u5728\u5185\u6838\u51fd\u6570\u4e2d\u7531 ",(0,t.jsx)(r.code,{children:"__constant__"})," \u4fee\u9970\u7684\u53d8\u91cf\uff0c\u5e38\u91cf\u5185\u5b58\u662f\u4e13\u95e8\u7528\u4e8e\u5b58\u50a8\u5e38\u91cf\u6570\u636e\u7684\u5185\u5b58\u533a\u57df\uff0c\u53ef\u4ee5\u88ab\u6240\u6709\u5185\u6838\u4ee3\u7801\u8bbf\u95ee\u5230\u3002\u5b83\u5177\u6709\u9ad8\u901f\u7684\u8bbf\u95ee\u901f\u5ea6\uff0c\u901a\u5e38\u88ab\u7528\u4e8e\u5b58\u50a8\u5185\u6838\u4e2d\u9700\u8981\u9891\u7e41\u8bbf\u95ee\u7684\u5e38\u91cf\u6570\u636e\u3002\u53e6\u5916\u4e00\u5757\u662f\u7eb9\u7406\u5185\u5b58 Texture Memory\uff0c\u8fd9\u8ddf\u5e38\u91cf\u5185\u5b58\u6bd4\u8f83\u7c7b\u4f3c\uff0c\u662f\u4e13\u95e8\u7528\u4e8e\u5b58\u50a8\u7eb9\u7406\u6570\u636e\u7684\u5185\u5b58\u533a\u57df\u3002\u8fd9\u91cc\u53ef\u80fd\u4f1a\u6709\u540c\u5b66\u4f1a\u95ee\uff1a\u795e\u9a6c\u662f\u7eb9\u7406\u6570\u636e\uff1f\u7eb9\u7406\u6570\u636e\u53ef\u4ee5\u662f\u989c\u8272\u3001\u4eae\u5ea6\u3001alpha\u503c\u7b49\uff0c\u901a\u5e38\u7528\u4e8e\u7eb9\u7406\u6620\u5c04\u548c\u56fe\u50cf\u5904\u7406\u7b49\u4efb\u52a1\uff0c\u6bcf\u4e2a\u6570\u636e\u5143\u7d20\u79f0\u4e3a\u4e00\u4e2a\u7eb9\u7406\uff0c\u901a\u8fc7\u57fa\u672c\u683c\u5f0f\u548c\u6570\u636e\u7c7b\u578b\u786e\u5b9a\u3002\u7eb9\u7406\u6570\u636e\u53ef\u4ee5\u88ab\u6620\u5c04\u5230\u4efb\u4f55\u51e0\u4f55\u5f62\u72b6\u7684\u8868\u9762\uff0c\u4f7f\u5f97\u56fe\u50cf\u80fd\u591f\u4ee5\u66f4\u52a0\u903c\u771f\u7684\u65b9\u5f0f\u5448\u73b0\u5728\u5c4f\u5e55\u4e0a\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:['\u6700\u540e\u662f\u5168\u5c40\u5185\u5b58 Global Memory\uff0c\u4e5f\u5c31\u662f "\u6700\u4eb2\u6c11\u7684"\u3001\u54b1\u4eec\u5e73\u65f6\u558a\u5f97\u6700\u987a\u53e3\u7684 GPU \u663e\u5b58\u3002\u5bf9\u4e8e\u9759\u6001\u5206\u914d\u7684\u5168\u5c40\u5185\u5b58\uff0c\u7528 ',(0,t.jsx)(r.code,{children:"__device__"})," \u5173\u952e\u5b57\u8fdb\u884c\u6807\u8bc6\uff0c\u800c\u52a8\u6001\u5206\u914d\u7684\u5168\u5c40\u5185\u5b58\u662f Host \u7aef\u91c7\u7528\u663e\u5b58\u7ba1\u7406\u51fd\u6570\u8fdb\u884c\u5206\u914d\u7684\u3002\u5168\u5c40\u5185\u5b58\u662f GPU \u4e2d\u7684\u4e3b\u8981\u5185\u5b58\u533a\u57df\uff0c\u7528\u4e8e\u5b58\u50a8\u7a0b\u5e8f\u4e2d\u7684\u53d8\u91cf\u3001\u6570\u7ec4\u548c\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u3002\u5168\u5c40\u5185\u5b58\u7684\u8bbf\u95ee\u901f\u5ea6\u76f8\u5bf9\u8f83\u6162\uff0c\u4f46\u5bb9\u91cf\u8f83\u5927\uff0c\u53ef\u4ee5\u5bb9\u7eb3\u5927\u91cf\u7684\u6570\u636e\u3002\u5168\u5c40\u5185\u5b58\u662f\u6240\u6709\u7ebf\u7a0b\u5171\u4eab\u7684\uff0c\u56e0\u6b64\u591a\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u540c\u65f6\u8bbf\u95ee\u5168\u5c40\u5185\u5b58\u4e2d\u7684\u6570\u636e\u3002"]})]})}function m(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3528:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/image-a24807f7b65379b2b738da4a376765ba.png"},1151:(e,r,o)=>{o.d(r,{Z:()=>d,a:()=>a});var t=o(7294);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);