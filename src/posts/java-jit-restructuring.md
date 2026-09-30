---
title: "Java JIT restructuring"
date: 2026-07-23
tags: ["java"]
---

Most people don't realize that when Java runs your code, it CONTINUOUSLY restructures it for optimal performance.

![](/img/java-jit.jpeg)

Oversimplifying a little, it works like this:
- Java first compiles your program into bytecode
- The JVM starts up and interprets the bytecode line by line
- As it runs, the JVM watches how your code behaves

After it's watched enough, something incredible happens.

When a piece of code becomes "hot" enough (invoked many times, used in a tight loop, etc), the JVM *dynamically* compiles it into native code specifically for your machine.

🔥 This is called Just-In-Time (JIT) compilation, and it's what makes modern Java fast.

Now, you might wonder: why not JIT compile everything at the start?

Because the JVM can make real-time decisions about how to restructure your code on the fly.
- it might inline a method
- or unroll a loop
- or even remove what it thinks are now dead-code paths

But those decisions are speculative. If the assumptions stop being true (say, a rarely used null check finally fires), Java will deoptimize the code—falling back to interpreted mode.

You can see the JIT at work in my screenshot. I turn on a few JVM flags that make Java log its optimization/deoptimization decisions.

(By the way, this is why JVM benchmarks need a warm-up phase. You’ll get misleading results if you don’t let JIT do its thing first.)
