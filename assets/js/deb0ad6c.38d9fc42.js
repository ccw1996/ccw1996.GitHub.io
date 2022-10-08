"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4718],{3905:(l,e,t)=>{t.d(e,{Zo:()=>_,kt:()=>u});var n=t(7294);function o(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}function a(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.push.apply(t,n)}return t}function r(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(l,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))}))}return l}function i(l,e){if(null==l)return{};var t,n,o=function(l,e){if(null==l)return{};var t,n,o={},a=Object.keys(l);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=l[t]);return o}(l,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(l,t)&&(o[t]=l[t])}return o}var c=n.createContext({}),s=function(l){var e=n.useContext(c),t=e;return l&&(t="function"==typeof l?l(e):r(r({},e),l)),t},_=function(l){var e=s(l.components);return n.createElement(c.Provider,{value:e},l.children)},d={inlineCode:"code",wrapper:function(l){var e=l.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(l,e){var t=l.components,o=l.mdxType,a=l.originalType,c=l.parentName,_=i(l,["components","mdxType","originalType","parentName"]),p=s(t),u=o,y=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return t?n.createElement(y,r(r({ref:e},_),{},{components:t})):n.createElement(y,r({ref:e},_))}));function u(l,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof l||o){var a=t.length,r=new Array(a);r[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=l,i.mdxType="string"==typeof l?l:o,r[1]=i;for(var s=2;s<a;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2385:(l,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",description:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",sidebar_position:2,tags:["machine learning","interview","sparse"],editor:"caroot"},r=void 0,i={unversionedId:"ml/sparse_tensorrt",id:"ml/sparse_tensorrt",title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",description:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",source:"@site/docs/ml/sparse_tensorrt.md",sourceDirName:"ml",slug:"/ml/sparse_tensorrt",permalink:"/docs/ml/sparse_tensorrt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/sparse_tensorrt.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"},{label:"sparse",permalink:"/docs/tags/sparse"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",description:"\u7a00\u758f\u77e9\u9635\u9ad8\u6027\u80fd\u90e8\u7f72",sidebar_position:2,tags:["machine learning","interview","sparse"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"yolo\u540e\u5904\u7406",permalink:"/docs/ml/yolo_postprocess"},next:{title:"optimization",permalink:"/docs/ml/optimization/"}},c={},s=[{value:"gemm",id:"gemm",level:2},{value:"stencil computation",id:"stencil-computation",level:3},{value:"\u7a7a\u95f4\u4f9d\u8d56",id:"\u7a7a\u95f4\u4f9d\u8d56",level:4},{value:"\u65f6\u95f4\u4f9d\u8d56",id:"\u65f6\u95f4\u4f9d\u8d56",level:4},{value:"gemm library",id:"gemm-library",level:2},{value:"cutlass",id:"cutlass",level:3},{value:"tensorrt plugin",id:"tensorrt-plugin",level:3}],_={toc:s};function d(l){let{components:e,...a}=l;return(0,o.kt)("wrapper",(0,n.Z)({},_,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gemm"},"gemm"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5206\u5757\u4e58\u6cd5"),(0,o.kt)("li",{parentName:"ul"},"stencil computation")),(0,o.kt)("h3",{id:"stencil-computation"},"stencil computation"),(0,o.kt)("p",null,"\u5728\u5e38\u89c1\u7684\u6570\u503c\u95ee\u9898\u4e2d\uff0c\u4f9d\u8d56\u5206\u4e3a\u4e24\u79cd\uff1a\u7a7a\u95f4\u4f9d\u8d56\u548c\u65f6\u95f4\u4f9d\u8d56"),(0,o.kt)("h4",{id:"\u7a7a\u95f4\u4f9d\u8d56"},"\u7a7a\u95f4\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5982\u679c\u5b58\u5728\u7a7a\u95f4\u4f9d\u8d56\uff0c\u53ef\u4ee5\u8bbe\u8ba1\u591a\u7ebf\u7a0b\u7684\u65b9\u5f0f\u8fdb\u884c\u5e76\u884c\uff0c\u8981\u5c0f\u5fc3\u7ebf\u7a0b\u4e4b\u95f4\u7684\u7ade\u4e89\u3002"),(0,o.kt)("p",null,"\u6b64\u65f6\u65e0\u6cd5\u76f4\u63a5\u901a\u8fc7\u591a\u8fdb\u7a0b/\u591a\u6838\u5e76\u884c\u8fdb\u884c\u5904\u7406\uff0c\u9700\u8981\u8fdb\u7a0b\u95f4\u901a\u8baf\uff0c\u6b64\u65f6\u7684\u591a\u8fdb\u7a0b\u4f18\u5316\uff0c\u9700\u8981\u8003\u8651\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u4ee3\u4ef7\u3002\u9700\u8981\u5c0f\u5fc3\u5730\u8bbe\u8ba1\u5e76\u884c\u65b9\u5f0f\u3002"),(0,o.kt)("h4",{id:"\u65f6\u95f4\u4f9d\u8d56"},"\u65f6\u95f4\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5982\u679c\u5b58\u5728\u65f6\u95f4\u4f9d\u8d56\u3002\u5e76\u884c\u4f18\u5316\u53d8\u5f97\u56f0\u96be\uff0c\u4f46\u662f\u7ecf\u8fc7\u5148\u54f2\u4eec\u7684\u4e0d\u61c8\u52aa\u529b\uff0c\u4e5f\u6709\u4e86\u4e00\u4e9b\u65b9\u6848\uff0c\u4e4b\u540e\u4f1a\u9010\u6e10\u4ecb\u7ecd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cuda"},"ptr_t stencil_7(ptr_t grid, ptr_t aux, const dist_grid_info_t *grid_info, int nt) {\n    ptr_t buffer[2] = {grid, aux};\n    int nx = grid_info->global_size_x;\n    int ny = grid_info->global_size_y;\n    int nz = grid_info->global_size_z;\n    dim3 grid_size (ceiling(nx, BLOCK_X), ceiling(ny, BLOCK_Y), ceiling(nz, BLOCK_Z));\n    dim3 block_size (BLOCK_X, BLOCK_Y, BLOCK_Z);\n    for(int t = 0; t < nt; ++t) {\n        stencil_7_naive_kernel_1step<<<grid_size, block_size>>>(\\\n            buffer[t % 2], buffer[(t + 1) % 2], nx, ny, nz, \\\n                grid_info->halo_size_x, grid_info->halo_size_y, grid_info->halo_size_z);\n    }\n    return buffer[nt % 2];\n}\n\n__global__ void stencil_7_naive_kernel_1step(cptr_t in, ptr_t out, \\\n                                int nx, int ny, int nz, \\\n                                int halo_x, int halo_y, int halo_z) {\n    int tx = threadIdx.x  + blockDim.x * blockIdx.x;// \u7ebf\u7a0b\u8d1f\u8d23\u7684\u6570\u636e\u5728\u5168\u5c40\u7684\u5750\u6807\uff08\u4f46\u6ce8\u610f\u4e0d\u542bhalo\u7684offset\uff01\uff09\n    int ty = threadIdx.y  + blockDim.y * blockIdx.y;\n    int tz = threadIdx.z  + blockDim.z * blockIdx.z;\n    int ldxx = BLOCK_X+2;// local_g\u7684\u5bbd\u5ea6\n    int ldyy = BLOCK_Y+2;\n\n    __shared__ double local_g[(BLOCK_X+2)*(BLOCK_Y+2)*(BLOCK_Z+2)];\n    if(tx < nx && ty < ny && tz < nz) {// \u4fdd\u8bc1\u8d85\u51fa\u4e86\u8ba1\u7b97\u8303\u56f4\u7684\u7ebf\u7a0b\u4e0d\u7528\u5de5\u4f5c\n        int ldx = nx + halo_x * 2;\n        int ldy = ny + halo_y * 2;\n        int offset_x, offset_y, offset_z;\n        int x = tx + halo_x;// \u7ebf\u7a0b\u8d1f\u8d23\u7684\u6570\u636e\u5728\u5168\u5c40\u6570\u7ec4\u4e2d\u7684\u5750\u6807\uff0c\u9700\u8981\u52a0\u4e0ahalo\u4f5c\u4e3aoffset\n        int y = ty + halo_y;\n        int z = tz + halo_z;\n        int local_x = threadIdx.x + halo_x;// \u7ebf\u7a0b\u8d1f\u8d23\u7684\u6570\u636e\u5728local_g\u4e2d\u7684\u5750\u6807\uff0c\u9700\u8981\u52a0\u4e0ahalo\u4f5c\u4e3aoffset\n        int local_y = threadIdx.y + halo_y;\n        int local_z = threadIdx.z + halo_z;\n\n        // local_g\u7684\u5185\u90e8\u533a\u57df\u62f7\u8d1d\n        local_g[INDEX(local_x, local_y, local_z, ldxx, ldyy)] = in[INDEX(x, y, z, ldx, ldy)];\n        // \u5982\u679c\u7ebf\u7a0b\u8d1f\u8d23\u8ba1\u7b97\u7684\u6570\u636e\u5728local_g\u4e2d\u5904\u4e8e\u6709\u6548\u533a\u57df\u7684\u8fb9\u7f18\uff08\u4e0ehalo\u533a\u7d27\u6328\u7740\uff09\uff0c\u5219\u8d1f\u8d23\u5c06halo\u6570\u636e\u505a\u586b\u5145\n        offset_x = (local_x == 1) ? -1 : (local_x == BLOCK_X) ? 1 : 0;\n        offset_y = (local_y == 1) ? -1 : (local_y == BLOCK_Y) ? 1 : 0;\n        offset_z = (local_z == 1) ? -1 : (local_z == BLOCK_Z) ? 1 : 0;\n        if (offset_x)   local_g[INDEX(local_x+offset_x, local_y, local_z, ldxx, ldyy)] = in[INDEX(x+offset_x, y, z, ldx, ldy)];\n        if (offset_y)   local_g[INDEX(local_x, local_y+offset_y, local_z, ldxx, ldyy)] = in[INDEX(x, y+offset_y, z, ldx, ldy)];\n        if (offset_z)   local_g[INDEX(local_x, local_y, local_z+offset_z, ldxx, ldyy)] = in[INDEX(x, y, z+offset_z, ldx, ldy)];\n        \n        __syncthreads();\n        \n        out[INDEX(x, y, z, ldx, ldy)] \\\n            = \n            ALPHA_ZZZ * local_g[INDEX(local_x, local_y, local_z, ldxx, ldyy)] \\\n            + ALPHA_NZZ * local_g[INDEX(local_x-1, local_y, local_z, ldxx, ldyy)] \\\n            + ALPHA_PZZ * local_g[INDEX(local_x+1, local_y, local_z, ldxx, ldyy)] \\\n            + ALPHA_ZNZ * local_g[INDEX(local_x, local_y-1, local_z, ldxx, ldyy)] \\\n            + ALPHA_ZPZ * local_g[INDEX(local_x, local_y+1, local_z, ldxx, ldyy)] \\\n            + ALPHA_ZZN * local_g[INDEX(local_x, local_y, local_z-1, ldxx, ldyy)] \\\n            + ALPHA_ZZP * local_g[INDEX(local_x, local_y, local_z+1, ldxx, ldyy)];\n    }\n}\n")),(0,o.kt)("h2",{id:"gemm-library"},"gemm library"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cublas"),(0,o.kt)("li",{parentName:"ul"},"cutlass"),(0,o.kt)("li",{parentName:"ul"},"cutensor")),(0,o.kt)("h3",{id:"cutlass"},"cutlass"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cutlass.png",src:t(4580).Z,width:"939",height:"450"}),"\n",(0,o.kt)("img",{alt:"cutlass_tile.png",src:t(719).Z,width:"912",height:"514"})),(0,o.kt)("h3",{id:"tensorrt-plugin"},"tensorrt plugin"),(0,o.kt)("p",null,"\u9700\u8981\u9002\u914d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"declaration"),(0,o.kt)("li",{parentName:"ul"},"datatype")))}d.isMDXComponent=!0},4580:(l,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/cutlass-7c910345366167eda5f7e7ea7e6126f3.png"},719:(l,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/cutlass_tile-591e400d2404d7fb0a59c0b060fdd00d.png"}}]);