---
id: troubleshooting
title: Troubleshooting
---

## Corrupt PoST Data

One of the realities of hard drives is that, once in a while, they fail, resulting in corrupt data. Data corruption can also occur while [copying or moving](./advanced.md#moving-post-files) data across systems. Hopefully you'll never have
to deal with this situation, but if it does happen, you'll most likely find out when a message like the following appears in your log:

<!-- markdownlint-disable MD013 -->
```console
2023-09-18T03:37:09.147-0400    INFO    abcde.nipostValidator   Found proof for nonce: 0, pow: 22517998136898104 with [96506732, 8522344264, 15809824782, 17090809665, 22898048404, 23339075780, 33564380939, 37517090594, 38587115133, 42519923294, 47489969603, 66776374486, 85751204605, 97571767596, 98954096617, 103466964513, 105410396815, 108719413993, 110747747703, 114712568823, 122975084397, 128938645449, 135064014126, 137417405566, 137527071596, 142672661935, 145176618414, 149504039139, 150155464780, 156195137948, 162912656308, 188599527912, 192691123424, 196101601537, 196889191957, 202704285017, 204635877880] indices     {"node_id": "abcde", "module": "nipostValidator", "module": "post::prove", "file": "src/prove.rs", "line": 323}
2023-09-18T03:37:09.353-0400    INFO    abcde.post      proving: generated proof        {"node_id": "abcde", "module": "post"}                                                                                                                         2023-09-18T03:37:09.353-0400    INFO    abcde.atxBuilder        created the initial post        {"node_id": "abcde", "module": "atxBuilder"}
2023-09-18T03:37:09.353-0400    INFO    abcde.atxBuilder        verifying the initial post      {"node_id": "abcde", "module": "atxBuilder", "post": {"nonce": 0, "indices": "6c93c00500d229fe7ee0806ce53a043dc4ea0f947dd454053182c75bb1f07c097d887cc5f0227da6f8fb8897a2987932dcf6e9b05873ba303efd8a2bf7134bc1eead95fefaa1708558725c608f02f38a58baa60b54765748919cdd8f9bd56a6ddfe2a15cf2e55581e7d21427f7f9d1dcfa7f6c934005e06b03fd4de85a36d31c8e638a3c8b4c90f6f522672a7d1749bb9de55ea2a7a1a5afe03449dd6c403e246a5b612a78dd66b577c8bcf8b13fa52f"}, "metadata": {"Challenge": "0000000000000000000000000000000000000000000000000000000000000000", "LabelsPerUnit": 4294967296}, "name": "atxBuilder"}
2023-09-18T03:37:09.410-0400    ERROR   abcde.nipostValidator   Proof is invalid: MSB value for index: 137527071596 doesn't satisfy difficulty: 207 > 0 (label: [215, 101, 80, 15, 36, 236, 60, 243, 203, 157, 178, 129, 73, 177, 132, 65])       {"node_id": "abcde", "module": "nipostValidator", "module": "post::post_impl", "file": "ffi/src/post_impl.rs", "line": 242}                                                                                                                                                                                            2023-09-18T03:37:09.413-0400    FATAL   abcde.atxBuilder        initial POST proof is invalid. Probably the initialized POST data is corrupted. Please verify the data with postcli and regenerate the corrupted files.   {"node_id": "abcde", "module": "atxBuilder", "errmsg": "verify PoST: invalid proof", "name": "atxBuilder"}
```
<!-- markdownlint-enable MD013 -->

This message indicates that, despite the presence of a complete identity, the smesher was unable to generate a PoST proof for a particular epoch due to corruption in the PoST data. The best way to verify this is to run [`postcli`](https://github.com spacemeshos/post/tree/develop/cmd/postcli) in verify mode:

<!-- markdownlint-disable MD013 -->
```console
> postcli -datadir /Volumes/post/7c8cef2b -fromFile 531 -verify -fraction 0.01
2023/09/18 13:51:59 cli: verifying identity.key
2023/09/18 13:51:59 cli: identity.key is valid
2023/09/18 13:51:59 cli: verifying POS data
2023-09-18T13:51:59.504-0400    INFO    verifying POS data in /Volumes/post/7c8cef2b  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 34}
2023-09-18T13:51:59.504-0400    INFO    verifying POS files 531 -> 927  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 39}
2023-09-18T13:51:59.504-0400    INFO    verifying file /Volumes/post/7c8cef2b/postdata_531.bin      {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 43}
2023-09-18T13:51:59.504-0400    INFO    verifying 26843 labels  {"module": "post::pos_verification", "file": "src/pos_verification.rs", "line": 66}
2023-09-18T13:52:02.348-0400    INFO    POS data is invalid: invalid label in file 531 at offset 126368       {"module": "post::initialization", "file": "ffi/src/initialization.rs", "line": 242}
2023/09/18 13:52:02 cli: invalid POS
```
<!-- markdownlint-enable MD013 -->

You can do this for an entire identity, or only for a subset of files (using `-fromFile` and `-toFile`. See the [README](https://github.com/spacemeshos/post/tree/develop/cmd/postcli) for more information). If nothing else is touching the drive (e.g., if the node is shut down and the drive isn't being used for any other purpose), then running `postcli verify` with `-fraction 0.01` should be quite quick; you can run with a larger fraction for a more thorough check. Note also that multiple files may be corrupt. `postcli verify` will quit after detecting a single corrupt file, and you can restart it with a higher `-fromFile` to continue the process. Serious smeshers may wish to run such a verification process periodically to detect corruption issues before they lead to failures in proof generation and lost rewards. Once corrupt data is detected, the only option is to delete and regenerate the affected files. If the files are deleted
and the node is restarted, it'll automatically restart the PoST initialization process to fill in the missing data, or this can be done manually using `postcli`.

## Additional troubleshooting

### `timesync: peers are not time synced`

Please make sure that your system clock is synced with the internet. Please refer to time synchronization instructions for your operating system.

If you're 100% certain that your time is correct you can disable the time sync check by setting the following config:

```json
{
    "time": {
        "peersync": {
            "disable": true
        }
    }
}
```

### My node uses too much memory and I don't know why

Please add a `"pprof-server": true`, to the config at the main level or add `--pprof-server` to the command line. Restart the node and then visit <http://127.0.0.1:6060/debug/pprof/profile?seconds=30> and <http://127.0.0.1:6060/debug/pprof/heap> in your default browser and download the files. Please share then these files on discord or github issue. Advanced users can use `go tool pprof http://localhost:6060/debug/pprof/heap` to see what is using the memory.
