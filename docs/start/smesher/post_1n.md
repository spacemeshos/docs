# Guide to Managing Multiple PoST Services on a Single Node

## Introduction

This guide is your roadmap to efficiently managing multiple Proof of Space-Time (PoST) services using just a single node. With the Spacemesh protocol's latest advancements, it's now possible to extend a node's capabilities beyond the previous one-identity-per-node model. It means users can streamline their operations, reduce overhead, and increase their participation in the network without multiplying their hardware or maintenance efforts. This approach requires only one database for all identities, reducing local storage needs and minimizing data broadcasted or fetched from the network. It not only simplifies the lifecycle management of multiple identities but also enhances operational efficiency and network performance. Whether you're looking to add new identities, consolidate existing services, or simply optimize your setup for possibly greater rewards, you're in the right place.

## **Getting Started**

Before diving into managing multiple PoST services on your node, ensure you have the following aspects covered.

### Prerequisites

1.**Familiarity with CLI Operations:** Basic knowledge of command-line interfaces (CLI) and blockchain concepts.

2.**System Specifications:** Ensure your system meets the recommended hardware specifications for running multiple PoST services, including sufficient storage and processing power, as well as OpenCL support.

### Initial setup and configuration

1.**Spacemesh Node Setup:** Ensure your Spacemesh node is operational, utilizing the latest release supporting multiple PoST services (1.4.x series or newer). For detailed setup instructions, refer to the [go-spacemesh documentation](https://github.com/spacemeshos/go-spacemesh/blob/develop/README.md).

   For this feature setup process, make sure your node is not smashing. You should specify in your config:

```json

"smeshing": {

"smeshing-start": false

}

```

2.**Software Requirements:** The latest versions of `postcli` and `post-service` from the Spacemesh GitHub repository.

3.**Your case:** Gather info and organize all your node and POS data paths, POST services configs and details, and hardware access if necessary.

   For the sake of conciseness, we assume you have:

-`node-data` in `./node_data` (specified by `--data-folder` argument).

-`./node_data/identities/` directory (create it if it doesn't exist)

- PoS data in: `./data1/` and `./data2/` directories

## Adding New Identities and PoST Services

### **Procedure Overview**

Adding new identities and PoST services involves initializing PoST data for each new identity with specific parameters using `postcli`. This process generates a new private key, so a new identity.

### **Detailed Steps**

1.**Initialize PoST Data** : Use `postcli` to initialize PoST data. The command includes specifying your provider, the number of PoST units, and the commitment ATX ID for the new identity. More details in [postcli repo](https://github.com/spacemeshos/post/blob/develop/cmd/postcli/README.md).

2.**Store the Private Key** : Upon initialization, `postcli` generates a new private key stored as `identity.key` in the PoST data directory. This key should then be moved to your `./node_data/identities/` directory, renamed for unique identification.

3.**Configure the PoST Service** : Set up the `post-service` with the newly initialized data, ensuring it's configured to connect to your node. This step integrates the new identity with your node's operational framework.

## Migrating Existing Identities/PoST Services

### **Migration Strategy**

Consolidating your Spacemesh identities / PoST services onto a single node streamlines operations and enhances efficiency. The key to a successful migration lies in safely transferring identity keys and PoST data to your chosen node, ensuring no identities are active on more than one node simultaneously to prevent equivocation (the act of a node signing two different blocks at the same layer, which is considered malicious) and being permanently banned and disqualified for rewards.

### **Step-by-Step Migration**

1.**Preparation** : Before starting, stop all operations on your current nodes to ensure data integrity during the migration.

2.**Transfer Identity Keys** :

- Locate the `identity.key` files within the PoST data directories of each node.
- Copy these files to the `./node_data/identities` directory on the node you're consolidating to.
- Rename the key files respectively for easy identification of each identity.

3.**Restart the Primary Node** : With the identity keys in place, initiate the node that will now manage all identities.

4.**Configure PoST Services** :

- For each identity, set up a PoST service that utilizes the existing PoST data linked to that identity. This ensures the node can continue to participate in the network without redoing the PoST.
- Detailed configuration steps can be found in the `post-service` [README](https://github.com/spacemeshos/post-rs/blob/main/service/README.md), guiding you through connecting each PoST service to your node.

## **Operational Guide**

### Starting and stopping PoST services

...

### Managing node identities lifecycle

...

### Verifying Connection and Reward Eligibility

After adding or migrating identities and PoST services, verify they're correctly connected to your node and eligible for rewards by monitoring the node's operational logs. Look for indicators of successful identity recognition and PoST data validation. You should see:

`atxBuilder registered signing key `

for each key, the node could find in the `./node_data/identities/` directory.

### **Troubleshooting Tips**

- **Check Configuration Files** : Ensure all identity and service configurations are correctly set up.

- **Review Logs for Errors** : Any connectivity or initialization errors will be detailed in the node's logs.

- **Ensure Unique Operation** : Running multiple nodes with the same identity can lead to issues. Verify that each identity is only active on one node

### **Advanced Configurations**

- Customizing settings for optimal performance

## **FAQs**

- Addressing common questions

## **Appendix**

- Reference links
- Glossary of terms ?
