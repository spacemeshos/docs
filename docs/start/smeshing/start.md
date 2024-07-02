---
id: start
title: Getting Started
---

This guide will walk you through all the steps for becoming a smesher. Smeshing is analogous to "mining" in other blockchain networks. Thus, as a smesher, you will contribute some of your hard drive storage and computing power in order to participate in network operation and security, thereby becoming eligible to earn rewards in SMH, the native token of the Spacemesh protocol.

If you are completely new to this space and have never participated in a blockchain network before, no need to worry. This guide caters to blockchain newcomers and experienced users, alike.

## Got Questions?

If you run across any issues or have any questions, be sure to reach out to us on our [Discord server](https://discord.gg/mq7KXvzc). After joining, ask your questions in the [community troubleshooting](https://discord.com/channels/623195163510046732/1141736098830229584) channel by creating a post and someone from the Spacemesh team or the community will get back to you. This will not only help you solve the issue but will also be a great resource for someone who may have the same issue in the future.

With this in mind, let us start smeshing!

## What Is Smeshing?

Smeshing (short for "**S**pace**mesh** min**ing**") is a way for users to help secure the Spacemesh network by contributing their resources (primarily disk space) and, in turn, earning rewards proportional to their contribution.

Smeshing is a three-step process:

1. **[Proof of Space (PoS)](../../learn/post.md/#proof-of-space)**: You allocate some disk space which is then filled with special data. This is a one-off process and only takes place in two cases:

    1. When you start smeshing for the first time.
    2. When you increase or decrease the allocated disk space after having already started smeshing.

    The output of this process is the PoS data stored on disk and an _"initial" PoS value_.
2. **[Proof of Elapsed Time (PoET)](../../learn/post.md/#proof-of-elapsed-time)**: In this step, your node automatically submits a special value to a specialized [PoET server](./smeshing_adv/poet.md). This value includes the initial PoS (if you are mining for the first time), or a reference to the previous Activation Transaction (ATX) containing the last submitted PoST (see steps 3 and 4). The PoET server then uses this special value to generate the PoET over a period of time called a "PoET round", after which the PoET can be retrieved by your node.
3. **[Proof of Space-Time (PoST)](../../learn/post.md/#proof-of-space-time)**: Once the PoET round ends, a _"later" PoS_ is calculated after quickly reading the PoS data (stored on disk in step 1). This PoS value is then used along with the PoET value to verify that the data indeed spent an epoch stored on the disk. This is done by calculating the PoST by using these two values. At the end of this step, you will have a valid PoST.
4. **[PoST Submission](../../learn/post.md/#proof-verification)**: Just successfully calculating the PoST is not enough. It must also be submitted to be eligible for rewards in the epoch for which it was calculated. This PoST submission must be done by including it in a special transaction called an Activation Transaction (ATX) and submitting it to the network during an interval called a Cycle Gap. This time window starts after a PoET round ends (so right after the PoET is calculated) and lasts for 12 hours, after which the next PoET round will start. This time is given to the smeshing nodes can have ample time to create and submit their PoST to the network.

The above was to provide a general understanding of the smeshing process. For all practical purposes, a smesher only needs to initiate step 1, while steps 2, 3, and 4 will be performed automatically by the smeshing node. Note that in the docs, step 1 is also sometimes referred to as "PoST initialization" since it is the first step towards generating the PoST.

Now that you have an idea of what smeshing is, it is time to see if your system can smesh.

## System Requirements

To start smeshing, you must first become a full node on the Spacemesh protocol. A **full node** only stores the blockchain ledger and executes the transactions. A full node can only become a **smeshing node** if it satisfies the [additional requirements](./requirements.md/#minimum-requirements-for-smeshing) for smeshing.

Visit the [System Requirements](./requirements.md) page to see if your system satisfies the requirements. If it does, congratulations! Continue reading to start smeshing.

## Network Configuration

While setting up a full or smeshing node is as simple as running the Smapp and going through the steps, if you run into any network-related issues, visit the [Network Configuration](./netconfig.md) page. It is also recommended to go through the Network Configuration page to see that all the network-related settings are in order so you can have a smooth, uninterrupted smeshing experience.

If you come across any network-related issue and cannot find its solution on the Network Configuration page, post your problem on Discord (invite given above) and someone should reach out to you with a solution.

## Choosing Your Guide

Now that your system satisfies the requirements, it is time to start smeshing! At this stage, you have two ways to start smeshing:

- If you are new to smeshing and/or do not want to use a Command Line Interface (CLI), you can follow the [Basic Smeshing Guide](./smeshing_basic/install.md).
- If you are an advanced user and/or want more control over your smeshing, you can follow the [Advanced Smeshing Guide](./smeshing_adv/setup.md).

### Smapp - Basic Smeshing

The simplest way to run a Spacemesh node is by using the [Spacemesh App (Smapp)](https://github.com/spacemeshos/smapp/). You can simply download and install the [latest release](https://github.com/spacemeshos/smapp/releases) for your platform and be up and running in no time. Smapp will automatically download the correct configuration file, and will show you visually the network status, its synchronization status, and the status of PoS initialization and smeshing. Smapp bundles a full `go-spacemesh` instance under the hood and manages it for you, including upgrades. See [our Basic Smeshing guide](start/smeshing/smeshing_basic/install) for more information on setting up Smapp and smeshing using it.

Smapp also lets you customize your config file and use the node API directly. Running Smapp does not provide any greater or lesser functionality than running go-spacemesh directly, but some technical users who prefer working with a CLI rather than a GUI may wish to run `go-spacemesh` as a system service, etc. Users running without a GUI will of course have no choice but to run `go-spacemesh` directly via CLI.

### CLI - Advanced Smeshing

You can also run a full or smeshing node entirely from the command line using [go-spacemesh](https://github.com/spacemeshos/go-spacemesh). In addition, the [`postcli`](https://github.com/spacemeshos/post/blob/develop/cmd/postcli/README.md) tool can be used to generate PoS data with much more fine-grain control.

Some advantages of smeshing using `go-spacemesh` and `postcli` over Smapp include:

- `go-spacemesh`:
    - More lightweight compared to Smapp.
    - Can run on headless (non-GUI) systems.
    - Advanced configuration is possible. Smapp has pre-programmed values and changing them is not as straightforward as it is on `go-spacemesh`.
    - 1:N (one identity, multiple nodes) setup is not yet supported on Smapp.
    - Works well with Docker.
- `postcli`:
    - Does not require internet or for your node to be synced to generate PoS data. Smapp will first start a full node and sync it before generating the PoS data.
    - Can generate PoS data for multiple systems. Using Smapp for this purpose is not possible yet.
    - Can be used to [split the initialization workload](./smeshing_adv/setup.md/#parallel-initialization) in multi-GPU setups.
    - Can be used to generate PoS data on a cloud compute service.

Note that we recommend only the more advanced users to smesh using the CLI programs. See our [Advanced Smeshing Guide](./smeshing_adv/setup.md) for more information.
