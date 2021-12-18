---
slug: fluttering-over-the-air
title: Fluttering Over the Air
author: Chris Gibb
author_title: Recovering Structural Typing Enthusiast
author_url: https://github.com/chgibb
author_image_url: https://avatars.githubusercontent.com/u/18079458?s=400&v=4
tags: [flutter, typescript, react-native, hot-reload, codepush]
keywords: [flutter, typescript, react-native, hot-reload, codepush]
description: Codepush for Flutter
---

Announcing Hydro-SDK `0.0.1-alpha.0` and Codepush for Flutter

<!--truncate-->

[Flutter](https://flutter.dev/) is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop and embedded devices from a single codebase.

[Hydro-SDK](https://github.com/hydro-sdk/hydro-sdk) is a software development kit (SDK) enabling Flutter developers to write portions of their app (or their entire app) using TypeScript. It is a project with one large, ambitious goal. "Become React Native for Flutter".  
It aims to do that by:
1. Decoupling the API surface of Flutter from  the Dart programming language.
2. Decoupling the development time experience of Flutter from the Dart programming language.
3. Providing first-class support for over-the-air distribution of code.
4. Providing an ecosystem of packages from `pub.dev`, automatically projected to supported languages and published to other package systems.

In this article I want to announce and describe the realization of goal 3.

## Registry
![Registry Diagram](/img/hydro-registry-diagram.png)
Registry is a service for publishing and delivering [`.ota` (over-the-air) package files](https://hydro-sdk.io/docs/design-documents/ota) produced for Hydro-SDK components.

Hydro-SDK builds and manages code in terms of projects. Projects consist of components. Hydro-SDK content is embedded into a host app using the `RunComponent` widget. While developing with Hydro-SDK locally, the `RunComponent` widget and `hydroc run` command work together to rebuild and hot-reload your code as you make changes. See the [getting started tutorial](https://hydro-sdk.io/docs/intro) for a full description.

This is great when developing locally using Hydro-SDK. What if your entire app isn't written with Hydro-SDK? What about developers writing Dart code in an app where Hydro-SDK is only a small part? Should they have to worry about having `hydroc run` running? What about end users of your app? This is where the Hydro-SDK Registry comes in.

The Hydro-SDK Registry is available at https://registry.hydro-sdk.io In cases when `hydroc run` is not available during local development or when your app is running in profile or release mode, the `RunComponent` widget will look to the Registry for the latest available package for a given component. 

See [the tutorial](https://hydro-sdk.io/docs/codepush) to get started using Registry to quickly deliver Flutter experiences built with Hydro-SDK to your users

## Codepush
Packages can be published to the Registry using the new `hydroc codepush` command. All packages are signed using the private key generated when you create the corresponding component on the Registry. Packages can be verified at runtime using the generated public key.

Registry is completely free and connects with your existing Github account. See the [codepush tutorial](https://hydro-sdk.io/docs/codepush).

## App Store Compliance
There is endless discussion on every corner of the internet dissecting and debating App Store rules and guidelines. The [Hydro-SDK counter app showcase](https://github.com/hydro-sdk/counter-app) has been successfully published to Google Play. An App Store version is in progress.  
Google Play: https://play.google.com/store/apps/details?id=com.hydro_sdk.counter_app  
Registry: https://registry.hydro-sdk.io/#/component/63bbc0f5-0080-439c-999e-2323462beede

## Service Status
Like Hydro-SDK itself, Registry is still in an incredibly early stage. We are looking for members of the community to try Hydro-SDK, Registry and codepush and provide their feedback and experience. Consequently, there is no official service level agreement (SLA) at this time. Please reach out on [Github issues](https://github.com/hydro-sdk/hydro-sdk/issues), [Github discussions](https://github.com/hydro-sdk/hydro-sdk/discussions), [Discord](https://discord.com/invite/DuM2vkUSNr), or email us at "hello (at) hydro-sdk.io".

## Licensing
For a large part of Hydro-SDKs existence, it has been licensed under the GNU Affero General Public License Version 3 (AGPL-3). This was done in order to make it harder for companies to take the open-source Hydro-SDK and monetize it by providing value added services (like codepush) around it. Starting from Hydro-SDK `0.0.1-alpha.0` and `0.0.1-nightly.289`, Hydro-SDK will be licensed under the far more permissive MIT license. If you're a business or other entity for which the MIT license does not meet your needs, please reach out at "hello (at) hydro-sdk.io".

## Caveats and Future Work
### State Management
The only state management technique available to code written with Hydro-SDK is `setState`. There is a hand-written port of [`package:scoped_model` in the Hydro-SDK source distribution](https://github.com/hydro-sdk/hydro-sdk/tree/master/runtime/scopedModel) though it is not quite polished enough to recommend it for use in any official tutorials or guides.

### API Availability
The APIs currently available from Hydro-SDK can be viewed on https://hydro-sdk.github.io/hydro-sdk/ It is quite limited in comparison to what `dart:*` standard libraries and `package:flutter` have to offer. Not to mention packages from `pub.dev`. Hydro-SDKs [SWID project](https://hydro-sdk.io/docs/design-documents/swid) aims to build tooling to automatically make public APIs from Dart packages available to use from Hydro-SDK. SWID is still in its infancy. However, classes from Flutter like [Material icons](https://github.com/hydro-sdk/hydro-sdk/blob/master/runtime/flutter/material/icons.ts) and [Cupertino icons](https://github.com/hydro-sdk/hydro-sdk/blob/master/runtime/flutter/cupertino/cupertinoIcons.ts) have been brought to TypeScript and Hydro-SDK users thanks to SWID. The entire [`dart:typed_data` library](https://github.com/hydro-sdk/hydro-sdk/tree/master/runtime/dart/typed_data), and extremely complicated classes like [`Iterable` from `dart:core`](https://github.com/hydro-sdk/hydro-sdk/blob/master/runtime/dart/core/iterable.ts) have been made available thanks to SWID. The code that SWID produces is correct enough to pass test cases from [Dart's library conformance test suite (CO19)](https://github.com/dart-lang/co19) [that have been ported into TypeScript](https://github.com/hydro-sdk/hydro-sdk/tree/master/test/co19/core/iterable).

Hydro-SDK aims to become a toolkit to extend Flutter not just to TypeScript but to other languages like Haxe and C#. SWID is the cornerstone of this vision. Making SWID smart enough to handle `dart:ui` is next and can be tracked [here](https://github.com/hydro-sdk/hydro-sdk/projects/17). All work related to SWID can be tracked [here](https://github.com/hydro-sdk/hydro-sdk/projects/5).

### Performance
Hydro-SDKs build system takes in TypeScript code and produces Lua bytecode to be run on the common Flutter runtime (CFR) virtual machine on a host Flutter app. Other than stripping debug symbols when building for release mode (which commands like `hydroc codepush` do automatically), no ahead of time optimizations are done. 

There is a lot of low hanging fruit to be picked in this area. Lua bundle collapsing (in a similar manner to the optimization performed by [Browserify](https://github.com/browserify/bundle-collapser)) in particular could realise some immediate size savings in terms of generated bytecode. 

The most impactful optimization that can be done at the TypeScript level is tree-shaking. Bytecode produced by Hydro-SDK tends to be dominated by [Material icons](https://github.com/hydro-sdk/hydro-sdk/blob/master/runtime/flutter/material/icons.ts), [Cupertino icons](https://github.com/hydro-sdk/hydro-sdk/blob/master/runtime/flutter/cupertino/cupertinoIcons.ts), [Material colors](https://github.com/hydro-sdk/hydro-sdk/blob/master/runtime/flutter/material/colors.ts) and the like. Tree-shaking could remove this unneccessary overhead in bytecode size.

[Wang](https://www.ideals.illinois.edu/bitstream/handle/2142/78638/WANG-DISSERTATION-2015.pdf?sequence=1&isAllowed=y), [Williams et al](https://sites.cs.ucsb.edu/~ckrintz/papers/TCD-CS-2009-37.pdf
) and [Kawahara](https://nymphium.github.io/pdf/opeth_report.pdf) have all performed extensive research into applying traditional ahead of time optimization techniques to Lua bytecode. Others like [Shroder](https://www.complang.tuwien.ac.at/anton/praktika-fertig/schroeder/thesis.pdf) have explored runtime optimizations. In the future, finding a combination of these approaches and techniques will allow users of Hydro-SDK to deliver the smallest possible bytecode updates to their users

### Compiling to Dart
Tooling exists to compile Lua bytecode into Dart code that can then be compiled with a host app and recognized by CFR at runtime. This capability is tested on every commit as part of Hydro-SDKs CI in both [debug](https://github.com/hydro-sdk/hydro-sdk/actions/workflows/debug-ts-aot-integrationTests.yml) and [release](https://github.com/hydro-sdk/hydro-sdk/actions/workflows/release-ts-aot-integrationTests.yml) modes. This feature holds a lot of promise at improving the performance of CPU bound operations that would otherwise be performed in bytecode. The benchmarks, tooling and other polish required to make this feature available where not ready for the `0.0.1-alpha.0` release.

## Monetization
[Public Domain Publishing](https://github.com/publicdomaincompany) has been a generous sponsor of Hydro-SDK. Monetization goals include having enough recurring income to allow the primary developer to work full time on Hydro-SDK and to hire or otherwise compensate other members of the community who contribute to Hydro-SDK.

### Sponsorhips
Hydro-SDK can be sponsored on [Github Sponsors](https://github.com/sponsors/hydro-sdk) and [Open Collective](https://opencollective.com/hydro-sdk).

### Consulting and Services
If you're a business looking for consulting or other services related to Hydro-SDK, email us at "hello (at) hydro-sdk.io".

## Next Alpha Release
Very preliminary planning has begun for `0.0.1-alpha.1`. This work can be tracked [here](https://github.com/orgs/hydro-sdk/projects/4). Please reach out on [Github issues](https://github.com/hydro-sdk/hydro-sdk/issues), [Github discussions](https://github.com/hydro-sdk/hydro-sdk/discussions), [Discord](https://discord.com/invite/DuM2vkUSNr), or email us at "hello (at) hydro-sdk.io" to help drive the direction of Hydro-SDK. Code contributions and pull requests are encouraged and accepted.