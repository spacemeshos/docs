
---
id: post_1n
title: Managing Multiple PoST Services On A Single Node
---

# Guide To Managing Multiple PoST Services On A Single Node


## Introduction

This guide is your roadmap to efficiently managing multiple Proof of Space-Time (PoST) services using just a single node. With the Spacemesh protocol's latest advancements, it's now possible to extend a node's capabilities beyond the previous one-identity-per-node model. It means users can streamline their operations, reduce overhead, and increase their participation in the network without multiplying their hardware or maintenance efforts. This approach requires only one database for all identities, reducing local storage needs and minimizing data broadcasted or fetched from the network. It not only simplifies the lifecycle management of multiple identities but also enhances operational efficiency and network performance. Whether you're looking to add new identities, consolidate existing services, or simply optimize your setup for possibly greater rewards, you're in the right place.

## Getting Started

Before diving into managing multiple PoST services on your node, ensure you have the following aspects covered.

### Prerequisites

1. **Familiarity With CLI Operations:** Basic knowledge of command-line interfaces (CLI) and blockchain concepts.

2. **System Specifications:** Ensure your system meets the recommended hardware specifications for running multiple PoST services, including sufficient storage and processing power, as well as OpenCL support.

### Initial Setup And Configuration

1. **Spacemesh Node Setup:** Ensure your Spacemesh node is operational, utilizing the latest release supporting multiple PoST services (1.4.x series or newer). For detailed setup instructions, refer to the [go-spacemesh documentation](https://github.com/spacemeshos/go-spacemesh/blob/develop/README.md).

For this feature setup process, make sure your node is not smeshing. You should specify in your config:

```json
"smeshing": {
    "smeshing-start": false
}
```

2. **Software Requirements:** The latest versions of `postcli` and `post-service` from the Spacemesh GitHub repository.

3. **Your Case:** Gather info and organize all your node and PoS data paths, POST services configs and details, and hardware access if necessary.

For the sake of conciseness, we assume you have:

- `node-data` in `./node_data` (specified by `--data-folder` argument).
- `./node_data/identities/` directory (create it if it doesn't exist)
- PoS data in: `./data1/` and `./data2/` directories

## Adding New Identities And PoST Services

### Procedure Overview

Adding new identities and PoST services involves initializing PoST data for each new identity with specific parameters using `postcli`. This process generates a new private key, so a new identity.

### Detailed Steps

1. **Initialized PoST Data** : We assume that the data is already intialized. If it's not the case yet then please visit [docs for that](https://docs.spacemesh.io/docs/start/smesher/post_init).

2. **Store The Private Key** : Upon initialization, `postcli` generates a new private key stored as `identity.key` in the PoST data directory. This key should then be moved to your `./node_data/identities/` directory, renamed for unique identification.

3. **Configure The PoST Service** : Set up the `post-service` with the newly initialized data, ensuring it's configured to connect to your node. This step integrates the new identity with your node's operational framework.

## Migrating Existing Identities/PoST Services

### Migration Strategy

Consolidating your Spacemesh identities / PoST services onto a single node streamlines operations and enhances efficiency. The key to a successful migration lies in safely transferring identity keys and PoST data to your chosen node, ensuring no identities are active on more than one node simultaneously to prevent equivocation (the act of a node signing two different blocks at the same layer, which is considered malicious) and being permanently banned and disqualified for rewards.

### Step-By-Step Migration

1. **Preparation** : Before starting, stop all operations on your current nodes to ensure data integrity during the migration. Make sure that all nodes _were_ running in latest version of Spacemesh newer or equal 1.4.0. This is crucial to avoid any potential issues with the migration process. Nodes that were running 1.3.x series **only** cannot be migrated directly.

2. In the go-spacemesh release you'll find `merge-node` tool. It's a tool that allows you to merge two or more nodes into one. Currently it assumes all or nothing during merging.

Run it with the following command:

```bash
./merge-node --from <source_path> --to <target_path>
```

Where: `source_path` is the path to the node data you want to merge from and `target_path` is the path to the node data you want to merge to.

:::note

It is possible to merge nodes by hand too

- Locate the `identity.key` files within the PoST data directories of each node.
- Copy these files to the `./node_data/identities` directory on the node you're consolidating to.
- Rename the key files respectively for easy identification of each identity.
- Run: `sqlite3 target_node.sql` where `target_node.sql` is the database file of the node you're consolidating to.

```attach '<source_path.sql>' as srcDB;
BEGIN;
insert into initial_post select * from srcDB.initial_post;
insert into challenge select * from srcDB.challenge;
insert into poet_registration select * from srcDB.poet_registration;
insert into nipost select * from srcDB.nipost;
COMMIT;
detach srcDB;
```

It is however recommended only for advanced users as it does not cover all the corner cases and may lead to data corruption.

:::

3. **Configure PoST Services** :

- For each identity, set up a PoST service that utilizes the existing PoST data linked to that identity. This ensures the node can continue to participate in the network without redoing the PoST.
- Detailed configuration steps can be found in the `post-service` [README](https://github.com/spacemeshos/post-rs/blob/main/service/README.md), guiding you through connecting each PoST service to your node.

## Operational Guide

:::warning

This is just example, in real world you should use some kind of process manager like `systemd` or `supervisord` to manage your services. Or use some kind of orchestration tool like `kubernetes` or `docker-compose`.

:::

### Starting And Stopping PoST Services

For the prerequisites and initial setup, visit `post-service` [README](https://github.com/spacemeshos/post-rs/blob/main/service/README.md).

To start the PoST service, follow these steps:

1. Create a directory for post-service and put there the most recent post **service** release from [post-rs repository](https://github.com/spacemeshos/post-rs).
2. Prepare command arguments. Remember to `cd` to the correct directory and `chmod` service file. Then you will need to run the post service with the following arguments:

   ```shell
   ./service --address=http://localhost:9094 --dir=../data1 --operator-address=127.0.0.1:50051 --threads=1 --nonces=128 --randomx-mode=Fast
   ```

   - `--address`: Points to the node's gRPC address. Ensure it matches the `grpc-post-listener` config option.
   - `--dir`: Specifies the directory of PoST data. Adjust the path according to your setup.
   - `--operator-address`: The address for the simple operator API. Change port numbers as needed for your environment. If it's not specified, it will be disabled.
   - `--threads`, `--nonces`, `--randomx-mode`: Configuration options specific to the post service, not the node.

3. Enable debug logs (Optional): For additional logging, set the `RUST_LOG` environment variable to `DEBUG`:

```sh
export RUST_LOG=DEBUG
```

4. Start the service: Run the command prepared in Step 2. Upon starting, the service will log its configuration and connection attempts to the node. Successful logs will look like this:

```plaintext
[INFO  service] POST proving settings: PostSettings { threads: 1, nonces: 128, randomx_mode: Fast }
[INFO  service] not configuring TLS
[DEBUG post_service::client] connecting to the node on http://localhost:10094/ (attempt 1)
```

These messages indicate that the PoST service is correctly configured and has started.

### Stopping PoST Services

To **stop** a PoST service, typically, you would terminate the process using your operating system's standard procedure for stopping applications. For services running in a container or through a managed service, use the appropriate command or interface provided by the environment to safely stop the service. Otherwise, you can follow these steps:

1. Identify the process: Use a process management command like `ps` to find the process ID (PID) of the post service. You can filter the results using `grep`:

   ```sh
   ps aux | grep service
   ```

2. Terminate the process: Once you've identified the PID, use the `kill` command to stop the service:

```sh
kill [PID]
```

Replace `[PID]` with the actual process ID of your post service. If the service does not terminate gracefully, you can use `kill -9 [PID]` to force it to stop.

## General Tips

#### Configuration Flexibility

You can adjust the PoST service configuration (e.g., `--threads`, `--nonces`, `--randomx-mode`) based on your hardware capabilities and preferences.

#### Multiple Directories

If you have multiple `./dataN` directories, repeat the starting process for each, adjusting the `--dir` argument accordingly.

#### Service Management

Feel free to start, stop, or restart PoST services at any time based on your needs. However, the node should remain running continuously for the system to function properly. Each PoST service exposes operator-api you can use it to query it's state and to stop it.

```
# Not doing anything
❯ curl http://localhost:50051/status
"Idle"

# Proving
❯ curl http://localhost:50051/status
{"Proving":{"nonces":{"start":0,"end":128},"position":0}}

# Proving, read some data already
❯ curl http://localhost:50051/status
{"Proving":{"nonces":{"start":0,"end":128},"position":10000}}

# Started second pass
❯ curl http://localhost:50051/status
{"Proving":{"nonces":{"start":128,"end":256},"position":10000}}

# Finished proving, but the node has not fetched the proof yet
❯ curl http://localhost:50051/status
"DoneProving"
```

More info about oprerator API can be found in the [post-rs repository](https://github.com/spacemeshos/post-rs/blob/main/service/README.md#operator-api).

Before stopping a post service with `DoneProving` state you need to make sure that node fetched the proof. You can check it by running `grpcurl` command:

```bash
grpcurl --plaintext localhost:9094 spacemesh.v1.PostInfoService.PostStates
```

if given post service is `PROVING` then you should NOT stop it.

### Verifying the setup

After adding or migrating identities and PoST services, verify they're correctly connected to your node and eligible for rewards by monitoring the node's Events. Look for indicators of successful identity recognition and PoST data validation. For example you can list the Post states with:

```bash
grpcurl --plaintext localhost:9094 spacemesh.v1.PostInfoService.PostStates
```

you can also query

```bash
grpcurl -plaintext 127.0.0.1:9093 spacemesh.v1.Smesher.SmesherIDs
```

to list the configuered SmesherIDs.

### Node Events

Method `spacemesh.v1.AdminService.EventsStream` have been extended with `smesher` field in the events. So you're expected to see event PER post service now.

### Troubleshooting Tips

- **Check Configuration Files** : Ensure all identity and service configurations are correctly set up.
- **Review Logs For Errors** : Any connectivity or initialization errors will be detailed in the node's logs.
- **Ensure Unique Operation** : Running multiple nodes with the same identity can lead to issues. Verify that each identity is only active on one node

### Advanced Configurations

#### Customizing Settings For Optimal Performance

As mentioned previously each post service accepts it's own configuration. You can adjust the `--threads`, `--nonces`, `--randomx-mode` based on your hardware capabilities and preferences.

#### Smart Orchestration For Running Multiple PoST Services

We have prepared a demonstration of how to operate multiple PoST services efficiently. You can access it [here](https://github.com/spacemeshos/multiple_post_services_demo). While it simplifies certain aspects, the emphasis is on showcasing the capabilities.

## FAQs

**Q: I Want To Generate More PoS Data. How Do I Add A New Identity To My Node?**
A: Initialize PoST data for the new identity using `postcli`, which will generate a new private key. Then, move the generated `identity.key` to your `data/identities` directory, ensuring it's uniquely named.

**Q: What Should I Do If I Encounter Errors During Identity Or PoST Service Setup?**
A: Check your configuration files for accuracy and review node logs for specific error messages. Ensure all paths and identifiers are correctly specified and that there's no overlap of identities across multiple nodes.
