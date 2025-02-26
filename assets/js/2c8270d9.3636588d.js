"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9956],{5680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>g});var o=n(6540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=c(n),u=s,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?o.createElement(g,r(r({ref:t},h),{},{components:n})):o.createElement(g,r({ref:t},h))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:s,r[1]=a;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(8168),s=(n(6540),n(5680));const i={},r="Node split PoC",a={unversionedId:"experimental/node-split-poc",id:"experimental/node-split-poc",title:"Node split PoC",description:"In our ongoing effort to lower the bar for smeshing, we're exploring a new direction for reducing system requirements for smeshers. The idea is to re-architect the internal modules in go-spacemesh, isolating the smeshing logic from the passive consensus code. By dividing the node along these lines, we can enable users to run the lightweight yet sensitive (requiring access to the private key) smeshing logic separately from the rest of the node. This allows users with limited resources to use a remote node for their smeshing.",source:"@site/docs/experimental/node-split-poc.md",sourceDirName:"experimental",slug:"/experimental/node-split-poc",permalink:"/docs/experimental/node-split-poc",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/experimental/node-split-poc.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Running the PoC",id:"running-the-poc",level:2},{value:"Using locally running node and smesher service",id:"using-locally-running-node-and-smesher-service",level:3},{value:"Using remote running node and local smesher service",id:"using-remote-running-node-and-local-smesher-service",level:3},{value:"Starting the setup",id:"starting-the-setup",level:3},{value:"Interacting with the PoC",id:"interacting-with-the-poc",level:2},{value:"Stopping the setup",id:"stopping-the-setup",level:2},{value:"Extra content",id:"extra-content",level:2},{value:"What are these magic ports used in the docker-compose files?",id:"what-are-these-magic-ports-used-in-the-docker-compose-files",level:3},{value:"What about the <code>--json-cors-everywhere</code> flag?",id:"what-about-the---json-cors-everywhere-flag",level:3},{value:"Running the PoC without Docker",id:"running-the-poc-without-docker",level:3},{value:"Why the config is that big?",id:"why-the-config-is-that-big",level:3}],h={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,s.yg)(p,(0,o.A)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"node-split-poc"},"Node split PoC"),(0,s.yg)("p",null,"In our ongoing effort to lower the bar for smeshing, we're exploring a new direction for reducing system requirements for smeshers. The idea is to re-architect the internal modules in go-spacemesh, isolating the smeshing logic from the passive consensus code. By dividing the node along these lines, we can enable users to run the lightweight yet sensitive (requiring access to the private key) smeshing logic separately from the rest of the node. This allows users with limited resources to use a remote node for their smeshing."),(0,s.yg)("p",null,"We demonstrate a PoC of the node split, where the smeshing logic is separated from the rest of the node. The PoC is based on the current go-spacemesh codebase and is intended to demonstrate the feasibility of the node split concept. The PoC is not intended to be a production-ready implementation."),(0,s.yg)("p",null,"The PoC itself is still a work in progress so please expect changes and improvement in the future."),(0,s.yg)("p",null,"The architecture of the PoC is as follows:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"design.png",src:n(7441).A,width:"2279",height:"1535"})),(0,s.yg)("p",null,"The PoC consists of two separate processes:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"node service")," aka node"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"smesher service")," aka client")),(0,s.yg)("p",null,"The easiest way to understand the setup is to try the PoC yourself. The following instructions will guide you through the process."),(0,s.yg)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,s.yg)("p",null,"It's best to watch the ",(0,s.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=d4jBz1krRHg"},"video")," to get a better understanding of the problem and our reasoning behind the node split."),(0,s.yg)("p",null,"The current go-spacemesh node is a monolithic application that includes all the logic required for consensus, smeshing, and other services. This makes it difficult to run the node on low-resource devices, as the node requires a significant amount of resources to run. By splitting the node into two separate services, we can enable users to run the smeshing logic on a separate device, while still connecting to a remote node for the rest of the services. This allows users to run the node on low-resource devices, while still participating in the Spacemesh network."),(0,s.yg)("h3",{id:"benefits"},"Benefits"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Lower system requirements"),": Users can run the smesher service on low-resource devices while connecting to a more powerful node for the rest of the services."),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Better failover and redundancy"),": Currently when you need to restart a node you also need to restart the smesher service. With the node split you can restart the node without affecting the smeshing process. Starting smeshing will be also much quicker because it will ",(0,s.yg)("em",{parentName:"li"},"not")," need to wait for the node to sync or warmup in-memory caches from the DB as the node will be running elsewhere. Multiple smesher services can be connected to the same node, and nodes can be hot-swapped without affecting the smeshing process."),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Lower OpEx"),": Smesher service can be shut down wherever not needed to save costs and resources. Additionally, only a single node is required for multiple smeshing services and it can run where it's the most cost-effective, which is not necessarily where the smeshing service runs."),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Better node maintainability"),": The node can be updated without affecting the smeshing process and the smeshing service can be updated without re-syncing. This makes updates simpler and less risky.")),(0,s.yg)("h2",{id:"running-the-poc"},"Running the PoC"),(0,s.yg)("p",null,"There are two distinct configuration/setup methods possible:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Using locally running node and smesher service"),(0,s.yg)("li",{parentName:"ol"},"Using remote running node and local smesher service")),(0,s.yg)("p",null,"We will use a Docker Compose-based setup for both options. While it's possible to run the PoC without Docker, it's more complicated, so for simplicity, we'll use Docker."),(0,s.yg)("p",null,"Both setups will run two smesher services connecting to the same node. Please note that one smesher service can have multiple post services connected to it as is currently the case with node and post services. However, in this PoC we're using only one post service per smesher service."),(0,s.yg)("h3",{id:"using-locally-running-node-and-smesher-service"},"Using locally running node and smesher service"),(0,s.yg)("p",null,"Please use the ",(0,s.yg)("inlineCode",{parentName:"p"},"docker-compose-testnet-both-local.yml")," file for this setup."),(0,s.yg)("p",null,"The commands will be:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"docker compose -f docker-compose-testnet-both-local.yml [...]\n")),(0,s.yg)("p",null,"Since this will be a locally running node, it will need to sync with the network like all Spacemesh nodes. The testnet network is small, so the node should sync relatively quickly."),(0,s.yg)("h3",{id:"using-remote-running-node-and-local-smesher-service"},"Using remote running node and local smesher service"),(0,s.yg)("p",null,"Please use the ",(0,s.yg)("inlineCode",{parentName:"p"},"docker-compose-testnet-remote-node.yml")," file for this setup."),(0,s.yg)("p",null,"The commands will be:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"docker compose -f docker-compose-testnet-remote-node.yml [...]\n")),(0,s.yg)("h3",{id:"starting-the-setup"},"Starting the setup"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Clone the repository and switch to the ",(0,s.yg)("inlineCode",{parentName:"li"},"node-split-poc")," branch")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"git clone https://github.com/spacemeshos/go-spacemesh.git\ncd go-spacemesh\ngit checkout node-split-poc\n")),(0,s.yg)("ol",{start:2},(0,s.yg)("li",{parentName:"ol"},"Change the directory to the demo directory")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"cd activation_service_poc/demo\n")),(0,s.yg)("ol",{start:3},(0,s.yg)("li",{parentName:"ol"},"You should see the following files in the directory")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"docker-compose-testnet-both-local.yml\ndocker-compose-testnet-remote-node.yml\n")),(0,s.yg)("ol",{start:4},(0,s.yg)("li",{parentName:"ol"},"Run the docker-compose command according to your chosen setup. For example, to run the setup with remote node and smesher service, run:")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"docker-compose -f docker-compose-testnet-remote-node.yml up -d\n")),(0,s.yg)("p",null,"After all the steps are done please give each smesher service a while to initialize POST and generate initial post proof. This may take up to a few minutes."),(0,s.yg)("p",null,"If all steps are followed correctly, you should see three new Docker containers running. You can check the status of the containers using:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'$ docker compose -f docker-compose-testnet-remote-node.yml ps\nNAME                                 IMAGE                                    COMMAND                  SERVICE                       CREATED          STATUS          PORTS\ndemo-activation-service-remote-1-1   spacemeshos/go-spacemesh-dev:2c898bb30   "/bin/go-spacemesh -\u2026"   activation-service-remote-1   39 minutes ago   Up 39 minutes\ndemo-activation-service-remote-2-1   spacemeshos/go-spacemesh-dev:2c898bb30   "/bin/go-spacemesh -\u2026"   activation-service-remote-2   39 minutes ago   Up 39 minutes\n')),(0,s.yg)("p",null,"You'll also be able to connect to the node's UI by visiting ",(0,s.yg)("inlineCode",{parentName:"p"},"https://smesher-alpha.spacemesh.network/")," in your browser. This is a PoC of the smesher service UI and is not intended to be a production-ready implementation. It uses the smesher service API directly to interact with the smesher service. It's fully open source and the code can be found ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/smesher-app"},"here"),"."),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"[!NOTE]","\nIf you're running on Mac with Apple Silicon you need to build the docker images yourself by running: ",(0,s.yg)("inlineCode",{parentName:"p"},"make dockerbuild-go")," in the go-spacemesh repo.")),(0,s.yg)("p",null,"The first time you open the UI it will be mostly empty as you're running a fresh smeshing service and therefore don't yet have eligibility. Testnet epochs are 24 hours long, so you'll need to wait for the next epoch to start smeshing. You can check the epoch number and exact timing in the UI."),(0,s.yg)("p",null,"Initially, it will look like:\n",(0,s.yg)("img",{alt:"initial-app-state.png",src:n(8781).A,width:"2492",height:"1214"})),(0,s.yg)("p",null,"After a few epochs, you should see a UI that looks similar to:\n",(0,s.yg)("img",{alt:"smesher-app.png",src:n(1212).A,width:"2532",height:"2640"})),(0,s.yg)("h2",{id:"interacting-with-the-poc"},"Interacting with the PoC"),(0,s.yg)("p",null,"The smesher service proxies v2 API calls to the node service. You can query the smesher service API to interact with the attached node. For example:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"curl -X POST http://localhost:19171/spacemesh.v2alpha1.NodeService/Status\n")),(0,s.yg)("p",null,"will return the node's status."),(0,s.yg)("p",null,"In addition to the existing v2 API, there is ",(0,s.yg)("inlineCode",{parentName:"p"},"spacemesh.v2alpha1.SmeshingIdentitiesService/States")," which returns the list of smeshing identities and their detailed states."),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"[!NOTE]","\nPlease note that currently the state persistence is implemented with some simplifications. States persist across restarts but you will see some duplicates in the list of states. This is a known issue that will be fixed in the final implementation.")),(0,s.yg)("h2",{id:"stopping-the-setup"},"Stopping the setup"),(0,s.yg)("p",null,"To stop all the containers you can use the following command:"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"docker compose -f docker-compose-testnet-both-local.yml down")),(0,s.yg)("h2",{id:"extra-content"},"Extra content"),(0,s.yg)("h3",{id:"what-are-these-magic-ports-used-in-the-docker-compose-files"},"What are these magic ports used in the docker-compose files?"),(0,s.yg)("p",null,"All ports except the one ending with ",(0,s.yg)("inlineCode",{parentName:"p"},"99")," are standard ports used in normal/current go-spacemesh setups. The port ending with ",(0,s.yg)("inlineCode",{parentName:"p"},"99")," is used by the node to expose its API for the smesher service. This port number may change in the future, as it was selected specifically for this PoC.\nThese different APIs will likely be combined under the same endpoint later, but for simplicity and flexibility they are separated in this PoC."),(0,s.yg)("h3",{id:"what-about-the---json-cors-everywhere-flag"},"What about the ",(0,s.yg)("inlineCode",{parentName:"h3"},"--json-cors-everywhere")," flag?"),(0,s.yg)("p",null,"This is a new flag introduced for the PoC. It configures the node to add CORS headers to all responses, which allows the browser-based UI to query the smesher service API.\nWhile this is not a final solution and will be replaced with a more secure one in the future, please note that this API does not expose any sensitive data."),(0,s.yg)("h3",{id:"running-the-poc-without-docker"},"Running the PoC without Docker"),(0,s.yg)("p",null,"Use the attached configs, replicate the command line, and run the binary files:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Download the most recent release of node-split-poc go-spacemesh from the ",(0,s.yg)("a",{parentName:"li",href:"https://github.com/spacemeshos/go-spacemesh/releases"},"releases page")," and look for ",(0,s.yg)("inlineCode",{parentName:"li"},"node-split-poc")," releases."),(0,s.yg)("li",{parentName:"ol"},"Extract the archive and copy the config files (*.json)"),(0,s.yg)("li",{parentName:"ol"},"Run the binary or binaries using the same commands specified in the docker-compose file.")),(0,s.yg)("h3",{id:"why-the-config-is-that-big"},"Why the config is that big?"),(0,s.yg)("p",null,"The actual differences to the default config are pretty minimal."),(0,s.yg)("p",null,"The most important is the addition of ",(0,s.yg)("inlineCode",{parentName:"p"},'"node-service-address": "http://0.0.0.0:9099"')," in the ",(0,s.yg)("inlineCode",{parentName:"p"},"main")," section, and the definition of ",(0,s.yg)("inlineCode",{parentName:"p"},'"grpc-local-services": ["smeshing_identities_v2alpha1"]')," in the ",(0,s.yg)("inlineCode",{parentName:"p"},"api")," section."))}d.isMDXComponent=!0},7441:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/design-30f55a0f951a0138706f7c3ff614da8b.png"},8781:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/initial-app-state-5d8bface90b3a69c57480f40e89be955.png"},1212:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/smesher-app-092c8264bfc002c5f75b1f1059006d99.png"}}]);