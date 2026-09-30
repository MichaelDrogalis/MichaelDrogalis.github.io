---
title: "Java structured concurrency"
date: 2026-08-25
tags: ["java"]
---

Check out Java's new Structured Concurrency API. It eliminates an entire class of difficult concurrency bugs.

Structured Concurrency solves an age-old problem: you have a number of threads that all need to succeed or fail together. If any one of them fails, all of them must be cleaned up in a timely manner.

Before Structured Concurrency, you'd need to manage an ExecutorService yourself and carefully dereference/cancel each thread. This approach makes it extremely easy to leak resources!

Built on virtual threads, Structured Concurrency makes all of that automatic. You define a scope that owns the threads. The scope automatically cancels siblings on failure, meaning you don't have to write any kind of orchestration logic yourself.

In the screenshot, you can see how an isolated scope spins up two threads. The `fetchOrder` thread throws after 1 second. Almost immediately, `fetchUser` (which normally takes 10 seconds to complete) is cancelled—rather than waiting another 9 seconds.

![](/img/java-structured-concurrency.jpg)

Structured Concurrency is still in preview, so you need to compile with `javac --enable-preview`.
