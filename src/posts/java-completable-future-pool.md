---
title: "Java completable future pool"
date: 2026-07-16
tags: ["java"]
---

One Java program. Two computers. Completely different behavior on each. How?

![](/img/java-completable-future-pool.jpeg)

Deep inside my product, there is an ArrayBlockingQueue that holds data to be written to output connections like Postgres and S3.

And like other performance-minded products, I make these writes happen in parallel. Java Completable Future tasks draw from the queue and concurrently write the data.

During months of testing, everything looked great on my machine. But when one of my new customers used it, performance dropped like a rock.

What happened?

I learned that Java Completable Future tasks run on Java's ForkJoin common thread pool.

😮 Most critically, the ForkJoin thread pool is sized against the number of cores on your machine.

Because my machine had more cores than my customer's, the product worked fine when I used it. It was able to launch enough threads to concurrently perform all the work I expected.

But in my customer's environment, far fewer threads were launched, and a bunch of work stalled behind it.

The fix was simple: instead of relying on ForkJoin's threadpool, I invoked those Completable Future tasks with an explicitly created Cached Thread Pool.

Cached Thread Pools adapt their size dynamically so they work well in environments with fewer cores.

This is a great example of why you need to understand the underlying behavior of the APIs you're using.
