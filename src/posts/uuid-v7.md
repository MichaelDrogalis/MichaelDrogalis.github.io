---
title: "UUID v7"
date: 2026-10-02
tags: ["data-structures"]
---

What if your UUIDs could be both globally unique, yet sortable? Say hello to UUID v7.

Like previous versions, UUID v7 strings are made of 128 bits.

But instead of randomizing ALL the bits, UUID v7s are encoded differently:

- the first 48 bits are a timestamp
- the next 16 encode the "v7" version, plus a bit of randomness
- same with the next 16—they encode the RFC 4122 variant, plus some more randomness
- the final 48 bits are pure randomness

Let's step through an example.

The UUID 018d9b5c-4f84-7c96-8aaf-9f6a4b1c57f7 breaks down into four parts:

![](/img/uuidv7.jpeg)

(a) 018d9b5c-4f84 represents time
(b) 7c96 represents v7 and a random value
(c) 8aaf represents RFC 4122 and a random value
(d) 9f6a4b1c57f7 represents random bits

Now, when you can compare two UUIDs, the first 48 bits get decoded into timestamps to decide which was generated first.

🚧 But beware: you can't reliably compare timestamps across machines, so you can't use them to compare UUIDs generated in a distributed system.

(I learned about this when I wrote about ULIDs last year. Big thanks to everyone who pointed me to v7!)
