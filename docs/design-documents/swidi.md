---
sidebar_position: 2
---

# Swidi
Swidi is a small, declarative language implemented by [SWID](https://hydro-sdk.io/docs/design-documents/swid) and consumed by a dedicated [Swidi frontend](https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/frontend/swidi) in SWID.

## Objective
Provide an escape hatch in SWID to add declarations to existing Dart libraries to allow for clean type-system bridging, specify APIs that are underspecified, and override existing declarations in a clean and integrated way.

## Background
[SWID](https://hydro-sdk.io/docs/design-documents/swid) is based on the principle that the Dart package being consumed cannot (and should not) be hand-edited by the user in order to influence the kind of code that SWID will produce. This frees the user from having to specify every single symbol being emitted (whether through annotations or other methods). It however comes with the downside that SWID becomes impossible to influence. Swidi provides clear (and constrained) avenues for the user to influence code generation.

## Structure
Swidi is used to describe the public API surface of one or more Dart symbols from one or more Dart libraries. Swidi attempts to be as simple (from an implementation perspective) as possible. It is not turing complete and does not support any form of file includes or imports. Swidi does not have any form of inference or intrinsics. All semantic information describing a symbol is given at its usage site.

Declarations described in Swidi are merged by SWID with the declarations read from the original Dart source code with preference given to those declarations from Swidi. This allows for declarations in Swidi to selectively override those given in Dart source code.

## Classes
Swidi classes are declared with a library scope prefix of the path an importer would use to import the declaring library in Dart. Consider the following:
```dart
class "dart:collection"::IterableBase {}
```
The above declares an empty set of overrides for the class `IterableBase` from the Dart library `dart:collection`. 

## Reference Declaration Prefixes
Because Swidi has neither inference nor intrinsics, all semantic information about a given symbol is given at its usage site. For types, Swidi expresses this through a combination of library scope prefixes (as for class declarations) and reference declaration prefixes. They are given in the order `library::reference declaration::type name`.

There are five reference declaration prefixes in Swidi
- `class`
    - The given symbol refers to the class type declared in the library specified in the library prefix scope.
- `enum`
    - The given symbol refers to the enumeration type declared in the library specified in the library prefix scope.
- `void`
    - The given symbol refers to the void type. No library scope prefix is permitted.
- `type`
    - The given symbol refers to a type formal. No library scope prefix is permitted.
- `dynamic`
    - The given symbol refers to the dynamic type. No library scope prefix is permitted.

## Methods
Methods are declared on classes in Swidi in the same manner as in Dart (though without bodies).
```dart
class "dart:collection"::IterableBase {
    "dart:core"::class::bool contains(
        "dart:core"::class::Object? element
    );
}
```
The above declares an override for the method called `contains` on the class `IterableBase`. `contains` has a return type of `bool` (which is a class declared in `dart:core`), has a single positional parameter called `element` which is of type `Object` (which is a class declared in `dart:core`) and can be null.

### Optional Parameters
Optional parameters can be declared in Swidi in the same manner as in Dart. Consider the following:
```dart
class "dart:typed_data"::UnmodifiableInt16ListView {
    "dart:core"::class::int lastIndexOf(
        "dart:core"::class::Object? element, [
            "dart:core"::class::int? start,
        ]
    );
```
The above declares an override for the method called `lastIndexOf` on the class `UnmodifiableInt16ListView`. `lastIndexOf` has a return type of `int` (which is a class declared in `dart:core`), has a single positional parameter called `element` which is of type `Object` (which is a class declared in `dart:core`) and can be null, and has a single optional parameter called `start` which is of type `int` (which is a class declared in `dart:core`) and can be null.

### Named Parameters
Named parameters can be declared in Swidi in the same manner as in Dart. In Swidi, the `required` keyword currently cannot be used. Consider the following:
```dart
class "package:flutter/src/widgets/icon_data.dart"::IconData {
    void::void foo(
      "dart:core"::class::int bar, {
        "dart:core"::class::int baz,
        "dart:core"::class::int? qux
    });
  }
```
The above declares an override for the method called `foo` on the class `IconData`. `foo` has a return type of `void`, has a single positional parameter called `bar` which is of type `int` (which is a class declared in `dart:core`), has a named parameter called `baz` which is type `int` (which is a class declared in `dart:core`), a named parameter called `qux` which is of type `int` (which is a class declared in `dart:core`) and can be null.

### Constant Initializers
Constant initializers for parameters can be declared immediately after the parameter declaration in much the same way as in Dart. In Swidi, constant string literals are prefixed with `@`. Consider the following:
```dart
class "package:flutter/src/widgets/icon_data.dart"::IconData {
    void::void foo(
      "dart:core"::class::int bar = 0, {
        "dart:core"::class::int baz = 123,
        "dart:core"::class::String? qux = @"default value"
    });
  }
```
The above declares an override for the method called `foo` on the class `IconData`. `foo` has a return type of `void`, has a single positional parameter called `bar` which is of type `int` (which is a class declared in `dart:core`) and has a default value of 0, has a named parameter called `baz` which is type `int` (which is a class declared in `dart:core`) and has a default value of 123, a named parameter called `qux` which is of type `String` (which is a class declared in `dart:core`) can be null and has a default value of "default value".

### Type Formals
Type formals can be declared on methods similarly as in Dart. Consider the following:
```dart
class "dart:core"::List {
    "dart:core"::class::List foo<T extends "dart:core"::class::Object?, U, K extends type::T>();
}
```
The above declares an override for the method called `foo` on the class `List`. `foo` has a return type of `List` (which is a class declared in `dart:core`), has a type formal called `T` (whos bound is nullable `Object`), a type formal called `U`, and a type formal called `T` (which is bound to the type formal `T`).

## Function Types
Function typed symbols in Swidi take a slightly different form to that of Dart. In Swidi, they begin with the function keyword, followed by their return type. Positional and optional parameters in function types cannot be named. Consider the following:
```dart
class "dart:core"::List {
    void::void foo(
        Function void::void (
            "dart:core"::class:int, [
                "dart:core"::class:String?,
            ], {
                dynamic::dynamic bar,
            }
        )? callback,
    );
}
```
The above declares an override for the method called `foo` on the class `List`. `foo` has a return type of `void`, has a single positional parameter called `callback` which is a nullable function that has a return type of  `void`, has a positional parameter of type `int` (which is a class declared in `dart:core`), has an optional parameter of type `String` (which is a class declared in `dart:core`) that can be null, and a named parameter called `bar` which is of type `dynamic`.

## Type Arguments
Type arguments can be specified on symbols in the same manner as in Dart. Consider the following:
```dart
class "dart:core"::List {
    void::void foo("dart:core"::class::List<"dart:core"::class:int> fooList);
}
```
The above declares an override for the method called `foo` on the class `List`. `foo` has a return type of `void`, has a single positional parameter called `fooList` which is of type `List` (which is a class declared in `dart:core`) and has a type argument of type `int` (which is a class declared in `dart:core`).

## Symbol Annotations
Symbols in Swidi can be declared with one or more optional annotations. These are declared as a constant function invocation between pairs of `[[ ]]`. Consider the following:
```dart
class "dart:core"::List {
    [[ ignoreTransform(@"referenceRewriting") ]]
    void::void foo(
      "dart:core"::class::int bar, {
        "dart:core"::class::int baz,
        "dart:core"::class::int? qux,
    });
}
```

## Short Hand Overrides
Short hand overrides in Swidi can be used to provide extra semantic information to an entire declaration. They are expressed as a constant map.
### Classes
Short hand class overrides can be provided immediately after a class declaration. Consider the following:
```dart
class "dart:core"::List { } -> {
    @"key": @"value",
}
```
### Methods
Short hand method overrides can be provided immediately after a method declaration. Consider the following:
```dart
class "dart:core"::List {
    void::void foo() -> {
        @"key": @"value",
    };
}
```