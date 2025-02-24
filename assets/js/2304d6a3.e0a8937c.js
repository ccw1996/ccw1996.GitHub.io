"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[6560],{1430:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(6540),o=n(797);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},7614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"ml/optimization/optimization","title":"optimization","description":"","source":"@site/docs/ml/optimization/optimization.md","sourceDirName":"ml/optimization","slug":"/ml/optimization/","permalink":"/docs/ml/optimization/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/optimization.md","tags":[],"version":"current","lastUpdatedAt":1740402577000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"OpenAITriton MLIR \u7b2c\u4e00\u7ae0 Triton DSL","permalink":"/docs/ml/openai_triton/MLIR"},"next":{"title":"GEMM_GPU","permalink":"/docs/ml/optimization/gemm_GPU"}}');var o=n(4848),i=n(8453),s=n(9563);const c={},l=void 0,a={},u=[];function m(e){return(0,o.jsx)(s.A,{})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m()}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},9563:(e,t,n)=>{n.d(t,{A:()=>j});n(6540);var r=n(4164),o=n(3751),i=n(6289),s=n(1430),c=n(2887),l=n(539),a=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=n(4848);function d(e){let{href:t,children:n}=e;return(0,m.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:i}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),i&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,m.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(h,{item:t});case"category":return(0,m.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,m.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(x,{...e});const i=(0,o.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},t)))})}}}]);