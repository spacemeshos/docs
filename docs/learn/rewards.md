---
id: rewards
title: Rewards
---

Like other, similar blockchains, there are two components to rewards in Spacemesh: newly minted coins, i.e., the block subsidy, and fees collected from transactions included in the block. Both are aggregated and distributed to the eligible smeshers that successfully contribute to the construction of each new block.

The protocol mints new coins every layer. The precise details can be found in [economics](https://github.com/spacemeshos/economics/) and are beyond the scope of this document, but in brief, the first few layers issue 477 coins each and this amount decays exponentially over time with a half life of about 30 years. As long as Hare succeeds and a block is successfully produced for a given layer these coins will be minted and divided among the eligible smeshers that submitted proposals for the layer. If there is no block for a given layer then those coins are effectively burnt, i.e., they will never be minted.

These new coins are added to the total fees collected from all transactions in the layer and are divided according to eligibility weight: this is the weight of the smesher's ATX for the current epoch divided by the total epoch weight, divided by the number of eligibilities in the given epoch. If a smesher fails to produce a proposal in an eligible slot, it will forfeit its reward for that layer and its coins will be divided proportionally among the smeshers that did successfully submit proposals for the layer.

Rewards are added to a smesher's coinbase account (the one registered in its ATX) when the block is applied to state, i.e., when the layer has been approved by Hare.

## Punishment

Every robust system of incentives must include sanctions as well as rewards. In the case of Spacemesh and other permissionless, public blockchains, block producers (miners) must be punished for violating the rules of the protocol or failing to contribute to consensus.

In Spacemesh Smeshers are _not_ punished for failing to contribute, e.g., for failing to publish proposals in their eligible slots. However, they do fail to receive rewards in this case which amounts to the same thing economically.

The only sanctionable offense in Spacemesh is equivocation, otherwise known as double voting: voting twice or submitting multiple proofs in the same slot. There are currently three types of equivocation in Spacemesh, corresponding to three components of the protocol: Hare, ATX, and Ballots. If a smesher generates, signs, and broadcasts conflicting Hare messages in the same round, or produces multiple ATXs targeting the same epoch, or produces multiple voting ballots in the same slot, other nodes will detect this malicious behavior and will generate and gossip a **malfeasance proof** containing the conflicting signed messages. In short order, every node in the network will flag the sanctioned smesher as malicious and future messages from the smesher will be ignored. It will thus immediately lose its eligibility to participate in consensus and will receive no future rewards.

Note that, unlike in proof of stake networks, **there is no slashing in Spacemesh.** In other words the coins earned by a smesher will not be reduced, and all coins earned prior to the moment of malfeasance are still valid and spendable. 

However, once a malfeasance proof has been generated and broadcast for that smesher, its identity is effectively burnt. The only option is to delete the PoST files and generate them again from scratch using a new identity. Therefore it's essential that miners use caution when moving identities, and they must **never run two nodes attached to the same identity at the same time.** There's more information on how to avoid this in [our Smesher guide](./../start/smesher.md#avoiding-equivocation).
