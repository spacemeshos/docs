---
id: post_init
title: PoST Initialization
---

## Proof Generation

Once an epoch, after the node has received a PoET proof and during the PoET cycle gap, the node will generate a
[proof of spacetime](#proof-generation), which requires that it sequentially read all of the PoST data. The details
aren't something most miners need to worry about as the node will handle the process for you; see
[Fine-tuning Node Performance](./performance.md) for information on benchmarks and parameters that can be tweaked.

The first part of the proving process is an initial proof of work phase called **k2pow** that uses a proof of work
algorithm called [RandomX](https://github.com/tevador/RandomX). During this phase, which is CPU bound, you should see
CPU usage spike briefly for a few minutes. There should be very little network or disk activity during this phase. As
explained in the [Profiler docs](https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md#is-that-all-that-is-happening-during-the-proof-generation),
it should take a low-end CPU around 2.5 minutes to compute k2pow for 4 SU; computation time scales linearly with the
hash rate and number of storage units being proven. See the [RandomX Benchmark](https://xmrig.com/benchmark) to get a
sense of your CPU's RandomX hash rate.

Once the k2pow phase is complete, the node begins the PoST proving process, which takes longer as it involves reading
and computing a hash function over all the committed PoST data. How long depends on factors including the disk read
speed, CPU speed, and configured [nonces and threads](./advanced.md#fine-tuning-proving). This process may be CPU bound
or IO bound, depending on the configuration. (It also doesn't touch the network.)

## Initialization

The hardest and most important part of becoming a smesher is the PoST initialization (sometimes referred to as
"plotting"). This process requires a GPU and is designed to be costly and time-consuming due to the crypto-economic
design of the protocol. As described above, unlike in proof of stake networks, there's no "slashing" (burning a portion
of stake) in the Spacemesh protocol. Instead, the sanction for engaging in malicious behavior such as equivocation is
invalidation of a smesher ID, which invalidates all of the PoST data associated with that ID. In order for this sanction
to be costly, performing PoST initialization and generating PoST data must also be costly.

Note that initialization can theoretically be performed using a CPU (as opposed to a GPU), but it will take so long that
this option isn't viable for the vast majority of miners.

### OpenCL

PoST initialization requires support for [OpenCL](https://en.wikipedia.org/wiki/OpenCL). Installation instructions will
vary depending upon your operating system, platform, and GPU hardware. A good starting place for Linux users is
[this wiki page](https://wiki.archlinux.org/title/GPGPU). On Ubuntu and other Debian-compatible systems it may be enough
to install these packages:

```bash
> sudo apt-get update
> sudo apt-get install ocl-icd-libopencl1 opencl-headers clinfo
```

To test if OpenCL is installed and configured correctly on your system, try running `clinfo`. You should see output
similar to the following:

```bash
> clinfo -l
Platform #0: NVIDIA CUDA
 `-- Device #0: NVIDIA GeForce RTX 2060 SUPER
```

#### macOS Overview

For macOS users, OpenCL is bundled with the system, and the framework is available out of the box on macOS version 10.6
(Snow Leopard) and later. Therefore, explicit installation of OpenCL is generally not required. However, to ensure
compatibility and optimal performance with your specific hardware and software setup, you might need to update your
macOS.

##### Steps

* Update macOS: Keep your macOS up to date to ensure you have the latest OpenCL framework versions and GPU drivers.
  You can check for updates in the “Software Update” section of System Preferences.
* Use clinfo: To verify the OpenCL configuration, you can install `clinfo` using the command `brew install clinfo`.
  Then, run `clinfo` in the terminal to check the available OpenCL platforms and devices.

#### Windows Installation Overview

Installing OpenCL on Windows requires manual GPU drivers updates, as the operating system does not include these drivers
by default. The process is similar across different GPU manufacturers but requires visiting the specific manufacturer’s
website to download the appropriate drivers.

##### Steps

* Download Drivers: Navigate to your GPU manufacturer’s website (NVIDIA, AMD, or Intel).
* Select your GPU model and download the latest drivers that include the OpenCL runtime support.
* Install the Drivers: Execute the downloaded installer and follow the on-screen instructions to complete the
  installation. Make sure any options related to OpenCL support are selected if given a choice.
* Verification
* After installation, use the `clinfo` command on Windows to check for OpenCL support. This utility will list all
  OpenCL-compatible devices on your system and provide detailed information, confirming a successful installation.

#### Troubleshooting

Issues with OpenCL can often be resolved by ensuring your GPU drivers are fully up to date. Check your hardware’s
compatibility with the version of OpenCL you’re using and look for any software that might conflict with your drivers.
For specific problems, the support documentation and forums for NVIDIA, AMD, or Intel may offer solutions.

## Initialization Speed

The amount of time it takes to complete PoST initialization depends upon a number of factors including GPU model, hard
drive write speed, and the number of storage units being initialized. As a rule of thumb, Nvidia RTX 3090 cards can
initialize around 3-4 MB/s and 4090 cards can initialize around 6-7 MB/s. Community
[crowd-sourced benchmarks](https://docs.google.com/spreadsheets/d/1X_E7H9EFdLoEZ8IHwm1ApcnlZ6VtBCWwSMOJIw2rytI/edit#gid=822058896)
are available for a wide range of cards. Note that hard drive write speeds tend to be much faster than GPU throughput,
so this should not limit the initialization speed unless the drive is exceptionally slow or exceptionally busy.

## Choice of Filesystem

In general Spacemesh is agnostic to the choice of filesystem. You can successfully initialize and run an identity and
manage the underlying PoST data on any Linux, Windows, or macOS-compatible filesystem. However, you should keep two
things in mind when choosing a filesystem.

1. If there is any chance you will want to move the identity from one operating system to another, we strongly recommend
   using the [exFAT](https://en.wikipedia.org/wiki/ExFAT) filesystem. This is the only filesystem that works out of the
   box across all the major operating systems. Keep in mind that _copying_ an entire identity from one filesystem to
   another could take a very long time, whereas with an exFAT filesystem you can just "plug and chug" on any computer.
   You should be able to initialize and format a new exFAT filesystem easily in any operating system.
1. Different file systems utilize space differently and require different amounts of overhead. As such, the number of
   storage units you will be able to fit on a given disk will depend to some extent upon the filesystem used to format
   the disk. In our personal experience, we've found that exFAT is more efficient than EXT4, and may allow one extra
   storage unit to be placed on the same physical disk.

We also recommend that you _not encrypt_ the drive or partition used to store the PoST data. You should of course
protect the `identity.key` file (which contains a miner's private key and is located in the `node_data/identities`
folder) and not allow it to fall into anyone else's hands, but full drive encryption feels like overkill and could slow
down [proof generation](#proof-generation).

## Number of Units

Determining exactly how many storage units fit on a drive is actually somewhat non-trivial if you want to maximize the
amount of PoST data you can fit on a drive, maximize the identity size, and maximize the rewards. For one thing, PoST
identity file sizes are base 2 (e.g., 64GiB) whereas the size of most hard drives is base-10 (e.g., 1TB). Moreover, as
described in the previous section, different file systems use space differently and require different amounts of
overhead.

Linux users may find a command such as the following helpful in displaying the available space on a drive:

```bash
> df -B GiB /dev/sda
Filesystem     1GiB-blocks    Used Available Use% Mounted on
/dev/sda           3667GiB 3649GiB     19GiB 100% /mnt/smesher-01
```

As you can see, this 4TB drive, which should contain 3725.29 GiB, in fact only contains a usable 3667 GiB. After
initializing 57 storage units of 64 GiB each, it contains around 19 GiB free usable space.

Linux users may also find the [`tune2fs`](https://linux.die.net/man/8/tune2fs) command useful, both for displaying more
detailed filesystem information and for reducing the amount of
[reserved space](https://unix.stackexchange.com/questions/7950/reserved-space-for-root-on-a-filesystem-why) on a drive.
Assuming a drive is exclusively being used to store PoST data, the reserved space may safely be set to zero.
For example, for the above drive `/dev/sda`:

```bash
> sudo tune2fs -m 0 /dev/sda
```

**Wanted:** Please fill in information on how to do the same on macOS and Windows.

## Starting Initialization

As with most other aspects of Spacemesh, the easiest way to begin and monitor initialization is using the Smapp
application. When you first open it, Smapp will walk you through the process of choosing a location for your PoST data,
choosing your GPU, and beginning initialization. It'll show you the progress as initialization proceeds.
See [Smapp Tutorial #4: Proof of Space & Smeshing Setup](https://youtu.be/xwsg7FzuBE0?si=UnTu4wF-db_O2jXE) for more
information on this process.

If you prefer to perform PoST initialization using the command line, you have two options. If you simply run
`go-spacemesh` directly with the `smeshing` configuration parameters specified above, it'll perform initialization for
you using the fastest GPU. You can also manually perform initialization using the
[`postcli` tool](https://github.com/spacemeshos/post/tree/develop/cmd/postcli), which allows you to have even greater
control of the initialization process, such as running in parallel across multiple systems or multiple GPUs (more
information on this below).

### Choosing a Provider

As mentioned, `go-spacemesh` will automatically choose the fastest GPU to perform initialization based on a benchmark.
You can change the selected GPU with the `smeshing-opts-provider` config item. To see the list of detected GPUs and
their corresponding indices, run [`postcli`](https://github.com/spacemeshos/post/tree/develop/cmd/postcli) as follows.
You should see something like the following:

```console
> postcli -printProviders
([]postrs.Provider) (len=3 cap=3) {
 (postrs.Provider) {
  ID: (uint) 0,
  Model: (string) (len=44) "[GPU] NVIDIA CUDA/NVIDIA GeForce RTX 3080 Ti",
  DeviceType: (postrs.DeviceClass) GPU
 },
 (postrs.Provider) {
  ID: (uint) 1,
  Model: (string) (len=44) "[GPU] NVIDIA CUDA/NVIDIA GeForce RTX 3080 Ti",
  DeviceType: (postrs.DeviceClass) GPU
 },
 (postrs.Provider) {
  ID: (uint) 4294967295,
  Model: (string) (len=17) "[CPU] scrypt-jane",
  DeviceType: (postrs.DeviceClass) CPU
 }
}
```

The first two (with IDs 0 and 1) are the GPUs; the last (with ID 4294967295) is the CPU. To select the second GPU with
ID 1, use the following config:

```json
  "smeshing": {
    "smeshing-opts": {
      "smeshing-opts-datadir": "<post_data_directory>",
      "smeshing-opts-maxfilesize": <post_file_size>,
      "smeshing-opts-numunits": <post_num_units>,
      "smeshing-opts-provider": 1
    },
    ...
  },
```

## Resizing PoST

The size of the data used for proof generation can be changed after initialization. This is useful if you want to add
more storage units to your identity, or if you want to reduce the number of storage units to free up space on your
drive. To do this, you can change the `numunits` parameter in the `smeshing-opts` section of the `config.json` file.
Stop your node, change the config file, and restart the node. The node will automatically resize the PoST data to the
new size:

```json
  "smeshing": {
    "smeshing-opts": {
      "smeshing-opts-datadir": "<post_data_directory>",
      "smeshing-opts-maxfilesize": <post_file_size>,
      "smeshing-opts-numunits": <new_num_units>,
      "smeshing-opts-provider": "<gpu_id>"
    },
    ...
  },
```

**Info:** Resizing PoST data is a time-consuming process during which the node is not able to generate proofs. The node
will automatically generate proofs once the resizing process is complete. Time your resizing process accordingly - start
after your PoET cycle gap ends and the node has generated a PoST proof and finish before the next PoET cycle gap.

**Be aware:** Decreasing your PoST size will reduce your rewards and becomes affective in the epoch after the resizing
process is complete and the node has generated a PoST proof. Increasing your PoST size will increase your rewards, but
it takes 2 epochs to become effective. Example: If you increase your PoST size before the PoET cycle gap in epoch 10,
your rewards will be increased starting from epoch 12.

You can also resize PoST data using the [`postcli` tool](https://github.com/spacemeshos/post/tree/develop/cmd/postcli),
which allows you to have greater control. For information on how to initialize only the data you don't already have and
merge it with the existing data refer to the section
[Initializing a subset of post data](https://github.com/spacemeshos/post/tree/develop/cmd/postcli#initializing-a-subset-of-post-data).
