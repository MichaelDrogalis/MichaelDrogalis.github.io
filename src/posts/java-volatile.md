---
title: "Java volatile"
date: 2026-08-13
tags: ["java"]
linkedinUrl: "https://www.linkedin.com/posts/michael-drogalis_ive-been-programming-in-java-for-almost-activity-7493679020778356736-WYuf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAUGbcwBZbA4h4mQ87Q1CJ7-OofEFu7l7Uk"
---

I've been programming in Java for almost 20 years. I finally decided to learn what the heck the "volatile" keyword actually does.  
  
Here's the key thing: when multiple threads can access a variable, updating it doesn't mean all the threads immediately see the change.  
  
Each core in your machine has a cache, and the compiler is free to reorder your code and stash values in registers to optimize reads. That means it's possible for a write to sit in a buffer (not yet visible to anyone) while another thread reads a stale copy. It also means that a write may never be observed! (if it was hoisted, for example)  
  
Escaping that behavior is what volatile is for. Marking a variable as volatile forces every write to be published to main memory. It also forces every read to fetch the current value, instead of using a copy stashed in a register.  
  
The classic use case is a flag that stops a threaded loop. Without volatile, a thread spinning on while (!stopped) might never exit.
