---
title: "Java's optimizer"
date: 2026-09-11
tags: ["java"]
---

😇 Thanks to Java's optimizer, you usually don't need to choose between readable vs. fast code.

![](/img/java-optimizer.jpeg)

Left on its own, Java will automatically do:

(1) method inlining: replace a method call with the method's body to eliminate call overhead

(2) loop unrolling: duplicates the loop body to reduce the number of iterations

(3) constant hoisting: move expressions that produce the same result on every iteration outside the loop

(4) branch prediction: guess the outcome of conditional branches to avoid stalling

(5) speculative optimization: makes assumptions (like types staying stable) to optimize code

(6) dead code elimination: remove code that has no effect on program behavior

(7) on-stack replacement (OSR): replace currently running interpreted code with natively compiled, optimized code mid-execution

You can see some of this in action in the screenshot. On the left is a clearly written class. On the right is an approximation of how Java will optimize it at runtime.
