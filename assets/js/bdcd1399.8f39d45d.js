"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8566],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var i=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(8168),o=(n(6540),n(5680));const r={id:"troubleshooting",title:"Troubleshooting"},a=void 0,s={unversionedId:"start/smeshing/smeshing_adv/troubleshooting",id:"start/smeshing/smeshing_adv/troubleshooting",title:"Troubleshooting",description:"Corrupt PoST Data",source:"@site/docs/start/smeshing/smeshing_adv/troubleshooting.md",sourceDirName:"start/smeshing/smeshing_adv",slug:"/start/smeshing/smeshing_adv/troubleshooting",permalink:"/docs/start/smeshing/smeshing_adv/troubleshooting",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/smeshing/smeshing_adv/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"start",previous:{title:"Initializing a Subset of PoST Data With postcli",permalink:"/docs/start/smeshing/smeshing_adv/multigpu"},next:{title:"How Rewards Work",permalink:"/docs/start/rewards"}},l={},d=[{value:"Corrupt PoST Data",id:"corrupt-post-data",level:2},{value:"Additional troubleshooting",id:"additional-troubleshooting",level:2},{value:"<code>timesync: peers are not time synced</code>",id:"timesync-peers-are-not-time-synced",level:3},{value:"My node uses too much memory and I don&#39;t know why",id:"my-node-uses-too-much-memory-and-i-dont-know-why",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"corrupt-post-data"},"Corrupt PoST Data"),(0,o.yg)("p",null,"One of the realities of hard drives is that, once in a while, they fail, resulting in corrupt data. Data corruption can\nalso occur while ",(0,o.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_adv/advanced#moving-post-files"},"copying or moving")," data across systems. Hopefully you'll never have\nto deal with this situation, but if it does happen, you'll most likely find out when a message like the following\nappears in your log:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},'2023-09-18T03:37:09.147-0400    INFO    abcde.nipostValidator   Found proof for nonce: 0, pow: 22517998136898104 with [96506732, 8522344264, 15809824782, 17090809665, 22898048404, 23339075780, 33564380939, 37517090594, 38587115133, 42519923294, 47489969603, 66776374486, 85751204605, 97571767596, 98954096617, 103466964513, 105410396815, 108719413993, 110747747703, 114712568823, 122975084397, 128938645449, 135064014126, 137417405566, 137527071596, 142672661935, 145176618414, 149504039139, 150155464780, 156195137948, 162912656308, 188599527912, 192691123424, 196101601537, 196889191957, 202704285017, 204635877880] indices     {"node_id": "abcde", "module": "nipostValidator", "module": "post::prove", "file": "src/prove.rs", "line": 323}\n2023-09-18T03:37:09.353-0400    INFO    abcde.post      proving: generated proof        {"node_id": "abcde", "module": "post"}                                                                                                                         2023-09-18T03:37:09.353-0400    INFO    abcde.atxBuilder        created the initial post        {"node_id": "abcde", "module": "atxBuilder"}\n2023-09-18T03:37:09.353-0400    INFO    abcde.atxBuilder        verifying the initial post      {"node_id": "abcde", "module": "atxBuilder", "post": {"nonce": 0, "indices": "6c93c00500d229fe7ee0806ce53a043dc4ea0f947dd454053182c75bb1f07c097d887cc5f0227da6f8fb8897a2987932dcf6e9b05873ba303efd8a2bf7134bc1eead95fefaa1708558725c608f02f38a58baa60b54765748919cdd8f9bd56a6ddfe2a15cf2e55581e7d21427f7f9d1dcfa7f6c934005e06b03fd4de85a36d31c8e638a3c8b4c90f6f522672a7d1749bb9de55ea2a7a1a5afe03449dd6c403e246a5b612a78dd66b577c8bcf8b13fa52f"}, "metadata": {"Challenge": "0000000000000000000000000000000000000000000000000000000000000000", "LabelsPerUnit": 4294967296}, "name": "atxBuilder"}\n2023-09-18T03:37:09.410-0400    ERROR   abcde.nipostValidator   Proof is invalid: MSB value for index: 137527071596 doesn\'t satisfy difficulty: 207 > 0 (label: [215, 101, 80, 15, 36, 236, 60, 243, 203, 157, 178, 129, 73, 177, 132, 65])       {"node_id": "abcde", "module": "nipostValidator", "module": "post::post_impl", "file": "ffi/src/post_impl.rs", "line": 242}                                                                                                                                                                                            2023-09-18T03:37:09.413-0400    FATAL   abcde.atxBuilder        initial POST proof is invalid. Probably the initialized POST data is corrupted. Please verify the data with postcli and regenerate the corrupted files.   {"node_id": "abcde", "module": "atxBuilder", "errmsg": "verify PoST: invalid proof", "name": "atxBuilder"}\n')),(0,o.yg)("p",null,"This message indicates that, despite the presence of a complete identity, the miner was unable to generate a PoST proof\nfor a particular epoch due to corruption in the PoST data. The best way to verify this is to run\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},(0,o.yg)("inlineCode",{parentName:"a"},"postcli"))," in verify mode:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},'> postcli -datadir /Volumes/post/7c8cef2b -fromFile 531 -verify -fraction 0.01\n2023/09/18 13:51:59 cli: verifying identity.key\n2023/09/18 13:51:59 cli: identity.key is valid\n2023/09/18 13:51:59 cli: verifying POS data\n2023-09-18T13:51:59.504-0400    INFO    verifying POS data in /Volumes/post/7c8cef2b  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 34}\n2023-09-18T13:51:59.504-0400    INFO    verifying POS files 531 -> 927  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 39}\n2023-09-18T13:51:59.504-0400    INFO    verifying file /Volumes/post/7c8cef2b/postdata_531.bin      {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 43}\n2023-09-18T13:51:59.504-0400    INFO    verifying 26843 labels  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 66}\n2023-09-18T13:52:02.348-0400    INFO    POS data is invalid: invalid label in file 531 at offset 126368       {"module": "post::initialization", "file": "ffi/src/initialization.rs", "line": 242}\n2023/09/18 13:52:02 cli: invalid POS\n')),(0,o.yg)("p",null,"You can do this for an entire identity, or only for a subset of files (using ",(0,o.yg)("inlineCode",{parentName:"p"},"-fromFile")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"-toFile"),"; see the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},"README")," for more information). If nothing else is\ntouching the drive (e.g., if the node is shut down and the drive isn't being used for any other purpose), then running\n",(0,o.yg)("inlineCode",{parentName:"p"},"postcli verify")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"-fraction 0.01")," should be quite quick; you can run with a larger fraction for a more thorough\ncheck. Note also that multiple files may be corrupt; ",(0,o.yg)("inlineCode",{parentName:"p"},"postcli verify")," will quit after detecting a single corrupt file,\nand you can restart it with a higher ",(0,o.yg)("inlineCode",{parentName:"p"},"-fromFile")," to continue the process. Serious miners may wish to run such a\nverification process periodically to detect corruption issues before they lead to failures in proof generation and lost\nrewards."),(0,o.yg)("p",null,"Once corrupt data is detected, the only option is to delete and regenerate the affected files. If the files are deleted\nand the node is restarted, it'll automatically restart the PoST initialization process to fill in the missing data, or\nthis can be done manually using ",(0,o.yg)("inlineCode",{parentName:"p"},"postcli"),"."),(0,o.yg)("h2",{id:"additional-troubleshooting"},"Additional troubleshooting"),(0,o.yg)("h3",{id:"timesync-peers-are-not-time-synced"},(0,o.yg)("inlineCode",{parentName:"h3"},"timesync: peers are not time synced")),(0,o.yg)("p",null,"Please make sure that your system clock is synced with the internet. Please refer to time synchronization instructions\nfor your operating system."),(0,o.yg)("p",null,"If you're 100% certain that your time is correct you can disable the time sync check by setting the following config:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "time": {\n        "peersync": {\n            "disable": true\n        }\n    }\n}\n')),(0,o.yg)("h3",{id:"my-node-uses-too-much-memory-and-i-dont-know-why"},"My node uses too much memory and I don't know why"),(0,o.yg)("p",null,"Please add a ",(0,o.yg)("inlineCode",{parentName:"p"},'"pprof-server": true'),", to the config at the main level or add ",(0,o.yg)("inlineCode",{parentName:"p"},"--pprof-server")," to the command line.\nRestart the node and then visit ",(0,o.yg)("a",{parentName:"p",href:"http://127.0.0.1:6060/debug/pprof/profile?seconds=30"},"http://127.0.0.1:6060/debug/pprof/profile?seconds=30")," and\n",(0,o.yg)("a",{parentName:"p",href:"http://127.0.0.1:6060/debug/pprof/heap"},"http://127.0.0.1:6060/debug/pprof/heap")," in your default browser and download the files. Please share then these files\non discord or github issue."),(0,o.yg)("p",null,"Advanced users can use ",(0,o.yg)("inlineCode",{parentName:"p"},"go tool pprof http://localhost:6060/debug/pprof/heap")," to see what is using the memory."))}u.isMDXComponent=!0}}]);