"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7053],{8456:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>m,default:()=>o,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var n=e(5893),l=e(1151);const i={title:"yolo\u540e\u5904\u7406",description:"yolo\u540e\u5904\u7406",sidebar_position:1,tags:["machine learning","interview"],editor:"caroot"},m=void 0,t={id:"ml/yolo_postprocess",title:"yolo\u540e\u5904\u7406",description:"yolo\u540e\u5904\u7406",source:"@site/docs/ml/yolo_postprocess.md",sourceDirName:"ml",slug:"/ml/yolo_postprocess",permalink:"/docs/ml/yolo_postprocess",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/yolo_postprocess.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1699459588,formattedLastUpdatedAt:"Nov 8, 2023",sidebarPosition:1,frontMatter:{title:"yolo\u540e\u5904\u7406",description:"yolo\u540e\u5904\u7406",sidebar_position:1,tags:["machine learning","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"ml",permalink:"/docs/ml/"},next:{title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",permalink:"/docs/ml/sparse_tensorrt"}},r={},c=[{value:"\u540e\u5904\u7406",id:"\u540e\u5904\u7406",level:2},{value:"yolov5",id:"yolov5",level:3}];function h(s){const a={annotation:"annotation",h2:"h2",h3:"h3",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"\u540e\u5904\u7406",children:"\u540e\u5904\u7406"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"yolo.png",src:e(6265).Z+"",width:"1390",height:"565"}),"\n",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"10"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(a.mn,{children:"32"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"10/32"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"10/32"})]})})]})," \u662f\u5c0fanchor\u5728\u8fd9\u5f20\u7279\u5f81\u56fe\u4e0a\u7684\u5bbd\u5ea6\u503c\n",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"14"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(a.mn,{children:"32"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"14/32"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"14/32"})]})})]})," \u662f\u5c0fanchor\u5728\u8fd9\u5f20\u7279\u5f81\u56fe\u4e0a\u7684\u9ad8\u5ea6\u503c\n\u524d\u4e09\u4e2a\u662f32\u3002"]}),"\n",(0,n.jsx)(a.p,{children:"\uff084+1+80\uff09\u4e2d\uff0c4\u4ee3\u8868\u7684\u662f\u6a2a\u5750\u6807\u504f\u79fb\u91cf\u3001\u7eb5\u5750\u6807\u504f\u79fb\u91cf\u3001\u5bbd\u5ea6\u653e\u7f29\u503c\u3001\u9ad8\u5ea6\u653e\u7f29\u503c\u3002\n\u76f8\u5f53\u4e8e\u5bf9\u8fd9\u4e2aanchor\u5e94\u8be5\u5982\u4f55\u504f\u79fb\u548c\u7f29\u653e\u6765\u8fbe\u5230\u60f3\u8981\u7684\u7ed3\u679c"}),"\n",(0,n.jsxs)(a.p,{children:["\u504f\u79fb\u91cf\u4f7f\u7528sigmod(x)+\u5750\u6807\u503c\n\u653e\u7f29\u503c\u4f7f\u7528",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"p"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"c"}),(0,n.jsx)(a.mi,{children:"h"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"r"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"exp(x)*anchor"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"})]})]})]}),"\n\u6700\u540e\u518d\u9664\u4ee5\u5bbd\u548c\u9ad8\uff08\u5f53\u524d\u56fe\u5c31\u662f\u9664\u4ee513\uff09"]}),"\n",(0,n.jsx)(a.p,{children:"\u5f97\u5230bbox"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"r"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"p"})]}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"c"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"bbox*origin_pic"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"bb"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.9456em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"p"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"c"})]})]})]}),"\u5f97\u5230\u6700\u540e\u539f\u56fe\u7684\u4f4d\u7f6e"]}),"\n",(0,n.jsx)(a.h3,{id:"yolov5",children:"yolov5"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"yolov5.png",src:e(6130).Z+"",width:"787",height:"613"})})]})}function o(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},6265:(s,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/yolo-ccf0d7a85fab72f2c0126fcec7a96d65.png"},6130:(s,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/yolov5-b8c160c17a63f4291bb6cb72f8ddd7a2.png"},1151:(s,a,e)=>{e.d(a,{Z:()=>t,a:()=>m});var n=e(7294);const l={},i=n.createContext(l);function m(s){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function t(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:a},s.children)}}}]);