# Guide to managing multiple PoST services on a single node

## Introduction

This guide is your roadmap to efficiently managing multiple Proof of Space-Time (PoST) services using just a single node. With the Spacemesh protocol's latest advancements, it's now possible to extend a node's capabilities beyond the previous one-identity-per-node model. It means users can streamline their operations, reduce overhead, and increase their participation in the network without multiplying their hardware or maintenance efforts. This approach requires only one database for all identities, reducing local storage needs and minimizing data broadcasted or fetched from the network. It not only simplifies the lifecycle management of multiple identities but also enhances operational efficiency and network performance. Whether you're looking to add new identities, consolidate existing services, or simply optimize your setup for possibly greater rewards, you're in the right place.

## Getting started

Before diving into managing multiple PoST services on your node, ensure you have the following aspects covered.

### Prerequisites

1.**Familiarity with CLI operations:** Basic knowledge of command-line interfaces (CLI) and blockchain concepts.

2.**System specifications:** Ensure your system meets the recommended hardware specifications for running multiple PoST services, including sufficient storage and processing power, as well as OpenCL support.

### Initial setup and configuration

1.**Spacemesh node setup:** Ensure your Spacemesh node is operational, utilizing the latest release supporting multiple PoST services (1.4.x series or newer). For detailed setup instructions, refer to the [go-spacemesh documentation](https://github.com/spacemeshos/go-spacemesh/blob/develop/README.md).

For this feature setup process, make sure your node is not smeshing. You should specify in your config:

```json
"smeshing": {
    "smeshing-start": false
}
```

2.**Software requirements:** The latest versions of `postcli` and `post-service` from the Spacemesh GitHub repository.

3.**Your case:** Gather info and organize all your node and PoS data paths, POST services configs and details, and hardware access if necessary.

For the sake of conciseness, we assume you have:

- `node-data` in `./node_data` (specified by `--data-folder` argument).
- `./node_data/identities/` directory (create it if it doesn't exist)
- PoS data in: `./data1/` and `./data2/` directories

## Adding new identities and PoST services

### Procedure overview

Adding new identities and PoST services involves initializing PoST data for each new identity with specific parameters using `postcli`. This process generates a new private key, so a new identity.

### Detailed steps

1.**Initialize PoST data** : Use `postcli` to initialize PoST data. The command includes specifying your provider, the number of PoST units, and the commitment ATX ID for the new identity. More details in [postcli repo](https://github.com/spacemeshos/post/blob/develop/cmd/postcli/README.md).

2.**Store the private key** : Upon initialization, `postcli` generates a new private key stored as `identity.key` in the PoST data directory. This key should then be moved to your `./node_data/identities/` directory, renamed for unique identification.

3.**Configure the PoST service** : Set up the `post-service` with the newly initialized data, ensuring it's configured to connect to your node. This step integrates the new identity with your node's operational framework.

## Migrating existing identities/PoST services

### Migration strategy

Consolidating your Spacemesh identities / PoST services onto a single node streamlines operations and enhances efficiency. The key to a successful migration lies in safely transferring identity keys and PoST data to your chosen node, ensuring no identities are active on more than one node simultaneously to prevent equivocation (the act of a node signing two different blocks at the same layer, which is considered malicious) and being permanently banned and disqualified for rewards.

### Step-by-step migration

1. **Preparation** : Before starting, stop all operations on your current nodes to ensure data integrity during the migration.

2. **Transfer identity keys** :

- Locate the `identity.key` files within the PoST data directories of each node.
- Copy these files to the `./node_data/identities` directory on the node you're consolidating to.
- Rename the key files respectively for easy identification of each identity.

3. **Restart the primary node** : With the identity keys in place, initiate the node that will now manage all identities.

4. **Configure PoST services** :

- For each identity, set up a PoST service that utilizes the existing PoST data linked to that identity. This ensures the node can continue to participate in the network without redoing the PoST.
- Detailed configuration steps can be found in the `post-service` [README](https://github.com/spacemeshos/post-rs/blob/main/service/README.md), guiding you through connecting each PoST service to your node.

## Operational guide

### Starting and stopping PoST services

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

### Stopping PoST services

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

### General tips

#### Configuration flexibility

You can adjust the PoST service configuration (e.g., `--threads`, `--nonces`, `--randomx-mode`) based on your hardware capabilities and preferences.

#### Multiple directories

If you have multiple `./dataN` directories, repeat the starting process for each, adjusting the `--dir` argument accordingly.

#### Service management

Feel free to start, stop, or restart PoST services at any time based on your needs. However, the node should remain running continuously for the system to function properly.

### Managing node identities lifecycle

...

### Verifying connection and reward eligibility

After adding or migrating identities and PoST services, verify they're correctly connected to your node and eligible for rewards by monitoring the node's operational logs. Look for indicators of successful identity recognition and PoST data validation. You should see:

`atxBuilder registered signing key`

for each key, the node could find in the `./node_data/identities/` directory.

### Troubleshooting tips

- **Check configuration files** : Ensure all identity and service configurations are correctly set up.
- **Review logs for errors** : Any connectivity or initialization errors will be detailed in the node's logs.
- **Ensure unique operation** : Running multiple nodes with the same identity can lead to issues. Verify that each identity is only active on one node

### Advanced configurations

- Customizing settings for optimal performance

## FAQs

**Q: I want to generate more POS data. How do I add a new identity to my node?**
A: Initialize PoST data for the new identity using `postcli`, which will generate a new private key. Then, move the generated `identity.key` to your `data/identities` directory, ensuring it's uniquely named.

**Q: What should I do if I encounter errors during identity or PoST service setup?**
A: Check your configuration files for accuracy and review node logs for specific error messages. Ensure all paths and identifiers are correctly specified and that there's no overlap of identities across multiple nodes.

## **Appendix**

- Reference links
- Glossary of terms
