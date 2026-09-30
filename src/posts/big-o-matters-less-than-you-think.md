---
title: "Big O matters less than you think"
date: 2026-08-08
---

One of the first things we learn in Computer Science is Big O analysis, but it turns out it matters less than you think. †  

The problem with Big O is that at first glance, it seems like it should tell you a lot of things it can't:  

1. Is algorithm A faster than B?  
2. Exactly how long will it take to complete algorithm C?  
3. Which of these two implementations of algorithm D should I ship?  

None of these are answers Big O can provide.  

Big O tells you exactly one thing: how an algorithm scales. If you give it 10x more input, does the work grow 10x, 100x, or hardly at all?  

By contrast, Big O doesn't know that:  

4. Not all operations cost the same. A function `f` counts as one, regardless of whether it's a disk seek, a network call, or an LLM completion.  

5. Not all data lives in the same place. Accessing the same array index can take 1 nanosecond or 100, depending on if it lives in an L1 cache or in main memory. Jeff Dean's famous Latency Numbers Everyone Should Know is helpful here.  

![](/img/latency-numbers.jpeg)

6. Processors can do more than one thing at a time. Big O assumes processors execute CPU instructions sequentially, but that hasn't been true since at least 1995.  

7. Nearly all machines are multi-core. Ditto to (3), but at one higher level of abstraction.  

8. `if` statements don't always cost the same. Modern CPUs use something called branch prediction to guess which way a conditional will go, then speculatively execute instead of waiting to evaluate. Sometimes it guesses wrong and has to start over.  

In other words, Big O can be great for a whiteboard analysis, but in practice you should always profile!  

† I mostly learned about this thanks to you guys!
