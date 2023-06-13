"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[6731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"BLIP2 huggingface \u4f7f\u7528",description:"BLIP2 huggingface \u4f7f\u7528",tags:["work"],editor:"caroot"},i=void 0,p={unversionedId:"LLM/BLIP2",id:"LLM/BLIP2",title:"BLIP2 huggingface \u4f7f\u7528",description:"BLIP2 huggingface \u4f7f\u7528",source:"@site/docs/LLM/BLIP2.md",sourceDirName:"LLM",slug:"/LLM/BLIP2",permalink:"/docs/LLM/BLIP2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/LLM/BLIP2.md",tags:[{label:"work",permalink:"/docs/tags/work"}],version:"current",frontMatter:{title:"BLIP2 huggingface \u4f7f\u7528",description:"BLIP2 huggingface \u4f7f\u7528",tags:["work"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"LLM",permalink:"/docs/LLM/"},next:{title:"clip\u5bfc\u51fa\u4e3aonnx",permalink:"/docs/LLM/export_clip_onnx"}},s={},c=[{value:"obtain images",id:"obtain-images",level:2},{value:"load model from hugging face API",id:"load-model-from-hugging-face-api",level:2},{value:"set device id",id:"set-device-id",level:2},{value:"image caption",id:"image-caption",level:2},{value:"Prompted image captioning",id:"prompted-image-captioning",level:2},{value:"Visual question answering",id:"visual-question-answering",level:2},{value:"Chat-based prompting",id:"chat-based-prompting",level:2},{value:"generate prompt",id:"generate-prompt",level:3},{value:"inference chat",id:"inference-chat",level:3}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/blog/blip-2"},"https://huggingface.co/blog/blip-2"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an image transformer that interacts with the frozen image encoder for visual feature extraction"),(0,a.kt)("li",{parentName:"ul"},"a text transformer that can function as both a text encoder and a text decoder")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pip install git+https://github.com/huggingface/transformers.git")),(0,a.kt)("h2",{id:"obtain-images"},"obtain images"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nfrom PIL import Image\n\nurl = 'https://media.newyorker.com/cartoons/63dc6847be24a6a76d90eb99/master/w_1160,c_limit/230213_a26611_838.jpg'\nimage = Image.open(requests.get(url, stream=True).raw).convert('RGB')  \ndisplay(image.resize((596, 437)))\n")),(0,a.kt)("h2",{id:"load-model-from-hugging-face-api"},"load model from hugging face API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from transformers import AutoProcessor, Blip2ForConditionalGeneration\nimport torch\n\nprocessor = AutoProcessor.from_pretrained("Salesforce/blip2-opt-2.7b")\nmodel = Blip2ForConditionalGeneration.from_pretrained("Salesforce/blip2-opt-2.7b", torch_dtype=torch.float16)\n')),(0,a.kt)("h2",{id:"set-device-id"},"set device id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'device = "cuda" if torch.cuda.is_available() else "cpu"\nmodel.to(device)\n')),(0,a.kt)("h2",{id:"image-caption"},"image caption"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'inputs = processor(image, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=20)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,a.kt)("h2",{id:"prompted-image-captioning"},"Prompted image captioning"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'prompt = "this is a cartoon of"\n\ninputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=20)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,a.kt)("p",null,"or "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'prompt = "they look like they are"\n\ninputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=20)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,a.kt)("h2",{id:"visual-question-answering"},"Visual question answering"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'prompt = "Question: What is a dinosaur holding? Answer:"\n\ninputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=10)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')),(0,a.kt)("h2",{id:"chat-based-prompting"},"Chat-based prompting"),(0,a.kt)("h3",{id:"generate-prompt"},"generate prompt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'context = [\n   ("What is a dinosaur holding?", "a torch"),\n   ("Where are they?", "In the woods.")\n]\nquestion = "What for?"\ntemplate = "Question: {} Answer: {}."\n\nprompt = " ".join([template.format(context[i][0], context[i][1]) for i in range(len(context))]) + " Question: " + question + " Answer:"\n\nprint(prompt)\n')),(0,a.kt)("h3",{id:"inference-chat"},"inference chat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'inputs = processor(image, text=prompt, return_tensors="pt").to(device, torch.float16)\n\ngenerated_ids = model.generate(**inputs, max_new_tokens=10)\ngenerated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()\nprint(generated_text)\n')))}d.isMDXComponent=!0}}]);