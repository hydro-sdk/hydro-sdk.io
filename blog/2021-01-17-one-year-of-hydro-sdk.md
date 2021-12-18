---
slug: one-year-of-hydro-sdk
title: One Year of Hydro-SDK
author: Chris Gibb
author_title: Recovering Structural Typing Enthusiast
author_url: https://github.com/chgibb
author_image_url: https://avatars.githubusercontent.com/u/18079458?s=400&v=4
tags: [flutter, typescript, react-native]
---

[Hydro-SDK](https://github.com/hydro-sdk/hydro-sdk) has been my passion project for the last (roughly) year. While still very pre-alpha, I thought it was about time to collect my thoughts on its past and future in one place and reflect on the journey.

<!--truncate-->

This was originally posted here: https://chgibb.github.io/one-year-of-hydro-sdk/

[Hydro-SDK](https://github.com/hydro-sdk/hydro-sdk) is a project with one large, ambitious goal. "Become React Native for Flutter".  
It aims to do that by:
1. Decoupling the API surface of Flutter from  the Dart programming language.
2. Decoupling the development time experience of Flutter from the Dart programming language.
3. Providing first-class support for over-the-air distribution of code.
4. Providing an ecosystem of packages from `pub.dev`, automatically projected to supported languages and published to other package systems.

It's composed of:
### Common Flutter Runtime (CFR)
- A Lua 5.2 interpreter with support for hot reload, clean Dart <-> Lua interop and compiling Lua bytecode into Dart source code.
### Hydroc Compiler
- A toolchain based on [TypeScript to Lua](https://github.com/TypeScriptToLua/TypeScriptToLua), providing incremental compilation of TypeScript source code into Lua bytecode, source mappings, file watching and serving.
### Structured Wrapper and Interface generator for Dart (SWID)
- A system for automatically producing Hydroc and CFR compatible projections from a Dart package.
### Waveform
- An umbrella project of tooling and Github bots providing automatic upgrade infrastructure for the Hydro-SDK Github organization; automated update PRs, wrangling of dependencies between `package.json` and `pubspec.yaml`, merge conflict resolution and topic branch updating.

Hydro-SDK was born out of my experiences as a brand new Flutter developer in mid-2019. A Flutter developer who had never even heard of Flutter (or Dart for that matter) before being hired for a Flutter role.

I'm not a very old developer. At the time of writing, I'm only 1.71 JQuerys old. After spending my formative years hacking on C++98, followed by a few years of JQuery and JQuery UI before finally discovering ReactJS and falling deeply and maddly in love with TypeScript, Flutter was a revelation. No more changing one line in one function in one header and having to go take a walk as three quarters of the project recompiles. No more burning my fingers on my Macbook keyboard hoping I can find the bug in my React frontend before my fingerprints are gone for good. Stateful hot reload was the new normal.

In addition to the positive revelations I felt for Flutter's hot reload workflow and the simplicity and power of it's API compared to traditional HTML+CSS, my reactions to Dart were roughly as follows:  
1. Whiplash having to get used to nominal typing again
2. Horror at the depth of reification
3. Frustration at (relatively) in-expressive generics and poor inference
4. Wonder and bewilderment at null related errors
5. Acceptance. An understanding of Dart's history, it's many customers (in addition to Flutter) its flaws and its successes

In August of 2019 I began experimenting trying to build a general system to allow Flutter web content to exist nicely within a larger Flutter mobile shell. I thought if I couldn't quite get around Dart's shortcomings, I could at least build something to paper over the shortcomings in mobile deployment. This work ultimately didn't lead very far.

My feelings about the developer experience of Dart never quite went away. I became fixated on the idea of bringing the tooling, workflow and APIs of Flutter into other languages. Late 2019 saw experimentation with exposing Flutter APIs into Javascript via a C++ bridge with DuktapeJS. When I realised that every single `new` of a Dart object from Javascript was leaking memory and their didn't seem to be a good path to get the Dart GC and Duktape's GC to play nice together, I abandoned the initiative.

I abandoned the idea of embedding an interpreter and looked to building one with Dart. This led to my discovery of [Flutterscript](https://github.com/cowboyd/flutterscript/commits/master), a project aimed at providing a scripting environment through a Lisp interpreter. I spent far more late nights than I should have trying to bring the Flutterscript interpreter to the point where it could run [a JS to Lisp transpiler](https://github.com/akapav/js). This included porting pieces of the [Steel Bank Common Lisp](http://www.sbcl.org/) runtime to Flutterscript. I also spent some time trying to get [Flutterscript](https://github.com/cowboyd/flutterscript/commits/master) to run code output by [Iota](https://github.com/froggey/Iota). I eventually realized that even if I could cobble such a monster together, it would be impossible to debug and even harder to attempt to tune for performance.

In early 2020, I stumbled on [TypeScript to Lua (TSTL)](https://github.com/TypeScriptToLua/TypeScriptToLua). A transpiler offering transpilation from TypeScript to Lua sourcecode. This seemed like the beacon in the storm. I immediately set out to start writing a Lua interpreter in Dart. After some progress on my own hand-rolled interpreter, I discovered [DartLua](https://github.com/PixelToast/dartlua) which had me beat both in terms of developer-hours and feature set. A (heavily modified) DartLua has sat at the center of Hydro-SDK every since.

The first "Hello World From TypeScript!" Flutter app hit the screen of an iOS simulator in February 2020. I spent the next 6 months or so building a marshalling system to allow clean Dart and Lua interop as well as hot reloading of running Lua bytecode. In response to some early feedback about performance concerns, a CLI was built to allow compiling Lua bytecode into Dart source code.

Eventually I got greedy with these successes and looked to expand the repertoire of the runtime system I was now calling the Common Flutter Runtime (CFR) by building support into Hydro's toolchain for [the Haxe programming language](https://haxe.org/) in addition to the already existing TypeScript support. Shortly after the first "Hello World from Haxe"! Flutter app, I overwhelmed myself trying to expand and maintain Flutter and Dart APIs across both TypeScript and Haxe and so dropped support for Haxe.

In mid 2020 I looked to double down on support for TypeScript by building out the at the time badly neglected cupertino Flutter APIs.

By late September, I came to the realisation that the manual process of writing TypeScript and Dart glue to project APIs into TypeScript could probably be automated. I put down work on manually writing cupertino projections and looked to start automating the process.

The project of the day ever since has been on what has come to be named Structured Wrapper and Interface Generator for Dart (SWID). The name being a nod to the [SWIG  Project](http://www.swig.org/exec.html). In just three months time, SWID has come very far. Being able to produce projections for large swaths of Flutter Foundation as well as Dart UI and Dart Core. The focus at the time of writing has been to make sure the code produced by SWID is natural for a TypeScript programmer and is correct. This is being done by porting pieces of Dart-SDK's [CO19 specification test suite](https://github.com/dart-lang/co19) into TypeScript to test SWID produced projections for a select few Dart Core classes.

## Future Work
### Ambient Computing, Ambient Packages
Looking to the future, SWID will be the cornerstone in bridging the gap between `pub.dev`, Hydro-SDK and `npm`. Hopefully bringing the power of each together into one repository of packages. `pub.dev` package authors will get an automated TypeScript mirror of their work, app developers will get to pick and choose from the best of `pub.dev`, and `npm`.

### Ambient Computing, Ambient Languages
In addition to enabling a wider package ecosystem, SWID will provide the foundation for wider language support. SWID is structured in a classic frontend-backend compiler design. TypeScript and Dart both just happen to be backends. Adding support for additional languages, like [the Haxe programming language](https://haxe.org/), C# via [CSharp.lua](https://github.com/yanghuan/CSharp.lua) or Java or Kotlin via [JTransc](https://github.com/jtransc/jtransc) will be as easy as adding a new backend to SWID.

### In Band, Out of Band
At the time of writing, the developer experience for deploying an app making use of Hydro-SDK's over the air code loading is shakey at best. Planning is beginning on what a first-class hosting, deployment, flagging and analytics service might look like and how to best integrate it with Hydro-SDK.

My hope is that other developers will find Hydro-SDK to be an incredible value add to their workflows and development processes. At worst, Hydro-SDK presents an incredible, beautiful fractal of all the problem spaces of compiler design, optimization, virtual machines and programming language design that I find endlessly fascinating and fulfilling.