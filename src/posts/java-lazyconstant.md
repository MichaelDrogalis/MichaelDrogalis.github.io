---
title: "Java LazyConstant"
date: 2026-09-24
tags: ["java"]
---

Want to make your Java program fast? Mark your fields with final.
Want to make your Java program start up quicker? Initialize fields lazily.

![](/img/java-lazyconstant.jpeg)

You can't do both. Or can you? Java 27 just shipped its 3rd preview of LazyConstant.

The problem is simple. Immutable values are fast because they can never change. The JIT can do tons of optimization with that guarantee in place.

But the trade-off is that immutable values need to be computed the moment the object holding them is constructed. If you don't use those values until later on, you needlessly bog down your program startup time.

There are endless examples: think loggers, database drivers, and feature flags.

LazyConstant is a new class that gives you the best of both worlds. It works like this:

1. You construct a LazyConstant whose value is computed *by a function* (thus deferring its execution)

2. When you want to access the value, you call `get()` to retrieve the value

3. `get()` guarantees the value will only be computed once, even in the presence of multiple threads

While it's a nice tool to have, don't replace all final values with LazyConstant. Avoid it for cheaply constructed values that don't impede startup time.
