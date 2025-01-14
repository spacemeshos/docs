---
id: blocks
title: Blocks and Transactions
---

In traditional blockchains such as Bitcoin or Ethereum each block contains a "backwards pointer" to the previous known block (i.e., the previous chain head). In this way it's not possible to replace a single, historical block without replacing every block that came after.

Due to its mesh design, Spacemesh does not work this way. Spacemesh blocks are freestanding, i.e., each individual block is deemed valid or invalid on its own right by the consensus mechanisms, Tortoise and Hare. The protocol allows for zero or more valid blocks in a given layer. The vast majority of layers are expected to have a single valid, effective block. Empty layers may occur from time to time when certain assumptions are violated, e.g., when many miners are offline and the Hare consensus mechanism fails.

There can only be multiple valid blocks in a given layer when security assumptions are temporarily violated, e.g., when the network temporarily loses synchrony or > 1/3 of miners act dishonestly. In this case the protocol dictates that a single block be deterministically chosen as the only _effective_ block for the layer. Over time the network's self-healing mechanism ensures that all honest nodes reach consensus on the canonical set of valid, effective blocks, zero or one per layer.

In practice this means that a _single historical block_ and its contents may be reorg'ed in or out of the canonical chain. When a historical change occurs, the state rolls back (i.e., reorgs) to the point of change and all subsequent canonical state (i.e., all transactions in the new canonical chain) is replayed from that point forward. This could mean that transactions in the canonical chain that were previously effective now become ineffective, or vice versa. It may also mean that the same transaction (uniquely identified by its transaction ID) may appear in multiple blocks, in the same layer or in multiple layers. When this happens, only the first instance of the transaction in the canonical chain is considered effective; later instances are ignored.

A layer contains zero or more blocks. Most layers contain exactly one block, but it's possible for a layer to have zero blocks (when the network is under attack, or during times when many miners were offline or otherwise acting Byzantine) or more than one block (e.g., after a network partition-and-rejoin). In rare cases of multiple blocks, the network will establish consensus on a single block as canonical; transactions in other blocks will not be included in the canonical mesh nor processed. A block may thus be _valid_ or _invalid_ and there may only be one _valid_ block per layer.

Blocks contain zero or more transactions. Blocks are uniquely indexed by their block hash.

Transactions are uniquely indexed by their transaction ID. The same transaction may be included in multiple blocks, but not in multiple blocks on the canonical chain (i.e., multiple _valid_ blocks). A transaction has a _state_ that may be `pending` (i.e., not processed yet), `mempool` (successfully added to the mempool but not yet mined into a block), or `applied` (successfully mined into a block).

A transaction that was successfully `applied` can still fail if, e.g., the principal account does not have enough funds to pay for its gas: we call this an "ineffective" transaction. This is not currently captured cleanly in the API. Implementing transaction receipts is still a work in progress.
