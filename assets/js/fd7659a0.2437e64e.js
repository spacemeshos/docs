"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9959],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,u=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return t?o.createElement(u,i(i({ref:n},m),{},{components:t})):o.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(8168),r=(t(6540),t(5680));const a={id:"economics",title:"Economics"},i=void 0,s={unversionedId:"learn/economics",id:"learn/economics",title:"Economics",description:'The primary goal of Spacemesh is to make mining from home easy and economically sustainable over the long term. This means that home miners should not be "priced out" by large-scale, industrial "whale" mining operations with large economies of scale. While we cannot perfectly eliminate economies of scale--for instance, large scale operations will likely be able to acquire data storage more cheaply on a per-TB basis, and will likely have access to cheaper power--what we can do (and, indeed, have done) is level the playing field by introducing diseconomies of scale that favor home miners.',source:"@site/docs/learn/economics.md",sourceDirName:"learn",slug:"/learn/economics",permalink:"/docs/learn/economics",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/learn/economics.md",tags:[],version:"current",frontMatter:{id:"economics",title:"Economics"},sidebar:"learn",previous:{title:"What is Smeshing?",permalink:"/docs/learn/smeshing"},next:{title:"PoST (Proof of Space-Time)",permalink:"/docs/learn/post"}},c={},l=[],m={toc:l},p="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,'The primary goal of Spacemesh is to make mining from home easy and economically sustainable over the long term. This means that home miners should not be "priced out" by large-scale, industrial "whale" mining operations with large economies of scale. While we cannot perfectly eliminate economies of scale--for instance, large scale operations will likely be able to acquire data storage more cheaply on a per-TB basis, and will likely have access to cheaper power--what we can do (and, indeed, have done) is level the playing field by introducing ',(0,r.yg)("em",{parentName:"p"},"diseconomies of scale")," that favor home miners."),(0,r.yg)("p",null,"To understand how this works it's necessary to consider ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Marginal_cost"},"marginal cost"),". For a miner running her node on a computer that she already owns and uses every day, on a home Internet connection that she already has, the marginal cost is effectively zero. More precisely, the marginal cost is the cost of the GPU-based PoST initialization (which amortizes to zero over time), and the cost of keeping the computer turned on and online all the time rather than during the hours she'd normally use it. For the average home miner with an unmetered broadband Internet connection this works out to around $10-20 annually. Such a miner simply needs to earn more than this per year from mining for it to be worthwhile."),(0,r.yg)("p",null,"By contrast, a hobbyist miner investing time and money into building a custom mining setup has both a higher startup cost and a higher ongoing cost. An industrial miner has an even larger, more complex cost structure. The cost of mining at scale--factoring in power, bandwidth, redundancy, fixing drive failures, devops, etc.--means that large scale mining operations are not able to compete on a marginal cost basis with home miners."),(0,r.yg)("p",null,"In short, if you're spending money to mine Spacemesh you're very likely to lose money and this is by design."))}h.isMDXComponent=!0}}]);