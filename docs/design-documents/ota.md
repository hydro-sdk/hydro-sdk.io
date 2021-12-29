---
sidebar_position: 5
---

# Over the Air (OTA) Package Files

#

## Objective
Provide a packaging and distribution format for code built using Hydro-SDK.

## Background
[Common Flutter Runtime (CFR)](https://hydro-sdk.io/docs/design-documents/cfr) provides an execution environment for Lua 5.2 bytecode chunks. The Lua 5.2 bytecode chunk format is not suitable for more general usecases.

`.ota` package files are used during development time. They are produced and served by the `run-project` SDK-tool and consumed by the `RunComponent` widget in a running host app. In release mode, the `RunComponent` widget downloads `.ota` package files from Registry and saves them in an on-device cache. 

## `.ota` Package Format
`.ota` files are tar archives compressed with bzip2. A `manifest.json` file in their root contains an `entries` array listing the path and sha256 hash of every contained file. The `mountableChunk` field in `manifest.json` contains the path to the bytecode chunk to be ran by CFR. The `signature` field in `manifest.json` contains the signature of the sha256 hash of the concatentation of all of the sha256 hashes of every file contained in the package, signed using an RSA private key. This signature can be verified using the associated package public key.

## Future Work
It is expected in the future that `.ota` packages will be used to deliver assets like images and configuration files.