"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5259],{742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"ml/torch-optimize","title":"TORCH.JIT.OPTIMIZE_FOR_INFERENCE","description":"\u6267\u884c\u4e00\u7ec4\u4f18\u5316\u8fc7\u7a0b\uff0c\u4ee5\u4f18\u5316\u6a21\u578b \u63a8\u7406\u7684\u76ee\u7684\u3002\u5982\u679c\u6a21\u578b\u5c1a\u672a\u51bb\u7ed3\uff0coptimizeforinference \u5c06\u81ea\u52a8\u8c03\u7528 torch.jit.freeze\u3002","source":"@site/docs/ml/torch-optimize.md","sourceDirName":"ml","slug":"/ml/torch-optimize","permalink":"/docs/ml/torch-optimize","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/torch-optimize.md","tags":[{"inline":true,"label":"work","permalink":"/docs/tags/work"}],"version":"current","lastUpdatedAt":1735140116000,"frontMatter":{"title":"TORCH.JIT.OPTIMIZE_FOR_INFERENCE","tags":["work"]},"sidebar":"tutorialSidebar","previous":{"title":"\u5377\u79ef\u795e\u7ecf\u7f51\u7edc(CNN)\u5f20\u91cf(\u56fe\u50cf)\u7684\u5c3a\u5bf8\u548c\u53c2\u6570\u8ba1\u7b97","permalink":"/docs/ml/size"},"next":{"title":"training","permalink":"/docs/ml/training/"}}');var r=t(4848),i=t(8453);const s={title:"TORCH.JIT.OPTIMIZE_FOR_INFERENCE",tags:["work"]},c=void 0,a={},l=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u6267\u884c\u4e00\u7ec4\u4f18\u5316\u8fc7\u7a0b\uff0c\u4ee5\u4f18\u5316\u6a21\u578b \u63a8\u7406\u7684\u76ee\u7684\u3002\u5982\u679c\u6a21\u578b\u5c1a\u672a\u51bb\u7ed3\uff0coptimize_for_inference \u5c06\u81ea\u52a8\u8c03\u7528 torch.jit.freeze\u3002\n\u8fd9\u4ecd\u5904\u4e8e\u539f\u578b\u9636\u6bb5\uff0c\u53ef\u80fd\u4f1a\u51cf\u6162\u6a21\u578b\u901f\u5ea6\u3002 \u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u4e3b\u8981\u9488\u5bf9\u7684\u7528\u4f8b\u662f cpu \u4e0a\u7684\u89c6\u89c9\u6a21\u578b \u548c GPU \u5728\u8f83\u5c0f\u7a0b\u5ea6\u4e0a\u3002"}),"\n",(0,r.jsx)(n.p,{children:"In addition to generic optimizations that should speed up your model regardless of environment, prepare for inference will also bake in build specific settings such as the presence of CUDNN or MKLDNN, and may in the future make transformations which speed things up on one machine but slow things down on another."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import torch\nin_channels, out_channels = 3, 32\nconv = torch.nn.Conv2d(in_channels, out_channels, kernel_size=3, stride=2, bias=True)\nbn = torch.nn.BatchNorm2d(out_channels, eps=.001)\nmod = torch.nn.Sequential(conv, bn)\nfrozen_mod = torch.jit.optimize_for_inference(torch.jit.script(mod.eval()))\nassert "batch_norm" not in str(frozen_mod.graph)\n# if built with MKLDNN, convolution will be run with MKLDNN weights\nassert "MKLDNN" in frozen_mod.graph\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);