---
id: networking
title: Networking
---


Most miners should never need to think much about their network settings. The Spacemesh node software ships with a reasonable default set of parameters that should work well for most node operators and most miners, and the software is built on top of the popular [libp2p network stack](https://libp2p.io/) which includes many useful features and support for things like peer discovery and NAT traversal.

### NAT Traversal

When the node boots up, by default it tries to [automatically configure an open port](https://docs.libp2p.io/concepts/nat/overview/#automatic-router-configuration) that will allow it to listen for inbound connections. While this isn't strictly required for participation in the network, it's strongly encouraged, since without an open inbound port your node will not be "routable" or "dialable", meaning it can only establish outbound connections (but not accept inbound ones). This damages the health of the entire p2p network. Note that, in addition to this feature, if you have a firewall running either locally or on your router, you'll need to manually open the "listen" port, which is 7513 by default. Firewall configurations vary from system to system; see [Network configuration](./../netconfig.md) for more information.

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
