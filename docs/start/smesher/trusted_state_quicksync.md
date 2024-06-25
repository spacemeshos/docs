---
id: trusted_state_quicksync
title: Trusted State aka Quicksync
---

## Quicksync

In response to the growing difficulty of syncing a fresh node, we have prepared a way to speed up the syncing process. Introducing, Quicksync.

Before reading any further, plaese read the annoucement about Quicksync [here](https://spacemesh.io/blog/making-sync-faster/).

### Getting the archive automatically

#### Smapp

Smapp will propose to run Quicksync automatically.

#### CLI

We have prepared a simple tool called [quicksync-rs](https://github.com/spacemeshos/quicksync-rs) that simplifies the process of getting the archive.

### Getting the archive manually

The most recent archive for a given version can be found at: `https://quicksync.spacemesh.io/<version>/latest.zst`. This URL will always redirect to the most recent archive for the given version.

The archive is compressed with `zstd` and can be decompressed using the following command: `zstd -d --long=31 o state.sql latest.sql.zst`. Note that the decompressed archive should be placed in the node data directory of the node.

Doing all of this using the CLI would look like the following:
```
Select your spacemesh version
SM_VERSION=v1.6.0
SM_DATA_DIR=/opt/go-spacemesh/

# Create a tmp dir
TMP_DIR=$(mktemp -d)

# Download quicksync
wget -O $TMP_DIR/state.sql.zst https://quicksync.spacemesh.network/$SM_VERSION/state.zst

# Extract the state.sql backup
zstd -d --long=31 -o $SM_DATA_DIR/state.sql $TMP_DIR/state.sql.zst

# Delete the TMP Dir
rm -fr $TMP_DIR
```
