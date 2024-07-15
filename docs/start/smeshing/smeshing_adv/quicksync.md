---
id: quicksync
title: Quicksync
---

When a new node joins the Spacemesh network, it must first get up to speed with the rest of its peers. This process is referred to as "syncing" and is a pre-requisite to running a full or a smeshing node. Historically, it has been difficult for smeshers to successfully sync their nodes owing to how time consuming the syncing process is. Primarily, syncing includes downloading and independently verifying all blocks, transactions, ATXs, along with some other data, and reconstructing the current state from scratch. Naturally, this took the average smesher a lot of time. As such, in response to the growing difficulty of syncing a fresh node, we have prepared a way to speed up the syncing process. Introducing, Quicksync.

With Quicksync, instead of performing all of the syncing actions as stated above and calculating the network state from genesis, one just needs to download the current state from a trusted peer like the Spacemesh dev team or some other node. While this runs contrary to the web3 philosophy of "Don't trust, verify", we believe that this could be a choice some smeshers may be interested in given the high rate of trouble with syncing. Moreover, nothing precludes a smesher from verifying this state in the background once it is downloaded.

The state (also called an archive) that is downloaded is in the form of a `state.sql` file and can either be downloaded automatically using by either using the Smapp or the [quicksync-rs](https://github.com/spacemeshos/quicksync-rs) tool, or manually via the CLI. Instructions for both approaches are given below.

### Getting the archive automatically

The archive can be downloaded automatically in two ways, by running Smapp or by using the [quicksync-rs](https://github.com/spacemeshos/quicksync-rs) tool.

#### Smapp

The latest version of Smapp will propose to run Quicksync automatically.

#### `quicksync-rs`

We have prepared a tool called [quicksync-rs](https://github.com/spacemeshos/quicksync-rs) that simplifies the process of getting the archive.

### Getting the archive manually

The archive can also be downloaded manually by using the CLI. It is assumed that you are smeshing using `go-spacemesh` and not via Smapp. The most recent archive for a given version can be found at: `https://quicksync.spacemesh.io/<version>/latest.zst`. This URL will always redirect to the most recent archive for the given version.

#### Linux and macOS instructions (bash/zsh terminal):

Before running these commands, make sure you have `wget` and `zstd` installed.

```bash
#Select your spacemesh version
SM_VERSION=v1.6.0
# Default path to the node data directory
SM_DATA_DIR=~/spacemesh/node-data 

# Create a temp directory
TMP_DIR=$(mktemp -d)

# Download the archive
wget -O $TMP_DIR/state.sql.zst https://quicksync.spacemesh.network/$SM_VERSION/state.zst

# Extract the archive
zstd -d --long=31 -o $SM_DATA_DIR/state.sql $TMP_DIR/state.sql.zst

# Delete the temp directory
rm -fr $TMP_DIR
```
