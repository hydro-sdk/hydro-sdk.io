---
sidebar_position: 4
---

# SDK-Tools
SDK-Tools are the command line programs produced as part of each Hydro-SDK release.

#

## Storage
By default, Hydro-SDK sets up a `.hydroc` directory in the current working directory that the `hydroc` command is run. The directory is organized by Hydro-SDK version. `.hydroc/<version>/sdk-tools` are where the SDK-Tools of a given version are stored. Other cache and temp directories will be created under `.hydroc/<version>` as needed. `.hydroc` should be ignored by version control.

## `hydroc`
The `hydroc` command is the interface to Hydro-SDK. `hydroc` will download and manage SDK-Tools for the currently active Hydro-SDK version and provide a convenient interface to the SDK-Tools. Run `hydroc --help` for a full description of available commands.

## `build-project`

## `hc2dart`

## `luac52`

## `run-project`

## `swid`

## `ts2hc`