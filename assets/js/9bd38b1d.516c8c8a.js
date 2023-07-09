"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1268],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"Generic Attention-model Explainability for Interpreting Bi-Modal and Encoder-Decoder Transformers",tags:["paper"],editor:"caroot"},i=void 0,s={unversionedId:"LLM/paper/Transformer-MM-Explainability",id:"LLM/paper/Transformer-MM-Explainability",title:"Generic Attention-model Explainability for Interpreting Bi-Modal and Encoder-Decoder Transformers",description:"\u8fd9\u662f\u4e00\u7bc7\u5173\u4e8e\u89e3\u91catransformer\u6ce8\u610f\u529b\u7684\u6587\u7ae0\uff0c\u601d\u8def\u8fd1\u4f3cGradCAM\uff0c\u4e3b\u8981\u662f\u53ef\u4ee5\u53d1\u73b0transformer\u7c7b\u7684\u6a21\u578b\u5728\u54ea\u4e00\u5757\u7f6e\u4fe1\u5ea6\u6bd4\u8f83\u9ad8\u3002",source:"@site/docs/LLM/paper/Transformer-MM-Explainability.md",sourceDirName:"LLM/paper",slug:"/LLM/paper/Transformer-MM-Explainability",permalink:"/docs/LLM/paper/Transformer-MM-Explainability",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/LLM/paper/Transformer-MM-Explainability.md",tags:[{label:"paper",permalink:"/docs/tags/paper"}],version:"current",frontMatter:{title:"Generic Attention-model Explainability for Interpreting Bi-Modal and Encoder-Decoder Transformers",tags:["paper"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"paper",permalink:"/docs/LLM/paper/"},next:{title:"Modular visual question answering via code generation",permalink:"/docs/LLM/paper/codeVQA"}},m={},p=[{value:"ViT\u7684\u4f8b\u5b50\uff1a",id:"vit\u7684\u4f8b\u5b50",level:2}],l={toc:p},c="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u7bc7\u5173\u4e8e\u89e3\u91catransformer\u6ce8\u610f\u529b\u7684\u6587\u7ae0\uff0c\u601d\u8def\u8fd1\u4f3cGradCAM\uff0c\u4e3b\u8981\u662f\u53ef\u4ee5\u53d1\u73b0transformer\u7c7b\u7684\u6a21\u578b\u5728\u54ea\u4e00\u5757\u7f6e\u4fe1\u5ea6\u6bd4\u8f83\u9ad8\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hila-chefer/Transformer-MM-Explainability"},"https://github.com/hila-chefer/Transformer-MM-Explainability"))),(0,a.kt)("h2",{id:"vit\u7684\u4f8b\u5b50"},"ViT\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from PIL import Image\nimport torchvision.transforms as transforms\nimport matplotlib.pyplot as plt\nimport torch\nimport numpy as np\nimport cv2\n\n# rule 5 from paper\ndef avg_heads(cam, grad):\n    cam = cam.reshape(-1, cam.shape[-2], cam.shape[-1])\n    grad = grad.reshape(-1, grad.shape[-2], grad.shape[-1])\n    cam = grad * cam\n    cam = cam.clamp(min=0).mean(dim=0)\n    return cam\n\n# rule 6 from paper\ndef apply_self_attention_rules(R_ss, cam_ss):\n    R_ss_addition = torch.matmul(cam_ss, R_ss)\n    return R_ss_addition\n\ndef generate_relevance(model, input, index=None):\n    output = model(input, register_hook=True)\n    if index == None:\n        index = np.argmax(output.cpu().data.numpy(), axis=-1)\n\n    one_hot = np.zeros((1, output.size()[-1]), dtype=np.float32)\n    one_hot[0, index] = 1\n    one_hot_vector = one_hot\n    one_hot = torch.from_numpy(one_hot).requires_grad_(True)\n    one_hot = torch.sum(one_hot.cuda() * output)\n    model.zero_grad()\n    one_hot.backward(retain_graph=True)\n\n    num_tokens = model.blocks[0].attn.get_attention_map().shape[-1]\n    R = torch.eye(num_tokens, num_tokens).cuda()\n    for blk in model.blocks:\n        grad = blk.attn.get_attn_gradients()\n        cam = blk.attn.get_attention_map()\n        cam = avg_heads(cam, grad)\n        R += apply_self_attention_rules(R.cuda(), cam.cuda())\n    return R[0, 1:]\n\nfrom baselines.ViT.ViT_new import vit_base_patch16_224 as vit\n\nnormalize = transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])\ntransform = transforms.Compose([\n    transforms.Resize(256),\n    transforms.CenterCrop(224),\n    transforms.ToTensor(),\n    normalize,\n])\n\n# create heatmap from mask on image\ndef show_cam_on_image(img, mask):\n    heatmap = cv2.applyColorMap(np.uint8(255 * mask), cv2.COLORMAP_JET)\n    heatmap = np.float32(heatmap) / 255\n    cam = heatmap + np.float32(img)\n    cam = cam / np.max(cam)\n    return cam\n\n# initialize ViT pretrained\nmodel = vit(pretrained=True).cuda()\nmodel.eval()\n\ndef generate_visualization(original_image, class_index=None):\n    transformer_attribution = generate_relevance(model, original_image.unsqueeze(0).cuda(), index=class_index).detach()\n    transformer_attribution = transformer_attribution.reshape(1, 1, 14, 14)\n    transformer_attribution = torch.nn.functional.interpolate(transformer_attribution, scale_factor=16, mode='bilinear')\n    transformer_attribution = transformer_attribution.reshape(224, 224).cuda().data.cpu().numpy()\n    transformer_attribution = (transformer_attribution - transformer_attribution.min()) / (transformer_attribution.max() - transformer_attribution.min())\n    image_transformer_attribution = original_image.permute(1, 2, 0).data.cpu().numpy()\n    image_transformer_attribution = (image_transformer_attribution - image_transformer_attribution.min()) / (image_transformer_attribution.max() - image_transformer_attribution.min())\n    vis = show_cam_on_image(image_transformer_attribution, transformer_attribution)\n    vis =  np.uint8(255 * vis)\n    vis = cv2.cvtColor(np.array(vis), cv2.COLOR_RGB2BGR)\n    return vis\n\ndef print_top_classes(predictions, **kwargs):    \n    # Print Top-5 predictions\n    prob = torch.softmax(predictions, dim=1)\n    class_indices = predictions.data.topk(5, dim=1)[1][0].tolist()\n    max_str_len = 0\n    class_names = []\n    for cls_idx in class_indices:\n        class_names.append(CLS2IDX[cls_idx])\n        if len(CLS2IDX[cls_idx]) > max_str_len:\n            max_str_len = len(CLS2IDX[cls_idx])\n    \n    print('Top 5 classes:')\n    for cls_idx in class_indices:\n        output_string = '\\t{} : {}'.format(cls_idx, CLS2IDX[cls_idx])\n        output_string += ' ' * (max_str_len - len(CLS2IDX[cls_idx])) + '\\t\\t'\n        output_string += 'value = {:.3f}\\t prob = {:.1f}%'.format(predictions[0, cls_idx], 100 * prob[0, cls_idx])\n        print(output_string)\n\nimage = Image.open('samples/catdog.png')\ndog_cat_image = transform(image)\n\nfig, axs = plt.subplots(1, 3)\naxs[0].imshow(image);\naxs[0].axis('off');\n\noutput = model(dog_cat_image.unsqueeze(0).cuda())\nprint_top_classes(output)\n\n# cat - the predicted class\ncat = generate_visualization(dog_cat_image)\n\n# dog \n# generate visualization for class 243: 'bull mastiff'\ndog = generate_visualization(dog_cat_image, class_index=243)\n\n\naxs[1].imshow(cat);\naxs[1].axis('off');\naxs[2].imshow(dog);\naxs[2].axis('off');\n\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:t(5470).Z,width:"349",height:"112"})))}u.isMDXComponent=!0},5470:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-2653621f699d6fedd428ac63a748857d.png"}}]);