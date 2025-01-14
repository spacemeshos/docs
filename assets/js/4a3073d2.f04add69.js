"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9075],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var i=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||a;return n?i.createElement(m,s(s({ref:t},d),{},{components:n})):i.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=n(8168),o=(n(6540),n(5680));const a={id:"post_init",title:"PoST Initialization"},s=void 0,r={unversionedId:"start/smeshing/smeshing_adv/post_init",id:"start/smeshing/smeshing_adv/post_init",title:"PoST Initialization",description:"Proof Generation",source:"@site/docs/start/smeshing/smeshing_adv/post_init.md",sourceDirName:"start/smeshing/smeshing_adv",slug:"/start/smeshing/smeshing_adv/post_init",permalink:"/docs/start/smeshing/smeshing_adv/post_init",draft:!1,editUrl:"https://github.com/spacemeshos/docs/edit/main/docs/start/smeshing/smeshing_adv/post_init.md",tags:[],version:"current",frontMatter:{id:"post_init",title:"PoST Initialization"},sidebar:"start",previous:{title:"Advanced Smeshing Guide",permalink:"/docs/start/smeshing/smeshing_adv/setup"},next:{title:"API",permalink:"/docs/start/smeshing/smeshing_adv/api"}},l={},p=[{value:"Proof Generation",id:"proof-generation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"OpenCL",id:"opencl",level:3},{value:"macOS Overview",id:"macos-overview",level:4},{value:"Steps",id:"steps",level:5},{value:"Windows Overview",id:"windows-overview",level:4},{value:"Steps",id:"steps-1",level:5},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Initialization Speed",id:"initialization-speed",level:2},{value:"Choice of Filesystem",id:"choice-of-filesystem",level:2},{value:"Number of Units",id:"number-of-units",level:2},{value:"Linux (Ubuntu)",id:"linux-ubuntu",level:3},{value:"Windows",id:"windows",level:3},{value:"Starting Initialization",id:"starting-initialization",level:2},{value:"Choosing a Provider",id:"choosing-a-provider",level:3},{value:"Resizing PoST",id:"resizing-post",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"proof-generation"},"Proof Generation"),(0,o.yg)("p",null,"Once per epoch, after the node has received a PoET and the PoET cycle gap is underway, the node will generate a\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn/post"},"PoST"),", which requires that it sequentially read all the PoST data. The details\nare not something most smeshers need to worry about as the node will handle the process for you. See\n",(0,o.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_adv/performance"},"Fine-tuning Node Performance")," for information on benchmarks and parameters that can be tweaked."),(0,o.yg)("p",null,"The first part of the proving process is an initial proof-of-work phase called ",(0,o.yg)("strong",{parentName:"p"},"k2pow")," that uses a proof-of-work algorithm called ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/tevador/RandomX"},"RandomX"),". During this phase, which is CPU bound, you should see CPU usage spike briefly for a few minutes with there being very little network or disk activity. As explained in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md#is-that-all-that-is-happening-during-the-proof-generation"},"Profiler docs"),", it should take a low-end CPU around 2.5 minutes to compute k2pow for 4 storage units (SUs). The computation time scales linearly with the hash rate and number of SUs allocated. See the ",(0,o.yg)("a",{parentName:"p",href:"https://xmrig.com/benchmark"},"RandomX Benchmark")," to get a sense of your CPU's RandomX hash rate."),(0,o.yg)("p",null,"Once the k2pow phase is complete, the node begins the PoST proving process, which takes longer as it involves reading and computing a hash function over all the initialized PoST data. The duration of the proving depends on factors including the disk read speed, CPU speed, and configured ",(0,o.yg)("a",{parentName:"p",href:"/docs/start/smeshing/smeshing_adv/advanced#fine-tuning-proving"},"nonces and threads"),". This process may be CPU bound or IO bound, depending on the configuration. (This phase does not use the network.)"),(0,o.yg)("h2",{id:"initialization"},"Initialization"),(0,o.yg)("p",null,'The most important part of becoming a smesher is the PoST initialization (sometimes referred to as "PoS initialization" or "plotting"). This process requires a GPU and is designed to be costly and time-consuming due to the crypto-economic design of the protocol. As described above, unlike in proof-of-stake networks, there is no "slashing" (burning a portion\nof stake) in the Spacemesh protocol. Instead, the sanction for engaging in malicious behavior such as equivocation is the invalidation of a smesher ID which, in turn, invalidates all of the PoST data associated with that ID. In order for this sanction to be costly, performing PoST initialization and generating PoST data must also be costly.'),(0,o.yg)("p",null,"Note that initialization can theoretically be performed using a CPU (as opposed to a GPU), but it will take so long that this is not a viable option."),(0,o.yg)("h3",{id:"opencl"},"OpenCL"),(0,o.yg)("p",null,"PoST initialization requires support for ",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenCL"},"OpenCL"),". Installation instructions will vary depending on your operating system, platform, and GPU hardware. A good starting place for Linux users is ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/GPGPU"},"this wiki page"),". On Ubuntu and other Debian-compatible systems, it may be enough\nto install these packages:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"> sudo apt-get update\n> sudo apt-get install ocl-icd-libopencl1 opencl-headers clinfo\n")),(0,o.yg)("p",null,"To test if OpenCL is installed and configured correctly on your system, try running ",(0,o.yg)("inlineCode",{parentName:"p"},"clinfo"),". You should see output similar to the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"> clinfo -l\nPlatform #0: NVIDIA CUDA\n `-- Device #0: NVIDIA GeForce RTX 2060 SUPER\n")),(0,o.yg)("h4",{id:"macos-overview"},"macOS Overview"),(0,o.yg)("p",null,"For macOS users, OpenCL is bundled with the system and the framework is available out of the box on macOS version 10.6 (Snow Leopard) and later. Therefore, explicit installation of OpenCL is generally not required. However, to ensure compatibility and optimal performance with your specific hardware and software setup, you might need to update your macOS."),(0,o.yg)("h5",{id:"steps"},"Steps"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Update macOS"),": Keep your macOS up to date to ensure that you have the latest OpenCL framework versions and GPU drivers. You can check for updates in the \u201cSoftware Update\u201d section of System Preferences."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Use ",(0,o.yg)("inlineCode",{parentName:"strong"},"clinfo")),": To verify the OpenCL configuration, you can install ",(0,o.yg)("inlineCode",{parentName:"li"},"clinfo")," using the command ",(0,o.yg)("inlineCode",{parentName:"li"},"brew install clinfo"),". Then, run ",(0,o.yg)("inlineCode",{parentName:"li"},"clinfo")," in the terminal to check the available OpenCL platforms and devices.")),(0,o.yg)("h4",{id:"windows-overview"},"Windows Overview"),(0,o.yg)("p",null,"Installing OpenCL on Windows requires updating the GPU drivers manually as the operating system does not include these drivers by default. The process is similar across different GPU manufacturers, but requires visiting the specific manufacturer\u2019s website to download the appropriate drivers."),(0,o.yg)("h5",{id:"steps-1"},"Steps"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Navigate to your GPU manufacturer\u2019s website (NVIDIA, AMD, or Intel) and download the latest drivers for your GPU model. Select drivers that include OpenCL runtime support."),(0,o.yg)("li",{parentName:"ol"},"Install the drivers by executing downloaded installer and following the on-screen instructions to complete the. Make sure that any options related to OpenCL support are selected if given a choice."),(0,o.yg)("li",{parentName:"ol"},"After installation, use the ",(0,o.yg)("inlineCode",{parentName:"li"},"clinfo")," command on Windows to check for OpenCL support. This utility will list all OpenCL-compatible devices on your system and provide detailed information, confirming a successful installation.")),(0,o.yg)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("p",null,"Issues with OpenCL can often be resolved by ensuring that your GPU drivers are fully up to date. Check your hardware\u2019s compatibility with the version of OpenCL you are using and look for any software that might conflict with your drivers. For specific problems, the support documentation and forums for NVIDIA, AMD, or Intel may offer solutions."),(0,o.yg)("h2",{id:"initialization-speed"},"Initialization Speed"),(0,o.yg)("p",null,"The amount of time it takes to complete PoST initialization depends upon a number of factors including GPU model, hard\ndrive write speed, and the number of storage units being initialized. As a rule of thumb, Nvidia RTX 3090 cards can\ninitialize around 3-4 MB/s and 4090 cards can initialize around 6-7 MB/s. Community\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1X_E7H9EFdLoEZ8IHwm1ApcnlZ6VtBCWwSMOJIw2rytI/edit#gid=822058896"},"crowd-sourced benchmarks"),"\nare available for a wide range of cards. Note that hard drive write speeds tend to be much faster than GPU throughput, so this should not limit the initialization speed unless the drive is exceptionally slow or exceptionally busy."),(0,o.yg)("h2",{id:"choice-of-filesystem"},"Choice of Filesystem"),(0,o.yg)("p",null,"In general, Spacemesh is agnostic to the choice of filesystem. You can successfully initialize and run an identity and\nmanage the underlying PoST data on any Linux, Windows, or macOS-compatible filesystem. However, you should keep two things in mind when choosing a filesystem."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"If there is any chance you will want to ",(0,o.yg)("em",{parentName:"li"},"move the identity")," from one operating system to another, we strongly recommend using the ",(0,o.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ExFAT"},"exFAT")," filesystem. This is the only filesystem that works out of the box across all the major operating systems. Keep in mind that ",(0,o.yg)("em",{parentName:"li"},"copying"),' an entire identity from one filesystem to another could take a very long time, whereas with an exFAT filesystem, you can just "plug and chug" on any computer. You should be able to initialize and format a new exFAT filesystem easily in any operating system.'),(0,o.yg)("li",{parentName:"ol"},"Different file systems utilize space differently and require different amounts of overhead. As such, the number of storage units you will be able to fit on a given disk will depend, to some extent, upon the filesystem used to format the disk. In our personal experience, we have found that exFAT is more efficient than EXT4 and may allow one extra storage unit to be placed on the same physical disk.")),(0,o.yg)("p",null,"We also recommend that you ",(0,o.yg)("em",{parentName:"p"},"not encrypt")," the drive or partition used to store the PoST data. You should, of course, protect the ",(0,o.yg)("inlineCode",{parentName:"p"},"local.key")," file (which contains a miner's private key and is located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"node_data/identities")," folder) and not allow it to fall into anyone else's hands. However, full-drive encryption is likely overkill and could slow down ",(0,o.yg)("a",{parentName:"p",href:"#proof-generation"},"proof generation"),"."),(0,o.yg)("h2",{id:"number-of-units"},"Number of Units"),(0,o.yg)("p",null,"Determining exactly how many storage units fit on a drive is actually somewhat non-trivial if you want to maximize the amount of PoST data you can fit on a drive, the identity size, and the rewards. For one thing, PoST identity file sizes are base 2 (e.g., 64GiB) whereas the size of most hard drives is base-10 (e.g., 1TB). Moreover, as described in the previous section, different file systems use space differently and require different amounts of overhead."),(0,o.yg)("h3",{id:"linux-ubuntu"},"Linux (Ubuntu)"),(0,o.yg)("p",null,"Linux users may find a command such as the following helpful in displaying the available space on a drive:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"> df -B GiB /dev/sda\nFilesystem     1GiB-blocks    Used Available Use% Mounted on\n/dev/sda           3667GiB 3649GiB     19GiB 100% /mnt/smesher-01\n")),(0,o.yg)("p",null,"As you can see, this 4TB drive, which should contain 3725.29 GiB, in fact only contains a usable 3667 GiB. After initializing 57 storage units of 64 GiB each, it contains around 19 GiB of free usable space."),(0,o.yg)("p",null,"Linux users may also find the ",(0,o.yg)("a",{parentName:"p",href:"https://linux.die.net/man/8/tune2fs"},(0,o.yg)("inlineCode",{parentName:"a"},"tune2fs"))," command useful, both for displaying more detailed filesystem information and for reducing the amount of\n",(0,o.yg)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/7950/reserved-space-for-root-on-a-filesystem-why"},"reserved space")," on a drive. Assuming a drive is exclusively being used to store PoST data, the reserved space may safely be set to zero."),(0,o.yg)("p",null,"For example, for the above-mentioned drive ",(0,o.yg)("inlineCode",{parentName:"p"},"/dev/sda"),", the following command would set the reserve space to 0:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"> sudo tune2fs -m 0 /dev/sda\n")),(0,o.yg)("h3",{id:"windows"},"Windows"),(0,o.yg)("p",null,"Windows users can copy and run the following code into a PowerShell window (running as an administrator) to see the available space on each of their partitions and whether they can store the PoST initialization data on those partitions:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-powershell"},'Get-PSDrive -PSProvider FileSystem | ForEach-Object {\n    $drive = $_\n    \n    $freeSpaceGiB = [math]::Round($drive.Free / 1GB, 2)\n    $totalSpaceGiB = [math]::Round(($drive.Used + $drive.Free) / 1GB, 2)\n    $freeSpaceGB = [math]::Round($drive.Free / 1GB * 1.073741824, 2)\n    $totalSpaceGB = [math]::Round(($drive.Used + $drive.Free) / 1GB * 1.073741824, 2)\n    $spaceUnits = [math]::Floor($freeSpaceGiB / 64)\n    \n    if ($spaceUnits -ge 4) {\n        $spaceUnitColor = \'Green\'\n        $sizeColor = \'Green\'\n    }\n    else {\n        $spaceUnitColor = \'DarkYellow\'\n        $sizeColor = \'DarkYellow\'\n    }\n\n    Write-Host -NoNewline "Drive $($drive.Name): "\n    Write-Host -NoNewline "$freeSpaceGiB GiB" -ForegroundColor $sizeColor\n    Write-Host -NoNewline " ($freeSpaceGB GB)" -ForegroundColor $sizeColor\n    Write-Host -NoNewline " available out of "\n    Write-Host -NoNewline "$totalSpaceGiB GiB" -ForegroundColor $sizeColor\n    Write-Host -NoNewline " ($totalSpaceGB GB)" -ForegroundColor $sizeColor\n    Write-Host -NoNewline " ("\n\n    Write-Host -NoNewline "$spaceUnits SU" -ForegroundColor $spaceUnitColor\n    Write-Host ")."\n\n    if ($spaceUnits -lt 4) {\n        Write-Host "Not enough space on drive $($drive.Name) to smesh. Free space equivalent to 4 SUs (256 GiB/ 275 GB) is required." -ForegroundColor Yellow\n    }\n    else {\n        Write-Host "Smeshing possible on drive $($drive.Name)." -ForegroundColor Green\n    }\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Wanted:")," Please fill in information on how to do the same on macOS."),(0,o.yg)("h2",{id:"starting-initialization"},"Starting Initialization"),(0,o.yg)("p",null,"As with most other aspects of Spacemesh, the easiest way to begin and monitor initialization is by using Smapp. When you first open it, Smapp will walk you through the process of choosing a location for storing your PoST data, choosing your GPU, and beginning initialization. It will show you the progress as initialization proceeds. See ",(0,o.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=t5oZoodfTrc"},"Smapp Tutorial #4: Proof of Space & Smeshing Setup")," for more information on this process."),(0,o.yg)("p",null,"If you prefer to perform PoST initialization using the CLI, you have two options. If you simply run ",(0,o.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," directly with the ",(0,o.yg)("inlineCode",{parentName:"p"},"smeshing")," configuration parameters specified above, it will perform initialization for you using the fastest available GPU. You can also manually perform initialization using the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},(0,o.yg)("inlineCode",{parentName:"a"},"postcli")," tool")," which allows you to have even greater control of the initialization process, such as running in parallel across multiple systems or multiple GPUs (more information on this below)."),(0,o.yg)("h3",{id:"choosing-a-provider"},"Choosing a Provider"),(0,o.yg)("p",null,"As mentioned, ",(0,o.yg)("inlineCode",{parentName:"p"},"go-spacemesh")," will automatically choose the fastest GPU to perform initialization based on a benchmark. You can change the selected GPU with the ",(0,o.yg)("inlineCode",{parentName:"p"},"smeshing-opts-provider")," config item. To see the list of detected GPUs and their corresponding indices, run ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},(0,o.yg)("inlineCode",{parentName:"a"},"postcli  -printProviders")),". You should see something like the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'> postcli -printProviders\n([]postrs.Provider) (len=3 cap=3) {\n (postrs.Provider) {\n  ID: (uint) 0,\n  Model: (string) (len=44) "[GPU] NVIDIA CUDA/NVIDIA GeForce RTX 3080 Ti",\n  DeviceType: (postrs.DeviceClass) GPU\n },\n (postrs.Provider) {\n  ID: (uint) 1,\n  Model: (string) (len=44) "[GPU] NVIDIA CUDA/NVIDIA GeForce RTX 3080 Ti",\n  DeviceType: (postrs.DeviceClass) GPU\n },\n (postrs.Provider) {\n  ID: (uint) 4294967295,\n  Model: (string) (len=17) "[CPU] scrypt-jane",\n  DeviceType: (postrs.DeviceClass) CPU\n }\n}\n')),(0,o.yg)("p",null,"The first two (with IDs 0 and 1) are the GPUs. The last one (with ID 4294967295) is the CPU. To select the second GPU with ID 1, use the following config:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'  "smeshing": {\n    "smeshing-opts": {\n      "smeshing-opts-datadir": "<post_data_directory>",\n      "smeshing-opts-maxfilesize": <post_file_size>,\n      "smeshing-opts-numunits": <post_num_units>,\n      "smeshing-opts-provider": 1\n    },\n    ...\n  },\n')),(0,o.yg)("h2",{id:"resizing-post"},"Resizing PoST"),(0,o.yg)("p",null,"The size of the data used for proof generation can be changed after initialization. This is useful if you want to add more storage units to your identity, or if you want to reduce the number of storage units to free up space on your drive. To do this, you can change the ",(0,o.yg)("inlineCode",{parentName:"p"},"numunits")," parameter in the ",(0,o.yg)("inlineCode",{parentName:"p"},"smeshing-opts")," section of the ",(0,o.yg)("inlineCode",{parentName:"p"},"config.json")," file. Stop your node, change the config file, and restart the node. The node will automatically resize the PoST data to the new size:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'  "smeshing": {\n    "smeshing-opts": {\n      "smeshing-opts-datadir": "<post_data_directory>",\n      "smeshing-opts-maxfilesize": <post_file_size>,\n      "smeshing-opts-numunits": <new_num_units>,\n      "smeshing-opts-provider": "<gpu_id>"\n    },\n    ...\n  },\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Info:")," Resizing PoST data is a time-consuming process during which the node is not able to generate proofs. The node will automatically generate proofs once the resizing process is complete. Time your resizing process accordingly - start once your PoET cycle gap ends and the node has generated a PoST proof, and finish before the next PoET cycle gap."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Beware:")," Decreasing your PoST size will reduce your rewards and only becomes effective in the epoch after the resizing process is complete, and the node has generated a PoST proof. Increasing your PoST size will increase your rewards, but it takes 2 epochs to become effective. For example, if you increase your PoST size before the PoET cycle gap in epoch 10, your rewards will be increased starting from epoch 12."),(0,o.yg)("p",null,"You can also resize PoST data using the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},(0,o.yg)("inlineCode",{parentName:"a"},"postcli")," tool")," which allows you to have greater control. For information on how to only initialize the data that you do not already have and merge it with the existing data, refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli#initializing-a-subset-of-post-data"},"this section"),"."))}h.isMDXComponent=!0}}]);