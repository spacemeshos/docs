---
id: requirements
title: System Requirements
---

This page will guide you through the hardware, software, and network requirements for running a:

- **Full Node (also called "full node" or "node")**: A node that stores the blockchain state and executes transactions contained in valid blocks.
- **Smeshing Node**: A full node that smeshes as well.

## Minimum Requirements for Running a Full Node

- CPU: Intel or AMD x86-64 (2 cores / 4 native threads) or 64-bit ARM, including Apple Silicon (but not Raspberry Pi)
Memory: 8GiB+
- OS: Windows 10/11, MacOS, Ubuntu 22.04+ or Fedora 36+
- Disk: 100GiB of free disk space
- An always-on, unmetered Internet connection capable of 5 mbps download and 1 mbps upload
- Visual C++ runtime must be installed (If you want to use Smapp for smeshing as opposed to using the CLI. Using the Smapp is recommended for beginner smeshers.)

**Note** that if you want to use your computer for other purposes while the node is running, it is recommended to have the following as well:

- A hard drive that can sustain at least 100MB/s of sequential read. A high-performance HDD or an SSD can achieve this sequential read rate.
- A multi-core CPU from the last 8 years.

## Minimum Requirements for Smeshing

In addition to the minimum requirements for running a full node, the following are required for smeshing:

- A CPU that supports AES-NI.
- 256GiB of free disk space for PoST files (this is in addition to the 100GiB required for a full node, so 356GiB in total)
- A GPU and drivers with OpenCL support (any modern Nvidia, AMD, Apple M*, and Intel GPU).

**Note** that 256GiB is the minimum free disk space required to start smeshing. Practically, it is always better to have more than that for a smoother experience.

### Supported Processors for Proof of Space (PoS) Setup

Generating a PoS is an integral part of the smeshing process, and occurs at its start. This proof shows that you reserved x GiB of disk space and dedicated it to smeshing. You can create PoS data using your computer's:

- integrated graphics card, (Faster)
- discrete graphics card, or (Fastest)
- CPU (Slowest).

The following popular processor models are supported:

- Nvidia Geforce RTX
- Nvidia Data Center GPUs - A100, H100, A series, L series, etc.
- AMD Radeon GPUs
- Apple M* GPUs
- Intel UHD Graphics
- Intel Iris Xe GPUs

Having understood the system requirments, it is understanding the [Practical Considerations](../considerations.md) of smeshing.
