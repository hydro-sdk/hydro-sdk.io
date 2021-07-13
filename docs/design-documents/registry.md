---
sidebar_position: 4
---

# Registry

https://registry.hydro-sdk.io

## Objective
Provide a set of REST APIs to manage `.ota` package publishing and management with a default hosted implementation.

## Background
Codepush / over the air publishing services are typically separate initiatives from the frameworks which they target. Registry aims to provide an integrated codepush experience for Hydro-SDK.

## APIs
The REST APIs used to communicate with Registry are currently unstable though they are expected to stabilize for a future 1.0.0 release of Hydro-SDK. 

The API is documented using Swagger at https://api.registry.hydro-sdk.io/docs

The client implementation is open-source at https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/registry/registryApi.dart

Though the service powering https://registry.hydro-sdk.io is closed-source (and will likely remain so), the APIs are open and Registry implementations can be freely swapped out by end users. Parts of Hydro-SDK which interact with Registry expect an instance of `RegistryApi`. `RegistryApi` can be configured with a different scheme, host or port than the default which points to the closed-source implementation. Similarly, the `codepush` SDK-tool can be provided with `--registry-scheme`, `--registry-host` and `--registry-port` switches to override the default.