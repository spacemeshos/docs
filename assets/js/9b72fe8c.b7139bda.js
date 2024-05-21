"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"blocks",title:"Blocks and Transactions"},i=void 0,s={unversionedId:"learn/blocks",id:"learn/blocks",title:"Blocks and Transactions",description:'In traditional blockchains such as Bitcoin or Ethereum each block contains a "backwards pointer" to the previous known block (i.e., the previous chain head). In this way it\'s not possible to replace a single, historical block without replacing every block that came after.',source:"@site/docs/learn/blocks.md",sourceDirName:"learn",slug:"/learn/blocks",permalink:"/docs/learn/blocks",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks",title:"Blocks and Transactions"},sidebar:"learn",previous:{title:"Rewards",permalink:"/docs/learn/rewards"},next:{title:"Accounts",permalink:"/docs/learn/accounts"}},l={},c=[],p={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In traditional blockchains such as Bitcoin or Ethereum each block contains a "backwards pointer" to the previous known block (i.e., the previous chain head). In this way it\'s not possible to replace a single, historical block without replacing every block that came after.'),(0,o.kt)("p",null,"Due to its mesh design, Spacemesh doesn't work this way. Spacemesh blocks are freestanding, i.e., each individual block is deemed valid or invalid on its own right by the consensus mechanisms, Tortoise and Hare. The protocol allows for zero or more valid blocks in a given layer. The vast majority of layers are expected to have a single valid, effective block. Empty layers may occur from time to time when certain assumptions are violated, e.g., when many miners are offline and the Hare consensus mechanism fails."),(0,o.kt)("p",null,"There can only be multiple valid blocks in a given layer when security assumptions are temporarily violated, e.g., when the network temporarily loses synchrony or > 1/3 of miners act dishonestly. In this case the protocol dictates that a single block be deterministically chosen as the only ",(0,o.kt)("em",{parentName:"p"},"effective")," block for the layer. Over time the network's self-healing mechanism ensures that all honest nodes reach consensus on the canonical set of valid, effective blocks, zero or one per layer."),(0,o.kt)("p",null,"In practice this means that a ",(0,o.kt)("em",{parentName:"p"},"single historical block")," and its contents may be reorg'ed in or out of the canonical chain. When a historical change occurs, the state rolls back (i.e., reorgs) to the point of change and all subsequent canonical state (i.e., all transactions in the new canonical chain) is replayed from that point forward. This could mean that transactions in the canonical chain that were previously effective now become ineffective, or vice versa. It may also mean that the same transaction (uniquely identified by its transaction ID) may appear in multiple blocks, in the same layer or in multiple layers. When this happens, only the first instance of the transaction in the canonical chain is considered effective; later instances are ignored."),(0,o.kt)("p",null,"A layer contains zero or more blocks. Most layers contain exactly one block, but it's possible for a layer to have zero blocks (when the network is under attack, or during times when many miners were offline or otherwise acting Byzantine) or more than one block (e.g., after a network partition-and-rejoin). In rare cases of multiple blocks, the network will establish consensus on a single block as canonical; transactions in other blocks will not be included in the canonical mesh nor processed. A block may thus be ",(0,o.kt)("em",{parentName:"p"},"valid")," or ",(0,o.kt)("em",{parentName:"p"},"invalid")," and there may only be one ",(0,o.kt)("em",{parentName:"p"},"valid")," block per layer."),(0,o.kt)("p",null,"Blocks contain zero or more transactions. Blocks are uniquely indexed by their block hash."),(0,o.kt)("p",null,"Transactions are uniquely indexed by their transaction ID. The same transaction may be included in multiple blocks, but not in multiple blocks on the canonical chain (i.e., multiple ",(0,o.kt)("em",{parentName:"p"},"valid")," blocks). A transaction has a ",(0,o.kt)("em",{parentName:"p"},"state")," that may be ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," (i.e., not processed yet), ",(0,o.kt)("inlineCode",{parentName:"p"},"mempool")," (successfully added to the mempool but not yet mined into a block), or ",(0,o.kt)("inlineCode",{parentName:"p"},"applied")," (successfully mined into a block)."),(0,o.kt)("p",null,"A transaction that was successfully ",(0,o.kt)("inlineCode",{parentName:"p"},"applied"),' can still fail if, e.g., the principal account doesn\'t have enough funds to pay for its gas: we call this an "ineffective" transaction. This is not currently captured cleanly in the API. Implementing transaction receipts is still a work in progress.'))}h.isMDXComponent=!0}}]);