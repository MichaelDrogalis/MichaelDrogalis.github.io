---
title: "Kafka queues"
tags: ["kafka"]
date: 2026-09-15
---

Kafka's new Queueing feature (4.2.0) is arguably the biggest change to the Kafka Consumer API since 0.9!

![](/img/kafka-queues.jpeg)

Kafka consumers have long suffered from something called the Head of Line Blocking problem. Because each Kafka partition can only be processed by one consumer per group, the slowest consumer inadvertently blocks maximum progress.

Kafka Queues solve this problem, and its implementation is delightfully clever.

Instead of instantiating a new `KafkaConsumer`, you can now instantiate a `KafkaShareConsumer` instead. `KafkaShareConsumer` allows MULTIPLE consumers to read from the same partition, side-stepping Head of Line Blocking.

After processing each event, you can explicitly `acknowledge()` its completion (the brokers keep track of which consumers are holding each event).

Queues were marked Production Ready in 4.2.0. Super impressed with how clean the new API is.
