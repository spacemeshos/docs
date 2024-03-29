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
