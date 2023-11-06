"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={title:"nfs\u914d\u7f6e",description:"nfs\u914d\u7f6e",tags:["embedding","nfs"],editor:"caroot"},l=void 0,s={unversionedId:"other/nfs",id:"other/nfs",title:"nfs\u914d\u7f6e",description:"nfs\u914d\u7f6e",source:"@site/docs/other/nfs.md",sourceDirName:"other",slug:"/other/nfs",permalink:"/docs/other/nfs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/other/nfs.md",tags:[{label:"embedding",permalink:"/docs/tags/embedding"},{label:"nfs",permalink:"/docs/tags/nfs"}],version:"current",lastUpdatedAt:1699283272,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{title:"nfs\u914d\u7f6e",description:"nfs\u914d\u7f6e",tags:["embedding","nfs"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1\u6587\u6863\u7684\u8bbe\u8ba1",permalink:"/docs/other/docs_design"},next:{title:"proxy\u914d\u7f6e",permalink:"/docs/other/proxy"}},i={},d=[{value:"host",id:"host",level:2},{value:"\u5b89\u88c5nfs-kernel-sever",id:"\u5b89\u88c5nfs-kernel-sever",level:3},{value:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55",id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55",level:3},{value:"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650",id:"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650",level:3},{value:"\u91cd\u542f\u670d\u52a1",id:"\u91cd\u542f\u670d\u52a1",level:3},{value:"embedded",id:"embedded",level:2},{value:"\u5b89\u88c5NFS\u670d\u52a1",id:"\u5b89\u88c5nfs\u670d\u52a1",level:3},{value:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55",id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55-1",level:3},{value:"\u6302\u8f7d",id:"\u6302\u8f7d",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"host"},"host"),(0,o.kt)("h3",{id:"\u5b89\u88c5nfs-kernel-sever"},"\u5b89\u88c5nfs-kernel-sever"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install nfs-kernel-server\n")),(0,o.kt)("h3",{id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55"},"\u521b\u5efa\u5171\u4eab\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir /home/zhongyi/mnt\nsudo chmod 777 /home/zhongyi/mnt\n")),(0,o.kt)("h3",{id:"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650"},"\u914d\u7f6e\u5171\u4eab\u76ee\u5f55\u8bbf\u95ee\u6743\u9650"),(0,o.kt)("p",null,"\u6253\u5f00",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/exports"),"\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/exports\n")),(0,o.kt)("p",null,"\u5728\u6587\u4ef6\u5185\u5bb9\u7684\u6700\u540e\u4e00\u884c\u6dfb\u52a0\u4ee5\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/home/zhongyi/mnt *(rw,sync,no_subtree_check)\n")),(0,o.kt)("h3",{id:"\u91cd\u542f\u670d\u52a1"},"\u91cd\u542f\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo exportfs -a\nsudo systemctl restart nfs-kernel-server\n")),(0,o.kt)("h2",{id:"embedded"},"embedded"),(0,o.kt)("h3",{id:"\u5b89\u88c5nfs\u670d\u52a1"},"\u5b89\u88c5NFS\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get upgrade\n/* \u6267\u884c\u5b89\u88c5nfs\u7ec4\u4ef6 */\nsudo apt-get install nfs-common\n")),(0,o.kt)("h3",{id:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55-1"},"\u521b\u5efa\u5171\u4eab\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," mkdir ~/nfs\n")),(0,o.kt)("h3",{id:"\u6302\u8f7d"},"\u6302\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mount -t nfs -o nolock 192.168.137.100:/home/zhongyi/mnt /root/mnt\n")))}u.isMDXComponent=!0}}]);