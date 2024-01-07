"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[8269],{9929:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var t=i(5893),a=i(1151);const l={title:"CPU Cache\u7684\u6d4b\u91cf\u65b9\u6cd5",tags:["machine learning","interview"]},c=void 0,r={id:"ml/cache",title:"CPU Cache\u7684\u6d4b\u91cf\u65b9\u6cd5",description:"Cache\u4ee5Cache Line\u4e3a\u8bbf\u95ee\u5355\u4f4d\uff0c\u5373Cache\u53ca\u5185\u5b58\u7684\u8bbf\u95ee\u662f\u4ee5\u5757\u4e3a\u5355\u4f4d\u7684\uff0c\u800c\u4e0d\u662f\u5b57\u8282\u5355\u4f4d\u3002",source:"@site/docs/ml/cache.md",sourceDirName:"ml",slug:"/ml/cache",permalink:"/docs/ml/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/cache.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1704643201,formattedLastUpdatedAt:"Jan 7, 2024",frontMatter:{title:"CPU Cache\u7684\u6d4b\u91cf\u65b9\u6cd5",tags:["machine learning","interview"]},sidebar:"tutorialSidebar",previous:{title:"transformer \u89e3\u8bfb",permalink:"/docs/ml/attention_is_all_you_need"},next:{title:"pytorch\u5377\u79ef\u5c42\u57fa\u7840\u4e03\u95ee",permalink:"/docs/ml/conv"}},o={},s=[{value:"\u6d4b\u91cf\u65b9\u6cd5",id:"\u6d4b\u91cf\u65b9\u6cd5",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2}];function h(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Cache\u4ee5Cache Line\u4e3a\u8bbf\u95ee\u5355\u4f4d\uff0c\u5373Cache\u53ca\u5185\u5b58\u7684\u8bbf\u95ee\u662f\u4ee5\u5757\u4e3a\u5355\u4f4d\u7684\uff0c\u800c\u4e0d\u662f\u5b57\u8282\u5355\u4f4d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6d4b\u91cf\u65b9\u6cd5",children:"\u6d4b\u91cf\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Evict (\u9a71\u9010) + Time (\u6d4b\u91cf) \uff1a \u901a\u8fc7\u5236\u9020\u51b2\u7a81\u4ee5\u8fbe\u6210\u88ab\u6d4b\u91cf\u76ee\u6807\u6570\u636e\u4ececache\u4e2d\u6e05\u9664\u7684\u76ee\u7684"}),"\n",(0,t.jsx)(n.li,{children:"Prime (\u88c5\u586b) + Probe (\u63a2\u6d4b) \uff1a\u4e0e1)\u65b9\u6cd5\u4e00\u6837\uff0c\u53ea\u662f\u4f5c\u7528\u5bf9\u8c61\u662f\u53cd\u7684"}),"\n",(0,t.jsx)(n.li,{children:"Flush (\u51b2\u5237) + Reload (\u52a0\u8f7d) ) \uff1a\u6700\u4e3b\u52a8\u548c\u6700\u5feb\u7684\u529e\u6cd5\uff0c\u76f4\u63a5\u5229\u7528clflush\u6307\u4ee4\u5237\u65b0\uff0c\u7136\u540e\u518d\u8bfb\u53d6\u5185\u5b58\uff0c\u6b64\u65f6\u4f1a\u53d1\u751fCache Miss\u4e8b\u4ef6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Flush (\u51b2\u5237) + Flush (\u51b2\u5237) ) \uff1a\u4e0e3)\u7c7b\u4f3c\uff0c\u4f46\u6d4b\u91cf\u7684\u662fclflush\u6307\u4ee4\u9488\u5bf9\u6570\u636e\u5728\u4e0d\u5728cache\u4e2d\u7684\u6267\u884c\u5468\u671f\u7684\u4e0d\u540c"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Alt text",src:i(3315).Z+"",width:"720",height:"358"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6d4b\u8bd5\u4ee3\u7801",children:"\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <stdio.h>\n#include <time.h>\n\n#define KB 1024\n#define MB 1024 * 1024\n\nint main() {\n   long start, stop;\n   int lengthMod = 8 * MB - 1;\n   double totalTime, timeTaken;\n   int tmp;\n   double avg;\n\n   static int array[8 * MB];                       // \u5f00\u4e868MB\u7684\u6570\u7ec4\u4f5c\u4e3a\u64cd\u4f5c\u5bf9\u8c61\n   int i, j;\n   unsigned int k;\n   /* Change the step of array iteration and observe the change in time taken for computation.\n      The step('i' value) at which there is a significant change in time taken will correspond \n      to the cache line size */\n   for (i = 1; i <= 2048; i *= 2) {              // \u6700\u5916\u5c42\u5faa\u73af\uff0ci\u4f1a\u4ee52\u7684\u500d\u6570\u53d6\u503c\uff0c\u4f8b\u59821,2,4,8\n      totalTime = 0;\n      for (j = 0; j < 6; j++) {                  // \u6bcf\u4e2a\u6d4b\u8bd5\u91cd\u590d6\u6b21\n         start = clock();\n         for (k = 0; k < 512 * MB; k++) {        // \u6bcf\u6b21\u6d4b\u8bd5\u8fdb\u884c512M\u7684\u64cd\u4f5c\uff0c\u5927\u7ea65\u4ebf\u6b21\n            tmp += array[(k * i) & lengthMod];   // \u4e0b\u6807\u5bf98MB\u53d6\u4f59\uff0c\u4fdd\u8bc1\u4e0b\u6807\u4e0d\u6ea2\u51fa\n         }\n         timeTaken = (double)(clock() - start) / CLOCKS_PER_SEC;\n         totalTime += timeTaken;\n      }\n      totalTime /= 6;                            // \u53d66\u6b21\u6d4b\u8bd5\u5e73\u5747\u65f6\u95f4\uff0c\u4f5c\u4e3a\u7ed3\u679c\n      printf(\"For i value: %d    Time Taken:%lf\\n\",i,totalTime);\n   } \n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ ./a.out\nFor i value: 1    Time Taken:0.916899\nFor i value: 2    Time Taken:0.901540\nFor i value: 4    Time Taken:1.050702\nFor i value: 8    Time Taken:1.306834\nFor i value: 16    Time Taken:1.976239\nFor i value: 32    Time Taken:3.525364\nFor i value: 64    Time Taken:3.786639\nFor i value: 128    Time Taken:4.078370\nFor i value: 256    Time Taken:4.469508\nFor i value: 512    Time Taken:4.504872\nFor i value: 1024    Time Taken:5.040134\nFor i value: 2048    Time Taken:4.970626\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53 i \u7b49\u4e8e 8 \u7684\u65f6\u5019\uff0c\u65f6\u95f4\u6709\u4e86\u7b2c\u4e00\u6b21\u589e\u957f\uff0c\u56e0\u4e3a 8 * sizeof(int) = 64\uff0c\u6240\u4ee5Cache Line\u7684\u5927\u5c0f\u662f 64 \u5b57\u8282\u3002\u7136\u540e i \u7b49\u4e8e 16 \u65f6\uff0c\u5ef6\u8fdf\u8fdb\u4e00\u6b65\u589e\u52a0\u3002\u8fd9\u662f\u56e0\u4e3a\u786c\u4ef6\u9884\u53d6\u5373HWPrefetcher\u7684\u7f18\u6545\uff0c\u786c\u4ef6\u9884\u53d6\u529f\u80fd\u4f1a\u5728\u6bcf\u6b21Cache Miss\u7684\u60c5\u51b5\u4e0b\u591a\u8bfb\u4e00\u4e2aCache Line\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u6bcf\u6b21\u8bfb\u53d6\u4e24\u4e2aCache Line\u537364 * 2 = 128\u5b57\u8282\uff0c\u4f46\u6570\u636e\u5e76\u4e0d\u662f\u540c\u65f6\u5230\u8fbe\u7684\uff0c\u7b2c\u4e8c\u4e2aCache Line\u7684\u6570\u636e\u7684\u5230\u8fbe\u5468\u671f\u4f1a\u665a\u4e9b\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u5728128\u8fd9\u4e2a\u70b9\u4e0a\u7684\u5ef6\u65f6\u4f1a\u6bd464\u9ad8\u3002i \u7ee7\u7eed\u589e\u52a0\u4ee5\u540e\uff0c\u8fd8\u53ef\u4ee5\u89c2\u5bdf\u5230\u5ef6\u8fdf\u6709\u8df3\u8dc3\u6027\u7684\u589e\u52a0\uff0c\u8fd9\u662f\u8d85\u8fc7L1\uff0cL2\u5927\u5c0f\u65f6\u53d1\u751f\u7684\u5ef6\u8fdf\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3315:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/image-3-a2f846a1dd5f9651ce468c7d0135f125.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var t=i(7294);const a={},l=t.createContext(a);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);