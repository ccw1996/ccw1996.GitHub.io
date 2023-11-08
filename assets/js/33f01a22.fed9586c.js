"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7183],{1702:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=s(5893),l=s(1151);const d={title:"nfs\u914d\u7f6e",description:"nfs\u914d\u7f6e",tags:["embedding","nfs"],editor:"caroot"},r=void 0,o={id:"other/nfs",title:"nfs\u914d\u7f6e",description:"nfs\u914d\u7f6e",source:"@site/docs/other/nfs.md",sourceDirName:"other",slug:"/other/nfs",permalink:"/docs/other/nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/other/nfs.md",tags:[{label:"embedding",permalink:"/docs/tags/embedding"},{label:"nfs",permalink:"/docs/tags/nfs"}],version:"current",lastUpdatedAt:1699459588,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{title:"nfs\u914d\u7f6e",description:"nfs\u914d\u7f6e",tags:["embedding","nfs"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",permalink:"/docs/other/docs_design"},next:{title:"proxy\u914d\u7f6e",permalink:"/docs/other/proxy"}},i={},c=[{value:"host",id:"host",level:2},{value:"\u5b89\u88c5nfs-kernel-sever",id:"\u5b89\u88c5nfs-kernel-sever",level:3},{value:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55",id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55",level:3},{value:"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650",id:"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650",level:3},{value:"\u91cd\u542f\u670d\u52a1",id:"\u91cd\u542f\u670d\u52a1",level:3},{value:"embedded",id:"embedded",level:2},{value:"\u5b89\u88c5NFS\u670d\u52a1",id:"\u5b89\u88c5nfs\u670d\u52a1",level:3},{value:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55",id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55-1",level:3},{value:"\u6302\u8f7d",id:"\u6302\u8f7d",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"host",children:"host"}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5nfs-kernel-sever",children:"\u5b89\u88c5nfs-kernel-sever"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt install nfs-kernel-server\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55",children:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo mkdir /home/zhongyi/mnt\nsudo chmod 777 /home/zhongyi/mnt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650",children:"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650"}),"\n",(0,t.jsxs)(n.p,{children:["\u6253\u5f00",(0,t.jsx)(n.code,{children:"/etc/exports"}),"\u6587\u4ef6\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/exports\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6587\u4ef6\u5185\u5bb9\u7684\u6700\u540e\u4e00\u884c\u6dfb\u52a0\u4ee5\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"/home/zhongyi/mnt *(rw,sync,no_subtree_check)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u91cd\u542f\u670d\u52a1",children:"\u91cd\u542f\u670d\u52a1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo exportfs -a\nsudo systemctl restart nfs-kernel-server\n"})}),"\n",(0,t.jsx)(n.h2,{id:"embedded",children:"embedded"}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5nfs\u670d\u52a1",children:"\u5b89\u88c5NFS\u670d\u52a1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update\nsudo apt-get upgrade\n/* \u6267\u884c\u5b89\u88c5nfs\u7ec4\u4ef6 */\nsudo apt-get install nfs-common\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55-1",children:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:" mkdir ~/nfs\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6302\u8f7d",children:"\u6302\u8f7d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mount -t nfs -o nolock 192.168.137.100:/home/zhongyi/mnt /root/mnt\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(7294);const l={},d=t.createContext(l);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);