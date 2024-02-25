---
id: running
title: Running a Full Node
---


The node features a set of reasonable default parameters that should work well out of the box for most users and most use cases, but you can change all of them using command line flags and/or the config file. The exact command you use to run `go-spacemesh` will depend upon your local configuration and requirements. See the [README](https://github.com/spacemeshos/go-spacemesh#readme) and run `go-spacemesh -h` for the full list of arguments:

```bash
> go-spacemesh -h
start node

Usage:
  node [flags]
  node [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  version     Show version info

Flags:
  -a, --accounts string=uint64                        List of prefunded accounts
      --advertise-address string                      libp2p address with identity (example: /dns4/bootnode.spacemesh.io/tcp/5003)
      --beacon-first-voting-round-duration duration   First voting round duration in milliseconds (default 30m0s)
      --beacon-grace-period-duration duration         Grace period duration in milliseconds (default 10m0s)
      --beacon-kappa int                              Security parameter (for calculating ATX threshold) (default 40)
      --beacon-proposal-duration duration             Proposal duration in milliseconds (default 4m0s)
      --beacon-q *big.Rat                             Ratio of dishonest spacetime (for calculating ATX threshold). It should be a string representing a rational number. (default 1/3)
      --beacon-rounds-number uint32                   Amount of rounds in every epoch (default 300)
      --beacon-sync-weight-units int                  Numbers of weight units to wait before determining beacon values from them. (default 800)
      --beacon-theta *big.Rat                         Ratio of votes for reaching consensus (default 1/4)
      --beacon-votes-limit uint32                     Maximum allowed number of votes to be sent (default 100)
...
```

Assuming everything else is set up correctly in your config file (see next section), the only CLI flag you need is to specify the location of the config file, e.g.:

```bash
> go-spacemesh -c node-config.json
```
