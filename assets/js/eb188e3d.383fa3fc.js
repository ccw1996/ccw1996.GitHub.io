"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(r),y=o,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"proxy\u914d\u7f6e",description:"proxy\u914d\u7f6e",tags:["proxy"],editor:"caroot"},p=void 0,l={unversionedId:"other/proxy",id:"other/proxy",title:"proxy\u914d\u7f6e",description:"proxy\u914d\u7f6e",source:"@site/docs/other/proxy.md",sourceDirName:"other",slug:"/other/proxy",permalink:"/docs/other/proxy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/other/proxy.md",tags:[{label:"proxy",permalink:"/docs/tags/proxy"}],version:"current",frontMatter:{title:"proxy\u914d\u7f6e",description:"proxy\u914d\u7f6e",tags:["proxy"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"nfs\u914d\u7f6e",permalink:"/docs/other/nfs"}},c={},i=[{value:"powershell",id:"powershell",level:2},{value:"git",id:"git",level:2},{value:"conda",id:"conda",level:2},{value:"WSL",id:"wsl",level:2},{value:"WSL wget",id:"wsl-wget",level:2}],s={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"powershell"},"powershell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},'$env:HTTP_PROXY="http://127.0.0.1:1080"\n$env:HTTPS_PROXY="http://127.0.0.1:1080"\n')),(0,o.kt)("h2",{id:"git"},"git"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global http.https://github.com.proxy http://127.0.0.1:1080\ngit config --global https.https://github.com.proxy http://127.0.0.1:1080\n")),(0,o.kt)("h2",{id:"conda"},"conda"),(0,o.kt)("p",null,"vim ~/.condarc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"channels:\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/\n  - defaults\nshow_channel_urls: true\n \nproxy_servers:\n  http: http://xxx.xx.com:8080\n  https: https://xxx.xx.com:8080\nssl_verify: false\n")),(0,o.kt)("h2",{id:"wsl"},"WSL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat /etc/resolv.conf \u67e5\u770b DNS \u670d\u52a1\u5668 IP\n")),(0,o.kt)("h2",{id:"wsl-wget"},"WSL wget"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export http_proxy="http://172.31.240.1:1080"\nexport https_proxy="http://172.31.240.1:1080"\n')))}u.isMDXComponent=!0}}]);