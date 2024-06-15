---
id: start
title: Smeshing Guide
---

This guide will walk you through all the steps for becoming a smesher. Smeshing is similar to "mining" in other blockchain networks. So, as a smesher, you will contribute some of your hard drive storage and computing power in order to participate in network operation and security, thereby becoming eligible to earn rewards in SMH, the native token of the Spacemesh protocol.

If you are completely new to this space and have never participated in a blockchain network before, no need to worry. This guide caters to blockchain new-comers and experienced users, alike.

## Got Questions?

If you run across any issues or have any questions, be sure to reach out to us in our [Discord server](https://discord.gg/mq7KXvzc). After joining, ask your questions in the [community troubleshooting](https://discord.com/channels/623195163510046732/1141736098830229584) channel by creating a post and someone from the Spacemesh team or the community will get back to you. This will not only help you solve the issue, but will also be a great resource for someone who may have the same issue in the future.

## System Requirements

To start smeshing, you must first become a full node on the Spacemesh protocol. A **full node** only stores the blockchain ledger and executes the transactions contained in valid. A full node can only become a **smeshing node** if it satisfies the additional requirements for smeshing. Visit the [requirements](./requirements.md) page to see if your system satisfies the requirements. If it does, congratulations! continue reading to start smeshing.

## Getting Started

Now that your system satisfies the requirements, it is time to start smeshing! This section will walk you through how to do just that. Up first is running a full node.

# Running a Full Node

As noted above, in order to smesh, one must have a fully synchronized Spacemesh node running. Strictly speaking, running a node is not required during the PoST initialization process, since it relies only upon static data (with one exception, explained in a moment) such as the smesher's identity and the PoST init params (total storage to initialize, max file size, etc.). Most smeshers nevertheless choose to run a full node throughout the init process for several reasons: the node itself can perform the initialization for you, it means you'll have a fully-synchronized node when the init finishes and smeshing begins (with the opportunity to troubleshoot any issues in the interim), and it means you'll have a trustless copy of the highest `commitmentAtxId`.

### `commitmentAtxId`

The one piece of dynamic data that you need to perform PoST init is the highest `commitmentAtxId`. This is simply the ID of the highest ATX known at the time that PoST initialization begins. It's used to mitigate a certain class of protocol attack; for more information, see [POPS-VRF implementation](https://github.com/spacemeshos/pm/issues/172).

The simplest way to get this is to ask your own node, using the API as such:

```bash
> grpcurl -plaintext 127.0.0.1:9092 spacemesh.v1.ActivationService.Highest | jq -r '.atx.id.id' | base64 -d | xxd -p -c 64
435fa442517e9c75087de1b06d2a9d12c345505f3cac93ac52b816171ce48308
```

While we plan to operate public nodes in the near future, we don't operate any at present. We therefore strongly encourage you to double-check this information, ideally by running your own node, or alternatively by checking with the community [on Discord](https://chat.spacemesh.io/).

## Smapp

The simplest way to run a Spacemesh node is using [Smapp](https://github.com/spacemeshos/smapp/), the wallet, full node, and miner frontend application. You can simply download and install the [latest release](https://github.com/spacemeshos/smapp/releases) for your platform and be up and running in no time. Smapp will automatically download the correct configuration file, and will show you visually the network status, its synchronization status, and the status of PoST init and smeshing. Smapp bundles a full go-spacemesh instance under the hood and manages it for you, including upgrades. See [our Smapp guide](start/smapp/install) for more information on setting up Smapp.

Like running go-spacemesh directly from the command line, Smapp also lets you customize your config file and use the node API directly. Running Smapp doesn't provide any greater or lesser functionality than running go-spacemesh directly, but some technical users may prefer working with CLI rather than GUI, may wish to run go-spacemesh as a system service, etc. Users running without a GUI will of course have no choice but to run go-spacemesh directly via CLI.


## Advanced Smeshers

It's possible to run a Spacemesh node entirely from the command line using the [go-spacemesh](https://github.com/spacemeshos/go-spacemesh) full node implementation. You can run a pre-compiled [binary release](https://github.com/spacemeshos/go-spacemesh/releases) for your platform, or you can compile the application yourself. We recommend that only more advanced users attempt this method.

See our [Advanced Smesher Guide](./smesher/setup.md) for more information on setting up your Full Node.

## Advanced Smesher Guide
