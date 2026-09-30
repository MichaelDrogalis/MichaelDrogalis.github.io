---
title: "Boyer-Moore majority vote"
date: 2026-07-13
tags: ["kafka", "algorithms", "data-structures"]
---

An algorithm every Kafka engineer should learn: the Boyer-Moore Majority Vote.

![](/img/boyer-moore.jpeg)

Boyer-Moore is an algorithm for finding the majority element in a sequence (an element that appears more than half the time) using only O(1) memory.

Let me explain how it works by starting with a naive implementation.

Imagine you have a stream of elements marked as A, B, or C.

If you want to find the majority element, you could simply:

- look at each element in the sequence
- maintain a table of ID -> count, adding one for each element
- stop at any given moment and look for the row with the max count

For example, if you had the stream: (A, B, B, C, A, B, A, A, C, A, A, A)

Your final table would show that A is the majority element, with counts:

- A: 7
- B: 3
- C: 2

That works great for simple cases, but what if you have a very large number of unique elements?

That's where Boyer-Moore comes in. The algorithm has only two steps.

First, you start with a count = 0 and no candidate.

Second, for each element:

- If count = 0, set the current element as the candidate
- If the current element equals the candidate, increment the count
- Otherwise, decrement the count

This algorithm works because it recognizes that matching elements "cancel" each other, and all you need to do is maintain is the delta of the leader.

When you use Boyer-Moore on the same sequence, it finds that A is the majority element and uses only O(1) memory to do it.

As a heads up, the big limitation with this algorithm is that a majority element MUST exist. If it doesn't, you need to rescan the stream for the most populous element.

Pretty neat if you ask me!
