"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5283],{9328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=t(5893),s=t(1151);const l={title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u5355\u4f8b\u6a21\u5f0f",sidebar_position:3,tags:["design","interview"],editor:"caroot"},a=void 0,o={id:"design_model/Singleton",title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u5355\u4f8b\u6a21\u5f0f",source:"@site/docs/design_model/Singleton.md",sourceDirName:"design_model",slug:"/design_model/Singleton",permalink:"/docs/design_model/Singleton",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design_model/Singleton.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1704643201,formattedLastUpdatedAt:"Jan 7, 2024",sidebarPosition:3,frontMatter:{title:"\u5355\u4f8b\u6a21\u5f0f",description:"\u5355\u4f8b\u6a21\u5f0f",sidebar_position:3,tags:["design","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u7b56\u7565\u6a21\u5f0f",permalink:"/docs/design_model/strategy"},next:{title:"\u7b80\u5355\u5de5\u5382\u6a21\u5f0f",permalink:"/docs/design_model/Simple_Factory"}},d={},r=[{value:"Class Diagram",id:"class-diagram",level:2},{value:"Implementation",id:"implementation",level:2},{value:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u4e0d\u5b89\u5168",id:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u4e0d\u5b89\u5168",level:3},{value:"\u997f\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168",id:"\u997f\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168",level:3},{value:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168",id:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168",level:3},{value:"\u53cc\u91cd\u6821\u9a8c\u9501-\u7ebf\u7a0b\u5b89\u5168",id:"\u53cc\u91cd\u6821\u9a8c\u9501-\u7ebf\u7a0b\u5b89\u5168",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/CyC2018/CS-Notes/blob/master/notes/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%20%20-%20%E5%8D%95%E4%BE%8B.md#class-diagram",children:"https://github.com/CyC2018/CS-Notes/blob/master/notes/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%20%20-%20%E5%8D%95%E4%BE%8B.md#class-diagram"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u4e00\u4e2a\u79c1\u6709\u6784\u9020\u51fd\u6570\u3001\u4e00\u4e2a\u79c1\u6709\u9759\u6001\u53d8\u91cf\u4ee5\u53ca\u4e00\u4e2a\u516c\u6709\u9759\u6001\u51fd\u6570\u6765\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u79c1\u6709\u6784\u9020\u51fd\u6570\u4fdd\u8bc1\u4e86\u4e0d\u80fd\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6765\u521b\u5efa\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u53ea\u80fd\u901a\u8fc7\u516c\u6709\u9759\u6001\u51fd\u6570\u8fd4\u56de\u552f\u4e00\u7684\u79c1\u6709\u9759\u6001\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.h3,{id:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u4e0d\u5b89\u5168",children:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u4e0d\u5b89\u5168"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u5b9e\u73b0\u4e2d\uff0c\u79c1\u6709\u9759\u6001\u53d8\u91cf uniqueInstance \u88ab\u5ef6\u8fdf\u5b9e\u4f8b\u5316\uff0c\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u6ca1\u6709\u7528\u5230\u8be5\u7c7b\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u5b9e\u4f8b\u5316 uniqueInstance\uff0c\u4ece\u800c\u8282\u7ea6\u8d44\u6e90\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u5b9e\u73b0\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u5982\u679c\u591a\u4e2a\u7ebf\u7a0b\u80fd\u591f\u540c\u65f6\u8fdb\u5165 if (uniqueInstance == null) \uff0c\u5e76\u4e14\u6b64\u65f6 uniqueInstance \u4e3a null\uff0c\u90a3\u4e48\u4f1a\u6709\u591a\u4e2a\u7ebf\u7a0b\u6267\u884c uniqueInstance = new Singleton(); \u8bed\u53e5\uff0c\u8fd9\u5c06\u5bfc\u81f4\u5b9e\u4f8b\u5316\u591a\u6b21 uniqueInstance\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u997f\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168",children:"\u997f\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168"}),"\n",(0,i.jsx)(n.p,{children:"\u7ebf\u7a0b\u4e0d\u5b89\u5168\u95ee\u9898\u4e3b\u8981\u662f\u7531\u4e8e uniqueInstance \u88ab\u5b9e\u4f8b\u5316\u591a\u6b21\uff0c\u91c7\u53d6\u76f4\u63a5\u5b9e\u4f8b\u5316 uniqueInstance \u7684\u65b9\u5f0f\u5c31\u4e0d\u4f1a\u4ea7\u751f\u7ebf\u7a0b\u4e0d\u5b89\u5168\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\u76f4\u63a5\u5b9e\u4f8b\u5316\u7684\u65b9\u5f0f\u4e5f\u4e22\u5931\u4e86\u5ef6\u8fdf\u5b9e\u4f8b\u5316\u5e26\u6765\u7684\u8282\u7ea6\u8d44\u6e90\u7684\u597d\u5904\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168",children:"\u61d2\u6c49\u5f0f-\u7ebf\u7a0b\u5b89\u5168"}),"\n",(0,i.jsx)(n.p,{children:"\u53ea\u9700\u8981\u5bf9 getUniqueInstance() \u65b9\u6cd5\u52a0\u9501\uff0c\u90a3\u4e48\u5728\u4e00\u4e2a\u65f6\u95f4\u70b9\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u591f\u8fdb\u5165\u8be5\u65b9\u6cd5\uff0c\u4ece\u800c\u907f\u514d\u4e86\u5b9e\u4f8b\u5316\u591a\u6b21 uniqueInstance\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u5165\u8be5\u65b9\u6cd5\u4e4b\u540e\uff0c\u5176\u5b83\u8bd5\u56fe\u8fdb\u5165\u8be5\u65b9\u6cd5\u7684\u7ebf\u7a0b\u90fd\u5fc5\u987b\u7b49\u5f85\uff0c\u5373\u4f7f uniqueInstance \u5df2\u7ecf\u88ab\u5b9e\u4f8b\u5316\u4e86\u3002\u8fd9\u4f1a\u8ba9\u7ebf\u7a0b\u963b\u585e\u65f6\u95f4\u8fc7\u957f\uff0c\u56e0\u6b64\u8be5\u65b9\u6cd5\u6709\u6027\u80fd\u95ee\u9898\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u53cc\u91cd\u6821\u9a8c\u9501-\u7ebf\u7a0b\u5b89\u5168",children:"\u53cc\u91cd\u6821\u9a8c\u9501-\u7ebf\u7a0b\u5b89\u5168"}),"\n",(0,i.jsx)(n.p,{children:"uniqueInstance \u53ea\u9700\u8981\u88ab\u5b9e\u4f8b\u5316\u4e00\u6b21\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4e86\u3002\u52a0\u9501\u64cd\u4f5c\u53ea\u9700\u8981\u5bf9\u5b9e\u4f8b\u5316\u90a3\u90e8\u5206\u7684\u4ee3\u7801\u8fdb\u884c\uff0c\u53ea\u6709\u5f53 uniqueInstance \u6ca1\u6709\u88ab\u5b9e\u4f8b\u5316\u65f6\uff0c\u624d\u9700\u8981\u8fdb\u884c\u52a0\u9501\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53cc\u91cd\u6821\u9a8c\u9501\u5148\u5224\u65ad uniqueInstance \u662f\u5426\u5df2\u7ecf\u88ab\u5b9e\u4f8b\u5316\uff0c\u5982\u679c\u6ca1\u6709\u88ab\u5b9e\u4f8b\u5316\uff0c\u90a3\u4e48\u624d\u5bf9\u5b9e\u4f8b\u5316\u8bed\u53e5\u8fdb\u884c\u52a0\u9501\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);