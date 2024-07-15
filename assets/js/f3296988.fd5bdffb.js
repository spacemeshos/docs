"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3818],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var s=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=s.createContext({}),l=function(e){var t=s.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(g.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,u=h["".concat(g,".").concat(m)]||h[m]||p[m]||i;return n?s.createElement(u,o(o({ref:t},c),{},{components:n})):s.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var g in t)hasOwnProperty.call(t,g)&&(r[g]=t[g]);r.originalType=e,r[h]="string"==typeof e?e:a,o[1]=r;for(var l=2;l<i;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(8168),a=(n(6540),n(5680));const i={id:"smeshing",title:"Smeshing"},o=void 0,r={unversionedId:"start/smeshing/smeshing_basic/smeshing",id:"start/smeshing/smeshing_basic/smeshing",title:"Smeshing",description:"Smeshing is the process of submitting blocks with transactions to the Testnet network according to the Spacemesh protocol. Before you can Smesh blocks, you need to commit free storage on your computer hard drive to Spacemesh",source:"@site/docs/start/smeshing/smeshing_basic/smeshing.md",sourceDirName:"start/smeshing/smeshing_basic",slug:"/start/smeshing/smeshing_basic/smeshing",permalink:"/docs/start/smeshing/smeshing_basic/smeshing",draft:!1,tags:[],version:"current",frontMatter:{id:"smeshing",title:"Smeshing"},sidebar:"start",previous:{title:"Smapp Setup",permalink:"/docs/start/smeshing/smeshing_basic/setup"},next:{title:"Node Status",permalink:"/docs/start/smeshing/smeshing_basic/status"}},g={},l=[{value:"Running a local node",id:"running-a-local-node",level:2},{value:"Setting up PoS from Smeshing Screen",id:"setting-up-pos-from-smeshing-screen",level:2},{value:"Viewing smeshing status",id:"viewing-smeshing-status",level:2},{value:"Changing smeshing setup",id:"changing-smeshing-setup",level:2},{value:"Modifying PoS data",id:"modifying-pos-data",level:3},{value:"Stop smeshing",id:"stop-smeshing",level:3},{value:"Viewing your smeshing rewards",id:"viewing-your-smeshing-rewards",level:2}],c={toc:l},h="wrapper";function p(e){let{components:t,...i}=e;return(0,a.yg)(h,(0,s.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Smeshing is the process of submitting blocks with transactions to the Testnet network according to the Spacemesh protocol. Before you can Smesh blocks, you need to commit free storage on your computer hard drive to Spacemesh"),(0,a.yg)("h2",{id:"running-a-local-node"},"Running a local node"),(0,a.yg)("p",null,"In order to start smeshing you have to run a full Spacemesh p2p node. When running the Smapp for the first time you will be prompted to set up a node. Click ",(0,a.yg)("strong",{parentName:"p"},"WALLET + NODE")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(8035).A,width:"2784",height:"1624"})),(0,a.yg)("h2",{id:"setting-up-pos-from-smeshing-screen"},"Setting up PoS from Smeshing Screen"),(0,a.yg)("p",null,"If you started Smapp in wallet-only mode, and you want to start smeshing, you need to set up Proof of Space."),(0,a.yg)("p",null,"First you have to select the directory where de data will be stored. At this moment the minimum free space required is 2KB. To do it, you have to click on SELECT DIRECTORY"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(3284).A,width:"2784",height:"1624"})),(0,a.yg)("p",null,"Once you've selected the directory, the ",(0,a.yg)("strong",{parentName:"p"},"NEXT")," button turns green and now we can click it to continue"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(731).A,width:"2784",height:"1624"})),(0,a.yg)("p",null,"The next step is to select how much free space we want to commit to Spacemesh. The more space you commit, the higher your smeshing rewards will be. We select the maximum available at this point, 4KB, and click on ",(0,a.yg)("strong",{parentName:"p"},"NEXT")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(8078).A,width:"2784",height:"1624"})),(0,a.yg)("p",null,"Now is time to select how we want to create the proof of space, all the options available for us will appear in this section. The NEXT button will remain gray till we make a choice."),(0,a.yg)("p",null,"** ",(0,a.yg)("em",{parentName:"p"},"The GPU options are faster than the CPU ones. Inside the box you can check the number of hashes per second.")),(0,a.yg)("p",null,"Also we have a checkbox available that allows us to pause the PoS creation when someone uses the computer"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(7205).A,width:"2784",height:"1624"})),(0,a.yg)("p",null,"Before create the data the Smapp will show us a summary with the creation options selected. If all is correct the we can click ",(0,a.yg)("strong",{parentName:"p"},"CREATE DATA"),", if not we can click ",(0,a.yg)("strong",{parentName:"p"},"<")," and go back to change it"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(2056).A,width:"2784",height:"1624"})),(0,a.yg)("p",null,"Finally, the proof of space data is being created, the app will start smeshing automatically when the setup is complete."),(0,a.yg)("p",null,"We have to leave the computer on 24/7 to smesh and be sure that the computer wont hibernate"),(0,a.yg)("p",null,"Click ",(0,a.yg)("strong",{parentName:"p"},"GOT IT")," to finish the set up"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(878).A,width:"2784",height:"1624"})),(0,a.yg)("h2",{id:"viewing-smeshing-status"},"Viewing smeshing status"),(0,a.yg)("p",null,"All the information related to the smeshing process is under the menu ",(0,a.yg)("strong",{parentName:"p"},"SMESHING")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(4334).A,width:"2560",height:"218"}),")"),(0,a.yg)("p",null,"There, we can view the node ID, the space allocated as a Proof of Space and the status of the node. If the node is working well you will have the Status: ",(0,a.yg)("strong",{parentName:"p"},"Smeshing")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(5983).A,width:"2784",height:"1624"})),(0,a.yg)("h2",{id:"changing-smeshing-setup"},"Changing smeshing setup"),(0,a.yg)("p",null,"If we want to change the configuration of the node we have to click on ",(0,a.yg)("strong",{parentName:"p"},"EDIT")),(0,a.yg)("p",null,"Now you can ",(0,a.yg)("strong",{parentName:"p"},"Change the PoS data")," or ",(0,a.yg)("strong",{parentName:"p"},"Stop smeshing and delete PoS data"),". You have to click on the corresponding button"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(9364).A,width:"2784",height:"1624"})),(0,a.yg)("h3",{id:"modifying-pos-data"},"Modifying PoS data"),(0,a.yg)("p",null,"This process is the same as initial configuration."),(0,a.yg)("h3",{id:"stop-smeshing"},"Stop smeshing"),(0,a.yg)("p",null,"If you want to stop smeshing and delete PoS data click on ",(0,a.yg)("strong",{parentName:"p"},"DELETE DATA")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(9364).A,width:"2784",height:"1624"})),(0,a.yg)("p",null,"In order to smeshing again you will have to setup the proof of space again"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(7249).A,width:"2784",height:"1624"})),(0,a.yg)("h2",{id:"viewing-your-smeshing-rewards"},"Viewing your smeshing rewards"),(0,a.yg)("p",null,"To view the smeshing rewards you have received you have to go to the Menu ",(0,a.yg)("strong",{parentName:"p"},"WALLET")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(6298).A,width:"2560",height:"250"})),(0,a.yg)("p",null,"At the right of the screen you can see the last transactions, including the smeshing rewards. If you want to see all the transactions click ",(0,a.yg)("strong",{parentName:"p"},"ALL TRANSACTIONS")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(6939).A,width:"1392",height:"812"})),(0,a.yg)("p",null,"A new windows with the log of the transactions appears, at the right you can see a daily, monthly or yearly summery of the transactions. ",(0,a.yg)("strong",{parentName:"p"},"SMESHED")," refers to the smeshing rewards."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(4066).A,width:"1392",height:"812"})),(0,a.yg)("p",null,"If you want to view a transaction in detail, you have to click over it and then information will show up"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(3709).A,width:"2784",height:"1624"})))}p.isMDXComponent=!0},9364:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_change-b217816132e10ab8413f2cacbefdb40f.png"},3284:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_setup_1_light-b367f379446941eacb78583c65f11c4c.png"},731:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_setup_2_light-cbd80e92bcbb6d1d220d3ee282a4f81e.png"},8078:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_setup_3_light-d4e59c036126d132df6afa4f07eb6f8f.png"},7205:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_setup_4_light-6a200c906998fbe1390555f38215163e.png"},2056:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_setup_5_light-2ff8f494037f3736cdffcc86f7408454.png"},878:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_setup_done-7f1d56f69a779aa3179b3ab1052e327a.png"},7249:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/POS_smesher_setup-edf04ac0a460b353c22d8eabbf9b3e8a.png"},8035:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/new_wallet-7566885bf6fd040b98aac447372e8098.png"},4334:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/select_smeshing-4b992c68dd7ca5256c72781912ae6c0e.png"},6298:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/select_wallet-a6740a7a4aa89a55c4902bd178be58e6.png"},5983:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/smesher_status-ed601a70f0ff8235d345e8a81142a0c6.png"},4066:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tx_log-e96bec3cc10d9095f8f67d63a21d18aa.png"},3709:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tx_log_details-9adc8ed5fa58dbd425ebe2a1d74096c0.png"},6939:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/wallet_screen-6b2b6e65392b3aa6b682362687d76fc7.png"}}]);