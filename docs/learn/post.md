---
id: post
title: PoST (Proof of Space-time)
---

To start the smeshing process, disk space is first initialized. Initialization is a one-time process by which the allocated space is filled with special data, which must then remain on the disk for as long as one wants to keep participating in the smeshing process. In addition, an initial Proof of Space (PoSp) is constructed which proves that the smesher actually reserved this much space at the initialization stage. At every epoch (two weeks), the smesher must prove that the initialized data is still present on the disk in order to be able to accrue any rewards. One may ask, why must storage space be reserved in this manner? This is to combat Sybil attacks.

Identity on a blockchain network is cheap. A smesher can keep generating new wallets and masquerade as multiple smeshers. A good solution is to use a real-world resource as a requirement to participate in the consensus algorithm. Bitcoin demands that a computationally-intensive process be performed to participate in the mining process, while Ethereum mandates that some ETH be staked to participate in block validation. Similarly, Spacemesh requires that some disk space be reserved for an epoch to participate in the smeshing process.

However, only proving that I reserved a given amount of disk space during the initialization phase does not guarantee that I also kept it stored for the whole epoch.  While the initial PoSp proves that a user reserved this much disk space by storing special data during the initialization phase, a later PoSp is used to ensure that the user still has the same data two weeks later. In other words, the special data has spent 14 days stored on the drive.

How can we prove that the data has definitely spent some time being stored on the drive? This is where another proof, the [Proof of Elapsed Time (PoET)](./poet.md) comes in.
