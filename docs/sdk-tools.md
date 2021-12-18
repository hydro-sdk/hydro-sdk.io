---
sidebar_position: 6
---

# SDK-Tools
SDK-Tools are the command line programs produced as part of each Hydro-SDK release.

#

## Storage
By default, Hydro-SDK sets up a `.hydroc` directory in the current working directory that the `hydroc` command is run in. The directory is organized by Hydro-SDK version. `.hydroc/<version>/sdk-tools` are where the SDK-Tools of a given version are stored. Other cache and temp directories will be created under `.hydroc/<version>` as needed. `.hydroc` should be ignored by version control.

## `hydroc`
The `hydroc` command is the interface to Hydro-SDK. `hydroc` will download and manage SDK-Tools for the currently active Hydro-SDK version and provide a convenient interface to the SDK-Tools. Run `hydroc --help` for a full description of available commands.

## `build-project`
Parses Hydro project descriptions, using `ts2hc` to compile TypeScript chunk entrypoints. Produces `.ota` package files. This command should not be called directly by users.

## `hc2dart`
Takes as input `.hc` bytecode chunk files. Produces as output an `hc.g.dart` file which exports a `thunks` variable that can be loaded into a CFR instance in a host app to provide native functions. This command should not be called directly by users.

## `luac52`
A distribution of the PUC-RIO Lua 5.2 compiler. This command should not be called directly by users.

## `run-project`
Parses Hydro project descriptions, using `ts2hc` to compile TypeScript chunk entrypoints. Produces `.ota` package files and serves them for listening host apps. This command should not be called directly by users.

## `swid`
Parses a SWID configuration file and produces as output TypeScript language projections and Dart bindings. This command should not be called directly by users.

## `ts2hc`
Takes as input a TypeScript entrypoint. Produces as output a Lua bundle, debugging symbols, incremental compilation data and a `.hc` bytecode chunk. This command should not be called directly by users.

## `codepush`
Parses Hydro project descriptions, using `ts2hc` to compile TypeScript chunk entrypoints. Produces `.ota` package files, signs and publishes them to the configured Registry. This command should not be called directly by users.