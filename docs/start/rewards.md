---
id: rewards
title: How Rewards Work
---

In Spacemesh, smeshers earn rewards for successfully proving eligibility and submitting valid block proposals to the network during their designated eligibility slots. Note that, at present, the only behavior that is rewarded is the submission of block proposals. However, in the future, we intend to additionally incentivize other useful behavior such as participating in the Hare consensus.

As with many other blockchain networks, rewards consist of two components:

- **Block subsidy** (i.e., coins newly minted by the protocol)
- **Transaction fees**

While we expect transaction fees to increase and form a larger percentage of rewards over time, at this early stage in the network lifecycle, the vast majority of rewards (more than 99.99%) comes from block subsidies. As such, the remainder of this analysis will ignore transaction fees for the purpose of estimating rewards.

## Estimated Rewards

Three factors are necessary to calculate a smesher's estimated rewards:

- The smesher's **weight** in a given [epoch](./integration.md#time)
- The **total network [weight]** in the epoch
- The **per-layer subsidy.**

A smesher's [weight](../learn/atx.md#we) in a given epoch (as encoded in the [ATX](../learn/atx.md) they submitted to establish [eligibility] for the epoch) is simply the number of space units (SUs) allocated times the number of PoET ticks. For instance, a smesher with 4 SU (the minimum) and a PoET proof with 100k ticks would have a weight of 400k.

The total network weight is (as the name suggests) the weight of _all_ eligible smeshers in the same epoch. A smesher's **relative weight** is the weight of their ATX in a given epoch divided by the total network weight in that epoch. Currently, there is not any easy way to retrieve total network weight, but given that at present nearly all smeshers are using the same [PoET](../learn/poet.md) proof or a PoET proof with a similar number of ticks, it can be estimated by dividing the smesher's total committed storage by the total network storage (as displayed on the [Network Dashboard](https://dash.spacemesh.io/)). For instance, a smesher with 1TiB of storage of a network that's 18 PiB has 1/18000 = 5.6<sup>-5</sup> of the total network space.

The final piece of the puzzle is the per-layer reward. This decays gradually from layer to layer. The simplest way to see the current value is to check [LAYERS](https://explorer.spacemesh.io/layers) in the Explorer. As of [layer 130271](https://explorer.spacemesh.io/layers/130271), 465.387 SMH are being minted as a subsidy in each layer. Multiply this by the number of layers per epoch (4032) to get the approximate total new coin issuance per epoch: for epoch 32 this is roughly 4032 * 465.387 = 1,876,440 SMH.

Finally, to calculate a smesher's estimated rewards for a given epoch, simply multiply the smesher's relative weight by the total epoch issuance. A smesher with 5.6<sup>-5</sup> of the total weight would be expected to earn around 5.6e-5*1921707 = 107 SMH in this epoch.

Note: It is possible to read more precise values from a node's state database (see below). This sample SQL query will give you the total weight for an epoch:

```sql
SELECT SUM(effective_num_units*tick_count) FROM atxs WHERE epoch=2;
781394721
```

And this query will give an individual smesher's relative weight:

```sql
SELECT 1.0*atxs.effective_num_units*atxs.tick_count/total_weight.weight
  FROM atxs,
       (SELECT SUM(effective_num_units*tick_count) weight FROM atxs WHERE epoch=2) AS total_weight
  WHERE hex(atxs.id) = '1281641D519CCC57F38C38294BB873A60367DB71AD0FA8DFBD146A55FD60626C' AND atxs.epoch=2;
0.000519591429387197
```

Some smeshers may find community-run tools like [Spacemesh Calculator](https://www.spacemeshcalculator.com/) helpful in doing this math. However, we cannot vouch for their correctness.

## Eligibility Slots

Every eligible smesher has one or more eligibility slots per epoch during which they are eligible to produce a [block proposal](../learn/atx.md#block-proposals) and thereby earn a reward. Every smesher with at least the minimum storage (4 SUs) committed is guaranteed at least one slot per epoch. There are 50 slots per layer (i.e., on average 50 proposals per layer) or 201,600 slots per epoch. The slots are assigned randomly and unpredictably at the start of the epoch so that even the smesher cannot know their own eligibility slots before the epoch starts. You can calculate the estimated number of slots for a given smesher using similar math to the above: multiply the smesher's relative epoch weight by 201,600 with `floor=1`.

There are several ways to see a smesher's actual eligibility slots for a given epoch. The node prints its eligibilities in the log at the beginning of an epoch. Consider the following, for example:

```JSON
2023-08-11T13:45:00.622-0400    INFO    abcde.proposalBuilder   proposal eligibility for an epoch       {"node_id": "abcde", "module": "proposalBuilder", "epoch_id": 2, "beacon": "e3e3389e", "weight": 141435, "min activeset weight": 5000000, "total weight": 305096691, "total num slots": 93, "num layers eligible": 93, "layers to num proposals": [{"layer": 8091, "slots": 1}, {"layer": 8179, "slots": 1}, {"layer": 8212, "slots": 1}, {"layer": 8215, "slots": 1}, {"layer": 8248, "slots": 1}, {"layer": 8306, "slots": 1}, {"layer": 8382, "slots": 1}, {"layer": 8389, "slots": 1}, {"layer": 8411, "slots": 1}, {"layer": 8432, "slots": 1}, {"layer": 8454, "slots": 1}...], "name": "proposalBuilder"}
```

The `EventsStream` API stream prints the same information:

```bash
> grpcurl -d "{}" -plaintext localhost:9093 spacemesh.v1.AdminService.EventsStream
...
{
  "timestamp": "2023-09-13T19:35:00.658169226Z",
  "help": "Computed eligibilities for the epoch. Rewards will be received after publishing proposals at specified layers. Total amount of rewards in SMH will be based on other participants in the layer.",
  "eligibilities": {
    "epoch": 4,
    "beacon": "nhiDhQ==",
    "atx": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "activeSetSize": 16582,
    "eligibilities": [
      {
        "layer": 19048,
        "count": 1
      },
      {
        "layer": 19460,
        "count": 1
      },
      {
        "layer": 18839,
        "count": 1
      },
```

In Smapp, the same thing looks like this:

![image](https://github.com/spacemeshos/wiki/assets/3316532/be77ccd8-ab5f-4763-8a98-8c37f606241e)

In order to successfully earn a reward for a given eligibility slot, a smesher has to be running up-to-date software, has to be online and fully synced, and has to successfully generate and broadcast a proposal during the slot. The actual, final reward that is earned in a given slot depends upon the behavior of other eligible smeshers in the same slot. If an eligible smesher fails to submit a proposal, that smesher's portion of the reward is distributed to the eligible smeshers who were able to successfully publish proposals.

## Earned Rewards

Smapp displays actual earned rewards on the SMESHING screen:

![image](https://github.com/spacemeshos/wiki/assets/3316532/fb1ce5fa-fac5-4f36-9ef8-e22988487ce4)

Earned rewards are also available [in the explorer](https://explorer.spacemesh.io/accounts/sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g/rewards). Finally, actual rewards for a given coinbase (the address to which the reward tokens are sent) address can also be fetched via the command line using the Spacemesh API:

```bash
> grpcurl -plaintext -d "{ \"filter\": { \"account_id\": { \"address\": \"sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g\" }, \"account_data_flags\": 2 } }" 127.0.0.1:9092 spacemesh.v1.GlobalStateService.AccountDataQuery
{
  "totalResults": 128,
  "accountItem": [
    {
      "reward": {
        "layer": {
          "number": 8203
        },
        "total": {
          "value": "17127640416"
        },
        "layerReward": {
          "value": "17127640416"
        },
        "coinbase": {
          "address": "sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g"
        }
      }
    },
    {
      "reward": {
        "layer": {
          "number": 8219
        },
        "total": {
          "value": "14085313144"
        },
        "layerReward": {
          "value": "14085307220"
        },
        "coinbase": {
          "address": "sm1qqqqqqzgxd05fhulhhtqyl2s8tqsmg4wvhyvwagag395g"
        }
      }
    },
...
```

You may also find this community-run [SpaceMesh Lamba Chunks](http://fcmx.net/sm-eligibilities/) visual reward tracker useful. Simply copy your eligibility info from your log file (grep for "proposal eligibility for an epoch" in your log) and paste it into a Node to see a visual representation of all past eligibility slots and rewards, along with upcoming eligibility slots. It should look something like this:

![image](https://github.com/spacemeshos/wiki/assets/3316532/3dd5d040-f65c-46ba-9b8a-d35756f10244)

## Missed Rewards

If your node is offline or not fully synced when an eligible slot arrives, it may fail to produce a proposal and thus miss the reward for the slot. If a proposal is produced or gossiped too late, or not received by enough other nodes in time, it may not be included in the canonical block and thus the slot reward may be missed. Note that this has no bearing whatsoever upon future eligibility slots and that the protocol does not allow a smesher to subsequently "earn back" lost rewards.

In such a scenario, the coins that the smesher would have received will instead be allocated proportionally (i.e., by weight) to the other eligible smeshers that successfully produced proposals in the same slot. By far, the most common cause of missed rewards is node updates. Therefore, we strongly encourage you to closely track your eligibility slots and not restart or upgrade within 2-3 layers before an upcoming eligibility slot (so that the node has a chance to fully initialize and sync in time).

There are also rare scenarios when no proposals are produced at all for a given layer (e.g., when the [Hare](../learn/hare.md) mechanism fails due to a network issue such as many smeshers temporarily being offline. In these scenarios, which are usually short-lived, no proposals are produced at all, a layer will have no block and no transactions, and no rewards will be issued. In this case, the coins that would have been issued as part of the layer subsidy simply fail to get minted (i.e., they will never exist, will never enter circulation, and for all intents and purposes, may be considered burnt).

## Reward Lifecycle

The end-to-end reward lifecycle works as follows:

1. The smeshing node performs [Proof of Space (PoS) initialization](../learn/post.md#proof-of-space).
1. The smeshing node generates its initial [Proof of Space-Time (PoST)](../learn/post.md#generating-the-proof).
1. The smeshing node registers with the [Proof of Elapsed Time (PoET) Server](../learn/post.md#proof-of-elapsed-time).
1. The smeshing node receives the PoET from the PoET server and uses it to [generate the PoST](../learn/post.md#proof-of-space-time) (proving that it still has the data).
1. The smeshing node bundles the PoST into an ATX and submits it to the network to establish eligibility in the following epoch (the epoch after the upcoming one).
1. The new epoch begins. The smeshing node calculates its eligibility slots for the epoch based on the active set (i.e., the set of all valid ATXs targeting the current epoch) and the random beacon (a random value unknown to the smesher in advance). If this step is successful, the smeshing node gets the IDs of the layers in which it can submit a block proposal.
1. The smeshing node participates in the gossip normally and follows the network, remains in sync, periodically joins a Hare committee, etc.
1. When an eligibility slot (layer) arrives, the smesher generates a block proposal based on its view of the network. The block proposal consists of all the valid transactions the node has collected into its mempool. The node signs the block proposal and broadcasts it to the rest of the network.
1. A few seconds later, the [Hare protocol](./../learn/hare.md) runs for the layer. A random committee of nodes is picked to come to a consensus on the canonical set of valid proposals for the layer (i.e., those received on time and with valid eligibility proofs) and they are collated into a new block. Assuming the smeshing node's proposal is valid and was received on time, it should be included in the new block.
1. A few minutes later, the new block is confirmed by the [Tortoise protocol](./../learn/tortoise.md) and its contents become a part of the canonical mesh. Rewards are paid to all smeshers that participated in the construction of the block by submitting valid, timely proposals.

Note that the above describes the "happy" flow. Many things can happen to interfere with this process or slow it down. Proposals may not be gossiped or received on time, in which case a block still be created from the valid proposals that were received on time. If enough nodes are not online to select a Hare committee, Hare may fail, which would temporarily result in empty layers (i.e., layers without blocks), until nodes come back online and a Hare quorum can be re-established.

## Further Reading

For more information on rewards, prohibited behavior, and punishments, consider reading [this resource](./../learn/rewards.md).
