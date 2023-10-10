"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[8368],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return t?o.createElement(f,a(a({ref:n},m),{},{components:t})):o.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={title:"onnx \u6a21\u578b\u4fee\u6539",description:"onnx \u6a21\u578b\u4fee\u6539",tags:["work","interview"],editor:"caroot"},a=void 0,l={unversionedId:"ml/optimization/onnx_modify",id:"ml/optimization/onnx_modify",title:"onnx \u6a21\u578b\u4fee\u6539",description:"onnx \u6a21\u578b\u4fee\u6539",source:"@site/docs/ml/optimization/onnx_modify.md",sourceDirName:"ml/optimization",slug:"/ml/optimization/onnx_modify",permalink:"/docs/ml/optimization/onnx_modify",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/onnx_modify.md",tags:[{label:"work",permalink:"/docs/tags/work"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1696954797,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"onnx \u6a21\u578b\u4fee\u6539",description:"onnx \u6a21\u578b\u4fee\u6539",tags:["work","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u518d\u6b21\u7406\u89e3 im2col",permalink:"/docs/ml/optimization/im2col"},next:{title:"\u786c\u6838\u8be6\u89e3Segment Anything Model (SAM) TensorRT\u6a21\u578b\u8f6c\u6362",permalink:"/docs/ml/optimization/sam"}},p={},c=[{value:"\u4fee\u6539\u7b97\u5b50",id:"\u4fee\u6539\u7b97\u5b50",level:2}],m={toc:c},s="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76ee\u6807\u662f\u5c06onnx\u6a21\u578b\u624b\u52a8\u6dfb\u52a0\u4e00\u4e2aQuantizeLinear\u7b97\u5b50")),(0,r.kt)("h2",{id:"\u4fee\u6539\u7b97\u5b50"},"\u4fee\u6539\u7b97\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport onnx\nfrom onnx import onnx_pb as onnx_proto\n\nonnx_model = onnx.load(\"test.onnx\")\nonnx_model.opset_import[0].version = 13\nonnx_model.ir_version = 7\ngraph=onnx_model.graph\n\nfor node in onnx_model.graph.node:\n    node.input[0]='input2'\n\nnode = onnx.helper.make_node('QuantizeLinear',['input', 'y_scale', 'y_zero_point'],['input2'],'input2')\n\ny_scale = np.float32(2)\ny_zero_point = np.uint8(128)\n\nscale_initializer = onnx.helper.make_tensor('y_scale', onnx_proto.TensorProto.FLOAT, [], [y_scale])\nzero_initializer = onnx.helper.make_tensor('y_zero_point', onnx_proto.TensorProto.INT8, [], [y_zero_point])\ngraph.initializer.append(scale_initializer)\ngraph.initializer.append(zero_initializer)\n\nonnx_model.graph.node.insert(0,node)\n\nonnx.checker.check_model(onnx_model)\nonnx.save_model(onnx_model,'test.onnx')\n\n")))}d.isMDXComponent=!0}}]);