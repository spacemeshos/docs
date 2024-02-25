---
id: tortoise
title: Tortoise
---

A _different_ set of eligible, active smeshers votes on the outcome of the Hare and the canonical state of the layer. This voting also happens on the basis of the active set and each smesher's weight relative to the total weight of all eligible smeshers in the epoch, i.e., the **total epoch weight.** A smesher with 2x the weight will receive 2x the eligibilities in a given epoch. These votes are encoded into messages known as **proposals**, and smeshers receive rewards for successfully submitting valid proposals in their eligible slots.

At the beginning of each epoch, each smesher can calculate which layers in the epoch it's eligible to submit a proposal based on its smesher identity, the epoch number, and its weight in that epoch. The node prints this message in the logs every time it's started and fully synced:

```
2023-08-11T13:45:00.622-0400    INFO    abcde.proposalBuilder   proposal eligibility for an epoch       {"node_id": "abcde", "module": "proposalBuilder", "epoch_id": 2, "beacon": "e3e3389e", "weight": 141435, "min activeset weight": 5000000, "total weight": 305096691, "total num slots": 93, "num layers eligible": 93, "layers to num proposals": [{"layer": 8091, "slots": 1}, {"layer": 8179, "slots": 1}, {"layer": 8212, "slots": 1}, {"layer": 8215, "slots": 1}, {"layer": 8248, "slots": 1}, {"layer": 8306, "slots": 1}, {"layer": 8382, "slots": 1}, {"layer": 8389, "slots": 1}, {"layer": 8411, "slots": 1}, {"layer": 8432, "slots": 1}, {"layer": 8454, "slots": 1}...], "name": "proposalBuilder"}
```

In Smapp the same thing looks like this:

![image](https://github.com/spacemeshos/wiki/assets/3316532/b0d47343-f4d4-449e-af00-135b67ceff58)

When the layer where it's eligible arrives, after the Hare has finished, the node generates and broadcasts a proposal based on the Hare output. Assuming the proposal was constructed correctly and honestly (e.g., without equivocation), and the node includes a valid eligibility proof and broadcasts the proposal on time, then it (or, more precisely, its coinbase account) will receive a reward when the layer is confirmed and processed.
