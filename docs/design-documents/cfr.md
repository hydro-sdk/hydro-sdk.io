---
sidebar_position: 2
---

# Common Flutter Runtime (CFR)

https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/cfr

## Objective
Provide a virtual machine and runtime environment based on PUC-RIO Lua 5.2 that can cleanly interop with Dart and Flutter.

## Background
Lua is a dynamically typed, table based language. Though somewhat niche, Lua's relative simplicity and small footprint have made it popular as an embedded scripting environment for larger applications. Particularly in video games.

## Virtual Machine
The CFR virtual machine is an implementation of a subset of a PUC-RIO Lua 5.2 environment. It provides an interpreter for Lua 5.2 bytecode and a small set of intrinsic functions supporting common Lua 5.2 operations. The interpreter support function-mapping and hot-reload through the use of debugging symbols.

## Runtime
The CFR runtime binding system is based on Lua calling conventions. The runtime and virtual machine cooperate to allow for binding Dart objects contained in virtual registers or memory with Lua tables. The runtime supports safely downcasting and unmarshalling Dart objects bound to Lua tables back into regular Dart objects to be passed to Dart APIs that don't know about the CFR.