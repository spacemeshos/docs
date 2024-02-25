---
id: config
title: Configuring a Full Node
---

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

It's possible to run multiple `go-spacemesh` processes on a single system. This is of course subject to the [resource requirements](requirements) outlined above; in particular, make sure that the system has high enough bandwidth to support many nodes. You'll need to change a few parameters to enable this:

1. Node data directory: each node must have its own data directory to store network state. Specify it on the command line using the `-d datadir` flag or in the config in `{"main":{"data-folder":"<node-data-location>"}}`.
1. Smeshing data directory: each smeshing node must point to a different PoST data directory. Specify in the config using `{"smeshing":{"smeshing-opts":{"smeshing-opts-datadir":"<post-data-location>"}}}`. **See note below about avoiding equivocation!**
1. Lockfile: each running node must specify a different lockfile. Specify it on the command line using `--filelock` or in the config with `{"main":{"filelock":"<lock-file-location>"}}`, e.g. `/tmp/go-spacemesh-01.lock`.
1. GRPC API ports: assuming you have GRPC enabled, each running node must use a different set of ports for the public and private GRPC services. Specify them in the config with `{"api":{"grpc-public-listener":"<ip_addr>:<port>","grpc-private-listener":"<ip_addr>:<port>"}}"`. Use `"0.0.0.0"` to listen on all interfaces, or specify an IP address attached to a particular interface. See next section for more information on the API and the difference between public and private services.
1. P2P listen port: you can specify a different port for each node using the `--listen` CLI flag or in the config file using `"p2p": {"listen": "/ip4/0.0.0.0/tcp/6100"}`.
