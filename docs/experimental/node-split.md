# Node split


:::info
Previously here there was a doc page about Node split PoC. It has been moved to [here](./node-split-poc).

::

Node split is currently considered a Beta feature that is stable enough to run on the mainnet.

In our ongoing effort to lower the bar for smeshing, we're exploring a new direction for reducing system requirements for smeshers. The idea is to re-architect the internal modules in go-spacemesh, isolating the smeshing logic from the passive consensus code. By dividing the node along these lines, we can enable users to run the lightweight yet sensitive (requiring access to the private key) smeshing logic separately from the rest of the node. This allows users with limited resources to use a remote node for their smeshing.

The Node split is still a work in progress, so please expect changes and improvements in the future.

The architecture is as follows:

![design.png](./../../static/img/node-split/design.png)

The Node Split consists of two separate processes:
* `node service` aka node
* `smeshing service` aka client


## Why is this important?

It's best to watch the [video](https://www.youtube.com/watch?v=d4jBz1krRHg) to get a better understanding of the problem and our reasoning behind the node split.

The current go-spacemesh node is a monolithic application that includes all the logic required for consensus, smeshing, and other services. This makes it difficult to run the node on low-resource devices, as the node requires a significant amount of resources to run. By splitting the node into two separate services, we can enable users to run the smeshing logic on a separate device while still connecting to a remote node for the rest of the services. This allows users to run the node on low-resource devices while still participating in the Spacemesh network.

### Benefits
1. **Lower system requirements**: Users can run the smeshing service on low-resource devices while connecting to a more powerful node for the rest of the services.
2. **Better failover and redundancy**: Currently when you need to restart a node you also need to restart the smeshing service. With the node split, you can restart the node without affecting the smeshing process. Starting smeshing will also be much quicker because it will *not* need to wait for the node to sync as the node will be running elsewhere. Multiple smeshing services can be connected to the same node, and nodes can be hot-swapped without affecting the smeshing process.
3. **Lower OpEx**: The smeshing service can be shut down when not needed to save costs and resources. Additionally, only a single node is required for multiple smeshing services and it can run where it's most cost-effective, which is not necessarily where the smeshing service runs.
4. **Better node maintainability**: The node can be updated without affecting the smeshing process and the smeshing service can be updated without re-syncing. This makes updates simpler and less risky.



## Running the Node Split

There are two distinct configuration/setup methods possible:
1. Using locally running node and smeshing service
2. Using remote running node and local smeshing service


For convenience, we're hosting example configs for node and smeshing service:
* Mainnet compatible config for smeshing service: https://configs.spacemesh.network/config.mainnet-smeshing-service.json
* Devnet3 compatible for node service: https://configs.spacemesh.network/config.devnet3-node-service.json
* Devnet3 compatible for smeshing service: https://configs.spacemesh.network/config.devnet3-smeshing-service.json

Please note that we're NOT providing example configs for node-service for mainnet as all that's needed is to enable one additional API endpoint.

### Versions compatibility

There are no protocol-related changes in the node split implementation. A node split release is compatible with the devnet/testnet and with the specified go-spacemesh version mentioned in the release notes of the node split release.

Currently, we're releasing node split as `node-split-{semver-here}` and go-spacemesh compatibility will be mentioned in the release notes of the node split release.

### Migration from node to node-split setup


:::note

TDB

:::

### Accessing the hosted node-service

For convenience, we're hosting the public node-service that runs against mainnet that you can connect to by setting up the following
* `--node-service-address` to `https://mainnet-node-service-api.spacemesh.network`
* `--proxy-api-v2-address` to `https://mainnet-node-service-json-api.spacemesh.network`
flags when running your smeshing-service.

`--node-service-address` is a URL to the node-service API endpoint on *any* synced node in the given network.
`--proxy-api-v2-address` is a URL to the v2 API endpoint on *any* synced node in the given network. It's needed by integrations to query the node-service API directly via the smeshing-service. Smeshing-service then acts as a middleman and relays the requests to the node-service API endpoint.

This service is provided without any warranty or support other than community support.
Please use it at your own risk.

### How to run the node-service

Node-service is just a full Spacemesh node with two exposed APIs. As mentioned above, smeshing-service needs to connect to the node-service API endpoint and v2 API endpoint. Therefore the matching configuration options are `--grpc-json-listener` and `--node-service-listener`.

### Where is the UI

As mentioned previously, there is a next-gen UI called smesher-app fully open-sourced and available on Github. You can find it here: https://github.com/spacemeshos/smesher-app

Anyone can run that UI as it only requires a browser and a connection to the node split.

For convenience, we're hosting the publicly available instance at http://smesher-beta.spacemesh.network. It does NOT communicate with ANY servers other than the ones that you specify. It talks to your local APIs only.

When opening, please specify the URL to the `--grpc-json-listener` specified on the smeshing service.

This UI uses ONLY the JSON API endpoint and communicates fully over http(s).

And because a smeshing-service by default also uses the proxied v2 API endpoint, there is no need to specify a node endpoint in the UI.
