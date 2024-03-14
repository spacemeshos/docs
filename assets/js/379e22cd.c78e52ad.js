"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={id:"post_1n",title:"Managing Multiple PoST Services On A Single Node"},r=void 0,s={unversionedId:"start/smesher/post_1n",id:"start/smesher/post_1n",title:"Managing Multiple PoST Services On A Single Node",description:"Introduction",source:"@site/docs/start/smesher/post_1n.md",sourceDirName:"start/smesher",slug:"/start/smesher/post_1n",permalink:"/docs/start/smesher/post_1n",draft:!1,tags:[],version:"current",frontMatter:{id:"post_1n",title:"Managing Multiple PoST Services On A Single Node"},sidebar:"start",previous:{title:"Additional Advanced Topics",permalink:"/docs/start/smesher/advanced"},next:{title:"Troubleshooting",permalink:"/docs/start/smesher/troubleshooting"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Initial Setup And Configuration",id:"initial-setup-and-configuration",level:3},{value:"Adding New Identities And PoST Services",id:"adding-new-identities-and-post-services",level:2},{value:"Procedure Overview",id:"procedure-overview",level:3},{value:"Detailed Steps",id:"detailed-steps",level:3},{value:"Migrating Existing Identities/PoST Services",id:"migrating-existing-identitiespost-services",level:2},{value:"Migration Strategy",id:"migration-strategy",level:3},{value:"Step-By-Step Migration",id:"step-by-step-migration",level:3},{value:"Operational Guide",id:"operational-guide",level:2},{value:"Starting And Stopping PoST Services",id:"starting-and-stopping-post-services",level:3},{value:"Stopping PoST Services",id:"stopping-post-services",level:3},{value:"General Tips",id:"general-tips",level:2},{value:"Configuration Flexibility",id:"configuration-flexibility",level:4},{value:"Multiple Directories",id:"multiple-directories",level:4},{value:"Service Management",id:"service-management",level:4},{value:"Verifying the setup",id:"verifying-the-setup",level:3},{value:"Node Events",id:"node-events",level:3},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:3},{value:"Advanced Configurations",id:"advanced-configurations",level:3},{value:"Customizing Settings For Optimal Performance",id:"customizing-settings-for-optimal-performance",level:4},{value:"Smart Orchestration For Running Multiple PoST Services",id:"smart-orchestration-for-running-multiple-post-services",level:4},{value:"FAQs",id:"faqs",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This guide is your roadmap to efficiently managing multiple Proof of Space-Time (PoST) services using just a single node. With the Spacemesh protocol's latest advancements, it's now possible to extend a node's capabilities beyond the previous one-identity-per-node model. It means users can streamline their operations, reduce overhead, and increase their participation in the network without multiplying their hardware or maintenance efforts. This approach requires only one database for all identities, reducing local storage needs and minimizing data broadcasted or fetched from the network. It not only simplifies the lifecycle management of multiple identities but also enhances operational efficiency and network performance. Whether you're looking to add new identities, consolidate existing services, or simply optimize your setup for possibly greater rewards, you're in the right place."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Before diving into managing multiple PoST services on your node, ensure you have the following aspects covered."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Familiarity With CLI Operations:")," Basic knowledge of command-line interfaces (CLI) and blockchain concepts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"System Specifications:")," Ensure your system meets the recommended hardware specifications for running multiple PoST services, including sufficient storage and processing power, as well as OpenCL support."))),(0,a.kt)("h3",{id:"initial-setup-and-configuration"},"Initial Setup And Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Spacemesh Node Setup:")," Ensure your Spacemesh node is operational, utilizing the latest release supporting multiple PoST services (1.4.x series or newer). For detailed setup instructions, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/README.md"},"go-spacemesh documentation"),".")),(0,a.kt)("p",null,"For this feature setup process, make sure your node is not smeshing. You should specify in your config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"smeshing": {\n    "smeshing-start": false\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Software Requirements:")," The latest versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"postcli")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post-service")," from the Spacemesh GitHub repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Your Case:")," Gather info and organize all your node and PoS data paths, POST services configs and details, and hardware access if necessary."))),(0,a.kt)("p",null,"For the sake of conciseness, we assume you have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node-data")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"./node_data")," (specified by ",(0,a.kt)("inlineCode",{parentName:"li"},"--data-folder")," argument)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./node_data/identities/")," directory (create it if it doesn't exist)"),(0,a.kt)("li",{parentName:"ul"},"PoS data in: ",(0,a.kt)("inlineCode",{parentName:"li"},"./data1/")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"./data2/")," directories")),(0,a.kt)("h2",{id:"adding-new-identities-and-post-services"},"Adding New Identities And PoST Services"),(0,a.kt)("h3",{id:"procedure-overview"},"Procedure Overview"),(0,a.kt)("p",null,"Adding new identities and PoST services involves initializing PoST data for each new identity with specific parameters using ",(0,a.kt)("inlineCode",{parentName:"p"},"postcli"),". This process generates a new private key, so a new identity."),(0,a.kt)("h3",{id:"detailed-steps"},"Detailed Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Initialized PoST Data")," : We assume that the data is already intialized. If it's not the case yet then please visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spacemesh.io/docs/start/smesher/post_init"},"docs for that"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Store The Private Key")," : Upon initialization, ",(0,a.kt)("inlineCode",{parentName:"p"},"postcli")," generates a new private key stored as ",(0,a.kt)("inlineCode",{parentName:"p"},"identity.key")," in the PoST data directory. This key should then be moved to your ",(0,a.kt)("inlineCode",{parentName:"p"},"./node_data/identities/")," directory, renamed for unique identification.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure The PoST Service")," : Set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"post-service")," with the newly initialized data, ensuring it's configured to connect to your node. This step integrates the new identity with your node's operational framework."))),(0,a.kt)("h2",{id:"migrating-existing-identitiespost-services"},"Migrating Existing Identities/PoST Services"),(0,a.kt)("h3",{id:"migration-strategy"},"Migration Strategy"),(0,a.kt)("p",null,"Consolidating your Spacemesh identities / PoST services onto a single node streamlines operations and enhances efficiency. The key to a successful migration lies in safely transferring identity keys and PoST data to your chosen node, ensuring no identities are active on more than one node simultaneously to prevent equivocation (the act of a node signing two different blocks at the same layer, which is considered malicious) and being permanently banned and disqualified for rewards."),(0,a.kt)("h3",{id:"step-by-step-migration"},"Step-By-Step Migration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Preparation")," : Before starting, stop all operations on your current nodes to ensure data integrity during the migration. Make sure that all nodes ",(0,a.kt)("em",{parentName:"p"},"were")," running in latest version of Spacemesh newer or equal 1.4.0. This is crucial to avoid any potential issues with the migration process. Nodes that were running 1.3.x series ",(0,a.kt)("strong",{parentName:"p"},"only")," cannot be migrated directly.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the go-spacemesh release you'll find ",(0,a.kt)("inlineCode",{parentName:"p"},"merge-node")," tool. It's a tool that allows you to merge two or more nodes into one. Currently it assumes all or nothing during merging."))),(0,a.kt)("p",null,"Run it with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./merge-node --from <source_path> --to <target_path>\n")),(0,a.kt)("p",null,"Where: ",(0,a.kt)("inlineCode",{parentName:"p"},"source_path")," is the path to the node data you want to merge from and ",(0,a.kt)("inlineCode",{parentName:"p"},"target_path")," is the path to the node data you want to merge to."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It is possible to merge nodes by hand too"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Locate the ",(0,a.kt)("inlineCode",{parentName:"li"},"identity.key")," files within the PoST data directories of each node."),(0,a.kt)("li",{parentName:"ul"},"Copy these files to the ",(0,a.kt)("inlineCode",{parentName:"li"},"./node_data/identities")," directory on the node you're consolidating to."),(0,a.kt)("li",{parentName:"ul"},"Rename the key files respectively for easy identification of each identity."),(0,a.kt)("li",{parentName:"ul"},"Run: ",(0,a.kt)("inlineCode",{parentName:"li"},"sqlite3 target_node.sql")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"target_node.sql")," is the database file of the node you're consolidating to.")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-attach",metastring:"'<source_path.sql>' as srcDB;","'<source_path.sql>'":!0,as:!0,"srcDB;":!0},"BEGIN;\ninsert into initial_post select * from srcDB.initial_post;\ninsert into challenge select * from srcDB.challenge;\ninsert into poet_registration select * from srcDB.poet_registration;\ninsert into nipost select * from srcDB.nipost;\nCOMMIT;\ndetach srcDB;\n")),(0,a.kt)("p",{parentName:"admonition"},"It is however recommended only for advanced users as it does not cover all the corner cases and may lead to data corruption.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure PoST Services")," :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For each identity, set up a PoST service that utilizes the existing PoST data linked to that identity. This ensures the node can continue to participate in the network without redoing the PoST."),(0,a.kt)("li",{parentName:"ul"},"Detailed configuration steps can be found in the ",(0,a.kt)("inlineCode",{parentName:"li"},"post-service")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/spacemeshos/post-rs/blob/main/service/README.md"},"README"),", guiding you through connecting each PoST service to your node.")),(0,a.kt)("h2",{id:"operational-guide"},"Operational Guide"),(0,a.kt)("p",null,":::warning"),(0,a.kt)("p",null,"This is just example, in real world you should use some kind of process manager like ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"supervisord")," to manage your services. Or use some kind of orchestration tool like ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,a.kt)("p",null,":::"),(0,a.kt)("h3",{id:"starting-and-stopping-post-services"},"Starting And Stopping PoST Services"),(0,a.kt)("p",null,"For the prerequisites and initial setup, visit ",(0,a.kt)("inlineCode",{parentName:"p"},"post-service")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs/blob/main/service/README.md"},"README"),"."),(0,a.kt)("p",null,"To start the PoST service, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a directory for post-service and put there the most recent post ",(0,a.kt)("strong",{parentName:"p"},"service")," release from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs"},"post-rs repository"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare command arguments. Remember to ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to the correct directory and ",(0,a.kt)("inlineCode",{parentName:"p"},"chmod")," service file. Then you will need to run the post service with the following arguments:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./service --address=http://localhost:9094 --dir=../data1 --operator-address=127.0.0.1:50051 --threads=1 --nonces=128 --randomx-mode=Fast\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--address"),": Points to the node's gRPC address. Ensure it matches the ",(0,a.kt)("inlineCode",{parentName:"li"},"grpc-post-listener")," config option."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--dir"),": Specifies the directory of PoST data. Adjust the path according to your setup."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--operator-address"),": The address for the simple operator API. Change port numbers as needed for your environment. If it's not specified, it will be disabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--threads"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--nonces"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--randomx-mode"),": Configuration options specific to the post service, not the node."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable debug logs (Optional): For additional logging, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_LOG")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG"),":"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export RUST_LOG=DEBUG\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start the service: Run the command prepared in Step 2. Upon starting, the service will log its configuration and connection attempts to the node. Successful logs will look like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"[INFO  service] POST proving settings: PostSettings { threads: 1, nonces: 128, randomx_mode: Fast }\n[INFO  service] not configuring TLS\n[DEBUG post_service::client] connecting to the node on http://localhost:10094/ (attempt 1)\n")),(0,a.kt)("p",null,"These messages indicate that the PoST service is correctly configured and has started."),(0,a.kt)("h3",{id:"stopping-post-services"},"Stopping PoST Services"),(0,a.kt)("p",null,"To ",(0,a.kt)("strong",{parentName:"p"},"stop")," a PoST service, typically, you would terminate the process using your operating system's standard procedure for stopping applications. For services running in a container or through a managed service, use the appropriate command or interface provided by the environment to safely stop the service. Otherwise, you can follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identify the process: Use a process management command like ",(0,a.kt)("inlineCode",{parentName:"p"},"ps")," to find the process ID (PID) of the post service. You can filter the results using ",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ps aux | grep service\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Terminate the process: Once you've identified the PID, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kill")," command to stop the service:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kill [PID]\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"[PID]")," with the actual process ID of your post service. If the service does not terminate gracefully, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"kill -9 [PID]")," to force it to stop."),(0,a.kt)("h2",{id:"general-tips"},"General Tips"),(0,a.kt)("h4",{id:"configuration-flexibility"},"Configuration Flexibility"),(0,a.kt)("p",null,"You can adjust the PoST service configuration (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"--threads"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--nonces"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--randomx-mode"),") based on your hardware capabilities and preferences."),(0,a.kt)("h4",{id:"multiple-directories"},"Multiple Directories"),(0,a.kt)("p",null,"If you have multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"./dataN")," directories, repeat the starting process for each, adjusting the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dir")," argument accordingly."),(0,a.kt)("h4",{id:"service-management"},"Service Management"),(0,a.kt)("p",null,"Feel free to start, stop, or restart PoST services at any time based on your needs. However, the node should remain running continuously for the system to function properly. Each PoST service exposes operator-api you can use it to query it's state and to stop it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Not doing anything\n\u276f curl http://localhost:50051/status\n"Idle"\n\n# Proving\n\u276f curl http://localhost:50051/status\n{"Proving":{"nonces":{"start":0,"end":128},"position":0}}\n\n# Proving, read some data already\n\u276f curl http://localhost:50051/status\n{"Proving":{"nonces":{"start":0,"end":128},"position":10000}}\n\n# Started second pass\n\u276f curl http://localhost:50051/status\n{"Proving":{"nonces":{"start":128,"end":256},"position":10000}}\n\n# Finished proving, but the node has not fetched the proof yet\n\u276f curl http://localhost:50051/status\n"DoneProving"\n')),(0,a.kt)("p",null,"More info about oprerator API can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs/blob/main/service/README.md#operator-api"},"post-rs repository"),"."),(0,a.kt)("p",null,"Before stopping a post service with ",(0,a.kt)("inlineCode",{parentName:"p"},"DoneProving")," state you need to make sure that node fetched the proof. You can check it by running ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcurl")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl --plaintext localhost:9094 spacemesh.v1.PostInfoService.PostStates\n")),(0,a.kt)("p",null,"if given post service is ",(0,a.kt)("inlineCode",{parentName:"p"},"PROVING")," then you should NOT stop it."),(0,a.kt)("h3",{id:"verifying-the-setup"},"Verifying the setup"),(0,a.kt)("p",null,"After adding or migrating identities and PoST services, verify they're correctly connected to your node and eligible for rewards by monitoring the node's Events. Look for indicators of successful identity recognition and PoST data validation. For example you can list the Post states with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl --plaintext localhost:9094 spacemesh.v1.PostInfoService.PostStates\n")),(0,a.kt)("p",null,"you can also query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext 127.0.0.1:9093 spacemesh.v1.Smesher.SmesherIDs\n")),(0,a.kt)("p",null,"to list the configuered SmesherIDs."),(0,a.kt)("h3",{id:"node-events"},"Node Events"),(0,a.kt)("p",null,"Method ",(0,a.kt)("inlineCode",{parentName:"p"},"spacemesh.v1.AdminService.EventsStream")," have been extended with ",(0,a.kt)("inlineCode",{parentName:"p"},"smesher")," field in the events. So you're expected to see event PER post service now."),(0,a.kt)("h3",{id:"troubleshooting-tips"},"Troubleshooting Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Check Configuration Files")," : Ensure all identity and service configurations are correctly set up."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Review Logs For Errors")," : Any connectivity or initialization errors will be detailed in the node's logs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ensure Unique Operation")," : Running multiple nodes with the same identity can lead to issues. Verify that each identity is only active on one node")),(0,a.kt)("h3",{id:"advanced-configurations"},"Advanced Configurations"),(0,a.kt)("h4",{id:"customizing-settings-for-optimal-performance"},"Customizing Settings For Optimal Performance"),(0,a.kt)("p",null,"As mentioned previously each post service accepts it's own configuration. You can adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"--threads"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--nonces"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--randomx-mode")," based on your hardware capabilities and preferences."),(0,a.kt)("h4",{id:"smart-orchestration-for-running-multiple-post-services"},"Smart Orchestration For Running Multiple PoST Services"),(0,a.kt)("p",null,"We have prepared a demonstration of how to operate multiple PoST services efficiently. You can access it ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/multiple_post_services_demo"},"here"),". While it simplifies certain aspects, the emphasis is on showcasing the capabilities."),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: I Want To Generate More PoS Data. How Do I Add A New Identity To My Node?"),"\nA: Initialize PoST data for the new identity using ",(0,a.kt)("inlineCode",{parentName:"p"},"postcli"),", which will generate a new private key. Then, move the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"identity.key")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"data/identities")," directory, ensuring it's uniquely named."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: What Should I Do If I Encounter Errors During Identity Or PoST Service Setup?"),"\nA: Check your configuration files for accuracy and review node logs for specific error messages. Ensure all paths and identifiers are correctly specified and that there's no overlap of identities across multiple nodes."))}c.isMDXComponent=!0}}]);