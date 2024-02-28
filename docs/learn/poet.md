---
id: poet
title: PoET (Proof of Elapsed Time)
---

In order to serve as a proof of _space and time_, the proof of space needs to be linked to a proof of time. Spacemesh uses a construction called proof of elapsed time (PoET) for this purpose. As with the other sections above, the details of this process are beyond the scope of this document, but in brief the PoET performs a type of cryptographic work that must be done sequentially, i.e., it cannot be parallelized. By proving that it's done a certain amount of work, it can therefore prove that a certain amount of real time has passed: in other words, a _proof of sequential work_ serves as a _proof of elapsed time._

The initial PoSp serves as the input data for the PoET service, which then starts performing sequential calculations until the next epoch. The PoET service also maintains a Merkle tree (called a membership tree) of all the initial PoSp values submitted by smeshers to the PoET service. So far, we have understood that during the initialization process, some space is reserved, an initial PoSp is created, this initial PoSp is submitted to the PoET service, the PoET service adds it to a Merkle tree and starts performing sequential calculations using it as input.

At the end of an epoch, the smesher submits the later PoSp. This later PoSp is different from the initial one in that it requires a non-zero input value or a challenge, which is the hash of the PoET value. The test here is that the later PoSp with the challenge input must match the initial PoSp present in the PoET Merkle tree. The protocol is making sure that the later PoSp was generated using the same data which was used to generate the initial PoSp, while also ensuring that the PoET service performed a set number of calculations using the initial PoSp value, thereby proving that some time (2 weeks) had passed since the initial PoSP.

Together, they create Proof of Space-Time.

## PoET Servers

In Spacemesh, the PoET work is not done by individual smeshers. Because it's computationally intensive (it's effectively a form of proof of work), it's done by specialized servers known as **PoET servers.** Many smeshers can rely on a single PoET server to provide them with a proof of elapsed time. By chaining together proofs of space with proofs of elapsed time, a smesher is able to cryptographically prove to the network that they've committed a certain amount of spacetime to the network, thereby asserting its eligibility to participate in consensus and earn rewards.

In practice PoET doesn't measure real clock time. Rather, the unit of time is referred to as a "tick." A **tick** is an arbitrary but meaningful, minimal unit of time in Spacemesh, and ticks from one PoET server can be compared directly to ticks from another PoET server. A faster server, i.e., one with a faster CPU that is able to run the underlying proof of sequential work hash function faster, will be able to generate more ticks per unit time. Spacemesh operates several public PoET servers on specialized hardware that's fine-tuned to be as fast as possible. It's infeasible to run a faster PoET without a fundamental breakthrough, such as novel hardware.

If someone were to develop and run a faster PoET, it would be visible to the rest of the network in the form of ATXs with a higher tick count. There's currently no in-protocol incentivization to run a PoET server (rewards, fees), but we intend to add this to the protocol in future so that if someone does develop a faster PoET it would be in their interest (i.e., incentive compatible) for them to make it available to the public in exchange for fees.
