"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1503],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=c(n),h=a,d=s["".concat(p,".").concat(h)]||s[h]||m[h]||o;return n?r.createElement(d,l(l({ref:e},u),{},{components:n})):r.createElement(d,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3876:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b",tags:["work"]},l="\u6a21\u578b\u91cf\u5316\u6709\u4ec0\u4e48\u597d\u5904",i={unversionedId:"ml/quantize/pytorch_int8",id:"ml/quantize/pytorch_int8",title:"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b",description:"\u5176\u4e00\uff0c\u51cf\u5c11memory footprint\u3002\u6211\u4eec\u77e5\u9053\u5f88\u591a\u65f6\u5019\u63a8\u7406\u6027\u80fd\u7684\u74f6\u9888\u4e0d\u5728\u4e8e\u8ba1\u7b97\u800c\u5728\u4e8e\u8bbf\u5b58\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u63d0\u9ad8\u8ba1\u7b97\u5bc6\u5ea6\u4f1a\u5bf9\u8017\u65f6\u6709\u663e\u8457\u7684\u4f18\u5316\u6548\u679c\uff1b",source:"@site/docs/ml/quantize/pytorch_int8.md",sourceDirName:"ml/quantize",slug:"/ml/quantize/pytorch_int8",permalink:"/docs/ml/quantize/pytorch_int8",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/quantize/pytorch_int8.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1696954797,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"PyTorch\u6a21\u578b\u9759\u6001\u91cf\u5316\u3001\u4fdd\u5b58\u3001\u52a0\u8f7dint8\u91cf\u5316\u6a21\u578b",tags:["work"]},sidebar:"tutorialSidebar",previous:{title:"2D\u548c3D\u76ee\u6807\u68c0\u6d4b\u5668\u90fd\u9002\u7528\u7684int8\u91cf\u5316\u65b9\u6cd5\u2014\u2014DetPTQ",permalink:"/docs/ml/quantize/det-qat"},next:{title:"QAT\u91cf\u5316",permalink:"/docs/ml/quantize/qat"}},p={},c=[],u={toc:c},s="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u578b\u91cf\u5316\u6709\u4ec0\u4e48\u597d\u5904"},"\u6a21\u578b\u91cf\u5316\u6709\u4ec0\u4e48\u597d\u5904"),(0,a.kt)("p",null,"\u5176\u4e00\uff0c\u51cf\u5c11memory footprint\u3002\u6211\u4eec\u77e5\u9053\u5f88\u591a\u65f6\u5019\u63a8\u7406\u6027\u80fd\u7684\u74f6\u9888\u4e0d\u5728\u4e8e\u8ba1\u7b97\u800c\u5728\u4e8e\u8bbf\u5b58\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u63d0\u9ad8\u8ba1\u7b97\u5bc6\u5ea6\u4f1a\u5bf9\u8017\u65f6\u6709\u663e\u8457\u7684\u4f18\u5316\u6548\u679c\uff1b"),(0,a.kt)("p",null,"\u5176\u4e8c\uff0c\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\uff0c\u51cf\u5c11\u5e94\u7528\u7684size\uff0c\u540c\u65f6\u4fbf\u4e8e\u8f6f\u4ef6\u7684\u5347\u7ea7\u66f4\u65b0\u3002"),(0,a.kt)("h1",{id:"\u91cf\u5316\u7684\u5bf9\u8c61\u662f\u4ec0\u4e48"},"\u91cf\u5316\u7684\u5bf9\u8c61\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"weight\uff08\u6743\u91cd\uff09\uff1aweight\u7684\u91cf\u5316\u662f\u6700\u5e38\u89c4\u4e5f\u662f\u6700\u5e38\u89c1\u7684\u3002\u91cf\u5316weight\u53ef\u8fbe\u5230\u51cf\u5c11\u6a21\u578b\u5927\u5c0f\u5185\u5b58\u548c\u5360\u7528\u7a7a\u95f4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"activation\uff08\u6fc0\u6d3b\u51fd\u6570\u8f93\u51fa\uff09\uff1a\u5b9e\u9645\u4e2dactivation\u5f80\u5f80\u662f\u5360\u5185\u5b58\u4f7f\u7528\u7684\u5927\u5934\uff0c\u56e0\u6b64\u91cf\u5316activation\u4e0d\u4ec5\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u5185\u5b58\u5360\u7528\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u7ed3\u5408weight\u7684\u91cf\u5316\u53ef\u4ee5\u5145\u5206\u5229\u7528\u6574\u6570\u8ba1\u7b97\u83b7\u5f97\u6027\u80fd\u63d0\u5347\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"gradient\uff08\u68af\u5ea6\uff09\u76f8\u5bf9\u4e0a\u9762\u4e24\u8005\u7565\u5fae\u5c0f\u4f17\u4e00\u4e9b\uff0c\u56e0\u4e3a\u4e3b\u8981\u7528\u4e8e\u8bad\u7ec3\u3002\u5b83\u4e3b\u8981\u4f5c\u7528\u662f\u5728\u5206\u5e03\u5f0f\u8ba1\u7b97\u4e2d\u51cf\u5c11\u901a\u4fe1\u5f00\u9500\uff0c\u5355\u673a\u8bad\u7ec3\u65f6\u4e5f\u53ef\u4ee5\u51cf\u5c11backward\u65f6\u7684\u5f00\u9500\u3002"))),(0,a.kt)("h1",{id:"\u91cf\u5316\u7684\u5206\u7c7b"},"\u91cf\u5316\u7684\u5206\u7c7b"),(0,a.kt)("p",null,"Level 1:\u65e0\u6570\u636e\u79bb\u7ebf\u91cf \u65e0\u9700\u6570\u636e\uff0c\u4e0d\u9700\u8981\u53cd\u5411\u4f20\u64ad\uff0c\u4e00\u4e2a API \u8c03\u7528\u5b8c\u6210\u91cf\u5316\u6a21\u578b\u751f\u4ea7"),(0,a.kt)("p",null,"Level 2:\u6709\u6570\u636e\u79bb\u7ebf\u91cf\u5316 \u9700\u8981\u6570\u636e\uff0c\u4e0d\u9700\u8981\u53cd\u5411\u4f20\u64ad\uff0c\u6570\u636e\u7528\u4e8e\u6821\u51c6 BN\uff0c\u6216\u8005\u7edf\u8ba1\u6fc0\u6d3b\u503c\u5206\u5e03\uff0c\u7528\u4e8e\u964d\u4f4e\u8bb2\u8bdd\uff1f\u8bef\u5dee"),(0,a.kt)("p",null,"Level 3:\u91cf\u5316\u611f\u77e5\u8bad\u7ec3 \u9700\u8981\u6570\u636e\uff0c\u9700\u8981\u53cd\u5411\u4f20\u64ad\u3002\u901a\u8fc7\u8bad\u7ec3\u548c\u5fae\u8c03\u4f7f\u91cf\u5316\u6a21\u578b\u8fbe\u5230\u53ef\u63a5\u53d7\u7684\u7cbe\u5ea6\uff0c\u4e00\u822c\u9700\u8981\u5b8c\u6574\u7684\u8bad\u7ec3\u8fc7\u7a0b\u548c\u8d85\u53c2\u6570\u8c03\u6574"),(0,a.kt)("p",null,"Level 4:\u4fee\u6539\u7f51\u7edc\u7ed3\u6784\u7684\u91cf\u5316\u611f\u77e5\u8bad\u7ec3 \u9700\u8981\u6570\u636e\uff0c\u9700\u8981\u53cd\u5411\u4f20\u64ad\uff0c\u540c\u65f6\u8c03\u6574\u7f51\u7edc\u7ed3\u6784\u3002\u9700\u8981\u660e\u663e\u66f4\u591a\u7684\u8bad\u7ec3\u65f6\u95f4\u548c\u7ec6\u81f4\u7684\u8d85\u53c2\u6570\u8c03\u6574"),(0,a.kt)("h1",{id:"\u6a21\u578b\u91cf\u5316\u7684\u8fc7\u7a0b"},"\u6a21\u578b\u91cf\u5316\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,"$  Q = round(scale factor * clip\uff08x,\u03b1,\u03b2\uff09)+ zero point $ "),(0,a.kt)("h1",{id:"\u6a21\u578b\u7684\u91cf\u5316\u7c92\u5ea6"},"\u6a21\u578b\u7684\u91cf\u5316\u7c92\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u9053\u91cf\u5316\uff08Per-axis/per-channel\uff09\uff1a\u5bf9tensor\u7684\u5355\u4e2a\u8f74\u6709\u5355\u72ec\u7684\u91cf\u5316\u53c2\u6570\uff0c\u5982per-channel\u5c31\u662fweight\u7684\u6bcf\u4e2achannel\u4f7f\u7528\u5355\u72ec\u7684\u91cf\u5316\u53c2\u6570\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cper-channel \u56e0\u4e3a\u91cf\u5316\u7684\u7c92\u5ea6\u66f4\u7ec6\u81f4\uff0c\u91cf\u5316\u53c2\u6570\u7684\u81ea\u7531\u5ea6\u66f4\u9ad8\uff0c\u5f80\u5f80\u66f4\u4f18\u4e8e per-tensor \u7684\u91cf\u5316\u7cbe\u5ea6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c42\u91cf\u5316\uff08Per-tensor/per-layer\uff09\uff1a\u6bcf\u4e2atensor\u6709\u5355\u72ec\u7684\u91cf\u5316\u53c2\u6570\u3002\u5bf9\u4e8e\u5377\u79ef\u6216\u5168\u8fde\u63a5\u5c42\u8fd9\u4e9b\u7684\u8bdd\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u6bcf\u5c42\u72ec\u7acb\u7684\u91cf\u5316\u53c2\u6570\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Global\uff1a\u5373\u6574\u4e2a\u7f51\u7edc\u4f7f\u7528\u76f8\u540c\u7684\u91cf\u5316\u53c2\u6570\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u5bf9\u4e8e8\u4f4d\u91cf\u5316\uff0c\u5168\u5c40\u91cf\u5316\u53c2\u6570\u5f71\u54cd\u4e0d\u660e\u663e\uff0c\u4f46\u5230\u66f4\u4f4e\u7cbe\u5ea6\uff0c\u5c31\u4f1a\u5bf9\u51c6\u786e\u7387\u6709\u8f83\u5927\u5f71\u54cd\u3002"))),(0,a.kt)("p",null,"Pytorch\u7684\u91cf\u5316"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/299108528"},"https://zhuanlan.zhihu.com/p/299108528"))),(0,a.kt)("p",null,"1.\u6570\u636e\u96c6\u4e0b\u8f7d\uff08\u5728\u505a\u9759\u6001\u91cf\u5316\u65f6\u9700\u8981\u5bf9\u6570\u636e\u96c6\u8fdb\u884c\u63a8\u7406\u83b7\u53d6\u6570\u636e\u7684\u5206\u5e03\u7279\u70b9\u3001\u5b9a\u6807\uff09\uff0c\u7528MSCOCO\u7684\u9a8c\u8bc1\u96c6\uff0c\u9009100\u5f20\u5de6\u53f3MSCOCO_val2017"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://images.cocodataset.org/zips/val2017.zip"},"http://images.cocodataset.org/zips/val2017.zip")),(0,a.kt)("p",null,"2.Pytorch\u6a21\u578b\u6587\u4ef6\u53ef\u4ee5\u4ece\u8fd9\u91cc\u4e0b\u8f7dPose_Model\u63d0\u53d6\u5bc6\u7801\uff1as7qh."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1nvml9pB"},"https://pan.baidu.com/s/1nvml9pB")),(0,a.kt)("p",null,"3.\u91cf\u5316\u4ee3\u7801\u4e0b\u8f7dPytorch_Model_Quantization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Laicheng0830/Pytorch_Model_Quantization"},"https://github.com/Laicheng0830/Pytorch_Model_Quantization")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u91cf\u5316\u540e\u6a21\u578b\u7684forward\u4ee3\u7801\u7a0d\u6709\u6539\u52a8\uff0c\u9700\u8981\u5728\u6a21\u578b\u8f93\u5165\u524d\u540e\u5b89\u63d2\u91cf\u5316\u548c\u89e3\u91cf\u5316\u3002\u5982\u4e0b\u793a\u4f8b\uff1a"))}m.isMDXComponent=!0}}]);