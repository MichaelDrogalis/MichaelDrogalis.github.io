---
title: "Red black trees"
date: 2026-01-16
tags: ["data-structures"]
---

What data structure has fast (O(log n)) insert, lookup, and delete operations?  
  
Meet the Red-black Tree.

![](/img/red-black-trees.jpeg)
  
Red-black is a self-balancing binary search tree that backs Java's TreeMap and TreeSet data structures, among heaps of other things.  
  
I put off learning it for years, but it's not that complicated:  
  
- each node in the tree is red or black  
- the root is always black  
- red nodes can't have red children  
- every path from root to leaf must have the same number of black nodes  
- newly inserted nodes are always red  
- insertion and deletion may trigger color flips or rotations to maintain balance  
  
You get O(log n) for all operations because every path through the tree is guaranteed to have the same number of black nodes.  
  
Image shows a quick example inserting 6 nodes, recoloring and rotating the tree along the way.  
  
Clever!
