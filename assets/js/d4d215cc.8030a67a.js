"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1579],{7240:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var t=o(5893),r=o(1151);const a={title:"onnx\u64cd\u4f5c",description:"onnx\u64cd\u4f5c",tags:["machine learning","interview","onnx"],editor:"caroot"},i=void 0,d={id:"ml/onnx",title:"onnx\u64cd\u4f5c",description:"onnx\u64cd\u4f5c",source:"@site/docs/ml/onnx.md",sourceDirName:"ml",slug:"/ml/onnx",permalink:"/docs/ml/onnx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/onnx.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"},{label:"onnx",permalink:"/docs/tags/onnx"}],version:"current",lastUpdatedAt:1699459588,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{title:"onnx\u64cd\u4f5c",description:"onnx\u64cd\u4f5c",tags:["machine learning","interview","onnx"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u6cd5\u5de5\u7a0b\u5e08\u9762\u7ecf",permalink:"/docs/ml/interview"},next:{title:"openai_triton",permalink:"/docs/ml/openai_triton/"}},l={},s=[{value:"\u81ea\u5b9a\u4e49op",id:"\u81ea\u5b9a\u4e49op",level:2},{value:"\u4fee\u6539onnx\u6587\u4ef6",id:"\u4fee\u6539onnx\u6587\u4ef6",level:2},{value:"\u7cbe\u5ea6\u8f6c\u6362",id:"\u7cbe\u5ea6\u8f6c\u6362",level:2},{value:"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6",id:"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6",level:3}];function p(n){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49op",children:"\u81ea\u5b9a\u4e49op"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class FooOp(torch.autograd.Function):\n\t@staticmethod\n\tdef forward(ctx, input1: torch.Tensor) -> torch.Tensor:\n\t\treturn input1\n\t\n\t@staticmethod\n\tdef symbolic(g, input1):\n\t\treturn g.op("devtech::FooOp", input1)\n\nclass FooModel(torch.nn.Module):\n    def __init__(self):\n        super().__init__()\n\n        self.model = torch.nn.Sequential(\n            torch.nn.Conv2d(3, 16, 3, 2),\n            torch.nn.BatchNorm2d(16),\n            torch.nn.ReLU()\n        )\n\n    def forward(self, x):\n        x = self.model(x)\n        return FooOp.apply(x)\n\nmodel = FooModel().eval().to(device="cpu")\ndummy_input = torch.rand((1, 3, 128, 128), device="cpu")\n\ntorch.onnx.export(\n    model,\n    dummy_input,\n    "model_foo.onnx",\n    input_names=["input"],\n    output_names=["output"],\n    dynamic_axes={"input": {0: "N"}, "output": {0: "N"}},\n    opset_version=13,\n)\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u4fee\u6539onnx\u6587\u4ef6",children:"\u4fee\u6539onnx\u6587\u4ef6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import onnx_graphsurgeon as gs\nimport onnx\n\ngraph = gs.import_onnx(onnx.load("model_foo.onnx"))\n\nfake_node = [node for node in graph.nodes if node.op == "FooOp"][0]\n\n# Get the input node of the fake node\n# For example, node.i() is equivalent to node.inputs[0].inputs[0]\ninp_node = fake_node.i()\n\n# Reconnect the input node to the output tensors of the fake node, so that the first identity\n# node in the example graph now skips over the fake node.\ninp_node.outputs = fake_node.outputs\nfake_node.outputs.clear()\n\n# Remove the fake node from the graph completely\ngraph.cleanup()\nonnx.save(gs.export_onnx(graph), "removed.onnx")\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u7cbe\u5ea6\u8f6c\u6362",children:"\u7cbe\u5ea6\u8f6c\u6362"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import onnx\nfrom onnxconverter_common.float16 import convert_float_to_float16\n\nmodel_fp32 = onnx.load("model.onnx")\nmodel_fp16 = convert_float_to_float16(copy.deepcopy(model_fp32))\nonnx.save(model_fp16, "model_fp16.onnx")\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6",children:"\u4f7f\u7528amp\u6765\u5c3d\u529b\u4fdd\u8bc1\u7cbe\u5ea6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import onnx\nimport numpy as np\nfrom onnxconverter_common.auto_mixed_precision import auto_convert_mixed_precision\n\n# Could also use rtol/atol attributes directly instead of this\ndef validate(res1, res2):\n    for r1, r2 in zip(res1, res2):\n        if not np.allclose(r1, r2, rtol=0.01, atol=0.001):\n            return False\n    return True\n\nmodel_fp32 = onnx.load("model.onnx")\nfeed_dict = {"input": 2*np.random.rand(1, 3, 128, 128).astype(np.float32)-1.0}\nmodel_amp = auto_convert_mixed_precision(model_fp32, feed_dict, validate)\nonnx.save(model_amp, "model_amp.onnx")\n'})})]})}function c(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>d,a:()=>i});var t=o(7294);const r={},a=t.createContext(r);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);