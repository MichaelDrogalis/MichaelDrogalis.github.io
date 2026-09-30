---
title: "Ring buffers"
date: 2026-05-29
tags: ["data-structures"]
---

I wasn't taught this in Data Structures and Algorithms 101, but I wish I had. It's amazing for writing high-performance code. Meet the Ring Buffer.

![](/img/ring-buffer.png)

Many forms of software have at least two threads: one that produces input, and another that consumes output. You can use a plain old queue to coordinate these threads, but what if you want to go fast? That means you need:

- minimal locking and thread contention
- minimal object allocations
- minimal garbage collection

A Ring Buffer helps you write fast code by avoiding all three.

Also known as a Circular Buffer, this data structure is a fixed-size FIFO queue that curiously *wraps around itself*. It works like this:

1. You allocate a ring buffer of a specific size, often a power of 2. †

2. The ring buffer sets two pointers: the head (the slot you're reading from) and the tail (the next slot you can write to).

3. When the tail pointer reaches the end of the array, it wraps back on itself and goes back to the zero index. The ring buffer ensures the tail never catches the head.

It wasn't obvious to me at first, but ring buffers are fast because:

(a) The slots in the ring buffer are only allocated ONCE. When you write, you *mutate* the object in the slot. This keeps objection allocations and GC near zero.

(b) The backing array is stored in a contiguous block of memory, so it has "mechanical sympathy" for the underlying machine.

(c) For 1:1 producer/consumer scenarios, this can be implemented completely lock-free.

The big downside is that you need a very different mental model to work with a ring buffer, but the performance benefits are incredible.

† Array size is often constrained to a power of 2 so we can ditch the (relatively) expensive modulo function and instead use the much faster bitwise AND operation.
