"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[5001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=p(n),m=a,d=v["".concat(i,".").concat(m)]||v[m]||u[m]||c;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=v;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const c={title:"vector",tags:["cpp","STL"],editor:"caroot"},o=void 0,l={unversionedId:"cpp/STL/vector",id:"cpp/STL/vector",title:"vector",description:"\u591a\u53c2\u6784\u9020\u51fd\u6570",source:"@site/docs/cpp/STL/vector.md",sourceDirName:"cpp/STL",slug:"/cpp/STL/vector",permalink:"/docs/cpp/STL/vector",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/STL/vector.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"STL",permalink:"/docs/tags/stl"}],version:"current",frontMatter:{title:"vector",tags:["cpp","STL"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"STL",permalink:"/docs/cpp/STL/"},next:{title:"C++17\u5e38\u7528\u65b0\u7279\u6027",permalink:"/docs/cpp/cpp17"}},i={},p=[{value:"\u591a\u53c2\u6784\u9020\u51fd\u6570",id:"\u591a\u53c2\u6784\u9020\u51fd\u6570",level:2},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:3},{value:"\u6539\u8fdb",id:"\u6539\u8fdb",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u591a\u53c2\u6784\u9020\u51fd\u6570"},"\u591a\u53c2\u6784\u9020\u51fd\u6570"),(0,a.kt)("p",null,"\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u521d\u59cb\u5316\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> vec{1, 2, 3, 4, 5};\n")),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6709\u4e24\u4e2a\u7f3a\u70b9\uff0c\u90fd\u662f\u56e0\u4e3a\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u5b9e\u9645\u4e0a\u7b7e\u540d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"vector(std::initializer_list<T>)"),"\u800c\u4ea7\u751f\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301move-only\u7c7b\u578b\u3002initializer_list\u7684\u5e95\u5c42\u5b9e\u73b0\uff08\u4e0b\u9762\u4f1a\u63d0\uff09\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u5e38\u91cf\u6570\u7ec4\uff0c\u56e0\u6b64list\u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u88abcopy\u8fdbvector\u5bf9\u8c61\uff1b\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"vector<unique_ptr<int>>"),"\u4e4b\u7c7b\u7684\u5c31\u6ca1\u6cd5\u8fd9\u4e48\u5e72\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u7684\u8bed\u4e49\u5dee\u522b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"vector(5, 5)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"vector{5, 5}"),"\u7684\u7ed3\u679c\u5b8c\u5168\u4e0d\u4e00\u6837\u3002\u8fd9\u4e2a\u4e5f\u662f\u56e0\u4e3ainitializer_list\u53ea\u62a2\u593alist-initialization\uff0c\u800c\u4e0d\u62a2\u593a\u5176\u4ed6\u79cd\u7c7b\u7684\u521d\u59cb\u5316\u800c\u9020\u6210\u7684\u3002")),(0,a.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"using std::vector;\n\ntemplate<typename T>\nstruct vector2 : vector<T>\n{\n    using vector<T>::emplace_back;\n    using vector<T>::push_back;\n    using vector<T>::operator[];\n    using vector<T>::reserve;\n\n    template<typename... Ts>\n    vector2(Ts&&... ts)\n    {\n        reserve(sizeof...(Ts));\n        (emplace_back(static_cast<Ts&&>(ts)), ...);\n    }\n};\n")),(0,a.kt)("p",null,"\u6700\u57fa\u7840\u7684\u601d\u60f3\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"vector{1, 2, 3, 4, 5}"),"\u9664\u4e86\u53ef\u4ee5\u8c03\u7528initializer_list\u6784\u9020\u51fd\u6570\u4ee5\u5916\uff0c\u8fd8\u53ef\u4ee5\uff08\u4f5c\u4e3afallback\uff09\u8c03\u7528\u4e00\u4e2a5\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\u3002\u8fd9\u6837\uff0c\u5982\u679c\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u4efb\u610f\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\uff0c\u63d0\u524dreserve\u4e00\u4e0b\uff0c\u7136\u540e\u5b8c\u7f8e\u8f6c\u53d1\u7ed9emplace_back\u6765\u5c31\u5730\u6784\u9020\u6240\u6709\u7684\u5143\u7d20\uff0c\u7406\u8bba\u4e0a\u662f\u4e0d\u4f1a\u635f\u8017\u6027\u80fd\u7684\u3002"),(0,a.kt)("h3",{id:"\u6539\u8fdb"},"\u6539\u8fdb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u592a\u8fc7\u8d2a\u5a6a\uff0c\u6ca1\u6709\u9650\u5b9a\u7c7b\u578b\uff0c\u4f1a\u628a\u62f7\u8d1d/\u79fb\u52a8/\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\u5168\u90e8\u6253\u5305\u5e26\u8d70"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u7981\u6b62\u9690\u5f0f\u8f6c\u6362"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u7ed9\u5176\u4ed6\u6784\u9020\u51fd\u6570\u7559\u7a7a\u95f4")),(0,a.kt)("p",null,"\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u6539\u8fdb\u65b9\u6cd5\u662f\u52a0tag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"using std::vector;\n\ntemplate<typename T>\nstruct vector2 : vector<T>\n{\n    using vector<T>::emplace_back;\n    using vector<T>::push_back;\n    using vector<T>::operator[];\n    using vector<T>::reserve;\n\n    template<typename... Ts> /* requires (sizeof...(Ts) >= 1) */\n    vector2(std::in_place_t, Ts&&... ts)\n    {\n        reserve(sizeof...(Ts));\n        (emplace_back(static_cast<Ts&&>(ts)), ...);\n    }\n};\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u51e0\u4e2a\u95ee\u9898\u90fd\u6ca1\u6709\u4e86\uff0c\u800c\u4e14\u6700\u5927\u7684\u4f18\u70b9\u5c31\u662f\u8fd9\u548c\u73b0\u6709\u7684vector\u6784\u9020\u51fd\u6570\u662f\u517c\u5bb9\u7684\u2014\u2014\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u63d0\u51fa\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"std::vector<T>"),"\u589e\u52a0\u8fd9\u4e2a\u51fd\u6570\u800c\u4e0d\u5e26\u6765API Break\u3002\u7136\u800c\uff0c\u6700\u5927\u7684\u95ee\u9898\u5c31\u662f\u8fd9\u4e2atag\u7684\u52a0\u5165\u8ba9\u6574\u4e2a\u6784\u9020\u65b9\u6cd5\u90fd\u53d8\u5f97\u6709\u90a3\u4e48\u4e00\u70b9\u7e41\u7410\uff0c\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"vector{1, 2, 3}"),"\u53d8\u6210\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"vector{std::in_place, 1, 2, 3}"),"\u3002"),(0,a.kt)("p",null,"\u8981\u89e3\u51b3\u4e0a\u9762\u7684\u51e0\u4e2a\u95ee\u9898\u672c\u8eab\u4e5f\u5e76\u4e0d\u56f0\u96be\uff1a\u52a0\u5165\u5bf9\u7c7b\u578b\u7684\u9650\u5236\u5c31\u884c\u3002\u672c\u8d28\u4e0a\u6211\u4eec\u5e0c\u671b\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u4e0d\u8981\u62a2\u593a\u7279\u6b8a\u6210\u5458\uff0c\u800c\u4e14\u5728\u5355\u53c2\u60c5\u51b5\u4e0b\u4e5f\u4e0d\u5e94\u8be5\u542f\u7528\u9690\u5f0f\u8f6c\u6362\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"using std::vector;\n\ntemplate<typename T>\nstruct vector2 : vector<T>\n{\n    using vector<T>::emplace_back;\n    using vector<T>::push_back;\n    using vector<T>::operator[];\n    using vector<T>::reserve;\n\n    vector2() = default;\n    vector2(const vector2&) = default;\n    vector2(vector2&&) noexcept = default;\n    vector2& operator=(const vector2&) & = default;\n    vector2& operator=(vector2&&) & noexcept = default;\n\n    template<typename Ts>\n    requires (\n        std::is_constructible_v<T, Ts&&> &&\n        !std::is_same_v<std::remove_cvref_t<Ts>, vector2<T>>\n    )\n    explicit vector2(Ts&& ts)\n    {\n        emplace_back(static_cast<Ts&&>(ts));\n    }\n\n    template<typename... Ts>\n    requires (\n        sizeof...(Ts) >= 2 &&\n        (std::is_constructible_v<T, Ts&&> && ...)\n    )\n    vector2(Ts&&... ts)\n    {\n        reserve(sizeof...(Ts));\n        (emplace_back(static_cast<Ts&&>(ts)), ...);\n    }\n};\n\ntemplate<typename... Ts>\nvector2(Ts...) -> vector2<std::common_type_t<Ts...>>;\n")))}u.isMDXComponent=!0}}]);