"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8816],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=r,g=f["".concat(c,".").concat(m)]||f[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[f]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(8168),r=(t(6540),t(5680));const a={id:"advanced_config",title:"Advanced Smapp Configuration"},i=void 0,s={unversionedId:"start/smeshing/smeshing_basic/advanced_config",id:"start/smeshing/smeshing_basic/advanced_config",title:"Advanced Smapp Configuration",description:"While running Smapp, you should see two config files in the Smapp data directory (by default, $HOME/.config/Spacemesh on Linux):",source:"@site/docs/start/smeshing/smeshing_basic/advanced_config.md",sourceDirName:"start/smeshing/smeshing_basic",slug:"/start/smeshing/smeshing_basic/advanced_config",permalink:"/docs/start/smeshing/smeshing_basic/advanced_config",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/smeshing/smeshing_basic/advanced_config.md",tags:[],version:"current",frontMatter:{id:"advanced_config",title:"Advanced Smapp Configuration"},sidebar:"start",previous:{title:"Additional Features",permalink:"/docs/start/smeshing/smeshing_basic/additional"},next:{title:"Advanced Wallet Features",permalink:"/docs/start/smeshing/smeshing_basic/advanced-wallet"}},c={},l=[],p={toc:l},f="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(f,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"While running Smapp, you should see two config files in the Smapp data directory (by default, ",(0,r.yg)("inlineCode",{parentName:"p"},"$HOME/.config/Spacemesh")," on Linux):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> ls -1 ~/.config/Spacemesh/node-config.*\n/home/lane/.config/Spacemesh/node-config.7c8cef2b.json\n/home/lane/.config/Spacemesh/node-config.json\n")),(0,r.yg)("p",null,"The first file (",(0,r.yg)("inlineCode",{parentName:"p"},"node-config.7c8cef2b.json"),"), is your local copy of the config (",(0,r.yg)("inlineCode",{parentName:"p"},"7c8cef2b")," is the genesis ID of the mainnet network). Config files for other networks will have different names. You can modify this file if you first exit Smapp. Save your changes and open Smapp again for your changes to take effect. The second file, the one called (",(0,r.yg)("inlineCode",{parentName:"p"},"node-config.json"),"), is the default network config and should not be touched. (It should match the config available via the discovery service, see below).  "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": Use caution when modifying the configuration! This config file must maintain its structure. If you update, e.g., the subkey of an object, it will not simply append it onto the main network config but will ",(0,r.yg)("em",{parentName:"p"},"overwrite the entire JSON object"),". See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/smapp/issues/1407"},"this")," for more information on the matter."))}d.isMDXComponent=!0}}]);