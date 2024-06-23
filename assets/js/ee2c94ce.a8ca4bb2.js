"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[4411],{3034:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=t(5893),l=t(1151);const a={title:"C++ \u5355\u4f8b",tags:["cpp","basic"]},o="example",s={id:"cpp/Singleton",title:"C++ \u5355\u4f8b",description:"https://leimao.github.io/blog/CPP-Singleton/",source:"@site/docs/cpp/Singleton.md",sourceDirName:"cpp",slug:"/cpp/Singleton",permalink:"/docs/cpp/Singleton",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cpp/Singleton.md",tags:[{label:"cpp",permalink:"/docs/tags/cpp"},{label:"basic",permalink:"/docs/tags/basic"}],version:"current",lastUpdatedAt:1719151396,formattedLastUpdatedAt:"Jun 23, 2024",frontMatter:{title:"C++ \u5355\u4f8b",tags:["cpp","basic"]},sidebar:"tutorialSidebar",previous:{title:"vector",permalink:"/docs/cpp/STL/vector"},next:{title:"c++\u4e4bconstexpr",permalink:"/docs/cpp/constexpr"}},c={},u=[];function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leimao.github.io/blog/CPP-Singleton/",children:"https://leimao.github.io/blog/CPP-Singleton/"})}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'#include "singleton.hpp"\n#include <cassert>\n#include <iostream>\n\nint main()\n{\n    std::cout << "Singleton Instance Address: " << Singleton::get_instance()\n              << std::endl;\n    std::cout << "Singleton Instance Value: "\n              << Singleton::get_instance()->get_value() << std::endl;\n    int const value{5};\n    std::cout << "Setting Singleton Instance Value To: " << value << std::endl;\n    Singleton::get_instance()->set_value(value);\n    std::cout << "Singleton Instance Value: "\n              << Singleton::get_instance()->get_value() << std::endl;\n    assert(value == Singleton::get_instance()->get_value());\n}\n'})}),"\n",(0,i.jsx)(e.h1,{id:"c-11",children:"c++ 11"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"#ifndef SINGLETON_HPP\n#define SINGLETON_HPP\n\n#include <memory>\n#include <mutex>\n\nstd::mutex singleton_mutex;\n\nclass Singleton\n{\npublic:\n    Singleton(Singleton const&) = delete;\n    Singleton& operator=(Singleton const&) = delete;\n    ~Singleton() {}\n    // Set value has to be thread-safe.\n    void set_value(int value)\n    {\n        std::lock_guard<std::mutex> lock(singleton_mutex);\n        m_value = value;\n    }\n    // We don't want get value to be thread-safe in our case.\n    int get_value() const { return m_value; }\n    static Singleton* get_instance()\n    {\n        // Use lock to guarantee the singleton object instantiation is\n        // thread-safe. But lock will become a burden later on after the\n        // singleton object instantiation.\n        std::lock_guard<std::mutex> lock(singleton_mutex);\n        if (!instance)\n        {\n            // std::make_unique will not work\n            instance = std::unique_ptr<Singleton>(new Singleton());\n        }\n        return instance.get();\n    }\n\nprivate:\n    static std::unique_ptr<Singleton> instance;\n    explicit Singleton() : m_value{0} {}\n    int m_value;\n};\n\nstd::unique_ptr<Singleton> Singleton::instance = nullptr;\n\n#endif // SINGLETON_HPP\n"})}),"\n",(0,i.jsx)(e.h1,{id:"scott-meyers-implementation",children:"Scott Meyers Implementation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"#ifndef SINGLETON_HPP\n#define SINGLETON_HPP\n\n#include <mutex>\n\nclass Singleton\n{\npublic:\n    Singleton(Singleton const&) = delete;\n    Singleton& operator=(Singleton const&) = delete;\n    ~Singleton() {}\n    // Set value has to be thread-safe.\n    void set_value(int value)\n    {\n        std::lock_guard<std::mutex> lock(m_mutex);\n        m_value = value;\n    }\n    // We don't want get value to be thread-safe in our case.\n    int get_value() const { return m_value; }\n    static Singleton* get_instance()\n    {\n        // Static local variable initialization is thread-safe\n        // and will be initialized only once.\n        static Singleton instance{};\n        return &instance;\n    }\n\nprivate:\n    explicit Singleton() : m_value{0} {}\n    std::mutex m_mutex;\n    int m_value;\n};\n\n#endif // SINGLETON_HPP\n"})})]})}function d(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var i=t(7294);const l={},a=i.createContext(l);function o(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);