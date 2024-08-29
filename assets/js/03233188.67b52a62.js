"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2833],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(8168),o=(n(6540),n(5680));const i={id:"coin",title:"Spacemesh Coin"},a=void 0,c={unversionedId:"learn/coin",id:"learn/coin",title:"Spacemesh Coin",description:"Basic Units",source:"@site/docs/learn/coin.md",sourceDirName:"learn",slug:"/learn/coin",permalink:"/docs/learn/coin",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/learn/coin.md",tags:[],version:"current",frontMatter:{id:"coin",title:"Spacemesh Coin"},sidebar:"learn",previous:{title:"What Is Spacemesh?",permalink:"/docs/learn/spacemesh"},next:{title:"What is Smeshing?",permalink:"/docs/learn/smeshing"}},s={},l=[{value:"Basic Units",id:"basic-units",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"basic-units"},"Basic Units"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Smesh")," (SMH) is the name of the Spacemesh native cryptocurrency. 1 Smesh equals 10^9 (1 billion) Smidge."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Smidge")," (SMIDGE) is the basic unit of accounting of the Spacemesh platform. It is used mostly by developers in smart contracts code and by users and for transaction fees. One billion (10^9) Smidge equals to one Smesh.")))}m.isMDXComponent=!0}}]);