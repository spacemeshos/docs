---
id: verification
title: State Verification
---

This guide will show how to validate a downloaded state so that you can trust it. This guide is intended for advanced users.

## Prerequisites

You need to be able to run TWO full go-spacemesh nodes on the system.
We will call one node a `state_provider` and the second one a `state_validator`.

Let us assume that the data for the `state_provider` is placed in the `./state_provider` directory. The `state_validator` is another node that will be responsible for validating that state. It may be *any* running node, just with proper (direct & blocklist) config adjustments. Please adjust accordingly if the setup is different.


## Steps

We will run two nodes on one system, at the same time. The `state_provider` will have the data downloaded from "the Internet" and this state is unknown to the `state_validator`.

1. Base configs

Config for `state_provider`:
 
```json
{
    "api": {
      "grpc-json-listener": "",
      "grpc-private-listener": "127.0.0.1:59093",
      "grpc-public-listener": "127.0.0.1:59092"
    },
    "p2p": {
        "listen": "/ip4/127.0.0.1/tcp/56000",
        "min-peers": 1,
        "low-peers": 1,
        "high-peers": 1,
        "disable-dht": true,
        "bootnodes": [],
        "ip4-blocklist":[],
        "ip6-blocklist":[]
    }
}
```

Config for `state_validator`:

```json
{
    "api": {
      "grpc-json-listener": "",
      "grpc-private-listener": "127.0.0.1:49093",
      "grpc-public-listener": "127.0.0.1:49092"
    },
	"p2p": {
        "listen": "/ip4/127.0.0.1/tcp/46000",
        "ip4-blocklist":[],
        "ip6-blocklist":[]
	}
}
```

2. Launch the nodes

- Launch the `state_provider` as:
`./go-spacemesh --config state_provider/config.json -d ./state_provider --smeshing-opts-datadir ./state_provider/post --filelock state_provider/syncer.lock`

- Launch the `state_validator` as:
`./go-spacemesh --config state_validator/config.json -d ./state_validator --smeshing-opts-datadir ./state_validator/post --filelock state_validator/syncer.lock`

You will need to obtain the network ID from both nodes via
`grpcurl -plaintext 127.0.0.1:46000 spacemesh.v1.DebugService.NetworkInfo` and keep it as `STATE_VALIDATOR_P2P_ID`
`grpcurl -plaintext 127.0.0.1:56000 spacemesh.v1.DebugService.NetworkInfo` and as `STATE_PROVIDER_P2P_ID`

- Stop the nodes after acquiring this information.

3. Adjust the configs

- Edit both configs so they look like this:

Config for `state_provider`:

```json
{
    "api": {
      "grpc-json-listener": "",
      "grpc-private-listener": "127.0.0.1:59093",
      "grpc-public-listener": "127.0.0.1:59092"
    },
    "p2p": {
        "listen": "/ip4/127.0.0.1/tcp/56000",
        "min-peers": 1,
        "low-peers": 1,
        "high-peers": 1,
        "disable-dht": true,
        "bootnodes": [],
        "ip4-blocklist":[],
        "ip6-blocklist":[],
        "direct": [
            "/ip4/127.0.0.1/tcp/46000/p2p/{STATE_VALIDATOR_P2P_ID}"
        ]
    }
}
```

Config for `state_validator`: 

```json
{
    "api": {
      "grpc-json-listener": "",
      "grpc-private-listener": "127.0.0.1:49093",
      "grpc-public-listener": "127.0.0.1:49092"
    },
	"p2p": {
        "listen": "/ip4/127.0.0.1/tcp/46000",
        "ip4-blocklist":[],
        "ip6-blocklist":[],
		"direct": [
			"/ip4/127.0.0.1/tcp/56000/p2p/{STATE_PROVIDER_P2P_ID}"
		]
	}
}
```

4. Launch the nodes again.

- Launch the `state_provider` as:
`./go-spacemesh --config state_provider/config.json -d ./state_provider --smeshing-opts-datadir ./state_provider/post --filelock state_provider/syncer.lock`

- Launch the `state_validator` as:
`./go-spacemesh --config state_validator/config.json -d ./state_validator --smeshing-opts-datadir ./state_validator/post --filelock state_validator/syncer.lock`

5. Wait for the `state_validator` to sync. Given that the `state_validator` is an empty node, it will take time to fully sync. Additionally, because each ATX needs about 100 - 200ms to validate, you will observe half of the CPU cores being utilized for the ATX validation.

6. Once the sync is done in the `state_validator` directory, there will be a perfectly validated `state.sql` file.
