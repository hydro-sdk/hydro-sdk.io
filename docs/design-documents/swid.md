---
sidebar_position: 1
---

# Structured Wrapper and Interface Generator for Dart (SWID)

https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid

## Objective  
Provide a tool to automatically produce code to bind a given Dart package to CFR and provide an interface that can be consumed from supported programming languages.

## Background
In the past, bindings for classes in `package:flutter` and `dart:*` have been written by hand. These hand written bindings usually expose the smallest surface area possible to satisfy the intended use case. i.e. being able to call `new AppBar` from Typescript rather than being able to also extend and override `AppBar`, or to access properties and methods on a given `AppBar`. Changes in the bound API need to be hand updated as the original package changes.

Taking a given piece of code in a given source language, binding it to (making it callable from) and projecting it (making APIs that capture the intent of the original language in the target language) to one or more target languages is a well explored space. SWID takes great inspiration from projects like the [Simplified Wrapper and Interface Generator (SWIG) project](http://www.swig.org/) and [Microsoft's Xlang](https://github.com/microsoft/xlang),

SWIG relies heavily on "SWIG interface files" to drive code generation. Xlang similarly relies on "Windows Metadata" files. The intent in both cases is to describe the API that is to be bound and projected. SWID aims to remove this boilerplace as much as possible and drive its code generation from Dart source code.

## Binding System Overview
In addition to providing far superior developer ergonomics over hand writing bindings for Dart packages, SWID also presents an opportunity to formalize and standardize binding schemes and uses cases.

### Boxing
Instances of classes passing call boundaries from Dart code and into CFR code are said to be "boxed". That is, they are wrapped in an instance of [`Box<T>`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/cfr/builtins/boxing/boxes.dart). `Box<T>` combines the original object with a Lua table. The CFR has special knowledge of `Box<T>`s. Table set and get operations are directed to the table field of the `Box<T>`.

Instances of classes passing call boundaries from CFR code and into Dart code are said to be "unboxed". That is, the containing `Box<T>` is stripped away and the enclosed `T` is returned.

### Virtual Machine Managed Class
A "virtual machine managed class" is a term used to describe an instance of a class that was allocated in Dart code, not in CFR. For each class in a Dart package being bound, SWID emits a "virtual machine managed class declaration". That is, a class that extends `Box<T>` where `T` is the class being bound and that provides redirections and appropriate bindings from its Lua table to the class instance that it manages. Instances of this class will allow CFR code to access the underlying instance in terms of the associated Lua table.

### Runtime Managed Class
A "runtime managed class" is a term used to describe an instance of a class that was allocated in CFR, not in Dart code. For each class that is being bound, SWID emits a "runtime managed class declaration". That is, a class that extends `T` and implements `Box<T>` where `T` is the class being bound and that provides redirections and appropriate bindings from its Lua table to the class instance that it manages.

Each "runtime managed class declaration" provides overrides for every method, getter and setter of `T` that redirect to its Lua table. This allows Dart code to opaquely access methods of the "runtime managed class" which are actually implemented in CFR.
 
Unlike a "virtual machine managed class", "runtime managed classes" Lua table redirections are given in terms `_dart_method` where `method` is the name of the method from `T` being bound. In order to make the given projection natural for consumers, language projections are expected to provide `method` declarations that redirect by default to `_dart_method`. This allows target language consumers to extend projected classes and provide method overrides implemented in terms of CFR.

## Intermediate Representation (IR)
SWID maintains its own IR. [SWID IR](https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/ir) closely mirrors a Dart abstract syntax tree (AST). The important caveat is that SWID IR does not fully represent the semantics of the Dart language. For instance, getters, setters and operator overloads are not specially represented in SWID IR. SWID IR also does not explicitly represent Dart libraries or packages. 

SWID IR is the primitive upon which all analyses, transformations and code generation are performed.

## Frontends
SWID frontends are responsible for producing SWID IR. 

SWID's [Dart frontend](https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/frontend/dart) takes a Dart package and produces SWID IR.

There is a second (though still experimental) frontend called [SWIDI](https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/frontend/swidi) for producing SWID IR from SWID interface (or SWIDI) files.

## Backends
SWID backends are responsible for producing translation units which will be written to disk as code files.

SWID's [Dart backend](https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/backend/dart) is responsible for producing Dart code that can be loaded into CFR to provide bindings for a given Dart package.

SWID's [Typescript backend](https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/backend/ts) is responsible for producing Typescript code that accurately projects the given Dart package and works with the associated Dart binding code to allow consumers to access, allocate and extend classes from the given Dart package.
