"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8045],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),g=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(a),y=n,h=p["".concat(o,".").concat(y)]||p[y]||d[y]||s;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var g=2;g<s;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>g});var r=a(8168),n=(a(6540),a(5680));const s={id:"ledger",title:"Ledger Guide"},l=void 0,i={unversionedId:"start/ledger",id:"start/ledger",title:"Ledger Guide",description:"How to use your Ledger device with the Spacemesh Wallet",source:"@site/docs/start/ledger.md",sourceDirName:"start",slug:"/start/ledger",permalink:"/docs/start/ledger",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/ledger.md",tags:[],version:"current",frontMatter:{id:"ledger",title:"Ledger Guide"},sidebar:"start",previous:{title:"Integration Guide",permalink:"/docs/start/integration"}},o={},g=[{value:"How to use your Ledger device with the Spacemesh Wallet",id:"how-to-use-your-ledger-device-with-the-spacemesh-wallet",level:2},{value:"<strong>Before you start, please make sure</strong>",id:"before-you-start-please-make-sure",level:3},{value:"<strong>How to install the Spacemesh app using Ledger Live</strong>",id:"how-to-install-the-spacemesh-app-using-ledger-live",level:3},{value:"<strong>Connect to the Spacemesh Wallet</strong>",id:"connect-to-the-spacemesh-wallet",level:3},{value:"<strong>View account balance</strong>",id:"view-account-balance",level:3},{value:"<strong>Receive SMH</strong>",id:"receive-smh",level:3},{value:"<strong>Send crypto assets</strong>",id:"send-crypto-assets",level:3},{value:"<strong>Support</strong>",id:"support",level:3}],c={toc:g},p="wrapper";function d(e){let{components:t,...s}=e;return(0,n.yg)(p,(0,r.A)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"how-to-use-your-ledger-device-with-the-spacemesh-wallet"},"How to use your Ledger device with the Spacemesh Wallet"),(0,n.yg)("p",null,"A Ledger device is a highly secure hardware wallet designed to safeguard your digital assets. By generating private keys offline, it significantly enhances the security of your cryptocurrencies, making it a popular choice among crypto enthusiasts who prioritize safety."),(0,n.yg)("p",null,"Ledger devices work seamlessly with various cryptocurrency wallets, including the Spacemesh Wallet. This integration allows you to manage your SMH funds securely, combining the robust security features of hardware wallets with the user-friendly interface of software wallets. Connecting your Ledger device to the Spacemesh Wallet ensures that your private keys remain protected within the Ledger's secure element chip while allowing you to interact with your funds through the Spacemesh Wallet."),(0,n.yg)("h3",{id:"before-you-start-please-make-sure"},(0,n.yg)("strong",{parentName:"h3"},"Before you start, please make sure")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You\u2019ve ",(0,n.yg)("a",{parentName:"p",href:"https://support.ledger.com/article/4416927988625-zd"},"initialized")," your Ledger device.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The latest firmware is ",(0,n.yg)("a",{parentName:"p",href:"https://support.ledger.com/article/4445777839901-zd"},"installed")," (Ledger Nano S plus).")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Ledger Live is ",(0,n.yg)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"ready to use"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"https://wallet.spacemesh.io/"},"https://wallet.spacemesh.io/")," or build the Wallet from ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/smapp-lite/"},"Github repository")))),(0,n.yg)("h3",{id:"how-to-install-the-spacemesh-app-using-ledger-live"},(0,n.yg)("strong",{parentName:"h3"},"How to install the Spacemesh app using Ledger Live")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open the Manager in Ledger Live.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Connect and unlock your Ledger Device.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If asked, follow the onscreen instructions and Allow Ledger Manager.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Find Spacemesh app in the app catalog."))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"find",src:a(5014).A,width:"2446",height:"1010"})),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click the Install button.\xa0"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"An installation window will appear.\xa0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Your device will display Processing\u2026\xa0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The app installation is confirmed."))),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"install",src:a(7319).A,width:"1280",height:"1133"})))),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Close Ledger Live.")),(0,n.yg)("h3",{id:"connect-to-the-spacemesh-wallet"},(0,n.yg)("strong",{parentName:"h3"},"Connect to the Spacemesh Wallet")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Connect and unlock your Ledger Device.\xa0")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open the Spacemesh app on your Ledger Device.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open the Spacemesh Wallet website ",(0,n.yg)("a",{parentName:"p",href:"https://wallet.spacemesh.io/"},"https://wallet.spacemesh.io/"),"\xa0")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a Wallet account.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click \u201cConnect Ledger\u201d button"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"connect",src:a(8108).A,width:"1960",height:"720"})))),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Select a device which you have (Ledger Nano X or Nano S or S Plus):")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"select",src:a(3183).A,width:"1218",height:"720"})),(0,n.yg)("ol",{start:7},(0,n.yg)("li",{parentName:"ol"},"The next step is to check all requirements:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"check",src:a(9733).A,width:"934",height:"904"})),(0,n.yg)("ol",{start:8},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If all requirements are met click the Reconnect button.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The next step is to click \u201cSettings\u201d button"))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"settings",src:a(1322).A,width:"1970",height:"698"})),(0,n.yg)("ol",{start:10},(0,n.yg)("li",{parentName:"ol"},"And select \u201cManage keys & accounts\u201d")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"manage",src:a(2745).A,width:"792",height:"650"})),(0,n.yg)("ol",{start:11},(0,n.yg)("li",{parentName:"ol"},"The next step is to click \u201cImport from Ledger\u201d")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"import",src:a(7569).A,width:"1337",height:"454"})),(0,n.yg)("ol",{start:12},(0,n.yg)("li",{parentName:"ol"},"You can give a custom name for your Ledger device and after that confirm operation by your password")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"xikIi7c2FHXysxXe3COrVUPSheuBtpcfhbpFj4gmu7KRLYOzANztwUU0IbsqvMqzuNK2",src:a(4817).A,width:"1040",height:"876"})),(0,n.yg)("ol",{start:13},(0,n.yg)("li",{parentName:"ol"},"\xa0There is a public key, imported from your Ledger device")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"key",src:a(3604).A,width:"1340",height:"596"})),(0,n.yg)("ol",{start:14},(0,n.yg)("li",{parentName:"ol"},"You can select your Ledger device by clicking on the \u201cSwitch\u201d button")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"switch",src:a(9176).A,width:"1986",height:"672"})),(0,n.yg)("ol",{start:15},(0,n.yg)("li",{parentName:"ol"},"Your Ledger device is connected to Spacemesh Wallet and you will see your Ledger account address")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"connected",src:a(8790).A,width:"1976",height:"668"})),(0,n.yg)("ol",{start:16},(0,n.yg)("li",{parentName:"ol"},"Please make sure that the address is identical to the address on your Ledger device.")),(0,n.yg)("h3",{id:"view-account-balance"},(0,n.yg)("strong",{parentName:"h3"},"View account balance")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"On the previous step you connected your Ledger device and the balance is shown under the address:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"balance",src:a(2591).A,width:"1954",height:"642"})),(0,n.yg)("h3",{id:"receive-smh"},(0,n.yg)("strong",{parentName:"h3"},"Receive SMH")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"You can get your Receive address by simply copying the address to the clipboard or by scanning the QR Code after clicking on the button \u201cReceive\u201d.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"receive",src:a(4215).A,width:"1954",height:"642"})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Please make sure that this address is identical to the address on your Ledger device.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Once you have sent SMH from another Wallet, you will see it in your transaction history and your SMH balance will be updated."))),(0,n.yg)("h3",{id:"send-crypto-assets"},(0,n.yg)("strong",{parentName:"h3"},"Send crypto assets")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"To send SMH to another Wallet please click \u201cSend\u201d button and insert the address where you want to send funds and the amount of SMH which you want to send. Click the \u201cNext\u201d button.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"send",src:a(1726).A,width:"1358",height:"1120"})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"On the next screen make sure that Destination address is the one where you want to send funds and that you sign the transaction with your HW Wallet. After that click the button \u201cSign & Publish\u201d.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"sign",src:a(7477).A,width:"1036",height:"1224"})),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"review1",src:a(1564).A,width:"918",height:"624"})),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Please review your transaction on your Ledger device")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"confirm",src:a(2251).A,width:"1280",height:"1130"})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Make sure that Destination address and Amount are correct:")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"principal",src:a(1118).A,width:"1280",height:"1032"})),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"destination",src:a(1461).A,width:"743",height:"689"})),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"amount",src:a(9096).A,width:"1252",height:"1010"})),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"If everything is correct, accept the transaction on the Ledger device. If you noticed that something is wrong, please reject the transaction on the Ledger device.")),(0,n.yg)("h3",{id:"support"},(0,n.yg)("strong",{parentName:"h3"},"Support")),(0,n.yg)("p",null,"The main Spacemesh support channel is ",(0,n.yg)("a",{parentName:"p",href:"https://chat.spacemesh.io/"},"Discord"),"."))}d.isMDXComponent=!0},7319:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger1-d820bd66e754bbed66386269cd0f7f3c.jpg"},4215:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger10-790fdf173c877f8188903bdb6cee5962.png"},1726:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger11-c995dd98b65762395090e39576f38815.png"},7477:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger12-d14fbb2d7e1bf38cfb3d0be393b44547.png"},1564:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger13-bfc67d10af3f004fae67d9fe11140286.png"},2251:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger14-607499e5e1f274e64525659e78439f00.jpg"},1118:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger15-57e2c545ff6890d8da0e4d741bc8dff4.jpg"},1461:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger15_2-457f87397dbbad4a74366610b22a8512.jpg"},9096:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger15_3-9c689590ea94d111cb8b8287b6bd5c64.jpg"},4817:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger16-49f0cfa84916b8c02e0f7a3860ec26a2.png"},8108:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger2-3d9fc868543fc0a1395ff42ea4e1dcbf.png"},9733:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger3-73b3240f38f773020cbf89c52fce8633.png"},1322:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger4-361d727107e45286de9ae0a75e35809e.png"},2745:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger5-f20981c6868200e7c83e37dc00688c53.png"},9176:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger6-852e51d82b52e5d0d8018272ad95cda0.png"},7569:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger7-f8436dd8419d43fc4fc52e5c8dca7a5e.png"},8790:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger8-827975101eaa2bb7f725eeb381941575.png"},2591:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger9-cae9fda3f15fa5088c75d3afa4d43864.png"},3183:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger_connect-bb881da6b6ce3cd60fbea04f4f8eb1d6.png"},3604:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ledger_key-452697e53842a15657e288024d2e8abf.png"},5014:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/spacemesh_app-4a1130b292193400b99dac305801c40c.png"}}]);