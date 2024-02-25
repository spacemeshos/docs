"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6455],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const s={id:"wallet",title:"Using Your Wallet"},l=void 0,r={unversionedId:"start/smapp/wallet",id:"start/smapp/wallet",title:"Using Your Wallet",description:"The Spacemesh App includes a Wallet for managing your Smesh.",source:"@site/docs/start/smapp/wallet.md",sourceDirName:"start/smapp",slug:"/start/smapp/wallet",permalink:"/docs/start/smapp/wallet",draft:!1,tags:[],version:"current",frontMatter:{id:"wallet",title:"Using Your Wallet"},sidebar:"start",previous:{title:"Smeshing",permalink:"/docs/start/smapp/smeshing"},next:{title:"Advanced Wallet Features",permalink:"/docs/start/smapp/advanced-wallet"}},i={},c=[{value:"Accessing your Wallet",id:"accessing-your-wallet",level:2},{value:"Checking your Smesh Balance",id:"checking-your-smesh-balance",level:2},{value:"Viewing Transactions and Rewards",id:"viewing-transactions-and-rewards",level:2},{value:"Sending Smidge",id:"sending-smidge",level:2},{value:"Tracking your Transaction",id:"tracking-your-transaction",level:2},{value:"Getting Smesh from another account",id:"getting-smesh-from-another-account",level:2},{value:"About Accounts and Addresses",id:"about-accounts-and-addresses",level:3},{value:"Locking Access to your Wallet",id:"locking-access-to-your-wallet",level:2}],u={toc:c};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Spacemesh App includes a Wallet for managing your Smesh."),(0,o.kt)("p",null,"Follow the instructions on this page to learn how to use your wallet."),(0,o.kt)("h2",{id:"accessing-your-wallet"},"Accessing your Wallet"),(0,o.kt)("p",null,"A new Wallet is created when you open the Spacemesh App for the first time."),(0,o.kt)("p",null,"You are prompted to secure your Wallet with a password, and we recommend that you store it in a password manager app, such as ",(0,o.kt)("a",{parentName:"p",href:"https://1password.com"},"1Password"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your Wallet data is saved in a ",(0,o.kt)("em",{parentName:"p"},"wallet file")," (in JSON format) on your hard drive. The ",(0,o.kt)("em",{parentName:"p"},"wallet file")," includes sensitive private data that is encrypted in the file with your password.")),(0,o.kt)("p",null,"When you open the Spacemesh App again you should see this screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6719).Z,width:"1392",height:"812"})),(0,o.kt)("p",null,"Enter your Wallet password to unlock access to your wallet."),(0,o.kt)("p",null,"The Wallet data is loaded from the wallet file to the App and is decrypted using the password you provide."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT: you will lose access to your wallet if you forget your password.")," For this reason, we recommend that you create a ",(0,o.kt)("inlineCode",{parentName:"p"},"12-word backup")," as soon as possible. See how to back up your wallet in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/start/smapp/advanced-wallet"},"advanced wallet guide"),".")),(0,o.kt)("h2",{id:"checking-your-smesh-balance"},"Checking your Smesh Balance"),(0,o.kt)("p",null,"After unlocking your Wallet, you should see the following screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9959).Z,width:"1392",height:"812"})),(0,o.kt)("p",null,"The left side of the screen displays the Wallet info:"),(0,o.kt)("p",null,"Your Wallet is configured with one main account called ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Account"),"."),(0,o.kt)("p",null,"Think of this account as your crypto bank account. You use this account to hold SMH and to send and receive SMH coins."),(0,o.kt)("p",null,"Your account is identified by a unique ",(0,o.kt)("em",{parentName:"p"},"public address.")," It is displayed under the account name in a short form that looks like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"0xebee....ee0443"),". Your full account address is a long hexidecimal number, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"0xebee4e63a6b0f829f3ad06fb6c4aa80a6860774bc25e9c1b1b2c69b8b4ee0443"),"."),(0,o.kt)("p",null,"Your account balance is displayed at the bottom left side of the screen. SMH is the symbol for Smesh coin."),(0,o.kt)("p",null,"You can copy your account's public address to your computer's clipboard by clicking on the copy icon on the right side of the displayed  account number. This is useful if you want to receive SMH from another account holder. In this case, you just need to send the copied full account address to that person via any digital means, such as a text message or email."),(0,o.kt)("h2",{id:"viewing-transactions-and-rewards"},"Viewing Transactions and Rewards"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL TRANSACTIONS")," button to access your wallet transactions log screen."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9959).Z,width:"1392",height:"812"})),(0,o.kt)("p",null,"In this screen you should see a list of all incoming and outgoing transactions from the account which was selected in the Wallet screen."),(0,o.kt)("p",null,"On the righthand side you'll see a summary view of your account activity."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2634).Z,width:"1392",height:"812"})),(0,o.kt)("p",null,"In the transactions log you should see each transaction you have sent from your account and each transaction that was sent to your account, as well as incoming Smeshing rewards."),(0,o.kt)("p",null,"Click on a transaction to view its details."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1373).Z,width:"2784",height:"1624"})),(0,o.kt)("h2",{id:"sending-smidge"},"Sending Smidge"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the Wallet screen by clicking ",(0,o.kt)("inlineCode",{parentName:"li"},"WALLET")," in the top-left side of the screen.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9959).Z,width:"1392",height:"812"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"SEND")," button.")),(0,o.kt)("p",null,"You should see the Send SMH screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5232).Z,width:"2784",height:"1624"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the recipient's account address that he or she shared with you into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Send to")," field.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Smidge (1 trillionth of a smesh) amount you would like to send to the recipient in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Amount")," field."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount must be less than your account's SMH balance, as you cannot spend coins that you do not have.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3007).Z,width:"2784",height:"1624"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"NEXT"),".")),(0,o.kt)("p",null,"Review the transaction information in the summary screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8971).Z,width:"2784",height:"1624"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"SEND")," to execute the transaction.")),(0,o.kt)("p",null,"You should now see this screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8026).Z,width:"2784",height:"1624"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Click on 'DONE'.")),(0,o.kt)("p",null,"Congratulations! You have just sent your first SMH!"),(0,o.kt)("h2",{id:"tracking-your-transaction"},"Tracking your Transaction"),(0,o.kt)("p",null,"Your recent transactions are displayed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transactions")," area of your Wallet Screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(866).Z,width:"2314",height:"1680"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL TRANSACTIONS")," to view the full transactions log.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on a transaction to view its details:"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1373).Z,width:"2784",height:"1624"})),(0,o.kt)("p",null,"Notice the transaction status. A new transaction you just executed will be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PENDING")," state and should move to ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIRMED")," state once it has been added to the Spacemesh ledger."),(0,o.kt)("h2",{id:"getting-smesh-from-another-account"},"Getting Smesh from another account"),(0,o.kt)("h3",{id:"about-accounts-and-addresses"},"About Accounts and Addresses"),(0,o.kt)("p",null,"By default, your Spacemesh Wallet has one main account. That account has one public address you can share with anyone in order to receive Smesh."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"REQUEST <-")," button on your wallet screen:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9959).Z,width:"1392",height:"812"})),(0,o.kt)("p",null,"You should see this screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7211).Z,width:"2784",height:"1624"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the copy icon next to your account public address to copy it to the clipboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Send the copied address to a friend to request that they send you SMH. You can paste the address directly into an app such as Whatsapp, Signal, or Telegram.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ask that person to send SMH to this address using his or her Spacemesh wallet."))),(0,o.kt)("h2",{id:"locking-access-to-your-wallet"},"Locking Access to your Wallet"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When you are done using your wallet in the App, you should log out from it to prevent other people with direct access to your computer from viewing your SMH balance, from performing transactions and from viewing your transaction history.")),(0,o.kt)("p",null,"To log out from your wallet, just click on the Lock icon in the top right side of the wallet screen. It looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9827).Z,width:"102",height:"112"})),(0,o.kt)("p",null,"To access your wallet again, open the app and re-enter your Wallet password."))}d.isMDXComponent=!0},9827:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},6719:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/password-2f18da5609b20bf3e7d32f04eab8b541.png"},7211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/request_coins-321d027440fe1552f5edab9fc90c9383.png"},5232:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/send_smc_tx-98978e843263125af0ee408a6c7d2a7e.png"},3007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/send_smc_tx_1-e62e7da2708f702861376f25095582e0.png"},8971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/send_smc_tx_review-1ccca97dd69f60474cd423720d75556c.png"},8026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/send_smc_tx_sent-d458cdff0cce9b7038db303aae9b7dd2.png"},2634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_log-e96bec3cc10d9095f8f67d63a21d18aa.png"},1373:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_log_details-9adc8ed5fa58dbd425ebe2a1d74096c0.png"},9959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_screen-6b2b6e65392b3aa6b682362687d76fc7.png"},866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_tx_view-04ea9be26aaed58e9f26d170f6b36b31.png"}}]);