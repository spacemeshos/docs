---
id: trusted_state_quicksync
title: Trusted State aka Quicksync
---

## Quicksync

In a response for the growing difficulty of syncing fresh node we've prepared a way to speed up the process. It's called Quicksync.

Before reading any further plaese read the annoucement about Quicksync [here](https://spacemesh.io/blog/making-sync-faster/).


### Automated way of getting the archive

#### Smapp

Smapp will propose to run the quicksync automatically

#### CLI

We have prepared simple tool [quicksync-rs](https://github.com/spacemeshos/quicksync-rs) that simplifies the process of getting the archive.


### Manual way of getting the archive

The most recent archive for given version can be found at:
`https://quicksync.spacemesh.io/<version>/latest.zst` It will always redirect to the most recent archive for the given version.

As you can see the archive is compressed with zstd. You can decompress it with `zstd` tool. Downloaded archive can be decompressed with the following command:
`zstd -d --long=31 o state.sql latest.sql.zst``


A script doing that all could look like:
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

Archive should be placed in the node data directory of the node.
