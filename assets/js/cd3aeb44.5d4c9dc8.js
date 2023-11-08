"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[9831],{8086:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>j,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var i=l(5893),d=l(1151);const t={title:"\u9762\u5411\u5bf9\u8c61\u601d\u60f3",description:"\u9762\u5411\u5bf9\u8c61\u601d\u60f3",sidebar_position:1,tags:["design","interview"],editor:"caroot"},s=void 0,r={id:"design_model/object_model",title:"\u9762\u5411\u5bf9\u8c61\u601d\u60f3",description:"\u9762\u5411\u5bf9\u8c61\u601d\u60f3",source:"@site/docs/design_model/object_model.md",sourceDirName:"design_model",slug:"/design_model/object_model",permalink:"/docs/design_model/object_model",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design_model/object_model.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1699459588,formattedLastUpdatedAt:"Nov 8, 2023",sidebarPosition:1,frontMatter:{title:"\u9762\u5411\u5bf9\u8c61\u601d\u60f3",description:"\u9762\u5411\u5bf9\u8c61\u601d\u60f3",sidebar_position:1,tags:["design","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"design_model",permalink:"/docs/design_model/"},next:{title:"\u7b56\u7565\u6a21\u5f0f",permalink:"/docs/design_model/strategy"}},c={},h=[{value:"\u4e09\u5927\u7279\u6027",id:"\u4e09\u5927\u7279\u6027",level:2},{value:"\u5c01\u88c5",id:"\u5c01\u88c5",level:3},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",level:3},{value:"\u591a\u6001",id:"\u591a\u6001",level:3},{value:"\u7c7b\u56fe",id:"\u7c7b\u56fe",level:2},{value:"\u6cdb\u5316\u5173\u7cfb",id:"\u6cdb\u5316\u5173\u7cfb",level:3},{value:"\u5b9e\u73b0\u5173\u7cfb",id:"\u5b9e\u73b0\u5173\u7cfb",level:3},{value:"\u805a\u5408\u5173\u7cfb",id:"\u805a\u5408\u5173\u7cfb",level:3},{value:"\u7ec4\u5408\u5173\u7cfb",id:"\u7ec4\u5408\u5173\u7cfb",level:3},{value:"\u5173\u8054\u5173\u7cfb",id:"\u5173\u8054\u5173\u7cfb",level:3},{value:"\u4f9d\u8d56\u5173\u7cfb",id:"\u4f9d\u8d56\u5173\u7cfb",level:3},{value:"\u8bbe\u8ba1\u539f\u5219",id:"\u8bbe\u8ba1\u539f\u5219",level:2},{value:"\u5355\u4e00\u8d23\u4efb\u539f\u5219",id:"\u5355\u4e00\u8d23\u4efb\u539f\u5219",level:3},{value:"2. \u5f00\u653e\u5c01\u95ed\u539f\u5219",id:"2-\u5f00\u653e\u5c01\u95ed\u539f\u5219",level:3},{value:"3. \u91cc\u6c0f\u66ff\u6362\u539f\u5219",id:"3-\u91cc\u6c0f\u66ff\u6362\u539f\u5219",level:3},{value:"4. \u63a5\u53e3\u5206\u79bb\u539f\u5219",id:"4-\u63a5\u53e3\u5206\u79bb\u539f\u5219",level:3},{value:"5. \u4f9d\u8d56\u5012\u7f6e\u539f\u5219",id:"5-\u4f9d\u8d56\u5012\u7f6e\u539f\u5219",level:3},{value:"\u5176\u4ed6\u5e38\u89c1\u539f\u5219",id:"\u5176\u4ed6\u5e38\u89c1\u539f\u5219",level:2},{value:"1. \u8fea\u7c73\u7279\u6cd5\u5219",id:"1-\u8fea\u7c73\u7279\u6cd5\u5219",level:3},{value:"2. \u5408\u6210\u590d\u7528\u539f\u5219",id:"2-\u5408\u6210\u590d\u7528\u539f\u5219",level:3},{value:"3. \u5171\u540c\u5c01\u95ed\u539f\u5219",id:"3-\u5171\u540c\u5c01\u95ed\u539f\u5219",level:3},{value:"4. \u7a33\u5b9a\u62bd\u8c61\u539f\u5219",id:"4-\u7a33\u5b9a\u62bd\u8c61\u539f\u5219",level:3},{value:"5. \u7a33\u5b9a\u4f9d\u8d56\u539f\u5219",id:"5-\u7a33\u5b9a\u4f9d\u8d56\u539f\u5219",level:3}];function x(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4e09\u5927\u7279\u6027",children:"\u4e09\u5927\u7279\u6027"}),"\n",(0,i.jsx)(n.h3,{id:"\u5c01\u88c5",children:"\u5c01\u88c5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u51cf\u5c11\u8026\u5408\uff1a\u53ef\u4ee5\u72ec\u7acb\u5730\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u4f18\u5316\u3001\u4f7f\u7528\u3001\u7406\u89e3\u548c\u4fee\u6539"}),"\n",(0,i.jsx)(n.li,{children:"\u51cf\u8f7b\u7ef4\u62a4\u7684\u8d1f\u62c5\uff1a\u53ef\u4ee5\u66f4\u5bb9\u6613\u88ab\u7406\u89e3\uff0c\u5e76\u4e14\u5728\u8c03\u8bd5\u7684\u65f6\u5019\u53ef\u4ee5\u4e0d\u5f71\u54cd\u5176\u4ed6\u6a21\u5757"}),"\n",(0,i.jsx)(n.li,{children:"\u6709\u6548\u5730\u8c03\u8282\u6027\u80fd\uff1a\u53ef\u4ee5\u901a\u8fc7\u5256\u6790\u6765\u786e\u5b9a\u54ea\u4e9b\u6a21\u5757\u5f71\u54cd\u4e86\u7cfb\u7edf\u7684\u6027\u80fd"}),"\n",(0,i.jsx)(n.li,{children:"\u63d0\u9ad8\u8f6f\u4ef6\u7684\u53ef\u91cd\u7528\u6027"}),"\n",(0,i.jsx)(n.li,{children:"\u964d\u4f4e\u4e86\u6784\u5efa\u5927\u578b\u7cfb\u7edf\u7684\u98ce\u9669\uff1a\u5373\u4f7f\u6574\u4e2a\u7cfb\u7edf\u4e0d\u53ef\u7528\uff0c\u4f46\u662f\u8fd9\u4e9b\u72ec\u7acb\u7684\u6a21\u5757\u5374\u6709\u53ef\u80fd\u662f\u53ef\u7528\u7684"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7ee7\u627f",children:"\u7ee7\u627f"}),"\n",(0,i.jsx)(n.h3,{id:"\u591a\u6001",children:"\u591a\u6001"}),"\n",(0,i.jsx)(n.p,{children:"\u591a\u6001\u5206\u4e3a\u7f16\u8bd1\u65f6\u591a\u6001\u548c\u8fd0\u884c\u65f6\u591a\u6001\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8bd1\u65f6\u591a\u6001\u4e3b\u8981\u6307\u65b9\u6cd5\u7684\u91cd\u8f7d"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd0\u884c\u65f6\u591a\u6001\u6307\u7a0b\u5e8f\u4e2d\u5b9a\u4e49\u7684\u5bf9\u8c61\u5f15\u7528\u6240\u6307\u5411\u7684\u5177\u4f53\u7c7b\u578b\u5728\u8fd0\u884c\u671f\u95f4\u624d\u786e\u5b9a"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd0\u884c\u65f6\u591a\u6001\u6709\u4e09\u4e2a\u6761\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7ee7\u627f"}),"\n",(0,i.jsx)(n.li,{children:"\u8986\u76d6\uff08\u91cd\u5199\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u5411\u4e0a\u8f6c\u578b"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7c7b\u56fe",children:"\u7c7b\u56fe"}),"\n",(0,i.jsx)(n.h3,{id:"\u6cdb\u5316\u5173\u7cfb",children:"\u6cdb\u5316\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6765\u63cf\u8ff0\u7ee7\u627f\u5173\u7cfb"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u73b0\u5173\u7cfb",children:"\u5b9e\u73b0\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6765\u5b9e\u73b0\u4e00\u4e2a\u63a5\u53e3"}),"\n",(0,i.jsx)(n.h3,{id:"\u805a\u5408\u5173\u7cfb",children:"\u805a\u5408\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u793a\u6574\u4f53\u7531\u90e8\u5206\u7ec4\u6210\uff0c\u4f46\u662f\u6574\u4f53\u548c\u90e8\u5206\u4e0d\u662f\u5f3a\u4f9d\u8d56\u7684\uff0c\u6574\u4f53\u4e0d\u5b58\u5728\u4e86\u90e8\u5206\u8fd8\u662f\u4f1a\u5b58\u5728\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7ec4\u5408\u5173\u7cfb",children:"\u7ec4\u5408\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u548c\u805a\u5408\u4e0d\u540c\uff0c\u7ec4\u5408\u4e2d\u6574\u4f53\u548c\u90e8\u5206\u662f\u5f3a\u4f9d\u8d56\u7684\uff0c\u6574\u4f53\u4e0d\u5b58\u5728\u4e86\u90e8\u5206\u4e5f\u4e0d\u5b58\u5728\u4e86\u3002\u6bd4\u5982\u516c\u53f8\u548c\u90e8\u95e8\uff0c\u516c\u53f8\u6ca1\u4e86\u90e8\u95e8\u5c31\u4e0d\u5b58\u5728\u4e86\u3002\u4f46\u662f\u516c\u53f8\u548c\u5458\u5de5\u5c31\u5c5e\u4e8e\u805a\u5408\u5173\u7cfb\u4e86\uff0c\u56e0\u4e3a\u516c\u53f8\u6ca1\u4e86\u5458\u5de5\u8fd8\u5728\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5173\u8054\u5173\u7cfb",children:"\u5173\u8054\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u793a\u4e0d\u540c\u7c7b\u5bf9\u8c61\u4e4b\u95f4\u6709\u5173\u8054\uff0c\u8fd9\u662f\u4e00\u79cd\u9759\u6001\u5173\u7cfb\uff0c\u4e0e\u8fd0\u884c\u8fc7\u7a0b\u7684\u72b6\u6001\u65e0\u5173\uff0c\u5728\u6700\u5f00\u59cb\u5c31\u53ef\u4ee5\u786e\u5b9a\u3002\u56e0\u6b64\u4e5f\u53ef\u4ee5\u7528 1 \u5bf9 1\u3001\u591a\u5bf9 1\u3001\u591a\u5bf9\u591a\u8fd9\u79cd\u5173\u8054\u5173\u7cfb\u6765\u8868\u793a\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u4f9d\u8d56\u5173\u7cfb",children:"\u4f9d\u8d56\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u548c\u5173\u8054\u5173\u7cfb\u4e0d\u540c\u7684\u662f\uff0c\u4f9d\u8d56\u5173\u7cfb\u662f\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u8d77\u4f5c\u7528\u7684\u3002A \u7c7b\u548c B \u7c7b\u662f\u4f9d\u8d56\u5173\u7cfb\u4e3b\u8981\u6709\u4e09\u79cd\u5f62\u5f0f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A \u7c7b\u662f B \u7c7b\u65b9\u6cd5\u7684\u5c40\u90e8\u53d8\u91cf\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"A \u7c7b\u662f B \u7c7b\u65b9\u6cd5\u7684\u53c2\u6570\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"A \u7c7b\u5411 B \u7c7b\u53d1\u9001\u6d88\u606f\uff0c\u4ece\u800c\u5f71\u54cd B \u7c7b\u53d1\u751f\u53d8\u5316"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbe\u8ba1\u539f\u5219",children:"\u8bbe\u8ba1\u539f\u5219"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u7b80\u5199"}),(0,i.jsx)(n.th,{children:"\u5168\u62fc"}),(0,i.jsx)(n.th,{children:"\u4e2d\u6587\u7ffb\u8bd1"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SRP"}),(0,i.jsx)(n.td,{children:"The Single Responsibility Principle"}),(0,i.jsx)(n.td,{children:"\u5355\u4e00\u8d23\u4efb\u539f\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OCP"}),(0,i.jsx)(n.td,{children:"The Open Closed Principle"}),(0,i.jsx)(n.td,{children:"\u5f00\u653e\u5c01\u95ed\u539f\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LSP"}),(0,i.jsx)(n.td,{children:"The Liskov Substitution Principle"}),(0,i.jsx)(n.td,{children:"\u91cc\u6c0f\u66ff\u6362\u539f\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ISP"}),(0,i.jsx)(n.td,{children:"The Interface Segregation Principle"}),(0,i.jsx)(n.td,{children:"\u63a5\u53e3\u5206\u79bb\u539f\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DIP"}),(0,i.jsx)(n.td,{children:"The Dependency Inversion Principle"}),(0,i.jsx)(n.td,{children:"\u4f9d\u8d56\u5012\u7f6e\u539f\u5219"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u5355\u4e00\u8d23\u4efb\u539f\u5219",children:"\u5355\u4e00\u8d23\u4efb\u539f\u5219"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u4e00\u4e2a\u7c7b\u7684\u539f\u56e0\u5e94\u8be5\u53ea\u6709\u4e00\u4e2a\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6362\u53e5\u8bdd\u8bf4\u5c31\u662f\u8ba9\u4e00\u4e2a\u7c7b\u53ea\u8d1f\u8d23\u4e00\u4ef6\u4e8b\uff0c\u5f53\u8fd9\u4e2a\u7c7b\u9700\u8981\u505a\u8fc7\u591a\u4e8b\u60c5\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u5206\u89e3\u8fd9\u4e2a\u7c7b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e00\u4e2a\u7c7b\u627f\u62c5\u7684\u804c\u8d23\u8fc7\u591a\uff0c\u5c31\u7b49\u4e8e\u628a\u8fd9\u4e9b\u804c\u8d23\u8026\u5408\u5728\u4e86\u4e00\u8d77\uff0c\u4e00\u4e2a\u804c\u8d23\u7684\u53d8\u5316\u53ef\u80fd\u4f1a\u524a\u5f31\u8fd9\u4e2a\u7c7b\u5b8c\u6210\u5176\u5b83\u804c\u8d23\u7684\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u5f00\u653e\u5c01\u95ed\u539f\u5219",children:"2. \u5f00\u653e\u5c01\u95ed\u539f\u5219"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u7c7b\u5e94\u8be5\u5bf9\u6269\u5c55\u5f00\u653e\uff0c\u5bf9\u4fee\u6539\u5173\u95ed\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6269\u5c55\u5c31\u662f\u6dfb\u52a0\u65b0\u529f\u80fd\u7684\u610f\u601d\uff0c\u56e0\u6b64\u8be5\u539f\u5219\u8981\u6c42\u5728\u6dfb\u52a0\u65b0\u529f\u80fd\u65f6\u4e0d\u9700\u8981\u4fee\u6539\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7b26\u5408\u5f00\u95ed\u539f\u5219\u6700\u5178\u578b\u7684\u8bbe\u8ba1\u6a21\u5f0f\u662f\u88c5\u9970\u8005\u6a21\u5f0f\uff0c\u5b83\u53ef\u4ee5\u52a8\u6001\u5730\u5c06\u8d23\u4efb\u9644\u52a0\u5230\u5bf9\u8c61\u4e0a\uff0c\u800c\u4e0d\u7528\u53bb\u4fee\u6539\u7c7b\u7684\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-\u91cc\u6c0f\u66ff\u6362\u539f\u5219",children:"3. \u91cc\u6c0f\u66ff\u6362\u539f\u5219"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b50\u7c7b\u5bf9\u8c61\u5fc5\u987b\u80fd\u591f\u66ff\u6362\u6389\u6240\u6709\u7236\u7c7b\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7ee7\u627f\u662f\u4e00\u79cd IS-A \u5173\u7cfb\uff0c\u5b50\u7c7b\u9700\u8981\u80fd\u591f\u5f53\u6210\u7236\u7c7b\u6765\u4f7f\u7528\uff0c\u5e76\u4e14\u9700\u8981\u6bd4\u7236\u7c7b\u66f4\u7279\u6b8a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u6ee1\u8db3\u8fd9\u4e2a\u539f\u5219\uff0c\u90a3\u4e48\u5404\u4e2a\u5b50\u7c7b\u7684\u884c\u4e3a\u4e0a\u5c31\u4f1a\u6709\u5f88\u5927\u5dee\u5f02\uff0c\u589e\u52a0\u7ee7\u627f\u4f53\u7cfb\u7684\u590d\u6742\u5ea6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"4-\u63a5\u53e3\u5206\u79bb\u539f\u5219",children:"4. \u63a5\u53e3\u5206\u79bb\u539f\u5219"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e0d\u5e94\u8be5\u5f3a\u8feb\u5ba2\u6237\u4f9d\u8d56\u4e8e\u5b83\u4eec\u4e0d\u7528\u7684\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\u4f7f\u7528\u591a\u4e2a\u4e13\u95e8\u7684\u63a5\u53e3\u6bd4\u4f7f\u7528\u5355\u4e00\u7684\u603b\u63a5\u53e3\u8981\u597d\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"5-\u4f9d\u8d56\u5012\u7f6e\u539f\u5219",children:"5. \u4f9d\u8d56\u5012\u7f6e\u539f\u5219"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u9ad8\u5c42\u6a21\u5757\u4e0d\u5e94\u8be5\u4f9d\u8d56\u4e8e\u4f4e\u5c42\u6a21\u5757\uff0c\u4e8c\u8005\u90fd\u5e94\u8be5\u4f9d\u8d56\u4e8e\u62bd\u8c61\uff1b\n\u62bd\u8c61\u4e0d\u5e94\u8be5\u4f9d\u8d56\u4e8e\u7ec6\u8282\uff0c\u7ec6\u8282\u5e94\u8be5\u4f9d\u8d56\u4e8e\u62bd\u8c61\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u9ad8\u5c42\u6a21\u5757\u5305\u542b\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u91cd\u8981\u7684\u7b56\u7565\u9009\u62e9\u548c\u4e1a\u52a1\u6a21\u5757\uff0c\u5982\u679c\u9ad8\u5c42\u6a21\u5757\u4f9d\u8d56\u4e8e\u4f4e\u5c42\u6a21\u5757\uff0c\u90a3\u4e48\u4f4e\u5c42\u6a21\u5757\u7684\u6539\u52a8\u5c31\u4f1a\u76f4\u63a5\u5f71\u54cd\u5230\u9ad8\u5c42\u6a21\u5757\uff0c\u4ece\u800c\u8feb\u4f7f\u9ad8\u5c42\u6a21\u5757\u4e5f\u9700\u8981\u6539\u52a8\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f9d\u8d56\u4e8e\u62bd\u8c61\u610f\u5473\u7740\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4efb\u4f55\u53d8\u91cf\u90fd\u4e0d\u5e94\u8be5\u6301\u6709\u4e00\u4e2a\u6307\u5411\u5177\u4f53\u7c7b\u7684\u6307\u9488\u6216\u8005\u5f15\u7528\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u4efb\u4f55\u7c7b\u90fd\u4e0d\u5e94\u8be5\u4ece\u5177\u4f53\u7c7b\u6d3e\u751f\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u4efb\u4f55\u65b9\u6cd5\u90fd\u4e0d\u5e94\u8be5\u8986\u5199\u5b83\u7684\u4efb\u4f55\u57fa\u7c7b\u4e2d\u7684\u5df2\u7ecf\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5176\u4ed6\u5e38\u89c1\u539f\u5219",children:"\u5176\u4ed6\u5e38\u89c1\u539f\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u4e86\u4e0a\u8ff0\u7684\u7ecf\u5178\u539f\u5219\uff0c\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u8fd8\u6709\u4e0b\u9762\u8fd9\u4e9b\u5e38\u89c1\u7684\u8bbe\u8ba1\u539f\u5219\u3002"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"\u7b80\u5199"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"\u5168\u62fc"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"\u4e2d\u6587\u7ffb\u8bd1"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"LOD"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"The Law of Demeter"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u8fea\u7c73\u7279\u6cd5\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"CRP"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"The Composite Reuse Principle"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u5408\u6210\u590d\u7528\u539f\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"CCP"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"The Common Closure Principle"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u5171\u540c\u5c01\u95ed\u539f\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"SAP"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"The Stable Abstractions Principle"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u7a33\u5b9a\u62bd\u8c61\u539f\u5219"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"SDP"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"The Stable Dependencies Principle"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u7a33\u5b9a\u4f9d\u8d56\u539f\u5219"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"1-\u8fea\u7c73\u7279\u6cd5\u5219",children:"1. \u8fea\u7c73\u7279\u6cd5\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u8fea\u7c73\u7279\u6cd5\u5219\u53c8\u53eb\u4f5c\u6700\u5c11\u77e5\u8bc6\u539f\u5219\uff08Least Knowledge Principle\uff0c\u7b80\u5199 LKP\uff09\uff0c\u5c31\u662f\u8bf4\u4e00\u4e2a\u5bf9\u8c61\u5e94\u5f53\u5bf9\u5176\u4ed6\u5bf9\u8c61\u6709\u5c3d\u53ef\u80fd\u5c11\u7684\u4e86\u89e3\uff0c\u4e0d\u548c\u964c\u751f\u4eba\u8bf4\u8bdd\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u5408\u6210\u590d\u7528\u539f\u5219",children:"2. \u5408\u6210\u590d\u7528\u539f\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u5c3d\u91cf\u4f7f\u7528\u5bf9\u8c61\u7ec4\u5408\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u7ee7\u627f\u6765\u8fbe\u5230\u590d\u7528\u7684\u76ee\u7684\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-\u5171\u540c\u5c01\u95ed\u539f\u5219",children:"3. \u5171\u540c\u5c01\u95ed\u539f\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u8d77\u4fee\u6539\u7684\u7c7b\uff0c\u5e94\u8be5\u7ec4\u5408\u5728\u4e00\u8d77\uff08\u540c\u4e00\u4e2a\u5305\u91cc\uff09\u3002\u5982\u679c\u5fc5\u987b\u4fee\u6539\u5e94\u7528\u7a0b\u5e8f\u91cc\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u5e0c\u671b\u6240\u6709\u7684\u4fee\u6539\u90fd\u53d1\u751f\u5728\u4e00\u4e2a\u5305\u91cc\uff08\u4fee\u6539\u5173\u95ed\uff09\uff0c\u800c\u4e0d\u662f\u904d\u5e03\u5728\u5f88\u591a\u5305\u91cc\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"4-\u7a33\u5b9a\u62bd\u8c61\u539f\u5219",children:"4. \u7a33\u5b9a\u62bd\u8c61\u539f\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u7a33\u5b9a\u7684\u5305\u5e94\u8be5\u662f\u6700\u62bd\u8c61\u7684\u5305\uff0c\u4e0d\u7a33\u5b9a\u7684\u5305\u5e94\u8be5\u662f\u5177\u4f53\u7684\u5305\uff0c\u5373\u5305\u7684\u62bd\u8c61\u7a0b\u5ea6\u8ddf\u5b83\u7684\u7a33\u5b9a\u6027\u6210\u6b63\u6bd4\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"5-\u7a33\u5b9a\u4f9d\u8d56\u539f\u5219",children:"5. \u7a33\u5b9a\u4f9d\u8d56\u539f\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u5305\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u90fd\u5e94\u8be5\u662f\u7a33\u5b9a\u65b9\u5411\u4f9d\u8d56\u7684\uff0c\u5305\u8981\u4f9d\u8d56\u7684\u5305\u8981\u6bd4\u81ea\u5df1\u66f4\u5177\u6709\u7a33\u5b9a\u6027\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>s});var i=l(7294);const d={},t=i.createContext(d);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);