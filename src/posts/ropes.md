---
title: "Ropes"
date: 2026-05-08
tags: ["data-structures"]
---

Pop quiz: you're building a text editor and need to pick a data structure to represent the text. What do you choose?

![](/img/rope.png)

If you said "string", keep reading.

String is the obvious choice for representing a character array, but the way it's stored (a contiguous block of memory) is terrible for mutable performance if the length is long.

Just look at its big O characteristics:

- concatenation: O(n + m)
- insertion: O(n)
- deletion: O(n)
- substring: O(m)

(n = original string length, m = new string length)

A text editor that models file content as strings would be SUPER slow for even moderately sized files.

This is what ropes are for.

Instead of storing the entire string as a block of memory, a rope represents the string as a balanced binary tree where leaves contain short substrings and parent nodes contain the summed lengths of the *left* subtree.

⚡ Balanced binary trees are MUCH faster for mutability:

- concatenation: O(log n + log m)
- insertion: O(log n)
- deletion: O(log n)
- substring: O(log n + log m)

By storing left-subtree substring lengths, ropes can efficiently seek around the tree and mostly get log n performance.

And that's why your editor responds quickly when you modify the middle of a 50 megabyte file.
