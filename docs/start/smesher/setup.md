---
id: setup
title: Advanced Setup
---

## Compiling

go-spacemesh has a very limited set of dependencies and requirements, the main one being a Go toolchain. It also requires `make` and [Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage). Make sure you have a [recent version of Go](https://go.dev/dl/) installed, clone the [go-spacemesh repository](https://github.com/spacemeshos/go-spacemesh), then run `make install`, which will install the other dependencies for you automatically. Note that this includes a compiled version of the Spacemesh PoST library, but as long as your Go toolchain is set up correctly, this should work out of the box.

You can see the minimum required version of Go in a few places including [`go.mod`](https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/go.mod#L3) and the [README](https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/README.md?plain=1#L89).

Assuming you intend to run your node on mainnet, **make certain that you compile using the tag that matches the [latest release](https://github.com/spacemeshos/go-spacemesh/releases)**, e.g.:

```bash
> git clone --depth 1 --branch v1.1.1 https://github.com/spacemeshos/go-spacemesh.git
> make install
> make build
```

This builds the `go-spacemesh` binary in the `build/` directory.

For the most up to date information on compiling check the [README](https://github.com/spacemeshos/go-spacemesh#readme), [Makefile](https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile) and [Makefile-libs](https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile-libs.Inc), and the [release workflow](https://github.com/spacemeshos/go-spacemesh/blob/develop/.github/workflows/release.yml).

## Running

The node features a set of reasonable default parameters that should work well out of the box for most users and most use cases, but you can change all of them using command line flags and/or the config file. The exact command you use to run `go-spacemesh` will depend upon your local configuration and requirements. See the [README](https://github.com/spacemeshos/go-spacemesh#readme) and run `go-spacemesh -h` for the full list of arguments:

```bash
> go-spacemesh -h
start node

Usage:
  node [flags]
  node [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  version     Show version info

Flags:
  -a, --accounts string=uint64                        List of prefunded accounts
      --advertise-address string                      libp2p address with identity (example: /dns4/bootnode.spacemesh.io/tcp/5003)
      --beacon-first-voting-round-duration duration   First voting round duration in milliseconds (default 30m0s)
      --beacon-grace-period-duration duration         Grace period duration in milliseconds (default 10m0s)
      --beacon-kappa int                              Security parameter (for calculating ATX threshold) (default 40)
      --beacon-proposal-duration duration             Proposal duration in milliseconds (default 4m0s)
      --beacon-q *big.Rat                             Ratio of dishonest spacetime (for calculating ATX threshold). It should be a string representing a rational number. (default 1/3)
      --beacon-rounds-number uint32                   Amount of rounds in every epoch (default 300)
      --beacon-sync-weight-units int                  Numbers of weight units to wait before determining beacon values from them. (default 800)
      --beacon-theta *big.Rat                         Ratio of votes for reaching consensus (default 1/4)
      --beacon-votes-limit uint32                     Maximum allowed number of votes to be sent (default 100)
...
```

Assuming everything else is set up correctly in your config file (see next section), the only CLI flag you need is to specify the location of the config file, e.g.:

```bash
> go-spacemesh -c node-config.json
```

## Configuring

The node currently does not need any config to run with mainnet. You can however request the config and override any needed value. To request the current mainnet compatible config please run:

```bash
> curl -s https://configs.spacemesh.network/networks.json | jq '.[0].conf'
"https://configs.spacemesh.network/config.mainnet.json"
```

Most users will want to start with the existing network config file as a template and add customizations to match their local environment and preferences. Note that **it's essential you not change existing config parameters unless you know what you're doing.** Some config sections, like `genesis`, must not be changed under any circumstances or **your node will not be compatible with mainnet.** Your messages will be dropped and your node may be banned by its peers. Some, like `p2p` and `smeshing`, may be tweaked by power users who know what they're doing, but can also cause problems for your node. Others such as `api` and `logging` are safe to change. When in doubt, [ask for help](https://chat.spacemesh.io)!

Assuming you're starting with the default network config file, you'll want to add something like the following to start smeshing:

```
  "smeshing": {
    "smeshing-opts": {
      "smeshing-opts-datadir": "/data/post/7c8cef2b/",
      "smeshing-opts-maxfilesize": 4294967296,
      "smeshing-opts-numunits": 15
    },
    "smeshing-proving-opts": {
      "smeshing-opts-proving-nonces": 144,
      "smeshing-opts-proving-threads": 0
    },
    "smeshing-coinbase": "<your coinbase here>",
    "smeshing-start": true
  },
```

For more information on choosing the `smeshing-opts` and `smeshing-proving-opts`, see [fine-tuning proving](#fine-tuning-proving), [the postcli README](https://github.com/spacemeshos/post/tree/develop/cmd/postcli) and [the profiler README](https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md), respectively, and the sections below on these topics.

### Coinbase

The coinbase account (specified in the config, above, as `smeshing-coinbase`) is the account that will receive the rewards from smeshing. The coinbase account is fixed per smesher, per epoch, as the smesher commits to it in an ATX for an entire epoch. However, it can be changed at any time, and the change will take effect in the epoch that the next published ATX targets. Note that many smeshers can also use the same coinbase (although to do so would reduce privacy since those smeshers could be associated via the shared coinbase address), and also that there's no requirement that a smesher even provide a coinbase that they control. In theory the coinbase could be set to someone else's account, or even to a burn account.

The simplest way to generate a coinbase account is to install and open [Smapp](https://github.com/spacemeshos/smapp/releases); it'll automatically generate a new account the first time it's opened, assuming one doesn't already exist (make sure to backup the recovery mnemonic!).

If you prefer you can use the [`smcli` tool](https://github.com/spacemeshos/smcli) to generate and display a new wallet containing one or more accounts from the command line. See the README in that repository for more information on the tool.

Either way, you should now have a Spacemesh-compatible address in bech32 format that starts with `sm1`.

### Multiple nodes

It's possible to run multiple `go-spacemesh` processes on a single system. This is of course subject to the [resource requirements](https://docs.spacemesh.io/docs/start/requirements) outlined above; in particular, make sure that the system has high enough bandwidth to support many nodes. You'll need to change a few parameters to enable this:

1. Node data directory: each node must have its own data directory to store network state. Specify it on the command line using the `-d datadir` flag or in the config in `{"main":{"data-folder":"<node-data-location>"}}`.
1. Smeshing data directory: each smeshing node must point to a different PoST data directory. Specify in the config using `{"smeshing":{"smeshing-opts":{"smeshing-opts-datadir":"<post-data-location>"}}}`. **See note below about avoiding equivocation!**
1. Lockfile: each running node must specify a different lockfile. Specify it on the command line using `--filelock` or in the config with `{"main":{"filelock":"<lock-file-location>"}}`, e.g. `/tmp/go-spacemesh-01.lock`.
1. GRPC API ports: assuming you have GRPC enabled, each running node must use a different set of ports for the public and private GRPC services. Specify them in the config with `{"api":{"grpc-public-listener":"<ip_addr>:<port>","grpc-private-listener":"<ip_addr>:<port>"}}"`. Use `"0.0.0.0"` to listen on all interfaces, or specify an IP address attached to a particular interface. See next section for more information on the API and the difference between public and private services.
1. P2P listen port: you can specify a different port for each node using the `--listen` CLI flag or in the config file using `"p2p": {"listen": "/ip4/0.0.0.0/tcp/6100"}`.

## System Service on Linux

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
