"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=h(n),c=r,u=d["".concat(l,".").concat(c)]||d[c]||g[c]||i;return n?o.createElement(u,a(a({ref:t},p),{},{components:n})):o.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var h=2;h<i;h++)a[h]=n[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=n(8168),r=(n(6540),n(5680));const i={id:"poet",title:"PoET Configuration"},a=void 0,s={unversionedId:"start/smeshing/smeshing_adv/poet",id:"start/smeshing/smeshing_adv/poet",title:"PoET Configuration",description:"As described in the PoST explainer, for its security, the Spacemesh protocol relies not only on committed disk space but also on elapsed time (the time dimension in the Proofs of Space-Time). For the time component, smeshers rely on a third-party service called a PoET server.",source:"@site/docs/start/smeshing/smeshing_adv/poet.md",sourceDirName:"start/smeshing/smeshing_adv",slug:"/start/smeshing/smeshing_adv/poet",permalink:"/docs/start/smeshing/smeshing_adv/poet",draft:!1,tags:[],version:"current",frontMatter:{id:"poet",title:"PoET Configuration"},sidebar:"start",previous:{title:"API",permalink:"/docs/start/smeshing/smeshing_adv/api"},next:{title:"Networking",permalink:"/docs/start/smeshing/smeshing_adv/networking"}},l={},h=[{value:"Ticks and Weight",id:"ticks-and-weight",level:2},{value:"Timing",id:"timing",level:2},{value:"Running a PoET Server",id:"running-a-poet-server",level:2},{value:"Updating the Node Configuration to Use Different PoET Servers",id:"updating-the-node-configuration-to-use-different-poet-servers",level:2},{value:"Switching Phase",id:"switching-phase",level:3},{value:"Timing a Phase Switch",id:"timing-a-phase-switch",level:3}],p={toc:h},d="wrapper";function g(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,o.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"As described in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn/poet"},"PoST explainer"),", for its security, the Spacemesh protocol relies not only on committed ",(0,r.yg)("em",{parentName:"p"},"disk space")," but also on ",(0,r.yg)("em",{parentName:"p"},"elapsed time")," (the time dimension in the Proofs of Space-Time). For the time component, smeshers rely on a third-party service called a PoET server. "),(0,r.yg)("p",null,"Anyone can run their own PoET server, but this is non-trivial, expensive, and requires specialized hardware and DevOps. More importantly, a single PoET server can generate PoETs for thousands of smeshers. Given that the PoET server performs intensive, expensive computation on behalf of the smeshers it serves and a smesher only needs a single PoET proof for a given epoch, it is more efficient and less energy-intensive to run a small number of PoET servers than having each smesher run their own. In general, smeshers do not need to give much thought to PoET servers. The smeshing node (whether ",(0,r.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_basic/setup"},"running Smapp")," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_adv/setup"},(0,r.yg)("inlineCode",{parentName:"a"},"go-spacemesh"))," directly) manages the process of discovering PoET servers, registering with them, and retrieving proofs when they are ready. A node is also intelligent enough to register with many PoET servers redundantly so that if one server goes offline, it will still be able to retrieve the PoET from another PoET server."),(0,r.yg)("h2",{id:"ticks-and-weight"},"Ticks and Weight"),(0,r.yg)("p",null,"Smeshers establish eligibility to submit ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn/atx#block-proposals"},"block proposals")," and earn ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn/rewards"},"rewards")," by bundling their PoSTs into a special data structure known as an ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn/atx"},"Activation Transaction"),"(ATX). Each ATX has a certain ",(0,r.yg)("strong",{parentName:"p"},"weight")," which is simply calculated as the number of Space Units (SUs) proven multiplied by the tick count from the PoET proof (ticks are used as a proxy for the passage of time). Rewards earned by a smesher in a given epoch are ultimately proportional to the weight of their ATX targeting that epoch. Thus, if a smesher uses a PoET with fewer ticks, it will earn proportionally fewer rewards for at least the duration of one epoch (the reverse is also true). Note that, in addition to retrieving PoETs from multiple PoET servers, the node is also intelligent enough to use the proof with the highest tick count to ensure that it maximizes its rewards."),(0,r.yg)("h2",{id:"timing"},"Timing"),(0,r.yg)("p",null,"The Spacemesh team currently operates several PoET servers for public use and their addresses are hardcoded into the ",(0,r.yg)("inlineCode",{parentName:"p"},"poet-server")," section of the mainnet node config file (for Smapp, ",(0,r.yg)("inlineCode",{parentName:"p"},"node-config.7c8cef2b.json"),", for ",(0,r.yg)("inlineCode",{parentName:"p"},"go-spacemesh"),", the file input as the ",(0,r.yg)("inlineCode",{parentName:"p"},"--config")," CLI argument). All PoET servers operate on exactly the same schedule. In order to establish eligibility for epoch N, a smesher must register with a PoET server during the PoET round in epoch N-2. Afterwards, the node must retrieve the PoET proof, use it to generate a PoST proof, bundle this into an ATX, and submit it to the network prior to the end of epoch N-1 (all of this is done automatically by the node)."),(0,r.yg)("p",null,"The Spacemesh PoET servers start a new round at ",(0,r.yg)("strong",{parentName:"p"},"8:00 UTC, the second Monday of an epoch")," (i.e., four days prior to the end of the epoch). Subsequently, there is a 12-hour ",(0,r.yg)("strong",{parentName:"p"},"cycle gap")," window during which no PoET round is running, and after which the next PoET round kicks off and the cycle repeats itself. During this 12-hour window, all smeshing nodes must retrieve their PoET from a PoET server, use it to generate a PoST proof, bundle this into an ATX, broadcast the ATX to the network, and then register with the PoET again in order to maintain continuous eligibility."),(0,r.yg)("p",null,"To better understand the PoET generation and submission schedule, take a look at the figure below:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"The PoET Schedule",src:n(2706).A,width:"2666",height:"1574"})),(0,r.yg)("p",null,"To better prepare for timely PoET submission, you can use ",(0,r.yg)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0/embed?src=8895d862c4a9ac22c8da2dafd9c618cd47e5c2d22905f920b1231a3b02aacd62@group.calendar.google.com"},"this unofficial calendar"),". To reiterate, in most cases, smeshers do not need to concern themselves with the PoET schedule since their node will handle everything for them. The most important thing is that the node remains running and online throughout the epoch so that PoET generation windows are not missed and continuous eligibility is maintained. "),(0,r.yg)("p",null,"In the future, it is likely that instead of all PoET servers running in identical phases, there will be PoET servers running in different phases, possibly also with different cycle gap lengths. This would be to accommodate smeshers that need more time to generate a PoST or who simply miss a PoET registration window."),(0,r.yg)("h2",{id:"running-a-poet-server"},"Running a PoET Server"),(0,r.yg)("p",null,"As with the rest of Spacemesh infrastructure, the PoET server is ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/poet"},"open source")," and permissionless. Anyone may run their own PoET server for personal or community use. For more information, see the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/poet/blob/develop/docs/poet_operator_manual.md"},"PoET Operator Manual")," and feel free to ask questions in the ",(0,r.yg)("a",{parentName:"p",href:"https://discord.com/channels/623195163510046732/1151165793590050867"},"#poet channel")," on Discord."),(0,r.yg)("h2",{id:"updating-the-node-configuration-to-use-different-poet-servers"},"Updating the Node Configuration to Use Different PoET Servers"),(0,r.yg)("p",null,"Smeshers are free to use any PoET server they want. Multiple PoET servers can be added to the existing list of PoET servers in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_basic/advanced_config"},"node configuration file")," or can even completely replace another set of PoET servers."),(0,r.yg)("p",null,"Adding a PoET server with the same phase as the one being used by the smeshing node is simple:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Stop the node."),(0,r.yg)("li",{parentName:"ol"},"Update the configuration by adding the new PoET server to the list of existing servers (and remove any you do not wish to use)."),(0,r.yg)("li",{parentName:"ol"},"Start the node again.")),(0,r.yg)("p",null,"When the next PoET round starts, the node will start using the new set of PoET servers as per the updated configuration."),(0,r.yg)("h3",{id:"switching-phase"},"Switching Phase"),(0,r.yg)("p",null,"If you wish to switch to one or multiple PoET servers that operate on a different phase, then the default set of PoET servers ensures\nthat your node and the PoET server(s) you are using have the following configuration parameters set to the ",(0,r.yg)("em",{parentName:"p"},"same values"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"phase-shift"'),": The time (relative to the beginning of an epoch) when a new PoET round starts. For the default\nset of PoET servers, this value is ",(0,r.yg)("strong",{parentName:"li"},"240 hours"),". Lower values mean that the nodes starting to use the PoET server have to wait longer before\nthey become eligible to collect rewards, while higher values mean that nodes have less time after fetching a PoET to\npublish their ATX to be eligible to collect rewards."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"cycle-gap"'),": The time between the end of a PoET round and the start of a new one. Larger values give nodes\nmore time to generate a PoST - since this has to happen within the cycle gap to not miss an epoch. Smaller values\ngive the PoET server more time to generate the PoET and collect more ticks. For the default set of PoET servers, this value is\n",(0,r.yg)("strong",{parentName:"li"},"12 hours"),".")),(0,r.yg)("p",null,"You should also ensure that any custom PoET has the same ",(0,r.yg)("inlineCode",{parentName:"p"},'"genesis-time"')," and ",(0,r.yg)("inlineCode",{parentName:"p"},'"epoch-duration"')," properties as the  mainnet\n(",(0,r.yg)("inlineCode",{parentName:"p"},'"2023-07-14T08:00:00Z"')," and 336 hours, respectively)."),(0,r.yg)("p",null,"For step-by-step instructions, follow the guide below."),(0,r.yg)("h3",{id:"timing-a-phase-switch"},"Timing a Phase Switch"),(0,r.yg)("p",null,"Switching phase bears the risk of missing a PoET round and thereby forfeiting your eligibility to collect rewards in an\nupcoming epoch. To mitigate this risk, you should properly time your phase switch and follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Wait until the end of the PoET round of the phase you are currently using. If you are using the default PoET servers, this would be every second Sunday of the month at 20:00 UTC."),(0,r.yg)("li",{parentName:"ol"},"Your node will fetch the PoET(s) from all the PoET servers it successfully registered for."),(0,r.yg)("li",{parentName:"ol"},"Wait until your node has finished generating a PoST and has published an ATX (check the logs for ",(0,r.yg)("inlineCode",{parentName:"li"},"ATX published"),")."),(0,r.yg)("li",{parentName:"ol"},"Stop the node."),(0,r.yg)("li",{parentName:"ol"},"Update your node configuration by replacing the PoET server(s) in your node config file with the new one(s). Ensure that all the PoET servers you are using have the same phase and cycle gap values and update the ",(0,r.yg)("inlineCode",{parentName:"li"},'"phase-shift"')," and ",(0,r.yg)("inlineCode",{parentName:"li"},'"cycle-gap"')," properties in your node config file accordingly."),(0,r.yg)("li",{parentName:"ol"},"If you do not have sqlite installed on your system, install it:",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"On Windows, you can download it from ",(0,r.yg)("a",{parentName:"li",href:"https://www.sqlite.org/download.html"},"here")," (you will need ",(0,r.yg)("inlineCode",{parentName:"li"},"sqlite-tools-win-x64"),")."),(0,r.yg)("li",{parentName:"ol"},"On Ubuntu, you can install it via the terminal with ",(0,r.yg)("inlineCode",{parentName:"li"},"sudo apt install sqlite3"),"."),(0,r.yg)("li",{parentName:"ol"},"On macOS, you can install it via the terminal with ",(0,r.yg)("inlineCode",{parentName:"li"},"brew install sqlite3"),"."))),(0,r.yg)("li",{parentName:"ol"},"Delete the contents of the ",(0,r.yg)("inlineCode",{parentName:"li"},"poet_registration")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"nipost")," tables using the following terminal commands:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> sqlite3 <node_config_directory>/node_state.sql\nsqlite> delete from poet_registration;\nsqlite> delete from nipost;\nsqlite> .quit\n"))),(0,r.yg)("li",{parentName:"ol"},"Start the node again.")),(0,r.yg)("p",null,"If the new phase has not started yet, your node will register with the new PoET(s) immediately and fetch a PoET in\ntime to be eligible to collect rewards in the next epoch. If, by the time you have restarted your node the new phase has already\nstarted, your node will register with the new PoET servers in the next epoch and you will miss one epoch of rewards (the epoch\nafter the next one)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": Before ",(0,r.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," v1.3.x, PoET registration state was stored in a file called ",(0,r.yg)("inlineCode",{parentName:"p"},"nipost_challenge.bin")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"nipost_builder_state.bin"),"\ninside the node's PoST data directory. If you are using a node version older than v1.3.x (not recommended, always use the latest version), you will have to delete these files instead of the sqlite tables (steps 6 and 7)."))}g.isMDXComponent=!0},2706:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/PoET_sched-8c29e05fd28c1e487e6b190b9cdd148e.png"}}]);