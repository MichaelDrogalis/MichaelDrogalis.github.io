---
title: "Java unsafe"
date: 2026-03-30
tags: ["java"]
---

😮 Did you know Java has a class that lets you break ALL the rules?

![](/img/java-unsafe.jpg)

It's appropriately named jdk.internal.misc.Unsafe, and it lets you do unspeakable things like:

(a) create an object without running its constructor
(b) change final fields after object construction
(c) write to memory outside of the heap with direct addressing
(d) throw checked exceptions without declaring them
(e) define a class from raw bytes without using a class loader

You will never need to do these things 99.999999% of the time.

But if you're building a serialization framework (like Kryo) or an ultra-high-performance HTTP server (like Netty), it comes in handy.

(Obviously it's called Unsafe for a reason. It's the easiest way to corrupt memory, crash the JVM, and make your code non-portable!)
