---
id: smesher
title: Advanced Smesher Guide
---


## Custom Smapp Config

While running Smapp, you should see two config files in the Smapp data directory (by default, `$HOME/.config/Spacemesh` on Linux):

```bash
> ls -1 ~/.config/Spacemesh/node-config.*
/home/lane/.config/Spacemesh/node-config.7c8cef2b.json
/home/lane/.config/Spacemesh/node-config.json
```

The second file, the one called `node-config.json`, is the default network config and should not be touched. (It should match the config available via the discovery service, see below.) The first file, the one called `node-config.7c8cef2b.json`, is your local copy of the config. (`7c8cef2b` is the genesis ID of the mainnet network. Config files for other networks will have different names.) You can modify this file if you first exit Smapp. Save your changes and open Smapp again to read them.

Note: use caution when modifying the config! This config file must currently maintain its structure. If you update, e.g., the subkey of an object, it'll overwrite the entire object, not append it onto the main network config. See [Merge node config and custom config deeply](https://github.com/spacemeshos/smapp/issues/1407) for more information.


## System Service

On compatible Linux-based systems, we strongly recommend running `go-spacemesh` as a [systemd service](https://linuxhandbook.com/create-systemd-services/). This makes log management easier, and it ensures that the node will automatically restart if it dies or is killed, and that it automatically starts when the system is restarted. Each Linux distribution is different, so please check the documentation for your distribution to determine precisely where to create the service file. On most distributions the file should live in `/etc/systemd/system`. Here's a sample service file - please read the [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemd.service.html) for more information and update paths, users, etc. to suit your particular system:

```
[Unit]
Description=go-spacemesh (Mainnet)
Wants=network-online.target
After=network-online.target
StartLimitIntervalSec=60
StartLimitBurst=5

[Service]
Type=simple
User=spacemesh
Group=spacemesh
Restart=always
RestartSec=5
ExecStart=go-spacemesh -c /home/spacemesh/node-config.json

[Install]
WantedBy=multi-user.target
```

With the service file in place, assuming it's called `spacemesh.service`, you simply need to run the following commands to enable and start it:

```bash
> sudo systemctl daemon-reload
> sudo systemctl enable spacemesh.service
```

You can then view the logs of the running service by running:

```bash
> journalctl --unit spacemesh -f
```

**Wanted: Please add information on doing something similar on macOS and Windows.**

## API

The node implements a [gRPC](https://grpc.io/) API that can be used to monitor and interact with the running node, and change certain settings. The API is split into two separate instances, one public and one private, each of which implements several services that can be turned on or off at will. "Public" services provide readonly access to data such as node status, epochs/layers/blocks/transactions, account state, etc., whereas "private" services allow the operator to change the params of a running node, e.g., the [smesher coinbase](https://github.com/spacemeshos/api/blob/a7c0b7acd9bc72940a8ab8e22202a77a4c3f438b/spacemesh/v1/smesher.proto#L29) or the [set of PoET servers](https://github.com/spacemeshos/api/blob/a7c0b7acd9bc72940a8ab8e22202a77a4c3f438b/spacemesh/v1/smesher.proto#L55). While "public" endpoints are theoretically safe to open for public API calls, in practice **we strongly recommend that no API services be exposed publicly.** The API design and implementation have not been hardened against denial of service attacks and represent an attack vector against a running node. For this reason, you should run _both the public and private API instances_ on private interfaces (e.g., the loopback/127.0.0.1 interface) and/or put them behind a firewall.

Default network config files by default enable all API services:

```
  "api": {
    "grpc-public-services": [
      "debug",
      "global",
      "mesh",
      "node",
      "transaction",
      "activation"
    ],
    "grpc-public-listener": "0.0.0.0:9092",
    "grpc-private-services": [
      "smesher",
      "admin"
    ],
    "grpc-private-listener": "127.0.0.1:9093",
    "grpc-json-listener": "0.0.0.0:9094"
  },
```

Note that the public instance runs on the interface/port `0.0.0.0:9092` and the private runs on `127.0.0.1:9093`. `grpc-json-listener` refers to a JSON-based [gRPC-Gateway](https://github.com/grpc-ecosystem/grpc-gateway) that allows clients that don't speak gRPC to communicate with the API using JSON instead, and can in general be turned off.

The easiest way to interact with the API from the command line and from scripts is using the [`grpcurl`](https://github.com/fullstorydev/grpcurl) tool. gRPC is self-documenting via a feature known as [reflection](https://github.com/grpc/grpc/blob/master/doc/server-reflection.md) that lets a client traverse an API, list RPC methods, inputs and outputs, and describe data types, e.g.:

```bash
> grpcurl -plaintext localhost:9092 list
spacemesh.v1.ActivationService
spacemesh.v1.DebugService
spacemesh.v1.GlobalStateService
spacemesh.v1.MeshService
spacemesh.v1.NodeService
spacemesh.v1.TransactionService
> grpcurl -plaintext localhost:9092 describe spacemesh.v1.NodeService
spacemesh.v1.NodeService is a service:
service NodeService {
  rpc Build ( .google.protobuf.Empty ) returns ( .spacemesh.v1.BuildResponse );
  rpc Echo ( .spacemesh.v1.EchoRequest ) returns ( .spacemesh.v1.EchoResponse );
  rpc ErrorStream ( .spacemesh.v1.ErrorStreamRequest ) returns ( stream .spacemesh.v1.ErrorStreamResponse );
  rpc NodeInfo ( .google.protobuf.Empty ) returns ( .spacemesh.v1.NodeInfoResponse );
  rpc Status ( .spacemesh.v1.StatusRequest ) returns ( .spacemesh.v1.StatusResponse );
  rpc StatusStream ( .spacemesh.v1.StatusStreamRequest ) returns ( stream .spacemesh.v1.StatusStreamResponse );
  rpc Version ( .google.protobuf.Empty ) returns ( .spacemesh.v1.VersionResponse );
}
> grpcurl -plaintext localhost:9092 describe spacemesh.v1.NodeInfoResponse
spacemesh.v1.NodeInfoResponse is a message:
message NodeInfoResponse {
  string hrp = 1;
  uint32 first_genesis = 2;
  uint32 effective_genesis = 3;
  uint32 epoch_size = 4;
}
```

For more information gRPC reflection see [gRPC Server Reflection Tutorial](https://github.com/grpc/grpc-go/blob/master/Documentation/server-reflection-tutorial.md#enable-server-reflection).

Common, useful commands for node operators include:

- Check node status (synced layer, verified layer, number of connected peers):

```bash
> grpcurl -plaintext localhost:9092 spacemesh.v1.NodeService.Status
{
  "status": {
    "connectedPeers": "31",
    "isSynced": true,
    "syncedLayer": {
      "number": 16278
    },
    "topLayer": {
      "number": 16278
    },
    "verifiedLayer": {
      "number": 16278
    }
  }
}
```

- See the events stream (a useful, high level idea of what the node is doing, including PoST init, PoET registration, publishing ATXs, and publishing proposals):

```bash
> grpcurl -plaintext localhost:9093 spacemesh.v1.AdminService.EventsStream
{
{
  "timestamp": "2023-09-07T17:55:22.283848702Z",
  "help": "Node computed randomness beacon, it will be used to determine eligibility to participate in the consensus.",
  "beacon": {
    "epoch": 4,
    "beacon": "nhiDhQ=="
  }
}
{
  "timestamp": "2023-09-07T17:56:23.638117180Z",
  "help": "Node started post data initialization. Note that init is noop if node restarted when init was ready.",
  "initStart": {
    "smesher": "...",
    "commitment": "..."
  }
}
{
  "timestamp": "2023-09-07T17:56:23.664434458Z",
  "help": "Node completed post data initialization.",
  "initComplete": {

  }
}
{
  "timestamp": "2023-09-07T17:56:23.686208298Z",
  "help": "Node needs to wait for poet to complete in publish epoch. Once completed, node fetches proof from poet and runs post on that proof. After that publish an ATX that will be eligible for rewards in target epoch.",
  "poetWaitProof": {
    "publish": 4,
    "target": 5,
    "wait": "871416.313797373s"
  }
}
{
  "timestamp": "2023-09-08T08:00:01.432480745Z",
  "help": "Computed eligibilities for the epoch. Rewards will be received after publishing proposals at specified layers. Total amount of rewards in SMH will be based on other participants in the layer.",
  "eligibilities": {
    "epoch": 4,
    "beacon": "nhiDhQ==",
    "atx": "...",
    "activeSetSize": 16582,
    "eligibilities": [
      {
        "layer": 16792,
        "count": 1
      },
...
    ]
  }
}
{
  "timestamp": "2023-09-08T12:00:00.349079938Z",
  "help": "Published proposal. Rewards will be received, once proposal is included into the block.",
  "proposal": {
    "layer": 16176,
    "proposal": "..."
  }
}

```

- Retrieve account data including current balance, counter value, and rewards:

```bash
> grpcurl -plaintext -d "{ \"filter\": { \"account_id\": { \"address\": \"<address>\" }, \"account_data_flags\": 6 } }" 127.0.0.1:9092 spacemesh.v1.GlobalStateService.AccountDataQuery
{
  "totalResults": 16,
  "accountItem": [
    {
      "reward": {
        "layer": {
          "number": 8186
        },
        "total": {
          "value": "10802055452"
        },
        "layerReward": {
          "value": "10802053003"
        },
        "coinbase": {
          "address": "<address>"
        }
      }
    },
...
    {
      "accountWrapper": {
        "accountId": {
          "address": "<address>"
        },
        "stateCurrent": {
          "counter": "1",
          "balance": {
            "value": "190459923001"
          }
        },
        "stateProjected": {
          "counter": "1",
          "balance": {
            "value": "190459923001"
          }
        }
      }
    }
  ]
}

```

The Spacemesh node gRPC API lives in the [api repository](https://github.com/spacemeshos/api/); see the [service definitions](https://github.com/spacemeshos/api/tree/master/spacemesh/v1). The implementation lives in the [`api` directory](https://github.com/spacemeshos/go-spacemesh/tree/develop/api/grpcserver) of the go-spacemesh repository.

## Updates

The Spacemesh team regularly releases updates to GUI and CLI node software. Smapp has a feature that monitors new releases and notifies the user when a new release is available, with a one-click update mechanism (Linux users who installed Smapp using the .deb file will need to manually check for and install updates due to [this issue](https://github.com/spacemeshos/smapp/issues/1299)). Note that, at present, go-spacemesh updates are bundled into Smapp updates, though this may change in the future; and go-spacemesh and Smapp use independent version numbering (e.g., Smapp [v1.0.18](https://github.com/spacemeshos/smapp/releases/tag/v1.0.18) bundles go-spacemesh v1.0.19).

No such notify or update mechanism is built into `go-spacemesh`, so CLI node operators will need to manually keep their software up to date. Node updates vary in severity and, while it's generally safe to be one or two patch releases behind, this isn't always the case and some bigger updates may need to be installed right away in order to keep one's node online and mining, and in order not to receive rewards. Releases are announced on several channels including:

- [go-spacemesh releases](https://github.com/spacemeshos/go-spacemesh/releases) on GitHub
- the [#announcements channel](https://discord.com/channels/623195163510046732/691258865861394432) on the Spacemesh Discord
- the official [Spacemesh Twitter](https://twitter.com/teamspacemesh)

You are strongly encouraged to watch one or more of these channels closely and/or [subscribe to GitHub release notifications](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository) so that your node is up to date.

# PoST Initialization

The hardest and most important part of becoming a smesher is the PoST initialization (sometimes referred to as "plotting"). This process requires a GPU and is designed to be costly and time-consuming due to the cryptoeconomic design of the protocol. As described above, unlike in proof of stake networks, there's no "slashing" (burning a portion of stake) in the Spacemesh protocol. Instead, the sanction for engaging in malicious behavior such as equivocation is invalidation of a smesher ID, which invalidates all of the PoST data associated with that ID. In order for this sanction to be costly, performing PoST initialization and generating PoST data must also be costly.

Note that initialization can theoretically be performed using a CPU (as opposed to a GPU), but it will take so long that this option isn't viable for the vast majority of miners.

## OpenCL

PoST initialization requires support for [OpenCL](https://en.wikipedia.org/wiki/OpenCL). Installation instructions will vary depending upon your operating system, platform, and GPU hardware. A good starting place for Linux users is [this wiki page](https://wiki.archlinux.org/title/GPGPU). On Ubuntu and other Debian-compatible systems it may be enough to install these packages:

```bash
> sudo apt-get update
> sudo apt-get install ocl-icd-libopencl1 opencl-headers clinfo
```

To test if OpenCL is installed and configured correctly on your system, try running `clinfo`. You should see output similar to the following:

```bash
> clinfo -l
Platform #0: NVIDIA CUDA
 `-- Device #0: NVIDIA GeForce RTX 2060 SUPER
```

**macOS Overview**

For macOS users, OpenCL is bundled with the system, and the framework is available out of the box on macOS version 10.6 (Snow Leopard) and later. Therefore, explicit installation of OpenCL is generally not required. However, to ensure compatibility and optimal performance with your specific hardware and software setup, you might need to update your macOS.

**Steps**

* Update macOS: Keep your macOS up to date to ensure you have the latest OpenCL framework versions and GPU drivers. You can check for updates in the “Software Update” section of System Preferences.
* Use clinfo: To verify the OpenCL configuration, you can install `clinfo` using the command `brew install clinfo`. Then, run `clinfo` in the terminal to check the available OpenCL platforms and devices.

**Windows Installation Overview**

Installing OpenCL on Windows requires manual GPU drivers updates, as the operating system does not include these drivers by default. The process is similar across different GPU manufacturers but requires visiting the specific manufacturer’s website to download the appropriate drivers.

**Steps**

* Download Drivers: Navigate to your GPU manufacturer’s website (NVIDIA, AMD, or Intel).
* Select your GPU model and download the latest drivers that include the OpenCL runtime support.
* Install the Drivers: Execute the downloaded installer and follow the on-screen instructions to complete the installation. Make sure any options related to OpenCL support are selected if given a choice.
* Verification
* After installation, use the `clinfo` command on Windows to check for OpenCL support. This utility will list all OpenCL-compatible devices on your system and provide detailed information, confirming a successful installation.

**Troubleshooting**

Issues with OpenCL can often be resolved by ensuring your GPU drivers are fully up to date. Check your hardware’s compatibility with the version of OpenCL you’re using and look for any software that might conflict with your drivers. For specific problems, the support documentation and forums for NVIDIA, AMD, or Intel may offer solutions.

## Initialization Speed

The amount of time it takes to complete PoST initialization depends upon a number of factors including GPU model, hard drive write speed, and the number of storage units being initialized. As a rule of thumb, Nvidia RTX 3090 cards can initialize around 3-4 MB/s and 4090 cards can initialize around 6-7 MB/s. Community [crowdsourced benchmarks](https://docs.google.com/spreadsheets/d/1X_E7H9EFdLoEZ8IHwm1ApcnlZ6VtBCWwSMOJIw2rytI/edit#gid=822058896) are available for a wide range of cards. Note that hard drive write speeds tend to be much faster than GPU throughput, so this shouldn't limit the initialization speed unless the drive is exceptionally slow or exceptionally busy.

## Choice of Filesystem

In general Spacemesh is agnostic to the choice of filesystem. You can successfully initialize and run an identity and manage the underlying PoST data on any Linux, Windows, or macOS-compatible filesystem. However, you should keep two things in mind when choosing a filesystem.

1. If there's any chance you'll want to move the identity from one operating system to another, we strongly recommend using the [exFAT](https://en.wikipedia.org/wiki/ExFAT) filesystem. This is the only filesystem that works out of the box across all the major operating systems. Keep in mind that _copying_ an entire identity from one filesystem to another could take a very long time, whereas with an exFAT filesystem you can just "plug and chug" on any computer. You should be able to initialize and format a new exFAT filesystem easily in any operating system.

1. Different filesystems utilize space differently and require different amounts of overhead. As such, the number of storage units you'll be able to fit on a given disk will depend to some extent upon the filesystem used to format the disk. In my personal experience I've found that exFAT is more efficient than EXT4, and may allow one extra storage unit to be placed on the same physical disk.

We also recommend that you _not encrypt_ the drive or partition used to store the PoST data. You should of course protect the `key.bin` file (which contains a miner's private key) and not allow it to fall into anyone else's hands, but full drive encryption feels like overkill and could slow down [proof generation](#proof-generation).

## Number of Units

Determining exactly how many storage units fit on a drive is actually somewhat non-trivial if you want to maximize the amount of PoST data you can fit on a drive, maximize the identity size, and maximize the rewards. For one thing, PoST identity file sizes are [base-2](#units) (e.g., 64GiB) whereas the size of most hard drives is base-10 (e.g., 1TB). Moreover, as described in the previous section, different filesystems use space differently and require different amounts of overhead.

Linux users may find a command such as the following helpful in displaying the available space on a drive:

```bash
> df -B GiB /dev/sda
Filesystem     1GiB-blocks    Used Available Use% Mounted on
/dev/sda           3667GiB 3649GiB     19GiB 100% /mnt/smesher-01
```

As you can see, this 4TB drive, which should contain 3725.29 GiB, in fact only contains a usable 3667 GiB. After initializing 57 storage units of 64 GiB each, it contains around 19 GiB free usable space.

Linux users may also find the [`tune2fs`](https://linux.die.net/man/8/tune2fs) command useful, both for displaying more detailed filesystem information and for reducing the amount of [reserved space](https://unix.stackexchange.com/questions/7950/reserved-space-for-root-on-a-filesystem-why) on a drive. Assuming a drive is exclusively being used to store PoST data, the reserved space may safely be set to zero. For example, for the above drive `/dev/sda`:

```bash
> sudo tune2fs -m 0 /dev/sda
```

**Wanted:** Please fill in information on how to do the same on macOS and Windows.

## Starting Initialization

As with most other aspects of Spacemesh, the easiest way to begin and monitor initialization is using the Smapp application. When you first open it, Smapp will walk you through the process of choosing a location for your PoST data, choosing your GPU, and beginning initialization. It'll show you the progress as initialization proceeds. See [Smapp Tutorial #4: Proof of Space & Smeshing Setup](https://youtu.be/xwsg7FzuBE0?si=UnTu4wF-db_O2jXE) for more information on this process.

If you prefer to perform PoST initialization using the command line, you have two options. If you simply run `go-spacemesh` directly with the `smeshing` configuration parameters specified above, it'll perform initialization for you using the fastest GPU. You can also manually perform initialization using the [`postcli` tool](https://github.com/spacemeshos/post/tree/develop/cmd/postcli), which allows you to have even greater control of the initialization process, such as running in parallel across multiple systems or multiple GPUs (more information on this below).

### Choosing a Provider

As mentioned, `go-spacemesh` will automatically choose the fastest GPU to perform initialization based on a benchmark. You can change the selected GPU with the `smeshing-opts-provider` config item. To see the list of detected GPUs and their corresponding indices, run [`postcli`](https://github.com/spacemeshos/post/tree/develop/cmd/postcli) as follows. You should see something like the following:

```bash
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

The first two (with IDs 0 and 1) are the GPUs; the last (with ID 4294967295) is the CPU. To select the second GPU with ID 1, use the following config:

```
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

# PoET

As described above in [Proof of Elapsed Time](#proof-of-elapsed-time), the Spacemesh protocol depends for security not only upon committed _disk space_ but also _elapsed time_ (the time dimension in proofs of spacetime). For the time component, miners rely on a third-party service called a PoET ("proof of elapsed time") server.

Note: Anyone can run their own PoET server, but this is non-trivial, expensive, and requires specialized hardware and devops. More importantly, a single PoET server can serve proofs to thousands of miners. Since the PoET server performs intensive, expensive computation on behalf of the miners it serves, and since a miner only needs a single PoET proof for a given epoch, it's more efficient and less energy intensive to run a small number of PoET servers rather than having each miner run their own.

In general miners don't need to think very much about PoET servers. The node (whether running Smapp or `go-spacemesh` directly) manages the process of discovering PoET servers, registering with them, and retrieving proofs when they're ready. The node is also intelligent enough to register with many PoET servers redundantly so that if one server goes offline, it'll still be able to retrieve a proof from another PoET server.

## Ticks and Weight

Miners establish eligibility to submit proposals and thus earn rewards by bundling their proofs of spacetime into a data structure known as an ATX. As also [described above](#atxs-and-weight), each ATX has a certain **weight** which is simply calculated as the number of storage units proven multiplied by the tick count from the PoET proof (as a proxy for time). Rewards earned by a miner in a given epoch are ultimately proportional to the weight of their ATX targeting that epoch. Thus, if a miner uses a PoET proof with fewer ticks, it'll earn proportionally fewer rewards for at least the duration of one epoch; the reverse is also true.

Note that, in addition to retrieving proofs from multiple PoET servers, the node is also intelligent enough to use the proof with the highest tick count to ensure that it maximizes its rewards.

## Timing

The Spacemesh team currently operates several production PoET servers for public use. (Their addresses are hardcoded into the `poet-server` section of the [mainnet config file](#config)):

These PoET servers all operate on exactly the same schedule. In order to establish eligibility for epoch N, a miner must register with a PoET round in epoch N-2, then retrieve the PoET proof, use it to generate a PoST proof, bundle this into an ATX, and submit it to the network prior to the end of epoch N-1. The Spacemesh PoET servers start a new round at 8:00 UTC the second Monday of an epoch, i.e., four days prior to the end of the epoch. This round concludes 13.5 days later, at 20:00 UTC on Sunday. There's subsequently a 12 hour "cycle gap" during which no PoET round is running, after which the next PoET round kicks off and the cycle repeats itself. During this 12 hour window, all mining nodes must retrieve their PoET proof from a PoET server, use it to generate a PoST proof, bundle this into an ATX, broadcast the ATX to the network, and then register with the PoET again in order to maintain continuous eligibility.

This schedule is admittedly confusing; you may find [this unofficial calendar](https://calendar.google.com/calendar/u/0/embed?src=8895d862c4a9ac22c8da2dafd9c618cd47e5c2d22905f920b1231a3b02aacd62@group.calendar.google.com) and the header graphic in [this blog post](https://spacemesh.io/blog/genesis-timeline/) helpful in visualizing it. To reiterate, in most cases miners don't need to concern themselves with the PoET schedule since their node will handle everything for them. The most important thing is that the node remain running and online throughout the epoch so that PoET windows aren't missed and continuous eligibility is maintained.

Note that in future it's likely that, rather than all PoET servers running in identical phase, there will be PoET servers running in different phases, possibly also with different cycle gap lengths, to accommodate miners that need more time to generate a PoST proof or that simply miss a PoET registration window.

## Running a PoET Server

As with the rest of Spacemesh infrastructure, the PoET server is [open source](https://github.com/spacemeshos/poet) and permissionless. Anyone may run their own PoET server for personal or community use.

For more information see the [PoET Operator Manual](https://github.com/spacemeshos/poet/blob/develop/docs/poet_operator_manual.md) and feel free to ask questions on the [#poet channel](https://discord.com/channels/623195163510046732/1151165793590050867) on Discord.

## Updating the configuration of a node to use different PoETs

Spacemesh users are free to use any PoET they want to. You can add PoETs to the existing list of your nodes configuration or even completely replace it with another set of PoETs.

Adding a PoET with the same phase as the node is currently using simple; stop the node, update the configuration by adding the new PoET to the list of existing PoETs (and remove any you wish not to use), then start the node again. When the next PoET round starts the node will start using the new set PoET as given by its configuration.

### Switching phase

If you wish to switch to one or multiple PoETs that operate on a different phase then the default set of PoETs ensure
that your node and the PoET(s) you are using have the following configuration parameters set to the same values:

- `"phase-shift"`: gives the time that a new PoET round starts relative to the beginning of an epoch. For the default
  set of PoETs this value is 240 hours. Lower values mean that nodes starting to use your PoET have to wait longer before
  they become eligible to collect rewards, higher values mean that nodes have less time after fetching a PoET proof to
  publish their ATX to be eligible to collect rewards.
- `"cycle-gap"`: gives the time between the end of a PoET round and the start of a new one. Larger values give nodes
  more time to generate a PoST proof - since this has to happen within the cycle gap to not miss an epoch. Smaller values
  gives the PoET more time to generate its proof and collect more ticks. For the default set of PoETs this value is
  12 hours.

Additionally you should ensure that a custom PoET has the same `"genesis-time"` and `"epoch-duration"` as mainnet
(`"2023-07-14T08:00:00Z"` and 336 hours respectively).

For a step by step instruction see [Timing a phase switch](#timing-a-phase-switch).

### Timing a phase switch

Switching phase bears the risk of missing a PoET round and thereby forfeiting your eligibility to collect rewards in an
upcoming epoch. To mitigate this risk you should time your phase switch and follow these steps:

1. Wait until the end of the PoET round of the phase you are currently using.
   If you are using the default PoETs this would be every second Sunday (e.g. Feb 5th, 2024) at 20:00 UTC.
2. Your node will fetch the PoET proof(s) for all PoETs it successfully registered for.
3. Wait until your node has finished generating a PoST proof and published an ATX (check logs for `ATX published`).
4. Stop the node.
5. Update your node configuration by replacing the PoET(s) in your `config.json` with the new one(s).
   Make sure that all PoETs you are using have the same phase and cycle gap and that you also update the
   `"phase-shift"` and `"cycle-gap"` settings in your config accordingly.
6. If you do not have sqlite installed on your system, install it now.
   On Windows you can download it from [here](https://www.sqlite.org/download.html), you will need `sqlite-tools-win-x64`.
   On Ubuntu you can install it with `sudo apt install sqlite3`.
   On macOS you can install it via Homebrew with `brew install sqlite3`.
7. Delete the contents of the tables `poet_registration` and `nipost`:

    ```bash
    > sqlite3 <node_config_directory>/node_state.sql
    sqlite> delete from poet_registration;
    sqlite> delete from nipost;
    sqlite> .quit
    ```

8. Start the node again.

If the new phase has not started yet your node will register at the new PoET(s) immediately and fetch a PoET proof in
time to be eligible to collect rewards in the next epoch. If by the time you restarted your node the new phase has already
started your node will register at the new PoET(s) in the next epoch and you will miss one epoch of rewards (the second
next epoch).

***Note***: Before v1.3.x PoET registration state was stored in a file called `nipost_challenge.bin` and `nipost_builder_state.bin`
in the node's PoST data directory. If you are using a node version older than v1.3.x you will have to delete these files
instead of the sqlite tables (steps 6 and 7).

# Proof Generation

Once an epoch, after the node has received a PoET proof and during the PoET cycle gap, the node will generate a [proof of spacetime](#proofs-of-spacetime), which requires that it sequentially read all of the PoST data. The details aren't something most miners need to worry about as the node will handle the process for you; see [Fine-tuning Proving](#fine-tuning-proving) for information on benchmarks and parameters that can be tweaked.

The first part of the proving process is an initial proof of work phase called **k2pow** that uses a proof of work algorithm called [RandomX](https://github.com/tevador/RandomX). During this phase, which is CPU bound, you should see CPU usage spike briefly for a few minutes. There should be very little network or disk activity during this phase. As explained in the [Profiler docs](https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md#is-that-all-that-is-happening-during-the-proof-generation), it should take a low-end CPU around 2.5 minutes to compute k2pow for 4 SU; computation time scales linearly with the hash rate and number of storage units being proven. See the [RandomX Benchmark](https://xmrig.com/benchmark) to get a sense of your CPU's RandomX hash rate.

Once the k2pow phase is complete, the node begins the PoST proving process, which takes longer as it involves reading and computing a hash function over all the committed PoST data. How long depends on factors including the disk read speed, CPU speed, and configured [nonces and threads](#fine-tuning-proving). This process may be CPU bound or IO bound, depending on the configuration. (It also doesn't touch the network.)

Another way to tell that the PoST proving process is underway or complete is to look for files called `post.bin`, `nipost_challenge.bin` and `nipost_builder_state.bin` in the PoST data directory. **TODO:** add more information on these files and their roles, and the point during the process where they're created.

# Rewards

In Spacemesh, miners earn rewards for successfully proving eligibility and submitting valid block proposals to the network in their designated eligibility slots. Note that, at present, the only behavior that's rewarded is submission of block proposals, but in the future we intend to additionally incentivize other useful behavior such as participating in Hare consensus.

As with many other blockchain networks, rewards consist of two components: block subsidy, i.e., coins newly minted by the protocol; and transaction fees. While we expect transaction fees to increase and form a larger percentage of rewards over time, at this early stage in the network lifecycle the vast majority of rewards (more than 99.99%) derive from block subsidies. As such the remainder of this analysis will ignore transaction fees for the purpose of estimating rewards.

## Estimated Rewards

Three factors are necessary to calculate a miner's estimated rewards: the miner's **weight** in a given epoch, the **total network weight** in the epoch, and the **per-layer subsidy.**

As described above, a miner's weight in a given epoch (as encoded in the ATX they submitted to establish eligibility for the epoch) is simply the number of storage units proven times the number of PoET ticks. For instance, a miner with 4 SU (the minimum) and a PoET proof with 100k ticks would have a weight of 400k.

The total network weight is (as the name suggests) the weight of _all_ eligible miners in the same epoch. A miner's **relative weight** is the weight of their ATX in a given epoch divided by the total network weight in that epoch. There isn't currently an easy way to retrieve total network weight but, given that at present nearly all miners are using the same PoET proof or a PoET proof with a similar number of ticks, it can be estimated by dividing the miner's total committed storage by the total network storage (as displayed on the [Network Dashboard](https://dash.spacemesh.io/)). For instance, a miner with 1TiB of storage of a network that's 18PiB has 1/18000 = 5.6e-5 of the total network space.

The final piece of the puzzle is the per-layer reward. This decays gradually from layer to layer. The simplest way to see the current value is to check [LAYERS](https://explorer.spacemesh.io/layers) in the Explorer. As of [layer 17980](https://explorer.spacemesh.io/layers/17980), 476.614 SMH are being minted as a subsidy each layer. Multiply this by the number of layers per epoch, 4032, to get the approximate total new issuance per epoch: for epoch 4 this is roughly 4032 * 476.614 = 1,921,707 SMH.

Finally, to calculate a miner's estimated rewards for a given epoch simply multiply its relative weight by the total epoch issuance. A miner with 5.6e-5 of the total weight would be expected to earn around 5.6e-5*1921707 = 107 SMH in this epoch.

Note: It is possible to read more precise values from a node's state database (see below). This sample SQL query will give you the total weight for an epoch:

```sql
SELECT SUM(effective_num_units)*SUM(tick_count) FROM atxs WHERE epoch=2;
3091782534750
```

And this query will give an individual miner's relative weight:

```sql
SELECT 1.0*atxs.effective_num_units*atxs.tick_count/total_weight.weight
  FROM atxs,
       (SELECT SUM(effective_num_units*tick_count) weight FROM atxs WHERE epoch=2) AS total_weight
  WHERE hex(atxs.id) = "1281641D519CCC57F38C38294BB873A60367DB71AD0FA8DFBD146A55FD60626C" AND atxs.epoch=2;
0.000519591429387197
```

Some miners may find community-run tools like [Spacemesh Calculator](https://www.spacemeshcalculator.com/) helpful in doing this math, but we cannot vouch for their correctness.

## Eligibility Slots

Every eligible miner has one or more slots per epoch where they're eligible to produce a proposal (and thus earn a reward). Every miner with at least the minimum storage (4 storage units) is guaranteed at least one slot per epoch. There are 50 slots per layer (i.e., on average 50 proposals per layer) or 201,600 slots per epoch. The slots are assigned randomly and unpredictably at the start of the epoch so that even the miner itself doesn't know its own eligibility slots before the epoch starts. You can calculate the estimated number of slots for a given miner using similar math to the above: multiply the miner's relative epoch weight by 201,600 with floor=1.

There are several ways to see a miner's actual eligibility slots for a given epoch. The node prints its eligibilities in the log at the beginning of an epoch, e.g.:

```
2023-08-11T13:45:00.622-0400    INFO    abcde.proposalBuilder   proposal eligibility for an epoch       {"node_id": "abcde", "module": "proposalBuilder", "epoch_id": 2, "beacon": "e3e3389e", "weight": 141435, "min activeset weight": 5000000, "total weight": 305096691, "total num slots": 93, "num layers eligible": 93, "layers to num proposals": [{"layer": 8091, "slots": 1}, {"layer": 8179, "slots": 1}, {"layer": 8212, "slots": 1}, {"layer": 8215, "slots": 1}, {"layer": 8248, "slots": 1}, {"layer": 8306, "slots": 1}, {"layer": 8382, "slots": 1}, {"layer": 8389, "slots": 1}, {"layer": 8411, "slots": 1}, {"layer": 8432, "slots": 1}, {"layer": 8454, "slots": 1}...], "name": "proposalBuilder"}
```

The `EventsStream` API stream prints the same information:

```bash
> grpcurl -d "{}" -plaintext localhost:9093 spacemesh.v1.AdminService.EventsStream
...
{
  "timestamp": "2023-09-13T19:35:00.658169226Z",
  "help": "Computed eligibilities for the epoch. Rewards will be received after publishing proposals at specified layers. Total amount of rewards in SMH will be based on other participants in the layer.",
  "eligibilities": {
    "epoch": 4,
    "beacon": "nhiDhQ==",
    "atx": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "activeSetSize": 16582,
    "eligibilities": [
      {
        "layer": 19048,
        "count": 1
      },
      {
        "layer": 19460,
        "count": 1
      },
      {
        "layer": 18839,
        "count": 1
      },
```

In Smapp the same thing looks like this:

![image](https://github.com/spacemeshos/wiki/assets/3316532/be77ccd8-ab5f-4763-8a98-8c37f606241e)

In order to successfully earn a reward for a given eligibility slot, a miner has to be running up to date software, has to be online and fully synced, and has to successfully generate and broadcast a proposal during the slot. The actual, final reward that's earned in a given slot depends upon the behavior of other eligible miners in the same slot. If an eligible miner fails to submit a proposal, that miner's portion of the reward is distributed to the eligible miners that successfully publish proposals.

## Earned Rewards

Smapp displays actual earned rewards on the SMESHING screen:

![image](https://github.com/spacemeshos/wiki/assets/3316532/fb1ce5fa-fac5-4f36-9ef8-e22988487ce4)

They're also available [in the explorer](https://explorer.spacemesh.io/accounts/sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g/rewards). Finally, actual rewards for a given coinbase address can also be read from the command line using the API:

```bash
> grpcurl -plaintext -d "{ \"filter\": { \"account_id\": { \"address\": \"sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g\" }, \"account_data_flags\": 2 } }" 127.0.0.1:9092 spacemesh.v1.GlobalStateService.AccountDataQuery
{
  "totalResults": 128,
  "accountItem": [
    {
      "reward": {
        "layer": {
          "number": 8203
        },
        "total": {
          "value": "17127640416"
        },
        "layerReward": {
          "value": "17127640416"
        },
        "coinbase": {
          "address": "sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g"
        }
      }
    },
    {
      "reward": {
        "layer": {
          "number": 8219
        },
        "total": {
          "value": "14085313144"
        },
        "layerReward": {
          "value": "14085307220"
        },
        "coinbase": {
          "address": "sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g"
        }
      }
    },
...
```

You may also find this community-run [SpaceMesh Lamba Chunks](http://fcmx.net/sm-eligibilities/) visual reward tracker useful. You copy your eligibility info from your logfile (grep for "proposal eligibility for an epoch" in your log) and paste it into a Node to see a visual representation of all past eligibilities and rewards, and upcoming eligibility slots. It should look something like this:

![image](https://github.com/spacemeshos/wiki/assets/3316532/3dd5d040-f65c-46ba-9b8a-d35756f10244)

## Missed Rewards

If your node is offline or not fully synced when an eligible slot arrives, it may fail to produce a proposal and thus miss a reward for the slot. If a proposal is produced or gossiped too late, or not received by enough other nodes in time, it may also not be included in the canonical block and thus the slot reward may be missed. Note that this has no bearing whatsoever upon future eligibilities, and note also that the protocol does not allow a miner to subsequently "earn back" lost rewards. In this scenario, the coins that the miner would've received will instead be allocated proportionally (i.e., by weight) to the other eligible miners that successfully produced proposals in the same slot. By far the most common cause of missed rewards is node updates. We strongly encourage you to closely track your node eligibilities and not restart or upgrade within 2-3 layers before an upcoming eligibility (so that the node has a chance to fully initialize and sync in time).

There are also rare scenarios when no proposals are produced at all for a given layer, e.g., when the [Hare](#hare) fails due to a network issue such as many miners temporarily being offline. In these scenarios, which are usually short-lived, no proposals are produced at all, a layer will have no block and no transactions, and no rewards will be issued. In this case, the coins that would've been issued as part of the layer subsidy simply fail to get minted, i.e., they will never exist, will never enter circulation, and for all intents and purposes may be considered burnt.

## Reward Lifecycle

The end to end reward lifecycle works as follows:

1. Mining node performs [PoST initialization](#post-initialization-2)
1. Mining node generates its initial [proof of spacetime](#proof-generation)
1. Mining node registers with the [PoET](#poet)
1. Mining node receives proof from PoET server and uses it to generate another proof of spacetime (proving that it still has the data)
1. Mining node bundles this proof into an ATX and submits it to the network to establish eligibility in the following epoch
1. The new epoch begins. The mining node calculates its eligibilities for the new epoch (based on active set and random beacon).
1. Mining node participates in gossip normally and follows the network, remaining in sync, periodically joining a Hare committee, etc.
1. When an eligibility slot (layer) arrives, the miner generates a block proposal based on its view of the network (which valid transactions it's collected into its mempool, signs it, and broadcasts it to the rest of the network
1. A few seconds later the [Hare protocol](#hare) runs for the layer. A random committee of nodes is picked to come to consensus on the canonical set of valid proposals for the layer (i.e., those received on time and with valid eligibility proofs) and they're collated into a new block. Assuming the mining node's proposal is valid and it was received on time, it should be included in the new block.
1. A few minutes later the new block is confirmed by the [Tortoise](#tortoise) and its contents become a part of the canonical mesh. Rewards are paid to all miners that participated in the construction of the block by submitting valid, on time proposals.

Note that this describes the happy flow. Many things can happen to interfere with this process or slow it down. Proposals may not be gossiped or received on time, in which case a block still be created from the valid proposals that were received on time. If not enough nodes are online to select a Hare committee, Hare may fail, which would temporarily result in empty layers (i.e., layers without blocks), until nodes come back online and a Hare quorum can be re-established.

See also [Rewards](#rewards), above.

# Advanced Topics

## Monitoring

The simplest and most straightforward way to monitor any running node, including a mining node, is using the [gRPC API](#api). You can use the `spacemesh.v1.NodeService.Status` to see the current status (number of connected peers, sync status, layer status), and you can use the `spacemesh.v1.AdminService.EventsStream` to follow events (such as proof creation and broadcast, eligibilities, etc.) (see [API](#api) for example commands).

It's also possible to do more sophisticated monitoring using [Prometheus and Grafana](https://prometheus.io/docs/visualization/grafana/). You can configure your own Prometheus data model, or use the out of the box model that `go-spacemesh` already supports. If you run the node with the `--metrics` flag (or set this in the [config](#config)), and optionally `--metrics-port`, then Prometheus can scrape metrics from the running node.

You can find community-contributed examples of both of these in [this list](https://github.com/lrettig/awesome-spacemesh/blob/main/README.md#monitoring).

## Increasing and Decreasing Storage

Eventually Spacemesh will allow miners to both increase and decrease their committed storage, i.e., their identity size, as well as to combine existing identities. Unfortunately these features have not yet been implemented. You may track progress [here](https://github.com/spacemeshos/pm/issues/253) and [here](https://github.com/spacemeshos/pm/issues/267).

In the meantime it's only possible for a miner to change their committed storage _before_ they've committed to the storage, i.e., before they've [generated a proof](#proof-generation), bundled it into an ATX and submitted it to the network. Changing the identity size is as simple as changing the number of units (`smeshing-opts-numunits` in the [config](#config)); if you decrease this value and then run the node, **it will erase the redundant files beyond the specified number of units**, so be very careful. If you increase this value and then run the node, it will continue to initialize until the specified number of units has been initialized.

If you're not sure whether your node has already submitted an ATX, check your event log for a message such as the following:

```bash
{
  "timestamp": "2023-09-18T01:55:32.528857736Z",
  "help": "Published activation for the current epoch. Node needs to wait till the start of the target epoch in order to be eligible for rewards.",
  "atxPublished": {
    "current": 4,
    "target": 5,
    "id": "abcde",
    "wait": "367467.471143316s"
  }
}
```

You should see the following in the node log:

```
spacemesh-log.txt:2023-09-17T17:44:08.967-0400     INFO    c6322.atxBuilder        atx published   {"node_id": "abcde", "module": "atxBuilder", "sessionId": "3917e715-39c0-4a4d-8b65-1d5c45df4b5f", "event": true, "atx_id": "abcde", "challenge": "abcde", "smesher": "abcde", "prev_atx_id": "abcde", "pos_atx_id": "a1ba824af9", "coinbase": "sm1q...abcde", "epoch": 4, "num_units": 4, "sequence_number": 3, "size": 902, "name": "atxBuilder"}
```

If you suspect that your node has already submitted an ATX to commit to a specific number of units, don't attempt to change the number of storage units as this will result in invalid proofs and zero rewards. If you're certain that your node has not yet submitted an ATX to commit to its storage size, you can freely change the number of units.

## Very Large Identities

In general a miner is free to initialize as much or as little storage as she likes. However, miners with especially large identities may run into problems with [PoST proof generation](#proof-generation) as this requires sequentially reading all of the PoST data and additionally doing proof of work over the data. In the worst case, if the user selects a relatively low number of nonces (see next section), the node may get unlucky and need to perform this sequential read multiple times. All of this needs to fit into the PoET [cycle gap](#timing) (12 hours for mainnet) or else the miner risks being ineligible for an entire epoch and missing all epoch rewards.

Precisely calculating the maximum identity size that a system can support depends upon a number of variables: drive read speed, CPU power, the other applications running on the system, and the configured parameters (see next section). As a rule of thumb, we recommend that miners not use identities larger than about 4 TiB (i.e., 64 storage units). Given the average hard drive read speed, and assuming the miner is running on a reasonably powerful system, a miner with a 4 TiB identity should have ample time to read that identity twice, if necessary, and successfully generate a proof during the cycle gap in the vast majority of cases. It should also be noted that advanced miners have reported achieving significantly higher throughput speeds and, thus, being able to manage much larger identities using, e.g., large NVMe SSD drives and/or [RAID5](https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5) configurations.

For very large identities, it probably makes sense to split the identity into multiple smaller identities (again, 4 TiB is a good starting point, although the exact amount will depend upon the system and the miner's needs). Assuming these identities are stored on physically separate disks, and assuming the miner has a system that's powerful enough to run multiple nodes (i.e., the system resources are a multiple of the [required resources](#requirements) for a single node), she should have no trouble running multiple identities on a single system.

You may find math such as the following helpful: assuming you know the throughput (based on drive read speed and CPU hash throughput), it should take [a little over eight hours](https://www.wolframalpha.com/input?i=4TiB%2F%5B150MB%2Fsec%5D) to create a proof serially for a single 4TiB identity assuming a throughput of 150MB/s (normal for a modern HDD). Note that in this case, if the number of nonces isn't high enough (see next section) and the proof generation fails in the first pass, there won't be enough time to perform a second pass during the 12 hour cycle gap!

Such a miner should pay close attention to the contents of the [Fine-tuning Proving](#fine-tuning-proving) and [Identity Management](#identity-management) sections, as she'll need to generate and manage multiple identities, being sure to keep them separate and distinct and to [avoid equivocation](#avoiding-equivocation), and also to pick the appropriate proving parameters for her setup.

## Fine-tuning Proving

As a refresher, there are two stages to the process of proving storage so that a miner will be eligible for rewards on an ongoing basis: the [PoST initialization](#post-initialization-2), which only needs to be performed once, and the ongoing, regular [proofs of spacetime](#proofs-of-spacetime) that miners need to generate and broadcast each epoch. Generating a proof of spacetime requires that the miner perform a sequential read of all of their PoST data. Since it would be infeasible to transmit _all_ of the PoST data as a proof, in order to make the proofs succinct, Spacemesh instead requires miners to do a small proof of work each epoch by hashing their PoST data and looking for elements (known as **labels**) that pass a certain proof of work threshold. The proof itself consists of just the indices of the labels that pass the threshold.

The user may specify the number of CPU threads and nonces that are used in the proving process. The process itself is probabilistic: with 64 nonces the probability of creating a successful proof in a single pass is 79.39%; with 128 nonces it's 95.75%; and with 288 nonces it's 99.9%. Moreover the number of CPU threads must be set to balance disk read speed. For more information on this process, see [Proof of work and PoST proof generation](https://community.spacemesh.io/t/proof-of-work-and-post-proof-generation/361) in the Spacemesh research forum.

As described in the [Config](#config) section above, these parameters can be passed to `postcli` (as command-line arguments) and `go-spacemesh` (command-line arguments or via the config file). Advanced miners will need to run some benchmarks to determine the best values for their particular system. See the documentation for [the profiler tool](https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md) for more information.

## Identity Management

Each miner in Spacemesh has an identity, known as a miner ID or smesher ID. The ID is simply a 32-byte Ed25519 public key, which is commonly displayed in hexidecimal or base64 format. It should look something like `0x91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40` (hex) or `kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=` (base64).

Note: Miner identities have absolutely nothing to do with accounts or wallet addresses. Both are based on Ed25519 keypairs, but that's all they have in common. A miner also needs to specify a coinbase account to receive its rewards, but that coinbase account is not derived from the miner identity nor connected to it in any way. It can also be changed at any time. The miner identity **is connected** to its PoST data, however. PoST data generated for a given miner ID can never be used by another miner. Moreover, if a miner identity is lost or invalidated for equivocation, the associated PoST data becomes useless.

Tip: You can convert between these two formats using two simple command-line tools:

```bash
> echo "0x91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40" | xxd -r -p | base64
kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=
> echo "kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=" | base64 -d | xxd -p -c 32
91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40
```

The first time the node runs it will create a new miner identity (if it doesn't see an existing one), which it stores in a file called `key.bin` in the PoST data directory. This file contains both the miner public and private keys. The private key is used to sign messages on behalf of the miner. It's critical both that this file be kept private (its contents should never be revealed or sent to anyone) and that it not be lost. If it's lost, just like a lost wallet there's absolutely no way to restore it, and the associated PoST data would become useless.

You can read the public key portion of the key file, i.e., the hexidecimal miner identity, as follows:

```bash
> cut -c 65-128 key.bin
91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40
```

You can also read the identity from a running node via the API:

```
> grpcurl -plaintext localhost:9093 spacemesh.v1.SmesherService.SmesherID
{
  "publicKey": "kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA="
}
```

A miner identity can be transferred from one system to another simply by moving the `key.bin` file. However, it's essential that the same identity never be attached to two running miners at the same time in order to avoid equivocation (see next section).

A new identity can be generated by deleting or moving the `key.bin` file and starting the node again, at which point a new identity will be created. `postcli` can be used to do the same thing.

## Moving PoST files

You can safely move PoST data from one directory to another, or from one system to another, as long as the data remain intact and you're careful to avoid equivocation (see next point). The miner identity used to create the PoST data is bound into the data and, thus, you must move the `key.bin` file along with the rest of the data; the data are useless without the `key.bin` identity file, and any attempt to use the same PoST data with a different miner identity will fail. There's nothing about the data that ties it to a particular system, architecture, or operating system; thus, it's also safe to move the data across systems.

We strongly recommend using a tool like [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories), which has built-in error checking and can resume a partial transfer, to move data both locally and remotely. You can use a command like the following to move data locally:

```bash
> rsync -avhz --progress /source/directory/ /destination/directory
```

You can use a command like the following to copy data from a remote host:

```bash
> rsync -avhz --progress user@hostname:/source/directory/ /destination/directory
```

(Note the use of trailing slashes; rsync is particular about these, and adding or removing a trailing slash can have unintended consequences.)

## Avoiding Equivocation

There's a very small set of behaviors that a miner in Spacemesh is punished for. If a miner simply goes offline or fails to publish a proposal when they're eligible to do so they'll miss some rewards but they're not punished per se. However, if a miner double votes, otherwise known as equivocation, their miner identity is permanently disqualified from participation in consensus and from earning rewards in the future. In a permissionless blockchain like Spacemesh, equivocation is a serious offense that can have severe negative ramifications for the entire network, so this behavior cannot go unsanctioned. Once a miner's identity has been cancelled their PoST data is effectively useless. They must generate a new identity and reinitialize their PoST data. For more information, see [Community Clarification: Equivocation](https://spacemesh.io/blog/community-clarification-equivocation/).

It's not difficult to avoid equivocation: simply make sure that the same identity is never attached to two running nodes at the same time. Extra care must be taken any time a miner identity or its PoST data are copied or moved (since the miner identity lives in the PoST data directory).

### Moving an Identity

When moving a miner identity from one place to another, **perform the following steps in the following order:**

1. **Shut down the miner** in the source location
1. Copy the files to the new location (see previous section)
1. **Double-check that the old miner was shut down.** Check again one more time to make sure. If you get this part wrong, you risk permanently disqualifying the miner identity for equivalence and invalidation of the PoST data.
1. Make sure the `key.bin` file is intact in the new location. Compare it to the `key.bin` file in the old location and make sure the contents are the same. Delete the old `key.bin` file, or at the very least, rename it or move it to ensure that you don't accidentally run the same identity again on the old system.
1. Start the miner in the new location. Make sure that you specify the correct `smeshing-opts-datadir` in the config, and make sure that the other `smeshing-opts` are the same as they were in the old system, and that they match the contents of the `postdata_metadata.json` file in the PoST datadir. Make sure that the miner found the data and was able to read it. (You should see the messages `post setup completed`, `loaded the initial post from disk`, and `verifying the initial post` in the log.)

### Generating Multiple Identities

You can use one system to generate multiple PoST identities - this is a common usage pattern for a user who wants to, e.g., generate multiple identities on a system with a GPU, then transfer them to other systems. However, once you've moved the PoST data files (`postdata_*.bin`) to their new location, and copied `key.bin` as well, **make absolutely certain that `key.bin` has been removed** in the source location. If the file still exists, the next PoST identity you generate will be identical to the prior one and equivocation may occur as a result.

## Log Management

Smapp automatically manages logs for a running node: it compresses and rotates logfiles when they grow large. The node log appears in the Smapp data directory:

- `~/Library/Application Support/Spacemesh` on macOS
- `~/.config/Spacemesh` on Linux
- `~\AppData\Roaming\Spacemesh` on Windows

If you're running `go-spacemesh` directly, you're responsible for log management. As described above, we strongly recommend running the node as a [system service](#system-service) on your operating system. Different operating systems and different service managers have different ways of managing logs; you can read about [how Systemd manages journals on Linux](https://www.loggly.com/ultimate-guide/linux-logging-with-systemd/), for example.

You may find a command such as the following helpful to both display the running node logs and also save them to a file:

```bash
> go-spacemesh -c config-file.json |& tee logfile.txt
```

One more note about logs: by default, the log level is set to `INFO` for all node services, in order to keep logfiles manageable. Setting the log level to `DEBUG` for one or more services can be helpful for troubleshooting. You can accomplish this by adding a `logging` section to your config file, as such:

```
  "logging": {
    "atxBuilder": "debug",
    "block-builder": "debug",
    "block-listener": "debug",
    "nipostBuilder": "debug",
    "poet": "debug",
    "post": "debug",
    "p2p": "error",
    ...
  },
```

For the full list of services, see [`config/logging.go`](https://github.com/spacemeshos/go-spacemesh/blob/develop/config/logging.go).

## State Database

The node stores all of the network state in a [SQLite](https://www.sqlite.org/index.html) database called `state.sql` (along with a couple of auxiliary files) in the node's data directory:

```bash
> ls -1 data/7c8cef2b/state.*
data/7c8cef2b/state.sql
data/7c8cef2b/state.sql-shm
data/7c8cef2b/state.sql-wal
```

It's possible to explore the contents of this database to understand a node's view of the network, especially when the desired data isn't available via the API. First, two important notes about working with the state database:

**Note 1: Unlike the API, we make no guarantees that the state database schema will remain the same.** It will likely evolve over time. Thus, while it's perfectly okay to explore the state database for troubleshooting, we strongly recommend against building or deploying any production applications that rely on it.

**Note 2: Never, under any circumstances, modify the state of a running node.** Making even a small change runs the risk of totally corrupting the state database, which in the worst case would require that a node be resynced from scratch, a process that can take a long time (and during which time a miner node isn't eligible for rewards). As such, before even opening the state database, **make a copy of the file** and work with the copy only to make sure you don't accidentally modify the live database.

### Reading the State Database

There are multiple ways to read data from a SQLite database. We recommend either using the official [`sqlite3`](https://sqlite.org/cli.html) program, or else the cross-platform, open source UI alternative [DB Browser](https://sqlitebrowser.org/). If you open the state database in the DB Browser you should see something like the following:

![image](https://github.com/spacemeshos/wiki/assets/3316532/ad3eb4f3-af7b-49eb-8842-f46fe707f545)

The full extent of queries you can run against this database is beyond the scope of this document, but as a simple example, here's how you'd look up the coinbase associated with a given smesher, and thus find that smesher's rewards using the coinbase:

```sql
SELECT DISTINCT HEX(coinbase) FROM atxs WHERE HEX(id)="F353545DB955F5A359F406ACAB847408D40530A6782BE436553FE521033A42EC";
000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7
SELECT layer, total_reward FROM rewards WHERE HEX(coinbase)="000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7";
8090 | 266137048118
```

### Backing up State

It can be helpful to create snapshots or backup versions of a node's state so that data may be restored more quickly in case of corruption or failure (rather than needing to resync from scratch, which is time consuming). This process is very straightforward: just create a copy of the files shown above, i.e., the `state.*` files inside the node's data directory.

Due to SQLite's [atomic commit](https://www.sqlite.org/atomiccommit.html) feature it shouldn't be necessary to stop the node before taking a snapshot, but if you want to be extra careful you may do so.

Also note that [certain filesystems](https://serverfault.com/questions/307296/which-filesystems-offer-snapshot-functionality-for-users-to-recover-data) make snapshotting easier or even automatic.

### Clearing State

From time to time, such as if the state database becomes corrupt or if you simply want to resync your node from genesis, it becomes necessary to clear the state entirely. In order to do this, you should:

1. Stop the node. Ensure that it's exited cleanly and completely.
1. Remove the files shown above, i.e., the `state.*` files inside the node's data directory. Note: don't remove the other contents of the data directory as it also contains, e.g., P2P data.
1. Restart the node. You should see it begin to sync from genesis.

### Copying State

There's no "private" data, i.e., data that's specific to one miner or one node, in the state database. This means that you can copy one trusted node's database to another node as a quick-and-dirty "quick sync" option, rather than letting the nodes sync the old fashioned way. To do this:

1. Make sure both nodes are running the same version of go-spacemesh.
1. Stop **both nodes.** Ensure that they've exited cleanly and completely.
1. Remove the state files entirely from node B, i.e., the destination node, by following the instructions above.
1. Copy the same files, i.e., the `state.*` files inside the data directory of node A (i.e., the source node) to the data directory of node B. It's safe to do this from one system to another even if the two systems are on different architectures or different operating systems.
1. Restart both nodes.

Note: by directly copying the state database you bypass the protections in the protocol and the node that would prevent your node from accepting bad state or bad transactions. For this reason it's essential that you **only copy the state from a trusted node,** i.e., a node that you run yourself, and that you **never blindly accept state data from a third party.** Otherwise, you may end up with corrupt or incorrect state.

## Cloud GPU

Miners without local access to a GPU may choose to instead perform GPU initialization remotely using one or multiple (see next section) GPUs. This can be done using the infrastructure of any cloud compute provider that offers a modern GPU platform. Note that cloud providers that specialize in GPUs and other types of high-performance computing will often offer better prices and tooling than general-purpose cloud compute platforms like Azure, AWS, or GCP. While we cannot vouch for any particular provider and have no affiliation with any such provider, in our testing we've had particular luck with [Runpod](https://www.runpod.io/) and have also heard good things about [Coreweave](https://www.coreweave.com/) and [Vast](https://vast.ai/).

As a rule of thumb, you'll want access to an instance that:

- has a modern GPU (e.g., RTX 3090 or 4090; see [Requirements: PoST Initialization](#post-initialization-1))
- has plenty of storage, around 10% more than you plan to initialize (e.g., if you plan to initialize 1 TiB of PoST storage, we recommend choosing an instance with at least 1.1 TiB)
- has a very fast Internet connection with plenty of bandwidth
- doesn't charge a lot for data egress

Most GPU providers simply run a docker container for you. You may find [this barebones image](https://hub.docker.com/r/lrettig/nvidia-opencl) useful; you can use it as `docker.io/lrettig/nvidia-opencl:latest` in a cloud host, and you can find the [Dockerfile here](https://github.com/lrettig/spacemesh-nvidia-opencl/blob/main/Dockerfile). It simply installs the packages required for OpenCL on Ubuntu and then downloads [`postcli`](https://github.com/spacemeshos/post/releases). Here is [an alternative](https://github.com/smeshcloud/nvidia-cuda-opencl/blob/main/Dockerfile).

Bear in mind that generating the PoST files is only half the battle; you also need to download them! Some providers charge a lot for data egress, which can get expensive quickly when downloading many terabytes of data. And, in order to move the data in a reasonable amount of time, you'll want to find a cloud instance with plenty of bandwidth, ideally more than 1gbit/sec. Any slower than this and you'll wait forever to download the files. Be wary of "community" run nodes on cloud marketplaces such as Runpod and Vast since while they may be cheaper these often don't have the requisite bandwidth.

As [described above](#moving-post-files), we recommend using a utility with features such as error checking and resume like rsync to download files. rsync works well as long as you have `ssh` access to the cloud host. Here's a sample rsync command that uses an ssh identity file and connects to a particular remote port:

```bash
> rsync -e "ssh -i ~/.ssh/id_ed25519 -p 22164" -avhz --progress user@host:/source/directory/ /destination/directory
```

Remember that you can begin downloading the PoST data files before initialization is complete! Just run rsync again after it finishes or, better yet, run it in an automatic loop to maximize efficiency:

```bash
> while true; do
rsync -e "ssh -i ~/.ssh/id_ed25519 -p 22164" -avhz --progress user@host:/source/directory/ /destination/directory
sleep 300
done
```

## Parallel Initialization

While by default initialization occurs using a single GPU, it's possible to initialize a single identity using many GPUs in parallel, on a single system or on multiple systems. This can be done using `postcli`: specify the desired number of units, count the total number of init files, then initialize a subset on each GPU/each system, e.g.:

```bash
./postcli -numUnits 100 -printNumFiles
1600
```

On Machine A:

```bash
./postcli -numUnits 100 -id <id> -commitmentAtxId <id> -toFile 799 -datadir ./dataA
```

On Machine B:

```bash
./postcli -numUnits 100 -id <id> -commitmentAtxId <id> -fromFile 800 -datadir ./dataB
```

When combining the files, care must be taken to manually merge the metadata contained in the `post_metadata.json` files since each will contain a different nonce value and the smallest nonce must be chosen. For the same reason we strongly recommend that you not perform initialization **using multiple GPUs on a single system using the same PoST data directory,** because the nonces found by one process will be overwritten by those found by another.

See [the postcli README](https://github.com/spacemeshos/post/tree/develop/cmd/postcli) for more information.

## Multiple Drives

At present it's not possible to naively split a single identity across multiple drives or filesystems. We hope to add this feature soon. In the meantime you have two possibilities: run multiple identities, or join multiple filesystems into a single logical filesystem at the hardware or OS level.

### Multiple Identities

Running multiple identities is explained in [Identity Management](#identity-management) and [Multiple Nodes](#multiple-nodes). This has the advantage that you don't need to mess with your filesystem configuration at all, and that you can [initialize](#post-initialization-2) and [generate proofs](#proof-generation) for each identity more easily in parallel. It has the downside that you need to run multiple nodes, which will consume multiples of the [required resources](#requirements) that a single node consumes. Also, since it's in the interest of the network to reduce the number of identities as much as possible, we'll be adding incentives for larger ATXs (generated by larger identities) and disincentives for many small ATXs. Please bear this in mind when you decide how many identities to run.

### Joining Filesystems

There are many ways to combine multiple, physical filesystems into a single "logical" filesystem and the best way to do this will depend on your hardware, your operating systems, you degree of technical expertise, and your needs. Some miners have had success with [RAID5](https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5); bear in mind that it's possible to run RAID in either [hardware or software](https://www.techtarget.com/searchstorage/tip/Key-differences-in-software-RAID-vs-hardware-RAID), with various tradeoffs. Linux users can rely on [LVM](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)), which has wide support in modern distributions.

This has the advantage that you can run a single node, rather than many, and that, if configured correctly, you may achieve much faster read speed (see [Very Large Identities](#very-large-identities)) than you can with a single drive. It has the disadvantage of requiring more configuring at the operating system and filesystem level; miners who aren't comfortable doing so may prefer to instead run multiple identities.

## Corrupt PoST Data

One of the realities of hard drives is that, once in a while, they fail, resulting in corrupt data. Data corruption can also occur while [copying or moving](#moving-post-files) data across systems. Hopefully you'll never have to deal with this situation, but if it does happen, you'll most likely find out when a message like the following appears in your log:

```
2023-09-18T03:37:09.147-0400    INFO    abcde.nipostValidator   Found proof for nonce: 0, pow: 22517998136898104 with [96506732, 8522344264, 15809824782, 17090809665, 22898048404, 23339075780, 33564380939, 37517090594, 38587115133, 42519923294, 47489969603, 66776374486, 85751204605, 97571767596, 98954096617, 103466964513, 105410396815, 108719413993, 110747747703, 114712568823, 122975084397, 128938645449, 135064014126, 137417405566, 137527071596, 142672661935, 145176618414, 149504039139, 150155464780, 156195137948, 162912656308, 188599527912, 192691123424, 196101601537, 196889191957, 202704285017, 204635877880] indices     {"node_id": "abcde", "module": "nipostValidator", "module": "post::prove", "file": "src/prove.rs", "line": 323}
2023-09-18T03:37:09.353-0400    INFO    abcde.post      proving: generated proof        {"node_id": "abcde", "module": "post"}                                                                                                                         2023-09-18T03:37:09.353-0400    INFO    abcde.atxBuilder        created the initial post        {"node_id": "abcde", "module": "atxBuilder"}
2023-09-18T03:37:09.353-0400    INFO    abcde.atxBuilder        verifying the initial post      {"node_id": "abcde", "module": "atxBuilder", "post": {"nonce": 0, "indices": "6c93c00500d229fe7ee0806ce53a043dc4ea0f947dd454053182c75bb1f07c097d887cc5f0227da6f8fb8897a2987932dcf6e9b05873ba303efd8a2bf7134bc1eead95fefaa1708558725c608f02f38a58baa60b54765748919cdd8f9bd56a6ddfe2a15cf2e55581e7d21427f7f9d1dcfa7f6c934005e06b03fd4de85a36d31c8e638a3c8b4c90f6f522672a7d1749bb9de55ea2a7a1a5afe03449dd6c403e246a5b612a78dd66b577c8bcf8b13fa52f"}, "metadata": {"Challenge": "0000000000000000000000000000000000000000000000000000000000000000", "LabelsPerUnit": 4294967296}, "name": "atxBuilder"}
2023-09-18T03:37:09.410-0400    ERROR   abcde.nipostValidator   Proof is invalid: MSB value for index: 137527071596 doesn't satisfy difficulty: 207 > 0 (label: [215, 101, 80, 15, 36, 236, 60, 243, 203, 157, 178, 129, 73, 177, 132, 65])       {"node_id": "abcde", "module": "nipostValidator", "module": "post::post_impl", "file": "ffi/src/post_impl.rs", "line": 242}                                                                                                                                                                                            2023-09-18T03:37:09.413-0400    FATAL   abcde.atxBuilder        initial POST proof is invalid. Probably the initialized POST data is corrupted. Please verify the data with postcli and regenerate the corrupted files.   {"node_id": "abcde", "module": "atxBuilder", "errmsg": "verify PoST: invalid proof", "name": "atxBuilder"}
```

This message indicates that, despite the presence of a complete identity, the miner was unable to generate a PoST proof for a particular epoch due to corruption in the PoST data. The best way to verify this is to run [`postcli`](https://github.com/spacemeshos/post/tree/develop/cmd/postcli) in verify mode:

```bash
> postcli -datadir /Volumes/post/7c8cef2b -fromFile 531 -verify -fraction 0.01
2023/09/18 13:51:59 cli: verifying key.bin
2023/09/18 13:51:59 cli: key.bin is valid
2023/09/18 13:51:59 cli: verifying POS data
2023-09-18T13:51:59.504-0400    INFO    verifying POS data in /Volumes/post/7c8cef2b  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 34}
2023-09-18T13:51:59.504-0400    INFO    verifying POS files 531 -> 927  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 39}
2023-09-18T13:51:59.504-0400    INFO    verifying file /Volumes/post/7c8cef2b/postdata_531.bin      {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 43}
2023-09-18T13:51:59.504-0400    INFO    verifying 26843 labels  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 66}
2023-09-18T13:52:02.348-0400    INFO    POS data is invalid: invalid label in file 531 at offset 126368       {"module": "post::initialization", "file": "ffi/src/initialization.rs", "line": 242}
2023/09/18 13:52:02 cli: invalid POS
```

You can do this for an entire identity, or only for a subset of files (using `-fromFile` and `-toFile`; see the [README](https://github.com/spacemeshos/post/tree/develop/cmd/postcli) for more information). If nothing else is touching the drive (e.g., if the node is shut down and the drive isn't being used for any other purpose), then running `postcli verify` with `-fraction 0.01` should be quite quick; you can run with a larger fraction for a more thorough check. Note also that multiple files may be corrupt; `postcli verify` will quit after detecting a single corrupt file, and you can restart it with a higher `-fromFile` to continue the process. Serious miners may wish to run such a verification process periodically to detect corruption issues before they lead to failures in proof generation and lost rewards.

Once corrupt data is detected, the only option is to delete and regenerate the affected files. If the files are deleted and the node is restarted, it'll automatically restart the PoST initialization process to fill in the missing data, or this can be done manually using `postcli`.

## PoST Metadata

The PoST data directory contains a file called postdata_metadata.json that contains metadata related to the identity and data files:

```
> cat ~/post/7c8cef2b/postdata_metadata.json
{
        "NodeId": "3hcrKr45D5H8GrRikkZMztvKjvQpviUwVqRVMgh0jqk=",
        "CommitmentAtxId": "nuv/Ajq7F8y3dcYC2q3o7XCPClDTFJpCgBGE9bdPKGU=",
        "LabelsPerUnit": 4294967296,
        "NumUnits": 15,
        "MaxFileSize": :4294967296,
        "Nonce": 34659695032,
        "NonceValue": "0000000006db3dc6d84ff41b8acb588d"
}
```

In general you should never touch this file or change any of these values, other than when combining data from a [parallel initialization](#parallel-initialization), which requires manually finding the lowest nonce.

It's _never safe_ to change the `NodeId`, `CommitmentAtxId`, `LabelsPerUnit`, or `MaxFileSize` values. If you increase `MaxUnits` and run `postcli` or `go-spacemesh`, it'll continue PoST initialization and generate more files; this is safe to do unless/until your miner has already generated and broadcast an ATX, after which it cannot be changed. If you decrease `MaxUnits` and run `postcli` or `go-spacemesh`, they will delete existing files to match the config value.

It's always safe to change the `Nonce` and `NonceValue` to any valid values, even after generating and broadcasting an ATX. If, for instance, you discover that you hadn't configured the lowest nonce, you can add it later. Note that this will have no impact upon rewards; it's just future-proofing in case you change the PoST size in future (once this is allowed). See [Searching for a lost VRF nonce](https://github.com/spacemeshos/post/tree/develop/cmd/postcli#searching-for-a-lost-vrf-nonce).

Note that this nonce value, known as a VRF Nonce, has nothing to do with the nonce value [used in proving](#fine-tuning-proving). The VRF Nonce is used to help determine when your node is eligible to participate in block proposal and the Tortoise beacon.

## Networking

Most miners should never need to think much about their network settings. The Spacemesh node software ships with a reasonable default set of parameters that should work well for most node operators and most miners, and the software is built on top of the popular [libp2p network stack](https://libp2p.io/) which includes many useful features and support for things like peer discovery and NAT traversal.

### NAT Traversal

When the node boots up, by default it tries to [automatically configure an open port](https://docs.libp2p.io/concepts/nat/overview/#automatic-router-configuration) that will allow it to listen for inbound connections. While this isn't strictly required for participation in the network, it's strongly encouraged, since without an open inbound port your node will not be "routable" or "dialable", meaning it can only establish outbound connections (but not accept inbound ones). This damages the health of the entire p2p network. Note that, in addition to this feature, if you have a firewall running either locally or on your router, you'll need to manually open the "listen" port, which is 7513 by default. Firewall configurations vary from system to system; see [Network configuration](https://github.com/spacemeshos/testnet-guide/blob/master/netconfig.md) for more information.

You can disable NAT traversal with the `--disable-natport` commandline flag or config variable, and you can configure a different listen port using `--listen`:

```bash
> go-spacemesh -h
...
      --listen string                                 address for listening (default "/ip4/0.0.0.0/tcp/7513")
      --disable-natport                               disable nat port-mapping (if enabled upnp protocol is used to negotiate external port with router)
```

### Number of Connections

By default the node attempts to maintain 20-100 peer connections, including both inbound and outbound. The number of inbound and outbound connections is governed by the [p2p config](https://github.com/spacemeshos/go-spacemesh/blob/475b05b6a8900424bedf5b9086881920ed035b8b/p2p/host.go#L75-L106). Miners wishing to manage the details of their node's participation in the p2p network may wish to tweak the following settings:

- `listen`: as mentioned above, this is the inbound connection port
- `disable-natport` and `p2p-holepunching`: as mentioned above, these features can be used for NAT traversal. See [What are NATs](https://docs.libp2p.io/concepts/nat/overview/) for more information.
- `min-peers`: when the node is connected to fewer than this number of peers, the discovery process will continue to run to find new peers to connect to
- `low-peers` and `high-peers`: when the number of peer connections exceeds `high-peers`, connections will be pruned until the number falls to `low-peers`
- `inbound-fraction`: the node will not allow more than `inbound-fraction x high-peers` inbound connections at any given time.
- `outbound-fraction`: the node will not allow more than `outbound-fraction x high-peers` outbound connections at any given time.
- `direct` and `bootnodes`: can be used to manage public and private nodes; see next section.

As usual, any of these settings may be passed as commandline flags to `go-spacemesh`, or may be included in the [config file](https://github.com/spacemeshos/wiki/wiki/Smesher-Guide#config).

Even more settings are available. See the [p2p config](https://github.com/spacemeshos/go-spacemesh/blob/475b05b6a8900424bedf5b9086881920ed035b8b/p2p/host.go#L75-L106) and [the libp2p docs](https://docs.libp2p.io/) for more information.

### Private Nodes

A miner running [multiple nodes](#multiple-nodes) or [multiple identities](#identity-management) may wish to manually configure how the nodes peer with and communicate with one another. In other words, miners can configure a custom network topology among their own nodes. One very common configuration is to have one or more public "gateway" nodes that are publicly accessible and responsible for communicating with the outside world that relay information from the public p2p network to many private nodes. Such a configuration can save an enormous amount of bandwidth compared to each of several nodes joining the public p2p network directly.

Such a configuration is achieved through the use of the `bootnodes` and `direct` parameters in the `p2p` config. The process is fully documented in the [go-spacemesh p2p README](https://github.com/spacemeshos/go-spacemesh/blob/develop/p2p/README.md).

#### Performance optimizations while running public-private nodes setup

If you're running a public-private nodes setup, you may wish to tweak the following settings to improve the CPU resource usage of your **private** nodes.

##### Disabling verifying POST on private nodes
Verification of POST proofs in ATX that come from the network is significantly hard work for the CPU. In a setup where only some nodes are public, it makes no sense to repeat this work on the private nodes if they can trust the public nodes to do the work honestly.

Post verification can be disabled completely on selected nodes by using `--smeshing-opts-verifying-disable` CLI flag or the following config entry:
```json
{
  "smeshing": {
    "smeshing-verifying-opts": {
      "smeshing-opts-verifying-disable": true
    }
}
```

> [!WARNING]
> Using this is safe **only on the private** nodes because the **public** node will verify ATXs for it. Given that the private nodes are only connected to public nodes, there is no risk involved here. It is strongly **discouraged** to use this setting on **public** nodes.

##### Changing k3 parameter

```yaml
  "post": {
    "post-k3": 0
  }
```

It will significantly lower the CPU requirements while verifying the incoming ATXs.

By default `k3` parameter is equal to `k2` which is currently 37. Setting it to a lower value than 37 will check fewer labels in the proofs and therefore speed up the checks. The downside is that it will lower the security of the ATX verification. The lower the value the lower the security. Setting it to 0 will disable the proof labels verification completely. The node will still verify the k2pow with RandomX though.

> [!WARNING]
> Setting k3 to 0 is safe to use on **only on the private** nodes because the **public** node will verify whole proofs and not just one label as set in the config above. And given that the private nodes are only connected to public nodes then there is no risk involved here. It is strongly **discouraged** to use this setting on **public** nodes.

##### RandomX Fast mode

To improve ATX verification speed on **public** nodes you can use the following setting. It will require roughly additional 2GB of RAM per node used only during ATX verification.

```yaml
  "smeshing": {
    "smeshing-verifying-opts": {
    "smeshing-opts-verifying-powflags": 14
    }
  }
```

If you have spare ram on the private nodes then that setting is safe to set there too. Please remember about the requirement of 2GiB extra memory per node though.

## Performance fine tuning of a node

Besides [Performance optimisations while running public-private nodes setup](#performance-optimisations-while-running-public-private-nodes-setup) there are few other settings that can be used to fine tune the performance of a node.
Please note that these are not directly related to the proving performance but they _may_ impact it depending on the system, setup, hardware etc.

### Verifying workers

Wherever your node will get new ATX it needs to validate it. This is done by the verifying workers. By default there are half of the CPU cores assigned workers that are used to validate the ATXs. You can set the number of workers by setting the following config:

```yaml
"smeshing": {
  "smeshing-verifying-opts": {
    "smeshing-opts-verifying-min-workers": 1,
    "smeshing-opts-verifying-workers": 12
  }
}
```

`smeshing-opts-verifying-min-workers` defines the minimal number of workers. Node will automatically scale down to that number WHEN it's proving. When it's not proving it will use up to `smeshing-opts-verifying-workers` workers.

In order to minimize system impact, `smeshing-opts-verifying-min-workers` can be configured to `1` and `smeshing-opts-verifying-workers` can also be set to `1`. While these settings ensure the lowest strain on system resources, it is important to note that they will result in slower ATX (Activation Transaction) verification, consequently affecting the synchronization speed.

For those who are actively smeshing on the node, it is advisable to set the `smeshing-opts-verifying-workers` to the same value as `smeshing-opts-proving-workers`. This configuration is optimal for reducing the potential negative performance impact on smeshing for other nodes, particularly if the given node has completed its proof of space-time.

### RandomX fast mode

```yaml
 "smeshing": {
    "smeshing-verifying-opts": {
      "smeshing-opts-verifying-powflags": 14
    }
  }
```

Similarly as in the previous section you can set the RadomX mode. RandomX is also used with every incoming ATX. Setting that to `14` from the default `10` makes it significanly faster but in expense of 2GiB extra ram used. In most setups that's not needed but if you have spare ram then it's safe to use.



## Additional troubleshooting


### `timesync: peers are not time synced`

Please make sure that your system clock is synced with the internet. Please refer to time synchronization instructions for your operating system.

If you're 100% certain that your time is correct you can disable the time sync check by setting the following config:

```yaml
{
    "time": {
        "peersync": {
            "disable": true
        }
    }
}
```


### My node uses too much memory and I don't know why

Please add a `"pprof-server": true`, to the config at the main level or add `--pprof-server` to the command line. Restart the node and then visit http://127.0.0.1:6060/debug/pprof/profile?seconds=30 and http://127.0.0.1:6060/debug/pprof/heap in your default browser and download the files. Please share then these files on discord or github issue.

Advanced users can use `go tool pprof http://localhost:6060/debug/pprof/heap` to see what is using the memory.
