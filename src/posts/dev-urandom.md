---
title: "/dev/urandom"
date: 2026-09-29
---

Did you know that Linux has a built-in random value firehose? It's called /dev/urandom †, and it turns your system's hardware noise into an infinite stream of randomized bytes.

![](/img/dev-urandom.jpg)

For starters, /dev/urandom is a file on your operating system. You can symbolically link it, cat it, and do anything else you would with a file.

But /dev/urandom is special. Unlike an ordinary file, it doesn't keep its contents on disk. When you read from it, the kernel runs code that produces random bytes on the fly.

How?

The kernel maintains a constantly refreshed entropy pool built from unpredictable hardware events such as:

- keyboard timings
- mouse movements
- disk activity timings
- interrupt timings
- hardware random generators

All that noise gets blended into a single pool, which the kernel uses to generate random bytes on demand.

In fact, even if you haven't heard of /dev/urandom before, you've surely used it. Nearly every language's "secure random generator" API ultimately reads from /dev/urandom.

I happened to bump into it while exploring how Antithesis works (it injects faults into your program, whose randomness is driven by a deterministic /dev/urandom look-alike).

† There's also its cousin /dev/random (no leading u), which may block when you read it. /dev/random used to provide stronger randomization, but most people now advise that /dev/urandom is nearly always an equally good choice.
