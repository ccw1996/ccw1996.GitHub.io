"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1579],{3905:(n,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>u});var t=o(7294);function r(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function a(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function i(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function l(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var p=t.createContext({}),c=function(n){var e=t.useContext(p),o=e;return n&&(o="function"==typeof n?n(e):i(i({},e),n)),o},d=function(n){var e=c(n.components);return t.createElement(p.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var o=n.components,r=n.mdxType,a=n.originalType,p=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),m=c(o),u=r,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return o?t.createElement(f,i(i({ref:e},d),{},{components:o})):t.createElement(f,i({ref:e},d))}));function u(n,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7938:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=o(7462),r=(o(7294),o(3905));const a={title:"onnx\u64cd\u4f5c",description:"onnx\u64cd\u4f5c",tags:["machine learning","interview","onnx"],editor:"caroot"},i=void 0,l={unversionedId:"ml/onnx",id:"ml/onnx",title:"onnx\u64cd\u4f5c",description:"onnx\u64cd\u4f5c",source:"@site/docs/ml/onnx.md",sourceDirName:"ml",slug:"/ml/onnx",permalink:"/docs/ml/onnx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/onnx.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"},{label:"onnx",permalink:"/docs/tags/onnx"}],version:"current",frontMatter:{title:"onnx\u64cd\u4f5c",description:"onnx\u64cd\u4f5c",tags:["machine learning","interview","onnx"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"python gdb",permalink:"/docs/ml/debug_python"},next:{title:"optimization",permalink:"/docs/ml/optimization/"}},p={},c=[{value:"\u81ea\u5b9a\u4e49op",id:"\u81ea\u5b9a\u4e49op",level:2},{value:"\u4fee\u6539onnx\u6587\u4ef6",id:"\u4fee\u6539onnx\u6587\u4ef6",level:2},{value:"\u7cbe\u5ea6\u8f6c\u6362",id:"\u7cbe\u5ea6\u8f6c\u6362",level:2},{value:"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6",id:"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6",level:3}],d={toc:c};function s(n){let{components:e,...o}=n;return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49op"},"\u81ea\u5b9a\u4e49op"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class FooOp(torch.autograd.Function):\n    @staticmethod\n    def forward(ctx, input1: torch.Tensor) -> torch.Tensor:\n        return input1\n    \n    @staticmethod\n    def symbolic(g, input1):\n        return g.op("devtech::FooOp", input1)\n\nclass FooModel(torch.nn.Module):\n    def __init__(self):\n        super().__init__()\n\n        self.model = torch.nn.Sequential(\n            torch.nn.Conv2d(3, 16, 3, 2),\n            torch.nn.BatchNorm2d(16),\n            torch.nn.ReLU()\n        )\n\n    def forward(self, x):\n        x = self.model(x)\n        return FooOp.apply(x)\n\nmodel = FooModel().eval().to(device="cpu")\ndummy_input = torch.rand((1, 3, 128, 128), device="cpu")\n\ntorch.onnx.export(\n    model,\n    dummy_input,\n    "model_foo.onnx",\n    input_names=["input"],\n    output_names=["output"],\n    dynamic_axes={"input": {0: "N"}, "output": {0: "N"}},\n    opset_version=13,\n)\n')),(0,r.kt)("h2",{id:"\u4fee\u6539onnx\u6587\u4ef6"},"\u4fee\u6539onnx\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import onnx_graphsurgeon as gs\nimport onnx\n\ngraph = gs.import_onnx(onnx.load("model_foo.onnx"))\n\nfake_node = [node for node in graph.nodes if node.op == "FooOp"][0]\n\n# Get the input node of the fake node\n# For example, node.i() is equivalent to node.inputs[0].inputs[0]\ninp_node = fake_node.i()\n\n# Reconnect the input node to the output tensors of the fake node, so that the first identity\n# node in the example graph now skips over the fake node.\ninp_node.outputs = fake_node.outputs\nfake_node.outputs.clear()\n\n# Remove the fake node from the graph completely\ngraph.cleanup()\nonnx.save(gs.export_onnx(graph), "removed.onnx")\n')),(0,r.kt)("h2",{id:"\u7cbe\u5ea6\u8f6c\u6362"},"\u7cbe\u5ea6\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import onnx\nfrom onnxconverter_common.float16 import convert_float_to_float16\n\nmodel_fp32 = onnx.load("model.onnx")\nmodel_fp16 = convert_float_to_float16(copy.deepcopy(model_fp32))\nonnx.save(model_fp16, "model_fp16.onnx")\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6"},"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import onnx\nimport numpy as np\nfrom onnxconverter_common.auto_mixed_precision import auto_convert_mixed_precision\n\n# Could also use rtol/atol attributes directly instead of this\ndef validate(res1, res2):\n    for r1, r2 in zip(res1, res2):\n        if not np.allclose(r1, r2, rtol=0.01, atol=0.001):\n            return False\n    return True\n\nmodel_fp32 = onnx.load("model.onnx")\nfeed_dict = {"input": 2*np.random.rand(1, 3, 128, 128).astype(np.float32)-1.0}\nmodel_amp = auto_convert_mixed_precision(model_fp32, feed_dict, validate)\nonnx.save(model_amp, "model_amp.onnx")\n')))}s.isMDXComponent=!0}}]);