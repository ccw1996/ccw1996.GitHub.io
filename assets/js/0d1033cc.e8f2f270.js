"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[3727],{9525:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=n(5893),o=n(1151);const l={title:"minigpt4\u672c\u5730\u90e8\u7f72",description:"minigpt4\u672c\u5730\u90e8\u7f72",tags:["work"],editor:"caroot"},r=void 0,a={id:"LLM/local_minigpt4",title:"minigpt4\u672c\u5730\u90e8\u7f72",description:"minigpt4\u672c\u5730\u90e8\u7f72",source:"@site/docs/LLM/local_minigpt4.md",sourceDirName:"LLM",slug:"/LLM/local_minigpt4",permalink:"/docs/LLM/local_minigpt4",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/LLM/local_minigpt4.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1719151396,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{title:"minigpt4\u672c\u5730\u90e8\u7f72",description:"minigpt4\u672c\u5730\u90e8\u7f72",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u8bed\u8a00\u6a21\u578b\u7684\u8bad\u7ec3\u65f6\u95f4\uff1a\u4ece\u4f30\u7b97\u5230 FLOPs \u63a8\u5bfc",permalink:"/docs/LLM/flop_calc"},next:{title:"\u5927\u6a21\u578b\u8bad\u7ec3",permalink:"/docs/LLM/model_training"}},s={},c=[];function d(e){const i={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"\u83b7\u53d6LLaMA"}),"\n",(0,t.jsx)(i.li,{children:"\u83b7\u53d6Vicuna\u589e\u91cf\u6587\u4ef6"}),"\n",(0,t.jsx)(i.li,{children:"\u751f\u6210Vicuna\u6a21\u578b"}),"\n",(0,t.jsx)(i.li,{children:"\u8bbe\u7f6eMini GPT-4"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["\u9996\u5148\u514b\u9686MiniGPT-4\u7684\u4ed3\u5e93\n\u5c06MiniGPT-4/minigpt4/configs/models/minigpt4.yaml\u4e2dllama_model:\u7684\u503c\u6539\u6210\u521a\u521a\u5f97\u5230\u7684Vicuna 7B\u6587\u4ef6\u5939\u3002\n\u7ee7\u7eed\u53c2\u8003\u90a3\u4e2a\u6587\u6863\uff0c\u4e0b\u8f7dMiniGPT-4\u7684\u989d\u5916\u6a21\u578b\u53c2\u6570\n7B: ",(0,t.jsx)(i.a,{href:"https://drive.google.com/file/d/1RY9jV0dyqLX-o38LrumkKRh6Jtaop58R/view",children:"https://drive.google.com/file/d/1RY9jV0dyqLX-o38LrumkKRh6Jtaop58R/view"}),"\n13B: ",(0,t.jsx)(i.a,{href:"https://drive.google.com/file/d/1a4zLvaiDBr-36pasffmgpvH5P7CKmpze/view",children:"https://drive.google.com/file/d/1a4zLvaiDBr-36pasffmgpvH5P7CKmpze/view"}),"\n\u6211\u4e0b\u4e867B\u7684\u7248\u672c\n\u7136\u540e\u4fee\u6539MiniGPT-4/eval_configs/minigpt4_eval.yaml\uff0c\u5c06ckpt:\u7684\u503c\u6539\u6210\u521a\u521a\u4e0b\u5230\u7684\u989d\u5916\u6a21\u578b\u53c2\u6570\u7684\u8def\u5f84\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u542f\u52a8demo!\n\u6839\u636eMiniGPT-4/environment.yml\u88c5\u597d\u73af\u5883\uff08\u4ed6\u7ed9\u7684\u662fconda\u7684\u73af\u5883\uff0c\u5982\u679c\u4f60\u60f3\u8981requirements.txt\uff0c\u770b\u6211\u8fd9\u7bc7\u6587\u7ae0\u7684\u6700\u540e\uff09\uff0c\u7136\u540e\u8fd0\u884c"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"python3 demo.py --cfg-path eval_configs/minigpt4_eval.yaml  --gpu-id 0\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u5b83\u4f1a\u81ea\u52a8\u4e0b\u8f7dViT\u548cQFormer\uff08BLIP-2\u6587\u7ae0\u91cc\uff0cViT\u548cLLM\u7684\u6865\u63a5\u5668\uff09\uff0c\u4fdd\u8bc1\u7f51\u7edc\u901a\u7545\u3002"})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>r});var t=n(7294);const o={},l=t.createContext(o);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);