"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/helloworld","metadata":{"permalink":"/blog/helloworld","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/helloworld.md","source":"@site/blog/helloworld.md","title":"learn docusaurus","description":"docusaurus \u5165\u95e8","date":"2023-10-10T16:19:57.000Z","formattedDate":"October 10, 2023","tags":[],"readingTime":3.565,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"learn docusaurus","description":"docusaurus \u5165\u95e8","hide_table_of_contents":false},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"## \u6dfb\u52a0 Markdown \u9875\u9762\\n`/src/pages/helloMarkdown.md`\\n\\n```markdown\\n---\\ntitle: \u6211\u7684\u95ee\u5019\u9875\u9762\u6807\u9898\\ndescription: \u6211\u7684\u95ee\u5019\u9875\u9762\u63cf\u8ff0\\nhide_table_of_contents: true\\n---\\n\\n```\\n\\n## \u521b\u5efa\u6587\u6863\\n\\n### \u8bbe\u7f6eid\u4ee5\u53ca\u6253tags\\n```markdown\\n---\\nid: doc-with-tags\\ntitle: \u4e00\u7bc7\u5305\u542b\u6807\u7b7e\u7684\u6587\u6863\\ntags:\\n  - \u6f14\u793a\\n  - \u5f00\u59cb\u4e0a\u624b\\n---\\n```\\n\\n### \u6587\u6863 URL\\n```markdown\\n---\\nslug: /bonjour\\n---\\n\\nLorem ipsum\\n```\\n\\n> \u4f60\u53ef\u4ee5\u4f7f\u7528\uff1a\\n>\\n> \u7edd\u5bf9\u8def\u5f84\uff1a`slug: /mySlug`\u3001`slug: /...`\\n> \\n> \u76f8\u5bf9\u8def\u5f84\uff1a`slug: mySlug`\u3001`slug: ./../mySlug`...\\n\\n### \u4fa7\u8fb9\u680f\\n\\n```markdown title=\\"sidebars.js\\"\\ntype SidebarItemDoc =\\n  // \u666e\u901a\u8bed\u6cd5\\n  | {\\n      type: \'doc\';\\n      id: string;\\n      label: string; // \u4fa7\u8fb9\u680f\u6807\u7b7e\u6587\u672c\\n      className?: string; // \u4fa7\u8fb9\u680f\u6807\u7b7e\u7c7b\u540d\\n      customProps?: Record<string, unknown>; // \u81ea\u5b9a\u4e49\u5c5e\u6027\\n    }\\n\\n  // \u7b80\u5199\u8bed\u6cd5\\n  | string; // \u6587\u6863 ID \u7b80\u5199\\n```\\n\\n\u5982\u679c\u4f60\u7528\u4e86\u6587\u6863\u7b80\u5199\uff0c\u6216\u8005\u81ea\u52a8\u751f\u6210\u4fa7\u8fb9\u680f\uff0c\u4f60\u5c31\u4e0d\u80fd\u901a\u8fc7\u4fa7\u8fb9\u680f\u9879\u7684\u5b9a\u4e49\u6765\u81ea\u5b9a\u4e49\u4fa7\u8fb9\u680f\u6807\u7b7e\u4e86\u3002 \u7136\u800c\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u7bc7\u6587\u6863\u4e2d\u4f7f\u7528 sidebar_label Markdown \u524d\u8a00\u3002\u5b83\u4f1a\u4f18\u5148\u4e8e\u4fa7\u8fb9\u680f\u9879\u76ee\u4e2d\u7684 label \u5b57\u6bb5\u3002 \u7c7b\u4f3c\u5730\uff0c\u4f60\u53ef\u4ee5\u7528 sidebar_custom_props \u6765\u58f0\u660e\u6587\u6863\u9875\u9762\u7684\u81ea\u5b9a\u4e49\u5143\u6570\u636e\u3002\\n\\n#### Category - \u521b\u5efa\u5206\u7c7b\u5c42\u7ea7\\n\\n```markdown title=\\"sidebars.js\\"\\nmodule.exports = {\\n  docs: [\\n    {\\n      type: \'category\',\\n      label: \'Guides\',\\n      collapsible: true,\\n      collapsed: false,\\n      items: [\\n        \'creating-pages\',\\n        {\\n          type: \'category\',\\n          label: \'Docs\',\\n          items: [\'introduction\', \'sidebar\', \'markdown-features\', \'versioning\'],\\n        },\\n      ],\\n    },\\n  ],\\n};\\n```\\n\\n\u751f\u6210\u7d22\u5f15\u9875\\n\u4f60\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u7d22\u5f15\u9875\uff0c\u663e\u793a\u6b64\u7c7b\u522b\u7684\u6240\u6709\u76f4\u63a5\u5b50\u9879\u3002 slug \u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49\u751f\u6210\u9875\u9762\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a /category/[\u7c7b\u522b\u540d]\u3002\\n\\n```markdown title=\\"sidebars.js\\"\\nmodule.exports = {\\n  docs: [\\n    {\\n      type: \'category\',\\n      label: \'\u6559\u7a0b\',\\n      link: {\\n        type: \'generated-index\',\\n        title: \'Docusaurus \u6559\u7a0b\',\\n        description: \'\u5b66\u4e60\u6700\u91cd\u8981\u7684 Docusaurus \u6982\u5ff5\uff01\',\\n        slug: \'/category/docusaurus-guides\',\\n        keywords: [\'guides\'],\\n        image: \'/img/docusaurus.png\',\\n      },\\n      items: [\'pages\', \'docs\', \'blog\', \'search\'],\\n    },\\n  ],\\n};\\n```\\n\\n#### \u5728\u6587\u6863\u9875\u9762\u4e2d\u5d4c\u5165\u751f\u6210\u7d22\u5f15\\n\\n\u4f60\u53ef\u4ee5\u901a\u8fc7 DocCardList \u7ec4\u4ef6\uff0c\u5728\u666e\u901a\u7684\u6587\u6863\u9875\u4e2d\u4e5f\u5d4c\u5165\u81ea\u52a8\u751f\u6210\u7684\u5361\u7247\u5217\u8868\u3002 \u5b83\u4f1a\u663e\u793a\u5f53\u524d\u6587\u6863\u6240\u5c5e\u7c7b\u522b\u7684\u6240\u6709\u4fa7\u8fb9\u680f\u9879\u76ee\u3002\\n\\n```markdown title=\\"docs/sidebar/index.md\\"\\nimport DocCardList from \'@theme/DocCardList\';\\n\\n<DocCardList />\\n```\\n\\n### \u81ea\u52a8\u751f\u6210\u4fa7\u8fb9\u680f\u5143\u6570\u636e\\nlabel\u3001className\u3001customProps \u5c5e\u6027\u5728\u524d\u8a00\u4e2d\u58f0\u660e\uff0c\u5bf9\u5e94\u7684\u5b57\u6bb5\u5206\u522b\u662f sidebar_label\u3001sidebar_class_name\u3001sidebar_custom_props\u3002 \u76f8\u5bf9\u4f4d\u7f6e\u53ef\u4ee5\u7528\u4e00\u6837\u7684\u65b9\u6cd5\u58f0\u660e\uff0c\u4e5f\u5c31\u662f sidebar_position \u524d\u8a00\u3002\\n```markdown title=\\"docs/tutorials/tutorial-easy.md\\"\\n---\\nsidebar_position: 2\\nsidebar_label: \u7b80\u5355\\nsidebar_class_name: green\\n---\\n\\n# \u7b80\u5355\u6559\u7a0b\\n\\n\u8fd9\u91cc\u662f\u7b80\u5355\u6559\u7a0b\uff01\\n```\\n\\n## \u535a\u5ba2\\n### \u521d\u59cb\u8bbe\u7f6e\\n\u8981\u4e3a\u4f60\u7684\u7ad9\u70b9\u8bbe\u7f6e\u535a\u5ba2\uff0c\u8bf7\u5148\u521b\u5efa blog \u76ee\u5f55\u3002\\n\\n\u7136\u540e\uff0c\u5728 docusaurus.config.js \u5185\u521b\u5efa\u6307\u5411\u4f60\u7684\u535a\u5ba2\u7684\u94fe\u63a5\u9879\u3002\\n```markdown title=\\"docusaurus.config.js\\"\\n\\nmodule.exports = {\\n  themeConfig: {\\n    // ...\\n    navbar: {\\n      items: [\\n        // ...\\n        {to: \'blog\', label: \'\u535a\u5ba2\', position: \'left\'}, // \u6216 position: \'right\'\\n      ],\\n    },\\n  },\\n};\\n```\\n\\n### \u65b0\u5efa\u5e16\u5b50\\n```markdown title=\\"website/blog/2019-09-05-hello-docusaurus-v2.md\\"\\n---\\ntitle: \u6b22\u8fce\u6765\u5230 Docusaurus v2\\ndescription: \u8fd9\u662f\u6211\u5173\u4e8e Docusaurus 2 \u7684\u7b2c\u4e00\u7bc7\u535a\u6587\u3002\\nslug: welcome-docusaurus-v2\\nauthors:\\n  - name: Joel Marcey\\n    title: Docusaurus 1 \u5408\u4f5c\u521b\u9020\u8005\\n    url: https://github.com/JoelMarcey\\n    image_url: https://github.com/JoelMarcey.png\\n  - name: S\xe9bastien Lorber\\n    title: Docusaurus \u7ef4\u62a4\u8005\\n    url: https://sebastienlorber.com\\n    image_url: https://github.com/slorber.png\\ntags: [hello, docusaurus-v2]\\nimage: https://i.imgur.com/mErPwqL.png\\nhide_table_of_contents: false\\n---\\n\\n\u6b22\u8fce\u6765\u5230\u672c\u535a\u5ba2\u3002 \u6b64\u535a\u5ba2\u4f7f\u7528 [**Docusaurus 2**](https://docusaurus.io/) \u642d\u5efa\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u8fd9\u662f\u6211\u5728 Docusaurus 2 \u4e0a\u7684\u9996\u7bc7\u535a\u6587\u3002\\n\\n\u4e0b\u65b9\u662f\u4e00\u7cfb\u5217\u5185\u5bb9\u3002\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"learn docusaurus","permalink":"/blog/helloworld"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);