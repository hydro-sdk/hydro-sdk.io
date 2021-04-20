---
sidebar_position: 7
---

# Common Flutter Runtime
The Common Flutter Runtime (CFR) encompasses the runtime and virtual machine used to execute Hydro-SDK content in a host application.

#

## Virtual Machine
The CFR virtual machine is an implementation of a subset of a PUC-RIO Lua 5.2 environment. It provides an interpreter for Lua 5.2 bytecode and a small set of instrinsic functions supporting common Lua 5.2 operations. The interpreter supports source-mapping and hot-reload through the use of debugging symbols when both the interpreter and the code it is executing is built in debug mode.

## Runtime
The CFR runtime binding system is based on Lua calling conventions. The runtime and virtual machine cooperate to allow for binding Dart objects contained in virtual registers or memory with Lua tables. The runtime supports safely downcasting and unmarshalling Dart objects bound to Lua tables back into regular Dart objects to be passed to Dart APIs that don't know about the CFR.

## Namespace Bindings
The CFR can consume and expose bindings to Lua produced by Hydro-SDK's Structured Wrapper and Interface Generator for Dart (SWID) SDK-Tool. By default the only exposed bindings are `dart` and `flutter`.

Users will generally interact with an instance of the CFR by using the `RunComponent` or `RunComponentFromFile` widgets. The `RunComponent*` widgets will load, verify, and unpack a `.ota` file, passing its mountable bytecode chunk to a CFR instance that the widget will manage. The CFR itself doesn't know anything about `.ota` files.