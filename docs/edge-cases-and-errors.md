---
sidebar_position: 3
---

# Edge Cases and Errors  
Some edge cases and error states that might be encountered while using Hydro-SDK

## Compile Time

### `method-name and other-method-name Defined at some-file:line,column (x,y) and some-other-file:other-line,other-column (a,b) both mangled to the following: big-hashed-name`


In debug mode, the compiler tracks the identity of functions across different compiles by mangling function names. This information is passed on to (and required by) the CFR's virtual machine in debug mode in order to enable hot-reload. The above error is a santiy check performed by the compiler during compilation to ensure it hasn't accidentally assigned the same identity to two functions that it knows are not the same. This is NOT an error with your code. If you encounter this, please file an issue so we can make the compiler smarter.

## Runtime

### `Dispatched function prototypes are required to have debug symbols but the prototype from x-y in big-hashed-name could not be matched to a debug symbol`

In debug mode, the CFR's virtual machine needs code being called into from the Flutter framework as part of Flutter's normal widget lifecycle to have debugging information attached to it in order to provide hot reload. This error can usually be observed being raised when trying to execute `build` methods in Typescript classes which extend `StatelessWidget` or `State`. This is NOT an error with your code. This usually means the compiler wasn't quite smart enough to find all of the anonymous functions/tear offs you're using in your `build` methods and report them to the VM for debugging and hot-reload. If you encounter this, please file an issue so we can make the compiler smarter.

### `Failed to dispatch to big-hashed-method-name from x-y in big-hashed-name`

In debug mode, the CFR's virtual machine will enforce that all code being called into from the Flutter framework as part of Flutter's normal widget lifecycle is looked up just in time before it's executed. If the virtual machine fails to lookup a function that is being called, this error will be thrown. This error can be observed when running code that is in the middle of attempting to call code that has just been deleted as part of a hot-reload.

### `attempt to index a nil value null foo`

This error can be seen by regular Typescript code that attempts to access a field `foo` on an uninitialized object. If this error is observed originating in `hydro-sdk/runtime` Typescript code, after a hot-reload is performed, it may indicate a limitation of hot-reload. In debug mode, functions have their enclosing scopes refreshed before they are executed. This error can sometimes be caused by adding an `import` statement for a file which has never been imported before anywhere in the life of the currently running program. In this case, the code being executed is having it's enclosing scope refreshed to include the new symbols being `import`ed, but the `import`ed file itself is not being executed in order to initialise the new symbols being used, resulting in trying to index into `nil` values. This issue can be remedied by performing a hot-restart of the Dart code running the CFR virtual machine. This error does NOT necessarily indicate an error with your code.