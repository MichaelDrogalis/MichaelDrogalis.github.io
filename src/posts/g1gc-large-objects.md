---
title: "G1GC and large objects"
date: 2026-05-23
tags: ["java"]
---

If you allocate huge objects in Java, you should know that G1GC, Java's default garbage collector, cleans them up completely differently.

![](/img/g1gc-large-objects.jpeg)

At a high level, there are only two things you need to know about Java garbage collection:

(1) when you allocate an object, Java puts it in memory on the heap

(2) when an object loses all its incoming pointers, its memory gets reclaimed

Simple, but remember that any time spent freeing objects from memory is time taken away from running your app. So figuring out how to collect garbage as fast as possible is important.

To be efficient, G1GC groups objects based on how old they are. These are called generations, and knowing which you're looking at is incredibly important for debugging memory leaks:

(a) eden generation: brand new objects

(b) s0 and s1 generations: objects that have survived a few GC cycles

(c) old generation: long-lived objects

By keeping similar-aged objects together, Java avoids fragmenting memory—which keeps performance fast.

💡 Now, on top of grouping by age, G1GC further subgroups objects onto contiguous memory blocks called regions.

These regions are what make G1GC different from older collectors.  

Instead of having a fixed young and old generation in memory, G1GC dynamically assigns regions based on how your app behaves.  

Most of the time, this works great—but there’s a catch.  

When you allocate a really big object (>= 50% of a region's size), G1GC doesn’t treat it like a normal object.  

🦣 Instead, it marks the region (or multiple contiguous regions) as "humongous"

That causes 3 important things to happen:

(a) humongous objects get directly placed into the old generation, skipping the normal aging process.

(b) humongous objects can't be moved between regions, so they cause immediate fragmentation.

(c) humongous objects need a full GC cycle to be freed, so their memory is freed relatively slowly.

A handful of garbage collection parameters that give you control over this process:

-XX:G1HeapRegionSize=&lt;size>

=> controls the size of each region

-XX:G1HeapWastePercent=&lt;n>

=> percentage of heap that can be wasted by humongous objects before a full GC is triggered
