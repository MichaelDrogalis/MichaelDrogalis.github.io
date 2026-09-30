---
title: "Java virtual threads"
date: 2026-09-04
tags: ["java"]
---

Java 21's virtual threads can do MILLIONS of concurrent blocking I/O operations, but how do they work?

![](/img/java-virtual-threads.jpg)

Let's start from the basics. Virtual threads solve the long-standing JVM problem of efficiently scaling concurrency. Traditional threads are heavy, and creating thousands of them can crush memory and CPU.

Virtual threads, by contrast, are lightweight and fully managed by the JVM, letting you run >1M concurrent tasks. The way they work is clever:

1. The JVM allocates a number of platform threads, each of which can run many virtual threads. Each platform thread is effectively an OS thread.

2. When code in a virtual thread needs to block — for example, calling InputStream/read() or Thread/sleep() — the JVM "parks" the virtual thread so another can take its place. Later, when the operation completes, the original virtual thread is "unparked" and resumes execution.  

But here’s the tricky bit: how does the JVM know when your code is blocked, and what does it really mean to "park" a virtual thread?

2. The JDK has a known, common set of blocking API calls (like Socket/read()).

3. When the JVM detects one of these calls in a virtual thread, it rewrites it with a non-blocking implementation, for example using Linux epoll.

4. Because the code is now effectively non-blocking, the JVM can save the virtual thread’s stack and local variables, freeing the platform thread to run other virtual threads.

5. Now when your original virtual thread "unblocks", the JVM can unpark it onto a platform thread as if nothing happened.

6. This is cool because it means a virtual thread can be moved across platform threads over the lifetime of your program.

This technique of rewriting blocking code to non-blocking is broadly known as "continuations", which underpin the concurrency primitives in languages like Kotlin and Go.
