"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[496],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var i=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,u=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?i.createElement(u,r(r({ref:t},m),{},{components:n})):i.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(8168),a=(n(6540),n(5680));const o={id:"equivocation",title:"Avoiding Equivocation"},r=void 0,s={unversionedId:"start/smeshing/smeshing_adv/equivocation",id:"start/smeshing/smeshing_adv/equivocation",title:"Avoiding Equivocation",description:"There's a very small set of behaviors that a miner in Spacemesh is punished for. If a miner simply goes offline or fails",source:"@site/docs/start/smeshing/smeshing_adv/equivocation.md",sourceDirName:"start/smeshing/smeshing_adv",slug:"/start/smeshing/smeshing_adv/equivocation",permalink:"/docs/start/smeshing/smeshing_adv/equivocation",draft:!1,tags:[],version:"current",frontMatter:{id:"equivocation",title:"Avoiding Equivocation"},sidebar:"start",previous:{title:"Fine-Tuning Node Performance",permalink:"/docs/start/smeshing/smeshing_adv/performance"},next:{title:"State Verification",permalink:"/docs/start/smeshing/smeshing_adv/verification"}},l={},c=[{value:"Moving an Identity",id:"moving-an-identity",level:3},{value:"Generating Multiple Identities",id:"generating-multiple-identities",level:3}],m={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,i.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"There's a very small set of behaviors that a miner in Spacemesh is punished for. If a miner simply goes offline or fails\nto publish a proposal when they're eligible to do so they'll miss some rewards but they're not punished per se. However,\nif a miner double votes, otherwise known as equivocation, their miner identity is permanently disqualified from\nparticipation in consensus and from earning rewards in the future. In a permissionless blockchain like Spacemesh,\nequivocation is a serious offense that can have severe negative ramifications for the entire network, so this behavior\ncannot go unsanctioned. Once a miner's identity has been cancelled their PoST data is effectively useless. They must\ngenerate a new identity and reinitialize their PoST data. For more information, see\n",(0,a.yg)("a",{parentName:"p",href:"https://spacemesh.io/blog/community-clarification-equivocation/"},"Community Clarification: Equivocation"),"."),(0,a.yg)("p",null,"It's not difficult to avoid equivocation: simply make sure that the same identity is never attached to two running nodes\nat the same time. Extra care must be taken any time a miner identity or its PoST data are copied or moved\n(since the miner identity lives in the PoST data directory)."),(0,a.yg)("h3",{id:"moving-an-identity"},"Moving an Identity"),(0,a.yg)("p",null,"When moving a miner identity from one place to another, ",(0,a.yg)("strong",{parentName:"p"},"perform the following steps in the following order:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Shut down the miner")," in the source location"),(0,a.yg)("li",{parentName:"ol"},"Copy the files to the new location (see previous section)"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Double-check that the old miner was shut down.")," Check again one more time to make sure. If you get this part\nwrong, you risk permanently disqualifying the miner identity for equivalence and invalidation of the PoST data."),(0,a.yg)("li",{parentName:"ol"},"Make sure the ",(0,a.yg)("inlineCode",{parentName:"li"},"local.key")," file is intact in the new location. Compare it to the ",(0,a.yg)("inlineCode",{parentName:"li"},"local.key")," file in the old\nlocation and make sure the contents are the same. Delete the old ",(0,a.yg)("inlineCode",{parentName:"li"},"local.key")," file, or at the very least, rename it\nor move it to ensure that you don't accidentally run the same identity again on the old system."),(0,a.yg)("li",{parentName:"ol"},"Start the miner in the new location. Make sure that you specify the correct ",(0,a.yg)("inlineCode",{parentName:"li"},"smeshing-opts-datadir")," in the config,\nand make sure that the other ",(0,a.yg)("inlineCode",{parentName:"li"},"smeshing-opts")," are the same as they were in the old system, and that they match the\ncontents of the ",(0,a.yg)("inlineCode",{parentName:"li"},"postdata_metadata.json")," file in the PoST datadir. Make sure that the miner found the data and was\nable to read it. (You should see the messages ",(0,a.yg)("inlineCode",{parentName:"li"},"post setup completed"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"loaded the initial post from disk"),", and\n",(0,a.yg)("inlineCode",{parentName:"li"},"verifying the initial post")," in the log.)")),(0,a.yg)("h3",{id:"generating-multiple-identities"},"Generating Multiple Identities"),(0,a.yg)("p",null,"You can use one system to generate multiple PoST identities - this is a common usage pattern for a user who wants to,\ne.g., generate multiple identities on a system with a GPU, then transfer them to other systems. However, once you've\nmoved the PoST data files (",(0,a.yg)("inlineCode",{parentName:"p"},"postdata_*.bin"),") to their new location, and copied the associated ",(0,a.yg)("inlineCode",{parentName:"p"},"local.key")," as well,\n",(0,a.yg)("strong",{parentName:"p"},"make absolutely certain that ",(0,a.yg)("inlineCode",{parentName:"strong"},"local.key")," has been removed")," in the source location. If the file still exists, the\nnext PoST identity you generate will be identical to the prior one and equivocation may occur as a result."))}h.isMDXComponent=!0}}]);