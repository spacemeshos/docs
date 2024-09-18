---
id: install
title: Install Smapp
---

# Joining the Network

To join the Spacemesh network, you can either run the Spacemesh App (Smapp) on your desktop computer, or run `go-spacemesh` with our CLI tools. This guide is for using Smapp, which is simpler and recommended for most smeshers.

## About Smapp

Smapp includes a Spacemesh full p2p node (which we call a Smesher), and a basic Smesh Wallet which we call the "Wallet".

### Smesher

The Smesher is the software that creates and updates the Smesh (SMH) distributed ledger. It also creates and maintains your disk space commitment to the Spacemesh network. The Spacemesh decentralized platform is created by people just like you who run a smeshing node (a computer running the smesher via the Smapp) on their own desktop computers. Naturally, those who run their smeshing nodes are called "smeshers".

Your smeshing node participates in the Spacemesh decentralized consensus protocol and is responsible for the meshing process. smeshing is the process of submitting eligible block proposals that are used to generate a block, for which you receive rewards. Here is a [full explanation](https://spacemesh.io/blog/requirements-for-spacemesh-rewards/) of what is required of a node in order to earn these rewards.

Before you can produce block proposals, you need to [commit](../../../learn/post.md#proof-of-space) a [minimum of 356 GiB](../requirements.md#minimum-requirements-for-smeshing) of free storage on your hard drive. The commitment (also known as space initialization or just initialization) process only happens once when you first set up Smapp and is used indefinitely to produce more blocks. In case you wish to increase your storage commitment, the initialization process will be run again.

### Wallet

The Wallet is a basic Smesh (SMH) coin Wallet that you use to maintain your SMH coin account, execute transactions, and check the status of incoming transactions initiated by other accounts. If you do not wish to run your own smeshing node, Smapp can also be run in wallet-only mode.

## Installing Smapp

Smapp integrates a Smesher and a Wallet into one package. As such, we hope you will find Smapp to be straightforward and easy to use, even without a deep technical understanding of cryptocurrency terms and concepts.

> You do NOT need to run any additional software to join the network besides running Smapp on your computer.

Follow the instructions below download, install, and run the Smapp.

### Step 1 - Downloading the Installer

> Before downloading the installer, please confirm that your computer meets the [minimum system requirements](https://docs.spacemesh.io/docs/start/smeshing/requirements) for both running a [full node](../requirements.md#minimum-requirements-for-running-a-full-node) and, if you intend to smesh, a [smeshing node](../requirements.md#minimum-requirements-for-smeshing). 

Download the latest version of the Smapp installer for your OS by visiting our [main website](https://spacemesh.io/start).

#### Security Notes

> All software released by Spacemesh is 100% open-source. The Smapp installer you just downloaded was packaged from the code present in the [Spacemesh open-source software repositories](https://github.com/spacemeshos) available on GitHub. We provide the installer to make it convenient for non-developers to join the Spacemesh network.

### Step 2 - Installing Smapp

**Locate the Installer you downloaded and double-click it** to install Smapp.

#### Windows

Follow the on-screen instructions. The installer defaults to launching Spacemesh as soon as the installation is complete.

> If you see a Windows security alert then check the 'Private networks' checkbox and click 'Allow access'.

#### OS X

Drag the Smapp icon in the installer window to the Applications folder shortcut. Next, open your "Applications" directory and double-click `Spacemesh` to launch it.

#### Linux

> If your Linux system does not support Electron apps then you can build a Spacemesh full node and a CLI Wallet from source code. For more information, see the [`go-spacemesh` README](https://github.com/spacemeshos/go-spacemesh)

For the easiest installation process, we recommend installing the `AppImage` version of Smapp on your Linux system. Double-click the installer to install Smapp. Once the installation is complete, Smapp should be installed in `/opt/Spacemesh` and you should see the app listed under the Applications menu in your window manager. You can now launch Smapp.
