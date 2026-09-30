---
title: "Deterministic randomness"
date: 2026-09-01
tags: ["engineering"]
---

If you want to make your software 100x easier to debug, design it with deterministic randomness.

Almost every system you build has some form of randomness baked in:

- random IDs and UUIDs
- shuffling lists of results
- load balancing requests

That is all fine. But the problem is that it’s hard to get the same "random" behavior to happen again when you spot a bug.

The solution is to build your stack with deterministic randomness.

Haven’t heard of it? It’s what it sounds like.

Most random generators are not fully random, but pseudo-random. Pseudo-random generators (like java.util.Random) are driven off an internal state:

- when you ask for a random value, it looks at its internal state
- it uses that state to compute the next value and returns it
- it advances its internal state
- repeat

So when you ask Java's Random object for values and it gives you unpredictable results, it's because Random's *initial state* has been randomly set for you already. 

💡 If you want deterministic randomness, just set its initial state yourself. This is called setting the seed. 

Nothing explains this better than code, so just look at the screenshot and you'll see what I mean.

![](/img/deterministic-randomness.jpeg)

(But if you do this, take care to use deterministic randomness everywhere! Missing it in just one place will break determinism. In my product, I have an entire "random API" that proxies into a deterministic set of functions so I won't mess it up.)
