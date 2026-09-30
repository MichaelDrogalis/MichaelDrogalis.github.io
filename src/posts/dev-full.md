---
title: "/dev/full"
date: 2026-08-28
---

Most developers never test what happens to their code when the disk is full because they assume it will be complicated.  

![](/img/dev-full.jpg)

But it turns out that Linux makes this surprisingly simple.  

Meet `/dev/full`, a special file that ships with Linux distributions.  

It's special because on write, it always returns ENOSPC (no space left on device).  

(on read it returns an infinite stream of zero bytes)  

Because it's just a file, it's easy to swap into a test harness. Replace whatever files you were already interacting with and boom: easy chaos-style test.
