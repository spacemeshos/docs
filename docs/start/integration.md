---
id: integration
title: Integration Guide
---

> [!INFO]
> We're currently working on the new version of the API. It's currently available as `v2alpha` but we strongly recommend doing any new integrations with it. The old version `v1` will be deprecated afterwards. The API description is available [here](https://github.com/spacemeshos/api/tree/master/spacemesh/v2alpha1).
> There is also public instance exposing the JSON-RPC api at `mainnet-api.spacemesh.network`


This document explains how to integrate Spacemesh into existing infrastructure, including a block explorer, an exchange, and other types of applications. Note that we are still working on libraries including a [SDK](https://github.com/spacemeshos/spacemesh-sdk) in multiple programming languages including Go, Rust, and JavaScript to make it easier to integrate Spacemesh including talking to a node, address and transaction generation. In the meantime and until these libraries are available, below you'll find all the information you need to write such code yourself and build applications on Spacemesh.

# Node Management​


## Running a Private Node

See [[Running a Node|Smesher Guide#running-a-node]] in the [[Smesher Guide]]. Obviously a node backing an application does not need to smesh (mine), so you can ignore the steps related to PoST initialization and mining. We strongly encourage you to run multiple, redundant nodes so that you have a fallback in case one node has issues or falls out of sync. We also encourage you to take regular snapshots of the data directory of your nodes (ideally, after closing the node) so that you can restore your node more quickly in case of a problem, rather than needing to sync from scratch, which is time-consuming.

## Connecting to a Public Node

We don't currently operate public nodes, but we intend to in the future. This depends upon improving the existing node API. You may follow [this issue](https://github.com/spacemeshos/pm/issues/250) for updates. For now, if you plan to build an application on Spacemesh, you'll need to rely on running your own nodes.

# Fundamental Concepts

It helps to have an understanding of some basic concepts before building an application or interacting with Spacemesh data. Please note that Spacemesh differs significantly from other chains you may be used to, such as those based on proof of work or proof of stake.

## Mesh vs. Chain

In Spacemesh we often talk about the "mesh"; indeed, it's where the "mesh" in the name "Spacemesh" comes from. For all intents and purposes, as far as applications and integration are concerned, you can consider this a legacy idea (in its original design Spacemesh consisted of a DAG topology with many blocks per layer, but the design has evolved) as there is only one canonical block per layer and all transactions in a layer have a strict ordering. We therefore use the terms "mesh" and "chain" interchangeably. The "mesh" still refers to the many proposals produced each layer, but these are ephemeral (read on) and are usually not relevant from the application layer.

Besides, let's face it, "Spacemesh" sounds much cooler than "Spacechain" 😀

## Two Types of Data

The Spacemesh network consists of both _ephemeral_ and _evergreen_ data. Ephemeral data is gossiped and may be stored for some time, but eventually pruned as it's not required to sync from genesis, reconstruct history, or verify the current state. Only archival nodes store ephemeral data forever. Miner proposals (stored temporarily) and Hare messages (never stored) are ephemeral.

By contrast, evergreen data must be kept forever. It's essential to reconstructing history and to verifying the current state of the mesh. Therefore, all nodes store it forever. Blocks and transactions are evergreen.

## Global State

The global state is the current state of every Spacemesh account: i.e., its balance, code, counter value, and storage. The entire global state as of a current block or layer can be summarized in a single global state hash value (which two nodes can compare to see if they agree on the canonical state at any given point in time). Global state is never gossiped or shared among nodes (except as part of fast sync, which we haven't built yet). It's calculated based on a node's view of history, i.e., every canonical block and transaction since genesis. Global state is therefore _implicit_ rather than _explicit._

## Time

Time in Spacemesh is broken down into epochs which are two weeks long on mainnet. Epochs contain layers that are five minutes long; one epoch is exactly 4032 layers. Epochs and layers are both zero-indexed. The first two epochs, i.e., epochs 0 and 1, consisting of layers [0-8063], were an initial genesis bootstrapping period that contained no blocks or transactions. Epochs and layers are uniquely identified by their index, and there can never be more than one with the same index; it doesn't make sense to talk about two "different" layers with the same index, just as it doesn't make sense to talk about two "different" days with the same date.

## Reorgs and Canonicity

Explained in our section on [blocks](./../learn/blocks.md).

See [finality](#finality), below, for more in-depth information.

# Data Model

The Spacemesh data model is also different from the data model of other blockchains you may be familiar with.

## Spacemesh Accounts

See our explainer [here](./../learn/accounts.md).

See [Accounts, below](#accounts) for more information.

## Epochs and Layers

As explained above, each epoch and each layer is a singleton; there's only ever one epoch 4 and one layer 9237. One epoch consists of (contains) 4032 layers.

## Blocks and Transactions

See the [explainer](./../learn/blocks.md#blocks-and-transactions).

## The Mesh

The "mesh" (a.k.a. "chain") consists of the canonical set of explicit, evergreen data (i.e., blocks and the transactions they contain) of all history back to genesis. The mesh typically only grows in append-only fashion, but in rare circumstances it can shrink due to a reorg. That is to say, some number of formerly-canonical blocks from the end of the chain may be removed and replaced with other blocks in case of a reorg.

## Activations

Miners in Spacemesh establish their eligibility to mine by generating and submitting proofs to the network. These proofs are contained in objects called ATXs ("activation transactions", though they are not actually transactions). See the [[Smesher Guide|Smesher-Guide#post-initialization]] for more information.

Each ATX is linked to one miner, identified by that miner's smesherID (a 32 byte public key), and each ATX targets one epoch. If a miner generates multiple ATXs targeting the same epoch, that miner is guilty of [equivocation](#malfeasance) and its identity will be disqualified.

ATXs have an associated [[weight|Smesher-Guide#atxs-and-weight]] which depends on the contents of the miner's proof of spacetime.

## Proposals and Rewards

Miners that successfully establish eligibility to mine in a given epoch will be given one or more eligibility slots (i.e., layers); every miner gets at least one such slot per epoch. If the miner is online and in sync when their slot arrives they'll generate and submit a proposal to the network. The proposal contains a subset of the transactions in the miner's view of the mempool, chosen so that the union of all proposals from all miners is enough to efficiently fill a block with unique, valid transactions. (In practice, until transaction throughput increases and blocks are regularly full, proposals will include the entire contents of a miner's view of the mempool.) The [[Hare|Smesher-Guide#hare]] consensus mechanism subsequently allows the network to agree on the canonical set of proposals for a given layer, which get assembled deterministically into a block for the layer.

This mechanism allows Spacemesh to scale transaction throughput efficiently by achieving high throughput (i.e., big blocks per layer) with small messages (i.e., proposals that can be gossiped with low latency). Full blocks are never gossiped over the network in the course of protocol execution; rather, each node deterministically computes the block for each layer on the basis of these proposals.

The block contains rewards for all miners that successfully submitted a valid, on time proposal for the layer; rewards are specified in _relative_ terms as a set of ATXs (i.e., the ATX for the eligible miner) and relative weights. These get _implicitly_ added to account balances when a layer is processed, and implicitly-calculated rewards are added to the database once a layer is processed.

Proposals are ephemeral; blocks and rewards are evergreen.

## Malfeasance

A miner's identity may be disqualified from further participation in consensus and further rewards for equivocating in several protocols and publishing conflicting messages including activations, proposals, and Hare messages. This should not be relevant for most applications.

# Node Interaction​

The Spacemesh node implements a gRPC API that can be used to perform basic queries. See [[API|Smesher Guide#api]] for more information. Note that this API has certain limitations at the moment, including:

- inability to query individual miner rewards
- some queries aren't implemented cleanly and can cause [memory and CPU issues](https://github.com/spacemeshos/go-spacemesh/issues/5006)
- [finality isn't perfectly captured](https://github.com/spacemeshos/pm/issues/256)
- some queries (e.g., account data) cannot be performed on a layer range
- some data (e.g., rewards) are only available as a stream; there's no way to query them directly

Improving the API and/or building [a new API from scratch](https://github.com/spacemeshos/pm/issues/269) is a high priority task and should happen soon.

Here's how to perform some common integration tasks using the API. Note that examples here will use the [`grpcurl` tool](https://github.com/fullstorydev/grpcurl), but the gRPC API can easily be integrated into an application using the [`github.com/spacemeshos/api/release/go`](https://github.com/spacemeshos/api/tree/master/release/go) published Golang module ([godoc](https://pkg.go.dev/github.com/spacemeshos/api/release/go@v1.21.0/spacemesh/v1)) or compiled [from source](https://github.com/spacemeshos/api/tree/master/spacemesh/v1).

## Current Epoch and Layer

Query the current epoch and layer using [`MeshService.CurrentEpoch`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#MeshService.CurrentEpoch) and [`MeshService.CurrentLayer`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#MeshService.CurrentLayer):

```bash
> grpcurl -plaintext localhost:9092 spacemesh.v1.MeshService.CurrentEpoch
{
  "epochnum": {
    "number": 5
  }
}
> grpcurl -plaintext localhost:9092 spacemesh.v1.MeshService.CurrentLayer
{
  "layernum": {
    "number": 21474
  }
}
```

Note: unlike a proof of work chain like Bitcoin where blocks arrive after random intervals, layer time in Spacemesh is based on wall clock time and is totally deterministic and predictable. Mainnet genesis occurred at `2023-07-14T08:00:00Z` and it's always possible to tell the current layer by counting the number of five minute intervals since that moment. Epochs are two weeks long, or 4032 layers. The code that converts from time to layer and epoch number can be found in [`github.com/spacemeshos/go-spacemesh/timesync`](https://github.com/spacemeshos/go-spacemesh/tree/develop/timesync) ([godoc](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh/timesync)).

## Chain Head

You can subscribe to a node's opinion of the current chain head (latest layer and layer hash) using [`GlobalStateService.GlobalStateStream`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#GlobalStateService.GlobalStateStream):

```bash
> grpcurl -d '{"global_state_data_flags":8}' -plaintext localhost:9092 spacemesh.v1.GlobalStateService.GlobalStateStream
{
  "datum": {
    "globalState": {
      "rootHash": "SdfLSxfDq9FNAYo4T/QuMkeJwInAkF7p/ot1Q0MpalQ=",
      "layer": {
        "number": 21474
      }
    }
  }
}
{
  "datum": {
    "globalState": {
      "rootHash": "eq5jkO9L/G6hu0wUUGko/eqTLuHX+RnfGvhCCqgNRQg=",
      "layer": {
        "number": 21475
      }
    }
  }
}
{
  "datum": {
    "globalState": {
      "rootHash": "k1qGcy1S7HiLpxS0N1Oq9PZNDq8bs3vUw9BpvFs+mfM=",
      "layer": {
        "number": 21476
      }
    }
  }
}
```

## Fetching a Block​

You can fetch the canonical block for a given layer using [`MeshService.LayersQuery`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#MeshService.LayersQuery). Make sure you set both `start_layer` and `end_layer`:

```bash
> grpcurl -plaintext -d '{"start_layer": {"number": 20000}, "end_layer": {"number": 20000}}' localhost:9092 spacemesh.v1.MeshService.LayersQuery
{
  "layer": [
    {
      "number": {
        "number": 20000
      },
      "status": "LAYER_STATUS_CONFIRMED",
      "hash": "/blTv1nUnTElrxXTWnKoS19A0q68eQkuCUYJNgH1fOg=",
      "blocks": [
        {
          "id": "fz1pl2vs8fEmc+bJi69Yz5PXRTE=",
          "transactions": [
            {
              "id": "Q9d+0mIKhinlNtMJmGfyg0nu+wW3mvtCp/me75sQHd4=",
              "principal": {
                "address": "sm1qqqqqqx2hqflnacy0qqjsqjur0ym9km7qcq97zq7p8tz2"
              },
              "template": {
                "address": "sm1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg56ypy7"
              },
              "method": 16,
              "nonce": {
                "counter": "2"
              },
              "limits": {

              },
              "maxGas": "36218",
              "gasPrice": "1",
              "maxSpend": "94129000000",
              "raw": "AAAAAADKuBP59wR4ASgCXBvJstt+BgBfCEAIBAAAAAAxB6VuSSyBkg+9vNvnCAVwImfjtAdAjobqFeganiMlYm9EkOKJ6yj1tKgoAEr0xc2lfBxpsmpEkAJoxpx09yXLe+i+vQxgYNk8ubuvPT9Arb2FSme9QaGSvwo="
            }
          ]
        }
      ],
      "rootStateHash": "gxFRpCOHtheomfBy380OItd0tCRYRBAa2p+Im8m3W14="
    }
  ]
}
```

### Multiple Blocks

Unless security assumptions are violated, there will be zero or one block per layer. Examples of security assumption violations are a large number (> 1/3) of miner weight colluding and equivocating, or a long-lived network partition (longer than an epoch) followed by a rejoin.

According to the Spacemesh protocol, only one block per layer may be considered canonical and only the transactions in that block may be included in the mesh. For more information on how this works in the protocol, see [explorer-backend#92](https://github.com/spacemeshos/explorer-backend/issues/92#issuecomment-1841293498).

Unfortunately block validity is not currently exposed in the API (we're [working on it](https://github.com/spacemeshos/api/issues/287)). It can be manually read from the node database.

## Fetching Account Balance

Use [`GlobalStateService.Account`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#GlobalStateService.Account). Balance is denominated in smidge, where 1 SMH = 1 billion smidge (1e9 smidge). `stateCurrent` shows the current account balance; `stateProjected` includes transactions that have been mined into blocks but not yet applied to state (because the layer hasn't been finalized).

```bash
> grpcurl -plaintext -d '{ "account_id": { "address": "sm1qqqqqqzlfwsz6j6tgjnhxt489nt0j23h7xy0nacxj0mhg" }}' localhost:9092 spacemesh.v1.GlobalStateService.Account
{
  "accountWrapper": {
    "accountId": {
      "address": "sm1qqqqqqzlfwsz6j6tgjnhxt489nt0j23h7xy0nacxj0mhg"
    },
    "stateCurrent": {
      "balance": {
        "value": "13753490256"
      }
    },
    "stateProjected": {
      "balance": {
        "value": "13753490256"
      }
    }
  }
}
```

## Fetching a Transaction​

Use [`TransactionService.TransactionsState`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#TransactionService.TransactionsState). Note that the transaction `id` must be specified in base64 format when using grpcurl.

```bash
> grpcurl -d '{"include_transactions":"true", "transaction_id": [{"id": "bBA1/TtkLQr8Io9NO9MYkRaqM+kcnoua2ueK/zBhWT4="}]}' -plaintext localhost:9392 spacemesh.v1.TransactionService.TransactionsState
{
  "transactionsState": [
    {
      "id": {
        "id": "bBA1/TtkLQr8Io9NO9MYkRaqM+kcnoua2ueK/zBhWT4="
      },
      "state": "TRANSACTION_STATE_PROCESSED"
    }
  ],
  "transactions": [
    {
      "id": "bBA1/TtkLQr8Io9NO9MYkRaqM+kcnoua2ueK/zBhWT4=",
      "principal": {
        "address": "sm1qqqqqqzmg7g37c3z5atdvcmdjk0r35fyczehw2sgkx4l3"
      },
      "template": {
        "address": "sm1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg56ypy7"
      },
      "method": 16,
      "nonce": {
        "counter": "6"
      },
      "limits": {

      },
      "maxGas": "36218",
      "gasPrice": "1",
      "maxSpend": "280000000000",
      "raw": "AAAAAABbR5EfYiKnVtZjbZWeONEkwLN3KkAYBAAAAAATyHfVrYtUAt5pt473IEXZcL9yqAcA8EwxQe1HxH6eczngWEQ8d9f9phbqr26Xr4GfAm+TYfsGLp5VP/uIrhs/RRsLcmHbK89U7f/0Vp2GHHclqu4/Tmz4IwM="
    }
  ]
}
```

## Explorer Backend API

It's come to our attention that, due to various shortfalls in the node API as outlined here, some third party applications have chosen to instead read data from the [explorer backend API](https://github.com/spacemeshos/explorer-backend/tree/master). Please be aware that **this is not currently a supported method of reading Spacemesh data.** The explorer backend is used to power the official [Spacemesh explorer](https://explorer.spacemesh.io/) but, unlike the official node API, we make no guarantees about its availability, correctness, or completeness. For example, it currently [filters out multisig transactions entirely](https://github.com/spacemeshos/explorer-backend/issues/92#issuecomment-1836105402), and we've found [previous inconsistencies](https://github.com/spacemeshos/explorer-backend/issues/95) between this and the official API. This API also **does not support reorgs.** Furthermore this API is likely to change in future without notice.

We strongly encourage developers to use only the official gRPC node API, as documented here, for reading canonical Spacemesh data.

# Accounts​

Spacemesh accounts are controlled by [Ed25519](https://ed25519.cr.yp.to/) keypairs. Every pubkey maps to precisely one valid account address. However, this mapping is more complex than in other blockchains due to account abstraction (aka account unification). Every Spacemesh account is an instance of a smart contract that links to one of the four hardcoded templates (aka precompiles):

- Multisig: a Wallet controlled by multiple keys
- Vault: a special account, hardcoded at genesis, with a balance that vests over time
- Vesting: a special Multisig that is bound to a particular Vault
- Wallet: a standard wallet controlled by a single keypair

Most applications only need to concern themselves with `Wallet` and `Multisig` accounts; the other two can be safely ignored.

## Address Generation

Account addresses are 24 bytes long, typically expressed as a [bech32](https://en.bitcoin.it/wiki/Bech32) string starting with the `sm1` HRP for mainnet and `stest1` for testnet. An account address is computed as the [Blake3](https://github.com/BLAKE3-team/BLAKE3) hash of the concatenation of the [SCALE-encoded](https://github.com/paritytech/parity-scale-codec) account template address and the SCALE-encoded args required to spawn the account (otherwise known as the immutable state). In other words, in case of a simple, single-sig Wallet:

```go
args := WalletTemplate.SpawnArguments{key}
account_address := Blake3(scale_encode(WalletTemplate.Address) || scale_encode(args))
```

and in the case of a Multisig:

```go
args := MultisigTemplate.SpawnArguments{n, keys}
account_address := Blake3(scale_encode(MultisigTemplate.Address) || scale_encode(args))
```

where `key` is a single Ed25519 pubkey, `keys` is an array of such keys, and `n` is the minimum number of required signatures for the multisig.

## Spawning

Accounts can receive funds at any time, but before spending funds an account must be spawned. An account that has received funds but hasn't yet been spawned is called a "stub" account: it has a balance but no other state and no linked template code. There is no way to tell the type of account of a stub, nor whether it's even a valid address, until it's spawned. The act of spawning an account provides the missing pieces of the puzzle: the template address and the spawn arguments (immutable state). In other words, it involves revealing the Blake3 preimage of the account address (as described above).

Spawning an account requires a Spawn transaction, which has an associated fee. A stub account with a sufficient balance can spawn itself via a SelfSpawn operation; otherwise, another account can pay for the Spawn operation. A SelfSpawn operation (which is a wrapper over the Spawn operation) looks like:

```go
args := WalletTemplate.SpawnArguments{key}
nonce := 0
WalletTemplate.Spawn(key, WalletTemplate.Address, args, nonce)
```

A Spawn operation requires the signing key, the template to be spawned, and the nonce for the signer:

```go
args := WalletTemplate.SpawnArguments{key}
principalAddress := computePrincipal(principal.TemplateAddress, key)
nonce := getAccountNonce(principalAddress)
WalletTemplate.Spawn(key, WalletTemplate.Address, args, nonce)
```

## Sample Code

While we don't yet have a production-ready SDK or library to perform address generation, the process is straightforward enough and you may find sample code in the `go-spacemesh` tests:

- [single sig example](https://github.com/spacemeshos/go-spacemesh/blob/81f79f5d0bcd3ceaedae2f955a54f2a780fa9219/genvm/vm_test.go#L90-L102)
- [multisig example](https://github.com/spacemeshos/go-spacemesh/blob/81f79f5d0bcd3ceaedae2f955a54f2a780fa9219/genvm/vm_test.go#L140-L175)

## HD Derivation

Spacemesh supports standard BIP32 and BIP44-style HD derivation paths for addresses, as well as BIP39-style mnemonic seed phrases. It uses the coin type 540, followed by key and chain codes of zero, followed by account index. All path elements must be hardened. The default HD path is therefore `m/44'/540'/0'/0'/0'`. The second key derived from the same seed has the path `m/44'/540'/0'/0'/1'`.

Public keys derived in this fashion must be converted into addresses using the [process described above](#address-generation).

You may find sample derivation code in the [`smcli` application](https://github.com/spacemeshos/smcli/) (Go) and in the [`spacemesh-sdk`](https://github.com/spacemeshos/spacemesh-sdk/) (Rust).

# Transactions

As in other blockchains a transaction is the only way to mutate state in Spacemesh, including sending coins. Due to account abstraction, however, unlike in other blockchains a transaction does not have a sender in the ordinary sense of the word. Instead, it has a principal (i.e., source of funds) that must sign the transaction. In the case of a single-sig Wallet, it must contain a single signature; in the case of a Multisig, it must contain multiple signatures. See [Accounts, above](#accounts-1) for more information on the different types of accounts.

## Structure

A transaction consists of a Header that contains:

- principal (i.e., account that's the source of funds)
- template address (of the principal account)
- method selector (uint8)
- nonce (uint64)
- max gas (uint64)
- gas price (uint64)
- max spend (uint64)

This data structure is serialized (for transmission over the wire) using the SCALE codec; the transaction ID is the Blake3 hash of the the Header.

## Decoding

The simplest way to decode a serialized raw transaction is using the [`TransactionService.ParseTransaction`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#TransactionService.ParseTransaction) method of the node API, e.g.:

```
> grpcurl -d '{"transaction":"AAAAAAAr9R5vjoYl+pRgCczqh39jOHD6O0AEBAAAAAAr9R5vjoYl+pRgCczqh39jOHD6OwR6cSZP3dFfiTjGMU8H5UGI+3PNZg3YyFFnJzNXpSbssMvmsdly+yOnLMVGwHHlgGgWI9kloCAK79y6STVjZ2MI"}' -plaintext localhost:9092 spacemesh.v1.TransactionService.ParseTransaction
{
  "tx": {
    "id": "HcBnIR1AlBBSJTMm83enjYXyt7EXHp2tf5MbTHAG094=",
    "principal": {
      "address": "sm1qqqqqqpt750xlr5xyhafgcqfen4gwlmr8pc05wcquxuwg"
    },
    "template": {
      "address": "sm1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg56ypy7"
    },
    "method": 16,
    "nonce": {
      "counter": "1"
    },
    "maxGas": "36090",
    "gasPrice": "1",
    "maxSpend": "1",
    "raw": "AAAAAAAr9R5vjoYl+pRgCczqh39jOHD6O0AEBAAAAAAr9R5vjoYl+pRgCczqh39jOHD6OwR6cSZP3dFfiTjGMU8H5UGI+3PNZg3YyFFnJzNXpSbssMvmsdly+yOnLMVGwHHlgGgWI9kloCAK79y6STVjZ2MI"
  }
}
```

The logic to manually parse and validate a transaction isn't terribly straightforward and may be found in the [`go-spacemesh` VM code](https://github.com/spacemeshos/go-spacemesh/blob/develop/genvm/vm.go).

## Types

As mentioned above Spacemesh implements native account abstraction: all accounts are represented by precompiled smart contracts known as "templates." There are no EOAs (keypair-controlled accounts).

Spacemesh currently supports two types of transactions, corresponding to the following two templates:

- SingleSig wallet: emulates an EOA. Supports two methods, `Spawn` and `Spend`.
- MultiSig wallet: same as SingleSig wallet but implements m-of-n key verification. Supports the same two methods, `Spawn` and `Spend`.

Once a transaction has been decoded as above its type may be parsed by looking at the `template` and `method` fields. Here's a legend for mainnet transactions:

- SingleSig spawn: template `sm1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg56ypy7`, method `0` (or unset)
- SingleSig spend: template `sm1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg56ypy7`, method `16`
- MultiSig spawn: template `sm1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsl0g40s`, method `0` (or unset)
- MultiSig spend: template `sm1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsl0g40s`, method `16`

Spend transactions have a destination (recipient) account and an amount. These are encoded inside the transaction's raw payload. These data are not currently exposed via the API; we're [working on it](https://github.com/spacemeshos/api/issues/288). For now, in order to fully parse a transaction, you'll have to manually write code such as this [VM code](https://github.com/spacemeshos/go-spacemesh/blob/3d8eedfd44c6f9f8987e604b768596f6001fe703/genvm/templates/wallet/handler.go#L57-L72) that handles tx parsing.

Note: there is one additional template, a Vault wallet, that's a special type of MultiSig wallet that's used to access the funds locked in the genesis vaults. However, vaulted funds don't begin to vest until one year post-genesis, i.e., in July 2024. Vault transactions shouldn't appear before that time, and will be invalid before that time.

## Lifecycle

The process of creating, broadcasting, and tracking a transaction looks something like the following:

1. Calculate the recipient account address, following the instructions above
1. Construct a transaction, setting principal and recipient, amount, gasprice, etc.
1. Sign the transaction using the principal's private key
1. Send the transaction to a full node
1. The full node gossips the transaction to the network
1. Within a few minutes, the transaction should get included in one or more proposals, then mined into a block
1. Within a few minutes the layer gets approved, and the transaction gets applied
1. Check the transaction status with a full node and see that it was applied

## Construction

Assuming you have the required information, creating a transaction is quite straightforward and can be accomplished with a few lines of code.

### Estimating and Setting Fees

Transactions include three fee-related fields:

- `maxGas`
- `gasPrice`
- `maxSpend`

`maxSpend` is currently unused and can be ignored for now.

`maxGas` is the amount of gas (in gas units) actually consumed by an effective transaction. It consists of [a fixed portion and a variable portion added together](https://github.com/spacemeshos/go-spacemesh/blob/e8189e42ecc30d46db29329ea9c4b681f6220aac/genvm/core/gas.go#L8-L11). The fixed portion is the same for all transactions of the same type (e.g., all SingleSig Spend operations pay the same fixed gas). The variable portion, known as intrinsic gas, accounts for the _overhead_ of transmitting and storing a transaction, and as such it varies in the size of the transaction. The fixed portion, known as fixed gas, accounts for the cost of actually executing the transaction.

`maxGas` does not need to be specified and will be set automatically by the VM. The gas price table may be found in [github.com/spacemeshos/go-spacemesh/genvm/core](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/genvm/core#pkg-constants). For reference an ordinary single-sig send operation costs around 36,000 units of gas (this will vary slightly in the size of the transaction). A single-sig spawn operation costs 100,432 gas. Note that these numbers are subject to change and should not be hardcoded. Rely on the Spacemesh node infrastructure to calculate and set these values correctly.

Gas is an arbitrary unit and has no cost on its own; as in Ethereum, the actual cost of a transaction is its gas cost multiplied by `gasPrice`. `gasPrice` defaults to one (i.e., one smidge per unit gas), where one smidge is one-billionth of one SMH, i.e., 1 SMH = 1e9 smidge. `gasPrice` may be increased to two or three smidge, but until Spacemesh blocks are full, all transactions should be processed regardless of gas price so it isn't necessary to set this very high.

A single-sig send operation with a `maxGas` of 36,218 and a `gasPrice` of one will end up paying 36,218 smidge, or 0.000036218 SMH; the same operation with a gas price of three will pay 3 * 36,218 = 108,654 smidge, or 0.000108654 SMH.

### Genesis ID

Each Spacemesh chain (e.g., mainnet, testnet, private networks) has a unique Genesis ID value. This is hashed into a transaction at the serialization stage, and thus affects the raw transaction body, the signature, and the txid. This is a form of cross-chain replay protection: a valid, signed tx on one chain/network cannot be broadcast to or used within another chain/network.

You need the Genesis ID for a given network before generating, signing, or broadcasting a new transaction. The Genesis ID may be read from any running node using [`MeshService.GenesisID`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#MeshService.GenesisID):

```
> grpcurl -plaintext localhost:9092 spacemesh.v1.MeshService.GenesisID
{
  "genesisId": "nuv/Ajq7F8y3dcYC2q3o7XCPClA="
}
```

The above value is the fixed mainnet genesis ID (in base64 format); in hex format it is `0x9eebff023abb17ccb775c602daade8ed708f0a50`. See the below code snippet for how to use this in transaction construction.

## Signing

A single sig transaction must be signed using the private key that controls the principal account, i.e., the source of funds for the transaction. A multi sig transaction must be signed by at least the number of keys specified when the Multisig account was spawned, i.e., the `n` value in its spawn arguments/immutable state. See below for sample code.

## Broadcasting

A signed, raw transaction may be submitted to any Spacemesh node that's online and in sync using the node's API: the [`TransactionService.SubmitTransaction` endpoint](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#TransactionService.SubmitTransaction).

## Example

Following is an example of generating a transaction, signing it, parsing it, and broadcasting it. This example is for a simple send transaction using a single sig wallet, but it should contain enough information to create other types of transactions. It uses Go and error checking is not implemented. `amount` contains the amount to send (denominated in smidge), `principal` is an account object containing the principal (i.e., sender) account and `privkey` contains the corresponding Ed25519 private key, and `recipientAddressStr` contains the address of the recipient in standard bech32 format (`sm1...`). Note how the example reads the Genesis ID from a running node and also gets the latest (projected) principal balance and nonce. `nodeUri` contains the gRPC URI of the running node to talk to, e.g., `localhost:9092`.

```go
import (
  "encoding/hex"
  "github.com/spacemeshos/go-spacemesh/common/types"
  api "github.com/spacemeshos/api/release/go/spacemesh/v1"
  walletSdk "github.com/spacemeshos/go-spacemesh/genvm/sdk/wallet"
  "google.golang.org/grpc"
  "google.golang.org/grpc/credentials/insecure"
)

recipientAddress, _ := types.StringToAddress(recipientAddressStr)
cc, _ := grpc.Dial(nodeUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
defer cc.Close()

meshClient := api.NewMeshServiceClient(cc)
meshResp, _ := meshClient.GenesisID(ctx, &api.GenesisIDRequest{})
var genesisId types.Hash20
copy(genesisId[:], meshResp.GenesisId)

client := api.NewNodeServiceClient(cc)
statusResp, _ := client.Status(ctx, &api.StatusRequest{})

gstate := api.NewGlobalStateServiceClient(cc)
resp, _ := gstate.Account(ctx, &api.AccountRequest{AccountId: &api.AccountId{Address: principal.String()}})
nonce := resp.AccountWrapper.StateProjected.Counter
balance := resp.AccountWrapper.StateProjected.Balance
fmt.Printf("Sender nonce %d balance %d\n", nonce, balance.Value)

// generate the tx
tx := walletSdk.Spend(signing.PrivateKey(privkey), recipientAddress, amount, nonce+1,
	sdk.WithGenesisID(genesisId),
)
fmt.Printf("Generated signed tx: %s\n", hex.EncodeToString(tx))

// parse it
txService := api.NewTransactionServiceClient(cc)
txResp, _ := txService.ParseTransaction(ctx, &api.ParseTransactionRequest{Transaction: tx})
fmt.Printf("parsed tx: principal: %s, gasprice: %d, maxgas: %d, nonce: %d\n",
	txResp.Tx.Principal.Address, txResp.Tx.GasPrice, txResp.Tx.MaxGas, txResp.Tx.Nonce.Counter)

// broadcast it
sendResp, _ := txService.SubmitTransaction(ctx, &api.SubmitTransactionRequest{Transaction: tx})

// return the txid
fmt.Printf("status code: %d, txid: %s, tx state: %s\n",
	sendResp.Status.Code, hex.EncodeToString(sendResp.Txstate.Id.Id), sendResp.Txstate.State.String())
```

## Tracking

As [explained above](#lifecycle), the transaction lifecycle in Spacemesh is fairly straightforward. Once a transaction has been broadcast, assuming it's syntactically correct (i.e., that it could be parsed and has a valid signature), it'll be gossiped across the network and enter the mempool of running miners. Assuming it's also contextually valid (i.e., the principal account has enough balance, the nonce is valid, it pays a high enough fee, it doesn't conflict with another transaction, etc.), it'll then be mined into a block within a few minutes. Once the layer containing that block has been confirmed by the Tortoise consensus mechanism, the block and its transactions will be applied to the state.

The status of a transaction can be monitored using the [`TransactionService.TransactionsState`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#TransactionService.TransactionsState) API endpoint, e.g.:

```
> grpcurl -d '{"transaction_id":[{"id":"aiTyekUcGcbLp+MU63aPLMgDUf3m+5rphO4NqwM+Qv0="}]}' -plaintext localhost:9092 spacemesh.v1.TransactionService.TransactionsState
{
  "transactionsState": [
    {
      "id": {
        "id": "aiTyekUcGcbLp+MU63aPLMgDUf3m+5rphO4NqwM+Qv0="
      },
      "state": "TRANSACTION_STATE_PROCESSED"
    }
  ]
}
```

The `state` in the response will be one of `TRANSACTION_STATE_MEMPOOL` or `TRANSACTION_STATE_PROCESSED`, corresponding to the situations described above. Once the state is set to `TRANSACTION_STATE_PROCESSED`, a transaction may be considered applied and effective. You can confirm this by [fetching the block](#fetching-a-block) that contains the transaction and checking for `"status": "LAYER_STATUS_CONFIRMED"`.

### Full VM

In the future, once we introduce a full VM, the transaction lifecycle will change. For instance, it'll be possible for a transaction to be "processed" (a.k.a., applied) but "ineffective" or "failed" (akin to a reverted transaction in Ethereum). We'll also be adding a [`TransactionReceipt`](https://pkg.go.dev/github.com/spacemeshos/api/release/go/spacemesh/v1#TransactionReceipt) object to allow applications to fetch more information about a processed transaction: the amount of gas spent, fee paid, applied layer, index within the layer/block, associated state changes, etc. These are not yet implemented.

The API [currently defines](https://github.com/spacemeshos/api/blob/master/spacemesh/v1/tx_types.proto) additional types of transaction states, but these are unused for now.

# Finality

Spacemesh has two separate consensus mechanisms, Tortoise and Hare, and each provides different finality guarantees.

The Hare mechanism provides fast optimistic finality, typically within five minutes, i.e., within the span of a single layer time. Layers that have passed Hare (i.e., for which a signed Hare certificate is available) are applied optimistically applied to the Spacemesh state and are marked `LAYER_STATUS_APPROVED` in the API. In practical terms this should be regarded as the equivalent of multiple PoW confirmations of a blockchain with a comparable market capitalization to Spacemesh.

The Tortoise mechanism provides a second layer of stronger, probabilistic finality that grows over time, just as in Nakamoto consensus/PoW-based blockchains like Bitcoin. As in Bitcoin no layer is ever completely final in Tortoise, and there could always be a different chain tip with greater accumulated weight, but the likelihood of this happening falls exponentially over time. Layers that have passed Tortoise are marked `LAYER_STATUS_CONFIRMED` in the API and may be considered finalized barring an exceptional violation of the security assumptions coupled with an exceptional reorg.

While a reorg is highly unlikely, you may monitor for one by periodically using [`MeshService.LayersQuery`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#MeshService.LayersQuery) or [`MeshService.LayerStream`](https://pkg.go.dev/github.com/spacemeshos/go-spacemesh@v1.2.1/api/grpcserver#MeshService.LayerStream) (look for a changing block `id` or layer `hash` or `rootStateHash`).

# Resources

- [[Smesher Guide]]
- https://github.com/lrettig/awesome-spacemesh/
- [Explorer](https://explorer.spacemesh.io/overview)
