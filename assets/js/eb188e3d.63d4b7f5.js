"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[8765],{4871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"other/proxy","title":"proxy\u914d\u7f6e","description":"proxy\u914d\u7f6e","source":"@site/docs/other/proxy.md","sourceDirName":"other","slug":"/other/proxy","permalink":"/docs/other/proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/other/proxy.md","tags":[{"inline":true,"label":"proxy","permalink":"/docs/tags/proxy"}],"version":"current","lastUpdatedAt":1735140116000,"frontMatter":{"title":"proxy\u914d\u7f6e","description":"proxy\u914d\u7f6e","tags":["proxy"],"editor":"caroot"},"sidebar":"tutorialSidebar","previous":{"title":"\u89e3\u51b3\u95ee\u9898\u7684\u65b9\u6cd5\u8bba","permalink":"/docs/other/problem"},"next":{"title":"\u6b63\u5219\u8868\u8fbe\u5f0f\u5165\u95e8","permalink":"/docs/other/regex"}}');var o=n(4848),s=n(8453);const l={title:"proxy\u914d\u7f6e",description:"proxy\u914d\u7f6e",tags:["proxy"],editor:"caroot"},c=void 0,i={},p=[{value:"powershell",id:"powershell",level:2},{value:"git",id:"git",level:2},{value:"conda",id:"conda",level:2},{value:"WSL",id:"wsl",level:2},{value:"WSL wget",id:"wsl-wget",level:2},{value:"yarn",id:"yarn",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"powershell",children:"powershell"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ps",children:'$env:HTTP_PROXY="http://127.0.0.1:1080"\n$env:HTTPS_PROXY="http://127.0.0.1:1080"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"git",children:"git"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"git config --global http.https://github.com.proxy http://127.0.0.1:1080\ngit config --global https.https://github.com.proxy http://127.0.0.1:1080\n"})}),"\n",(0,o.jsx)(t.h2,{id:"conda",children:"conda"}),"\n",(0,o.jsx)(t.p,{children:"vim ~/.condarc"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"channels:\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/\n  - defaults\nshow_channel_urls: true\n \nproxy_servers:\n  http: http://xxx.xx.com:8080\n  https: https://xxx.xx.com:8080\nssl_verify: false\n"})}),"\n",(0,o.jsx)(t.h2,{id:"wsl",children:"WSL"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cat /etc/resolv.conf \u67e5\u770b DNS \u670d\u52a1\u5668 IP\n"})}),"\n",(0,o.jsx)(t.h2,{id:"wsl-wget",children:"WSL wget"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'export http_proxy="http://172.31.240.1:1080"\nexport https_proxy="http://172.31.240.1:1080"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"yarn",children:"yarn"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"yarn config set proxy http://127.0.0.1:1080\nyarn config set https-proxy http://127.0.0.1:1080\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(6540);const o={},s=r.createContext(o);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);