---
title: "Java Epsilon"
date: 2026-06-01
tags: ["java"]
---

A handy tool to have: since Java 11, the OpenJDK ships with a no-op garbage collector named Epsilon.

![](/img/java-epsilon.jpeg)

By contrast to every other type of garbage collector, Epsilon simply NEVER reclaims memory.

Why would you want that?

(1) You see how much total memory your app is consuming.

(2) You can get a sense of your app's true performance without GC pauses.

(3) Your app is guaranteed to exit quickly with minimal memory footprint.

Turn it on with: -XX:+UnlockExperimentalVMOptions -XX:+UseEpsilonGC
