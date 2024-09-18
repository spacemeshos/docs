"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3818],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var s=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,u=p["".concat(c,".").concat(m)]||p[m]||h[m]||o;return n?s.createElement(u,a(a({ref:t},g),{},{components:n})):s.createElement(u,a({ref:t},g))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:i,a[1]=r;for(var l=2;l<o;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(8168),i=(n(6540),n(5680));const o={id:"smeshing",title:"Smeshing"},a=void 0,r={unversionedId:"start/smeshing/smeshing_basic/smeshing",id:"start/smeshing/smeshing_basic/smeshing",title:"Smeshing",description:"Smeshing is the process of submitting blocks with transactions to the Spacemesh network according to the Spacemesh protocol. Before you can smesh, you need to commit free storage on your computer hard drive to Spacemesh.",source:"@site/docs/start/smeshing/smeshing_basic/smeshing.md",sourceDirName:"start/smeshing/smeshing_basic",slug:"/start/smeshing/smeshing_basic/smeshing",permalink:"/docs/start/smeshing/smeshing_basic/smeshing",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/smeshing/smeshing_basic/smeshing.md",tags:[],version:"current",frontMatter:{id:"smeshing",title:"Smeshing"},sidebar:"start",previous:{title:"Smapp Setup",permalink:"/docs/start/smeshing/smeshing_basic/setup"},next:{title:"Node Status",permalink:"/docs/start/smeshing/smeshing_basic/status"}},c={},l=[{value:"Running a Local Full Node",id:"running-a-local-full-node",level:2},{value:"Setting up Proof of Space (PoS) from Smeshing Screen",id:"setting-up-proof-of-space-pos-from-smeshing-screen",level:2},{value:"Viewing Smeshing Status",id:"viewing-smeshing-status",level:2},{value:"Changing the Smeshing Setup",id:"changing-the-smeshing-setup",level:2},{value:"Viewing Your Smeshing Rewards",id:"viewing-your-smeshing-rewards",level:2}],g={toc:l},p="wrapper";function h(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,s.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Smeshing is the process of submitting blocks with transactions to the Spacemesh network according to the Spacemesh protocol. Before you can smesh, you need to commit free storage on your computer hard drive to Spacemesh."),(0,i.yg)("h2",{id:"running-a-local-full-node"},"Running a Local Full Node"),(0,i.yg)("p",null,"In order to start smeshing, you must first run a full Spacemesh p2p node. When running Smapp for the first time, you will be prompted to set up a node. Click ",(0,i.yg)("strong",{parentName:"p"},"WALLET + NODE"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(8035).A,width:"2784",height:"1624"})),(0,i.yg)("h2",{id:"setting-up-proof-of-space-pos-from-smeshing-screen"},"Setting up Proof of Space (PoS) from Smeshing Screen"),(0,i.yg)("p",null,"If you started Smapp in wallet-only mode and you want to start smeshing, you need to configure the PoS generation settings. First, you have to select the directory where the initialized PoS data will be stored. At this moment, the minimum free space required is 256 GiB. Smapp automatically selects a directory for you, but you can change it by clicking on the directory link (",(0,i.yg)("inlineCode",{parentName:"p"},"E:\\Spacemesh\\PoS")," in the image below)."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(5805).A,width:"1314",height:"760"})),(0,i.yg)("p",null,"Once you have selected the directory, click ",(0,i.yg)("strong",{parentName:"p"},"NEXT")," to continue. The next screen will allow you to run the profiler tool that benchmarks the PoS generation capabilities of your system. Keep testing a combination of Nonces and CPU Threads until you get the desired combination with good performance. When testing Nonce values, be sure to increment or decrement them in multiples of 16. To better understand the benchmark and better interpret its results, read ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md#how-to-interpret-the-profiler-output"},"this"),". "),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(7742).A,width:"1316",height:"763"})),(0,i.yg)("p",null,"The next step is to select how much free space we want to commit to smeshing. The more space you commit, the higher your smeshing rewards will be (but the PoS initialization process will also take longer). Input your desired amount of space in Space Units (1 SU = 64 GiB, with the minimum PoS data size being 4 SUs) and click ",(0,i.yg)("strong",{parentName:"p"},"NEXT"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(5893).A,width:"1312",height:"754"})),(0,i.yg)("p",null,"Having decided the PoS data size, it is now time to select how you want to generate it. You can either use your GPU (if you have one) or your CPU. While you can choose any of the two options, it is highly recommended that you generate the PoS data with a GPU. Using a CPU will take too long and is also error-prone. Choose CPU only if you cannot possibly use a GPU. Once you make your choice, click ",(0,i.yg)("inlineCode",{parentName:"p"},"NEXT"),". "),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(2372).A,width:"1310",height:"754"})),(0,i.yg)("p",null,"On this screen, you can select the account to which you want to receive your smeshing rewards. There will only be one account available if you have not created anymore. Select your address and click ",(0,i.yg)("inlineCode",{parentName:"p"},"NEXT"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(4474).A,width:"1308",height:"757"})),(0,i.yg)("p",null,"Then, Smapp will display a summary of the options chosen so far. If all is to your liking, click ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE DATA")," to start the PoS initialization operation. If not, click ",(0,i.yg)("inlineCode",{parentName:"p"},"<")," and go back to change the options chosen so far."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(2460).A,width:"1311",height:"755"})),(0,i.yg)("p",null,"Finally, the PoS data is being created. Once this process is completed, Smapp will start smeshing automatically. "),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Leave the computer turned on 24/7 and ensure that it will not sleep or hibernate.")),(0,i.yg)("p",null,"Read the displayed information carefully and click ",(0,i.yg)("strong",{parentName:"p"},"GOT IT")," to finish the setup."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(419).A,width:"1309",height:"754"})),(0,i.yg)("h2",{id:"viewing-smeshing-status"},"Viewing Smeshing Status"),(0,i.yg)("p",null,"All the information related to the smeshing process can be seen by clicking on the ",(0,i.yg)("strong",{parentName:"p"},"SMESHING")," tab. There, you can view the node ID, the space allocated to smeshing, and the node status. If the node is working well, you will have the status: ",(0,i.yg)("strong",{parentName:"p"},"Smeshing"),". You can also pause the PoS generation by clicking the ",(0,i.yg)("inlineCode",{parentName:"p"},"PAUSE POS DATA GENERATION")," button."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(9859).A,width:"1310",height:"753"})),(0,i.yg)("h2",{id:"changing-the-smeshing-setup"},"Changing the Smeshing Setup"),(0,i.yg)("p",null,"To change the smeshing configuration, click ",(0,i.yg)("strong",{parentName:"p"},"EDIT"),". On this screen, you can ",(0,i.yg)("strong",{parentName:"p"},"Update PoS proving opts")," (modify PoS options e.g., size) or ",(0,i.yg)("strong",{parentName:"p"},"Stop smeshing and delete PoS data"),". Simply click on the corresponding buttons (namely ",(0,i.yg)("inlineCode",{parentName:"p"},"UPDATE")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"DELETE DATA"),")."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(8413).A,width:"1311",height:"756"})),(0,i.yg)("p",null,"In order to smesh again, you will have to restart the PoS data initialization process."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(7249).A,width:"2784",height:"1624"})),(0,i.yg)("h2",{id:"viewing-your-smeshing-rewards"},"Viewing Your Smeshing Rewards"),(0,i.yg)("p",null,"To view the smeshing rewards you have received so far, go to the ",(0,i.yg)("strong",{parentName:"p"},"WALLET")," tab."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(6298).A,width:"2560",height:"250"})),(0,i.yg)("p",null,"On the right of the screen, you will see the last transactions, including the smeshing rewards. If you want to see all the transactions, click ",(0,i.yg)("strong",{parentName:"p"},"ALL TRANSACTIONS")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(6939).A,width:"1392",height:"812"})),(0,i.yg)("p",null,"A new window with the log of the transactions will appear. On its right, you will see a daily, monthly, or yearly summary of the transactions. ",(0,i.yg)("strong",{parentName:"p"},"SMESHED")," refers to the smeshing rewards."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(4066).A,width:"1392",height:"812"})),(0,i.yg)("p",null,"If you want to view a transaction in detail, you have to click on it and then the relevant information will be displayed."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(3709).A,width:"2784",height:"1624"})))}h.isMDXComponent=!0},8413:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_gen_edit-300e8b83ffcb9016e56e6d55d8f94f7e.png"},9859:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_gen_status-ea2b360d9c9d00c6d683811ab69c849b.png"},7742:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_run_all_benchmarks-72a465697fa8fae02cc5189e48cbbde3.png"},4474:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_setup_coinbase-e473e7272bec439c50d414a4782e81d9.png"},419:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_setup_complete-4e4294740794813e53fcd44a6bd82191.png"},5805:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_setup_dir-955f8ee3e3e2ea1cecf55068f5d45d28.png"},2372:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_setup_processor-78f066aa16e7abf7fd1cb9997c0ded00.png"},5893:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_setup_size-80d9cd675244383d9676c4051b5e6abe.png"},2460:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pos_setup_summary-dc711f1dd54335c1fd0bcf554225bf08.png"},7249:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_smesher_setup-edf04ac0a460b353c22d8eabbf9b3e8a.png"},8035:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/new_wallet-7566885bf6fd040b98aac447372e8098.png"},6298:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/select_wallet-a6740a7a4aa89a55c4902bd178be58e6.png"},4066:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tx_log-e96bec3cc10d9095f8f67d63a21d18aa.png"},3709:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tx_log_details-9adc8ed5fa58dbd425ebe2a1d74096c0.png"},6939:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/wallet_screen-6b2b6e65392b3aa6b682362687d76fc7.png"}}]);