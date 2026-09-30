---
title: "Gossip algorithms"
date: 2026-04-25
tags: ["algorithms"]
---

Gossip algorithms: you haven't heard about them? Ask your friends. 😆

![](/img/gossip.jpeg)

Nodes in a distributed system, like a database, need to agree on things like:

- who is part of the cluster?
- what nodes have failed?
- what is the current state of each replica?

Oversimplifying a little, there are 3 ways to keep a distributed system in sync:

(1) Use a central coordination service: easy to think about, but doesn't scale when the distributed system gets very big.

(2) Make every node talk to every other node: again, simple, but n^2 connections doesn't scale.

(3) Gossip.

A gossip algorithm is what it sounds like: each node picks a small subset of peers in the network and tells them about what it currently believes to be true.

When every node does the same thing, messages can be rapidly synced across the entire distributed system with relatively few open connections.

⚡ How rapidly?

Let’s say each node gossips to just k random peers per round (k = 1-3 is typical). The time it takes for a message to reach all nodes in the network is roughly O(log N).

😮 That means a message can reach 1,000 nodes in about 10 rounds of gossip, and 1 million nodes in just 20 rounds.

Compare that to making n^2 connections or relying on a single coordinator to notify every node, and you can see why it's so useful.

I left out a ton of detail to keep this post manageably short, but if you've got a question, ask and I'll try to answer concisely!
