---
id: requirements
title: System Requirements
---

## Spacemesh System Requirements

### Minimum Requirements for Running a Node

- CPU: Intel or AMD x86-64 (2 cores / 4 native threads) or 64-bit ARM, including Apple Silicon (but not Raspberry Pi)
Memory: 8GiB+
- OS: Windows 10/11, MacOS, Ubuntu 22.04+ or Fedora 36+
- Disk: 100GiB of free disk space
- An always-on, unmetered Internet connection capable of 5 mbps download and 1 mbps upload
- Visual C++ runtime must be installed (If you want to use Smapp for smeshing as opposed to using the CLI. Using the Smapp is recommended for beginner smeshers.)

Note that if you want to use your computer for other purposes while the node is running, it is recommended to have the following as well:

- A hard drive that can sustain at least 100MB/s of sequential read. A high-performance HDD or an SSD can achieve this sequential read rate.
- A multi-core CPU from the last 8 years.

### Minimum Requirements for Smeshing

In addition to the minimum requirements for running a node, the following are required:

- A modern Intel or AMD x86-64 CPU that supports AES-NI.
- 256GiB of free disk space for PoST files.
- A GPU and drivers with OpenCL support (any modern Nvidia, AMD, Apple M*, and Intel GPU).

Note that 256GiB is the minimum free disk space required to start smeshing. Practically, it is always better to have more than that. 

#### Supported Processors for Proof of Space (PoS) Setup

Generating a PoS is an integrap part of the smeshing process and occurs at its start. This proof shows that you reserved x GiB of disk space and dedicated it to smeshing. You can create PoS data using your computer's:

- integrated graphics card, (Faster)
- discrete graphics card, or (Fastest)
- CPU. (Slowest)

The following popular processor models are supported:

- Nvidia Geforce RTX
- Nvidia Data Center GPUs - A100, H100, A series, L series, etc.
- AMD Radeon GPUs
- Apple M* GPUs
- Intel UHD Graphics
- Intel Iris Xe GPUs

## Things to Remember

It is worth taking a note of the following considerations as you embark on your smeshing journey.

### CPU Usage

As long as your system and configuration meet the recommended requirements, the on-going utilization of your CPU by the Smapp should be limited to 2 CPU cores during normal operation (after the initial setup phase).

### Network Configuration

Your network should allow the Smapp to accept incoming connections on **UDP port 7153** and on **TCP port 7153** and your computer firewall **should not block incoming UDP and TPC packets on this port**. The App attempts to automatically configure your network using UPnP. In some cases you may need to configure your router and firewall manually. Follow [this guide](./netconfig.md) to configure your network.

### Using a Laptop for Smeshing

Of course, you can smesh on your laptop if it meets the minimum system requirements. However, you will need to make sure you leave your laptop **open/awake and connected to power and to the Internet 24/7**. This may degrade your laptop's battery.

Occasionally **shutting down your laptop or the Smapp may prevent you from Smeshing blocks and from earning Smeshing rewards**.

### About Proof of Space Data

You only need to setup proof of space data once to smesh for an unlimited period of time. The larger your proof of space data is, the higher your smeshing rewards will be.

You can use any magnetic hard drive (HDD) or SSD drive for storing proof of space data. There is no significant advantage in using an SSD over HDD.

You do not need to have temporary disk space larger than your final proof of space data. Creating proof of space data on more than one volume is not yet supported.
