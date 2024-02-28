---
id: atx
title: ATX
---

After successfully generating the PoST, the smesher creates an Activation Transaction (ATX) and submits it to the network. This transaction includes the smesher’s PoST, their wallet address (to which rewards will go), and some other data. The ATX is then used to calculate the smesher's eligibility to participate in the rewards. For all subsequent epochs, the PoET service uses ATXs as the challenge value instead of the initial PoSp. As such, after the smesher’s first epoch, only a single PoSp (the later PoSp) is required per epoch.

## Weight

Every ATX also has a weight. Since multiple smeshers contribute to the same block, it is important to reward them accordingly. The absolute weight is calculated by multiplying the SUs allocated by a smesher by the number of PoET ticks for those allocated SUs (Space Units * PoET ticks). Put simply, the allocated space is multiplied by the time (measured by PoET ticks) that the special data was kept on the disk.

Once the ATX’s absolute weight is derived, its relative weight (ATX weight / weight of all ATXs in the epoch) is calculated. This is the ATX’s weight in proportion to the total weight of all ATXs. Based on this relative weight, the number of block proposals a smesher is eligible to publish can be calculated.

## Block Proposals

Smeshers who submit a valid ATX during an epoch become eligible to publish block proposals in the following epoch. A block proposal is a set of data that includes transactions from the smesher’s mempool, the smesher’s signature, and some data that proves that this smesher is eligible to publish a block proposal in this layer.

Currently, the protocol targets 50 block proposals per layer and there are 4032 layers per epoch, with each layer lasting 5 minutes. The absolute weight of an ATX is divided by the number of block proposals that the smesher is eligible for to determine the weight of each of those block proposals.
