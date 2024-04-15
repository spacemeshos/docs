"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={id:"multigpu",title:"Initializing a Subset of PoST Data With postcli"},l=void 0,s={unversionedId:"start/smesher/multigpu",id:"start/smesher/multigpu",title:"Initializing a Subset of PoST Data With postcli",description:"Introduction",source:"@site/docs/start/smesher/multipleGPUinit.md",sourceDirName:"start/smesher",slug:"/start/smesher/multigpu",permalink:"/docs/start/smesher/multigpu",draft:!1,tags:[],version:"current",frontMatter:{id:"multigpu",title:"Initializing a Subset of PoST Data With postcli"},sidebar:"start",previous:{title:"Managing Multiple PoST Services On A Single Node",permalink:"/docs/start/smesher/post_1n"},next:{title:"Troubleshooting",permalink:"/docs/start/smesher/troubleshooting"}},r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"When to Initialize a Subset of PoST Data",id:"when-to-initialize-a-subset-of-post-data",level:3},{value:"When Not to Use It",id:"when-not-to-use-it",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting <code>postcli</code>",id:"getting-postcli",level:2},{value:"Get OpenCL",id:"get-opencl",level:2},{value:"Initializing a Subset of PoS Data",id:"initializing-a-subset-of-pos-data",level:2},{value:"Step 1: Determine the Total Number of Files",id:"step-1-determine-the-total-number-of-files",level:3},{value:"<strong>Understanding Storage Units and Data Volume</strong>",id:"understanding-storage-units-and-data-volume",level:4},{value:"Calculating the Number of Files",id:"calculating-the-number-of-files",level:4},{value:"Step 2: Splitting the Initialization Task",id:"step-2-splitting-the-initialization-task",level:3},{value:"On Machine A",id:"on-machine-a",level:4},{value:"On Machine B (second half)",id:"on-machine-b-second-half",level:4},{value:"Step 3: Merging the Data",id:"step-3-merging-the-data",level:3},{value:"Step 4: Merging <code>postdata_metadata.json</code> Files",id:"step-4-merging-postdata_metadatajson-files",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"postcli")," is a command-line tool used for initializing Proof of Space (PoS) data, essential for participating in the Spacemesh network. This guide focuses on the functionality to initialize a subset of Proof of Space (PoS) data, which offers flexibility and efficiency in certain scenarios, especially when dealing with large volumes of data or when hardware limitations are a concern. Understanding when to use this functionality can help optimize the initialization process for your specific needs. Here are key considerations to help decide when to use it:"),(0,i.kt)("h3",{id:"when-to-initialize-a-subset-of-post-data"},"When to Initialize a Subset of PoST Data"),(0,i.kt)("p",null,"1.",(0,i.kt)("strong",{parentName:"p"},"Large Data Volumes")," : For substantial PoS data volumes, such as several Tebibytes, initializing the entire dataset on a single machine may be impractical due to time constraints or hardware limitations. Splitting the task across multiple machines can significantly reduce the overall initialization time."),(0,i.kt)("p",null,"2.",(0,i.kt)("strong",{parentName:"p"},"Limited Hardware Resources")," : If the available hardware (especially GPU) on a single machine is not powerful enough to efficiently process the gib=ven amount of data, dividing the workload allows you to utilize the combined resources of multiple machines."),(0,i.kt)("p",null,"3.",(0,i.kt)("strong",{parentName:"p"},"Network Bandwidth Constraints")," : In environments where network bandwidth is limited or costly, transferring large volumes of data between machines or data centers can be impractical. Initializing data in subsets locally on machines where it will be used can mitigate this issue."),(0,i.kt)("p",null,"4.",(0,i.kt)("strong",{parentName:"p"},"Parallel Processing")," : When you have access to multiple machines or compute nodes, you can leverage parallel processing to expedite the initialization process. This is particularly beneficial for a still young network, where speed is of the essence, as the amount of rewards to distribute is lower wich each epoch and the number of miners constantly grows."),(0,i.kt)("h3",{id:"when-not-to-use-it"},"When Not to Use It"),(0,i.kt)("p",null,"1.",(0,i.kt)("strong",{parentName:"p"},"Small Data Volumes")," : For smaller volumes of PoS data that can be easily and quickly initialized on a single machine, the complexity of splitting the task may not be justified."),(0,i.kt)("p",null,"2.",(0,i.kt)("strong",{parentName:"p"},"Limited Access to Multiple Machines")," : If you do not have easy access to multiple machines with sufficient resources, the effort to set up and coordinate the initialization process across machines may not be worthwhile."),(0,i.kt)("p",null,"3.",(0,i.kt)("strong",{parentName:"p"},"Simplicity Preference")," : When simplicity and ease of setup are prioritized, especially for users new to Spacemesh or tech in general, or those with straightforward use cases, initializing data in one go on a single machine may be preferred to avoid the complexity of managing multiple subsets."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic familiarity with command-line operations.")),(0,i.kt)("p",null,"-",(0,i.kt)("inlineCode",{parentName:"p"},"postcli")," installed on your machine. For installation instructions, refer to the ",(0,i.kt)("a",{parentName:"p",href:"#getting-postcli"},"Getting ",(0,i.kt)("inlineCode",{parentName:"a"},"postcli"))," section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenCL support on your system. Instructions for verifying and installing OpenCL can be found in the ",(0,i.kt)("a",{parentName:"li",href:"#get-opencl"},"Get OpenCL")," section.")),(0,i.kt)("h2",{id:"getting-postcli"},"Getting ",(0,i.kt)("inlineCode",{parentName:"h2"},"postcli")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the latest release for your platform from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spacemeshos/post/releases"},"Spacemeshos GitHub releases page"),"."),(0,i.kt)("li",{parentName:"ol"},"Alternatively, build from the source or use the Docker image following the instructions provided in the original document.")),(0,i.kt)("h2",{id:"get-opencl"},"Get OpenCL"),(0,i.kt)("p",null,"Ensure your system supports OpenCL, as it's required for ",(0,i.kt)("inlineCode",{parentName:"p"},"postcli")," to function. This might involve installing specific drivers for Nvidia, AMD, or Intel graphics processors. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"clinfo -l")," command to list available OpenCL providers."),(0,i.kt)("h2",{id:"initializing-a-subset-of-pos-data"},"Initializing a Subset of PoS Data"),(0,i.kt)("p",null,"Start by figuring out how many computers you have or may have access to and their capabilities. This includes understanding each machine's storage capacity, processing power, and whether they meet the necessary requirements (described in the previous section). Based on your assessment, decide how to divide the workload and what should be the final POS data amount."),(0,i.kt)("h3",{id:"step-1-determine-the-total-number-of-files"},"Step 1: Determine the Total Number of Files"),(0,i.kt)("p",null,"It's important to determine the exact number of files that need to be created. You can do this through basic mathematics or by using the CLI command, as outlined below."),(0,i.kt)("h4",{id:"understanding-storage-units-and-data-volume"},(0,i.kt)("strong",{parentName:"h4"},"Understanding Storage Units and Data Volume")),(0,i.kt)("p",null,"1.",(0,i.kt)("strong",{parentName:"p"},"Space Units to Data Volume")," : The minimum storage allocation for PoS data is 4 Space Units (1SU=64GiB), equivalent to 256GiB (Gibibytes) in total. Therefore, for example, 10 TiB (Tebibytes) of data represent 40 times the minimum storage allocation, equating to 160 Space Units."),(0,i.kt)("p",null,"2.",(0,i.kt)("strong",{parentName:"p"},"File Size and Total Files")," : Given the default file size is 4096MiB, the total number of files can be calculated based on the total data volume divided by the file size."),(0,i.kt)("h4",{id:"calculating-the-number-of-files"},"Calculating the Number of Files"),(0,i.kt)("p",null,"Let's calculate the total number of files for 10TiB of PoS data. Since 10TiB equals 10485760MiB, dividing this by the file size (4096MiB) gives the total number of files."),(0,i.kt)("p",null,"Total Number of Files : $\\frac{10485760 \\, \\text{MiB}}{4096 \\, \\text{MiB}}$ = 2560"),(0,i.kt)("p",null,"Alternatively, you can calculate how many Space Units you want to initialize."),(0,i.kt)("p",null,"This command outputs the total number of files to be generated, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"1600")," files for ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," units."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./postcli-numUnits100-printNumFiles\n\n\n1600#result\n\n")),(0,i.kt)("p",null,"The simplified math behind it: 100 * 64GiB = 6400GiB, converting it to the Mebibytes it will be 6553600 / 4096 = 1600"),(0,i.kt)("h3",{id:"step-2-splitting-the-initialization-task"},"Step 2: Splitting the Initialization Task"),(0,i.kt)("p",null,"Decide how you want to split the task. The goal here is to divide the total amount of data you need to initialize into smaller subsets that can be processed separately. For example, if you aim to generate 1600 files and divide the workload evenly across two machines (we'll name them Machine A and Machine B), follow the steps below."),(0,i.kt)("h4",{id:"on-machine-a"},"On Machine A"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Open the Command-Line Interface:")," This might be Terminal on Mac/Linux or Command Prompt/PowerShell on Windows. You\u2019ll be typing commands here to instruct the computer on what to do. Remember to start from the postcli directory."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Run the Initialization Command:")," Enter a command that tells ",(0,i.kt)("inlineCode",{parentName:"li"},"postcli")," to start initializing the first subset of your data. It will look something like this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./postcli -numUnits 100 -id YOUR_IDENTITY -commitmentAtxId YOUR_COMMITMENT_ID -toFile 799 -datadir ./dataA\n\n")),(0,i.kt)("p",null,"Replace YOUR_IDENTITY and YOUR_COMMITMENT_ID with the actual values, double check the correctness."),(0,i.kt)("p",null,'This command essentially says, "postcli, please start creating the data files, but only do the first half for now. Put all these files in a folder called ',(0,i.kt)("em",{parentName:"p"},"dataA"),'."'),(0,i.kt)("p",null,"Why 799 and not 800?"),(0,i.kt)("p",null,"In computer science, counting often starts at zero rather than one, this concept is known as zero-indexing. So, when we divide the files into two halves, the first half ends at 799 because we start counting from 0, making 799 actually the 800th file."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Check Your Work:")," After the command finishes running, you can check if all the files were created correctly by entering:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\nls-la./dataA/*.bin | wc-l\n\n800 #result\n")),(0,i.kt)("p",null,"This tells your machine to list all the files ending with .bin in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataA")," folder and count them, this lets you ensure you have the expected number (800 in this example)."),(0,i.kt)("h4",{id:"on-machine-b-second-half"},"On Machine B (second half)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Repeat the process on Machine B, but this time you\u2019ll be initializing the second half of the data. The command will be slightly different to specify this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n./postcli -numUnits 100 -id YOUR_IDENTITY -commitmentAtxId YOUR_COMMITMENT_ID -fromFile 800 -datadir ./dataB\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This tells ",(0,i.kt)("inlineCode",{parentName:"li"},"postcli")," to pick up where Machine A left off, starting with file number 800 and placing the output in a new folder called ",(0,i.kt)("inlineCode",{parentName:"li"},"dataB"),".")),(0,i.kt)("p",null,"After running the command, don\u2019t forget to check that all the files are correctly created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataB")," folder, just like you did on Machine A."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Verify the creation of 800 files:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\nls-la./dataB/*.bin | wc-l\n\n")),(0,i.kt)("p",null,"By following these steps, you've successfully split a large initialization task into two more manageable parts, utilizing the combined power of two machines to complete the job more efficiently."),(0,i.kt)("h3",{id:"step-3-merging-the-data"},"Step 3: Merging the Data"),(0,i.kt)("p",null,"After initializing subsets of the data on different machines, you'll need to combine them into a single directory. You can do it manually, or use CLI as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Move or copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"*.bin")," files from both directories into one target directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\ncp./dataA/*.bin./finalData/\n\ncp./dataB/*.bin./finalData/\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Verify the total number of files in the final directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\nls-la./finalData/*.bin | wc-l\n\n")),(0,i.kt)("h3",{id:"step-4-merging-postdata_metadatajson-files"},"Step 4: Merging ",(0,i.kt)("inlineCode",{parentName:"h3"},"postdata_metadata.json")," Files"),(0,i.kt)("p",null,"Each subset of data you initialize may generate its own ",(0,i.kt)("inlineCode",{parentName:"p"},"postdata_metadata.json")," file (at least one will). These files contain important information and must be combined carefully by hand. Here\u2019s why and how:"),(0,i.kt)("p",null,"During the initialization process, ",(0,i.kt)("inlineCode",{parentName:"p"},"postcli"),' searches for a special number known as a VRF nonce. This number is important because it points to the smallest piece of data (label) created in that subset. When you initialize data in chunks, each piece can find its own "best" VRF nonce, but only one of these is the true smallest across all chunks\u2014the global minimum.'),(0,i.kt)("p",null,"Here\u2019s what you need to look for in the ",(0,i.kt)("inlineCode",{parentName:"p"},"postdata_metadata.json")," files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nonce")," : This is the index or position of the label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NonceValue"),' : This is the actual value of the label, a 16-byte number in hexadecimal format (for example, "0000ffda94993723a980bf557509773e").')),(0,i.kt)("p",null,"Given two ",(0,i.kt)("inlineCode",{parentName:"p"},"postdata_metadata.json")," examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'... (other fields omitted for brevity)\n"Nonce": 12345\n"NonceValue": "0000ffda94993723a980bf557509773e"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'... (other fields omitted for brevity)\n"Nonce": 98765\n"NonceValue": "0000488e171389cce69344d68b66f6b4"\n')),(0,i.kt)("p",null,"The nonce in the second file (please see the ",(0,i.kt)("inlineCode",{parentName:"p"},"NonceValue")," not ",(0,i.kt)("inlineCode",{parentName:"p"},"Nonce")," field) is the global minimum since its value is smaller than the first one. The operator is ",(0,i.kt)("strong",{parentName:"p"},"required")," to find the smallest VRF nonce by hand and ensure that its index and value are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"postdata_metadata.json")," of the merged directory on the target machine."),(0,i.kt)("p",null,"Not every chunk will contain a VRF nonce in its ",(0,i.kt)("inlineCode",{parentName:"p"},"postdata_metadata.json"),", but at least one should. If for the very unlikely case that no VRF nonce was found in any chunk, the operator can run ",(0,i.kt)("inlineCode",{parentName:"p"},"postcli")," again ",(0,i.kt)("strong",{parentName:"p"},"after merging the data")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"-fromFile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-toFile")," flags to find a VRF nonce."))}u.isMDXComponent=!0}}]);