---
id: advanced
title: Additional Advanced Topics
---

## Monitoring

The simplest and most straightforward way to monitor any running node, including a mining node, is using the [gRPC API](#api). You can use the `spacemesh.v1.NodeService.Status` to see the current status (number of connected peers, sync status, layer status), and you can use the `spacemesh.v1.AdminService.EventsStream` to follow events (such as proof creation and broadcast, eligibilities, etc.) (see [API](#api) for example commands).

It's also possible to do more sophisticated monitoring using [Prometheus and Grafana](https://prometheus.io/docs/visualization/grafana/). You can configure your own Prometheus data model, or use the out of the box model that `go-spacemesh` already supports. If you run the node with the `--metrics` flag (or set this in the [config](#config)), and optionally `--metrics-port`, then Prometheus can scrape metrics from the running node.

You can find community-contributed examples of both of these in [this list](https://github.com/lrettig/awesome-spacemesh/blob/main/README.md#monitoring).

## Increasing and Decreasing Storage

This topic is covered in the [PoST Initialization](./post_init#resizing-post) section.

## Very Large Identities

In general a miner is free to initialize as much or as little storage as she likes. However, miners with especially large identities may run into problems with [PoST proof generation](#proof-generation) as this requires sequentially reading all of the PoST data and additionally doing proof of work over the data. In the worst case, if the user selects a relatively low number of nonces (see next section), the node may get unlucky and need to perform this sequential read multiple times. All of this needs to fit into the PoET [cycle gap](#timing) (12 hours for mainnet) or else the miner risks being ineligible for an entire epoch and missing all epoch rewards.

Precisely calculating the maximum identity size that a system can support depends upon a number of variables: drive read speed, CPU power, the other applications running on the system, and the configured parameters (see next section). As a rule of thumb, we recommend that miners not use identities larger than about 4 TiB (i.e., 64 storage units). Given the average hard drive read speed, and assuming the miner is running on a reasonably powerful system, a miner with a 4 TiB identity should have ample time to read that identity twice, if necessary, and successfully generate a proof during the cycle gap in the vast majority of cases. It should also be noted that advanced miners have reported achieving significantly higher throughput speeds and, thus, being able to manage much larger identities using, e.g., large NVMe SSD drives and/or [RAID5](https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5) configurations.

For very large identities, it probably makes sense to split the identity into multiple smaller identities (again, 4 TiB is a good starting point, although the exact amount will depend upon the system and the miner's needs). Assuming these identities are stored on physically separate disks, and assuming the miner has a system that's powerful enough to run multiple nodes (i.e., the system resources are a multiple of the [required resources](#requirements) for a single node), she should have no trouble running multiple identities on a single system.

You may find math such as the following helpful: assuming you know the throughput (based on drive read speed and CPU hash throughput), it should take [a little over eight hours](https://www.wolframalpha.com/input?i=4TiB%2F%5B150MB%2Fsec%5D) to create a proof serially for a single 4TiB identity assuming a throughput of 150MB/s (normal for a modern HDD). Note that in this case, if the number of nonces isn't high enough (see next section) and the proof generation fails in the first pass, there won't be enough time to perform a second pass during the 12 hour cycle gap!

Such a miner should pay close attention to the contents of the [Fine-tuning Proving](#fine-tuning-proving) and [Identity Management](#identity-management) sections, as she'll need to generate and manage multiple identities, being sure to keep them separate and distinct and to [avoid equivocation](#avoiding-equivocation), and also to pick the appropriate proving parameters for her setup.

## Fine-tuning Proving

As a refresher, there are two stages to the process of proving storage so that a miner will be eligible for rewards on an ongoing basis: the [PoST initialization](#post-initialization-2), which only needs to be performed once, and the ongoing, regular [proofs of spacetime](#proofs-of-spacetime) that miners need to generate and broadcast each epoch. Generating a proof of spacetime requires that the miner perform a sequential read of all of their PoST data. Since it would be infeasible to transmit _all_ of the PoST data as a proof, in order to make the proofs succinct, Spacemesh instead requires miners to do a small proof of work each epoch by hashing their PoST data and looking for elements (known as **labels**) that pass a certain proof of work threshold. The proof itself consists of just the indices of the labels that pass the threshold.

The user may specify the number of CPU threads and nonces that are used in the proving process. The process itself is probabilistic: with 64 nonces the probability of creating a successful proof in a single pass is 79.39%; with 128 nonces it's 95.75%; and with 288 nonces it's 99.9%. Moreover the number of CPU threads must be set to balance disk read speed. For more information on this process, see [Proof of work and PoST proof generation](https://community.spacemesh.io/t/proof-of-work-and-post-proof-generation/361) in the Spacemesh research forum.

As described in the [Config](#config) section above, these parameters can be passed to `postcli` (as command-line arguments) and `go-spacemesh` (command-line arguments or via the config file). Advanced miners will need to run some benchmarks to determine the best values for their particular system. See the documentation for [the profiler tool](https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md) for more information.

## Identity Management

Each miner in Spacemesh has an identity, known as a miner ID or smesher ID. The ID is simply a 32-byte Ed25519 public key, which is commonly displayed in hexadecimal or base64 format. It should look something like `0x91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40` (hex) or `kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=` (base64).

Note: Miner identities have absolutely nothing to do with accounts or wallet addresses. Both are based on Ed25519 keypairs, but that's all they have in common. A miner also needs to specify a coinbase account to receive its rewards, but that coinbase account is not derived from the miner identity nor connected to it in any way. It can also be changed at any time. The miner identity **is connected** to its PoST data, however. PoST data generated for a given miner ID can never be used by another miner. Moreover, if a miner identity is lost or invalidated for equivocation, the associated PoST data becomes useless.

Tip: You can convert between these two formats using two simple command-line tools:

```bash
> echo "0x91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40" | xxd -r -p | base64
kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=
> echo "kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA=" | base64 -d | xxd -p -c 32
91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40
```

The first time the node runs it will create a new miner identity (if it doesn't see an existing one), which it stores in a file `<data dir>/identities/local.key`, by default `~/spacemesh/identities/local.key`. This file contains both the miner public and private keys. The private key is used to sign messages on behalf of the miner. It's critical both that this file be kept private (its contents should never be revealed or sent to anyone) and that it not be lost. If it's lost, just like a lost wallet there's absolutely no way to restore it, and the associated PoST data would become useless.

You can read the public key portion of the key file, i.e., the hexadecimal miner identity, as follows:

```bash
> cut -c 65-128 local.key
91b8db4fecd9cd5db953275fdefb0b8cdfb08954e9186d9dc6f86b2a81980d40
```

You can also read the identity from a running node via the API:

```
> grpcurl -plaintext localhost:9093 spacemesh.v1.SmesherService.SmesherID
{
  "publicKey": "kbjbT+zZzV25Uydf3vsLjN+wiVTpGG2dxvhrKoGYDUA="
}
```

A miner identity can be transferred from one system to another simply by moving the `local.key` file. However, it's essential that the same identity never be attached to two running miners at the same time in order to avoid equivocation (see next section).

A new identity can be generated by deleting or moving the `local.key` file and starting the node again, at which point a new identity will be created. `postcli` can be used to do the same thing.

## Moving PoST files

You can safely move PoST data from one directory to another, or from one system to another, as long as the data remain intact and you're careful to avoid equivocation (see next point). The miner identity used to create the PoST data is bound with the data and, thus, you must move the `local.key` file along with the rest of the data; the data is useless without the `local.key` identity file, and any attempt to use the same PoST data with a different miner identity will fail. There's nothing about the data that ties it to a particular system, architecture, or operating system; thus, it's also safe to move the data across systems.

We strongly recommend using a tool like [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories), which has built-in error checking and can resume a partial transfer, to move data both locally and remotely. You can use a command like the following to move data locally:

```bash
> rsync -avhz --progress /source/directory/ /destination/directory
```

You can use a command like the following to copy data from a remote host:

```bash
> rsync -avhz --progress user@hostname:/source/directory/ /destination/directory
```

(Note the use of trailing slashes; rsync is particular about these, and adding or removing a trailing slash can have unintended consequences.)

## Multiple Drives

At present it's not possible to naively split a single identity across multiple drives or filesystems. We hope to add this feature soon. In the meantime you have two possibilities: run multiple identities, or join multiple filesystems into a single logical filesystem at the hardware or OS level.

### Multiple Identities

Running multiple identities is explained in [Identity Management](#identity-management) and [Multiple Nodes](#multiple-nodes). This has the advantage that you don't need to mess with your filesystem configuration at all, and that you can [initialize](#post-initialization-2) and [generate proofs](#proof-generation) for each identity more easily in parallel. It has the downside that you need to run multiple nodes, which will consume multiples of the [required resources](#requirements) that a single node consumes. Also, since it's in the interest of the network to reduce the number of identities as much as possible, we'll be adding incentives for larger ATXs (generated by larger identities) and disincentives for many small ATXs. Please bear this in mind when you decide how many identities to run.

### Joining Filesystems

There are many ways to combine multiple, physical filesystems into a single "logical" filesystem and the best way to do this will depend on your hardware, your operating systems, you degree of technical expertise, and your needs. Some miners have had success with [RAID5](https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5); bear in mind that it's possible to run RAID in either [hardware or software](https://www.techtarget.com/searchstorage/tip/Key-differences-in-software-RAID-vs-hardware-RAID), with various tradeoffs. Linux users can rely on [LVM](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)), which has wide support in modern distributions.

This has the advantage that you can run a single node, rather than many, and that, if configured correctly, you may achieve much faster read speed (see [Very Large Identities](#very-large-identities)) than you can with a single drive. It has the disadvantage of requiring more configuring at the operating system and filesystem level; miners who aren't comfortable doing so may prefer to instead run multiple identities.

## State Managament

The node stores all of the network state in a [SQLite](https://www.sqlite.org/index.html) database called `state.sql` (along with a couple of auxiliary files) in the node's data directory:

```bash
> ls -1 data/7c8cef2b/state.*
data/7c8cef2b/state.sql
data/7c8cef2b/state.sql-shm
data/7c8cef2b/state.sql-wal
```

It's possible to explore the contents of this database to understand a node's view of the network, especially when the desired data isn't available via the API. First, two important notes about working with the state database:

**Note 1: Unlike the API, we make no guarantees that the state database schema will remain the same.** It will likely evolve over time. Thus, while it's perfectly okay to explore the state database for troubleshooting, we strongly recommend against building or deploying any production applications that rely on it.

**Note 2: Never, under any circumstances, modify the state of a running node.** Making even a small change runs the risk of totally corrupting the state database, which in the worst case would require that a node be resynced from scratch, a process that can take a long time (and during which time a miner node isn't eligible for rewards). As such, before even opening the state database, **make a copy of the file** and work with the copy only to make sure you don't accidentally modify the live database.

### Reading the State Database

There are multiple ways to read data from a SQLite database. We recommend either using the official [`sqlite3`](https://sqlite.org/cli.html) program, or else the cross-platform, open source UI alternative [DB Browser](https://sqlitebrowser.org/). If you open the state database in the DB Browser you should see something like the following:

![image](https://github.com/spacemeshos/wiki/assets/3316532/ad3eb4f3-af7b-49eb-8842-f46fe707f545)

The full extent of queries you can run against this database is beyond the scope of this document, but as a simple example, here's how you'd look up the coinbase associated with a given smesher, and thus find that smesher's rewards using the coinbase:

```sql
SELECT DISTINCT HEX(coinbase) FROM atxs WHERE HEX(id)="F353545DB955F5A359F406ACAB847408D40530A6782BE436553FE521033A42EC";
000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7
SELECT layer, total_reward FROM rewards WHERE HEX(coinbase)="000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7";
8090 | 266137048118
```

### Backing up State

It can be helpful to create snapshots or backup versions of a node's state so that data may be restored more quickly in case of corruption or failure (rather than needing to resync from scratch, which is time consuming). This process is very straightforward: just create a copy of the files shown above, i.e., the `state.*` files inside the node's data directory.

Due to SQLite's [atomic commit](https://www.sqlite.org/atomiccommit.html) feature it shouldn't be necessary to stop the node before taking a snapshot, but if you want to be extra careful you may do so.

Also note that [certain filesystems](https://serverfault.com/questions/307296/which-filesystems-offer-snapshot-functionality-for-users-to-recover-data) make snapshotting easier or even automatic.

### Clearing State

From time to time, such as if the state database becomes corrupt or if you simply want to resync your node from genesis, it becomes necessary to clear the state entirely. In order to do this, you should:

1. Stop the node. Ensure that it's exited cleanly and completely.
1. Remove the files shown above, i.e., the `state.*` files inside the node's data directory. Note: don't remove the other contents of the data directory as it also contains, e.g., P2P data.
1. Restart the node. You should see it begin to sync from genesis.

### Copying State

There's no "private" data, i.e., data that's specific to one miner or one node, in the state database. This means that you can copy one trusted node's database to another node as a quick-and-dirty "quick sync" option, rather than letting the nodes sync the old fashioned way. To do this:

1. Make sure both nodes are running the same version of go-spacemesh.
1. Stop **both nodes.** Ensure that they've exited cleanly and completely.
1. Remove the state files entirely from node B, i.e., the destination node, by following the instructions above.
1. Copy the same files, i.e., the `state.*` files inside the data directory of node A (i.e., the source node) to the data directory of node B. It's safe to do this from one system to another even if the two systems are on different architectures or different operating systems.
1. Restart both nodes.

Note: by directly copying the state database you bypass the protections in the protocol and the node that would prevent your node from accepting bad state or bad transactions. For this reason it's essential that you **only copy the state from a trusted node,** i.e., a node that you run yourself, and that you **never blindly accept state data from a third party.** Otherwise, you may end up with corrupt or incorrect state.


## Log Management

Smapp automatically manages logs for a running node: it compresses and rotates logfiles when they grow large. The node log appears in the Smapp data directory:

- `~/Library/Application Support/Spacemesh` on macOS
- `~/.config/Spacemesh` on Linux
- `~\AppData\Roaming\Spacemesh` on Windows

If you're running `go-spacemesh` directly, you're responsible for log management. As described above, we strongly recommend running the node as a [system service](#system-service) on your operating system. Different operating systems and different service managers have different ways of managing logs; you can read about [how Systemd manages journals on Linux](https://www.loggly.com/ultimate-guide/linux-logging-with-systemd/), for example.

You may find a command such as the following helpful to both display the running node logs and also save them to a file:

```bash
> go-spacemesh -c config-file.json |& tee logfile.txt
```

One more note about logs: by default, the log level is set to `INFO` for all node services, in order to keep logfiles manageable. Setting the log level to `DEBUG` for one or more services can be helpful for troubleshooting. You can accomplish this by adding a `logging` section to your config file, as such:

```
  "logging": {
    "atxBuilder": "debug",
    "block-builder": "debug",
    "block-listener": "debug",
    "nipostBuilder": "debug",
    "poet": "debug",
    "post": "debug",
    "p2p": "error",
    ...
  },
```

For the full list of services, see [`config/logging.go`](https://github.com/spacemeshos/go-spacemesh/blob/develop/config/logging.go).

## PoST Metadata

The PoST data directory contains a file called postdata_metadata.json that contains metadata related to the identity and data files:

```
> cat ~/post/7c8cef2b/postdata_metadata.json
{
        "NodeId": "3hcrKr45D5H8GrRikkZMztvKjvQpviUwVqRVMgh0jqk=",
        "CommitmentAtxId": "nuv/Ajq7F8y3dcYC2q3o7XCPClDTFJpCgBGE9bdPKGU=",
        "LabelsPerUnit": 4294967296,
        "NumUnits": 15,
        "MaxFileSize": :4294967296,
        "Nonce": 34659695032,
        "NonceValue": "0000000006db3dc6d84ff41b8acb588d"
}
```

In general you should never touch this file or change any of these values, other than when combining data from a [parallel initialization](#parallel-initialization), which requires manually finding the lowest nonce.

It's _never safe_ to change the `NodeId`, `CommitmentAtxId`, `LabelsPerUnit`, or `MaxFileSize` values. If you increase `MaxUnits` and run `postcli` or `go-spacemesh`, it'll continue PoST initialization and generate more files; this is safe to do unless/until your miner has already generated and broadcast an ATX, after which it cannot be changed. If you decrease `MaxUnits` and run `postcli` or `go-spacemesh`, they will delete existing files to match the config value.

It's always safe to change the `Nonce` and `NonceValue` to any valid values, even after generating and broadcasting an ATX. If, for instance, you discover that you hadn't configured the lowest nonce, you can add it later. Note that this will have no impact upon rewards; it's just future-proofing in case you change the PoST size in future (once this is allowed). See [Searching for a lost VRF nonce](https://github.com/spacemeshos/post/tree/develop/cmd/postcli#searching-for-a-lost-vrf-nonce).

Note that this nonce value, known as a VRF Nonce, has nothing to do with the nonce value [used in proving](#fine-tuning-proving). The VRF Nonce is used to help determine when your node is eligible to participate in block proposal and the Tortoise beacon.

## Cloud GPU

Miners without local access to a GPU may choose to instead perform GPU initialization remotely using one or multiple (see next section) GPUs. This can be done using the infrastructure of any cloud compute provider that offers a modern GPU platform. Note that cloud providers that specialize in GPUs and other types of high-performance computing will often offer better prices and tooling than general-purpose cloud compute platforms like Azure, AWS, or GCP. While we cannot vouch for any particular provider and have no affiliation with any such provider, in our testing we've had particular luck with [Runpod](https://www.runpod.io/) and have also heard good things about [Coreweave](https://www.coreweave.com/) and [Vast](https://vast.ai/).

As a rule of thumb, you'll want access to an instance that:

- has a modern GPU (e.g., RTX 3090 or 4090; see [Requirements: PoST Initialization](#post-initialization-1))
- has plenty of storage, around 10% more than you plan to initialize (e.g., if you plan to initialize 1 TiB of PoST storage, we recommend choosing an instance with at least 1.1 TiB)
- has a very fast Internet connection with plenty of bandwidth
- doesn't charge a lot for data egress

Most GPU providers simply run a docker container for you. You may find [this barebones image](https://hub.docker.com/r/lrettig/nvidia-opencl) useful; you can use it as `docker.io/lrettig/nvidia-opencl:latest` in a cloud host, and you can find the [Dockerfile here](https://github.com/lrettig/spacemesh-nvidia-opencl/blob/main/Dockerfile). It simply installs the packages required for OpenCL on Ubuntu and then downloads [`postcli`](https://github.com/spacemeshos/post/releases). Here is [an alternative](https://github.com/smeshcloud/nvidia-cuda-opencl/blob/main/Dockerfile).

Bear in mind that generating the PoST files is only half the battle; you also need to download them! Some providers charge a lot for data egress, which can get expensive quickly when downloading many terabytes of data. And, in order to move the data in a reasonable amount of time, you'll want to find a cloud instance with plenty of bandwidth, ideally more than 1gbit/sec. Any slower than this and you'll wait forever to download the files. Be wary of "community" run nodes on cloud marketplaces such as Runpod and Vast since while they may be cheaper these often don't have the requisite bandwidth.

As [described above](#moving-post-files), we recommend using a utility with features such as error checking and resume like rsync to download files. rsync works well as long as you have `ssh` access to the cloud host. Here's a sample rsync command that uses an ssh identity file and connects to a particular remote port:

```bash
> rsync -e "ssh -i ~/.ssh/id_ed25519 -p 22164" -avhz --progress user@host:/source/directory/ /destination/directory
```

Remember that you can begin downloading the PoST data files before initialization is complete! Just run rsync again after it finishes or, better yet, run it in an automatic loop to maximize efficiency:

```bash
> while true; do
rsync -e "ssh -i ~/.ssh/id_ed25519 -p 22164" -avhz --progress user@host:/source/directory/ /destination/directory
sleep 300
done
```
