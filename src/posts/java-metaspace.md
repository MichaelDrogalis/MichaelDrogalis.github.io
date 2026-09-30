---
title: "Java metaspace"
date: 2026-06-24
tags: ["java"]
---

Surprising fact: a Java program can run out of memory without ever allocating an object.

A few weeks ago, I tried running my product in a low-memory environment. Only 50 megabytes.

I thought it would work great.

I benchmarked it in development and saw it only used about 40 megabytes of heap space.

But when I deployed it, the OS instantly killed the JVM because it depleted memory.

Why?

I learned that heap space is not the only memory the JVM uses.

💡I ran out of memory in something called Metaspace.

![](/img/java-metaspace.jpeg)

Metaspace is a special area of memory that holds things like:
- class definitions
- class loaders
- method and field data

Unlike the heap, metaspace resides in native memory, which is why I didn't see it in my local benchmark.

It also grows dynamically and is unbounded by default.

When I ran `jcmd <process id> VM.metaspace`, I saw that yes, my 40 megabytes of heap plus about 30 more megabytes of metaspace meant I exceeded total available memory.

Lastly, I learned that you can forcibly bound how much memory gets allocated to metaspace with the JVM flag: -XX:MaxMetaspaceSize=256m

😅 Always learning something new about the JVM.
