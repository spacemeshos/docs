---
id: performance
title: Fine-Tuning Node Performance
---

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
