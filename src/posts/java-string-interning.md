---
title: "Java string interning"
date: 2026-07-04
tags: ["java"]
---

Of all the classes built into Java, only String has its own built-in memory deduplicator. It's called interning, and it's been in Java since 1996.

Because programs tend to be filled with many duplicate string values, the designers of the JVM did something clever.

Instead of wastefully allocating a new object for every string instance, the JVM keeps a special global pool on the heap that caches duplicate string literals.

For the most part, you never need to think about it—which is why you might never have heard about it.

💡 Java invisibly interns any string literals it can find as a compile-time optimization.

But you can force any strings you want into the pool, too, by calling intern() at runtime.

The result? Your heap becomes smaller and equality comparisons become faster.

It's easy to see how this works by looking at a memory graph. In the image below, I start with a mostly empty heap and then allocate 10M identical, but non-interned strings. Memory spikes dramatically.

Then I explicitly intern a string and create 10M new instances of it. By comparison, memory barely increases.

![](/img/java-string-interning.jpeg)

Just don't go overboard and intern everything.

Interning is great for small, frequently reused strings. But throwing every string into the intern pool can backfire because the pool lives for the life of your JVM.
