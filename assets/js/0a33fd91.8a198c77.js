"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[9736],{4315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"ml/framework/framework","title":"framework","description":"","source":"@site/docs/ml/framework/framework.md","sourceDirName":"ml/framework","slug":"/ml/framework/","permalink":"/docs/ml/framework/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/framework/framework.md","tags":[],"version":"current","lastUpdatedAt":1739209039000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FlashAttention \u539f\u7406","permalink":"/docs/ml/flash_attention"},"next":{"title":"TensorRT\u6587\u6863\u89e3\u6790\uff08\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c42\u6269\u5c55 TensorRT\uff09","permalink":"/docs/ml/framework/custom_tensorrt_op"}}');var o=r(4848),s=r(8453),c=r(9563);const l={},i=void 0,a={},u=[];function m(e){return(0,o.jsx)(c.A,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m()}},9563:(e,t,r)=>{r.d(t,{A:()=>w});r(6540);var n=r(4164),o=r(3751),s=r(6289),c=r(1430),l=r(2887),i=r(539),a=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=r(4848);function d(e){let{href:t,children:r}=e;return(0,m.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:s}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:o,children:[r," ",o]}),s&&(0,m.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,m.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,m.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(h,{item:t});case"category":return(0,m.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,m.jsx)(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return(0,m.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,m.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},t)))})}},1430:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(6540),o=r(797);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},8453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>l});var n=r(6540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);