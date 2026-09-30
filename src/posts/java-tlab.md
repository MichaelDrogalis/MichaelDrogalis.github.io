---
title: "Java TLAB"
date: 2026-09-28
tags: ["java"]
---

A few quarters ago, I learned that Java has a built-in, invisible optimization called TLAB that makes concurrent object allocation very fast.

![](/img/java-tlab.jpg)

To set the context:
- Java allocates objects on the heap
- When you have many threads creating objects, they all contend over the same shared heap
- Some threads end up waiting and your code get slower

Java has a clever solution to this. It's called a Thread Local Allocation Buffer, or TLAB for short.

Introduced all the way back in 2002, a TLAB is a small, private chunk of heap given to each thread. When a thread needs a new object, it just bumps a pointer inside its own TLAB. Because each thread has exclusive access to the TLAB, this becomes a lock-free operation.

When a TLAB eventually fills up, the JVM grabs a new chunk from the shared heap and gives it to the thread, and the process repeats.

Probably something you'll rarely need to think about, but pretty cool nonetheless.
