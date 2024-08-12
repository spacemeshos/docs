"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[265],{5680:(e,t,r)=>{r.d(t,{xA:()=>h,yg:()=>m});var s=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return r?s.createElement(m,i(i({ref:t},h),{},{components:r})):s.createElement(m,i({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[p]="string"==typeof e?e:a,i[1]=n;for(var c=2;c<o;c++)i[c]=r[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var s=r(8168),a=(r(6540),r(5680));const o={id:"atx",title:"ATX"},i=void 0,n={unversionedId:"learn/atx",id:"learn/atx",title:"ATX",description:"After successfully generating the PoST, the smesher creates an Activation Transaction (ATX) and submits it to the network. This transaction includes the smesher\u2019s PoST, their wallet address (to which rewards will go), and some other data. The ATX is then used to calculate the smesher's eligibility to participate in the rewards. For all subsequent epochs, the PoET service uses ATXs as the challenge value instead of the initial PoSp. As such, after the smesher\u2019s first epoch, only a single PoSp (the later PoSp) is required per epoch.",source:"@site/docs/learn/atx.md",sourceDirName:"learn",slug:"/learn/atx",permalink:"/docs/learn/atx",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/learn/atx.md",tags:[],version:"current",frontMatter:{id:"atx",title:"ATX"},sidebar:"learn",previous:{title:"PoET Servers",permalink:"/docs/learn/poet"},next:{title:"Hare",permalink:"/docs/learn/hare"}},l={},c=[{value:"Weight",id:"weight",level:2},{value:"Block Proposals",id:"block-proposals",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,s.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"After successfully generating the PoST, the smesher creates an Activation Transaction (ATX) and submits it to the network. This transaction includes the smesher\u2019s PoST, their wallet address (to which rewards will go), and some other data. The ATX is then used to calculate the smesher's eligibility to participate in the rewards. For all subsequent epochs, the PoET service uses ATXs as the challenge value instead of the initial PoSp. As such, after the smesher\u2019s first epoch, only a single PoSp (the later PoSp) is required per epoch."),(0,a.yg)("h2",{id:"weight"},"Weight"),(0,a.yg)("p",null,"Every ATX also has a weight. Since multiple smeshers contribute to the same block, it is important to reward them accordingly. The absolute weight is calculated by multiplying the SUs allocated by a smesher by the number of PoET ticks for those allocated SUs (Space Units * PoET ticks). Put simply, the allocated space is multiplied by the time (measured by PoET ticks) that the special data was kept on the disk."),(0,a.yg)("p",null,"Once the ATX\u2019s absolute weight is derived, its relative weight (ATX weight / weight of all ATXs in the epoch) is calculated. This is the ATX\u2019s weight in proportion to the total weight of all ATXs. Based on this relative weight, the number of block proposals a smesher is eligible to publish can be calculated."),(0,a.yg)("h2",{id:"block-proposals"},"Block Proposals"),(0,a.yg)("p",null,"Smeshers who submit a valid ATX during an epoch become eligible to publish block proposals in the following epoch. A block proposal is a set of data that includes transactions from the smesher\u2019s mempool, the smesher\u2019s signature, and some data that proves that this smesher is eligible to publish a block proposal in this layer."),(0,a.yg)("p",null,"Currently, the protocol targets 50 block proposals per layer and there are 4032 layers per epoch, with each layer lasting 5 minutes. The absolute weight of an ATX is divided by the number of block proposals that the smesher is eligible for to determine the weight of each of those block proposals."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Ballots",src:r(5376).A,width:"878",height:"892"})),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Proposals",src:r(8740).A,width:"878",height:"892"})))}u.isMDXComponent=!0},5376:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/Ballots-430f479b4723ec39f7e2ceab0984047f.png"},8740:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/Block-Proposals-bcc3c67541f192e1d19701d0752d29e3.png"}}]);