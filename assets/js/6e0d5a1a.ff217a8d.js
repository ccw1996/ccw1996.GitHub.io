"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[939],{7123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const r={title:"\u9002\u914d\u5668\u6a21\u5f0f",description:"\u9002\u914d\u5668\u6a21\u5f0f",sidebar_position:7,tags:["design","interview"],editor:"caroot"},d=void 0,o={id:"design_model/Adapter",title:"\u9002\u914d\u5668\u6a21\u5f0f",description:"\u9002\u914d\u5668\u6a21\u5f0f",source:"@site/docs/design_model/Adapter.md",sourceDirName:"design_model",slug:"/design_model/Adapter",permalink:"/docs/design_model/Adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design_model/Adapter.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1699459588,formattedLastUpdatedAt:"Nov 8, 2023",sidebarPosition:7,frontMatter:{title:"\u9002\u914d\u5668\u6a21\u5f0f",description:"\u9002\u914d\u5668\u6a21\u5f0f",sidebar_position:7,tags:["design","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u539f\u578b\u6a21\u5f0f",permalink:"/docs/design_model/Clone"},next:{title:"\u88c5\u9970\u5668\u6a21\u5f0f",permalink:"/docs/design_model/Decorator"}},l={},c=[];function a(e){const n={li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u9002\u914d\u5668\u5b9e\u73b0\u4e0e\u5176\u4e2d\u4e00\u4e2a\u73b0\u6709\u5bf9\u8c61\u517c\u5bb9\u7684\u63a5\u53e3\u3002\n\u73b0\u6709\u5bf9\u8c61\u53ef\u4ee5\u4f7f\u7528\u8be5\u63a5\u53e3\u5b89\u5168\u5730\u8c03\u7528\u9002\u914d\u5668\u65b9\u6cd5\u3002\n\u9002\u914d\u5668\u65b9\u6cd5\u88ab\u8c03\u7528\u540e\u5c06\u4ee5\u53e6\u4e00\u4e2a\u5bf9\u8c61\u517c\u5bb9\u7684\u683c\u5f0f\u548c\u987a\u5e8f\u5c06\u8bf7\u6c42\u4f20\u9012\u7ed9\u8be5\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u786e\u4fdd\u81f3\u5c11\u6709\u4e24\u4e2a\u7c7b\u7684\u63a5\u53e3\u4e0d\u517c\u5bb9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u65e0\u6cd5\u4fee\u6539 \uff08\u901a\u5e38\u662f\u7b2c\u4e09\u65b9\u3001 \u9057\u7559\u7cfb\u7edf\u6216\u8005\u5b58\u5728\u4f17\u591a\u5df2\u6709\u4f9d\u8d56\u7684\u7c7b\uff09 \u7684\u529f\u80fd\u6027\u670d\u52a1\u7c7b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u6216\u591a\u4e2a\u5c06\u53d7\u76ca\u4e8e\u4f7f\u7528\u670d\u52a1\u7c7b\u7684\u5ba2\u6237\u7aef\u7c7b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u58f0\u660e\u5ba2\u6237\u7aef\u63a5\u53e3\uff0c \u63cf\u8ff0\u5ba2\u6237\u7aef\u5982\u4f55\u4e0e\u670d\u52a1\u4ea4\u4e92\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u521b\u5efa\u9075\u5faa\u5ba2\u6237\u7aef\u63a5\u53e3\u7684\u9002\u914d\u5668\u7c7b\u3002 \u6240\u6709\u65b9\u6cd5\u6682\u65f6\u90fd\u4e3a\u7a7a\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u9002\u914d\u5668\u7c7b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\u7528\u4e8e\u4fdd\u5b58\u5bf9\u4e8e\u670d\u52a1\u5bf9\u8c61\u7684\u5f15\u7528\u3002 \u901a\u5e38\u60c5\u51b5\u4e0b\u4f1a\u901a\u8fc7\u6784\u9020\u51fd\u6570\u5bf9\u8be5\u6210\u5458\u53d8\u91cf\u8fdb\u884c\u521d\u59cb\u5316\uff0c \u4f46\u6709\u65f6\u5728\u8c03\u7528\u5176\u65b9\u6cd5\u65f6\u5c06\u8be5\u53d8\u91cf\u4f20\u9012\u7ed9\u9002\u914d\u5668\u4f1a\u66f4\u65b9\u4fbf\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f9d\u6b21\u5b9e\u73b0\u9002\u914d\u5668\u7c7b\u5ba2\u6237\u7aef\u63a5\u53e3\u7684\u6240\u6709\u65b9\u6cd5\u3002 \u9002\u914d\u5668\u4f1a\u5c06\u5b9e\u9645\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u670d\u52a1\u5bf9\u8c61\uff0c \u81ea\u8eab\u53ea\u8d1f\u8d23\u63a5\u53e3\u6216\u6570\u636e\u683c\u5f0f\u7684\u8f6c\u6362\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u5fc5\u987b\u901a\u8fc7\u5ba2\u6237\u7aef\u63a5\u53e3\u4f7f\u7528\u9002\u914d\u5668\u3002 \u8fd9\u6837\u4e00\u6765\uff0c \u4f60\u5c31\u53ef\u4ee5\u5728\u4e0d\u5f71\u54cd\u5ba2\u6237\u7aef\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u4fee\u6539\u6216\u6269\u5c55\u9002\u914d\u5668\u3002"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var i=t(7294);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);