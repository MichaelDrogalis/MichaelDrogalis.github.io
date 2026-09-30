---
title: "Reservoir sampling"
date: 2026-07-01
tags: ["data-structures", "algorithms"]
---

Pop quiz: how do you pick k random items from a data stream that may never end without knowing its size in advance or loading it all into memory?

Meet reservoir sampling.

![](/img/reservoir-sampling.jpeg)
  
Reservoir sampling is a type of algorithm for selecting a subset of items from a potentially infinite sequence.  
  
Besides using very little memory, what makes this technique cool is that each item has an EQUAL chance of being sampled.  
  
There are 1,001 use cases for reservoir sampling, but a couple of easy ones off the top of my head:  
  
- you have a huge SQL table and want 1,000 random rows without loading it all into memory  
  
- you want to display a few telemetry events from a distributed architecture  
  
💡 The algorithm is straightforward:  
  
- you make an array of size k representing the reservoir  
  
- the first k items of the stream are directly inserted into the reservoir  
  
- all subsequent items are added to the reservoir with probability k/n, where n is the index of the stream element  
  
That last step requires a little more explanation. For stream items with index > k, you:  
  
- pick a random number between 0 and n  
  
- if that number is < k, replace that spot in the reservoir with the new item  
  
- otherwise, discard it  
  
Each item is chosen with uniform probability, no matter how large the stream is. Yet it only uses O(k) memory.  
  
The diagram shown here uses a reservoir of size 3 and a stream with 7 items. The first 3 elements are automatically added to the reservoir, and subsequent items are sampled probabilistically.
