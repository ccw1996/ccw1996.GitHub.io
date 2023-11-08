"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[2309],{172:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>_,toc:()=>s});var a=e(5893),r=e(1151);const c={title:"cuda stream",tags:["work"]},d=void 0,_={id:"cuda/cuda_stream",title:"cuda stream",description:"Default Stream and Non-Default Blocking Stream",source:"@site/docs/cuda/cuda_stream.md",sourceDirName:"cuda",slug:"/cuda/cuda_stream",permalink:"/docs/cuda/cuda_stream",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cuda/cuda_stream.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",lastUpdatedAt:1699459588,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{title:"cuda stream",tags:["work"]},sidebar:"tutorialSidebar",previous:{title:"GPU",permalink:"/docs/cuda/other"},next:{title:"element \u64cd\u4f5c",permalink:"/docs/cuda/element"}},i={},s=[{value:"Default Stream and Non-Default Blocking Stream",id:"default-stream-and-non-default-blocking-stream",level:2},{value:"Default Stream and Non-Default Non-Blocking Stream",id:"default-stream-and-non-default-non-blocking-stream",level:2}];function l(n){const t={code:"code",h2:"h2",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"default-stream-and-non-default-blocking-stream",children:"Default Stream and Non-Default Blocking Stream"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'#include <cassert>\n#include <iostream>\n#include <vector>\n\n#include <cuda_runtime.h>\n\n#define CHECK_CUDA_ERROR(val) check((val), #val, __FILE__, __LINE__)\ntemplate <typename T>\nvoid check(T err, const char* const func, const char* const file,\n           const int line)\n{\n    if (err != cudaSuccess)\n    {\n        std::cerr << "CUDA Runtime Error at: " << file << ":" << line\n                  << std::endl;\n        std::cerr << cudaGetErrorString(err) << " " << func << std::endl;\n        std::exit(EXIT_FAILURE);\n    }\n}\n\n#define CHECK_LAST_CUDA_ERROR() checkLast(__FILE__, __LINE__)\nvoid checkLast(const char* const file, const int line)\n{\n    cudaError_t err{cudaGetLastError()};\n    if (err != cudaSuccess)\n    {\n        std::cerr << "CUDA Runtime Error at: " << file << ":" << line\n                  << std::endl;\n        std::cerr << cudaGetErrorString(err) << std::endl;\n        std::exit(EXIT_FAILURE);\n    }\n}\n\n__global__ void add_val_in_place(int32_t* data, int32_t val, uint32_t n)\n{\n    uint32_t const idx{blockDim.x * blockIdx.x + threadIdx.x};\n    uint32_t const stride{blockDim.x * gridDim.x};\n    for (uint32_t i{idx}; i < n; i += stride)\n    {\n        data[i] += val;\n    }\n}\n\nvoid launch_add_val_in_place(int32_t* data, int32_t val, uint32_t n,\n                             cudaStream_t stream)\n{\n    dim3 const threads_per_block{1024};\n    dim3 const blocks_per_grid{32};\n    add_val_in_place<<<blocks_per_grid, threads_per_block, 0, stream>>>(data,\n                                                                        val, n);\n    CHECK_LAST_CUDA_ERROR();\n}\n\nbool check_array_value(int32_t const* data, uint32_t n, int32_t val)\n{\n    for (uint32_t i{0}; i < n; ++i)\n    {\n        if (data[i] != val)\n        {\n            return false;\n        }\n    }\n    return true;\n}\n\nint main()\n{\n    constexpr uint32_t const n{1000000};\n    constexpr int32_t const val_1{1};\n    constexpr int32_t const val_2{2};\n    constexpr int32_t const val_3{3};\n    // Create an multi-stream application.\n    cudaStream_t stream_1{0};\n    cudaStream_t stream_2{0};\n    // stream_1 is a non-default blocking stream.\n    CHECK_CUDA_ERROR(cudaStreamCreate(&stream_1));\n\n    std::vector<int32_t> vec(n, 0);\n    int32_t* d_data{nullptr};\n    CHECK_CUDA_ERROR(cudaMalloc(&d_data, n * sizeof(int32_t)));\n    CHECK_CUDA_ERROR(cudaMemcpy(d_data, vec.data(), n * sizeof(int32_t),\n                                cudaMemcpyHostToDevice));\n    // Run a sequence of CUDA kernels in order on the same CUDA stream.\n    launch_add_val_in_place(d_data, val_1, n, stream_1);\n    // The second kernel launch is supposed to be run on stream_1.\n    // However, the implementation has a typo such that the kernel launch\n    // is run on the default stream_2.\n    launch_add_val_in_place(d_data, val_2, n, stream_2);\n    launch_add_val_in_place(d_data, val_3, n, stream_1);\n\n    CHECK_CUDA_ERROR(cudaStreamSynchronize(stream_1));\n    CHECK_CUDA_ERROR(cudaMemcpy(vec.data(), d_data, n * sizeof(int32_t),\n                                cudaMemcpyDeviceToHost));\n\n    // Check the correctness of the application.\n    // Yet the result will still be correct if the default stream_2\n    // is a legacy default stream.\n    assert(check_array_value(vec.data(), n, val_1 + val_2 + val_3));\n\n    CHECK_CUDA_ERROR(cudaFree(d_data));\n    CHECK_CUDA_ERROR(cudaStreamDestroy(stream_1));\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"default-stream-and-non-default-non-blocking-stream",children:"Default Stream and Non-Default Non-Blocking Stream"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'#include <cassert>\n#include <iostream>\n#include <vector>\n\n#include <cuda_runtime.h>\n\n#define CHECK_CUDA_ERROR(val) check((val), #val, __FILE__, __LINE__)\ntemplate <typename T>\nvoid check(T err, const char* const func, const char* const file,\n           const int line)\n{\n    if (err != cudaSuccess)\n    {\n        std::cerr << "CUDA Runtime Error at: " << file << ":" << line\n                  << std::endl;\n        std::cerr << cudaGetErrorString(err) << " " << func << std::endl;\n        std::exit(EXIT_FAILURE);\n    }\n}\n\n#define CHECK_LAST_CUDA_ERROR() checkLast(__FILE__, __LINE__)\nvoid checkLast(const char* const file, const int line)\n{\n    cudaError_t err{cudaGetLastError()};\n    if (err != cudaSuccess)\n    {\n        std::cerr << "CUDA Runtime Error at: " << file << ":" << line\n                  << std::endl;\n        std::cerr << cudaGetErrorString(err) << std::endl;\n        std::exit(EXIT_FAILURE);\n    }\n}\n\n__global__ void add_val_in_place(int32_t* data, int32_t val, uint32_t n)\n{\n    uint32_t const idx{blockDim.x * blockIdx.x + threadIdx.x};\n    uint32_t const stride{blockDim.x * gridDim.x};\n    for (uint32_t i{idx}; i < n; i += stride)\n    {\n        data[i] += val;\n    }\n}\n\nvoid launch_add_val_in_place(int32_t* data, int32_t val, uint32_t n,\n                             cudaStream_t stream)\n{\n    dim3 const threads_per_block{1024};\n    dim3 const blocks_per_grid{32};\n    add_val_in_place<<<blocks_per_grid, threads_per_block, 0, stream>>>(data,\n                                                                        val, n);\n    CHECK_LAST_CUDA_ERROR();\n}\n\nbool check_array_value(int32_t const* data, uint32_t n, int32_t val)\n{\n    for (uint32_t i{0}; i < n; ++i)\n    {\n        if (data[i] != val)\n        {\n            return false;\n        }\n    }\n    return true;\n}\n\nint main()\n{\n    constexpr uint32_t const n{1000000};\n    constexpr int32_t const val_1{1};\n    constexpr int32_t const val_2{2};\n    constexpr int32_t const val_3{3};\n    // Create an multi-stream application.\n    cudaStream_t stream_1{0};\n    cudaStream_t stream_2{0};\n    // stream_1 is a non-default non-blocking stream.\n    CHECK_CUDA_ERROR(cudaStreamCreateWithFlags(&stream_1, cudaStreamNonBlocking));\n\n    std::vector<int32_t> vec(n, 0);\n    int32_t* d_data{nullptr};\n    CHECK_CUDA_ERROR(cudaMalloc(&d_data, n * sizeof(int32_t)));\n    CHECK_CUDA_ERROR(cudaMemcpy(d_data, vec.data(), n * sizeof(int32_t),\n                                cudaMemcpyHostToDevice));\n    // Run a sequence of CUDA kernels in order on the same CUDA stream.\n    launch_add_val_in_place(d_data, val_1, n, stream_1);\n    // The second kernel launch is supposed to be run on stream_1.\n    // However, the implementation has a typo so that the kernel launch\n    // is run on the default stream_2.\n    launch_add_val_in_place(d_data, val_2, n, stream_2);\n    launch_add_val_in_place(d_data, val_3, n, stream_1);\n\n    CHECK_CUDA_ERROR(cudaStreamSynchronize(stream_1));\n    CHECK_CUDA_ERROR(cudaMemcpy(vec.data(), d_data, n * sizeof(int32_t),\n                                cudaMemcpyDeviceToHost));\n\n    // Check the correctness of the application.\n    // Yet the result will still be correct if the default stream_2\n    // is a legacy default stream.\n    assert(check_array_value(vec.data(), n, val_1 + val_2 + val_3));\n\n    CHECK_CUDA_ERROR(cudaFree(d_data));\n    CHECK_CUDA_ERROR(cudaStreamDestroy(stream_1));\n}\n'})})]})}function o(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>_,a:()=>d});var a=e(7294);const r={},c=a.createContext(r);function d(n){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function _(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),a.createElement(c.Provider,{value:t},n.children)}}}]);