---
id: multigpu
title: Initializing a Subset of PoST Data With postcli
---

## Introduction

`postcli` is a command-line tool used for initializing Proof of Space (PoS) data, essential for participating in the Spacemesh network. This guide focuses on the functionality to initialize a subset of Proof of Space (PoS) data, which offers flexibility and efficiency in certain scenarios, especially when dealing with large volumes of data or when hardware limitations are a concern. Understanding when to use this functionality can help optimize the initialization process for your specific needs. Here are key considerations to help decide when to use it:

### When to Initialize a Subset of PoST Data

1.**Large Data Volumes** : For substantial PoS data volumes, such as several Tebibytes, initializing the entire dataset on a single machine may be impractical due to time constraints or hardware limitations. Splitting the task across multiple machines can significantly reduce the overall initialization time.

2.**Limited Hardware Resources** : If the available hardware (especially GPU) on a single machine is not powerful enough to efficiently process the gib=ven amount of data, dividing the workload allows you to utilize the combined resources of multiple machines.

3.**Network Bandwidth Constraints** : In environments where network bandwidth is limited or costly, transferring large volumes of data between machines or data centers can be impractical. Initializing data in subsets locally on machines where it will be used can mitigate this issue.

4.**Parallel Processing** : When you have access to multiple machines or compute nodes, you can leverage parallel processing to expedite the initialization process. This is particularly beneficial for a still young network, where speed is of the essence, as the amount of rewards to distribute is lower wich each epoch and the number of miners constantly grows.

### When Not to Use It

1.**Small Data Volumes** : For smaller volumes of PoS data that can be easily and quickly initialized on a single machine, the complexity of splitting the task may not be justified.

2.**Limited Access to Multiple Machines** : If you do not have easy access to multiple machines with sufficient resources, the effort to set up and coordinate the initialization process across machines may not be worthwhile.

3.**Simplicity Preference** : When simplicity and ease of setup are prioritized, especially for users new to Spacemesh or tech in general, or those with straightforward use cases, initializing data in one go on a single machine may be preferred to avoid the complexity of managing multiple subsets.

## Prerequisites

- Basic familiarity with command-line operations.

-`postcli` installed on your machine. For installation instructions, refer to the [Getting `postcli`](#getting-postcli) section.

- OpenCL support on your system. Instructions for verifying and installing OpenCL can be found in the [Get OpenCL](#get-opencl) section.

## Getting `postcli`

1. Download the latest release for your platform from [Spacemeshos GitHub releases page](https://github.com/spacemeshos/post/releases).
2. Alternatively, build from the source or use the Docker image following the instructions provided in the original document.

## Get OpenCL

Ensure your system supports OpenCL, as it's required for `postcli` to function. This might involve installing specific drivers for Nvidia, AMD, or Intel graphics processors. Use the `clinfo -l` command to list available OpenCL providers.

## Initializing a Subset of PoS Data

Start by figuring out how many computers you have or may have access to and their capabilities. This includes understanding each machine's storage capacity, processing power, and whether they meet the necessary requirements (described in the previous section). Based on your assessment, decide how to divide the workload and what should be the final POS data amount.

### Step 1: Determine the Total Number of Files

It's important to determine the exact number of files that need to be created. You can do this through basic mathematics or by using the CLI command, as outlined below.

#### **Understanding Storage Units and Data Volume**

1.**Space Units to Data Volume** : The minimum storage allocation for PoS data is 4 Space Units (1SU=64GiB), equivalent to 256GiB (Gibibytes) in total. Therefore, for example, 10 TiB (Tebibytes) of data represent 40 times the minimum storage allocation, equating to 160 Space Units.

2.**File Size and Total Files** : Given the default file size is 4096MiB, the total number of files can be calculated based on the total data volume divided by the file size.

#### Calculating the Number of Files

Let's calculate the total number of files for 10TiB of PoS data. Since 10TiB equals 10485760MiB, dividing this by the file size (4096MiB) gives the total number of files.

Total Number of Files : $\frac{10485760 \, \text{MiB}}{4096 \, \text{MiB}}$ = 2560

Alternatively, you can calculate how many Space Units you want to initialize.

This command outputs the total number of files to be generated, for example, `1600` files for `100` units.

```bash

./postcli -numUnits 100 -printNumFiles


1600#result

```

The simplified math behind it: 100 * 64GiB = 6400GiB, converting it to the Mebibytes it will be 6553600 / 4096 = 1600

### Step 2: Splitting the Initialization Task

Decide how you want to split the task. The goal here is to divide the total amount of data you need to initialize into smaller subsets that can be processed separately. For example, if you aim to generate 1600 files and divide the workload evenly across two machines (we'll name them Machine A and Machine B), follow the steps below.

#### On Machine A

1. **Open the Command-Line Interface:** This might be Terminal on Mac/Linux or Command Prompt/PowerShell on Windows. You’ll be typing commands here to instruct the computer on what to do. Remember to start from the postcli directory.
2. **Run the Initialization Command:** Enter a command that tells `postcli` to start initializing the first subset of your data. It will look something like this:

```bash

./postcli -numUnits 100 -id YOUR_IDENTITY -commitmentAtxId YOUR_COMMITMENT_ID -toFile 799 -datadir ./dataA

```

Replace YOUR_IDENTITY and YOUR_COMMITMENT_ID with the actual values, double check the correctness.

This command essentially says, "postcli, please start creating the data files, but only do the first half for now. Put all these files in a folder called *dataA*."

Why 799 and not 800?

In computer science, counting often starts at zero rather than one, this concept is known as zero-indexing. So, when we divide the files into two halves, the first half ends at 799 because we start counting from 0, making 799 actually the 800th file.

3. **Check Your Work:** After the command finishes running, you can check if all the files were created correctly by entering:

```bash

ls -la ./dataA/*.bin | wc -l

800 #result
```

This tells your machine to list all the files ending with .bin in the `dataA` folder and count them, this lets you ensure you have the expected number (800 in this example).

#### On Machine B (second half)

1. Repeat the process on Machine B, but this time you’ll be initializing the second half of the data. The command will be slightly different to specify this:

```bash

./postcli -numUnits 100 -id YOUR_IDENTITY -commitmentAtxId YOUR_COMMITMENT_ID -fromFile 800 -datadir ./dataB

```

- This tells `postcli` to pick up where Machine A left off, starting with file number 800 and placing the output in a new folder called `dataB`.

After running the command, don’t forget to check that all the files are correctly created in the `dataB` folder, just like you did on Machine A.

2. Verify the creation of 800 files:

```bash

ls -la ./dataB/*.bin | wc -l

```

By following these steps, you've successfully split a large initialization task into two more manageable parts, utilizing the combined power of two machines to complete the job more efficiently.

### Step 3: Merging the Data

After initializing subsets of the data on different machines, you'll need to combine them into a single directory. You can do it manually, or use CLI as follows.

1. Move or copy the `*.bin` files from both directories into one target directory:

```bash

cp ./dataA/*.bin ./finalData/


```

2. Verify the total number of files in the final directory:

```bash

ls -la ./finalData/*.bin | wc -l

```

### Step 4: Merging `postdata_metadata.json` Files

Each subset of data you initialize may generate its own `postdata_metadata.json` file (at least one will). These files contain important information and must be combined carefully by hand. Here’s why and how:

During the initialization process, `postcli` searches for a special number known as a VRF nonce. This number is important because it points to the smallest piece of data (label) created in that subset. When you initialize data in chunks, each piece can find its own "best" VRF nonce, but only one of these is the true smallest across all chunks—the global minimum.

Here’s what you need to look for in the `postdata_metadata.json` files:

- **Nonce** : This is the index or position of the label.
- **NonceValue** : This is the actual value of the label, a 16-byte number in hexadecimal format (for example, "0000ffda94993723a980bf557509773e").

Given two `postdata_metadata.json` examples:

```json
... (other fields omitted for brevity)
"Nonce": 12345
"NonceValue": "0000ffda94993723a980bf557509773e"
```

```json
... (other fields omitted for brevity)
"Nonce": 98765
"NonceValue": "0000488e171389cce69344d68b66f6b4"
```

The nonce in the second file (please see the `NonceValue` not `Nonce` field) is the global minimum since its value is smaller than the first one. The operator is **required** to find the smallest VRF nonce by hand and ensure that its index and value are in the `postdata_metadata.json` of the merged directory on the target machine.

Not every chunk will contain a VRF nonce in its `postdata_metadata.json`, but at least one should. If for the very unlikely case that no VRF nonce was found in any chunk, the operator can run `postcli` again **after merging the data** without `-fromFile` and `-toFile` flags to find a VRF nonce.
