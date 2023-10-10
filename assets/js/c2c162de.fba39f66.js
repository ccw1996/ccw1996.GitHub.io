"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(m,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"mobileViT \u8be6\u89e3",description:"mobileViT \u8be6\u89e3",sidebar_position:1,tags:["machine learning","interview"],editor:"caroot"},l=void 0,i={unversionedId:"ml/paper/mobileVIT",id:"ml/paper/mobileVIT",title:"mobileViT \u8be6\u89e3",description:"mobileViT \u8be6\u89e3",source:"@site/docs/ml/paper/mobileVIT.md",sourceDirName:"ml/paper",slug:"/ml/paper/mobileVIT",permalink:"/docs/ml/paper/mobileVIT",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/paper/mobileVIT.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1696954797,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:1,frontMatter:{title:"mobileViT \u8be6\u89e3",description:"mobileViT \u8be6\u89e3",sidebar_position:1,tags:["machine learning","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"paper",permalink:"/docs/ml/paper/"},next:{title:"RepVGG \u8be6\u89e3",permalink:"/docs/ml/paper/RepVGG"}},m={},s=[{value:"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58",id:"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58",level:2},{value:"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58",id:"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58",level:2},{value:"mobilevit \u7ed3\u6784",id:"mobilevit-\u7ed3\u6784",level:2},{value:"transformer encoder",id:"transformer-encoder",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_37541097/article/details/126715733"},"https://blog.csdn.net/qq_37541097/article/details/126715733"))),(0,r.kt)("h2",{id:"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58"},"\u4f30\u7b97transformer\u6a21\u578b\u7684\u5185\u5b58"),(0,r.kt)("p",null,"GPT\u7531\u8bb8\u591atransformer\u5757\u7ec4\u6210"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"multi_headed_attention --\x3e layer_normalization --\x3e MLP --\x3elayer_normalization")),(0,r.kt)("p",null,"\u6bcf\u4e2amulti_headed_attention\u5143\u7d20\u90fd\u7531\u952e\uff0c\u503c\u548c\u67e5\u8be2\u7ec4\u6210\u3002\u5176\u4e2d\u5305\u62ecn_head\u4e2a\u6ce8\u610f\u529b\u5934\u548cdim\u4e2a\u7ef4\u5ea6\u3002MLP\u662f\u5305\u542b\u6709n_head * dim\u7684\u5c3a\u5bf8\u3002\u8fd9\u4e9b\u6743\u91cd\u90fd\u662f\u8981\u5360\u7528\u5185\u5b58\u7684\uff0c\u90a3\u4e48"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"}," memory_modal = memory of multi_headed_attention + memory of MLP\n  = memory of value + memory of key + memory of query + memory of MLP\n  = square_of(n_head * dim) + square_of(n_head * dim) + square_of(n_head * dim) + square_of(n_head * dim)\n  = 4*square_of(n_head * dim)\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u7684\u6a21\u578b\u5305\u542b\u4e86n\u4e2a\u5355\u5143\u3002\u6240\u4ee5\u6700\u540e\u5185\u5b58\u5c31\u53d8\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"}," memory_modal = 4*n_tr_blocks*square_of(n_head * dim)\n")),(0,r.kt)("h2",{id:"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58"},"\u4f30\u7b97transformer\u4e2d\u95f4\u53d8\u91cf\u7684\u5185\u5b58"),(0,r.kt)("p",null,"\u591a\u5934\u6ce8\u610f\u529b\u901a\u5e38\u4f7f\u7528softmax\uff0c\u53ef\u4ee5\u5199\u6210:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"multi_headed_attention = softmax(query * key * sequence_length) * value\n")),(0,r.kt)("p",null,"k,q,v\u7684\u7ef4\u5ea6\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[batch_size, n_head, sequence_length, dim]\n")),(0,r.kt)("p",null,"multi_headed_attention\u64cd\u4f5c\u4f1a\u5f97\u51fa\u5982\u4e0b\u5f62\u72b6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[batch_size, n_head, sequence_length, sequence_length]\n")),(0,r.kt)("p",null,"\u6240\u4ee5\u6700\u7ec8\u5f97\u5185\u5b58\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"memory_softmax = batch_size * n_head * square_of(sequence_length)\n")),(0,r.kt)("p",null,"MLP\u4e5f\u6709\u76f8\u540c\u7684\u7ef4\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"memory of MLP = batch_size * n_head * sequence_length * dim\nmemory of value = batch_size * n_head * sequence_length * dim\n")),(0,r.kt)("p",null,"\u6211\u4eec\u628a\u4e0a\u9762\u7684\u6574\u5408\u5728\u4e00\u8d77\uff0c\u5355\u4e2atransformer\u7684\u4e2d\u95f4\u53d8\u91cf\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"memory_activations = memory_softmax + memory_value + memory_MLP\n= batch_size * n_head * square_of(sequence_length)\n  + batch_size * n_head * sequence_length * dim\n  + batch_size * n_head * sequence_length * dim\n= batch_size * n_head * sequence_length * (sequence_length + 2*dim)\n")),(0,r.kt)("p",null,"\u518d\u4e58\u4ee5\u5757\u7684\u6570\u91cf\uff0c\u6a21\u578b\u6240\u6709\u7684memory_activations\u5c31\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"}," n_tr_blocks * (batch_size * n_head * sequence_length * (sequence_length + 2*dim))\n")),(0,r.kt)("p",null,"\u8bad\u7ec3\u65f6\u9700\u8981\u7684\u5185\u5b58\u603b\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"total_memory = memory_modal + 2 * memory_activations\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"R = n_tr_blocks = transformer\u5c42\u5806\u53e0\u7684\u6570\u91cf\nN = n_head = \u6ce8\u610f\u529b\u5934\u6570\u91cf\nD = dim = \u6ce8\u610f\u529b\u5934\u7684\u7ef4\u5ea6\nB = batch_size = \u6279\u5927\u5c0f\nS = sequence_length =\u8f93\u5165\u5e8f\u5217\u7684\u957f\u5ea6"),(0,r.kt)("p",{parentName:"blockquote"},"memory modal = 4 ",(0,r.kt)("em",{parentName:"p"}," R ")," N^2 * D^2"),(0,r.kt)("p",{parentName:"blockquote"},"memory activations = RBNS(S + 2D)")),(0,r.kt)("h2",{id:"mobilevit-\u7ed3\u6784"},"mobilevit \u7ed3\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mobilevit.png",src:n(2056).Z,width:"1177",height:"564"})),(0,r.kt)("h3",{id:"transformer-encoder"},"transformer encoder"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tranform_encoder.png",src:n(6253).Z,width:"1170",height:"649"})),(0,r.kt)("p",null,"mobilevit\u7684self-attention\u8ddf\u666e\u901a\u7684self-attention\u6709\u6240\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u5c06\u7279\u5f81\u56fe\u5212\u5206\u4e3a\u4e00\u4e2a\u4e2apatch\uff0c\u4ee52","*","2\u7684\u5927\u5c0f\u4e3a\u4f8b"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5b9e\u9645\u505aattention\u4e2d\uff0c\u5c06patch\u4e2d\u5bf9\u6bcf\u4e00\u4e2a\u76f8\u540c\u4f4d\u7f6e\u7684\u6570\u636e\u505aself-attention,\u5373\u5c06\u989c\u8272\u76f8\u540c\u7684\u505aself-attention(\u539f\u59cbattention\uff0c\u6bcf\u4e2atoken\u8981\u4e0e\u6240\u6709token\u8ba1\u7b97attention)")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u666e\u901a\u7684Self-Attention\u8ba1\u7b97\u524d\uff0c\u4e00\u822c\u662f\u76f4\u63a5\u5c55\u5e73H, W\u4e24\u4e2a\u7ef4\u5ea6\u5f97\u5230\u4e00\u4e2aToken\u5e8f\u5217\uff0c\u5373\u5c06","[N, H, W, C]"," -> ","[N, H*W, C]","\u5176\u4e2dN\u8868\u793aBatch\u7ef4\u5ea6\u3002\u4f46\u5728MobileViT block\u7684Self-Attention\u8ba1\u7b97\u4e2d\uff0c\u53ea\u662f\u5c06\u989c\u8272\u76f8\u540c\u7684Token\u8fdb\u884c\u4e86Attention\uff0c\u6240\u4ee5\u4e0d\u80fd\u7b80\u5355\u7c97\u66b4\u7684\u5c55\u5e73H, W\u7ef4\u5ea6\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6587\u4e2d\u7684Unfold\u5c31\u662f\u5c06\u76f8\u540c\u989c\u8272\u7684Token\u5c55\u5e73\u5728\u4e00\u4e2a\u5e8f\u5217\u4e2d\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u666e\u901a\u7684Self-Attention\u5e76\u884c\u8ba1\u7b97\u6bcf\u4e2a\u5e8f\u5217\u7684Attention\u4e86\u3002\u6700\u540e\u5728\u901a\u8fc7Fold\u6298\u53e0\u56de\u539f\u7279\u5f81\u56fe\u5373\u53ef\u3002\n",(0,r.kt)("img",{alt:"fold.png",src:n(6616).Z,width:"1052",height:"296"})))}d.isMDXComponent=!0},6616:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fold-6d8a953e0109c32def839e1e20e9eb5c.png"},2056:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mobilevit-79fe9ff82d22563ad77e684b2714b925.png"},6253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tranform_encoder-c29f4fc5fa585d2801e25e32e8d68eb0.png"}}]);