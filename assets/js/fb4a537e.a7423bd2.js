"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1298],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var o=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(t),y=i,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||r;return t?o.createElement(m,l(l({ref:n},s),{},{components:t})):o.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=y;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(8168),i=(t(6540),t(5680));const r={id:"netconfig",title:"Network Configuration"},l=void 0,a={unversionedId:"start/smeshing/netconfig",id:"start/smeshing/netconfig",title:"Network Configuration",description:"The Spacemesh App (the App) should work on most home broadband Internet connections without a need to manually configure your network or firewall. If you see a network connection error in the App then try following the steps described below to resolve this issue.",source:"@site/docs/start/smeshing/netconfig.md",sourceDirName:"start/smeshing",slug:"/start/smeshing/netconfig",permalink:"/docs/start/smeshing/netconfig",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/smeshing/netconfig.md",tags:[],version:"current",frontMatter:{id:"netconfig",title:"Network Configuration"},sidebar:"start",previous:{title:"Practical Considerations",permalink:"/docs/start/considerations"},next:{title:"Install Smapp",permalink:"/docs/start/smeshing/smeshing_basic/install"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Computer Clock Configuration",id:"computer-clock-configuration",level:2},{value:"Windows 10",id:"windows-10",level:2},{value:"Security Alert on first run",id:"security-alert-on-first-run",level:3},{value:"TCP Port 7153 Rule",id:"tcp-port-7153-rule",level:3},{value:"UDP Port 7153 Rule",id:"udp-port-7153-rule",level:3},{value:"OS X",id:"os-x",level:2},{value:"Linux",id:"linux",level:2},{value:"Router Configuration",id:"router-configuration",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"The Spacemesh App (the App) should work on most home broadband Internet connections without a need to manually configure your network or firewall. If you see a network connection error in the App then try following the steps described below to resolve this issue.")),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"In order to participate in the Spacemesh network and to earn smeshing rewards your network and computer firewall (and in some cases your home network router) needs to be configured, so the App is able to accept incoming Internet connections on ",(0,i.yg)("inlineCode",{parentName:"p"},"port 7153")," for both ",(0,i.yg)("inlineCode",{parentName:"p"},"TCP")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"UDP"),"."),(0,i.yg)("p",null,"The App attempts to automatically configure your network using UPnP so in most cases you do not need to manually configure your network to support Spacemesh."),(0,i.yg)("h2",{id:"computer-clock-configuration"},"Computer Clock Configuration"),(0,i.yg)("p",null,"Please make sure that your computer clock is synced to a time server such as ",(0,i.yg)("inlineCode",{parentName:"p"},"time.windows.com")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"time.apple.com"),". You must be synced to NTP time to be able to connect to the Spacemesh network."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Verify you are synced with an NTP server using your computer's ",(0,i.yg)("inlineCode",{parentName:"p"},"Date & Time")," settings.")),(0,i.yg)("h2",{id:"windows-10"},"Windows 10"),(0,i.yg)("h3",{id:"security-alert-on-first-run"},"Security Alert on first run"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"You may see a Windows security alert when you launch the App for the first time. Check the checkbox 'Private networks' and click 'Allow access'.")),(0,i.yg)("p",null,"If you didn't click on ",(0,i.yg)("inlineCode",{parentName:"p"},"Allow access")," when prompted by Windows, you may need to manually permit the App to receive connections from the internet on TCP port 7153 and on UDP port 7153."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Follow these instructions to configure incoming connections rules for these two ports.")),(0,i.yg)("h3",{id:"tcp-port-7153-rule"},"TCP Port 7153 Rule"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Type ",(0,i.yg)("inlineCode",{parentName:"li"},"Firewall")," in your Windows task bar search box."),(0,i.yg)("li",{parentName:"ol"},"Open the ",(0,i.yg)("inlineCode",{parentName:"li"},"Windows Defender Firewall")," app from the search results."),(0,i.yg)("li",{parentName:"ol"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Advanced settings"),"."),(0,i.yg)("li",{parentName:"ol"},"Right-click ",(0,i.yg)("inlineCode",{parentName:"li"},"Inbound Rules")," and select ",(0,i.yg)("inlineCode",{parentName:"li"},"New Rule..."),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Port")," for the new rule type and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"TCP")," and, enter ",(0,i.yg)("inlineCode",{parentName:"li"},"7153")," in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Specific local ports")," text box click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Allow the connection")," in the next screen and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Don't change the default options in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Apply Rule")," screen and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Name the rule ",(0,i.yg)("inlineCode",{parentName:"li"},"Spacemesh TCP")," and click Finish.")),(0,i.yg)("h3",{id:"udp-port-7153-rule"},"UDP Port 7153 Rule"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Type ",(0,i.yg)("inlineCode",{parentName:"li"},"Firewall")," in your Windows task bar search box."),(0,i.yg)("li",{parentName:"ol"},"Open the ",(0,i.yg)("inlineCode",{parentName:"li"},"Windows Defender Firewall")," app from the search results."),(0,i.yg)("li",{parentName:"ol"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Advanced settings"),"."),(0,i.yg)("li",{parentName:"ol"},"Right-click ",(0,i.yg)("inlineCode",{parentName:"li"},"Inbound Rules")," and select ",(0,i.yg)("inlineCode",{parentName:"li"},"New Rule..."),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Port")," for the new rule type and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"UDP")," and, enter ",(0,i.yg)("inlineCode",{parentName:"li"},"7153")," in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Specific local ports")," text box click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Allow the connection")," in the next screen and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Don't change the default options in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Apply Rule")," screen and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Next"),"."),(0,i.yg)("li",{parentName:"ol"},"Name the rule ",(0,i.yg)("inlineCode",{parentName:"li"},"Spacemesh UDP")," and click Finish.")),(0,i.yg)("h2",{id:"os-x"},"OS X"),(0,i.yg)("p",null,"The App may be able to accept incoming connections by default depending on your Firewall settings. For example, when you download a signed app distribution from Spacemesh."),(0,i.yg)("p",null,"Follow these steps if you see a connection error status displayed in the App."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Open the ",(0,i.yg)("inlineCode",{parentName:"li"},"System Preferences App"),"."),(0,i.yg)("li",{parentName:"ol"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Privacy and Security"),"."),(0,i.yg)("li",{parentName:"ol"},"Click on the ",(0,i.yg)("inlineCode",{parentName:"li"},"Firewall")," tab."),(0,i.yg)("li",{parentName:"ol"},"Click the ",(0,i.yg)("inlineCode",{parentName:"li"},"Firewall Options")," button."),(0,i.yg)("li",{parentName:"ol"},"Uncheck the ",(0,i.yg)("inlineCode",{parentName:"li"},"Block all incoming connections")," checkbox if it is checked."),(0,i.yg)("li",{parentName:"ol"},"Check the ",(0,i.yg)("inlineCode",{parentName:"li"},"Automatically allow downloaded signed software to receive incoming connections")," checkbox OR add the ",(0,i.yg)("inlineCode",{parentName:"li"},"Spacemesh App")," to the list of apps and chose ",(0,i.yg)("inlineCode",{parentName:"li"},"Allow incoming connections")," for it."),(0,i.yg)("li",{parentName:"ol"},"Click OK.")),(0,i.yg)("p",null,"For additional information about the OS X Firewall please ",(0,i.yg)("a",{parentName:"p",href:"https://support.apple.com/en-il/HT201642"},"read this guide")," from Apple."),(0,i.yg)("h2",{id:"linux"},"Linux"),(0,i.yg)("p",null,"If you are running Linux then you should be able to configure your firewall via the command line. Check your linux distribution documentation for additional info."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"router-configuration"},"Router Configuration"),(0,i.yg)("p",null,"Your home router or Internet access point (or both) may be blocking the App from receiving data from the network. The App attempts to automatically configure your router using UPnP so in most cases you do not need to manually configure your router."),(0,i.yg)("p",null,"If you still can't connect to the p2p network then you need to configure your router to forward both UDP and TCP incoming network traffic on port 7153 to the computer that you are running the App on."),(0,i.yg)("p",null,"To configure your router follow the instructions provided by your router hardware maker for your router model."))}d.isMDXComponent=!0}}]);