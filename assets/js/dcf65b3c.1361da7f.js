"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8979],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||o;return t?a.createElement(u,s(s({ref:n},p),{},{components:t})):a.createElement(u,s({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[m]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(8168),i=(t(6540),t(5680));const o={id:"setup",title:"Advanced Setup"},s=void 0,r={unversionedId:"start/smeshing/smeshing_adv/setup",id:"start/smeshing/smeshing_adv/setup",title:"Advanced Setup",description:"Now that you have the necessary resources ready, it is time to start smeshing! This section will walk you through how to do that. First, a couple of quick notes:",source:"@site/docs/start/smeshing/smeshing_adv/setup.md",sourceDirName:"start/smeshing/smeshing_adv",slug:"/start/smeshing/smeshing_adv/setup",permalink:"/docs/start/smeshing/smeshing_adv/setup",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/smeshing/smeshing_adv/setup.md",tags:[],version:"current",frontMatter:{id:"setup",title:"Advanced Setup"},sidebar:"start",previous:{title:"Using Your Wallet",permalink:"/docs/start/smeshing/smeshing_basic/wallet"},next:{title:"PoST Initialization",permalink:"/docs/start/smeshing/smeshing_adv/post_init"}},l={},c=[{value:"<code>commitmentAtxId\u200b</code>",id:"commitmentatxid",level:2},{value:"Compiling <code>go-spacemesh</code>",id:"compiling-go-spacemesh",level:2},{value:"Running a local Full Node",id:"running-a-local-full-node",level:2},{value:"Configuring the Node",id:"configuring-the-node",level:2},{value:"Collecting Rewards",id:"collecting-rewards",level:3},{value:"Running Multiple Nodes",id:"running-multiple-nodes",level:3},{value:"System Service on Linux",id:"system-service-on-linux",level:2},{value:"Parallel Initialization",id:"parallel-initialization",level:2}],p={toc:c},m="wrapper";function h(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Now that you have the necessary resources ready, it is time to start smeshing! This section will walk you through how to do that. First, a couple of quick notes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"This guide is intended as an advanced smeshing guide, covering cases such as parallel init, cloud GPUs, and transferring and managing multiple identities. In particular it does not cover the baseline case of using Smapp to initialize a single smesher. That process is straightforward and mostly automated in Smapp, and the steps are outlined in this explainer video. The guide does explain the differences between mining using Smapp or the CLI where appropriate.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"This guide uses Linux. So, all the commands are for a Linux terminal, and should be the same for most UNIX-based systems. In most cases, the same commands should work verbatim on other platforms including Windows and macOS with appropriate tweaks (e.g., using the correct platform-specific paths). Contributions containing correct instructions for different platforms are welcome. Feel free to open an issue with a contribution.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"In order to smesh one must have a fully synchronized Spacemesh node running. Strictly speaking, running a node is not required during the PoST initialization process, since it relies only upon static data (with one exception, explained in a moment) such as the smesher's identity and the PoST init params (total storage to initialize, max file size, etc.). Most smeshers nevertheless choose to run a full node throughout the init process for several reasons: the node itself can perform the initialization for you, it means you will have a fully-synchronized node when the init finishes and smeshing begins (with the opportunity to troubleshoot any issues in the interim), and it means you will have a trustless copy of the highest ",(0,i.yg)("inlineCode",{parentName:"p"},"commitmentAtxId"),"."))),(0,i.yg)("h2",{id:"commitmentatxid"},(0,i.yg)("inlineCode",{parentName:"h2"},"commitmentAtxId\u200b")),(0,i.yg)("p",null,"The one piece of dynamic data that you need to perform PoST init is the highest commitmentAtxId. This is simply the ID of the highest ATX known at the time that PoST initialization begins. It is used to mitigate a certain class of protocol attack; for more information, see POPS-VRF implementation.\nThe simplest way to get this is to ask your own node, using the API as such:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> grpcurl -plaintext 127.0.0.1:9092 spacemesh.v1.ActivationService.Highest | jq -r '.atx.id.id' | base64 -d | xxd -p -c 64\n435fa442517e9c75087de1b06d2a9d12c345505f3cac93ac52b816171ce48308\n")),(0,i.yg)("p",null,"While we plan to operate public nodes in the near future, we do not operate any at present. Therefore, we strongly encourage you to double-check this information, ideally by running your own node, or alternatively by checking with the community on Discord."),(0,i.yg)("p",null,"Continue reading to run your own node and start smeshing."),(0,i.yg)("h2",{id:"compiling-go-spacemesh"},"Compiling ",(0,i.yg)("inlineCode",{parentName:"h2"},"go-spacemesh")),(0,i.yg)("p",null,"go-spacemesh has a very limited set of dependencies and requirements, the main one being a Go toolchain. It also requires ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," and ",(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage"},"Git Large File Storage"),". Make sure you have a ",(0,i.yg)("a",{parentName:"p",href:"https://go.dev/dl/"},"recent version of Go")," installed, clone the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh"},"go-spacemesh repository"),", then run ",(0,i.yg)("inlineCode",{parentName:"p"},"make install"),", which will install the other dependencies for you automatically. Note that this includes a compiled version of the Spacemesh PoST library, but as long as your Go toolchain is set up correctly, this should work out of the box."),(0,i.yg)("p",null,"You can see the minimum required version of Go in a few places including ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/go.mod#L3"},(0,i.yg)("inlineCode",{parentName:"a"},"go.mod"))," and the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/README.md?plain=1#L89"},"README"),"."),(0,i.yg)("p",null,"Assuming you intend to run your node on mainnet, ",(0,i.yg)("strong",{parentName:"p"},"make certain that you compile using the tag that matches the ",(0,i.yg)("a",{parentName:"strong",href:"https://github.com/spacemeshos/go-spacemesh/releases"},"latest release")),", e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> git clone --depth 1 --branch v1.1.1 https://github.com/spacemeshos/go-spacemesh.git\n> make install\n> make build\n")),(0,i.yg)("p",null,"This builds the ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," binary in the ",(0,i.yg)("inlineCode",{parentName:"p"},"build/")," directory."),(0,i.yg)("p",null,"For the most up to date information on compiling check the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh#readme"},"README"),", ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile"},"Makefile")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile-libs.Inc"},"Makefile-libs"),", and the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/.github/workflows/release.yml"},"release workflow"),"."),(0,i.yg)("h2",{id:"running-a-local-full-node"},"Running a local Full Node"),(0,i.yg)("p",null,"The node features a set of reasonable default parameters that should work well out of the box for most users and most use cases, but you can change all of them using command line flags and/or the config file. The exact command you use to run ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," will depend upon your local configuration and requirements. See the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh#readme"},"README")," and run ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh -h")," for the full list of arguments:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> go-spacemesh -h\nstart node\n\nUsage:\n  node [flags]\n  node [command]\n\nAvailable Commands:\n  completion  Generate the autocompletion script for the specified shell\n  help        Help about any command\n  version     Show version info\n\nFlags:\n  -a, --accounts string=uint64                        List of prefunded accounts\n      --advertise-address string                      libp2p address with identity (example: /dns4/bootnode.spacemesh.io/tcp/5003)\n      --beacon-first-voting-round-duration duration   First voting round duration in milliseconds (default 30m0s)\n      --beacon-grace-period-duration duration         Grace period duration in milliseconds (default 10m0s)\n      --beacon-kappa int                              Security parameter (for calculating ATX threshold) (default 40)\n      --beacon-proposal-duration duration             Proposal duration in milliseconds (default 4m0s)\n      --beacon-q *big.Rat                             Ratio of dishonest spacetime (for calculating ATX threshold). It should be a string representing a rational number. (default 1/3)\n      --beacon-rounds-number uint32                   Amount of rounds in every epoch (default 300)\n      --beacon-sync-weight-units int                  Numbers of weight units to wait before determining beacon values from them. (default 800)\n      --beacon-theta *big.Rat                         Ratio of votes for reaching consensus (default 1/4)\n      --beacon-votes-limit uint32                     Maximum allowed number of votes to be sent (default 100)\n...\n")),(0,i.yg)("p",null,"Assuming everything else is set up correctly in your config file (see next section), the only CLI flag you need is to specify the location of the config file, e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> go-spacemesh -c node-config.json\n")),(0,i.yg)("h2",{id:"configuring-the-node"},"Configuring the Node"),(0,i.yg)("p",null,"The node currently does not need any config to run with mainnet. You can however request the config and override any needed value. To request the current mainnet compatible config please run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> curl -s https://configs.spacemesh.network/networks.json | jq '.[0].conf'\n\"https://configs.spacemesh.network/config.mainnet.json\"\n")),(0,i.yg)("p",null,"Most users will want to start with the existing network config file as a template and add customizations to match their local environment and preferences. Note that ",(0,i.yg)("strong",{parentName:"p"},"it's essential you not change existing config parameters unless you know what you're doing.")," Some config sections, like ",(0,i.yg)("inlineCode",{parentName:"p"},"genesis"),", must not be changed under any circumstances or ",(0,i.yg)("strong",{parentName:"p"},"your node will not be compatible with mainnet.")," Your messages will be dropped and your node may be banned by its peers. Some, like ",(0,i.yg)("inlineCode",{parentName:"p"},"p2p")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"smeshing"),", may be tweaked by power users who know what they're doing, but can also cause problems for your node. Others such as ",(0,i.yg)("inlineCode",{parentName:"p"},"api")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"logging")," are safe to change. When in doubt, ",(0,i.yg)("a",{parentName:"p",href:"https://chat.spacemesh.io"},"ask for help"),"!"),(0,i.yg)("p",null,"Assuming you're starting with the default network config file, you'll want to add something like the following to start smeshing:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'  "smeshing": {\n    "smeshing-opts": {\n      "smeshing-opts-datadir": "/data/post/7c8cef2b/",\n      "smeshing-opts-maxfilesize": 4294967296,\n      "smeshing-opts-numunits": 15\n    },\n    "smeshing-proving-opts": {\n      "smeshing-opts-proving-nonces": 144,\n      "smeshing-opts-proving-threads": 0\n    },\n    "smeshing-coinbase": "<your coinbase here>",\n    "smeshing-start": true\n  },\n')),(0,i.yg)("p",null,"For more information on choosing the ",(0,i.yg)("inlineCode",{parentName:"p"},"smeshing-opts")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"smeshing-proving-opts"),", see ",(0,i.yg)("a",{parentName:"p",href:"#fine-tuning-proving"},"fine-tuning proving"),", ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},"the postcli README")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md"},"the profiler README"),", respectively, and the sections below on these topics."),(0,i.yg)("h3",{id:"collecting-rewards"},"Collecting Rewards"),(0,i.yg)("p",null,"The coinbase account (specified in the config, above, as ",(0,i.yg)("inlineCode",{parentName:"p"},"smeshing-coinbase"),") is the account that will receive the rewards from smeshing. The coinbase account is fixed per smesher, per epoch, as the smesher commits to it in an ATX for an entire epoch. However, it can be changed at any time, and the change will take effect in the epoch that the next published ATX targets. Note that many smeshers can also use the same coinbase (although to do so would reduce privacy since those smeshers could be associated via the shared coinbase address), and also that there's no requirement that a smesher even provide a coinbase that they control. In theory the coinbase could be set to someone else's account, or even to a burn account."),(0,i.yg)("p",null,"The simplest way to generate a coinbase account is to install and open ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/smapp/releases"},"Smapp"),"; it'll automatically generate a new account the first time it's opened, assuming one doesn't already exist (make sure to backup the recovery mnemonic!)."),(0,i.yg)("p",null,"If you prefer you can use the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/smcli"},(0,i.yg)("inlineCode",{parentName:"a"},"smcli")," tool")," to generate and display a new wallet containing one or more accounts from the command line. See the README in that repository for more information on the tool."),(0,i.yg)("p",null,"Either way, you should now have a Spacemesh-compatible address in bech32 format that starts with ",(0,i.yg)("inlineCode",{parentName:"p"},"sm1"),"."),(0,i.yg)("h3",{id:"running-multiple-nodes"},"Running Multiple Nodes"),(0,i.yg)("p",null,"It is possible to run multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," processes on a single system. This is of course subject to the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.spacemesh.io/docs/start/requirements"},"resource requirements")," outlined above; in particular, make sure that the system has high enough bandwidth to support many nodes. You'll need to change a few parameters to enable this:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Node data directory: each node must have its own data directory to store network state. Specify it on the command line using the ",(0,i.yg)("inlineCode",{parentName:"li"},"-d datadir")," flag or in the config in ",(0,i.yg)("inlineCode",{parentName:"li"},'{"main":{"data-folder":"<node-data-location>"}}'),"."),(0,i.yg)("li",{parentName:"ol"},"Smeshing data directory: each smeshing node must point to a different PoST data directory. Specify in the config using ",(0,i.yg)("inlineCode",{parentName:"li"},'{"smeshing":{"smeshing-opts":{"smeshing-opts-datadir":"<post-data-location>"}}}'),". ",(0,i.yg)("strong",{parentName:"li"},"See note below about avoiding equivocation!")),(0,i.yg)("li",{parentName:"ol"},"Lockfile: each running node must specify a different lockfile. Specify it on the command line using ",(0,i.yg)("inlineCode",{parentName:"li"},"--filelock")," or in the config with ",(0,i.yg)("inlineCode",{parentName:"li"},'{"main":{"filelock":"<lock-file-location>"}}'),", e.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"/tmp/go-spacemesh-01.lock"),"."),(0,i.yg)("li",{parentName:"ol"},"GRPC API ports: assuming you have GRPC enabled, each running node must use a different set of ports for the public and private GRPC services. Specify them in the config with ",(0,i.yg)("inlineCode",{parentName:"li"},'{"api":{"grpc-public-listener":"<ip_addr>:<port>","grpc-private-listener":"<ip_addr>:<port>"}}"'),". Use ",(0,i.yg)("inlineCode",{parentName:"li"},'"0.0.0.0"')," to listen on all interfaces, or specify an IP address attached to a particular interface. See next section for more information on the API and the difference between public and private services."),(0,i.yg)("li",{parentName:"ol"},"P2P listen port: you can specify a different port for each node using the ",(0,i.yg)("inlineCode",{parentName:"li"},"--listen")," CLI flag or in the config file using ",(0,i.yg)("inlineCode",{parentName:"li"},'"p2p": {"listen": "/ip4/0.0.0.0/tcp/6100"}'),".")),(0,i.yg)("h2",{id:"system-service-on-linux"},"System Service on Linux"),(0,i.yg)("p",null,"On compatible Linux-based systems, we strongly recommend running ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," as a ",(0,i.yg)("a",{parentName:"p",href:"https://linuxhandbook.com/create-systemd-services/"},"systemd service"),". This makes log management easier, and it ensures that the node will automatically restart if it dies or is killed, and that it automatically starts when the system is restarted. Each Linux distribution is different, so please check the documentation for your distribution to determine precisely where to create the service file. On most distributions the file should live in ",(0,i.yg)("inlineCode",{parentName:"p"},"/etc/systemd/system"),". Here's a sample service file - please read the ",(0,i.yg)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.service.html"},"systemd documentation")," for more information and update paths, users, etc. to suit your particular system:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"[Unit]\nDescription=go-spacemesh (Mainnet)\nWants=network-online.target\nAfter=network-online.target\nStartLimitIntervalSec=60\nStartLimitBurst=5\n\n[Service]\nType=simple\nUser=spacemesh\nGroup=spacemesh\nRestart=always\nRestartSec=5\nExecStart=go-spacemesh -c /home/spacemesh/node-config.json\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.yg)("p",null,"With the service file in place, assuming it's called ",(0,i.yg)("inlineCode",{parentName:"p"},"spacemesh.service"),", you simply need to run the following commands to enable and start it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> sudo systemctl daemon-reload\n> sudo systemctl enable spacemesh.service\n")),(0,i.yg)("p",null,"You can then view the logs of the running service by running:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> journalctl --unit spacemesh -f\n")),(0,i.yg)("h2",{id:"parallel-initialization"},"Parallel Initialization"),(0,i.yg)("p",null,"While by default initialization occurs using a single GPU, it's possible to initialize a single identity using many GPUs in parallel, on a single system or on multiple systems. This can be done using ",(0,i.yg)("inlineCode",{parentName:"p"},"postcli"),": specify the desired number of units, count the total number of init files, then initialize a subset on each GPU/each system, e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"./postcli -numUnits 100 -printNumFiles\n1600\n")),(0,i.yg)("p",null,"On Machine A:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"./postcli -numUnits 100 -id <id> -commitmentAtxId <id> -toFile 799 -datadir ./dataA\n")),(0,i.yg)("p",null,"On Machine B:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"./postcli -numUnits 100 -id <id> -commitmentAtxId <id> -fromFile 800 -datadir ./dataB\n")),(0,i.yg)("p",null,"When combining the files, care must be taken to manually merge the metadata contained in the ",(0,i.yg)("inlineCode",{parentName:"p"},"post_metadata.json")," files since each will contain a different nonce value and the smallest nonce must be chosen. For the same reason we strongly recommend that you not perform initialization ",(0,i.yg)("strong",{parentName:"p"},"using multiple GPUs on a single system using the same PoST data directory,")," because the nonces found by one process will be overwritten by those found by another."),(0,i.yg)("p",null,"See ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},"the postcli README")," for more information."))}h.isMDXComponent=!0}}]);