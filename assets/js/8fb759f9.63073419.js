"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[6459],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var s=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=s.createContext({}),p=function(e){var n=s.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return s.createElement(m.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},_=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),_=o,u=d["".concat(m,".").concat(_)]||d[_]||c[_]||r;return t?s.createElement(u,a(a({ref:n},l),{},{components:t})):s.createElement(u,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=_;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}_.displayName="MDXCreateElement"},9006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=t(7462),o=(t(7294),t(3905));const r={title:"\u786c\u6838\u8be6\u89e3Segment Anything Model (SAM) TensorRT\u6a21\u578b\u8f6c\u6362",tags:["work","interview"]},a=void 0,i={unversionedId:"ml/optimization/sam",id:"ml/optimization/sam",title:"\u786c\u6838\u8be6\u89e3Segment Anything Model (SAM) TensorRT\u6a21\u578b\u8f6c\u6362",description:"https://zhuanlan.zhihu.com/p/634385306",source:"@site/docs/ml/optimization/sam.md",sourceDirName:"ml/optimization",slug:"/ml/optimization/sam",permalink:"/docs/ml/optimization/sam",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/sam.md",tags:[{label:"work",permalink:"/docs/tags/work"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1699283272,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{title:"\u786c\u6838\u8be6\u89e3Segment Anything Model (SAM) TensorRT\u6a21\u578b\u8f6c\u6362",tags:["work","interview"]},sidebar:"tutorialSidebar",previous:{title:"onnx \u6a21\u578b\u4fee\u6539",permalink:"/docs/ml/optimization/onnx_modify"},next:{title:"\u8ba1\u7b97\u6a21\u578b\u9700\u8981\u7684\u7b97\u529b",permalink:"/docs/ml/optimization/script_calc_flops"}},m={},p=[{value:"Image embedding\u6a21\u578b\u8f6c\u4e3aonnx",id:"image-embedding\u6a21\u578b\u8f6c\u4e3aonnx",level:2},{value:"Image embedding\u6a21\u5757onnx\u6a21\u578b\u8f6c\u4e3aTensorRT\u6a21\u578b",id:"image-embedding\u6a21\u5757onnx\u6a21\u578b\u8f6c\u4e3atensorrt\u6a21\u578b",level:2},{value:"Prompt_Mask\u6a21\u5757\u7684Pytorch\u6a21\u578b\u8f6c\u6362\u4e3aONNX\u6a21\u578b",id:"prompt_mask\u6a21\u5757\u7684pytorch\u6a21\u578b\u8f6c\u6362\u4e3aonnx\u6a21\u578b",level:2},{value:"Prompt_Mask\u6a21\u5757\u7684ONNX\u6a21\u578b\u8f6c\u6362\u4e3aTensorRT\u6a21\u578b",id:"prompt_mask\u6a21\u5757\u7684onnx\u6a21\u578b\u8f6c\u6362\u4e3atensorrt\u6a21\u578b",level:2}],l={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,s.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/634385306"},"https://zhuanlan.zhihu.com/p/634385306"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BooHwang/segment_anything_tensorrt"},"https://github.com/BooHwang/segment_anything_tensorrt"))),(0,o.kt)("h1",{id:"\u7b80\u8981\u4ecb\u7ecd"},"\u7b80\u8981\u4ecb\u7ecd"),(0,o.kt)("p",null,"Image encoder\u56fe\u50cf\u7f16\u7801\u5668\u3002\u53d7\u5230\u53ef\u6269\u5c55\u6027\u548c\u5f3a\u5927\u7684\u9884\u8bad\u7ec3\u65b9\u6cd5\u7684\u542f\u53d1\uff0c\u4f7f\u7528\u4e86\u4e00\u4e2aMAE\u9884\u8bad\u7ec3\u7684Vision Transformer\uff08ViT\uff09\uff0c\u6700\u5c0f\u5316\u5730\u9002\u5e94\u5904\u7406\u9ad8\u5206\u8fa8\u7387\u8f93\u5165\u3002\u56fe\u50cf\u7f16\u7801\u5668\u6bcf\u4e2a\u56fe\u50cf\u8fd0\u884c\u4e00\u6b21\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u63d0\u793a\u6a21\u578b\u4e4b\u524d\u5e94\u7528\u3002"),(0,o.kt)("p",null,"Prompt encoder\u63d0\u793a\u7f16\u7801\u5668\u3002 \u8003\u8651\u4e24\u7ec4\u63d0\u793a\uff1a\u7a00\u758f\uff08\u70b9\uff0c\u6846\uff0c\u6587\u672c\uff09\u548c\u5bc6\u96c6\uff08\u63a9\u7801\uff09\u3002\u901a\u8fc7\u4f4d\u7f6e\u7f16\u7801\u6765\u8868\u793a\u70b9\u548c\u6846\uff0c\u8fd9\u4e9b\u7f16\u7801\u4e0e\u6bcf\u79cd\u63d0\u793a\u7c7b\u578b\u7684\u5b66\u4e60\u5d4c\u5165\u76f8\u52a0\uff0c\u5e76\u4e14\u4f7f\u7528CLIP\u7684\u73b0\u6210\u6587\u672c\u7f16\u7801\u5668\u6765\u8868\u793a\u81ea\u7531\u6587\u672c\u3002\u5bc6\u96c6\u63d0\u793a\uff08\u5373\u63a9\u7801\uff09\u4f7f\u7528\u5377\u79ef\u5d4c\u5165\uff0c\u5e76\u4e0e\u56fe\u50cf\u5d4c\u5165\u5143\u7d20\u76f8\u52a0\u3002"),(0,o.kt)("p",null,"Mask decoder\u63a9\u7801\u89e3\u7801\u5668\u3002\u63a9\u7801\u89e3\u7801\u5668\u901a\u8fc7\u6709\u6548\u5730\u5c06image embedding\u56fe\u50cf\u5d4c\u5165\uff0cprompt embeddings\u63d0\u793a\u5d4c\u5165\u548c\u8f93\u51fatoken\u6620\u5c04\u5230\u63a9\u7801\u6765\u5b9e\u73b0\u3002\u8fd9\u79cd\u8bbe\u8ba1\u91c7\u7528\u4e86\u4e00\u4e2a\u4fee\u6539\u7684Transformer\u89e3\u7801\u5668\u5757\uff0c\u540e\u8ddf\u4e00\u4e2a\u52a8\u6001\u63a9\u7801\u9884\u6d4b\u5934\u3002\u4fee\u6539\u7684\u89e3\u7801\u5668\u5757\u4f7f\u7528\u63d0\u793a\u81ea\u6ce8\u610f\u529b\u548c\u4ea4\u53c9\u6ce8\u610f\u529b\u4e24\u4e2a\u65b9\u5411\uff08\u63d0\u793a\u5230\u56fe\u50cf\u5d4c\u5165\u548c\u53cd\u4e4b\u4ea6\u7136\uff09\u6765\u66f4\u65b0\u6240\u6709\u5d4c\u5165\u3002\u5728\u8fd0\u884c\u4e24\u4e2a\u5757\u4e4b\u540e\uff0c\u6211\u4eec\u5bf9\u56fe\u50cf\u5d4c\u5165\u8fdb\u884c\u4e0a\u91c7\u6837\uff0c\u5e76\u4e14MLP\u5c06\u8f93\u51fa\u4ee4\u724c\u6620\u5c04\u5230\u52a8\u6001\u7ebf\u6027\u5206\u7c7b\u5668\uff0c\u7136\u540e\u5728\u6bcf\u4e2a\u56fe\u50cf\u4f4d\u7f6e\u8ba1\u7b97\u63a9\u7801\u524d\u666f\u6982\u7387\u3002"),(0,o.kt)("h1",{id:"\u6a21\u578b\u8f6c\u6362"},"\u6a21\u578b\u8f6c\u6362"),(0,o.kt)("h2",{id:"image-embedding\u6a21\u578b\u8f6c\u4e3aonnx"},"Image embedding\u6a21\u578b\u8f6c\u4e3aonnx"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python scripts/onnx2trt.py --img_pt2onnx --sam_checkpoint weights/sam_vit_h_4b8939.pth --model_type default")),(0,o.kt)("h2",{id:"image-embedding\u6a21\u5757onnx\u6a21\u578b\u8f6c\u4e3atensorrt\u6a21\u578b"},"Image embedding\u6a21\u5757onnx\u6a21\u578b\u8f6c\u4e3aTensorRT\u6a21\u578b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"trtexec --onnx=embedding_onnx/sam_default_embedding.onnx --workspace=4096 --saveEngine=weights/sam_default_embedding.engine")),(0,o.kt)("h2",{id:"prompt_mask\u6a21\u5757\u7684pytorch\u6a21\u578b\u8f6c\u6362\u4e3aonnx\u6a21\u578b"},"Prompt_Mask\u6a21\u5757\u7684Pytorch\u6a21\u578b\u8f6c\u6362\u4e3aONNX\u6a21\u578b"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u9762\u8bb2\u8fc7\uff0cPrompt\u7f16\u7801\u548cmask\u89e3\u7801\u6a21\u578b\u5728embedding\u4e0a\u8fdb\u884c\u64cd\u4f5c\uff0c\u524d\u671f\u63d0\u53d6\u597d\u4e00\u6b21image\u7684embedding\u4e4b\u540e\uff0c\u53ea\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u610f\u613f\u66f4\u6362\u8f93\u5165\u63d0\u793a\u70b9\u548c\u6846\u7684\u5750\u6807\u5373\u53ef\uff0c\u8be5\u90e8\u5206\u7684\u6a21\u578b\u8f6c\u6362\u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u4e2a\u811a\u672c\uff0c\u53ea\u9700\u8981\u8fd0\u884c\u811a\u672c\u5373\u53ef\u83b7\u5f97onnx\u6a21\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6e90\u4ee3\u7801\u4e2dmask\u89e3\u7801\u4e4b\u540e\u662f\u4e00\u4e2a\u4f4e\u5c3a\u5bf8\u7684mask\uff0c\u9700\u8981\u6839\u636e\u8f93\u5165\u56fe\u7684\u539f\u59cbsize\u8fdb\u884c\u6062\u590d\uff0c\u4f46\u662f\u8fd9\u4e2a\u539f\u59cbsize\u5982\u679c\u4f5c\u4e3aonnx\u8f6c\u6362\u65f6\u8f93\u5165\u7684\u8282\u70b9\uff0c\u90a3\u4e48\u5728TensorRT\u6a21\u578b\u7684\u8f6c\u6362\u65f6\u4e5f\u9700\u8981\u8f93\u5165\u8be5\u53c2\u6570\uff0c\u5e76\u4e14\u56fa\u5b9a\u4e00\u4e2a\u957f\u5bbd\u53c2\u6570\u503c\uff0c\u7136\u800c\u7528\u6237\u8f93\u5165\u7684\u56fe\u50cf\u5c3a\u5bf8\u662f\u65e0\u6cd5\u4e8b\u5148\u77e5\u9053\u7684\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u8be5\u53c2\u6570\u5355\u72ec\u62ce\u51fa\u6765\uff0c\u4e5f\u5c31\u662f\u5c06\u4f4e\u7ef4\u5ea6mask\u7684\u540e\u5904\u7406\u5355\u72ec\u5904\u7406\uff0c\u4e0d\u4f5c\u4e3a\u6a21\u578b\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u9700\u8981\u7a0d\u5fae\u4fee\u6539\u4e00\u4e0b\u6e90\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# \u4fee\u6539"segment_anything/utils/onnx.py"\u4e2d\u7684"forward"\u51fd\u6570\u4e3a\u5982\u4e0b\uff1a\ndef forward(\n    self,\n    image_embeddings: torch.Tensor,\n    point_coords: torch.Tensor,\n    point_labels: torch.Tensor,\n    mask_input: torch.Tensor,\n    has_mask_input: torch.Tensor\n    # orig_im_size: torch.Tensor,\n):\n    sparse_embedding = self._embed_points(point_coords, point_labels)\n    dense_embedding = self._embed_masks(mask_input, has_mask_input)\n\n    masks, scores = self.model.mask_decoder.predict_masks(\n        image_embeddings=image_embeddings,\n        image_pe=self.model.prompt_encoder.get_dense_pe(),\n        sparse_prompt_embeddings=sparse_embedding,\n        dense_prompt_embeddings=dense_embedding,\n    )\n\n    if self.use_stability_score:\n        scores = calculate_stability_score(\n            masks, self.model.mask_threshold, self.stability_score_offset\n        )\n\n    if self.return_single_mask:\n        masks, scores = self.select_masks(masks, scores, point_coords.shape[1])\n\n    return masks, scores\n    # upscaled_masks = self.mask_postprocessing(masks, orig_im_size)\n\n    # if self.return_extra_metrics:\n    #     stability_scores = calculate_stability_score(\n    #         upscaled_masks, self.model.mask_threshold, self.stability_score_offset\n    #     )\n    #     areas = (upscaled_masks > self.model.mask_threshold).sum(-1).sum(-1)\n    #     return upscaled_masks, scores, stability_scores, areas, masks\n\n    # return upscaled_masks, scores, masks\n')),(0,o.kt)("h2",{id:"prompt_mask\u6a21\u5757\u7684onnx\u6a21\u578b\u8f6c\u6362\u4e3atensorrt\u6a21\u578b"},"Prompt_Mask\u6a21\u5757\u7684ONNX\u6a21\u578b\u8f6c\u6362\u4e3aTensorRT\u6a21\u578b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"trtexec --onnx=weights/sam_default_prompt_mask.onnx --workspace=4096 --shapes=image_embeddings:1x256x64x64,point_coords:1x1x2,point_labels:1x1,mask_input:1x1x256x256,has_mask_input:1 --minShapes=image_embeddings:1x256x64x64,point_coords:1x1x2,point_labels:1x1,mask_input:1x1x256x256,has_mask_input:1 --optShapes=image_embeddings:1x256x64x64,point_coords:1x10x2,point_labels:1x10,mask_input:1x1x256x256,has_mask_input:1 --maxShapes=image_embeddings:1x256x64x64,point_coords:1x20x2,point_labels:1x20,mask_input:1x1x256x256,has_mask_input:1 --saveEngine=weights/sam_default_prompt_mask.engine")))}c.isMDXComponent=!0}}]);