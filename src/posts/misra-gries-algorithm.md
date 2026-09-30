---
title: "Misra-Gries algorithm"
date: 2026-04-21
tags: ["algorithms"]
---

If you work with Kafka, you should learn the Misra-Gries algorithm—better known by its informal names top K and heavy hitters.  

Misra-Gries is an algorithm for finding the most frequently occurring K elements in a stream using only O(k) memory.  

It's delightfully simple. It maintains a map of K counters and processes each element like so:  

1. If the element already has a counter, increment that counter  

2. If the element doesn't yet have a counter and there's an open slot, create a new counter and set it to 1  

3. If all slots are full, decrement all counters by 1 and evict any counters that reach 0  

Let's see it in action.  

💡 Imagine you had a stream (A, B, C, D, A, B, E, A, B, C, C, A):  

![](/img/heavy-hitters.png)

- A get inserted  
- B gets inserted  
- C gets inserted  
- D can't find a slot, so all counters decrement by 1 and are evicted  
- A gets inserted  
- B gets inserted  
- E gets inserted  
- A gets incremented  
- B gets incremented  
- C can't find a slot, so all counters decrement and E gets evicted  
- C gets inserted  
- A gets incremented  

The ending map has the most frequently occurring elements: A=2, B=1, C=1, using only 3 keys in memory.  

(If you follow me, you might remember that I wrote about the Boyer-Moore algorithm a few months ago. This is a generalization of that algorithm!)
