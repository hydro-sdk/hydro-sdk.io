---
sidebar_position: 5
---

# Limitations

Some known limitations of Hydro-SDK

## TypeScript

### Toolchain
The compiler toolchain needs to control `tsconfig` options in order to control compilation for different build profiles. `strict` is always turned on by default.

The current compiler toolchain is really bad at tree-shaking. For example,
```typescript
import {SizedBox} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/sizedBox/index"
``` 
will be more efficient than
```typescript
import {SizedBox} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index"
```
and
```typescript
import {SizedBox} from "@hydro-sdk/hydro-sdk/runtime/flutter/index"
```

### Language
- No async or await. Though, asynchronous programming is possible using a projection of Dart's `Future` class
- No yield or generators
- The compiler is built on https://github.com/TypeScriptToLua/TypeScriptToLua . We inherit the same limitations https://typescripttolua.github.io/docs/caveats
