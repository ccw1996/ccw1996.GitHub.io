"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[3038],{8271:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var s=t(5893),a=t(1151);const p={title:"C++\u6a21\u677f",description:"C++\u6a21\u677f",tags:["cpp","basic"],editor:"caroot"},c=void 0,i={id:"cpp/template_cpp",title:"C++\u6a21\u677f",description:"C++\u6a21\u677f",source:"@site/docs/cpp/template_cpp.md",sourceDirName:"cpp",slug:"/cpp/template_cpp",permalink:"/docs/cpp/template_cpp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/template_cpp.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"basic",permalink:"/docs/tags/basic"}],version:"current",lastUpdatedAt:1719151396,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{title:"C++\u6a21\u677f",description:"C++\u6a21\u677f",tags:["cpp","basic"],editor:"caroot"},sidebar:"tutorialSidebar",previous:{title:"tag_invoke",permalink:"/docs/cpp/tag_invoke"},next:{title:"union\u5171\u7528\u4f53",permalink:"/docs/cpp/union"}},l={},o=[{value:"\u51fd\u6570\u6a21\u677f\u91cd\u8f7d",id:"\u51fd\u6570\u6a21\u677f\u91cd\u8f7d",level:2},{value:"\u7c7b\u6a21\u677f",id:"\u7c7b\u6a21\u677f",level:2},{value:"\u7c7b\u6a21\u677f\u7684\u7279\u5316",id:"\u7c7b\u6a21\u677f\u7684\u7279\u5316",level:2},{value:"\u5c40\u90e8\u7279\u5316",id:"\u5c40\u90e8\u7279\u5316",level:2},{value:"\u7f3a\u7701\u6a21\u677f\u5b9e\u53c2",id:"\u7f3a\u7701\u6a21\u677f\u5b9e\u53c2",level:2},{value:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570",id:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570",level:2},{value:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570\u7684\u9650\u5236",id:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570\u7684\u9650\u5236",level:2},{value:"\u5728\u6a21\u677f\u4e2d\u6307\u5b9a\u53d8\u91cf\u7c7b\u578b",id:"\u5728\u6a21\u677f\u4e2d\u6307\u5b9a\u53d8\u91cf\u7c7b\u578b",level:2},{value:"\u6a21\u677f\u7c7b\u578b\u4f5c\u4e3a\u6a21\u677f\u53c2\u6570",id:"\u6a21\u677f\u7c7b\u578b\u4f5c\u4e3a\u6a21\u677f\u53c2\u6570",level:2},{value:"\u53ef\u53d8\u53c2\u6570\u6a21\u677f\u7279\u6027",id:"\u53ef\u53d8\u53c2\u6570\u6a21\u677f\u7279\u6027",level:2},{value:"sizeof\u2026 \u8fd0\u7b97\u7b26\u83b7\u53d6\u53c2\u6570\u6570\u91cf",id:"sizeof-\u8fd0\u7b97\u7b26\u83b7\u53d6\u53c2\u6570\u6570\u91cf",level:3},{value:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570\u7684\u9012\u5f52\u5c55\u5f00",id:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570\u7684\u9012\u5f52\u5c55\u5f00",level:2}];function r(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u51fd\u6570\u6a21\u677f\u91cd\u8f7d",children:"\u51fd\u6570\u6a21\u677f\u91cd\u8f7d"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"inline int const &max(int const &a, int const &b) {\n    return a < b ? b : a;\n}\n\ntemplate<typename T>\ninline T const &max(T const &a, T const &b) {\n    return a < b ? b : a;\n}\n\ntemplate<typename T>\ninline T const &max(T const &a, T const &b, T const &c) {\n    return ::max(::max(a,b),c);\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7c7b\u6a21\u677f",children:"\u7c7b\u6a21\u677f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'template<typename T>\nclass Stack {\nprivate:\n    std::vector<T> elems;\npublic:\n        void push(T const&);\n        void pop();\n        T top() const;\n        bool empty() const{\n            return elems.empty();\n        }\n};\n\ntemplate<typename T>\nvoid Stack<T>::push(const T & elem) {\n    elems.push_back(elem);\n}\n\ntemplate<typename T>\nvoid Stack<T>::pop() {\n    if (!elems.empty()){\n        elems.pop_back();\n    }\n}\n\ntemplate<typename T>\nT Stack<T>::top() const {\n    if (!elems.empty()){\n        return elems.back();\n    }\n    throw std::out_of_range("Stack::top(); empty Stack");\n}\n\nint main() {\n    Stack<int> intStack;\n    intStack.push(1);\n    intStack.top();\n    intStack.pop();\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u7c7b\u6a21\u677f\u7684\u7279\u5316",children:"\u7c7b\u6a21\u677f\u7684\u7279\u5316"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'template<>\nclass Stack<std::string> {\nprivate:\n        std::deque<std::string> elems;\npublic:\n        void push(std::string const&);\n        void pop();\n        std::string top() const;\n        bool empty() const{\n            return elems.empty();\n        }\n};\n\nvoid Stack<std::string>::push(const std::string &elem) {\n    elems.push_back(elem);\n}\n\nvoid Stack<std::string>::pop() {\n    if (!elems.empty()){\n        elems.pop_back();\n    }\n}\n\nstd::string Stack<std::string>::top() const {\n    if (!elems.empty()){\n        return elems.back();\n    }\n    throw std::out_of_range("Stack<std::string>::top(); empty Stack");\n}\n\nint main() {\n    Stack<std::string> stringStack;\n    intStack.push("string");\n    intStack.top();\n    intStack.pop();\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8fdb\u884c\u7c7b\u6a21\u677f\u7684\u7279\u5316\u65f6\uff0c\u6bcf\u4e2a\u6210\u5458\u51fd\u6570\u90fd\u5fc5\u987b\u91cd\u65b0\u5b9a\u4e49\u4e3a\u666e\u901a\u51fd\u6570\uff0c\u539f\u6765\u51fd\u6570\u6a21\u677f\u4e2d\u7684\u6bcf\u4e2a T \u4e5f\u76f8\u5e94\u5730\u88ab\u8fdb\u884c\u7279\u5316\u7684\u7c7b\u578b\u53d6\u4ee3\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5c40\u90e8\u7279\u5316",children:"\u5c40\u90e8\u7279\u5316"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"template<typename T1,typename T2>\nclass MyClass{\n\n};\n\n// \u5c40\u90e8\u7279\u5316\uff0c\u4e24\u4e2a\u6a21\u677f\u53c2\u6570\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\ntemplate<typename T>\nclass MyClass<T,T>{\n\n};\n\n// \u5c40\u90e8\u7279\u5316\uff0c \u7b2c\u4e8c\u4e2a\u6a21\u677f\u53c2\u6570\u7684\u7c7b\u578b\u662f int\ntemplate<typename T>\nclass MyClass<T,int>{\n\n};\n\n// \u5c40\u90e8\u7279\u5316\uff0c\u4e24\u4e2a\u6a21\u677f\u53c2\u6570\u90fd\u662f\u6307\u9488\u7c7b\u578b\ntemplate<typename T1,typename T2>\nclass MyClass<T1*,T2*>{\n\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7f3a\u7701\u6a21\u677f\u5b9e\u53c2",children:"\u7f3a\u7701\u6a21\u677f\u5b9e\u53c2"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'template <typename T,typename CONT = std::vector<T> >\nclass MyStack{\nprivate:\n    CONT elems;\npublic:\n    void push(T const&);\n    void pop();\n    T top() const;\n    bool empty() const{\n        return elems.empty();\n    }\n};\n\ntemplate<typename T, typename CONT>\nvoid MyStack<T, CONT>::push(const T &elem) {\n    elems.push_back(elem);\n}\n\ntemplate<typename T, typename CONT>\nvoid MyStack<T, CONT>::pop() {\n    if (!elems.empty()){\n        elems.pop_back();\n    }\n}\n\ntemplate<typename T, typename CONT>\nT MyStack<T, CONT>::top() const {\n    if (!elems.empty()){\n        return elems.back();\n    }\n    throw std::out_of_range("MyStack<>::top(); empty Stack");\n}\n\nint main() {\n    MyStack<int> intMyStack;\n    intMyStack.push(1);\n    intMyStack.top();\n    intMyStack.pop();\n\n    MyStack<double, std::deque<double>> doubleMyStack;\n    doubleMyStack.push(0.1);\n    doubleMyStack.top();\n    doubleMyStack.pop();\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0a\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u4e0d\u4f20\u9012\u7b2c\u4e8c\u4e2a\u6a21\u677f\u53c2\u6570\uff0c\u90a3\u4e48\u5c31\u4f7f\u7528\u9ed8\u8ba4\u7684 vector \u6765\u7ba1\u7406\u5143\u7d20\u3002\u5982\u679c\u4f20\u4e86\uff0c\u5c31\u4f7f\u7528\u6307\u5b9a\u7684\u7c7b\u578b\u6765\u7ba1\u7406\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570",children:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'template<typename T, int MAXSIZE = 20>\nclass STACK {\nprivate:\n    T elems[MAXSIZE];\n    int numElems;\n\npublic:\n    STACK();\n\n    void push(T const &);\n    void pop();\n    T top() const;\n    bool empty() const {\n        return numElems == 0;\n    }\n\n    bool full() const {\n        return numElems == MAXSIZE;\n    }\n};\n\ntemplate<typename T, int MAXSIZE>\nSTACK<T, MAXSIZE>::STACK() :numElems(0) {\n\n}\n\ntemplate<typename T, int MAXSIZE>\nvoid STACK<T, MAXSIZE>::push(const T &elem) {\n    if (numElems == MAXSIZE) {\n        throw std::out_of_range("Stack<>::push(): stack is full");\n    }\n    elems[numElems] = elem;\n    numElems++;\n}\n\ntemplate<typename T, int MAXSIZE>\nvoid STACK<T, MAXSIZE>::pop() {\n    if (numElems <= 0) {\n        throw std::out_of_range("Stack<>::pop(): empty stack");\n    }\n    numElems--;\n}\n\ntemplate<typename T, int MAXSIZE>\nT STACK<T, MAXSIZE>::top() const {\n    if (numElems <= 0) {\n        throw std::out_of_range("Stack<>::top(): empty stack");\n    }\n    return elems[numElems - 1];\n}\n\nint main() {\n    STACK<int> intStack;\n    intStack.push(1);\n    intStack.top();\n    intStack.pop();\n\n    STACK<int,10> int10Stack;\n    int10Stack.push(1);\n    int10Stack.top();\n    int10Stack.pop();\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570\u7684\u9650\u5236",children:"\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570\u7684\u9650\u5236"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u5e38\u800c\u8a00\uff0c\u53ea\u6709\u5e38\u6574\u6570\uff08\u5305\u62ec\u679a\u4e3e\u503c\uff09\u6216\u8005\u6307\u5411\u5916\u5305\u94fe\u63a5\u5bf9\u8c61\u7684\u6307\u9488 \u624d\u53ef\u4ee5\uff0c\u800c\u6d6e\u70b9\u6570\u548c\u7c7b\u5bf9\u8c61\u662f\u4e0d\u5141\u8bb8\u4f5c\u4e3a\u975e\u7c7b\u578b\u6a21\u677f\u53c2\u6570\u7684\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5728\u6a21\u677f\u4e2d\u6307\u5b9a\u53d8\u91cf\u7c7b\u578b",children:"\u5728\u6a21\u677f\u4e2d\u6307\u5b9a\u53d8\u91cf\u7c7b\u578b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Foo{\npublic:\n    typedef int num;\n    static int order;\n};\n\nint main(){\n    Foo::num a = 10;\n    Foo::order = 10;\n    return 0;\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u6539\u6210"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"template<typename T>\nclass MyClass {\nprivate:\n   typename T::num * a;\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6a21\u677f\u7c7b\u578b\u4f5c\u4e3a\u6a21\u677f\u53c2\u6570",children:"\u6a21\u677f\u7c7b\u578b\u4f5c\u4e3a\u6a21\u677f\u53c2\u6570"}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u5982\u679c\u501f\u52a9\u6a21\u677f\u53c2\u6570\u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u53ea\u6307\u5b9a\u5bb9\u5668\u7684\u7c7b\u578b\u800c\u4e0d\u9700\u8981\u6307\u5b9a\u6240\u5305\u542b\u5143\u7d20\u7684\u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"template <typename T, template<typename ELEM> class CONT = std::deque>\nclass Stack{\nprivate:\n    CONT<T> elems;\npublic:\n    void push(T const&);\n    void pop();\n    T top() const;\n    bool empty() const{\n        return elems.empty();\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53ef\u53d8\u53c2\u6570\u6a21\u677f\u7279\u6027",children:"\u53ef\u53d8\u53c2\u6570\u6a21\u677f\u7279\u6027"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"// Args \u662f\u4e00\u4e2a\u6a21\u677f\u53c2\u6570\u5305\uff1brest \u662f\u4e00\u4e2a\u51fd\u6570\u53c2\u6570\u5305\n// Args \u8868\u793a\u96f6\u4e2a\u6216\u591a\u4e2a\u6a21\u677f\u7c7b\u578b\u53c2\u6570\n// rest \u8868\u793a\u96f6\u4e2a\u6216\u591a\u4e2a\u51fd\u6570\u53c2\u6570\ntemplate <typename T,typename... Args>\nvoid foo(const T &t, const Args&... rest);\n"})}),"\n",(0,s.jsx)(e.h3,{id:"sizeof-\u8fd0\u7b97\u7b26\u83b7\u53d6\u53c2\u6570\u6570\u91cf",children:"sizeof\u2026 \u8fd0\u7b97\u7b26\u83b7\u53d6\u53c2\u6570\u6570\u91cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'template <typename... Args>\nvoid count(Args... args){\n    cout << "template parameter packet size is " << sizeof...(Args) << endl;\n    cout << "function parameter packet size is " << sizeof...(args) << endl;\n}\n\nint main(){\n    int i =0;\n    double d = 3.14;\n    string s = "variadic template";\n    \n    count(i,s,42,d);\n    count(d,s);\n    return 0;    \n}    \n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570\u7684\u9012\u5f52\u5c55\u5f00",children:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570\u7684\u9012\u5f52\u5c55\u5f00"}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u53d8\u53c2\u6570\u51fd\u6570\u901a\u5e38\u662f\u9012\u5f52\u8c03\u7528\u7684\u3002\u7b2c\u4e00\u6b65\u8c03\u7528\u5904\u7406\u5305\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5b9e\u53c2\uff0c\u7136\u540e\u7528\u5269\u4f59\u5b9e\u53c2\u8c03\u7528\u81ea\u8eab"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'// \u7528\u6765\u7ec8\u6b62\u9012\u5f52\u5e76\u6253\u5370\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u51fd\u6570\n// \u6b64\u51fd\u6570\u5fc5\u987b\u5728\u53ef\u53d8\u51fd\u6570\u53c2\u6570\u7248\u672c\u7684 print \u5b9a\u4e49\u4e4b\u524d\u58f0\u660e\ntemplate<typename T>\nostream &print(ostream &os,const T &t){\n    return os << t ;\n}\n\n// \u53c2\u6570\u5305\u4e2d\u9664\u4e86\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u5916\u7684\u5176\u4ed6\u5143\u7d20\u90fd\u4f1a\u8c03\u7528\u8fd9\u4e2a\u7248\u672c\u7684 print\ntemplate<typename T,typename... Args>\nostream &print(ostream &os,const T &t,const Args&... rest){\n    os << t << ", ";\n    return print(os,rest...);\n}\n\nint main(){\n    int i =0;\n    double d = 3.14;\n    string s = "variadic template";\n    \n    print(cout,i,s,42);\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"print(cout,i,s,42);\n\n\u9012\u5f52\u5c55\u5f00\uff1a\n\nprint(cout,i,s,42);     \nprint(cout,s,42);\nprint(cout,42);\n"})})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>c});var s=t(7294);const a={},p=s.createContext(a);function c(n){const e=s.useContext(p);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(p.Provider,{value:e},n.children)}}}]);