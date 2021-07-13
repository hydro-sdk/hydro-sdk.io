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
draft: true
---

Codepush for Flutter

<!--truncate-->

[Hydro-SDK](https://github.com/hydro-sdk/hydro-sdk) is a software development kit (SDK) enabling Flutter developers to write portions of their app (or their entire app) using Typescript. It is a project with one large, ambitious goal. "Become React Native for Flutter".  
It aims to do that by:
1. Decoupling the API surface of Flutter from  the Dart programming language.
2. Decoupling the development time experience of Flutter from the Dart programming language.
3. Providing first-class support for over-the-air distribution of code.
4. Providing an ecosystem of packages from `pub.dev`, automatically projected to supported languages and published to other package systems.

I wrote previously about the past and future of [Hydro-SDK](https://github.com/hydro-sdk/hydro-sdk) [here](https://chgibb.github.io/one-year-of-hydro-sdk/). 

In this article I want to announce and describe the realization of goal 3 above and pontificate about the future.

## Registry
Hydro-SDK builds and manages code in terms of projects. Projects consist of components. Hydro-SDK content is embedded into a host app using the `RunComponent` widget. While developing with Hydro-SDK locally, the `RunComponent` widget and `hydroc run` command work together to rebuild and hot-reload your code as you make changes. See the [getting started tutorial](https://hydro-sdk.io/docs/intro) for a full description.

This is great when developing locally using Hydro-SDK. What if your entire app isn't written with Hydro-SDK? What about developers writing Dart code in an app where Hydro-SDK is only a small part? Should they have to worry about having `hydroc run` running? What about end users of your app? This is where the Hydro-SDK Registry comes in.

The Hydro-SDK Registry is available at https://registry.hydro-sdk.io As the name implies, Registry is a package registry for `.ota` (over-the-air) package files produced for Hydro-SDK components. In cases when `hydroc run` is not available during local development or when your app is running in profile or release mode, the `RunComponent` widget will look to the Registry for the latest available package for a given component.

## Codepush
Packages can be published to the Registry using the new `hydroc codepush` command. All packages are signed using the private key generated when you create the corresponding component on the Registry. Packages can be verified at runtime using the generated public key.
