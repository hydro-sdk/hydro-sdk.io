---
sidebar_position: 3
---

# SWID Abstract Reduction System (SWARS)
SWARS is a set of highly opinionated building blocks for building referentially transparent transformations over immutable data.

## Objective
Provide a standard and coherent way to build referentially transparent transformations over immutable data. Inspired by [abstract rewriting systems](https://en.wikipedia.org/wiki/Abstract_rewriting_system).

## Background
[SWID](https://hydro-sdk.io/docs/design-documents/swid) aims to produce binding and projection code that provides end users with rich interoperation. This requires SWID to traverse, analyze and flatten types. In the context of Flutter, these types exist in class hierarchies that are both deep and extremely wide.

For any set of types with common ancestors in the class hierarchy, analysis and code generation performed by SWID will be repeated. In the context of Flutter, this repeat work was seen to consume an extremely long amount of time.

SWARS aims to allow SWID to break up the graph of analyses and code generation tasks for any given type (and any given sub set of any given type) into an arbitrary number of arbitrarily complex operations that can be composed and who's usage sites can be opaquely replaced with their results.

## Concepts
### Identity
The identities of inputs and outputs in SWARS is uniquely determined by each type that implements [`IHashKey`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iHashKey.dart). Types are expected to describe how to uniquely identify themselves by overriding `hashableParts`.

### Terms
The core concept of SWARS is the term. Terms in SWARS are represented by the [`ISwarsTerm`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsTerm.dart) interface. Terms can be "called" in order to produce a term result (represented by the [`ISwarsTermResult`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsTerm.dart) interface). Terms and term results must implement [`ICopyable`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iCopyable.dart), [`ICloneable`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iCloneable.dart), [`IHashKey`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iHashKey.dart) and [`IHashComparable`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iHashComparable.dart). SWARS' guarantees about identity and referential transparency are enforced through the implementation of these interfaces. Default implementations are provided by [`HashKeyMixin`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/hashKeyMixin.dart) and [`HashComparableMixin`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/hashComparableMixin.dart).

In cases where terms cannot be uniquely identified based on their inputs (such as when their inputs are closures or types that do not implement the aformentioned interfaces), [`SwarsNonUniqueTermMixin`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/swarsNonUniqueTermMixin.dart) can be used to opt a given term out of the identity system.

#### Transformations and Analyses
Transformations and analyses in SWARS are terms with some extra type-level sugar to help express their intended semantics. This is provided by the [`ISwarsTransform`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsTransform.dart) and [`ISwarsAnalysis`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsAnalysis.dart) interfaces with default implementations [`SwarsTransformMixin`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/swarsTransformMixin.dart) and [`SwarsAnalysisMixin`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/swarsAnalysisMixin.dart).

### Pipelines
When SWARS terms are called, an [`ISwarsPipeline`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsPipeline.dart) is always provided. Terms are composed by calling additional terms using the provided pipeline. The exact type of pipeline provided and what that pipeline does with terms that are composed should be completely opaque. A pipeline which caches term results and opaquely replaces term invocations with their results if they've been seen before is provided by [`CachingPipeline`](https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/cachingPipeline.dart). The ability to do this safely is guaranteed by the identity and term systems described above.