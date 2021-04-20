---
sidebar_position: 1
---

# Compile Time

#

## `method-name and other-method-name Defined at some-file:line,column (x,y) and some-other-file:other-line,other-column (a,b) both mangled to the following: big-hashed-name`


In debug mode, the compiler tracks the identity of functions across different compiles by mangling function names. This information is passed on to (and required by) the CFR's virtual machine in debug mode in order to enable hot-reload. The above error is a santiy check performed by the compiler during compilation to ensure it hasn't accidentally assigned the same identity to two functions that it knows are not the same. This is NOT an error with your code. If you encounter this, please file an issue so we can make the compiler smarter.