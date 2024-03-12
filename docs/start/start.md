---
id: start
title: Getting Started
---

# Requirements

Resource requirements for mining in Spacemesh can be broken down into three categories: those for running a full node, which are required for all nodes regardless of whether or not they're mining; those required for the PoST initialization process that's required before mining starts; and those required for ongoing mining.

## Full Node

See the official set of [system requirements & recommended hardware](./requirements.md). Resource requirements for running a node are quite modest: an Intel or ARM CPU, a modern operating system, a few dozen GB of free hard disk space, and a reliable broadband Internet connection.

The biggest resource consumed by a Spacemesh node is bandwidth. A full node currently consumes between 150-1500mb/hour of bandwidth. The node is quiescent most of the time, consuming only 100-300kbit/s, but spikes as high as 35Mbit/s every few minutes when a new layer appears and network traffic increases (Hare messages, proposals, etc.). Bandwidth is variable and depends heavily on the network condition and the number and quality of one's peers.

It's important that a node be run on an **unmetered Internet connection** or bandwidth charges will add up quickly.

We have plans to drastically reduce bandwidth consumption via a more efficient Hare protocol and other improvements, but these upgrades aren't finished and aren't scheduled yet.

As of epoch 5, a full node requires around 1.6gb to store the state database (note that versions of `go-spacemesh` prior to v1.2.0 consumed significantly more hard disk space). We strongly recommend storing the node state (i.e., the `data-folder`) on a fast drive such as a SSD, as opposed to a HDD, to ensure that disk throughput doesn't limit the node's ability to keep up with the network.

## PoST Initialization

PoST init is designed to be done with a GPU. It can be done with a CPU, but it will be orders of magnitude slower. The newer and faster the GPU, the faster the initialization process.

As a benchmark, the minimum PoST data size (256GiB, or 4 storage units) can be initialized in 8-10 hours using a single Nvidia GeForce RTX 4090. The same data would take around 36 hours using a Nvidia GeForce RTX 3060. Initialization time scales linearly, so that initializing 40 SU would take 10x as long as initializing 4 SU.

Note that initialization can be parallelized across multiple systems or multiple GPUs, and it can be performed on one system (including in the cloud) and the resultant data moved to another system (e.g., one without a GPU) for long-term storage and mining. There's more information on this below.

## Ongoing Mining

Mining on an ongoing basis does _not_ require a GPU. The only additional resource consideration for mining, beyond the baseline cost of running a full node (as outlined above), is the cost of generating a [proof of space](./../learn/post.md) once per epoch. The time required to generate a proof is complicated and multivariate, depending on several factors including CPU speed, disk speed, size of PoST data, and the `smeshing-proving-opts` settings specified in config (more on this below).

The general requirement is a modern CPU with the [AES-NI](https://en.wikipedia.org/wiki/AES_instruction_set) instruction and a disk that's fast enough to perform a single, sequential read over the entire PoST data in 4-5 hours. This allows enough time to perform a second read during the PoET cycle gap on the off chance that the first pass fails to generate a valid proof. Hard drive performance varies widely but most modern 7200 RPM HDDs can perform a sequential read at 100-200mb/sec (5400 RPM drives are slower). This means that, to be safe, a smesher shouldn't initialize more than 2-4 TB or 8-16 SU on a single HDD. It's certainly possible to initialize more and smeshers with 4TB drives and fast CPUs report no issues generating a proof in time, but the probability of failure increases with each additional byte initialized. It's also possible to achieve much higher read speeds using more expensive technology such as SSD and/or RAID.

For much more information see [fine-tuning proving](./smesher/advanced.md#fine-tuning-proving) and [the profiler tool](https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md) which can be used to benchmark one's hardware.

# Getting Started

Now that you have the necessary resources ready, it's time to start smeshing! This section will walk you through how to do that. First a couple quick notes:

- this guide is intended as an advanced smeshing guide, covering cases such as parallel init, cloud GPUs, and transferring and managing multiple identities. In particular it does not cover the baseline case of using Smapp to initialize a single smesher. That process is straightforward and mostly automated in Smapp, and the steps are outlined in this [explainer video](https://youtu.be/xwsg7FzuBE0?si=Eing6i_KY7VSE7W4). The guide does explain the differences between mining using Smapp or the CLI where appropriate.
- the author of this guide uses Linux and CLI commands will be specified as they'd be run on Linux. In most cases, the same commands should work verbatim on other platforms including Windows and macOS with appropriate tweaks (e.g., using the correct platform-specific paths). Contributions containing correct instructions for different platforms are welcome; feel free to [open an issue](https://github.com/spacemeshos/wiki/issues) with a contribution.

# Running a Node

In order to mine one must have a fully synchronized Spacemesh node running. Strictly speaking, running a node is not required during the PoST initialization process, since it relies only upon static data (with one exception, explained in a moment) such as the smesher's identity and the PoST init params (total storage to initialize, max file size, etc.). Most smeshers nevertheless choose to run a full node throughout the init process for several reasons: the node itself can perform the initialization for you, it means you'll have a fully-synchronized node when the init finishes and smeshing begins (with the opportunity to troubleshoot any issues in the interim), and it means you'll have a trustless copy of the highest `commitmentAtxId`.

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
