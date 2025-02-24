"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1488],{2175:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/image-2-97f6acc46a6c9ca48ae446f48ec11de9.png"},4798:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/image-365aafcb3b7d86cd14e0e1ae45b4db52.png"},5255:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"ml/training/Zero","title":"\u5927\u89c4\u6a21\u673a\u5668\u5b66\u4e60\u7684\u7b2c\u56db\u79cd\u5883\u754c--\u57fa\u7840\u6a21\u578b\u8bad\u7ec3\u4e2d\u7684\u6570\u636e\u5e76\u884c","description":"\u6a21\u578b\u72b6\u6001\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u901a\u5e38\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u663e\u5b58\uff0c\u539f\u59cb\u7684DP\u5177\u6709\u826f\u597d\u7684\u8ba1\u7b97/\u901a\u4fe1\u6548\u7387\uff0c\u4f46\u663e\u5b58\u6548\u7387\u8f83\u5dee\u3002\u66f4\u5177\u4f53\u5730\u8bf4\uff0cDP\u5728\u6240\u6709\u8fdb\u7a0b\u4e2d\u5747\u9700\u8981\u5b58\u653e\u6574\u4e2a\u6a21\u578b\u526f\u672c\uff0c\u4ece\u800c\u5bfc\u81f4\u4e86\u5197\u4f59\u7684\u663e\u5b58\u6d88\u8017\u3002\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u9759\u6001\u5730\u7ef4\u62a4\u4e86\u6574\u4e2a\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u6240\u9700\u7684\u6240\u6709\u6a21\u578b\u72b6\u6001\uff0c\u4f46\u5e76\u4e0d\u662f\u6240\u6709\u6a21\u578b\u72b6\u6001\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u90fd\u9700\u8981\u3002\u800cZeRO-DP\u5b83\u65e2\u5b9e\u73b0\u4e86DP\u7684\u8ba1\u7b97/\u901a\u4fe1\u6548\u7387\uff0c\u53c8\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f18\u5316\u4e86\u663e\u5b58\u6d88\u8017\u3002\u5982\u56fe1\u6240\u793a\uff0c ZeRO-DP\u6709\u4e09\u4e2a\u4e3b\u8981\u7684\u4f18\u5316\u9636\u6bb5\uff0c\u5206\u522b\u5bf9\u5e94\u4e8e\u4f18\u5316\u5668\u72b6\u6001\u3001\u68af\u5ea6\u548c\u53c2\u6570\u7684\u5206\u533a\u3002","source":"@site/docs/ml/training/Zero.md","sourceDirName":"ml/training","slug":"/ml/training/Zero","permalink":"/docs/ml/training/Zero","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/training/Zero.md","tags":[{"inline":true,"label":"work","permalink":"/docs/tags/work"}],"version":"current","lastUpdatedAt":1740402577000,"frontMatter":{"title":"\u5927\u89c4\u6a21\u673a\u5668\u5b66\u4e60\u7684\u7b2c\u56db\u79cd\u5883\u754c--\u57fa\u7840\u6a21\u578b\u8bad\u7ec3\u4e2d\u7684\u6570\u636e\u5e76\u884c","tags":["work"],"editor":"caroot"},"sidebar":"tutorialSidebar","previous":{"title":"training","permalink":"/docs/ml/training/"},"next":{"title":"\u5927\u6a21\u578b\u8bad\u7ec3\u52a0\u901f","permalink":"/docs/ml/training/summary"}}');var r=i(4848),l=i(8453);const s={title:"\u5927\u89c4\u6a21\u673a\u5668\u5b66\u4e60\u7684\u7b2c\u56db\u79cd\u5883\u754c--\u57fa\u7840\u6a21\u578b\u8bad\u7ec3\u4e2d\u7684\u6570\u636e\u5e76\u884c",tags:["work"],editor:"caroot"},a="Zero-DP",c={},o=[{value:"ZeRO-DP\u884c\u4e3a\u5206\u6790",id:"zero-dp\u884c\u4e3a\u5206\u6790",level:2}];function d(n){const e={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"zero-dp",children:"Zero-DP"})}),"\n",(0,r.jsx)(e.p,{children:"\u6a21\u578b\u72b6\u6001\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u901a\u5e38\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u663e\u5b58\uff0c\u539f\u59cb\u7684DP\u5177\u6709\u826f\u597d\u7684\u8ba1\u7b97/\u901a\u4fe1\u6548\u7387\uff0c\u4f46\u663e\u5b58\u6548\u7387\u8f83\u5dee\u3002\u66f4\u5177\u4f53\u5730\u8bf4\uff0cDP\u5728\u6240\u6709\u8fdb\u7a0b\u4e2d\u5747\u9700\u8981\u5b58\u653e\u6574\u4e2a\u6a21\u578b\u526f\u672c\uff0c\u4ece\u800c\u5bfc\u81f4\u4e86\u5197\u4f59\u7684\u663e\u5b58\u6d88\u8017\u3002\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u9759\u6001\u5730\u7ef4\u62a4\u4e86\u6574\u4e2a\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u6240\u9700\u7684\u6240\u6709\u6a21\u578b\u72b6\u6001\uff0c\u4f46\u5e76\u4e0d\u662f\u6240\u6709\u6a21\u578b\u72b6\u6001\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u90fd\u9700\u8981\u3002\u800cZeRO-DP\u5b83\u65e2\u5b9e\u73b0\u4e86DP\u7684\u8ba1\u7b97/\u901a\u4fe1\u6548\u7387\uff0c\u53c8\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f18\u5316\u4e86\u663e\u5b58\u6d88\u8017\u3002\u5982\u56fe1\u6240\u793a\uff0c ZeRO-DP\u6709\u4e09\u4e2a\u4e3b\u8981\u7684\u4f18\u5316\u9636\u6bb5\uff0c\u5206\u522b\u5bf9\u5e94\u4e8e\u4f18\u5316\u5668\u72b6\u6001\u3001\u68af\u5ea6\u548c\u53c2\u6570\u7684\u5206\u533a\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:i(4798).A+"",width:"720",height:"315"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\uff08Pos\uff09\uff1a\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4ec5\u4fdd\u5b58\u5bf9\u5e94\u7684\u5206\u7247\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u6a21\u578b\u68af\u5ea6\u5206\u7247\uff08Pos+g\uff09\uff1a\uff0c\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4ec5\u4fdd\u5b58\u5bf9\u5e94\u7684\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\u4e0e\u68af\u5ea6\u5206\u7247\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u6a21\u578b\u53c2\u6570\u5206\u7247\uff08Pos+g+p\uff09\uff1a\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4ec5\u4fdd\u5b58\u5bf9\u5e94\u7684\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\u3001\u68af\u5ea6\u5206\u7247\u4ee5\u53ca\u53c2\u6570\u5206\u7247\uff1b"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"zero-dp\u884c\u4e3a\u5206\u6790",children:"ZeRO-DP\u884c\u4e3a\u5206\u6790"}),"\n",(0,r.jsx)(e.p,{children:"ZeRO Stage1: \u5355\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4f1a\u4fdd\u5b58\u5b8c\u6574\u7684\u6a21\u578b\u53c2\u6570\u548c\u68af\u5ea6\uff0c\u4fdd\u5b581/n\u7684\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\uff0c\u5355\u4e2astep\u8be6\u7ec6\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u524d\u5411\u8ba1\u7b97\uff1a\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u62ff\u5230\u5bf9\u5e94\u7684\u6570\u636e\u6837\u672c\u8fdb\u884c\u524d\u5411\u8ba1\u7b97\uff0c\u8ba1\u7b97loss\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u53cd\u5411\u8ba1\u7b97\uff1a\u901a\u8fc7\u524d\u5411\u8ba1\u7b97\u7684loss\u548c\u6a21\u578b\u53c2\u6570\u672c\u8eab\uff0c\u8ba1\u7b97\u51fa\u6a21\u578b\u53c2\u6570\u5bf9\u5e94\u7684grad\uff0c\u8fd9\u91cc\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u5747\u6709\u5c5e\u4e8e\u5176\u672c\u8eab\u7684\u5b8c\u6574\u7684\u68af\u5ea6\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u901a\u4fe1\u7ec4\u5185\u901a\u4fe1\uff1a\u6b64\u5904\u901a\u4fe1\u4e3areduce-scatter,\u5373\u5728\u901a\u4fe1\u7ec4\u5185\u6240\u6709\u8ba1\u7b97\u8bbe\u5907\u4e0a\u7684\u68af\u5ea6\u53d1\u9001\u5230\u4e0d\u540c\u8ba1\u7b97\u8bbe\u5907\uff0c\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u7684\u68af\u5ea6\u5176\u4e2d\u5c5e\u4e8e\u5bf9\u5e94\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\u7684\u4e3a\u6240\u6709\u8ba1\u7b97\u8bbe\u5907\u7684\u5e73\u5747\u68af\u5ea6\uff0c\u6ce8\u610f\u8fd9\u91ccreduce-scatter\u4e4b\u540e\uff0c\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u6709\u4e24\u7c7b\u68af\u5ea6\uff1a\u5c5e\u4e8e\u5bf9\u5e94\u4f18\u5316\u5668\u5206\u7247\u7684\u901a\u4fe1\u7ec4\u5185\u5e73\u5747\u8fc7\u7684\u68af\u5ea6\u4e0e\u4e0d\u5c5e\u4e8e\u5bf9\u5e94\u4f18\u5316\u5668\u5206\u7247\u7684\u672a\u901a\u4fe1\u524d\u7684\u68af\u5ea6\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u4f18\u5316\u5668\u8ba1\u7b97\uff1a\u4f18\u5316\u5668\u6839\u636e\u5bf9\u5e94\u5206\u7247\u5df2\u5728\u901a\u4fe1\u7ec4\u5185\u5e73\u5747\u8fc7\u7684\u68af\u5ea6\u53bb\u66f4\u65b0\u5bf9\u5e94\u90e8\u5206\u7684\u6a21\u578b\u53c2\u6570\uff0c\u5f97\u5230\u66f4\u65b0\u8fc7\u7684\u53c2\u6570\uff0c\u8fd9\u65f6\u5019\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4e0a\u67091/n\u7684\u53c2\u6570\u662f\u66f4\u65b0\u540e\u7684\u53c2\u6570\uff0cn-1/n\u7684\u53c2\u6570\u4e3a\u672a\u66f4\u65b0\u7684\u53c2\u6570\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u901a\u4fe1\u7ec4\u5185\u901a\u4fe1:\u6b64\u5904\u901a\u4fe1\u7c7b\u578b\u4e3aallgather\uff0c\u5c06\u5206\u5e03\u5728\u5404\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4e0a\u66f4\u65b0\u540e\u76841/n\u7684\u53c2\u6570\u5206\u53d1\u5230\u6240\u6709\u8ba1\u7b97\u8bbe\u5907\u4e0a\uff0c\u5373\u6b64\u65f6\u6240\u6709\u8ba1\u7b97\u8bbe\u5907\u4e0a\u90fd\u6709\u4e86\u5b8c\u6574\u7684\u66f4\u65b0\u540e\u53c2\u6570\uff1b"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"ZeRO Stage2: \u5355\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4e0a\u4f1a\u4fdd\u5b58\u5b8c\u6574\u7684\u6a21\u578b\u53c2\u6570\uff0c\u4fdd\u5b581/n\u7684\u6a21\u578b\u68af\u5ea6\u4e0e\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\uff0c\u5355\u4e2astep\u8be6\u7ec6\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u524d\u5411\u8ba1\u7b97\uff1a\u6bcf\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u62ff\u5230\u5bf9\u5e94\u7684\u6570\u636e\u6837\u672c\u8fdb\u884c\u524d\u5411\u8ba1\u7b97\uff0c\u8ba1\u7b97loss\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u53cd\u5411\u8ba1\u7b97\uff1a\u8fd9\u91cc\u76f8\u5bf9stage1 \u6709\u4e00\u4e9b\u4e0d\u597d\u7406\u89e3\uff0c\u56e0\u4e3a\u8fd9\u91cc\u6bcf\u4e2a\u663e\u5361\u6ca1\u529e\u6cd5\u6a21\u578b\u7684\u5168\u90e8\u68af\u5ea6\u3002\u4f46\u6240\u5e78\uff0c\u68af\u5ea6\u662f\u9010\u5c42\u8ba1\u7b97\u7684\uff0c\u5f53\u524d\u5411\u8ba1\u7b97loss\u5b8c\u6210\u540e\uff0c\u8ba1\u7b97\u6700\u540e\u4e00\u5c42\u7684\u68af\u5ea6\uff0c\u800c\u6700\u540e\u4e00\u5c42\u7684\u68af\u5ea6\u4f1a\u6309\u67d0\u4e9b\u89c4\u5219\u5c06\u901a\u4fe1\u7ec4\u5185\u6240\u6709\u8ba1\u7b97\u8bbe\u5907\u4e2d\u8be5\u5c42\u7684\u5e73\u5747\u68af\u5ea6\u53d1\u9001\u81f3\u67d0\u4e2a\u8ba1\u7b97\u8bbe\u5907\uff0c\u540c\u65f6\u5220\u6389\u901a\u4fe1\u7ec4\u5185\u5176\u4ed6\u8ba1\u7b97\u8bbe\u5907\u4e0a\u7684\u8be5\u5c42\u68af\u5ea6\u3002\u8fd9\u6837\u9010\u5c42\u6309\u4e0a\u8ff0\u903b\u8f91\uff0c\u6bcf\u4e00\u5c42\u7684\u5e73\u5747\u68af\u5ea6\u90fd\u80fd\u5c5e\u4e8e\u5230\u901a\u4fe1\u7ec4\u5185\u4ec5\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\uff0c\u8fbe\u5230\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4ec5\u4fdd\u5b581/n\u7684\u6a21\u578b\u68af\u5ea6\u3002\u6574\u4f53\u6765\u770b\uff0c\u8fd9\u91cc\u53ef\u4ee5\u7b49\u540c\u4e8e\u68af\u5ea6\u7684\u6574\u4e2areduce-scatter\u7684\u64cd\u4f5c\uff08\u4f1a\u5efa\u7acb\u591a\u6b21\u94fe\u63a5\uff09\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u4f18\u5316\u5668\u8ba1\u7b97\uff1a\u4f18\u5316\u5668\u6839\u636e\u5bf9\u5e94\u5206\u7247\u5df2\u5728\u901a\u4fe1\u7ec4\u5185\u5e73\u5747\u8fc7\u7684\u68af\u5ea6\u53bb\u66f4\u65b0\u5bf9\u5e94\u90e8\u5206\u7684\u6a21\u578b\u53c2\u6570\uff0c\u5f97\u5230\u66f4\u65b0\u8fc7\u7684\u53c2\u6570\uff0c\u8fd9\u65f6\u5019\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4e0a\u67091/n\u7684\u53c2\u6570\u662f\u66f4\u65b0\u540e\u7684\u53c2\u6570\uff0cn-1/n\u7684\u53c2\u6570\u4e3a\u672a\u66f4\u65b0\u7684\u53c2\u6570\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u901a\u4fe1\u7ec4\u5185\u901a\u4fe1:\u6b64\u5904\u901a\u4fe1\u7c7b\u578b\u4e3aallgather\uff0c\u5c06\u5206\u5e03\u5728\u5404\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4e0a\u66f4\u65b0\u540e\u76841/n\u7684\u53c2\u6570\u5206\u53d1\u5230\u6240\u6709\u8ba1\u7b97\u8bbe\u5907\u4e0a\uff0c\u5373\u6b64\u65f6\u6240\u6709\u8ba1\u7b97\u8bbe\u5907\u4e0a\u90fd\u6709\u4e86\u5b8c\u6574\u7684\u66f4\u65b0\u540e\u53c2\u6570\uff1b"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"ZeRO Stage3\u5355\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4e0a\u4fdd\u5b581/n\u7684\u6a21\u578b\u53c2\u6570\u3001\u6a21\u578b\u68af\u5ea6\u4e0e\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\uff0c\u5355\u4e2astep\u8be6\u7ec6\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u901a\u4fe1\u7ec4\u901a\u4fe1+\u524d\u5411\u8ba1\u7b97\uff1a\u6b64\u5904\u7b49\u540c\u4e8eallgather\uff0c\u5373\u901a\u4fe1\u7ec4\u5185\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u62ff\u5230\u7ec4\u5185\u5c5e\u4e8e\u5176\u4ed6\u7684\u53c2\u6570\uff0c\u8fdb\u884c\u524d\u5411\u8ba1\u7b97\uff0c\u53ef\u4ee5\u6309\u6d41\u6c34\u7ebf\uff0c\u9010\u5c42\u83b7\u53d6\uff0c\u5373\u7b2c\u4e00\u5c42\u524d\u5411\u8ba1\u7b97\u65f6\uff0c\u4fdd\u5b58\u8be5\u5c42\u53c2\u6570\u7684\u901a\u4fe1\u8bbe\u5907\uff0c\u5c06\u8be5\u5c42\u53c2\u6570\u5e7f\u64ad\u81f3\u5176\u4ed6\u672a\u4fdd\u5b58\u7684n-1\u4e2a\u8ba1\u7b97\u8bbe\u5907\uff0c\u4f9d\u6b21\u7c7b\u63a8\uff0c\u5373\u53ef\u5b8c\u6210\u524d\u5411\u8ba1\u7b97\uff0c\u8ba1\u7b97\u51faloss\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u901a\u4fe1\u7ec4\u901a\u4fe1+\u540e\u5411\u8ba1\u7b97+\u901a\u4fe1\u7ec4\u901a\u4fe1\uff1a\u601d\u8003\u4e0b\uff0c\u540e\u5411\u8ba1\u7b97\u4e4b\u524d\u4e5f\u8981\u8fdb\u884c\u7b49\u540c\u524d\u5411\u4e2d\u7684\u6a21\u578b\u53c2\u6570\u7684\u5e7f\u64ad\uff0c\u5373\u6bcf\u4e00\u5c42\u5f52\u5c5e\u7684\u8ba1\u7b97\u8bbe\u5907\u5c06\u6a21\u578b\u53c2\u6570\u5e7f\u64ad\u81f3\u5176\u4ed6\u8ba1\u7b97\u8bbe\u5907\uff0c\u5373\u53ef\u8ba1\u7b97\u51fa\u5bf9\u5e94\u7684\u68af\u5ea6\uff0c\u63a5\u7740\u9700\u8981\u8ba1\u7b97\u901a\u4fe1\u7ec4\u5185\u5e73\u5747\u68af\u5ea6\uff0c\u5373\u9700\u8981\u7ec4\u5185\u8bb0\u6027\u4f9d\u6b21reduce-scatter\u5373\u53ef\u6bcf\u4e2a\u8ba1\u7b97\u8bbe\u5907\u4fdd\u5b58\u5bf9\u5e94\u7684\u5e73\u5747\u68af\u5ea6\u4e0e\u6a21\u578b\u53c2\u6570\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u4f18\u5316\u5668\u8ba1\u7b97\uff1a\u6839\u636e\u8ba1\u7b97\u51fa\u7684\u5bf9\u5e94\u5206\u7247\u7684\u5e73\u5747\u68af\u5ea6\u548c\u5bf9\u5e94\u7684\u6a21\u578b\u53c2\u6570\uff0c\u5373\u53ef\u8ba1\u7b97\u51fa\u66f4\u65b0\u540e\u7684\u6a21\u578b\u53c2\u6570\uff1b"}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"zero-r",children:"Zero-R"}),"\n",(0,r.jsx)(e.p,{children:"\u964d\u4f4eactivation\u663e\u5b58"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"activation checkpoint\uff0c\u5c06\u5f88\u591a\u5173\u952eactivation\u6d88\u8017\u663e\u5b58\u8f83\u591a\u7684layer\u5728\u53cd\u5411\u8ba1\u7b97\u65f6\u51b2\u8ba1\u7b97\uff0cactivation checkpoint(recompute)\u662f\u4e00\u79cd\u5e38\u89c1\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u727a\u727233%\u7684\u91cd\u590d\u8ba1\u7b97\u5f00\u9500\u7684\u540c\u65f6\uff0c\u5c06activation\u663e\u5b58\u51cf\u5c11\u5230\u5176\u5e73\u65b9\u6839\u5de6\u53f3\u3002\u5373GPT-2\u6a21\u578b\u7684activation\u663e\u5b58\u6d88\u8017\u964d\u81f3\u7ea68GB\u3002\u4f46\u662f\u5373\u4f7f\u4f7f\u7528activation checkpoint\uff0c\u8f83\u5927\u7684\u6a21\u578b\u7684activation\u663e\u5b58\u4ecd\u53ef\u80fd\u53d8\u5f97\u975e\u5e38\u5927\u3002\u4f8b\u5982\uff0c1000\u4ebf\u53c2\u6570\u7684GPT\u6a21\u578b\uff0c\u5728\u6279\u6b21\u5927\u5c0f\u4e3a32\u65f6\uff0c\u5373\u4f7factivation checkpoint\uff0c\u4e5f\u9700\u8981\u5927\u7ea660GB\u7684\u663e\u5b58\uff0cactivation checkpoint\u6709\u5f88\u591a\u53d8\u79cd\u5730\u65b9\u5f0f\u7ed3\u5408\u5bf9\u6a21\u578bactivation\u4e0e\u8ba1\u7b97\u8017\u65f6\u7684tradeoff\u505a\u4e86\u5f88\u591a\u5de5\u4f5c\uff0c\u8fd9\u91cc\u9762\u6709\u76f8\u5f53\u591a\u7684\u6280\u5de7\uff0c\u5982\u679c\u4ee5\u540e\u6709\u673a\u4f1a\u53ef\u4ee5\u5355\u72ec\u6210\u6587\u8ba8\u8bba\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u5f53Zero\u4e0etensor\u5e76\u884c\u7ec4\u5408\u4f7f\u7528\u65f6\uff0c\u5c24\u5176\u662f\u518d\u6bd4\u5982\u5728GPT\u4e2dQKV\u62fc\u63a5\u4e4b\u540e\u7684linear\u8ba1\u7b97\uff0ctensor\u5e76\u884c\u4f1a\u5c06\u5176\u5206\u5728\u591a\u4e2a\u8ba1\u7b97\u8bbe\u5907\uff0c\u8fd9\u91cc\u672c\u8eabactivation\u6781\u5927\u3002zero\u91c7\u53d6\u9700\u8981\u65f6\u901a\u8fc7\u65b0\u589e\u4e00\u6b21allgather\u6765\u91cd\u65b0\u8ba1\u7b97activation\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u8fd9\u91cc\u9700\u8981\u7684activation\u663e\u5b58\uff1b"}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"zero-offload",children:"Zero-Offload"}),"\n",(0,r.jsx)(e.p,{children:"ZeRO-Offload\u901a\u8fc7\u5c06\u6570\u636e\u548c\u8ba1\u7b97\u5378\u8f7d\u5230CPU\u6765\u5b9e\u73b0\u5927\u6a21\u578b\u8bad\u7ec3\u3002\u4e3a\u4e86\u4fdd\u6301\u8ba1\u7b97\u6548\u7387\uff0c\u5b83\u65e8\u5728\u6700\u5c0f\u5316GPU\u4e0eCPU\u4e4b\u95f4\u7684\u6570\u636e\u79fb\u52a8\uff0c\u5e76\u51cf\u5c11CPU\u8ba1\u7b97\u65f6\u95f4\uff0c\u540c\u65f6\u6700\u5927\u7a0b\u5ea6\u5730\u8282\u7701GPU\u5185\u5b58\u3002\u76f8\u6bd4\u4e8e\u4f7f\u7528PyTorch\u5355\u72ec\u8bad\u7ec3\u5177\u670914\u4ebf\u53c2\u6570\u6a21\u578b\u65f6\u8fbe\u5230\u768430 TFlops/GPU\uff0cZeRO-Offload\u53ef\u4ee5\u5728\u5355\u4e2aNVIDIA V100 GPU\u4e0a\u4e3a\u5177\u6709100\u4ebf\u53c2\u6570\u6a21\u578b\u63d0\u4f9b40 TFlops/GPU\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Offload\u7b56\u7565\u8bbe\u8ba1",src:i(5316).A+"",width:"333",height:"330"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5706\u5f62\u8282\u70b9\u8868\u793a\u6a21\u578b\u72b6\u6001\uff08parameter16\u3001gradient16\u3001parameter32\u3001momentum32\u3001variance32\uff09\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u77e9\u5f62\u8282\u70b9\u8868\u793a\u8ba1\u7b97\uff08forward\u3001backward\u3001param update\uff09;"}),"\n",(0,r.jsx)(e.li,{children:"\u56fe\u4e2d\u7684\u8fb9\u8868\u793a\u8282\u70b9\u4e4b\u95f4\u7684\u6570\u636e\u6d41\uff0c\u8fb9\u7684\u6743\u91cd\u662f\u5728\u4efb\u4f55\u7ed9\u5b9a\u7684\u8bad\u7ec3\u8fed\u4ee3\u671f\u95f4\u901a\u8fc7\u5b83\u6d41\u52a8\u7684\u603b\u6570\u636e\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09;"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4e86\u786e\u5b9a\u6700\u4f73\u7684offload\u7b56\u7565\uff0cZeRO-Offload \u4f7f\u7528\u7b2c\u4e00\u539f\u7406\u5206\u6790\u6765\u9ad8\u6548\u5730\u5c06\u8fd9\u4e2a\u56fe\u5207\u5206\u5728 CPU \u548c GPU \u8bbe\u5907\u4e4b\u95f4\u3002ZeRO-Offload\u7b56\u7565\u4f18\u5316\u4e3b\u8981\u5305\u62ec\u4e09\u4e2a\u5173\u952e\u56e0\u7d20\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u9700\u8981\u4fdd\u8bc1cpu\u8ba1\u7b97\u8d1f\u8f7d\u5c0f\u4e8eGPU\uff0c\u4ece\u800c\u9632\u6b62CPU\u6210\u4e3a\u6027\u80fd\u74f6\u9888\uff1a","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"CPU\u8ba1\u7b97\u80fd\u529b\u6bd4GPU\u8ba1\u7b97\u80fd\u529b\u6162\u51e0\u4e2a\u6570\u91cf\u7ea7\uff0c\u5c06\u6a21\u578b\u8ba1\u7b97\u56fe\u5378\u8f7d\u5230CPU\u4e0a\u4f1a\u4e25\u91cd\u9650\u5236\u8bad\u7ec3\u6548\u7387\u3002\u56e0\u800c\uff0c\u6211\u4eec\u5fc5\u987b\u907f\u514d\u5c06\u8ba1\u7b97\u5bc6\u96c6\u90e8\u5206offload\u5230CPU\u4e0a\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u5206\u6790\u53ef\u77e5\u6bcf\u6b21\u6a21\u578b\u8bad\u7ec3\u7684\u8ba1\u7b97\u590d\u6742\u5ea6\u901a\u5e38\u4e3aO\uff08MB\uff09\uff0c\u5176\u4e2dM\u662f\u6a21\u578b\u5927\u5c0f\uff0cB\u662f\u6709\u6548\u6279\u5904\u7406\u5927\u5c0f\u3002\u4e3a\u4e86\u907f\u514dCPU\u7684\u8ba1\u7b97\u6210\u4e3a\u74f6\u9888\uff0c\u53ea\u6709\u90a3\u4e9b\u8ba1\u7b97\u590d\u6742\u5ea6\u4f4e\u4e8eO\uff08MB\uff09\u7684\u8ba1\u7b97\u5e94\u8be5\u88ab\u5378\u8f7d\u5230CPU\u4e0a\uff0c\u800c\u524d\u5411\u4f20\u64ad\u548c\u53cd\u5411\u4f20\u64ad\u90fd\u5177\u6709O\uff08MB\uff09\u7684\u8ba1\u7b97\u590d\u6742\u5ea6\uff0c\u9002\u5408\u5728GPU\u4e0a\u5b8c\u6210\uff0c\u800c\u5176\u4f59\u8ba1\u7b97\uff0c\u5982\u8303\u6570\u8ba1\u7b97\u3001\u6743\u91cd\u66f4\u65b0\u7b49\uff0c\u5176\u590d\u6742\u5ea6\u4e3aO\uff08M\uff09\uff0c\u53ef\u4ee5offload\u5230CPU\u4e0a\u3002\u57fa\u4e8e\u8fd9\u4e2a\u7b80\u5355\u7684\u89c2\u5bdf\uff0c\u6211\u4eec\u5c06\u6570\u636e\u6d41\u56fe\u4e2d\u7684\u524d\u5411\u8282\u70b9\u548c\u53cd\u5411\u8282\u70b9\u878d\u5408\u6210\u4e00\u4e2a\u5355\u4e00\u7684\u8d85\u7ea7\u8282\u70b9\uff08FWD-BWD\uff09\uff0c\u5e76\u5206\u914d\u81f3GPU\u4e0a\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4fdd\u8bc1\u6700\u5c0f\u5316CPU\u548cGPU\u5b58\u50a8\u4e4b\u95f4\u7684\u901a\u4fe1\u91cf\uff1a","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"CPU\u5185\u5b58\u5e26\u5bbd\u81f3\u5c11\u6bd4CPU\u548cGPU\u4e4b\u95f4\u7684PCI-E\u5e26\u5bbd\u5feb\u4e00\u4e2a\u6570\u91cf\u7ea7\uff0c\u800cGPU\u5185\u5b58\u5219\u6bd4CPU\u5185\u5b58\u751a\u81f3\u66f4\u5feb\u4e00\u4e2a\u6570\u91cf\u7ea7\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5fc5\u987b\u6700\u5c0f\u5316CPU\u548cGPU\u5185\u5b58\u4e4b\u95f4\u7684\u901a\u4fe1\u91cf\uff0c\u4ee5\u9632\u6b62PCI-E\u5e26\u5bbd\u6210\u4e3a\u8bad\u7ec3\u6027\u80fd\u74f6\u9888\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u4efb\u4f55\u6a21\u578b\u72b6\u6001offload\u7b56\u7565\u7684\u6700\u5c0f\u901a\u4fe1\u91cf\u4e3a4M\uff0c \u5728\u524d\u5411\u548c\u53cd\u5411\u8fc7\u7a0b\u5408\u5e76\u4e3a\u5355\u4e2a\u8d85\u7ea7\u8282\u70b9\u7684\u524d\u63d0\u4e0b\uff0c\u6570\u636e\u6d41\u56fe\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u662f\u5faa\u73af\u7684\u4e00\u90e8\u5206\u3002\u56e0\u6b64\uff0c\u5bf9\u8be5\u56fe\u7684\u4efb\u4f55\u5206\u5272\u90fd\u9700\u8981\u5272\u6389\u81f3\u5c11\u4e24\u6761\u8fb9\uff0c\u6bcf\u6761\u8fb9\u7684\u8fb9\u6743\u81f3\u5c11\u4e3a2M\uff0c\u4ece\u800c\u5bfc\u81f4\u603b\u901a\u4fe1\u91cf\u81f3\u5c11\u4e3a4M\uff08\u7406\u8bba\u6700\u5c0f\u901a\u4fe1\u91cf\uff09\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u4efb\u4f55\u4e0d\u5c06fp32\u6a21\u578b\u72b6\u6001\u4e0e\u5176\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u8282\u70b9\u653e\u7f6e\u4e0e\u4e00\u4e2a\u8ba1\u7b97\u8bbe\u5907\u7684\u7684\u5207\u5206\u7b56\u7565\u90fd\u65e0\u6cd5\u5b9e\u73b0\u6700\u5c0f\u901a\u4fe1\u91cf\u4e3a4M\u3002\u8fd9\u6837\u7684\u5207\u5206\u5fc5\u987b\u5272\u6389\u81f3\u5c11\u4e00\u6761\u8fb9\uff0c\u5176\u6743\u91cd\u4e3a4M\uff0c\u53e6\u4e00\u6761\u8fb9\u7684\u6743\u91cd\u81f3\u5c11\u4e3a2M\uff0c\u5bfc\u81f4\u901a\u4fe1\u91cf\u81f3\u5c11\u4e3a6M\u3002\u56e0\u6b64\uff0cfp32\u6a21\u578b\u72b6\u6001\uff08momentum32\u3001variance32\u548cparameter32\uff09\u5fc5\u987b\u4e0eParam Update\u548cfloat2half\u8ba1\u7b97\u4e00\u8d77\u653e\u7f6e\u3002\u8fd9\u4e2a\u7ea6\u675f\u4f7f\u6211\u4eec\u53ef\u4ee5\u5c06\u6570\u636e\u6d41\u56fe\u4e2d\u7684\u6240\u6709\u4e0a\u8ff0fp32\u6570\u636e\u548c\u5bf9\u5e94\u7684\u8ba1\u7b97\u8282\u70b9\u89c6\u4e3aUpdate\u8d85\u7ea7\u8282\u70b9\uff08\u65e0\u6cd5\u5185\u90e8\u5207\u5206\uff09\u3002\u6211\u4eec\u5728\u56fe2\u4e2d\u5c55\u793a\u4e86\u8fd9\u4e2a\u7b80\u5316\u7684\u6570\u636e\u6d41\u56fe\uff0c\u5176\u4e2d\u53ea\u5305\u542b\u56db\u4e2a\u8282\u70b9\uff1aFWD-BWD\u8d85\u7ea7\u8282\u70b9\u3001p16\u6570\u636e\u8282\u70b9\u3001g16\u6570\u636e\u8282\u70b9\u548cUpdate\u8d85\u7ea7\u8282\u70b9\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"p16\u5fc5\u987b\u4e0eFWD-BWD\u8d85\u7ea7\u8282\u70b9\u653e\u7f6e\u4e00\u8d77\uff0c\u56e0\u4e3a\u8fd9\u4e24\u4e2a\u8282\u70b9\u4e4b\u95f4\u7684\u8fb9\u6743\u4e3a4M\u3002\u5206\u79bb\u8fd9\u4e24\u4e2a\u8282\u70b9\u5c06\u4f1a\u589e\u52a0\u901a\u4fe1\u91cf\u81f36M\uff08\u53734M + 2M\uff09\u3002\u7531\u4e8e\u6211\u4eec\u5df2\u7ecf\u5c06\u8282\u70b9FWD-BWD Super\u5206\u914d\u7ed9GPU\u4ee5\u9650\u5236\u5728CPU\u4e0a\u7684\u8ba1\u7b97\uff0c\u56e0\u6b64p16\u4e5f\u5fc5\u987b\u5206\u914d\u7ed9GPU\uff1b"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5728\u5c3d\u53ef\u80fd\u4fdd\u8bc1\u6700\u5c0f\u5316\u901a\u4fe1\u91cf\u7684\u524d\u63d0\u4e0b\uff0c\u83b7\u5f97\u66f4\u591a\u7684\u663e\u5b58\u8282\u7701\uff1a","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5728\u4fdd\u8bc1\u6700\u5c0f\u5316CPU\u548cGPU\u5b58\u50a8\u4e4b\u95f4\u7684\u901a\u4fe1\u91cf\u4e4b\u540e\uff0c \u53ea\u5269\u4e0bg16\u548cUpdate\u8d85\u7ea7\u8282\u70b9\u9700\u8981\u5206\u914d\u3002\u56e0\u6b64\u6700\u5927\u5316\u8003\u8651GPU\u4e0a\u7684\u663e\u5b58\u8282\u7701\u3002\u901a\u8fc7\u5c06g16\u548cUpdate \u8d85\u7ea7\u8282\u70b9\u90fdoffload\u5230CPU\u4e0a\uff0c\u6700\u5927\u7684\u5185\u5b58\u8282\u7701\u53ef\u4ee5\u8fbe\u52308\u500d\uff1b\u901a\u8fc7\u4e0a\u8ff0\u4e09\u6761\u539f\u5219\uff0c\u6700\u7ec8\u7684\u8ba1\u7b97\u56fe\u5207\u5206\u65b9\u6848\u5982\u4e0b\uff1a\n",(0,r.jsx)(e.img,{alt:"offload\u53ef\u6269\u5c55\u6027",src:i(2175).A+"",width:"321",height:"303"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"zero-infinity",children:"Zero-Infinity"})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},5316:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/image-1-f35b78e42c340565f502f85cdcf7e861.png"},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var t=i(6540);const r={},l=t.createContext(r);function s(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);