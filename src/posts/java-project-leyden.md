---
title: "Java Project Leyden"
date: 2026-06-02
tags: ["java"]
---

So cool. Java is getting faster again. This week I learned about Project Leyden, an initiative to make Java programs fast from the very moment they launch.

![](/img/java-leyden.jpeg)

When we talk about Java being fast, what we mostly mean is that it becomes fast *over time*: Java's Just In Time (JIT) compiler studies your code at RUNTIME and dynamically rewrites it for higher performance.

😵 But the fact is, Java launch times are still slow, and it takes the JIT several minutes before it optimizes your code.

So what can be done to make your Java program fast from t=0 ?

Project Leyden is a series of features that let you shift optimization from production time to development time. In particular:

(1) You can launch a "training run" of your application so the JVM can study how to rapidly load your program and optimize it.

(2) The JVM spits out a CDS (class data sharing) file that saves what it learned during training.

(3) When you run in production, you give the JVM your CDS, and your app starts from a hot state.

I'm simplifying quite a lot, but it's an exciting gap for the JVM to fill.
