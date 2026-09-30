---
title: "Java Foreign Memory API"
date: 2026-10-28
tags: ["java"]
---

If you work with large in-memory data sets in Java, I highly recommend reading up on the Foreign Memory API.

![](/img/java-foreign-memory-api.jpg)

In "normal" Java code, all your data goes on the heap and gets tracked by the garbage collector. This creates problems for large datasets (think 10GB+ in-memory analytics):
- long GC pauses (see my previous writing on humongous object treatment)
- memory pressure
- heap sizing challenges

But there is officially another option as of Java 22.

Using the Foreign Memory API, you can allocate massive datasets off-heap and bypass GC entirely for that data.

Java has long had the jdk.internal.misc.Unsafe API for doing this, but the Foreign Memory API:
- is standardized/portable across JVMs
- has far fewer places to shoot yourself in the foot
- is a lot easier to understand, in my opinion

This is only an API you'd reach for with a specialized use case, but it's nice knowing it's there.
