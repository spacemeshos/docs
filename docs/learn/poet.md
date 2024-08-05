---
id: poet
title: PoET Servers
---

Calculating the [PoET](./post.md/#proof-of-elapsed-time) requires performing repeated, computationally intensive calculations. Such work cannot be parallelized and must be performed sequentially, using the previous output as the input for the next iteration. As a result, PoET generation is not performed by individual smeshers but by specialized [**PoET servers**](../start/smeshing/smeshing_adv/poet.md). Many smeshers can rely on a single PoET server to generate a PoET for them. Ultimately, by chaining together [proofs of space](./post.md/#proof-of-space) with [proofs of elapsed time](./post.md/#proof-of-elapsed-time), a smesher is able to cryptographically prove to the network that they have committed a certain amount of space-time to the network, thereby asserting their eligibility to participate in the consensus and earn rewards.

In practice, PoET does not measure clock time. Instead, the passage of time is inferred from the sequential calculations performed by the PoET server, through an abstract unit of time called a **tick**. Thus, a tick is an arbitrary but meaningful, minimal unit of time in Spacemesh, and ticks from one PoET server can be compared directly to ticks from another PoET server. A faster PoET server (i.e., one with a faster CPU) that is able to run the underlying sequential hash calculations faster, will be able to generate more ticks per unit time. Spacemesh operates several [public PoET servers](../start/smeshing/smeshing_adv/poet.md/#timing) on specialized hardware that has been fine-tuned to be as fast as possible. Currently, it is infeasible to run a faster PoET without a fundamental breakthrough in technology (e.g., novel hardware).

If someone were to develop and run a faster PoET, it would be visible to the rest of the network in the form of ATXs with a higher tick count. However, there is currently no in-protocol incentivization to run a PoET server (rewards, fees), but we intend to provide it in the future. This is so that if someone were to develop a faster PoET, it would be in their interest (i.e., incentive compatible) for them to make it available for public use in exchange for fees.

For a deeper explanation of how the PoET generation process works, [see this](./post.md/#proof-generation).
