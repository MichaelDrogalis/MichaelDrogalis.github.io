---
title: "Rate limiting algorithms"
date: 2026-08-21
tags: ["data-structures", "algorithms"]
---

Rate limiting algorithms, explained.

![](/img/rate-limiting.png)

Rate limiting is a fancy way of controlling how often something happens.

- "Allow no more than 5,000 requests/second"
- "At most, 100 gigabytes of data can be written per hour to the file system"

Broadly speaking, rate limiting algorithms come in two flavors: leaky bucket and token bucket.

Why two algorithms and not one? Because they have different trade-offs. Let me explain each.

(1) First, leaky bucket

Imagine that a bucket fills up with water and drains at a constant rate from a hole at the bottom. If the bucket overflows, water stops pouring in.

- the data is the water
- the producer of the data is the pourer
- the consumer of the data is what "catches" the dripping water

You control the rate limiting by how fast the metaphorical water pours and drains.

(2) Second, token bucket

Now, imagine another bucket that gets filled with tokens. When a function wants permission to do something, it needs to grab a token out of the bucket. If the bucket overflows, no new tokens get added. If the bucket is empty, the function can't execute.

- the bandwidth is the tokens
- the rate of action is the producer of the tokens
- the executor of action is the requestor of tokens

You control the rate limiting by how fast new tokens are added to the bucket.

--

If they sound similar, read it again slowly. There is the fundamental trade-off:

(a) Leaky bucket only allows actions at a consistent speed—no bursting—because the bucket drips at a fixed rate.

(b) Token bucket allows bursting because the executor function can take tokens as fast as it wants.

That makes leaky bucket ideal for things like data transfer and token bucket ideal for things like API requests.

--

I had a lot of fun using these to implement ShadowTraffic's "throughput" primitive a couple of months ago. You specify how fast to generate data in terms of events/second, and ShadowTraffic rate limits it to the right speed.
