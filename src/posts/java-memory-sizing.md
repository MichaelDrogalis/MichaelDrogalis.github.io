---
title: "Java memory sizing"
date: 2026-07-30
tags: ["java"]
---

Did you know that since Java 10 †, the JVM will autodetect the OS's total available memory and dynamically size its memory accordingly? This works even in Docker!

![](/img/java-memory-sizing.jpeg)

Around this time last year, I noticed that ShadowTraffic's JVM was using only 2 gigabytes of memory, despite the container having 8 gigs.

What happened to the other 6 gigs?

At first, I thought I needed to set -Xmx to set the upper limit on how much memory the JVM would get. But then I learned why this was happening in the first place.

In modern Java, the JVM will automatically detect how much memory is available and default to 25% of that size. In my case, my Macbook Pro has 32 gigs of RAM, with 8 gigs dedicated to Docker.

Hence, 2 gigabytes in an 8 gig environment.

Additionally, instead of pinning a specific upper limit on the amount of memory the JVM gets, you want to use -XX:MaxRAMPercentage to allocate a PERCENTAGE of RAM. (And optionally its siblings, -XX:MinRAMPercentage and -XX:InitialRAMPercentage)

These configs are great because they make your app more portable.

Score another for modern Java.

† It was later backported to Java 8, too.
