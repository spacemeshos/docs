---
id: poet
title: PoET Servers
---

As described in our introduction to [Proof of Elapsed Time](./../../../learn/poet.md), the Spacemesh protocol depends for security not only upon committed _disk space_ but also _elapsed time_ (the time dimension in proofs of spacetime). For the time component, miners rely on a third-party service called a PoET ("proof of elapsed time") server.

Note: Anyone can run their own PoET server, but this is non-trivial, expensive, and requires specialized hardware and devops. More importantly, a single PoET server can serve proofs to thousands of miners. Since the PoET server performs intensive, expensive computation on behalf of the miners it serves, and since a miner only needs a single PoET proof for a given epoch, it's more efficient and less energy intensive to run a small number of PoET servers rather than having each miner run their own.

In general miners don't need to think very much about PoET servers. The node (whether running Smapp or `go-spacemesh` directly) manages the process of discovering PoET servers, registering with them, and retrieving proofs when they're ready. The node is also intelligent enough to register with many PoET servers redundantly so that if one server goes offline, it'll still be able to retrieve a proof from another PoET server.

## Ticks and Weight

Miners establish eligibility to submit proposals and thus earn rewards by bundling their proofs of spacetime into a data structure known as an ATX. As also [described above](#atxs-and-weight), each ATX has a certain **weight** which is simply calculated as the number of storage units proven multiplied by the tick count from the PoET proof (as a proxy for time). Rewards earned by a miner in a given epoch are ultimately proportional to the weight of their ATX targeting that epoch. Thus, if a miner uses a PoET proof with fewer ticks, it'll earn proportionally fewer rewards for at least the duration of one epoch; the reverse is also true.

Note that, in addition to retrieving proofs from multiple PoET servers, the node is also intelligent enough to use the proof with the highest tick count to ensure that it maximizes its rewards.

## Timing

The Spacemesh team currently operates several production PoET servers for public use. (Their addresses are hardcoded into the `poet-server` section of the [mainnet config file](#config)):

These PoET servers all operate on exactly the same schedule. In order to establish eligibility for epoch N, a miner must register with a PoET round in epoch N-2, then retrieve the PoET proof, use it to generate a PoST proof, bundle this into an ATX, and submit it to the network prior to the end of epoch N-1. The Spacemesh PoET servers start a new round at 8:00 UTC the second Monday of an epoch, i.e., four days prior to the end of the epoch. This round concludes 13.5 days later, at 20:00 UTC on Sunday. There's subsequently a 12 hour "cycle gap" during which no PoET round is running, after which the next PoET round kicks off and the cycle repeats itself. During this 12 hour window, all mining nodes must retrieve their PoET proof from a PoET server, use it to generate a PoST proof, bundle this into an ATX, broadcast the ATX to the network, and then register with the PoET again in order to maintain continuous eligibility.

This schedule is admittedly confusing; you may find [this unofficial calendar](https://calendar.google.com/calendar/u/0/embed?src=8895d862c4a9ac22c8da2dafd9c618cd47e5c2d22905f920b1231a3b02aacd62@group.calendar.google.com) and the header graphic in [this blog post](https://spacemesh.io/blog/genesis-timeline/) helpful in visualizing it. To reiterate, in most cases miners don't need to concern themselves with the PoET schedule since their node will handle everything for them. The most important thing is that the node remain running and online throughout the epoch so that PoET windows aren't missed and continuous eligibility is maintained.

Note that in future it's likely that, rather than all PoET servers running in identical phase, there will be PoET servers running in different phases, possibly also with different cycle gap lengths, to accommodate miners that need more time to generate a PoST proof or that simply miss a PoET registration window.

## Running a PoET Server

As with the rest of Spacemesh infrastructure, the PoET server is [open source](https://github.com/spacemeshos/poet) and permissionless. Anyone may run their own PoET server for personal or community use.

For more information see the [PoET Operator Manual](https://github.com/spacemeshos/poet/blob/develop/docs/poet_operator_manual.md) and feel free to ask questions on the [#poet channel](https://discord.com/channels/623195163510046732/1151165793590050867) on Discord.

## Updating the configuration of a node to use different PoETs

Spacemesh users are free to use any PoET they want to. You can add PoETs to the existing list of your nodes configuration or even completely replace it with another set of PoETs.

Adding a PoET with the same phase as the node is currently using simple; stop the node, update the configuration by adding the new PoET to the list of existing PoETs (and remove any you wish not to use), then start the node again. When the next PoET round starts the node will start using the new set PoET as given by its configuration.

### Switching phase

If you wish to switch to one or multiple PoETs that operate on a different phase then the default set of PoETs ensure
that your node and the PoET(s) you are using have the following configuration parameters set to the same values:

- `"phase-shift"`: gives the time that a new PoET round starts relative to the beginning of an epoch. For the default
  set of PoETs this value is 240 hours. Lower values mean that nodes starting to use your PoET have to wait longer before
  they become eligible to collect rewards, higher values mean that nodes have less time after fetching a PoET proof to
  publish their ATX to be eligible to collect rewards.
- `"cycle-gap"`: gives the time between the end of a PoET round and the start of a new one. Larger values give nodes
  more time to generate a PoST proof - since this has to happen within the cycle gap to not miss an epoch. Smaller values
  gives the PoET more time to generate its proof and collect more ticks. For the default set of PoETs this value is
  12 hours.

Additionally you should ensure that a custom PoET has the same `"genesis-time"` and `"epoch-duration"` as mainnet
(`"2023-07-14T08:00:00Z"` and 336 hours respectively).

For a step by step instruction see [Timing a phase switch](#timing-a-phase-switch).

### Timing a phase switch

Switching phase bears the risk of missing a PoET round and thereby forfeiting your eligibility to collect rewards in an
upcoming epoch. To mitigate this risk you should time your phase switch and follow these steps:

1. Wait until the end of the PoET round of the phase you are currently using.
   If you are using the default PoETs this would be every second Sunday (e.g. Feb 5th, 2024) at 20:00 UTC.
2. Your node will fetch the PoET proof(s) for all PoETs it successfully registered for.
3. Wait until your node has finished generating a PoST proof and published an ATX (check logs for `ATX published`).
4. Stop the node.
5. Update your node configuration by replacing the PoET(s) in your `config.json` with the new one(s).
   Make sure that all PoETs you are using have the same phase and cycle gap and that you also update the
   `"phase-shift"` and `"cycle-gap"` settings in your config accordingly.
6. If you do not have sqlite installed on your system, install it now.
   On Windows you can download it from [here](https://www.sqlite.org/download.html), you will need `sqlite-tools-win-x64`.
   On Ubuntu you can install it with `sudo apt install sqlite3`.
   On macOS you can install it via Homebrew with `brew install sqlite3`.
7. Delete the contents of the tables `poet_registration` and `nipost`:

    ```bash
    > sqlite3 <node_config_directory>/node_state.sql
    sqlite> delete from poet_registration;
    sqlite> delete from nipost;
    sqlite> .quit
    ```

8. Start the node again.

If the new phase has not started yet your node will register at the new PoET(s) immediately and fetch a PoET proof in
time to be eligible to collect rewards in the next epoch. If by the time you restarted your node the new phase has already
started your node will register at the new PoET(s) in the next epoch and you will miss one epoch of rewards (the second
next epoch).

***Note***: Before v1.3.x PoET registration state was stored in a file called `nipost_challenge.bin` and `nipost_builder_state.bin`
in the node's PoST data directory. If you are using a node version older than v1.3.x you will have to delete these files
instead of the sqlite tables (steps 6 and 7).
