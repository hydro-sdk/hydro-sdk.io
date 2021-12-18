---
sidebar_position: 6
---

# Hydro-SDK Design

#

## Objective
Provide a complete software development kit (SDK) to allow developers to build Flutter experiences in languages other than Dart and deliver those experiences over the air (OTA).

## Background
The API surface, development experience (hot-reload) and deployment model (native AOT) of Flutter combine to make it a fantastic choice for building apps. 

Codepush services built for web based development frameworks like Cordova, Ionic and React Native have shown to provide tremendous value for users of those frameworks. While Flutter's native AOT deployment model provides for great performance, it precludes any kind of over the air delivery.

Many have tried and are working on different approaches to bring an OTA capability to Flutter. In general, these approaches can be broadly classified into a few categories:

### Android APK Updating
Use native Android APIs to download and update the installed APK.

### UI as Configuration
Use JSON (or another format) to describe trees of widgets.

### UI as Configuration from Dart
Parse Dart source code to produce JSON (or another format) to describe trees of widgets. Some initiatives have taken this a step further by building recursive AST interpreters for a subset of the parsed Dart source code. Examples are [Meituan Waimai's Flap](https://tech.meituan.com/2020/06/23/meituan-flutter-flap.html) or [Wuba's Fair](https://github.com/wuba/fair).


### Native Bridge
Wether using V8, Javascript Core or some other Javascript engine. Enable developers to write code in Javascript with Flutter like APIs. Use a Javascript engine at runtime to connect Javascript to Dart and the Flutter framework. Examples of this are [Taobaos's Kraken](https://github.com/openkraken) and [Tencent's MxFlutter](https://github.com/tencent/mxflutter)

### Virtual Machine Written in Dart
A virtual machine for a new or existing language written entirely in Dart. Examples of this are [Hetu](https://github.com/hetu-script) and [AppoloVM](https://github.com/ApolloVM/apollovm_dart).

## Hydro-SDK
Hydro-SDK aims to differentiate itself from the above categories by providing a tight vertical integration of the entire development and deployment experience from writing code to deploying it.

Each layer of Hydro-SDK should be small and as generic as possible. Where cross cutting concerns must happen in order to enable a feature (for example, hot-reload) it should be isolated and itself built as generically as possible.

### Runtime
Hydro-SDK aims to have as small of a runtime footprint as possible. Hydro-SDKs runtime system, [common Flutter runtime (CFR)](https://hydro-sdk.io/docs/design-documents/cfr) is a subset of a Lua 5.2 environment. It provides an interpreter for Lua 5.2 bytecode, a set of Lua 5.2 intrinsics and a binding system for clean and powerful interop with Dart code. Poviding a full Lua parser and runtime compiler is out of scope. All complexity related to compiling and packaging code is left to other layers. This is similar to the philosophy of [the Hermes Engine](https://hermesengine.dev/).

### Compile Time
Compiling TypeScript to Lua source code, managing incremental compilations and generating debugging symbols is the responsibility of the `ts2hc` SDK-tool. Compiling Lua source code to bytecode is separately handled by the `luac52` SDK-tool.

### Project Build Time
`build-project`, `run-project` and `codepush` SDK-tools all need to be able build and package projects for different purposes. Project building is managed by the [`*Builder` family of classes](https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/build-project) and shared across SDK-tools.

### Automatic Language Projection (ALP)
Hydro-SDK aims to differentiate itself most critically by allowing rich interop with Dart packages. All tooling related to ALP is managed by [SWID](https://hydro-sdk.io/docs/design-documents/swid).
