---
id: considerations
title: Practical Considerations
---

## Practical Considerations

Having understood the requirements for running a full node or a smeshing node, it is important to take note of the following considerations as you embark on your smeshing journey.

### CPU Usage

As long as your system and configuration meet the recommended requirements, the on-going utilization of your CPU by the Smapp should be limited to 2 CPU cores during normal operation (after the initial setup phase).

### Network Configuration

Your network should allow the Smapp to accept incoming connections on **UDP port 7153** and on **TCP port 7153** and your computer firewall **should not block incoming UDP and TPC packets on this port**. The App attempts to automatically configure your network using UPnP. In some cases you may need to configure your router and firewall manually. Follow [this guide](./netconfig.md) to configure your network.

### Using a Laptop for Smeshing

Of course, you can smesh on your laptop if it meets the minimum system requirements. However, you will need to make sure you leave your laptop **open/awake and connected to power and to the Internet 24/7**. This may degrade your laptop's battery.

Occasionally **shutting down your laptop or the Smapp may prevent you from Smeshing blocks and from earning Smeshing rewards**.

### PoS Data

You only need to setup proof of space data once to smesh for an unlimited period of time. The larger your proof of space data is, the higher your smeshing rewards will be.

You can use any magnetic hard disk drive (HDD) or solid state drive (SSD) for storing the PoS data. There is no significant advantage in using an SSD over HDD. 

You do not need to have temporary disk space larger than your final proof of space data. Creating proof of space data on more than one volume is not yet supported.

### Network Operations

The biggest resource consumed by a Spacemesh node is bandwidth. A full node currently consumes between 150-1500mb/hour of bandwidth. The node is quiescent most of the time, consuming only 100-300kbit/s, but spikes as high as 35Mbit/s every few minutes when a new layer appears and network traffic increases (Hare messages, proposals, etc.). Bandwidth is variable and depends heavily on the network condition and the number and quality of one's peers.

It's important that a node be run on an **unmetered Internet connection** or bandwidth charges will add up quickly. We have plans to drastically reduce bandwidth consumption via a more efficient Hare protocol and other improvements, but these upgrades aren't finished and aren't scheduled yet.

We strongly recommend storing the node state (i.e., the `data-folder`) on a fast drive such as a SSD, as opposed to a HDD, to ensure that disk throughput does not limit the node's ability to keep up with the network.

### PoST Initialization

PoST init is designed to be done with a GPU. It can be done with a CPU, but it will be orders of magnitude slower. The newer and faster the GPU, the faster the initialization process.

As a benchmark, the minimum PoST data size (256GiB, or 4 storage units) can be initialized in 8-10 hours using a single Nvidia GeForce RTX 4090. The same data would take around 36 hours using a Nvidia GeForce RTX 3060. Initialization time scales linearly, so that initializing 40 SU would take 10x as long as initializing 4 SU.

Note that initialization can be parallelized across multiple systems or multiple GPUs, and it can be performed on one system (including in the cloud) and the resultant data moved to another system (e.g., one without a GPU) for long-term storage and mining. There's more information on this below.

### Ongoing Mining

Mining on an ongoing basis does _not_ require a GPU. The only additional resource consideration for mining, beyond the baseline cost of running a full node (as outlined above), is the cost of generating a [proof of space](./../learn/post.md) once per epoch. The time required to generate a proof is complicated and multivariate, depending on several factors including CPU speed, disk speed, size of PoST data, and the `smeshing-proving-opts` settings specified in config (more on this below).

The general requirement is a modern CPU with the [AES-NI](https://en.wikipedia.org/wiki/AES_instruction_set) instruction and a disk that's fast enough to perform a single, sequential read over the entire PoST data in 4-5 hours. This allows enough time to perform a second read during the PoET cycle gap on the off chance that the first pass fails to generate a valid proof. Hard drive performance varies widely but most modern 7200 RPM HDDs can perform a sequential read at 100-200mb/sec (5400 RPM drives are slower). This means that, to be safe, a smesher shouldn't initialize more than 2-4 TB or 8-16 SU on a single HDD. It's certainly possible to initialize more and smeshers with 4TB drives and fast CPUs report no issues generating a proof in time, but the probability of failure increases with each additional byte initialized. It's also possible to achieve much higher read speeds using more expensive technology such as SSD and/or RAID.

For much more information see [fine-tuning proving](./smesher/advanced.md#fine-tuning-proving) and [the profiler tool](https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md) which can be used to benchmark one's hardware.