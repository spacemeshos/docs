"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={id:"performance",title:"Fine-Tuning Node Performance"},s=void 0,a={unversionedId:"start/smesher/performance",id:"start/smesher/performance",title:"Fine-Tuning Node Performance",description:"Besides Performance optimisations while running public-private nodes setup there are few other settings that can be used to fine tune the performance of a node.",source:"@site/docs/start/smesher/performance.md",sourceDirName:"start/smesher",slug:"/start/smesher/performance",permalink:"/docs/start/smesher/performance",draft:!1,tags:[],version:"current",frontMatter:{id:"performance",title:"Fine-Tuning Node Performance"},sidebar:"start",previous:{title:"Networking",permalink:"/docs/start/smesher/networking"},next:{title:"Avoiding Equivocation",permalink:"/docs/start/smesher/equivocation"}},l={},p=[{value:"Distributed verification",id:"distributed-verification",level:3},{value:"Verifying workers",id:"verifying-workers",level:3},{value:"RandomX fast mode",id:"randomx-fast-mode",level:3},{value:"Performance optimizations while running public-private nodes setup",id:"performance-optimizations-while-running-public-private-nodes-setup",level:4},{value:"Disabling verifying POST on private nodes",id:"disabling-verifying-post-on-private-nodes",level:5},{value:"Changing k3 parameter",id:"changing-k3-parameter",level:5},{value:"RandomX Fast mode",id:"randomx-fast-mode-1",level:5}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Besides ",(0,r.kt)("a",{parentName:"p",href:"#performance-optimisations-while-running-public-private-nodes-setup"},"Performance optimisations while running public-private nodes setup")," there are few other settings that can be used to fine tune the performance of a node.\nPlease note that these are not directly related to the proving performance but they ",(0,r.kt)("em",{parentName:"p"},"may")," impact it depending on the system, setup, hardware etc."),(0,r.kt)("h3",{id:"distributed-verification"},"Distributed verification"),(0,r.kt)("p",null,"Starting with go-spacemesh version 1.4.4, it's safe to use distributed verification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"post": { "post-k3": 1 }\n')),(0,r.kt)("p",null,"This configuration allows your node to verify only a subset of labels (",(0,r.kt)("inlineCode",{parentName:"p"},"1")," in the example) and rely on other nodes to validate the remaining ones. Because different nodes will pick up different subsets of labels with the requested size, it's also safe to enable this on public nodes to limit the CPU resources needed."),(0,r.kt)("h3",{id:"verifying-workers"},"Verifying workers"),(0,r.kt)("p",null,"Wherever your node will get new ATX it needs to validate it. This is done by the verifying workers. By default there are half of the CPU cores assigned workers that are used to validate the ATXs. You can set the number of workers by setting the following config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"smeshing":\n  {\n    "smeshing-verifying-opts":\n      {\n        "smeshing-opts-verifying-min-workers": 1,\n        "smeshing-opts-verifying-workers": 12,\n      },\n  }\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"smeshing-opts-verifying-min-workers")," defines the minimal number of workers. Node will automatically scale down to that number WHEN it's proving. When it's not proving it will use up to ",(0,r.kt)("inlineCode",{parentName:"p"},"smeshing-opts-verifying-workers")," workers."),(0,r.kt)("p",null,"In order to minimize system impact, ",(0,r.kt)("inlineCode",{parentName:"p"},"smeshing-opts-verifying-min-workers")," can be configured to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"smeshing-opts-verifying-workers")," can also be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". While these settings ensure the lowest strain on system resources, it is important to note that they will result in slower ATX (Activation Transaction) verification, consequently affecting the synchronization speed."),(0,r.kt)("p",null,"For those who are actively smeshing on the node, it is advisable to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"smeshing-opts-verifying-workers")," to the same value as ",(0,r.kt)("inlineCode",{parentName:"p"},"smeshing-opts-proving-workers"),". This configuration is optimal for reducing the potential negative performance impact on smeshing for other nodes, particularly if the given node has completed its proof of space-time."),(0,r.kt)("h3",{id:"randomx-fast-mode"},"RandomX fast mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"smeshing":\n  { "smeshing-verifying-opts": { "smeshing-opts-verifying-powflags": 14 } }\n')),(0,r.kt)("p",null,"Similarly as in the previous section you can set the RadomX mode. RandomX is also used with every incoming ATX. Setting that to ",(0,r.kt)("inlineCode",{parentName:"p"},"14")," from the default ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," makes it significanly faster but in expense of 2GiB extra ram used. In most setups that's not needed but if you have spare ram then it's safe to use."),(0,r.kt)("h4",{id:"performance-optimizations-while-running-public-private-nodes-setup"},"Performance optimizations while running public-private nodes setup"),(0,r.kt)("p",null,"If you're running a public-private nodes setup, you may wish to tweak the following settings to improve the CPU resource usage of your ",(0,r.kt)("strong",{parentName:"p"},"private")," nodes."),(0,r.kt)("h5",{id:"disabling-verifying-post-on-private-nodes"},"Disabling verifying POST on private nodes"),(0,r.kt)("p",null,"Verification of POST proofs in ATX that come from the network is significantly hard work for the CPU. In a setup where only some nodes are public, it makes no sense to repeat this work on the private nodes if they can trust the public nodes to do the work honestly."),(0,r.kt)("p",null,"Post verification can be disabled completely on selected nodes by using ",(0,r.kt)("inlineCode",{parentName:"p"},"--smeshing-opts-verifying-disable")," CLI flag or the following config entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "smeshing": {\n    "smeshing-verifying-opts": {\n      "smeshing-opts-verifying-disable": true\n    }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!WARNING]","\nUsing this is safe ",(0,r.kt)("strong",{parentName:"p"},"only on the private")," nodes because the ",(0,r.kt)("strong",{parentName:"p"},"public")," node will verify ATXs for it. Given that the private nodes are only connected to public nodes, there is no risk involved here. It is strongly ",(0,r.kt)("strong",{parentName:"p"},"discouraged")," to use this setting on ",(0,r.kt)("strong",{parentName:"p"},"public")," nodes.")),(0,r.kt)("h5",{id:"changing-k3-parameter"},"Changing k3 parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"post": { "post-k3": 0 }\n')),(0,r.kt)("p",null,"It will significantly lower the CPU requirements while verifying the incoming ATXs."),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"k3")," parameter is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"k2")," which is currently 37. Setting it to a lower value than 37 will check fewer labels in the proofs and therefore speed up the checks. The downside is that it will lower the security of the ATX verification. The lower the value the lower the security. Setting it to 0 will disable the proof labels verification completely. The node will still verify the k2pow with RandomX though."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!WARNING]","\nSetting k3 to 0 is safe to use on ",(0,r.kt)("strong",{parentName:"p"},"only on the private")," nodes because the ",(0,r.kt)("strong",{parentName:"p"},"public")," node will verify whole proofs and not just one label as set in the config above. And given that the private nodes are only connected to public nodes then there is no risk involved here. It is strongly ",(0,r.kt)("strong",{parentName:"p"},"discouraged")," to use this setting on ",(0,r.kt)("strong",{parentName:"p"},"public")," nodes.")),(0,r.kt)("h5",{id:"randomx-fast-mode-1"},"RandomX Fast mode"),(0,r.kt)("p",null,"To improve ATX verification speed on ",(0,r.kt)("strong",{parentName:"p"},"public")," nodes you can use the following setting. It will require roughly additional 2GB of RAM per node used only during ATX verification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"smeshing":\n  { "smeshing-verifying-opts": { "smeshing-opts-verifying-powflags": 14 } }\n')),(0,r.kt)("p",null,"If you have spare ram on the private nodes then that setting is safe to set there too. Please remember about the requirement of 2GiB extra memory per node though."))}c.isMDXComponent=!0}}]);