"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[7231],{7820:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>_});var a=n(5893),s=n(1151);const i={title:"ViT-int8 on TVM\uff1a\u63d0\u901f4.6\u500d\uff0c\u6bd4TRT\u5feb1.5\u500d",tags:["machine learning","interview"]},r="STEP 1\uff1aQuantizeAnnotate",l={id:"ml/optimization/speed_vit_in_tvm",title:"ViT-int8 on TVM\uff1a\u63d0\u901f4.6\u500d\uff0c\u6bd4TRT\u5feb1.5\u500d",description:"- \u91cf\u5316\u8282\u70b9\u6807\u6ce8\u7684 pass\uff0c\u544a\u8bc9 relay \u4e00\u4e9b\u7b97\u5b50\u9700\u8981\u91cf\u5316\uff0c\u5e76\u6839\u636e\u7b97\u5b50\u529f\u80fd\u63d2\u5165\u6a21\u62df\u91cf\u5316\u8282\u70b9\uff0c\u6a21\u62df\u91cf\u5316\u8282\u70b9\u6a21\u62df\u4e86\u7531\u6d6e\u70b9\u6570\u6620\u5c04\u5230\u5b9a\u70b9\u6570\u7684\u8bef\u5dee",source:"@site/docs/ml/optimization/speed_vit_in_tvm.md",sourceDirName:"ml/optimization",slug:"/ml/optimization/speed_vit_in_tvm",permalink:"/docs/ml/optimization/speed_vit_in_tvm",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/speed_vit_in_tvm.md",tags:[{label:"machine learning",permalink:"/docs/tags/machine-learning"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1712505336,formattedLastUpdatedAt:"Apr 7, 2024",frontMatter:{title:"ViT-int8 on TVM\uff1a\u63d0\u901f4.6\u500d\uff0c\u6bd4TRT\u5feb1.5\u500d",tags:["machine learning","interview"]},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u6a21\u578b\u9700\u8981\u7684\u7b97\u529b",permalink:"/docs/ml/optimization/script_calc_flops"},next:{title:"\u81ea\u52a8\u9a7e\u9a76\u4e2d\u57fa\u4e8eTransformer\u7684\u6a21\u578b\u548c\u786c\u4ef6\u52a0\u901f\u5206\u6790",permalink:"/docs/ml/optimization/transformer"}},c={},_=[];function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"step-1quantizeannotate",children:"STEP 1\uff1aQuantizeAnnotate"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u91cf\u5316\u8282\u70b9\u6807\u6ce8\u7684 pass\uff0c\u544a\u8bc9 relay \u4e00\u4e9b\u7b97\u5b50\u9700\u8981\u91cf\u5316\uff0c\u5e76\u6839\u636e\u7b97\u5b50\u529f\u80fd\u63d2\u5165\u6a21\u62df\u91cf\u5316\u8282\u70b9\uff0c\u6a21\u62df\u91cf\u5316\u8282\u70b9\u6a21\u62df\u4e86\u7531\u6d6e\u70b9\u6570\u6620\u5c04\u5230\u5b9a\u70b9\u6570\u7684\u8bef\u5dee"}),"\n",(0,a.jsx)(e.li,{children:"\u76f8\u5173\u6587\u4ef6\uff1apython/tvm/relay/quantize/_annotate.py"}),"\n",(0,a.jsx)(e.li,{children:"\u8fd9\u91cc\u6211\u4eec\u589e\u52a0 batch_matmul \u7684 rewrite \u51fd\u6570\uff1a"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'@register_annotate_function("nn.batch_matmul")\ndef batch_matmul_rewrite(ref_call, new_args, ctx):\n    """Rewrite function for batch_matmul"""\n    if quantize_context().check_to_skip(ref_call):\n        return None\n \n    lhs_expr, lhs_kind = _get_expr_kind(new_args[0])\n    rhs_expr, rhs_kind = _get_expr_kind(new_args[1])\n \n    if lhs_kind is None or lhs_kind == QAnnotateKind.ACTIVATION:\n        if _analysis.check_constant(lhs_expr):\n            lhs_expr = attach_simulated_quantize(lhs_expr, QAnnotateKind.WEIGHT)\n        else:\n            lhs_expr = attach_simulated_quantize(lhs_expr, QAnnotateKind.INPUT)\n \n    if rhs_kind is None or rhs_kind == QAnnotateKind.ACTIVATION:\n        if _analysis.check_constant(rhs_expr):\n            rhs_expr = attach_simulated_quantize(rhs_expr, QAnnotateKind.WEIGHT)\n        else:\n            rhs_expr = attach_simulated_quantize(rhs_expr, QAnnotateKind.INPUT)\n \n    expr = _forward_op(ref_call, [lhs_expr, rhs_expr])\n    return QAnnotateExpr(expr, QAnnotateKind.ACTIVATION)\n'})}),"\n",(0,a.jsx)(e.h1,{id:"step-2quantizecalibrate",children:"STEP 2\uff1aQuantizeCalibrate"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u91cf\u5316\u6821\u51c6\u7684 pass\uff0c\u8c03\u6574\u91cf\u5316\u7684\u9608\u503c\u548c\u7f29\u653e\u6bd4\uff0c\u907f\u514d\u6a21\u578b\u91cf\u5316\u540e\u7cbe\u5ea6\u4e0b\u964d"}),"\n",(0,a.jsx)(e.li,{children:"\u76f8\u5173\u6587\u4ef6\uff1apython/tvm/relay/quantize/_calibrate.py"}),"\n",(0,a.jsx)(e.li,{children:"\u7531\u4e8e tvm \u4ec5\u6709 kl \u6563\u5ea6\u6821\u51c6\u7b97\u6cd5\uff0c\u4e14\u5176\u5728 ViT \u6a21\u578b\u91cf\u5316\u65f6\u8868\u73b0\u4e0d\u4f73\uff0c\u56e0\u6b64\u6211\u4eec\u589e\u52a0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 percentile \u6821\u51c6\u65b9\u6cd5\uff0c\u4ee5\u633d\u6551 ViT \u6a21\u578b\u7cbe\u5ea6\uff1a"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'def _find_scale_by_percentile(arr, percentile=0.99999):\n    assert isinstance(arr, np.ndarray)\n    x = np.abs(arr)\n    max_k = int(x.size * percentile)\n    return np.partition(x, max_k)[max_k]\n \n \ndef _percentile_scale(mod, dataset):\n    cfg = quantize.current_qconfig()\n    chunk_by = cfg.calibrate_chunk_by\n    scales = []\n    for samples in collect_stats(mod, dataset, chunk_by):\n        logging.info("finding threshold with percentile for calibration...")\n        with mp.Pool() as pool:\n            scales += list(pool.map(_find_scale_by_percentile, samples))\n \n    def func(_):\n        scale = scales[func.scale_idx]\n        func.scale_idx += 1\n        return scale\n \n    func.scale_idx = 0\n'})}),"\n",(0,a.jsx)(e.h1,{id:"step-3quantizerealize",children:"STEP 3\uff1aQuantizeRealize"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u91cf\u5316\u5b9e\u73b0\u7684 pass\uff0c\u5c06 fp32 \u8ba1\u7b97\u56fe\u8f6c\u6362\u4e3a\u771f\u5b9e\u7684\u4f4e\u6bd4\u7279\u5b9a\u70b9\u6570\u7684\u8ba1\u7b97\u56fe"}),"\n",(0,a.jsx)(e.li,{children:"\u76f8\u5173\u6587\u4ef6\uff1asrc/relay/quantize/realize.cc"}),"\n",(0,a.jsx)(e.li,{children:"\u8fd9\u91cc\u6211\u4eec\u589e\u52a0\u5bf9 batch_matmul \u652f\u6301\u7684 Realize \u51fd\u6570\uff1a"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'Expr BatchMatmulRealize(const Call& ref_call, const Array<Expr>& new_args, const ObjectRef& ctx) {\n  const QConfig& cfg = QConfig::Current();\n  ICHECK_EQ(new_args.size(), 2);\n  if (!new_args[0]->IsInstance<TempExprNode>() || !new_args[1]->IsInstance<TempExprNode>()) {\n    return Expr(nullptr);\n  }\n  const auto* lhs = new_args[0].as<QRealizeIntExprNode>();\n  const auto* rhs = new_args[1].as<QRealizeIntExprNode>();\n \n  Expr ldata = lhs->data;\n  Expr rdata = rhs->data;\n  DataType dtype = cfg->dtype_input;\n \n  if (lhs->dtype != dtype) {\n    ldata = Cast(ldata, dtype);\n  }\n  if (rhs->dtype != dtype) {\n    rdata = Cast(rdata, dtype);\n  }\n \n  const auto ref_attrs = ref_call->attrs.as<BatchMatmulAttrs>();\n  auto attrs = make_object<BatchMatmulAttrs>();\n  *attrs = *ref_attrs;\n  DataType out_dtype = cfg->dtype_activation;\n  attrs->out_dtype = out_dtype;\n \n  Expr ret = Call(ref_call->op, {ldata, rdata}, Attrs(attrs), ref_call->type_args);\n  Expr mul = Multiply(lhs->dom_scale, rhs->dom_scale);\n  Expr dom_scale = FoldConstantOpt(mul);\n  return QRealizeIntExpr(ret, dom_scale, out_dtype);\n}\n \nRELAY_REGISTER_OP("nn.batch_matmul")\n    .set_attr<FForwardRewrite>("FQRealizeRewrite", BatchMatmulRealize);\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u7531\u4e8e batch_matmul \u7684 int8 \u8ba1\u7b97\u6d89\u53ca\u5230 out_dtype\uff0c\u56e0\u6b64\u540c\u65f6\u9700\u8981\u66f4\u6539 include/tvm/relay/attrs/nn.h \u4e2d\u7684 BatchMatmulAttrs \u548c src/relay/op/nn/nn.c \u4e2d\u7684 MakeBatchMatmul \u7684\u5b9a\u4e49\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'/*! \\brief Attributes for batch matmul operator */\nstruct BatchMatmulAttrs : public tvm::AttrsNode<BatchMatmulAttrs> {\n  tvm::String auto_scheduler_rewritten_layout;  // The layout after auto-scheduler\'s layout rewrite\n  DataType out_dtype;\n \n  TVM_DECLARE_ATTRS(BatchMatmulAttrs, "relay.attrs.BatchMatmulAttrs") {\n    // use 0 bits to indicate none.\n    TVM_ATTR_FIELD(out_dtype)\n        .set_default(NullValue<DataType>())\n        .describe("Output data type, set to explicit type under mixed precision setting");\n  }\n};\n \n// Positional relay function to create batch_matmul operator used by frontend FFI.\nExpr MakeBatchMatmul(Expr x, Expr y, DataType out_dtype) {\n  auto attrs = make_object<BatchMatmulAttrs>();\n  attrs->out_dtype = out_dtype;\n  static const Op& op = Op::Get("nn.batch_matmul");\n  return Call(op, {x, y}, Attrs(attrs), {});\n}\n'})}),"\n",(0,a.jsx)(e.h1,{id:"step-4topi-compute--topi-schedule",children:"STEP 4\uff1atopi-compute & topi-schedule"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u901a\u8fc7\u4ee5\u4e0a\u4e09\u4e2a\u6b65\u9aa4\uff0ctvm \u7684 relay \u56fe\u4e2d\u7684 batch_matmul_fp32 \u8ba1\u7b97\u53ef\u4ee5\u91cf\u5316\u53d8\u6210 batch_matmul_int8 \u8ba1\u7b97\uff0c\u63a5\u4e0b\u6765\u9700\u8981\u5b9e\u73b0 int8 \u7b97\u5b50\u7684 compute \u548c schedule"}),"\n",(0,a.jsx)(e.li,{children:"compute\uff1a\u7528\u6765\u63cf\u8ff0\u7b97\u5b50\u7684 tensor \u8ba1\u7b97\u8fc7\u7a0b"}),"\n",(0,a.jsx)(e.li,{children:"schedule\uff1a\u57fa\u4e8e\u7279\u5b9a\u5e73\u53f0\u5bf9\u4e8e\u7b97\u5b50\u7684\u8ba1\u7b97\u8fdb\u884c\u8c03\u5ea6\uff0c\u901a\u8fc7 tile\uff0csplit\uff0creorder\uff0cmemory_cache \u7b49\u64cd\u4f5c\uff0c\u4ece\u800c\u8fbe\u5230\u66f4\u5feb\u7684\u8fd0\u884c\u6548\u7387"}),"\n",(0,a.jsx)(e.li,{children:"topi \u5168\u79f0\u4e3a tvm operator inventory\uff0c\u662f tvm \u4e3a\u591a\u79cd\u5e73\u53f0\u63d0\u4f9b\u7684\u591a\u79cd\u7b97\u5b50\u7684\u8ba1\u7b97\u548c\u8c03\u5ea6\u5b9e\u73b0\uff0c\u6211\u4eec\u8fd9\u91cc\u5c06 batch_matmul_int8 \u7684\u8ba1\u7b97\u548c\u8c03\u5ea6\u5b9e\u73b0\u6ce8\u518c\u8fdb topi \u4e4b\u4e2d"}),"\n",(0,a.jsx)(e.li,{children:"\u76f8\u5173\u6587\u4ef6\uff1apython/tvm/topi/cuda/batch_matmul.py"}),"\n",(0,a.jsx)(e.li,{children:"\u5728\u5177\u4f53\u5b9e\u73b0\u4e2d\uff0c\u6211\u4eec\u4ec5\u8003\u8651 batch_matmul_int8 \u7684 cuda \u5e73\u53f0\uff0c\u5e76\u4f7f\u7528 dp4a \u6307\u4ee4\u5b9e\u73b0 int8 \u8ba1\u7b97\u8c03\u5ea6\uff1a"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'@autotvm.register_topi_compute("batch_matmul_int8.cuda")\ndef batch_matmul_int8(cfg, x, y, out_shape=None, out_dtype=None):\n    """Batch Matmul operator for int8 on CUDA"""\n    if out_dtype is None:\n        out_dtype = x.dtype\n \n    x_shape = get_const_tuple(x.shape)\n    y_shape = get_const_tuple(y.shape)\n    assert len(x_shape) == 3 and len(y_shape) == 3, "only support 3-dim batch_matmul"\n \n    XB, M, XK = x.shape\n    YB, N, YK = y.shape\n    assert XB == YB or XB == 1 or YB == 1, "batch dimension doesn\'t match"\n    assert XK == YK, "shapes of x and y is inconsistent"\n \n    nB = tvm.te.max(XB, YB)\n    nK = ((XK + 3) // 4) * 4\n    reduce_k = te.reduce_axis((0, nK), name="k")\n \n    # pad for _dp4a vectorize\n    pad_x = te.compute(\n        (XB, M, nK),\n        lambda b, i, j: tvm.te.if_then_else(\n            j >= XK, tvm.runtime.convert(0).astype(x.dtype), x[b, i, j]\n        ),\n    )\n    pad_y = te.compute(\n        (YB, N, nK),\n        lambda b, i, j: tvm.te.if_then_else(\n            j >= YK, tvm.runtime.convert(0).astype(y.dtype), y[b, i, j]\n        ),\n    )\n \n    out = te.compute(\n        (nB, M, N),\n        lambda b, i, j: te.sum(\n            pad_x[b if XB != 1 else 0, i, reduce_k].astype(out_dtype)\n            * pad_y[b if YB != 1 else 0, j, reduce_k].astype(out_dtype),\n            axis=[reduce_k],\n        ),\n        tag="batch_matmul_int8",\n    )\n    cfg.add_flop(XB * M * N * nK * 2)\n    return out\n \n \n@autotvm.register_topi_schedule("batch_matmul_int8.cuda")\ndef schedule_batch_matmul_int8(cfg, outs):\n    """Batch Matmul schedule for int8 on CUDA"""\n    outs = [outs] if isinstance(outs, te.tensor.Tensor) else outs\n    s = te.create_schedule([x.op for x in outs])\n \n    def _callback(op):\n        if "batch_matmul_int8" in op.tag:\n            _schedule_batch_matmul_int8(cfg, s, op.output(0))\n \n    traverse_inline(s, outs[0].op, _callback)\n    return s\n \n \n_dp4a = dp4a("shared", "shared", "local")\n \ndef _schedule_batch_matmul_int8(cfg, s, output):\n    input_x, input_y = s[output].op.input_tensors\n \n    B, M, K = get_const_tuple(input_x.shape)\n    _, N, _ = get_const_tuple(input_y.shape)\n \n    k_factor = 4\n    assert K % k_factor == 0, "Input dimension must divide {}".format(k_factor)\n    if K % 16 == 0:\n        k_factor = 16\n \n    cfg.define_split("tile_f", B, num_outputs=4)\n    cfg.define_split("tile_m", M, num_outputs=4)\n    cfg.define_split("tile_n", N, num_outputs=4)\n    cfg.define_split("tile_k", K // k_factor, num_outputs=2)\n    cfg.define_knob("auto_unroll_max_step", [0, 256, 512, 1024])\n \n    batch_matmul_op = s.outputs[0]\n    s[input_x].compute_inline()\n    s[input_y].compute_inline()\n \n    x_cache = s.cache_read(input_x, "shared", [batch_matmul_op])\n    y_cache = s.cache_read(input_y, "shared", [batch_matmul_op])\n    batch_matmul_cache = s.cache_write(batch_matmul_op.output(0), "local")\n \n    # tile reduce axis\n    ko = batch_matmul_cache.op.reduce_axis[0]\n    ko, ki = s[batch_matmul_cache].split(ko, factor=4)\n    ko, kt = cfg["tile_k"].apply(s, batch_matmul_cache, ko)\n    # dp4a tensorize\n    s[batch_matmul_cache].tensorize(ki, _dp4a)\n \n    # tile axis\n    f, m, n = batch_matmul_op.axis\n    kernel_scope, f = s[batch_matmul_op].split(f, nparts=1)\n \n    bf, vf, tf, fi = cfg["tile_f"].apply(s, batch_matmul_op, f)\n    bm, vm, tm, mi = cfg["tile_m"].apply(s, batch_matmul_op, m)\n    bn, vn, tn, ni = cfg["tile_n"].apply(s, batch_matmul_op, n)\n    s[batch_matmul_op].reorder(bf, bm, bn, vf, vm, vn, tf, tm, tn, fi, mi, ni)\n \n    # bind axis\n    s[batch_matmul_op].bind(bf, tvm.te.thread_axis("blockIdx.z"))\n    s[batch_matmul_op].bind(bm, tvm.te.thread_axis("blockIdx.y"))\n    s[batch_matmul_op].bind(bn, tvm.te.thread_axis("blockIdx.x"))\n \n    s[batch_matmul_op].bind(vf, tvm.te.thread_axis("vthread"))\n    s[batch_matmul_op].bind(vm, tvm.te.thread_axis("vthread"))\n    s[batch_matmul_op].bind(vn, tvm.te.thread_axis("vthread"))\n \n    s[batch_matmul_op].bind(tf, tvm.te.thread_axis("threadIdx.z"))\n    s[batch_matmul_op].bind(tm, tvm.te.thread_axis("threadIdx.y"))\n    s[batch_matmul_op].bind(tn, tvm.te.thread_axis("threadIdx.x"))\n \n    # cache compute at\n    s[batch_matmul_cache].compute_at(s[batch_matmul_op], tn)\n    fo, mo, no = batch_matmul_cache.op.axis[:3]\n    s[batch_matmul_cache].reorder(ko, kt, fo, mo, no, ki)\n \n    # for load in [splited_x_op, splited_y_op]\n    for load in [x_cache, y_cache]:\n        s[load].compute_at(s[batch_matmul_cache], ko)\n        outer, inner = s[load].split(s[load].op.axis[-1], factor=k_factor)\n        s[load].vectorize(inner)\n \n        fused = s[load].op.axis[:-1] + [outer]\n        fused = s[load].fuse(*fused)\n \n        fused, tx = s[load].split(fused, factor=cfg["tile_n"].size[2])\n        fused, ty = s[load].split(fused, factor=cfg["tile_m"].size[2])\n        fused, tz = s[load].split(fused, factor=cfg["tile_f"].size[2])\n \n        s[load].bind(tz, tvm.te.thread_axis("threadIdx.z"))\n        s[load].bind(ty, tvm.te.thread_axis("threadIdx.y"))\n        s[load].bind(tx, tvm.te.thread_axis("threadIdx.x"))\n \n    # max unroll\n    s[batch_matmul_op].pragma(kernel_scope, "auto_unroll_max_step", cfg["auto_unroll_max_step"].val)\n    s[batch_matmul_op].pragma(kernel_scope, "unroll_explicit", False)\n \n    return s\n'})}),"\n",(0,a.jsx)(e.h1,{id:"step-5relay-op-strategy",children:"STEP 5\uff1arelay op strategy"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"relay \u901a\u8fc7 strategy \u7c7b\u4e3a\u6bcf\u4e2a\u7b97\u5b50\u9009\u62e9\u5408\u9002\u7684 compute \u548c schedule"}),"\n",(0,a.jsx)(e.li,{children:"\u76f8\u5173\u6587\u4ef6\uff1apython/tvm/relay/op/strategy/cuda.py"}),"\n",(0,a.jsx)(e.li,{children:"\u6211\u4eec\u5728\u8fd9\u91cc\u589e\u52a0\u5bf9 batch_matmul_int8 \u7b97\u5b50\u8ba1\u7b97\u548c\u8c03\u5ea6\u7684\u9009\u62e9\u7b56\u7565\uff1a"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'@batch_matmul_strategy.register(["cuda", "gpu"])\ndef batch_matmul_strategy_cuda(attrs, inputs, out_type, target):\n    """batch_matmul cuda strategy"""\n    strategy = _op.OpStrategy()\n    x, y = inputs\n    if x.dtype == "int8" and y.dtype == "int8" and out_type.dtype == "int32":\n        strategy.add_implementation(\n            wrap_compute_batch_matmul(topi.cuda.batch_matmul_int8, need_out_dtype=True),\n            wrap_topi_schedule(topi.cuda.schedule_batch_matmul_int8),\n            name="batch_matmul_int8.cuda",\n            plevel=10,\n        )\n    else:\n        strategy.add_implementation(\n            wrap_compute_batch_matmul(topi.cuda.batch_matmul),\n            wrap_topi_schedule(topi.cuda.schedule_batch_matmul),\n            name="batch_matmul.cuda",\n            plevel=10,\n        )\n    ...\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u540c\u65f6\uff0c\u7531\u4e8e\u6211\u4eec\u5b9e\u73b0\u7684 batch_matmul_int8 \u7684\u8ba1\u7b97\u9700\u8981 out_dtype \u4f5c\u4e3a\u53c2\u6570\uff0c\u56e0\u6b64\u4e5f\u9700\u8981\u540c\u65f6\u66f4\u6539 python/tvm/relay/op/strategy/generic.py \u6587\u4ef6\u4e2d\u7684 wrap_compute_batch_matmul \u51fd\u6570\uff0c\u589e\u52a0\u4e00\u4e2a need_out_dtype \u7684\u53c2\u6570\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'# batch_matmul\ndef wrap_compute_batch_matmul(topi_compute, need_auto_scheduler_layout=False, need_out_dtype=False):\n    """wrap batch_matmul topi compute"""\n \n    def _compute_batch_matmul(attrs, inputs, out_type):\n        args = [inputs[0], inputs[1], out_type.shape]\n        if need_auto_scheduler_layout:\n            args.append(get_auto_scheduler_rewritten_layout(attrs))\n        if need_out_dtype:\n            args.append(out_type.dtype)\n        return [topi_compute(*args)]\n \n    return _compute_batch_matmul\n'})})]})}function p(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(o,{...t})}):o(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>l,a:()=>r});var a=n(7294);const s={},i=a.createContext(s);function r(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);