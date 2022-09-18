"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||r;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={id:"install",title:"Install Smapp"},l=void 0,s={unversionedId:"start/smapp/install",id:"start/smapp/install",title:"Install Smapp",description:"To join the Spacemesh 0.2 Tweedledum testnet you need to run the Spacemesh App on your desktop computer.",source:"@site/docs/start/smapp/install.md",sourceDirName:"start/smapp",slug:"/start/smapp/install",permalink:"/docs/start/smapp/install",draft:!1,tags:[],version:"current",frontMatter:{id:"install",title:"Install Smapp"},sidebar:"start",previous:{title:"Getting Started",permalink:"/docs/start/"},next:{title:"System Requirements",permalink:"/docs/start/smapp/requirements"}},i={},p=[{value:"About Smapp (The Spacemesh App)",id:"about-smapp-the-spacemesh-app",level:2},{value:"Smesher",id:"smesher",level:3},{value:"Wallet",id:"wallet",level:3},{value:"App",id:"app",level:3},{value:"Step 1 - Downloading the Installer",id:"step-1---downloading-the-installer",level:2},{value:"Security Notes",id:"security-notes",level:3},{value:"Step 2 - Installing the App",id:"step-2---installing-the-app",level:2},{value:"OS X",id:"os-x",level:3},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To join the Spacemesh 0.2 Tweedledum testnet you need to run the Spacemesh App on your desktop computer."),(0,a.kt)("h2",{id:"about-smapp-the-spacemesh-app"},"About Smapp (The Spacemesh App)"),(0,a.kt)("p",null,'Smapp includes a Spacemesh full p2p node (which we call a Smesher), and a basic Smesh wallet which we call the "Wallet."'),(0,a.kt)("h3",{id:"smesher"},"Smesher"),(0,a.kt)("p",null,"The Smesher is the software that creates and updates ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/coin"},"the Smesh")," (SMH) distributed ledger. It also creates and maintains your disk space commitment to the Spacemesh network. The Spacemesh decentralized platform is created by people just like you who run a Smesher on their own desktop computers."),(0,a.kt)("p",null,"Your Smesher participates in the Spacemesh decentralized consensus protocol and is responsible for the block-Smeshing process. Smeshing is the process of submitting blocks with transactions to the Testnet network. You earn Smeshing rewards for submitting blocks with transactions to the Testnet network, according to the rules of the Spacemesh protocol."),(0,a.kt)("p",null,"Before you can produce blocks, you need to commit 4GB of free storage on your hard drive to Spacemesh. The commitment process only happens once, when you first set up your App, and is used indefinitely to produce more blocks. You will be prompted to start producing blocks and to commit disk storage when you run the Spacemesh App for the first time on your computer."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"At this stage of Testnet 0.2, you can only commit a maximum of 4kb. In future Testnet releases and for the Spacemesh Mainnet, the minimum setup will be 100GB and you will be able to determine how much space you would like to allocate, e.g., 100 GB, 200 GB, 300 GB, etc.")),(0,a.kt)("h3",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,"The Wallet is a basic Smesh (SMH) coin wallet that you use to maintain your Smesh (SMH) coins account, execute transactions and check the status of incoming transactions initiated by other accounts. You can run your app in wallet-only mode, if you'd rather not set up a node."),(0,a.kt)("h3",{id:"app"},"App"),(0,a.kt)("p",null,"The App integrates a Smesher and a Wallet into one package, which we hope you find delightful and easy to use, even without deep technical understanding of cryptocurrency terms and concepts."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You do NOT need to run any additional software to join the Testnet, besides running the App on your computer.")),(0,a.kt)("p",null,"Follow the instructions on this page to download, install and run the App."),(0,a.kt)("h2",{id:"step-1---downloading-the-installer"},"Step 1 - Downloading the Installer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before installing, please confirm that your computer meets the ",(0,a.kt)("a",{parentName:"p",href:"/docs/start/smapp/requirements"},"minimum system requirements"),".")),(0,a.kt)("p",null,"Next, download the App Installer for your OS by visiting our ",(0,a.kt)("a",{parentName:"p",href:"https://spacemesh.io/start"},"main website"),"."),(0,a.kt)("p",null,"?> If your Linux system does not support Electron apps then you can build a Spacemesh full node and a CLI wallet from source code. For more information see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh"},"go-spacemesh README")),(0,a.kt)("h3",{id:"security-notes"},"Security Notes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All software released by Spacemesh is 100% open source. The App Installer you are downloading was packaged from code in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos"},"Spacemesh Open Source software repositories")," available on Github. We provide the Installer to make it convenient for non-developers to join the Spacemesh testnet.")),(0,a.kt)("h2",{id:"step-2---installing-the-app"},"Step 2 - Installing the App"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Locate the Installer you downloaded and double-click it")," to install the App."),(0,a.kt)("h3",{id:"os-x"},"OS X"),(0,a.kt)("p",null,"Drag the Spacemesh App icon in the installer window to the Applications folder shortcut. Next, open your Applications directory and double-click ",(0,a.kt)("inlineCode",{parentName:"p"},"Spacemesh")," to launch it. Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Testnet 0.2")," from the network selection screen."),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("p",null,"We've had reports of Linux failing to install the app simply by double-clicking the installer ",(0,a.kt)("inlineCode",{parentName:"p"},"deb")," file. As an alternative, please try running the following command from the terminal:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"> sudo dpkg -i <smapp_installer.deb>")),(0,a.kt)("p",null,"The app should be installed in ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/Spacemesh"),", and you should see the app listed under the Applications menu in your window manager."),(0,a.kt)("p",null,"Launch the app and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Testnet 0.2")," from the network selection screen."),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Follow the on screen instructions. The installer defaults to launch Spacemesh as soon as it is the installation is complete. Launch the app and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Testnet 0.2")," from the network selection screen."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you see a Windows security alert then check the checkbox 'Priave networks' and click 'Allow access'.")))}u.isMDXComponent=!0}}]);