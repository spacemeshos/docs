---
id: api
title: API
---

The node implements a [gRPC](https://grpc.io/) API that can be used to monitor and interact with the running node, and change certain settings. The API is split into two separate instances, one public and one private, each of which implements several services that can be turned on or off at will. "Public" services provide readonly access to data such as node status, epochs/layers/blocks/transactions, account state, etc., whereas "private" services allow the operator to change the params of a running node, e.g., the [smesher coinbase](https://github.com/spacemeshos/api/blob/a7c0b7acd9bc72940a8ab8e22202a77a4c3f438b/spacemesh/v1/smesher.proto#L29) or the [set of PoET servers](https://github.com/spacemeshos/api/blob/a7c0b7acd9bc72940a8ab8e22202a77a4c3f438b/spacemesh/v1/smesher.proto#L55). While "public" endpoints are theoretically safe to open for public API calls, in practice **we strongly recommend that no API services be exposed publicly.** The API design and implementation have not been hardened against denial of service attacks and represent an attack vector against a running node. For this reason, you should run _both the public and private API instances_ on private interfaces (e.g., the loopback/127.0.0.1 interface) and/or put them behind a firewall.

Default network config files by default enable all API services:

```
  "api": {
    "grpc-public-services": [
      "debug",
      "global",
      "mesh",
      "node",
      "transaction",
      "activation"
    ],
    "grpc-public-listener": "0.0.0.0:9092",
    "grpc-private-services": [
      "smesher",
      "admin"
    ],
    "grpc-private-listener": "127.0.0.1:9093",
    "grpc-json-listener": "0.0.0.0:9094"
  },
```

Note that the public instance runs on the interface/port `0.0.0.0:9092` and the private runs on `127.0.0.1:9093`. `grpc-json-listener` refers to a JSON-based [gRPC-Gateway](https://github.com/grpc-ecosystem/grpc-gateway) that allows clients that don't speak gRPC to communicate with the API using JSON instead, and can in general be turned off.

The easiest way to interact with the API from the command line and from scripts is using the [`grpcurl`](https://github.com/fullstorydev/grpcurl) tool. gRPC is self-documenting via a feature known as [reflection](https://github.com/grpc/grpc/blob/master/doc/server-reflection.md) that lets a client traverse an API, list RPC methods, inputs and outputs, and describe data types, e.g.:

```bash
> grpcurl -plaintext localhost:9092 list
spacemesh.v1.ActivationService
spacemesh.v1.DebugService
spacemesh.v1.GlobalStateService
spacemesh.v1.MeshService
spacemesh.v1.NodeService
spacemesh.v1.TransactionService
> grpcurl -plaintext localhost:9092 describe spacemesh.v1.NodeService
spacemesh.v1.NodeService is a service:
service NodeService {
  rpc Build ( .google.protobuf.Empty ) returns ( .spacemesh.v1.BuildResponse );
  rpc Echo ( .spacemesh.v1.EchoRequest ) returns ( .spacemesh.v1.EchoResponse );
  rpc ErrorStream ( .spacemesh.v1.ErrorStreamRequest ) returns ( stream .spacemesh.v1.ErrorStreamResponse );
  rpc NodeInfo ( .google.protobuf.Empty ) returns ( .spacemesh.v1.NodeInfoResponse );
  rpc Status ( .spacemesh.v1.StatusRequest ) returns ( .spacemesh.v1.StatusResponse );
  rpc StatusStream ( .spacemesh.v1.StatusStreamRequest ) returns ( stream .spacemesh.v1.StatusStreamResponse );
  rpc Version ( .google.protobuf.Empty ) returns ( .spacemesh.v1.VersionResponse );
}
> grpcurl -plaintext localhost:9092 describe spacemesh.v1.NodeInfoResponse
spacemesh.v1.NodeInfoResponse is a message:
message NodeInfoResponse {
  string hrp = 1;
  uint32 first_genesis = 2;
  uint32 effective_genesis = 3;
  uint32 epoch_size = 4;
}
```

For more information gRPC reflection see [gRPC Server Reflection Tutorial](https://github.com/grpc/grpc-go/blob/master/Documentation/server-reflection-tutorial.md#enable-server-reflection).

Common, useful commands for node operators include:

- Check node status (synced layer, verified layer, number of connected peers):

```bash
> grpcurl -plaintext localhost:9092 spacemesh.v1.NodeService.Status
{
  "status": {
    "connectedPeers": "31",
    "isSynced": true,
    "syncedLayer": {
      "number": 16278
    },
    "topLayer": {
      "number": 16278
    },
    "verifiedLayer": {
      "number": 16278
    }
  }
}
```

- See the events stream (a useful, high level idea of what the node is doing, including PoST init, PoET registration, publishing ATXs, and publishing proposals):

```bash
> grpcurl -plaintext localhost:9093 spacemesh.v1.AdminService.EventsStream
{
{
  "timestamp": "2023-09-07T17:55:22.283848702Z",
  "help": "Node computed randomness beacon, it will be used to determine eligibility to participate in the consensus.",
  "beacon": {
    "epoch": 4,
    "beacon": "nhiDhQ=="
  }
}
{
  "timestamp": "2023-09-07T17:56:23.638117180Z",
  "help": "Node started post data initialization. Note that init is noop if node restarted when init was ready.",
  "initStart": {
    "smesher": "...",
    "commitment": "..."
  }
}
{
  "timestamp": "2023-09-07T17:56:23.664434458Z",
  "help": "Node completed post data initialization.",
  "initComplete": {

  }
}
{
  "timestamp": "2023-09-07T17:56:23.686208298Z",
  "help": "Node needs to wait for poet to complete in publish epoch. Once completed, node fetches proof from poet and runs post on that proof. After that publish an ATX that will be eligible for rewards in target epoch.",
  "poetWaitProof": {
    "publish": 4,
    "target": 5,
    "wait": "871416.313797373s"
  }
}
{
  "timestamp": "2023-09-08T08:00:01.432480745Z",
  "help": "Computed eligibilities for the epoch. Rewards will be received after publishing proposals at specified layers. Total amount of rewards in SMH will be based on other participants in the layer.",
  "eligibilities": {
    "epoch": 4,
    "beacon": "nhiDhQ==",
    "atx": "...",
    "activeSetSize": 16582,
    "eligibilities": [
      {
        "layer": 16792,
        "count": 1
      },
...
    ]
  }
}
{
  "timestamp": "2023-09-08T12:00:00.349079938Z",
  "help": "Published proposal. Rewards will be received, once proposal is included into the block.",
  "proposal": {
    "layer": 16176,
    "proposal": "..."
  }
}

```

- Retrieve account data including current balance, counter value, and rewards:

```bash
> grpcurl -plaintext -d "{ \"filter\": { \"account_id\": { \"address\": \"<address>\" }, \"account_data_flags\": 6 } }" 127.0.0.1:9092 spacemesh.v1.GlobalStateService.AccountDataQuery
{
  "totalResults": 16,
  "accountItem": [
    {
      "reward": {
        "layer": {
          "number": 8186
        },
        "total": {
          "value": "10802055452"
        },
        "layerReward": {
          "value": "10802053003"
        },
        "coinbase": {
          "address": "<address>"
        }
      }
    },
...
    {
      "accountWrapper": {
        "accountId": {
          "address": "<address>"
        },
        "stateCurrent": {
          "counter": "1",
          "balance": {
            "value": "190459923001"
          }
        },
        "stateProjected": {
          "counter": "1",
          "balance": {
            "value": "190459923001"
          }
        }
      }
    }
  ]
}

```

The Spacemesh node gRPC API lives in the [api repository](https://github.com/spacemeshos/api/); see the [service definitions](https://github.com/spacemeshos/api/tree/master/spacemesh/v1). The implementation lives in the [`api` directory](https://github.com/spacemeshos/go-spacemesh/tree/develop/api/grpcserver) of the go-spacemesh repository.

## Updates

The Spacemesh team regularly releases updates to GUI and CLI node software. Smapp has a feature that monitors new releases and notifies the user when a new release is available, with a one-click update mechanism (Linux users who installed Smapp using the .deb file will need to manually check for and install updates due to [this issue](https://github.com/spacemeshos/smapp/issues/1299)). Note that, at present, go-spacemesh updates are bundled into Smapp updates, though this may change in the future; and go-spacemesh and Smapp use independent version numbering (e.g., Smapp [v1.0.18](https://github.com/spacemeshos/smapp/releases/tag/v1.0.18) bundles go-spacemesh v1.0.19).

No such notify or update mechanism is built into `go-spacemesh`, so CLI node operators will need to manually keep their software up to date. Node updates vary in severity and, while it's generally safe to be one or two patch releases behind, this isn't always the case and some bigger updates may need to be installed right away in order to keep one's node online and mining, and in order not to receive rewards. Releases are announced on several channels including:

- [go-spacemesh releases](https://github.com/spacemeshos/go-spacemesh/releases) on GitHub
- the [#announcements channel](https://discord.com/channels/623195163510046732/691258865861394432) on the Spacemesh Discord
- the official [Spacemesh Twitter](https://twitter.com/teamspacemesh)

You are strongly encouraged to watch one or more of these channels closely and/or [subscribe to GitHub release notifications](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository) so that your node is up to date.
