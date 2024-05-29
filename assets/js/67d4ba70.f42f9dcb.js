"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7364],{5680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>g});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=d(a),g=i,u=c["".concat(l,".").concat(g)]||c[g]||p[g]||o;return a?n.createElement(u,s(s({ref:t},h),{},{components:a})):n.createElement(u,s({ref:t},h))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(8168),i=(a(6540),a(5680));const o={id:"advanced",title:"Additional Advanced Topics"},s=void 0,r={unversionedId:"start/smesher/advanced",id:"start/smesher/advanced",title:"Additional Advanced Topics",description:"Monitoring",source:"@site/docs/start/smesher/advanced.md",sourceDirName:"start/smesher",slug:"/start/smesher/advanced",permalink:"/docs/start/smesher/advanced",draft:!1,tags:[],version:"current",frontMatter:{id:"advanced",title:"Additional Advanced Topics"},sidebar:"start",previous:{title:"State Verification",permalink:"/docs/start/smesher/verification"},next:{title:"Managing Multiple PoST Services On A Single Node",permalink:"/docs/start/smesher/post_1n"}},l={},d=[{value:"Monitoring",id:"monitoring",level:2},{value:"Increasing and Decreasing Storage",id:"increasing-and-decreasing-storage",level:2},{value:"Very Large Identities",id:"very-large-identities",level:2},{value:"Fine-tuning Proving",id:"fine-tuning-proving",level:2},{value:"Identity Management",id:"identity-management",level:2},{value:"Moving PoST files",id:"moving-post-files",level:2},{value:"Multiple Drives",id:"multiple-drives",level:2},{value:"Multiple Identities",id:"multiple-identities",level:3},{value:"Joining Filesystems",id:"joining-filesystems",level:3},{value:"State Managament",id:"state-managament",level:2},{value:"Reading the State Database",id:"reading-the-state-database",level:3},{value:"Backing up State",id:"backing-up-state",level:3},{value:"Clearing State",id:"clearing-state",level:3},{value:"Copying State",id:"copying-state",level:3},{value:"Log Management",id:"log-management",level:2},{value:"PoST Metadata",id:"post-metadata",level:2},{value:"Cloud GPU",id:"cloud-gpu",level:2}],h={toc:d};function p(e){let{components:t,...a}=e;return(0,i.yg)("wrapper",(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"monitoring"},"Monitoring"),(0,i.yg)("p",null,"The simplest and most straightforward way to monitor any running node, including a mining node, is using the ",(0,i.yg)("a",{parentName:"p",href:"#api"},"gRPC API"),". You can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"spacemesh.v1.NodeService.Status")," to see the current status (number of connected peers, sync status, layer status), and you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"spacemesh.v1.AdminService.EventsStream")," to follow events (such as proof creation and broadcast, eligibilities, etc.) (see ",(0,i.yg)("a",{parentName:"p",href:"#api"},"API")," for example commands)."),(0,i.yg)("p",null,"It's also possible to do more sophisticated monitoring using ",(0,i.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/visualization/grafana/"},"Prometheus and Grafana"),". You can configure your own Prometheus data model, or use the out of the box model that ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," already supports. If you run the node with the ",(0,i.yg)("inlineCode",{parentName:"p"},"--metrics")," flag (or set this in the ",(0,i.yg)("a",{parentName:"p",href:"#config"},"config"),"), and optionally ",(0,i.yg)("inlineCode",{parentName:"p"},"--metrics-port"),", then Prometheus can scrape metrics from the running node."),(0,i.yg)("p",null,"You can find community-contributed examples of both of these in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/lrettig/awesome-spacemesh/blob/main/README.md#monitoring"},"this list"),"."),(0,i.yg)("h2",{id:"increasing-and-decreasing-storage"},"Increasing and Decreasing Storage"),(0,i.yg)("p",null,"Eventually Spacemesh will allow miners to both increase and decrease their committed storage, i.e., their identity size, as well as to combine existing identities. Unfortunately these features have not yet been implemented. You may track progress ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/pm/issues/253"},"here")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/pm/issues/267"},"here"),"."),(0,i.yg)("p",null,"In the meantime it's only possible for a miner to change their committed storage ",(0,i.yg)("em",{parentName:"p"},"before")," they've committed to the storage, i.e., before they've ",(0,i.yg)("a",{parentName:"p",href:"#proof-generation"},"generated a proof"),", bundled it into an ATX and submitted it to the network. Changing the identity size is as simple as changing the number of units (",(0,i.yg)("inlineCode",{parentName:"p"},"smeshing-opts-numunits")," in the ",(0,i.yg)("a",{parentName:"p",href:"#config"},"config"),"); if you decrease this value and then run the node, ",(0,i.yg)("strong",{parentName:"p"},"it will erase the redundant files beyond the specified number of units"),", so be very careful. If you increase this value and then run the node, it will continue to initialize until the specified number of units has been initialized."),(0,i.yg)("p",null,"If you're not sure whether your node has already submitted an ATX, check your event log for a message such as the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "timestamp": "2023-09-18T01:55:32.528857736Z",\n  "help": "Published activation for the current epoch. Node needs to wait till the start of the target epoch in order to be eligible for rewards.",\n  "atxPublished": {\n    "current": 4,\n    "target": 5,\n    "id": "abcde",\n    "wait": "367467.471143316s"\n  }\n}\n')),(0,i.yg)("p",null,"You should see the following in the node log:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'spacemesh-log.txt:2023-09-17T17:44:08.967-0400     INFO    c6322.atxBuilder        atx published   {"node_id": "abcde", "module": "atxBuilder", "sessionId": "3917e715-39c0-4a4d-8b65-1d5c45df4b5f", "event": true, "atx_id": "abcde", "challenge": "abcde", "smesher": "abcde", "prev_atx_id": "abcde", "pos_atx_id": "a1ba824af9", "coinbase": "sm1q...abcde", "epoch": 4, "num_units": 4, "sequence_number": 3, "size": 902, "name": "atxBuilder"}\n')),(0,i.yg)("p",null,"If you suspect that your node has already submitted an ATX to commit to a specific number of units, don't attempt to change the number of storage units as this will result in invalid proofs and zero rewards. If you're certain that your node has not yet submitted an ATX to commit to its storage size, you can freely change the number of units."),(0,i.yg)("h2",{id:"very-large-identities"},"Very Large Identities"),(0,i.yg)("p",null,"In general a miner is free to initialize as much or as little storage as she likes. However, miners with especially large identities may run into problems with ",(0,i.yg)("a",{parentName:"p",href:"#proof-generation"},"PoST proof generation")," as this requires sequentially reading all of the PoST data and additionally doing proof of work over the data. In the worst case, if the user selects a relatively low number of nonces (see next section), the node may get unlucky and need to perform this sequential read multiple times. All of this needs to fit into the PoET ",(0,i.yg)("a",{parentName:"p",href:"#timing"},"cycle gap")," (12 hours for mainnet) or else the miner risks being ineligible for an entire epoch and missing all epoch rewards."),(0,i.yg)("p",null,"Precisely calculating the maximum identity size that a system can support depends upon a number of variables: drive read speed, CPU power, the other applications running on the system, and the configured parameters (see next section). As a rule of thumb, we recommend that miners not use identities larger than about 4 TiB (i.e., 64 storage units). Given the average hard drive read speed, and assuming the miner is running on a reasonably powerful system, a miner with a 4 TiB identity should have ample time to read that identity twice, if necessary, and successfully generate a proof during the cycle gap in the vast majority of cases. It should also be noted that advanced miners have reported achieving significantly higher throughput speeds and, thus, being able to manage much larger identities using, e.g., large NVMe SSD drives and/or ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5"},"RAID5")," configurations."),(0,i.yg)("p",null,"For very large identities, it probably makes sense to split the identity into multiple smaller identities (again, 4 TiB is a good starting point, although the exact amount will depend upon the system and the miner's needs). Assuming these identities are stored on physically separate disks, and assuming the miner has a system that's powerful enough to run multiple nodes (i.e., the system resources are a multiple of the ",(0,i.yg)("a",{parentName:"p",href:"#requirements"},"required resources")," for a single node), she should have no trouble running multiple identities on a single system."),(0,i.yg)("p",null,"You may find math such as the following helpful: assuming you know the throughput (based on drive read speed and CPU hash throughput), it should take ",(0,i.yg)("a",{parentName:"p",href:"https://www.wolframalpha.com/input?i=4TiB%2F%5B150MB%2Fsec%5D"},"a little over eight hours")," to create a proof serially for a single 4TiB identity assuming a throughput of 150MB/s (normal for a modern HDD). Note that in this case, if the number of nonces isn't high enough (see next section) and the proof generation fails in the first pass, there won't be enough time to perform a second pass during the 12 hour cycle gap!"),(0,i.yg)("p",null,"Such a miner should pay close attention to the contents of the ",(0,i.yg)("a",{parentName:"p",href:"#fine-tuning-proving"},"Fine-tuning Proving")," and ",(0,i.yg)("a",{parentName:"p",href:"#identity-management"},"Identity Management")," sections, as she'll need to generate and manage multiple identities, being sure to keep them separate and distinct and to ",(0,i.yg)("a",{parentName:"p",href:"#avoiding-equivocation"},"avoid equivocation"),", and also to pick the appropriate proving parameters for her setup."),(0,i.yg)("h2",{id:"fine-tuning-proving"},"Fine-tuning Proving"),(0,i.yg)("p",null,"As a refresher, there are two stages to the process of proving storage so that a miner will be eligible for rewards on an ongoing basis: the ",(0,i.yg)("a",{parentName:"p",href:"#post-initialization-2"},"PoST initialization"),", which only needs to be performed once, and the ongoing, regular ",(0,i.yg)("a",{parentName:"p",href:"#proofs-of-spacetime"},"proofs of spacetime")," that miners need to generate and broadcast each epoch. Generating a proof of spacetime requires that the miner perform a sequential read of all of their PoST data. Since it would be infeasible to transmit ",(0,i.yg)("em",{parentName:"p"},"all")," of the PoST data as a proof, in order to make the proofs succinct, Spacemesh instead requires miners to do a small proof of work each epoch by hashing their PoST data and looking for elements (known as ",(0,i.yg)("strong",{parentName:"p"},"labels"),") that pass a certain proof of work threshold. The proof itself consists of just the indices of the labels that pass the threshold."),(0,i.yg)("p",null,"The user may specify the number of CPU threads and nonces that are used in the proving process. The process itself is probabilistic: with 64 nonces the probability of creating a successful proof in a single pass is 79.39%; with 128 nonces it's 95.75%; and with 288 nonces it's 99.9%. Moreover the number of CPU threads must be set to balance disk read speed. For more information on this process, see ",(0,i.yg)("a",{parentName:"p",href:"https://community.spacemesh.io/t/proof-of-work-and-post-proof-generation/361"},"Proof of work and PoST proof generation")," in the Spacemesh research forum."),(0,i.yg)("p",null,"As described in the ",(0,i.yg)("a",{parentName:"p",href:"#config"},"Config")," section above, these parameters can be passed to ",(0,i.yg)("inlineCode",{parentName:"p"},"postcli")," (as command-line arguments) and ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," (command-line arguments or via the config file). Advanced miners will need to run some benchmarks to determine the best values for their particular system. See the documentation for ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md"},"the profiler tool")," for more information."),(0,i.yg)("h2",{id:"identity-management"},"Identity Management"),(0,i.yg)("p",null,"Each miner in Spacemesh has an identity, known as a miner ID or smesher ID. The ID is simply a 32-byte Ed25519 public key, which is commonly displayed in hexidecimal or base64 format. It should look something like ",(0,i.yg)("inlineCode",{parentName:"p"},"0x91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40")," (hex) or ",(0,i.yg)("inlineCode",{parentName:"p"},"kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=")," (base64)."),(0,i.yg)("p",null,"Note: Miner identities have absolutely nothing to do with accounts or wallet addresses. Both are based on Ed25519 keypairs, but that's all they have in common. A miner also needs to specify a coinbase account to receive its rewards, but that coinbase account is not derived from the miner identity nor connected to it in any way. It can also be changed at any time. The miner identity ",(0,i.yg)("strong",{parentName:"p"},"is connected")," to its PoST data, however. PoST data generated for a given miner ID can never be used by another miner. Moreover, if a miner identity is lost or invalidated for equivocation, the associated PoST data becomes useless."),(0,i.yg)("p",null,"Tip: You can convert between these two formats using two simple command-line tools:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'> echo "0x91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40" | xxd -r -p | base64\nkbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=\n> echo "kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=" | base64 -d | xxd -p -c 32\n91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40\n')),(0,i.yg)("p",null,"The first time the node runs it will create a new miner identity (if it doesn't see an existing one), which it stores in a file called ",(0,i.yg)("inlineCode",{parentName:"p"},"local.key")," in the PoST data directory. This file contains both the miner public and private keys. The private key is used to sign messages on behalf of the miner. It's critical both that this file be kept private (its contents should never be revealed or sent to anyone) and that it not be lost. If it's lost, just like a lost wallet there's absolutely no way to restore it, and the associated PoST data would become useless."),(0,i.yg)("p",null,"You can read the public key portion of the key file, i.e., the hexidecimal miner identity, as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> cut -c 65-128 local.key\n91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40\n")),(0,i.yg)("p",null,"You can also read the identity from a running node via the API:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'> grpcurl -plaintext localhost:9093 spacemesh.v1.SmesherService.SmesherID\n{\n  "publicKey": "kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA="\n}\n')),(0,i.yg)("p",null,"A miner identity can be transferred from one system to another simply by moving the ",(0,i.yg)("inlineCode",{parentName:"p"},"local.key")," file. However, it's essential that the same identity never be attached to two running miners at the same time in order to avoid equivocation (see next section)."),(0,i.yg)("p",null,"A new identity can be generated by deleting or moving the ",(0,i.yg)("inlineCode",{parentName:"p"},"local.key")," file and starting the node again, at which point a new identity will be created. ",(0,i.yg)("inlineCode",{parentName:"p"},"postcli")," can be used to do the same thing."),(0,i.yg)("h2",{id:"moving-post-files"},"Moving PoST files"),(0,i.yg)("p",null,"You can safely move PoST data from one directory to another, or from one system to another, as long as the data remain intact and you're careful to avoid equivocation (see next point). The miner identity used to create the PoST data is bound into the data and, thus, you must move the ",(0,i.yg)("inlineCode",{parentName:"p"},"local.key")," file along with the rest of the data; the data are useless without the ",(0,i.yg)("inlineCode",{parentName:"p"},"local.key")," identity file, and any attempt to use the same PoST data with a different miner identity will fail. There's nothing about the data that ties it to a particular system, architecture, or operating system; thus, it's also safe to move the data across systems."),(0,i.yg)("p",null,"We strongly recommend using a tool like ",(0,i.yg)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories"},"rsync"),", which has built-in error checking and can resume a partial transfer, to move data both locally and remotely. You can use a command like the following to move data locally:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> rsync -avhz --progress /source/directory/ /destination/directory\n")),(0,i.yg)("p",null,"You can use a command like the following to copy data from a remote host:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> rsync -avhz --progress user@hostname:/source/directory/ /destination/directory\n")),(0,i.yg)("p",null,"(Note the use of trailing slashes; rsync is particular about these, and adding or removing a trailing slash can have unintended consequences.)"),(0,i.yg)("h2",{id:"multiple-drives"},"Multiple Drives"),(0,i.yg)("p",null,"At present it's not possible to naively split a single identity across multiple drives or filesystems. We hope to add this feature soon. In the meantime you have two possibilities: run multiple identities, or join multiple filesystems into a single logical filesystem at the hardware or OS level."),(0,i.yg)("h3",{id:"multiple-identities"},"Multiple Identities"),(0,i.yg)("p",null,"Running multiple identities is explained in ",(0,i.yg)("a",{parentName:"p",href:"#identity-management"},"Identity Management")," and ",(0,i.yg)("a",{parentName:"p",href:"#multiple-nodes"},"Multiple Nodes"),". This has the advantage that you don't need to mess with your filesystem configuration at all, and that you can ",(0,i.yg)("a",{parentName:"p",href:"#post-initialization-2"},"initialize")," and ",(0,i.yg)("a",{parentName:"p",href:"#proof-generation"},"generate proofs")," for each identity more easily in parallel. It has the downside that you need to run multiple nodes, which will consume multiples of the ",(0,i.yg)("a",{parentName:"p",href:"#requirements"},"required resources")," that a single node consumes. Also, since it's in the interest of the network to reduce the number of identities as much as possible, we'll be adding incentives for larger ATXs (generated by larger identities) and disincentives for many small ATXs. Please bear this in mind when you decide how many identities to run."),(0,i.yg)("h3",{id:"joining-filesystems"},"Joining Filesystems"),(0,i.yg)("p",null,'There are many ways to combine multiple, physical filesystems into a single "logical" filesystem and the best way to do this will depend on your hardware, your operating systems, you degree of technical expertise, and your needs. Some miners have had success with ',(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5"},"RAID5"),"; bear in mind that it's possible to run RAID in either ",(0,i.yg)("a",{parentName:"p",href:"https://www.techtarget.com/searchstorage/tip/Key-differences-in-software-RAID-vs-hardware-RAID"},"hardware or software"),", with various tradeoffs. Linux users can rely on ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)"},"LVM"),", which has wide support in modern distributions."),(0,i.yg)("p",null,"This has the advantage that you can run a single node, rather than many, and that, if configured correctly, you may achieve much faster read speed (see ",(0,i.yg)("a",{parentName:"p",href:"#very-large-identities"},"Very Large Identities"),") than you can with a single drive. It has the disadvantage of requiring more configuring at the operating system and filesystem level; miners who aren't comfortable doing so may prefer to instead run multiple identities."),(0,i.yg)("h2",{id:"state-managament"},"State Managament"),(0,i.yg)("p",null,"The node stores all of the network state in a ",(0,i.yg)("a",{parentName:"p",href:"https://www.sqlite.org/index.html"},"SQLite")," database called ",(0,i.yg)("inlineCode",{parentName:"p"},"state.sql")," (along with a couple of auxiliary files) in the node's data directory:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> ls -1 data/7c8cef2b/state.*\ndata/7c8cef2b/state.sql\ndata/7c8cef2b/state.sql-shm\ndata/7c8cef2b/state.sql-wal\n")),(0,i.yg)("p",null,"It's possible to explore the contents of this database to understand a node's view of the network, especially when the desired data isn't available via the API. First, two important notes about working with the state database:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note 1: Unlike the API, we make no guarantees that the state database schema will remain the same.")," It will likely evolve over time. Thus, while it's perfectly okay to explore the state database for troubleshooting, we strongly recommend against building or deploying any production applications that rely on it."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note 2: Never, under any circumstances, modify the state of a running node.")," Making even a small change runs the risk of totally corrupting the state database, which in the worst case would require that a node be resynced from scratch, a process that can take a long time (and during which time a miner node isn't eligible for rewards). As such, before even opening the state database, ",(0,i.yg)("strong",{parentName:"p"},"make a copy of the file")," and work with the copy only to make sure you don't accidentally modify the live database."),(0,i.yg)("h3",{id:"reading-the-state-database"},"Reading the State Database"),(0,i.yg)("p",null,"There are multiple ways to read data from a SQLite database. We recommend either using the official ",(0,i.yg)("a",{parentName:"p",href:"https://sqlite.org/cli.html"},(0,i.yg)("inlineCode",{parentName:"a"},"sqlite3"))," program, or else the cross-platform, open source UI alternative ",(0,i.yg)("a",{parentName:"p",href:"https://sqlitebrowser.org/"},"DB Browser"),". If you open the state database in the DB Browser you should see something like the following:"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://github.com/spacemeshos/wiki/assets/3316532/ad3eb4f3-af7b-49eb-8842-f46fe707f545",alt:"image"})),(0,i.yg)("p",null,"The full extent of queries you can run against this database is beyond the scope of this document, but as a simple example, here's how you'd look up the coinbase associated with a given smesher, and thus find that smesher's rewards using the coinbase:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT DISTINCT HEX(coinbase) FROM atxs WHERE HEX(id)="F353545DB955F5A359F406ACAB847408D40530A6782BE436553FE521033A42EC";\n000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7\nSELECT layer, total_reward FROM rewards WHERE HEX(coinbase)="000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7";\n8090 | 266137048118\n')),(0,i.yg)("h3",{id:"backing-up-state"},"Backing up State"),(0,i.yg)("p",null,"It can be helpful to create snapshots or backup versions of a node's state so that data may be restored more quickly in case of corruption or failure (rather than needing to resync from scratch, which is time consuming). This process is very straightforward: just create a copy of the files shown above, i.e., the ",(0,i.yg)("inlineCode",{parentName:"p"},"state.*")," files inside the node's data directory."),(0,i.yg)("p",null,"Due to SQLite's ",(0,i.yg)("a",{parentName:"p",href:"https://www.sqlite.org/atomiccommit.html"},"atomic commit")," feature it shouldn't be necessary to stop the node before taking a snapshot, but if you want to be extra careful you may do so."),(0,i.yg)("p",null,"Also note that ",(0,i.yg)("a",{parentName:"p",href:"https://serverfault.com/questions/307296/which-filesystems-offer-snapshot-functionality-for-users-to-recover-data"},"certain filesystems")," make snapshotting easier or even automatic."),(0,i.yg)("h3",{id:"clearing-state"},"Clearing State"),(0,i.yg)("p",null,"From time to time, such as if the state database becomes corrupt or if you simply want to resync your node from genesis, it becomes necessary to clear the state entirely. In order to do this, you should:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Stop the node. Ensure that it's exited cleanly and completely."),(0,i.yg)("li",{parentName:"ol"},"Remove the files shown above, i.e., the ",(0,i.yg)("inlineCode",{parentName:"li"},"state.*")," files inside the node's data directory. Note: don't remove the other contents of the data directory as it also contains, e.g., P2P data."),(0,i.yg)("li",{parentName:"ol"},"Restart the node. You should see it begin to sync from genesis.")),(0,i.yg)("h3",{id:"copying-state"},"Copying State"),(0,i.yg)("p",null,'There\'s no "private" data, i.e., data that\'s specific to one miner or one node, in the state database. This means that you can copy one trusted node\'s database to another node as a quick-and-dirty "quick sync" option, rather than letting the nodes sync the old fashioned way. To do this:'),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Make sure both nodes are running the same version of go-spacemesh."),(0,i.yg)("li",{parentName:"ol"},"Stop ",(0,i.yg)("strong",{parentName:"li"},"both nodes.")," Ensure that they've exited cleanly and completely."),(0,i.yg)("li",{parentName:"ol"},"Remove the state files entirely from node B, i.e., the destination node, by following the instructions above."),(0,i.yg)("li",{parentName:"ol"},"Copy the same files, i.e., the ",(0,i.yg)("inlineCode",{parentName:"li"},"state.*")," files inside the data directory of node A (i.e., the source node) to the data directory of node B. It's safe to do this from one system to another even if the two systems are on different architectures or different operating systems."),(0,i.yg)("li",{parentName:"ol"},"Restart both nodes.")),(0,i.yg)("p",null,"Note: by directly copying the state database you bypass the protections in the protocol and the node that would prevent your node from accepting bad state or bad transactions. For this reason it's essential that you ",(0,i.yg)("strong",{parentName:"p"},"only copy the state from a trusted node,")," i.e., a node that you run yourself, and that you ",(0,i.yg)("strong",{parentName:"p"},"never blindly accept state data from a third party.")," Otherwise, you may end up with corrupt or incorrect state."),(0,i.yg)("h2",{id:"log-management"},"Log Management"),(0,i.yg)("p",null,"Smapp automatically manages logs for a running node: it compresses and rotates logfiles when they grow large. The node log appears in the Smapp data directory:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"~/Library/Application Support/Spacemesh")," on macOS"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"~/.config/Spacemesh")," on Linux"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"~\\AppData\\Roaming\\Spacemesh")," on Windows")),(0,i.yg)("p",null,"If you're running ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," directly, you're responsible for log management. As described above, we strongly recommend running the node as a ",(0,i.yg)("a",{parentName:"p",href:"#system-service"},"system service")," on your operating system. Different operating systems and different service managers have different ways of managing logs; you can read about ",(0,i.yg)("a",{parentName:"p",href:"https://www.loggly.com/ultimate-guide/linux-logging-with-systemd/"},"how Systemd manages journals on Linux"),", for example."),(0,i.yg)("p",null,"You may find a command such as the following helpful to both display the running node logs and also save them to a file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"> go-spacemesh -c config-file.json |& tee logfile.txt\n")),(0,i.yg)("p",null,"One more note about logs: by default, the log level is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"INFO")," for all node services, in order to keep logfiles manageable. Setting the log level to ",(0,i.yg)("inlineCode",{parentName:"p"},"DEBUG")," for one or more services can be helpful for troubleshooting. You can accomplish this by adding a ",(0,i.yg)("inlineCode",{parentName:"p"},"logging")," section to your config file, as such:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'  "logging": {\n    "atxBuilder": "debug",\n    "block-builder": "debug",\n    "block-listener": "debug",\n    "nipostBuilder": "debug",\n    "poet": "debug",\n    "post": "debug",\n    "p2p": "error",\n    ...\n  },\n')),(0,i.yg)("p",null,"For the full list of services, see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/config/logging.go"},(0,i.yg)("inlineCode",{parentName:"a"},"config/logging.go")),"."),(0,i.yg)("h2",{id:"post-metadata"},"PoST Metadata"),(0,i.yg)("p",null,"The PoST data directory contains a file called postdata_metadata.json that contains metadata related to the identity and data files:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'> cat ~/post/7c8cef2b/postdata_metadata.json\n{\n        "NodeId": "3hcrKr45D5H8GrRikkZMztvKjvQpviUwVqRVMgh0jqk=",\n        "CommitmentAtxId": "nuv/Ajq7F8y3dcYC2q3o7XCPClDTFJpCgBGE9bdPKGU=",\n        "LabelsPerUnit": 4294967296,\n        "NumUnits": 15,\n        "MaxFileSize": :4294967296,\n        "Nonce": 34659695032,\n        "NonceValue": "0000000006db3dc6d84ff41b8acb588d"\n}\n')),(0,i.yg)("p",null,"In general you should never touch this file or change any of these values, other than when combining data from a ",(0,i.yg)("a",{parentName:"p",href:"#parallel-initialization"},"parallel initialization"),", which requires manually finding the lowest nonce."),(0,i.yg)("p",null,"It's ",(0,i.yg)("em",{parentName:"p"},"never safe")," to change the ",(0,i.yg)("inlineCode",{parentName:"p"},"NodeId"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"CommitmentAtxId"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"LabelsPerUnit"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"MaxFileSize")," values. If you increase ",(0,i.yg)("inlineCode",{parentName:"p"},"MaxUnits")," and run ",(0,i.yg)("inlineCode",{parentName:"p"},"postcli")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh"),", it'll continue PoST initialization and generate more files; this is safe to do unless/until your miner has already generated and broadcast an ATX, after which it cannot be changed. If you decrease ",(0,i.yg)("inlineCode",{parentName:"p"},"MaxUnits")," and run ",(0,i.yg)("inlineCode",{parentName:"p"},"postcli")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"go-spacemesh"),", they will delete existing files to match the config value."),(0,i.yg)("p",null,"It's always safe to change the ",(0,i.yg)("inlineCode",{parentName:"p"},"Nonce")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"NonceValue")," to any valid values, even after generating and broadcasting an ATX. If, for instance, you discover that you hadn't configured the lowest nonce, you can add it later. Note that this will have no impact upon rewards; it's just future-proofing in case you change the PoST size in future (once this is allowed). See ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli#searching-for-a-lost-vrf-nonce"},"Searching for a lost VRF nonce"),"."),(0,i.yg)("p",null,"Note that this nonce value, known as a VRF Nonce, has nothing to do with the nonce value ",(0,i.yg)("a",{parentName:"p",href:"#fine-tuning-proving"},"used in proving"),". The VRF Nonce is used to help determine when your node is eligible to participate in block proposal and the Tortoise beacon."),(0,i.yg)("h2",{id:"cloud-gpu"},"Cloud GPU"),(0,i.yg)("p",null,"Miners without local access to a GPU may choose to instead perform GPU initialization remotely using one or multiple (see next section) GPUs. This can be done using the infrastructure of any cloud compute provider that offers a modern GPU platform. Note that cloud providers that specialize in GPUs and other types of high-performance computing will often offer better prices and tooling than general-purpose cloud compute platforms like Azure, AWS, or GCP. While we cannot vouch for any particular provider and have no affiliation with any such provider, in our testing we've had particular luck with ",(0,i.yg)("a",{parentName:"p",href:"https://www.runpod.io/"},"Runpod")," and have also heard good things about ",(0,i.yg)("a",{parentName:"p",href:"https://www.coreweave.com/"},"Coreweave")," and ",(0,i.yg)("a",{parentName:"p",href:"https://vast.ai/"},"Vast"),"."),(0,i.yg)("p",null,"As a rule of thumb, you'll want access to an instance that:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"has a modern GPU (e.g., RTX 3090 or 4090; see ",(0,i.yg)("a",{parentName:"li",href:"#post-initialization-1"},"Requirements: PoST Initialization"),")"),(0,i.yg)("li",{parentName:"ul"},"has plenty of storage, around 10% more than you plan to initialize (e.g., if you plan to initialize 1 TiB of PoST storage, we recommend choosing an instance with at least 1.1 TiB)"),(0,i.yg)("li",{parentName:"ul"},"has a very fast Internet connection with plenty of bandwidth"),(0,i.yg)("li",{parentName:"ul"},"doesn't charge a lot for data egress")),(0,i.yg)("p",null,"Most GPU providers simply run a docker container for you. You may find ",(0,i.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/lrettig/nvidia-opencl"},"this barebones image")," useful; you can use it as ",(0,i.yg)("inlineCode",{parentName:"p"},"docker.io/lrettig/nvidia-opencl:latest")," in a cloud host, and you can find the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/lrettig/spacemesh-nvidia-opencl/blob/main/Dockerfile"},"Dockerfile here"),". It simply installs the packages required for OpenCL on Ubuntu and then downloads ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/releases"},(0,i.yg)("inlineCode",{parentName:"a"},"postcli")),". Here is ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/smeshcloud/nvidia-cuda-opencl/blob/main/Dockerfile"},"an alternative"),"."),(0,i.yg)("p",null,"Bear in mind that generating the PoST files is only half the battle; you also need to download them! Some providers charge a lot for data egress, which can get expensive quickly when downloading many terabytes of data. And, in order to move the data in a reasonable amount of time, you'll want to find a cloud instance with plenty of bandwidth, ideally more than 1gbit/sec. Any slower than this and you'll wait forever to download the files. Be wary of \"community\" run nodes on cloud marketplaces such as Runpod and Vast since while they may be cheaper these often don't have the requisite bandwidth."),(0,i.yg)("p",null,"As ",(0,i.yg)("a",{parentName:"p",href:"#moving-post-files"},"described above"),", we recommend using a utility with features such as error checking and resume like rsync to download files. rsync works well as long as you have ",(0,i.yg)("inlineCode",{parentName:"p"},"ssh")," access to the cloud host. Here's a sample rsync command that uses an ssh identity file and connects to a particular remote port:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'> rsync -e "ssh -i ~/.ssh/id_ed25519 -p 22164" -avhz --progress user@host:/source/directory/ /destination/directory\n')),(0,i.yg)("p",null,"Remember that you can begin downloading the PoST data files before initialization is complete! Just run rsync again after it finishes or, better yet, run it in an automatic loop to maximize efficiency:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'> while true; do\nrsync -e "ssh -i ~/.ssh/id_ed25519 -p 22164" -avhz --progress user@host:/source/directory/ /destination/directory\nsleep 300\ndone\n')))}p.isMDXComponent=!0}}]);