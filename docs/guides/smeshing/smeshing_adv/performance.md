---
id: performance
title: Fine-Tuning Node Performance
---

Besides [Performance optimisations while running public-private nodes setup](#performance-optimisations-while-running-public-private-nodes-setup) there are few other settings that can be used to fine tune the performance of a node.
Please note that these are not directly related to the proving performance but they _may_ impact it depending on the system, setup, hardware etc.

### Distributed verification

Starting with go-spacemesh version 1.4.4, it's safe to use distributed verification.

```json
"post": { "post-k3": 1 }
```

This configuration allows your node to verify only a subset of labels (`1` in the example) and rely on other nodes to validate the remaining ones. Because different nodes will pick up different subsets of labels with the requested size, it's also safe to enable this on public nodes to limit the CPU resources needed.

### Verifying workers

Wherever your node will get new ATX it needs to validate it. This is done by the verifying workers. By default there are half of the CPU cores assigned workers that are used to validate the ATXs. You can set the number of workers by setting the following config:

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

`smeshing-opts-verifying-min-workers` defines the minimal number of workers. Node will automatically scale down to that number WHEN it's proving. When it's not proving it will use up to `smeshing-opts-verifying-workers` workers.

In order to minimize system impact, `smeshing-opts-verifying-min-workers` can be configured to `1` and `smeshing-opts-verifying-workers` can also be set to `1`. While these settings ensure the lowest strain on system resources, it is important to note that they will result in slower ATX (Activation Transaction) verification, consequently affecting the synchronization speed.

For those who are actively smeshing on the node, it is advisable to set the `smeshing-opts-verifying-workers` to the same value as `smeshing-opts-proving-workers`. This configuration is optimal for reducing the potential negative performance impact on smeshing for other nodes, particularly if the given node has completed its proof of space-time.

### RandomX fast mode

```json
"smeshing":
  { "smeshing-verifying-opts": { "smeshing-opts-verifying-powflags": 14 } }
```

Similarly as in the previous section you can set the RadomX mode. RandomX is also used with every incoming ATX. Setting that to `14` from the default `10` makes it significanly faster but in expense of 2GiB extra ram used. In most setups that's not needed but if you have spare ram then it's safe to use.

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

```json
"post": { "post-k3": 0 }
```

It will significantly lower the CPU requirements while verifying the incoming ATXs.

By default `k3` parameter is equal to `k2` which is currently 37. Setting it to a lower value than 37 will check fewer labels in the proofs and therefore speed up the checks. The downside is that it will lower the security of the ATX verification. The lower the value the lower the security. Setting it to 0 will disable the proof labels verification completely. The node will still verify the k2pow with RandomX though.

> [!WARNING]
> Setting k3 to 0 is safe to use on **only on the private** nodes because the **public** node will verify whole proofs and not just one label as set in the config above. And given that the private nodes are only connected to public nodes then there is no risk involved here. It is strongly **discouraged** to use this setting on **public** nodes.

##### RandomX Fast mode

To improve ATX verification speed on **public** nodes you can use the following setting. It will require roughly additional 2GB of RAM per node used only during ATX verification.

```json
"smeshing":
  { "smeshing-verifying-opts": { "smeshing-opts-verifying-powflags": 14 } }
```

If you have spare ram on the private nodes then that setting is safe to set there too. Please remember about the requirement of 2GiB extra memory per node though.
