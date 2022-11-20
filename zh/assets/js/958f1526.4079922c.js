"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[477],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={},c="\u5e76\u884c\u4ea4\u6613\u6267\u884c\uff08Parallel Transaction Execution\uff09",i={unversionedId:"technology/parallel-transaction-execution",id:"technology/parallel-transaction-execution",title:"\u5e76\u884c\u4ea4\u6613\u6267\u884c\uff08Parallel Transaction Execution\uff09",description:"\u4ea4\u6613\u7684\u5e76\u884c\u6267\u884c\u53ef\u4ee5\u8ba9\u4ea4\u6613\u540c\u65f6\u5728\u591a\u4e2a CPU \u5185\u6838\u4e0a\u6267\u884c\uff0c\u4ece\u800c\u5f97\u5230\u66f4\u9ad8\u7684\u5355\u673a\u541e\u5410\u91cf\uff0c\u8fd9\u4e2a\u662f\u4e92\u8054\u7f51\u57fa\u7840\u8bbe\u65bd\u9886\u57df\u5e38\u7528\u7684\u4f18\u5316\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/05-parallel-transaction-execution.md",sourceDirName:"04-technology",slug:"/technology/parallel-transaction-execution",permalink:"/zh/docs/technology/parallel-transaction-execution",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/05-parallel-transaction-execution.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53bb\u4e2d\u5fc3\u5316\u7684\u9a8c\u8bc1\u8005\u7f51\u7edc",permalink:"/zh/docs/technology/decentralized-validator-network"},next:{title:"\u4e3a Layer1 \u72b6\u6001\u6269\u5bb9",permalink:"/zh/docs/technology/state-scaling"}},l={},u=[{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e76\u884c\u4ea4\u6613\u6267\u884cparallel-transaction-execution"},"\u5e76\u884c\u4ea4\u6613\u6267\u884c\uff08Parallel Transaction Execution\uff09"),(0,o.kt)("p",null,"\u4ea4\u6613\u7684\u5e76\u884c\u6267\u884c\u53ef\u4ee5\u8ba9\u4ea4\u6613\u540c\u65f6\u5728\u591a\u4e2a CPU \u5185\u6838\u4e0a\u6267\u884c\uff0c\u4ece\u800c\u5f97\u5230\u66f4\u9ad8\u7684\u5355\u673a\u541e\u5410\u91cf\uff0c\u8fd9\u4e2a\u662f\u4e92\u8054\u7f51\u57fa\u7840\u8bbe\u65bd\u9886\u57df\u5e38\u7528\u7684\u4f18\u5316\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"Move \u672c\u8eab\u7684\u72b6\u6001\u6a21\u578b\uff0c\u5728\u5b9e\u73b0\u5e76\u884c\u4ea4\u6613\u6267\u884c\u65b9\u9762\u66f4\u6709\u4f18\u52bf\uff0c\u5e76\u4e14\u4e1a\u754c\u5df2\u7ecf\u6709\u8fc7\u5c1d\u8bd5\uff0c\u6bd4\u5982Aptos\uff0cSui\u3002"),(0,o.kt)("p",null,"Rooch \u7684\u6392\u5e8f\u5668\u5728\u4e00\u4e2a Epoch \u5185\u662f\u786e\u5b9a\u7684\uff0c\u5b83\u7684\u541e\u5410\u91cf\u53ea\u53d7\u9650\u4e8e\u5355\u673a\u7684\u4ea4\u6613\u6267\u884c\u6548\u7387\uff0c\u53ef\u4ee5\u66f4\u5bb9\u6613\u53d1\u6325\u51fa\u5e76\u884c\u6267\u884c\u7684\u4f18\u52bf\u3002"),(0,o.kt)("h3",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control"},"Optimistic concurrency control")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/aptoslabs/block-stm-how-we-execute-over-160k-transactions-per-second-on-the-aptos-blockchain-3b003657e4ba"},"Block-STM: How We Execute Over 160k Transactions Per Second on the Aptos Blockchain")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.sui.io/learn/architecture/consensus"},"Sui consensus"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u9700\u8981\u8fdb\u4e00\u6b65\u5b8c\u5584")))}s.isMDXComponent=!0}}]);