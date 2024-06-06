---
id: equivocation
title: Avoiding Equivocation
---

There's a very small set of behaviors that a miner in Spacemesh is punished for. If a miner simply goes offline or fails
to publish a proposal when they're eligible to do so they'll miss some rewards but they're not punished per se. However,
if a miner double votes, otherwise known as equivocation, their miner identity is permanently disqualified from
participation in consensus and from earning rewards in the future. In a permissionless blockchain like Spacemesh,
equivocation is a serious offense that can have severe negative ramifications for the entire network, so this behavior
cannot go unsanctioned. Once a miner's identity has been cancelled their PoST data is effectively useless. They must
generate a new identity and reinitialize their PoST data. For more information, see
[Community Clarification: Equivocation](https://spacemesh.io/blog/community-clarification-equivocation/).

It's not difficult to avoid equivocation: simply make sure that the same identity is never attached to two running nodes
at the same time. Extra care must be taken any time a miner identity or its PoST data are copied or moved
(since the miner identity lives in the PoST data directory).

### Moving an Identity

When moving a miner identity from one place to another, **perform the following steps in the following order:**

1. **Shut down the miner** in the source location
1. Copy the files to the new location (see previous section)
1. **Double-check that the old miner was shut down.** Check again one more time to make sure. If you get this part
   wrong, you risk permanently disqualifying the miner identity for equivalence and invalidation of the PoST data.
1. Make sure the `local.key` file is intact in the new location. Compare it to the `local.key` file in the old
   location and make sure the contents are the same. Delete the old `local.key` file, or at the very least, rename it
   or move it to ensure that you don't accidentally run the same identity again on the old system.
1. Start the miner in the new location. Make sure that you specify the correct `smeshing-opts-datadir` in the config,
   and make sure that the other `smeshing-opts` are the same as they were in the old system, and that they match the
   contents of the `postdata_metadata.json` file in the PoST datadir. Make sure that the miner found the data and was
   able to read it. (You should see the messages `post setup completed`, `loaded the initial post from disk`, and
   `verifying the initial post` in the log.)

### Generating Multiple Identities

You can use one system to generate multiple PoST identities - this is a common usage pattern for a user who wants to,
e.g., generate multiple identities on a system with a GPU, then transfer them to other systems. However, once you've
moved the PoST data files (`postdata_*.bin`) to their new location, and copied the associated `local.key` as well,
**make absolutely certain that `local.key` has been removed** in the source location. If the file still exists, the
next PoST identity you generate will be identical to the prior one and equivocation may occur as a result.
