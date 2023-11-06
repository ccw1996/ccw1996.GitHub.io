"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[9469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(f,c(c({ref:t},i),{},{components:r})):n.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,c=new Array(p);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<p;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const p={title:"C++14 \u65b0\u7279\u6027",description:"C++14 \u65b0\u7279\u6027",tags:["cpp","basic"],editor:"caroot"},c=void 0,o={unversionedId:"cpp/cpp14",id:"cpp/cpp14",title:"C++14 \u65b0\u7279\u6027",description:"C++14 \u65b0\u7279\u6027",source:"@site/docs/cpp/cpp14.md",sourceDirName:"cpp",slug:"/cpp/cpp14",permalink:"/docs/cpp/cpp14",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/cpp14.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"basic",permalink:"/docs/tags/basic"}],version:"current",lastUpdatedAt:1699283272,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{title:"C++14 \u65b0\u7279\u6027",description:"C++14 \u65b0\u7279\u6027",tags:["cpp","basic"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"c++\u4e4bconstexpr",permalink:"/docs/cpp/constexpr"},next:{title:"C++17\u5e38\u7528\u65b0\u7279\u6027",permalink:"/docs/cpp/cpp17"}},l={},s=[{value:"\u53d8\u91cf\u6a21\u677f",id:"\u53d8\u91cf\u6a21\u677f",level:2},{value:"\u4e8c\u8fdb\u5236\u5b57\u9762\u91cf",id:"\u4e8c\u8fdb\u5236\u5b57\u9762\u91cf",level:2},{value:"std::make_unipue",id:"stdmake_unipue",level:2},{value:"std::shared_timed_mutex\u3001std::share_lock",id:"stdshared_timed_mutexstdshare_lock",level:2}],i={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u53d8\u91cf\u6a21\u677f"},"\u53d8\u91cf\u6a21\u677f"),(0,a.kt)("p",null,"\u53d8\u91cf\u6a21\u677f\u662fC++14\u4e2d\u65b0\u589e\u7684\u7279\u6027\uff0c\u53ef\u4ee5\u5c06\u53d8\u91cf\u5b9e\u4f8b\u5316\u6210\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u53d8\u91cf\u6a21\u677f\u7684\u5b9a\u4e49\u65b9\u6cd5\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"template < \u5f62\u53c2\u5217\u8868 > \u53d8\u91cf\u58f0\u660e\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u8bed\u6cd5\u4e2d\uff0c\u53d8\u91cf\u58f0\u660e\u5373\u4e3a\u53d8\u91cf\u6a21\u677f\u540d\uff0c\u5f62\u53c2\u5217\u8868\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\uff0c\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"template<class T>\nconstexpr T pi = T(3.1415926535897932385L);  // \u53d8\u91cf\u6a21\u677f\n")),(0,a.kt)("h2",{id:"\u4e8c\u8fdb\u5236\u5b57\u9762\u91cf"},"\u4e8c\u8fdb\u5236\u5b57\u9762\u91cf"),(0,a.kt)("p",null,"C++14\u4e2d\u65b0\u589e\u4e860b\u6216\u80050B\u5f00\u5934\u7684\u5b57\u9762\u91cf\uff0c\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int main () {\n   int x=32;\n   int y = 0b100000;\n   std::cout<<(x==y)<<std::endl;\n    return 0;\n}\n")),(0,a.kt)("h2",{id:"stdmake_unipue"},"std::make_unipue"),(0,a.kt)("h2",{id:"stdshared_timed_mutexstdshare_lock"},"std::shared_timed_mutex\u3001std::share_lock"),(0,a.kt)("p",null,"\u5171\u4eab\u4e92\u65a5\u7684\u4f7f\u7528\u4f7f\u7528\u573a\u666f\u662f\u540c\u4e00\u4e2a\u6570\u636e\u8d44\u6e90\uff0c\u5b58\u5728\u591a\u4e2a\u7ebf\u7a0b\u8bfb\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\u7684\u573a\u666f\u3002\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5b9e\u73b0\u7684\u529f\u80fd\u662f\u8d4b\u503c\u8fd0\u7b97\u7b26\u53ef\u4ee5\u6709\u591a\u4e2a\u8bfb\u4f46\u662f\u53ea\u6709\u4e00\u4e2a\u5199\u80fd\u529b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class R\n{\n    mutable std::shared_timed_mutex mut;\n    /* \u6570\u636e */\npublic:\n    R& operator=(const R& other)\n    {\n        // \u8981\u6c42\u6392\u4ed6\u6027\u6240\u6709\u6743\u4ee5\u5199\u5165 *this\n        std::unique_lock<std::shared_timed_mutex> lhs(mut, std::defer_lock);\n        // \u8981\u6c42\u5171\u4eab\u6240\u6709\u6743\u4ee5\u8bfb\u53d6 other\n        std::shared_lock<std::shared_timed_mutex> rhs(other.mut, std::defer_lock);\n        std::lock(lhs, rhs);\n        /* \u8d4b\u503c\u6570\u636e */\n        return *this;\n    }\n};\nint main() {\n    R r;\n}\n")))}u.isMDXComponent=!0}}]);