"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5790],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var i=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),h=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),u=r,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||n;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<n;h++)o[h]=a[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var i=a(8168),r=(a(6540),a(5680));const n={id:"rewards",title:"How Rewards Work"},o=void 0,s={unversionedId:"start/rewards",id:"start/rewards",title:"How Rewards Work",description:"In Spacemesh, miners earn rewards for successfully proving eligibility and submitting valid block proposals to the network in their designated eligibility slots. Note that, at present, the only behavior that's rewarded is submission of block proposals, but in the future we intend to additionally incentivize other useful behavior such as participating in Hare consensus.",source:"@site/docs/start/rewards.md",sourceDirName:"start",slug:"/start/rewards",permalink:"/docs/start/rewards",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/rewards.md",tags:[],version:"current",frontMatter:{id:"rewards",title:"How Rewards Work"},sidebar:"start",previous:{title:"Troubleshooting",permalink:"/docs/start/smeshing/smeshing_adv/troubleshooting"},next:{title:"Integration Guide",permalink:"/docs/start/integration"}},l={},h=[{value:"Estimated Rewards",id:"estimated-rewards",level:2},{value:"Eligibility Slots",id:"eligibility-slots",level:2},{value:"Earned Rewards",id:"earned-rewards",level:2},{value:"Missed Rewards",id:"missed-rewards",level:2},{value:"Reward Lifecycle",id:"reward-lifecycle",level:2}],c={toc:h},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,i.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In Spacemesh, miners earn rewards for successfully proving eligibility and submitting valid block proposals to the network in their designated eligibility slots. Note that, at present, the only behavior that's rewarded is submission of block proposals, but in the future we intend to additionally incentivize other useful behavior such as participating in Hare consensus."),(0,r.yg)("p",null,"As with many other blockchain networks, rewards consist of two components: block subsidy, i.e., coins newly minted by the protocol; and transaction fees. While we expect transaction fees to increase and form a larger percentage of rewards over time, at this early stage in the network lifecycle the vast majority of rewards (more than 99.99%) derive from block subsidies. As such the remainder of this analysis will ignore transaction fees for the purpose of estimating rewards."),(0,r.yg)("h2",{id:"estimated-rewards"},"Estimated Rewards"),(0,r.yg)("p",null,"Three factors are necessary to calculate a miner's estimated rewards: the miner's ",(0,r.yg)("strong",{parentName:"p"},"weight")," in a given epoch, the ",(0,r.yg)("strong",{parentName:"p"},"total network weight")," in the epoch, and the ",(0,r.yg)("strong",{parentName:"p"},"per-layer subsidy.")),(0,r.yg)("p",null,"As described above, a miner's weight in a given epoch (as encoded in the ATX they submitted to establish eligibility for the epoch) is simply the number of storage units proven times the number of PoET ticks. For instance, a miner with 4 SU (the minimum) and a PoET proof with 100k ticks would have a weight of 400k."),(0,r.yg)("p",null,"The total network weight is (as the name suggests) the weight of ",(0,r.yg)("em",{parentName:"p"},"all")," eligible miners in the same epoch. A miner's ",(0,r.yg)("strong",{parentName:"p"},"relative weight")," is the weight of their ATX in a given epoch divided by the total network weight in that epoch. There isn't currently an easy way to retrieve total network weight but, given that at present nearly all miners are using the same PoET proof or a PoET proof with a similar number of ticks, it can be estimated by dividing the miner's total committed storage by the total network storage (as displayed on the ",(0,r.yg)("a",{parentName:"p",href:"https://dash.spacemesh.io/"},"Network Dashboard"),"). For instance, a miner with 1TiB of storage of a network that's 18PiB has 1/18000 = 5.6e-5 of the total network space."),(0,r.yg)("p",null,"The final piece of the puzzle is the per-layer reward. This decays gradually from layer to layer. The simplest way to see the current value is to check ",(0,r.yg)("a",{parentName:"p",href:"https://explorer.spacemesh.io/layers"},"LAYERS")," in the Explorer. As of ",(0,r.yg)("a",{parentName:"p",href:"https://explorer.spacemesh.io/layers/17980"},"layer 17980"),", 476.614 SMH are being minted as a subsidy each layer. Multiply this by the number of layers per epoch, 4032, to get the approximate total new issuance per epoch: for epoch 4 this is roughly 4032 * 476.614 = 1,921,707 SMH."),(0,r.yg)("p",null,"Finally, to calculate a miner's estimated rewards for a given epoch simply multiply its relative weight by the total epoch issuance. A miner with 5.6e-5 of the total weight would be expected to earn around 5.6e-5*1921707 = 107 SMH in this epoch."),(0,r.yg)("p",null,"Note: It is possible to read more precise values from a node's state database (see below). This sample SQL query will give you the total weight for an epoch:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT SUM(effective_num_units*tick_count) FROM atxs WHERE epoch=2;\n781394721\n")),(0,r.yg)("p",null,"And this query will give an individual miner's relative weight:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT 1.0*atxs.effective_num_units*atxs.tick_count/total_weight.weight\n  FROM atxs,\n       (SELECT SUM(effective_num_units*tick_count) weight FROM atxs WHERE epoch=2) AS total_weight\n  WHERE hex(atxs.id) = '1281641D519CCC57F38C38294BB873A60367DB71AD0FA8DFBD146A55FD60626C' AND atxs.epoch=2;\n0.000519591429387197\n")),(0,r.yg)("p",null,"Some miners may find community-run tools like ",(0,r.yg)("a",{parentName:"p",href:"https://www.spacemeshcalculator.com/"},"Spacemesh Calculator")," helpful in doing this math, but we cannot vouch for their correctness."),(0,r.yg)("h2",{id:"eligibility-slots"},"Eligibility Slots"),(0,r.yg)("p",null,"Every eligible miner has one or more slots per epoch where they're eligible to produce a proposal (and thus earn a reward). Every miner with at least the minimum storage (4 storage units) is guaranteed at least one slot per epoch. There are 50 slots per layer (i.e., on average 50 proposals per layer) or 201,600 slots per epoch. The slots are assigned randomly and unpredictably at the start of the epoch so that even the miner itself doesn't know its own eligibility slots before the epoch starts. You can calculate the estimated number of slots for a given miner using similar math to the above: multiply the miner's relative epoch weight by 201,600 with floor=1."),(0,r.yg)("p",null,"There are several ways to see a miner's actual eligibility slots for a given epoch. The node prints its eligibilities in the log at the beginning of an epoch, e.g.:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'2023-08-11T13:45:00.622-0400    INFO    abcde.proposalBuilder   proposal eligibility for an epoch       {"node_id": "abcde", "module": "proposalBuilder", "epoch_id": 2, "beacon": "e3e3389e", "weight": 141435, "min activeset weight": 5000000, "total weight": 305096691, "total num slots": 93, "num layers eligible": 93, "layers to num proposals": [{"layer": 8091, "slots": 1}, {"layer": 8179, "slots": 1}, {"layer": 8212, "slots": 1}, {"layer": 8215, "slots": 1}, {"layer": 8248, "slots": 1}, {"layer": 8306, "slots": 1}, {"layer": 8382, "slots": 1}, {"layer": 8389, "slots": 1}, {"layer": 8411, "slots": 1}, {"layer": 8432, "slots": 1}, {"layer": 8454, "slots": 1}...], "name": "proposalBuilder"}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"EventsStream")," API stream prints the same information:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'> grpcurl -d "{}" -plaintext localhost:9093 spacemesh.v1.AdminService.EventsStream\n...\n{\n  "timestamp": "2023-09-13T19:35:00.658169226Z",\n  "help": "Computed eligibilities for the epoch. Rewards will be received after publishing proposals at specified layers. Total amount of rewards in SMH will be based on other participants in the layer.",\n  "eligibilities": {\n    "epoch": 4,\n    "beacon": "nhiDhQ==",\n    "atx": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "activeSetSize": 16582,\n    "eligibilities": [\n      {\n        "layer": 19048,\n        "count": 1\n      },\n      {\n        "layer": 19460,\n        "count": 1\n      },\n      {\n        "layer": 18839,\n        "count": 1\n      },\n')),(0,r.yg)("p",null,"In Smapp the same thing looks like this:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://github.com/spacemeshos/wiki/assets/3316532/be77ccd8-ab5f-4763-8a98-8c37f606241e",alt:"image"})),(0,r.yg)("p",null,"In order to successfully earn a reward for a given eligibility slot, a miner has to be running up to date software, has to be online and fully synced, and has to successfully generate and broadcast a proposal during the slot. The actual, final reward that's earned in a given slot depends upon the behavior of other eligible miners in the same slot. If an eligible miner fails to submit a proposal, that miner's portion of the reward is distributed to the eligible miners that successfully publish proposals."),(0,r.yg)("h2",{id:"earned-rewards"},"Earned Rewards"),(0,r.yg)("p",null,"Smapp displays actual earned rewards on the SMESHING screen:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://github.com/spacemeshos/wiki/assets/3316532/fb1ce5fa-fac5-4f36-9ef8-e22988487ce4",alt:"image"})),(0,r.yg)("p",null,"They're also available ",(0,r.yg)("a",{parentName:"p",href:"https://explorer.spacemesh.io/accounts/sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g/rewards"},"in the explorer"),". Finally, actual rewards for a given coinbase address can also be read from the command line using the API:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'> grpcurl -plaintext -d "{ \\"filter\\": { \\"account_id\\": { \\"address\\": \\"sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g\\" }, \\"account_data_flags\\": 2 } }" 127.0.0.1:9092 spacemesh.v1.GlobalStateService.AccountDataQuery\n{\n  "totalResults": 128,\n  "accountItem": [\n    {\n      "reward": {\n        "layer": {\n          "number": 8203\n        },\n        "total": {\n          "value": "17127640416"\n        },\n        "layerReward": {\n          "value": "17127640416"\n        },\n        "coinbase": {\n          "address": "sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g"\n        }\n      }\n    },\n    {\n      "reward": {\n        "layer": {\n          "number": 8219\n        },\n        "total": {\n          "value": "14085313144"\n        },\n        "layerReward": {\n          "value": "14085307220"\n        },\n        "coinbase": {\n          "address": "sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g"\n        }\n      }\n    },\n...\n')),(0,r.yg)("p",null,"You may also find this community-run ",(0,r.yg)("a",{parentName:"p",href:"http://fcmx.net/sm-eligibilities/"},"SpaceMesh Lamba Chunks"),' visual reward tracker useful. You copy your eligibility info from your logfile (grep for "proposal eligibility for an epoch" in your log) and paste it into a Node to see a visual representation of all past eligibilities and rewards, and upcoming eligibility slots. It should look something like this:'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://github.com/spacemeshos/wiki/assets/3316532/3dd5d040-f65c-46ba-9b8a-d35756f10244",alt:"image"})),(0,r.yg)("h2",{id:"missed-rewards"},"Missed Rewards"),(0,r.yg)("p",null,'If your node is offline or not fully synced when an eligible slot arrives, it may fail to produce a proposal and thus miss a reward for the slot. If a proposal is produced or gossiped too late, or not received by enough other nodes in time, it may also not be included in the canonical block and thus the slot reward may be missed. Note that this has no bearing whatsoever upon future eligibilities, and note also that the protocol does not allow a miner to subsequently "earn back" lost rewards. In this scenario, the coins that the miner would\'ve received will instead be allocated proportionally (i.e., by weight) to the other eligible miners that successfully produced proposals in the same slot. By far the most common cause of missed rewards is node updates. We strongly encourage you to closely track your node eligibilities and not restart or upgrade within 2-3 layers before an upcoming eligibility (so that the node has a chance to fully initialize and sync in time).'),(0,r.yg)("p",null,"There are also rare scenarios when no proposals are produced at all for a given layer, e.g., when the ",(0,r.yg)("a",{parentName:"p",href:"#hare"},"Hare")," fails due to a network issue such as many miners temporarily being offline. In these scenarios, which are usually short-lived, no proposals are produced at all, a layer will have no block and no transactions, and no rewards will be issued. In this case, the coins that would've been issued as part of the layer subsidy simply fail to get minted, i.e., they will never exist, will never enter circulation, and for all intents and purposes may be considered burnt."),(0,r.yg)("h2",{id:"reward-lifecycle"},"Reward Lifecycle"),(0,r.yg)("p",null,"The end to end reward lifecycle works as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Mining node performs ",(0,r.yg)("a",{parentName:"li",href:"#post-initialization-2"},"PoST initialization")),(0,r.yg)("li",{parentName:"ol"},"Mining node generates its initial ",(0,r.yg)("a",{parentName:"li",href:"#proof-generation"},"proof of spacetime")),(0,r.yg)("li",{parentName:"ol"},"Mining node registers with the ",(0,r.yg)("a",{parentName:"li",href:"#poet"},"PoET")),(0,r.yg)("li",{parentName:"ol"},"Mining node receives proof from PoET server and uses it to generate another proof of spacetime (proving that it still has the data)"),(0,r.yg)("li",{parentName:"ol"},"Mining node bundles this proof into an ATX and submits it to the network to establish eligibility in the following epoch"),(0,r.yg)("li",{parentName:"ol"},"The new epoch begins. The mining node calculates its eligibilities for the new epoch (based on active set and random beacon)."),(0,r.yg)("li",{parentName:"ol"},"Mining node participates in gossip normally and follows the network, remaining in sync, periodically joining a Hare committee, etc."),(0,r.yg)("li",{parentName:"ol"},"When an eligibility slot (layer) arrives, the miner generates a block proposal based on its view of the network (which valid transactions it's collected into its mempool, signs it, and broadcasts it to the rest of the network"),(0,r.yg)("li",{parentName:"ol"},"A few seconds later the ",(0,r.yg)("a",{parentName:"li",href:"/docs/learn/hare"},"Hare protocol")," runs for the layer. A random committee of nodes is picked to come to consensus on the canonical set of valid proposals for the layer (i.e., those received on time and with valid eligibility proofs) and they're collated into a new block. Assuming the mining node's proposal is valid and it was received on time, it should be included in the new block."),(0,r.yg)("li",{parentName:"ol"},"A few minutes later the new block is confirmed by the ",(0,r.yg)("a",{parentName:"li",href:"/docs/learn/tortoise"},"Tortoise")," and its contents become a part of the canonical mesh. Rewards are paid to all miners that participated in the construction of the block by submitting valid, on time proposals.")),(0,r.yg)("p",null,"Note that this describes the happy flow. Many things can happen to interfere with this process or slow it down. Proposals may not be gossiped or received on time, in which case a block still be created from the valid proposals that were received on time. If not enough nodes are online to select a Hare committee, Hare may fail, which would temporarily result in empty layers (i.e., layers without blocks), until nodes come back online and a Hare quorum can be re-established."),(0,r.yg)("p",null,"See also ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn/rewards"},"Rewards"),', in our "Protocol 101" primer.'))}d.isMDXComponent=!0}}]);