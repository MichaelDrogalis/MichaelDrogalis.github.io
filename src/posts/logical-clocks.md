---
title: "Logical clocks"
date: 2026-04-17
tags: ["algorithms"]
---

⏰ Logical clocks are one of the most interesting engineering concepts you can study.  

![](/img/logical-clocks.jpeg)

First of all, what are they?  

In a distributed system, you often need to tell whether one event happened before another.  

✋ "Can't you just use timestamps to do that?"  

Nope:  
- clocks can go backward  
- they can drift, too  
- clocks on multiple devices probably aren't synced to the millisecond  

Logical clocks are the answer to this puzzle. They use numbers instead of timestamps, and those numbers help you track causality.  

💡 Put differently, you can know who did what when.  

Let's have an example.  

Imagine a chat app where Alice and Bob are chatting. If Alice's clock is set to 1 week earlier than Bob's, how will the chat app know what order to show the messages?  

A Lamport clock—probably the simplest logical clock—solves this problem.  

(a) Before Alice and Bob start chatting, they initialize their local clocks to t=1.  

(b) Each time Alice sends a message, her logical clock increases by 1, and the value of the clock is sent with the message.  

(c) When Bob receives a message from Alice, his logical clock updates to max(bob's clock, alice's last message's clock) + 1  

The servers that receive and redirect these messages can use the values of t to preserve a partial ordering of the chat history, no matter what the wallclocks on Alice or Bob's machines read.  

--  

Surprisingly, ShadowTraffic uses logical clocks under the covers to guarantee deterministic randomness, even in the case of communicating with asynchronous systems.  

It was fun to implement and nudged me to write about this.
