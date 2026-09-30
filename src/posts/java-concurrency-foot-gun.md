---
title: "Java concurrency pitfalls"
date: 2026-04-30
tags: ["java"]
---

☠️ A lot of developers disagree with me, but I think that Java's default concurrency APIs make it really easy to crash your program.

It's surprisingly simple.

If you want to offload some tasks from your main thread, you'll probably want to use a Thread Pool Executor. You give tasks to the thread pool, and it figures out how to execute them in parallel in the background.

As it turns out, there are a bunch of different kinds of thread pools: single thread pool, fixed thread pool, scheduled thread pool, and so on.

Each of these has different semantics, but they all have one thing in common: when ALL of their workers are busy and more tasks arrive, they queue up the tasks to run later.

😵 Herein lies the problem: some thread pools, like fixed threadpool, have NO upper bound on their queue sizes.

So if your tasks take a long time to complete and you hammer it with tasks—blammo. Your Java program will eventually OOM.

Fortunately, the fix is easy.

When you create a threadpool, use an explicit constructor to set a limit on the queue size AND a backpressure policy (what to do if the limit is hit). Screenshot shows how this works—top buffer is bad, bottom is good.

![](/img/java-concurrency-gotcha.jpeg)

I forgot to do this in one tiny place in my product, and boom!

Terrible out-of-the-box defaults from Java.
