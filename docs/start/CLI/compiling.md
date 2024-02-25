---
id: compiling
title: Compiling a Full Node
---

go-spacemesh has a very limited set of dependencies and requirements, the main one being a Go toolchain. It also requires `make` and [Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage). Make sure you have a [recent version of Go](https://go.dev/dl/) installed, clone the [go-spacemesh repository](https://github.com/spacemeshos/go-spacemesh), then run `make install`, which will install the other dependencies for you automatically. Note that this includes a compiled version of the Spacemesh PoST library, but as long as your Go toolchain is set up correctly, this should work out of the box.

You can see the minimum required version of Go in a few places including [`go.mod`](https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/go.mod#L3) and the [README](https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/README.md?plain=1#L89).

Assuming you intend to run your node on mainnet, **make certain that you compile using the tag that matches the [latest release](https://github.com/spacemeshos/go-spacemesh/releases)**, e.g.:

```bash
> git clone --depth 1 --branch v1.1.1 https://github.com/spacemeshos/go-spacemesh.git
> make install
> make build
```

This builds the `go-spacemesh` binary in the `build/` directory.

For the most up to date information on compiling check the [README](https://github.com/spacemeshos/go-spacemesh#readme), [Makefile](https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile) and [Makefile-libs](https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile-libs.Inc), and the [release workflow](https://github.com/spacemeshos/go-spacemesh/blob/develop/.github/workflows/release.yml).
