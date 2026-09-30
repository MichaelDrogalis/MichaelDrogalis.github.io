---
title: "Java Optional"
date: 2026-09-23
tags: ["java"]
---

I have lots of nice things to say about Java, but NullPointerExceptions are not one of them. Fortunately in 2014, Java added a little construct that makes them a lot less likely. Meet Optional.

The problem it solves isn't hard to understand. You have an object. It's unset or accidentally set to null. You call a method on it. Wham. NullPointerException. No compile-time safety.

Being over 30 years old, Java can't exactly pivot its compiler guarantees on a dime. So in Java 8, the authors made a pragmatic design choice to improve null safety.

They introduced java.util.Optional, a utility class that helps you deliberately handle "absent value" at compile time.

It works like this:

1. When you return a value from a method, you wrap it in an Optional object.

2. Callers of your method need to "unwrap" the returned Optional to get the value.

3. Those "unwrap" methods give you different ways to handle absent values.

Compare the side-by-side examples in the image. On the right, there are null checks everywhere. And on the left? Much cleaner.

![](/img/java-optional.jpeg)

Because findUser returns an Optional, we can grab a (possibly absent!) user's email and pick it apart with no null checks. Line 23's `orElse` handles the absent case in just one spot.

Heads up that Optional isn't magic. It only works by convention through method signatures. If you simply call `get()` on an Optional and drill to its underlying value, you can still get an exception. That's a major reason it's recommended to only use Optional for method return values.
