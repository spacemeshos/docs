---
id: poet
title: PoET Servers
---

In Spacemesh, the [PoET work](./post.md#proof-of-elapsed-time) is not done by individual smeshers. Because it's computationally intensive (it's effectively a form of proof of work), it's done by specialized servers known as **PoET servers.** Many smeshers can rely on a single PoET server to provide them with a proof of elapsed time. By chaining together proofs of space with proofs of elapsed time, a smesher is able to cryptographically prove to the network that they've committed a certain amount of spacetime to the network, thereby asserting its eligibility to participate in consensus and earn rewards.

In practice PoET doesn't measure real clock time. Rather, the unit of time is referred to as a "tick." A **tick** is an arbitrary but meaningful, minimal unit of time in Spacemesh, and ticks from one PoET server can be compared directly to ticks from another PoET server. A faster server, i.e., one with a faster CPU that is able to run the underlying proof of sequential work hash function faster, will be able to generate more ticks per unit time. Spacemesh operates several public PoET servers on specialized hardware that's fine-tuned to be as fast as possible. It's infeasible to run a faster PoET without a fundamental breakthrough, such as novel hardware.

If someone were to develop and run a faster PoET, it would be visible to the rest of the network in the form of ATXs with a higher tick count. There's currently no in-protocol incentivization to run a PoET server (rewards, fees), but we intend to add this to the protocol in future so that if someone does develop a faster PoET it would be in their interest (i.e., incentive compatible) for them to make it available to the public in exchange for fees.
