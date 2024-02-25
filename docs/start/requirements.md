---
id: requirements
title: System Requirements
---

## Spacemesh Genesis Candidate System Requirements

### System Requirements

#### Minimum requirements for running a node:
- CPU: Intel or AMD x86-64 or 64-bit ARM, including Apple Silicon (but not Raspberry Pi)
Memory: 1GiB+
- OS: Windows 10/11, MacOS, Ubuntu 22.04+ or Fedora 36+
- Disk: 50GiB of free disk space
- An always-on, unmetered Internet connection capable of 5 mbps download and 1 mbps upload

#### For smeshing in addition to running a node:
- CPU support for AES-NI
- 256GiB of free disk space for PoST files
- Any GPU with OpenCL support

#### To support more than the minimum space allocation for smeshing, or to allow uninterrupted use of the computer while the node is running, it’s recommended to have:
- A hard drive that can sustain at least 100MB/s of sequential read
- A multi-core CPU from the last 8 years

> The Spacemesh App is an Electron App. It is supported on any Linux distribution that supports Electron apps.

#### Supported Processors for proof of space setup

You can create proof of space data using your computer's integrated graphics card, a discrete graphics card, or your computer's main CPU. The following processors are supported:

- A modern Intel or AMD x86-64 cpu.
- An Nvidia GPU with CUDA support (minimum compute compatibility 5.0, maximum compute compatibility 8.6), and Nvidia drivers version R450 or newer. [Nvidia GPUs CUDA compute compatibility info](https://developer.nvidia.com/cuda-gpus).
- A GPU and drivers with Vulkan 1.2 support, such as a modern AMD, Apple M1 and M2, and Intel GPUs.

#### Popular Supported Processors Models

- Nvidia Geforce RTX 2070 / 2080.
- Nvidia GTX 1060.
- AMD Radeon RX [550](https://www.newegg.com/onda-model-rx550-4g/p/1DW-00C1-00001) / 570 / 580.
- AMD Radeon Pro 555x.
- Nvidia Tesla V100, T4, P100 or P4.
- Apple M1 and M2.
- Intel UHD Graphics 630.


## Operational Notes

### CPU Usage
As long as your system and configuration meets the recommended requirements, ongoing utilization of your CPU by the Spacemesh App should be limited during normal operation (after the initial setup phase) to 2 CPU cores.

### Network Configuration
Your network should allow the App to accept incoming connections on UDP port 7153 and on TCP port 7153 and your computer firewall should not block incoming UDP and TPC packets on this port. The App attempts to automatically configure your network using UPnP. In some cases you may need to configure your router and firewall manually. Follow [this guide](smapp/netconfig.md) to configure your network.

### Laptop Usage
You can install the App, run a Smesher and produce blocks on your laptop if it meets the minimum system requirements. However, you will need to make sure you leave your laptop open and connected to power and to the Internet 24/7.

Occasionally shutting down your laptop or the App may prevent you from Smeshing blocks and from earning Smeshing rewards.

### Spacemesh Full Node System Requirements

Following are the requirements for running the a Spacemesh 0.2 full node without running the Spacemesh App. We recommend this setup to technical users who are comfortable with the command line.

> With this setup, your computer will be dedicated to running the Spacemesh full node and will not be used for running other interactive apps.

- A computer with a modern Intel, an AMD CPU (2 cores / 4 native threads) or an Apple M1 CPU.
- OS: Windows 10/11, macOS, Ubuntu 22.04, Fedora 36.
- 4 GB RAM.
- 300 GiB free disk space (HDD or SSD).
- One of the supported processors for proof of space setup.
- An always-on, unmetered Internet connection capable of 10 mbps download and 1 mbps upload.

---

### About Proof of Space Data

You only need to setup proof of space data once to smesh for an unlimited period of time. The larger your proof of space data is, the higher your smeshing rewards will be.

You can use any magnetic hard drive (HDD) or SSD drive for storing proof of space data. There is no significant advantage in using an SSD over HDD.

You do not need to have temporary disk space larger than your final proof of space data. Creating proof of space data on more than one volume is not yet supported.
