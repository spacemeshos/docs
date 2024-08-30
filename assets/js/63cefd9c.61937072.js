"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3596],{5680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>m});var s=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?s.createElement(m,r(r({ref:t},h),{},{components:n})):s.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(8168),a=(n(6540),n(5680));const i={id:"quicksync",title:"Quicksync"},r=void 0,o={unversionedId:"guides/smeshing/smeshing_adv/quicksync",id:"guides/smeshing/smeshing_adv/quicksync",title:"Quicksync",description:'When a new node joins the Spacemesh network, it must first get up to speed with the rest of its peers. This process is referred to as "syncing" and is a pre-requisite to running a full or a smeshing node. Historically, it has been difficult for smeshers to successfully sync their nodes owing to how time consuming the syncing process is. Primarily, syncing includes downloading and independently verifying all blocks, transactions, ATXs, along with some other data, and reconstructing the current state from scratch. Naturally, this took the average smesher a lot of time. As such, in response to the growing difficulty of syncing a fresh node, we have prepared a way to speed up the syncing process. Introducing, Quicksync.',source:"@site/docs/guides/smeshing/smeshing_adv/quicksync.md",sourceDirName:"guides/smeshing/smeshing_adv",slug:"/guides/smeshing/smeshing_adv/quicksync",permalink:"/docs/guides/smeshing/smeshing_adv/quicksync",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/guides/smeshing/smeshing_adv/quicksync.md",tags:[],version:"current",frontMatter:{id:"quicksync",title:"Quicksync"},sidebar:"start",previous:{title:"State Verification",permalink:"/docs/guides/smeshing/smeshing_adv/verification"},next:{title:"Additional Advanced Topics",permalink:"/docs/guides/smeshing/smeshing_adv/advanced"}},c={},l=[{value:"Getting the archive automatically",id:"getting-the-archive-automatically",level:3},{value:"Smapp",id:"smapp",level:4},{value:"<code>quicksync-rs</code>",id:"quicksync-rs",level:4},{value:"Getting the archive manually",id:"getting-the-archive-manually",level:3},{value:"Linux and macOS instructions (bash/zsh terminal)",id:"linux-and-macos-instructions-bashzsh-terminal",level:4}],h={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,s.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,'When a new node joins the Spacemesh network, it must first get up to speed with the rest of its peers. This process is referred to as "syncing" and is a pre-requisite to running a full or a smeshing node. Historically, it has been difficult for smeshers to successfully sync their nodes owing to how time consuming the syncing process is. Primarily, syncing includes downloading and independently verifying all blocks, transactions, ATXs, along with some other data, and reconstructing the current state from scratch. Naturally, this took the average smesher a lot of time. As such, in response to the growing difficulty of syncing a fresh node, we have prepared a way to speed up the syncing process. Introducing, Quicksync.'),(0,a.yg)("p",null,'With Quicksync, instead of performing all of the syncing actions as stated above and calculating the network state from genesis, one just needs to download the current state from a trusted peer like the Spacemesh dev team or some other node. While this runs contrary to the web3 philosophy of "Don\'t trust, verify", we believe that this could be a choice some smeshers may be interested in given the high rate of trouble with syncing. Moreover, nothing precludes a smesher from verifying this state in the background once it is downloaded.'),(0,a.yg)("p",null,"The state (also called an archive) that is downloaded is in the form of a ",(0,a.yg)("inlineCode",{parentName:"p"},"state.sql")," file and can either be downloaded automatically using by either using the Smapp or the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/quicksync-rs"},"quicksync-rs")," tool, or manually via the CLI. Instructions for both approaches are given below."),(0,a.yg)("h3",{id:"getting-the-archive-automatically"},"Getting the archive automatically"),(0,a.yg)("p",null,"The archive can be downloaded automatically in two ways, by running Smapp or by using the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/quicksync-rs"},"quicksync-rs")," tool."),(0,a.yg)("h4",{id:"smapp"},"Smapp"),(0,a.yg)("p",null,"The latest version of Smapp will propose to run Quicksync automatically."),(0,a.yg)("h4",{id:"quicksync-rs"},(0,a.yg)("inlineCode",{parentName:"h4"},"quicksync-rs")),(0,a.yg)("p",null,"We have prepared a tool called ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/quicksync-rs"},"quicksync-rs")," that simplifies the process of getting the archive."),(0,a.yg)("h3",{id:"getting-the-archive-manually"},"Getting the archive manually"),(0,a.yg)("p",null,"The archive can also be downloaded manually by using the CLI. It is assumed that you are smeshing using ",(0,a.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," and not via Smapp. The most recent archive for a given version can be found at: ",(0,a.yg)("inlineCode",{parentName:"p"},"https://quicksync.spacemesh.io/<version>/latest.zst"),". This URL will always redirect to the most recent archive for the given version."),(0,a.yg)("h4",{id:"linux-and-macos-instructions-bashzsh-terminal"},"Linux and macOS instructions (bash/zsh terminal)"),(0,a.yg)("p",null,"Before running these commands, make sure you are using the latest ",(0,a.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," version, and have ",(0,a.yg)("inlineCode",{parentName:"p"},"wget")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"zstd")," installed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Default path to the node data directory\nSM_DATA_DIR=~/spacemesh/node-data \n\n# Create a temp directory\nTMP_DIR=$(mktemp -d)\n\n# Download the archive for the latest go-spacemesh version \nwget -O $TMP_DIR/state.sql.zst https://quicksync.spacemesh.network/latest.zst\n\n# Extract the archive\nzstd -d --long=31 -o $SM_DATA_DIR/state.sql $TMP_DIR/state.sql.zst\n\n# Delete the temp directory\nrm -fr $TMP_DIR\n")),(0,a.yg)("p",null,"To download the state archive for a specific ",(0,a.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," version (as opposed to the latest one), follow the instructions below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Select your go-spacemesh version\nSM_VERSION=v1.6.0\n\n# Default path to the node data directory\nSM_DATA_DIR=~/spacemesh/node-data \n\n# Create a temp directory\nTMP_DIR=$(mktemp -d)\n\n# Download the archive for the specified SM version\nwget -O $TMP_DIR/state.sql.zst https://quicksync.spacemesh.network/$SM_VERSION/state.zst\n\n# Extract the archive\nzstd -d --long=31 -o $SM_DATA_DIR/state.sql $TMP_DIR/state.sql.zst\n\n# Delete the temp directory\nrm -fr $TMP_DIR\n")),(0,a.yg)("p",null,"Note that both URLs (namely ",(0,a.yg)("inlineCode",{parentName:"p"},"https://quicksync.spacemesh.network/latest.zst")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"https://quicksync.spacemesh.network/$SM_VERSION/state.zst"),") will redirect to the appropriate state archive ",(0,a.yg)("inlineCode",{parentName:"p"},".zst")," file. Thus, the former URL will redirect to the state archive file for the latest ",(0,a.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," version, whereas the latter will redirect to the state archive file for the given ",(0,a.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," version."))}p.isMDXComponent=!0}}]);