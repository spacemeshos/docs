"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[114],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(h,r(r({ref:n},c),{},{components:t})):o.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(8168),a=(t(6540),t(5680));const i={id:"networking",title:"Networking"},r=void 0,s={unversionedId:"start/smeshing/smeshing_adv/networking",id:"start/smeshing/smeshing_adv/networking",title:"Networking",description:"Most miners should never need to think much about their network settings. The Spacemesh node software ships with a reasonable default set of parameters that should work well for most node operators and most miners, and the software is built on top of the popular libp2p network stack which includes many useful features and support for things like peer discovery and NAT traversal.",source:"@site/docs/start/smeshing/smeshing_adv/networking.md",sourceDirName:"start/smeshing/smeshing_adv",slug:"/start/smeshing/smeshing_adv/networking",permalink:"/docs/start/smeshing/smeshing_adv/networking",draft:!1,tags:[],version:"current",frontMatter:{id:"networking",title:"Networking"},sidebar:"start",previous:{title:"PoET Servers",permalink:"/docs/start/smeshing/smeshing_adv/poet"},next:{title:"Fine-Tuning Node Performance",permalink:"/docs/start/smeshing/smeshing_adv/performance"}},l={},p=[{value:"NAT Traversal",id:"nat-traversal",level:3},{value:"Number of Connections",id:"number-of-connections",level:3},{value:"Private Nodes",id:"private-nodes",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Most miners should never need to think much about their network settings. The Spacemesh node software ships with a reasonable default set of parameters that should work well for most node operators and most miners, and the software is built on top of the popular ",(0,a.yg)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p network stack")," which includes many useful features and support for things like peer discovery and NAT traversal."),(0,a.yg)("h3",{id:"nat-traversal"},"NAT Traversal"),(0,a.yg)("p",null,"When the node boots up, by default it tries to ",(0,a.yg)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/nat/overview/#automatic-router-configuration"},"automatically configure an open port"),' that will allow it to listen for inbound connections. While this isn\'t strictly required for participation in the network, it\'s strongly encouraged, since without an open inbound port your node will not be "routable" or "dialable", meaning it can only establish outbound connections (but not accept inbound ones). This damages the health of the entire p2p network. Note that, in addition to this feature, if you have a firewall running either locally or on your router, you\'ll need to manually open the "listen" port, which is 7513 by default. Firewall configurations vary from system to system; see ',(0,a.yg)("a",{parentName:"p",href:"/docs/start/smeshing/netconfig"},"Network configuration")," for more information."),(0,a.yg)("p",null,"You can disable NAT traversal with the ",(0,a.yg)("inlineCode",{parentName:"p"},"--disable-natport")," commandline flag or config variable, and you can configure a different listen port using ",(0,a.yg)("inlineCode",{parentName:"p"},"--listen"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'> go-spacemesh -h\n...\n      --listen string                                 address for listening (default "/ip4/0.0.0.0/tcp/7513")\n      --disable-natport                               disable nat port-mapping (if enabled upnp protocol is used to negotiate external port with router)\n')),(0,a.yg)("h3",{id:"number-of-connections"},"Number of Connections"),(0,a.yg)("p",null,"By default the node attempts to maintain 20-100 peer connections, including both inbound and outbound. The number of inbound and outbound connections is governed by the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/475b05b6a8900424bedf5b9086881920ed035b8b/p2p/host.go#L75-L106"},"p2p config"),". Miners wishing to manage the details of their node's participation in the p2p network may wish to tweak the following settings:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"listen"),": as mentioned above, this is the inbound connection port"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"disable-natport")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"p2p-holepunching"),": as mentioned above, these features can be used for NAT traversal. See ",(0,a.yg)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/nat/overview/"},"What are NATs")," for more information."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"min-peers"),": when the node is connected to fewer than this number of peers, the discovery process will continue to run to find new peers to connect to"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"low-peers")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"high-peers"),": when the number of peer connections exceeds ",(0,a.yg)("inlineCode",{parentName:"li"},"high-peers"),", connections will be pruned until the number falls to ",(0,a.yg)("inlineCode",{parentName:"li"},"low-peers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"inbound-fraction"),": the node will not allow more than ",(0,a.yg)("inlineCode",{parentName:"li"},"inbound-fraction x high-peers")," inbound connections at any given time."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"outbound-fraction"),": the node will not allow more than ",(0,a.yg)("inlineCode",{parentName:"li"},"outbound-fraction x high-peers")," outbound connections at any given time."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"direct")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"bootnodes"),": can be used to manage public and private nodes; see next section.")),(0,a.yg)("p",null,"As usual, any of these settings may be passed as commandline flags to ",(0,a.yg)("inlineCode",{parentName:"p"},"go-spacemesh"),", or may be included in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/wiki/wiki/Smesher-Guide#config"},"config file"),"."),(0,a.yg)("p",null,"Even more settings are available. See the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/475b05b6a8900424bedf5b9086881920ed035b8b/p2p/host.go#L75-L106"},"p2p config")," and ",(0,a.yg)("a",{parentName:"p",href:"https://docs.libp2p.io/"},"the libp2p docs")," for more information."),(0,a.yg)("h3",{id:"private-nodes"},"Private Nodes"),(0,a.yg)("p",null,"A miner running ",(0,a.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_adv/setup#multiple-nodes"},"multiple nodes")," or ",(0,a.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_adv/advanced#identity-management"},"multiple identities"),' may wish to manually configure how the nodes peer with and communicate with one another. In other words, miners can configure a custom network topology among their own nodes. One very common configuration is to have one or more public "gateway" nodes that are publicly accessible and responsible for communicating with the outside world that relay information from the public p2p network to many private nodes. Such a configuration can save an enormous amount of bandwidth compared to each of several nodes joining the public p2p network directly.'),(0,a.yg)("p",null,"Such a configuration is achieved through the use of the ",(0,a.yg)("inlineCode",{parentName:"p"},"bootnodes")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"direct")," parameters in the ",(0,a.yg)("inlineCode",{parentName:"p"},"p2p")," config. The process is fully documented in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/p2p/README.md"},"go-spacemesh p2p README"),"."))}u.isMDXComponent=!0}}]);