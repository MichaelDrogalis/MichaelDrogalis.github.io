---
title: "Tail-call optimization"
date: 2026-09-04
---

Tail-call optimization is one of those programming features that once you learn it, you can't believe it's not in every language (it sadly still isn't in Java).

![](/img/tco.jpg)

If you haven't heard of it, here's the idea.

Many algorithms are easily understood in terms of recursion, but everyone knows what the problem with that is. Each recursive call consumes a new stack frame, so if you recurse too deep, you overflow the stack and run out of memory.

Tail-call optimization cleverly fixes this. It's a compile-time language feature that transforms recursive functions so that they reuse the current stack frame instead of adding new ones. That means you can recurse to unlimited depths without blowing the stack.

Notably, this only works if the recursive call is the last operation in the function. Otherwise it's impossible to reuse the current frame. But that usually isn't a problem.

Elixir and OCaml (I've heard) do this for you automatically. Scala and Clojure do it with hints (tailrec and recur, respectively).

I'd love it if it came to Java since it's something I've come to rely on. But it's been debated for many years and it hasn't happened yet. Maybe someday. 🤷
