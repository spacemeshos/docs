"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[127],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var i=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(l,".").concat(u)]||c[u]||g[u]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(8168),a=(n(6540),n(5680));const r={id:"verification",title:"State Verification"},o=void 0,s={unversionedId:"guides/smeshing/smeshing_adv/verification",id:"guides/smeshing/smeshing_adv/verification",title:"State Verification",description:"This guide will show how to validate a downloaded state so that you can trust it. This guide is intended for advanced users.",source:"@site/docs/guides/smeshing/smeshing_adv/state.md",sourceDirName:"guides/smeshing/smeshing_adv",slug:"/guides/smeshing/smeshing_adv/verification",permalink:"/docs/guides/smeshing/smeshing_adv/verification",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/guides/smeshing/smeshing_adv/state.md",tags:[],version:"current",frontMatter:{id:"verification",title:"State Verification"},sidebar:"start",previous:{title:"Avoiding Equivocation",permalink:"/docs/guides/smeshing/smeshing_adv/equivocation"},next:{title:"Quicksync",permalink:"/docs/guides/smeshing/smeshing_adv/quicksync"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],d={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This guide will show how to validate a downloaded state so that you can trust it. This guide is intended for advanced users."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"You need to be able to run TWO full go-spacemesh nodes on the system.\nWe will call one node a ",(0,a.yg)("inlineCode",{parentName:"p"},"state_provider")," and the second one a ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator"),"."),(0,a.yg)("p",null,"Let's assume that the data for the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_provider")," is placed in the ",(0,a.yg)("inlineCode",{parentName:"p"},"./state_provider")," directory. The ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")," is another node that will be responsible for validating that state. It may be ",(0,a.yg)("em",{parentName:"p"},"any")," running node, just with proper (direct & blocklist) config adjustments. Please adjust accordingly if the setup is different."),(0,a.yg)("h2",{id:"steps"},"Steps"),(0,a.yg)("p",null,"We will run two nodes on one system, at the same time. The ",(0,a.yg)("inlineCode",{parentName:"p"},"state_provider"),' will have the data downloaded from "the Internet" and this state is unknown to the ',(0,a.yg)("inlineCode",{parentName:"p"},"state_validator"),"."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Base configs")),(0,a.yg)("p",null,"Config for ",(0,a.yg)("inlineCode",{parentName:"p"},"state_provider")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "api": {\n      "grpc-json-listener": "",\n      "grpc-private-listener": "127.0.0.1:59093",\n      "grpc-public-listener": "127.0.0.1:59092"\n    },\n    "p2p": {\n        "listen": "/ip4/127.0.0.1/tcp/56000",\n        "min-peers": 1,\n        "low-peers": 1,\n        "high-peers": 1,\n        "disable-dht": true,\n        "bootnodes": [],\n        "ip4-blocklist":[],\n        "ip6-blocklist":[]\n    }\n}\n')),(0,a.yg)("p",null,"Config for ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "api": {\n      "grpc-json-listener": "",\n      "grpc-private-listener": "127.0.0.1:49093",\n      "grpc-public-listener": "127.0.0.1:49092"\n    },\n    "p2p": {\n        "listen": "/ip4/127.0.0.1/tcp/46000",\n        "ip4-blocklist":[],\n        "ip6-blocklist":[]\n    }\n}\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Launch the nodes")),(0,a.yg)("p",null,"Let's launch the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_provider")," as:\n",(0,a.yg)("inlineCode",{parentName:"p"},"./go-spacemesh --config state_provider/config.json -d ./state_provider --smeshing-opts-datadir ./state_provider/post --filelock state_provider/syncer.lock")),(0,a.yg)("p",null,"Let's launch the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")," as:\n",(0,a.yg)("inlineCode",{parentName:"p"},"./go-spacemesh --config state_validator/config.json -d ./state_validator --smeshing-opts-datadir ./state_validator/post --filelock state_validator/syncer.lock")),(0,a.yg)("p",null,"You will need to obtain the network id from both of the nodes via\n",(0,a.yg)("inlineCode",{parentName:"p"},"grpcurl -plaintext 127.0.0.1:46000 spacemesh.v1.DebugService.NetworkInfo")," keep it as ",(0,a.yg)("inlineCode",{parentName:"p"},"STATE_VALIDATOR_P2P_ID"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"grpcurl -plaintext 127.0.0.1:56000 spacemesh.v1.DebugService.NetworkInfo")," keep it as ",(0,a.yg)("inlineCode",{parentName:"p"},"STATE_PROVIDER_P2P_ID")),(0,a.yg)("p",null,"Stop them after acquiring this information."),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Adjust the configs")),(0,a.yg)("p",null,"Now edit both configs so they look like this:"),(0,a.yg)("p",null,"Config for ",(0,a.yg)("inlineCode",{parentName:"p"},"state_provider")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "api": {\n      "grpc-json-listener": "",\n      "grpc-private-listener": "127.0.0.1:59093",\n      "grpc-public-listener": "127.0.0.1:59092"\n    },\n    "p2p": {\n        "listen": "/ip4/127.0.0.1/tcp/56000",\n        "min-peers": 1,\n        "low-peers": 1,\n        "high-peers": 1,\n        "disable-dht": true,\n        "bootnodes": [],\n        "ip4-blocklist":[],\n        "ip6-blocklist":[],\n        "direct": [\n            "/ip4/127.0.0.1/tcp/46000/p2p/{STATE_VALIDATOR_P2P_ID}"\n        ]\n    }\n}\n')),(0,a.yg)("p",null,"Config for ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "api": {\n      "grpc-json-listener": "",\n      "grpc-private-listener": "127.0.0.1:49093",\n      "grpc-public-listener": "127.0.0.1:49092"\n    },\n    "p2p": {\n        "listen": "/ip4/127.0.0.1/tcp/46000",\n        "ip4-blocklist":[],\n        "ip6-blocklist":[],\n        "direct": [\n            "/ip4/127.0.0.1/tcp/56000/p2p/{STATE_PROVIDER_P2P_ID}"\n        ]\n    }\n}\n')),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Launch the nodes again")),(0,a.yg)("p",null,"Let's launch the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_provider")," as:\n",(0,a.yg)("inlineCode",{parentName:"p"},"./go-spacemesh --config state_provider/config.json -d ./state_provider --smeshing-opts-datadir ./state_provider/post --filelock state_provider/syncer.lock")),(0,a.yg)("p",null,"Let's launch the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")," as:\n",(0,a.yg)("inlineCode",{parentName:"p"},"./go-spacemesh --config state_validator/config.json -d ./state_validator --smeshing-opts-datadir ./state_validator/post --filelock state_validator/syncer.lock")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Wait for the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")," to sync. Given that the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")," is an empty node it will take time to sync fully.\nAdditionally, because each ATX needs about 100 - 200ms to validate, you'll observe half of the CPU cores being utilized for the ATX validation.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"After the sync is done in the ",(0,a.yg)("inlineCode",{parentName:"p"},"state_validator")," directory there will be a perfectly validated state.sql"))))}g.isMDXComponent=!0}}]);