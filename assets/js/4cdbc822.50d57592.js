"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),c=r,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var h=2;h<i;h++)a[h]=n[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=n(7462),r=(n(7294),n(3905));const i={id:"poet",title:"PoET Servers"},a=void 0,s={unversionedId:"start/smesher/poet",id:"start/smesher/poet",title:"PoET Servers",description:'As described in our introduction to Proof of Elapsed Time, the Spacemesh protocol depends for security not only upon committed disk space but also elapsed time (the time dimension in proofs of spacetime). For the time component, miners rely on a third-party service called a PoET ("proof of elapsed time") server.',source:"@site/docs/start/smesher/poet.md",sourceDirName:"start/smesher",slug:"/start/smesher/poet",permalink:"/docs/start/smesher/poet",draft:!1,tags:[],version:"current",frontMatter:{id:"poet",title:"PoET Servers"},sidebar:"start",previous:{title:"API",permalink:"/docs/start/smesher/api"},next:{title:"Networking",permalink:"/docs/start/smesher/networking"}},l={},h=[{value:"Ticks and Weight",id:"ticks-and-weight",level:2},{value:"Timing",id:"timing",level:2},{value:"Running a PoET Server",id:"running-a-poet-server",level:2},{value:"Updating the configuration of a node to use different PoETs",id:"updating-the-configuration-of-a-node-to-use-different-poets",level:2},{value:"Switching phase",id:"switching-phase",level:3},{value:"Timing a phase switch",id:"timing-a-phase-switch",level:3}],p={toc:h};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As described in our introduction to ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/poet"},"Proof of Elapsed Time"),", the Spacemesh protocol depends for security not only upon committed ",(0,r.kt)("em",{parentName:"p"},"disk space")," but also ",(0,r.kt)("em",{parentName:"p"},"elapsed time"),' (the time dimension in proofs of spacetime). For the time component, miners rely on a third-party service called a PoET ("proof of elapsed time") server.'),(0,r.kt)("p",null,"Note: Anyone can run their own PoET server, but this is non-trivial, expensive, and requires specialized hardware and devops. More importantly, a single PoET server can serve proofs to thousands of miners. Since the PoET server performs intensive, expensive computation on behalf of the miners it serves, and since a miner only needs a single PoET proof for a given epoch, it's more efficient and less energy intensive to run a small number of PoET servers rather than having each miner run their own."),(0,r.kt)("p",null,"In general miners don't need to think very much about PoET servers. The node (whether running Smapp or ",(0,r.kt)("inlineCode",{parentName:"p"},"go-spacemesh")," directly) manages the process of discovering PoET servers, registering with them, and retrieving proofs when they're ready. The node is also intelligent enough to register with many PoET servers redundantly so that if one server goes offline, it'll still be able to retrieve a proof from another PoET server."),(0,r.kt)("h2",{id:"ticks-and-weight"},"Ticks and Weight"),(0,r.kt)("p",null,"Miners establish eligibility to submit proposals and thus earn rewards by bundling their proofs of spacetime into a data structure known as an ATX. As also ",(0,r.kt)("a",{parentName:"p",href:"#atxs-and-weight"},"described above"),", each ATX has a certain ",(0,r.kt)("strong",{parentName:"p"},"weight")," which is simply calculated as the number of storage units proven multiplied by the tick count from the PoET proof (as a proxy for time). Rewards earned by a miner in a given epoch are ultimately proportional to the weight of their ATX targeting that epoch. Thus, if a miner uses a PoET proof with fewer ticks, it'll earn proportionally fewer rewards for at least the duration of one epoch; the reverse is also true."),(0,r.kt)("p",null,"Note that, in addition to retrieving proofs from multiple PoET servers, the node is also intelligent enough to use the proof with the highest tick count to ensure that it maximizes its rewards."),(0,r.kt)("h2",{id:"timing"},"Timing"),(0,r.kt)("p",null,"The Spacemesh team currently operates several production PoET servers for public use. (Their addresses are hardcoded into the ",(0,r.kt)("inlineCode",{parentName:"p"},"poet-server")," section of the ",(0,r.kt)("a",{parentName:"p",href:"#config"},"mainnet config file"),"):"),(0,r.kt)("p",null,'These PoET servers all operate on exactly the same schedule. In order to establish eligibility for epoch N, a miner must register with a PoET round in epoch N-2, then retrieve the PoET proof, use it to generate a PoST proof, bundle this into an ATX, and submit it to the network prior to the end of epoch N-1. The Spacemesh PoET servers start a new round at 8:00 UTC the second Monday of an epoch, i.e., four days prior to the end of the epoch. This round concludes 13.5 days later, at 20:00 UTC on Sunday. There\'s subsequently a 12 hour "cycle gap" during which no PoET round is running, after which the next PoET round kicks off and the cycle repeats itself. During this 12 hour window, all mining nodes must retrieve their PoET proof from a PoET server, use it to generate a PoST proof, bundle this into an ATX, broadcast the ATX to the network, and then register with the PoET again in order to maintain continuous eligibility.'),(0,r.kt)("p",null,"This schedule is admittedly confusing; you may find ",(0,r.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0/embed?src=8895d862c4a9ac22c8da2dafd9c618cd47e5c2d22905f920b1231a3b02aacd62@group.calendar.google.com"},"this unofficial calendar")," and the header graphic in ",(0,r.kt)("a",{parentName:"p",href:"https://spacemesh.io/blog/genesis-timeline/"},"this blog post")," helpful in visualizing it. To reiterate, in most cases miners don't need to concern themselves with the PoET schedule since their node will handle everything for them. The most important thing is that the node remain running and online throughout the epoch so that PoET windows aren't missed and continuous eligibility is maintained."),(0,r.kt)("p",null,"Note that in future it's likely that, rather than all PoET servers running in identical phase, there will be PoET servers running in different phases, possibly also with different cycle gap lengths, to accommodate miners that need more time to generate a PoST proof or that simply miss a PoET registration window."),(0,r.kt)("h2",{id:"running-a-poet-server"},"Running a PoET Server"),(0,r.kt)("p",null,"As with the rest of Spacemesh infrastructure, the PoET server is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/poet"},"open source")," and permissionless. Anyone may run their own PoET server for personal or community use."),(0,r.kt)("p",null,"For more information see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/poet/blob/develop/docs/poet_operator_manual.md"},"PoET Operator Manual")," and feel free to ask questions on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/623195163510046732/1151165793590050867"},"#poet channel")," on Discord."),(0,r.kt)("h2",{id:"updating-the-configuration-of-a-node-to-use-different-poets"},"Updating the configuration of a node to use different PoETs"),(0,r.kt)("p",null,"Spacemesh users are free to use any PoET they want to. You can add PoETs to the existing list of your nodes configuration or even completely replace it with another set of PoETs."),(0,r.kt)("p",null,"Adding a PoET with the same phase as the node is currently using simple; stop the node, update the configuration by adding the new PoET to the list of existing PoETs (and remove any you wish not to use), then start the node again. When the next PoET round starts the node will start using the new set PoET as given by its configuration."),(0,r.kt)("h3",{id:"switching-phase"},"Switching phase"),(0,r.kt)("p",null,"If you wish to switch to one or multiple PoETs that operate on a different phase then the default set of PoETs ensure\nthat your node and the PoET(s) you are using have the following configuration parameters set to the same values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"phase-shift"'),": gives the time that a new PoET round starts relative to the beginning of an epoch. For the default\nset of PoETs this value is 240 hours. Lower values mean that nodes starting to use your PoET have to wait longer before\nthey become eligible to collect rewards, higher values mean that nodes have less time after fetching a PoET proof to\npublish their ATX to be eligible to collect rewards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"cycle-gap"'),": gives the time between the end of a PoET round and the start of a new one. Larger values give nodes\nmore time to generate a PoST proof - since this has to happen within the cycle gap to not miss an epoch. Smaller values\ngives the PoET more time to generate its proof and collect more ticks. For the default set of PoETs this value is\n12 hours.")),(0,r.kt)("p",null,"Additionally you should ensure that a custom PoET has the same ",(0,r.kt)("inlineCode",{parentName:"p"},'"genesis-time"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"epoch-duration"')," as mainnet\n(",(0,r.kt)("inlineCode",{parentName:"p"},'"2023-07-14T08:00:00Z"')," and 336 hours respectively)."),(0,r.kt)("p",null,"For a step by step instruction see ",(0,r.kt)("a",{parentName:"p",href:"#timing-a-phase-switch"},"Timing a phase switch"),"."),(0,r.kt)("h3",{id:"timing-a-phase-switch"},"Timing a phase switch"),(0,r.kt)("p",null,"Switching phase bears the risk of missing a PoET round and thereby forfeiting your eligibility to collect rewards in an\nupcoming epoch. To mitigate this risk you should time your phase switch and follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait until the end of the PoET round of the phase you are currently using.\nIf you are using the default PoETs this would be every second Sunday (e.g. Feb 5th, 2024) at 20:00 UTC.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your node will fetch the PoET proof(s) for all PoETs it successfully registered for.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait until your node has finished generating a PoST proof and published an ATX (check logs for ",(0,r.kt)("inlineCode",{parentName:"p"},"ATX published"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the node.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update your node configuration by replacing the PoET(s) in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," with the new one(s).\nMake sure that all PoETs you are using have the same phase and cycle gap and that you also update the\n",(0,r.kt)("inlineCode",{parentName:"p"},'"phase-shift"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"cycle-gap"')," settings in your config accordingly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you do not have sqlite installed on your system, install it now.\nOn Windows you can download it from ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/download.html"},"here"),", you will need ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite-tools-win-x64"),".\nOn Ubuntu you can install it with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt install sqlite3"),".\nOn macOS you can install it via Homebrew with ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install sqlite3"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the contents of the tables ",(0,r.kt)("inlineCode",{parentName:"p"},"poet_registration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nipost"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> sqlite3 <node_config_directory>/node_state.sql\nsqlite> delete from poet_registration;\nsqlite> delete from nipost;\nsqlite> .quit\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the node again."))),(0,r.kt)("p",null,"If the new phase has not started yet your node will register at the new PoET(s) immediately and fetch a PoET proof in\ntime to be eligible to collect rewards in the next epoch. If by the time you restarted your node the new phase has already\nstarted your node will register at the new PoET(s) in the next epoch and you will miss one epoch of rewards (the second\nnext epoch)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": Before v1.3.x PoET registration state was stored in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"nipost_challenge.bin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nipost_builder_state.bin"),"\nin the node's PoST data directory. If you are using a node version older than v1.3.x you will have to delete these files\ninstead of the sqlite tables (steps 6 and 7)."))}d.isMDXComponent=!0}}]);