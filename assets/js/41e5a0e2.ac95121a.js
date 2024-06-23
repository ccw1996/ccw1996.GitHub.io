"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[9731],{3687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(5893),i=n(1151);const a={title:"\u8ba1\u7b97\u6a21\u578b\u9700\u8981\u7684\u7b97\u529b",description:"FLOPS",tags:["optimization","interview"],editor:"caroot"},s=void 0,r={id:"ml/optimization/script_calc_flops",title:"\u8ba1\u7b97\u6a21\u578b\u9700\u8981\u7684\u7b97\u529b",description:"FLOPS",source:"@site/docs/ml/optimization/script_calc_flops.md",sourceDirName:"ml/optimization",slug:"/ml/optimization/script_calc_flops",permalink:"/docs/ml/optimization/script_calc_flops",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ml/optimization/script_calc_flops.md",tags:[{label:"optimization",permalink:"/docs/tags/optimization"},{label:"interview",permalink:"/docs/tags/interview"}],version:"current",lastUpdatedAt:1719151396,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{title:"\u8ba1\u7b97\u6a21\u578b\u9700\u8981\u7684\u7b97\u529b",description:"FLOPS",tags:["optimization","interview"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"\u786c\u6838\u8be6\u89e3Segment Anything Model (SAM) TensorRT\u6a21\u578b\u8f6c\u6362",permalink:"/docs/ml/optimization/sam"},next:{title:"ViT-int8 on TVM\uff1a\u63d0\u901f4.6\u500d\uff0c\u6bd4TRT\u5feb1.5\u500d",permalink:"/docs/ml/optimization/speed_vit_in_tvm"}},l={},p=[{value:"Tensorflow",id:"tensorflow",level:2},{value:"pytorch",id:"pytorch",level:2},{value:"tflite",id:"tflite",level:2},{value:"JAX",id:"jax",level:2}];function m(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"tensorflow",children:"Tensorflow"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from tensorflow.python.framework.convert_to_constants import convert_variables_to_constants_v2_as_graph\n\ndef get_flops(model):\n    concrete=tf.function(lambda inputs:model(inputs))\n    concrete_func=concrete.get_concrete_function([tf.TensorSpec([1,*inpputs.shape[1:]]) for inputs in model.inputs])\n    frozen_func,graph_def=convert_variables_to_constants_v2_as_graph(concrete_func)\n    with tf.Graph().as_default() as graph:\n        tf.graph_util.import_graph_def(graph_def,name=\'\')\n        run_meta=tf.compat.v1.RunMetadata()\n        opts=tf.compat.v1.profiler.ProfileOptionBuilder.float_operation()\n        flops=tf.compat.v1.profiler.profile(graph=graph,run_meta=run_meta,cmd="op",options=opts)\n        return flops.total_float_ops\n\nprint("The FLOPs is:{}".format(get_flops(model)) ,flush=True )\n'})}),"\n",(0,o.jsx)(t.h2,{id:"pytorch",children:"pytorch"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from thop import profile\ninput=torch.randn(1,1,28,28)\nmacs,params=profile(model,inputs=(input,))\nprint('Total macc:{}, Total params: {}'.format(macs, params))\n#\u8f93\u51fa\uff1aTotal macc:2307720.0, Total params: 431080.0\n"})}),"\n",(0,o.jsx)(t.h2,{id:"tflite",children:"tflite"}),"\n",(0,o.jsx)(t.p,{children:"\u901a\u8fc7\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u501f\u52a9 tf.keras \u7684 API \u5b9a\u4e49\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u578b\uff0c\u518d\u501f\u52a9 tf.lite.TFLiteConverter \u5c06 Keras \u6a21\u578b\u8f6c\u6362\u6210 TFLite \u6a21\u578b\uff0c\u6700\u7ec8\u4fdd\u5b58\u6210 .tflite \u540e\u7f00\u7684\u6a21\u578b\u6587\u4ef6"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"\nimport tensorflow as tf\n\n# Create a model using high-level tf.keras.* APIs\nmodel = tf.keras.models.Sequential([\n    tf.keras.layers.Dense(units=1, input_shape=[1]),\n    tf.keras.layers.Dense(units=16, activation='relu'),\n    tf.keras.layers.Dense(units=1)\n])\nmodel.compile(optimizer='sgd', loss='mean_squared_error') # compile the model\nmodel.fit(x=[-1, 0, 1], y=[-3, -1, 1], epochs=5) # train the model\n# (to generate a SavedModel) tf.saved_model.save(model, \"saved_model_keras_dir\")\n\n# Convert the model.\nconverter = tf.lite.TFLiteConverter.from_keras_model(model)\ntflite_model = converter.convert()\n\n# Save the model.\nwith open('model.tflite', 'wb') as f:\n  f.write(tflite_model)\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u5982\u679c\u8981\u628a\u7b97\u6cd5\u6a21\u578b\u6587\u4ef6\u8f6c\u6362\u6210 TFLite \u7528 TensorFlow \u63d0\u4f9b\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5373\u53ef"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"\n# \u8f6c\u6362 SaveModel \u6587\u4ef6\npython -m tflite_convert \\\n  --saved_model_dir=/tmp/mobilenet_saved_model \\\n  --output_file=/tmp/mobilenet.tflite\n# \u8f6c\u6362 H5 \u683c\u5f0f\u6a21\u578b\u6587\u4ef6\npython -m tflite_convert \\\n  --keras_model_file=/tmp/mobilenet_keras_model.h5 \\\n  --output_file=/tmp/mobilenet.tflite\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u539f\u6a21\u578b\u6587\u4ef6\u7684\u8f93\u5165\u8def\u5f84\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8f6c\u6362\u540e TFLite \u6a21\u578b\u7684\u8f93\u51fa\u8def\u5f84\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u7531\u4e8e TensorFlow \u6846\u67b6\u5728\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u505a\u4e86\u4e00\u5b9a\u7684\u4f18\u5316\uff0c\u56e0\u6b64\uff0c\u6a21\u578b\u7684 TOPs \u4e5f\u4ece 2.8 MFLOPs \u964d\u4f4e\u5230 1.8 MFLOPs\u3002\u8fd9\u91cc\u5bf9 TFLite \u6a21\u578b\u7b97\u529b\u8bc4\u4f30\u4f7f\u7528\u4e86\u5f00\u6e90\u5de5\u5177 tflite_flops \uff0c\u6309\u7167\u4e0b\u9762\u7684\u793a\u4f8b\u5b89\u88c5\u548c\u4f7f\u7528\u5373\u53ef\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"\n# \u5b89\u88c5\npip3 install git+https://github.com/lisosia/tflite-flops\n# \u4f7f\u7528\npython -m tflite_flops model.tflite\n# \u7ed3\u679c\nOP_NAME            | M FLOPS\n------------------------------\nCONV_2D            | 0.4\nMAX_POOL_2D        | <IGNORED>\nCONV_2D            | 1.2\nMAX_POOL_2D        | <IGNORED>\nRESHAPE            | <IGNORED>\nFULLY_CONNECTED    | <IGNORED>\nFULLY_CONNECTED    | <IGNORED>\nSOFTMAX            | <IGNORED>\n------------------------------\nTotal: 1.6 M FLOPS\n"})}),"\n",(0,o.jsx)(t.h2,{id:"jax",children:"JAX"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"\nimport numpy as np\nimport tensorflow as tf\nimport functools\nimport time\nimport itertools\nimport numpy.random as npr\n# JAX \u65b0\u589e\u90e8\u5206\nimport jax.numpy as jnp\nfrom jax import jit, grad, random\nfrom jax.experimental import optimizers\nfrom jax.experimental import stax\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u51c6\u5907\u8bad\u7ec3\u6837\u672c\u548c\u9a8c\u8bc1\u96c6\u76f8\u5173\u6570\u636e\uff0c\u8fd9\u91cc\u8fd8\u662f\u4ee5 mnist \u4e3a\u4f8b\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'\ndef _one_hot(x, k, dtype=np.float32):\n  """Create a one-hot encoding of x of size k."""\n  return np.array(x[:, None] == np.arange(k), dtype)\n\n(train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.mnist.load_data()\ntrain_images, test_images = train_images / 255.0, test_images / 255.0\ntrain_images = train_images.astype(np.float32)\ntest_images = test_images.astype(np.float32)\n\ntrain_labels = _one_hot(train_labels, 10)\ntest_labels = _one_hot(test_labels, 10)\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u63a5\u7740\uff0c\u7528\u521a\u624d\u5f15\u5165\u7684 JAX \u5305\u63d0\u4f9b\u7684 API \u5b9a\u4e49\u6a21\u578b\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"\ninit_random_params, predict = stax.serial(\n    stax.Flatten,\n    stax.Dense(1024), stax.Relu,\n    stax.Dense(1024), stax.Relu,\n    stax.Dense(10), stax.LogSoftmax)\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u6a21\u578b\u7684\u8f6c\u6362\u548c\u4fdd\u5b58"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"\nserving_func = functools.partial(predict, params)\nx_input = jnp.zeros((1, 28, 28))\nconverter = tf.lite.TFLiteConverter.experimental_from_jax(\n    [serving_func], [[('input1', x_input)]])\ntflite_model = converter.convert()\nwith open('jax_mnist.tflite', 'wb') as f:\n  f.write(tflite_model)\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);