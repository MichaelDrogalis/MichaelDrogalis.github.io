---
title: "Skip lists"
date: 2026-07-28
tags: ["algorithms"]
---

Pop quiz: you need to quickly find an element in a sorted list of 1,000,000,000 items. A linked list only gives you O(n) search. Can you do better?

Meet the Skip List, which is best explained with an analogy.

Imagine you're driving through a city looking for a specific address. You have two driving options:

(a) local roads: stop at every house you want. Easy access to every address, but slow to traverse.

(b) highways: drive fast but only get off at major exits. You might overshoot your target and need to backtrack on local roads.

💡 Skip lists give you multiple "express lanes" over your data. Higher levels skip over larger chunks of data, letting you quickly zoom in on your target, then drop down to lower levels for fine-grained navigation.

![](/img/skip-list.jpeg)

For example, if you wanted to find the element 40 in the diagram, the express lanes let us skip from 16 → 24 → 33 → 38, then find 40 at the bottom.

Average big O characteristics:
- search: O(log n)
- insert: O(log n)
- remove: O(log n)
- space: O(n)

Skip lists are a probabilistic data structure and have a good amount of nuance about how the express lanes are constructed (more than I can write here) so if you're interested, go read up more!
