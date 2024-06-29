---
id: start
title: Getting Started
---

This guide will walk you through all the steps for becoming a smesher. Smeshing is analogous to "mining" in other blockchain networks. Thus, as a smesher, you will contribute some of your hard drive storage and computing power in order to participate in network operation and security, thereby becoming eligible to earn rewards in SMH, the native token of the Spacemesh protocol.

If you are completely new to this space and have never participated in a blockchain network before, no need to worry. This guide caters to blockchain new-comers and experienced users, alike.

## Got Questions?

If you run across any issues or have any questions, be sure to reach out to us in our [Discord server](https://discord.gg/mq7KXvzc). After joining, ask your questions in the [community troubleshooting](https://discord.com/channels/623195163510046732/1141736098830229584) channel by creating a post and someone from the Spacemesh team or the community will get back to you. This will not only help you solve the issue, but will also be a great resource for someone who may have the same issue in the future.

## System Requirements

To start smeshing, you must first become a full node on the Spacemesh protocol. A **full node** only stores the blockchain ledger and executes the transactions contained in valid. A full node can only become a **smeshing node** if it satisfies the additional requirements for smeshing. Visit the [System Requirements](./requirements.md) page to see if your system satisfies the requirements. If it does, congratulations! continue reading to start smeshing.

## Network Configuration

While setting up a full or smeshing node is as simple as running the Smapp and going through the steps, if you run into any network-related issues, visit the [Network Configuration](./netconfig.md) page. It is also recommended to go through the Network Configuration page to see that all the network-related settings are in order so you can have a smooth, uninterrupted smeshing experience.

If you come across any network-related issue and cannot find its solution on the Network Configuration page, post your problem on Discord (invite given above) and someone should reach out to you with a solution.

## Choosing Your Guide

Now that your system satisfies the requirements, it is time to start smeshing! At this stage, you have two ways to start smeshing:

- If you are new to smeshing and/or do not want to use a Command Line Interface (CLI), you can follow the [Basic Smeshing Guide](./smeshing_basic/install.md).
- If you are an advanced user and/or want more control over your smeshing, you can follow the [Advanced Smeshing Guide](./smeshing_adv/setup.md).

### Smapp - Basic Smeshing

The simplest way to run a Spacemesh node is using the [Spacemesh App (Smapp)](https://github.com/spacemeshos/smapp/). You can simply download and install the [latest release](https://github.com/spacemeshos/smapp/releases) for your platform and be up and running in no time. Smapp will automatically download the correct configuration file, and will show you visually the network status, its synchronization status, and the status of PoST init and smeshing. Smapp bundles a full `go-spacemesh` instance under the hood and manages it for you, including upgrades. See [our Basic Smeshing guide](start/smeshing/smeshing_basic/install) for more information on setting up Smapp and smeshing using it.

Smapp also lets you customize your config file and use the node API directly. Running Smapp does not provide any greater or lesser functionality than running go-spacemesh directly, but some technical users who prefer working with a CLI rather than a GUI may wish to run `go-spacemesh` as a system service, etc. Users running without a GUI will of course have no choice but to run `go-spacemesh` directly via CLI.

### CLI - Advanced Smeshing

It is also possible to run a Spacemesh node entirely from the command line using the [go-spacemesh](https://github.com/spacemeshos/go-spacemesh) full node implementation. You can run a pre-compiled [binary release](https://github.com/spacemeshos/go-spacemesh/releases) for your platform, or you can compile the application yourself. We recommend that only more advanced users attempt this method. See our [Advanced Smeshing Guide](./smeshing_adv/setup.md) for more information on setting up your Full Node.
