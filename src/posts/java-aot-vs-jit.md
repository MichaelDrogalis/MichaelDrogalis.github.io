---
title: "Java AOT vs JIT"
date: 2026-03-20
tags: ["java"]
---

If you ask me, students should be introduced to the JVM/Java like this:

![](/img/java-aot-vs-jit.jpg)

When you program in languages like C++, you compile your code once and run the native machine code it outputs.

If you want to make your code go faster, you: observe → tweak → recompile until you're happy.

The JVM works completely differently.

Instead of compiling your code once, the JVM CONTINUOUSLY recompiles your code at runtime. It records statistics about its execution and rewrites it for optimum performance, transparently swapping between the different native versions as it runs.

The JVM will unroll loops, eliminate dead code, and hoist variables up and down the call chain.

I know many disagree, but I think the JVM is an absolute marvel of engineering.
