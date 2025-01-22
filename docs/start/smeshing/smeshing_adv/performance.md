---
id: performance
title: Fine-Tuning Node Performance
---

Besides [performance optimizations while running a public-private node setup](./performance.md#performance-optimizations-while-running-public-private-node-setup), there are a few other settings that can be used to fine-tune the performance of a node. Please note that these are not directly related to the proving performance but they _may_ impact it depending on the system, setup, hardware, etc.

### Distributed Verification

Starting with go-spacemesh version 1.4.4, it is safe to use distributed verification.

```json
"post": { "post-k3": 1 }
```

This configuration allows your node to only verify a subset of labels (`1` in the example) and rely on other nodes to validate the remaining ones. Because different nodes will pick up different subsets of labels with the requested size, it is also safe to enable this on public nodes to limit the CPU resources needed.

### Verifying Workers

Whenever your node gets a new ATX, it needs to validate the ATX using verifying workers. By default, half of the CPU cores are assigned as workers that validate the ATXs. You can set the number of workers by editing the following config:

```json
"smeshing":
  {
    "smeshing-verifying-opts":
      {
        "smeshing-opts-verifying-min-workers": 1,
        "smeshing-opts-verifying-workers": 12,
      },
  }
```

`smeshing-opts-verifying-min-workers` defines the minimal number of workers. The node will automatically scale down to that number WHEN it is proving. When the node is not proving, it will use up to `smeshing-opts-verifying-workers` workers.

In order to minimize system impact, `smeshing-opts-verifying-min-workers` can be configured to `1` and `smeshing-opts-verifying-workers` can also be set to `1`. While these settings ensure the lowest strain on system resources, it is important to note that they will result in slower ATX verification, consequently affecting the synchronization speed. For those actively smeshing on the node, it is advisable to set the `smeshing-opts-verifying-workers` to the same value as `smeshing-opts-proving-workers`. This configuration is optimal for reducing the potential negative performance impact on smeshing for other nodes, particularly if the given node has already completed its PoST.

### RandomX Fast Mode

```json
"smeshing":
  { "smeshing-verifying-opts": { "smeshing-opts-verifying-powflags": 14 } }
```

You can manually set the RadomX mode as well. RandomX is also used with every incoming ATX. Setting it to `14` from the default `10` makes it significantly  faster but at the expense of 2 GiB extra RAM used. In most setups, that is not needed, but it is safe to use if you have spare RAM.

#### Performance Optimizations While Running Public-Private Node Setup

If you are running a public-private node setup, you may wish to tweak the following settings to improve the CPU resource usage of your **private** nodes.

##### Disabling Verifying PoST on Private Nodes

Verification of PoSTs in the ATX that come from the network is significantly hard work for the CPU. In a setup where only some nodes are public, it makes no sense to repeat this work on the private nodes if they can trust the public nodes to do the work honestly.

PoST verification can be disabled completely on selected nodes by using `--smeshing-opts-verifying-disable` CLI flag or by making the following config entry:

```json
{
  "smeshing": {
    "smeshing-verifying-opts": {
      "smeshing-opts-verifying-disable": true
    }
}
```

:::caution Warning

Disabling PoST verification is **only safe on the private** nodes because the **public** node will verify ATXs sent to it. Given that the private nodes are only connected to public nodes, there is no risk involved here. It is strongly **discouraged** to use this setting on **public** nodes.

:::

##### Changing k3 Parameter

```json
"post": { "post-k3": 0 }
```

Setting the `k3` parameter to 0 will significantly lower the CPU requirements while verifying the incoming ATXs. By default, the `k3` parameter is equal to `k2` which is currently 37. Setting it to a value lower than 37 will check fewer labels in the proofs and therefore speed up the checks. The downside is that it will lower the security of the ATX verification. The lower the value, the lower the security. Setting it to 0 will completely disable the verification of proof labels. The node will still verify the k2pow with RandomX though.

:::caution Warning

Setting k3 to 0 is safe to use on **only on the private** nodes because the **public** node will verify whole proofs and not just one label as set in the config above. And given that the private nodes are only connected to public nodes then there is no risk involved here. It is strongly **discouraged** to use this setting on **public** nodes.

:::
##### RandomX Fast mode

To improve ATX verification speed on **public** nodes you can use the following setting. It will roughly require an additional 2 GiB of RAM per node that is only used during ATX verification.

```json
"smeshing":
  { "smeshing-verifying-opts": { "smeshing-opts-verifying-powflags": 14 } }
```

If you have spare RAM on the private nodes then this setting is safe to set there too. However, please remember about the requirement of **2 GiB extra memory** per node.
