# Node split


:::info
Previously here there was a doc page about Node split PoC. It has been moved to [here](./node-split-poc).

::

Node split itself is currently considered Beta feature, that is stable enough to run it on the mainnet.

In our ongoing effort to lower the bar for smeshing, we're exploring a new direction for reducing system requirements for smeshers. The idea is to re-architect the internal modules in go-spacemesh, isolating the smeshing logic from the passive consensus code. By dividing the node along these lines, we can enable users to run the lightweight yet sensitive (requiring access to the private key) smeshing logic separately from the rest of the node. This allows users with limited resources to use a remote node for their smeshing.

The Node split itself is still a work in progress so please expect changes and improvements in the future.

The architecture is as follows:

![design.png](./../../static/img/node-split/design.png)

The Node Split  consists of two separate processes:
* `node service` aka node
* `smeshing service` aka client


## Why is this important?

It's best to watch the [video](https://www.youtube.com/watch?v=d4jBz1krRHg) to get a better understanding of the problem and our reasoning behind the node split.

The current go-spacemesh node is a monolithic application that includes all the logic required for consensus, smeshing, and other services. This makes it difficult to run the node on low-resource devices, as the node requires a significant amount of resources to run. By splitting the node into two separate services, we can enable users to run the smeshing logic on a separate device, while still connecting to a remote node for the rest of the services. This allows users to run the node on low-resource devices, while still participating in the Spacemesh network.

### Benefits
1. **Lower system requirements**: Users can run the smesher service on low-resource devices while connecting to a more powerful node for the rest of the services.
2. **Better failover and redundancy**: Currently when you need to restart a node you also need to restart the smesher service. With the node split you can restart the node without affecting the smeshing process. Starting smeshing will be also much quicker because it will *not* need to wait for the node to sync as the node will be running elsewhere. Multiple smesher services can be connected to the same node, and nodes can be hot-swapped without affecting the smeshing process.
3. **Lower OpEx**: Smesher service can be shut down wherever not needed to save costs and resources. Additionally, only a single node is required for multiple smeshing services and it can run where it's the most cost-effective, which is not necessarily where the smeshing service runs.
4. **Better node maintainability**: The node can be updated without affecting the smeshing process and the smeshing service can be updated without re-syncing. This makes updates simpler and less risky.



## Running the Node Split

There are two distinct configuration/setup methods possible:
1. Using locally running node and smesher service
2. Using remote running node and local smesher service


For the easiness we're hosting a example configs for node and smeshing service:
* Mainnet compaitble config for smeshing service: https://configs.spacemesh.network/config.mainnet-smeshing-service.json
* Devnet3 compatible for node service: https://configs.spacemesh.network/config.devnet3-node-service.json
* Devnet3 compatible for smeshing service: https://configs.spacemesh.network/config.devnet3-smeshing-service.json

Please note that we're NOT providing example configs for node-service for mainnet as all that's needed is to enable one api endpoint more.

### Versions compatibility

There are no protocol related changes in the node split implementation. A node split relaese is compatible with the devnet/testnet and with the specified go-spacemesh version mentioned in the release notes of the node split release.

Currently we're relaesing node split as `node-split-{semver-here}` and go-spacemesh compatibility will be mentioned in the release notes of the node split release.
