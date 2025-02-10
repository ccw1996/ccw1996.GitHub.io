"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[3025],{2685:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"other/wsl2usb","title":"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907","description":"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907","source":"@site/docs/other/wsl2usb.md","sourceDirName":"other","slug":"/other/wsl2usb","permalink":"/docs/other/wsl2usb","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/other/wsl2usb.md","tags":[{"inline":true,"label":"wsl2","permalink":"/docs/tags/wsl-2"}],"version":"current","lastUpdatedAt":1739209039000,"frontMatter":{"title":"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907","description":"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907","tags":["wsl2"],"editor":"caroot"},"sidebar":"tutorialSidebar","previous":{"title":"Downloading with wget (vscode \u8fdc\u7a0b\u8fde\u63a5\u95ee\u9898\uff09","permalink":"/docs/other/vscode"},"next":{"title":"python","permalink":"/docs/python/"}}');var l=n(4848),i=n(8453);const r={title:"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907",description:"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907",tags:["wsl2"],editor:"caroot"},o="wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907",d={},c=[{value:"usbipd-win",id:"usbipd-win",level:2},{value:"wsl2 \u4e2d\u5b89\u88c5 USBIP \u5de5\u5177",id:"wsl2-\u4e2d\u5b89\u88c5-usbip-\u5de5\u5177",level:2},{value:"wsl2 \u8fde\u63a5\u5bbf\u4e3b\u673a USB \u8bbe\u5907",id:"wsl2-\u8fde\u63a5\u5bbf\u4e3b\u673a-usb-\u8bbe\u5907",level:2}];function u(s){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907",children:"wsl2\u8bfb\u53d6\u5bbf\u4e3b\u673ausb\u8bbe\u5907"})}),"\n",(0,l.jsx)(e.h2,{id:"usbipd-win",children:"usbipd-win"}),"\n",(0,l.jsx)(e.p,{children:'\u4e0b\u8f7d usbipd-win \u7684\u5b89\u88c5\u955c\u50cf,\u5b89\u88c5\n\u5b89\u88c5\u4e86 "USBIP \u8bbe\u5907\u4e3b\u673a" \u7684\u670d\u52a1 usbipd\uff1b ==> \u53ef\u4ee5\u901a\u8fc7 win + S\uff0c\u8f93\u5165\u670d\u52a1\u6765\u627e\u5230\uff1b\n\u53ef\u6267\u884c\u7a0b\u5e8f usbipd\uff0c\u5e76\u81ea\u52a8\u6dfb\u52a0\u5230\u4e86\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\uff1b\n\u8c03\u7528\u4e86\u9632\u706b\u5899\u89c4\u5219 usbipd \u6765\u5141\u8bb8\u6240\u6709\u7684\u672c\u5730\u5b50\u7f51\u7edc\u80fd\u591f\u8fde\u63a5\u5230\u670d\u52a1\uff1b'}),"\n",(0,l.jsx)(e.h2,{id:"wsl2-\u4e2d\u5b89\u88c5-usbip-\u5de5\u5177",children:"wsl2 \u4e2d\u5b89\u88c5 USBIP \u5de5\u5177"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"sudo apt install linux-tools-generic hwdata\nsudo update-alternatives --install /usr/local/bin/usbip usbip /usr/lib/linux-tools/*-generic/usbip 20\n"})}),"\n",(0,l.jsx)(e.h2,{id:"wsl2-\u8fde\u63a5\u5bbf\u4e3b\u673a-usb-\u8bbe\u5907",children:"wsl2 \u8fde\u63a5\u5bbf\u4e3b\u673a USB \u8bbe\u5907"}),"\n",(0,l.jsx)(e.p,{children:"\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u6240\u6709\u8fde\u63a5\u5230 windows \u7684 USB \u8bbe\u5907"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"usbipd wsl list\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e2a\u65f6\u5019\u4f1a\u5217\u51fa\u8fde\u63a5\u5728 windows \u673a\u5668\u4e0a\u6240\u6709\u7684 USB \u8bbe\u5907"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u91cc\u9700\u8981\u5173\u6ce8\u7684\u5c31\u662f\u4e24\u5217\uff0c\u5206\u522b\u662f BUSID \u548c STATE\uff0cBUSID \u5c31\u662f\u6bcf\u4e2a USB \u8bbe\u5907\u7684\u552f\u4e00 ID\uff0cSTATE \u5c31\u662f USB \u8bbe\u5907\u7684\u72b6\u6001\uff0c\u5982\u679c\u662f Not attached\uff0c\u90a3\u5c31\u662f\u8fd8\u6ca1\u6709\u6302\u8f7d\u5230 wsl2 \u4e2d\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6bd4\u5982\u6211\u8fd9\u91cc\u63d2\u62d4\u540e\u786e\u8ba4 BUSID \u4e3a 3-1 \u7684 USB \u8bbe\u5907\u662f\u6211\u60f3\u8981\u6302\u8f7d\u7684\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u6302\u8f7d\u5230 wsl2\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"usbipd wsl attach --busid 3-1\n"})})]})}function a(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(u,{...s})}):u(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>o});var t=n(6540);const l={},i=t.createContext(l);function r(s){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),t.createElement(i.Provider,{value:e},s.children)}}}]);