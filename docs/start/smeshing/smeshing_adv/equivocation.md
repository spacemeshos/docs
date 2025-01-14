---
id: equivocation
title: Avoiding Equivocation
---

There is a very small set of behaviors that a smesher in Spacemesh is punished for. If a smesher simply goes offline or fails to publish a proposal when they are eligible to do so, they will miss some rewards but they are not punished per se. However, if a smesher double votes, otherwise known as equivocation, their smesher identity is permanently disqualified from participation in the consensus and from earning rewards in the future.

:::danger

If a smesher double votes (equivocates), their smesher identity is permanently disqualified from participating in consensus and earning rewards in the future.

:::

In a permissionless blockchain like Spacemesh, equivocation is a serious offense that can have severe negative ramifications for the entire network. As such, this behavior cannot go unsanctioned. Once a smesher's identity has been cancelled, their PoST data is effectively useless. They must generate a new identity and reinitialize their PoST data. For more information, see
[Community Clarification: Equivocation](https://spacemesh.io/blog/community-clarification-equivocation/).

It is not difficult to avoid equivocation: simply make sure that the same identity is never attached to two running nodes at the same time. Extra care must be taken any time a smesher identity or its PoST data are copied or moved
(since the smesher identity lives in the PoST data directory).

:::tip

To avoid equivocation, simply ensure that the same identity is never attached to two running nodes at the same time. Be especially careful when relocating PoST data and/or identity files since the smesher identity lives in the PoST data directory.

:::

### Moving an Identity

When moving a smesher identity from one place to another, **perform the following steps in the given order:**

1. **Shut down the smeshing node** in the source location.
1. Copy the files to the new location (see previous section).
1. **Double-check that the old smeshing node was shut down.** Check again one more time to make sure. If you get this part wrong, you risk permanently disqualifying the smesher identity for equivalence and invalidation of the PoST data.
1. Make sure the `local.key` file is intact in the new location. Compare it to the `local.key` file in the old location and ensure that the contents are the same. Delete the old `local.key` file, or at the very least, rename it
or move it to ensure that you do not accidentally run the same identity again on the old system.
1. Start the smesher in the new location. Make sure that you specify the correct `smeshing-opts-datadir` in the config, and confirm that the other `smeshing-opts` are the same as they were in the old system, and that they match the contents of the `postdata_metadata.json` file in the PoST data directory. Make sure that the smesher found the data and was able to read it. (You should see the messages `post setup completed`, `loaded the initial post from disk`, and `verifying the initial post` in the log.)

### Generating Multiple Identities

You can use one system to generate multiple PoST identities - this is a common usage pattern for a user who wants to, e.g., generate multiple identities on a system with a GPU, then transfer them to other systems. However, once you have moved the PoST data files (`postdata_*.bin`) to their new location and have copied the associated `local.key` as well, **make absolutely certain that `local.key` has been removed** in the source location. If the file still exists, the next PoST identity you generate will be identical to the prior one and equivocation may occur as a result.
