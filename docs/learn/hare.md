---
id: hare
title: Hare
---

Hare allows the network to reach consensus on the set of block proposals that are valid (i.e., properly signed by an eligible smesher) and were published in time. About 4000 smeshers are sampled in each layer to form the Hare committee. Any valid block proposal that was published within the time window is guaranteed to be included in the block for that layer as long as there is an honest majority within the Hare committee. As such, a smesher has to submit a block proposal in a timely manner so that it is included in the block for that layer. The hare is guaranteed to either reach consensus or agree that consensus hasn’t been reached within a given time window, in which case the layer will be empty.

> Note that **there are currently no rewards for participating in Hare,** but we intend to change this soon.

## Block construction and reward distribution

Every five minutes the Spacemesh network fires a _layer tick._ The timing of this event is calculated locally, which is why it is critical that all Spacemesh nodes have synchronized clocks. After the layer tick event, there is a short delay after which the [[Hare]] consensus process kicks off for the layer that just ticked. The active set (i.e., the set of all valid Activation Transactions (ATXs) targeting the current epoch that a node is aware of) is sampled and a random committee of eligible, active smeshers is chosen to participate in the next Hare round. This sampling occurs relative to each smesher's **weight** in the current epoch, such that nodes with a greater weight are chosen more often. These nodes broadcast messages containing their opinion, or view, of the valid, ordered set of transactions to be included in this layer, and through several rounds of exchanging messages they eventually reach consensus on the canonical set of transactions for this layer. At the end of a successful Hare instance, all honest participants agree on the set of transactions to be included in the layer, and all honest nodes that observed Hare (but didn't themselves participate) also agree on the same. As a result, all nodes are able to independently construct a block containing these transactions in the canonical order.

Now, it is time for all the smeshers to vote on the validity of the constructed block produced by Hare. This is where [Tortoise](./tortoise.md) comes in.
