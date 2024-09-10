---
id: advanced_config
title: Advanced Smapp Configuration
---

After running Smapp, you should see two config files in the Smapp data directory:

```bash
node-config.7c8cef2b.json
node-config.json
```

By default, these config files are located in:

- `$HOME/.config/Spacemesh/` for Linux,
- `C:\Users\hassa\AppData\Roaming\Spacemesh\` for Windows, and in
- `~/Library/Application\ Support/Spacemesh` for OS X.

The first file (`node-config.7c8cef2b.json`) is your local copy of the config (`7c8cef2b` is the genesis ID of the mainnet network). Config files for other networks will have different names. You can modify this file if you first exit Smapp. Save your changes and open Smapp again for your changes to take effect. The second file, (`node-config.json`) is the default network config and should not be touched. (It should match the config available via the discovery service, see below).  

**Note**: Use caution when modifying the configuration! This config file must maintain its structure. If you update, for example, the subkey of an object, it will not simply append it onto the main network config but will *overwrite the entire JSON object*. See [this](https://github.com/spacemeshos/smapp/issues/1407) for more information on the matter.
